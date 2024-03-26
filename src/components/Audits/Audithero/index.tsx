import React from 'react'

const Audithero = () => {
    return (
        <div>
            <section className="audit_hero_bg  bg-[#060b27] py-[100px]">
                <div className="container mx-auto px-5 relative">
                    <div className="flex min-[992px]:flex-row flex-col  justify-between max-[991px]:text-left">
                        <div className="min-[992px]:w-[70%] w-full">
                            <h1 className="min-[992px]:text-[62px] text-5xl max-[500px]:text-4xl text-white font-black uppercase pt-[70px] mb-2">
                                Secure your blockchain ecosystem with all in one security solutions</h1>
                            <div className="min-[992px]:w-[662px]"><p className=" text-[#fff] mb-8 text-[22px] font-medium ">
                                Protect your assets across any blockchain network with our multi-chain support and advanced security features.</p>
                                <div className="my-3">
                                    <a className="" href="/">
                                        <button className="inline-flex text-base max-[350px]:text-sm font-normal btn-dark bg-[#CFFF13] text-[#000]  py-[8px] max-[321px]:px-2  px-[20px] rounded-2xl">Buy SCSAFU</button>
                                    </a>
                                </div>
                                <div className="py-4 ">
                                    <div className="hero_top">
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between max-[339px]:justify-center items-center pb-[50px]">
                                    <img src="./assest/binance.webp" width={130} height={100} alt="" />
                                    <img src="./assest/corda.png" width={130} height={100} alt="" />
                                    <img src="./assest/solana.png" width={130} height={100} alt="" />
                                    <img src="./assest/solidity.png" width={130} height={100} alt="" />
                                    <img src="./assest/tron.png" width={130} height={100} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="min-[992px]:w-[30%] w-full pt-[50px]">
                            <img src="./assest/Heroimg.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Audithero
