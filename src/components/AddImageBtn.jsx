import React, { useState } from "react";
import get from "lodash/get";
import { connect } from "react-redux";
import { addImage } from "../redux/actions";

const ALLOWED_IMAGE_TYPE = ["image/jpeg", "image/png"];

const mapStateToProps = state => ({
  imagesData: state.imagesData
});

const mapDispatchToProps = dispatch => ({
  handleAddImage: ({ newImage }) => dispatch(addImage({ newImage }))
});

const AddImageBtn = props => {
  const [imgSrc, setImgSrc] = useState();
  const handleUploadImg = event => {
    const input = event.target;
    const file = get(input, "files[0]");

    if (!file || !file.type || !ALLOWED_IMAGE_TYPE.includes(file.type)) {
      return;
    }

    setImgSrc(URL.createObjectURL(file));
  };

  return (
    <div className="container--add-img">
      <form action="#">
        <label htmlFor="file--img">
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="file--img"
            onChange={handleUploadImg}
          />
        </label>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddImageBtn);
