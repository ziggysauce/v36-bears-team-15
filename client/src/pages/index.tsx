/* istanbul ignore file */
import Main from 'components/Main';
import supabase from '../lib/supabase';

export default function Home({ users, error }) {
  if (!error)
    console.log(
      "Supabase is connected, here's the first user: ",
      users[0].name,
    );
  else console.log(error.message);
  return (
    <>
      <Main />
    </>
  );
}

export async function getStaticProps() {
  const { data: users, error } = await supabase.from('User').select('*');

  if (error) {
    console.log(error);
  }

  return {
    props: {
      users,
      error,
    },
  };
}
