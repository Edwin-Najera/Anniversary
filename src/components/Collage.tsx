import { photos } from "./Photos";

export default function Collage() {
  return (
    <div className="container py-4">
      <div className="collage">
        {photos.map((photo) => (
          <figure key={photo.id} className="collage-item">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}