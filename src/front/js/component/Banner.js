import React from "react";

export const Banner = () => {
  let token = JSON.parse(sessionStorage.getItem("token"));
  let nombre = token.user.name;
  return (
    <span className="fs-3 me-2">
      Hello {nombre} 🚀, if you want to leave just go to the private page ha, ha, ha 👽
    </span>
  );
};