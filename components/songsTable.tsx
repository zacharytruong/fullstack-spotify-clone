import { Box } from '@chakra-ui/layout';
import { Table, Thead, Tr, Td, Th, Tbody, IconButton } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillClockCircle } from 'react-icons/ai';
import { useStoreActions } from 'easy-peasy';
import { formatDate, formatTime } from '../lib/formatter';

const SongsTable = ({ songs }) => {
  const playSongs = useStoreActions((state: any) => state.changeSongs);
  const setActiveSong = useStoreActions((state: any) => state.changeActiveSong);

  const handlePlay = (activeSong?) => {
    setActiveSong(activeSong || songs[0]);
    playSongs(songs);
  };

  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <IconButton
          icon={<BsFillPlayFill fontSize="30px" />}
          aria-label="play"
          colorScheme="green"
          size="lg"
          isRound
          onClick={() => handlePlay()}
        />
      </Box>
      <Table variant="unstyled">
        <Thead borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.2)">
          <Tr>
            <Th>#</Th>
            <Th>Title</Th>
            <Th>Date Added</Th>
            <Th>
              <AiFillClockCircle />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {songs &&
            songs.map((song, i) => (
              <Tr
                sx={{
                  transition: 'all .5s',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer'
                  }
                }}
                key={song.id}
                onClick={() => handlePlay(song)}
              >
                <Td>{i + 1}</Td>
                <Td>{song.name}</Td>
                <Td>{formatDate(song.createAt)}</Td>
                <Td>{formatTime(song.duration)}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SongsTable;
