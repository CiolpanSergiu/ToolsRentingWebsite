"use client";
import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import CardBtn from "./CardBtn";

interface Props {
  price: number;
}

const TotalDaysForm = ({ price }: Props) => {
  const minDays = 1;
  const maxDays = 7;
  const [totalRentingDays, setTotalRentingDays] = useState<number>();

  if (totalRentingDays! > 7) setTotalRentingDays(7);
  else if (totalRentingDays! < 1) setTotalRentingDays(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalRentingDays(parseInt(e.target.value));
  };

  const addOneDay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (totalRentingDays) {
      setTotalRentingDays((prevState): number => prevState! + 1);
    } else {
      setTotalRentingDays(1);
    }
  };

  const subractOneDay = (e: React.MouseEvent) => {
    e.preventDefault();
    setTotalRentingDays((prevState): number => prevState! - 1);
  };

  return (
    <form className="flex flex-col">
      <div className="flex justify-center">
        <button>
          <FaArrowDown className="arrow rounded-l-md" onClick={subractOneDay} />
        </button>

        <input
          type="number"
          name="totalRentingDays"
          value={totalRentingDays}
          placeholder="Numarul de zile"
          max={maxDays}
          min={minDays}
          onChange={(e) => handleChange(e)}
          className="mx border-black border py-1 text-center max-w-[10rem] w-full"
        />
        <button>
          <FaArrowUp className="arrow rounded-r-md" onClick={addOneDay} />
        </button>
      </div>
      <span className="mt-4 mx-auto">
        Pret total:
        <span className="font-semibold">
          {" "}
          {price * totalRentingDays! || 0} lei
        </span>
      </span>
      <CardBtn />
    </form>
  );
};

export default TotalDaysForm;
