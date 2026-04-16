import Image from "next/image";
import Button from "../Button/Button";
import css from "./CampersList.module.css";

export default function CampersList() {
  return (
    <section className={css.camperList}>
      <h2 className={css.visuallyHidden}>The campers list</h2>
      <article className={css.card}>
        <div className={css.imageWraper}>
          <Image
            className={css.image}
            src="/car1.jpg"
            alt="Mavericks"
            width={219}
            height={240}
          />
        </div>

        <div className={css.infoWraper}>
          <div className={css.headWrapper}>
            <h3 className={css.title}>Mavericks</h3>
            <p className={css.price}>€8000</p>
          </div>

          {/* Рейтинг и Локация */}
          <div className={css.meta}>
            <span className={css.rating}>
              <svg className={css.iconStar} width="16" height="16">
                <use href="/sprite.svg#icon-star"></use>
              </svg>
              <span>4.4(2 Reviews)</span>
            </span>
            <span className={css.location}>
              <svg className={css.iconMap} width="16" height="16">
                <use href="/sprite.svg#icon-map"></use>
              </svg>
              <span>Kyiv, Ukraine</span>
            </span>
          </div>

          {/* Описание */}
          <p className={css.description}>
            Embrace simplicity and freedom with the Mavericks panel truck...
          </p>

          {/* Категории/Фишки (Трансмиссия, Топливо и т.д.) */}
          <ul className={css.categories}>
            <li className={css.categoryItem}>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-fuel"></use>
              </svg>
              Petrol
            </li>
            <li className={css.categoryItem}>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-transmission"></use>
              </svg>
              Automatic
            </li>
            <li className={css.categoryItem}>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-camper-form"></use>
              </svg>
              Alcove
            </li>
          </ul>

          {/* Кнопка */}
          <Button text="Show more" color="green" width={173} />
        </div>
          </article>
        <Button text="Load more" color="white" width={145}/>
    </section>
  );
}
