import {
  Link,
  Container,
  Badge,
  ListItem,
  Box,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'
import { GridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import thumbProTask from '../../public/images/works/ProTask.png'
import thumbProTaskTech from '../../public/images/works/ProTask_tech.jpg'

const Work = () => (
  <Layout title="ProTask">
    <Container>
      <Title>
        ProTask <Badge>2020-</Badge>
      </Title>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
          href="https://protaskg.studio.site/"
          title="ProTask"
          thumbnail={thumbProTask}
        >
          関西学院大学の学生専用課題管理アプリ
        </GridItem>
        <GridItem
          href="https://protaskg.studio.site/"
          title="使用技術"
          thumbnail={thumbProTaskTech}
        >
          暗号化アルゴリズムによるセキュリティ管理で安全な課題自動管理
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
        Lunaでの課題管理に不安や不満を持ち一ヶ月で開発。
         リリース1ヶ月で1,000人ユーザーが利用を開始。
         現在利用者数は3,500人を超える。
         <P>メディア
            <Link href='https://kgpress.jp/kgnews/2516/' ml={3}>関西学院大学新聞</Link>
            <Link href='https://qiita.com/shouhi/items/a052c2704d2b8352e47a' ml={3}>Qiita</Link>
         </P>
      </Box>
      <UnorderedList ml={4} my={4}>
        <ListItem>自動で一週間の課題を管理できる</ListItem>
        <ListItem>自分でTodoを作ることができる</ListItem>
      </UnorderedList>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>課題管理アプリ</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
