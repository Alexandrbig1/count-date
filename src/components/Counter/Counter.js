import React, { useState } from "react";
import {
  Container,
  TimeWrapper,
  StepWrapper,
  StepLabel,
  CountWrapper,
  Input,
  P,
  TextSpan,
  ResetBtn,
  StyledButton,
  StyledRangeInput,
} from "./Counter.styled";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const year = new Date().getFullYear();
  const currDate = new Date().getDate();
  const month = new Date().getMonth();
  const date = new Date(`${month + 1} ${currDate} ${year}`);
  date.setDate(date.getDate() + count);

  function rangeHandler(e) {
    setStep((prevState) => (prevState = e.target.value));
  }

  function onClickDecreaseCount() {
    setCount((prevState) => prevState - +step);
  }
  function onClickIncreaseCount() {
    setCount((prevState) => prevState + +step);
  }

  function onResetHandler() {
    setStep(1);
    setCount(0);
  }

  function onChangeInputHandler(e) {
    setCount(+e.target.value);
  }

  return (
    <Container>
      <TimeWrapper>
        <StepWrapper>
          <StepLabel htmlFor="rang">Step: {step}</StepLabel>
          <StyledRangeInput
            type="range"
            name="range"
            min={1}
            max={10}
            step={1}
            value={step}
            onChange={(e) => rangeHandler(e)}
          />
        </StepWrapper>
        <CountWrapper>
          <StyledButton className="btn-decr" onClick={onClickDecreaseCount}>
            -
          </StyledButton>
          <Input
            type="text"
            onChange={onChangeInputHandler}
            value={count}
            placeholder={count}
          />
          <StyledButton onClick={onClickIncreaseCount} className="btn-incr">
            +
          </StyledButton>
        </CountWrapper>
        <P>
          <TextSpan>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days ago from today is `
              : `${Math.abs(count)} days ago was `}
          </TextSpan>
          <TextSpan>{date.toDateString()}</TextSpan>
        </P>
        {step > 1 || count !== 0 ? (
          <ResetBtn onClick={onResetHandler}>Reset</ResetBtn>
        ) : (
          ""
        )}
      </TimeWrapper>
    </Container>
  );
}
