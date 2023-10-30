import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="E-Commerce template">
            <Container>
                <Title>E-Commerce template <Badge> 2023</Badge>
                </Title>
            </Container>
            <P>
                loremipsum 1283971289812856347534756484564578563478534785634785346785634785634785634785346785634785346785
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>URL</Meta>
                    <Link href='/'>/ <ExternalLinkIcon mx="2px"></ExternalLinkIcon></Link>
                </ListItem>
                <ListItem>
                    <Meta>Plataforma</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Firebase</span>
                </ListItem>
            </List>
        </Layout>
    )
}

export default Work

