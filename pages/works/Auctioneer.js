import {
  Link,
  Container,
  Badge,
  Box,
  Heading,
  Center,
  useColorModeValue
} from '@chakra-ui/react'
import { GridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import thumbAuctioneer from '../../public/images/works/Auctioneer.png'

const Work = () => (
  <Layout title="Auctioneer">
    <Container>
      <Title>
        Auctioneer <Badge>2023-</Badge>
      </Title>
      <GridItem
        href="https://auctioneer.jp/"
        title="Auctioneer"
        thumbnail={thumbAuctioneer}
      >
        戦略型オンラインカードゲーム
      </GridItem>
      <Box
        borderRadius="lg"
        mb={6}
        mt={10}
        p={10}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        思考せよ。相手の考えを読み最適解を導き出せ 戦略型オンラインカードゲーム
        Auctioneer
        配られる13枚のカードを使いオークション形式で場にあるカードを取り合う新感覚カードゲーム
        <P>
          メディア
          <Link href="https://auctioneer.jp/" ml={3}>
            公式ホームページ
          </Link>
        </P>
      </Box>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>戦略型オンラインカードゲーム</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
