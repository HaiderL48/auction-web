import React, { useState } from "react";
import images from "../constants/images";

let teams = [
  { name: "Super Giants", image: `${images.img1}` },
  { name: "Mumbai Giants", image: `${images.img2}` },
  { name: "Gujarat Giants", image: `${images.img3}` },
];
const HeroCard = () => {
  const [team, setTeam] = useState([]);
  const [price, setPrice] = useState();
  const [click, setClick] = useState(false);
  const [increament, setIncreament] = useState();
  const [teamName, setTeamName] = useState("");
  let inc = 200;
  let incAfter = 500;

  return (
    <>
      <div className="mt-[-100px] flex flex-row flex-wrap justify-center sm:gap-5 items-center py-28 ">
        <div className="border-2 w-[450px]  h-[450px] flex flex-col items-center justify-center gap-10 text-4xl  font-semibold ">
          <h1>{price}</h1>
          {price ? <h4 className="text-lg">Amount</h4> : ""}
        </div>
        <div className="border-2 flex flex-col items-center justify-center w-[450px]  h-[450px] text-center text-4xl font-semibold ">
          <img src={team} alt="" />
          {click ? (
            <h4 className="text-lg">
              {teamName} Inceramented by {increament}
            </h4>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center gap-5">
        <div></div>
        <div>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            name=""
            id=""
            className=" text-black rounded-xl px-5 py-5 border-[2px] border-black"
          />
        </div>
        <div>
          <input
            type="button"
            value="+500"
            name=""
            id=""
            className="bg-green-600 text-white rounded-xl px-10 py-5"
          />
        </div>
        <div>
          <input
            onClick={() => {}}
            type="button"
            value="-500"
            name=""
            id=""
            className="bg-red-600 text-white rounded-xl  px-10 py-5"
          />
        </div>
        <div>
          <input
            onClick={() => {
              setPrice("");
              setTeam("");
              setTeamName("");
              setClick(false);
            }}
            type="button"
            value="Reset"
            name=""
            id=""
            className="bg-red-600 text-white rounded-xl  px-10 py-5"
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
                    setClick(true);
                    value = [item.image, item.name];
                    setTeamName(item.name);
                    setTeam([value]);
                    if (price <= 2000) {
                      setPrice(price + 200);
                      setIncreament(inc);
                    } else {
                      setPrice(price + 500);
                      setIncreament(incAfter);
                    }
                    console.log(value);
                  }}
                >
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

export default HeroCard;
