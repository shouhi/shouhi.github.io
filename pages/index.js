import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoTiktok, IoLogoLinkedin } from 'react-icons/io5'
import thumbProTask from '../public/images/works/ProTask.png'
import thumbProTain from '../public/images/works/ProTain.png'
import thumbTechUni from '../public/images/works/TechUni.png'
import thumbSEEDAS from '../public/images/works/SEEDAS.png'
import { MyImage } from '../components/avatar'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Student at KwanseiGakuin.uni!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Shouhi Ide
          </Heading>
          <p>founder of Tech.Uni, IT Organization </p>
          <p>app developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <MyImage/>
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Shouhi is a Student and a app developer based in Hyogo,Nishinomiya with my friends .
          <NextLink href="/works/ProTask" scroll={false}>
            <Link>ProTask</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
           at 関西福祉科学大学高等学校特進Iコース
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          at 関西学院大学商学部
        </BioSection>
        <BioSection>
          <BioYear>2020.5</BioYear>
        ビジネスプランコンテストの出場をきっかけにプログラミングを独学で開始
        </BioSection>
        <BioSection>
          <BioYear>2020.10.26</BioYear>
        プログラミング研究会Tech.Uniを創設
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          個人事業主 LienPuffとして開業
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          at 関西学院大学商学部
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Dance, Programming,{' '}
          <Link href="https://apps.apple.com/jp/developer/shohi-ide/id1539127150" target="_blank">
            app develop
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/shouhi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @shouhi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/shouhi_ide" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @shouhi_ide
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/TechUni1026" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @TechUni1026 (IT Organization)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/shouhi_ide" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @shouhi_ide
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://tiktok.com/@shouhi_lienpuff" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTiktok />}
              >
                @shouhi_lienpuff
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/shouhi-ide-941064213/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Shouhi Ide
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://protaskg.studio.site/"
            title="ProTask"
            thumbnail={thumbProTask}
          >
            関西学院大学の学生専用課題管理アプリ
          </GridItem>
          <GridItem
            href="https://protain29.studio.site/"
            title="ProTain"
            thumbnail={thumbProTain}
          >
            筋トレ管理SNS 
          </GridItem>
          <GridItem
            href="https://techuni.org/"
            title="Tech.Uni"
            thumbnail={thumbTechUni}
          >
            IT系学生団体
          </GridItem>
          <GridItem
            href="https://b-loom.jp/"
            title="Bloom🌱"
            thumbnail={thumbSEEDAS}
          >
            学生カフェ事業 | 完全会員制飲食店 
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/blogs" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular Blogs
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
