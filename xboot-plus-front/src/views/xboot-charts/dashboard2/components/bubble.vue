<template>
  <div class="card-bubble">
    <Card>
      <p slot="title" class="card-title">订单分析</p>
      <div slot="extra">
        <DatePicker
          type="year"
          placeholder="选择查看的年份"
          style="width: 220px"
        ></DatePicker>
      </div>
      <div class="wrap">
        <div class="chart">
          <apexchart
            type="bubble"
            height="380"
            :options="chartOptions"
            :series="series"
          />
        </div>
        <Row class="row">
          <Col span="8" class="text">
            <h6 class>距离目标</h6>
            <h3>
              <Icon type="ios-arrow-round-up" size="28" color="#23b397" />645
            </h3>
          </Col>
          <Col span="8" class="text">
            <h6 class>同比上周</h6>
            <h3>
              <Icon type="ios-arrow-round-down" size="28" color="#f0643b" />289
            </h3>
          </Col>
          <Col span="8" class="text">
            <h6 class>同比上月</h6>
            <h3>
              <Icon type="ios-arrow-round-up" size="28" color="#23b397" />3,476
            </h3>
          </Col>
        </Row>
      </div>
    </Card>
  </div>
</template>

<script>
var zh = require("../../../../libs/zh.json");
export default {
  name: "bubble",
  components: {},
  props: {},
  data() {
    return {
      series: [
        {
          name: "直营",
          data: this.generateData(10, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "加盟商",
          data: this.generateData(10, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "赞助商",
          data: this.generateData(10, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "广告商",
          data: this.generateData(15, {
            min: 10,
            max: 60,
          }),
        },
      ],
      chartOptions: {
        chart: {
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          locales: [zh],
          defaultLocale: "zh",
        },
        fill: {
          opacity: 0.8,
        },
        legend: {
          show: true,
          offsetY: 5,
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          tickAmount: 12,
          type: "category",
        },
      },
    };
  },
  methods: {
    generateData(count, yrange) {
      let i = 0;
      let series = [];
      while (i < count) {
        let x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        let y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;
        let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        i++;
      }
      return series;
    },
    init() {
      this.$nextTick(() => {
        this.series = [
          {
            name: "直营",
            data: this.generateData(10, {
              min: 10,
              max: 60,
            }),
          },
          {
            name: "加盟商",
            data: this.generateData(10, {
              min: 10,
              max: 60,
            }),
          },
          {
            name: "赞助商",
            data: this.generateData(10, {
              min: 10,
              max: 60,
            }),
          },
          {
            name: "广告商",
            data: this.generateData(15, {
              min: 10,
              max: 60,
            }),
          },
        ];
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="less">
.card-bubble {
  .ivu-card-head {
    border-bottom: none !important;
  }
  .card-title {
    color: #67757c;
  }
  .wrap {
    height: 470px;
    .text {
      padding: 1rem;
      text-align: center;
      color: #67757c;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      h6 {
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        line-height: 1.2;
      }
      h3 {
        font-size: 1.3125rem;
        margin-bottom: 0.5rem;
        font-weight: 400;
        line-height: 1.2;
      }
    }
  }
}
</style>