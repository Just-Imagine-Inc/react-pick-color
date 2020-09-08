import React from 'react';
import { HslColor } from '../../types';
interface HueProps {
    hsl: HslColor;
    onChange?: (color: HslColor) => void;
}
declare const Hue: React.FC<HueProps>;
export default Hue;
