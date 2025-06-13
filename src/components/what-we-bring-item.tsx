import Check from "./svgs/check";

export default function WhatWeBringItem({ text }: { text: string }) {
  return (
    <span className="text-md flex font-normal text-gray-700 md:text-xl lg:text-2xl">
      <Check />
      <span className="pl-2">{text}</span>
    </span>
  );
}
