import React, { useState } from "react";
//route
import { Link } from "react-router-dom";
//icon
import {
  Logo,
  DashBoard,
  Book,
  Users,
  Exam,
  Result,
  Notification,
  BlackBoard,
  LiveStreaming,
  Student,
} from "../Utils/Constants/images.js";
import { BiMedal } from "react-icons/bi";

const Sidebar = () => {
  const [active, setActive] = useState("#");
  return (
    <aside className="h-auto flex flex-col justify-between bg-white pt-8 pb-4 pl-5 px-5 drop-shadow-lg">
      <div>
        <div className="flex gap-4 items-center mb-6">
          <span className="px-4 py-2 bg-yellow rounded-md rotate-180">
            {/* <img src={Logo} alt="logo" /> */}
            <BiMedal className="text-4xl" />
          </span>
          <p className="whitespace-nowrap font-passion text-3xl text-blue">
            School Space
          </p>
        </div>
        <hr className="bg-[#D3D6DB] border-none h-[1px]" />
        <div>
          <ul className="flex flex-col gap-2 mt-2">
            <li
              className={
                active === "#"
                  ? "flex gap-4 items-center px-4 py-2 text-[#2CA4D8] bg-[#b4e9ff] rounded-md"
                  : "flex gap-4 items-center px-4 py-2 transition ease-in hover:bg-[#b4e9ff] rounded-md"
              }
              onClick={() => setActive("#")}
            >
              <img className="w-4" src={DashBoard} alt="dashboard" />
              <Link
                to="/dashboard"
                className={
                  active === "#"
                    ? "font-mont text-sm font-bold"
                    : "font-mont text-sm font-normal"
                }
              >
                Dashboard
              </Link>
            </li>
            <li
              className={
                active === "#courses"
                  ? "flex gap-4 items-center px-4 py-2 text-[#2CA4D8] font-bold bg-[#b4e9ff] rounded-md"
                  : "flex gap-4 items-center px-4 py-2 transition ease-in hover:bg-[#b4e9ff] rounded-md"
              }
              onClick={() => setActive("#courses")}
            >
              <img className="w-4" src={Book} alt="courses" />
              <Link
                to="/courses"
                className={
                  active === "#courses"
                    ? "font-mont text-sm font-bold"
                    : "font-mont text-sm font-normal"
                }
              >
                Courses
              </Link>
            </li>
            <li
              className={
                active === "#students"
                  ? "flex gap-4 items-center px-4 py-2 text-[#2CA4D8] font-bold bg-[#b4e9ff] rounded-md"
                  : "flex gap-4 items-center px-4 py-2 transition ease-in hover:bg-[#b4e9ff] rounded-md"
              }
              onClick={() => setActive("#students")}
            >
              <img className="w-4" src={Users} alt="student users" />
              <Link
                to="/students"
                className={
                  active === "#students"
                    ? "font-mont text-sm font-bold"
                    : "font-mont text-sm font-normal"
                }
              >
                Students
              </Link>
            </li>
            <li
              className={
                active === "#exam"
                  ? "flex gap-4 items-center px-4 py-2 text-[#2CA4D8] font-bold bg-[#b4e9ff] rounded-md"
                  : "flex gap-4 items-center px-4 py-2 transition ease-in hover:bg-[#b4e9ff] rounded-md"
              }
              onClick={() => setActive("#exam")}
            >
              <img className="w-4" src={Exam} alt="exam" />
              <Link
                to="/exams"
                className={
                  active === "#exam"
                    ? "font-mont text-sm font-bold"
                    : "font-mont text-sm font-normal"
                }
              >
                Exams
              </Link>
            </li>
            <li
              className={
                active === "#result"
                  ? "flex gap-4 items-center px-4 py-2 text-[#2CA4D8] font-bold bg-[#b4e9ff] rounded-md"
                  : "flex gap-4 items-center px-4 py-2 transition ease-in hover:bg-[#b4e9ff] rounded-md"
              }
              onClick={() => setActive("#result")}
            >
              <img className="w-4" src={Result} alt="result" />
              <Link
                to="/results"
                className={
                  active === "#result"
                    ? "font-mont text-sm font-bold"
                    : "font-mont text-sm font-normal"
                }
              >
                Results
              </Link>
            </li>
            <li
              className={
                active === "#board"
                  ? "flex gap-4 items-center px-4 py-2 text-[#2CA4D8] font-bold bg-[#b4e9ff] rounded-md"
                  : "flex gap-4 items-center px-4 py-2 transition ease-in hover:bg-[#b4e9ff] rounded-md"
              }
              onClick={() => setActive("#board")}
            >
              <img className="w-4" src={BlackBoard} alt="notice board" />
              <Link
                to="/notice"
                className={
                  active === "#board"
                    ? "font-mont text-sm font-bold"
                    : "font-mont text-sm font-normal"
                }
              >
                Notice Board
              </Link>
            </li>
            <li
              className={
                active === "#live"
                  ? "flex gap-4 items-center px-4 py-2 text-[#2CA4D8] font-bold bg-[#b4e9ff] rounded-md"
                  : "flex gap-4 items-center px-4 py-2 transition ease-in hover:bg-[#b4e9ff] rounded-md"
              }
              onClick={() => setActive("#live")}
            >
              <img className="w-4" src={LiveStreaming} alt="live classes" />
              <Link
                to="/live"
                className={
                  active === "#live"
                    ? "font-mont text-sm font-bold"
                    : "font-mont text-sm font-normal"
                }
              >
                Live Classes
              </Link>
            </li>
            <li
              className={
                active === "#notice"
                  ? "flex gap-4 items-center px-4 py-2 text-[#2CA4D8] font-bold bg-[#b4e9ff] rounded-md"
                  : "flex gap-4 items-center px-4 py-2 transition ease-in hover:bg-[#b4e9ff] rounded-md"
              }
              onClick={() => setActive("#notice")}
            >
              <img className="w-4" src={Notification} alt="notification" />
              <Link
                to="/notifications"
                className={
                  active === "#notice"
                    ? "font-mont text-sm font-bold"
                    : "font-mont text-sm font-normal"
                }
              >
                Notifications
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img src={Student} alt="student" className="w-10" />
        <h3>Andy Samberg</h3>
        <h3 className="font-mont text-gray font-normal text-sm">
          andy.samberg@gmail.com
        </h3>
        <Link
          to="profile"
          className="uppercase rounded-lg text-blue border-solid border-2 border-blue text-center text-sm py-1"
        >
          View Profile
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
