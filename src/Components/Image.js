import { useState } from "react";

export default function Image({ src, title, description, index }) {
  const [changeTitle, setChangeTitle] = useState(title);
  const [changeDesc, setChangeDesc] = useState(description);
  return (
    <>
      <div className="image-container">
        <img className="admin-image" src={src} />
        <input
          data-name="Title"
          value={changeTitle}
          onChange={(e) => setChangeTitle(e.target.value)}
        />
        <input
          data-name="Description"
          value={changeDesc}
          onChange={(e) => setChangeDesc(e.target.value)}
        />
        <input type="file" accept="image/*" />
      </div>
    </>
  );
}
