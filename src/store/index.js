import { createStore } from 'vuex'
import axios from 'axios'
// VueX 數據管理框架
// VueX 創建了全局唯一的倉庫，用來存放全局的數據

export default createStore({
  state: { // state 裡面放的就是全局的數據
    name: 'dell'
  },
  mutations: {
    // 第四部，對應的 mutation 被執行
    change (state, str) {
      // 第五步，在 mutation 裡面修改數據
      console.log('mutation')
      this.state.name = str
    }
  },
  actions: {
    // 第二步，store 感知道你出發了一個叫做 change 的 action，執行 change
    change () {
      // 第三步，提交一個 commit 觸發一個 mutation
      this.commit('change')
    },
    changeName (store, str) {
      this.commit('change', str)
    },
    getData (store) {
      axios.get('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register').then((res) => {
        store.commit('change', res.data.desc)
      })
    }
  },
  modules: {
  }
})
