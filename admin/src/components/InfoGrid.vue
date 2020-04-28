<template>
  <v-container>
      <v-row>
          <v-col class="card">
              <v-row>
                  <v-col cols="12" md="3" style="background: #13c1f0;">
                      <v-icon class="icon">mdi-account</v-icon>
                  </v-col>
                  <v-col cols="12" md="9">
                      <h3>Користувачі</h3>
                      <h3>100</h3>
                  </v-col>
              </v-row>
          </v-col>
          <v-col class="card">
              <v-row>
                  <v-col cols="12" md="3" style="background: #11a65a;">
                      <v-icon class="icon">mdi-table-of-contents</v-icon>
                  </v-col>
                  <v-col cols="12" md="9">
                      <h3>Товари</h3>
                      <h3>100</h3>
                  </v-col>
              </v-row>
          </v-col>
          <v-col class="card">
              <v-row>
                  <v-col cols="12" md="3" style="background: #f39c19;">
                      <v-icon class="icon">mdi-clipboard-list</v-icon>
                  </v-col>
                  <v-col cols="12" md="9">
                      <h3>Категорії</h3>
                      <h3>10</h3>
                  </v-col>
              </v-row>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
    .card {
        margin: 0 10px;
        border: 1px solid #ddd;
        box-shadow: 0px 0px 13px 1px rgba(0,0,0,0.75);
    }
    .icon {
        color: #ffffff!important;
        font-size: 70px!important;
    }
</style>