import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";

const DecoratingImg = () => {
  return (
    <section className="relative min-h-screen bg-gray-100 overflow-visible">
      
      {/* الصورة العلوية اليسار */}
      <img
        src={img1}
        alt="Decorative Image 1"
        className="absolute top-10 left-20  translate-x-16  w-[380px] z-10"
      />

      {/* الصورة الكبيرة يمين */}
      <img
        src={img2}
        alt="Decorative Image 2"
        className=" absolute  top-20 right-20   -translate-x-12  w-[320px] md:w-[500px] lg:w-[600px] z-20"
      />

      {/* الصورة اللي في النص */}
      <img
        src={img3}
        alt="Decorative Image 3"
        className="absolute top-[350px] left-1/2 -translate-x-1/2 w-[420px] z-30"
      />

      {/* الصورة السفلية يمين */}
      <img
        src={img4}
        alt=" Decorative Image 4"
        className="absolute bottom-5 right-40  translate-y-12 top-[520px] w-[350px] z-5"
      />

    </section>
  );
};

export default DecoratingImg;
