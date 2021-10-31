<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 @click="handleClick">{{ myName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    myName () {
      return this.$store.state.name
    }
  },
  methods: {
    handleClick () {
      // 想改變 data，vuex 要求第一步，必須使用 dispatch 發派一個 action
      // 感知道 change 這個 action，執行 Store 中 actions 下面的 change
      this.$store.dispatch('change')
    }
  }
}
</script>
