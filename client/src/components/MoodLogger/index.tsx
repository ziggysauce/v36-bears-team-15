import * as S from './styles';
import StyledLink from '../StyledLink';
import { useEffect, useState } from 'react';
import MoodCard from './components/mood-card';
import EntryCard from './components/entry-card';

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' });

/**
 * Notes/TODO:
 * [x] If first entry of the day show "How are you feeling today?"
 * [x] Otherwise show entry submissions and if adding, show "How are you feeling at the moment?"
 * [x] Show previous days
 * [ ] Navigate to previous days' logs
 */
const MoodLogger = ({ historicDate, historicData }) => {
  // State management
  const [addingEntry, addEntryToggle] = useState(true);
  const [entries, addEntry] = useState([]);
  useEffect(() => {
    if (historicData?.length) {
      addEntry([...historicData]);
    }
  }, [historicData]);

  // Renders
  const headerPrompt = entries.length ? 'at the moment' : 'today';
  const moodOptions = ['Upset', 'Sad', 'Meh', 'Content', 'Happy', 'Wonderful'];

  // Event handlers
  const onAddEntry = (mood) => {
    addEntry([...entries, { mood, timestamp: new Date() }]);
    addEntryToggle(false);
  };

  if ((addingEntry || entries.length === 0) && !historicDate) {
    return (
      <S.Wrapper>
        <h2>Hello, how are you feeling {headerPrompt}?</h2>
        <S.MoodContainer>
          {moodOptions.map((mood) => (
            <div key={mood} onClick={() => onAddEntry(mood)}>
              <MoodCard mood={mood} />
            </div>
          ))}
        </S.MoodContainer>
      </S.Wrapper>
    );
  } else {
    return (
      <S.Wrapper>
        {historicDate ? (
          <StyledLink href="/mood-logger" label="Go to Today's Mood Log" />
        ) : (
          <StyledLink href="/" label="Go Back Home" />
        )}
        <h1>
          {historicDate
            ? `Showing Mood Log for ${formatDate(historicDate)}`
            : 'Mood Logger'}
        </h1>
        {!historicDate && (
          <S.Button onClick={() => addEntryToggle(true)}>
            Add New Entry
          </S.Button>
        )}
        <S.EntryContainer>
          {entries.map((entry, idx) => (
            <EntryCard key={`${idx}-${entry.mood}`} entry={entry} />
          ))}
        </S.EntryContainer>
      </S.Wrapper>
    );
  }
};

export default MoodLogger;
