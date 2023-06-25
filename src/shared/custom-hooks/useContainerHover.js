import { useRef, useState } from "react";


export const useContainerHover = () => {
  const imageRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return { imageRef, isHovered, handleMouseOut, handleMouseOver }
}
