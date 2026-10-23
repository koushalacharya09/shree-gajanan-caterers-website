import Image from "next/image";
import type { GalleryPhoto } from "@/lib/gallery";
import { photoSrc } from "@/lib/gallery";

type Props = {
  photo: GalleryPhoto;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  kenBurns?: boolean;
};

export function Photo({ photo, alt, className = "", priority, sizes, kenBurns }: Props) {
  return (
    <Image
      src={photoSrc(photo, priority ? 1920 : 1280)}
      alt={alt || photo.alt}
      width={photo.width}
      height={photo.height}
      placeholder="blur"
      blurDataURL={photo.blurDataURL}
      priority={priority}
      sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
      className={`${className} ${kenBurns ? "animate-ken origin-center" : ""}`}
    />
  );
}
