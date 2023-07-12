import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn pale-btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilterByCompletion(props.name)}
    >
      {props.name}
    </button>
  );
}

export default FilterButton;
