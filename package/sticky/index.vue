<template>
  <div class="yt-sticky" :style="stickyStyle">
    <!--@slot 要固定的元素-->
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-sticky',
    props: {
      /**
       * top值
       */
      top: {
        type: [String],
        default: '0px'
      },
      /**
       * index
       */
      zIndex: {
        type: Number,
        default: 10
      }
    },
    computed: {
      stickyStyle() {
        return {
          top: this.top,
          zIndex: this.zIndex
        }
      }
    },
    data() {
      return {
        child: null,
        stickyHeight: 0,
        parsedTop: parseFloat(this.top, 10),
        position: 'static'
      }
    },
    watch: {
      position(cur) {
        this.child.style.position = cur
        switch (cur) {
          case 'sticky':
            this.child.style.position = 'fixed'
            this.child.style.top = this.top
            break
          case 'absolute':
            this.child.style.position = 'absolute'
            this.child.style.top = 'auto'
            this.child.style.bottom = '0'
            break
          case 'static':
          default:
            this.child.style.position = 'static'
        }
      }
    },
    methods: {
      scrollHandler() {
        let offset = this.$el.getBoundingClientRect()
        let poffset = this.$el.parentElement.getBoundingClientRect()
        let isStatic = offset.top > this.parsedTop
        let isAbsolute = poffset.bottom < this.parsedTop + this.stickyHeight
        if (isStatic) {
          this.position = 'static'
        } else if (isAbsolute) {
          this.position = 'absolute'
        } else {
          this.position = 'sticky'
        }
      }
    },
    mounted() {
      // 保证 this.$el 已经插入文档
      this.$nextTick(() => {
        let computedStyle = window.getComputedStyle(this.$el)
        let position = computedStyle.position
        let stickySupport = position.indexOf('sticky') > -1
        let child = this.$el.firstElementChild
        if (!stickySupport && child) {
          this.child = child
          child.style.zIndex = this.zIndex
          this.stickyHeight = parseFloat(computedStyle.height, 10)
          this.$el.style.position = 'static'
          this.$el.style.height = computedStyle.height
          window.addEventListener('scroll', this.scrollHandler, true)
          this.scrollHandler()
        }
      })
    }
  }
</script>
