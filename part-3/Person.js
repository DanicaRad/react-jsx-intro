const Person = (props) => {
  const ageMessage = props.age >= 18 ? "Go vote!" : "You must be 18.";
  const hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {props.name.length > 6 ? props.name.slice(0, 6) : props.name}</li>
        <li>Age: {props.age}</li>
        <ul>
          Hobbies:
          {hobbies}
        </ul>
      </ul>
      <h3>{ageMessage}</h3>
    </div>
  );
}