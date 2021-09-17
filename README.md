# React-Native-Credo-WebView

 
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-) 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request) 
 

The package allows you accept payment using credo

### Installation

Add React-Native-Credo-WebView to your project by running;

`npm install credo-webview-for-reactnative react-native-webview`

or

`yarn add credo-webview-for-reactnative react-native-webview`


for iOS: `cd iOS && pod install && cd ..`


### Example Usage 

```javascript
import React, { useState } from 'react';
import  { Credo }  from 'credo-webview-for-reactnative';
import { View, Text } from 'react-native';

const Pay = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => setModalVisible(false);
  const handleSubmit = () => setModalVisible(true);

  return (
    <View style={{ flex: 1 }}>
    Î<Credo
        amount={3500}
        currency="NGN"
        customerEmail="test@credo.com"
        customerName="Credo Dibs"
        customerPhoneNo="08090000000"
        publicKey="your-public-key"
        showModal={modalVisible}
        onSuccess={(response) => {
          //handle response
        }}
        closeModal={closeModal}
     />
     <Pressable onPress={handleSubmit} title="Submit">
        <Text>Test Payment</Text>
     </Pressable>
    </View>
  );
}
```

## API's

#### []()All Credo-Webview-for-Reactnative API


<br/>

## API

| <b>Property<b>     | Type                             | Required | Description                                                                                                                    |
| ------------------ | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| publicKey           |  `string`      | ✔️       | Public Credo key(visit credocentral.com to get yours)                                                                                                                    |
| amount             | `string` or `number` | ✔️       | amount to be charged, should be greater than #100                                                                                                                    
| customerEmail            | `string`      | ✔️       | Customer's email address email                                                                                         
| customerName            | `string`       | ✔️       | Customer's name                                                                                                                                                     |
| customerPhoneNo         | `string`       |     ✔️      | Customer's phone number                                                                                                                                                    
| referenceNo        | `string`      |          | Reference number, if you have already generated one. This would be auto generated by Credo if you don't provide it.                                                                                                                                                                                 
| showModal     | `boolean`    |     ✔️       | Set modal visibility. When it is true, the Credo Payment widget pops up.                                                                                                                                                                                                
| closeModal | `Function`  |    ✔️      | Function to be called to set `showModal` to `false`.                                                                                                                  
| onSuccess     | `Function` |    ✔️      | Function to be called after a successful transaction. You can provide a function that looks like this: `(successResponse: SuccessResponse) => void;`                                                                                                              
| onCancel    | `Function`  |          |  callback function if user cancels or payment transaction could not be verified. 

## [](https://github.com/Olaide-EO/credo-webview-for-reactnative)Contributions

Would you like to contribute to this package? [Read how to contribute](https://github.com/nugitech/react-native-credo-webview/blob/master/contribution.md) and send in your PR!
<br/>
## []()Licensing

This project is licensed under MIT license.


## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Olaide-EO"><img src="https://avatars.githubusercontent.com/u/30773360?v=4" width="100px;" alt=""/><br /><sub><b>Olaide E.O </b></sub></a><br /><a href=" https://www.linkedin.com/in/olaide-e-o-a60a07a3/" title="Profile">💻</a> <a href="https://github.com/Olaide-EO" title="Github">📖</a></td>
  </tr>
 
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
