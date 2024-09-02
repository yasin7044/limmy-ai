<template>
  <q-stepper
    v-model="step"
    ref="stepper"
    color="primary"
    animated
    class="q-my-md"
  >
    <q-step :name="1" title="Languages" icon="settings" :done="step > 1">
      <q-form>
        <q-select
          filled
          v-model="videoStore.automateForm.language"
          :options="videoStore.optionSettings.languages"
          hint="Disable"
          width="220px"
          label="Select Languages"
          dense
        />
      </q-form>
    </q-step>

    <q-step :name="2" title="Script" :done="step > 2">
      <q-form class="column g-10">
        <div>
          <label>Choose script type</label>
          <q-input
            v-model="videoStore.automateForm.script.type"
            outlined
            dense
          />
        </div>
        <div>
          <label>Enter your topic</label>
          <q-input
            v-model="videoStore.automateForm.script.topic"
            outlined
            dense
          />
        </div>
        <q-btn label="Generate script" color="black" class="full-width" />

        <div>
          <label>Script</label>
          <q-input type="textarea" outlined dense />
        </div>
      </q-form>
    </q-step>

    <q-step :name="3" title="Video Settings">
      <q-form class="column g-10">
        <div>
          <label>Video Style</label>
          <div class="flex g-10">
            <q-btn
              v-for="(item, index) in videoStore.optionSettings.visualStyle"
              :key="index"
            >
              {{ item.label }}
            </q-btn>
          </div>
        </div>
        <div>
          <label>Voice over</label>
          <q-input
            v-model="videoStore.automateForm.settings.voiceOver"
            outlined
            dense
          />
        </div>
        <div>
          <label>Background Music</label>
          <q-input
            v-model="videoStore.automateForm.script.backgroundMusic"
            outlined
            dense
          />
        </div>
        <div>
          <label>Playback Speed</label>
          <q-linear-progress :value="0.2" class="q-mt-md" />
          <div class="text-center">0.2px</div>
        </div>
        <div>
          <label>Caption Style</label>
          <div class="flex g-10">
            <q-btn
              v-for="(item, index) in videoStore.optionSettings.captionStyles"
              :key="index"
            >
              {{ item.label }}
            </q-btn>
          </div>
        </div>
      </q-form>
    </q-step>

    <q-step :name="4" title="Generate">
      <div class="column text-center justify-center g-10">
        <div>
          <q-btn color="black">Generate Video</q-btn>
        </div>
        <div class="text-subtitle1">
          This may take a few minutes. Please don't close the browser
        </div>
      </div>
    </q-step>

    <template v-slot:navigation>
      <q-stepper-navigation class="q-my-md flex justify-between">
        <q-btn
          @click="continueTo"
          color="black"
          :label="'Continue'"
          :disable="step === 4"
        />
        <q-btn
          color="black"
          @click="$refs.stepper.previous()"
          label="Previous"
          class="q-ml-sm"
          :disable="step === 1"
        />
      </q-stepper-navigation>
    </template>
  </q-stepper>
</template>

<script setup>
import { ref } from "vue";
import { useVideoStore } from "src/stores/video-store";
const stepper = ref(null);
const videoStore = useVideoStore();
const step = ref(1);

function continueTo() {
  stepper.value.next();
}
</script>
