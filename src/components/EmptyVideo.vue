<script setup></script>
<template>
  <div
    class="column justify-center items-center q-gutter-y-md bg-grey-2 q-py-md q-my-md rounded-borders"
  >
    <q-icon name="videocam" size="120px" />
    <div class="text-h5 text-weight-bold">No Videos yet</div>
    <div class="">
      Get Started by creating the first video or use the automation features
    </div>
    <div class="flex g-10">
      <q-btn color="primary" :to="{ name: 'video.new' }">Create Video</q-btn>
      <q-btn href="https://github.com/yasin7044/limmy-ai">Learn more</q-btn>
    </div>
  </div>
</template>
