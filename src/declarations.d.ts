// Для CSS/SCSS модулей
declare module "*.module.scss" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.module.css" {
    const classes: Record<string, string>;
    export default classes;
}

// SVG как React-компонент (SVGR)
// import Icon from "./icon.svg"
declare module "*.svg" {
    import * as React from "react";
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;
    export default ReactComponent;
}

// SVG как URL-строка (для <img src="...">)
// import logoUrl from "./logo.svg?url"
declare module "*.svg?url" {
    const url: string;
    export default url;
}

// Images
declare module "*.png" {
    const value: string;
    export default value;
}
declare module "*.jpg" {
    const value: string;
    export default value;
}
declare module "*.jpeg" {
    const value: string;
    export default value;
}
declare module "*.gif" {
    const value: string;
    export default value;
}
declare module "*.webp" {
    const value: string;
    export default value;
}
declare module "*.avif" {
    const value: string;
    export default value;
}
declare module "*.ico" {
    const value: string;
    export default value;
}