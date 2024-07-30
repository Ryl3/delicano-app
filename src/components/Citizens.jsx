import React, { useState } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";

const Citizens = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [citizens, setCitizens] = useState([
    { name: "John", age: 30, address: "Minglanilla", status: "Active" },
    { name: "Jane", age: 25, address: "Davao", status: "Active" },
    { name: "Mike", age: 24, address: "Batangas", status: "Active" },
    { name: "Lisa", age: 55, address: "Carcar", status: "Active" },
    { name: "David", age: 45, address: "Mandaue", status: "Active" },
    { name: "Ryle", age: 20, address: "Inayagan", status: "Active" },
    { name: "Bryan", age: 70, address: "Lawaan", status: "Inactive" },
    { name: "Ben", age: 33, address: "Lipata", status: "Inactive" },
    { name: "Jose", age: 25, address: "Bohol", status: "Inactive" },
    { name: "Juan", age: 21, address: "Talisay", status: "Inactive" },
  ]);

  const filteredCitizens = citizens.filter((citizen) =>
    citizen.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStatus = (index) => {
    const newCitizens = [...citizens];
    newCitizens[index].status =
      newCitizens[index].status === "Active" ? "Inactive" : "Active";
    setCitizens(newCitizens);
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  };

  const listHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    fontWeight: "bold",
    padding: "8px 0",
  };

  const h2Style = {
    textAlign: "center",
  };

  const spanStyle = (flex) => ({
    flex,
  });

  return (
    <div style={containerStyle}>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <h2 style={h2Style}>Citizens List</h2>
      <ul>
        <li style={listHeaderStyle}>
          <span style={spanStyle(1)}>No.</span>
          <span style={spanStyle(2)}>Name</span>
          <span style={spanStyle(1)}>Age</span>
          <span style={spanStyle(3)}>Address</span>
          <span style={spanStyle(1)}>Status</span>
          <span style={spanStyle(1)}>Action</span>
        </li>
        {filteredCitizens.map((citizen, index) => (
          <Citizen
            key={index}
            index={index}
            citizen={citizen}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default Citizens;
