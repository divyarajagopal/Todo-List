import React from "react";

const TodoLink = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "15px"
    }}
  >
    {children}
  </button>
);

export default TodoLink;
