// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    // load data from Storyblok API
    const { data } = await graphql(`{
      allStoryblokEntry {
        edges {
          node {
            id
            full_slug
            content
          }
        }
      }
    }`)

    // split contents and globalContent story from edges
    const edges = data.allStoryblokEntry.edges || []
    const { nodes, globalContent, blogPosts } = edges.reduce((acc, edge) => {
      if (edge.node.content.component === 'global') {
        acc['globalContent'] = edge.node
      } else if (edge.node.full_slug.includes('blog/')) {
        acc['blogPosts'].push(edge.node)
        acc['nodes'].push(edge.node)
      } else {
        acc['nodes'].push(edge.node)
      }

      return acc
    }, {
      nodes: [],
      globalContent: {},
      blogPosts: []
    })

    // for each content found create a page
    nodes.forEach(node => {
      if (node.full_slug === 'home') {
        createPage({
          path: '/',
          component: './src/templates/StoryblokEntry.vue',
          context: {
            id: node.id,
            globalContent
          }
        })
      }

      createPage({
        path: `/${node.full_slug}`,
        component: './src/templates/StoryblokEntry.vue',
        context: {
          id: node.id,
          globalContent
        }
      })
    })

    createPage({
      path: '/blog',
      component: './src/templates/BlogPostListEntry.vue',
      context: {
        posts: blogPosts,
        globalContent
      }
    })
  })
}
