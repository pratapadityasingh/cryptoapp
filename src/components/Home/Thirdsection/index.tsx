import React from 'react'

const Thirdsection = () => {
  return (
    <div>
       <section className="third_bg bg-[#060b27] min-[992px]:py-[100px] py-[50px]">
                <div className="container mx-auto  px-5">
                    <div className="flex justify-center text-center mb-5">
                        <h2 className="text-[42px] font-black text-[#fff]  max-[767px]:text-4xl leading-[42px] my-5">
                            How Can Your Business{" "}
                            <span className="font-black text-[#D7E022]">Benefit </span>From
                            Smart Contracts?
                        </h2>
                    </div>
                    <div className="flex min-[992px]:flex-row flex-col  justify-between max-[991px]:text-center">
                        <div className="min-[992px]:w-[50%] w-full realtive max-[991px]:justify-center max-[991px]:flex ml-[30px]">
                            <img
                                src="./assest/thirdimg.webp"
                                width={518}
                                height={587}
                                alt=""
                            />
                        </div>
                        <div className="min-[992px]:w-[50%] w-full realtive mt-5 mr-[40px]">
                            <div className="flex items-center justify-between max-[991px]:justify-center flex-wrap pb-5">
                                <div className="max-[991px]:py-3">
                                    <h3 className="text-[#CFFF13] text-[22px] font-black mb-2">
                                        Transparency
                                    </h3>
                                    <p className="text-base text-[#fff] font-normal min-[992px]:w-[230px]">
                                        Thanks to blockchain technology, once created, smart
                                        contracts can never be changed again.
                                    </p>
                                </div>
                                <div className="max-[991px]:py-3">
                                    <h3 className="text-[#CFFF13] text-[22px] font-black mb-2">
                                        Autonomy
                                    </h3>
                                    <p className="text-base text-[#fff] font-normal min-[992px]:w-[230px]">
                                        Smart contracts operate autonomously, without the need for
                                        human oversight or intervention.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between flex-wrap min-[992px]:pt-8">
                                <div className="max-[991px]:py-3">
                                    <h3 className="text-[#CFFF13] text-[22px] font-black mb-2">
                                        No Third Parties
                                    </h3>
                                    <p className="text-base text-[#fff] font-normal min-[992px]:w-[230px]">
                                        One of the most significant features of smart contracts is
                                        that they do not require a third party to run.
                                    </p>
                                </div>
                                <div className="max-[991px]:py-3">
                                    <h3 className="text-[#CFFF13] text-[22px] font-black mb-2">
                                        Speed
                                    </h3>
                                    <p className="text-base text-[#fff] font-normal min-[992px]:w-[230px]">
                                        For many industries, the elimination of the need to manually
                                        process documents sounds appealing in terms of time savings.
                                    </p>
                                </div>
                            </div>
                            <div className="max-[991px]:py-3 mt-3">
                                <a className="" href="/">
                                    <button className="inline-flex text-base max-[350px]:text-sm font-normal btn-dark bg-[#CFFF13] text-[#000]  py-[8px] max-[321px]:px-2  px-[20px] rounded-3xl">
                                        Request an Audit Today
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Thirdsection
