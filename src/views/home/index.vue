<template>
  <nut-navbar :left-show="false" title="长银消费金融" />
  <nut-image src="/src/assets/长银消费金融.png" width="100%" height="20%" fit="contain" class="image" />

  <!-- <step1></step1> -->
  <div class="wrapper">
    <div></div>
    <div class="credit">
      <nut-button class="btn" type="primary" @click="submit1">申请授信</nut-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import router from '/@/router';

  const submit1 = () => {
    router.replace('/creditApplication');
  };
</script>

<style scoped>
  .nut-button {
    margin-bottom: 10px;
  }

  .image {
    margin-bottom: 100px;
  }

  .nut-navbar {
    margin-bottom: 0;
  }

  .wrapper {
    height: auto;
    width: auto;
    /* background-image: url('/@/assets/授信.jpeg'); */
  }

  .credit {
    display: flex;
    justify-content: space-around;
    margin-bottom: 150px;
  }
</style>
