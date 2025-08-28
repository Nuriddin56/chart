import React from "react";

function CardTop() {
  return (
    <div
      className="flex items-center justify-between
     px-8 py-6.5 bg-red rounded-[1.25rem]"
    >
      <div className="flex flex-col gap-2">
        <span className="text-white">My balans</span>
        <span className="font-bold text-light text-[2rem]">$921.48</span>
      </div>
      <img src="./rounds.svg" alt="Rounds imgae" width={72} height={48} />
    </div>
  );
}

export default CardTop;
