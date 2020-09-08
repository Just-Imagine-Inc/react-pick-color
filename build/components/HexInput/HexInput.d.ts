import React from 'react';
interface HexInputProps {
    value: string;
    name: string;
    onChange: (value: string) => void;
}
declare const HexInput: React.FC<HexInputProps>;
export default HexInput;
