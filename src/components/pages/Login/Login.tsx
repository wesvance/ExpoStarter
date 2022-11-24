import { Box } from 'components/atoms/Box'
import { Container } from 'components/atoms/layout'
import { Page } from 'components/molecules/Page'
import { LoginCard } from 'components/templates/LoginCard'

export const Login = () => {
  return (
    <Page>
      <Container>
        <Box justify='center' align='center' margin={{ vertical: 'xxl' }}>
          <LoginCard />
        </Box>
      </Container>
    </Page>
  )
}
