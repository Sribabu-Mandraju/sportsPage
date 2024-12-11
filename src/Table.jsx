import React, { useState } from "react";
import Dummy from "../src/assets/dummy.png";

export const Table = ({ item }) => {
  const [bookmakerOdd, setBookmakerOdd] = useState(item.bookmakers[0] || {});

  function formatToLocalDateTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString(); // Local date and time
  }

  // Get odds for the current bookmaker
  const getOdds = (teamName) => {
    const market = bookmakerOdd?.markets?.find((market) => market.key === "h2h");
    const outcome = market?.outcomes?.find((outcome) => outcome.name === teamName);
    return outcome ? outcome.price : "N/A"; // Return odds or a fallback value
  };

  return (
    <div className="p-[10px] md:p-[30px] flex">
      <div className="scoreboard w-full md:w-[600px] md:skew-x-[-4deg] rounded-2xl flex shadow-lg [box-shadow:inset_0_0_10px_0_rgb(237,236,248)] md:[box-shadow:inset_0_0_30px_0_rgb(237,236,248)] flex-col md:flex-row lg:px-[0px] justify-center items-center">
        <div className="photo md:h-[120px] md:w-[120px] md:shadow-[0_40px_10px_0_#e066ff] rounded-2xl md:py-[30px] md:ml-[-70px] flex justify-center w-full">
          <img
            src={Dummy}
            className="md:h-[120px] md:w-[120px] h-[200px] w-[320px] rounded-2xl"
            alt="dummy"
          />
        </div>
        <div className="predictions-wrap flex flex-col">
          <div className="event-status-wrap flex md:gap-[40px] flex-col md:flex-row">
            <div className="title-wrap flex gap-[20px] py-[10px]">
              <h1 className="title text-[20px] md:text-[24px] font-semibold">
                {item.sport_title}
              </h1>
              <h3 className="text-[20px] md:text-[14px] pt-2">
                {formatToLocalDateTime(item.commence_time)}
              </h3>
            </div>
            <select
              className="ml-4 outline-none border-[1px] rounded-lg h-[30px] my-[10px] w-[150px]"
              onChange={(e) => {
                const selectedBookmaker = item.bookmakers.find(
                  (data) => data.key === e.target.value
                );
                setBookmakerOdd(selectedBookmaker || {});
              }}
            >
              {item?.bookmakers?.map((data) => (
                <option key={data.key} value={data.key}>
                  {data.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-[30px] justify-start pt-[20px] p-[10px] md:p-[30px] group">
            <div className="team-wrap flex flex-col gap-y-[30px] ">
              <div className="team-1 flex gap-[20px]">
                <h1 className="group-hover:text-[#0078f0] w-[120px]">
                  {item.home_team}
                </h1>
                <button>
                  <span className="border-[1px] border-[#0078f0] rounded-md p-[5px_20px_5px_20px]">
                    {getOdds(item.home_team)}
                  </span>
                </button>
              </div>
              <div className="team-2 flex gap-[20px]">
                <h1 className="group-hover:text-[#0078f0] w-[120px]">
                  {item.away_team}
                </h1>
                <button>
                  <span className="border-[1px] border-[#0078f0] rounded-md p-[5px_20px_5px_20px]">
                    {getOdds(item.away_team)}
                  </span>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
