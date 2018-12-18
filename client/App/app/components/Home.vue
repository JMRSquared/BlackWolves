<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label fontSize="25%" :text="'mdi-menu' | fonticon" class="mdi" @tap="$refs.drawer.nativeView.showDrawer()" col="0" />
                <Label verticalAlignment="center" class="title" text="Welcome to BlackWolves!" col="1" />
            </GridLayout>
        </ActionBar>
    
        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#F7F7F7">
                <GridLayout  class="drawer-header" rows="auto,auto">
                    <Image row="0" width="80" textAlignment="right" height="auto" backgroundColor="#F7F7F7" stretch="aspectFill" borderRadius="50%" src="https://robohash.org/joe" />
                    <StackLayout row="1">
                        <Label fontSize="15" class="font-weight-bold" text="Sirwali Joseph" />
                        <Label fontSize="13" text="mulavhe@gmail.com" />
                    </StackLayout>
                </GridLayout>
           
                <GridLayout class="m-y-10" v-for="(option,i) in options" :key="i" rows="auto,auto,auto" columns="auto,*">
                    <Label row="0" rowSpan="2" fontSize="30%" verticalAlignment="center" textAlignment="center" class="mdi m-x-10" :text="'mdi-' + option.icon | fonticon" />
                    <Label row="0" col="1" fontSize="15" class="font-weight-bold" :text="option.title" />
                    <Label row="1" col="1" fontSize="13" :text="option.description" />
                    <StackLayout class="b-50-black" row="2" colSpan="2"></StackLayout>
                </GridLayout>
            </StackLayout>
    
            <GridLayout ~mainContent columns="*" rows="*,*">
                <Label class="message" text="Hellow world" col="0" row="0" />
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script>
export default {
  data() {
    return {
      options:[{
          title:"Plumber",
          description:"A person that deals with pipes",
          icon:"toilet"
      },{
          title:"Carpenter",
          description:"A person that deals with wood",
          icon:"sofa"
      },{
          title:"Welder",
          description:"A person that deals with steal",
          icon:"worker"
      },{
          title:"Electrician",
          description:"A person that deals with electricity",
          icon:"power-plug"
      }]
    };
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #2f2f2f;
  color: #f7f7f7;
}

.title {
  text-align: left;
  padding-left: 16;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.drawer-header {
  padding: 30 16 16 16;
  margin-bottom: 16;
  background-color: #010202;
  color: #f7f7f7;
}

.drawer-item {
  padding: 8 16;
  color: #2f2f2f;
  font-size: 16;
}

.b-50-black{
    height:2px;
    margin: 20px;
    background-color:#010202;
}
</style>
