# Expo Starter

This Expo Starter is built using Expo Application Services (EAS) and full documentation can be found on Storybook.

### Docs

### Builds

### Tests

---

## Getting Started

The following steps assume you're running a mac with a M1+ processor.

**Install xcode tools** - Ensure you've installed xcode dev tools by running

```bash
xcode-select --install
```

**Install Brew** - Install brew from the [official website](https://brew.sh/)
**Install rbenv** - Install rbenv by running

```bash
brew install rbenv
```

**Set Ruby Version** - Install and set the ruby version to 3.1.2 (others might work as well; 3.1.2 is what we're using)

```bash
rbenv install 3.1.2
rbenv global 3.1.2
```

**Install bundler & update** - Now that we've installed a new ruby version and are using rbenv, install bundler & update

```bash
gem install bundler
bundle update
```

**Install Cocoapods** - via homebrew

```bash
brew install cocoapods
```

**Install eas-cli** - Ensure you have the eas-cli installed globally on your machine: [website](https://docs.expo.dev/build/setup/)

```bash
npm install -g eas-cli
```

Great, now you're ready to go and run your first local eas build!

---

## Running the app

#### Local Development Web

Run yarn and then yarn start to spin up the expo dev client. Press the 'w' key to open the app in the browser.

#### Local Development iOS Simulator Build

To build the app using eas-cli, run the following command, which will build the app on your machine, and allow you to open it in the simulator. This will output a file in the root directory like: build-xyz.tar.gz which you'll need to unpack and drag the app into your simulator.

```bash
yarn build-ios:local
```

#### Generating xCode & Android projects

Expo can generate xcode and android projects for you. This is useful if you want to run the app on a physical device, or if you want to run the app in the simulator but don't want to use eas-cli. Sometimes xcode will provide better error messages, particularly for native code and cold start crashes. To generate the xcode/android projects, run the following command:

```bash
yarn prebuild
```

If you run into the build error "Could not find module 'ExpoModulesCore'" on an M1 mac, checkout this [link](https://github.com/expo/expo/issues/15800#issuecomment-1239946164) for a fix.
