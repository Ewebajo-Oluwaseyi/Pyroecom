<template>
  <div class="bg-cream py-8 h-screen">
    <div class="max-w-3xl mx-auto w-11/12">
      <component :is="pages[currentPage].component" />

      <div class="">
        <button v-if="currentPage !== 0" @click="previous" class="w-28 py-3">
          Back
        </button>
        <button
          v-if="currentPage < pages.length - 1"
          @click="next"
          class="bg-amber w-28 py-3 text-white rounded-sm focus:outline-none"
        >
          Next
        </button>
        <button
          v-else
          @click="submit"
          class="bg-amber w-28 py-3 text-white rounded-sm focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LoginInfo from "./Login Forms/LoginInfo.vue";
import ProfilePicture from "./Login Forms/ProfilePicture.vue";
import Interest from "./Login Forms/Interest.vue";
import Bio from "./Login Forms/Bio.vue";
import AdditionalPhotos from "./Login Forms/AdditionalPhotos.vue";
import Address from "./Login Forms/Address.vue";
import SocialMedia from "./Login Forms/SocialMedia.vue";
import Compensation from "./Login Forms/Compensation.vue";
import OtherInfo from "./Login Forms/OtherInfo.vue";
export default {
  data() {
    return {
      currentPage: 0,
      pages: [
        {
          component: LoginInfo,
        },
        {
          component: ProfilePicture,
        },
        {
          component: Interest,
        },
        {
          component: Bio,
        },
        {
          component: AdditionalPhotos,
        },
        {
          component: Address,
        },
        {
          component: SocialMedia,
        },
        {
          component: Compensation,
        },
        {
          component: OtherInfo,
        },
      ],
    };
  },
  methods: {
    previous() {
      this.currentPage--;
    },
    next() {
      this.currentPage++;
    },
    submit() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
