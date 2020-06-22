import { useEffect } from "react";
import axios from "axios";
import Thumbnail from "../../components/Thumbnail";
const Home = ({ shows, country }) => {
  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem;

      return (
        <li key={index}>
          <Thumbnail
            imageUrl={(show.image && show.image.medium) || undefined}
            caption={show.name}
            href="/[country]/[showId]"
            as={`/${country}/${show.id}`}
          />
        </li>
      );
    });
  };
  return (
    <div>
      <ul className="tvshows-grid">
        {renderShows()}
        <style jsx>
          {`
            .tvshows-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }
          `}
        </style>
      </ul>
    </div>
  );
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
    props: { shows: response.data, country },
  };
}

export default Home;
