import GuessStatus from "./GuessStatusEnum";
import checkGuess from "./utils";

const c = GuessStatus.Correct;
const w = GuessStatus.Wrong;
const m = GuessStatus.Missplaced;

test.each`
  answer                   | guess                    | expected
  ${"one"}                 | ${"one"}                 | ${[c]}
  ${"one"}                 | ${"two"}                 | ${[w]}
  ${"one two"}             | ${"one two"}             | ${[c, c]}
  ${"one two"}             | ${"one"}                 | ${[c, w]}
  ${"one two"}             | ${"one two three"}       | ${[c, c]}
  ${"one two"}             | ${"one three"}           | ${[c, w]}
  ${"one two three"}       | ${"one three two"}       | ${[c, m, m]}
  ${"one one two"}         | ${"one two one"}         | ${[c, m, m]}
  ${"one one two"}         | ${"two one one"}         | ${[m, c, m]}
  ${"one one two"}         | ${"two two one"}         | ${[m, w, m]}
  ${"one one two"}         | ${"two three one"}       | ${[m, w, m]}
  ${"one two one two one"} | ${"two one two one two"} | ${[m, m, m, m, w]}
`(
  "checkGuess '$guess' should return $expected when answer is '$answer'",
  ({ answer, guess, expected }) => {
    expect(checkGuess(answer, guess)).toEqual(expected);
  }
);
