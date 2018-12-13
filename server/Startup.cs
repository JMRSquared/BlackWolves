using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerUI;
using BlackWolves.MicroServices.Users;
using BlackWolves.Repository;

namespace BlackWolves {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {

            //Add PostgreSQL support
            services.AddEntityFrameworkNpgsql ()
                .AddDbContext<CustomersDbContext> (options =>
                    options.UseNpgsql (Configuration["Data:DbContext:CustomersConnectionString"]))
                .AddDbContext<UsersDbContext> (options =>
                    options.UseNpgsql (Configuration["Data:DbContext:UsersConnectionString"]));

            services.AddMvc ();

            // Add our PostgreSQL Repositories (scoped to each request)
            services.AddScoped<ICustomersRepository, CustomersRepository> ();
            services.AddScoped<IUsersRepository, UsersRepository> ();

            //Transient: Created each time they're needed
            services.AddTransient<CustomersDbSeeder> ();
            services.AddTransient<UsersDbSeeder> ();

            services.AddSwaggerGen (options => {
                options.SwaggerDoc ("v1", new Info {
                    Version = "v1",
                        Title = "Application API",
                        Description = "Application Documentation",
                        TermsOfService = "None",
                        Contact = new Contact { Name = "Author", Url = "" },
                        License = new License { Name = "MIT", Url = "https://en.wikipedia.org/wiki/MIT_License" }
                });

                // Add XML comment document by uncommenting the following
                // var filePath = Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "MyApi.xml");
                // options.IncludeXmlComments(filePath);

            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env, CustomersDbSeeder customersDbSeeder, UsersDbSeeder usersDbSeeder) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            } else {
                app.UseExceptionHandler ("/Home/Error");
            }

            // Serve /node_modules as a separate root (for packages that use other npm modules client side)
            // app.UseFileServer(new FileServerOptions()
            // {
            //     // Set root of file server
            //     FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "node_modules")),
            //     RequestPath = "/node_modules", 
            //     EnableDirectoryBrowsing = false
            // });

            app.UseStaticFiles ();

            // Enable middleware to serve generated Swagger as a JSON endpoint
            app.UseSwagger ();

            // Enable middleware to serve swagger-ui assets (HTML, JS, CSS etc.)
            // Visit http://localhost:5000/swagger
            app.UseSwaggerUI (c => {
                c.SwaggerEndpoint ("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseMvc (routes => {
                routes.MapRoute (
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                //https://github.com/aspnet/JavaScriptServices/blob/dev/samples/angular/MusicStore/Startup.cs
                routes.MapSpaFallbackRoute ("spa-fallback", new { controller = "Customers", action = "Index" });

                // routes.MapRoute(
                //     name: "spa-fallback",
                //     template: "{*anything}",
                //     defaults: new { controller="Customers", action="Index" });
            });

            customersDbSeeder.SeedAsync (app.ApplicationServices).Wait ();
            usersDbSeeder.SeedAsync (app.ApplicationServices).Wait ();

        }

    }
}