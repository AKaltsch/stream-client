import React from "react";
import { connect } from "react-redux";

const StreamEdit = (props) => {
  return (
    <div>
      <div>StreamEdit</div>
    </div>
  );
};

//own props is a reference to the props in the StreamEdit component
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);
