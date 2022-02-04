/* istanbul ignore file */
import Main from 'components/Main';
import supabase from '../lib/supabase';
import Layout from '../components/Layout';

// TODO: Put this data into yaml or json and grab this during compilation there's no point to ship extra JS
const metaMain = {
  title: 'Main - Peak Productivity',
};

export default function Home({ users, error }) {
  if (!error)
    console.log(
      "Supabase is connected, here's the first user: ",
      users[0].name,
    );
  else console.log(error.message);
  return (
    <Layout customMeta={metaMain}>
      <Main />
    </Layout>
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
