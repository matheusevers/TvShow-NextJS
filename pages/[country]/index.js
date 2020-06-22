import { useEffect } from "react";
import axios from "axios";
import Thumbnail from "../../components/Thumbnail";

const Home = ({ shows }) => {
  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem;

      return (
        <li key={index}>
          <Thumbnail
            imageUrl={show.image ? show.image.medium : ""}
            caption={show.name}
          />
        </li>
      );
    });
  };
  return <ul className="tvshows">{renderShows()}</ul>;
};

// Home.getInitialProps = async () => {
//   const response = await axios.get(
//     "http://api.tvmaze.com/schedule?country=US&date=2014-12-01"
//   );
//   return {
//     shows: response.data,
//   };
// };

export async function getServerSideProps(context) {
  const country = context.params.country || "us";
  const response = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );
  return {
    props: { shows: response.data },
  };
}

export default Home;
