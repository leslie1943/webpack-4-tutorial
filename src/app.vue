<template>
  <div id="test-replace-app" class="main-container">
    <div class="message">Show the message.</div>
    <div class="operation">
      <el-button type="primary" @click="showMsg">Click me</el-button>
    </div>
    <div class="footer">Show the message.</div>
    <div class="footer" style="background:black;color:white">Show the message.</div>
    <div class="footer">Show the message.</div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'you could see the popup message from webpack.',
      deCon: {
        a: 'A', b: 'B', c: 'C'
      }
    }
  },
  methods: {
    showMsg() {
      let { a, b } = this.deCon

      console.info('a', a)
      console.info('b', b)
      this.$message.success(this.msg)
    }
  }
}
</script>

<style lang="scss">
.main-container {
  width: 100%;
  height: 600px;
  background: #1f6bb5;
  color: black;
  font-size: 16px;
  .message {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1f6bb5;
    width: 100%;
    height: 100px;
  }
  .operation {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5ac24;
    width: 100%;
    height: 100px;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: pink;
    width: 100%;
    height: 100px;
  }
}
</style>

