import { Box, Flex } from '@chakra-ui/layout';
import { Input, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
// import { SWRConfig } from 'swr';
import Image from 'next/image';
import { auth } from '../lib/mutations';

const AuthForm = ({ mode }: { mode: 'signin' | 'signup' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, {
      email,
      password
    });

    setIsLoading(false);
    router.push('/');
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="solid 1px white"
      >
        <Image src="/logo.svg" height={100} width={100} alt="Primary Logo" />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              m="20px 0"
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                '&:hover': {
                  bg: 'green.300'
                }
              }}
            >
              {mode.toUpperCase()}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
