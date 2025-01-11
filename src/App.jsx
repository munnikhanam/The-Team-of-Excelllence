import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Players from "./components/Players/Players";
import { useState } from "react";

const App = () => {
  const [addMoney, setAddMoney] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleAddMoney = () => {
    const total = addMoney + 6000000;

    setAddMoney(total);
  };
  const handleSelectedBtn = (item) => {
    if (!item || typeof item !== "object") {
      console.error("Invalid item:", item);
      return;
    }
    const addPlayersMoney = addMoney - item.price;
    if (addPlayersMoney < 0) {
      console.error("Not enough money to select this player.");
      return;
    }
    setAddMoney(addPlayersMoney);
    setSelected([...selected, item]);
  };
  // const handleSelectedPlayers = (items) => {
  //   // setAddPlayer([...addPlayer, items]);
  //   setAddPlayer([...addPlayer, ...items]);
  // };

  return (
    <div>
      <div>
        <Header addMoney={addMoney} />
        <Banner handleAddMoney={handleAddMoney} />
      </div>
      <div className="w-11/12 mx-auto">
        <Players handleSelectedBtn={handleSelectedBtn} selected={selected} />
        {/* <Addedplayers addPlayer={addPlayer} /> */}
      </div>
    </div>
  );
};

export default App;
