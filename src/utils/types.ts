export interface GameProps {
  title: string;
  image: string;
  bannerImage: string;
  isNew: boolean;
  price: number;
  newPrice: number;
  preview: string[];
}

export interface CustomArrowProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  direction: "left" | "right";
}
