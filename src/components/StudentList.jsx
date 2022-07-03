import React, { useContext, useEffect } from "react";
//component
import Student from "./Student";
//context
import { studentContext } from "../context/stdContext";

const StudentList = () => {
  const { students, setStudents } = useContext(studentContext);
  let data = [];
  //get students
  const getData = async () => {
    try {
      if (!data) {
        const fetchData = await fetch("data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const res = await fetchData.json();
        setStudents(res);
        localStorage.setItem("data", JSON.stringify(res));
      } else {
        data = JSON.parse(localStorage.getItem("data"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="overflow-y-auto mt-4 border border-[#E5E5E5] rounded-lg h-full">
        <table className="table-fixed w-full">
          <thead className="bg-[#F1F4F8]">
            <tr>
              <th className="text-[#242424] font-mont font-medium text-md py-2 w-12">
                No.
              </th>
              <th className="text-[#242424] font-mont font-medium text-md whitespace-nowrap w-44 text-left">
                Student Name
              </th>
              <th className="text-[#242424] font-mont font-medium text-md text-left">
                Class
              </th>
              <th className="text-[#242424] font-mont font-medium text-md text-left">
                Result
              </th>
              <th className="text-[#242424] font-mont font-medium text-md text-left">
                Score
              </th>
              <th className="text-[#242424] font-mont font-medium text-md text-left">
                Grade
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Student />
          </tbody>
        </table>
      </div>

      <p className="text-left text-[#242424] font-mont font-normal text-sm mt-2">
        Showing {students.length} of {students.length} entries
      </p>
    </>
  );
};

export default StudentList;
