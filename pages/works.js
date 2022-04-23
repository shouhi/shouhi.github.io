import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbProTask from '../public/images/works/ProTask.png'
import thumbProTain from '../public/images/works/ProTain.png'
import thumbTechUni from '../public/images/works/TechUni.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="protask" title="ProTask" thumbnail={thumbProTask}>
            関西学院大学の学生専用課題管理アプリ
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="protain"
            title="ProTain"
            thumbnail={thumbProTain}
          >
            筋トレ管理SNS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="techuni"
            title="Tech.Uni"
            thumbnail={thumbTechUni}
          >
            IT系学生団体
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="protask"
            thumbnail={thumbProTask}
            title="ProTask"
          >
            ・・・
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="protask"
            thumbnail={thumbProTask}
            title="ProTask"
          >
            ・・・
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="protask"
            thumbnail={thumbProTask}
            title="ProTask"
          >
            ・・・
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="protask"
            thumbnail={thumbProTask}
            title="ProTask"
          >
            ・・・
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
        <WorkGridItem
            id="protask"
            thumbnail={thumbProTask}
            title="ProTask"
          >
            ・・・
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'