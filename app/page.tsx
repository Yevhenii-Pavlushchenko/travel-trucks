
import Button from "@/components/Button/Button";
import css from "./page.module.css";

export default function Home() {
  return (
    <section className={css.hero}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Button text="View Now" color='green'width={173} ></Button>
      
   </section>
  );
}
