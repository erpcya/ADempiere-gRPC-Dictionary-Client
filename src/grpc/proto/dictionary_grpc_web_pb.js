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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Window>}
 */
const methodInfo_DictionaryService_RequestWindow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Window,
  /** @param {!proto.dictionary.EntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Window.deserializeBinary
);


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
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
      metadata || {},
      methodInfo_DictionaryService_RequestWindow,
      callback);
};


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Window>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestWindow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestWindow',
      request,
      metadata || {},
      methodInfo_DictionaryService_RequestWindow);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Window>}
 */
const methodInfo_DictionaryService_RequestWindowAndTabs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Window,
  /** @param {!proto.dictionary.EntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Window.deserializeBinary
);


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
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
      metadata || {},
      methodInfo_DictionaryService_RequestWindowAndTabs,
      callback);
};


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Window>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestWindowAndTabs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestWindowAndTabs',
      request,
      metadata || {},
      methodInfo_DictionaryService_RequestWindowAndTabs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Tab>}
 */
const methodInfo_DictionaryService_RequestTab = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Tab,
  /** @param {!proto.dictionary.EntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Tab.deserializeBinary
);


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
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
      metadata || {},
      methodInfo_DictionaryService_RequestTab,
      callback);
};


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Tab>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestTab =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestTab',
      request,
      metadata || {},
      methodInfo_DictionaryService_RequestTab);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Tab>}
 */
const methodInfo_DictionaryService_RequestTabAndFields = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Tab,
  /** @param {!proto.dictionary.EntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Tab.deserializeBinary
);


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
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
      metadata || {},
      methodInfo_DictionaryService_RequestTabAndFields,
      callback);
};


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Tab>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestTabAndFields =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestTabAndFields',
      request,
      metadata || {},
      methodInfo_DictionaryService_RequestTabAndFields);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Field>}
 */
const methodInfo_DictionaryService_RequestField = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Field,
  /** @param {!proto.dictionary.EntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Field.deserializeBinary
);


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
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
      metadata || {},
      methodInfo_DictionaryService_RequestField,
      callback);
};


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Field>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestField',
      request,
      metadata || {},
      methodInfo_DictionaryService_RequestField);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Process>}
 */
const methodInfo_DictionaryService_RequestProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Process,
  /** @param {!proto.dictionary.EntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Process.deserializeBinary
);


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Process)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Process>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServiceClient.prototype.requestProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestProcess',
      request,
      metadata || {},
      methodInfo_DictionaryService_RequestProcess,
      callback);
};


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Process>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestProcess',
      request,
      metadata || {},
      methodInfo_DictionaryService_RequestProcess);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Browser>}
 */
const methodInfo_DictionaryService_RequestBrowser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Browser,
  /** @param {!proto.dictionary.EntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Browser.deserializeBinary
);


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Browser)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Browser>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryServiceClient.prototype.requestBrowser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestBrowser',
      request,
      metadata || {},
      methodInfo_DictionaryService_RequestBrowser,
      callback);
};


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Browser>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryServicePromiseClient.prototype.requestBrowser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/RequestBrowser',
      request,
      metadata || {},
      methodInfo_DictionaryService_RequestBrowser);
};


module.exports = proto.dictionary;

