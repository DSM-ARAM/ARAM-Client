import { ReactNode } from "react";
import { FontStyle } from "../Styles/Font";

interface TxtProps {
    typography: keyof typeof FontStyle;
    children: ReactNode;
    color?: string;
}

export const Txt = ({
    typography,
    color,
    children,
    ...props
}: TxtProps) => {
    return (
        <p
            style={{
                color: color,
                ...(FontStyle[typography]),
            }}
            {...props}>
            {children}
        </p>
    );
}