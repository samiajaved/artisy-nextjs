import Image from "next/image";
import Link from "next/link";

export default function Contact(){
    return(
        <div >
        
            <div className="fixed z-[-1] w-[100vw] h-[100vh]" >
            <Image src={"/images/bg-img.jpg"} alt=" background image" priority fill style={{ objectFit: 'cover' }}/>   
            </div>

            <div className=" h-[1200px] md:h-[700px] w-full  bg-black bg-opacity-90 ">
                <h1 className="text-white text-4xl flex items-center justify-center p-10">Contact</h1>
                <div className="md:flex lg:flex">
                <div className=" h-[400px] w-[300px] mx-[34px] md:mx-[24px] lg:w-[500px] lg:mx-[100px]">
                    <p className="p-4 md:hidden lg:flex text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem, unde similique sit ullam accusamus voluptatum optio exercitationem, labore nisi hic et pariatur maxime vero quaerat eum deserunt eaque debitis! </p>

                         {/* mail */}
                   
                        <a href="mailto:samiaj380@gmail.com ">
                            <p className="mt-4 text-white flex items-start justify-start md:items-center  md:justify-center lg:items-start lg:justify-start ml-5 lg:ml-5 md:ml-0">samiaj380@gmail.com</p>
                        </a>

                        <p className="mt-4 text-white flex md:items-center md:justify-center items-start justify-start lg:items-start lg:justify-start ml-5 lg:ml-5 md:ml-0 ">03245-128-2492</p>


                    <div className="w-fit flex ml-5 md:ml-10  md:mt-10 mt-3 ">
                        <Link href='https://www.linkedin.com/in/samia-javed-samia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                            <Image src={"/images/social.png"} alt="logo" width={20} height={18} className="w-auto h-auto " />
                        </Link>
                        <Link href="https://github.com/samiajaved">
                            <Image src={"/images/social (1).png"} alt="mail" width={20} height={18} className="w-auto h-auto ml-[30px]  lg:ml-[30px]  "/>
                        </Link>
                    </div>
          
                               
                                    
                </div> 

                    <div id="form" className="border-2 border-white w-[300px] h-[640px] lg:h-[500px] md:h-[500px] mx-[34px] md:mx-[24px] md:w-[500px] lg:w-[500px] p-4">
                        <div className="md:flex lg:flex">
                            <div className="p-4">
                                <h1 className="text-white">First Name</h1>
                                <input className="bg-transparent border-2 border-white text-white"></input>
                            </div>
                            <div className="p-4 ">
                                <h1 className="text-white">Last Name</h1>
                                <input className="bg-transparent border-2 border-white text-white"></input>
                            </div>
                        </div>

                        <div className="md:flex lg:flex">
                            <div className="p-4">
                                <h1 className="text-white">Email</h1>
                                <input className="bg-transparent border-2 border-white text-white"></input>
                            </div>
                            <div className="p-4 ">
                                <h1 className="text-white">subject</h1>
                                <input className="bg-transparent border-2 border-white text-white"></input>
                            </div>
                        </div>
                        <div className="p-4">
                            <h1 className="text-white ">Message</h1>
                            <textarea className="border-2 border-white lg:w-[420px] md:w-[420px] w-[200px] h-[100px] bg-transparent text-white "></textarea>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="border-2 border-white text-white w-[200px] p-3 m-8 hover:text-gray-600">Submit</button>
                        </div>


                    </div>

                  






                </div>


            </div>

            
       </div>

    )
}