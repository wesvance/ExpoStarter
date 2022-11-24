import { useState } from 'react'

import { Sidebar } from 'components/organisms/Sidebar'
import { Tabbar } from 'components/organisms/Tabbar'
import { Home } from 'components/pages/Home'

import { useWindow } from 'contexts/window'

import { links } from 'utils/constants'
import { createBottomTabNavigator, createDrawerNavigator } from 'utils/navigation'

import type { MainNavigationParams } from './MainNavigation.types'
import { ProfileStack } from './ProfileStack'

const BottomTabs = createBottomTabNavigator<MainNavigationParams>()
const SideDrawer = createDrawerNavigator<MainNavigationParams>()

export const MainNavigation = () => {
  const { dimensions, breakpoint } = useWindow()
  const [currentTab, setCurrentTab] = useState()

  // On window resize and the navigator changes, keep the current tab and set the initla route name
  const handleTabStateName = (e: any) => {
    const { state } = e?.data
    setCurrentTab(state.routeNames[state.index])
  }

  // If the app is more vertical than horizontal, display bottom tabs, otherwise display as side bar
  if (dimensions.isVertical) {
    return (
      <BottomTabs.Navigator
        tabBar={(tabBarProps) => <Tabbar {...tabBarProps} />}
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={currentTab}
        screenListeners={{
          state: handleTabStateName
        }}
      >
        <BottomTabs.Screen name={links.HOME_PAGE} component={Home} />
        <BottomTabs.Screen name={links.PROFILE_STACK} component={ProfileStack} />
      </BottomTabs.Navigator>
    )
  }

  let drawerWidth = 200 as number | string

  if (breakpoint.isMobile) {
    drawerWidth = 100 + 20
  }

  return (
    <SideDrawer.Navigator
      useLegacyImplementation
      drawerContent={(drawerProps) => <Sidebar {...drawerProps} />}
      screenOptions={{
        drawerStyle: {
          width: drawerWidth,
          borderRightWidth: 0
        },
        drawerPosition: 'left',
        drawerType: 'permanent',
        headerShown: false
      }}
      initialRouteName={currentTab}
      screenListeners={{
        state: handleTabStateName
      }}
    >
      <SideDrawer.Screen name={links.HOME_PAGE} component={Home} />
      <SideDrawer.Screen name={links.PROFILE_STACK} component={ProfileStack} />
    </SideDrawer.Navigator>
  )
}
