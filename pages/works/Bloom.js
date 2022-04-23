import {
    Container,
    Badge,
    Box,
    Heading,
    Center,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { GridItem } from '../../components/grid-item'
  import Layout from '../../components/layouts/article'
  import { Title } from '../../components/work'
  import thumbBloom from '../../public/images/works/Bloom.png'
  
  const Work = () => (
    <Layout title="Bloom">
      <Container>
        <Title>
        Bloom <Badge>2021-</Badge>
        </Title>
          <GridItem
            href="https://b-loom-official.studio.site/"
            title=" Bloom"
            thumbnail={thumbBloom}
          >
            完全会員制飲食店
          </GridItem>
        <Box
          borderRadius="lg"
          mb={6}
          mt={10}
          p={10}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          地方の企業様の悩みである新卒採用者の減少といった課題をフランクな会食を通して解決する飲食店事業。
          学生は関関同立の学生をターゲットとし、無料で食事を楽しむことができます。
        </Box>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>完全会員制飲食店</Center>
        </Heading>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  