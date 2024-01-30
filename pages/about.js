import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { Twocolumn, TwocolumnMain, TwocolumnSidebar } from 'components/two-column'
import Image from 'next/image'
import Meta from 'components/meta'
import eyecatch from 'images/about.jpg'
const About = () => {
  return (
    <>
      <Container>
       <Meta  pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
/> 
	  <Hero title='About' subtitle='About development activities' />

	   <Image
  src={eyecatch}
  alt=''
 layout= "responsive" 
  sizes='(min-width:1152px) 1152px, 100vw' 
  priority
  placeholder='blur'   
  
/>
	  <Twocolumn>
	  <TwocolumnMain>
        <PostBody>
          <p>
            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
          </p>
          <h1> モノづくりで目指していること </h1>
          <p>
            モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
          </p>
          <p>
            単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
          </p>
          <h2> 新しいことへのチャレンジ </h2>
          <p>
            今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
          </p>
          <h3> FAQ </h3>
          <p>
            プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
          </p>
          <p>
            古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や思考方法。それらを読み取ってこそ古代の世界観が理解できてきます。
          </p>
          <p>
            公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。
          </p>
        </PostBody>
	  </TwocolumnMain>
	  <TwocolumnSidebar>
	  <Contact />
	  </TwocolumnSidebar>
	  </Twocolumn>
      </Container>
    </>
  )
}

export default About

