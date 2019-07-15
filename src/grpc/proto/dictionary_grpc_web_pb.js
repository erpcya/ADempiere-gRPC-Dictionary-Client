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
const methodInfo_DictionaryService_GetWindow = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryServiceClient.prototype.getWindow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/GetWindow',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetWindow,
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
proto.dictionary.DictionaryServicePromiseClient.prototype.getWindow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/GetWindow',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetWindow);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Window>}
 */
const methodInfo_DictionaryService_GetWindowAndTabs = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryServiceClient.prototype.getWindowAndTabs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/GetWindowAndTabs',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetWindowAndTabs,
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
proto.dictionary.DictionaryServicePromiseClient.prototype.getWindowAndTabs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/GetWindowAndTabs',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetWindowAndTabs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Tab>}
 */
const methodInfo_DictionaryService_GetTab = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryServiceClient.prototype.getTab =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/GetTab',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetTab,
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
proto.dictionary.DictionaryServicePromiseClient.prototype.getTab =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/GetTab',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetTab);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Tab>}
 */
const methodInfo_DictionaryService_GetTabAndFields = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryServiceClient.prototype.getTabAndFields =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/GetTabAndFields',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetTabAndFields,
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
proto.dictionary.DictionaryServicePromiseClient.prototype.getTabAndFields =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/GetTabAndFields',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetTabAndFields);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Field>}
 */
const methodInfo_DictionaryService_GetField = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryServiceClient.prototype.getField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/GetField',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetField,
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
proto.dictionary.DictionaryServicePromiseClient.prototype.getField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/GetField',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetField);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Process>}
 */
const methodInfo_DictionaryService_GetProcess = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryServiceClient.prototype.getProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/GetProcess',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetProcess,
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
proto.dictionary.DictionaryServicePromiseClient.prototype.getProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/GetProcess',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetProcess);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Browser>}
 */
const methodInfo_DictionaryService_GetBrowser = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryServiceClient.prototype.getBrowser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.DictionaryService/GetBrowser',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetBrowser,
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
proto.dictionary.DictionaryServicePromiseClient.prototype.getBrowser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.DictionaryService/GetBrowser',
      request,
      metadata || {},
      methodInfo_DictionaryService_GetBrowser);
};


module.exports = proto.dictionary;

