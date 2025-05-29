import React from "react";

const ListRedering = () => {
  const fruits = ["Apple", "Banana", "Mango"];
  const students = ["Ali", "Moiz", "Ahsan", "Sana"];
  const products = [
    { id: 1, name: "Laptop", price: "$500" },
    { id: 2, name: "Phone", price: "$300" },
    { id: 3, name: "Watch", price: "$100" },
  ];
  const ages = [12, 18, 21, 30, 15];
  let filteredAges = ages.filter((age) => age >= 18);

  return (
    <div>
      {/* basic renderinng */}
      <ul>
        {fruits.map((fruits, index) => {
          return <li key={index}> {fruits}</li>;
        })}
      </ul>
      {/*  some exerise */}

      {/* ✅ 1. Render a List of Students */}
      <div className="div">
        <h3>Lists of numbers</h3>
        <ul>
          {students.map((students, index) => {
            return <li key={index}> {students}</li>;
          })}
        </ul>
      </div>

      {/* ✅ 2. Render List of Objects (Products) */}
      <div className="products">
        <h3>Products</h3>
        <ul>
          {products.map((products) => {
            return (
              <li key={products.id}>
                {" "}
                {products.name} &nbsp; &nbsp; {products.price}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ✅ 3. Render with .filter() Before .map() */}
      <div>
        <h3>Ages 18 and above:</h3>
        <ul>
          {filteredAges.map((age, index) => (
            <li key={index}>{age}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListRedering;
