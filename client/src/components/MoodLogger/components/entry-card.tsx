import * as S from '../styles';
import { useState } from 'react';
import { Flex } from '../../index';

const formatTime = (timestamp) =>
  timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

const getMoodDisplay = (moodOptions, mood) => {
  const { display } = moodOptions.find(
    (o) => o.value.toLowerCase() === mood.toLowerCase(),
  );
  return display;
};

const EntryCard = ({
  entry: { mood, note = 'This is a fake note', timestamp },
  moodOptions,
}) => {
  const [addingNote, addNoteToggle] = useState(false);
  const [noteEntry, updateNote] = useState(null);

  // Event handlers
  const onSaveNote = () => {
    addNoteToggle(false);
    updateNote(null);
    // TODO: Setup a request to update the database with either a note entry or update
  };

  const noteTextarea = (
    <Flex direction="column" align="center" justify="center">
      <S.TextArea
        onInput={(e) => updateNote(e.target.value)}
        rows="3"
        placeholder="I was feeling this way because..."
      >
        {note}
      </S.TextArea>
      <Flex direction="row" align="center">
        {!!noteEntry?.length && (
          <S.Button onClick={() => onSaveNote()}>Save</S.Button>
        )}
        <S.LinkButton onClick={() => addNoteToggle(false)}>Cancel</S.LinkButton>
      </Flex>
    </Flex>
  );

  /**
   * @description Toggles between displaying the "Add Note" button or the textarea for a mood entry note
   */
  const addNoteToggler = addingNote ? (
    noteTextarea
  ) : (
    <S.LinkButton onClick={() => addNoteToggle(true)}>+ Add Note</S.LinkButton>
  );

  /**
   * @description Toggles between displaying the "Edit" button or the textarea for editing the modd's note
   */
  const editNoteToggler = addingNote ? (
    noteTextarea
  ) : (
    <S.EntryCardNote>
      {note}
      <S.LinkButton onClick={() => addNoteToggle(true)}>Edit</S.LinkButton>
    </S.EntryCardNote>
  );

  /**
   * @description Only shows the "Add Note" button if no note exists. Otherwise, gives the user
   * the ability to update a note. (This is still a TODO:)
   */
  const entryCardNote = note ? editNoteToggler : addNoteToggler;

  return (
    <S.EntryCard>
      <S.EntryCardMood>
        You felt <span>&nbsp;{getMoodDisplay(moodOptions, mood)}</span> at{' '}
        {formatTime(timestamp)}
      </S.EntryCardMood>
      {entryCardNote}
    </S.EntryCard>
  );
};

export default EntryCard;
