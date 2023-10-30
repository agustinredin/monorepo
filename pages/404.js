import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
            <Text>The pege you&apos;re looking for was not found.</Text>
            <Divider my={6}></Divider>

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme='teal'>Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound