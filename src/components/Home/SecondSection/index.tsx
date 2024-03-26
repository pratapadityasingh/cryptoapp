import React from 'react'


const SecondSection = () => {
  return (
    <div>
      <section className="second_bg bg-[#060b27] min-[992px]:py-[100px] py-[50px]">
                <div className="container mx-auto  px-5 relative z-[50] ">
                    <div className="flex min-[992px]:flex-row flex-col  justify-between max-[991px]:text-left lalbag">
                        <div className="min-[992px]:w-[50%] w-full realtive mt-5 ">
                            <h2 className="text-[42px] font-black text-[#060B27] max-[767px]:text-4xl leading-[42px] my-5">
                                Smart Contract Audit &amp; Solidity Development
                            </h2>
                            <p className="text-base font-medium text-[#060B27]">
                                InterFi provides professional, thorough, fast, and
                                easy-to-understand smart contract security audit. We do in-depth
                                and penetrative static, manual, automated, and intelligent
                                analysis of the smart contract. Some of our automated scans
                                include tools like ConsenSys MythX, Mythril, Slither, Surya. We
                                can audit custom smart contracts, DApps, NFTs, etc.
                            </p>
                            <div className="pt-5">
                                <h3 className="text-[22px] font-black text-[#060B27]">
                                    Why InterFi Smart Contract Audit?
                                </h3>
                                <p className="text-base font-medium text-[#060B27] my-3">
                                    <span className="font-black">Thorough: </span> 25 Pages+
                                    Extensive Audit Report
                                </p>
                                <p className="text-base font-medium text-[#060B27]">
                                    <span className="font-black"> Fast: </span>Quick 1 to 5 Days
                                    Turnaround Time
                                </p>
                                <p className="text-base font-medium text-[#060B27] my-3">
                                    <span className="font-black"> Affordable: </span>Standard
                                    Contract Audit From $300
                                </p>
                                <p className="text-base font-medium text-[#060B27]">
                                    In conclusion, you'll get a thorough smart contract audit in a
                                    fast, yet affordable manner.
                                </p>
                                <div className="mt-3">
                                    <a className="" href="/">
                                        <button className="inline-flex text-base max-[350px]:text-sm font-normal btn-dark bg-[#060B27] text-[#fff]  py-[8px] max-[321px]:px-2  px-[20px] rounded-lg focus:outline-none">
                                            Request an Audit Today
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="min-[992px]:w-[50%] w-full relative">
                            <div className="auidt_img min-[992px]:absolute min-[992px]:top-[-17%] min-[992px]:left-[0]">
                                <img
                                    src="./assest/secondsimg.webp"
                                    width={546}
                                    height={673}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default SecondSection
