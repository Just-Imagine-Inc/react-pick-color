import React from 'react';
import { RgbColor, Color } from '../../types';
interface ColorListProps {
    colors: Color[];
    additionalStyles?: React.CSSProperties;
    onClick: (color: RgbColor) => void;
    onAdd?: () => void;
}
declare const ColorList: React.FC<ColorListProps>;
export default ColorList;
