import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px 64px;
  background-color: #dee2e6;
  border-radius: 12px;
  width: 480px;
  min-height: 250px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StepLabel = styled.label`
  display: flex;
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 4px 8px;
  border: none;
  outline: none;
  border-radius: 8px;
`;

export const P = styled.p`
  margin-top: 12px;
`;

export const TextSpan = styled.span`
  color: #050505;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  /* 128.571% */
  text-transform: uppercase;
`;

export const ResetBtn = styled.button`
  border: none;
  outline: none;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #fa5252;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f03e3e;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledButton = styled.button`
  padding: 6px 24px;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

  &.btn-decr {
    background-color: #f783ac;
  }

  &.btn-incr {
    background-color: #40c057;
  }

  &:active {
    transform: translateY(0.2rem);
  }
`;

export const StyledRangeInput = styled.input`
  cursor: pointer;
`;
