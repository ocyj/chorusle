import _ from "lodash";
import GuessStatus from "./chorusle/GuessStatusEnum";

function checkGuess(answer: string, guess: string): Array<GuessStatus> {
  const answerList = answer.split(" ");
  const answerWords = groupElements(answerList);
  const guessWords = groupElements(guess.split(" "));

  const _checkedGuess = new Array(answerList.length).fill(GuessStatus.Wrong);

  for (let [answerWord, answerPlaces] of answerWords) {
    // `undefined' (falsy) if word in answer but not in guess:
    const guessPlaces = guessWords.get(answerWord);
    if (guessPlaces) {
      // A word in the answer is also present in the guess.
      // Those places both in guess and answer are correct.
      setIntersection(answerPlaces, guessPlaces).forEach((e) => {
        _checkedGuess.splice(e, 1, GuessStatus.Correct);
      });

      // Calculate N, the size of the set of those occurences only in
      // answer. Calculate those occurences that are only in guess and sort,
      // take the first N elements of this list and mark them as missplaced.
      let _numOnlyInAnswer = setDifference(answerPlaces, guessPlaces).size;
      _.take(
        Array.from(setDifference(guessPlaces, answerPlaces)).sort(),
        _numOnlyInAnswer
      ).forEach((e) => {
        _checkedGuess.splice(e, 1, GuessStatus.Missplaced);
      });
    }
  }
  return _checkedGuess;
}

function groupElements<T>(input: Array<T>): Map<T, Set<number>> {
  let groups = new Map();
  input.forEach((key, index, _) => {
    if (!groups.has(key)) {
      groups.set(key, new Set<number>());
    }
    groups.get(key).add(index);
  });
  return groups;
}

function setIntersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  let _intersection = new Set<T>();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function setDifference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  let _difference = new Set<T>(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

export default checkGuess;
export { GuessStatus };
