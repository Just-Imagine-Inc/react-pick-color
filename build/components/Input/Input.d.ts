/// <reference types="react" />
declare type InputProps = {
    name: string;
    value: string | number;
    type?: "number" | "text";
    label: string;
    onChange: (value: string) => void;
    min?: number;
    max?: number;
    step?: number;
    prefix?: string;
    maxLength?: number;
    size?: "small" | "large";
};
declare const _default: ({ name, value, type, label, prefix, min, max, step, maxLength, size, onChange }: InputProps) => JSX.Element;
export default _default;
