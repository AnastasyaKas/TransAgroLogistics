import React from 'react';
import styles from './AboutGallery.module.scss';

const AboutGallery = () => {
    // Пример данных для изображений. В реальном проекте можно подгружать их динамически.
    const images = [
        { src: 'path_to_image1.jpg', alt: 'Image 1' },
        { src: 'path_to_image2.jpg', alt: 'Image 2' },
        { src: 'path_to_image3.jpg', alt: 'Image 3' },
        { src: 'path_to_image4.jpg', alt: 'Image 4' },
        { src: 'path_to_image5.jpg', alt: 'Image 5' },
        { src: 'path_to_image6.jpg', alt: 'Image 6' },
        { src: 'path_to_image7.jpg', alt: 'Image 7' },
        { src: 'path_to_image8.jpg', alt: 'Image 8' },
    ];

    return (
        <div className={styles.gallery}>
            <h2>Производственная галерея</h2>
            <div className={styles.grid}>
                {images.map((image, index) => (
                    <div key={index} className={styles.card}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className={styles.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutGallery;