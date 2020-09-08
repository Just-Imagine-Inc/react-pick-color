import React from 'react';
import { RgbColor, Color } from '../../types';
interface PresetListProps {
    colors: Color[];
    onClick: (color: RgbColor) => void;
    currentColor: RgbColor;
}
declare const PresetList: React.FC<PresetListProps>;
export default PresetList;
