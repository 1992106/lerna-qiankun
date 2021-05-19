<template>
  <!--微应用入口， TODO: 必须与qiankun的RegistrableApp中container一样-->
  <div id="micro-page"></div>
</template>

<script>
import microAppRegister from "@/registerMicroApps";

export default {
  name: "MicroPage",
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      // 启动微应用
      microAppRegister();
    }
  },
};
</script>
