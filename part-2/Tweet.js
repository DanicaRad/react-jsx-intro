const Tweet = (props) => {
  const { name, username, date = new Date().toDateString(), message } = props
  return (
    <div>
      <div>{name} @{username} {date} {new Date().toLocaleTimeString()}</div>
      <div>{message}</div>
    </div>
  );
}