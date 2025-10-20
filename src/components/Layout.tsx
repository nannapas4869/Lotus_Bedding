import { Outlet, } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"

export default function Layout() {
  // const { pathname } = useLocation();
  // const hideLayout = pathname === "/signin";

  return (
    <>
      { <Header />}
      <main className="min-h-screen">
        <Outlet /> {/* จุดแสดงเนื้อหาของ Route */}
      </main>
      { <Footer />}
    </>
  );
}
