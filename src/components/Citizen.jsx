import React from "react";

const Citizen = ({ index, citizen, toggleStatus }) => {
  const citizenStyle = {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    padding: "8px 0",
    borderBottom: "1px solid #ccc",
  };

  const buttonStyle = {
    flex: "1",
    padding: "4px 8px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const spanStyle = (flex) => ({
    flex,
  });

  return (
    <li style={citizenStyle}>
      <span style={spanStyle(1)}>{index + 1}</span>
      <span style={spanStyle(2)}>{citizen.name}</span>
      <span style={spanStyle(1)}>{citizen.age}</span>
      <span style={spanStyle(3)}>{citizen.address}</span>
      <span style={spanStyle(1)}>{citizen.status}</span>
      <button style={buttonStyle} onClick={() => toggleStatus(index)}>
        Toggle Status
      </button>
    </li>
  );
};

export default Citizen;
