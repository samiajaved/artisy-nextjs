import Image from "next/image";

export default function Hero(){
    return(
        <div >
        
            <div className="fixed z-[-1] w-[100vw] h-[100vh]" >
            <Image src={"/images/pexels-art.jpg"} alt=" background image" priority fill style={{ objectFit: 'cover' }}/>   
            </div>


            
            <div className=" h-[800px] w-full  bg-black bg-opacity-50">
                <div className=" text-center pt-[200px]">
                    <h1 className="font-roboto text-3xl text-white">art by</h1>
                    <h1 className="font-roboto text-8xl lg:text-[170px]  text-white">famous Artist</h1>
                </div>
            </div>
        </div>

    )
}
