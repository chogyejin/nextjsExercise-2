import HeadInfo from '../components/HeadInfo';
import Image from 'next/image';
import photosStyles from '../styles/Photos.module.css';
import Link from 'next/link';

export interface IPhoto {
  albumid: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Props {
  photos: IPhoto[];
}

export default function photos({ photos }: Props) {
  return (
    <>
      <HeadInfo title="My Blog Photos" />
      <h1>My photos</h1>
      <ul className={photosStyles.photos}>
        {photos.map((photo, id) => (
          <li key={id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <Image
                  src={photo.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={photo.title}
                />
                <span>{photo.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`,
  );
  const photos = await res.json();
  console.log(photos);
  return {
    props: {
      photos,
    },
  };
};
