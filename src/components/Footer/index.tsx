import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footers-bg  bg-[#060b27]">
        <div className="container px-5 min-[992px]:py-12 max-[991px]:py-8  mx-auto">
          <div className="flex  justify-between items-center max-[991px]:justify-center max-[991px]:flex-col max-[991px]:text-center">
            <div className="max-[991px]:py-3">
              <h3 className="text-[22px] font-black text-[#fff]">Contacts</h3>
              <p className="text-base font-normal text-[#fff]">contact@smartcontract.com</p></div>
            <div className="max-[991px]:py-3"><h3 className="text-[22px] font-black text-[#fff]">USA Office</h3>
              <p className="text-base font-normal text-[#fff]">1259 Coffeen Avenue STE 388589, Shridan, Wy, 82801</p></div>
            <div className="max-[991px]:py-3"><h3 className="text-[22px] font-black text-[#fff]">EU office</h3>
              <p className="text-base font-normal text-[#fff]">Al. Arunwaldzka 56, 80-241, Sssfs, India</p>
            </div></div>
          <div className="py-5">
            <div className="footer_top">
            </div></div>
          <div className="flex  justify-between items-center max-[991px]:justify-center max-[991px]:flex-col max-[991px]:text-center">
            <div className="flex items-center gap-3 max-[991px]:py-3"><a href="/">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="w-[21px] text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg></a><a href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-[21px] text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a><a href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-[21px] text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a></div>
            <div className="flex items-center gap-4 max-[991px]:py-3"><a href="/">
              <span className="text-base font-normal text-[#fff] min-[992px]:ml-20">Privacy policy</span></a>
              <a href="/">
                <span className="text-base font-normal text-[#fff]">Terms and conditions</span></a></div>
            <div className="max-[991px]:py-3">
              <p className="text-base font-normal text-[#fff]">© 2024 SmartContract Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default Footer;
