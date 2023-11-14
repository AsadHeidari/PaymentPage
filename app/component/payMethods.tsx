import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const POST_URL = "https://gateway.zibal.ir/v1/request";

function PayMethods({
  setLoading,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
  /* -------------------------------------------------------------------------- */
  /*                                    hooks                                   */
  /* -------------------------------------------------------------------------- */
  const router = useRouter();
  /* -------------------------------------------------------------------------- */
  /*                                  functions                                 */
  /* -------------------------------------------------------------------------- */
  const handlePay = async () => {
    setLoading(true);

    // body object for request
    const data = {
      merchant: "zibal",
      amount: 160000,
      callbackUrl: "http://google.com",
      description: "Hello World!",
      mobile: "09123456789",
    };

    try {
      const response = await fetch(POST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      router.push(`https://gateway.zibal.ir/start/${result.trackId}`);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="border-white border w-full md:w-2/3 h-full rounded-3xl p-4">
      <h2 className="mb-5 font-bold text-lg">
        درگاه پرداخت خود را انتخاب کنید:
      </h2>

      <Swiper
        className="mySwiper h-32 p-7"
        dir="rtl"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded-full w-24 h-24 p-2 flex justify-center items-center hover">
            <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center mt-3 gap-4">
        <label className="bg-slate-800 w-1/3 p-4 flex gap-8 items-center rounded-xl">
          <input type="radio" name="p" />
          <p> پرداخت با X</p>
        </label>
        <label className="bg-slate-800 w-1/3 p-4 flex gap-8 items-center rounded-xl">
          <input type="radio" name="p" />
          <p>پرداخت با Y</p>
        </label>
      </div>

      <div className="flex flex-col justify-center items-center mt-7 w-full">
        <button
          className="bg-green-500 py-4 px-5 text-black rounded-3xl font-bold text-center w-2/3"
          onClick={handlePay}
        >
          پرداخت
        </button>
      </div>
    </div>
  );
}

export default PayMethods;
