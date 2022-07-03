import { useContext } from "react";
//context
import { studentContext } from "../context/stdContext";

const RemoveModal = ({ show, onClose }) => {
  //retrive data
  const data = JSON.parse(localStorage.getItem("data") || "[]");
  const { editableStd, setStudents } = useContext(studentContext);

  const deleteHandler = () => {
    const newStudents = data.filter((student) => student.id !== editableStd.id);
    setStudents(newStudents);
    localStorage.setItem("data", JSON.stringify(newStudents));
    onClose();
  };
  return (
    <div
      className={show ? "modal display-block" : " display-none"}
      onClick={onClose}
    >
      <section
        className="fixed w-2/5 h-auto bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col p-4 rounded-lg">
          <h3 className="text-lg text-[#242424] font-mont font-bold mb-4">
            Remove Student
          </h3>
          <hr className=" border-[#E4E8EE] border-solid w-full " />
          <div>
            <p className="my-4 font-semibold font-mont text-[#242424]">
              Are you sure you want to remove the current student from the list?
            </p>
            <p className="text-[#7F878A] font-mont text-xs uppercase">
              Student Name
            </p>
            <p className="mb-4 font-mont text-[#242424] text-sm">
              {editableStd?.studentName}
            </p>
            <p className="text-[#7F878A] font-mont text-xs uppercase">Class</p>
            <p className="mb-4 font-mont text-[#242424] text-sm">
              {editableStd?.atClass}th
            </p>
            <hr className=" border-[#D3D6DB] border-solid w-full " />

            <div className="flex justify-end">
              <button
                className="my-6 flex justify-end text-[#2CA4D8] border border-[#2CA4D8] px-6 py-2 rounded-xl mr-4"
                htmlFor="removeModal"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="my-6 flex justify-end text-white border bg-red-500 px-6 py-2 rounded-xl"
                onClick={() => deleteHandler()}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemoveModal;
