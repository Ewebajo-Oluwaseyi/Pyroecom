<template>
  <div
    class="modal opacity-0 pointer-events-none absolute z-30 w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      @click="closeModal"
    ></div>
    <div
      class="modal-container absolute top-8 bg-white w-11/12 md:max-w-xl z-50 shadow-md rounded-md mb-4"
    >
      <div class="flex justify-between items-center px-6 py-2">
        <p class="text-xl font-bold text-blueDark">Edit Profile</p>
        <div class="modal-close cursor-pointer z-50" @click="closeModal">
          <svg
            class="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
        </div>
      </div>
      <div class="px-6 py-2 my-4">
        <form action="" class="flex flex-wrap gap-0 md:gap-6">
          <div class="flex-grow">
            <label for="firstname">First Name</label><br />
            <input
              type="text"
              id="firstName"
              v-model="editProfile.firstname"
              placeholder="Enter your first name"
              v-bind:class="
                error.firstName
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.firstName }}
            </p>
          </div>
          <div class="flex-grow">
            <label for="lastname">Last Name</label><br />
            <input
              type="text"
              id="lastName"
              v-model="editProfile.lastname"
              placeholder="Enter your last name"
              v-bind:class="
                error.lastName
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.lastName }}
            </p>
          </div>
          <div class="flex-grow">
            <label for="address">Address</label><br />
            <input
              type="text"
              id="address"
              v-model="editProfile.address_1"
              placeholder="Enter your address"
              v-bind:class="
                error.address_1
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.address_1 }}
            </p>
          </div>
          <div class="flex-grow">
            <label for="address 2">Address 2</label><br />
            <input
              type="text"
              id="address 2"
              v-model="editProfile.address_2"
              placeholder="Enter your address"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="city">City</label><br />
            <input
              type="text"
              id="city"
              v-model="editProfile.city"
              placeholder="Enter your city"
              v-bind:class="
                error.city
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.city }}
            </p>
          </div>
          <div class="flex-grow">
            <label for="country">Country</label><br />
            <input
              type="text"
              id="country"
              v-model="editProfile.country"
              placeholder="Enter your address"
              v-bind:class="
                error.country
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.country }}
            </p>
          </div>

          <div class="flex-grow">
            <label for="strip_id">Stripe ID</label><br />
            <input
              type="text"
              id="strip_id"
              v-model="editProfile.stripe_id"
              placeholder="Enter your stripe id"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>

          <div class="flex-grow w-full">
            <label for="bio">Bio</label><br />
            <textarea
              id="bio"
              placeholder="Tell us about yourself"
              v-model="editProfile.bio"
              class="bg-cream focus:outline-none shadow-sm py-3 px-2 mt-8 w-full"
            ></textarea>
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.bio }}
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="flex justify-center">
              <button
                class="bg-amber text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                @click.prevent="update"
              >
                <div v-if="loading">
                  <Spinner />
                </div>
                <div v-else>Edit Profile</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      profile: [],
      error: {
        firstName: "",
        lastName: "",
        address_1: "",
        city: "",
        country: "",
        bio: "",
      },
    };
  },
  props: ["editProfile"],
  components: {
    Spinner,
  },
  methods: {
    ...mapActions(["updateProfile", "getProfile"]),
    async closeModal() {
      this.toggleModal();
      await this.getProfile();
    },
    toggleModal() {
      const body = document.querySelector("body");
      const modal = document.querySelector(".modal");
      modal.classList.toggle("opacity-0");
      modal.classList.toggle("pointer-events-none");
      body.classList.toggle("modal-active");
    },
    async update() {
      if (this.editProfile.firstname == "") {
        this.error.firstName = "first name is required";
        setTimeout(() => {
          this.error.firstName = "";
        }, 1000);
        this.loading = false;
      } else if (this.editProfile.lastname == "") {
        this.error.lastName = "last name is required";
        setTimeout(() => {
          this.error.lastName = "";
        }, 1000);
        this.loading = false;
      } else if (this.editProfile.address_1 == "") {
        this.error.address_1 = "address is required";
        setTimeout(() => {
          this.error.address_1 = "";
        }, 1000);
        this.loading = false;
      } else if (this.editProfile.city == "") {
        this.error.city = "city is required";
        setTimeout(() => {
          this.error.city = "";
        }, 1000);
        this.loading = false;
      } else if (this.editProfile.country == "") {
        this.error.country = "country is required";
        setTimeout(() => {
          this.error.country = "";
        }, 1000);
        this.loading = false;
      } else if (this.editProfile.bio == "") {
        this.error.bio = "bio is required";
        setTimeout(() => {
          this.error.bio = "";
        }, 1000);
        this.loading = false;
      } else {
        this.loading = true;
        try {
          // const payload = this.editProfile;
          const payload = {
            firstname: this.editProfile.firstname,
            lastname: this.editProfile.lastname,
            address_1: this.editProfile.address_1,
            address_2: this.editProfile.address_2,
            phone: this.editProfile.phone,
            city: this.editProfile.city,
            country: this.editProfile.country,
            stripe_id: this.editProfile.stripe_id,
            bio: this.editProfile.bio,
          };
          await this.updateProfile(payload);
          this.loading = false;
          this.closeModal();
        } catch (err) {
          this.loading = false;
          console.log(err);
        }
      }
    },
  },
};
</script>

<style scope>
.modal {
  transition: opacity 0.25s ease;
}
body.modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
}
</style>
