import React from "react";

const MKButton = ({ children, ...props }) => {
  return (
    <button {...props} style={{ padding: "10px", margin: "5px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}>
      {children}
    </button>
  );
};

export default MKButton;