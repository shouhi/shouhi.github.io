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
  import thumbSEEDAS from '../../public/images/works/SEEDAS.png'

  
  const Work = () => (
    <Layout title="SEEDAS">
      <Container>
        <Title>
        SEEDAS <Badge>2021-</Badge>
        </Title>
          <GridItem
            href="https://www.instagram.com/seedas_/"
            title="SEEDAS"
            thumbnail={thumbSEEDAS}
          >
            学生カフェ事業
          </GridItem>
        <Box
          borderRadius="lg"
          mb={6}
          mt={10}
          p={10}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          個人経営店のお店数店舗と契約し、空き時間を学生にお貸しし学生自身でカフェを営む。
          飲食店のオーナーはお店を空けている（オープン前）を有効活用することができ、学生はガクチカや経営を実際に経験することができる。
        </Box>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>学生カフェ事業</Center>
        </Heading>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  