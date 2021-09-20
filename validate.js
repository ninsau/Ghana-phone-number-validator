import React from "react";

let reg = /^((\+[2][3][3]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
let intReg = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export default function phoneValidate(phoneNumber, errorMessage, international) {
  return international !== undefined
    ? phoneNumber?.match(intReg) !== null
      ? "true"
      : errorMessage === undefined
      ? "Invalid phone number"
      : errorMessage
    : phoneNumber?.match(reg) !== null
    ? "true"
    : errorMessage === undefined
    ? "Invalid phone number"
    : errorMessage;
}
