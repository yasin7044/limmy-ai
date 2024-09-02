<template>
  <q-page class="q-pa-lg column">
    <section class="header flex justify-between full-width items-center">
      <div class="text-h5 text-weight-bold text-purple-7">
        olaf pomfrey's page
      </div>
      <div class="flex g-10">
        <q-btn :ripple="false">Connect Instagram</q-btn>
        <q-btn :ripple="false">Youtube</q-btn>
      </div>
    </section>

    <section class="sub-header">
      <q-card class="flat q-pa-lg column g-10 bg-primary-5">
        <div class="text-subtitle1 text-weight-bold">
          Want to automate the entire flow?
        </div>
        <div class="text-subtitle2">
          Try automate videos creation and posting then sit back and relax
        </div>
        <div class="q-my-sm">
          <q-btn color="primary">Automate now</q-btn>
        </div>
      </q-card>
    </section>

    <VideosComponents />
  </q-page>
</template>

<script setup>
import VideosComponents from "src/components/VideoComponents.vue";

defineOptions({
  name: "IndexPage",
});
</script>

<style scoped lang="scss">
.q-page {
  gap: 20px;
}
</style>
