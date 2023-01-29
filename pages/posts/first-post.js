import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>This is the first post</h1>
    </Layout>
  )
}

export default FirstPost;
