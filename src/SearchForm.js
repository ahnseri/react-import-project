import React from "react";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <input
        type="text"
        placeholder="Change city"
        autocomplete="off"
        className="form-control form-control-sm"
      />
    </div>
  );
}
