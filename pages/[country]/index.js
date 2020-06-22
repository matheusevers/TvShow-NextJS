import { useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  console.log(props);

  return <h1>test</h1>;
};

// Home.getInitialProps = async () => {
//   const response = await axios.get(
//     "http://api.tvmaze.com/schedule?country=US&date=2014-12-01"
//   );
//   return {
//     shows: response.data,
//   };
// };

export async function getServerSideProps() {
  const response = await axios.get(
    "http://api.tvmaze.com/schedule?country=US&date=2014-12-01"
  );
  return {
    props: { shows: response.data },
  };
}

export default Home;
