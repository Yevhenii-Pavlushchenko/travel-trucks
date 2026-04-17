import css from "./CamperDetails.module.css";
import { Camper } from "@/types/camper";

export default function CamperDetails({ camper }: { camper: Camper }) {
  return (
    <div className={css.infoWraper}>
      <h1 className={css.title}>{camper.name}</h1>
      
      <div className={css.meta}>
        <div className={css.rating}>
          <svg width="16" height="16"><use href="/sprite.svg#icon-star"></use></svg>
          <span>{camper.rating}({camper.totalReviews} Reviews)</span>
        </div>
        <div className={css.location}>
          <svg width="16" height="16"><use href="/sprite.svg#icon-map"></use></svg>
          <span>{camper.location}</span>
        </div>
      </div>

      <p className={css.price}>€{camper.price.toFixed(2)}</p>
      <p className={css.text}>{camper.description}</p>
    </div>
  );
}
