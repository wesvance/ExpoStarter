import { Button } from 'components/atoms/Button'
import { Container, HStack, VStack } from 'components/atoms/layout'
import { Page } from 'components/molecules/Page'

import { useTheme } from 'contexts/theme'

import { debug } from 'utils/logger'

export const History = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Page>
      <Container>
        <VStack space='sm'>
          <HStack space='sm'>
            <Button onPress={() => debug('Testing Theme')} color='primary'>
              Primary
            </Button>
            <Button onPress={() => debug('Testing Theme')} color='primaryFlip'>
              Primary Flip
            </Button>
          </HStack>
          <HStack space='sm'>
            <Button onPress={() => debug('Testing Theme')} color='secondary'>
              Secondary
            </Button>
            <Button onPress={() => debug('Testing Theme')} color='secondaryFlip'>
              Secondary Flip
            </Button>
          </HStack>
          <HStack space='sm'>
            <Button onPress={() => debug('Testing Theme')} color='tertiary'>
              Tertiary
            </Button>
            <Button onPress={() => debug('Testing Theme')} color='tertiaryFlip'>
              Tertiary Flip
            </Button>
          </HStack>

          <HStack space='sm'>
            <Button onPress={() => debug('Testing Theme')} color='danger'>
              Danger
            </Button>
            <Button onPress={() => debug('Testing Theme')} color='dangerFlip'>
              Danger Flip
            </Button>
          </HStack>

          <HStack space='sm'>
            <Button onPress={() => debug('Testing Theme')} color='warning'>
              Warning
            </Button>
            <Button onPress={() => debug('Testing Theme')} color='warningFlip'>
              Warning Flip
            </Button>
          </HStack>

          <HStack space='sm'>
            <Button onPress={() => debug('Testing Theme')} color='info'>
              Info
            </Button>
            <Button onPress={() => debug('Testing Theme')} color='infoFlip'>
              Info Flip
            </Button>
          </HStack>

          <Button onPress={toggleTheme} color='inverse'>
            Toggle Theme {theme._state.themeColor}
          </Button>
        </VStack>
      </Container>
    </Page>
  )
}
