import React from 'react';
import { HslColor, HsvColor } from '../../types';
interface SaturationProps {
    hsl: HslColor;
    onChange?: (color: HsvColor) => void;
}
declare const Saturation: React.FC<SaturationProps>;
export default Saturation;
