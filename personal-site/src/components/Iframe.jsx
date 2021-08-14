import React from "react";

const Iframe = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    // basic bootstrap classes. you can change with yours.
    <div className="col-md-12">
      <div className="emdeb-responsive">
        <iframe
          src={src}
          width="900"
          height="600"
          style={{ textAlign: "center", marginLeft: "60px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Iframe;
