<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in links"
            :key="i"
            :to="item.url"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" left></v-icon>
            </v-list-item-icon>
            {{item.text}}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Ad application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
            v-for="link in links"
            :key="link.text"
            :to="link.url"
            text
        >
          <v-icon v-text="link.icon" left></v-icon>
          {{link.text}}
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: null,
    selectedItem: 0,
    links: [
      {text: 'Login', icon: 'mdi-login', url: '/login'},
      {text: 'Registration', icon: 'mdi-account-check-outline ', url: '/registration'},
      {text: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
      {text: 'New add', icon: 'mdi-new-box', url: '/new'},
      {text: 'My ads', icon: 'mdi-format-list-bulleted ', url: '/list'}
    ]
  }),
}
</script>