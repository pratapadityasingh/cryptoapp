import React from 'react'

const Herosection = () => {
  return (
    <div>
       <section className="hero_bg hero_bg1  h-[100vh]">
                <div className=" text-white text-center pt-[200px] mx-[50px]">
                    <h1 className=" font-extrabold  text-6xl tracking-wide py-2">
                        BUILD TRUST IN YOUR PROJECT WITH A SMART CONTRACT
                    </h1>
                </div>
                <div className="mx-auto  min-[992px]:w-[900px]">
                    <p className=" text-[#fff] mb-8 text-[22px] font-medium text-center ">
                        SM has audited more than 500,000 solidity code-lines on Binance,
                        Ethereum, Cronos, Fantom, Avalanche, Polygon, Bitcoin Cash, Oasis,
                        and Metis Smart Chains!
                    </p>
                    <div className="py-4 ">
                        <div className="hero_top"></div>
                    </div>
                    <div className="flex flex-wrap justify-between max-[339px]:justify-center items-center">
                        <img src="./assest/binance.webp" width={169} height={100} alt="" />
                        <img src="./assest/corda.png" width={169} height={100} alt="" />
                        <img src="./assest/solana.png" width={169} height={100} alt="" />
                        <img src="./assest/solidity.png" width={169} height={100} alt="" />
                        <img src="./assest/tron.png" width={169} height={100} alt="" />
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Herosection
