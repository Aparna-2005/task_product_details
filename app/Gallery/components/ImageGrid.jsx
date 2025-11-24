"use client";

import Image from "next/image";

export default function ImageGrid({ photos, onSelect }) {
  function handleKey(e, index) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(index);
    }
  }

  return (
    <div className="image-grid">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="image-card"
          onClick={() => onSelect(index)}
          tabIndex={0}
          role="button"
          aria-label={`Open image ${index + 1}`}
          onKeyDown={(e) => handleKey(e, index)}
        >
          <Image
            src={photo.url}
            alt={photo.author}
            width={150}
            height={150}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
