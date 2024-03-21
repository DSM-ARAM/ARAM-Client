import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"
import { AuthComponents } from "../Components/Auth";
import { Button } from "../Components/Button";
import { AuthInput } from "../Components/Input/AuthInput";
import { Txt } from "../Components/Text";
import { color } from "../Styles/Color";

export const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <Background>
            <AuthComponents>
                <Txt typography="TitleMedium">이메일 로그인</Txt>
                <InputFlex>
                    <AuthInput email placeholder="이메일 주소" />
                    <AuthInput placeholder="비밀번호" eye />
                </InputFlex>
                <FindPw>
                    <Txt typography="BodySmall" color={color.Blue} cursor>비밀번호를 잊으셨나요?</Txt>
                </FindPw>
                <Button size="Small">로그인</Button>
                <SignupGo>
                    <Txt typography="BodySmall">계정이 없으신가요?</Txt>
                    <Txt typography="BodySmall" color={color.Blue} onClick={() => navigate('/signup')} cursor>회원가입하기</Txt>
                </SignupGo>
            </AuthComponents>
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${color.SubColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    margin-top: 54px;
`;

const FindPw = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 120px;
`;

const SignupGo = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;
`;