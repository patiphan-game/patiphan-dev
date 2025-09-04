/* eslint-disable @next/next/no-img-element */
import { HTMLAttributes, useEffect, useState, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: ReactNode };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: ReactNode }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  const altText =
    typeof item.title === "string" ? item.title : `Image ${index + 1}`;
  return (
    <div
      className={cn(
        "relative flex h-full w-[20px] cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out lg:w-[60px]",
        {
          "flex-grow": index === activeItem,
        },
        className,
      )}
      {...props}
    >
      <img
        src={item.image}
        alt={altText}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 mr-3 min-w-fit rounded-md bg-white bg-opacity-60 px-2 py-2 text-sm font-semibold text-black sm:text-base md:bottom-8 md:left-8">
          {item.title}
        </div>
      )}
    </div>
  );
};

const items: { image: string; title: ReactNode }[] = [
  {
    image: "/project-image/hackathon.jpg",

    title: <p>Skooldio Hackathon, Winner 1st Place (2025)</p>,
  },
  {
    image: "/project-image/wdb.webp",

    title: <p>Skooldio, Web Development Bootcamp Batch 1 (Full scholarship) (2024)</p>,
  },
  {
    image: "/project-image/scurve.webp",
    title: (
      <p>
        Digital Strategy Zero to Hero, Former Google Asia
        Pacific executive (2023)
      </p>
    ),
  },
  {
    image: "/project-image/busem.webp",
    title: (
      <p>BU Mini Hackathon Top 10 in Final round, Bangkok University | Busem (2023)</p>
    ),
  },
  {
    image: "/project-image/secg.webp",
    title: (
      <p>SECG#5 Cyber Security workshop 1 of 80, Chulalongkorn University (2022)</p>
    ),
  },
];

export default function Expandable({
  list = items,
  autoPlay = true,
  className,
}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div className={cn("flex h-96 w-full gap-1", className)}>
      {list.map((item, index) => (
        <List
          key={`${item.title}-${index}`}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
}
