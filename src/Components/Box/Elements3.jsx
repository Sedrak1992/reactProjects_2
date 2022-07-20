import Box2 from "./Box2/Box2.jsx";
function Elements3() {
  const boxes = [
    { paragraph: "This little piggy went to market."},
    { paragraph: "This little piggy stayed home." },
    { paragraph: " little piggy had roast beef." },
  ];

  return (
    <div className="box2">
      {boxes.map((boxItem,i) => (
        <Box2 key={i} paragraph={boxItem.paragraph} />
      ))}
    </div>
  );
}

export default Elements3;