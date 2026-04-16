"use client";

import { useState } from "react";
import css from "./Sidebar.module.css";
import Button from "../Button/Button";

export default function Sidebar() {
  const [location, setLocation] = useState("");

  const [form, setForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");

  const filters = [
    {
      id: "form",
      title: "Camper form",
      options: ["Alcove", "Panel Van", "Integrated", "Semi Integrated"],
      state: form,
      setter: setForm,
    },
    {
      id: "engine",
      title: "Engine",
      options: ["Diesel", "Petrol", "Hybrid", "Electric"],
      state: engine,
      setter: setEngine,
    },
    {
      id: "transmission",
      title: "Transmission",
      options: ["Automatic", "Manual"],
      state: transmission,
      setter: setTransmission,
    },
  ];

  const handleReset = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");
  };

  return (
    <aside className={css.sideBar}>
      <div className={css.locationWraper}>
        <label className={css.label} htmlFor="location">
          Location
        </label>

        <div className={css.inputWraper}>
          <svg className={css.iconLocation} width="20" height="20">
            <use href="/sprite.svg#icon-map"></use>
          </svg>
          <input
            id="location"
            type="text"
            className={css.input}
            placeholder="Kyiv, Ukraine"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <div className={css.filters}>
        <h2 className={css.filterTitle}>Filters</h2>
        {filters.map((category) => (
          <div key={category.id} className={css.filterCategory}>
            <h3 className={css.categoryName}>{category.title}</h3>

            <div className={css.radioGroup}>
              {category.options.map((option) => (
                <label key={option} className={css.radioLabel}>
                  <input
                    type="radio"
                    name={category.id}
                    value={option}
                    checked={category.state === option}
                    onChange={() => category.setter(option)}
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}>
                    <span className={css.customRadio}>
                      <svg className={css.iconEmpty} width="24" height="24">
                        <use href="/sprite.svg#icon-checkbox-empty"></use>
                      </svg>

                      <svg className={css.iconDot} width="24" height="24">
                        <use href="/sprite.svg#icon-radio-dot"></use>
                      </svg>
                    </span>
                  </span>
                  <span className={css.radioText}>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={css.btnWraper}>
        <Button text="Search" color="green" width={312} />
        <Button
          text="Clear filters"
          color="white"
          width={312}
          onClick={handleReset}
          icon="icon-xxx"
        />
      </div>
    </aside>
  );
}
