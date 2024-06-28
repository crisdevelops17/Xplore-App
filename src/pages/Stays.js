import React from "react";
import { useState } from "react";
import { getStays } from "../api";
import { Link, useSearchParams } from "react-router-dom";

export default function Stays() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const typeFilter = searchParams.get("type");
  React.useEffect(() => {
    async function loadStays() {
      setLoading(true);
      try {
        const data = await getStays();
        setStays(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    console.log(typeFilter);
    loadStays();
  }, []);

  const displayedStays = typeFilter
    ? stays.filter((item) => item.type === typeFilter)
    : stays;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  const stayElements = displayedStays.map((item) => (
    <div key={item.id}>
      <Link
        to={item.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      >
        <img src={item.imgSrc} className="stays-images" />
        <h2>{item.name}</h2>
        <p>{item.price}</p>

        <div
          className={
            item.type === "City"
              ? "city-type"
              : item.type === "Beach"
              ? "beach-type"
              : item.type === "Mountain"
              ? "mountain-type"
              : ""
          }
        >
          <p>{item.type}</p>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="stays-container">
      <div className="stays-list-filter">
        <div className="stays-filter-button">
          <button
            className={`stays-type city ${
              typeFilter === "City" ? "selected" : ""
            } `}
            onClick={() => handleFilterChange("type", "City")}
          >
            City
          </button>
          <button
            className={`stays-type beach ${
              typeFilter === "Beach" ? "selected" : ""
            } `}
            onClick={() => handleFilterChange("type", "Beach")}
          >
            Beach
          </button>
          <button
            className={`stays-type mountain ${
              typeFilter === "Mountain" ? "selected" : ""
            } `}
            onClick={() => handleFilterChange("type", "Mountain")}
          >
            Mountain
          </button>
          {typeFilter ? (
            <button onClick={() => handleFilterChange("type", null)}>
              Clear filter
            </button>
          ) : null}
        </div>
      </div>
      <div className="stays-list">{stayElements}</div>
    </div>
  );
}
