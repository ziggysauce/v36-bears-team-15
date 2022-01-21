import * as S from '../styles';

const formatTime = (timestamp) =>
  timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

const getMoodDisplay = (moodOptions, mood) => {
  const { display } = moodOptions.find(
    (o) => o.value.toLowerCase() === mood.toLowerCase(),
  );
  return display;
};

const EntryCard = ({ entry: { mood, timestamp }, moodOptions }) => (
  <S.EntryCard>
    You felt <span>&nbsp;{getMoodDisplay(moodOptions, mood)}</span> at{' '}
    {formatTime(timestamp)}
  </S.EntryCard>
);

export default EntryCard;
