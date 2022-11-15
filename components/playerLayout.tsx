import { Box } from '@chakra-ui/layout';
import Sidebar from './sidebar';

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0" width="250px" height="100%">
        <Sidebar />
      </Box>
      <Box marginLeft="250px">{children}</Box>
      <Box position="absolute" left="0" bottom="0" height="100px" width="100%">
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;