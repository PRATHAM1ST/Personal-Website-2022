import { useState } from "react";

export default function FontFamily({ current, type }) {
  const [fontFamily, setFontFamily] = useState(current);

  return (
    <input
      type="text"
      value={fontFamily}
      onChange={(e) => setFontFamily(e.target.value)}
    />
  );
}
