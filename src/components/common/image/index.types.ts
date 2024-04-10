import { ImageLoader } from "next/image";

export interface ImageProps {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  loader?: ImageLoader;
  className?: string;
  fill?: boolean;
}
