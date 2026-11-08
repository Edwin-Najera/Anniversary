export interface Photo {
  id: number;
  src: string;
  alt: string;
}

const files = import.meta.glob(
  "/src/assets/public/images/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

export const photos: Photo[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src], i) => ({
    id: i,
    src,
    alt:
      path
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "") ?? `Photo ${i + 1}`,
  }));
