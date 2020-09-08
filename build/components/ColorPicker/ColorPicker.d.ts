import React from 'react';
import { Color, ColorObject, ColorCombination, Theme } from '../../types';
export interface ColorPickerProps {
    theme?: Partial<Theme>;
    color?: Color;
    presets?: Color[];
    onChange?: (color: ColorObject) => void;
    hideAlpha?: boolean;
    hideInputs?: boolean;
    combinations?: ColorCombination | ColorCombination[];
    className?: string;
}
declare const ColorPicker: React.FC<ColorPickerProps>;
export default ColorPicker;
