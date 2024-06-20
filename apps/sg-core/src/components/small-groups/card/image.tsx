export function Image({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="aspect-video w-full bg-background2 rounded-xl mb-2"
    />
  );
}
