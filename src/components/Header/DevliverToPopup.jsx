import React from "react";

const DevliverToPopup = ({ LocationPopup, setOverlay, setLocationPopup }) => {
  return (
    <div>
      <div
        className={`a-popover-wrapper ${
          LocationPopup ? "a-popover-wrapper_Active" : ""
        }`}
      >
        <header className="a-popover-header bg-secondary w-100 p-1 rounded d-flex align-items-center justify-content-between">
          <h4 className="a-popover-header-content py-2 text-white">
            Choose your location
          </h4>

          <span
            onClick={() => {
              setLocationPopup(false);
              setOverlay(false);
            }}
            className="material-symbols-outlined btn text-white"
          >
            close
          </span>
        </header>

        <div className="a-popover-inner m-auto text-danger">
          Sorry, content is not available.
        </div>
        <div className="a-popover-footer">
          <span className="a-button-inner">
            <button
              onClick={() => {
                setLocationPopup(false);
                setOverlay(false);
              }}
              className="btn btn-secondary border-none"
            >
              Done
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DevliverToPopup;
