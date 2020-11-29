<template>
  <div>
    <h1 class="text-3xl mb-8">Articles</h1>

    <ul>
      <li v-for="story in stories" :key="story.id">
        <nuxt-link
          :to="'/' + story.full_slug"
          class="px-4 py-2 rounded-full bg-gray-800 text-white"
        >
          {{ story.content.seo.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    const locale = context.app.i18n.locale === 'en' ? '' : 'fr/'
    return context.app.$storyapi
      .get(`cdn/stories`, {
        version: process.env.STORYBLOK_VERISON || 'draft',
        starts_with: `${locale}articles/`,
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          // eslint-disable-next-line no-console
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          // eslint-disable-next-line no-console
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
  data: () => ({
    stories: [],
  }),
}
</script>

<style></style>
