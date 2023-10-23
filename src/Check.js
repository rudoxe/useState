import React, { useState } from "react";

function Check({ props }) {
  const [isChecked, setIsChecked] = useState(props.name);

  function toggleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={toggleCheck} />
    </div>
  );
}

export default Check;
