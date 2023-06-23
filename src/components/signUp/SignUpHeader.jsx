import React from "react";

import "./SignUpHeader.css";
import HeaderSections from "../ui/HeaderSections";

function SignUpHeader() {
  return (
    <>
      <HeaderSections headerClass={"sign-up-header"}>
        <h1>Sign Up</h1>
      </HeaderSections>
    </>
  );
}

export default SignUpHeader;
