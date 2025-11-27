import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <header className="px-4 py-6 sm:px-6 border-b border-gray">
        <h1 className="text-3xl font-bold font-ubuntu">Skill Ledger</h1>
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
