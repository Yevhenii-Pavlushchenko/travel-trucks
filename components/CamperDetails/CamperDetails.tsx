import css from "./CamperDetails.module.css";
import { Camper } from "@/types/camper";

export default function CamperDetails({ camper }: { camper: Camper }) {
  return (
    <div className={css.infoWraper}>
      <div className={css.meta}>
        <h1 className={css.title}>{camper.name}</h1>
        <div className={css.raringWraper}>
          <div className={css.rating}>
            <svg  className={css.ratingIcon} width="16" height="16">
              <use href="/sprite.svg#icon-star"></use>
            </svg>
            <span className={css.ratingText} >
              {camper.rating}({camper.totalReviews} Reviews)
            </span>
          </div>
          <div className={css.location}>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-map"></use>
            </svg>
            <span>{camper.location}</span>
          </div>
        </div>

        <p className={css.price}>€{camper.price.toFixed(2)}</p>
        <p className={css.description}>{camper.description}</p>
      </div>
    </div>
  );
}
