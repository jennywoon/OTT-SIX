import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom"
// import Button from "./elements/Button";

const Form = () => {

    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        // e.preventDefault();
        //dispatch(__postTtodos(review));
        // navigate("/reviewboard")
    }

    return (
        <FormContainer onSubmit={onSubmitHandler}>
            <FormFirstWrap>
                {/* <StFormTitle>리뷰 작성하기</StFormTitle> */}
                <div>리뷰 작성하기</div>
            </FormFirstWrap>
            <FormSecondWrap>
                <FormTitleWrap>
                    <StLabel>글 제목</StLabel>
                    <StFirstInput />
                </FormTitleWrap>
                <FormContentWrap>
                    <StLabel>글 내용</StLabel>
                    <StSecondInput />
                </FormContentWrap>
                <StButton
                type="submit"
                    // onChange={onChangeHandler}
                onClick={() => {
                    navigate("/reviewboard")
                }}
                >작성하기</StButton>
            </FormSecondWrap>
        </FormContainer>

    )
}

export default Form;

const FormContainer = styled.form`
    /* border: 1px solid white; */
    width: 90%;
    height: 90%;
    display: flex;
    margin: auto;
    flex-direction: column;
    padding: 20px;
`

const FormFirstWrap = styled.div`
    background-color: rgb(53,36,123);
    color: white;
    border: none;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FormSecondWrap = styled.form`
    background-color: rgb(45,45,45);
    height: 100%; 
    margin-top: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const FormTitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
`

const StFirstInput = styled.input`
    margin-top: 10px;
    height: 50px;
`

const FormContentWrap = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 95%;
`
const StLabel = styled.label`
    color: white;
    margin-bottom: 5px;
`
const StSecondInput = styled.input`
    margin-top: 10px;
    margin-bottom: 50px;
    height: 400px
`
const StButton = styled.button`
    background-color: rgb(53,36,123);
    color: white;
    border: none;
    width: 10%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`