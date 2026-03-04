// AboutGallery.tsx
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import styles from "./AboutGallery.module.scss";

// ✅ Импорты 2х размеров (strip 900w, lightbox 1600w)
import img1_900 from "@/assets/images/AboutGallery/path_to_image1-900.webp";
import img1_1600 from "@/assets/images/AboutGallery/path_to_image1-1600.webp";

import img2_900 from "@/assets/images/AboutGallery/path_to_image2-900.webp";
import img2_1600 from "@/assets/images/AboutGallery/path_to_image2-1600.webp";

import img3_900 from "@/assets/images/AboutGallery/path_to_image3-900.webp";
import img3_1600 from "@/assets/images/AboutGallery/path_to_image3-1600.webp";

import img4_900 from "@/assets/images/AboutGallery/path_to_image4-900.webp";
import img4_1600 from "@/assets/images/AboutGallery/path_to_image4-1600.webp";

import img5_900 from "@/assets/images/AboutGallery/path_to_image5-900.webp";
import img5_1600 from "@/assets/images/AboutGallery/path_to_image5-1600.webp";

import img6_900 from "@/assets/images/AboutGallery/path_to_image6-900.webp";
import img6_1600 from "@/assets/images/AboutGallery/path_to_image6-1600.webp";

import img7_900 from "@/assets/images/AboutGallery/path_to_image7-900.webp";
import img7_1600 from "@/assets/images/AboutGallery/path_to_image7-1600.webp";

import img8_900 from "@/assets/images/AboutGallery/path_to_image8-900.webp";
import img8_1600 from "@/assets/images/AboutGallery/path_to_image8-1600.webp";

import img9_900 from "@/assets/images/AboutGallery/path_to_image9-900.webp";
import img9_1600 from "@/assets/images/AboutGallery/path_to_image9-1600.webp";

import img10_900 from "@/assets/images/AboutGallery/path_to_image10-900.webp";
import img10_1600 from "@/assets/images/AboutGallery/path_to_image10-1600.webp";

type GalleryVariant = "industrial" | "tech";

type GalleryImage = {
    id: string;
    stripSrc: string; // 900w
    lightboxSrc: string; // 1600w
    alt: string;
    caption?: string;
};

