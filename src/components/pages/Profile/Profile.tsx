import { Box } from 'components/atoms/Box'
import { Button } from 'components/atoms/Button'
import { Text } from 'components/atoms/Text'
import { Container, Flex, HStack, VStack } from 'components/atoms/layout'
import { Page } from 'components/molecules/Page'

import { useApp } from 'contexts/app'
import { useAuth } from 'contexts/auth'
import { useTheme } from 'contexts/theme'

import { environment, platform, version } from 'utils/constants'
import { getKey } from 'utils/i18n'

export const Profile = () => {
  const { netInfo } = useApp()
  const { user: authUser, login, logOut } = useAuth()
  const { toggleTheme, theme } = useTheme()

  return (
    <Page backgroundColor='base'>
      <Box background='secondary'>
        <Container>
          <VStack space='md'>
            <VStack space='md'>
              <Text color='base' weight='bold'>
                Env: {environment.readable}
              </Text>
              <Text color='base' weight='bold'>
                Platform: {platform.readable}
              </Text>
              <Text color='base' weight='bold'>
                Version: {version.baseVersion}
              </Text>
              <Text color='base' weight='bold'>
                Theme: {theme._state.themeColor}
              </Text>
              <Text color='base' weight='bold'>
                Is Connected: {netInfo.isConnected ? 'Yes' : 'No'} {JSON.stringify(netInfo)}
              </Text>
              {authUser ? (
                <Text color='base' weight='bold'>
                  Logged In
                </Text>
              ) : null}
            </VStack>
            <Flex justify='center'>
              <HStack space='sm'>
                <Button color='primary' onPress={toggleTheme}>
                  {getKey('toggleThemeButton')}
                </Button>
                <Button color='primary' onPress={authUser ? logOut : login.anonymous}>
                  {authUser ? 'Log Out' : 'Log In Anonymously'}
                </Button>
              </HStack>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Page>
  )
}
