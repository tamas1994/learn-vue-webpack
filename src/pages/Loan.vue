<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="金额">
        <el-input v-model="form.amount"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import ElHeader from "../../node_modules/element-ui/packages/header/src/main";
  import axios from 'axios';
  export default {
    components: {ElHeader},
    data() {
      return {
        form: {
          name: '',
          tel: '',
          amount: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        console.log("name:"+this.form.name+"    tel:"+this.form.tel+"    amount:"+this.form.amount);
        this.addClient();
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      addClient()  {
        console.log("准备发送post请求啦");
        axios.post('http://localhost:9999/client/single',this.form)
          .then(response => {
            console.log(response.data);
            if (response.data.status==1){
                console.log("状态码为1");
              this.$router.push("/result")
            }else{
              console.log("状态码不为1");
            }

          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
</script>
