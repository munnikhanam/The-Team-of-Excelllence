import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Players from "./components/Players/Players";
import { useState } from "react";
const App = () => {
  const [addMoney, setAddMoney] = useState(0);
  const [selected, setSelected] = useState([]);
  const [addPlayers, setAddPlayers] = useState([]);
  let money = 6000000;
  const handleAddMoney = () => {
    const total = addMoney + money;

    setAddMoney(total);
  };
  const handleSelectedBtn = (item) => {
    const addPlayersMoney = addMoney - item.price;
    setAddMoney(addPlayersMoney);

    if (!item || typeof item !== "object") {
      console.error("Invalid item:", item);
      return;
    }
    setSelected([...selected, item]);

    // const addPlayers = selected.find((newPlayer) => newPlayer.id === item.id);

    // if (!addPlayers) {
    //   setSelected([...selected, item]);
    // } else {
    //   alert("No player found");
  };
  const handleSelectedPlayers = (item) => {
    console.log(item);
    item.map((newp) => console.log(newp));
    // if (addPlayers) {
    //   setSelected([...selected, item]);
    // } else {
    //   alert("No player found");
    // }
  };

  // if (!addPlayers) {
  //   setSelected([...selected, player]);
  // } else {
  //   alert("No player found");
  // }

  return (
    <div>
      <div>
        <Header addMoney={addMoney} />
        <Banner handleAddMoney={handleAddMoney} />
      </div>
      <div className="w-11/12 mx-auto">
        <Players
          handleSelectedBtn={handleSelectedBtn}
          selected={selected}
          handleSelectedPlayers={handleSelectedPlayers}
        />
      </div>
    </div>
  );
};

export default App;
