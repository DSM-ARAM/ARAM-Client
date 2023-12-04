import { css, styled } from "styled-components";
import { color } from "../Styles/Color";
import { FontStyle } from "../Styles/Font";

type ButtonEnum = 'Small' | "Large";

interface ButtonType{
    size: ButtonEnum;
}

export const Button = styled.button<ButtonType>`
    width: 100%;
    padding: 6px 0;
    background-color: ${color.MainColor};
    color: ${color.White};
    border: none;
    &:hover{
        scale: 1.025;
        transition: all 0.3s;
    }
    &:active{
        background-color: ${color.MainColor};
        opacity: 0.8;
        transition: all 0.3s;
    }

    ${({size})=>
        size === "Small" ?
        css`
            font-size: ${FontStyle.LabelLarge.fontSize};
            font-weight: ${FontStyle.LabelLarge.fontWeight};
            line-height: ${FontStyle.LabelLarge.lineHeight};
            letter-spacing: ${FontStyle.LabelLarge.letterSpacing};
        ` :
        size === "Large" ?
        css`
            font-size: ${FontStyle.TitleLarge.fontSize};
            font-weight: ${FontStyle.TitleLarge.fontWeight};
            line-height: ${FontStyle.TitleLarge.lineHeight};
            letter-spacing: ${FontStyle.TitleLarge.letterSpacing};
        ` :
        css`
            font-size: 50px;
        `
    }
`;