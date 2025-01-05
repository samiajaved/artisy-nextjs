import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <div>
      {/* Background Image */}
      <div className="fixed z-[-1] w-[100vw] h-[100vh]">
        <Image
          src={"/images/bg-img.jpg"}
          alt="background image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="h-[800px] w-full bg-black bg-opacity-90">
        <div className="w-[300px] h-[700px] mx-12 py-20 px-2 md:w-[500px] md:mx-[130px] md:px-[70px] lg:w-[1070px] lg:py-[100px] lg:px-0 lg:flex justify-between">
          {/* Abstract Paintings */}
          <Link href="/work/abstract">
            <div className="relative group cursor-pointer">
              <Image
                src={"/abstract/img-1.jpg"}
                alt="Abstract Painting"
                width={280}
                height={280}
                className="lg:w-[440px] lg:h-auto md:w-[340px]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg">Explore Abstract Paintings</p>
              </div>
            </div>
          </Link>

          {/* Oil Paintings */}
          <Link href="/work/oilpainting">
            <div className="relative group cursor-pointer mt-8 lg:mt-0">
              <Image
                src={"/oilpaintings/img-1.jpg"}
                alt="Oil Painting"
                width={280}
                height={280}
                className="lg:w-[440px] lg:h-[440px] md:w-[340px]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg">Explore Oil Paintings</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
