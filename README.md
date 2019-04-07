# ADempiere Dictionary Client for gRPC
ADempiere Dictionary Client write in Javascript for gRPC service, use it for connect with
[ADempiere-gRPC-Server](https://github.com/erpcya/adempiere-gRPC-Server).

## Requirements
- [Envoy Proxy](https://www.envoyproxy.io/)
- [Envoy Pre-configured Proxy](https://github.com/erpcya/gRPC-Envoy-Proxy)

## Using it

``` bash
# installing via NPM
npm install @adempiere/grpc-dictionary-client
```
``` bash
# installing via Yarn
yarn add @adempiere/grpc-dictionary-client
```

## A Example
### Declare Dictionary
```javascript
const Dictionary = require('@adempiere/grpc-dictionary-client');
let dictionary = new Dictionary(GRPC_HOST, 'Version Epale');
```
### Declare Dictionary with specific language
```javascript
const Dictionary = require('@adempiere/grpc-dictionary-client');
let dictionary = new Dictionary(GRPC_HOST, 'Version Epale', 'es_VE');
```

### Request a simple Menu
```javascript
//  Request Menu
dictionary.requestMenu('8e4fd396-fb40-11e8-a479-7a0060f0aa01', false)
.then(menu => {
  console.log("Menu: " + menu);
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```
### Request Menu and Childs
```javascript
//  Request Menu with childs
dictionary.requestMenu('8e4fd396-fb40-11e8-a479-7a0060f0aa01', true)
.then(menu => {
  console.log("Menu: " + menu);
  for(var i = 0; i < menu.getChildsList().length; i++) {
    console.log("Menu Child: " + menu.getChildsList()[i]);
  }
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```

### Request a Window
```javascript
//  Request Window
dictionary.requestWindow('a520de12-fb40-11e8-a479-7a0060f0aa01', false)
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
dictionary.requestWindow('a520de12-fb40-11e8-a479-7a0060f0aa01', true)
.then(window => {
  for(var i = 0; i < window.getTabsList().length; i++) {
    console.log("Window Tab: " + window.getTabsList()[i]);
  }
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```

### Request a Tab
```javascript
//  Request Tab
dictionary.requestTab('a49fb4e0-fb40-11e8-a479-7a0060f0aa01', false)
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
dictionary.requestTab('a49fb4e0-fb40-11e8-a479-7a0060f0aa01', true)
.then(tab => {
  for(var i = 0; i < tab.getFieldsList().length; i++) {
    console.log("Field: " + tab.getFieldsList()[i]);
  }
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```
### Request a Field
```javascript
//  Request Field
dictionary.requestField('8cecee3a-fb40-11e8-a479-7a0060f0aa01')
.then(field => {
  console.log("Field: " + field);
})
.catch(err => {
  console.log("Error " + err.code + ": " + err.message);
});
```
### Request a Process
```javascript
//  Request Field
dictionary.requestProcess('a42adc88-fb40-11e8-a479-7a0060f0aa01')
.then(process => {
  console.log("Process: " + process);
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
After installed it just go to source code folder an run it:
```
protoc proto/dictionary.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
```
The result is generated on: src/grpc folder
