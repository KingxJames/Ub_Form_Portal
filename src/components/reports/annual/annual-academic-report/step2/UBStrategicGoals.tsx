import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";

const initialState = ["", "", ""];

export const UBStrategicGoals: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question:
        "1. List the strategic goals for the period under review and indicate the progress of each goal.",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = "";
        setState((prevState) => {
          const newState = [...prevState];
          newState[1] = value;
          return newState;
        });
      },
      type: "input",
      value: state[2],
    },
    {
      question:
        "2. What challenges did your faculty encounter in pursuing these goals? How were these challengesaddressed? This may include risk and assumptions identified in the Annual Implementation plan.",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = "";
        setState((prevState) => {
          const newState = [...prevState];
          newState[1] = value;
          return newState;
        });
      },
      type: "input",
      value: state[2],
    },
    {
      question: "4. List goals for the upcoming academic year.",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = "";
        setState((prevState) => {
          const newState = [...prevState];
          newState[1] = value;
          return newState;
        });
      },
      type: "input",
      value: state[2],
    },
    {
      question:
        "5. What is the way forward for the Faculty as it enters into its new academic year? How will this assist the University in the long term?",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = "";
        setState((prevState) => {
          const newState = [...prevState];
          newState[1] = value;
          return newState;
        });
      },
      type: "input",
      value: state[2],
    },
  ];

  return (
    <Container maxWidth="sm">
      {questions.map((q, index) => (
        <UBTextField
          key={index}
          question={q.question}
          handleSetValue={q.handleSetAnswer}
          value={q.value}
        />
      ))}
    </Container>
  );
};

export default UBStrategicGoals;
