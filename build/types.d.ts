export declare type HslColor = {
    h: number;
    s: number;
    l: number;
    a: AlphaType;
};
export declare type HsvColor = {
    h: number;
    s: number;
    v: number;
    a: AlphaType;
};
export declare type RgbColor = {
    r: number;
    g: number;
    b: number;
    a: AlphaType;
};
export declare type AlphaType = number;
export declare type Color = string | RgbColor | HslColor;
export declare type ColorObject = {
    hex: string;
    rgb: RgbColor;
    hsl: HslColor;
    hsv: HsvColor;
    alpha: AlphaType;
};
export declare type ColorCombination = 'analogous' | 'monochromatic' | 'splitcomplement' | 'triad' | 'tetrad' | 'complement';
export declare type Theme = {
    background: string;
    color: string;
    borderColor: string;
    borderRadius: string;
    boxShadow: string;
    width: string;
};
