import { Link, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <header className="px-4 py-6 sm:px-6 border-b border-grey-500">
        <Link className="text-3xl font-bold font-ubuntu" to={`/`}>
          Skill Ledger
        </Link>
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
