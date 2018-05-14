<template>
  <div>
    <!--<el-progress type="circle" :percentage="80" width="160"></el-progress>-->
    <!--<el-progress type="circle" :percentage="25" width="160"></el-progress>-->

    <!--<el-progress type="circle" :percentage="100" width="160" ></el-progress>-->
    <!--<el-progress type="circle" :percentage="50"  width="160"></el-progress>-->
    <!--<el-progress type="circle" :percentage="25" width="160"></el-progress>-->
    <div id="myChart" :style="{width: '500px', height: '300px'}"></div>
    <div id="myChart1" :style="{width: '500px', height: '300px'}"></div>
    <div id="myChart2" :style="{width: '500px', height: '300px'}"></div>

  </div>
</template>

<script>
    import echarts from 'echarts'
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
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart.setOption({
          title: { text: '仓库容量总分布' },
          tooltip: {},
          xAxis: {
            data: ["手机","电脑","耳机","音响","智能佩戴","相机"]
          },
          yAxis: {},
          series: [{
            name: '仓存量',
            type: 'bar',
            data: [5, 20, 36, 80, 10, 20]
          }]
        });
        myChart1.setOption({
          title: { text: '仓库剩余容量分布' },
          tooltip: {},
          xAxis: {
            data: ["仓库1","仓库2","仓库3","仓库4","仓库5"]
          },
          yAxis: {},
          series: [{
            name: '仓存剩余量',
            type: 'bar',
            data: [5, 20, 36, 80, 10]
          }]
        });

        myChart2.setOption({

          title: {
            text: '使用率'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data:['仓库1','仓库2','仓库3','仓库4','仓库5']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['一月','二月','三月','四月','五月','六月','七月']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'仓库1',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[12, 13, 10, 13, 9, 23, 21]
            },
            {
              name:'仓库2',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[22, 18, 19, 23, 29, 33, 31]
            },
            {
              name:'仓库3',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[15, 23, 20, 15, 19, 33, 41]
            },
            {
              name:'仓库4',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[32, 33, 30, 33, 39, 33, 32]
            },
            {
              name:'仓库5',
              type:'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {normal: {}},
              data:[82, 93, 90, 93, 129, 133, 132]
            }
          ]

        });

      }
    }

  }
</script>


<style scoped>
div{
  float: left;
}
</style>
