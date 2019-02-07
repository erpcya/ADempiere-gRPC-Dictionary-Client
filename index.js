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
  //  No authentication required
  constructor(host, clientVersion, language = 'en_US') {
    this.host = host;
    this.clientVersion = clientVersion;
    this.language = language;
  }

  /**
  * Request a Menu, the child are optional
  */
  requestMenu(uuid, withChild) {
    //  Get Menu
    if(withChild) {
      return this.getService().requestMenuAndChild(this.getRequest(uuid));
    } else {
      return this.getService().requestMenu(this.getRequest(uuid));
    }
  }

  /**
  * Load gRPC Connection
  */
  getService() {
    const grpc_promise = require('grpc-promise');
    const { DictionaryServicePromiseClient } = require('./src/grpc/proto/dictionary_grpc_web_pb.js');
    var requestService = new DictionaryServicePromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    //  Return request for get data
    return requestService;
  }

  /**
  * Get Client Request
  */
  getRequest(uuid) {
    const { ApplicationRequest, EntityRequest } = require('./src/grpc/proto/dictionary_pb.js');
    let applicationRequest = new ApplicationRequest();
    applicationRequest.setUuid(this.clientVersion);
    applicationRequest.setLanguage(this.language);
    let request = new EntityRequest();
    request.setUuid(uuid);
    request.setApplicationrequest(applicationRequest);
    //  return
    return request;
  }

  /**
  * Request a Window, the Tabs are optional
  * @return {Object} Object Window and attributes, and tabs if its required.
  */
  requestWindow(uuid, withTabs) {
    //  Get Window
    if(withTabs) {
      return this.getService().requestWindowAndTabs(this.getRequest(uuid));
    } else {
      return this.getService().requestWindow(this.getRequest(uuid));
    }
  }

  /**
  * Request a Tab, the Fields are optional
  */
  requestTab(uuid, withFields) {
    //  Get Tab
    if(withFields) {
      return this.getService().requestTabAndFields(this.getRequest(uuid));
    } else {
      return this.getService().requestTab(this.getRequest(uuid));
    }
  }

  /**
  * Request a Field
  * @return {Object} Object field and attributes.
  */
  requestField(uuid) {
    //  Get Field
    return this.getService().requestField(this.getRequest(uuid));
  }
}

module.exports = Dictionary;
