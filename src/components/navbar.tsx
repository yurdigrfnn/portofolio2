"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineProfile, AiOutlineRead } from "react-icons/ai";

type Navbar = {
  onClose : boolean
}
export default function Navbar({

}) {
  const [open, setOpen] = useState<boolean>(false);

  
  return (
    <div className="flex justify-between">
      <div>TEst</div>
      <div>
        <button onClick={() => setOpen(!open)}>test</button>
      </div>
      <div
        className={`sm:flex h-screen ${
          open ? "translate-x-0 " : "translate-x-full"
        } w-full text-white  fixed flex left-0  right-0 transition-all duration-500 top-0 sm:justify-end sm:flex-row`}
      >
        <div onClick={()=> setOpen(!open)} className={`w-1/3 h-screen transition-colors ease-in duration-[1000ms] ${open ? 'bg-opacity-60 bg-black' : 'duration-[0ms] transition-none' }`}>

        </div>
        <div className={`flex w-2/3 bg-black h-screen relative flex-col gap-4`}>
          <div>
            <Link
              href="/"
              className="flex gap-4"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineHome className="text-3xl" />
              <span className="text-xl font-semibold my-auto">Home</span>
            </Link>
          </div>
          <div>
            <Link
              href="/blog"
              className="flex gap-4"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineRead className="text-3xl" />
              <span className="text-xl font-semibold my-auto">Blog</span>
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className="flex gap-4"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineProfile className="text-3xl" />
              <span className="text-xl font-semibold my-auto">About</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
