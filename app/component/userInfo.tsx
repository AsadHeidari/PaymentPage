import React from "react";
import Image from "next/image";

function UserInfo() {
  return (
    <div className="border-white border w-full md:w-1/3 h-full rounded-3xl flex flex-col justify-center items-center p-4">
      <Image
        className="rounded-full"
        src="/profile-pic.jpg"
        alt="image"
        width={150}
        height={150}
      />
      <p className="font-bold text-lg mt-3">دکتر محسن اکبری</p>
      <p className="mt-3">متخصص گوش و حلق و بینی</p>
      <p className="mt-3">کد نظام پزشکی:</p>
      <p>545456466</p>
    </div>
  );
}

export default UserInfo;
