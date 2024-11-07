//import NavBar from '../components/navbar';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      
      <main>{children}</main>
    </div>
  );
}
