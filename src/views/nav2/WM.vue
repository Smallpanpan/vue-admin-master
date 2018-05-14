<template>
  <div class="hello">
<!--二级导航-->
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="Nav1.vue">仓库总货架</el-menu-item>
        <el-submenu index="Nav2.vue">
          <template slot="title">按分类</template>
          <el-menu-item index="Nav2.vue">手机</el-menu-item>
          <el-menu-item index="Nav2-1.vue">笔记本</el-menu-item>
          <el-menu-item index="Nav2-2.vue">其他</el-menu-item>

        </el-submenu>
        <el-menu-item index="Nav3.vue">最近使用</el-menu-item>
      </el-menu>
<!--内容显示-->
    <el-table
      :data="tableData5"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="仓库编号:">
              <span>{{ props.row.warehouseID }}</span>
            </el-form-item>
            <el-form-item label="仓库负责人:">
              <span>{{ props.row.warehouseCharge }}</span>
            </el-form-item>
            <el-form-item label="仓库类型:">
              <span>{{ props.row.warehouseType }}</span>
            </el-form-item>
            <el-form-item label="仓库数量:">
              <span>{{ props.row.warehouseNumber }}</span>
            </el-form-item>
            <el-form-item label="剩余空间:">
              <span>{{ props.row.residualSpace }}</span>
            </el-form-item>
            <el-form-item label="租赁空间:">
              <span>{{ props.row.rentUse }}</span>
            </el-form-item>
            <el-form-item label="10333:">
              <span>{{ props.row.shopId}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="仓库编号"
        prop="warehouseID">
      </el-table-column>
      <el-table-column
        label="仓库负责人"
        prop="warehouseCharge">
      </el-table-column>
      <el-table-column
        label="仓库类型"
        prop="warehouseType">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <!--翻页-->



      <div class="block">

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>


  </div>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        tableData5: [{
          warehouseID: '仓库编号',
          warehouseCharge: '仓库负责人',
          warehouseType: '仓库类型',
          warehouseNumber: '仓库数量',
          residualSpace: '剩余空间',
          rentUse: '租赁空间',
          shopId: '10333'
        }, {
          warehouseID: '仓库编号',
          warehouseCharge: '仓库负责人',
          warehouseType: '仓库类型',
          warehouseNumber: '仓库数量',
          residualSpace: '剩余空间',
          rentUse: '租赁空间',
          shopId: '10333'
        }, {
          warehouseID: '仓库编号',
          warehouseCharge: '仓库负责人',
          warehouseType: '仓库类型',
          warehouseNumber: '仓库数量',
          residualSpace: '剩余空间',
          rentUse: '租赁空间',
          shopId: '10333'
        }, {
          warehouseID: '仓库编号',
          warehouseCharge: '仓库负责人',
          warehouseType: '仓库类型',
          warehouseNumber: '仓库数量',
          residualSpace: '剩余空间',
          rentUse: '租赁空间',
          shopId: '10333'
        }]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>


<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>







