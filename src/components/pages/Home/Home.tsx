import { Box } from 'components/atoms/Box'
import { Text } from 'components/atoms/Text'
import { Page } from 'components/molecules/Page'

export const Home = () => {
  return (
    <Page withScroll={false} backgroundColor='base'>
      <Box flex={1} justify='center' align='center'>
        <Text align='center' color='quaternary' size='xxl' weight='bold' font='heading'>
          Expo Starter
        </Text>
      </Box>
    </Page>
  )
}
