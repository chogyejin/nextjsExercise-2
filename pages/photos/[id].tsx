import Image from 'next/link';
import { IPhoto } from '../photos';
import Link from 'next/link';

interface Props {
  photo: IPhoto;
}

export default function ({ photo }: Props) {
  const { title, url } = photo;
  console.log(title);
  console.log(url);
  return (
    <div>
      <h2>{title}</h2>
      <img src={url} width={500} height={500} />
      <Link href="/photos">Go back</Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/2`);
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
  const ids = photos.map((photo: { id: number }) => photo.id);
  const paths = ids.map((id: { toString: () => any }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
