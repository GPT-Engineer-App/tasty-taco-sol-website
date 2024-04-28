// Taco Sol Restaurant Website
import { Box, Container, Heading, Text, Link, Image, VStack } from "@chakra-ui/react";
import { FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={4} align="center">
        <Image src="https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0YWNvJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3MTQzMTU1NzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Taco Sol Restaurant" borderRadius="lg" boxSize="300px" objectFit="cover" />
        <Heading as="h1" size="2xl" mt={5}>
          Taco Sol
        </Heading>
        <Text fontSize="xl" mt={2}>
          Authentic Mexican Cuisine
        </Text>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={3}>
            <Box display="flex" alignItems="center">
              <FaPhone />
              <Text ml={2}>+1 (705) 586-1599</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <FaMapMarkerAlt />
              <Text ml={2}>80 Cedar, Greater Sudbury, ON P3A 2P2</Text>
            </Box>
            <Link href="https://order.online/business/taco-sol-11074083" isExternal color="teal.500">
              <Box display="flex" alignItems="center">
                <FaExternalLinkAlt />
                <Text ml={2}>View Our Menu</Text>
              </Box>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
