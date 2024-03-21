import { ReactNode } from "react";
import { styled } from "styled-components";
import { color } from "../Styles/Color";

interface AuthType {
    children: ReactNode;
}

export const AuthComponents = ({ children }: AuthType) => {
    return (
        <Background>
            <LogoImg src="/Assets/Images/ARAM_TextLogo.png" />
            <AuthFlex>
                {children}
            </AuthFlex>
        </Background>
    );
}

const Background = styled.div`
    width: 25%;
    background-color: ${color.White};
    border-radius: 10px;
    box-shadow: 0px 8px 50px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    min-width: 380px;
`;

const LogoImg = styled.img`
    width: 60%;
    margin-bottom: 5%;
`;

const AuthFlex = styled.div`
    width: 80%;
`;