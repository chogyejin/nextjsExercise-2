import Image from 'next/link';
import { IPhoto } from '../photos';
import Link from 'next/link';
import { GetStaticPropsContext } from 'next';

interface Props {
  photo: IPhoto;
}

export default function ({ photo }: Props) {
  const { title, url } = photo;
  return (
    <div>
      <h2>{title}</h2>
      <img src={url} width={500} height={500} />
      <Link href="/photos">Go back</Link>
    </div>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

//dynamic ssg는 staticpath가 필요
export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`,
  );
  const photos = await res.json();
  const ids = photos.map((photo: IPhoto) => photo.id);
  const paths = ids.map((id: { toString: () => any }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  console.log(paths);
  console.log(ids);
  return {
    paths,
    fallback: false,
  };
};
