<template>
  <section id="contact">
    <div class="max-w-5xl min-h-screen my-20">
      <div class="mb-6 780:mb-12">
        <h3
          class="text-3xl 780:text-4xl font-bold leading-normal bg-text-transparent bg-clip-text bg-custom-gradient text-transparent"
        >
          Let's make something awesome together!
        </h3>
      </div>
      <form action="#" method="POST" class="space-y-6">
        <!-- Info -->
        <div class="flex space-x-20 mb-4">
          <div class="basis-1/2">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your Name*"
              required
              class="mt-8 w-full py-3 bg-transparent text-lg font-bold text-gray-700 placeholder:text-lg placeholder:font-bold border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none"
            />
          </div>

          <!-- Email -->
          <div class="basis-1/2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email*"
              required
              class="mt-8 w-full py-3 bg-transparent text-lg font-bold text-gray-700 placeholder:text-lg placeholder:font-bold border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>

        <!-- Message -->
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Your Message*"
          required
          class="my-8 w-full py-3 bg-transparent text-lg font-bold text-gray-700 placeholder:text-lg placeholder:font-bold border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none resize-none"
        ></textarea>
        <!-- Submit Button -->
        <div class="text-left">
          <button
            type="submit"
            class="780:py-3 780:px-10 rounded-3xl text-lg text-slate-100 bg-primary-gradient"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
