import React, { useState } from "react";
import welfareData from "./data/utils.json";
import * as LucideIcons from "lucide-react";
import Footer from "./components/Footer";

const App = () => {
  const Category = ({ category, index, toggleCategory, isExpanded }) => {
    const IconComponent = LucideIcons[category.icon];
    return (
      <div className="border border-white/10 rounded-lg overflow-hidden ">
        <button
          className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer ${
            isExpanded ? "bg-red-500" : "bg-primary"
          }`}
          onClick={() => toggleCategory(index)}
        >
          <div className="flex items-center gap-3 ">
            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-400">
              {IconComponent && <IconComponent className="text-[#D93327]" size={24} />}
            </div>
            <h2 className="font-medium text-white">{category.name}</h2>
          </div>
          {isExpanded ? (
            <LucideIcons.ChevronUp className="h-5 w-5 text-[#D93327]" />
          ) : (
            <LucideIcons.ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </button>

        {isExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0 p-4 bg-black/10 ">
            {category.items.map((item, idx) => (
              <CategoryItem key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
    );
  };
  const CategoryItem = ({ item }) => (
    <div className="py-2 px-2">
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 rounded-full bg-[#D93327]" />
        <div>
          <span className="text-sm font-medium text-black">{item.name}</span>
          {item.description && <span className="text-xs text-red-400 ml-2">({item.description})</span>}
        </div>
      </div>
    </div>
  );

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <>
      <section className="flex h-screen  items-center justify-center">
        <div className="flex flex-col items-center ">
          <div className="mb-10 w-2/3">
            <img src="https://media.jobthai.com/v1/images/logo-pic-map/216071_pic_20240502161221.jpeg" className="rounded-xl" />
          </div>
          <h2 className="text-6xl mb-2">
            บริการ <span className="text-primary font-bold">การตลาดออนไลน์</span> ครบวงจร
          </h2>
          <h2 className="text-2xl text-center ">
            บริษัท <span className="text-primary">ไลค์ช็อปมอลล์</span> จำกัด ผู้เชี่ยวชาญด้านการตลาดออนไลน์และ E-Commerce
          </h2>

          <div className="flex gap-2">
            <button className="px-5 py-2 rounded-lg bg-primary mt-5 text-white cursor-pointer">บริการของเรา</button>
            <button className="px-5 py-2 rounded-lg border border-primary mt-5 text-primary cursor-pointer hover:bg-primary hover:text-white">
              ติดต่อเรา
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-32">
        <h1 className="text-5xl text-center mb-16">บริการของเรา</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            <div className="max-w-md bg-white shadow-md rounded-lg">
              <div className="card-body p-5 py-10">
                <div className="bg-primary w-fit p-3 text-white rounded-full">
                  <i className="fa-solid fa-desktop text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold mt-4">ผลิตสื่อคอนเทนต์</h2>
                <h2 className="text-gray-500">สร้างสรรค์คอนเทนต์ที่ดึงดูดความสนใจและสร้างการมีส่วนร่วม</h2>
              </div>
            </div>
            <div className="max-w-md bg-white shadow-md rounded-lg">
              <div className="card-body p-5 py-10">
                <div className="bg-primary w-fit p-3 text-white rounded-full">
                  <i className="fa-solid fa-store text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold mt-4">E-Commerce</h2>
                <h2 className="text-gray-500">พัฒนาและจัดการร้านค้าออนไลน์ให้มีประสิทธิภาพสูงสุด</h2>
              </div>
            </div>
            <div className="max-w-md bg-white shadow-md rounded-lg">
              <div className="card-body p-5 py-10">
                <div className="bg-primary w-fit p-3 text-white rounded-full">
                  <i className="fa-solid fa-message text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold mt-4">การตลาดออนไลน์</h2>
                <h2 className="text-gray-500">วางแผนกลยุทธ์การตลาดที่ตรงกลุ่มเป้าหมายและสร้างยอดขาย</h2>
              </div>
            </div>
            <div className="max-w-md bg-white shadow-md rounded-lg">
              <div className="card-body p-5 py-10">
                <div className="bg-primary w-fit p-3 px-4 text-white rounded-full">
                  <i className="fa-solid fa-mobile text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold mt-4">บริหารช่องทางออนไลน์</h2>
                <h2 className="text-gray-500">ดูแลและพัฒนาช่องทางออนไลน์ทุกแพลตฟอร์มอย่างครบวงจร</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-32">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h1 className="text-xl lg:text-5xl font-bold mb-5">
              วิสัยทัศ<span className="text-primary bold">องค์กร</span>
            </h1>
            <h2 className="text-md mb-5">
              "ร่วมกันพัฒนา ร่วมกันเติบโต ร่วมกันยิ่งใหญ่ ร่วมทำงานกัน ทุกๆคนจะได้เรียนรู้ในสิ่ง <br />
              ต่างๆมากๆมาย"
            </h2>

            <h2 className="text-2xl font-bold mb-3">วัฒนธรรมองค์กร</h2>
            <h2 className="text-md">
              "วิธีการทำงานใหม่" ภายใต้หลักการพัฒนาองค์กรให้โต 10 เท่า และเป็นที่ 1 ในทุกสิ่งที่เราทำ กล้าเผชิญความล้มเหลวหลาย ๆ ครั้ง
              และกล้าเสี่ยง และทำงานแบบ Move Fast & Break Thing
            </h2>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img src="./img/meeting.jpg" className="rounded-lg w-full" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-32">
        <h1 className="text-center text-5xl font-bold mb-10">เสาหลักบริษัท</h1>
        <div className="flex justify-center">
          <img src="./img/4.webp" className="w-1/3" />
        </div>
      </section>

      <section className="container mx-auto py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-10">สวัสดิการสำหรับพนักงาน</h1>

          <div className="space-y-4">
            {welfareData.categories.map((category, index) => {
              const isExpanded = expandedCategory === index;
              return <Category key={index} category={category} index={index} toggleCategory={toggleCategory} isExpanded={isExpanded} />;
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-32">
  <div className="flex flex-wrap justify-center items-center">
    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
      <h1 className="text-3xl lg:text-5xl font-bold mb-5">ติดต่อเรา</h1>
      <p className="text-lg lg:text-xl mb-5">
        หากคุณมีคำถามหรือข้อสงสัยใดๆ หรือต้องการข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา กรุณาติดต่อเราผ่านช่องทางด้านล่าง
      </p>

      <div className="mb-4">
        <h3 className="text-xl font-semibold flex items-center">
          <i className="fas fa-map-marker-alt mr-3 text-primary"></i> ที่อยู่
        </h3>
        <p>
          475/4-5 ถ.ทหารบก ตำบลบ่อพลับ อำเภอเมืองนครปฐม <br /> จังหวัดนครปฐม 73000
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold flex items-center">
          <i className="fas fa-phone-alt mr-3 text-primary"></i> โทรศัพท์
        </h3>
        <p>092-765-9777</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold flex items-center">
          <i className="fas fa-envelope mr-3 text-primary"></i> อีเมล
        </h3>
        <p>hr.likeshop@gmail.com</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold flex items-center">
          <i className="fab fa-line mr-3 text-primary"></i> ไลน์
        </h3>
        <p>@hr_msr (มี@)</p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 px-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.1999764747934!2d100.067987!3d13.827027300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2e542f6f1f83f%3A0x8085b5c44fa33ffb!2sMasaru%20Marketing%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1742351562345!5m2!1sth!2sth"
        className="rounded-lg w-full h-64"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
};

export default App;
