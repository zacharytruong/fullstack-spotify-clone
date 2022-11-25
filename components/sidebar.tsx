import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  LinkBox
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { usePlaylist } from '../lib/hooks';

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/'
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search'
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library'
  }
];

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/'
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites'
  }
];

const Sidebar = () => {
  const { playlists } = usePlaylist();
  return (
    <Box
      width="100%"
      height="calc(100% - 100px)"
      paddingX="5px"
      bg="black"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <Image alt="Primary Logo" src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <Link passHref href={menu.route}>
                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                    {menu.name}
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginY="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <Link href={menu.route}>
                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                    {menu.name}
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((list) => (
              <ListItem paddingX="20px" key={list.id}>
                <LinkBox>
                  <Link href="/" passHref>
                    {list.name}
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
