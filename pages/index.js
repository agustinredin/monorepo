import {Icon, Container, Box, Heading, Image, Button, SimpleGrid, List, ListItem } from '@chakra-ui/react'
import Navbar from '../navbar.js'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin,
IoLogoGithub,
IoMdDownload} from 'react-icons/io'


import dummyImg  from '../public/images/dummy100x100.png'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
                Hello, I&apos;m a full-stack developer based in Argentina!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Agustin Redin
                    </Heading>
                    <p>
                        Desarrollador Fullstack y entusiasta
                    </p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}}
                ml={{md:6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block"
                    borderRadius="full" src="/images/dummy100x100.png" alt="Foto de perfil"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Proyectos
                </Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <NextLink href='works/vigiloo'>
                    <Link>Vigiloo</Link>
                </NextLink>.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>Portfolio</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as='h3' variant='section-title'>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                    Nacido en Argentina etc etc sobre mi sarasa etc loremipsum
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Graduado del colegio secundario
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Comenzada la carrera y el camino dev. mas sarasa y tecnologia
                </BioSection>
                <BioSection>
                    <BioYear>2024</BioYear>
                    Freelance
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    Mis pasiones
                </Heading>
                <Paragraph>
                    El desarrollo, ir al gimnasio, leer, mis amigos, la moda.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    En la web
                </Heading>
                <List>
                    <ListItem>
                        <Link href='https://github.com/agustinredin/' target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}></Icon>}>@agustinredin</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.linkedin.com/in/agustintomasredin/' target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}></Icon>}>Agustin Tomas Redin</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://github.com/agustinredin/' target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMdDownload}></Icon>}> Descargar CV</Button>
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem href="/" title="Placeholder 1" thumbnail={dummyImg}></GridItem>
                    <GridItem href="/" title="Placeholder 2" thumbnail={dummyImg}></GridItem>
                </SimpleGrid>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page