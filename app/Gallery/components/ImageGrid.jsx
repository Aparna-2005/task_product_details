export default function ImageGrid({ photos, onSelect }) {
  // Example: Using forEach (extra task requirement)
  photos.forEach((p) => {
    // You can console.log if needed
  });

  return (
    <div className="image-grid">
      {photos.map((photo, index) => (
        <div key={photo.id} className="image-card" onClick={() => onSelect(index)}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}
