import {
  Container,
  Badge,
  Box,
  Heading,
  Center,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
  ListItem,
  List,
  Link,
  Button
} from '@chakra-ui/react'
import { GridItem } from '../../components/grid-item'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import thumbHackBAR from '../../public/images/works/HACKBAR.png'

const Work = () => (
  <Layout title="HackBAR">
    <Container>
      <Title>
        HACK.BAR <Badge>2022-</Badge>
      </Title>
      <GridItem
        href="https://hackbar.jp/"
        title="エンジニアバー / 飲食店経営"
        thumbnail={thumbHackBAR}
      ></GridItem>
      <Box
        borderRadius="lg"
        mb={6}
        mt={10}
        p={10}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        「エンジニアにとってのサードプレイスを提供する」というビジョン、「エンジニアが共創し、
        イノベーションを生み出す
        世界的なテクノロジー・ハブとなる」というミッションのもと小さな地下室でオープン
        <P>
          コンテンツ
          <Link href="https://hackbar.jp/" ml={3}>
            公式ホームページ
          </Link>
          <Link href="https://hack-bar.vercel.app/" ml={3}>
            Twitterでバズったホームページ
          </Link>
          <Link
            href="https://twitter.com/EngineerBarKobe/status/1523143487050612737?s=20&t=H5WaOv4je5nqya5bk6bNJg"
            ml={3}
          >
            反響あったツイート
          </Link>
        </P>
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        mt={10}
        p={10}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          スケジュール
        </Heading>
        <TableContainer>
          <Table variant="simple" size="sm">
            {/* <TableCaption>イベント開催は二部制・事前申し込み者限定です</TableCaption> */}
            <Thead>
              <Tr>
                <Th>日時</Th>
                <Th>内容</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>毎週金曜日・土曜日・日曜 18:00 ~ 23:00</Td>
                <Td>固定オープン日</Td>
              </Tr>
              {/* <Tr>
                  <Td>6/25(土) ①18:00 ~ 20:00 / ②21:00 ~ 23:00</Td>
                  <Td>イベント開催</Td>
                </Tr> */}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <List>
        <ListItem>
          <Link href="https://twitter.com/HackBarKobe" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoTwitter />}
            >
              @HackBarKobe (HACK.BAR[ハックバー])
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://instagram.com/hack.bar_kobe" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoInstagram />}
            >
              @hack.bar_kobe ([HACK.BAR] Engineer&apos; BAR)
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.instagram.com/hack_bar_international/"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoInstagram />}
            >
              @hack_bar_international ([HACK.BAR] Engineer&apos; BAR |
              International ver.)
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.linkedin.com/company/hack-bar/"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoLinkedin />}
            >
              [HACK.BAR] Engineer&apos; BAR | International ver.
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://github.com/MAGIE-COMPANY-Inc/Hack.BAR.github.io"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoGithub />}
            >
              Homepage (OSS)
            </Button>
          </Link>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>エンジニアバー / 飲食店経営</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
