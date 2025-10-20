import "../index.css";
import { useState, useRef } from "react";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.svg";
import pillow from "../../public/pillow.svg";
import product from "../../public/product.svg";

function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (title: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 200);
  };

  const menus = [
    {
      title: "สินค้า",
      type: "mega" as const,
      groups: [
        {
          header: "ชุดผ้าปูที่นอน",
          items: [
            { name: "ชุดผ้าปูที่นอนพร้อมผ้านวม", link: "/products/with-comforter" },
            { name: "ชุดผ้าปูที่นอน", link: "/products/sheet-set" },
            { name: "ผ้าปูที่นอน", link: "/products/sheet" },
            { name: "ผ้านวม", link: "/products/comforter" },
            { name: "ปลอกหมอนหนุน" },
            { name: "ปลอกหมอนข้าง" },
            { name: "ปลอกผ้านวม" },
            { name: "ผ้าห่ม" },
            { name: "ไส้ผ้านวม" },
          ],
        },
        {
          header: "ผ้ารองกันเปื้อน",
          items: [
            { name: "ผ้ารองกันเปื้อน-กันน้ำ", link: "/products/waterproof-mattress" },
            { name: "ปลอกหมอนหนุนกันเปื้อน-กันน้ำ", link: "/products/waterproof-pillowcase" },
          ],
        },
        {
          header: "หมอนและอื่น ๆ",
          items: [
            { name: "หมอนหนุน", link: "/products/pillow" },
            { name: "หมอนบอดี้", link: "/products/body-pillow" },
            { name: "หมอนอิง", link: "/products/cushion" },
            { name: "หมอนข้าง", link: "/products/bolster" },
            { name: "ท็อปเปอร์", link: "/products/topper" },
            { name: "ผ้าขนหนู-พรมเช็ดเท้า", link: "/products/towel-mat" },
            { name: "เตียงดีไซน์-ที่นอน", link: "/products/bed-mattress" },
          ],
        },
      ],
    },
    {
      title: "คอลเลกชัน",
      type: "mega" as const,
      groups: [
        {
          items: [
            { name: "Essence Collection", link: "/collection/essence", isNew: true },
            { name: "Norden Elements", link: "/collection/norden" },
            { name: "HANDS FREE Collection", link: "/collection/handsfree" },
            { name: "Memories Collection", link: "/collection/memories" },
            { name: "Milano Collection", link: "/collection/milano" },
            { name: "Norder Collection", link: "/collection/norder" },
            { name: "Brooklyn Collection", link: "/collection/brooklyn" },
            { name: "Cozy Collection", link: "/collection/cozy" },
          ],
        },
        {
          items: [
            { name: "Aura Collection", link: "/collection/aura" },
            { name: "Aura Kid Collection", link: "/collection/aurakid" },
            { name: "Ayame Cloud Topper Collection", link: "/collection/ayame-cloud" },
            { name: "Basic Collection", link: "/collection/basic" },
            { name: "Black & White Collection", link: "/collection/black-white" },
            { name: "Culture Collection", link: "/collection/culture" },
            { name: "Eco-fur Blanket Collection", link: "/collection/ecofur" },
          ],
        },
        {
          items: [
            { name: "Hygiene Collection", link: "/collection/hygiene" },
            { name: "Keep Calm Collection", link: "/collection/keep-calm" },
            { name: "Lovely Collection", link: "/collection/lovely" },
            { name: "Melbourne Collection", link: "/collection/melbourne" },
            { name: "Plantone Collection", link: "/collection/plantone" },
            { name: "Rubic & White Collection", link: "/collection/rubic-white" },
            { name: "Soho Collection", link: "/collection/soho" },
            { name: "Victorian Collection", link: "/collection/victorian" },
          ],
        },
      ],
    },
    {
      title: "แกลลอรี่",
      type: "mega" as const,
      groups: [
        {
          items: [
            { name: "แคตตาล็อก", link: "/gallery/catalog" },
            { name: "คลิปวิดีโอของเรา", link: "/gallery/video" },
            { name: "แรงบันดาลใจของเรา", link: "/gallery/inspiration" },
          ],
        },
      ],
    },
    {
      title: "ข่าวสารและกิจกรรม",
      type: "mega" as const,
      groups: [
        {
          items: [
            { name: "โปรโมชั่น", link: "/news/promo" },
            { name: "ข่าวสารและกิจกรรม", link: "/news/events" },
            { name: "ข้อมูลน่ารู้", link: "/news/info" },
            { name: "ร่วมงานกับเรา", link: "/news/join" },
          ],
        },
      ],
    },
    {
      title: "เกี่ยวกับเรา",
      type: "link" as const,
      link: "/about",
    },
  ];

  return (
    <div className="bg-[#FFD9E4] relative">
        
      <Container maxWidth="lg">
        <img src={logo} alt="logo" className="block mx-auto pt-5 w-[150px]" />

        {/* 🔹 เมนูหลัก */}
        <nav className="relative flex justify-center gap-10 mt-8 z-[150]">
        {menus.map((menu) => (
  <div
    key={menu.title}
    className="relative"
    onMouseEnter={() => menu.type === "mega" && handleMouseEnter(menu.title)}
    onMouseLeave={handleMouseLeave}
  >
    <p
      onClick={() => {
        if (menu.type === "link" && menu.link) navigate(menu.link);
        if (menu.type === "mega") setActiveMenu(menu.title);
      }}
      className={`relative font-bold text-[15px] cursor-pointer text-[#E5067E] transition
        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
        after:bottom-[-6px] after:w-1/2 after:h-[2px] after:bg-[#E5067E]
        after:scale-x-0 after:origin-center after:transition-transform after:duration-300
        ${activeMenu === menu.title ? "after:scale-x-100" : "hover:after:scale-x-100"}`}
    >
      {menu.title}
    </p>

    {/* ✅ Mega Menu สำหรับทุกเมนู ยกเว้นแกลลอรี่และข่าวสาร */}
    {menu.type === "mega" &&
      menu.title !== "แกลลอรี่" &&
      menu.title !== "ข่าวสารและกิจกรรม" &&
      activeMenu === menu.title && (
        <div
          className="fixed left-1/2 top-[140px] -translate-x-1/2
          bg-white border-t-4 border-[#E5067E] rounded-xl shadow-2xl
          p-10 flex justify-between z-[200]
          w-[min(95vw,1200px)] max-w-[1200px] animate-fadeSlideUp"
          onMouseEnter={() => handleMouseEnter(menu.title)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`w-full ${
              menu.title === "สินค้า"
                ? "grid grid-cols-3 gap-12"
                : menu.title === "คอลเลกชัน"
                ? "grid grid-cols-3 gap-10"
                : "grid grid-cols-1 gap-8"
            }`}
          >
            {menu.groups.map((group, i) => (
              <div key={i} className="flex flex-col gap-2">
                {"header" in group && group.header && (
                  <h3 className="font-bold text-[17px] inline-block relative after:content-[''] after:block after:h-[3px] after:bg-[#E5067E] after:mt-1 after:w-1/2">
                    {group.header}
                  </h3>
                )}
                <ul className="text-[15px] text-gray-800 mt-1 space-y-1">
                  {group.items.map((item: any, idx: number) => (
                    <li key={idx}>
                      <button
                        onClick={() => navigate(item.link)}
                        className="flex items-center gap-2 hover:text-[#E5067E] transition bg-transparent border-none outline-none cursor-pointer text-[15px]"
                      >
                        <span>{item.name}</span>
                        {item.isNew && (
                          <div className="bg-[#E5067E] text-white rounded-[15px] px-3 py-[2px] text-[12px] font-semibold shadow-[0_0_8px_#E5067E] animate-pulseGlow">
                            NEW!
                          </div>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {menu.title === "สินค้า" && (
            <div className="hidden md:flex w-[260px] h-[260px] justify-center items-center">
              <img
                src={product}
                alt="product"
                className="rounded-[24px] w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      )}

    {/* ✅ เมนูพิเศษ: แกลลอรี่ */}
    {menu.title === "แกลลอรี่" && activeMenu === menu.title && (
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4
          bg-white border-t-4 border-[#E5067E] rounded-xl shadow-2xl
          p-8 flex justify-between items-start z-[200]
          w-[min(85vw,950px)] animate-fadeSlideUp"
        onMouseEnter={() => handleMouseEnter(menu.title)}
        onMouseLeave={handleMouseLeave}
      >
        {/* 🔹 เมนูย่อยทางซ้าย */}
        <div className="flex flex-col justify-start gap-3 pr-5">
          {menu.groups?.[0]?.items?.map((item, idx) => (
            <button
              key={idx}
              onClick={() => item.link && navigate(item.link)}
              className="text-[15px] text-gray-800 hover:text-[#E5067E] transition text-left"
              disabled={!item.link}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* 🔹 รูปภาพ 3 รูปทางขวา */}
        <div className="flex gap-6 justify-center items-start">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group flex flex-col items-center w-[150px] transition-transform duration-300 hover:scale-105"
            >
              <div className="overflow-hidden rounded-xl shadow-md transition-all duration-500 ease-in-out group-hover:shadow-2xl">
                <img
                  src={`/gallery${i}.svg`}
                  alt={`Gallery ${i}`}
                  className="w-[150px] h-[210px] object-cover"
                />
              </div>
              <p className="mt-2 text-[14px] font-medium text-gray-700 group-hover:text-[#E5067E] transition-colors duration-300">
                แคตตาล็อก {i}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* ✅ เมนูพิเศษ: ข่าวสารและกิจกรรม */}
    {menu.title === "ข่าวสารและกิจกรรม" && activeMenu === menu.title && (
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4
          bg-white border-t-4 border-[#E5067E] rounded-xl shadow-2xl
          p-8 flex justify-center items-center z-[200]
          w-[min(85vw,950px)] animate-fadeSlideUp"
        onMouseEnter={() => handleMouseEnter(menu.title)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row justify-center gap-12">
          {menu.groups?.[0]?.items?.map((item, idx) => (
            <button
              key={idx}
              onClick={() => item.link && navigate(item.link)}
              className="text-[15px] text-gray-800 hover:text-[#E5067E] font-medium transition"
              disabled={!item.link}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
))}


        </nav>

        {/* 🔹 ส่วน PILLOW */}
        <div className="relative flex justify-center items-center h-[600px]">
          <p className="text-[180px] text-black tracking-[0.2em] z-0 select-none mt-[22rem]">
            PILLOW
          </p>
          <img
            src={pillow}
            alt="pillow"
            className="absolute z-[100] w-[700px] top-1/2 -translate-y-[12rem] drop-shadow-2xl pointer-events-none"
          />
        </div>
      </Container>
    </div>
  );
}

export default Header;
