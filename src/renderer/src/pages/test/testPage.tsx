import { Navbar, NavbarCenter } from '@renderer/components/app/Navbar'
import Scrollbar from '@renderer/components/Scrollbar'
import { Button, Space } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const TestPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Navbar>
        <NavbarCenter style={{ borderRight: 'none' }}>{t('test.title')}</NavbarCenter>
      </Navbar>
      <ContentContainer>
        <MainContent>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Button type="primary">测试按钮 1</Button>
            <Button>测试按钮 2</Button>
            <TestContent>这是一个测试页面的内容区域</TestContent>
          </Space>
        </MainContent>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: calc(100vh - var(--navbar-height));
`

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  min-height: 100%;
  background-color: white;
`

const MainContent = styled(Scrollbar)`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  padding-bottom: 50px;
  padding-right: 12px;
`

const TestContent = styled.div`
  padding: 20px;
  background: var(--color-background);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  flex: 1;
`

export default TestPage
