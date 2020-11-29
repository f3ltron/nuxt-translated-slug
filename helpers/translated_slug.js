export const translatedSlugs = (story) => {
  const slugs = {
    en: { articleId: story.slug },
  }
  story.translated_slugs.forEach((t) => {
    const tmp = t.path.split('/')
    slugs[t.lang] = { articleId: tmp[tmp.length - 1] }
  })

  return slugs
}