const AboutGallery: React.FC = () => {
    const titleId = useId();
    const variant: GalleryVariant = "industrial";

    const images: GalleryImage[] = useMemo(
        () => [
            { id: "1", stripSrc: img1_900, lightboxSrc: img1_1600, alt: "Самосвал на разгрузке" },
            { id: "2", stripSrc: img2_900, lightboxSrc: img2_1600, alt: "Тягач с полуприцепом на площадке" },
            { id: "3", stripSrc: img3_900, lightboxSrc: img3_1600, alt: "Тягач Volvo с полуприцепом" },
            { id: "4", stripSrc: img4_900, lightboxSrc: img4_1600, alt: "Ремонт в сервисной зоне" },
            { id: "5", stripSrc: img5_900, lightboxSrc: img5_1600, alt: "Тягач ночью" },
            { id: "6", stripSrc: img6_900, lightboxSrc: img6_1600, alt: "Автопарк в ангаре" },
            { id: "7", stripSrc: img7_900, lightboxSrc: img7_1600, alt: "Полуприцеп на площадке" },
            { id: "8", stripSrc: img8_900, lightboxSrc: img8_1600, alt: "Склад / ангар компании" },
            { id: "9", stripSrc: img9_900, lightboxSrc: img9_1600, alt: "Полуприцеп на стоянке" },
            { id: "10", stripSrc: img10_900, lightboxSrc: img10_1600, alt: "Тягач зимой" },
        ],
        []
    );

    // ===== Film strip refs & state =====
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    // ✅ чтобы таймеры scrollByCards не накапливались
    const scrollTimersRef = useRef<number[]>([]);

    const clearScrollTimers = () => {
        scrollTimersRef.current.forEach((id) => window.clearTimeout(id));
        scrollTimersRef.current = [];
    };

    const updateNavState = () => {
        const el = trackRef.current;
        if (!el) return;

        // ✅ устойчивый расчёт (без дробных пикселей / отрицательных значений)
        const max = Math.max(0, Math.round(el.scrollWidth - el.clientWidth));
        const x = Math.round(el.scrollLeft);

        setCanPrev(x > 2);
        setCanNext(x < max - 2);
    };

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        const onScroll = () => updateNavState();

        // ✅ реально "первый кадр → второй кадр"
        const raf1 = requestAnimationFrame(() => {
            updateNavState();
            requestAnimationFrame(updateNavState);
        });

        // ✅ доп. обновления после загрузки изображений/пересчёта layout
        const t1 = window.setTimeout(updateNavState, 150);
        const t2 = window.setTimeout(updateNavState, 500);

        const ro = new ResizeObserver(updateNavState);
        ro.observe(el);

        el.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", updateNavState);

        return () => {
            cancelAnimationFrame(raf1);
            window.clearTimeout(t1);
            window.clearTimeout(t2);
            ro.disconnect();
            el.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", updateNavState);

            // на всякий — если компонент размонтируют во время анимаций
            clearScrollTimers();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images.length]);

    const scrollByCards = (dir: -1 | 1) => {
        const el = trackRef.current;
        if (!el) return;

        // 🔥 надежный шаг: почти ширина видимой области
        // (так мы точно "перепрыгиваем" следующий snap)
        const step = Math.max(1, Math.round(el.clientWidth * 0.9));

        el.scrollTo({
            left: el.scrollLeft + dir * step,
            behavior: "smooth",
        });

        // ✅ не копим таймеры при частых кликах
        clearScrollTimers();

        // ✅ обновим состояние кнопок во время/после smooth-scroll
        requestAnimationFrame(updateNavState);
        scrollTimersRef.current.push(window.setTimeout(updateNavState, 150));
        scrollTimersRef.current.push(window.setTimeout(updateNavState, 500));
    };

    // ✅ drag-to-scroll (мышь)
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        let isDown = false;
        let startX = 0;
        let startLeft = 0;

        const onDown = (e: PointerEvent) => {
            // только мышь/перо — на touch пусть нативный свайп
            if (e.pointerType === "touch") return;
            isDown = true;

            el.setPointerCapture(e.pointerId);
            startX = e.clientX;
            startLeft = el.scrollLeft;
            el.classList.add(styles.dragging);
        };

        const onMove = (e: PointerEvent) => {
            if (!isDown) return;
            const dx = e.clientX - startX;
            el.scrollLeft = startLeft - dx;
        };

        const endDrag = (e: PointerEvent) => {
            if (!isDown) return;
            isDown = false;
            el.classList.remove(styles.dragging);

            try {
                el.releasePointerCapture(e.pointerId);
            } catch {
                // ignore
            }

            updateNavState();
        };

        el.addEventListener("pointerdown", onDown);
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerup", endDrag);
        el.addEventListener("pointercancel", endDrag);
        el.addEventListener("pointerleave", endDrag);

        return () => {
            el.removeEventListener("pointerdown", onDown);
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerup", endDrag);
            el.removeEventListener("pointercancel", endDrag);
            el.removeEventListener("pointerleave", endDrag);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ===== Lightbox =====
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const isOpen = activeIndex !== null;

    const open = (idx: number) => setActiveIndex(idx);
    const close = () => setActiveIndex(null);

    const prev = () => {
        setActiveIndex((i) => {
            if (i === null) return i;
            return i === 0 ? images.length - 1 : i - 1;
        });
    };

    const next = () => {
        setActiveIndex((i) => {
            if (i === null) return i;
            return i === images.length - 1 ? 0 : i + 1;
        });
    };

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };

        document.body.classList.add("no-scroll");
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.classList.remove("no-scroll");
            window.removeEventListener("keydown", onKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    // sizes для strip
    const stripSizes = "(max-width: 560px) 88vw, (max-width: 1023px) 46vw, 420px";

    return (
        <section className={`${styles.gallery} section`} aria-labelledby={titleId}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 id={titleId} className={styles.title}>
                        Производственная галерея
                    </h2>

                    <div className={styles.controls}>
                        <button
                            type="button"
                            className={styles.navBtn}
                            onClick={() => scrollByCards(-1)}
                            disabled={!canPrev}
                            aria-label="Прокрутить влево"
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            className={styles.navBtn}
                            onClick={() => scrollByCards(1)}
                            disabled={!canNext}
                            aria-label="Прокрутить вправо"
                        >
                            ›
                        </button>
                    </div>
                </header>

                <div className={styles.stripWrap} data-variant={variant}>
                    <div ref={trackRef} className={styles.strip} role="list" aria-label="Горизонтальная галерея">
                        {images.map((img, idx) => (
                            <button
                                key={img.id}
                                type="button"
                                className={styles.item}
                                role="listitem"
                                onClick={() => open(idx)}
                                aria-label={`Открыть фото: ${img.alt}`}
                            >
                                <img
                                    className={styles.image}
                                    src={img.stripSrc}
                                    srcSet={`${img.stripSrc} 900w`}
                                    sizes={stripSizes}
                                    alt={img.alt}
                                    loading={idx < 2 ? "eager" : "lazy"}
                                    decoding="async"
                                    onLoad={updateNavState}
                                />
                            </button>
                        ))}
                    </div>

                    {/* мягкие края */}
                    <div className={styles.fadeLeft} aria-hidden="true"/>
                    <div className={styles.fadeRight} aria-hidden="true"/>
                </div>
            </div>

            {/* ✅ Lightbox */}
            {isOpen && activeIndex !== null && (
                <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Просмотр фото">
                    <button type="button" className={styles.backdrop} onClick={close} aria-label="Закрыть"/>

                    <div className={styles.lightboxInner}>
                        <button type="button" className={styles.close} onClick={close} aria-label="Закрыть">
                            ✕
                        </button>

                        <button type="button" className={styles.navPrev} onClick={prev} aria-label="Предыдущее фото">
                            ‹
                        </button>

                        <figure className={styles.figure}>
                            <img
                                className={styles.lightboxImage}
                                src={images[activeIndex].lightboxSrc}
                                alt={images[activeIndex].alt}
                                decoding="async"
                            />
                            <figcaption className={styles.caption}>
                                {images[activeIndex].caption ?? images[activeIndex].alt}
                            </figcaption>
                        </figure>

                        <button type="button" className={styles.navNext} onClick={next} aria-label="Следующее фото">
                            ›
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutGallery;