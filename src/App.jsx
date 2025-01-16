import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Players from "./components/Players/Players";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

const App = () => {
  const [addMoney, setAddMoney] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleAddMoney = () => {
    const total = addMoney + 6000000;
    {
      total &&
        toast(" Congratulations ! Credit added to your account 🙂", {
          position: "top-center",
        });
    }

    setAddMoney(total);
  };
  const handleSelectedBtn = (item) => {
    const addPlayersMoney = addMoney - item.price;

    if (addPlayersMoney <= 0) {
      toast("Sorry ! You have not enough money to buy this player", {
        position: "top-center",
      });
      return;
    } else {
      toast("Congratulation ! You have buy this player", {
        position: "top-center",
      });
    }

    <ToastContainer />;
    setAddMoney(addPlayersMoney);
    setSelected([...selected, item]);
  };

  return (
    <div>
      <div>
        <Header addMoney={addMoney} />
        <Banner handleAddMoney={handleAddMoney} />
      </div>
      <div className=" md:relative md:mb-28 md:py-20">
        <Players handleSelectedBtn={handleSelectedBtn} selected={selected} />
        <div className="md:absolute  md:inset-x-0 md:bottom-[-1]">
          <Newsletter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
