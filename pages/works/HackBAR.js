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
    TableCaption,
    TableContainer,
    ListItem,
    List,
    Link,
    Button
  } from '@chakra-ui/react'
  import { GridItem } from '../../components/grid-item'
  import Layout from '../../components/layouts/article'
  import { Title } from '../../components/work'
  import { IoLogoTwitter, IoLogoInstagram} from 'react-icons/io5'
  import thumbHackBAR from '../../public/images/works/Hack.BAR.png'

  
  const Work = () => (
    <Layout title="HackBAR">
      <Container>
        <Title>
        Hack.BAR <Badge>2022-</Badge>
        </Title>
          <GridItem
            href="https://hack-bar.vercel.app/"
            title="エンジニアバー / 飲食店経営"
            thumbnail={thumbHackBAR}
          >
            
          </GridItem>
        <Box
          borderRadius="lg"
          mb={6}
          mt={10}
          p={10}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        > 
          ふと、東京・六本木にあるエンジニアバーに行ってみたいと思ったが距離が遠い、、
          「そうだ。自分で三宮に創ってしまおう」そんな成り行きでオープンしました
          
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
            <Table variant='simple' size='sm'>
              <TableCaption>プレオープンイベントは二部制・事前申し込み者限定です</TableCaption>
              <Thead>
                <Tr>
                  <Th>日時</Th>
                  <Th>内容</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>5/21(土) ①18:00 ~ 20:00 / ②21:00 ~ 23:00</Td>
                  <Td>プレオープンイベント</Td>
                </Tr>
                <Tr>
                  <Td>5/23(月) 18:00 ~ 23:00</Td>
                  <Td>オープン</Td>
                </Tr>
                <Tr>
                  <Td>毎週月曜日・木曜日 18:00 ~ 23:00</Td>
                  <Td>固定オープン日</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <List>
          <ListItem>
            <Link href="https://twitter.com/EngineerBarKobe" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @EngineerBarKobe (Hack.BAR[ハックバー])
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/kobe.engineer_bar" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @kobe.engineer_bar ([Hack.BAR] Engineer&apos; BAR)
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
  