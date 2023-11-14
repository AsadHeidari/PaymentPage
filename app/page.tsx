"use client";

import { useState } from "react";
import Image from "next/image";

import UserInfo from "./component/userInfo";
import PayMethods from "./component/payMethods";

export default function Home() {
  /* -------------------------------------------------------------------------- */
  /*                                   states                                   */
  /* -------------------------------------------------------------------------- */
  const [loading, setLoading] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {loading ? (
        <Image src="/loading.gif" alt="loading" width={60} height={60} />
      ) : (
        <header className="flex flex-col justify-center items-center md:flex-row h-screen md:h-96 w-full p-4 md:py-8 md:px-9 gap-5">
          <UserInfo />
          <PayMethods setLoading={setLoading} />
        </header>
      )}
    </main>
  );
}
