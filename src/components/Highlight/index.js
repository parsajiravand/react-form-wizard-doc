import React from "react";

export default function Highlight({ children, color = "#2b75ff" }) {
  return (
    <small
      style={{
        backgroundColor: color,
        borderRadius: "8px",
        fontSize: "0.8rem",
        color: "#fff",
        padding: "0.2rem",
      }}
    >
      {children}
    </small>
  );
}
