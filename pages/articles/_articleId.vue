<template>
  <div>
    <h1 class="text-3xl mb-8">{{ content.seo.title }}</h1>
    <div>
      {{ content.seo.description }}
    </div>
  </div>
</template>

<script>
import { translatedSlugs } from '~/helpers/translated_slug'

export default {
  name: 'PageArticle',
  async asyncData(ctx) {
    const locale = ctx.app.i18n.locale === 'en' ? '' : 'fr'
    const param = ctx.params.articleId

    try {
      const article = await ctx.app.$storyapi.get(
        `cdn/stories/${locale}/articles/${param}`,
        {
          version: process.env.STORYBLOK_VERISON || 'draft',
        }
      )
      const story = article.data.story
      await ctx.store.dispatch('i18n/setRouteParams', translatedSlugs(story))

      return story
    } catch (e) {
      ctx.error({
        statusCode: 404,
        message: 'story not found',
      })
    }
  },
  data: () => ({
    content: { seo: {} },
  }),
}
</script>
