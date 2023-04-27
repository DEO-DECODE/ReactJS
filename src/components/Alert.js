import React from "react";

export default function Alert(props) {
  let capitalize = (word) => {
    let word2 = word.toLowerCase();
    return word2.charAt(0).toUpperCase() + word2.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
          {/* <strong>{props.alert.type}</strong>:{props.alert.msg} */}
          {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
        </div>
      )}
    </div>
  );
}
