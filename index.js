/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client                                         *
 * Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com                                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/
class Dictionary {

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} sessionUuid
   * @param {string} language
   */
  constructor({ host, sessionUuid, language = 'en_US' }) {
    this.host = host;
    this.sessionUuid = sessionUuid;
    this.language = language;
  }

  /**
   * Load gRPC Connection
   * @return {object} Return request for get data
   */
  getService() {
    const grpc_promise = require('grpc-promise');
    const { DictionaryPromiseClient } = require('./src/grpc/proto/dictionary_grpc_web_pb.js');
    const requestService = new DictionaryPromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    return requestService;
  }

  getApplicationRequest() {
    const { ApplicationRequest } = require('./src/grpc/proto/dictionary_pb.js');
    const applicationRequest = new ApplicationRequest();
    applicationRequest.setSessionuuid(this.sessionUuid);
    applicationRequest.setLanguage(this.language);
    return applicationRequest;
  }

  /**
   * Get Entity Request
   * @param {string} uuid Universally Unique IDentifier
   * @return {object} Return request for get data
   */
  getRequest({ uuid, id }) {
    const { EntityRequest } = require('./src/grpc/proto/dictionary_pb.js');
    const request = new EntityRequest();

    request.setUuid(uuid);
    request.setId(id);
    request.setApplicationrequest(this.getApplicationRequest());

    return request;
  }

  /**
   * Reference Request
   * @param {string} referenceUuid
   * @param {string} columnName
   * @returns {promise}
   */
  requestReference({ referenceUuid, columnName }) {
    const { ReferenceRequest } = require('./src/grpc/proto/dictionary_pb.js');
    const request = new ReferenceRequest();

    request.setReferenceuuid(referenceUuid);
    request.setColumnname(columnName);
    request.setApplicationrequest(this.getApplicationRequest());

    return this.getService().getReference(request)
      .then(responseReference => {
        const { convertReference } = require('./src/convertUtils.js');

        return convertReference(responseReference);
      });
  }

  /**
   * Validation Rule Request
   * @param {string} validationRuleUuid
   */
  requestValidationRule({ validationRuleUuid }) {
    const { ValidationRuleRequest } = require('./src/grpc/proto/dictionary_pb.js');
    const request = new ValidationRuleRequest();

    request.setValidationruleuuid(validationRuleUuid);
    request.setApplicationrequest(this.getApplicationRequest());

    return this.getService().getValidationRule(request)
      .then(responseValidation => {
        const { convertValidationRule } = require('./src/convertUtils.js');

        return convertValidationRule(responseValidation);
      });
  }

  /**
   * Get and request a Window, the Tabs are optional
   * @param {string} uuid Universally Unique IDentifier
   * @param {number} id IDentifier
   * @param {boolean} isWithTabs Indicate if you will also extract the tabs
   * @return {oject} Object Window and attributes, and tabs if its required.
   */
  requestWindow({ uuid, id, isWithTabs = false }) {
    if (isWithTabs) {
      return this.getService().getWindowAndTabs(this.getRequest({ uuid, id }))
        .then(responseWindow => {
          const { convertWindow } = require('./src/convertUtils.js');

          return convertWindow(responseWindow, isWithTabs);
        });
    } else {
      return this.getService().getWindow(this.getRequest({ uuid, id }))
        .then(responseWindow => {
          const { convertWindow } = require('./src/convertUtils.js');

          return convertWindow(responseWindow);
        });
    }
  }

  /**
   * Get and request a Tab, the Fields are optional
   * @param {string} uuid Universally Unique IDentifier
   * @param {number} id IDentifier
   * @param {boolean} isWithFields Indicate if you will also extract the fields
   * @return {object} Object Tabs and attributes, and fields if its required.
   */
  requestTab({ uuid, id, isWithFields = false, isWithProcess = false }) {
    if (isWithFields) {
      return this.getService().getTabAndFields(this.getRequest({ uuid, id }))
        .then(responseTab => {
          const { convertTab } = require('./src/convertUtils.js');

          return convertTab(responseTab, isWithFields, !isWithFields);
        });
    } else {
      return this.getService().getTab(this.getRequest({ uuid, id }))
        .then(responseTab => {
          const { convertTab } = require('./src/convertUtils.js');

          return convertTab(responseTab, isWithFields, isWithProcess);
        });
    }
  }

  /**
   * Get and request a Field
   * @param {string} fieldUuid Universally Unique IDentifier
   * @param {string} columnUuid
   * @param {string} elementUuid
   * @param {string} tableName
   * @param {string} columnName
   * @param {string} elementColumnName
   */
  requestField({
    fieldUuid,
    columnUuid,
    elementUuid,
    // TableName + ColumnName
    tableName,
    columnName,
    elementColumnName
  }) {
    const { FieldRequest } = require('./src/grpc/proto/dictionary_pb.js');
    const request = new FieldRequest();

    request.setFielduuid(fieldUuid);
    request.setColumnuuid(columnUuid);
    request.setElementuuid(elementUuid);
    request.setTablename(tableName);
    request.setColumnname(columnName);
    request.setElementcolumnname(elementColumnName);
    request.setApplicationrequest(this.getApplicationRequest());

    return this.getService().getField(request)
      .then(responseField => {
        const { convertField } = require('./src/convertUtils.js');

        return convertField(responseField);
      });
  }

  /**
   * Get and request a Process with parameters
   * @param {string} uuid Universally Unique IDentifier
   * @param {number} id IDentifier
   * @return {promise} Process/Report metadata and attributes.
   */
  requestProcess({ uuid, id, isWithFields = false }) {
    return this.getService().getProcess(this.getRequest({ uuid, id }))
      .then(responseProcess => {
        const { convertProcess } = require('./src/convertUtils.js');

        return convertProcess(responseProcess, isWithFields);
      });
  }

  /**
   * Get and request a Smart Browser with fields
   * @param {string} uuid Universally Unique IDentifier
   * @param {number} id IDentifier
   * @return {promise} Smart Browser metadata and attributes.
   */
  requestBrowser({ uuid, id, isWithFields = true }) {
    return this.getService().getBrowser(this.getRequest({ uuid, id }))
      .then(responseBrowser => {
        const { convertBrowser } = require('./src/convertUtils.js');

        return convertBrowser(responseBrowser, isWithFields);
      });
  }

  /**
   * Get and request a Form metadata
   * @param {string} uuid Universally Unique IDentifier
   * @param {number} id IDentifier
   * @return {promise} Form attributes and metadata.
   */
  requestForm({ uuid, id }) {
    return this.getService().getForm(this.getRequest({ uuid, id }))
      .then(responseForm => {
        const { convertForm } = require('./src/convertUtils.js');

        return convertForm(responseForm);
      });
  }

}

module.exports = Dictionary;
