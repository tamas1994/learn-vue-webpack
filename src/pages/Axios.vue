<template>
  <div>
    这是{{page}}页面
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        page: 'axios'
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      // 获取短评数据
      fetchData()  {
        axios.get('https://api.sportstory.cn/activity/pubdetail?activityId=75')
          .then(response => {
            console.log(response.data.data.city);

          })
          .catch(error => {
            console.log(error);
          });
      }
    },


  }
</script>
