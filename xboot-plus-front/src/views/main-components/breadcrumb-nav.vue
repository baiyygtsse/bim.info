<template>
  <div :class="`nav-beadcrumb-${theme}`">
    <Breadcrumb>
      <BreadcrumbItem
        v-for="item in currentPath"
        :to="item.path"
        :key="item.name"
        >{{ itemTitle(item) }}</BreadcrumbItem
      >
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name: "breadcrumbNav",
  props: {
    currentPath: Array,
    theme: {
      type: String,
      default: "light",
    },
  },
  methods: {
    itemTitle(item) {
      if (item.localize && item.i18n) {
        return this.$t(item.i18n);
      } else {
        return item.title;
      }
    },
  },
};
</script>


<style lang="less">
.nav-beadcrumb-darkblue {
  .ivu-breadcrumb a {
    color: hsla(0, 0%, 100%, 0.65);
  }
  .ivu-breadcrumb > span:last-child {
    color: hsla(0, 0%, 100%, 0.65);
  }
}

.nav-beadcrumb-primary, .nav-beadcrumb-black {
  .ivu-breadcrumb {
    color: #f0f0f0;
  }
  .ivu-breadcrumb a {
    color: #fff;
  }
  .ivu-breadcrumb > span:last-child {
    color: #fff;
  }
}
</style>
