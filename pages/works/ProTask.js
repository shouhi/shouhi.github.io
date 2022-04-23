import {
  Container,
  Badge,
  ListItem,
  // SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>
        ProTask <Badge>2020-</Badge>
      </Title>
      <Center my={6}>
        <Image src="./public/images/works/ProTask.png" alt="icon" />
      </Center>
      <P>
        関西学院大学の学生専用課題管理アプリ
      </P>
      <P>
        「MSN Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>自動で一週間の課題を管理できる</ListItem>
        <ListItem>自分でTodoを作ることができる</ListItem>
      </UnorderedList>
     

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
