<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <h1>{{ myName }}</h1> -->
    <h2 @click="handleClick">{{ name }}</h2>
  </div>
</template>

<script>
// https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register
import { toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup () {
    const store = useStore()
    const { name } = toRefs(store.state)
    const handleClick = () => {
      console.log('click')
      store.dispatch('getData')
    }

    return { name, handleClick }
  }
}
</script>
