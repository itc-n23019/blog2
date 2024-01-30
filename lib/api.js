import { createClient } from 'microcms-js-sdk'

const getClient = () => {
  return createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY
  })
}

const getPostBySlug = async slug => {
  try {
    const client = getClient()
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` }
    })
    return post.contents[0]
  } catch (err) {
    console.log('~~ getPostBySlug ~~')
    console.log(err)
  }
}
export { getPostBySlug, getClient }
