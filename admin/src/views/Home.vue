<template>
  <div>
    <v-row>
      <v-col cols="12" md="2">
        <drawer></drawer>
      </v-col>
      <v-col cols="12" md="10" style="padding-top: 0;">
        <admin-header></admin-header>
        <info-grid></info-grid>
        <orders-chart></orders-chart>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import Drawer from '../components/Drawer';
import AdminHeader from '../components/AdminHeader';
import InfoGrid from '../components/InfoGrid';
import OrdersChart from '../components/OrdersChart';

export default {
  name: 'Home',
  components: {
    Drawer,
    AdminHeader,
    InfoGrid,
    OrdersChart
  }
}
</script>
