<template>
  <section id="contact">
    <div class="max-w-5xl min-h-screen pt-14 780:min-h-[85vh]">
      <div class="mb-6 780:mb-12" data-aos="fade-up">
        <h3
          class="text-3xl 780:text-4xl font-bold leading-normal bg-text-transparent bg-clip-text text-color-light text-transparent dark:text-color-dark"
        >
          Let's make something awesome together!
        </h3>
      </div>
      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Info -->
        <div
          data-aos="fade-up"
          class="flex flex-col 780:flex-row 780:space-x-20 mb-4"
        >
          <!-- Full Name -->
          <div class="basis-1/2">
            <input
              type="text"
              id="fullName"
              name="name"
              v-model="form.name"
              placeholder="Your Name*"
              required
              class="mt-8 w-full py-3 bg-transparent text-xl font-bold text-gray-700 dark:text-slate-200 dark:placeholder:text-gray-600 placeholder:text-xl placeholder:font-bold border-b-2 border-gray-300 dark:border-[#303033] focus:border-purple-500 focus:outline-none"
            />
          </div>

          <!-- Email -->
          <div class="basis-1/2">
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              placeholder="Your Email*"
              required
              class="mt-8 w-full py-3 bg-transparent text-xl font-bold text-gray-700 dark:text-slate-200 dark:placeholder:text-gray-600 placeholder:text-xl placeholder:font-bold border-b-2 border-gray-300 dark:border-[#303033] focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>

        <!-- Message -->
        <textarea
          data-aos="fade-up"
          id="message"
          name="message"
          v-model="form.message"
          rows="5"
          placeholder="Your Message*"
          required
          class="my-8 w-full py-3 bg-transparent text-xl font-bold text-gray-700 dark:text-slate-200 dark:placeholder:text-gray-600 placeholder:text-xl placeholder:font-bold border-b-2 border-gray-300 dark:border-[#303033] focus:border-purple-500 focus:outline-none resize-none"
        ></textarea>

        <!-- Submit Button -->
        <div data-aos="fade-up" class="w-full 780:text-left">
          <button
            type="submit"
            class="w-full 780:w-auto flex items-center justify-center space-x-1 py-3 px-10 rounded-3xl text-lg text-slate-100 bg-color-light dark:bg-color-dark hover:opacity-90 transition duration-200"
          >
            <span>Send Message</span>
            <PhosphorIconPaperPlaneTilt :size="20" weight="bold" />
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  access_key: "01eefbd2-6dc4-42cf-8afd-7126e3605d46",
  subject: "New Contact Form Submission",
  name: "",
  email: "",
  message: "",
});

const result = ref("");
const status = ref("");

const submitForm = async () => {
  result.value = "Please wait...";
  try {
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: form.value,
    });

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
    } else {
      status.value = "error";
    }
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset form after submission
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";

    // Clear result and status after 5 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>

<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
  -webkit-text-fill-color: #ffffff;
  transition: background-color 50000s ease-in-out 0s;
}

input:-moz-autofill,
input:-moz-autofill:hover,
input:-moz-autofill:focus,
input:-moz-autofill:active {
  -moz-background-clip: text;
  -moz-text-fill-color: #ffffff;
  transition: background-color 50000s ease-in-out 0s;
}
</style>
