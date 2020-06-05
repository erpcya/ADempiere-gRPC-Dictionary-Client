/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client Convert Utils                        *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
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

const convertUtils = {
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
  },

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
      elementName: fieldToConvert.getElementname(),
      isActive: fieldToConvert.getIsactive(),
      // displayed attributes
      fieldGroup: convertUtils.convertFieldGroup(
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
      reference: convertUtils.convertReference(
        fieldToConvert.getReference()
      ),
      contextInfo: convertUtils.convertContextInfo(
        fieldToConvert.getContextinfo()
      ),
      fieldDefinition: convertUtils.convertFieldDefinition(
        fieldToConvert.getFielddefinition()
      )
    };
  },

  convertWindow(windowToConvert, isWithTabs) {
    if (windowToConvert === undefined || windowToConvert === null) {
      return undefined;
    }
    let tabsList;
    if (isWithTabs) {
      tabsList = windowToConvert.getTabsList().map(itemTab => {
        return convertUtils.convertTab(itemTab, false, false);
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
      contextInfo: convertUtils.convertContextInfo(
        windowToConvert.getContextinfo()
      ),
      windowType: windowToConvert.getWindowtype(),
      tabsList
    };
  },

  convertTab(tabToConvert, isWithFields = false, isWithProcess = true) {
    if (tabToConvert === undefined || tabToConvert === null) {
      return undefined;
    }

    let fieldsList;
    if (isWithFields) {
      fieldsList = tabToConvert.getFieldsList()
        .map(fieldItem => {
          return convertUtils.convertField(fieldItem);
        });
    }

    let processesList;
    if (isWithProcess) {
      processesList = tabToConvert.getProcessesList()
        .map(procesItem => {
          return convertUtils.convertProcess(procesItem, isWithFields);
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
      fieldGroup: convertUtils.convertFieldGroup(
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
      contextInfo: convertUtils.convertContextInfo(
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
      processesList,
      fieldsList
    };
  },

  convertProcess(processToConvert, isWithFields = true) {
    if (processToConvert === undefined || processToConvert === null) {
      return undefined;
    }
    const additionalAttributes = {
      processUuid: processToConvert.getUuid(),
      processId: processToConvert.getId(),
    };

    //  Convert fiels list from gRPC
    let parametersList;
    if (isWithFields) {
      parametersList = processToConvert.getParametersList()
        .map(fieldItem => {
          return convertUtils.convertField(fieldItem, additionalAttributes);
        });
    }

    //  Get export list
    const reportExportTypesList = processToConvert.getReportexporttypesList()
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
      reportExportTypesList,
      parametersList
    };
  },

  convertBrowser(browserToConvert, isWithFields = true) {
    const additionalAttributes = {
      browserUuid: browserToConvert.getUuid(),
      browserId: browserToConvert.getId(),
    };

    //  Convert from gRPC
    let fieldsList;
    if (isWithFields) {
      fieldsList = browserToConvert.getFieldsList()
        .map(fieldItem => {
          return convertUtils.convertField(fieldItem, additionalAttributes);
        });
    }

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
      window: convertUtils.convertWindow(
        browserToConvert.getWindow(), true
      ),
      process: convertUtils.convertProcess(
        browserToConvert.getProcess(),
        false
      ),
      //
      fieldsList
    };
  },

  convertForm(formToConvert) {
    if (formToConvert) {
      return {
        id: formToConvert.getId(),
        uuid: formToConvert.getUuid(),
        name: formToConvert.getName(),
        description: formToConvert.getDescription(),
        help: formToConvert.getHelp(),
        accessLevel: formToConvert.getAccesslevel(),
        fileName: formToConvert.getFilename(),
        isActive: formToConvert.getIsactive()
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      name: undefined,
      description: undefined,
      help: undefined,
      accessLevel: undefined,
      fileName: undefined,
      isActive: undefined
    }
  },

  convertContextInfo(contextInfoGRPC) {
    if (contextInfoGRPC) {
      return {
        id: contextInfoGRPC.getId(),
        uuid: contextInfoGRPC.getUuid(),
        name: contextInfoGRPC.getName(),
        description: contextInfoGRPC.getDescription(),
        sqlStatement: contextInfoGRPC.getSqlstatement(),
        isActive: contextInfoGRPC.getIsactive(),
        messageText: convertUtils.convertMessageText(
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
      messageText: convertUtils.convertMessageText(undefined)
    };
  },

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
  },

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
            return convertUtils.convertZoomWindow(zoomWindowItem);
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
  },

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
  },

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
            return convertUtils.connvertFieldCondition(itemCondition)
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
  },

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
  },

  convertValidationRule(validationRuleToConvert) {
    if (validationRuleToConvert) {
      return {
        validationRuleUuid: validationRuleToConvert.getValidationruleuuid(),
        validationCode: validationRuleToConvert.getValidationcode(),
        name: validationRuleToConvert.getName(),
        description: validationRuleToConvert.getDescription(),
        type: validationRuleToConvert.getType()
      };
    }
    return {
      validationRuleUuid: undefined,
      validationCode: undefined,
      name: undefined,
      description: undefined,
      type: undefined
    }
  }

};

module.exports = convertUtils;
