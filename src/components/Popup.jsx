import CloseIcon from "@mui/icons-material/Close";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <CloseIcon />
        </button>
        <div className="popup-info">{props.children}</div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
