import {
    Link,
    Container,
    Badge,
    Box,
    SimpleGrid,
    Heading,
    Center,
    useColorModeValue,
    List,
    ListItem,
    Button,
  } from '@chakra-ui/react'
  import { GridItem } from '../../components/grid-item'
  import Layout from '../../components/layouts/article'
  import { Title } from '../../components/work'
  import P from '../../components/paragraph'
  import { IoLogoTwitter, IoLogoInstagram} from 'react-icons/io5'
  import thumbTechUni from '../../public/images/works/TechUni.png'
  import thumbTechUni_ambassador from '../../public/images/works/TechUni_ambassador.png'

  const Work = () => (
    <Layout title="TechUni">
      <Container>
        <Title>
           Tech.Uni <Badge>2020-</Badge>
        </Title>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://techuni.org/"
            title="TechUni"
            thumbnail={thumbTechUni}
          >
            IT系学生団体
          </GridItem>
          <GridItem
            href="https://techuni.org/"
            title="提携企業様"
            thumbnail={thumbTechUni_ambassador}
          >
            日本で10社・インドに1社の提携企業様がTech.Uniを支援してくださっています。
          </GridItem>
        </SimpleGrid>
        <Box
          borderRadius="lg"
          mb={6}
          mt={10}
          p={10}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          2020年10月26日に自身の経験からエンジニアの友達が欲しいと思いたち関西学院大学のプログラミング研究会として創設。
          2022年5月に会長として就任し団体運営方針を握る。さらに同月私が代表取締役務める株式会社MAGIE COMPANYを運営会社とする。<br></br>
          現在メンバー総数135名・企業提携社数11社・全国大会出場経験有りと実績を積み重ねて「今後100年続くIT系学生団体」として活動中。
           <P>メディア
              <Link href='https://www.kwansei.ac.jp/shakairenkei/news/detail/278' ml={3}>関西学院大学</Link>
              <Link href='https://note.com/techbowl/n/n8155b9a953eb' ml={3}>株式会社TechBowlアンバサダー加盟</Link>
              <Link href='https://yutaro-blog.net/2021/09/04/techuni-summerhack2021/' ml={3}>現役エンジニアゆーたろーさん</Link>
              <Link href='https://note.com/shouhi/n/n972cbd63014f' ml={3}>Tech.Uni創設の話 note</Link>
           </P>
        </Box>
        <List>
          <ListItem>
            <Link href="https://twitter.com/TechUni1026" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @TechUni1026 (Tech.Uni | 関西学院大学プログラミング研究会)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/tech_uni1026" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @tech_uni1026 (Tech.Uni | 関西学院大学プログラミング研究会)
              </Button>
            </Link>
          </ListItem>
        </List>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>IT系学生団体</Center>
        </Heading>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  