import React, { memo } from "react";

function MemoComp({ name }) {
  console.log("Rendering memo component");
  return <div>{name}</div>;
}

//export default React.memo(MemoComp);
export default MemoComp;
