export interface Photo {
  id: number;
  src: string;
  alt: string;
}

export const photos: Photo[] = [
  { id: 1, src: "/images/photo1.jpg", alt: "Photo 1" },
  { id: 2, src: "/images/photo2.jpg", alt: "Photo 2" },
  { id: 3, src: "/images/photo3.jpg", alt: "Photo 3" },
  // add more
];