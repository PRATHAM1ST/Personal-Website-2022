import { useState } from "react";

export default function Height({ current, type }) {
  const [height, setHeight] = useState(current);

  return (
    <input
      type="text"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
    />
  );
}
