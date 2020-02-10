/**
 * @type {Object}
 */
export const metaConfig = {
  siteUrl: 'https://demo.storyblok.com',
  siteName: 'Gridsome Multilanguage Website',
  siteDescription: 'A demonstration website of use Storyblok with Gridsome',
  siteImage: 'https://demo.storyblok.com/meta-image.jpg'
}

/**
 * @method setupMetaTags
 * @param  {Object} { head: VueMeta }
 */
export const setupMetaTags = ({ head }) => {
  // Open Graph
  head.meta.push({
    key: 'og:type',
    property: 'og:type',
    content: 'website'
  })

  head.meta.push({
    key: 'og:url',
    property: 'og:url',
    content: metaConfig.siteUrl
  })

  head.meta.push({
    key: 'og:title',
    property: 'og:title',
    content: metaConfig.siteName
  })

  head.meta.push({
    key: 'og:description',
    property: 'og:description',
    content: metaConfig.siteDescription
  })

  head.meta.push({
    key: 'og:image',
    property: 'og:image',
    content: metaConfig.siteImage
  })

  // Twitter meta
  head.meta.push({
    key: 'twitter:card',
    property: 'twitter:card',
    content: 'summary_large_image'
  })

  head.meta.push({
    key: 'twitter:url',
    property: 'twitter:url',
    content: metaConfig.siteUrl
  })

  head.meta.push({
    key: 'twitter:title',
    property: 'twitter:title',
    content: metaConfig.siteName
  })

  head.meta.push({
    key: 'twitter:description',
    property: 'twitter:description',
    content: metaConfig.siteDescription
  })

  head.meta.push({
    key: 'twitter:image',
    property: 'twitter:image',
    content: metaConfig.siteImage
  })
}

/**
 * @method setupMetaUrl
 * @param  {Object} { head: VueMeta, path: String }
 */
export const setupMetaUrl = ({ head, path }) => {
  // Open Graph
  head.meta.push({
    key: 'og:url',
    property: 'og:url',
    content: metaConfig.siteUrl + path
  })

  // Twitter
  head.meta.push({
    key: 'twitter:url',
    property: 'twitter:url',
    content: metaConfig.siteUrl + path
  })
}

/**
 * @method  getMetadataToPage
 * @param   {Object} { title: String, path: String, description: String }
 * @returns {Object}
 */
export const getMetadataToPage = ({ title, path, description }) => {
  const metaData = [
    {
      key: 'og:title',
      property: 'og:title',
      content: `${title} - ${metaConfig.siteName}`
    },
    {
      key: 'og:url',
      property: 'og:url',
      content: metaConfig.siteUrl + path
    },
    {
      key: 'twitter:title',
      property: 'twitter:title',
      content: `${title} - ${metaConfig.siteName}`
    },
    {
      key: 'twitter:url',
      property: 'twitter:url',
      content: metaConfig.siteUrl + path
    }
  ]

  if (description) {
    metaData.push({
      key: 'og:description',
      property: 'og:description',
      content: description
    })

    metaData.push({
      key: 'twitter:description',
      property: 'twitter:description',
      content: description
    })

    metaData.push({
      key: 'description',
      name: 'description',
      content: description
    })
  }

  return {
    title,
    meta: metaData
  }
}