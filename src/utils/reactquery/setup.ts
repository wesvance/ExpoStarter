import { AsyncStorage } from 'utils/asyncstorage'
import { platform, times } from 'utils/constants'

import {
  QueryClient,
  createAsyncStoragePersistor,
  createWebStoragePersistor,
  persistQueryClient
} from './reactquery'

const cacheTime = times.QUERY_CACHE_TIME // 24 hours * 7 days

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime
    }
  }
})

let localStoragePersistor

if (platform.isWeb) {
  localStoragePersistor = createWebStoragePersistor({
    storage: window.localStorage
  })
} else {
  localStoragePersistor = createAsyncStoragePersistor({
    storage: AsyncStorage
  })
}

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor
})
