import { ConfigContext, ExpoConfig } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => {
  /* 
    We can't use utils/constants/environment here because it's not available
    It will produce an expo error "Error reading Expo config", so we'll grab the
    env from the process environment directly
  */
  const Env = process.env.APP_ENV
  const isProd = Env === 'production'
  const isStaging = Env === 'test' || Env === 'staging'

  if (isProd) {
    return {
      ...config,
      name: 'Starter',
      slug: 'starter',
      ios: {
        ...config.ios,
        bundleIdentifier: 'app.expo.starter'
      },
      android: {
        ...config.android,
        package: 'app.expo.starter'
      },
      updates: {
        ...config.updates,
        // Todo - drop in project id / url here
        url: 'https://u.expo.dev/'
      },
      extra: {
        eas: {
          // Todo - drop in project id / url here
          projectId: ''
        }
      }
    }
  }

  if (isStaging) {
    return {
      ...config,
      name: '[Staging] Starter',
      slug: 'starter-staging',
      ios: {
        ...config.ios,
        bundleIdentifier: 'app.expo.starter.staging'
      },
      android: {
        ...config.android,
        package: 'app.expo.starter.staging'
      },
      updates: {
        ...config.updates,
        // Todo - drop in project id / url here
        url: 'https://u.expo.dev/'
      },
      extra: {
        eas: {
          // Todo - drop in project id / url here
          projectId: ''
        }
      }
    }
  }

  return {
    ...config,
    name: '[Dev] Starter',
    slug: 'starter-dev',
    ios: {
      ...config.ios,
      bundleIdentifier: 'app.expo.starter.dev'
    },
    android: {
      ...config.android,
      package: 'app.expo.starter.dev'
    },
    updates: {
      ...config.updates,
      // Todo - drop in project id / url here
      url: ''
    },
    extra: {
      eas: {
        // Todo - drop in project id / url here
        projectId: ''
      }
    }
  }
}
