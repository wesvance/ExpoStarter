import { Box } from 'components/atoms/Box'
import { Button } from 'components/atoms/Button'
import { Card } from 'components/atoms/Card'
import { Link } from 'components/atoms/Link'
import { Text } from 'components/atoms/Text'

export const RegisterCard = () => {
  return (
    <Card
      maxWidth={600}
      background='primary'
      border={{ xxs: { width: 0, color: 'white' }, md: { width: 3, color: 'baseFlip' } }}
      padding={{ xxs: 'xs', md: 'lg' }}
      shadow='none'
    >
      <Text size='xl' weight='bold' font='heading'>
        Register
      </Text>
      <Box margin={{ vertical: 'xl' }}>
        <Text>Email Input</Text>
        <Text>Password Input</Text>
      </Box>

      <Button color='primary' borderRadius='xxs' shadow='none'>
        Register
      </Button>
      <Box margin={{ vertical: 'sm' }}>
        <Text align='center' size='sm'>
          - or -
        </Text>
      </Box>
      <Button color='baseFlip' borderRadius='xxs' shadow='none'>
        Sign in with Apple
      </Button>
      <Link to='LOGIN_PAGE'>
        <Box margin={{ top: 'sm' }}>
          <Text color='primary' align='center' size='sm'>
            already have an account? sign in
          </Text>
        </Box>
      </Link>
    </Card>
  )
}
