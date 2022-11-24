import RnNetInfo, {
  NetInfoConnectedStates,
  NetInfoDisconnectedStates
} from '@react-native-community/netinfo'

export type NetInfoState = NetInfoDisconnectedStates | NetInfoConnectedStates

export const NetInfo = RnNetInfo
export const { useNetInfo } = NetInfo
