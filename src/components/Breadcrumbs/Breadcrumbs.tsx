import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";

const ROUTE_LABELS: Record<string, string> = {
    "/": "Главная",
    "/about": "О компании",
    "/contact": "Контакты",
    "/terms-of-service": "Условия",
    "/privacy-policy": "Политика конфиденциальности",
};

function normalizePath(pathname: string) {
    return pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
}

const Breadcrumbs: React.FC = () => {
    const { pathname } = useLocation();
    const path = normalizePath(pathname);

    // На Home не показываем
    if (path === "/") return null;

    const currentLabel = ROUTE_LABELS[path] ?? "Страница";

    return (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} to="/">
                        {ROUTE_LABELS["/"]}
                    </Link>
                    <span className={styles.separator} aria-hidden="true">
            &gt;
          </span>
                </li>

                <li className={styles.item}>
          <span className={styles.current} aria-current="page">
            {currentLabel}
          </span>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumbs;