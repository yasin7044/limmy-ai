<script setup>
import { useVideoStore } from "src/stores/video-store";
import { ref } from "vue";
import CreateVideo from "./CreateVideo.vue";
import EmptyVideo from "./EmptyVideo.vue";
const videoStore = useVideoStore();
const dummyVideoEnable = ref(false);
</script>

<template>
  <section class="sub-header">
    <div class="flex justify-between">
      <div class="text-h6 text-weight-bold q-my-sm">Videos</div>
      <div class="flex g-10">
        <div>
          <q-btn icon="add_circle" :to="{ name: 'video.new' }">New Video</q-btn>
        </div>
        <div>
          <q-btn @click="dummyVideoEnable = !dummyVideoEnable">
            {{ !dummyVideoEnable ? "Add dummy video" : "Reset" }}
          </q-btn>
        </div>
      </div>
    </div>

    <EmptyVideo v-if="!dummyVideoEnable" />

    <div class="row q-my-md q-col-gutter-lg" v-else>
      <div class="col-lg-4 col-md-4 col-sm-6" v-for="item in 10" :key="item">
        <q-card class="my-card">
          <div class="flex q-pa-md no-wrap justify-between items-center">
            <div class="text-body2">#History Wonders</div>
            <q-btn color="grey-6">Ready to Publish</q-btn>
          </div>
          <q-img
            src="https://t3.ftcdn.net/jpg/03/29/17/78/360_F_329177878_ij7ooGdwU9EKqBFtyJQvWsDmYSfI1evZ.jpg"
            basic
          >
            <div class="absolute-bottom">
              <div class="flex justify-between">
                <div class="bg-primary q-pa-sm text-body1">00:38</div>
                <div class="bg-primary q-pa-sm text-subtitle2">
                  <q-icon name="favorite" size="20px" />5
                </div>
              </div>
            </div>
          </q-img>

          <q-card-section>
            <div class="">Created At</div>
            <div class="">Updated At</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.q-img__content > div {
  background: unset;
}
</style>
