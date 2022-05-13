import React from "react";
import reactDom from "react-dom";
import ImagePreview from "./ImagePreview";

const Modal = (props) => {
    if (!props.open) return null;
    return reactDom.createPortal(<ImagePreview image={props.image} close={props.close}/>, document.querySelector('#modal') );
};

export default Modal;