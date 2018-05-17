<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list dense>
        <v-list-tile @click.stop="drawer = !drawer" to="/Main/Activity">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Activity</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.stop="drawer = !drawer" to="/Main/Notifications">
          <v-list-tile-action>
            <v-icon>notification_important</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Notifications</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.stop="drawer = !drawer" to="/Main/NewsFeed">
          <v-list-tile-action>
            <v-icon>chrome_reader_mode</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>News Feed</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.stop="drawer = !drawer" to="/Main/Venues">
          <v-list-tile-action>
            <v-icon>person_pin_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Places/Venues</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.stop="drawer = !drawer" to="/Main/Profile">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.stop="drawer = !drawer" to="/Main/Friends">
          <v-list-tile-action>
            <v-icon>people_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Friends</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.stop="drawer = !drawer" to="/">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>u-Jol</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid style='overflow:auto; height: calc(100vh - (64px + 56px);' id="scroll-target" class="scroll-y">
        <v-layout justify-center align-center v-scroll:#scroll-target="onScroll">
          <v-flex>
            <router-view name='MainPage'>
            </router-view>
          </v-flex>
        </v-layout>
      </v-container>
      <v-bottom-nav :value="true" :active.sync="active_nav" absolute color="primary">
        <v-btn flat color="accent" value="recent" @click.stop="RecentDialog = true">
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>
        <v-btn flat color="accent" value="favorites" @click.stop="FavouritesDialog = true">
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn flat color="accent" value="nearby" @click.stop="NearbyDialog = true">
          <span>Nearby</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-content>
    <v-dialog v-model="RecentDialog" fullscreen hide-overlay transition="dialog-top-transition" scrollable content-class="dialogmodal">
      <v-card tile>
        <v-toolbar card dark color="primary">
          <v-btn icon dark @click.native="RecentDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Recent Places</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="RecentDialog = false">Save</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y>
            <v-btn slot="activator" dark icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-menu>
        </v-toolbar>
        <v-card-text>
          <v-btn color="primary" dark @click.stop="dialog2 = !dialog2">Open Dialog 2</v-btn>
          <v-tooltip right>
            <v-btn slot="activator">Tool Tip Activator</v-btn>
            Tool Tip
          </v-tooltip>
        </v-card-text>

        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="FavouritesDialog" fullscreen hide-overlay transition="dialog-top-transition" scrollable>
      <v-card tile>
        <v-toolbar card dark color="primary">
          <v-btn icon dark @click.native="FavouritesDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Favourite Places</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="FavouritesDialog = false">Save</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y>
            <v-btn slot="activator" dark icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-menu>
        </v-toolbar>
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="NearbyDialog" fullscreen hide-overlay transition="dialog-top-transition" scrollable>
      <v-card tile>
        <v-toolbar card dark color="primary">
          <v-btn icon dark @click.native="NearbyDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Nearby Places</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="NearbyDialog = false">Save</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y>
            <v-btn slot="activator" dark icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-menu>
        </v-toolbar>

        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    name: 'Main',
    data: () => ({
      drawer: false,
      RecentDialog: false,
      FavouritesDialog: false,
      NearbyDialog: false,
      active_nav: 'recent'
    }),
    methods: {
      onScroll(e) {}
    },
    props: {
      source: String
    }
  }

</script>

<style>
  .dialog--fullscreen {
    bottom: 56.5px;
    height: unset;
  }

</style>
