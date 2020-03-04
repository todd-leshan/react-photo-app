import React from "react";

import Header from "../components/Header";
import AddImageBtn from "../components/AddImageBtn";

const Home = () => {
  return (
    <div>
      <Header
        title="Vestibulum varius libero ac libero ultricies"
        subtitle="Pellentesque urna lacus, porta a rutrum vel, posuere dictum velit."
        avatar="avatar-minion.jpg"
      />
      <main>
        <AddImageBtn />
      </main>
    </div>
  );
};

export default Home;
