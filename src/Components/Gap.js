import { useState } from "react";

export default function Gap({ current, type }) {
  const [gap, setGap] = useState(current);

  return (
    <input
      type="text"
      value={gap}
      onChange={(e) => setGap(e.target.value)}
    />
  );
}
