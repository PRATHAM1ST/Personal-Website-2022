import { useEffect, useState } from "react";

export default function FontSize({ current, type }) {
  const [fontSize, setFontSize] = useState(current);
  const [fontView, setFontView] = useState(type);

  useEffect(() => {
      document.documentElement.style.setProperty(type, fontSize);
  }, [fontSize]);

  return (
    <div className="font">
      <input
        value={fontView}
        style={{
          fontSize: fontSize,
          background: "none",
          border: "none",
          outline: "none",
        }}
        onChange={(e) => setFontView(e.target.value)}
        placeholder={fontView}
      />
      <input
        type="text"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />
    </div>
  );
}
