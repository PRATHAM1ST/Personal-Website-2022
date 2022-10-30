import { useEffect, useState } from "react";

export default function FontFamily({ current, type }) {
  const [fontFamily, setFontFamily] = useState(current);

  useEffect(() => {
    document.documentElement.style.setProperty(type, fontFamily);
  }, [fontFamily]);

  return (
    <input
      type="text"
      value={fontFamily}
      onChange={(e) => setFontFamily(e.target.value)}
    />
  );
}
