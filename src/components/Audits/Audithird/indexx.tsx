import React from 'react'

const AuditThird = () => {
    return (
        <div>
            <section className="audit_third_bg min-[992px]:pb-[100px] h-[600px] bg-[#060b27]">
                <div className="container mx-auto  px-5 relative z-[50] ">
                    <div className="flex min-[992px]:flex-row flex-col-reverse items-center justify-between max-[991px]:text-left audit_afters audit_afters_1 max-[991px]:py-5">
                        <div className="min-[992px]:w-[40%] w-full relative">
                            <div className="auidt_fifths_img top-0">
                                <img src="./assest/auditthirdimg.webp" alt="" />
                            </div>
                        </div>
                        <div className="min-[992px]:w-[58%] w-full relative ">
                            <h2 className="text-[42px] font-black text-[#060B27] max-[767px]:text-4xl leading-[42px] mb-4">SMsafu Token Scanner</h2>
                            <p className="text-base font-normal text-[#060B27] min-[992px]:w-[461px]">Smart contracts are blockchain-based programs that perform operations automatically based on certain conditions.</p>
                            <div className="py-4">
                                <div className="flex items-center justify-between space-x-4 mt-1 py-3 px-3  max-[1279px]:w-full  w-[100%] h-[55px] text-[#000] border-[1px] border-[#070C26] bg-transparent border-solid  outline-none focus:ring-0 placeholder-black">
                                    <input type="text"
                                        placeholder="0x32bFd701655EDF95809EaA5e525F0024ea571267"
                                        className="mt-1 py-3 px-3  max-[1279px]:w-full block w-[347px] text-[#000]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-black"
                                        value="" />
                                    <select className="mt-1 py-3 px-3 border-l-[1px]  border-[#070C26] max-[1279px]:w-full block w-[100px] text-[#000]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-black">
                                        <option value="">BSC</option>
                                        <option value="BNB">BNB</option>
                                        <option value="CAKE">CAKE</option>
                                        <option value="BTCB">BTCB</option>
                                        <option value="ETH">ETH</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button className="inline-flex text-base max-[350px]:text-sm font-normal btn-dark bg-[#060B27] text-[#fff]  py-[8px] max-[321px]:px-2  px-[20px] rounded-full">Scan Contract</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AuditThird
