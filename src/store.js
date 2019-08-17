import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blackboardflag: false,
    homeflag: true,
    pagiflag: false,
    ArticleData: [],
    newarticle: [],
    serchlist: [],
    sideflag: true
  },
  mutations: {
    // changesideflag (state) {
    //   state.sideflag = !state.sideflag
    // },
    change () {
      this.state.blackboardflag = !this.state.blackboardflag
      this.state.homeflag = !this.state.homeflag
    },
    addArticleItem (state, data) {
      let jsonparse = JSON.parse(data)
      state.ArticleData.unshift(jsonparse)
    },
    ReadStoragedata () {
      if (localStorage.getItem('msgboard')) {
        let oldarray = localStorage.getItem('msgboard')
        this.state.ArticleData = this.state.ArticleData.concat(JSON.parse(oldarray))
      }
    },
    saveStorageData (state) {
      let allArry = state.ArticleData
      // let n = [allArry[0]]
      // for (let i = 0; i < allArry.length; i++) {
      //   if (allArry.indexOf(allArry[i]) === i) {
      //     n.push(allArry[i])
      //   }
      // }
      let itemArray = JSON.stringify(allArry)
      localStorage.setItem('msgboard', itemArray)
    },
    deleteItem (state, i) {
      // console.log(i)
      let adata = state.ArticleData
      adata.forEach((element, e) => {
        if (element.articleId === i) {
          adata.splice(e, 1)
        }
      })
    },
    getdatalist (state) {
      state.newarticle = state.ArticleData.slice(0, 5)
    },
    splicedata (state, i) {
      let a = (i - 1) * 5
      let b = i * 5
      state.newarticle = state.ArticleData.slice(a, b)
    },
    serchData (state, keywords) {
      console.log(keywords)
      let newlist = []
      state.ArticleData.forEach(element => {
        console.log(element.articleComment.indexOf(keywords))
        if (element.articleComment.indexOf(keywords) === -1) {
          newlist.push(element)
        }
      })
      state.serchlist = newlist
    }
  },
  getters: {
    slicedata: (state) => {
      let allcont = state.ArticleData.length
      console.log(allcont)
      let cont = Math.ceil(allcont / 5)
      allcont > 5 ? state.pagiflag = true : state.pagiflag = false
      return cont
    }
  },
  actions: {
  }
})
