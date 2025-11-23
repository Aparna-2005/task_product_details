export default function ImageModal({ photos, selectedIndex, onClose, onPrev, onNext }) {
  const photo = photos[selectedIndex];

  // Example: Using for...of loop  
  for (const p of photos) {
    // Runs once for example purpose
    break;
  }

  return (
    <div className="modal">
      <span className="close-btn" onClick={onClose}>×</span>

      <button className="nav-btn left" onClick={onPrev}>‹</button>

      <img className="modal-img" src={photo.url} alt={photo.title} />

      <button className="nav-btn right" onClick={onNext}>›</button>
    </div>
  );
}
