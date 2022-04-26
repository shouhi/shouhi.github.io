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
  } from '@chakra-ui/react'
  import { GridItem } from '../../components/grid-item'
  import Layout from '../../components/layouts/article'
  import { Title } from '../../components/work'
  import thumbWeb from '../../public/images/works/web.png'
  import Form from '../../components/form'
  
  const Work = () => (
    <Layout title="Webp">
      <Container>
        <Title>
        Webp <Badge>2022-</Badge>
        </Title>
          <GridItem
            title="web制作 /アプリ開発事業"
            thumbnail={thumbWeb}
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
          <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            Web制作
          </Heading>
          <TableContainer>
            <Table variant='simple' size='sm'>
              <TableCaption>各団体様・個人様のご要望をヒアリングして丁寧に仕上げます</TableCaption>
              <Thead>
                <Tr>
                  <Th>メニュー</Th>
                  <Th>内容</Th>
                  <Th isNumeric>料金(円)</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>ランディングページ(LP)</Td>
                  <Td>一枚のLP</Td>
                  <Td isNumeric>20,000</Td>
                </Tr>
                <Tr>
                  <Td>ポートフォリオ</Td>
                  <Td>個人向けのポートフォリオ</Td>
                  <Td isNumeric>30,000</Td>
                </Tr>
                <Tr>
                  <Td>ホームページ制作</Td>
                  <Td>団体様向けのホームページ</Td>
                  <Td isNumeric>50,000</Td>
                </Tr>
                <Tr>
                  <Td>ホームページ制作(Pro)</Td>
                  <Td>上記+オプション付き</Td>
                  <Td isNumeric>80,000</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
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
            アプリ開発
          </Heading>
          <TableContainer>
            <Table variant='simple' size='sm'>
              <TableCaption>各企業様・個人様のご要望をヒアリングして丁寧に仕上げます</TableCaption>
              <Thead>
                <Tr>
                  <Th>メニュー</Th>
                  <Th>内容</Th>
                  <Th isNumeric>料金(円)</Th>
                  <Th isNumeric>使用可能技術</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>webアプリ</Td>
                  <Td>ECサイト/コミュニケーションツール/管理ツール等</Td>
                  <Td isNumeric>1,500,000~2,000,000</Td>
                  <Td>Vue,Nuxt.js,React,Next.js,TypeScript,Python</Td>
                </Tr>
                <Tr>
                  <Td>スマホアプリ</Td>
                  <Td>IOS,Android向けのスマートフォンアプリ</Td>
                  <Td isNumeric>1,000,000~3,000,000</Td>
                  <Td>Flutter</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Form></Form>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>web制作 / アプリ開発事業</Center>
        </Heading>
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  