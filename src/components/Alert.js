import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div class="alert alert-info" role="alert">
        <strong>
          {props.alert.type} : {props.alert.msg}
        </strong>
      </div>
    )
  );
}
