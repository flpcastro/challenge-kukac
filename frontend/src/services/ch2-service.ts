import axios from "axios";
import { ChangeAnswer } from "../interfaces/ChangeAnswer";

export const calculateChange = async (
  buyValue: string,
  deliveredValue: string
) => {
  try {
    const response = await axios.get(
      `http://localhost:3333/challenges/getChange/${buyValue}/${deliveredValue}`
    );

    const changeAnswer: ChangeAnswer = response.data;
    return changeAnswer;
  } catch (error) {
    console.log("calculateChange error", error);
    return {} as ChangeAnswer;
  }
};