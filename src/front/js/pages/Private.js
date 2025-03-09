import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Private = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="m-0 vh-100 row justify-content-center align-items-center">
        <div
          className="w-25 col-auto p-5 text-center rounded-3"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3>Private page</h3>
          <a
            type="button"
            className="btn btn-lg m-3"
            onClick={() => actions.logout(navigate)}
          >
            Log out
          </a>
        </div>
      </div>
    </>
  );
};