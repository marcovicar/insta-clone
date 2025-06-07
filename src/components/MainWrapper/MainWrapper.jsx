import React, { useEffect } from "react";

/**
 *
 * @param children
 * @param customStyle
 * @returns {JSX.Element}
 * @constructor
 */
export default function MainSectionWrapper({
  children,
  customStyle = "",
}) {
  function handleMainSectionHeight() {
    const bodyHeight = document.body.clientHeight;
    const mainNavHeight = document.getElementById("main-nav-bar")
      ? document.getElementById("main-nav-bar").offsetHeight
      : 0;
    const mainWrapper = document.getElementById("main-wrapper");

    const newMainWrapperHeight = String(bodyHeight - mainNavHeight);
    mainWrapper.style.height = `${newMainWrapperHeight}px`;

    const mainSectionHeaderHeight = document.getElementById(
      "main-section-header"
    )
      ? document.getElementById("main-section-header").offsetHeight
      : 0;
    const mainSectionBody = document.getElementById("main-section-body");

    const newMainSectionBodyHeight = String(
      newMainWrapperHeight - mainSectionHeaderHeight - 40
    );

    if (newMainSectionBodyHeight) {
      mainSectionBody.style.height = `${newMainSectionBodyHeight}px`;
    }
  }

  useEffect(() => {
    handleMainSectionHeight();
    window.addEventListener("resize", handleMainSectionHeight);
    return () => {
      window.removeEventListener("resize", handleMainSectionHeight);
    };
  }, []);

  return (
    <main
      id={"main-wrapper"}
      className={`flex-1 relative focus:outline-none h-full pt-28 ${customStyle ? customStyle : "overflow-y-visible"}`}
    >
      <div className={`h-full`}>
        <div
          id={"main-section-body"}
          className={`md:px-0 sm:pt-0 pt-2 px-6`}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
