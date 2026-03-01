// Для CSS/SCSS модулей
declare module "*.module.scss" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.module.css" {
    const classes: Record<string, string>;
    export default classes;
}

// Для SVG файлов
declare module "*.svg" {
    const src: string;
    export default src;
}

// Для изображений
declare module "*.png" {
    const src: string;
    export default src;
}

declare module "*.jpg" {
    const src: string;
    export default src;
}

declare module "*.jpeg" {
    const src: string;
    export default src;
}

declare module "*.gif" {
    const src: string;
    export default src;
}

declare module "*.webp" {
    const src: string;
    export default src;
}

declare module "*.avif" {
    const src: string;
    export default src;
}