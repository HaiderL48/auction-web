import React, { useState } from "react";
import images from "../constants/images";
import HeroCard from "./heroCard";

let teams = [
  { name: "Super Giants", image: `${images.img1}` },
  { name: "Mumbai Giants", image: `${images.img2}` },
  { name: "Gujarat Giants", image: `${images.img3}` },
];
const TeamsButton = ({ item }) => {
  return (
    <>
      <button>
        <img src={item.images} alt="" />
        {item.name}
      </button>
      <h2>{item.name}</h2>
    </>
  );
};

const BottomNavbar = () => {
  const [team, setTeam] = useState("");
  let teamName = team;
  return (
    <>
      <h1>{team}</h1>
      <div className=" flex flex-row justify-center items-center gap-5">
        <div></div>
        <div>
          <input
            type="button"
            value="+500"
            name=""
            id=""
            className="rounded-xl border-2 px-10 py-5"
          />
        </div>
        <div>
          <input
            type="button"
            value="+500"
            name=""
            id=""
            className="rounded-xl border-2 px-10 py-5"
          />
        </div>
        <div className="flex flex-row gap-4 ">
          {teams.map((item) => {
            return (
              <>
                <button
                  value={item.name}
                  key={item}
                  className="rounded-full  flex flex-col items-center justify-center"
                  onClick={(value) => {
                    value = item.name;
                    setTeam(value);
                    console.log(value);
                  }}
                >
                  18003157888
                  <img src={item.image} alt="" className=" w-[80px] h-[80px]" />
                  <h1 className="text-xs font-semibold "> {item.name}</h1>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
