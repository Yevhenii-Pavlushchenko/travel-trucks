import Link from "next/link";
import css from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={css.header}>
      <Link className={css.headerLogo} href="/">
        <Image
          src="/logo-company.png"
          alt="Logo company"
          width={136}
          height={16}
        />
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link className={css.navigationLink} href="/">Home</Link>
          </li>
          <li className={css.navigationItem}>
            <Link className={css.navigationLink} href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
