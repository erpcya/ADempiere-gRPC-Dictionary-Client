/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client                       		               *
 * Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com				  		                         *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/
class Dictionary {

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} clientVersion
   * @param {string} language
   */
  constructor(host, clientVersion, language = 'en_US') {
    this.host = host;
    this.clientVersion = clientVersion;
    this.language = language;
  }

  /**
   * Get and request a Menu, the child are optional
   * @param {string} uuid Universally Unique IDentifier
   * @param {boolean} withChild Indicate if you will also extract the children
   * @return {Object} Object Menu and attributes, and sub menus if its required.
   */
  requestMenu(uuid, withChild = false) {
    if(withChild) {
      return this.getService().requestMenuAndChild(this.getRequest(uuid));
    } else {
      return this.getService().requestMenu(this.getRequest(uuid));
    }
  }

  /**
   * Load gRPC Connection
   * @return {Object} Return request for get data
   */
  getService() {
    const grpc_promise = require('grpc-promise');
    const { DictionaryServicePromiseClient } = require('./src/grpc/proto/dictionary_grpc_web_pb.js');
    var requestService = new DictionaryServicePromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    return requestService;
  }

  /**
   * Get Client Request
   * @param {string} uuid Universally Unique IDentifier
   * @return {Object} Return request for get data
   */
  getRequest(uuid) {
    const { ApplicationRequest, EntityRequest } = require('./src/grpc/proto/dictionary_pb.js');
    let applicationRequest = new ApplicationRequest();
    applicationRequest.setUuid(this.clientVersion);
    applicationRequest.setLanguage(this.language);
    let request = new EntityRequest();
    request.setUuid(uuid);
    request.setApplicationrequest(applicationRequest);
    return request;
  }

  /**
   * Get and request a Window, the Tabs are optional
   * @param {string} uuid Universally Unique IDentifier
   * @param {boolean} withTabs Indicate if you will also extract the tabs
   * @return {Object} Object Window and attributes, and tabs if its required.
   */
  requestWindow(uuid, withTabs = false) {
    if(withTabs) {
      return this.getService().requestWindowAndTabs(this.getRequest(uuid));
    } else {
      return this.getService().requestWindow(this.getRequest(uuid));
    }
  }

  /**
   * Get and request a Tab, the Fields are optional
   * @param {string} uuid Universally Unique IDentifier
   * @param {boolean} withFields Indicate if you will also extract the fields
   * @return {Object} Object Tabs and attributes, and fields if its required.
   */
  requestTab(uuid, withFields = false) {
    if(withFields) {
      return this.getService().requestTabAndFields(this.getRequest(uuid));
    } else {
      return this.getService().requestTab(this.getRequest(uuid));
    }
  }

  /**
   * Get and request a Field
   * @return {Object} Object field and attributes.
   * @param {string} uuid Universally Unique IDentifier
   */
  requestField(uuid) {
    return this.getService().requestField(this.getRequest(uuid));
  }

  /**
   * Get and request a Process with parameters
   * @return {Object} Object field and attributes.
   * @param {string} uuid Universally Unique IDentifier
   */
  requestProcess(uuid) {
    return this.getService().requestProcess(this.getRequest(uuid));
  }

  /**
   * Get and request a Smart Browser with fields
   * @return {Object} Object field and attributes.
   * @param {string} uuid Universally Unique IDentifier
   */
  requestBrowser(uuid) {
    return this.getService().RequestBrowser(this.getRequest(uuid));
  }
}

module.exports = Dictionary;
