import React from 'react';
import { RgbColor, AlphaType } from '../../types';
interface AlphaProps {
    rgb: RgbColor;
    onChange?: (alpha: AlphaType) => void;
}
declare const Alpha: React.FC<AlphaProps>;
export default Alpha;
