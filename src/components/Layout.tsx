import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"

export default function Layout() {
  const { pathname } = useLocation();
  const hideLayout = pathname === "/signin";

  return (
    <>
      {!hideLayout && <Header />}
      <main className="min-h-screen">
        <Outlet /> {/* จุดแสดงเนื้อหาของ Route */}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}
