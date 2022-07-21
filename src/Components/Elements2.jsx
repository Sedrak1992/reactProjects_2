import Box from "./Box.jsx";

const list = [
  { paragraph: "This little piggy went to market." },
  { paragraph: "This little piggy stayed home." },
  { paragraph: "This little piggy had roast beef." },
];

function Elements1() {
  return (
    <div className="box2">
      {list.map((item, i) => (
        <Box key={i} paragraph={item.paragraph} />
      ))}
    </div>
  );
}

export default Elements1;
