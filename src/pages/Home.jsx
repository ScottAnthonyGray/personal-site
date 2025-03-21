import { Flex, VStack } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

function Home() {
  return (
    <Flex height="100vh"justifyContent="center"alignItems="center">
            <VStack>
                <Banner/>
                <Nav/>
            </VStack>
    </Flex>

  );
}

export default Home;