import React from 'react';
import { RgbColor } from '../../types';
interface RgbaInputProps {
    value: RgbColor;
    onChange: (value: RgbColor) => void;
    hideAlpha?: boolean;
}
declare const RgbaInput: React.FC<RgbaInputProps>;
export default RgbaInput;
