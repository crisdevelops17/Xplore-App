import React from "react";
import { getStay } from "../api";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function StaysInfo() {
  const [stay, setStay] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    async function loadStays() {
      setLoading(true);
      try {
        const data = await getStay(id);
        setStay(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadStays();
  }, [id]);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }
  return (
    <div>
      {stay && (
        <div className="staysInfo-container">
          <img className="staysInfo-img" src={`.${stay.imgSrc} `} />
          <div className="text-container">
            <h1>{stay.name}</h1> <h2>{stay.type}</h2>
            <p>{stay.description}</p>
            <p>{stay.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}
