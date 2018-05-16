<template>
  <v-app id="inspire">
    <v-toolbar app dark color="light-blue darken-2">
      <v-toolbar-items>
        <v-btn flat disabled><v-avatar color="light-blue darken-2" tile>
          <img src="../assets/logo.png" alt="">
        </v-avatar></v-btn>
        <template v-for="link in toolbarLinks">
          <v-btn flat :to="link.route" :exact="link.exact" :key="link.name" active-class="BottomBorder">
            {{link.name}}
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <transition name="fade-transition" mode="out-in">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </v-content>
    <v-footer color="light-blue darken-2" app>
      <span class="white--text ml-3">&copy; 2018</span>
      <v-spacer/>

      <a href="https://paulpatena.com" style="text-decoration: none" class="white--text mr-2"><v-btn dark flat>Paul Patena</v-btn></a>

    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    toolbarLinks: [
      { name: 'Home', exact: true, route: {name: 'Home'} },
      { name: 'Demo', exact: false, route: {name: 'Demo'} }
    ]
  })
}
</script>

<style scoped>
.BottomBorder {
  border-color: #0858ad;
  border-width: 3px;
  border-bottom-style: solid;
}
</style>
