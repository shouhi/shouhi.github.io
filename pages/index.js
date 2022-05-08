import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
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
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoTiktok, IoLogoLinkedin } from 'react-icons/io5'
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
          Shouhi is a Student and an app developer based in Hyogo,Nishinomiya with my friends .
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
          <BioYear>2000.9.22</BioYear>
          Born in Osaka, Japan.
        </BioSection>
        <BioSection>
          <BioYear>2019.4</BioYear>
          Enroll at KwanseiGakuin University
        </BioSection>
        <BioSection>
          <BioYear>2020.10.26</BioYear>
        Found Tech.Uni, IT Organization
        </BioSection>
        <BioSection>
          <BioYear>2021.3</BioYear>
          Started business as freelance
        </BioSection>
        <BioSection>
          <BioYear>2021.9</BioYear>
          Yahoo!JAPAN Inc. Frontend Engineer Intern
        </BioSection>
        <BioSection>
          <BioYear>2021.11</BioYear>
          Rakuten Group Inc. Backend Engineer Intern
        </BioSection>
        <BioSection>
          <BioYear>2021.10~2022.3</BioYear>
          COOON Inc. CTO
        </BioSection>
        <BioSection>
          <BioYear>2022.1</BioYear>
          hey Inc. Frontend Engineer Intern
        </BioSection>
        <BioSection>
          <BioYear>2022.1~4</BioYear>
          Genit Inc. Mobile Engineer
        </BioSection>
        <BioSection>
          <BioYear>2022.5~</BioYear>
          Enginner&apos;s BAR - Hack.BAR - 
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
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
