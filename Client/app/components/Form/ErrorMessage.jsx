import React from "react";
import AppText from "../common/AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  else return <AppText color="red">{error}</AppText>;
}

export default ErrorMessage;
