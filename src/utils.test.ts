import checkGuess from "./utils";

it.each`
  answer                  | guess                   | expected
  ${"One Two Three Four"} | ${"One Two Three Four"} | ${["C", "C", "C", "C"]}
`(
  "checkGuess $guess to $expected when answer is $answer",
  ({ answer, guess, expected }) => {
    expect(checkGuess(answer, guess)).toEqual(expected);
  }
);
