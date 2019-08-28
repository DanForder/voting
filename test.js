const randomIntFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const castVote = parties => {
  let voteFor = randomIntFromRange(0, parties.length - 1);
  parties[voteFor].votes += 1;
};

const sortHighScores = (party1, party2) => {
  return party2.votes - party1.votes;
};

const initialiseVote = (numberOfParties, numberOfVoters) => {
  for (let index = 1; index <= numberOfParties; index++) {
    parties.push({ partyName: `Party #${index}`, votes: 0 });
  }
  //   console.log(parties);
  for (let index = 0; index < numberOfVoters; index++) {
    castVote(parties);
  }

  for (let index = 0; index < numberOfParties; index++) {
    console.log(
      `${parties[index].partyName} received ${parties[index].votes} votes`
    );
  }

  console.log(
    `\n${parties.sort(sortHighScores)[0].partyName} Wins with ${parties.sort(
      sortHighScores
    )[0].votes -
      parties.sort(sortHighScores)[1]
        .votes} more votes than the next best party, ${
      parties.sort(sortHighScores)[1].partyName
    }`
  );
};

let parties = [];

initialiseVote(3, 33551983);
