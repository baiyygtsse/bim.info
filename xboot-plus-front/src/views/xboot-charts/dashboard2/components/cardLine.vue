<template>
  <div>
    <Card class="card-line">
      <div class="card-header">
        <span class="title">订单统计</span>
        <Dropdown trigger="click">
          <Icon type="ios-more" size="22" style="cursor: pointer" />
          <DropdownMenu slot="list">
            <DropdownItem>查看详情</DropdownItem>
            <DropdownItem>更多操作</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div class="value">
        <countUp id="dashboard2-3" :endVal="65560" countSize="30px" countWeight="400"/>
      </div>
      <apexchart type="bar" height="45" :options="chartOptions" :series="series" />
      <div class="today">
        <span class="t">今日订单量</span>
        <span class="v">234</span>
      </div>
    </Card>
  </div>
</template>

<script>
import countUp from "@/views/my-components/widget/countUp.vue";
var zh = require("../../../../libs/zh.json");
export default {
  name: "cardLine",
  components: {
    countUp
  },
  props: {},
  data() {
    return {
      series: [
        {
          name: "",
          data: []
        }
      ],
      chartOptions: {
        colors: ["#47a1ff"],
        chart: {
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          locales: [zh],
          defaultLocale: "zh"
        },
        fill: {
          opacity: 1,
          type: "solid"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0,
          curve: "smooth"
        },
        labels: [...Array(17).keys()].map(n => `2019-11-${n + 1}`),
        yaxis: {
          min: 0
        },
        xaxis: {
          type: "datetime"
        },
        tooltip: {
          enabled: true,
          x: {
            show: true,
            format: "MMM dd日"
          }
        }
      }
    };
  },
  methods: {
    init() {
      this.series = [
        {
          name: "销售额",
          data: [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
        }
      ];
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="less" scoped>
.card-line {
  height: 182px;
  .card-header {
    display: flex;
    height: 22px;
    align-items: center;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.45);
  }
  .value {
    height: 38px;
    margin-top: 4px;
    margin-bottom: 6px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-size: 30px;
    line-height: 38px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .today {
    margin-top: 8px;
    padding-top: 9px;
    border-top: 1px solid #e8e8e8;
    .v {
      margin-left: 8px;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
</style>