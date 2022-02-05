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
 * [x] Navigate to previous days' logs
 * [ ] Build a UI to select a historic date to view
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
  const moodOptions = [
    { display: '😡', value: 'upset' },
    { display: '🙁', value: 'sad' },
    { display: '😐', value: 'meh' },
    { display: '🙂', value: 'content' },
    { display: '😊', value: 'happy' },
    { display: '😁', value: 'wonderful' },
  ];

  // Event handlers
  const onAddEntry = (mood) => {
    addEntry([...entries, { mood, timestamp: new Date() }]);
    addEntryToggle(false);
    // TODO: Setup a request to update the database
  };

  if ((addingEntry || entries.length === 0) && !historicDate) {
    return (
      <S.Wrapper>
        <S.h1>Hello, how are you feeling {headerPrompt}?</S.h1>
        <S.MoodContainer>
          {moodOptions.map((mood) => (
            <div key={mood.value} onClick={() => onAddEntry(mood.value)}>
              <MoodCard mood={mood} />
            </div>
          ))}
        </S.MoodContainer>
        {entries.length !== 0 && (
          <S.Button onClick={() => addEntryToggle(false)}>Cancel</S.Button>
        )}
      </S.Wrapper>
    );
  } else {
    const href = historicDate ? '/mood-logger' : '/';
    const label = historicDate ? "Go to Today's Mood Log" : 'Go Back Home';
    return (
      <S.Wrapper>
        <StyledLink href={href} label={label} />
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
            <EntryCard
              key={`${idx}-${entry.mood}`}
              entry={entry}
              moodOptions={moodOptions}
            />
          ))}
        </S.EntryContainer>
      </S.Wrapper>
    );
  }
};

export default MoodLogger;
