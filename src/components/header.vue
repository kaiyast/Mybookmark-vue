<template>
    <div class="header clearfix">
        <h3 class="text-muted">Bookmarker

            <router-link to='/home' v-if="!currentUser" class="btnheader pull-right btn btn-primary">Login</router-link>
            <span v-if="currentUser" class="btnheader pull-right btn btn-danger" @click="logout">Logout</span>
            <router-link v-if="currentUser" to='/profile' class="btnheader pull-right btn btn-primary">Profile</router-link>
            <router-link to='/bookmarker' v-if="currentUser" class="btnheader pull-right btn btn-primary">Bookmarkwe</router-link>
            <router-link to='/about' class="btnheader pull-right btn btn-primary">About</router-link>
        </h3>

    </div>
</template>

<script>

import firebase from 'firebase';

export default {
    data() {
      return {
          currentUser:null
      }
    },
    methods: {
        logout() {
            
            firebase.auth().signOut().then(() => {
              
                this.$router.push({ name: 'home' });

            })
        }
    },created(){
            firebase.auth().onAuthStateChanged(
      user => {
            this.currentUser = user
      }
    )
            
    }
}
</script>

<style>
.btnheader {
    margin-left: 10px;
}
</style>
