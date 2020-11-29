<template>
  <div class="py-10 flex flex-wrap justify-between items-center">
    <div class="mb-8 sm:mb-0">
      {{ $t('changeLocale') }}:
      <nuxt-link
        v-if="$i18n.locale === 'fr'"
        :to="switchLocalePath('en')"
        class="px-4 py-2 rounded-full bg-gray-800 text-white"
      >
        English
      </nuxt-link>
      <nuxt-link
        v-else
        :to="switchLocalePath('fr')"
        class="px-4 py-2 rounded-full bg-gray-800 text-white"
      >
        Français
      </nuxt-link>
    </div>
    <div>
      <nuxt-link
        :to="localePath('/')"
        class="px-4 py-2 rounded-full bg-gray-800 text-white mr-4"
      >
        Home
      </nuxt-link>
      <nuxt-link
        :to="localePath({ name: 'contact' })"
        class="px-4 py-2 rounded-full bg-gray-800 text-white mr-4"
      >
        Contact
      </nuxt-link>
      <nuxt-link
        :to="localePath('/articles')"
        class="px-4 py-2 rounded-full bg-gray-800 text-white"
      >
        Articles
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
