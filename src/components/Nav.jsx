import { Container, Link, Button, Flex, useClipboard, Icon} from "@chakra-ui/react";
import { RiMailLine } from "react-icons/ri"
import { FaLinkedin, FaGithub, FaRegCopy,FaCheck  } from "react-icons/fa"
import { IoIosDocument } from "react-icons/io";
import CvPdf from "../assets/CV-ScottGray.pdf";
import { toaster, Toaster } from "@/components/ui/toaster";

function Nav() {

    const clipboard = useClipboard({ value: "scottanthonygray@outlook.com" })

    const handleCopy = () => {
        clipboard.copy()
        toaster.create({
            title: "Email Copied to Clipboard",
          })
    }

  return (
    <Container maxWidth="400px">
        <Flex direction="column" gap="2">
            <Button
                as={Link}
                display="flex"
                href="https://linkedin.scottgray.dev" 
                target="_blank"
                justifyContent="flex-start" 
                width="100%" 
                variant="outline">
                    <FaLinkedin /> LinkedIn
            </Button>

            <Button
                display="flex"
                justifyContent="flex-start"
                onClick={handleCopy}
                width="100%" 
                variant="outline">
                    <RiMailLine /> 
                        Email
                        <Icon size="sm" as={FaRegCopy} />
            </Button>
            

            <Button 
                as={Link}
                display="flex"
                href="https://github.com/scottanthonygray" 
                target="_blank"
                justifyContent="flex-start" 
                width="100%"  
                variant="outline">
                    <FaGithub /> Github
            </Button>

            <Button 
                as={Link}
                display="flex"
                href={CvPdf}
                target="_blank"
                justifyContent="flex-start" 
                width="100%" 
                variant="outline">
                    <IoIosDocument /> CV
            </Button>

        </Flex>
        <Toaster />
    </Container>

  );
}

export default Nav;