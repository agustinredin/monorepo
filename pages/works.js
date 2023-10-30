import {
    Container,
    Box,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import  Layout from '../components/layouts/article'
import thumbVigiloo from '/images/dummy100x100.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as='h3' mt={6} fontSize={20} mb={4}>Proyectos</Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem id="vigiloo" title="Vigiloo" thumbnail={thumbVigiloo}>
                        Un sistema de management logístico con WMS y RTV
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem id="mymtec" title="Mymtec" thumbnail={thumbVigiloo}>
                        Sistema para manejar operaciones de comercio exterior
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works