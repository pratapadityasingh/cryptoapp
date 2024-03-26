
import React, { useState } from 'react';

const Form = () => {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const { name, value, type  } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]:value
           
        }));
      };
    
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        message:"",
      });
    
      const handleConsultation = () => {
        console.log(formData); 
        alert("Your consultation has been registered");
        setFormData({ name: "",
        phone: "",
        email: "",
        company: "",
        message:"",}
        )
    };
      
    
    return (
        <>
        
            <section className="min-[992px]:py-[100px] py-[50px] bg-[#060b27]">
                <div className="container mx-auto  px-5 relative z-40 ">
                    <div className="contact_bg  px-5 ">
                        <div className="py-5 Us">
                            <h2 className="text-[42px] font-black max-[767px]:text-4xl text-[#060B27] leading-[42px] my-5">
                                   Have a Project Idea? Schedule a Call with Us!
                            </h2>
                            <p className="text-base font-normal text-[#060B27]">
                                Shoot us an email with your smart contract development request, and we will contact you within one business day.
                            </p>
                        </div>
                        <div className="flex min-[1280px]:flex-row flex-col items-base justify-between max-[1279px]:text-left">
                            <div className="min-[1280px]:w-[60%] w-full realtive mt-5 ">
                                <form >
                                    <div className=" min-[1280px]:flex min-[1280px]:items-center min-[1280px]:gap-4">
                                        <div className="mb-4">
                                            <input type="text" id="name" name="name" placeholder="Name" className="mt-1 px-3 block max-[1279px]:w-full w-[328px] h-[55px] text-[#000] border-[1px] border-[#070C26] bg-transparent border-solid 
                                             outline-none focus:ring-0 placeholder-black"
                                             value={formData.name}
                                             onChange={handleChange}  />
                                             
                                        </div>
                                        
                                        <div className="mb-4">
                                            <input type="text" id="phone" name="phone" placeholder="Phone"
                                                className="mt-1 px-3 block max-[1279px]:w-full w-[328px] h-[55px] text-[#000] border-[1px] border-[#070C26] bg-transparent border-solid  outline-none 
                                                focus:ring-0 placeholder-black" 
                                                value={formData.phone}
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className=" min-[1280px]:flex min-[1280px]:items-center min-[1280px]:gap-4">
                                        <div className="mb-4">
                                            <input type="email" id="email" name="email" placeholder="Email" className="mt-1 px-3 block max-[1279px]:w-full w-[328px] h-[55px]
                                             text-[#000] border-[1px] border-[#070C26] bg-transparent border-solid  outline-none focus:ring-0
                                              placeholder-black" value={formData.email} 
                                              onChange={handleChange}/>
                                        </div>
                                        <div className="mb-4">
                                            <input type="text" id="company" name="company" placeholder="Company" className="mt-1 px-3 block max-[1279px]:w-full w-[328px] h-[55px]
                                             text-[#000] border-[1px] border-[#070C26] bg-transparent border-solid  outline-none focus:ring-0
                                              placeholder-black" value={formData.company}
                                              onChange={handleChange}/ >

                                            </div>
                                    </div>
                                    <div className="mb-4">
                                        <textarea id="message" name="message" placeholder="Message" 
                                        className="mt-1 py-3 px-3  max-[1279px]:w-full block w-[673px] h-[106px] text-[#000] border-[1px] 
                                        border-[#070C26] bg-transparent border-solid  
                                        outline-none focus:ring-0 placeholder-black"value={formData.message}
                                        onChange ={handleChange}>
                                            
                                        </textarea>
                                    </div>
                                </form>
                                <div className="mt-3 max-[1279px]:text-center max-[1279px]:my-4 ">
                                    <button onClick={handleConsultation} className="inline-flex text-base max-[350px]:text-sm
                                     font-normal btn-dark bg-[#060B27] text-[#fff]  py-[8px] max-[321px]:px-2  px-[20px] rounded-full
                                     ">Get a free consultation
                                    </button>
                                </div>
                            </div>
                            <div className="min-[1280px]:w-[38%] w-full realtive mt-2">
                                <div className="min-[1280px]:absolute min-[1280px]:bottom-[-3%] contact_image">
                                    <img src="./assest/contactusimg.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form

