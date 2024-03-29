import { getPostBySlug } from '../../lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import { eyecatchLocal } from 'lib/constants'

import {
  Twocolumn,
  TwocolumnMain,
  TwocolumnSidebar
} from 'components/two-column'

import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

const Schedule = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description
}) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority
      placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <Twocolumn>
          <TwocolumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwocolumnMain>
          <TwocolumnSidebar>
            <PostCategories categories={categories} />
          </TwocolumnSidebar>
        </Twocolumn>
      </article>
    </Container>
  )
}

const getStaticProps = async () => {
  const slug = 'micro'

  const post = await getPostBySlug(slug)

  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description
    }
  }
}

export { Schedule as default, getStaticProps }
