import {Image, Flex, Link} from "@chakra-ui/react"
function CertComponent () {

    return (
        <Flex>
            <Link 
                href="https://www.credly.com/badges/faeff379-e583-460f-b1cb-4035c000e42c/linked_in?t=stztde">
                    <Image
                        maxWidth="113px"
                        width="100%"
                        src="https://images.credly.com/size/340x340/images/ed4be915-68f8-428a-b332-40ded9084ee5/blob" />
            </Link>           
        </Flex>
    )


}

export default CertComponent