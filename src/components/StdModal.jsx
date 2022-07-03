import React, { useContext, useEffect, useState } from "react";
//context
import { studentContext } from "../context/stdContext";

const InitialValues = {
  studentName: "",
  atClass: Number,
  score: "",
  result: "",
  grade: "",
};
const StdModal = ({ show, onClose, edit, setEdit, editableStd }) => {
  const [student, setStudent] = useState(InitialValues);
  const { students, setStudents } = useContext(studentContext);
  //destructuring
  const { studentName, atClass, score, grade, result } = student;
  //retrive data
  let data = JSON.parse(localStorage.getItem("data") || "[]");

  //handling input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    return setStudent({ ...student, [name]: value });
  };

  //calling back whenever student state changes through score
  const cb = () => {
    score === ""
      ? setStudent({ ...student, result: "", grade: "" })
      : score <= 30
      ? setStudent({ ...student, result: "Failed", grade: "Poor" })
      : setStudent({ ...student, result: "Passed", grade: "Average" });
    if (score > 75)
      setStudent({ ...student, result: "Passed", grade: "Excellent" });
  };

  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Add student
  const AddHandler = () => {
    const ids = data.map((item) => {
      return item.id;
    });
    const maxId = Math.max(...ids);
    student.id = maxId + 1;
    data.push(student);
    localStorage.setItem("data", JSON.stringify(data));
    closeHandler();
  };
  //update student
  const UpdateHandler = () => {
    editableStd.studentName = studentName;
    editableStd.atClass = atClass;
    editableStd.score = score;
    editableStd.grade = grade;
    editableStd.result = result;

    const edited = students.map((student) => {
      if (student.id === editableStd.id) {
        student = editableStd;
      }
      return student;
    });
    setStudents(edited);
    localStorage.setItem("data", JSON.stringify(edited));
    setEdit(false);
    closeHandler();
  };

  //cancel and back form its initial state
  const closeHandler = () => {
    onClose();
    setStudent(InitialValues);
  };
  return (
    <div
      className={show ? "modal display-block" : " display-none"}
      onClick={closeHandler}
    >
      <section
        className="fixed w-2/5 h-auto bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Form section  */}
        <form className="p-6" onSubmit={handleSubmit}>
          <div className="w-full">
            <h1 className="text-xl text-black">
              {edit ? "Edit Student" : "Add Stduent"}
            </h1>
            <hr className="h-px w-full bg-[#E4E8EE] border-none mt-4" />
          </div>
          {/* Name  */}
          <div className="flex flex-col mt-4">
            <label
              htmlFor="name"
              className="text-[#7F878A] text-sm font-normal font-mont mb-2 uppercase"
            >
              Student Name*
            </label>
            <input
              type="text"
              name="studentName"
              id="name"
              className="border border-[#D2D8E2] rounded-lg p-2 text-[#242424]"
              value={studentName}
              onChange={handleChange}
            />
            {edit && (
              <p className="text-xs text-[#F24643] mt-1 italic">
                Error: Name field cannot be left blank
              </p>
            )}
          </div>
          {/* Class  */}
          <div className="flex flex-col mt-2">
            <label
              htmlFor="class"
              className="text-[#7F878A] text-sm font-normal font-mont mb-2 uppercase"
            >
              class*
            </label>
            <input
              type="text"
              name="atClass"
              id="class"
              className="border border-[#D2D8E2] rounded-lg p-2 text-[#242424]"
              value={atClass}
              onChange={handleChange}
            />
            <p
              className={
                edit
                  ? "text-xs text-[#F24643] mt-1 italic"
                  : "text-xs text-[#7F878A] mt-1 italic"
              }
            >
              {edit && "Error:"} Please input values between 1 {"&"} 12
            </p>
          </div>
          {/* Score  */}
          <div className="flex flex-col mt-2">
            <label
              htmlFor="score"
              className="text-[#7F878A] text-sm font-normal font-mont mb-2 uppercase"
            >
              Score*
            </label>
            <input
              type="text"
              name="score"
              id="score"
              className="border border-[#D2D8E2] rounded-lg p-2 text-[#242424]"
              value={score}
              onChange={handleChange}
            />
            {edit ? (
              <p className="text-xs text-[#F24643] mt-1 italic">
                Error: Score field cannot be left blank
              </p>
            ) : (
              <p className="text-xs text-[#7F878A] mt-1 italic">
                Please input values between 0 {"&"} 100
              </p>
            )}
          </div>

          {/* Result  */}
          <div className="flex flex-col mt-2">
            <label className="text-[#7F878A] text-sm font-normal mb-2 font-mont uppercase">
              Result
            </label>
            {result === "" ? (
              <p>-</p>
            ) : (
              <div
                className={
                  result === "Passed"
                    ? "bg-[#2CBF6E] max-w-fit rounded-2xl"
                    : "bg-[#F24643] max-w-fit rounded-2xl"
                }
              >
                <span className="text-white text-center px-2">{result}</span>
              </div>
            )}
          </div>
          {/* Grade  */}
          <div className="flex flex-col mt-2">
            <label className="text-[#7F878A] text-sm font-normal font-mont uppercase">
              Grade
            </label>
            {grade === "" ? (
              <p>-</p>
            ) : (
              <div
                className={
                  grade === "Excellent"
                    ? "text-[#2CBF6E]"
                    : grade === "Average"
                    ? "text-blue "
                    : "text-[#F24643]"
                }
              >
                <span className="py-1 text-sm">{grade}</span>
              </div>
            )}
            <hr className="h-px w-full bg-[#E4E8EE] border-none mt-4" />
          </div>
          <div className="flex justify-end gap-2 uppercase mt-4">
            <h3
              onClick={closeHandler}
              className="px-4 py-2 text-blue border-2 border-blue text-md font-normal rounded-lg cursor-pointer"
            >
              Cancel
            </h3>
            <span
              className={
                edit ? "bg-[#A8B4B9] rounded-lg" : "bg-blue rounded-lg"
              }
            >
              <input
                type="submit"
                className="px-4 py-2 text-white text-md font-normal cursor-pointer"
                onClick={edit ? UpdateHandler : AddHandler}
                value="Confirm"
              ></input>
            </span>
          </div>
        </form>
      </section>
    </div>
  );
};

export default StdModal;
