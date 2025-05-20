import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbProTask from '../public/images/works/ProTask.png'
import thumbProTain from '../public/images/works/ProTain.png'
import thumbTechUni from '../public/images/works/TechUni.png'
// import thumbSEEDAS from '../public/images/works/SEEDAS.png'
// import thumbBloom from '../public/images/works/Bloom.png'
// import thumbWeb from '../public/images/works/web.png'
import thumbHackBAR from '../public/images/works/HACKBAR.png'
import thumbawabarKobe from '../public/images/works/awabar.png'
import thumbAuctioneer from '../public/images/works/Auctioneer.png'
import thumbContinue from '../public/images/works/continue.png'
import thumbStartLine from '../public/images/works/startline.png'
import thumbKonohana from '../public/images/works/konohana.png'
import thumbJDO from '../public/images/works/jdoshiga.png'
import HACKBAR01 from '../public/images/works/hackbar01.png'
import HACKBAR02 from '../public/images/works/hackbar02.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Products
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ProTask" title="ProTask" thumbnail={thumbProTask}>
            関西学院大学の学生専用課題管理アプリ
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ProTain" title="ProTain" thumbnail={thumbProTain}>
            筋トレ管理SNS
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Auctioneer"
            title="Auctioneer"
            thumbnail={thumbAuctioneer}
          >
            戦略型オンラインカードゲーム
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Bussiness
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="HackBAR" title="HACK.BAR" thumbnail={thumbHackBAR}>
            バー / 飲食店経営
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="awabarKobe"
            title="awabar Kobe"
            thumbnail={thumbawabarKobe}
          >
            バー / 飲食店経営
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          web制作実績
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem
            id="HackBAR"
            title="バー LP制作"
            link={'https://hack-bar.vercel.app'}
            thumbnail={HACKBAR01}
          >
            SNSで話題を生んだバズるランディングページ
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="HackBAR"
            title="バー HP制作"
            link={'https://hackbar.jp'}
            thumbnail={HACKBAR02}
          >
            バーの雰囲気にあったホームページ
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id=""
            title="イベントLP制作"
            link={'https://continue.startupside.jp/'}
            thumbnail={thumbContinue}
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id=""
            title="公共事業ホームページ制作"
            link={'https://www.osaka-startup.com/program/startline/'}
            thumbnail={thumbStartLine}
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id=""
            title="採用LP制作"
            link={'https://konohana.vercel.app/'}
            thumbnail={thumbKonohana}
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id=""
            title="ドローン事業ホームページ制作"
            link={'https://jdo-shiga.com/'}
            thumbnail={thumbJDO}
          ></WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Community
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="TechUni" title="Tech.Uni" thumbnail={thumbTechUni}>
            IT系学生団体
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
