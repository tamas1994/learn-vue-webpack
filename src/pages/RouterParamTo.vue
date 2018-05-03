<template>
  <div>
    这是{{page}}页面
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        page: 'router-param-to'
      }
    },
    created: function () {
      console.log('created 创建完毕状态===============》');
      console.log(this.$route.params.param1);
      this.page="router-param-to  收到的参数是："+this.$route.params.param1;
    }
  }
</script>
