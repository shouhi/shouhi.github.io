import {
    Link,
    Container,
    Badge,
    ListItem,
    Box,
    UnorderedList,
    Heading,
    Center,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { GridItem } from '../../components/grid-item'
  import Layout from '../../components/layouts/article'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import thumbProTain from '../../public/images/works/ProTain.png'

  
  const Work = () => (
    <Layout title="ProTain">
      <Container>
        <Title>
        ProTain <Badge>2021-</Badge>
        </Title>
          <GridItem
            href="https://protaskg.studio.site/"
            title="ProTain"
            thumbnail={thumbProTain}
          >
            筋トレ管理SNS
          </GridItem>
        <Box
          borderRadius="lg"
          mb={6}
          mt={10}
          p={10}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          近年新型コロナウイルス蔓延により「筋トレ」が流行した。
          そこでTwitterやInstagramではなく筋トレに焦点を当てたSNS、いわば情報共有の場・モチベーション維持を支援するSNSアプリが欲しいと考え一ヶ月で開発。
           <P>メディア
              <Link href='https://qiita.com/shouhi/items/815976e42578a7a9c377' ml={3}>Qiita</Link>
           </P>
        </Box>
        <UnorderedList ml={4} my={4}>
          <ListItem>筋トレ・ダイエット・食事のカテゴリ別に投稿できる</ListItem>
          <ListItem>毎日の筋トレの記録をアプリ内カレンダーから可視化</ListItem>
        </UnorderedList>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>筋トレ管理SNS</Center>
        </Heading>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  