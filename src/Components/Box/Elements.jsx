import Box2 from "./Box2/Box2.jsx";

function Elements() {
        const boxes = [
          { paragraph: "This little piggy went to market."},
          { paragraph: "This little piggy stayed home." },
          { paragraph: "This little piggy had roast beef." },
          { paragraph: "This little piggy had none." },
          { paragraph: "This little piggy went wee wee wee all the way home.." }
        ];
      
        return (
          <div className="box2">
            {boxes.map((boxItem,i) => (
              <Box2 key={i} paragraph={boxItem.paragraph} />
            ))}
          </div>
        );
      }


export default Elements;
