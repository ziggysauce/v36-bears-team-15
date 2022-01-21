import { useRouter } from 'next/router';
import MoodLogger from 'components/MoodLogger';

const HistoricMood = () => {
  const router = useRouter();
  const { date } = router.query;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const validDate = !!date?.match(dateRegex);

  /**
   * TODO:
   * Remove this dummy data after done testing
   * and DB implementation is complete
   */
  const now = new Date();
  const dummyData = [
    { mood: 'Meh', timestamp: new Date(now.setHours(now.getHours() + 2)) },
    { mood: 'Sad', timestamp: new Date(now.setHours(now.getHours() + 4)) },
    { mood: 'Happy', timestamp: new Date(now.setHours(now.getHours() + 6)) },
  ];

  return validDate ? (
    <MoodLogger historicDate={date} historicData={dummyData} />
  ) : (
    <div>Sorry, this page does not exist.</div> // TODO: This should just instead point to a "not found" page
  );
};

export default HistoricMood;
