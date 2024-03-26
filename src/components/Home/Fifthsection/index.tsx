import React from 'react'

const Fifthsection = () => {
  return (
    <div>
        <section className="fifth_bg min-[992px]:py-[100px] py-[50px] bg-[#060b27]  ">
                <div className="container mx-auto  px-5 relative z-[50] ">
                    <div className="flex min-[992px]:flex-row flex-col-reverse  justify-between max-[991px]:text-left afters">
                        <div className="min-[992px]:w-[40%] w-full relative">
                            <div className="min-[992px]:absolute min-[992px]:top-[-17%] min-[992px]:right-[-45%] methodlogy_img">
                                <img src="./assest/fifthimg.webp" width={523}
                                    height={723}
                                    alt="" />

                            </div>
                        </div>
                        <div className="min-[992px]:w-[60%]  relative mt-5  ">
                            <h2 className="text-[42px] font-black text-[#060B27] max-[767px]:text-4xl leading-[42px] my-5">
                                Penetrative Audit Methodology</h2>
                            <p className="text-base font-normal text-[#060B27]">
                                ECHELON-1 Smart Contract Auditing is Reliable, Fast, Secure, and Cost-Effective!</p>
                            <div className="pt-5">
                                <h3 className="text-[22px] font-black text-[#060B27]">1 Solidity Assessment</h3>
                                <p className="text-base font-normal text-[#060B27] my-3">Line by line reviewal of the project code by the experts. Simulations to identify the back-door vulnerability.</p>
                                <h3 className="text-[22px] font-black text-[#060B27]">2 Recommendation</h3>
                                <p className="text-base font-normal text-[#060B27] my-3">Identifying errors, issues and security vulnerabilities in the code in order to suggest the improvements.</p>
                                <h3 className="text-[22px] font-black text-[#060B27]">3 Validation</h3>
                                <p className="text-base font-normal text-[#060B27] my-3">
                                    Consulting the auditee with improvements and validation of outstanding issues.</p>
                                <h3 className="text-[22px] font-black text-[#060B27]">4 Reporting</h3>
                                <p className="text-base font-normal text-[#060B27] my-3">Thorough and transparent reporting of the smart contract assessment. Deployment on our platform.
                                </p>
                            </div>
                        </div>
                    </div >
                </div >


            </section >
    </div>
  )
}

export default Fifthsection
