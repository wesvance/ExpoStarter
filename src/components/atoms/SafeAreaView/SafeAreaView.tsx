import { SafeAreaView as LibSafeAreaView } from 'utils/safeArea'

type SafeAreaViewProps = {
  children: React.ReactNode
}

export const SafeAreaView = ({ children }: SafeAreaViewProps) => {
  return <LibSafeAreaView>{children}</LibSafeAreaView>
}
