<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>npm i axios -S</h2>
    <h2>npm i mockjs -S</h2>
    <div>{{info}}</div>
    <div>{{goods}}</div>
    <div>{{ratings}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      info: null,
      ratings: null,
      goods: null
    };
  },
  mounted() {
    this.updateInfo();
    this.updateRatings();
    this.updateGoods();
  },
  methods: {
    updateInfo() {
      axios
        .get("/info")
        .then(response => (this.info = response.data))
        .catch(e => alert(e));
    },
    updateRatings() {
      axios
        .get("/ratings")
        .then(response => (this.ratings = response.data))
        .catch(e => alert(e));
    },
    updateGoods() {
      axios
        .get("/goods")
        .then(response => (this.goods = response.data))
        .catch(e => alert(e));
    }
  }
};
</script>
