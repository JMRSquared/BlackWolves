<template>
  <Page>
    <Label class="drawer-header" text="Drawer" />
  
    <Label class="drawer-item" text="Item 1" />
    <Label class="drawer-item" text="Item 2" />
    <Label class="drawer-item" text="Item 3" />
    <Label class="message" :text="msg"/>
     <label verticalAlignment="center" textAlignment="center" class="mdi m-10" fontSize="25%" :text="'mdi-vote' | fonticon"></label>
             
  </Page>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
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
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: #53ba82;
  color: #ffffff;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
}
</style>
