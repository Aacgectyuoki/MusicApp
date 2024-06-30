import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_TRACKS = gql`
  query GetTracks {
    tracks {
      id
      title
      artist {
        name
      }
      preview
    }
  }
`;

const MusicList = () => {
  const { loading, error, data } = useQuery(GET_TRACKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Top Tracks</h1>
      <ul>
        {data.tracks.map(track => (
          <li key={track.id}>
            <p>{track.title} by {track.artist.name}</p>
            <audio controls>
              <source src={track.preview} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;


// import React from 'react';
// import { useQuery, gql } from '@apollo/client';

// const GET_TRACKS = gql`
//   query GetTracks {
//     tracks {
//       id
//       title
//       artist {
//         name
//       }
//       preview
//     }
//   }
// `;

// const MusicList = () => {
//   const { loading, error, data } = useQuery(GET_TRACKS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return (
//     <div>
//       <h1>Top Tracks</h1>
//       <ul>
//         {data.tracks.map(track => (
//           <li key={track.id}>
//             <p>{track.title} by {track.artist.name}</p>
//             <audio controls>
//               <source src={track.preview} type="audio/mpeg" />
//               Your browser does not support the audio element.
//             </audio>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MusicList;

