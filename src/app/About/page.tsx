import Image from "next/image"

export default function Contact(){
    return(
        <div >
        
            <div className="fixed z-[-1] w-[100vw] h-[100vh]" >
            <Image src={"/images/pexels-art.jpg"} rel="preload" alt=" background image" priority fill style={{ objectFit: 'cover' }}/>   
            </div>

            <div className=" h-[1000px] md:h-[700px] lg:h-[800px] w-full  bg-black bg-opacity-90 p-10 md:p-20 ">
                <h1 className="text-white text-4xl flex items-center justify-center p-5">Biography</h1>

                <div className=" w-[300px] md:w-[600px] lg:w-[700px] lg:ml-[230px] h-fit lg:flex md:flex mt-10">
                    <div className="w-[280px] p-5 ">
                        <p className="text-white ">Clara Elmont was a Dutch expressionist painter known for his emotive use of color and texture. His iconic works, such as Echoes of the Forgotten, captured the turbulence and beauty of early 20th-century Europe. Reclusive by nature, Clara&apos;s art spoke volumes about human emotion and resilience, securing her place as one of the pioneers of modern expressionism.</p>
                    </div>
                    <Image src={"/about/picture.jpg"} alt="famous artist" width={400} height={500}  className=" w-[100%] h-auto md:w-[300px] lg:w-[400px]"/>
                </div>
            </div>

        </div>
    )
}      