import { useState } from 'react';
import css from './App.module.css';

import { Votes, VoteType } from '../../types/votes.ts';

import Cafeinfo from '../CafeInfo/CafeInfo.tsx';
import VoteOptions from '../VoteOptions/VoteOptions.tsx';

function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  function handleVote(type: VoteType) {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  }

  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <div className={css.app}>
      <Cafeinfo />
      <VoteOptions />
    </div>
  );
}

export default App;
