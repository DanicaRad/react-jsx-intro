
const App = () => {
  return (
    <div>
      <Tweet 
        name="Bill"
        username="billmakestweets"
        date={new Date().toDateString()} 
        message="I love my pitbull Winnie."
      />
      <Tweet
        name="Danica"
        username="danicarad"
        message="I love my pitbull Nigel."
      />
      <Tweet
        name="Nigel and Winnie"
        username="nigel&winniethepitbulls"
        message="We are the cutest dogs and everyone loves us so much."
      />
    </div>
  );
}