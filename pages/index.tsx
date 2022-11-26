import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import GradientLayout from '../components/graidentLayout';
import { useMe } from '../lib/hooks';
import prisma from '../lib/prisma';

const Home = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout
      color="red"
      subTitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistCount} public playlists`}
      image="/profile-picture.png"
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artists of the month.
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%" key={artist.id}>
              <Box bg="gray.900" borderRadius="5px" padding="15px" width="100%">
                <Image
                  src="https://place-puppy.com/300x300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: {
      artists
    }
  };
};
export default Home;
