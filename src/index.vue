<template>
    <div>

        <div class="login">
            <h3>Sign in</h3>
            <input class="form-control" type="text" v-model="user.username" placeholder="Username"><br>
            <input class="form-control" type="password" v-model="user.password" placeholder="Password"><br>
            <span @click="login" class="btn btn-primary">Login</span>
            <hr>
            <p>You don't have an account? You can

                <router-link to="/signup"> create account here</router-link>
            </p>

        </div>

        <footer class="footer">
            <p>&copy; 2016 Bookmarker, Inc.</p>
        </footer>
    </div>

    <!-- /container -->
</template>

<script>

import firebase from 'firebase';

export default {
    name: 'login',
    data() {
        return {
            user: {
                username: '',
                password: ''
            }

        }
    }, methods: {
        login() {

            firebase.auth().signInWithEmailAndPassword(this.user.username, this.user.password).then(
                user => {
                    alert('User authentication successful');
                    this.$router.push({ name: 'bookmarker' });
                },
                err => {
                    if (err.code === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else if (err.code === 'auth/user-not-found') {
                        alert('User not found!');
                    } else if (err.code === 'auth/invalid-email') {
                        alert('Invalid email');
                    } else {
                        alert('Oops. ' + err.message);
                    }

                }
            ).catch(error => {
                if (error.code === 'auth/wrong-password') {
                    alert('Wrong password')
                } else {
                    alert(error.message);
                }
            })

        }

    }
}
</script>

<style>

</style>
