import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import dummyImg from '../public/images/dummy100x100.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Posteos populares *pagina comodin*
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem title="Posteo 1" thumbnail={dummyImg} href='/'>
                    </GridItem>
                    <GridItem title="Posteo 2" thumbnail={dummyImg} href='/'>
                    </GridItem>
                    <GridItem title="Posteo 3" thumbnail={dummyImg} href='/'>
                    </GridItem>
                    <GridItem title="Posteo 4" thumbnail={dummyImg} href='/'>
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts