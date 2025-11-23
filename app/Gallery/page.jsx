"use client";

import { useEffect, useState } from "react";
import ImageGrid from "./components/ImageGrid";
import ImageModal from "./components/ImageModal";
import Loader from "./components/Loader";
import "./Gallery.css";

export default function GalleryPage() {
  const [photos, setPhotos] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch images
  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=20"
        );

        if (!res.ok) throw new Error("Failed to fetch images");

        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <h1 className="title">Responsive Image Gallery</h1>

      {/* Image Grid */}
      <ImageGrid photos={photos} onSelect={(i) => setSelectedIndex(i)} />

      {/* Modal Slider */}
      {selectedIndex !== null && (
        <ImageModal
          photos={photos}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
          }
          onNext={() =>
            setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
          }
        />
      )}
    </div>
  );
}
