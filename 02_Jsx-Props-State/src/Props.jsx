

// this is chilid comoponnes hat acccepts value as a prop fro parest app.jsx 
const Props = (props) => {

  return (
    <div> 
      <h2>Hello {props.name}</h2>
      <h2>Hello I'm {props.age} years old </h2>
    </div>
  )
}

export default Props
