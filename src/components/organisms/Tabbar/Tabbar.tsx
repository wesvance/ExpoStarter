import React from 'react'

import { Box } from 'components/atoms/Box'
import { Icon } from 'components/atoms/Icon'
import { Pressable } from 'components/atoms/Pressable'
import { Text } from 'components/atoms/Text'
import { Flex } from 'components/atoms/layout'

import { useTheme } from 'contexts/theme'

import { BottomTabBarProps } from 'utils/navigation'
import { useSafeAreaInsets } from 'utils/safeArea'

export const Tabbar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { theme } = useTheme()
  const insets = useSafeAreaInsets()

  const iconSize = 'md'

  const tabBarColor = 'base'
  const tabColor = 'base'
  const activeTabColor = 'quinary'

  let tabs = [
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

  tabs = tabs.filter((tab) => !tab.hide)

  return (
    <Box background={tabBarColor}>
      <Flex
        background={tabBarColor}
        justify='space-around'
        style={{
          borderTopWidth: 1,
          borderColor: theme.color.base.foreground
        }}
      >
        {state.routes &&
          state.routes.length > 0 &&
          state.routes.map((route, index) => {
            const { options } = descriptors[route.key]
            const isFocused = state.index === index

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true
              })

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            }

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key
              })
            }

            return (
              <Pressable
                flex={1}
                justify='center'
                key={`${tabs[index].title}`}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <Box
                  padding={{
                    top: 'sm',
                    bottom: insets.bottom + theme.space.base.sm
                  }}
                >
                  <Flex justify='center' align='center'>
                    {React.cloneElement(tabs[index].icon, {
                      weight: isFocused ? 'solid' : 'light',
                      color: isFocused ? activeTabColor : tabColor
                    })}
                  </Flex>
                  <Box margin={{ top: 'xxs' }}>
                    <Text size='xs' align='center'>
                      {tabs[index].title}
                    </Text>
                  </Box>
                </Box>
              </Pressable>
            )
          })}
      </Flex>
    </Box>
  )
}
