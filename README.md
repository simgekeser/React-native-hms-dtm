# REACT NATIVE HMS DTM INTEGRATION

This repository is  a simple demo project that integrates react native with Dynamic Tag Manager (Dtm). 
  - Integrating the HMS Core SDK
  - Enabling Required Services(Analytics Kit)
  - Dynamic Tag Manager Configuration
  - Importing a Configuration File
   

### Installation
Install the dependencies and devDependencies and start the server.
```sh
$ npm install
```

### Install plugin to Project

```sh
yarn add ./hms-packages/react-native-ha-interface
```
### Enabling/Disabling the Debug Mode 
```sh
adb shell setprop debug.huawei.hms.analytics.app <YOUR-PACKAGE-NAME>
shell setprop debug.huawei.hms.analytics.app .none.
```
### Configuring Code
- Create configuration on the DTM portal and for more detail  https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides-V5/server-dev-0000001050043921-V5
- Create the src\main\assets\containers\ directory and move the generated configuration file DTM-*******.json to the directory.
- Import the analytics kit and send event. 
```sh
import haSDK from 'react-native-ha-interface';
haSDK.onEvent('testDtmEvent', obj);
```
### Official HMS Resources
Dynamic Tag Manager:
Codelab: https://developer.huawei.com/consumer/en/codelab/HMSDTMKit/index.html#7
Document: https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/introduction-0000001050043907
SDK Library: https://developer.huawei.com/consumer/en/doc/development/HMSCore-Library-V5/sdk-download-0000001050174612-V5

Analytics Kit:
Codelab: https://developer.huawei.com/consumer/en/codelab/HMSAnalyticsKit-ReactNative/index.html#0
Document: https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/react-native-development
SDK Library: https://developer.huawei.com/consumer/en/codelab/HMSAnalyticsKit-ReactNative/index.html#2

### Demo
![alt text](https://github.com/simgekeser/React-native-hms-dtm/blob/master/screenshots/testDtmEvent.png)
![alt text](https://github.com/simgekeser/React-native-hms-dtm/blob/master/screenshots/hiDtmTest.png)
