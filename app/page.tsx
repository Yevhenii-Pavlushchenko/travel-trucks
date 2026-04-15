
import Button from "@/components/Button/Button";
import css from "./page.module.css";

export default function Home() {
  return (
    <section className={css.hero}>
      <div className={css.container}></div>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={ css.descr}>You can find everything you want in our catalog</p>
      <Button text="View Now" color='green'width={173} ></Button>
      
   </section>
  );
}
