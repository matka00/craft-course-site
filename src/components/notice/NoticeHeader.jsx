import React from "react";

import "./NoticeHeader.css";
import HeaderSections from "../ui/HeaderSections";

function NoticeHeader() {
  return (
    <>
      <HeaderSections headerClass={"notice-header"}>
        <h1>
          Please note that this is not a working site just a pet-project {":)"}
        </h1>
      </HeaderSections>
    </>
  );
}

export default NoticeHeader;
