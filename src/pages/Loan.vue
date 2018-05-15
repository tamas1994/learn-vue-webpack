<template>



  <div>

    <h3>资金周转流不开？不要急，帮你解决！</h3>

    <h6>信贷：按揭房、按揭车、保单可贷</h6>
    <h6>抵押：全国房产、车可抵押</h6>
    <h6>信用卡：办理各大银行大额信用卡，送pos机</h6>

    <h4>请留下您的信息，方便我们与您更好地联系</h4>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="*姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="*手机">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label=" 金额">
        <el-input v-model="form.amount" placeholder="元 RMB"></el-input>
      </el-form-item>
      <el-form-item>
          <el-checkbox v-model="isUserContractChecked">我已阅读</el-checkbox>
          <span @click="showUserContract">用户须知</span>
      </el-form-item>


      <el-form-item>
        <el-button v-if="isUserContractChecked" type="primary" @click="onSubmit">提交</el-button>
        <el-button v-else disabled="true" type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import ElHeader from "../../node_modules/element-ui/packages/header/src/main";
  import axios from 'axios';
  import ElRow from "element-ui/packages/row/src/row";

  import Message from '../../node_modules/element-ui/packages/message';
  import MessageBox from '../../node_modules/element-ui/packages/message-box';

  export default {
    data() {
      return {
        isUserContractChecked: false,
        form: {
          name: '',
          tel: '',
          amount: ''
        }
      }
    },
    methods: {

      showUserContract(){
        MessageBox.alert("尊敬的用户您好，以上信息一旦被提交，对方将会显示您已将信息授权显示给对方。我们承诺您的上述信息仅用于本次业务咨询。","用户须知");
      },
      onSubmit() {
          if (this.form.name=="" ){
              //this.$warn("请输入姓名");
              Message.warning("请输入姓名");
              return false;
          }else if (this.form.tel==""){
            //this.$warn("请输入手机号");
            Message.warning("请输入手机号");
            return false;
          }else{
            this.addClient();
          }

      },
      addClient()  {
        console.log("准备发送post请求啦");
        axios.post('http://39.105.49.185/loan/client/single',this.form)
          .then(response => {
            console.log(response.data);
            if (response.data.status==1){
                console.log("状态码为1");
              this.$router.push("/result");
            }else{
              console.log("状态码不为1");
            }

          })
          .catch(error => {
            console.log(error);
          });
      },

    },
    beforeCreate: function () {
      console.group('mounted 挂载结束状态===============》');
      document.title='填写个人信息';
    }
  }
</script>
