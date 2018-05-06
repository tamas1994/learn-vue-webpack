<template>
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
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
  import ElHeader from "../../node_modules/element-ui/packages/header/src/main";
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
      }
    }
  }
</script>
