import { ReactNode } from "react";
import { FontStyle } from "../Styles/Font";

interface TxtProps {
    typography: keyof typeof FontStyle;
    children: ReactNode;
    color?: string;
    onClick?: () => void;
    cursor?: boolean;
}

export const Txt = ({
    typography,
    color,
    children,
    onClick,
    cursor,
    ...props
}: TxtProps) => {
    return (
        <p
            style={{
                color: color,
                ...(FontStyle[typography]),
                cursor: cursor ? "pointer" : "default",
            }}
            onClick={onClick}
            {...props}>
            {children}
        </p>
    );
}