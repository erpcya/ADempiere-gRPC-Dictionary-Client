/**
 * @fileoverview gRPC-Web generated client stub for dictionary
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.dictionary = require('./dictionary_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dictionary.DictionaryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dictionary.DictionaryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.dictionary.DictionaryServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.dictionary.DictionaryServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.ObjectRequest,
 *   !proto.dictionary.Menu>}
 */
const methodInfo_DictionaryService_RequestMenuAndChild = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Menu,
  /** @param {!proto.dictionary.ObjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Menu.deserializeBinary
);


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Menu)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Menu>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServiceClient.prototype.requestMenuAndChild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestMenuAndChild',
      request,
      metadata,
      methodInfo_DictionaryService_RequestMenuAndChild,
      callback);
};


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Menu>}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestMenuAndChild =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestMenuAndChild(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.ObjectRequest,
 *   !proto.dictionary.Menu>}
 */
const methodInfo_DictionaryService_RequestMenu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Menu,
  /** @param {!proto.dictionary.ObjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Menu.deserializeBinary
);


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Menu)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Menu>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServiceClient.prototype.requestMenu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestMenu',
      request,
      metadata,
      methodInfo_DictionaryService_RequestMenu,
      callback);
};


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Menu>}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestMenu =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestMenu(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.ObjectRequest,
 *   !proto.dictionary.Window>}
 */
const methodInfo_DictionaryService_RequestWindow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Window,
  /** @param {!proto.dictionary.ObjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Window.deserializeBinary
);


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Window)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Window>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServiceClient.prototype.requestWindow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestWindow',
      request,
      metadata,
      methodInfo_DictionaryService_RequestWindow,
      callback);
};


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Window>}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestWindow =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestWindow(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.ObjectRequest,
 *   !proto.dictionary.Window>}
 */
const methodInfo_DictionaryService_RequestWindowAndTabs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Window,
  /** @param {!proto.dictionary.ObjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Window.deserializeBinary
);


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Window)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Window>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServiceClient.prototype.requestWindowAndTabs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestWindowAndTabs',
      request,
      metadata,
      methodInfo_DictionaryService_RequestWindowAndTabs,
      callback);
};


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Window>}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestWindowAndTabs =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestWindowAndTabs(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.ObjectRequest,
 *   !proto.dictionary.Tab>}
 */
const methodInfo_DictionaryService_RequestTab = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Tab,
  /** @param {!proto.dictionary.ObjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Tab.deserializeBinary
);


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Tab)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Tab>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServiceClient.prototype.requestTab =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestTab',
      request,
      metadata,
      methodInfo_DictionaryService_RequestTab,
      callback);
};


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Tab>}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestTab =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestTab(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.ObjectRequest,
 *   !proto.dictionary.Tab>}
 */
const methodInfo_DictionaryService_RequestTabAndFields = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Tab,
  /** @param {!proto.dictionary.ObjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Tab.deserializeBinary
);


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Tab)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Tab>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServiceClient.prototype.requestTabAndFields =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestTabAndFields',
      request,
      metadata,
      methodInfo_DictionaryService_RequestTabAndFields,
      callback);
};


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Tab>}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestTabAndFields =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestTabAndFields(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.ObjectRequest,
 *   !proto.dictionary.Field>}
 */
const methodInfo_DictionaryService_RequestField = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Field,
  /** @param {!proto.dictionary.ObjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Field.deserializeBinary
);


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Field)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Field>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServiceClient.prototype.requestField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestField',
      request,
      metadata,
      methodInfo_DictionaryService_RequestField,
      callback);
};


/**
 * @param {!proto.dictionary.ObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Field>}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestField =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestField(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.dictionary;

