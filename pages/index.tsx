import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: IPost[];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Server Side Rendering
// 서버에서 만든 HTML 파일을 그때그때
// 빈번하게 바뀌는 데이터가 있는 페이지에 이용하자
// Use free REST API : https://jsonplaceholder.typicode.com/posts?_start=0&_end=10
// 내 로컬 API : http://localhost:8080/api/posts
// 8080 포트 API : local-API

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`,
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

// Static Site Generation (nextjs에서 추천함)
// build 시에 미리 HTML 파일을 만들어서 전달
// SSR보다 빠름
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`,
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 20, // 20초 지난 시점부터 접속이 일어나면 파일 regenerate 함
//   };
// };
