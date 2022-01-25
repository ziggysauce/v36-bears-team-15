/* istanbul ignore file */
import Main from 'components/Main';
import supabase from '../lib/supabase';

export default function Home({ users }) {
  return (
    <>
      <Main />
      <p>{JSON.stringify(users)}</p>
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
