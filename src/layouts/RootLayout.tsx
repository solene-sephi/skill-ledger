import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-200 px-4 pt-4 pb-8">
      <h1>Skill Ledger</h1>
      <Outlet />
    </div>
  );
}
