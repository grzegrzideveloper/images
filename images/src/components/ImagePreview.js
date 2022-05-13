const ImagePreview = (props) => {
    

    return (
        <div className="ui dimmer modals visible active" onClick={props.close} style={{position: 'fixed'}}>
            <img src={props.image} id="img" className="ui image" style={{maxHeight: '90vh'}}/>
        </div>
    );
};

export default ImagePreview;