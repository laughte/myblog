<style lang="scss">
#homeSide {
  .v-card {
    border-radius: 0;
    nav {
      background-color: #1c1f22 !important;
      height: 100px;
      box-shadow: none;
      .v-toolbar__content {
        padding-top: 25px;
        .v-toolbar__title {
          color: #68856b !important;
          font-size: 30px;
          font-weight: 1000;
          letter-spacing: 6px;
          margin: auto;
        }
      }
    }
    .v-list {
      background-color: #283134;
      border-bottom: solid 5px #646470 !important;
      color: rgb(146, 153, 129);
      .v-list__title {
        font-size: 15px;
      }
    }
  }
}
</style>
<template>
  <v-layout id="homeSide">
    <v-flex >
      <v-card color="#283134">
        <v-toolbar color="teal">
          <v-toolbar-title>箫无韵</v-toolbar-title>
        </v-toolbar>

        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="searchItem(subItem.title)">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          action: 'home',
          title: '主页',
          //items: []
        },
        {
          action: 'code',
          title: '代码',
          active: true,
          items: [
            { title: 'python' },
            { title: 'java' },
            { title: 'PHP' },
            { title: 'JavaScript' }
          ]
        },
        {
          action: 'import_contacts',
          title: '文学',
          items: [
            { title: '诗经' },
            { title: '古诗词' },
            { title: '小说' },
            { title: '散文' }
          ]
        },
        {
          action: 'image',
          title: '绘画',
          items: [
            { title: '素描' },
            { title: '水彩' },
            { title: '油画' },
            { title: '插画' }
          ]
        },
        {
          action: 'headset',
          title: '音乐',
          items: [{ title: '纯音乐' }, { title: '古风' }, { title: '流行' }]
        },
        {
          action: 'grain',
          title: '软件',
          items: [{ title: 'photoshop' }, { title: 'painter' }, { title: 'AfterEfact' }]
        },
      ]
    }
  },
  methods:{
    searchItem(key){
      // this.$store.commit('serchData',key)
    }
   
  }
}
</script>
