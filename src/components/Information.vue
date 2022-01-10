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
          <div class="Loading" v-if="loading">
            <Spinner />
          </div>
          <div v-else>Register</div>
        </button>
        <p class="text-center text-red-500 text-sm">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LoginInfo from "./Login Forms/LoginInfo.vue";
//import ProfilePicture from "./Login Forms/ProfilePicture.vue";
//import Interest from "./Login Forms/Interest.vue";
import Bio from "./Login Forms/Bio.vue";
//import AdditionalPhotos from "./Login Forms/AdditionalPhotos.vue";
import Address from "./Login Forms/Address.vue";
import SocialMedia from "./Login Forms/SocialMedia.vue";
//import Compensation from "./Login Forms/Compensation.vue";
import OtherInfo from "./Login Forms/OtherInfo.vue";
import Spinner from "@/components/Spinner";
export default {
  components: {
    Spinner,
  },
  data() {
    return {
      loading: false,
      currentPage: 0,
      pages: [
        {
          component: LoginInfo,
        },
        {
          component: Bio,
        },
        {
          component: SocialMedia,
        },
        {
          component: Address,
        },
        {
          component: OtherInfo,
        },
      ],
      error: "",
    };
  },
  computed: {
    ...mapGetters({
      enableNext: "next",
      getError: "error",
    }),
  },
  methods: {
    ...mapActions(["postRegister"]),
    previous() {
      this.currentPage--;
      this.$root.$emit("Previous");
    },
    next() {
      if (this.enableNext) {
        this.currentPage++;
      }
      this.$root.$emit("Next");
    },
    async submit() {
      this.loading = true;
      this.$root.$emit("Submit");
      await this.postRegister();
      if (!this.getError) {
        this.$swal("Check email for email verification");
      } else {
        this.error = this.getError;
      }
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.Loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
