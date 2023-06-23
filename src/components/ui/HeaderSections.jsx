import React from "react";

import "./HeaderSection.css";

function HeaderSections({ children, headerClass }) {
  return (
    <>
      <section className={`header-section ${headerClass}`} id="head">
        {children}
      </section>
    </>
  );
}

export default HeaderSections;
