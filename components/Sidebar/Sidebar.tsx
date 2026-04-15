"use client";

import { useState } from "react";
import css from "./Sidebar.module.css";

export default function Sidebar() {
  const [location, setLocation] = useState("");
  return (
    <aside className={css.sideBar}>
      <div className={css.locationWraper}>
        <label className={css.label} htmlFor="location">
          Location
        </label>
        <input
          id="location"
          type="text"
          className={css.input}
          placeholder="Kyiv, Ukraine"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </aside>
  );
}
