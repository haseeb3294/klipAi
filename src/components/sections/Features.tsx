import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-11/12 mx-auto my-10 relative">
      <div className="bg-[#11920030] border border-[#119200] rounded-full py-3 px-4 w-fit">
        <p className="font-bold uppercase leading-none">Benefit</p>
      </div>
      <div className="lg:flex items-center justify-between my-8">
        <h4 className="lg:w-1/3 text-[#151515] text-[38px] md:text-[48px] font-bold leading-tight">Say goodbye to Wallet Addresses.</h4>
        <p className="lg:w-1/4 text-xs md:text-base mt-5 md:mt-0 text-[#151515]">Just enter the handle, select your token, and confirm. No copy-paste. No errors. No friction.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="row-span-2 p-2 bg-[#151515] relative rounded-[20px]">
          <div className="absolute top-5 right-5">
            <div className="w-[35px] h-[35px] relative"><Image src='/icons/plus.svg' alt="plus" fill className="object-contain" /></div>
          </div>
          <div className="px-5 pt-5">
            <div className="bg-[#11920030] border border-[#119200] w-[55px] h-[55px] rounded-2xl relative">
              <Image src='/icons/perimum.svg' alt="perimum" className="object-contain p-3" fill />
            </div>
            <h5 className="text-4xl text-white mt-2">Token <br /> Support</h5>
          </div>
          <div className="relative w-full h-[660px] z-10">
            <Image src='/images/feature-mobile.png' alt="feature-mobile" className="object-contain" fill />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[105px]">
            <div className="relative h-full w-full">
              <Image src='/images/bars.png' alt="bars" fill className="object-contain" />
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#151515] rounded-[20px]">
          <h5 className="text-white text-4xl mt-2">Secure Transfers</h5>
          <div className="relative w-full h-[300px] mt-2">
            <Image src='/images/card.png' alt="card" fill className="object-contain" />
          </div>
        </div>
        <div className="p-6 bg-[#151515] rounded-[20px] relative">
          <div className="relative w-11/12 h-[241px] mt-8">
            <Image src='/images/romulus-card.png' alt="card" fill className="object-contain" />
          </div>
          <div className="absolute right-4 bottom-10">
            <div className="relative w-[202px] h-[173px]">
              <Image src='/images/romulus-card-2.png' alt="card" fill className="object-contain" />
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <div className="w-[35px] h-[35px] relative"><Image src='/icons/plus.svg' alt="plus" fill className="object-contain" /></div>
          </div>
        </div>
        <div className="p-6 bg-[#151515] rounded-[20px] relative">
          <div className="relative w-11/12 h-[263px] mt-8">
            <Image src='/images/balance-card.png' alt="card" fill className="object-contain" />
          </div>
          <div className="absolute right-4 bottom-10">
            <div className="relative w-[239px] h-[184px]">
              <Image src='/images/balance-card-2.png' alt="card" fill className="object-contain" />
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <div className="w-[35px] h-[35px] relative"><Image src='/icons/plus.svg' alt="plus" fill className="object-contain" /></div>
          </div>
        </div>
        <div className="px-2 pt-6 bg-[#151515] rounded-[20px] relative">
          <h5 className="text-white text-4xl text-center mt-2">Unique Identity</h5>
          <div className="relative w-full h-[320px] overflow-hidden mt-2">
            <Image src='/images/exchange-card.png' alt="card" fill className="object-contain z-10" />
            <div className="absolute left-2 top-2 h-full w-full">
              <div className="relative w-full h-full">
                <Image src='/images/exchange-back.png' alt="card" fill className="object-contain" />
              </div>
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <div className="w-[35px] h-[35px] relative"><Image src='/icons/plus.svg' alt="plus" fill className="object-contain" /></div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-2/5 h-full absolute -top-4/12 md:-top-2/12 lg:-top-8 -left-4 md:-left-16 -z-10">
        <div className="relative h-full w-full">
          <Image src='/images/benefits-light.png' alt="light" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Features;
