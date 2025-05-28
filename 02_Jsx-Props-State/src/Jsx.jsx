// App.js or Jsx.js

let tableOfFive = [];

for (let i = 1; i <= 10; i++) {
  tableOfFive.push(`5 x ${i} = ${5 * i}`);
}

const Jsx = () => {
  return (
    <div>
      <h2>This helps to write HTML and JavaScript in a single file</h2>
      <h3>Table of 5:</h3>

      {tableOfFive.map((line, index) => (
        <p key={index}>{line}</p>

      ))}
    </div>
  );
};

export default Jsx;
