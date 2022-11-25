import { Box, Text, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

const GradientLayout = ({
  color,
  children,
  title,
  subTitle,
  description,
  image,
  roundImage
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? '100%' : '5px'}
          />
        </Box>
        <Box padding="40px" lineHeight="40px" color="white">
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {subTitle}
          </Text>
          <Text fontSize="6xl">{title}</Text>
          <Text fontSize="x-small">{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default GradientLayout;
