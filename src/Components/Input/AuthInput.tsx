import { useState } from "react";
import { styled } from "styled-components";
import { color } from "../../Styles/Color";
import { Txt } from "../Text";

interface AuthInputProps {
    placeholder?: string;
    eye?: boolean;
    email?: boolean;
}

export const AuthInput = ({ placeholder, eye, email }: AuthInputProps) => {

    const [eyeOff, setEyeOff] = useState<boolean>(false);

    return (
        <Background>
            <InputData placeholder={placeholder} type={eye ? eyeOff ? "text" : "password" : "text"} />
            {
                email && (
                    <Fix>
                        <Txt typography="LabelLarge" color={color.Gray[400]}>@dsm.hs.kr</Txt>
                    </Fix>
                )
            }
            {
                eye && (
                    <Fix>
                        <EyeImg src={eyeOff ? "/Assets/Images/eye.png" : "/Assets/Images/eye-off.png"} onClick={() => setEyeOff(!eyeOff)} />
                    </Fix>
                )
            }
        </Background>
    );
}

const Background = styled.div`
    width: auto;
    height: 32px;
    border-bottom: 1px solid ${color.Gray[400]};
    position: relative;
`;

const InputData = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1%;
    ::placeholder{
        color: ${color.Gray[400]};
    }
`;

const Fix = styled.div`
    position: absolute;
    top: 6px;
    right: 0;
`;

const EyeImg = styled.img`

`;