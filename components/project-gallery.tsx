"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectGalleryProps = {
  title: string;
  images: string[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <div className="gallery-main">
        <Image
          alt={title}
          className="gallery-main-image"
          fill
          priority
          sizes="(max-width: 980px) 92vw, 1160px"
          src={activeImage}
        />
      </div>
      <div className="gallery-thumbs">
        {images.map((image) => (
          <button
            aria-label={`Pilih gambar ${title}`}
            className={`thumb-btn ${image === activeImage ? "active" : ""}`}
            key={image}
            onClick={() => setActiveImage(image)}
            type="button"
          >
            <Image alt={title} className="thumb-image" fill sizes="96px" src={image} />
          </button>
        ))}
      </div>
    </div>
  );
}
