import Nav from './Nav';

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      {/* children에 index, photos .. 들어감 */}
      <div>{children}</div>
    </>
  );
}
