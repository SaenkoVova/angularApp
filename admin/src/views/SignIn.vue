<template>
  <v-row class="bg"
        align="center"
        justify="center"
    >
        <v-col
        cols="12"
        sm="8"
        md="6"
        >
        <v-card class="elevation-12">
            <v-toolbar
                color="primary"
                dark
                flat
                >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
                
            </v-toolbar>
            <v-card-text>
            <v-row v-if="getError">
                <v-col cols="12" md="12">
                     <v-alert
                    :value="true"
                    type="error"
                    >
                    {{getError}}
                    </v-alert>
                </v-col>
            </v-row>
            <v-form>
               
                <v-text-field
                label="Login"
                name="login"
                prepend-icon="person"
                type="text"
                v-model="email"
                />

                <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="password"
                />
            </v-form>
            </v-card-text>
            <v-card-actions>
            <v-spacer />
            <v-btn color="primary" :disabled="!email || !password || getProcessing"
            @click="logIn()">Login</v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    computed: {
        getToken() {
            return this.$store.getters.getUserToken;
        },
        getProcessing() {
            return this.$store.getters.getProcessing;
        },
        getError() {
            return this.$store.getters.getError;
        }
    },
    methods: {
        logIn() {
            this.$store.dispatch('SIGNIN', {email: this.email, password: this.password});
        }
    },
    watch: {
        getToken() {
            this.$router.push('/admin');
        }
    }
}
</script>

<style scoped>
    .bg {
        background: url('../assets/adminSignInBg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>