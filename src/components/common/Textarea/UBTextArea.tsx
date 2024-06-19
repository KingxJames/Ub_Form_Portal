import React from "react";
import { styled } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from "@mui/material/Paper";

interface IUBTextAreaProps {
  question: string;
  setAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  maxRows?: 20;
  minRows?: 8;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const UBTextArea: React.FC<IUBTextAreaProps> = ({
  question = "Ask a question?",
  setAnswer,
  value = "",
  maxRows = 20,
  minRows = 8,
}) => {
  return (
    <Stack>
      <Item sx={{ my: 1 }}>1. XX{question}</Item>
      {/* <Item>
        <TextareaAutosize
          maxRows={maxRows}
          minRows={minRows}
          value={value}
          onChange={setAnswer}
        />
      </Item> */}
    </Stack>
  );
};

export default UBTextArea;
