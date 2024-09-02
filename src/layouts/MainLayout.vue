<template>
  <q-layout view="hHh Lpr lff">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      elevated
      bordered
      class="bg-primary-90 text-white"
    >
      <div class="column justify-between full-height">
        <q-list class="q-pa-md">
          <div class="text-weight-bolder text-h6">Limmy AI</div>
          <q-item
            v-for="(link, index) in links1"
            :key="link.text"
            v-ripple
            clickable
            :active="index === 0"
            active-class="bg-primary-50 text-white rounded-borders text-weight-bolder"
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />
        </q-list>

        <q-list>
          <q-item>
            <div class="q-pa-lg bg-white full-width rounded-borders text-black">
              <div class="text-weight-bolder">Your Credits</div>
              <div class="text-body1">You have used 80% of your credits</div>
              <q-linear-progress :value="0.8" size="20px" rounded />
              <q-btn flat padding="0px" class="q-my-sm" color="primary"
                >Add more credits</q-btn
              >
            </div>
          </q-item>

          <q-item v-for="link in links2" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "MainLayout",
});

const links1 = [
  { icon: "add", text: "New Articles" },
  { icon: "whatshot", text: "History" },
];

const links2 = [
  { icon: "help", text: "Resources" },
  { icon: "logout", text: "Logout" },
];
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
