import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Posts = ({ posts }) => (
  <div className={styles.gridContainer}>
    {posts.map(({ title, slug, eyecatch }) => (
      <article className={styles.post} key={slug}>
        <Link href={`/blog/${slug}`}>
          <div>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                layout="fill"
                objectFit="cover"
                sizes="(min-width: 1152px) 576px, 50vw"
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
              />
            </figure>
            <h2>{title}</h2>
          </div>
        </Link>
      </article>
    ))}
  </div>
);

export default Posts;
