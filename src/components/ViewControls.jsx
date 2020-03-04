import React from "react";
import { connect } from "react-redux";
import { switchToGridView, switchToAdaptiveView } from "../redux/actions";

const mapStateToProps = state => ({
  layoutView: state.layoutView
});

const mapDispatchToProps = dispatch => ({
  switchToGridView: () => dispatch(switchToGridView()),
  switchToAdaptiveView: () => dispatch(switchToAdaptiveView())
});

const ViewControls = props => {
  const onGridControlClick = () => {
    if (props.layoutView !== "grid-view") {
      props.switchToGridView();
    }
  };

  const onAdaptiveControlClick = () => {
    if (props.layoutView !== "adaptive-view") {
      props.switchToAdaptiveView();
    }
  };

  return (
    <div className="container--view-controls">
      <div
        className={`container--view-control grid-view ${
          props.layoutView === "grid-view" ? "active" : ""
        }`}
        onClick={onGridControlClick}
      ></div>
      <div
        className={`container--view-control adaptive-view ${
          props.layoutView === "adaptive-view" ? "active" : ""
        }`}
        onClick={onAdaptiveControlClick}
      ></div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewControls);
