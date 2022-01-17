import * as S from '../styles';

const formatTime = (timestamp) =>
  timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

const EntryCard = ({ entry: { mood, timestamp } }) => (
  <S.EntryCard>
    You felt {mood} at {formatTime(timestamp)}
  </S.EntryCard>
);

export default EntryCard;
