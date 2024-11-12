"use client";
import Image from "next/image";
import Mint from "../images/mint.png";
import Navy from "../images/navy.png";
import Ocean from "../images/ocean.png";
import Header from "../components/Header.jsx";
import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react";
import SelectColor from "@/components/SelectColorButton";
import ThumbNail from "@/components/ThumbNail";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(Mint);
  return (
    <div>
      <Header />
      <main className="grid grid-cols-2 items-center gap-y-10">
        <div className="flex flex-col gap-20 text-white">
          <h1 className="text-6xl capitalize leading-tight">
            <span className="font-bold">The perfect moment</span> <br />
            between past and <br />
            future.
          </h1>
          <div>
            <button className="border border-2 border-white px-12 py-2 rounded-3xl">Buy now</button>
          </div>
        </div>
        <div className="flex items-center justify-self-center">
          <Image src={selectedColor} alt="Mint colored iWatch" width={400} />
          <div className="flex flex-col gap-5">
            <SelectColor color={Navy} bgColor="bg-navy" setSelectedColor={setSelectedColor} />
            <SelectColor color={Mint} bgColor="bg-mint" setSelectedColor={setSelectedColor} />
            <SelectColor color={Ocean} bgColor="bg-ocean" setSelectedColor={setSelectedColor} />
          </div>
        </div>
        <div className="flex items-center gap-5 text-white">
          <MdArrowRightAlt className="rotate-180" />
          <div>1</div>
          <MdArrowRightAlt />
        </div>
        <div className="flex justify-self-center gap-5">
          <ThumbNail src={Navy} bgColor="bg-navy" setSelectedColor={setSelectedColor} />
          <ThumbNail src={Mint} bgColor="bg-mint" setSelectedColor={setSelectedColor} />
          <ThumbNail src={Ocean} bgColor="bg-ocean" setSelectedColor={setSelectedColor} />
        </div>
      </main>
    </div>
  );
}
