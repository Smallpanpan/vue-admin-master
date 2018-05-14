<template>
  <div>
    <!--<el-progress type="circle" :percentage="80" width="160"></el-progress>-->
    <!--<el-progress type="circle" :percentage="25" width="160"></el-progress>-->

    <!--<el-progress type="circle" :percentage="100" width="160" ></el-progress>-->
    <!--<el-progress type="circle" :percentage="50"  width="160"></el-progress>-->
    <!--<el-progress type="circle" :percentage="25" width="160"></el-progress>-->
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>

  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }

  }
</script>


<style scoped>

</style>
