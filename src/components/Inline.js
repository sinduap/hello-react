import React from "react";

function Inline() {
  const heading = {
    fontSize: "520px",
    color: "blue",
  };

  return (
    <div>
      {/* <h1 className={styles.success}>Success</h1> */}
      <h1 className="error">Error</h1>
      <div style={heading}>Inline</div>
    </div>
  );
}

export default Inline;
