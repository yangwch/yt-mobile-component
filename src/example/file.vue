<template>
  <yt-page title="file" scroll>
    <yt-card title="现场照片">
      <yt-file :uploadFile="uploadFile" v-model="fileList"></yt-file>
    </yt-card>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        fileList: [],
        uploadFile: file => {
          // TODO 上传文件
        }
      }
    }
  }
</script>

<style scoped>
</style>
