import * as S from '../styles';

const MoodCard = ({ mood }) => (
  <S.MoodCard>
    <S.MoodContent>{mood.display}</S.MoodContent>
  </S.MoodCard>
);

export default MoodCard;
