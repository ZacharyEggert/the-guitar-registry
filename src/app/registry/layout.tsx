import SideBar from "./_components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid grid-cols-6 grid-rows-1">
      <SideBar />
      {children}
    </div>
  );
}
