"use client";
import css from "./CampersList.module.css";

import Image from "next/image";
import { useInfiniteQuery } from "@tanstack/react-query";

import { CamperFilters } from "@/types/filters";
import Button from "../Button/Button";
import { fetchCampers } from "../../lib/api";
import { useState } from "react";

function CamperImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || "/nocamper.png");

  return (
    <Image
      className={css.image}
      src={imgSrc}
      alt={alt}
      width={219}
      height={240}
      style={{ objectFit: "cover" }}
      onError={() => setImgSrc("/nocamper.png")}
    />
  );
}

export default function CampersList({ filters = {} } : {filters?:CamperFilters }) {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) => fetchCampers({ pageParam, filters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasMore = lastPage?.campers?.length === 4;
      return hasMore ? allPages.length + 1 : undefined;
    },
  });

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error loading data</p>;

    const allCampers = data?.pages.flatMap((page) => page.campers || []) ?? [];
    
    const formatText = (text: string) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).replace("_", " ");
};


  return (
    <section className={css.camperList}>
      <h2 className={css.visuallyHidden}>The campers list</h2>

      {allCampers.map((camper) => (
        <article key={camper.id} className={css.card}>
          <div className={css.imageWraper}>
            <CamperImage src={camper.coverImage} alt={camper.name} />
          </div>

          <div className={css.infoWraper}>
            <div className={css.headWrapper}>
              <h3 className={css.title}>{camper.name}</h3>
              <p className={css.price}>€{camper.price}</p>
            </div>

            {/* Рейтинг и Локация */}
            <div className={css.meta}>
              <span className={css.rating}>
                <svg className={css.iconStar} width="16" height="16">
                  <use href="/sprite.svg#icon-star"></use>
                </svg>
                <span>
                  {camper.rating}({camper.totalReviews} Reviews)
                </span>
              </span>
              <span className={css.location}>
                <svg className={css.iconMap} width="16" height="16">
                  <use href="/sprite.svg#icon-map"></use>
                </svg>
                <span>{camper.location}</span>
              </span>
            </div>

            {/* Описание */}
            <p className={css.description}>{camper.description}</p>

            {/* Категории/Фишки (Трансмиссия, Топливо и т.д.) */}
            <ul className={css.categories}>
              <li className={css.categoryItem}>
                <svg width="20" height="20">
                  <use href="/sprite.svg#icon-fuel"></use>
                </svg>
                {formatText(camper.engine)}
              </li>
              <li className={css.categoryItem}>
                <svg width="20" height="20">
                  <use href="/sprite.svg#icon-transmission"></use>
                </svg>
                {formatText(camper.transmission)}
              </li>
              <li className={css.categoryItem}>
                <svg width="20" height="20">
                  <use href="/sprite.svg#icon-camper-form"></use>
                </svg>
                {formatText(camper.form)}
              </li>
            </ul>

            {/* Кнопка */}
            <Button text="Show more" color="green" width={173} />
          </div>
        </article>
      ))}
      {hasNextPage && (
        <Button
          text="Load more"
          color="white"
          width={145}
          onClick={fetchNextPage}
        />
      )}
    </section>
  );
}
