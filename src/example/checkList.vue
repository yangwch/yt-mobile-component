<template>
  <yt-page title="checkList" :leftData="[]" scroll>
    <yt-checkList class="list" title="选择按钮左边" :list="list" label="label" val="id" v-model="selectList"/>
    <yt-split></yt-split>
    <yt-checkList class="list" title="选择按钮右边" :list="list2" label="label" val="id" v-model="selectList2" pos="right" simple/>
    <yt-split></yt-split>
    <yt-checkList class="list" title="限制选一个" :list="list3" label="label" val="id" v-model="selectList3" :max="1"/>
    <yt-split></yt-split>
    <yt-checkList class="list" title="限制选多个" :list="list4" label="label" val="id" v-model="selectList4" :max="2"/>
    <yt-split></yt-split>
    <yt-checkList class="list" :list="list5" v-model="selectList5" pos="right">
      <div slot-scope="data">
        <p>名称: {{data.label}}</p>
        <p>id: {{data.id}}</p>
      </div>
    </yt-checkList>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  const list = [
    {
      label: '101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区',
      disabled: true,
      id: 1
    },
    {
      label: '101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区',
      id: 2
    },
    {
      label: '103分区',
      id: 3
    },
    {
      label: '104分区',
      id: 4
    }
  ]
  export default {
    name: 'CheckList-example',
    data() {
      return {
        selectList: [],
        selectList2: [],
        selectList3: [],
        selectList4: [],
        selectList5: [],
        selectList6: [],
        list: list,
        list2: list,
        list3: list,
        list4: list,
        list5: list
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .list
    height auto
  .row
    flex 1
    overflow hidden
    line-height 40px
    border-bottom 1px solid #f1f1f1
</style>
