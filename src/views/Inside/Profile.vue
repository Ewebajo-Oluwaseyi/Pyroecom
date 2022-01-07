<template>
  <div class="bg-cream">
    <sidebar />
    <div
      :class="`absolute top-0 duration-1000 ease-in-out ${
        sidebar ? 'left-56 w-10/12' : 'left-0 w-full'
      }`"
    >
      <top-nav />
      <div>
        <section class="py-8 px-5 bg-white flex justify-between">
          <div class="flex gap-5 items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU="
                alt=""
              />
            </div>
            <div>
              <h1>{{ profile.firstname }} {{ profile.lastname }}</h1>
              <h1 class="text-sm italic">Brand Influencer</h1>
            </div>
          </div>
          <div>
            <button
              class="py-1 w-32 rounded-sm bg-amber text-white"
              @click="toggleModal(profile)"
            >
              Edit Profile
            </button>
          </div>
        </section>

        <section class="mt-6 bg-white mx-4 px-4 py-2">
          <div>
            <div class="pb-3 border-b flex justify-between">
              <h1 class="text-2xl font-bold">Bio</h1>
              <div
                class="w-10 h-10 rounded-full hover:bg-cream flex justify-center items-center cursor-pointer"
              >
                <span class="iconify" data-icon="akar-icons:pencil"></span>
              </div>
            </div>
            <p class="mt-4">
              {{ profile.bio }}
            </p>
          </div>
        </section>

        <section class="bg-white mt-6 mx-4 px-4 py-2">
          <div>
            <div class="pb-3 border-b flex justify-between">
              <h1 class="text-2xl font-bold">Personal Information</h1>
              <div
                class="w-10 h-10 rounded-full hover:bg-cream flex justify-center items-center cursor-pointer"
              >
                <span class="iconify" data-icon="akar-icons:pencil"></span>
              </div>
            </div>
            <div>
              <div class="my-2 flex items-center">
                <h1>Email:</h1>
                <p class="ml-4">{{ profile.email }}</p>
              </div>
              <div class="my-2 flex items-center">
                <h1>Address 1:</h1>
                <p class="ml-4">
                  {{ profile.address_1 }}
                </p>
              </div>
              <div class="my-2 flex items-center">
                <h1>Address 2:</h1>
                <p class="ml-4">
                  {{ profile.address_2 }}
                </p>
              </div>
              <div class="my-2 flex items-center">
                <h1>City:</h1>
                <p class="ml-4">{{ profile.city }}</p>
              </div>
              <div class="my-2 flex items-center">
                <h1>State:</h1>
                <p class="ml-4">{{ profile.state }}</p>
              </div>
              <div class="my-2 flex items-center">
                <h1>Country:</h1>
                <p class="ml-4">{{ profile.country }}</p>
              </div>
            </div>
          </div>
          <editProfile :editProfile="editableProfile" />
        </section>
        <section class="bg-white mt-6 mx-4 px-4 py-2">
          <div>
            <div class="pb-3 border-b flex justify-between">
              <h1 class="text-2xl font-bold">Social</h1>
              <div
                class="w-10 h-10 rounded-full hover:bg-cream flex justify-center items-center cursor-pointer"
              >
                <span class="iconify" data-icon="akar-icons:pencil"></span>
              </div>
            </div>
            <div>
              <div class="my-2 flex items-center">
                <div class="flex items-center">
                  <span class="iconify" data-icon="logos:twitter"></span>
                  <h1 class="ml-2">Twitter:</h1>
                </div>
                <input
                  class="bg-cream focus:outline-none shadow-sm ml-4 rounded-md py-2 px-2 mt-2 w-7/12 md:w-1/3"
                  placeholder="@twitter"
                  v-model="profile.twitter_link"
                />
                <div class="ml-2 mt-2" @click.prevent="update">
                  <span
                    class="iconify"
                    data-icon="radix-icons:update"
                    style="color: blue"
                    data-width="25"
                    data-height="25"
                  ></span>
                </div>
              </div>
              <div class="my-2 flex items-center">
                <div class="flex items-center">
                  <span class="iconify" data-icon="icon-park:facebook"></span>
                  <h1 class="ml-2">Facebook:</h1>
                </div>
                <input
                  class="bg-cream focus:outline-none shadow-sm ml-4 rounded-md py-2 px-2 mt-2 w-7/12 md:w-1/3"
                  placeholder="@facebook"
                />
                <div class="ml-2 mt-2" @click.prevent="update">
                  <span
                    class="iconify"
                    data-icon="radix-icons:update"
                    style="color: blue"
                    data-width="25"
                    data-height="25"
                  ></span>
                </div>
              </div>
              <div class="my-2 flex items-center">
                <div class="flex items-center">
                  <img src="@/assets/images/insta.png" alt="" class="h-4" />
                  <h1 class="ml-2">Instagram:</h1>
                </div>
                <input
                  class="bg-cream focus:outline-none shadow-sm ml-4 rounded-md py-2 px-2 mt-2 w-7/12 md:w-1/3"
                  placeholder="@instagram"
                  v-model="profile.instagram_link"
                />
                <div class="ml-2 mt-2" @click.prevent="update">
                  <span
                    class="iconify"
                    data-icon="radix-icons:update"
                    style="color: blue"
                    data-width="25"
                    data-height="25"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/Side bar/SideBar.vue";
import Nav from "@/components/Inside/Nav.vue";
import { mapActions } from "vuex";
import editProfile from "@/components/Inside/EditProfile.vue";
export default {
  data() {
    return {
      editableProfile: {},
      profile: [],
    };
  },
  components: {
    sidebar,
    "top-nav": Nav,
    editProfile,
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
  },
  methods: {
    ...mapActions({
      getProfile: "getProfile",
      updateProfile: "updateProfile",
    }),
    toggleModal(profile) {
      this.editableProfile = profile;
      const body = document.querySelector("body");
      const modal = document.querySelector(".modal");
      modal.classList.toggle("opacity-0");
      modal.classList.toggle("pointer-events-none");
      body.classList.toggle("modal-active");
    },
    async update() {
      try {
        const payload = {
          firstname: this.profile.firstname,
          lastname: this.profile.lastname,
          address_1: this.profile.address_1,
          address_2: this.profile.address_2,
          phone: this.profile.phone,
          city: this.profile.city,
          country: this.profile.country,
          bio: this.profile.bio,
          twitter_link: this.profile.twitter_link,
          instagram_link: this.profile.instagram_link,
        };
        await this.updateProfile(payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.getProfile();
    this.profile = JSON.parse(localStorage.getItem("profile"));
    //console.log(this.profile);
  },
};
</script>
