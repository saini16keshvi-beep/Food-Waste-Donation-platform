import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDonations();
  }, []);

  const getDonations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/donations");
      setProducts(res.data.donations);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Available Food Donations
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item._id}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <h3>{item.foodName}</h3>

            <p><strong>Name:</strong> {item.name}</p>

            <p><strong>Quantity:</strong> {item.quantity} Plates</p>

            <p><strong>Address:</strong> {item.address}</p>

            <p><strong>Date:</strong> {item.date}</p>

            <p><strong>Time:</strong> {item.time}</p>

            <p><strong>Description:</strong> {item.description}</p>

            <button
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "10px",
                background: "green",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Request Food
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;