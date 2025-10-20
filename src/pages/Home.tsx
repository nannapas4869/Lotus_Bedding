import "../index.css";
import hero from "../../public/hero.svg";
import star from "../../public/star.png";
import { useState } from "react";
import truck from "../../public/truck-pink.svg";
import time from "../../public/time.svg";
import security from "../../public/security.svg";
import lock from "../../public/lock.svg";
import user from "../../public/user-time.svg";
import Slider from "@mui/material/Slider";
import hero1 from "../../public/hero1.jpg";
import hero2 from "../../public/hero2.jpg";
import kid from "../../public/kid.svg";
import fight from "../../public/fight.png";
import big from "../../public/Big.png";
import sleep from "../../public/sleep.svg";
function Home() {
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0); // ✅ ใช้ควบคุมสินค้า

  const products = [
    {
      id: 1,
      img: hero,
      name: "หมอน LOTUS ATTITUDE รุ่น Cottonism",
      price: 600,
      oldPrice: 1229,
      color: ["#A76B2F", "#1B5E20", "#3CA6B0", "#5E1A9B", "#F7E028"],
    },
    {
      id: 2,
      img: hero1,
      name: "หมอน LOTUS รุ่น Premium Soft",
      price: 890,
      oldPrice: 1590,
      color: ["#E91E63", "#FF9800", "#009688", "#3F51B5", "#9C27B0"],
    },
    {
      id: 3,
      img: hero2,
      name: "หมอน LOTUS รุ่น CoolTouch",
      price: 790,
      oldPrice: 1290,
      color: ["#42A5F5", "#26A69A", "#AB47BC", "#FF7043", "#FFEB3B"],
    },
  ];

  // ✅ เปลี่ยนสินค้าเมื่อเลื่อน Slider
  const handleChange = (_event: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    const index = Math.round((value / 100) * (products.length - 1));
    setCurrent(index);
  };

  const product = products[current]; // ✅ สินค้าปัจจุบัน

  return (
    <>
      

      {/* ส่วนสินค้า */}
      <div className="bg-white w-full h-full">
        <p className="text-center pt-14 text-[72px] text-[#E5067E]">สินค้าขายดี</p>

        {/* ✅ ใช้ product แทน hero เดิม */}
        <img
          src={product.img}
          alt="hero"
          width="700"
          className="block mx-auto mt-14 mb-10 transition-all duration-500"
        />

        <p className="text-[32px] text-center text-[#E5067E]">{product.name}</p>
        <img src={star} alt="star" width="300" className="mt-7 block mx-auto" />

        {/* ✅ สีของสินค้า */}
        <div className="flex justify-center gap-4 mt-10">
          {product.color.map((c, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-[#E5067E] flex items-center justify-center"
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: c }}
              ></div>
            </div>
          ))}
        </div>

        {/* ✅ ราคา */}
        <div className="flex flex-row">
          <p className="block mx-auto mt-8 text-[30px]">
            จาก{" "}
            <span className="line-through decoration-4 decoration-[#FF0000]">
              ฿ {product.oldPrice}
            </span>{" "}
            เหลือ ฿ {product.price}
          </p>
        </div>

        {/* ปุ่ม + - */}
        <div className="flex flex-col items-center mt-10">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => setCount(Math.max(count - 1, 0))}
              className="w-12 h-12 rounded-full bg-pink-400 text-white text-3xl font-bold flex items-center justify-center hover:bg-pink-500 transition"
            >
              –
            </button>
            <span className="text-2xl font-semibold">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="w-12 h-12 rounded-full bg-pink-400 text-white text-3xl font-bold flex items-center justify-center hover:bg-pink-500 transition"
            >
              +
            </button>
          </div>

          <div className="w-44 h-[3px] bg-pink-500 mt-4 rounded-full"></div>

          <div className="flex flex-row mt-24 mb-20 gap-24">
            {[truck, time, security, lock, user].map((icon, i) => (
              <img key={i} src={icon} alt="icon" />
            ))}
          </div>
        </div>

        {/* ✅ Slider */}
        <div className="w-full flex items-center justify-center mt-10 px-10 mb-24">
          <div className="relative w-[90%] flex items-center">
            <Slider
              value={(current / (products.length - 1)) * 100}
              onChange={handleChange}
              min={0}
              max={100}
              step={100 / (products.length - 1)}
              sx={{
                color: "#E5067E",
                height: 6,
                "& .MuiSlider-thumb": {
                  width: 24,
                  height: 24,
                  backgroundColor: "#E5067E",
                  "&::after": {
                    content: '"→"',
                    position: "absolute",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "14px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -55%)",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FFD9E4] line_height">
        <div className="flex flex-row ">
          <img src={kid} alt="kid" width="673" />
          <div className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-pink-300 to-pink-100">
            <h2 className="text-4xl tracking-wider text-gray-800 mb-6">
              LIMITED EDITION
            </h2>
            <button className="px-24 py-5 bg-white rounded-full text-gray-900 font-medium shadow hover:bg-gray-100 transition">
              SHOP
            </button>
          </div>
        </div>

        <div className="flex w-full h-screen">
          {/* ฝั่งซ้าย - พื้นหลังไล่สีชมพูและข้อความ */}
          <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-pink-300 to-pink-100 text-center px-10">
            {/* โลโก้วงกลม */}
            <div className="mb-10">
              <img src={big} alt="The Big Guarantee" className="w-40 mx-auto" />
            </div>

            {/* ข้อความ */}
            <p className="text-lg text-gray-800 leading-relaxed">
              Guaranteed top-quality products.
              <br />
              We guarantee the highest quality.
            </p>
          </div>

          {/* ฝั่งขวา - รูปภาพ */}
          <div className="w-1/2">
            <img
              src={fight}
              alt="big"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="relative inline-block">
          {/* รูปภาพ */}
          <img src={sleep} alt="sleep" className="w-full h-auto" />

          {/* ปุ่มซ้อนบนรูป */}
          <button
            className="absolute bottom-10 left-1/2 -translate-x-1/2 px-24 py-5 bg-white rounded-full 
               text-gray-900 font-medium shadow hover:bg-gray-100 transition"
          >
            SHOP
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
