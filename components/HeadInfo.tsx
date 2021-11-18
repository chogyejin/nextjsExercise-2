import Head from 'next/head';

interface Props {
  title: string;
  keyword: string;
  contents: string;
}

export default function HeadInfo({ title, keyword, contents }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={contents} />
      </Head>
    </div>
  );
}

HeadInfo.defaultProps = {
  title: 'My Blog',
  keyword: 'Blog made by Next js',
  contents: 'practice Next js',
};
