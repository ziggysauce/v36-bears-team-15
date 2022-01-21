import * as S from '../styles';

// (Possible) FUTURE TODO:
// Add intrestitial screen after selecting a mood (see figma design)
// and provide the option to also add a reason/note for the mood choice

const MoodCard = ({ mood }) => (
  <S.MoodCard>
    <S.MoodContent>{mood.display}</S.MoodContent>
  </S.MoodCard>
);

export default MoodCard;
