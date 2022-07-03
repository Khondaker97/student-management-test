import React, { createContext, useState } from "react";

export const studentContext = createContext();

const StudentProivder = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editableStd, setEditableStd] = useState(null);

  const value = {
    students,
    setStudents,
    edit,
    setEdit,
    editableStd,
    setEditableStd,
  };

  return (
    <studentContext.Provider value={value}>{children}</studentContext.Provider>
  );
};

export default StudentProivder;
