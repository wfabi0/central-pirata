export interface GameProps {
  title: string;
  image: string;
  description: string;
  reqs: {
    min: string[];
    max: string[];
  };
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
