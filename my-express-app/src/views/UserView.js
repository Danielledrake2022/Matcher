import React from "react";
import "./UserView.css";

function UserView() {
  return (
    <div className="User">
      <h2>User</h2>
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <h5>Name</h5>
      <input></input>
      <h5>Surname</h5>
      <input></input>
      <h5>Gmail</h5>
      <input></input>
      <button>Log Out</button>
    </div>
  );
}

export default UserView;
