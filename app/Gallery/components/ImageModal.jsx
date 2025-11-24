"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ImageModal({ photos, selectedIndex, onClose, onPrev, onNext }) {
  const photo = photos[selectedIndex];
  const modalRef = useRef(null);

  // Loop demos (harmless console samples demonstrating various loops)
  useEffect(() => {
    // for...of
    for (const p of photos) {
      // runs at most once as demo
      console.log("for...of demo:", p && p.id);
      break;
    }

    // for...in (iterate keys of a single photo)
    if (photo) {
      for (const key in photo) {
        if (Object.prototype.hasOwnProperty.call(photo, key)) {
          // small demo
          console.log("for...in demo key:", key);
        }
      }
    }

    // forEach
    photos.forEach((p, i) => {
      if (i === 0) console.log("forEach demo first id:", p.id);
    });

    // while & do...while demos
    let i = 0;
    while (i < 1) {
      console.log("while demo");
      i++;
    }
    let j = 0;
    do {
      console.log("do...while demo");
      j++;
    } while (j < 1);
  }, [photos, photo]);

  // keyboard handlers (Escape to close, arrows to navigate)
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // click outside to close
  useEffect(() => {
    function onClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [onClose]);

  if (!photo) return null; // safety guard

  // debug log to confirm URL being used
  useEffect(() => {
    console.log("Modal image src:", photo.url);
  }, [photo]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose} aria-label="Close">×</button>

        <button className="nav-btn left" onClick={onPrev} aria-label="Previous">‹</button>

        <div className="image-wrapper">
          <Image
            className="modal-img"
            src={photo.url}
            alt={photo.title}
            width={800}
            height={600}
            priority
            unoptimized
          />
          <div className="caption">
            <p className="title-text">{photo.title}</p>
            <p className="index-text">{selectedIndex + 1} / {photos.length}</p>
          </div>
        </div>

        <button className="nav-btn right" onClick={onNext} aria-label="Next">›</button>
      </div>
    </div>
  );
}
