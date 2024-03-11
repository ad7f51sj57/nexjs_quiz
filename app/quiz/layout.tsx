export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white flex flex-col p-6 m-6 gap-6">
      <div className="text-2xl font-bold">시험</div>
      {children}
    </section>
  );
}
