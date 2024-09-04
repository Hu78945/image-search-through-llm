import React from "react";
import Header from "./shared/Header";
import Prompt from "./shared/Prompt";
import ImagesPanel from "./shared/ImagesPanel";

const Layout = ({ data, inProgress, displayImagesPanel = true }) => {
  return (
    <div className="flex">
      <div className="bg-black h-screen flex flex-col items-center w-full">
        <Header />
        <Prompt data={data} inProgress={inProgress} />
      </div>
      {displayImagesPanel && <ImagesPanel data={data} />}
    </div>
  );
};

export default Layout;
