import css from './VoteOptions.module.css';

type Vot = (a: string) => void;
type Res = () => void;
interface Props {
  onVote: Vot;
  onReset: Res;
  canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: Props) {
  function updateValue(ev) {
    const type = ev.target.textContent.toLowerCase();
    onVote(type);
  }

  return (
    <div className={css.container}>
      <button className={css.button} onClick={updateValue}>
        Good
      </button>
      <button className={css.button} onClick={updateValue}>
        Neutral
      </button>
      <button className={css.button} onClick={updateValue}>
        Bad
      </button>
      {canReset ? (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
