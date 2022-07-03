import React, { useState } from "react";
//modal
import StdModal from "./StdModal";
//context
import StudentList from "./StudentList";

const Students = () => {
  const [show, setShow] = useState(false);

  return (
    <main className="w-full pt-8 pb-4 px-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="text-mont font-bold text-xl">Students</div>
        <div
          className="py-1 px-8 bg-blue text-white rounded-lg cursor-pointer"
          onClick={() => setShow(true)}
        >
          <span className="text-2xl mr-2">+</span>ADD
        </div>
        <StdModal show={show} onClose={() => setShow(false)} />
      </div>
      <StudentList />
    </main>
  );
};

export default Students;
