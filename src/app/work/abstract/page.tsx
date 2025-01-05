import Image from "next/image"
import Link from "next/link"

const Abstract = ()=>{
    return(
        <div>
            <div className=" bg-black py-6">
                <div className="  w-[300px] h-auto mx-8 my-4 md:w-[560px] md:mx-24 md:my-10 lg:w-[1150px]">
                    <h1 className="flex items-center justify-center text-4xl text-white py-5 ">Abstract Paintings</h1>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                            <Image src={"/abstract/pic-1.jpg"} alt="canvas painting" width={250} height={0} priority/>  
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg">$690</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                            <Image src={"/abstract/pic-2.jpg"} alt="canvas painting" width={260} height={0}/>   
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg">$670</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                        <Image src={"/abstract/pic-3.jpg"} alt="canvas painting" width={260} height={0}/> 
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg">$529</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                            <Image src={"/abstract/pic-4.jpg"} alt="canvas painting" width={260} height={0} className="-mt-[20px]  lg:-mt-0"/> 
                            <div className="absolute inset-0 bg-black bg-opacity-50 -mt-5 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg lg:p-20 md:p-20 p-10 ">$530</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                        <Image src={"/abstract/pic-5.jpg"} alt="canvas painting" width={260} height={0}/>   
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg">$700</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                        <Image src={"/abstract/pic-6.jpg"} alt="canvas painting" width={260} height={0} className="-mt-[115px] md:-mt-[190px] lg:-mt-0"/>   
                            <div className="absolute inset-0 bg-black -mt-32 md:-mt-48 lg:-mt-0 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg -mt-20 md:-mt-36 lg:-mt-0 ">$600</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                        <Image src={"/abstract/pic-7.jpg"} alt="canvas painting" width={260} height={0}/>   
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg lg:p-20 md:p-20 p-10">$680</p>
                            </div>
                        </div>  

                        <div className="relative group cursor-pointer mt-8 lg:mt-0">
                            <Image src={"/abstract/pic-8.jpg"} alt="canvas painting" width={260} height={0} className="-mt-[114px] md:-mt-[190px] lg:-mt-[190px] "/>
                            <div className="absolute inset-0 -mt-32 md:-mt-52 lg:-mt-52 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm md:text-lg lg:text-lg  lg:-mt-44">$640</p>
                            </div>
                        </div>                          

                             
                    </div>
                </div>
                <div className="flex items-end justify-end">
                <button className="border-2 border-white text-white p-3 mr-28 hover:text-gray-600"><Link href="/work/oilpainting">oil paintings</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Abstract



