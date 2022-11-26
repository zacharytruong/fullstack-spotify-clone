import React from 'react';
import GradientLayout from '../../components/graidentLayout';
import SongsTable from '../../components/songsTable';
import prisma from '../../lib/prisma';
import { validateToken } from '../../lib/validate';

const getBgColor = (id) => {
  const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'gray',
    'teal',
    'yellow'
  ];
  return colors[id] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  const color = getBgColor(playlist.id);
  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subTitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongsTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true
            }
          }
        }
      }
    }
  });

  return {
    props: {
      playlist
    }
  };
};

export default Playlist;
