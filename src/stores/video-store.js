import { defineStore } from "pinia";
import { ref } from "vue";
export const useVideoStore = defineStore("videos", () => {
  const videos = ref([]);

  const optionSettings = ref({
    languages: ["English", "Hindi", "Spanish"],
    visualStyle: [
      {
        label: "Colorful Comics",
        value: "colorful_comics",
      },
      {
        label: "Clipart",
        value: "clipart",
      },
      {
        label: "Cinematic",
        value: "cinematic",
      },
      {
        label: "Pixel Art",
        value: "pixelart",
      },
      {
        label: "Anime",
        value: "anime",
      },
    ],
    captionStyles: [
      {
        label: "Simple",
        value: "simple",
      },
      {
        label: "Fancy",
        value: "fancy",
      },
      {
        label: "Neon",
        value: "neon",
      },
      {
        label: "No Captions",
        value: "no-caption",
      },
    ],
  });

  const automateForm = ref({
    language: "English",
    script: {
      type: "",
      topic: "",
    },
    settings: {
      visualStyle: "",
      voiceOver: "",
      backgroundMusic: "",
      playbackSpeed: "",
      captionStyle: "",
    },
  });

  function addNewVideos() {}

  return {
    videos,
    addNewVideos,
    optionSettings,
    automateForm,
  };
});
