import Nav from './Nav';
import Head from 'next/head';

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>My blog</title>
        <meta content="My blog made bt Nextjs" />
      </Head>
      <Nav />
      {/* children에 index, photos .. 들어감 */}
      <div>{children}</div>
    </>
  );
}
