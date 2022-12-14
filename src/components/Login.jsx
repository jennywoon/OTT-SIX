import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "./elements/Button";
import Input from "./elements/Input";
import useInputs from "../hooks/useInputs";
import { useNavigate } from "react-router-dom";
import { __loginCheck } from "../redux/modules/loginSlice";
import { setTokenToCookie, cookieCkeck } from "../actions/Cookie";
import axios from "axios";
import { useDispatch } from "react-redux";

const API_URL = process.env.REACT_APP_API_URL;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, onChangeUserInfo, reset] = useInputs({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (cookieCkeck()) {
      alert("이미 로그인 하셨습니다.");
      navigate("/");
    } else {
      return;
    }
  }, []);

  const { username, password } = userInfo;

  const __postLogin = async () => {
    try {
      const data = await axios.post(`${API_URL}/member/login`, userInfo);
      setTokenToCookie(data.headers.authorization);
      navigate("/");
    } catch (error) {
      if (username.trim() === "") {
        return alert("로그인 정보를 입력해 주세요.");
      } else if (password.trim() === "") {
        return alert("비밀번호를 입력해 주세요.");
      }
      return alert("로그인에 실패하였습니다.");
    }
  };

  const onCreate = (e) => {
    e.preventDefault();
    __postLogin(userInfo);
    reset();
  };

  return (
    <Whole>
      <LoginContainer onSubmit={onCreate}>
        <Button
          type="button" font="55" btntype="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          OTTSIX
        </Button>
        <Title>로그인</Title>
        <ButtonWrap>
          <Input name="username" value={username} onChange={onChangeUserInfo} type="text" placeholder="아이디" inputType="basic"></Input>
          <Input name="password" value={password} onChange={onChangeUserInfo} type="password" placeholder="비밀번호" inputType="basic"></Input>
          <Button height="45px" width="360px" type="submit" btntype="blue" border="1px solid rgb(251, 188, 4)">
            로그인
          </Button>
        </ButtonWrap>
      </LoginContainer>
    </Whole>
  );
};

export default React.memo(Login);

const Whole = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const LoginContainer = styled.form`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding: 50px;
  background-color: #181818;
`;

const Title = styled.div`
  font-family: "나눔고딕", NanumGothic, "돋움", Dotum, Helvetica, sans-serif;
  height: 30px;
  margin: 20px 0 5px 0;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

const ButtonWrap = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  color: #939393;
  font-weight: 500;
  font-size: large;
`;
