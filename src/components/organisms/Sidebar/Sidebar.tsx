import React from 'react'

import { Box } from 'components/atoms/Box'
import { Icon } from 'components/atoms/Icon'
import { Pressable } from 'components/atoms/Pressable'
import { Text } from 'components/atoms/Text'
import { Flex, VStack } from 'components/atoms/layout'

import { useWindow } from 'contexts/window'

import { links } from 'utils/constants'
import { DrawerContentComponentProps } from 'utils/navigation'

export const Sidebar = ({ state, navigation }: DrawerContentComponentProps) => {
  const { insets, breakpoint, dimensions } = useWindow()
  const { isMobile } = breakpoint
  const smallHeight = dimensions?.height < 400

  const iconSize = 'md'

  const tabBarColor = 'base'
  const tabColor = 'base'
  const activeTabColor = 'quinary'
  const activeProfileTabColor = 'secondary'

  const tabs = [
    {
      title: 'Home',
      icon: <Icon name='heart' size={iconSize} color={tabColor} />,
      hide: false
    },
    {
      title: 'Profile',
      icon: <Icon name='user' size={iconSize} color={tabColor} weight='light' />,
      hide: false,
      notifications: 0
    }
  ]

  const currentRouteIndex = state.index
  const profileRoute = state.routes.find((route) => route.name.includes('Profile'))
  const profileTabIndex = tabs.findIndex((tab) => tab.title === 'Profile')
  const isProfileFocused = currentRouteIndex === profileTabIndex

  return (
    <Box
      shadow='xxs'
      background={tabBarColor}
      padding={smallHeight ? { vertical: 'xxs' } : { vertical: 'xxl' }}
      overflow='hidden'
      flex={1}
      align='center'
    >
      <VStack
        flex={1}
        justify='space-between'
        align='center'
        margin={{ left: insets.left ? insets.left - 20 : 0 }}
      >
        <Box visible={!smallHeight}>
          <Pressable onPress={() => navigation.navigate(links.HOME_PAGE)}>
            <Flex justify='center'>
              <Box width={50} height={50} borderRadius='full' background='baseFlip' />
            </Flex>
          </Pressable>
        </Box>
        <Box>
          {state.routes &&
            state.routes.length > 0 &&
            state.routes.map((route, index) => {
              const tab = tabs[index]
              if (!tab || tab.title === 'Profile') return null

              const isFocused = currentRouteIndex === index

              const onPress = () => {
                const event = navigation.emit({
                  type: 'drawerItemPress',
                  target: route.key,
                  canPreventDefault: true
                })

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name)
                }
              }

              const onLongPress = () => {
                navigation.emit({
                  type: 'drawerItemPress',
                  target: route.key,
                  canPreventDefault: true
                })
              }

              return (
                <Pressable key={`${tab.title}`} onPress={onPress} onLongPress={onLongPress}>
                  <Box
                    padding={{
                      vertical: 'md'
                    }}
                  >
                    <Flex flexDirection={isMobile ? 'column' : 'row'} align='center'>
                      <Flex justify='center' align='center' width={isMobile ? '100%' : 30}>
                        {React.cloneElement(tab.icon, {
                          weight: isFocused ? 'solid' : 'light',
                          color: isFocused ? activeTabColor : tabColor
                        })}
                      </Flex>
                      <Box margin={{ top: isMobile ? 'xxs' : 'none' }}>
                        <Text
                          size={isMobile ? 'xs' : 'md'}
                          align='center'
                          color={isFocused ? activeTabColor : tabColor}
                        >
                          {tab.title}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Pressable>
              )
            })}
        </Box>

        {profileRoute ? (
          <Pressable onPress={() => navigation.navigate(profileRoute.name)}>
            <Box display='flex' flexDirection='column' align='center'>
              <Box
                height={40}
                width={40}
                background='primary'
                visible={!smallHeight}
                border={{
                  width: 2,
                  color: isProfileFocused ? activeProfileTabColor : tabColor
                }}
                justify='center'
                display='flex'
                align='center'
                borderRadius='full'
              >
                <Icon name='user' size='sm' color='primary' weight='light' />
              </Box>
              <Box visible={{ xl: true }} display='flex' align='center' margin={{ left: 'xs' }}>
                <Text align='center' size='xs' weight='bold'>
                  Example User
                </Text>
                <Text align='center' size='xxs'>
                  Admin
                </Text>
              </Box>
            </Box>
          </Pressable>
        ) : null}
      </VStack>
    </Box>
  )
}
