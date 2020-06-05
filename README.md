# ADempiere Dictionary Client for gRPC

[![npm version](https://img.shields.io/npm/v/@adempiere/grpc-data-client.svg)](https://www.npmjs.com/package/@adempiere/grpc-data-client)
[![License](https://img.shields.io/npm/l/@adempiere/grpc-data-client.svg)](https://github.com/erpcya/grpc-data-client/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@adempiere/grpc-data-client.svg)](https://www.npmjs.com/package/@adempiere/grpc-data-client)
[![Dependencies](https://img.shields.io/librariesio/github/erpcya/grpc-data-client.svg)](https://www.npmjs.com/package/@adempiere/grpc-data-client)

ADempiere Dictionary Client write in Javascript for gRPC service, use it for connect with
[ADempiere-gRPC-Server](https://github.com/erpcya/adempiere-gRPC-Server).

## Requirements
- [Envoy Proxy](https://www.envoyproxy.io/)
- [Envoy Pre-configured Proxy](https://github.com/erpcya/gRPC-Envoy-Proxy)

## Using it

``` bash
# installing via NPM
npm i @adempiere/grpc-dictionary-client --save
```
``` bash
# installing via Yarn
yarn add @adempiere/grpc-dictionary-client
```

## A Example
### Declare Dictionary
```javascript
const Dictionary = require('@adempiere/grpc-dictionary-client');
const dictionary = new Dictionary({
  host: GRPC_HOST,
  sessionUuid: 'Session UUID'
});
```

### Declare Dictionary with specific language (i18n)
```javascript
const Dictionary = require('@adempiere/grpc-dictionary-client');
const dictionary = new Dictionary({
  host: GRPC_HOST,
  sessionUuid: 'Session UUID',
  language: 'es_VE'
});
```

### Request a Window
```javascript
//  Request Window
dictionary.requestWindow({
  uuid: 'a520de12-fb40-11e8-a479-7a0060f0aa01'
})
.then(window => {
  console.log("Window: " + window);
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```

### Request a Window and Tabs of it
```javascript
//  Request Window and Tabs
dictionary.requestWindow({
  uuid: 'a520de12-fb40-11e8-a479-7a0060f0aa01',
  isWithTabs: true
})
.then(window => {
  window.tabsList.foreach(tabElement => {
    console.log("Window Tab: " + tabElement);
  })
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```

### Request a Tab
```javascript
//  Request Tab
dictionary.requestTab({
  uuid: 'a49fb4e0-fb40-11e8-a479-7a0060f0aa01',
  isWithProcess: false
})
.then(tab => {
  console.log("Tab: " + tab);
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```

### Request a Tab and Fields
```javascript
//  Request Window and Tabs
dictionary.requestTab({
  uuid: 'a49fb4e0-fb40-11e8-a479-7a0060f0aa01',
  isWithFields: true,
  isWithProcess: false
})
.then(tab => {
  tab.fieldsList.foreach(fieldElement => {
    console.log("Field: " + fieldElement);
  })
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```

### Request a Field
```javascript
//  Request Field
dictionary.requestField({
  fieldUuid: '8cecee3a-fb40-11e8-a479-7a0060f0aa01'
})
.then(field => {
  console.log("Field: " + field);
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```

### Request a Process
```javascript
//  Request Process
dictionary.requestProcess({
  uuid: 'a42adc88-fb40-11e8-a479-7a0060f0aa01'
})
.then(process => {
  console.log("Process: " + process);
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```

### Request a Smart Browser
```javascript
//  Request Smart Browser
dictionary.requestBrowser({
  uud: '8aaef794-fb40-11e8-a479-7a0060f0aa01'
})
.then(browser => {
  console.log("Smart Browser: " + browser);
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```


## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)

Note: You can also install `protoc` and `protoc-gen-grpc-web` by going to the repository directory and run the command:
```Shell
sh install-protoc.sh
```

When installation is complete, check the version with
```Shell
protoc --version
```

After installed it just go to source code folder an run it:

Dictionary
```Shell
protoc proto/dictionary.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
```

Or run:
```Shell
sh generate-stub.sh
```
The result is generated on: src/grpc folder
