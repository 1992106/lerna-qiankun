<template>
  <a-layout class="my-layout">
    <a-layout-sider breakpoint="lg" collapsed-width="0">
      <div><img alt="Vue logo" src="../assets/logo.png" /></div>
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="['/']"
        @click="handleClick"
      >
        <a-menu-item key="/">
          <a-icon type="user" />
          <span class="nav-text">hello world</span>
        </a-menu-item>
        <a-menu-item key="/vue/micro-app">
          <a-icon type="user" />
          <span class="nav-text">vue micro app</span>
        </a-menu-item>
        <a-menu-item key="/react/micro-app">
          <a-icon type="video-camera" />
          <span class="nav-text">react micro app</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "Layout",
  methods: {
    handleClick($event) {
      this.$router.push({ path: $event.key });
      console.log($event, 999);
    },
  },
};
</script>
