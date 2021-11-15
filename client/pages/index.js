import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Layout.module.css'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Cyberstructure</title>
        <meta name='keywords' content='web development, gaming, PC, computer, parts' />
      </Head>

      <h1>Welcome to the Index page made using NextJS</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}