<template>
  <div>
    <a href="/loan/client/down/1"  target="_blank" >最近1天Excel</a>

    <br/>

    <a href="/loan/client/down/3"  target="_blank" >最近3天Excel</a>

    <br/>

    <a href="/loan/client/down/7"  target="_blank" >最近7天Excel</a>

    <br/>

    <a href="/loan/client/down/15"  target="_blank" >最近15天Excel</a>

    <br/>

    <a href="/loan/client/down/30"  target="_blank" >最近30天Excel</a>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        page: 'manage'
      }
    },
    beforeCreate: function () {
      document.title='下载最近客户信息Excel';
    }
  }
</script>
