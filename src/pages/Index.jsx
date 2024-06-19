import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#fff1e5">
      {/* Header */}
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">Financial Times</Heading>
          <Flex>
            <Link href="#" mx={2} color="white">Home</Link>
            <Link href="#" mx={2} color="white">World</Link>
            <Link href="#" mx={2} color="white">Business</Link>
            <Link href="#" mx={2} color="white">Tech</Link>
            <Link href="#" mx={2} color="white">Markets</Link>
            <Link href="#" mx={2} color="white">Opinion</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8}>
          {/* Top Stories */}
          <Box w="100%">
            <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
            <Box bg="gray.100" p={4} borderRadius="md">Top Story 1</Box>
            <Box bg="gray.100" p={4} borderRadius="md" mt={4}>Top Story 2</Box>
            <Box bg="gray.100" p={4} borderRadius="md" mt={4}>Top Story 3</Box>
          </Box>

          {/* Latest News */}
          <Box w="100%">
            <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
            <Box bg="gray.100" p={4} borderRadius="md">Latest News 1</Box>
            <Box bg="gray.100" p={4} borderRadius="md" mt={4}>Latest News 2</Box>
            <Box bg="gray.100" p={4} borderRadius="md" mt={4}>Latest News 3</Box>
          </Box>

          {/* Featured Articles */}
          <Box w="100%">
            <Heading as="h2" size="lg" mb={4}>Featured Articles</Heading>
            <Box bg="gray.100" p={4} borderRadius="md">Featured Article 1</Box>
            <Box bg="gray.100" p={4} borderRadius="md" mt={4}>Featured Article 2</Box>
            <Box bg="gray.100" p={4} borderRadius="md" mt={4}>Featured Article 3</Box>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="center">
          <Link href="#" mx={2} color="white">About</Link>
          <Link href="#" mx={2} color="white">Contact</Link>
          <Link href="#" mx={2} color="white">Privacy Policy</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;