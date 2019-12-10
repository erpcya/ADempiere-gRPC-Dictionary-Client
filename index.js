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
   * @param {string} sessionUuid
   * @param {string} language
   */
  constructor(host, sessionUuid, language = 'en_US') {
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
    const { DictionaryServicePromiseClient } = require('./src/grpc/proto/dictionary_grpc_web_pb.js');
    const requestService = new DictionaryServicePromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    return requestService;
  }

  /**
   * Get Client Request
   * @param {string} uuid Universally Unique IDentifier
   * @return {object} Return request for get data
   */
  getRequest(uuid) {
    const { ApplicationRequest, EntityRequest } = require('./src/grpc/proto/dictionary_pb.js');
    let applicationRequest = new ApplicationRequest();
    applicationRequest.setSessionuuid(this.sessionUuid);
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
   * @return {oject} Object Window and attributes, and tabs if its required.
   */
  requestWindow({ uuid, isWithTabs = false, isConvertedMetadata = false }) {
    if(isWithTabs) {
      return this.getService().getWindowAndTabs(this.getRequest(uuid))
      .then(responseWindow => {
        if (isConvertedMetadata) {
          return this.convertWindow(responseWindow, isWithTabs);
        }
        return responseWindow;
      });
    } else {
      return this.getService().getWindow(this.getRequest(uuid))
      .then(responseWindow => {
        if (isConvertedMetadata) {
          return this.convertWindow(responseWindow);
        }
        return responseWindow;
      });
    }
  }

  convertWindow(windowToConvert, isWithTabs) {
    if (windowToConvert === undefined || windowToConvert === null) {
      return undefined;
    }
    let tabsList;
    if (isWithTabs) {
      tabsList = windowToConvert.getTabsList().map(itemTab => {
        return this.convertTab(itemTab);
      });
    }

    // window definition
    return {
      id: windowToConvert.getId(),
      uuid: windowToConvert.getUuid(),
      name: windowToConvert.getName(),
      description: windowToConvert.getDescription(),
      help: windowToConvert.getHelp(),
      isActive: windowToConvert.getIsactive(),
      isSOTrx: windowToConvert.getIssotrx(),
      contextInfo: this.convertContextInfo(
        windowToConvert.getContextinfo()
      ),
      windowType: windowToConvert.getWindowtype(),
      tabsList: tabsList
    };
  }

  /**
   * Get and request a Tab, the Fields are optional
   * @param {string} uuid Universally Unique IDentifier
   * @param {boolean} isWithFields Indicate if you will also extract the fields
   * @return {object} Object Tabs and attributes, and fields if its required.
   */
  requestTab({ uuid, isWithFields = false, isConvertedMetadata = false }) {
    if (isWithFields) {
      return this.getService().getTabAndFields(this.getRequest(uuid))
        .then(responseTab => {
          if (isConvertedMetadata) {
            return this.convertTab(responseTab, isWithFields, !isWithFields);
          }
          return responseTab;
        });
    } else {
      return this.getService().getTab(this.getRequest(uuid))
        .then(responseTab => {
          if (isConvertedMetadata) {
            return this.convertTab(responseTab, isWithFields, !isWithFields);
          }
          return responseTab;
        });
    }
  }

  convertTab(tabToConvert, isWithFields = false, isWithProcess = true) {
    if (tabToConvert === undefined || tabToConvert === null) {
      return undefined;
    }

    let fieldsList = [];
    if (isWithFields) {
      fieldsList = tabToConvert.getFieldsList()
        .map(fieldItem => {
          return this.convertField(fieldItem);
        });
    }

    let processesList = [];
    if (isWithProcess) {
      processesList = tabToConvert.getProcessesList()
        .map(procesItem => {
          return this.convertProcess(procesItem);
        });
    }

    // window definition
    return {
      id: tabToConvert.getId(),
      uuid: tabToConvert.getUuid(),
      name: tabToConvert.getName(),
      description: tabToConvert.getDescription(),
      help: tabToConvert.getHelp(),
      isActive: tabToConvert.getIsactive(),
      //
      fieldGroup: this.convertFieldGroup(
        tabToConvert.getFieldgroup()
      ),
      displayLogic: tabToConvert.getDisplaylogic(),
      isView: tabToConvert.getIsview(),
      isDocument: tabToConvert.getIsdocument(),
      isInsertRecord: tabToConvert.getIsinsertrecord(),
      // order tab
      isSortTab: tabToConvert.getIssorttab(), // Tab type Order Tab
      sequence: tabToConvert.getSequence(),
      sortYesNoColumnName: tabToConvert.getSortyesnocolumnname(),
      sortOrderColumnName: tabToConvert.getSortordercolumnname(),
      // relations
      tabLevel: tabToConvert.getTablevel(),
      parentTabUuid: tabToConvert.getParenttabuuid(),
      linkColumnName: tabToConvert.getLinkcolumnname(),
      parentColumnName: tabToConvert.getParentcolumnname(),
      //
      contextInfo: this.convertContextInfo(
        tabToConvert.getContextinfo()
      ),
      isAdvancedTab: tabToConvert.getIsadvancedtab(),
      isHasTree: tabToConvert.getIshastree(),
      isInfoTab: tabToConvert.getIsinfotab(),
      isTranslationTab: tabToConvert.getIstranslationtab(),
      isReadOnly: tabToConvert.getIsreadonly(),
      isDeleteable: tabToConvert.getIsdeleteable(),
      accessLevel: tabToConvert.getAccesslevel(),
      isSingleRow: tabToConvert.getIssinglerow(),
      // conditionals
      commitWarning: tabToConvert.getCommitwarning(),
      // query db
      tableName: tabToConvert.getTablename(),
      query: tabToConvert.getQuery(),
      whereClause: tabToConvert.getWhereclause(),
      orderByClause: tabToConvert.getOrderbyclause(),
      isChangeLog: tabToConvert.getIschangelog(),
      //
      processesList: processesList,
      fieldsList: fieldsList
    };
  }

  /**
   * Get and request a Field
   * @param {string} uuid Universally Unique IDentifier
   * @return {object} Object field and attributes.
   */
  requestField({ uuid, isConvertedMetadata = false }) {
    return this.getService().getField(this.getRequest(uuid))
      .then(responseField => {
        if (isConvertedMetadata) {
          return this.convertField(responseField);
        }
        return responseField;
      });
  }

  convertContextInfo(contextInfoGRPC) {
    if (contextInfoGRPC) {
      return {
        id: contextInfoGRPC.getId(),
        uuid: contextInfoGRPC.getUuid(),
        name: contextInfoGRPC.getName(),
        description: contextInfoGRPC.getDescription(),
        sqlStatement: contextInfoGRPC.getSqlstatement(),
        isActive: contextInfoGRPC.getIsactive(),
        messageText: this.convertMessageText(
          contextInfoGRPC.getMessagetext()
        )
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      name: undefined,
      description: undefined,
      sqlStatement: undefined,
      isActive: undefined,
      messageText: this.convertMessageText(undefined)
    };
  }

  convertMessageText(messageTextToConvert) {
    if (messageTextToConvert) {
      return {
        id: messageTextToConvert.getId(),
        // uuid: messageText.getUuid(),
        value: messageTextToConvert.getValue(),
        msgType: messageTextToConvert.getMsgtype(),
        msgText: messageTextToConvert.getMsgtext(),
        msgTip: messageTextToConvert.getMsgtip(),
        isActive: messageTextToConvert.getIsactive()
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      value: undefined,
      msgType: undefined,
      msgText: undefined,
      msgTip: undefined,
      isActive: undefined
    };
  }

  convertFieldGroup(fieldGroupToConvert) {
    if (fieldGroupToConvert) {
      return {
        id: fieldGroupToConvert.getId(),
        uuid: fieldGroupToConvert.getUuid(),
        name: fieldGroupToConvert.getName(),
        fieldGroupType: fieldGroupToConvert.getFieldgrouptype(),
        isActive: fieldGroupToConvert.getIsactive(),
        //
        groupName: fieldGroupToConvert.getName(),
        groupType: fieldGroupToConvert.getFieldgrouptype()
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      name: undefined,
      fieldGroupType: undefined,
      isActive: undefined,
      //
      groupName: undefined,
      groupType: undefined
    };
  }

  convertField(fieldToConvert, moreAttributes = {}) {
    return {
      ...moreAttributes,
      // base attributes
      id: fieldToConvert.getId(),
      uuid: fieldToConvert.getUuid(),
      name: fieldToConvert.getName(),
      description: fieldToConvert.getDescription(),
      help: fieldToConvert.getHelp(),
      columnName: fieldToConvert.getColumnname(),
      isActive: fieldToConvert.getIsactive(),
      // displayed attributes
      fieldGroup: this.convertFieldGroup(
        fieldToConvert.getFieldgroup()
      ),
      displayType: fieldToConvert.getDisplaytype(),
      isFieldOnly: fieldToConvert.getIsfieldonly(),
      isRange: fieldToConvert.getIsrange(),
      isSameLine: fieldToConvert.getIssameline(),
      isEncrypted: fieldToConvert.getIsencrypted(), // passswords fields
      isQuickEntry: fieldToConvert.getIsquickentry(),
      sequence: fieldToConvert.getSequence(),
      seqNoGrid: fieldToConvert.getSeqnogrid(),
      sortNo: fieldToConvert.getSortno(),
      identifierSequence: fieldToConvert.getIdentifiersequence(),
      // value attributes
      formatPattern: fieldToConvert.getFormatpattern(),
      VFormat: fieldToConvert.getVformat(),
      defaultValue: fieldToConvert.getDefaultvalue(),
      defaultValueTo: fieldToConvert.getDefaultvalueto(),
      fieldLength: fieldToConvert.getFieldlength(),
      valueMin: fieldToConvert.getValuemin(),
      valueMax: fieldToConvert.getValuemax(),
      //
      isIdentifier: fieldToConvert.getIsidentifier(),
      isParent: fieldToConvert.getIsparent(),
      isKey: fieldToConvert.getIskey(),
      isSelectionColumn: fieldToConvert.getIsselectioncolumn(),
      isUpdateable: fieldToConvert.getIsupdateable(),
      isAlwaysUpdateable: fieldToConvert.getIsalwaysupdateable(),
      //
      isAllowCopy: fieldToConvert.getIsallowcopy(),
      isHeading: fieldToConvert.getIsheading(),
      isAllowLogging: fieldToConvert.getIsallowlogging(),
      isTranslated: fieldToConvert.getIstranslated(),
      //
	    columnSQL: fieldToConvert.getColumnsql(),
      //
      isDisplayed: fieldToConvert.getIsdisplayed(),
      isDisplayedGrid: fieldToConvert.getIsdisplayedgrid(),
      isMandatory: fieldToConvert.getIsmandatory(),
      isReadOnly: fieldToConvert.getIsreadonly(),
      // Smart Browser attributes
      isQueryCriteria: fieldToConvert.getIsquerycriteria(),
      isOrderBy: fieldToConvert.getIsorderby(),
      isInfoOnly: fieldToConvert.getIsinfoonly(),
      //
      callout: fieldToConvert.getCallout(),
      displayLogic: fieldToConvert.getDisplaylogic(),
      mandatoryLogic: fieldToConvert.getMandatorylogic(),
      readOnlyLogic: fieldToConvert.getReadonlylogic(),
	    // External Info
      reference: this.convertReference(
        fieldToConvert.getReference()
      ),
      contextInfo: this.convertContextInfo(
        fieldToConvert.getContextinfo()
      ),
      fieldDefinition: this.convertFieldDefinition(
        fieldToConvert.get
      )
    };
  }

  convertReference(referenceToConvert) {
    if (referenceToConvert) {
      return {
        tableName: referenceToConvert.getTablename(),
        keyColumnName: referenceToConvert.getKeycolumnname(),
        displayColumnName: referenceToConvert.getDisplaycolumnname(),
        query: referenceToConvert.getQuery(),
        parsedQuery: referenceToConvert.getQuery(),
        directQuery: referenceToConvert.getDirectquery(),
        parsedDirectQuery: referenceToConvert.getDirectquery(),
        validationCode: referenceToConvert.getValidationcode(),
        windowsList: referenceToConvert.getWindowsList()
          .map(zoomWindowItem => {
            return this.convertZoomWindow(zoomWindowItem);
          })
      };
    }
    return {
      tableName: undefined,
      keyColumnName: undefined,
      displayColumnName: undefined,
      query: undefined,
      parsedQuery: undefined,
      directQuery: undefined,
      parsedDirectQuery: undefined,
      validationCode: undefined,
      windowsList: []
    };
  }

  convertZoomWindow(zoomWindowToConvert) {
    if (zoomWindowToConvert) {
      return {
        id: zoomWindowToConvert.getId(),
        uuid: zoomWindowToConvert.getUuid(),
        name: zoomWindowToConvert.getName(),
        description: zoomWindowToConvert.getDescription(),
        isSOTrx: zoomWindowToConvert.getIssotrx(),
        isActive: zoomWindowToConvert.getIsactive()
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      name: undefined,
      description: undefined,
      isSOTrx: undefined,
      isActive: undefined
    };
  }

  convertFieldDefinition(fieldDefinitionToConvert) {
    if (fieldDefinitionToConvert) {
      return {
        id: fieldDefinitionToConvert.getId(),
        uuid: fieldDefinitionToConvert.getUuid(),
        value: fieldDefinitionToConvert.getValue(),
        name: fieldDefinitionToConvert.getName(),
        isActive: fieldDefinitionToConvert.getIsactive(),
        fieldGroupType: fieldDefinitionToConvert.getFieldgrouptype(),
        conditionsList: fieldDefinitionToConvert.getConditionsList()
          .map(itemCondition => {
            this.connvertFieldCondition(itemCondition)
          })
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      value: undefined,
      name: undefined,
      fieldGroupType: undefined,
      isActive: undefined,
      conditionsList: []
    };
  }

  connvertFieldCondition(fieldConditionToConvert) {
    if (fieldConditionToConvert) {
      return {
        id: fieldConditionToConvert.getId(),
        uuid: fieldConditionToConvert.getUuid(),
        condition: fieldConditionToConvert.getCondition(),
        styleSheet: fieldConditionToConvert.getStylesheet(),
        isActive: fieldConditionToConvert.getIsactive()
      }
    }
    return {
      id: undefined,
      uuid: undefined,
      condition: undefined,
      stylesheet: undefined,
      isActive: undefined
    };
  }

  /**
   * Get and request a Process with parameters
   * @param {string} uuid Universally Unique IDentifier
   * @return {object} Object field and attributes.
   */
  requestProcess({ uuid, isConvertedMetadata = false, isConvertedFields = false }) {
    return this.getService().getProcess(this.getRequest(uuid))
      .then(responseProcess => {
        if (isConvertedMetadata) {
          return this.convertProcess(responseProcess, isConvertedFields);
        }
        return responseProcess;
      });
  }

  convertProcess(processToConvert) {
    if (processToConvert === undefined || processToConvert === null) {
      return undefined;
    }
    const additionalAttributes = {
      processUuid: processToConvert.getUuid(),
      processId: processToConvert.getId(),
    };

    //  Convert from gRPC
    const parametersList = processToConvert.getParametersList()
      .map(fieldItem => {
        return this.convertField(fieldItem, additionalAttributes);
      });

    //  Get export list
    const reportExportTypeList = processToConvert.getReportexporttypesList()
      .map(reportType => {
        return {
          name: reportType.getName(),
          description: reportType.getDescription(),
          reportExportType: reportType.getType()
        };
      });

    // process definition
    return {
      id: processToConvert.getId(),
      uuid: processToConvert.getUuid(),
      value: processToConvert.getValue(),
      name: processToConvert.getName(),
      description: processToConvert.getDescription(),
      help: processToConvert.getHelp(),
      isReport: processToConvert.getIsreport(),
      accessLevel: processToConvert.getAccesslevel(),
      showHelp: processToConvert.getShowhelp(),
      isDirectPrint: processToConvert.getIsdirectprint(),
      isActive: processToConvert.getIsactive(),
      reportExportTypeList: reportExportTypeList,
      parametersList: parametersList
    };
  }

  /**
   * Get and request a Smart Browser with fields
   * @param {string} uuid Universally Unique IDentifier
   * @param {boolean} isConverted
   * @return {object} Object field and attributes.
   */
  requestBrowser({ uuid, isConvertedMetadata = false }) {
    return this.getService().getBrowser(this.getRequest(uuid))
    .then(responseBrowser => {
      if (isConvertedMetadata) {
        return this.convertBrowser(responseBrowser);
      }
      return responseBrowser;
    });
  }

  convertBrowser(browserToConvert) {
    const additionalAttributes = {
      browserUuid: browserToConvert.getUuid(),
      browserId: browserToConvert.getId(),
    };

    //  Convert from gRPC
    const fieldsList = browserToConvert.getFieldsList()
      .map(fieldItem => {
        return this.convertField(fieldItem, additionalAttributes);
      });

    // browser definition
    return {
      // identifier attributes
      id: browserToConvert.getId(),
      uuid: browserToConvert.getUuid(),
      viewUuid: browserToConvert.getViewuuid(),
      //
      value: browserToConvert.getValue(),
      name: browserToConvert.getName(),
      description: browserToConvert.getDescription(),
      help: browserToConvert.getHelp(),
      accessLevel: browserToConvert.getAccesslevel(),
      isActive: browserToConvert.getIsactive(),
      //
	    isUpdateable: browserToConvert.getIsupdateable(),
      IsDeleteable: browserToConvert.getIsdeleteable(),
	    IsSelectedByDefault: browserToConvert.getIsselectedbydefault(),
	    IsCollapsibleByDefault: browserToConvert.getIscollapsiblebydefault(),
	    IsExecutedQueryByDefault: browserToConvert.getIsexecutedquerybydefault(),
	    IsShowTotal: browserToConvert.getIsshowtotal(),
      // search query
	    query: browserToConvert.getQuery(),
	    whereClause: browserToConvert.getWhereclause(),
      orderByClause: browserToConvert.getOrderbyclause(),
    	// External Reference
      window: this.convertWindow(
        browserToConvert.getWindow(), true
      ),
      process: this.convertProcess(
        browserToConvert.getProcess()
      ),
      //
      fieldsList: fieldsList
    };
  }
}

module.exports = Dictionary;
