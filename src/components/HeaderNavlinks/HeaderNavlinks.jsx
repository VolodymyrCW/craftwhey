"use client";

import { SiteContext } from "@/context/siteContext";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { useContext } from "react";
import styles from "./HeaderNavlinks.module.scss";

const HeaderNavlinks = ({ className }) => {
    const { handleReset } = useContext(SiteContext);
    return (
        <nav className={`${className} ${styles.navLinks}`}>
            <div className={styles.navList}>
                {navLinks.slice(0, 3).map((el) => (
                    <Link
                        key={el.title}
                        href={el.href ? el.href : ""}
                        onClick={el.title === "Продукція" && handleReset}
                        className={styles.navLink}
                    >
                        {el.title}
                    </Link>
                ))}
            </div>
            {navLinks.map(
                (el) =>
                    el.title === "Співпраця" && (
                        <Link
                            key={el.title}
                            href={el.href ? el.href : ""}
                            className={styles.cooperation}
                        >
                            {el.title}
                        </Link>
                    )
            )}
            <div className={styles.iconContainer}>
                <svg className={styles.svg}>
                    <use href='sprite.svg/#icon-search_24' />
                </svg>

                <Link href='/order'>
                    <svg className={styles.svg}>
                        <use href='sprite.svg/#icon-cart_24' />
                    </svg>
                </Link>

                <p className={styles.lang}>
                    <span>УКР</span> <span>РУС</span>
                </p>
            </div>
        </nav>
    );
};

export default HeaderNavlinks;
