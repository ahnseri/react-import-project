import React from "react";
import "./SearchButtons.css";

export default function SearchButtons() {
  return (
    <div className="SearchButtons">
      <div className="btn-group">
        <button type="submit" class="btn btn-secondary btn-sm">
          <i className="fas fa-search" />
        </button>
        <button type="button" class="btn btn-secondary btn-sm">
          <i className="fas fa-map-marker-alt" />
        </button>
        <button type="button" class="btn btn-secondary btn-sm">
          <a href="/">°C</a>
        </button>
        <button type="button" class="btn btn-secondary btn-sm">
          <a href="/">°F</a>
        </button>
      </div>
    </div>
  );
}
