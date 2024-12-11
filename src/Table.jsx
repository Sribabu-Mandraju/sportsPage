import React from "react";
import { IoIosStarOutline } from "react-icons/io";
export const Table = () => {
  return (
    <div>
      <div className="event-status flex gap-[10px]">
        <IoIosStarOutline className="text-[orange] text-[20px]" />
        <h1>
          <span className="font-semibold pr-[10px]">TUE 12/10</span> 6:30PM
        </h1>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <h1>Title</h1>
              <h3>Time</h3>
            </td>
            <td>
              <select></select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
