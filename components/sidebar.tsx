import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from 'react-icons/md';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100% - 100px)"
      paddingX="5px"
      bg="black"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <Image alt="Primary Logo" src="/logo.svg" height={60} width={120} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
