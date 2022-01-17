import { useRouter } from 'next/router';
import MoodLogger from 'components/MoodLogger';

const HistoricMood = () => {
  const router = useRouter();
  const { date } = router.query;

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

  return <MoodLogger historicDate={date} historicData={dummyData} />;
};

export default HistoricMood;
