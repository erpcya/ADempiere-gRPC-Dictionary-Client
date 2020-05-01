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
proto.dictionary.DictionaryClient =
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
proto.dictionary.DictionaryPromiseClient =
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
const methodInfo_Dictionary_GetWindow = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryClient.prototype.getWindow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetWindow',
      request,
      metadata || {},
      methodInfo_Dictionary_GetWindow,
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
proto.dictionary.DictionaryPromiseClient.prototype.getWindow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetWindow',
      request,
      metadata || {},
      methodInfo_Dictionary_GetWindow);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Window>}
 */
const methodInfo_Dictionary_GetWindowAndTabs = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryClient.prototype.getWindowAndTabs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetWindowAndTabs',
      request,
      metadata || {},
      methodInfo_Dictionary_GetWindowAndTabs,
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
proto.dictionary.DictionaryPromiseClient.prototype.getWindowAndTabs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetWindowAndTabs',
      request,
      metadata || {},
      methodInfo_Dictionary_GetWindowAndTabs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Tab>}
 */
const methodInfo_Dictionary_GetTab = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryClient.prototype.getTab =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetTab',
      request,
      metadata || {},
      methodInfo_Dictionary_GetTab,
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
proto.dictionary.DictionaryPromiseClient.prototype.getTab =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetTab',
      request,
      metadata || {},
      methodInfo_Dictionary_GetTab);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Tab>}
 */
const methodInfo_Dictionary_GetTabAndFields = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryClient.prototype.getTabAndFields =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetTabAndFields',
      request,
      metadata || {},
      methodInfo_Dictionary_GetTabAndFields,
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
proto.dictionary.DictionaryPromiseClient.prototype.getTabAndFields =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetTabAndFields',
      request,
      metadata || {},
      methodInfo_Dictionary_GetTabAndFields);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.FieldRequest,
 *   !proto.dictionary.Field>}
 */
const methodInfo_Dictionary_GetField = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Field,
  /** @param {!proto.dictionary.FieldRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Field.deserializeBinary
);


/**
 * @param {!proto.dictionary.FieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Field)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Field>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryClient.prototype.getField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetField',
      request,
      metadata || {},
      methodInfo_Dictionary_GetField,
      callback);
};


/**
 * @param {!proto.dictionary.FieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Field>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryPromiseClient.prototype.getField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetField',
      request,
      metadata || {},
      methodInfo_Dictionary_GetField);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.ReferenceRequest,
 *   !proto.dictionary.Reference>}
 */
const methodInfo_Dictionary_GetReference = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Reference,
  /** @param {!proto.dictionary.ReferenceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Reference.deserializeBinary
);


/**
 * @param {!proto.dictionary.ReferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Reference)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Reference>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryClient.prototype.getReference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetReference',
      request,
      metadata || {},
      methodInfo_Dictionary_GetReference,
      callback);
};


/**
 * @param {!proto.dictionary.ReferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Reference>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryPromiseClient.prototype.getReference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetReference',
      request,
      metadata || {},
      methodInfo_Dictionary_GetReference);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.ValidationRuleRequest,
 *   !proto.dictionary.ValidationRule>}
 */
const methodInfo_Dictionary_GetValidationRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.ValidationRule,
  /** @param {!proto.dictionary.ValidationRuleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.ValidationRule.deserializeBinary
);


/**
 * @param {!proto.dictionary.ValidationRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.ValidationRule)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.ValidationRule>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryClient.prototype.getValidationRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetValidationRule',
      request,
      metadata || {},
      methodInfo_Dictionary_GetValidationRule,
      callback);
};


/**
 * @param {!proto.dictionary.ValidationRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.ValidationRule>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryPromiseClient.prototype.getValidationRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetValidationRule',
      request,
      metadata || {},
      methodInfo_Dictionary_GetValidationRule);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Process>}
 */
const methodInfo_Dictionary_GetProcess = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryClient.prototype.getProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetProcess',
      request,
      metadata || {},
      methodInfo_Dictionary_GetProcess,
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
proto.dictionary.DictionaryPromiseClient.prototype.getProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetProcess',
      request,
      metadata || {},
      methodInfo_Dictionary_GetProcess);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Browser>}
 */
const methodInfo_Dictionary_GetBrowser = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.dictionary.DictionaryClient.prototype.getBrowser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetBrowser',
      request,
      metadata || {},
      methodInfo_Dictionary_GetBrowser,
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
proto.dictionary.DictionaryPromiseClient.prototype.getBrowser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetBrowser',
      request,
      metadata || {},
      methodInfo_Dictionary_GetBrowser);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dictionary.EntityRequest,
 *   !proto.dictionary.Form>}
 */
const methodInfo_Dictionary_GetForm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dictionary.Form,
  /** @param {!proto.dictionary.EntityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dictionary.Form.deserializeBinary
);


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dictionary.Form)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dictionary.Form>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dictionary.DictionaryClient.prototype.getForm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dictionary.Dictionary/GetForm',
      request,
      metadata || {},
      methodInfo_Dictionary_GetForm,
      callback);
};


/**
 * @param {!proto.dictionary.EntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dictionary.Form>}
 *     A native promise that resolves to the response
 */
proto.dictionary.DictionaryPromiseClient.prototype.getForm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dictionary.Dictionary/GetForm',
      request,
      metadata || {},
      methodInfo_Dictionary_GetForm);
};


module.exports = proto.dictionary;

