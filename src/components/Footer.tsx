import "../index.css"
import marget from "../../public/marget.svg";
import bank from "../../public/bank.svg";
import qr from "../../public/qrcode.svg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import line from "../../public/line.svg";
function Footer() {
    return (
        <>

            <div className="grid grid-cols-3 gap-4 bg-[#FE84B0]">
                <div className="flex flex-col pl-24 space-y-3 mt-8">
                    <p className="text-white">สนับสนุนลูกค้า</p>
                    <p className="text-white mt-5">แคตตาล็อค</p>
                    <p className="text-white">ลงทะเบียนรับประกัน</p>
                    <p className="text-white">นโยบายการจัดส่งสินค้า</p>
                    <p className="text-white mb-5">รายการที่ถามบ่อย (FAQs)</p>
                    <img src={marget} alt="marget" width="200" height="200" />
                    <img src={bank} alt="marget" width="200" height="200" className="mb-8" />
                </div>
                <div className="flex flex-col space-y-3 mt-8 ">
                    <p className="text-white">ระบบของเรา</p>
                    <p className="text-white mt-5">ที่ตั้งสาขา</p>
                    <p className="text-white">เงื่อนไขในการใช้บริการ</p>
                    <p className="text-white">การจัดเก็บข้อมูลส่วนตัว</p>
                    <p className="text-white mb-5">ร่วมงานกับเรา</p>
                </div>
                <div className="flex flex-col space-y-3 mt-8 ">
                    <p className="text-white">ช่องสนับสนุน</p>
                    <p className="text-white mt-5">ฝ่ายบริการลูกค้า (09.00-18.00)</p>
                    <p className="text-white">Hotline: 1497 หรือ 097-946-2405</p>
                    <p className="text-white">LINE OFficial</p>
                    <p className="text-white mb-5">@lotusbedding</p>
                    <img src={qr} alt="qr" width="80" />
                    <p className="text-white">E-mail: cs@supportlotusbedding.com</p>
                    <p className="text-white">ติดต่อเรา</p>
                    <div className="flex flex-row gap-5">
                          <a href=""><img src={facebook} alt="facebook" width="30" className="mb-5"/></a>
                    <a href=""><img src={instagram} alt="instagram" width="30" className="mb-5"/></a>
                    <a href=""><img src={line} alt="line" width="30" className="mb-5"/></a>
                    </div>
                  
                </div>
            </div>
        </>
    )
}

export default Footer
