import { useEffect, useState } from "react";

export default function FontWeight({ current, type }) {
  const [fontWeight, setFontWeight] = useState(current);
  const [fontView, setFontView] = useState(type);

  useEffect(() => {
    document.documentElement.style.setProperty(type, fontWeight);
  }, [fontWeight]);

  return (
    <div className="font">
      <input
        value={fontView}
        style={{
          fontSize: "var(--fs-regular)",
          fontWeight: fontWeight,
          background: "none",
          border: "none",
          outline: "none",
        }}
        onChange={(e) => setFontView(e.target.value)}
      />
      <input
        type="text"
        value={fontWeight}
        onChange={(e) => setFontWeight(e.target.value)}
      />
    </div>
  );
}
