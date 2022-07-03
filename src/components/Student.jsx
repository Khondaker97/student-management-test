import { useState, useContext } from "react";
//context
import { studentContext } from "../context/stdContext";
//icons
import { Edit, Delete } from "../Utils/Constants/images";
import RemoveModal from "./RemoveModal";
//modal
import StdModal from "./StdModal";

const Student = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [rModalShow, setRModalShow] = useState(false);
  //retrive data
  const data = JSON.parse(localStorage.getItem("data") || "[]");

  const { editableStd, setEditableStd } = useContext(studentContext);
  //Visible edit & delete
  const showModifier = (e) => {
    const td = e.currentTarget.children;
    td[6].style.opacity = 1;
  };
  const hideModifier = (e) => {
    const td = e.currentTarget.children;
    td[6].style.opacity = 0;
  };

  const editHandler = (id) => {
    setShow(true);
    setEdit(true);
    const studentId = data.find((student) => student.id === id);
    setEditableStd(studentId);
  };
  const removeModalPop = (id) => {
    setRModalShow(true);
    const studentId = data.find((student) => student.id === id);
    setEditableStd(studentId);
  };

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((student) => (
          <tr
            className=" hover:bg-[#F1F4F8] border-separate border border-[#E5E5E5] border-x-0"
            onMouseOver={(e) => showModifier(e)}
            onMouseOut={(e) => hideModifier(e)}
            key={student.id}
          >
            <td className="text-[#242424] font-mont font-normal text-sm py-2 w-12 text-center">
              {student.id}
            </td>
            <td className="text-[#242424] font-mont font-normal text-sm whitespace-nowrap">
              {student.studentName}
            </td>
            <td className="text-[#242424] font-mont font-normal text-sm">
              {student.atClass}th
            </td>
            {student.result === "Passed" ? (
              <td>
                <p className="text-white text-center bg-[#2CBF6E] rounded-2xl w-[80px] px-1 text-sm">
                  {student.result}
                </p>
              </td>
            ) : (
              <td>
                <p className="text-white text-center bg-[#F24643] rounded-2xl w-[70px] px-1 text-sm">
                  {student.result}
                </p>
              </td>
            )}
            <td className="text-[#242424] font-mont font-normal text-sm">
              {student.score}/100
            </td>
            {student.grade === "Excellent" ? (
              <td>
                <p className="text-green-500 font-medium text-md">
                  {student.grade}
                </p>
              </td>
            ) : student.grade === "Poor" ? (
              <td>
                <p className="text-red-500 font-medium text-md">
                  {student.grade}
                </p>
              </td>
            ) : (
              <td>
                <p className="text-blue font-medium text-md">{student.grade}</p>
              </td>
            )}
            <td style={{ opacity: 0 }}>
              <div className="flex gap-4">
                <div
                  className="cursor-pointer"
                  onClick={() => editHandler(student.id)}
                >
                  <img src={Edit} alt="edit" />
                </div>
                {/* reusing modal component  */}

                <div
                  className="cursor-pointer"
                  onClick={() => removeModalPop(student.id)}
                >
                  <img src={Delete} alt="delete" />
                </div>
              </div>
            </td>
          </tr>
        ))}
      <StdModal
        show={show}
        onClose={() => setShow(false)}
        edit={edit}
        setEdit={setEdit}
        editableStd={editableStd}
      />
      <RemoveModal
        show={rModalShow}
        onClose={() => setRModalShow(false)}
        editableStd={editableStd}
      />
    </>
  );
};

export default Student;
