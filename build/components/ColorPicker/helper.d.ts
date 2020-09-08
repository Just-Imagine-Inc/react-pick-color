import { ColorObject, ColorCombination } from '../../types';
export declare const initColor: (initialColor?: string | import("../../types").RgbColor | import("../../types").HslColor | undefined) => ColorObject;
export declare const getColorCombination: (color: ColorObject, comb: "analogous" | "monochromatic" | "splitcomplement" | "triad" | "tetrad" | "complement" | ColorCombination[]) => any[];
