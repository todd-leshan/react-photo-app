import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import AddImageBtn from "../components/AddImageBtn";

const mapStateToProps = state => ({
  imagesData: state.imagesData
});

const Home = props => {
  return (
    <div>
      <Header
        title="Vestibulum varius libero ac libero ultricies"
        subtitle="Pellentesque urna lacus, porta a rutrum vel, posuere dictum velit."
        avatar="avatar-minion.jpg"
      />
      <main>
        <AddImageBtn />
        <div className="container--images adaptive">
          {props.imagesData.length > 0 &&
            props.imagesData.map((item, index) => (
              <Fragment key={index}>
                <div className="container--image">
                  <img src={item} alt="img alt" />
                </div>
              </Fragment>
            ))}
        </div>
      </main>
    </div>
  );
};

export default connect(mapStateToProps)(Home);
