import Image from "next/image"
import Link from "next/link"

const oilPainting = ()=>{
    return(
        <div>
            <div className=" bg-black py-6">
                <div className="  w-[300px] h-auto mx-8 my-4 md:w-[560px] md:mx-24 md:my-10 lg:w-[1150px]">
                    <h1 className="flex items-center justify-center text-4xl text-white py-5 ">Oil Paintings</h1>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                            <Image src={"/oilpaintings/pic-1.jpg"} alt="canvas painting" width={250} height={0} priority/>  
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg -mt-20">$690</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                            <Image src={"/oilpaintings/pic-2.jpg"} alt="canvas painting" width={260} height={0}/>   
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg">$670</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                        <Image src={"/oilpaintings/pic-3.jpg"} alt="canvas painting" width={260} height={0} className="-mt-[100px] md:-mt-[160px] lg:-mt-0"/> 
                            <div className="absolute inset-0 bg-black bg-opacity-50 -mt-[100px] md:-mt-[170px] lg:-mt-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg">$529</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                            <Image src={"/oilpaintings/pic-4.jpg"} alt="canvas painting" width={260} height={0} className="-mt-8 lg:-mt-0"/> 
                            <div className="absolute inset-0 bg-black bg-opacity-50 -mt-8 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg lg:p-[112px] md:p-20 p-10 ">$530</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                        <Image src={"/oilpaintings/pic-5.jpg"} alt="canvas painting" width={260} height={0} className="-mt-8 lg:-mt-32"/>   
                            <div className="absolute inset-0 bg-black bg-opacity-50 -mt-10 lg:-mt-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg">$700</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                        <Image src={"/oilpaintings/pic-6.jpg"} alt="canvas painting" width={260} height={0} className="-mt-20 md:-mt-[120px] lg:-mt-0"/>   
                            <div className="absolute inset-0 bg-black -mt-[80px] md:-mt-[130px] lg:-mt-0 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg -mt-[148px] md:-mt-[280px] lg:-mt-[130px] ">$600</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                        <Image src={"/oilpaintings/pic-7.jpg"} alt="canvas painting" width={260} height={0} className="-mt-8 lg:-mt-0"/>   
                            <div className="absolute inset-0 bg-black bg-opacity-50 -mt-8 lg:-mt-0 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg lg:p-40 md:p-32 p-20">$680</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                            <Image src={"/oilpaintings/pic-8.jpg"} alt="canvas painting" width={260} height={0} className="-mt-[190px] md:-mt-[330px] lg:-mt-[210px]"/>
                            <div className="absolute inset-0 -mt-48 md:-mt-[340px] lg:-mt-52 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg -mt-32 lg:-mt-44">$640</p>
                            </div>
                        </div>                          

                             
                    </div>
                </div>
                <div className="flex items-start justify-start">
                <button className="border-2 border-white text-white p-3 ml-28 hover:text-gray-600"><Link href="/work/abstract">abstract paintings</Link></button>
                </div>
            </div>
        </div>
    )
}

export default oilPainting