<template>
  <div class="yt-checkList" :class="{ 'is-limit': max > 1 && max <= currentValue.length }" @change="$emit('change', currentValue)">
    <!-- @slot 标题插槽-->
    <slot name="title">
      <div class="yt-checkList-title" v-if="title">{{title}}</div>
    </slot>
    <div class="yt-checkList-wrapper">
      <yt-checkBox v-model="currentValue" v-for="(option, index) in list" :pos="pos" :simple="simple" :inline="inline"
                   :disabled="option.disabled" :name="option | securityGetVal(val) || option" :key="index">
        <!-- @slot 自定义checkBox的label -->
        <slot v-bind="option">{{option | securityGetVal(label)}}</slot>
      </yt-checkBox>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-checkList',
    props: {
      /**
       *  最多选择多少个
       */
      max: Number,
      /**
       *  checkList 的小标题
       */
      title: String,
      /**
       *  控制check按钮在左侧还是在右侧   可取值 'left' || 'right'
       */
      pos: {
        type: String,
        default: 'left'
      },
      /**
       *  checkBox样式是否为简单类型
       */
      simple: {
        type: Boolean,
        default: false
      },
      /**
       *  checkBox样式是否为简单类型
       */
      inline: {
        type: Boolean,
        default: false
      },
      /**
       *  用于绑定input中的value   例如每一项为item  则item[val] 即为我们选中的值
       */
      val: {
        type: String,
        default: 'value'
      },
      /**
       *  用于显示的文字  例如每一项为item  则item[label] 即为显示的文字
       */
      label: {
        type: String,
        default: 'label'
      },
      /**
       *  数据列表
       */
      list: {
        type: Array,
        required: true
      },
      /**
       *  选中的列表
       */
      value: Array
    },
    computed: {
      currentValue: {
        get() {
          return this.value
        },
        set(val) {
          if (this.max === 1 && val.length > 1) val.shift()
          if (this.max > 1 && val.length > this.max) val.pop()
          this.$emit('input', val)
        }
      }
    }
  }
</script>
