<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="商品名称">
      <el-input v-model="form.goodname"></el-input>
    </el-form-item>
    <el-form-item label="入库编号">
      <el-input v-model="form.goodsID"></el-input>
    </el-form-item>
    <el-form-item label="入库数量">
      <el-input v-model="form.goodsNumber"></el-input>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">&nbsp</el-col>
      <el-col :span="11">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="入库价格">
      <el-input v-model="form.goodsPrice"></el-input>
    </el-form-item>
    <el-form-item label="保管人">
      <el-input v-model="form.custodian"></el-input>
    </el-form-item>
    <el-form-item label="提货人">
      <el-input v-model="form.consignee"></el-input>
    </el-form-item>


    <el-form-item>
      <el-button  @click="onSubmit"> <p type="text" @click="open2">立即出库</p></el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
            goodname:'',
          goodsID: '',
          goodsNumber: '',
          date1: '',
          date2: '',
          goodsPrice:'',
          custodian: '',
          consignee: '',

        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      open2() {
        this.$confirm('此操作执行出库处理, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '出库成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消出库'
          });
        });
      }
    }
  }
</script>


<style scoped>

</style>
