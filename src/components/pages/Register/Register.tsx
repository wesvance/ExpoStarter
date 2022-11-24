import { Box } from 'components/atoms/Box'
import { Container } from 'components/atoms/layout'
import { Page } from 'components/molecules/Page'
import { RegisterCard } from 'components/templates/RegisterCard'

export const Register = () => {
  return (
    <Page>
      <Container>
        <Box justify='center' align='center' margin={{ vertical: 'xxl' }}>
          <RegisterCard />
        </Box>
      </Container>
    </Page>
  )
}
