import { Box } from 'components/atoms/Box'
import { Button } from 'components/atoms/Button'
import { Card } from 'components/atoms/Card'
import { Link } from 'components/atoms/Link'
import { Pressable } from 'components/atoms/Pressable'
import { Text } from 'components/atoms/Text'

import { links } from 'utils/constants'
import { useNavigation } from 'utils/navigation'

export const LoginCard = () => {
  const navigation = useNavigation()

  return (
    <Card
      maxWidth={600}
      background='primary'
      border={{ xxs: { width: 0, color: 'white' }, md: { width: 3, color: 'baseFlip' } }}
      padding={{ xxs: 'xs', md: 'lg' }}
      shadow='none'
      overflow='hidden'
    >
      <Text color='primary' size='xl' weight='bold' font='heading'>
        Log In
      </Text>
      <Box margin={{ vertical: 'xl' }}>
        <Text color='primary'>Email Input</Text>
        <Text color='primary'>Password Input</Text>
      </Box>
      <Box margin={{ bottom: 'xs' }}>
        <Pressable>
          <Text color='primary' size='sm' align='right'>
            Forgot Password?
          </Text>
        </Pressable>
      </Box>

      <Button color='secondary' borderRadius='xxs' shadow='none'>
        Log In
      </Button>
      <Box margin={{ vertical: 'sm' }}>
        <Text align='center' size='sm'>
          - or -
        </Text>
      </Box>
      <Button color='baseFlip' borderRadius='xxs' shadow='none'>
        Sign in with Apple
      </Button>
      <Link to='REGISTER_PAGE'>
        <Box margin={{ top: 'sm' }}>
          <Text color='primary' align='center' size='sm'>
            don't have an account? register
          </Text>
        </Box>
      </Link>
    </Card>
  )
}
