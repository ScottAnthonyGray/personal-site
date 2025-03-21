import { Container, VStack, Heading, Image } from "@chakra-ui/react"
import Avatar from '../assets/avatar.jpg';
function Banner() {
  return (
        <Container>
            <VStack>
            <Image
                src={Avatar}
                boxSize="250px"
                borderRadius="full"
                fit="cover"
                alt="Scott Gray"
                filter="grayscale(100%)"
            />
                <Heading size="lg">Scott Gray</Heading>
                <Heading size="md">Consultant | DevOps | Infrastructure</Heading>
            </VStack>
        </Container>
  );
}

export default Banner;
