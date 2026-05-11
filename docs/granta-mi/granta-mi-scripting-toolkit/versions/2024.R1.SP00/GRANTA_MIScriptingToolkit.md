# Foundation API Reference

<a id="services-reference"></a>

## Services Reference

<a id="browse-service"></a>

<a id="browseservice"></a>

### BrowseService

### *class* BrowseService(mi_session, retries=0)

The Browse service provides read-only operation for a Granta MI Server.

#### GetDatabases()

List the databases available on the Granta MI Server.

* **Returns:**
  [`GetDatabasesResponse`](#module-GRANTA_MIScriptingToolkit.GetDatabasesResponse) object

#### GetTables(\_req)

List the tables contained in a particular Granta MI Database.

* **Parameters:**
  **\_req** – [`GetTables`](#module-GRANTA_MIScriptingToolkit.GetTables) object
* **Returns:**
  [`GetTablesResponse`](#module-GRANTA_MIScriptingToolkit.GetTablesResponse) object

#### GetRootNode(\_req)

Returns information about the root node of a particular Table in a Granta MI Database. This can be passed to GetChildNodes operation to find the contents of the rest of the node-tree of the Table.

* **Parameters:**
  **\_req** – [`GetRootNode`](#module-GRANTA_MIScriptingToolkit.GetRootNode) object
* **Returns:**
  [`GetRootNodeResponse`](#module-GRANTA_MIScriptingToolkit.GetRootNodeResponse) object

#### GetChildNodes(\_req)

Returns information about the child nodes of the given node in the node-tree of a Granta MI Table.

* **Parameters:**
  **\_req** – [`GetChildNodes`](#module-GRANTA_MIScriptingToolkit.GetChildNodes) object
* **Returns:**
  [`GetChildNodesResponse`](#module-GRANTA_MIScriptingToolkit.GetChildNodesResponse) object

#### GetSubsets(\_req)

List the Subsets for a Granta MI Database or for one Table in a Database.

* **Parameters:**
  **\_req** – [`GetSubsetsRequest`](#module-GRANTA_MIScriptingToolkit.GetSubsetsRequest) object
* **Returns:**
  [`GetSubsetsResponse`](#module-GRANTA_MIScriptingToolkit.GetSubsetsResponse) object

#### GetAssociatedRecords(\_req)

Returns all the Records, in a single target Table, that are associated with each of a given set of source Records, via Tabular Data links. These links can be in the forward or reverse direction. Note that, if there is more than one Tabular Attribute linking the source and target Tables, the Associated Records are the union of all those linked by each of the Tabular Attributes.

* **Parameters:**
  **\_req** – [`GetAssociatedRecordsRequest`](#module-GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest) object
* **Returns:**
  [`GetAssociatedRecordsResponse`](#module-GRANTA_MIScriptingToolkit.GetAssociatedRecordsResponse) object

#### GetAttributeDetails(\_req)

Returns detailed meta-information about given Attribute(s) in a Granta MI Database. Does not retrieve values of the Data; for that, use the DataExport service.

* **Parameters:**
  **\_req** – [`GetAttributeDetailsRequest`](#module-GRANTA_MIScriptingToolkit.GetAttributeDetailsRequest) object
* **Returns:**
  [`GetAttributeDetailsResponse`](#module-GRANTA_MIScriptingToolkit.GetAttributeDetailsResponse) object

#### GetTreeRecords(\_req)

Returns name, record type, and some tree information for the given record(s). Does not retrieve the tree children; for that, use the GetChildRecords operation.

* **Parameters:**
  **\_req** – [`GetTreeRecordsRequest`](#module-GRANTA_MIScriptingToolkit.GetTreeRecordsRequest) object
* **Returns:**
  [`GetTreeRecordsResponse`](#module-GRANTA_MIScriptingToolkit.GetTreeRecordsResponse) object

#### GetRecordAttributes(\_req)

Returns information about which Attributes have Data, for given Record(s). Includes information about when Data was created and retired, in a Version-Controlled Table. Does not retrieve values of the Data; for that, use the DataExport or EngineeringData services.

* **Parameters:**
  **\_req** – [`GetRecordAttributesRequest`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesRequest) object
* **Returns:**
  [`GetRecordAttributesResponse`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesResponse) object

#### GetUnitSystems(\_req)

Returns information about the unit systems known to a Granta MI Database

* **Parameters:**
  **\_req** – [`GetUnitSystems`](#module-GRANTA_MIScriptingToolkit.GetUnitSystems) object
* **Returns:**
  [`GetUnitSystemsResponse`](#module-GRANTA_MIScriptingToolkit.GetUnitSystemsResponse) object

#### GetRecordVersions(\_req)

Returns version information about the records specified in the request object.

* **Parameters:**
  **\_req** – [`GetRecordVersionsRequest`](#module-GRANTA_MIScriptingToolkit.GetRecordVersionsRequest) object
* **Returns:**
  [`GetRecordVersionsResponse`](#module-GRANTA_MIScriptingToolkit.GetRecordVersionsResponse) object

#### GetRecordLinkGroups(\_req)

Gets details of Record Link Groups in a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetRecordLinkGroups`](#module-GRANTA_MIScriptingToolkit.GetRecordLinkGroups) object
* **Returns:**
  [`GetRecordLinkGroupsResponse`](#module-GRANTA_MIScriptingToolkit.GetRecordLinkGroupsResponse) object

#### GetLinkedRecords(\_req)

Returns the linked records for specified records, for one or more record link groups.

* **Parameters:**
  **\_req** – [`GetLinkedRecordsRequest`](#module-GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest) object
* **Returns:**
  [`GetLinkedRecordsResponse`](#module-GRANTA_MIScriptingToolkit.GetLinkedRecordsResponse) object

#### GetAttributeParameters(\_req)

Gets detailed information about the Parameters that are declared to be usable with given Attribute(s) in a Granta MI Database. Can only be used with Functional Attributes or Multi-Valued Attributes.

* **Parameters:**
  **\_req** – [`GetAttributeParametersRequest`](#module-GRANTA_MIScriptingToolkit.GetAttributeParametersRequest) object
* **Returns:**
  [`GetAttributeParametersResponse`](#module-GRANTA_MIScriptingToolkit.GetAttributeParametersResponse) object

#### GetParameterDetails(\_req)

Returns detailed information about the given Parameter(s) in a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetParameterDetailsRequest`](#module-GRANTA_MIScriptingToolkit.GetParameterDetailsRequest) object
* **Returns:**
  [`GetParameterDetailsResponse`](#module-GRANTA_MIScriptingToolkit.GetParameterDetailsResponse) object

#### GetMetaAttributes(\_req)

Returns the Meta-Attributes of one or more parent Attributes in a Table of a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetMetaAttributesRequest`](#module-GRANTA_MIScriptingToolkit.GetMetaAttributesRequest) object
* **Returns:**
  [`GetMetaAttributesResponse`](#module-GRANTA_MIScriptingToolkit.GetMetaAttributesResponse) object

#### GetDatabaseParameters(\_req)

List the parameter(s) in a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetDatabaseParameters`](#module-GRANTA_MIScriptingToolkit.GetDatabaseParameters) object
* **Returns:**
  [`GetDatabaseParametersResponse`](#module-GRANTA_MIScriptingToolkit.GetDatabaseParametersResponse) object

#### GetIntegrationProfiles(\_req)

List the profiles available on a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetIntegrationProfiles`](#module-GRANTA_MIScriptingToolkit.GetIntegrationProfiles) object
* **Returns:**
  [`GetIntegrationProfilesResponse`](#module-GRANTA_MIScriptingToolkit.GetIntegrationProfilesResponse) object

#### GetLayouts(\_req)

List the Layouts for an MI Database or for one Table in a Database.

* **Parameters:**
  **\_req** – [`GetLayouts`](#module-GRANTA_MIScriptingToolkit.GetLayouts) object
* **Returns:**
  [`GetLayoutsResponse`](#module-GRANTA_MIScriptingToolkit.GetLayoutsResponse) object

#### ResolveReferences(\_req)

Checks whether the specified Granta MI entities exist in the database and, if so, whether the current user has read permissions or write permissions for it.

* **Parameters:**
  **\_req** – [`ResolveReferencesRequest`](#module-GRANTA_MIScriptingToolkit.ResolveReferencesRequest) object
* **Returns:**
  [`ResolveReferencesResponse`](#module-GRANTA_MIScriptingToolkit.ResolveReferencesResponse) object

#### GetUnitConversions(\_req)

Gets all the unit conversions available for a specified unit or unit system.

* **Parameters:**
  **\_req** – [`GetUnitConversionsRequest`](#module-GRANTA_MIScriptingToolkit.GetUnitConversionsRequest) object
* **Returns:**
  [`GetUnitConversionsResponse`](#module-GRANTA_MIScriptingToolkit.GetUnitConversionsResponse) object

#### GetDatasheetPath(\_req)

For each record reference gets the relative portion of an HTTP URL to a Granta MI datasheet, served by MI Viewer.

* **Parameters:**
  **\_req** – [`GetDatasheetPath`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPath) object
* **Returns:**
  [`GetDatasheetPathResponse`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPathResponse) object

#### GetDatasheetPathParameterized(\_req)

Gets information that may be used to construct an HTTP URL to a Granta MI datasheet, served by MI Viewer.

* **Parameters:**
  **\_req** – [`GetDatasheetPathParameterized`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized) object
* **Returns:**
  [`GetDatasheetPathParameterizedResponse`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPathParameterizedResponse) object

<a id="search-service"></a>

<a id="searchservice"></a>

### SearchService

### *class* SearchService(mi_session, retries=0)

The Search service finds Records, within Granta MI Databases, matching specified criteria.

#### SimpleTextSearch(\_req)

Searches for records matching simple text criteria.

* **Parameters:**
  **\_req** – [`SimpleTextSearch`](#module-GRANTA_MIScriptingToolkit.SimpleTextSearch) object
* **Returns:**
  [`SimpleTextSearchResponse`](#module-GRANTA_MIScriptingToolkit.SimpleTextSearchResponse) object

#### CriteriaSearch(\_req)

Searches for records matching attribute-based criteria.

* **Parameters:**
  **\_req** – [`CriteriaSearch`](#module-GRANTA_MIScriptingToolkit.CriteriaSearch) object
* **Returns:**
  [`SimpleTextSearchResponse`](#module-GRANTA_MIScriptingToolkit.SimpleTextSearchResponse) object

#### RecordNameSearch(\_req)

Searches for Records with a given exact Record name.

* **Parameters:**
  **\_req** – [`RecordNameSearchRequest`](#module-GRANTA_MIScriptingToolkit.RecordNameSearchRequest) object
* **Returns:**
  [`SimpleTextSearchResponse`](#module-GRANTA_MIScriptingToolkit.SimpleTextSearchResponse) object

<a id="data-import-service"></a>

<a id="dataimportservice"></a>

### DataImportService

### *class* DataImportService(mi_session, retries=0)

The DataImport service writes data to attributes of records in Granta MI Databases.

#### SetRecordAttributes(\_req)

Sets the data values for the given attribute(s) and record(s) in a Granta MI Database. This method will create any records or folders which do not already exist in the database (however, new folders should be created with ‘EnsureRecordFolderPaths’ instead). Note: This operation can accept an arbitrary number of attributes and records to be imported, but in practice there is a fairly low limit to the amount of data that can be imported in a single operation. Client code should perform large imports in small chunks.

* **Parameters:**
  **\_req** – [`SetRecordAttributesRequest`](#module-GRANTA_MIScriptingToolkit.SetRecordAttributesRequest) object
* **Returns:**
  [`SetRecordAttributesResponse`](#module-GRANTA_MIScriptingToolkit.SetRecordAttributesResponse) object

#### ModifyRecordLinks(\_req)

Adds or removes static Links between record(s) in a Granta MI Database.

* **Parameters:**
  **\_req** – [`ModifyRecordLinksRequest`](#module-GRANTA_MIScriptingToolkit.ModifyRecordLinksRequest) object
* **Returns:**
  [`ModifyRecordLinksResponse`](#module-GRANTA_MIScriptingToolkit.ModifyRecordLinksResponse) object

#### GetUploadAddresses(\_req)

Returns an address to which a datum can be uploaded, for each combination of given sets of records and attributes in a Granta MI database. Each address will be an HTTP or HTTPS URL. The upload service only supports a subset of all available Granta MI attribute types, but this operation will give an address for an attribute of any type.

* **Parameters:**
  **\_req** – [`GetUploadAddressesRequest`](#module-GRANTA_MIScriptingToolkit.GetUploadAddressesRequest) object
* **Returns:**
  [`GetUploadAddressesResponse`](#module-GRANTA_MIScriptingToolkit.GetUploadAddressesResponse) object

#### EnsureRecordFolderPaths(\_req)

Checks whether given hierarchies of folders exist, creating them if not. Each hierarchy is specified as a sequence of tree names; where the folder needs to be created, this name is also used as the full name of the created folder. New folders will be assigned to their parents’ subsets; existing folders are not assigned or removed from any subsets. If a colour is specified, new folders will be of that colour; existing folders’ colours are never changed. Note: this operation can accept an arbitrary number of Record Folder paths to be ensured, but in practice there is a limit to the amount of changes that can be done in a single operation.

* **Parameters:**
  **\_req** – [`EnsureRecordFolderPathsRequest`](#module-GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsRequest) object
* **Returns:**
  [`EnsureRecordFolderPathsResponse`](#module-GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsResponse) object

#### DeleteOrWithdrawIfLatestRecordVersion(\_req)

Deletes or withdraws the latest version of the specified record(s). In a version-controlled table, the latest version of a record can be seen by Write users in Edit mode of MI Viewer. This operation will revert (or delete) unreleased record versions, withdraw released versions, and skip withdrawn versions. In a non-version-controlled table, records will only have one version. This operation will delete specified records of this type. Note: this operation will only act on the latest record version. In the case where the specified record corresponds to a record version that is an earlier version, the operation will return a fault.

* **Parameters:**
  **\_req** – [`DeleteOrWithdrawIfLatestRecordVersionRequest`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest) object
* **Returns:**
  [`DeleteOrWithdrawIfLatestRecordVersionResponse`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionResponse) object

<a id="data-export-service"></a>

<a id="dataexportservice"></a>

### DataExportService

### *class* DataExportService(mi_session, retries=0)

The DataExport service retrieves and returns data from attributes of records in Granta MI Databases.

#### GetRecordAttributesByRef(\_req)

Retrieves the data values for the given attribute(s) and record(s) in a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetRecordAttributesByRefRequest`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest) object
* **Returns:**
  [`GetRecordAttributesByRefResponse`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesByRefResponse) object

<a id="engineering-data-service"></a>

<a id="engineeringdataservice"></a>

### EngineeringDataService

### *class* EngineeringDataService(mi_session, retries=0)

The EngineeringData service provides custom data export operations for a Granta MI Server.

#### GetAvailableExporters(\_req)

Returns the FEA Exporter configurations known to the MI Server, optionally filtering for their applicability to particular situations.

* **Parameters:**
  **\_req** – [`GetAvailableExportersRequest`](#module-GRANTA_MIScriptingToolkit.GetAvailableExportersRequest) object
* **Returns:**
  [`GetAvailableExportersResponse`](#module-GRANTA_MIScriptingToolkit.GetAvailableExportersResponse) object

#### ExportRecordData(\_req)

Performs an FEA Export and returns the result as the response.

* **Parameters:**
  **\_req** – [`ExportRecordDataRequest`](#module-GRANTA_MIScriptingToolkit.ExportRecordDataRequest) object
* **Returns:**
  [`ExportRecordDataResponse`](#module-GRANTA_MIScriptingToolkit.ExportRecordDataResponse) object

#### GetExporterParameters(\_req)

Returns information about the MI Parameter Values that will need to be chosen, to run the specified Exporter on the specified Record(s).

* **Parameters:**
  **\_req** – [`GetExporterParametersRequest`](#module-GRANTA_MIScriptingToolkit.GetExporterParametersRequest) object
* **Returns:**
  [`GetExporterParametersResponse`](#module-GRANTA_MIScriptingToolkit.GetExporterParametersResponse) object

#### ExportersForRecords(\_req)

Returns the FEA Exporter configurations, known to the MI Server, filtering for their applicability to given Record(s) and optionally to particular situations.

* **Parameters:**
  **\_req** – [`ExportersForRecordsRequest`](#module-GRANTA_MIScriptingToolkit.ExportersForRecordsRequest) object
* **Returns:**
  [`ExportersForRecordsResponse`](#module-GRANTA_MIScriptingToolkit.ExportersForRecordsResponse) object

<a id="objects-reference"></a>

## Objects Reference

<a id="module-GRANTA_MIScriptingToolkit.AssociatedRecords"></a>

<a id="associatedrecords"></a>

### AssociatedRecords

<a id="GRANTA_MIScriptingToolkit.AssociatedRecords.AssociatedRecords"></a>

### *class* AssociatedRecords(associatedRecords=None, sourceRecord=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object containing a source [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
object and an array of associated
[`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.

* **Parameters:**
  * **associatedRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **sourceRecord** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

<a id="GRANTA_MIScriptingToolkit.AssociatedRecords.AssociatedRecords.associatedRecords"></a>

#### *property* associatedRecords

Property associatedRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.AssociatedRecords.AssociatedRecords.sourceRecord"></a>

#### *property* sourceRecord

Property sourceRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.AssociatedRecords.AssociatedRecords.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.AttributeAddress"></a>

<a id="attributeaddress"></a>

### AttributeAddress

<a id="GRANTA_MIScriptingToolkit.AttributeAddress.AttributeAddress"></a>

### *class* AttributeAddress(URL=None, attributeID=None, attributeName=None, attributeStandardName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The upload URL of an attribute and an attribute identifier.
The attribute is identified by the identity, name, and where available, standard name.

* **Parameters:**
  * **URL** – type str
  * **attributeID** – type int
  * **attributeName** – type str
  * **attributeStandardName** – type str

<a id="GRANTA_MIScriptingToolkit.AttributeAddress.AttributeAddress.attributeID"></a>

#### *property* attributeID

Property attributeID is of type int.

<a id="GRANTA_MIScriptingToolkit.AttributeAddress.AttributeAddress.attributeName"></a>

#### *property* attributeName

Property attributeName is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeAddress.AttributeAddress.attributeStandardName"></a>

#### *property* attributeStandardName

Property attributeStandardName is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeAddress.AttributeAddress.URL"></a>

#### *property* URL

Property URL is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeAddress.AttributeAddress.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.AttributeCategory"></a>

<a id="attributecategory"></a>

### AttributeCategory

<a id="GRANTA_MIScriptingToolkit.AttributeCategory.AttributeCategory"></a>

### *class* AttributeCategory(categoryAttributeDetails=None, name=None, order=None, recordLinkGroupDetails=None, displayNames=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Gives the details of contents of a category in a layout. Does not include Tabular Data Association
Chains.

* **Parameters:**
  * **categoryAttributeDetails** – type list of [`CategoryAttributeDetail`](#module-GRANTA_MIScriptingToolkit.CategoryAttributeDetail) objects
  * **name** – type str
  * **order** – type int
  * **recordLinkGroupDetails** – type list of [`RecordLinkGroupDetail`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) objects
  * **displayNames** – type list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects

<a id="GRANTA_MIScriptingToolkit.AttributeCategory.AttributeCategory.categoryAttributeDetails"></a>

#### *property* categoryAttributeDetails

Property categoryAttributeDetails is a list of [`CategoryAttributeDetail`](#module-GRANTA_MIScriptingToolkit.CategoryAttributeDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.AttributeCategory.AttributeCategory.recordLinkGroupDetails"></a>

#### *property* recordLinkGroupDetails

Property recordLinkGroupDetails is a list of [`RecordLinkGroupDetail`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.AttributeCategory.AttributeCategory.displayNames"></a>

#### *property* displayNames

Property displayNames is a list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.AttributeCategory.AttributeCategory.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeCategory.AttributeCategory.order"></a>

#### *property* order

Property order is of type int.

<a id="GRANTA_MIScriptingToolkit.AttributeCategory.AttributeCategory.AddCategoryAttributeDetail"></a>

#### AddCategoryAttributeDetail(\_categoryAttributeDetail)

Appends \_categoryAttributeDetail to categoryAttributeDetails property on AttributeCategory C-object.

* **Parameters:**
  **\_categoryAttributeDetail** – object of type CategoryAttributeDetail.

<a id="GRANTA_MIScriptingToolkit.AttributeCategory.AttributeCategory.AddRecordLinkGroupDetail"></a>

#### AddRecordLinkGroupDetail(\_recordLinkGroupDetail)

Appends \_recordLinkGroupDetail to recordLinkGroupDetails property on AttributeCategory C-object.

* **Parameters:**
  **\_recordLinkGroupDetail** – object of type RecordLinkGroupDetail.

<a id="GRANTA_MIScriptingToolkit.AttributeCategory.AttributeCategory.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.AttributeDetail"></a>

<a id="attributedetail"></a>

### AttributeDetail

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail"></a>

### *class* AttributeDetail(about=None, attribute=None, axisName=None, chartable=None, databaseUnit=None, defaultThreshold=None, discreteValues=None, identity=None, isMeta=None, isMultiValued=None, isSearchable=None, isUnique=None, minMax=None, name=None, order=None, revisionInfo=None, tabular=None, type=None, isFunctionalRange=None, isOrdered=None, displayNames=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about an attribute in a Granta MI database.
Does not include values of the attribute. For requests, the name, and type are required.

* **Parameters:**
  * **about** – type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute)
  * **attribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **axisName** – type str
  * **chartable** – type bool
  * **databaseUnit** – type str
  * **defaultThreshold** – type str
  * **discreteValues** – type list of str objects
  * **identity** – type int
  * **isMeta** – type bool
  * **isMultiValued** – type bool
  * **isSearchable** – type bool
  * **isUnique** – type bool
  * **minMax** – type [`MinMax`](#module-GRANTA_MIScriptingToolkit.MinMax)
  * **name** – type str
  * **order** – type int
  * **revisionInfo** – type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo)
  * **tabular** – type [`TabularDetail`](#module-GRANTA_MIScriptingToolkit.TabularDetail)
  * **type** – type str
  * **isFunctionalRange** – type bool
  * **isOrdered** – type bool
  * **displayNames** – type list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.about"></a>

#### *property* about

Property about is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute). Only populated if ‘isMeta’ is True.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.attribute"></a>

#### *property* attribute

Property attribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.axisName"></a>

#### *property* axisName

Property axisName is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.chartable"></a>

#### *property* chartable

Property chartable is of type bool.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.databaseUnit"></a>

#### *property* databaseUnit

Property databaseUnit is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.defaultThreshold"></a>

#### *property* defaultThreshold

Property defaultThreshold is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.discreteValues"></a>

#### *property* discreteValues

Property discreteValues is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.displayNames"></a>

#### *property* displayNames

Property displayNames is a list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.identity"></a>

#### *property* identity

Property identity is of type int.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.isFunctionalRange"></a>

#### *property* isFunctionalRange

Property isFunctionalRange is of type bool.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.isMeta"></a>

#### *property* isMeta

Property isMeta is of type bool. If this is True, the ‘about’ property may have additional information about the related parent attribute.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.isMultiValued"></a>

#### *property* isMultiValued

Property isMultiValued is of type bool.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.isOrdered"></a>

#### *property* isOrdered

Property isOrdered is of type bool.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.isSearchable"></a>

#### *property* isSearchable

Property isSearchable is of type bool.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.isUnique"></a>

#### *property* isUnique

Property isUnique is of type bool.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.minMax"></a>

#### *property* minMax

Property minMax is of type [`MinMax`](#module-GRANTA_MIScriptingToolkit.MinMax).

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.order"></a>

#### *property* order

Property order is of type int.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.revisionInfo"></a>

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.tabular"></a>

#### *property* tabular

Property tabular is of type [`TabularDetail`](#module-GRANTA_MIScriptingToolkit.TabularDetail).

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.type"></a>

#### *property* type

Property type is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeDetail.AttributeDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.AttributeExporterParameters"></a>

<a id="attributeexporterparameters"></a>

### AttributeExporterParameters

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters"></a>

### *class* AttributeExporterParameters(attribute=None, dataPresence=None, graphDomains=None, parameters=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain an attribute along with associated parameters and domains.
All [`Parameters`](#module-GRANTA_MIScriptingToolkit.Parameters) are declared on the MI parameterised
Attribute, even if not used in some combination of
[`Exporter`](#module-GRANTA_MIScriptingToolkit.Exporter) and Record. It also contains the possible
domains in which the fixed Parameter values must be chosen.

* **Parameters:**
  * **attribute** – type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute)
  * **dataPresence** – type int
  * **graphDomains** – type list of [`GraphDomain`](#module-GRANTA_MIScriptingToolkit.GraphDomain) objects
  * **parameters** – type list of [`ExporterParameter`](#module-GRANTA_MIScriptingToolkit.ExporterParameter) objects

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.DataPresence"></a>

#### *class* DataPresence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.DataPresence.Unknown"></a>

#### Unknown *= 0*

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.DataPresence.Present"></a>

#### Present *= 1*

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.DataPresence.NotApplicable"></a>

#### NotApplicable *= 2*

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.DataPresence.Missing"></a>

#### Missing *= 3*

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.DataPresence.DataIncompatibleWithConfiguration"></a>

#### DataIncompatibleWithConfiguration *= 4*

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.graphDomains"></a>

#### *property* graphDomains

Property graphDomains is a list of [`GraphDomain`](#module-GRANTA_MIScriptingToolkit.GraphDomain) objects. Each graph domain contains information on the possible values that the corresponding parameter (by list index) can take.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.parameters"></a>

#### *property* parameters

Property parameters is a list of [`ExporterParameter`](#module-GRANTA_MIScriptingToolkit.ExporterParameter) objects. This is a list of parameters that parameterize the attribute in question.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.attribute"></a>

#### *property* attribute

Property attribute is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute).

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.dataPresence"></a>

#### *property* dataPresence

Property dataPresence is of type int. See [`AttributeExporterParameters.DataPresence`](#GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.DataPresence) for supported values.

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.AddGraphDomain"></a>

#### AddGraphDomain(\_graphDomain)

Appends \_graphDomain to graphDomains property on AttributeExporterParameters C-object.

* **Parameters:**
  **\_graphDomain** – object of type GraphDomain.

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.AddParameter"></a>

#### AddParameter(\_exporterParameter)

Appends \_exporterParameter to parameters property on AttributeExporterParameters C-object.

* **Parameters:**
  **\_exporterParameter** – object of type ExporterParameter.

<a id="GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.AttributeMetaAttributes"></a>

<a id="attributemetaattributes"></a>

### AttributeMetaAttributes

<a id="GRANTA_MIScriptingToolkit.AttributeMetaAttributes.AttributeMetaAttributes"></a>

### *class* AttributeMetaAttributes(metaAttributes=None, parentAttribute=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Lists the Meta-Attributes of a particular Attribute in a Granta MI Database Table.

* **Parameters:**
  * **metaAttributes** – type list of [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute) objects
  * **parentAttribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)

<a id="GRANTA_MIScriptingToolkit.AttributeMetaAttributes.AttributeMetaAttributes.metaAttributes"></a>

#### *property* metaAttributes

Property metaAttributes is a list of [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.AttributeMetaAttributes.AttributeMetaAttributes.parentAttribute"></a>

#### *property* parentAttribute

Property parentAttribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

<a id="GRANTA_MIScriptingToolkit.AttributeMetaAttributes.AttributeMetaAttributes.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.AttributeReference"></a>

<a id="attributereference"></a>

### AttributeReference

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference"></a>

### *class* AttributeReference(DBKey=None, attributeID=None, isStandardName=None, name=None, partialTableReference=None, pseudoAttribute=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Identification of a particular attribute in a Granta MI database.
For requests, a DBKey is required and either the attribute ID or the attribute name. If the name is
not a standard name, then a
[`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference) is also required.

* **Parameters:**
  * **DBKey** – type str
  * **attributeID** – type int
  * **isStandardName** – type bool
  * **name** – type str
  * **partialTableReference** – type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference)
  * **pseudoAttribute** – type int

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference"></a>

#### *class* MIPseudoAttributeReference

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.name"></a>

#### name *= 0*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.shortName"></a>

#### shortName *= 1*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.subsets"></a>

#### subsets *= 2*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.releasedDate"></a>

#### releasedDate *= 3*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.modifiedDate"></a>

#### modifiedDate *= 4*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordType"></a>

#### recordType *= 5*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordHistoryIdentity"></a>

#### recordHistoryIdentity *= 6*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordColor"></a>

#### recordColor *= 7*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordVersionNumber"></a>

#### recordVersionNumber *= 12*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.tableName"></a>

#### tableName *= 13*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.writable"></a>

#### writable *= 16*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.parentName"></a>

#### parentName *= 17*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.parentShortName"></a>

#### parentShortName *= 18*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.parentRecordHistoryIdentity"></a>

#### parentRecordHistoryIdentity *= 19*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.createdDate"></a>

#### createdDate *= 21*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.creator"></a>

#### creator *= 22*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference.lastModifier"></a>

#### lastModifier *= 23*

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.attributeID"></a>

#### *property* attributeID

Property attributeID is of type int.

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.isStandardName"></a>

#### *property* isStandardName

Property isStandardName is of type bool.

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.partialTableReference"></a>

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.pseudoAttribute"></a>

#### *property* pseudoAttribute

Property pseudoAttribute is of type int. See [`AttributeReference.MIPseudoAttributeReference`](#GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference) for supported values.

<a id="GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.AttributeValue"></a>

<a id="attributevalue"></a>

### AttributeValue

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue"></a>

### *class* AttributeValue(attributeID=None, attributeName=None, attributeStandardName=None, dataType=None, dateDataType=None, dateTimeDataType=None, discreteDataValue=None, fileDataType=None, floatFunctionalGriddedDataType=None, floatFunctionalSeriesDataType=None, hyperlinkDataValue=None, integerDataValue=None, logicalDataValue=None, longTextDataType=None, pictureDataType=None, pointDataType=None, rangeDataType=None, shortTextDataType=None, subsetsDataType=None, tabularDataType=None, discreteFunctionalGriddedDataType=None, discreteFunctionalSeriesDataType=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type representing the value of a piece of data for a particular attribute. Access supported data
types, and the attribute identity by Name, ID, or Standard Name.

* **Parameters:**
  * **attributeID** – type int
  * **attributeName** – type str
  * **attributeStandardName** – type str
  * **dataType** – type str
  * **dateDataType** – type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType)
  * **dateTimeDataType** – type [`DateTimeDataType`](#module-GRANTA_MIScriptingToolkit.DateTimeDataType)
  * **discreteDataValue** – type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType)
  * **fileDataType** – type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType)
  * **floatFunctionalGriddedDataType** – type [`FloatFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType)
  * **floatFunctionalSeriesDataType** – type [`FloatFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType)
  * **hyperlinkDataValue** – type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType)
  * **integerDataValue** – type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType)
  * **logicalDataValue** – type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType)
  * **longTextDataType** – type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType)
  * **pictureDataType** – type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType)
  * **pointDataType** – type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType)
  * **rangeDataType** – type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType)
  * **shortTextDataType** – type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType)
  * **subsetsDataType** – type [`SubsetsDataType`](#module-GRANTA_MIScriptingToolkit.SubsetsDataType)
  * **tabularDataType** – type [`TabularDataType`](#module-GRANTA_MIScriptingToolkit.TabularDataType)
  * **discreteFunctionalGriddedDataType** – type [`DiscreteFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType)
  * **discreteFunctionalSeriesDataType** – type [`DiscreteFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType)

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.attributeID"></a>

#### *property* attributeID

Property attributeID is of type int.

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.attributeName"></a>

#### *property* attributeName

Property attributeName is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.attributeStandardName"></a>

#### *property* attributeStandardName

Property attributeStandardName is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.dataType"></a>

#### *property* dataType

Property dataType is of type str.

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.dateDataType"></a>

#### *property* dateDataType

Property dateDataType is of type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.dateTimeDataType"></a>

#### *property* dateTimeDataType

Property dateTimeDataType is of type [`DateTimeDataType`](#module-GRANTA_MIScriptingToolkit.DateTimeDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.discreteDataValue"></a>

#### *property* discreteDataValue

Property discreteDataValue is of type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.discreteFunctionalGriddedDataType"></a>

#### *property* discreteFunctionalGriddedDataType

Property discreteFunctionalGriddedDataType is of type [`DiscreteFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.discreteFunctionalSeriesDataType"></a>

#### *property* discreteFunctionalSeriesDataType

Property discreteFunctionalSeriesDataType is of type [`DiscreteFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.fileDataType"></a>

#### *property* fileDataType

Property fileDataType is of type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.floatFunctionalGriddedDataType"></a>

#### *property* floatFunctionalGriddedDataType

Property floatFunctionalGriddedDataType is of type [`FloatFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.floatFunctionalSeriesDataType"></a>

#### *property* floatFunctionalSeriesDataType

Property floatFunctionalSeriesDataType is of type [`FloatFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.hyperlinkDataValue"></a>

#### *property* hyperlinkDataValue

Property hyperlinkDataValue is of type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.integerDataValue"></a>

#### *property* integerDataValue

Property integerDataValue is of type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.logicalDataValue"></a>

#### *property* logicalDataValue

Property logicalDataValue is of type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.longTextDataType"></a>

#### *property* longTextDataType

Property longTextDataType is of type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.pictureDataType"></a>

#### *property* pictureDataType

Property pictureDataType is of type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.pointDataType"></a>

#### *property* pointDataType

Property pointDataType is of type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.rangeDataType"></a>

#### *property* rangeDataType

Property rangeDataType is of type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.shortTextDataType"></a>

#### *property* shortTextDataType

Property shortTextDataType is of type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.subsetsDataType"></a>

#### *property* subsetsDataType

Property subsetsDataType is of type [`SubsetsDataType`](#module-GRANTA_MIScriptingToolkit.SubsetsDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.tabularDataType"></a>

#### *property* tabularDataType

Property tabularDataType is of type [`TabularDataType`](#module-GRANTA_MIScriptingToolkit.TabularDataType).

<a id="GRANTA_MIScriptingToolkit.AttributeValue.AttributeValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.BetweenDateTimesSearchValue"></a>

<a id="betweendatetimessearchvalue"></a>

### BetweenDateTimesSearchValue

<a id="GRANTA_MIScriptingToolkit.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue"></a>

### *class* BetweenDateTimesSearchValue(highEnd=None, lowEnd=None, tabularColumn=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data between two times.
This criterion type is specific to DateTime Attributes. Both a LowEnd and a HighEnd value are
required. The date format is in XSD’s dateTime data type (YYYY-MM-DDThh:mm:ss).

* **Parameters:**
  * **highEnd** – type str
  * **lowEnd** – type str
  * **tabularColumn** – type str

<a id="GRANTA_MIScriptingToolkit.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue.highEnd"></a>

#### *property* highEnd

Property highEnd is of type str.

<a id="GRANTA_MIScriptingToolkit.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue.lowEnd"></a>

#### *property* lowEnd

Property lowEnd is of type str.

<a id="GRANTA_MIScriptingToolkit.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.BetweenSearchValue"></a>

<a id="betweensearchvalue"></a>

### BetweenSearchValue

<a id="GRANTA_MIScriptingToolkit.BetweenSearchValue.BetweenSearchValue"></a>

### *class* BetweenSearchValue(highEnd=None, lowEnd=None, tabularColumn=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data between two values.
Only Point, Range, and Integer attributes are supported by this search criteria. Both a LowEnd and a
HighEnd value are required.

* **Parameters:**
  * **highEnd** – type [`HighEndSearchValue`](#module-GRANTA_MIScriptingToolkit.HighEndSearchValue)
  * **lowEnd** – type [`LowEndSearchValue`](#module-GRANTA_MIScriptingToolkit.LowEndSearchValue)
  * **tabularColumn** – type str

<a id="GRANTA_MIScriptingToolkit.BetweenSearchValue.BetweenSearchValue.highEnd"></a>

#### *property* highEnd

Property highEnd is of type [`HighEndSearchValue`](#module-GRANTA_MIScriptingToolkit.HighEndSearchValue).

<a id="GRANTA_MIScriptingToolkit.BetweenSearchValue.BetweenSearchValue.lowEnd"></a>

#### *property* lowEnd

Property lowEnd is of type [`LowEndSearchValue`](#module-GRANTA_MIScriptingToolkit.LowEndSearchValue).

<a id="GRANTA_MIScriptingToolkit.BetweenSearchValue.BetweenSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.BetweenSearchValue.BetweenSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.BinaryDataSettings"></a>

<a id="binarydatasettings"></a>

### BinaryDataSettings

<a id="GRANTA_MIScriptingToolkit.BinaryDataSettings.BinaryDataSettings"></a>

### *class* BinaryDataSettings(binaryDataRepresentation=None, maxImageSize=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Settings for exporting file and picture data.

* **Parameters:**
  * **binaryDataRepresentation** – type int
  * **maxImageSize** – type [`RasterSize`](#module-GRANTA_MIScriptingToolkit.RasterSize)

<a id="GRANTA_MIScriptingToolkit.BinaryDataSettings.BinaryDataSettings.binaryDataRepresentation"></a>

#### *property* binaryDataRepresentation

Property binaryDataRepresentation is of type int. See [`GRANTA_Constants.BinaryDataRepresentation`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.BinaryDataSettings.BinaryDataSettings.maxImageSize"></a>

#### *property* maxImageSize

Property maxImageSize is of type [`RasterSize`](#module-GRANTA_MIScriptingToolkit.RasterSize).

<a id="GRANTA_MIScriptingToolkit.BinaryDataSettings.BinaryDataSettings.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="id1"></a>

### BrowseService

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService"></a>

### *class* BrowseService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

The Browse service provides read-only operation for a Granta MI Server.

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetDatabases"></a>

#### GetDatabases()

List the databases available on the Granta MI Server.

* **Returns:**
  [`GetDatabasesResponse`](#module-GRANTA_MIScriptingToolkit.GetDatabasesResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetTables"></a>

#### GetTables(\_req)

List the tables contained in a particular Granta MI Database.

* **Parameters:**
  **\_req** – [`GetTables`](#module-GRANTA_MIScriptingToolkit.GetTables) object
* **Returns:**
  [`GetTablesResponse`](#module-GRANTA_MIScriptingToolkit.GetTablesResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetRootNode"></a>

#### GetRootNode(\_req)

Returns information about the root node of a particular Table in a Granta MI Database. This can be passed to GetChildNodes operation to find the contents of the rest of the node-tree of the Table.

* **Parameters:**
  **\_req** – [`GetRootNode`](#module-GRANTA_MIScriptingToolkit.GetRootNode) object
* **Returns:**
  [`GetRootNodeResponse`](#module-GRANTA_MIScriptingToolkit.GetRootNodeResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetChildNodes"></a>

#### GetChildNodes(\_req)

Returns information about the child nodes of the given node in the node-tree of a Granta MI Table.

* **Parameters:**
  **\_req** – [`GetChildNodes`](#module-GRANTA_MIScriptingToolkit.GetChildNodes) object
* **Returns:**
  [`GetChildNodesResponse`](#module-GRANTA_MIScriptingToolkit.GetChildNodesResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetSubsets"></a>

#### GetSubsets(\_req)

List the Subsets for a Granta MI Database or for one Table in a Database.

* **Parameters:**
  **\_req** – [`GetSubsetsRequest`](#module-GRANTA_MIScriptingToolkit.GetSubsetsRequest) object
* **Returns:**
  [`GetSubsetsResponse`](#module-GRANTA_MIScriptingToolkit.GetSubsetsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetAssociatedRecords"></a>

#### GetAssociatedRecords(\_req)

Returns all the Records, in a single target Table, that are associated with each of a given set of source Records, via Tabular Data links. These links can be in the forward or reverse direction. Note that, if there is more than one Tabular Attribute linking the source and target Tables, the Associated Records are the union of all those linked by each of the Tabular Attributes.

* **Parameters:**
  **\_req** – [`GetAssociatedRecordsRequest`](#module-GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest) object
* **Returns:**
  [`GetAssociatedRecordsResponse`](#module-GRANTA_MIScriptingToolkit.GetAssociatedRecordsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetAttributeDetails"></a>

#### GetAttributeDetails(\_req)

Returns detailed meta-information about given Attribute(s) in a Granta MI Database. Does not retrieve values of the Data; for that, use the DataExport service.

* **Parameters:**
  **\_req** – [`GetAttributeDetailsRequest`](#module-GRANTA_MIScriptingToolkit.GetAttributeDetailsRequest) object
* **Returns:**
  [`GetAttributeDetailsResponse`](#module-GRANTA_MIScriptingToolkit.GetAttributeDetailsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetTreeRecords"></a>

#### GetTreeRecords(\_req)

Returns name, record type, and some tree information for the given record(s). Does not retrieve the tree children; for that, use the GetChildRecords operation.

* **Parameters:**
  **\_req** – [`GetTreeRecordsRequest`](#module-GRANTA_MIScriptingToolkit.GetTreeRecordsRequest) object
* **Returns:**
  [`GetTreeRecordsResponse`](#module-GRANTA_MIScriptingToolkit.GetTreeRecordsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetRecordAttributes"></a>

#### GetRecordAttributes(\_req)

Returns information about which Attributes have Data, for given Record(s). Includes information about when Data was created and retired, in a Version-Controlled Table. Does not retrieve values of the Data; for that, use the DataExport or EngineeringData services.

* **Parameters:**
  **\_req** – [`GetRecordAttributesRequest`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesRequest) object
* **Returns:**
  [`GetRecordAttributesResponse`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetUnitSystems"></a>

#### GetUnitSystems(\_req)

Returns information about the unit systems known to a Granta MI Database

* **Parameters:**
  **\_req** – [`GetUnitSystems`](#module-GRANTA_MIScriptingToolkit.GetUnitSystems) object
* **Returns:**
  [`GetUnitSystemsResponse`](#module-GRANTA_MIScriptingToolkit.GetUnitSystemsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetRecordVersions"></a>

#### GetRecordVersions(\_req)

Returns version information about the records specified in the request object.

* **Parameters:**
  **\_req** – [`GetRecordVersionsRequest`](#module-GRANTA_MIScriptingToolkit.GetRecordVersionsRequest) object
* **Returns:**
  [`GetRecordVersionsResponse`](#module-GRANTA_MIScriptingToolkit.GetRecordVersionsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetRecordLinkGroups"></a>

#### GetRecordLinkGroups(\_req)

Gets details of Record Link Groups in a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetRecordLinkGroups`](#module-GRANTA_MIScriptingToolkit.GetRecordLinkGroups) object
* **Returns:**
  [`GetRecordLinkGroupsResponse`](#module-GRANTA_MIScriptingToolkit.GetRecordLinkGroupsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetLinkedRecords"></a>

#### GetLinkedRecords(\_req)

Returns the linked records for specified records, for one or more record link groups.

* **Parameters:**
  **\_req** – [`GetLinkedRecordsRequest`](#module-GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest) object
* **Returns:**
  [`GetLinkedRecordsResponse`](#module-GRANTA_MIScriptingToolkit.GetLinkedRecordsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetAttributeParameters"></a>

#### GetAttributeParameters(\_req)

Gets detailed information about the Parameters that are declared to be usable with given Attribute(s) in a Granta MI Database. Can only be used with Functional Attributes or Multi-Valued Attributes.

* **Parameters:**
  **\_req** – [`GetAttributeParametersRequest`](#module-GRANTA_MIScriptingToolkit.GetAttributeParametersRequest) object
* **Returns:**
  [`GetAttributeParametersResponse`](#module-GRANTA_MIScriptingToolkit.GetAttributeParametersResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetParameterDetails"></a>

#### GetParameterDetails(\_req)

Returns detailed information about the given Parameter(s) in a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetParameterDetailsRequest`](#module-GRANTA_MIScriptingToolkit.GetParameterDetailsRequest) object
* **Returns:**
  [`GetParameterDetailsResponse`](#module-GRANTA_MIScriptingToolkit.GetParameterDetailsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetMetaAttributes"></a>

#### GetMetaAttributes(\_req)

Returns the Meta-Attributes of one or more parent Attributes in a Table of a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetMetaAttributesRequest`](#module-GRANTA_MIScriptingToolkit.GetMetaAttributesRequest) object
* **Returns:**
  [`GetMetaAttributesResponse`](#module-GRANTA_MIScriptingToolkit.GetMetaAttributesResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetDatabaseParameters"></a>

#### GetDatabaseParameters(\_req)

List the parameter(s) in a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetDatabaseParameters`](#module-GRANTA_MIScriptingToolkit.GetDatabaseParameters) object
* **Returns:**
  [`GetDatabaseParametersResponse`](#module-GRANTA_MIScriptingToolkit.GetDatabaseParametersResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetIntegrationProfiles"></a>

#### GetIntegrationProfiles(\_req)

List the profiles available on a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetIntegrationProfiles`](#module-GRANTA_MIScriptingToolkit.GetIntegrationProfiles) object
* **Returns:**
  [`GetIntegrationProfilesResponse`](#module-GRANTA_MIScriptingToolkit.GetIntegrationProfilesResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetLayouts"></a>

#### GetLayouts(\_req)

List the Layouts for an MI Database or for one Table in a Database.

* **Parameters:**
  **\_req** – [`GetLayouts`](#module-GRANTA_MIScriptingToolkit.GetLayouts) object
* **Returns:**
  [`GetLayoutsResponse`](#module-GRANTA_MIScriptingToolkit.GetLayoutsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.ResolveReferences"></a>

#### ResolveReferences(\_req)

Checks whether the specified Granta MI entities exist in the database and, if so, whether the current user has read permissions or write permissions for it.

* **Parameters:**
  **\_req** – [`ResolveReferencesRequest`](#module-GRANTA_MIScriptingToolkit.ResolveReferencesRequest) object
* **Returns:**
  [`ResolveReferencesResponse`](#module-GRANTA_MIScriptingToolkit.ResolveReferencesResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetUnitConversions"></a>

#### GetUnitConversions(\_req)

Gets all the unit conversions available for a specified unit or unit system.

* **Parameters:**
  **\_req** – [`GetUnitConversionsRequest`](#module-GRANTA_MIScriptingToolkit.GetUnitConversionsRequest) object
* **Returns:**
  [`GetUnitConversionsResponse`](#module-GRANTA_MIScriptingToolkit.GetUnitConversionsResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetDatasheetPath"></a>

#### GetDatasheetPath(\_req)

For each record reference gets the relative portion of an HTTP URL to a Granta MI datasheet, served by MI Viewer.

* **Parameters:**
  **\_req** – [`GetDatasheetPath`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPath) object
* **Returns:**
  [`GetDatasheetPathResponse`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPathResponse) object

<a id="GRANTA_MIScriptingToolkit.BrowseService.BrowseService.GetDatasheetPathParameterized"></a>

#### GetDatasheetPathParameterized(\_req)

Gets information that may be used to construct an HTTP URL to a Granta MI datasheet, served by MI Viewer.

* **Parameters:**
  **\_req** – [`GetDatasheetPathParameterized`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized) object
* **Returns:**
  [`GetDatasheetPathParameterizedResponse`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPathParameterizedResponse) object

<a id="module-GRANTA_MIScriptingToolkit.CategoryAttributeDetail"></a>

<a id="categoryattributedetail"></a>

### CategoryAttributeDetail

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail"></a>

### *class* CategoryAttributeDetail(about=None, attribute=None, axisName=None, chartable=None, databaseUnit=None, defaultThreshold=None, discreteValues=None, helpInfo=None, identity=None, isMeta=None, isMultiValued=None, isReadOnly=None, isRequired=None, isSearchable=None, name=None, order=None, revisionInfo=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Gives the attribute details with a client read only and is required flag.

* **Parameters:**
  * **about** – type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute)
  * **attribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **axisName** – type str
  * **chartable** – type bool
  * **databaseUnit** – type str
  * **defaultThreshold** – type str
  * **discreteValues** – type list of str objects
  * **helpInfo** – type [`HelpInfo`](#module-GRANTA_MIScriptingToolkit.HelpInfo)
  * **identity** – type int
  * **isMeta** – type bool
  * **isMultiValued** – type bool
  * **isReadOnly** – type bool
  * **isRequired** – type bool
  * **isSearchable** – type bool
  * **name** – type str
  * **order** – type int
  * **revisionInfo** – type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo)
  * **type** – type str

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.about"></a>

#### *property* about

Property about is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute).

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.attribute"></a>

#### *property* attribute

Property attribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.axisName"></a>

#### *property* axisName

Property axisName is of type str.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.chartable"></a>

#### *property* chartable

Property chartable is of type bool.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.databaseUnit"></a>

#### *property* databaseUnit

Property databaseUnit is of type str.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.defaultThreshold"></a>

#### *property* defaultThreshold

Property defaultThreshold is of type str.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.discreteValues"></a>

#### *property* discreteValues

Property discreteValues is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.helpInfo"></a>

#### *property* helpInfo

Property helpInfo is of type [`HelpInfo`](#module-GRANTA_MIScriptingToolkit.HelpInfo).

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.identity"></a>

#### *property* identity

Property identity is of type int.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.isMeta"></a>

#### *property* isMeta

Property isMeta is of type bool.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.isMultiValued"></a>

#### *property* isMultiValued

Property isMultiValued is of type bool.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.isReadOnly"></a>

#### *property* isReadOnly

Property isReadOnly is of type bool.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.isRequired"></a>

#### *property* isRequired

Property isRequired is of type bool.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.isSearchable"></a>

#### *property* isSearchable

Property isSearchable is of type bool.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.order"></a>

#### *property* order

Property order is of type int.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.revisionInfo"></a>

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.type"></a>

#### *property* type

Property type is of type str.

<a id="GRANTA_MIScriptingToolkit.CategoryAttributeDetail.CategoryAttributeDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.Constraint"></a>

<a id="constraint"></a>

### Constraint

<a id="GRANTA_MIScriptingToolkit.Constraint.Constraint"></a>

### *class* Constraint(label=None, parameter=None, parameterValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A constraint on functional data.
For requests, both parameter and parameter value are required.

* **Parameters:**
  * **label** – type str
  * **parameter** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)

<a id="GRANTA_MIScriptingToolkit.Constraint.Constraint.label"></a>

#### *property* label

Property label is of type str.

<a id="GRANTA_MIScriptingToolkit.Constraint.Constraint.parameter"></a>

#### *property* parameter

Property parameter is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

<a id="GRANTA_MIScriptingToolkit.Constraint.Constraint.parameterValue"></a>

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

<a id="GRANTA_MIScriptingToolkit.Constraint.Constraint.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.Constraints"></a>

<a id="constraints"></a>

### Constraints

<a id="GRANTA_MIScriptingToolkit.Constraints.Constraints"></a>

### *class* Constraints(constraints=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A container of constraints.

* **Parameters:**
  **constraints** – type list of [`Constraint`](#module-GRANTA_MIScriptingToolkit.Constraint) objects

<a id="GRANTA_MIScriptingToolkit.Constraints.Constraints.constraints"></a>

#### *property* constraints

Property constraints is a list of [`Constraint`](#module-GRANTA_MIScriptingToolkit.Constraint) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.Constraints.Constraints.AddConstraint"></a>

#### AddConstraint(\_constraint)

Appends \_constraint to constraints property on Constraints C-object.

* **Parameters:**
  **\_constraint** – object of type Constraint.

<a id="GRANTA_MIScriptingToolkit.Constraints.Constraints.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ContainsAllSearchValue"></a>

<a id="containsallsearchvalue"></a>

### ContainsAllSearchValue

<a id="GRANTA_MIScriptingToolkit.ContainsAllSearchValue.ContainsAllSearchValue"></a>

### *class* ContainsAllSearchValue(tabularColumn=None, values=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for discrete data types that contain all of the specified search values.
If the discrete values of the data include further values, it still passes. This criterion type is
specific to discrete attributes.

* **Parameters:**
  * **tabularColumn** – type str
  * **values** – type list of str objects

<a id="GRANTA_MIScriptingToolkit.ContainsAllSearchValue.ContainsAllSearchValue.values"></a>

#### *property* values

Property values is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ContainsAllSearchValue.ContainsAllSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.ContainsAllSearchValue.ContainsAllSearchValue.AddValue"></a>

#### AddValue(value)

Appends value to values property on ContainsAllSearchValue C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

<a id="GRANTA_MIScriptingToolkit.ContainsAllSearchValue.ContainsAllSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ContainsAnySearchValue"></a>

<a id="containsanysearchvalue"></a>

### ContainsAnySearchValue

<a id="GRANTA_MIScriptingToolkit.ContainsAnySearchValue.ContainsAnySearchValue"></a>

### *class* ContainsAnySearchValue(tabularColumn=None, values=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for discrete data types that contain any of the specified search values.
This criterion type is specific to discrete attributes.

* **Parameters:**
  * **tabularColumn** – type str
  * **values** – type list of str objects

<a id="GRANTA_MIScriptingToolkit.ContainsAnySearchValue.ContainsAnySearchValue.values"></a>

#### *property* values

Property values is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ContainsAnySearchValue.ContainsAnySearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.ContainsAnySearchValue.ContainsAnySearchValue.AddValue"></a>

#### AddValue(value)

Appends value to values property on ContainsAnySearchValue C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

<a id="GRANTA_MIScriptingToolkit.ContainsAnySearchValue.ContainsAnySearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ContainsSearchValue"></a>

<a id="containssearchvalue"></a>

### ContainsSearchValue

<a id="GRANTA_MIScriptingToolkit.ContainsSearchValue.ContainsSearchValue"></a>

### *class* ContainsSearchValue(tabularColumn=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data that contains the specified search text value.
Search criterion applies to text, logical, and discrete attributes. For logicals, specify ‘true’ or
‘false’ as the text.

* **Parameters:**
  * **tabularColumn** – type str
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.ContainsSearchValue.ContainsSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.ContainsSearchValue.ContainsSearchValue.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.ContainsSearchValue.ContainsSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.CriteriaSearch"></a>

<a id="criteriasearch"></a>

### CriteriaSearch

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch"></a>

### *class* CriteriaSearch(DBKey=None, parameterValues=None, populateGUIDs=None, recordFilter=None, searchCriteria=None, searchFilter=None, searchMode=None, significantFigures=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input for the CriteriaSearch operation.
Both the DBKey and searchCriteria parameters are required. If no subsets are specified, only the
default subset will be searched.

* **Parameters:**
  * **DBKey** – type str
  * **parameterValues** – type list of [`UnittedParameterValue`](#module-GRANTA_MIScriptingToolkit.UnittedParameterValue) objects
  * **populateGUIDs** – type bool
  * **recordFilter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **searchCriteria** – type list of [`RecordSearchCriterion`](#module-GRANTA_MIScriptingToolkit.RecordSearchCriterion) objects
  * **searchFilter** – type int
  * **searchMode** – type int
  * **significantFigures** – type int

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.parameterValues"></a>

#### *property* parameterValues

Property parameterValues is a list of [`UnittedParameterValue`](#module-GRANTA_MIScriptingToolkit.UnittedParameterValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.searchCriteria"></a>

#### *property* searchCriteria

Property searchCriteria is a list of [`RecordSearchCriterion`](#module-GRANTA_MIScriptingToolkit.RecordSearchCriterion) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.populateGUIDs"></a>

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.recordFilter"></a>

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.searchFilter"></a>

#### *property* searchFilter

Property searchFilter is of type int. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.searchMode"></a>

#### *property* searchMode

Property searchMode is of type int. See [`GRANTA_Constants.SearchMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.significantFigures"></a>

#### *property* significantFigures

Property significantFigures is of type int.

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.AddParameterValue"></a>

#### AddParameterValue(\_unittedParameterValue)

Appends \_unittedParameterValue to parameterValues property on CriteriaSearch C-object.

* **Parameters:**
  **\_unittedParameterValue** – object of type UnittedParameterValue.

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.AddSearchCriteria"></a>

#### AddSearchCriteria(\_recordSearchCriterion)

Appends \_recordSearchCriterion to searchCriteria property on CriteriaSearch C-object.

* **Parameters:**
  **\_recordSearchCriterion** – object of type RecordSearchCriterion.

<a id="GRANTA_MIScriptingToolkit.CriteriaSearch.CriteriaSearch.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="id2"></a>

### DataExportService

<a id="GRANTA_MIScriptingToolkit.DataExportService.DataExportService"></a>

### *class* DataExportService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

The DataExport service retrieves and returns data from attributes of records in Granta MI Databases.

<a id="GRANTA_MIScriptingToolkit.DataExportService.DataExportService.GetRecordAttributesByRef"></a>

#### GetRecordAttributesByRef(\_req)

Retrieves the data values for the given attribute(s) and record(s) in a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetRecordAttributesByRefRequest`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest) object
* **Returns:**
  [`GetRecordAttributesByRefResponse`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesByRefResponse) object

<a id="id3"></a>

### DataImportService

<a id="GRANTA_MIScriptingToolkit.DataImportService.DataImportService"></a>

### *class* DataImportService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

The DataImport service writes data to attributes of records in Granta MI Databases.

<a id="GRANTA_MIScriptingToolkit.DataImportService.DataImportService.SetRecordAttributes"></a>

#### SetRecordAttributes(\_req)

Sets the data values for the given attribute(s) and record(s) in a Granta MI Database. This method will create any records or folders which do not already exist in the database (however, new folders should be created with ‘EnsureRecordFolderPaths’ instead). Note: This operation can accept an arbitrary number of attributes and records to be imported, but in practice there is a fairly low limit to the amount of data that can be imported in a single operation. Client code should perform large imports in small chunks.

* **Parameters:**
  **\_req** – [`SetRecordAttributesRequest`](#module-GRANTA_MIScriptingToolkit.SetRecordAttributesRequest) object
* **Returns:**
  [`SetRecordAttributesResponse`](#module-GRANTA_MIScriptingToolkit.SetRecordAttributesResponse) object

<a id="GRANTA_MIScriptingToolkit.DataImportService.DataImportService.ModifyRecordLinks"></a>

#### ModifyRecordLinks(\_req)

Adds or removes static Links between record(s) in a Granta MI Database.

* **Parameters:**
  **\_req** – [`ModifyRecordLinksRequest`](#module-GRANTA_MIScriptingToolkit.ModifyRecordLinksRequest) object
* **Returns:**
  [`ModifyRecordLinksResponse`](#module-GRANTA_MIScriptingToolkit.ModifyRecordLinksResponse) object

<a id="GRANTA_MIScriptingToolkit.DataImportService.DataImportService.GetUploadAddresses"></a>

#### GetUploadAddresses(\_req)

Returns an address to which a datum can be uploaded, for each combination of given sets of records and attributes in a Granta MI database. Each address will be an HTTP or HTTPS URL. The upload service only supports a subset of all available Granta MI attribute types, but this operation will give an address for an attribute of any type.

* **Parameters:**
  **\_req** – [`GetUploadAddressesRequest`](#module-GRANTA_MIScriptingToolkit.GetUploadAddressesRequest) object
* **Returns:**
  [`GetUploadAddressesResponse`](#module-GRANTA_MIScriptingToolkit.GetUploadAddressesResponse) object

<a id="GRANTA_MIScriptingToolkit.DataImportService.DataImportService.EnsureRecordFolderPaths"></a>

#### EnsureRecordFolderPaths(\_req)

Checks whether given hierarchies of folders exist, creating them if not. Each hierarchy is specified as a sequence of tree names; where the folder needs to be created, this name is also used as the full name of the created folder. New folders will be assigned to their parents’ subsets; existing folders are not assigned or removed from any subsets. If a colour is specified, new folders will be of that colour; existing folders’ colours are never changed. Note: this operation can accept an arbitrary number of Record Folder paths to be ensured, but in practice there is a limit to the amount of changes that can be done in a single operation.

* **Parameters:**
  **\_req** – [`EnsureRecordFolderPathsRequest`](#module-GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsRequest) object
* **Returns:**
  [`EnsureRecordFolderPathsResponse`](#module-GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsResponse) object

<a id="GRANTA_MIScriptingToolkit.DataImportService.DataImportService.DeleteOrWithdrawIfLatestRecordVersion"></a>

#### DeleteOrWithdrawIfLatestRecordVersion(\_req)

Deletes or withdraws the latest version of the specified record(s). In a version-controlled table, the latest version of a record can be seen by Write users in Edit mode of MI Viewer. This operation will revert (or delete) unreleased record versions, withdraw released versions, and skip withdrawn versions. In a non-version-controlled table, records will only have one version. This operation will delete specified records of this type. Note: this operation will only act on the latest record version. In the case where the specified record corresponds to a record version that is an earlier version, the operation will return a fault.

* **Parameters:**
  **\_req** – [`DeleteOrWithdrawIfLatestRecordVersionRequest`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest) object
* **Returns:**
  [`DeleteOrWithdrawIfLatestRecordVersionResponse`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionResponse) object

<a id="module-GRANTA_MIScriptingToolkit.DatabaseDetail"></a>

<a id="databasedetail"></a>

### DatabaseDetail

<a id="GRANTA_MIScriptingToolkit.DatabaseDetail.DatabaseDetail"></a>

### *class* DatabaseDetail(DBKey=None, author=None, company=None, volumeName=None, DBGUID=None, DBVersionGUID=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a Granta MI database.

* **Parameters:**
  * **DBKey** – type str
  * **author** – type str
  * **company** – type str
  * **volumeName** – type str
  * **DBGUID** – type str
  * **DBVersionGUID** – type str

<a id="GRANTA_MIScriptingToolkit.DatabaseDetail.DatabaseDetail.author"></a>

#### *property* author

Property author is of type str.

<a id="GRANTA_MIScriptingToolkit.DatabaseDetail.DatabaseDetail.company"></a>

#### *property* company

Property company is of type str.

<a id="GRANTA_MIScriptingToolkit.DatabaseDetail.DatabaseDetail.DBGUID"></a>

#### *property* DBGUID

Property DBGUID is of type str.

<a id="GRANTA_MIScriptingToolkit.DatabaseDetail.DatabaseDetail.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.DatabaseDetail.DatabaseDetail.DBVersionGUID"></a>

#### *property* DBVersionGUID

Property DBVersionGUID is of type str.

<a id="GRANTA_MIScriptingToolkit.DatabaseDetail.DatabaseDetail.volumeName"></a>

#### *property* volumeName

Property volumeName is of type str.

<a id="GRANTA_MIScriptingToolkit.DatabaseDetail.DatabaseDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DatabaseRevision"></a>

<a id="databaserevision"></a>

### DatabaseRevision

<a id="GRANTA_MIScriptingToolkit.DatabaseRevision.DatabaseRevision"></a>

### *class* DatabaseRevision(revisionDate=None, revisionNote=None, username=None, hasRevisionNote=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a specific database revision. Includes the author, the date and time, and the
transaction note (if present).

* **Parameters:**
  * **revisionDate** – type str
  * **revisionNote** – type str
  * **username** – type str
  * **hasRevisionNote** – type bool

<a id="GRANTA_MIScriptingToolkit.DatabaseRevision.DatabaseRevision.hasRevisionNote"></a>

#### *property* hasRevisionNote

Property hasRevisionNote is of type bool.

<a id="GRANTA_MIScriptingToolkit.DatabaseRevision.DatabaseRevision.revisionDate"></a>

#### *property* revisionDate

Property revisionDate is of type str.

<a id="GRANTA_MIScriptingToolkit.DatabaseRevision.DatabaseRevision.revisionNote"></a>

#### *property* revisionNote

Property revisionNote is of type str.

<a id="GRANTA_MIScriptingToolkit.DatabaseRevision.DatabaseRevision.username"></a>

#### *property* username

Property username is of type str.

<a id="GRANTA_MIScriptingToolkit.DatabaseRevision.DatabaseRevision.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DatasheetPath"></a>

<a id="datasheetpath"></a>

### DatasheetPath

<a id="GRANTA_MIScriptingToolkit.DatasheetPath.DatasheetPath"></a>

### *class* DatasheetPath(URL=None, recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Link to a record in a Granta MI database.
Includes a [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) and a URL for the
record datasheet.

* **Parameters:**
  * **URL** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

<a id="GRANTA_MIScriptingToolkit.DatasheetPath.DatasheetPath.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.DatasheetPath.DatasheetPath.URL"></a>

#### *property* URL

Property URL is of type str.

<a id="GRANTA_MIScriptingToolkit.DatasheetPath.DatasheetPath.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DateDataType"></a>

<a id="datedatatype"></a>

### DateDataType

<a id="GRANTA_MIScriptingToolkit.DateDataType.DateDataType"></a>

### *class* DateDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Container of date data. The format is YYYY-MM-DD.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.DateDataType.DateDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.DateDataType.DateDataType.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.DateDataType.DateDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DateTimeDataType"></a>

<a id="datetimedatatype"></a>

### DateTimeDataType

<a id="GRANTA_MIScriptingToolkit.DateTimeDataType.DateTimeDataType"></a>

### *class* DateTimeDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Container of datetime data. The format is YYYY-MM-DDThh:mm:ss and is compatible with ISO 8601.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.DateTimeDataType.DateTimeDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.DateTimeDataType.DateTimeDataType.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.DateTimeDataType.DateTimeDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest"></a>

<a id="deleteorwithdrawiflatestrecordversionrequest"></a>

### DeleteOrWithdrawIfLatestRecordVersionRequest

<a id="GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest"></a>

### *class* DeleteOrWithdrawIfLatestRecordVersionRequest(deleteOrWithdrawRecords=None, notes=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

DeleteOrWithdrawIfLatestRecordVersionRequest. Input for the DeleteOrWithdrawIfLatestRecordVersion
operation, containing the
[`DeleteOrWithdrawRecord`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord) objects.

* **Parameters:**
  * **deleteOrWithdrawRecords** – type list of [`DeleteOrWithdrawRecord`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord) objects
  * **notes** – type str

<a id="GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest.deleteOrWithdrawRecords"></a>

#### *property* deleteOrWithdrawRecords

Property deleteOrWithdrawRecords is a list of [`DeleteOrWithdrawRecord`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest.notes"></a>

#### *property* notes

Property notes is of type str.

<a id="GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest.AddDeleteOrWithdrawRecord"></a>

#### AddDeleteOrWithdrawRecord(\_deleteOrWithdrawRecord)

Appends \_deleteOrWithdrawRecord to deleteOrWithdrawRecords property on DeleteOrWithdrawIfLatestRecordVersionRequest C-object.

* **Parameters:**
  **\_deleteOrWithdrawRecord** – object of type DeleteOrWithdrawRecord.

<a id="GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionResponse"></a>

<a id="deleteorwithdrawiflatestrecordversionresponse"></a>

### DeleteOrWithdrawIfLatestRecordVersionResponse

<a id="GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionResponse.DeleteOrWithdrawIfLatestRecordVersionResponse"></a>

### *class* DeleteOrWithdrawIfLatestRecordVersionResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

DeleteOrWithdrawIfLatestRecordVersionResponse. Output of the DeleteOrWithdrawIfLatestRecordVersion
operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a DeleteOrWithdrawIfLatestRecordVersionResponse object.

<a id="module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord"></a>

<a id="deleteorwithdrawrecord"></a>

### DeleteOrWithdrawRecord

<a id="GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord.DeleteOrWithdrawRecord"></a>

### *class* DeleteOrWithdrawRecord(recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Record to be deleted or withdrawn. Contains a
[`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

* **Parameters:**
  **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

<a id="GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord.DeleteOrWithdrawRecord.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord.DeleteOrWithdrawRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DiscreteDataType"></a>

<a id="discretedatatype"></a>

### DiscreteDataType

<a id="GRANTA_MIScriptingToolkit.DiscreteDataType.DiscreteDataType"></a>

### *class* DiscreteDataType(discreteValues=None, isApplicable=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Container of discrete data.

* **Parameters:**
  * **discreteValues** – type list of [`DiscreteValue`](#module-GRANTA_MIScriptingToolkit.DiscreteValue) objects
  * **isApplicable** – type bool

<a id="GRANTA_MIScriptingToolkit.DiscreteDataType.DiscreteDataType.discreteValues"></a>

#### *property* discreteValues

Property discreteValues is a list of [`DiscreteValue`](#module-GRANTA_MIScriptingToolkit.DiscreteValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.DiscreteDataType.DiscreteDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.DiscreteDataType.DiscreteDataType.AddDiscreteValue"></a>

#### AddDiscreteValue(\_discreteValue)

Appends \_discreteValue to discreteValues property on DiscreteDataType C-object.

* **Parameters:**
  **\_discreteValue** – object of type DiscreteValue.

<a id="GRANTA_MIScriptingToolkit.DiscreteDataType.DiscreteDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType"></a>

<a id="discretefunctionalgriddeddatatype"></a>

### DiscreteFunctionalGriddedDataType

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType"></a>

### *class* DiscreteFunctionalGriddedDataType(defaultXAxisParameter=None, functionalDataParameterSettings=None, isApplicable=None, values=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain the values of discrete-valued functional gridded data.
This type is only valid for export.

* **Parameters:**
  * **defaultXAxisParameter** – type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation)
  * **functionalDataParameterSettings** – type list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects
  * **isApplicable** – type bool
  * **values** – type [`DiscreteFunctionalValues`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValues)

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.functionalDataParameterSettings"></a>

#### *property* functionalDataParameterSettings

Property functionalDataParameterSettings is a list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.defaultXAxisParameter"></a>

#### *property* defaultXAxisParameter

Property defaultXAxisParameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.values"></a>

#### *property* values

Property values is of type [`DiscreteFunctionalValues`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValues).

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.AddFunctionalDataParameterSettings"></a>

#### AddFunctionalDataParameterSettings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on DiscreteFunctionalGriddedDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** – object of type FunctionalDataParameterSettings.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType"></a>

<a id="discretefunctionalseriesdatatype"></a>

### DiscreteFunctionalSeriesDataType

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType"></a>

### *class* DiscreteFunctionalSeriesDataType(functionalDataParameterSettings=None, graph=None, isApplicable=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain the values of discrete-valued functional series data.
This type is only valid for export.

* **Parameters:**
  * **functionalDataParameterSettings** – type list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects
  * **graph** – type [`DiscreteFunctionalSeriesGraph`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph)
  * **isApplicable** – type bool

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType.functionalDataParameterSettings"></a>

#### *property* functionalDataParameterSettings

Property functionalDataParameterSettings is a list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType.graph"></a>

#### *property* graph

Property graph is of type [`DiscreteFunctionalSeriesGraph`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph).

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType.AddFunctionalDataParameterSettings"></a>

#### AddFunctionalDataParameterSettings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on DiscreteFunctionalSeriesDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** – object of type FunctionalDataParameterSettings.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph"></a>

<a id="discretefunctionalseriesgraph"></a>

### DiscreteFunctionalSeriesGraph

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph"></a>

### *class* DiscreteFunctionalSeriesGraph(XAxisParameter=None, hideGraph=None, series=None, \_isOwner=True)

A type to contain a collection of
[`DiscreteSeries`](#module-GRANTA_MIScriptingToolkit.DiscreteSeries) objects that contain the
functional data.

* **Parameters:**
  * **XAxisParameter** – type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation)
  * **hideGraph** – type bool
  * **series** – type list of [`DiscreteSeries`](#module-GRANTA_MIScriptingToolkit.DiscreteSeries) objects

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph.series"></a>

#### *property* series

Property series is a list of [`DiscreteSeries`](#module-GRANTA_MIScriptingToolkit.DiscreteSeries) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph.hideGraph"></a>

#### *property* hideGraph

Property hideGraph is of type bool.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph.XAxisParameter"></a>

#### *property* XAxisParameter

Property XAxisParameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph.AddSeries"></a>

#### AddSeries(\_discreteSeries)

Appends \_discreteSeries to series property on DiscreteFunctionalSeriesGraph C-object.

* **Parameters:**
  **\_discreteSeries** – object of type DiscreteSeries.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValue"></a>

<a id="discretefunctionalvalue"></a>

### DiscreteFunctionalValue

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue"></a>

### *class* DiscreteFunctionalValue(constraints=None, value=None, isEstimated=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A single grid point in Gridded Discrete-Valued Functional Data, where the Y-axis value is a discrete
value.

* **Parameters:**
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)
  * **value** – type str
  * **isEstimated** – type bool

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue.constraints"></a>

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue.isEstimated"></a>

#### *property* isEstimated

Property isEstimated is of type bool.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValues"></a>

<a id="discretefunctionalvalues"></a>

### DiscreteFunctionalValues

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalValues.DiscreteFunctionalValues"></a>

### *class* DiscreteFunctionalValues(values=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of
[`DiscreteFunctionalValue`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValue) objects.

* **Parameters:**
  **values** – type list of [`DiscreteFunctionalValue`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValue) objects

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalValues.DiscreteFunctionalValues.values"></a>

#### *property* values

Property values is a list of [`DiscreteFunctionalValue`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalValues.DiscreteFunctionalValues.AddValue"></a>

#### AddValue(\_discreteFunctionalValue)

Appends \_discreteFunctionalValue to values property on DiscreteFunctionalValues C-object.

* **Parameters:**
  **\_discreteFunctionalValue** – object of type DiscreteFunctionalValue.

<a id="GRANTA_MIScriptingToolkit.DiscreteFunctionalValues.DiscreteFunctionalValues.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DiscreteSeries"></a>

<a id="discreteseries"></a>

### DiscreteSeries

<a id="GRANTA_MIScriptingToolkit.DiscreteSeries.DiscreteSeries"></a>

### *class* DiscreteSeries(XYPoints=None, constraints=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type for functional data which includes X-Y discrete data and any constraints.

* **Parameters:**
  * **XYPoints** – type [`XYDiscreteData`](#module-GRANTA_MIScriptingToolkit.XYDiscreteData)
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)

<a id="GRANTA_MIScriptingToolkit.DiscreteSeries.DiscreteSeries.constraints"></a>

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

<a id="GRANTA_MIScriptingToolkit.DiscreteSeries.DiscreteSeries.XYPoints"></a>

#### *property* XYPoints

Property XYPoints is of type [`XYDiscreteData`](#module-GRANTA_MIScriptingToolkit.XYDiscreteData).

<a id="GRANTA_MIScriptingToolkit.DiscreteSeries.DiscreteSeries.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DiscreteValue"></a>

<a id="discretevalue"></a>

### DiscreteValue

<a id="GRANTA_MIScriptingToolkit.DiscreteValue.DiscreteValue"></a>

### *class* DiscreteValue(order=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The value of a discrete data type.
Contains an order and a value.

* **Parameters:**
  * **order** – type int
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.DiscreteValue.DiscreteValue.order"></a>

#### *property* order

Property order is of type int.

<a id="GRANTA_MIScriptingToolkit.DiscreteValue.DiscreteValue.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.DiscreteValue.DiscreteValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DisplayName"></a>

<a id="displayname"></a>

### DisplayName

<a id="GRANTA_MIScriptingToolkit.DisplayName.DisplayName"></a>

### *class* DisplayName(language=None, translation=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A language identifier and localized string for the display name of an object.

* **Parameters:**
  * **language** – type str
  * **translation** – type str

<a id="GRANTA_MIScriptingToolkit.DisplayName.DisplayName.language"></a>

#### *property* language

Property language is of type str.

<a id="GRANTA_MIScriptingToolkit.DisplayName.DisplayName.translation"></a>

#### *property* translation

Property translation is of type str.

<a id="GRANTA_MIScriptingToolkit.DisplayName.DisplayName.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DoesNotContainSearchValue"></a>

<a id="doesnotcontainsearchvalue"></a>

### DoesNotContainSearchValue

<a id="GRANTA_MIScriptingToolkit.DoesNotContainSearchValue.DoesNotContainSearchValue"></a>

### *class* DoesNotContainSearchValue(tabularColumn=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for discrete data types that contain none of the specified search values.
This criterion type is specific to discrete attributes.

* **Parameters:**
  * **tabularColumn** – type str
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.DoesNotContainSearchValue.DoesNotContainSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.DoesNotContainSearchValue.DoesNotContainSearchValue.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.DoesNotContainSearchValue.DoesNotContainSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.DoesNotExistSearchValue"></a>

<a id="doesnotexistsearchvalue"></a>

### DoesNotExistSearchValue

<a id="GRANTA_MIScriptingToolkit.DoesNotExistSearchValue.DoesNotExistSearchValue"></a>

### *class* DoesNotExistSearchValue(tabularColumn=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for attributes with no data.
All attribute types supported.

* **Parameters:**
  **tabularColumn** – type str

<a id="GRANTA_MIScriptingToolkit.DoesNotExistSearchValue.DoesNotExistSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.DoesNotExistSearchValue.DoesNotExistSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.EmptyDataType"></a>

<a id="emptydatatype"></a>

### EmptyDataType

<a id="GRANTA_MIScriptingToolkit.EmptyDataType.EmptyDataType"></a>

### *class* EmptyDataType(\_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type that indicates that the [`TabularDataCell`](#module-GRANTA_MIScriptingToolkit.TabularDataCell)
is empty.
This type is specific to Tabular attributes, and can be used in update operations to clear the
contents of a [`TabularDataCell`](#module-GRANTA_MIScriptingToolkit.TabularDataCell).

<a id="GRANTA_MIScriptingToolkit.EmptyDataType.EmptyDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="id4"></a>

### EngineeringDataService

<a id="GRANTA_MIScriptingToolkit.EngineeringDataService.EngineeringDataService"></a>

### *class* EngineeringDataService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

The EngineeringData service provides custom data export operations for a Granta MI Server.

<a id="GRANTA_MIScriptingToolkit.EngineeringDataService.EngineeringDataService.GetAvailableExporters"></a>

#### GetAvailableExporters(\_req)

Returns the FEA Exporter configurations known to the MI Server, optionally filtering for their applicability to particular situations.

* **Parameters:**
  **\_req** – [`GetAvailableExportersRequest`](#module-GRANTA_MIScriptingToolkit.GetAvailableExportersRequest) object
* **Returns:**
  [`GetAvailableExportersResponse`](#module-GRANTA_MIScriptingToolkit.GetAvailableExportersResponse) object

<a id="GRANTA_MIScriptingToolkit.EngineeringDataService.EngineeringDataService.ExportRecordData"></a>

#### ExportRecordData(\_req)

Performs an FEA Export and returns the result as the response.

* **Parameters:**
  **\_req** – [`ExportRecordDataRequest`](#module-GRANTA_MIScriptingToolkit.ExportRecordDataRequest) object
* **Returns:**
  [`ExportRecordDataResponse`](#module-GRANTA_MIScriptingToolkit.ExportRecordDataResponse) object

<a id="GRANTA_MIScriptingToolkit.EngineeringDataService.EngineeringDataService.GetExporterParameters"></a>

#### GetExporterParameters(\_req)

Returns information about the MI Parameter Values that will need to be chosen, to run the specified Exporter on the specified Record(s).

* **Parameters:**
  **\_req** – [`GetExporterParametersRequest`](#module-GRANTA_MIScriptingToolkit.GetExporterParametersRequest) object
* **Returns:**
  [`GetExporterParametersResponse`](#module-GRANTA_MIScriptingToolkit.GetExporterParametersResponse) object

<a id="GRANTA_MIScriptingToolkit.EngineeringDataService.EngineeringDataService.ExportersForRecords"></a>

#### ExportersForRecords(\_req)

Returns the FEA Exporter configurations, known to the MI Server, filtering for their applicability to given Record(s) and optionally to particular situations.

* **Parameters:**
  **\_req** – [`ExportersForRecordsRequest`](#module-GRANTA_MIScriptingToolkit.ExportersForRecordsRequest) object
* **Returns:**
  [`ExportersForRecordsResponse`](#module-GRANTA_MIScriptingToolkit.ExportersForRecordsResponse) object

<a id="module-GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsRequest"></a>

<a id="ensurerecordfolderpathsrequest"></a>

### EnsureRecordFolderPathsRequest

<a id="GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest"></a>

### *class* EnsureRecordFolderPathsRequest(folderPaths=None, importErrorMode=None, notes=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the EnsureRecordFolderPaths operation, containing the folder paths to check and the import
error mode.

* **Parameters:**
  * **folderPaths** – type list of [`RecordFolderPath`](#module-GRANTA_MIScriptingToolkit.RecordFolderPath) objects
  * **importErrorMode** – type str
  * **notes** – type str

<a id="GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest.folderPaths"></a>

#### *property* folderPaths

Property folderPaths is a list of [`RecordFolderPath`](#module-GRANTA_MIScriptingToolkit.RecordFolderPath) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest.importErrorMode"></a>

#### *property* importErrorMode

Property importErrorMode is of type str.

<a id="GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest.notes"></a>

#### *property* notes

Property notes is of type str.

<a id="GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest.AddFolderPath"></a>

#### AddFolderPath(\_recordFolderPath)

Appends \_recordFolderPath to folderPaths property on EnsureRecordFolderPathsRequest C-object.

* **Parameters:**
  **\_recordFolderPath** – object of type RecordFolderPath.

<a id="GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsResponse"></a>

<a id="ensurerecordfolderpathsresponse"></a>

### EnsureRecordFolderPathsResponse

<a id="GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsResponse.EnsureRecordFolderPathsResponse"></a>

### *class* EnsureRecordFolderPathsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output of the EnsureRecordFolderPaths operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a EnsureRecordFolderPathsResponse object.

<a id="GRANTA_MIScriptingToolkit.EnsureRecordFolderPathsResponse.EnsureRecordFolderPathsResponse.pathLeaves"></a>

#### *property* pathLeaves

Property pathLeaves is a list of [`PathLeaf`](#module-GRANTA_MIScriptingToolkit.PathLeaf) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.EqualToSearchValue"></a>

<a id="equaltosearchvalue"></a>

### EqualToSearchValue

<a id="GRANTA_MIScriptingToolkit.EqualToSearchValue.EqualToSearchValue"></a>

### *class* EqualToSearchValue(tabularColumn=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for short text values that exactly match the specified search value.
Applies to short text attributes only.

* **Parameters:**
  * **tabularColumn** – type str
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.EqualToSearchValue.EqualToSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.EqualToSearchValue.EqualToSearchValue.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.EqualToSearchValue.EqualToSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExactlySearchValue"></a>

<a id="exactlysearchvalue"></a>

### ExactlySearchValue

<a id="GRANTA_MIScriptingToolkit.ExactlySearchValue.ExactlySearchValue"></a>

### *class* ExactlySearchValue(tabularColumn=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for integer values that exactly match the specified search value.
Applies to integer attributes only.

* **Parameters:**
  * **tabularColumn** – type str
  * **value** – type int

<a id="GRANTA_MIScriptingToolkit.ExactlySearchValue.ExactlySearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.ExactlySearchValue.ExactlySearchValue.value"></a>

#### *property* value

Property value is of type int.

<a id="GRANTA_MIScriptingToolkit.ExactlySearchValue.ExactlySearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExistsSearchValue"></a>

<a id="existssearchvalue"></a>

### ExistsSearchValue

<a id="GRANTA_MIScriptingToolkit.ExistsSearchValue.ExistsSearchValue"></a>

### *class* ExistsSearchValue(tabularColumn=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for attributes that contain data.
All attribute types supported.

* **Parameters:**
  **tabularColumn** – type str

<a id="GRANTA_MIScriptingToolkit.ExistsSearchValue.ExistsSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.ExistsSearchValue.ExistsSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExportRecordDataRequest"></a>

<a id="exportrecorddatarequest"></a>

### ExportRecordDataRequest

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest"></a>

### *class* ExportRecordDataRequest(attributeReferences=None, exporterKey=None, filter=None, parameterValues=None, records=None, sigFigs=None, stopBeforeId=None, stopBeforeIndex=None, unitConversionContext=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the ExportRecordData operation. For this request to be valid, you must set the references
and the exporter key. StopBeforeIndex is 0-indexed.

* **Parameters:**
  * **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects
  * **exporterKey** – type str
  * **filter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **parameterValues** – type list of [`UnittedParameterValue`](#module-GRANTA_MIScriptingToolkit.UnittedParameterValue) objects
  * **records** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **sigFigs** – type int
  * **stopBeforeId** – type str
  * **stopBeforeIndex** – type int
  * **unitConversionContext** – type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext)

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.attributeReferences"></a>

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects. If this property is not specified, the attributes from the exporter configuration are used. If this element is included and non-empty, the attributes specified are used.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.parameterValues"></a>

#### *property* parameterValues

Property parameterValues is a list of [`UnittedParameterValue`](#module-GRANTA_MIScriptingToolkit.UnittedParameterValue) objects. Parameter values to use for any parameterised Data in the export. Each Parameter can only have one value for all parameterised Attributes in an export. Note that the true Parameter names (or Standard Names) in the MI Database must be used; aliases defined in the exporter configuration will not be understood.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.records"></a>

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.exporterKey"></a>

#### *property* exporterKey

Property exporterKey is of type str.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.filter"></a>

#### *property* filter

Property filter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter). If specified, this filters the records that can be included when traversing record links within Tabular Data. This filter is NOT applied to the explicit list of records passed to this operation.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.sigFigs"></a>

#### *property* sigFigs

Property sigFigs is of type int.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.stopBeforeId"></a>

#### *property* stopBeforeId

Property stopBeforeId is of type str. Stops the export process before the step specified by the identifier (for example, after the initial XML is generated but before conversion into the specified CAE format). Contact your MI Administrator if you require this feature.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.stopBeforeIndex"></a>

#### *property* stopBeforeIndex

Property stopBeforeIndex is of type int. Stops the export process before the step specified by the index (for example, after the initial XML is generated but before conversion into the specified CAE format). Contact your MI Administrator if you require this feature.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.unitConversionContext"></a>

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.AddAttributeReference"></a>

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on ExportRecordDataRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.AddParameterValues"></a>

#### AddParameterValues(\_unittedParameterValue)

Appends \_unittedParameterValue to parameterValues property on ExportRecordDataRequest C-object.

* **Parameters:**
  **\_unittedParameterValue** – object of type UnittedParameterValue.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.AddRecord"></a>

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on ExportRecordDataRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataRequest.ExportRecordDataRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExportRecordDataResponse"></a>

<a id="exportrecorddataresponse"></a>

### ExportRecordDataResponse

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataResponse.ExportRecordDataResponse"></a>

### *class* ExportRecordDataResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output for the ExportRecordData operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a ExportRecordDataResponse object.

<a id="GRANTA_MIScriptingToolkit.ExportRecordDataResponse.ExportRecordDataResponse.text"></a>

#### *property* text

Property text is of type str.

<a id="module-GRANTA_MIScriptingToolkit.ExportedAttribute"></a>

<a id="exportedattribute"></a>

### ExportedAttribute

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute"></a>

### *class* ExportedAttribute(DBKey=None, attributeID=None, isStandardName=None, name=None, partialTableReference=None, preferredXAxisParameter=None, pseudoAttribute=None, specificUnitConversionContext=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular attribute in a Granta MI, and also specifies how
that Attribute should be exported.

* **Parameters:**
  * **DBKey** – type str
  * **attributeID** – type int
  * **isStandardName** – type bool
  * **name** – type str
  * **partialTableReference** – type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference)
  * **preferredXAxisParameter** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **pseudoAttribute** – type int
  * **specificUnitConversionContext** – type [`SpecificUnitConversionContext`](#module-GRANTA_MIScriptingToolkit.SpecificUnitConversionContext)

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute.attributeID"></a>

#### *property* attributeID

Property attributeID is of type int.

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute.isStandardName"></a>

#### *property* isStandardName

Property isStandardName is of type bool.

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute.partialTableReference"></a>

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute.preferredXAxisParameter"></a>

#### *property* preferredXAxisParameter

Property preferredXAxisParameter is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute.specificUnitConversionContext"></a>

#### *property* specificUnitConversionContext

Property specificUnitConversionContext is of type [`SpecificUnitConversionContext`](#module-GRANTA_MIScriptingToolkit.SpecificUnitConversionContext).

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute.pseudoAttribute"></a>

#### *property* pseudoAttribute

Property pseudoAttribute is of type int.

<a id="GRANTA_MIScriptingToolkit.ExportedAttribute.ExportedAttribute.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.Exporter"></a>

<a id="exporter"></a>

### Exporter

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter"></a>

### *class* Exporter(absoluteUnitsOptional=None, description=None, key=None, model=None, name=None, outputFile=None, package=None, transforms=None, unitSystems=None, useAbsoluteUnits=None, validatedOk=None, version=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Details of a particular FEA Exporter configuration, typically obtained from an Exporter
Configuration File (EXP file) on the MI Server.

* **Parameters:**
  * **absoluteUnitsOptional** – type bool
  * **description** – type str
  * **key** – type str
  * **model** – type str
  * **name** – type str
  * **outputFile** – type [`ExporterOutputFile`](#module-GRANTA_MIScriptingToolkit.ExporterOutputFile)
  * **package** – type str
  * **transforms** – type list of [`ExporterTransform`](#module-GRANTA_MIScriptingToolkit.ExporterTransform) objects
  * **unitSystems** – type list of str objects
  * **useAbsoluteUnits** – type bool
  * **validatedOk** – type bool
  * **version** – type int

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.absoluteUnitsOptional"></a>

#### *property* absoluteUnitsOptional

Property absoluteUnitsOptional is of type bool.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.description"></a>

#### *property* description

Property description is of type str.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.key"></a>

#### *property* key

Property key is of type str. The key that uniquely identifies this Exporter. This value is generated by the MI Server at runtime and may change between runs.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.model"></a>

#### *property* model

Property model is of type str.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.transforms"></a>

#### *property* transforms

Property transforms is a list of [`ExporterTransform`](#module-GRANTA_MIScriptingToolkit.ExporterTransform) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.unitSystems"></a>

#### *property* unitSystems

Property unitSystems is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.outputFile"></a>

#### *property* outputFile

Property outputFile is of type [`ExporterOutputFile`](#module-GRANTA_MIScriptingToolkit.ExporterOutputFile).

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.package"></a>

#### *property* package

Property package is of type str.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.useAbsoluteUnits"></a>

#### *property* useAbsoluteUnits

Property useAbsoluteUnits is of type bool.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.validatedOk"></a>

#### *property* validatedOk

Property validatedOk is of type bool.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.version"></a>

#### *property* version

Property version is of type int.

<a id="GRANTA_MIScriptingToolkit.Exporter.Exporter.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExporterOutputFile"></a>

<a id="exporteroutputfile"></a>

### ExporterOutputFile

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile"></a>

### *class* ExporterOutputFile(convention=None, customFileName=None, encoding=None, extension=None, folder=None, includeBOM=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Specifies how an output file should be named. All values have the same meaning as in the
[`Exporter`](#module-GRANTA_MIScriptingToolkit.Exporter) configuration schema. It is up to the
client to adhere (or not) to this.

* **Parameters:**
  * **convention** – type int
  * **customFileName** – type str
  * **encoding** – type str
  * **extension** – type str
  * **folder** – type str
  * **includeBOM** – type bool

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention"></a>

#### *class* ExporterFileNameConvention

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.Default"></a>

#### Default *= 0*

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.TreeName"></a>

#### TreeName *= 1*

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.TableName"></a>

#### TableName *= 2*

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.RecordName"></a>

#### RecordName *= 3*

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.Custom"></a>

#### Custom *= 4*

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.convention"></a>

#### *property* convention

Property convention is of type int. See [`ExporterOutputFile.ExporterFileNameConvention`](#GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention) for supported values.

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.customFileName"></a>

#### *property* customFileName

Property customFileName is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.encoding"></a>

#### *property* encoding

Property encoding is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.extension"></a>

#### *property* extension

Property extension is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.folder"></a>

#### *property* folder

Property folder is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.includeBOM"></a>

#### *property* includeBOM

Property includeBOM is of type bool.

<a id="GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExporterParameter"></a>

<a id="exporterparameter"></a>

### ExporterParameter

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter"></a>

### *class* ExporterParameter(Id=None, name=None, parameterReference=None, unit=None, usage=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a Parameter of Functional Data.

* **Parameters:**
  * **Id** – type str
  * **name** – type str
  * **parameterReference** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **unit** – type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation)
  * **usage** – type int

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.Usage"></a>

#### *class* Usage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.Usage.Unknown"></a>

#### Unknown *= 0*

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.Usage.free"></a>

#### free *= 1*

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.Usage.fixed"></a>

#### fixed *= 2*

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.Usage.unused"></a>

#### unused *= 3*

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.Id"></a>

#### *property* Id

Property Id is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.parameterReference"></a>

#### *property* parameterReference

Property parameterReference is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.unit"></a>

#### *property* unit

Property unit is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.usage"></a>

#### *property* usage

Property usage is of type int. See [`ExporterParameter.Usage`](#GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.Usage) for supported values.

<a id="GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExporterPopulation"></a>

<a id="exporterpopulation"></a>

### ExporterPopulation

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation"></a>

### *class* ExporterPopulation(description=None, key=None, model=None, name=None, package=None, populationState=None, transforms=None, validatedOk=None, version=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Details of a particular FEA [`Exporter`](#module-GRANTA_MIScriptingToolkit.Exporter) configuration,
typically obtained from an [`Exporter`](#module-GRANTA_MIScriptingToolkit.Exporter) Configuration
File (EXP file) on the MI Server.

* **Parameters:**
  * **description** – type str
  * **key** – type str
  * **model** – type str
  * **name** – type str
  * **package** – type str
  * **populationState** – type int
  * **transforms** – type list of [`ExporterTransform`](#module-GRANTA_MIScriptingToolkit.ExporterTransform) objects
  * **validatedOk** – type bool
  * **version** – type int

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.PopulationState"></a>

#### *class* PopulationState

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.PopulationState.Unknown"></a>

#### Unknown *= 0*

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.PopulationState.FullyPopulated"></a>

#### FullyPopulated *= 1*

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.PopulationState.PartiallyPopulated"></a>

#### PartiallyPopulated *= 2*

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.description"></a>

#### *property* description

Property description is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.key"></a>

#### *property* key

Property key is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.model"></a>

#### *property* model

Property model is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.transforms"></a>

#### *property* transforms

Property transforms is a list of [`ExporterTransform`](#module-GRANTA_MIScriptingToolkit.ExporterTransform) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.package"></a>

#### *property* package

Property package is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.populationState"></a>

#### *property* populationState

Property populationState is of type int. See [`ExporterPopulation.PopulationState`](#GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.PopulationState) for supported values.

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.validatedOk"></a>

#### *property* validatedOk

Property validatedOk is of type bool.

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.version"></a>

#### *property* version

Property version is of type int.

<a id="GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExporterTransform"></a>

<a id="exportertransform"></a>

### ExporterTransform

<a id="GRANTA_MIScriptingToolkit.ExporterTransform.ExporterTransform"></a>

### *class* ExporterTransform(Id=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains a type and an ID for an [`Exporter`](#module-GRANTA_MIScriptingToolkit.Exporter) Transform.

* **Parameters:**
  * **Id** – type str
  * **type** – type int

<a id="GRANTA_MIScriptingToolkit.ExporterTransform.ExporterTransform.Type"></a>

#### *class* Type

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.ExporterTransform.ExporterTransform.Type.Unknown"></a>

#### Unknown *= 0*

<a id="GRANTA_MIScriptingToolkit.ExporterTransform.ExporterTransform.Type.XSLT"></a>

#### XSLT *= 1*

<a id="GRANTA_MIScriptingToolkit.ExporterTransform.ExporterTransform.Id"></a>

#### *property* Id

Property Id is of type str.

<a id="GRANTA_MIScriptingToolkit.ExporterTransform.ExporterTransform.type"></a>

#### *property* type

Property type is of type int. See [`ExporterTransform.Type`](#GRANTA_MIScriptingToolkit.ExporterTransform.ExporterTransform.Type) for supported values.

<a id="GRANTA_MIScriptingToolkit.ExporterTransform.ExporterTransform.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExportersForRecord"></a>

<a id="exportersforrecord"></a>

### ExportersForRecord

<a id="GRANTA_MIScriptingToolkit.ExportersForRecord.ExportersForRecord"></a>

### *class* ExportersForRecord(exporters=None, record=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a record and its associated exporters.

* **Parameters:**
  * **exporters** – type list of [`ExporterPopulation`](#module-GRANTA_MIScriptingToolkit.ExporterPopulation) objects
  * **record** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

<a id="GRANTA_MIScriptingToolkit.ExportersForRecord.ExportersForRecord.exporters"></a>

#### *property* exporters

Property exporters is a list of [`ExporterPopulation`](#module-GRANTA_MIScriptingToolkit.ExporterPopulation) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecord.ExportersForRecord.record"></a>

#### *property* record

Property record is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.ExportersForRecord.ExportersForRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExportersForRecordsRequest"></a>

<a id="exportersforrecordsrequest"></a>

### ExportersForRecordsRequest

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest"></a>

### *class* ExportersForRecordsRequest(applicabilityTag=None, model=None, package=None, packageAndModelRequired=None, records=None, specificAttributeExportersOnly=None, versionPolicy=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the ExportersForRecords operation.

* **Parameters:**
  * **applicabilityTag** – type str
  * **model** – type str
  * **package** – type str
  * **packageAndModelRequired** – type bool
  * **records** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **specificAttributeExportersOnly** – type bool
  * **versionPolicy** – type int

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest.records"></a>

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest.applicabilityTag"></a>

#### *property* applicabilityTag

Property applicabilityTag is of type str.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest.model"></a>

#### *property* model

Property model is of type str.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest.package"></a>

#### *property* package

Property package is of type str.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest.packageAndModelRequired"></a>

#### *property* packageAndModelRequired

Property packageAndModelRequired is of type bool.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest.specificAttributeExportersOnly"></a>

#### *property* specificAttributeExportersOnly

Property specificAttributeExportersOnly is of type bool.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest.versionPolicy"></a>

#### *property* versionPolicy

Property versionPolicy is of type int. See [`GRANTA_Constants.VersionPolicy`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest.AddRecord"></a>

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on ExportersForRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsRequest.ExportersForRecordsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ExportersForRecordsResponse"></a>

<a id="exportersforrecordsresponse"></a>

### ExportersForRecordsResponse

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsResponse.ExportersForRecordsResponse"></a>

### *class* ExportersForRecordsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the ExportersForRecords operation. Contains a list of records and supported exporters.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a ExportersForRecordsResponse object.

<a id="GRANTA_MIScriptingToolkit.ExportersForRecordsResponse.ExportersForRecordsResponse.records"></a>

#### *property* records

Property records is a list of [`ExportersForRecord`](#module-GRANTA_MIScriptingToolkit.ExportersForRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.FileDataType"></a>

<a id="filedatatype"></a>

### FileDataType

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType"></a>

### *class* FileDataType(URL=None, contentType=None, data=None, description=None, fileName=None, isApplicable=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type representing a piece of File data in a Granta MI database.
The URL can be used to data export a file from a Granta MI database. For importing a file into a
Granta MI database, the values of ‘fileName’, file ‘contentType’ and file ‘data’ must be specified,
where ‘fileName’ is the name you want the file to appear as in Granta MI, the ‘contentType’ data is
the MIME content type of the binary data, and ‘data’ is the contents of the file you wish to import
to Granta MI.

* **Parameters:**
  * **URL** – type str
  * **contentType** – type str
  * **data** – type str
  * **description** – type str
  * **fileName** – type str
  * **isApplicable** – type bool

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType.ModifyBinaryData"></a>

#### ModifyBinaryData(binaryData)

Modify the byte string data of the file.

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType.ReadBinaryData"></a>

#### ReadBinaryData()

Return a byte string representation of this file.

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType.contentType"></a>

#### *property* contentType

Property contentType is of type str.

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType.data"></a>

#### *property* data

Property data is of type str.

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType.description"></a>

#### *property* description

Property description is of type str.

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType.fileName"></a>

#### *property* fileName

Property fileName is of type str.

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType.URL"></a>

#### *property* URL

Property URL is of type str.

<a id="GRANTA_MIScriptingToolkit.FileDataType.FileDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.FloatFunctionalGraph"></a>

<a id="floatfunctionalgraph"></a>

### FloatFunctionalGraph

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGraph.FloatFunctionalGraph"></a>

### *class* FloatFunctionalGraph(hideGraph=None, logarithmicYAxis=None, series=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a collection of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects that
contain the functional data.

* **Parameters:**
  * **hideGraph** – type bool
  * **logarithmicYAxis** – type bool
  * **series** – type list of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGraph.FloatFunctionalGraph.series"></a>

#### *property* series

Property series is a list of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGraph.FloatFunctionalGraph.hideGraph"></a>

#### *property* hideGraph

Property hideGraph is of type bool.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGraph.FloatFunctionalGraph.logarithmicYAxis"></a>

#### *property* logarithmicYAxis

Property logarithmicYAxis is of type bool.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGraph.FloatFunctionalGraph.AddSeries"></a>

#### AddSeries(\_series)

Appends \_series to series property on FloatFunctionalGraph C-object.

* **Parameters:**
  **\_series** – object of type Series.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGraph.FloatFunctionalGraph.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType"></a>

<a id="floatfunctionalgriddeddatatype"></a>

### FloatFunctionalGriddedDataType

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType"></a>

### *class* FloatFunctionalGriddedDataType(decoration=None, defaultXAxisParameter=None, isApplicable=None, unitInformation=None, values=None, functionalDataParameterSettings=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain the values of float-valued functional gridded data.
For requests, Values and [`Parameters`](#module-GRANTA_MIScriptingToolkit.Parameters) are required.

* **Parameters:**
  * **decoration** – type int
  * **defaultXAxisParameter** – type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation)
  * **isApplicable** – type bool
  * **unitInformation** – type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation)
  * **values** – type [`FloatFunctionalValues`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalValues)
  * **functionalDataParameterSettings** – type list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.functionalDataParameterSettings"></a>

#### *property* functionalDataParameterSettings

Property functionalDataParameterSettings is a list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.decoration"></a>

#### *property* decoration

Property decoration is of type int. See [`GRANTA_Constants.GraphDecoration`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.defaultXAxisParameter"></a>

#### *property* defaultXAxisParameter

Property defaultXAxisParameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.unitInformation"></a>

#### *property* unitInformation

Property unitInformation is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.values"></a>

#### *property* values

Property values is of type [`FloatFunctionalValues`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalValues).

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.AddFunctionalDataParameterSettings"></a>

#### AddFunctionalDataParameterSettings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on FloatFunctionalGriddedDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** – object of type FunctionalDataParameterSettings.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.FloatFunctionalPointValue"></a>

<a id="floatfunctionalpointvalue"></a>

### FloatFunctionalPointValue

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue"></a>

### *class* FloatFunctionalPointValue(constraints=None, value=None, isEstimated=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A single grid point in Gridded Float-Valued Functional Data, where the Y-axis value is a point.

* **Parameters:**
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)
  * **value** – type float
  * **isEstimated** – type bool

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue.constraints"></a>

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue.isEstimated"></a>

#### *property* isEstimated

Property isEstimated is of type bool.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue.value"></a>

#### *property* value

Property value is of type float.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue"></a>

<a id="floatfunctionalrangevalue"></a>

### FloatFunctionalRangeValue

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue"></a>

### *class* FloatFunctionalRangeValue(constraints=None, highValue=None, lowValue=None, isEstimated=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A single grid point in Gridded Float-Valued Functional Data, where the Y-axis value is a range.

* **Parameters:**
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)
  * **highValue** – type float
  * **lowValue** – type float
  * **isEstimated** – type bool

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue.constraints"></a>

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue.highValue"></a>

#### *property* highValue

Property highValue is of type float.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue.isEstimated"></a>

#### *property* isEstimated

Property isEstimated is of type bool.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue.lowValue"></a>

#### *property* lowValue

Property lowValue is of type float.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType"></a>

<a id="floatfunctionalseriesdatatype"></a>

### FloatFunctionalSeriesDataType

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType"></a>

### *class* FloatFunctionalSeriesDataType(graph=None, isApplicable=None, unitInformation=None, functionalDataParameterSettings=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain the values of float-valued functional series data.
For requests Graph, and [`Parameters`](#module-GRANTA_MIScriptingToolkit.Parameters) are required.

* **Parameters:**
  * **graph** – type [`FloatFunctionalSeriesGraph`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph)
  * **isApplicable** – type bool
  * **unitInformation** – type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation)
  * **functionalDataParameterSettings** – type list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.functionalDataParameterSettings"></a>

#### *property* functionalDataParameterSettings

Property functionalDataParameterSettings is a list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.graph"></a>

#### *property* graph

Property graph is of type [`FloatFunctionalSeriesGraph`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph).

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.unitInformation"></a>

#### *property* unitInformation

Property unitInformation is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.AddFunctionalDataParameterSettings"></a>

#### AddFunctionalDataParameterSettings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on FloatFunctionalSeriesDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** – object of type FunctionalDataParameterSettings.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph"></a>

<a id="floatfunctionalseriesgraph"></a>

### FloatFunctionalSeriesGraph

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph"></a>

### *class* FloatFunctionalSeriesGraph(XAxisParameter=None, hideGraph=None, logarithmicYAxis=None, series=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type a collection of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects that contain the
data functional data and parameter information for the graph x-axis.
For requests an XAxisParameter is required.

* **Parameters:**
  * **XAxisParameter** – type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation)
  * **hideGraph** – type bool
  * **logarithmicYAxis** – type bool
  * **series** – type list of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.series"></a>

#### *property* series

Property series is a list of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.hideGraph"></a>

#### *property* hideGraph

Property hideGraph is of type bool.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.logarithmicYAxis"></a>

#### *property* logarithmicYAxis

Property logarithmicYAxis is of type bool.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.XAxisParameter"></a>

#### *property* XAxisParameter

Property XAxisParameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.AddSeries"></a>

#### AddSeries(\_series)

Appends \_series to series property on FloatFunctionalSeriesGraph C-object.

* **Parameters:**
  **\_series** – object of type Series.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.FloatFunctionalValues"></a>

<a id="floatfunctionalvalues"></a>

### FloatFunctionalValues

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalValues.FloatFunctionalValues"></a>

### *class* FloatFunctionalValues(pointValues=None, rangeValues=None, valueType=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of
[`FloatFunctionalPointValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalPointValue) and
[`FloatFunctionalRangeValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue) objects.

* **Parameters:**
  * **pointValues** – type list of [`FloatFunctionalPointValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalPointValue) objects
  * **rangeValues** – type list of [`FloatFunctionalRangeValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue) objects
  * **valueType** – type str

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalValues.FloatFunctionalValues.pointValues"></a>

#### *property* pointValues

Property pointValues is a list of [`FloatFunctionalPointValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalPointValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalValues.FloatFunctionalValues.rangeValues"></a>

#### *property* rangeValues

Property rangeValues is a list of [`FloatFunctionalRangeValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalValues.FloatFunctionalValues.valueType"></a>

#### *property* valueType

Property valueType is of type str.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalValues.FloatFunctionalValues.AddPointValue"></a>

#### AddPointValue(\_floatFunctionalPointValue)

Appends \_floatFunctionalPointValue to pointValues property on FloatFunctionalValues C-object.

* **Parameters:**
  **\_floatFunctionalPointValue** – object of type FloatFunctionalPointValue.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalValues.FloatFunctionalValues.AddRangeValue"></a>

#### AddRangeValue(\_floatFunctionalRangeValue)

Appends \_floatFunctionalRangeValue to rangeValues property on FloatFunctionalValues C-object.

* **Parameters:**
  **\_floatFunctionalRangeValue** – object of type FloatFunctionalRangeValue.

<a id="GRANTA_MIScriptingToolkit.FloatFunctionalValues.FloatFunctionalValues.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings"></a>

<a id="functionaldataparametersettings"></a>

### FunctionalDataParameterSettings

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings"></a>

### *class* FunctionalDataParameterSettings(datumDefaultValue=None, datumInterpolationMethod=None, datumScaleType=None, effectiveDefaultValue=None, effectiveDefaultValueDefinedAt=None, effectiveInterpolationMethod=None, effectiveInterpolationMethodDefinedAt=None, effectiveScaleType=None, effectiveScaleTypeDefinedAt=None, hasDatumDefaultValue=None, hasDatumInterpolationMethod=None, hasDatumScaleType=None, hasEffectiveDefaultValue=None, parameter=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about the use of a parameter for a given Functional Data Attribute.

* **Parameters:**
  * **datumDefaultValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)
  * **datumInterpolationMethod** – type int
  * **datumScaleType** – type int
  * **effectiveDefaultValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)
  * **effectiveDefaultValueDefinedAt** – type int
  * **effectiveInterpolationMethod** – type int
  * **effectiveInterpolationMethodDefinedAt** – type int
  * **effectiveScaleType** – type int
  * **effectiveScaleTypeDefinedAt** – type int
  * **hasDatumDefaultValue** – type bool
  * **hasDatumInterpolationMethod** – type bool
  * **hasDatumScaleType** – type bool
  * **hasEffectiveDefaultValue** – type bool
  * **parameter** – type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation)

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.datumDefaultValue"></a>

#### *property* datumDefaultValue

Property datumDefaultValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.datumInterpolationMethod"></a>

#### *property* datumInterpolationMethod

Property datumInterpolationMethod is of type int.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.datumScaleType"></a>

#### *property* datumScaleType

Property datumScaleType is of type int.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effectiveDefaultValue"></a>

#### *property* effectiveDefaultValue

Property effectiveDefaultValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effectiveDefaultValueDefinedAt"></a>

#### *property* effectiveDefaultValueDefinedAt

Property effectiveDefaultValueDefinedAt is of type int.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effectiveInterpolationMethod"></a>

#### *property* effectiveInterpolationMethod

Property effectiveInterpolationMethod is of type int.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effectiveInterpolationMethodDefinedAt"></a>

#### *property* effectiveInterpolationMethodDefinedAt

Property effectiveInterpolationMethodDefinedAt is of type int.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effectiveScaleType"></a>

#### *property* effectiveScaleType

Property effectiveScaleType is of type int.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effectiveScaleTypeDefinedAt"></a>

#### *property* effectiveScaleTypeDefinedAt

Property effectiveScaleTypeDefinedAt is of type int.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.hasDatumDefaultValue"></a>

#### *property* hasDatumDefaultValue

Property hasDatumDefaultValue is of type bool.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.hasDatumInterpolationMethod"></a>

#### *property* hasDatumInterpolationMethod

Property hasDatumInterpolationMethod is of type bool.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.hasDatumScaleType"></a>

#### *property* hasDatumScaleType

Property hasDatumScaleType is of type bool.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.hasEffectiveDefaultValue"></a>

#### *property* hasEffectiveDefaultValue

Property hasEffectiveDefaultValue is of type bool.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.parameter"></a>

#### *property* parameter

Property parameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

<a id="GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings.FunctionalDataParameterSettings.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.FunctionalDataSettings"></a>

<a id="functionaldatasettings"></a>

### FunctionalDataSettings

<a id="GRANTA_MIScriptingToolkit.FunctionalDataSettings.FunctionalDataSettings"></a>

### *class* FunctionalDataSettings(convertGridToSeries=None, maxSeries=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Settings affecting the export of Functional Data.
If convertGridToSeries is true, gridded Functional Data will be converted to series data, allowing
you to avoid the need to deal with the gridded data format.

* **Parameters:**
  * **convertGridToSeries** – type bool
  * **maxSeries** – type int

<a id="GRANTA_MIScriptingToolkit.FunctionalDataSettings.FunctionalDataSettings.convertGridToSeries"></a>

#### *property* convertGridToSeries

Property convertGridToSeries is of type bool.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataSettings.FunctionalDataSettings.maxSeries"></a>

#### *property* maxSeries

Property maxSeries is of type int.

<a id="GRANTA_MIScriptingToolkit.FunctionalDataSettings.FunctionalDataSettings.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GRANTA_Constants"></a>

<a id="granta-constants"></a>

### GRANTA_Constants

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants"></a>

### *class* GRANTA_Constants

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.BinaryDataRepresentation"></a>

#### *class* BinaryDataRepresentation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.BinaryDataRepresentation.Inline"></a>

#### Inline *= 0*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.BinaryDataRepresentation.URL"></a>

#### URL *= 1*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.VersionPolicy"></a>

#### *class* VersionPolicy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.VersionPolicy.NoPolicy"></a>

#### NoPolicy *= 0*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.VersionPolicy.IncludeAll"></a>

#### IncludeAll *= 1*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.VersionPolicy.LatestVersionPerName"></a>

#### LatestVersionPerName *= 2*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.GraphDecoration"></a>

#### *class* GraphDecoration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.GraphDecoration.Lines"></a>

#### Lines *= 0*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.GraphDecoration.Markers"></a>

#### Markers *= 1*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.GraphDecoration.LinesAndMarkers"></a>

#### LinesAndMarkers *= 2*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ImportTypes"></a>

#### *class* ImportTypes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ImportTypes.Create"></a>

#### Create *= 'Create'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ImportTypes.Update"></a>

#### Update *= 'Update'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ImportTypes.Copy"></a>

#### Copy *= 'Copy'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.UpdateSubsetsMode"></a>

#### *class* UpdateSubsetsMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.UpdateSubsetsMode.Append"></a>

#### Append *= 1*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.UpdateSubsetsMode.Replace"></a>

#### Replace *= 2*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.SearchMode"></a>

#### *class* SearchMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.SearchMode.Normal"></a>

#### Normal *= 0*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.SearchMode.ReadOnly"></a>

#### ReadOnly *= 1*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.SearchMode.Unspecified"></a>

#### Unspecified *= 2*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter"></a>

#### *class* TablesFilter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.NoFilter"></a>

#### NoFilter *= 0*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.MaterialsTablesOnly"></a>

#### MaterialsTablesOnly *= 1*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.ProcessesTablesOnly"></a>

#### ProcessesTablesOnly *= 2*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.SubstancesTablesOnly"></a>

#### SubstancesTablesOnly *= 3*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.LegislationsTablesOnly"></a>

#### LegislationsTablesOnly *= 4*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.TransportTypesTablesOnly"></a>

#### TransportTypesTablesOnly *= 5*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.RegionsTablesOnly"></a>

#### RegionsTablesOnly *= 6*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.EndOfLifeOptionsTablesOnly"></a>

#### EndOfLifeOptionsTablesOnly *= 7*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.EnergyConversionOptionsTablesOnly"></a>

#### EnergyConversionOptionsTablesOnly *= 8*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.CoatingsTablesOnly"></a>

#### CoatingsTablesOnly *= 9*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.PartsTablesOnly"></a>

#### PartsTablesOnly *= 10*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.InHouseTablesOnly"></a>

#### InHouseTablesOnly *= 11*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.SequenceSpecificationsTablesOnly"></a>

#### SequenceSpecificationsTablesOnly *= 12*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.ElementsTablesOnly"></a>

#### ElementsTablesOnly *= 13*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.UniverseTablesOnly"></a>

#### UniverseTablesOnly *= 14*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.ProducersTablesOnly"></a>

#### ProducersTablesOnly *= 15*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.ShapeTablesOnly"></a>

#### ShapeTablesOnly *= 16*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.ReferenceTablesOnly"></a>

#### ReferenceTablesOnly *= 17*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.TablesFilter.MobileUseTypesTablesOnly"></a>

#### MobileUseTypesTablesOnly *= 18*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ParameterTypes"></a>

#### *class* ParameterTypes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ParameterTypes.Numeric"></a>

#### Numeric *= 'Numeric'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ParameterTypes.Discrete"></a>

#### Discrete *= 'Discrete'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ImportErrorMode"></a>

#### *class* ImportErrorMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ImportErrorMode.Fault"></a>

#### Fault *= 'FaultAndRollbackOnAnyError'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.ImportErrorMode.Continue"></a>

#### Continue *= 'LogAndContinueWherePossible'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.RecordLinkGroupTypes"></a>

#### *class* RecordLinkGroupTypes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.RecordLinkGroupTypes.Static"></a>

#### Static *= 'static'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.RecordLinkGroupTypes.Dynamic"></a>

#### Dynamic *= 'dynamic'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.RecordLinkGroupTypes.CrossDatabase"></a>

#### CrossDatabase *= 'crossDatabase'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.RecordLinkCheckMode"></a>

#### *class* RecordLinkCheckMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.RecordLinkCheckMode.Forward"></a>

#### Forward *= 'CheckOnlyForwardLinks'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.RecordLinkCheckMode.ForwardAndReverse"></a>

#### ForwardAndReverse *= 'CheckForwardAndReverseLinks'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.MinMaxType"></a>

#### *class* MinMaxType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.MinMaxType.MMNone"></a>

#### MMNone *= 0*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.MinMaxType.MMApproximate"></a>

#### MMApproximate *= 1*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.MinMaxType.MMTrue"></a>

#### MMTrue *= 2*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.POINT_TYPE_STRING"></a>

#### POINT_TYPE_STRING *= 'POIN'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.RANGE_TYPE_STRING"></a>

#### RANGE_TYPE_STRING *= 'RNGE'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.FLOAT_FUNCTIONAL_TYPE_STRING"></a>

#### FLOAT_FUNCTIONAL_TYPE_STRING *= 'FUNC'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.INTEGER_TYPE_STRING"></a>

#### INTEGER_TYPE_STRING *= 'INPT'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.LOGICAL_TYPE_STRING"></a>

#### LOGICAL_TYPE_STRING *= 'LOGI'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.DISCRETE_TYPE_STRING"></a>

#### DISCRETE_TYPE_STRING *= 'DISC'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.SHORT_TEXT_TYPE_STRING"></a>

#### SHORT_TEXT_TYPE_STRING *= 'STXT'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.LONG_TEXT_TYPE_STRING"></a>

#### LONG_TEXT_TYPE_STRING *= 'LTXT'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.HYPERLINK_TYPE_STRING"></a>

#### HYPERLINK_TYPE_STRING *= 'HLNK'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.FLOAT_FUNCTIONAL_SERIES_TYPE_STRING"></a>

#### FLOAT_FUNCTIONAL_SERIES_TYPE_STRING *= 'FLOAT_FUNCTIONAL_SERIES'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.FLOAT_FUNCTIONAL_GRIDDED_TYPE_STRING"></a>

#### FLOAT_FUNCTIONAL_GRIDDED_TYPE_STRING *= 'FLOAT_FUNCTIONAL_GRIDDED'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.POINT_XYDATA_TYPE_STRING"></a>

#### POINT_XYDATA_TYPE_STRING *= 'XYPoint'*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Constants.GRANTA_Constants.RANGE_XYDATA_TYPE_STRING"></a>

#### RANGE_XYDATA_TYPE_STRING *= 'XYRange'*

<a id="module-GRANTA_MIScriptingToolkit.GRANTA_Exceptions"></a>

<a id="granta-exceptions"></a>

### GRANTA_Exceptions

<a id="GRANTA_MIScriptingToolkit.GRANTA_Exceptions.GRANTA_Exception"></a>

### *exception* GRANTA_Exception(expr, msg)

Bases: [`Exception`](https://docs.python.org/3/library/exceptions.html#Exception)

Exception raised when there are errors in input.

* **Parameters:**
  * **expr** – input expression in which the error occurred
  * **msg** – explanation of the error

<a id="GRANTA_MIScriptingToolkit.GRANTA_Exceptions.GRANTA_ServiceLayerError"></a>

### *exception* GRANTA_ServiceLayerError(slResponse, operation)

Bases: [`Exception`](https://docs.python.org/3/library/exceptions.html#Exception)

Exception raised when the Granta MI Service Layer returns an error.

* **Parameters:**
  * **slResponse** – type [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse), request data causing this error
  * **operation** – a string that identifies the operation from which this exception originated
* **Variables:**
  * **responseXML** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – the XML from the response from Granta MI
  * **message** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – error string extracted from responseXML
  * **responseCode** ([*int*](https://docs.python.org/3/library/functions.html#int)) – HTTP response code associated with this error
  * **data** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – request data causing this error

<a id="module-GRANTA_MIScriptingToolkit.GRANTA_Logging"></a>

<a id="granta-logging"></a>

### GRANTA_Logging

<a id="GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging"></a>

### *class* GRANTA_Logging

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Implements some basic logging functionality. Tracked events are printed to the console.
: For comprehensive logging capabilities, use the Python ‘logging’ module.

<a id="GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.propagate"></a>

#### propagate *= True*

<a id="GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.info"></a>

#### info(message)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.debug"></a>

#### debug(message)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.warning"></a>

#### warning(message)

<a id="GRANTA_MIScriptingToolkit.GRANTA_Logging.GRANTA_Logging.error"></a>

#### error(message)

<a id="module-GRANTA_MIScriptingToolkit.GRANTA_MISession"></a>

<a id="granta-misession"></a>

### GRANTA_MISession

<a id="GRANTA_MIScriptingToolkit.GRANTA_MISession.GRANTA_MISession"></a>

### *class* GRANTA_MISession(url, username=None, password=None, domain=None, verbosity='ERROR', autoLogon=False, receiveTimeout=300000, authorization=None, retries=0)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The base object for the GRANTA_MIScripting toolkit. This creates a connection to a
Granta MI Server via a Granta MI Service Layer.

Parameters username, password, domain, and autoLogon are optional - use either SetCredentials or
UseAutoLogon to specify the desired authentication method if these are omitted.

* **Parameters:**
  * **url** – URL of your Granta MI Service Layer installation
  * **username** – Your Granta MI username (for Basic authentication)
  * **password** – Your Granta MI password (for Basic authentication)
  * **domain** – Your Granta MI user domain (for Basic authentication)
  * **verbosity** – Logging verbosity; accepted values are “ERROR”, “WARNING”, or “DEBUG”
  * **autoLogon** – If set to True, this object will authenticate as the current Windows user
  * **receiveTimeout** – Time in milliseconds to wait for a response before timing out
  * **authorization** – [`OIDC`](#module-GRANTA_MIScriptingToolkit.OIDC) object (for OpenID Connect authentication)
  * **retries** – The number of times to retry failing requests

<a id="GRANTA_MIScriptingToolkit.GRANTA_MISession.GRANTA_MISession.TestConnection"></a>

#### TestConnection()

Raises a GRANTA_Exception if connection cannot be made - eg bad credentials or unreachable Granta MI Service Layer URL

<a id="GRANTA_MIScriptingToolkit.GRANTA_MISession.GRANTA_MISession.browseService"></a>

#### *property* browseService

Property browseService is of type [`BrowseService`](#module-GRANTA_MIScriptingToolkit.BrowseService)

<a id="GRANTA_MIScriptingToolkit.GRANTA_MISession.GRANTA_MISession.searchService"></a>

#### *property* searchService

Property searchService is of type [`SearchService`](#module-GRANTA_MIScriptingToolkit.SearchService)

<a id="GRANTA_MIScriptingToolkit.GRANTA_MISession.GRANTA_MISession.dataExportService"></a>

#### *property* dataExportService

Property dataExportService is of type [`DataExportService`](#module-GRANTA_MIScriptingToolkit.DataExportService)

<a id="GRANTA_MIScriptingToolkit.GRANTA_MISession.GRANTA_MISession.dataImportService"></a>

#### *property* dataImportService

Property dataImportService is of type [`DataImportService`](#module-GRANTA_MIScriptingToolkit.DataImportService)

<a id="GRANTA_MIScriptingToolkit.GRANTA_MISession.GRANTA_MISession.engineeringDataService"></a>

#### *property* engineeringDataService

Property engineeringDataService is of type [`EngineeringDataService`](#module-GRANTA_MIScriptingToolkit.EngineeringDataService)

<a id="module-GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest"></a>

<a id="getassociatedrecordsrequest"></a>

### GetAssociatedRecordsRequest

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest"></a>

### *class* GetAssociatedRecordsRequest(attributeReferences=None, linkDirection=None, populateGUIDs=None, recordFilter=None, recordReferences=None, tableReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetAssociatedRecords operation.

* **Parameters:**
  * **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects
  * **linkDirection** – type int
  * **populateGUIDs** – type bool
  * **recordFilter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **recordReferences** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **tableReference** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection"></a>

#### *class* AssociationLinkDirection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection.NONE"></a>

#### NONE *= 0*

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection.Both"></a>

#### Both *= 1*

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection.Forward"></a>

#### Forward *= 2*

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection.Reverse"></a>

#### Reverse *= 3*

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.attributeReferences"></a>

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.recordReferences"></a>

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.linkDirection"></a>

#### *property* linkDirection

Property linkDirection is of type int.

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.populateGUIDs"></a>

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.recordFilter"></a>

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.tableReference"></a>

#### *property* tableReference

Property tableReference is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AddAttributeReference"></a>

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetAssociatedRecordsRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AddRecordReference"></a>

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetAssociatedRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetAssociatedRecordsResponse"></a>

<a id="getassociatedrecordsresponse"></a>

### GetAssociatedRecordsResponse

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsResponse.GetAssociatedRecordsResponse"></a>

### *class* GetAssociatedRecordsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetAssociatedRecords operation.
An array of [`AssociatedRecords`](#module-GRANTA_MIScriptingToolkit.AssociatedRecords) objects.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetAssociatedRecordsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsResponse.GetAssociatedRecordsResponse.associatedRecords"></a>

#### *property* associatedRecords

Property associatedRecords is a list of [`AssociatedRecords`](#module-GRANTA_MIScriptingToolkit.AssociatedRecords) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetAssociatedRecordsResponse.GetAssociatedRecordsResponse.AddAssociatedRecords"></a>

#### AddAssociatedRecords(\_associatedRecords)

Appends \_associatedRecords to associatedRecords property on GetAssociatedRecordsResponse C-object.

* **Parameters:**
  **\_associatedRecords** – object of type AssociatedRecords.

<a id="module-GRANTA_MIScriptingToolkit.GetAttributeDetailsRequest"></a>

<a id="getattributedetailsrequest"></a>

### GetAttributeDetailsRequest

<a id="GRANTA_MIScriptingToolkit.GetAttributeDetailsRequest.GetAttributeDetailsRequest"></a>

### *class* GetAttributeDetailsRequest(attributeReferences=None, minMaxCalculation=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetAttributeDetails operation.
For requests at least one
[`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) is required.

* **Parameters:**
  * **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects
  * **minMaxCalculation** – type int

<a id="GRANTA_MIScriptingToolkit.GetAttributeDetailsRequest.GetAttributeDetailsRequest.attributeReferences"></a>

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetAttributeDetailsRequest.GetAttributeDetailsRequest.minMaxCalculation"></a>

#### *property* minMaxCalculation

Property minMaxCalculation is of type int.

<a id="GRANTA_MIScriptingToolkit.GetAttributeDetailsRequest.GetAttributeDetailsRequest.AddAttributeReference"></a>

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetAttributeDetailsRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

<a id="GRANTA_MIScriptingToolkit.GetAttributeDetailsRequest.GetAttributeDetailsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetAttributeDetailsResponse"></a>

<a id="getattributedetailsresponse"></a>

### GetAttributeDetailsResponse

<a id="GRANTA_MIScriptingToolkit.GetAttributeDetailsResponse.GetAttributeDetailsResponse"></a>

### *class* GetAttributeDetailsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetAttributeDetails operation.
Includes an array of [`AttributeDetail`](#module-GRANTA_MIScriptingToolkit.AttributeDetail) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetAttributeDetailsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetAttributeDetailsResponse.GetAttributeDetailsResponse.attributeDetails"></a>

#### *property* attributeDetails

Property attributeDetails is a list of [`AttributeDetail`](#module-GRANTA_MIScriptingToolkit.AttributeDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetAttributeDetailsResponse.GetAttributeDetailsResponse.AddAttributeDetails"></a>

#### AddAttributeDetails(\_attributeDetail)

Appends \_attributeDetail to attributeDetails property on GetAttributeDetailsResponse C-object.

* **Parameters:**
  **\_attributeDetail** – object of type AttributeDetail.

<a id="module-GRANTA_MIScriptingToolkit.GetAttributeParametersRequest"></a>

<a id="getattributeparametersrequest"></a>

### GetAttributeParametersRequest

<a id="GRANTA_MIScriptingToolkit.GetAttributeParametersRequest.GetAttributeParametersRequest"></a>

### *class* GetAttributeParametersRequest(attributeReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetAttributeParameters operation.
For requests, at least one
[`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) is required.

* **Parameters:**
  **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects

<a id="GRANTA_MIScriptingToolkit.GetAttributeParametersRequest.GetAttributeParametersRequest.attributeReferences"></a>

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetAttributeParametersRequest.GetAttributeParametersRequest.AddAttributeReference"></a>

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetAttributeParametersRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

<a id="GRANTA_MIScriptingToolkit.GetAttributeParametersRequest.GetAttributeParametersRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetAttributeParametersResponse"></a>

<a id="getattributeparametersresponse"></a>

### GetAttributeParametersResponse

<a id="GRANTA_MIScriptingToolkit.GetAttributeParametersResponse.GetAttributeParametersResponse"></a>

### *class* GetAttributeParametersResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetAttributeParameters operation.
Includes an array of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetAttributeParametersResponse object.

<a id="GRANTA_MIScriptingToolkit.GetAttributeParametersResponse.GetAttributeParametersResponse.attributeParameters"></a>

#### *property* attributeParameters

Property attributeParameters is a list of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetAvailableExportersRequest"></a>

<a id="getavailableexportersrequest"></a>

### GetAvailableExportersRequest

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersRequest.GetAvailableExportersRequest"></a>

### *class* GetAvailableExportersRequest(DBKey=None, applicabilityTag=None, matchDB=None, model=None, package=None, partialTableReference=None, versionPolicy=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetAvailableExporters operation.

* **Parameters:**
  * **DBKey** – type str
  * **applicabilityTag** – type str
  * **matchDB** – type bool
  * **model** – type str
  * **package** – type str
  * **partialTableReference** – type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference)
  * **versionPolicy** – type int

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersRequest.GetAvailableExportersRequest.applicabilityTag"></a>

#### *property* applicabilityTag

Property applicabilityTag is of type str.

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersRequest.GetAvailableExportersRequest.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersRequest.GetAvailableExportersRequest.matchDB"></a>

#### *property* matchDB

Property matchDB is of type bool. If true, we check that the exporter config Table element is in a Database element for the right dbKey.

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersRequest.GetAvailableExportersRequest.model"></a>

#### *property* model

Property model is of type str.

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersRequest.GetAvailableExportersRequest.package"></a>

#### *property* package

Property package is of type str.

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersRequest.GetAvailableExportersRequest.partialTableReference"></a>

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersRequest.GetAvailableExportersRequest.versionPolicy"></a>

#### *property* versionPolicy

Property versionPolicy is of type int. See [`GRANTA_Constants.VersionPolicy`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersRequest.GetAvailableExportersRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetAvailableExportersResponse"></a>

<a id="getavailableexportersresponse"></a>

### GetAvailableExportersResponse

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersResponse.GetAvailableExportersResponse"></a>

### *class* GetAvailableExportersResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetAvailableExporters operation. Contains a list of exporters.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetAvailableExportersResponse object.

<a id="GRANTA_MIScriptingToolkit.GetAvailableExportersResponse.GetAvailableExportersResponse.exporters"></a>

#### *property* exporters

Property exporters is a list of [`Exporter`](#module-GRANTA_MIScriptingToolkit.Exporter) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetChildNodes"></a>

<a id="getchildnodes"></a>

### GetChildNodes

<a id="GRANTA_MIScriptingToolkit.GetChildNodes.GetChildNodes"></a>

### *class* GetChildNodes(excludeWithdrawn=None, parent=None, populateGUIDs=None, recordFilter=None, recurse=None, recurseMaxDepth=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetChildNodes operation.
A [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) for the record you wish to
find the children of is required.

* **Parameters:**
  * **excludeWithdrawn** – type bool
  * **parent** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **populateGUIDs** – type bool
  * **recordFilter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **recurse** – type bool
  * **recurseMaxDepth** – type int

<a id="GRANTA_MIScriptingToolkit.GetChildNodes.GetChildNodes.excludeWithdrawn"></a>

#### *property* excludeWithdrawn

Property excludeWithdrawn is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetChildNodes.GetChildNodes.parent"></a>

#### *property* parent

Property parent is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.GetChildNodes.GetChildNodes.populateGUIDs"></a>

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetChildNodes.GetChildNodes.recordFilter"></a>

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

<a id="GRANTA_MIScriptingToolkit.GetChildNodes.GetChildNodes.recurse"></a>

#### *property* recurse

Property recurse is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetChildNodes.GetChildNodes.recurseMaxDepth"></a>

#### *property* recurseMaxDepth

Property recurseMaxDepth is of type int.

<a id="GRANTA_MIScriptingToolkit.GetChildNodes.GetChildNodes.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetChildNodesResponse"></a>

<a id="getchildnodesresponse"></a>

### GetChildNodesResponse

<a id="GRANTA_MIScriptingToolkit.GetChildNodesResponse.GetChildNodesResponse"></a>

### *class* GetChildNodesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Response for the [`GetChildNodes`](#module-GRANTA_MIScriptingToolkit.GetChildNodes) operation.
Includes an array of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetChildNodesResponse object.

<a id="GRANTA_MIScriptingToolkit.GetChildNodesResponse.GetChildNodesResponse.treeRecords"></a>

#### *property* treeRecords

Property treeRecords is a list of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetChildNodesResponse.GetChildNodesResponse.AddTreeRecord"></a>

#### AddTreeRecord(\_treeRecord)

Appends \_treeRecord to treeRecords property on GetChildNodesResponse C-object.

* **Parameters:**
  **\_treeRecord** – object of type TreeRecord.

<a id="module-GRANTA_MIScriptingToolkit.GetDatabaseParameters"></a>

<a id="getdatabaseparameters"></a>

### GetDatabaseParameters

<a id="GRANTA_MIScriptingToolkit.GetDatabaseParameters.GetDatabaseParameters"></a>

### *class* GetDatabaseParameters(DBKey=None, requireStandardNames=None, useStandardNamesWherePossible=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetDatabaseParameters operation.
Requires a DBKey to be set. The parameters requireStandardNames and useStandardNamesWherePossible
both default to false.

* **Parameters:**
  * **DBKey** – type str
  * **requireStandardNames** – type bool
  * **useStandardNamesWherePossible** – type bool

<a id="GRANTA_MIScriptingToolkit.GetDatabaseParameters.GetDatabaseParameters.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.GetDatabaseParameters.GetDatabaseParameters.requireStandardNames"></a>

#### *property* requireStandardNames

Property requireStandardNames is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetDatabaseParameters.GetDatabaseParameters.useStandardNamesWherePossible"></a>

#### *property* useStandardNamesWherePossible

Property useStandardNamesWherePossible is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetDatabaseParameters.GetDatabaseParameters.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetDatabaseParametersResponse"></a>

<a id="getdatabaseparametersresponse"></a>

### GetDatabaseParametersResponse

<a id="GRANTA_MIScriptingToolkit.GetDatabaseParametersResponse.GetDatabaseParametersResponse"></a>

### *class* GetDatabaseParametersResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetDatabaseParametersResponse operation.
Includes an array of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetDatabaseParametersResponse object.

<a id="GRANTA_MIScriptingToolkit.GetDatabaseParametersResponse.GetDatabaseParametersResponse.parameterDetails"></a>

#### *property* parameterDetails

Property parameterDetails is a list of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetDatabaseParametersResponse.GetDatabaseParametersResponse.AddParameterDetail"></a>

#### AddParameterDetail(\_parameterDetail)

Appends \_parameterDetail to parameterDetails property on GetDatabaseParametersResponse C-object.

* **Parameters:**
  **\_parameterDetail** – object of type ParameterDetail.

<a id="module-GRANTA_MIScriptingToolkit.GetDatabasesResponse"></a>

<a id="getdatabasesresponse"></a>

### GetDatabasesResponse

<a id="GRANTA_MIScriptingToolkit.GetDatabasesResponse.GetDatabasesResponse"></a>

### *class* GetDatabasesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetDatabases operation.
Includes an array of [`DatabaseDetail`](#module-GRANTA_MIScriptingToolkit.DatabaseDetail) objects and
a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetDatabasesResponse object.

<a id="GRANTA_MIScriptingToolkit.GetDatabasesResponse.GetDatabasesResponse.databases"></a>

#### *property* databases

Property databases is a list of [`DatabaseDetail`](#module-GRANTA_MIScriptingToolkit.DatabaseDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetDatabasesResponse.GetDatabasesResponse.AddDatabase"></a>

#### AddDatabase(\_databaseDetail)

Appends \_databaseDetail to databases property on GetDatabasesResponse C-object.

* **Parameters:**
  **\_databaseDetail** – object of type DatabaseDetail.

<a id="module-GRANTA_MIScriptingToolkit.GetDatasheetPath"></a>

<a id="getdatasheetpath"></a>

### GetDatasheetPath

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPath.GetDatasheetPath"></a>

### *class* GetDatasheetPath(datasheetType=None, recordReferences=None, unitConversionContext=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetDatasheetPath operation.
Requires at least one [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) to be
provided. The parameters unitConversionContext and datasheetType are optional. datasheetType
defaults to ‘Datasheet’.

* **Parameters:**
  * **datasheetType** – type int
  * **recordReferences** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **unitConversionContext** – type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext)

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPath.GetDatasheetPath.recordReferences"></a>

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPath.GetDatasheetPath.datasheetType"></a>

#### *property* datasheetType

Property datasheetType is of type int.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPath.GetDatasheetPath.unitConversionContext"></a>

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPath.GetDatasheetPath.AddRecordReference"></a>

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetDatasheetPath C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPath.GetDatasheetPath.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized"></a>

<a id="getdatasheetpathparameterized"></a>

### GetDatasheetPathParameterized

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized.GetDatasheetPathParameterized"></a>

### *class* GetDatasheetPathParameterized(DBKey=None, datasheetType=None, unitConversionContext=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetDatasheetPathParameterized operation.
Requires a DBKey to be set. The parameters unitConversionContext and datasheetType are optional.
datasheetType defaults to ‘Datasheet’.

* **Parameters:**
  * **DBKey** – type str
  * **datasheetType** – type int
  * **unitConversionContext** – type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext)

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized.GetDatasheetPathParameterized.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized.GetDatasheetPathParameterized.datasheetType"></a>

#### *property* datasheetType

Property datasheetType is of type int.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized.GetDatasheetPathParameterized.unitConversionContext"></a>

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized.GetDatasheetPathParameterized.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetDatasheetPathParameterizedResponse"></a>

<a id="getdatasheetpathparameterizedresponse"></a>

### GetDatasheetPathParameterizedResponse

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse"></a>

### *class* GetDatasheetPathParameterizedResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the
[`GetDatasheetPathParameterized`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized)
operation.
Includes an array of DatasheetPathParameterized objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetDatasheetPathParameterizedResponse object.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.currencyQuery"></a>

#### *property* currencyQuery

Property currencyQuery is of type str.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.DBKeyQuery"></a>

#### *property* DBKeyQuery

Property DBKeyQuery is of type str.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.recordHistoryIdentityQueryName"></a>

#### *property* recordHistoryIdentityQueryName

Property recordHistoryIdentityQueryName is of type str.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.URL"></a>

#### *property* URL

Property URL is of type str.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.unitSystemQuery"></a>

#### *property* unitSystemQuery

Property unitSystemQuery is of type str.

<a id="module-GRANTA_MIScriptingToolkit.GetDatasheetPathResponse"></a>

<a id="getdatasheetpathresponse"></a>

### GetDatasheetPathResponse

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathResponse.GetDatasheetPathResponse"></a>

### *class* GetDatasheetPathResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetDatasheetPath`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPath) operation.
Includes an array of [`DatasheetPath`](#module-GRANTA_MIScriptingToolkit.DatasheetPath) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetDatasheetPathResponse object.

<a id="GRANTA_MIScriptingToolkit.GetDatasheetPathResponse.GetDatasheetPathResponse.datasheetPaths"></a>

#### *property* datasheetPaths

Property datasheetPaths is a list of [`DatasheetPath`](#module-GRANTA_MIScriptingToolkit.DatasheetPath) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetExporterParametersRequest"></a>

<a id="getexporterparametersrequest"></a>

### GetExporterParametersRequest

<a id="GRANTA_MIScriptingToolkit.GetExporterParametersRequest.GetExporterParametersRequest"></a>

### *class* GetExporterParametersRequest(exporterKey=None, populateGUIDs=None, records=None, unitConversionContext=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetExporterParameters operation.

* **Parameters:**
  * **exporterKey** – type str
  * **populateGUIDs** – type bool
  * **records** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **unitConversionContext** – type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext)

<a id="GRANTA_MIScriptingToolkit.GetExporterParametersRequest.GetExporterParametersRequest.records"></a>

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetExporterParametersRequest.GetExporterParametersRequest.exporterKey"></a>

#### *property* exporterKey

Property exporterKey is of type str.

<a id="GRANTA_MIScriptingToolkit.GetExporterParametersRequest.GetExporterParametersRequest.populateGUIDs"></a>

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetExporterParametersRequest.GetExporterParametersRequest.unitConversionContext"></a>

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

<a id="GRANTA_MIScriptingToolkit.GetExporterParametersRequest.GetExporterParametersRequest.AddRecord"></a>

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on GetExporterParametersRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.GetExporterParametersRequest.GetExporterParametersRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetExporterParametersResponse"></a>

<a id="getexporterparametersresponse"></a>

### GetExporterParametersResponse

<a id="GRANTA_MIScriptingToolkit.GetExporterParametersResponse.GetExporterParametersResponse"></a>

### *class* GetExporterParametersResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetExporterParameters operation. Contains a list of records and details for
exporting their attributes.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetExporterParametersResponse object.

<a id="GRANTA_MIScriptingToolkit.GetExporterParametersResponse.GetExporterParametersResponse.records"></a>

#### *property* records

Property records is a list of [`RecordExporterParameters`](#module-GRANTA_MIScriptingToolkit.RecordExporterParameters) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetIntegrationProfiles"></a>

<a id="getintegrationprofiles"></a>

### GetIntegrationProfiles

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfiles.GetIntegrationProfiles"></a>

### *class* GetIntegrationProfiles(databases=None, depth=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetIntegrationProfiles operation.

* **Parameters:**
  * **databases** – type list of str objects
  * **depth** – type int

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfiles.GetIntegrationProfiles.Depth"></a>

#### *class* Depth

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfiles.GetIntegrationProfiles.Depth.Profiles"></a>

#### Profiles *= 0*

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfiles.GetIntegrationProfiles.Depth.Databases"></a>

#### Databases *= 1*

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfiles.GetIntegrationProfiles.Depth.Tables"></a>

#### Tables *= 2*

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfiles.GetIntegrationProfiles.databases"></a>

#### *property* databases

Property databases is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfiles.GetIntegrationProfiles.depth"></a>

#### *property* depth

Property depth is of type int.

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfiles.GetIntegrationProfiles.AddDatabase"></a>

#### AddDatabase(value)

Appends value to databases property on GetIntegrationProfiles C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfiles.GetIntegrationProfiles.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetIntegrationProfilesResponse"></a>

<a id="getintegrationprofilesresponse"></a>

### GetIntegrationProfilesResponse

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfilesResponse.GetIntegrationProfilesResponse"></a>

### *class* GetIntegrationProfilesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from [`GetIntegrationProfiles`](#module-GRANTA_MIScriptingToolkit.GetIntegrationProfiles)
operation.
Includes an array of
[`IntegrationProfileDetail`](#module-GRANTA_MIScriptingToolkit.IntegrationProfileDetail) objects and
a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse).

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetIntegrationProfilesResponse object.

<a id="GRANTA_MIScriptingToolkit.GetIntegrationProfilesResponse.GetIntegrationProfilesResponse.profileDetails"></a>

#### *property* profileDetails

Property profileDetails is a list of [`IntegrationProfileDetail`](#module-GRANTA_MIScriptingToolkit.IntegrationProfileDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetLayouts"></a>

<a id="getlayouts"></a>

### GetLayouts

<a id="GRANTA_MIScriptingToolkit.GetLayouts.GetLayouts"></a>

### *class* GetLayouts(applicabilityTag=None, layouts=None, minMaxCalculation=None, table=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetLayouts operation.
Includes a table reference or list of layouts to retrieve.

* **Parameters:**
  * **applicabilityTag** – type str
  * **layouts** – type list of [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference) objects
  * **minMaxCalculation** – type int
  * **table** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

<a id="GRANTA_MIScriptingToolkit.GetLayouts.GetLayouts.layouts"></a>

#### *property* layouts

Property layouts is a list of [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetLayouts.GetLayouts.table"></a>

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

<a id="GRANTA_MIScriptingToolkit.GetLayouts.GetLayouts.applicabilityTag"></a>

#### *property* applicabilityTag

Property applicabilityTag is of type str.

<a id="GRANTA_MIScriptingToolkit.GetLayouts.GetLayouts.minMaxCalculation"></a>

#### *property* minMaxCalculation

Property minMaxCalculation is of type int.

<a id="GRANTA_MIScriptingToolkit.GetLayouts.GetLayouts.AddLayout"></a>

#### AddLayout(\_layoutReference)

Appends \_layoutReference to layouts property on GetLayouts C-object.

* **Parameters:**
  **\_layoutReference** – object of type LayoutReference.

<a id="GRANTA_MIScriptingToolkit.GetLayouts.GetLayouts.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetLayoutsResponse"></a>

<a id="getlayoutsresponse"></a>

### GetLayoutsResponse

<a id="GRANTA_MIScriptingToolkit.GetLayoutsResponse.GetLayoutsResponse"></a>

### *class* GetLayoutsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetLayouts`](#module-GRANTA_MIScriptingToolkit.GetLayouts) operation.
Includes a list of layouts retrieved.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetLayoutsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetLayoutsResponse.GetLayoutsResponse.layoutDetails"></a>

#### *property* layoutDetails

Property layoutDetails is a list of [`LayoutDetail`](#module-GRANTA_MIScriptingToolkit.LayoutDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetLayoutsResponse.GetLayoutsResponse.AddLayoutDetail"></a>

#### AddLayoutDetail(\_layoutDetail)

Appends \_layoutDetail to layoutDetails property on GetLayoutsResponse C-object.

* **Parameters:**
  **\_layoutDetail** – object of type LayoutDetail.

<a id="module-GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest"></a>

<a id="getlinkedrecordsrequest"></a>

### GetLinkedRecordsRequest

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest.GetLinkedRecordsRequest"></a>

### *class* GetLinkedRecordsRequest(directLinksOnly=None, populateGUIDs=None, recordFilter=None, recordLinkGroups=None, recordReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetLinkedRecords operation.

* **Parameters:**
  * **directLinksOnly** – type bool
  * **populateGUIDs** – type bool
  * **recordFilter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **recordLinkGroups** – type list of [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference) objects
  * **recordReferences** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest.GetLinkedRecordsRequest.recordLinkGroups"></a>

#### *property* recordLinkGroups

Property recordLinkGroups is a list of [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest.GetLinkedRecordsRequest.recordReferences"></a>

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest.GetLinkedRecordsRequest.directLinksOnly"></a>

#### *property* directLinksOnly

Property directLinksOnly is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest.GetLinkedRecordsRequest.populateGUIDs"></a>

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest.GetLinkedRecordsRequest.recordFilter"></a>

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest.GetLinkedRecordsRequest.AddRecordLinkGroup"></a>

#### AddRecordLinkGroup(\_recordLinkGroupReference)

Appends \_recordLinkGroupReference to recordLinkGroups property on GetLinkedRecordsRequest C-object.

* **Parameters:**
  **\_recordLinkGroupReference** – object of type RecordLinkGroupReference.

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest.GetLinkedRecordsRequest.AddRecordReference"></a>

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetLinkedRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsRequest.GetLinkedRecordsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetLinkedRecordsResponse"></a>

<a id="getlinkedrecordsresponse"></a>

### GetLinkedRecordsResponse

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsResponse.GetLinkedRecordsResponse"></a>

### *class* GetLinkedRecordsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetLinkedRecords operation.
Includes an array of [`SourceRecord`](#module-GRANTA_MIScriptingToolkit.SourceRecord) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetLinkedRecordsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetLinkedRecordsResponse.GetLinkedRecordsResponse.sourceRecords"></a>

#### *property* sourceRecords

Property sourceRecords is a list of [`SourceRecord`](#module-GRANTA_MIScriptingToolkit.SourceRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetMetaAttributesRequest"></a>

<a id="getmetaattributesrequest"></a>

### GetMetaAttributesRequest

<a id="GRANTA_MIScriptingToolkit.GetMetaAttributesRequest.GetMetaAttributesRequest"></a>

### *class* GetMetaAttributesRequest(attributeReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetMetaAttributesRequest operation.

* **Parameters:**
  **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects

<a id="GRANTA_MIScriptingToolkit.GetMetaAttributesRequest.GetMetaAttributesRequest.attributeReferences"></a>

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetMetaAttributesRequest.GetMetaAttributesRequest.AddAttributeReference"></a>

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetMetaAttributesRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

<a id="GRANTA_MIScriptingToolkit.GetMetaAttributesRequest.GetMetaAttributesRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetMetaAttributesResponse"></a>

<a id="getmetaattributesresponse"></a>

### GetMetaAttributesResponse

<a id="GRANTA_MIScriptingToolkit.GetMetaAttributesResponse.GetMetaAttributesResponse"></a>

### *class* GetMetaAttributesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetMetaAttributes operation. Includes an array of
[`AttributeMetaAttributes`](#module-GRANTA_MIScriptingToolkit.AttributeMetaAttributes) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetMetaAttributesResponse object.

<a id="GRANTA_MIScriptingToolkit.GetMetaAttributesResponse.GetMetaAttributesResponse.attributes"></a>

#### *property* attributes

Property attributes is a list of [`AttributeMetaAttributes`](#module-GRANTA_MIScriptingToolkit.AttributeMetaAttributes) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetParameterDetailsRequest"></a>

<a id="getparameterdetailsrequest"></a>

### GetParameterDetailsRequest

<a id="GRANTA_MIScriptingToolkit.GetParameterDetailsRequest.GetParameterDetailsRequest"></a>

### *class* GetParameterDetailsRequest(attribute=None, parameterReferences=None, recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetParameterDetails operation.

* **Parameters:**
  * **attribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **parameterReferences** – type list of [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference) objects
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

<a id="GRANTA_MIScriptingToolkit.GetParameterDetailsRequest.GetParameterDetailsRequest.parameterReferences"></a>

#### *property* parameterReferences

Property parameterReferences is a list of [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetParameterDetailsRequest.GetParameterDetailsRequest.attribute"></a>

#### *property* attribute

Property attribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

<a id="GRANTA_MIScriptingToolkit.GetParameterDetailsRequest.GetParameterDetailsRequest.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.GetParameterDetailsRequest.GetParameterDetailsRequest.AddParameterReference"></a>

#### AddParameterReference(\_parameterReference)

Appends \_parameterReference to parameterReferences property on GetParameterDetailsRequest C-object.

* **Parameters:**
  **\_parameterReference** – object of type ParameterReference.

<a id="GRANTA_MIScriptingToolkit.GetParameterDetailsRequest.GetParameterDetailsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetParameterDetailsResponse"></a>

<a id="getparameterdetailsresponse"></a>

### GetParameterDetailsResponse

<a id="GRANTA_MIScriptingToolkit.GetParameterDetailsResponse.GetParameterDetailsResponse"></a>

### *class* GetParameterDetailsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetParameterDetails operation.
Includes an array of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetParameterDetailsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetParameterDetailsResponse.GetParameterDetailsResponse.attributeParameters"></a>

#### *property* attributeParameters

Property attributeParameters is a list of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest"></a>

<a id="getrecordattributesbyrefrequest"></a>

### GetRecordAttributesByRefRequest

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest"></a>

### *class* GetRecordAttributesByRefRequest(attributeReferences=None, binaryData=None, directLinksOnly=None, exportedAttributes=None, functionalDataSettings=None, populateGUIDs=None, recordFilter=None, recordReferences=None, unitConversionContext=None, useFallback=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetRecordAttributesByRef operation.
For requests, at least one [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) and
at least one [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) is
required.

* **Parameters:**
  * **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects
  * **binaryData** – type [`BinaryDataSettings`](#module-GRANTA_MIScriptingToolkit.BinaryDataSettings)
  * **directLinksOnly** – type bool
  * **exportedAttributes** – type list of [`ExportedAttribute`](#module-GRANTA_MIScriptingToolkit.ExportedAttribute) objects
  * **functionalDataSettings** – type [`FunctionalDataSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataSettings)
  * **populateGUIDs** – type bool
  * **recordFilter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **recordReferences** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **unitConversionContext** – type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext)
  * **useFallback** – type bool

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.attributeReferences"></a>

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.exportedAttributes"></a>

#### *property* exportedAttributes

Property exportedAttributes is a list of [`ExportedAttribute`](#module-GRANTA_MIScriptingToolkit.ExportedAttribute) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.recordReferences"></a>

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.directLinksOnly"></a>

#### *property* directLinksOnly

Property directLinksOnly is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.populateGUIDs"></a>

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.recordFilter"></a>

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.unitConversionContext"></a>

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.useFallback"></a>

#### *property* useFallback

Property useFallback is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.binaryData"></a>

#### *property* binaryData

Property binaryData is of type [`BinaryDataSettings`](#module-GRANTA_MIScriptingToolkit.BinaryDataSettings).

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.functionalDataSettings"></a>

#### *property* functionalDataSettings

Property functionalDataSettings is of type [`FunctionalDataSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataSettings).

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.AddAttributeReference"></a>

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetRecordAttributesByRefRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.AddExportedAttribute"></a>

#### AddExportedAttribute(\_exportedAttribute)

Appends \_exportedAttribute to exportedAttributes property on GetRecordAttributesByRefRequest C-object.

* **Parameters:**
  **\_exportedAttribute** – object of type ExportedAttribute.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.AddRecordReference"></a>

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetRecordAttributesByRefRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetRecordAttributesByRefResponse"></a>

<a id="getrecordattributesbyrefresponse"></a>

### GetRecordAttributesByRefResponse

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefResponse.GetRecordAttributesByRefResponse"></a>

### *class* GetRecordAttributesByRefResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetRecordAttributesByRef operation.
Includes an array of [`RecordData`](#module-GRANTA_MIScriptingToolkit.RecordData) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRecordAttributesByRefResponse object.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefResponse.GetRecordAttributesByRefResponse.recordData"></a>

#### *property* recordData

Property recordData is a list of [`RecordData`](#module-GRANTA_MIScriptingToolkit.RecordData) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesByRefResponse.GetRecordAttributesByRefResponse.AddRecordData"></a>

#### AddRecordData(\_recordData)

Appends \_recordData to recordData property on GetRecordAttributesByRefResponse C-object.

* **Parameters:**
  **\_recordData** – object of type RecordData.

<a id="module-GRANTA_MIScriptingToolkit.GetRecordAttributesRequest"></a>

<a id="getrecordattributesrequest"></a>

### GetRecordAttributesRequest

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesRequest.GetRecordAttributesRequest"></a>

### *class* GetRecordAttributesRequest(includeEmpty=None, includeMeta=None, includeParamDetails=None, minMaxCalculation=None, recordReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetRecordAttribute operation.

* **Parameters:**
  * **includeEmpty** – type bool
  * **includeMeta** – type bool
  * **includeParamDetails** – type bool
  * **minMaxCalculation** – type int
  * **recordReferences** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesRequest.GetRecordAttributesRequest.recordReferences"></a>

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesRequest.GetRecordAttributesRequest.includeEmpty"></a>

#### *property* includeEmpty

Property includeEmpty is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesRequest.GetRecordAttributesRequest.includeMeta"></a>

#### *property* includeMeta

Property includeMeta is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesRequest.GetRecordAttributesRequest.includeParamDetails"></a>

#### *property* includeParamDetails

Property includeParamDetails is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesRequest.GetRecordAttributesRequest.minMaxCalculation"></a>

#### *property* minMaxCalculation

Property minMaxCalculation is of type int.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesRequest.GetRecordAttributesRequest.AddRecordReference"></a>

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetRecordAttributesRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesRequest.GetRecordAttributesRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetRecordAttributesResponse"></a>

<a id="getrecordattributesresponse"></a>

### GetRecordAttributesResponse

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesResponse.GetRecordAttributesResponse"></a>

### *class* GetRecordAttributesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetRecordAttributes operation.
Includes an array of [`RecordAttribute`](#module-GRANTA_MIScriptingToolkit.RecordAttribute) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRecordAttributesResponse object.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesResponse.GetRecordAttributesResponse.recordAttributes"></a>

#### *property* recordAttributes

Property recordAttributes is a list of [`RecordAttribute`](#module-GRANTA_MIScriptingToolkit.RecordAttribute) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetRecordAttributesResponse.GetRecordAttributesResponse.AddRecordAttribute"></a>

#### AddRecordAttribute(\_recordAttribute)

Appends \_recordAttribute to recordAttributes property on GetRecordAttributesResponse C-object.

* **Parameters:**
  **\_recordAttribute** – object of type RecordAttribute.

<a id="module-GRANTA_MIScriptingToolkit.GetRecordLinkGroups"></a>

<a id="getrecordlinkgroups"></a>

### GetRecordLinkGroups

<a id="GRANTA_MIScriptingToolkit.GetRecordLinkGroups.GetRecordLinkGroups"></a>

### *class* GetRecordLinkGroups(DBKey=None, recordLinkGroups=None, standardNamesOnly=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Returns details of Record Link Groups in a Granta MI Database.

* **Parameters:**
  * **DBKey** – type str
  * **recordLinkGroups** – type list of [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference) objects
  * **standardNamesOnly** – type bool

<a id="GRANTA_MIScriptingToolkit.GetRecordLinkGroups.GetRecordLinkGroups.recordLinkGroups"></a>

#### *property* recordLinkGroups

Property recordLinkGroups is a list of [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetRecordLinkGroups.GetRecordLinkGroups.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str. When this is provided, details of all Record Link Groups in the specified Granta MI Database will be returned.

<a id="GRANTA_MIScriptingToolkit.GetRecordLinkGroups.GetRecordLinkGroups.standardNamesOnly"></a>

#### *property* standardNamesOnly

Property standardNamesOnly is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetRecordLinkGroups.GetRecordLinkGroups.AddRecordLinkGroup"></a>

#### AddRecordLinkGroup(\_recordLinkGroupReference)

Appends \_recordLinkGroupReference to recordLinkGroups property on GetRecordLinkGroups C-object.

* **Parameters:**
  **\_recordLinkGroupReference** – object of type RecordLinkGroupReference.

<a id="GRANTA_MIScriptingToolkit.GetRecordLinkGroups.GetRecordLinkGroups.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetRecordLinkGroupsResponse"></a>

<a id="getrecordlinkgroupsresponse"></a>

### GetRecordLinkGroupsResponse

<a id="GRANTA_MIScriptingToolkit.GetRecordLinkGroupsResponse.GetRecordLinkGroupsResponse"></a>

### *class* GetRecordLinkGroupsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetRecordLinkGroups`](#module-GRANTA_MIScriptingToolkit.GetRecordLinkGroups)
operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRecordLinkGroupsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetRecordLinkGroupsResponse.GetRecordLinkGroupsResponse.recordLinkGroups"></a>

#### *property* recordLinkGroups

Property recordLinkGroups is a list of [`RecordLinkGroupDetail`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetRecordVersionsRequest"></a>

<a id="getrecordversionsrequest"></a>

### GetRecordVersionsRequest

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest"></a>

### *class* GetRecordVersionsRequest(records=None, versions=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetRecordVersions operation.

* **Parameters:**
  * **records** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **versions** – type int

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector"></a>

#### *class* VersionSelector

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector.LatestRead"></a>

#### LatestRead *= 0*

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector.Latest"></a>

#### Latest *= 1*

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector.AllReleased"></a>

#### AllReleased *= 2*

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector.All"></a>

#### All *= 3*

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.records"></a>

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.versions"></a>

#### *property* versions

Property versions is of type int. See [`GetRecordVersionsRequest.VersionSelector`](#GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector) for supported values.

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.AddRecord"></a>

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on GetRecordVersionsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetRecordVersionsResponse"></a>

<a id="getrecordversionsresponse"></a>

### GetRecordVersionsResponse

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsResponse.GetRecordVersionsResponse"></a>

### *class* GetRecordVersionsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetRecordVersions operation. Contains a list of version states.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRecordVersionsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetRecordVersionsResponse.GetRecordVersionsResponse.recordStates"></a>

#### *property* recordStates

Property recordStates is a list of [`RecordVersionState`](#module-GRANTA_MIScriptingToolkit.RecordVersionState) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetRootNode"></a>

<a id="getrootnode"></a>

### GetRootNode

<a id="GRANTA_MIScriptingToolkit.GetRootNode.GetRootNode"></a>

### *class* GetRootNode(table=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetRootNode operation.
Requires a [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference) .

* **Parameters:**
  **table** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

<a id="GRANTA_MIScriptingToolkit.GetRootNode.GetRootNode.table"></a>

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

<a id="GRANTA_MIScriptingToolkit.GetRootNode.GetRootNode.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetRootNodeResponse"></a>

<a id="getrootnoderesponse"></a>

### GetRootNodeResponse

<a id="GRANTA_MIScriptingToolkit.GetRootNodeResponse.GetRootNodeResponse"></a>

### *class* GetRootNodeResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetRootNode`](#module-GRANTA_MIScriptingToolkit.GetRootNode) operation.
Includes a [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) object and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRootNodeResponse object.

<a id="GRANTA_MIScriptingToolkit.GetRootNodeResponse.GetRootNodeResponse.rootNode"></a>

#### *property* rootNode

Property rootNode is of type [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord).

<a id="module-GRANTA_MIScriptingToolkit.GetSubsetsRequest"></a>

<a id="getsubsetsrequest"></a>

### GetSubsetsRequest

<a id="GRANTA_MIScriptingToolkit.GetSubsetsRequest.GetSubsetsRequest"></a>

### *class* GetSubsetsRequest(subsetReferences=None, table=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetSubsets operation.
Requires a [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference) .

* **Parameters:**
  * **subsetReferences** – type list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) objects
  * **table** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

<a id="GRANTA_MIScriptingToolkit.GetSubsetsRequest.GetSubsetsRequest.subsetReferences"></a>

#### *property* subsetReferences

Property subsetReferences is of type list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference).

<a id="GRANTA_MIScriptingToolkit.GetSubsetsRequest.GetSubsetsRequest.table"></a>

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

<a id="GRANTA_MIScriptingToolkit.GetSubsetsRequest.GetSubsetsRequest.AddSubsetReference"></a>

#### AddSubsetReference(\_subsetReference)

Appends \_subsetReference to subsetReferences property on GetSubsetsRequest C-object.

* **Parameters:**
  **\_subsetReference** – object of type SubsetReference.

<a id="GRANTA_MIScriptingToolkit.GetSubsetsRequest.GetSubsetsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetSubsetsResponse"></a>

<a id="getsubsetsresponse"></a>

### GetSubsetsResponse

<a id="GRANTA_MIScriptingToolkit.GetSubsetsResponse.GetSubsetsResponse"></a>

### *class* GetSubsetsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetSubsets operation.
Includes an array of SubsetDetails objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetSubsetsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetSubsetsResponse.GetSubsetsResponse.subsetDetails"></a>

#### *property* subsetDetails

Property subsetDetails is a list of [`SubsetDetail`](#module-GRANTA_MIScriptingToolkit.SubsetDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetTables"></a>

<a id="gettables"></a>

### GetTables

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables"></a>

### *class* GetTables(DBKey=None, attributeSelectors=None, tableFilter=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetTables operation.
Requires a DBKey to be set.

* **Parameters:**
  * **DBKey** – type str
  * **attributeSelectors** – type list of int objects
  * **tableFilter** – type int

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.AttributeSelector"></a>

#### *class* AttributeSelector

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.AttributeSelector.NONE"></a>

#### NONE *= 0*

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.AttributeSelector.NonMetaAttributes"></a>

#### NonMetaAttributes *= 1*

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.AttributeSelector.MetaAttributes"></a>

#### MetaAttributes *= 2*

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.AttributeSelector.StandardAttributes"></a>

#### StandardAttributes *= 3*

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.attributeSelectors"></a>

#### *property* attributeSelectors

Property attributeSelectors is a list of int objects. See [`GetTables.AttributeSelector`](#GRANTA_MIScriptingToolkit.GetTables.GetTables.AttributeSelector) for supported values.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.tableFilter"></a>

#### *property* tableFilter

Property tableFilter is of type int. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.AddAttributeSelector"></a>

#### AddAttributeSelector(value)

Appends value to attributeSelectors property on GetTables C-object.

* **Parameters:**
  **value** – object of type int.

<a id="GRANTA_MIScriptingToolkit.GetTables.GetTables.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetTablesResponse"></a>

<a id="gettablesresponse"></a>

### GetTablesResponse

<a id="GRANTA_MIScriptingToolkit.GetTablesResponse.GetTablesResponse"></a>

### *class* GetTablesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetTables`](#module-GRANTA_MIScriptingToolkit.GetTables) operation.
Includes an array of [`TableDetail`](#module-GRANTA_MIScriptingToolkit.TableDetail) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetTablesResponse object.

<a id="GRANTA_MIScriptingToolkit.GetTablesResponse.GetTablesResponse.tableDetails"></a>

#### *property* tableDetails

Property tableDetails is a list of [`TableDetail`](#module-GRANTA_MIScriptingToolkit.TableDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetTablesResponse.GetTablesResponse.AddTableDetail"></a>

#### AddTableDetail(\_tableDetail)

Appends \_tableDetail to tableDetails property on GetTablesResponse C-object.

* **Parameters:**
  **\_tableDetail** – object of type TableDetail.

<a id="module-GRANTA_MIScriptingToolkit.GetTreeRecordsRequest"></a>

<a id="gettreerecordsrequest"></a>

### GetTreeRecordsRequest

<a id="GRANTA_MIScriptingToolkit.GetTreeRecordsRequest.GetTreeRecordsRequest"></a>

### *class* GetTreeRecordsRequest(records=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetTreeRecords operation.
Requires at least one [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

* **Parameters:**
  **records** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

<a id="GRANTA_MIScriptingToolkit.GetTreeRecordsRequest.GetTreeRecordsRequest.records"></a>

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetTreeRecordsRequest.GetTreeRecordsRequest.AddRecord"></a>

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on GetTreeRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.GetTreeRecordsRequest.GetTreeRecordsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetTreeRecordsResponse"></a>

<a id="gettreerecordsresponse"></a>

### GetTreeRecordsResponse

<a id="GRANTA_MIScriptingToolkit.GetTreeRecordsResponse.GetTreeRecordsResponse"></a>

### *class* GetTreeRecordsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output to the GetTreeRecords operation.
Includes an array of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetTreeRecordsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetTreeRecordsResponse.GetTreeRecordsResponse.treeRecords"></a>

#### *property* treeRecords

Property treeRecords is a list of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetTreeRecordsResponse.GetTreeRecordsResponse.AddTreeRecord"></a>

#### AddTreeRecord(\_treeRecord)

Appends \_treeRecord to treeRecords property on GetTreeRecordsResponse C-object.

* **Parameters:**
  **\_treeRecord** – object of type TreeRecord.

<a id="module-GRANTA_MIScriptingToolkit.GetUnitConversionsRequest"></a>

<a id="getunitconversionsrequest"></a>

### GetUnitConversionsRequest

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsRequest.GetUnitConversionsRequest"></a>

### *class* GetUnitConversionsRequest(DBKey=None, sourceCurrency=None, targetCurrency=None, unitConversionContexts=None, unitSymbols=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetUnitConversions operation.

* **Parameters:**
  * **DBKey** – type str
  * **sourceCurrency** – type str
  * **targetCurrency** – type str
  * **unitConversionContexts** – type list of [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext) objects
  * **unitSymbols** – type list of str objects

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsRequest.GetUnitConversionsRequest.unitConversionContexts"></a>

#### *property* unitConversionContexts

Property unitConversionContexts is a list of [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsRequest.GetUnitConversionsRequest.unitSymbols"></a>

#### *property* unitSymbols

Property unitSymbols is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsRequest.GetUnitConversionsRequest.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsRequest.GetUnitConversionsRequest.sourceCurrency"></a>

#### *property* sourceCurrency

Property sourceCurrency is of type str.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsRequest.GetUnitConversionsRequest.targetCurrency"></a>

#### *property* targetCurrency

Property targetCurrency is of type str.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsRequest.GetUnitConversionsRequest.AddUnitConversionContext"></a>

#### AddUnitConversionContext(\_unitConversionContext)

Appends \_unitConversionContext to unitConversionContexts property on GetUnitConversionsRequest C-object.

* **Parameters:**
  **\_unitConversionContext** – object of type UnitConversionContext.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsRequest.GetUnitConversionsRequest.AddUnitSymbol"></a>

#### AddUnitSymbol(value)

Appends value to unitSymbols property on GetUnitConversionsRequest C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsRequest.GetUnitConversionsRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetUnitConversionsResponse"></a>

<a id="getunitconversionsresponse"></a>

### GetUnitConversionsResponse

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsResponse.GetUnitConversionsResponse"></a>

### *class* GetUnitConversionsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetUnitConversions operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetUnitConversionsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsResponse.GetUnitConversionsResponse.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsResponse.GetUnitConversionsResponse.sourceUnits"></a>

#### *property* sourceUnits

Property sourceUnits is a list of [`SourceUnitConversionSet`](#module-GRANTA_MIScriptingToolkit.SourceUnitConversionSet) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetUnitConversionsResponse.GetUnitConversionsResponse.unitConversionContexts"></a>

#### *property* unitConversionContexts

Property unitConversionContexts is a list of [`UnitConversionContextConversionSet`](#module-GRANTA_MIScriptingToolkit.UnitConversionContextConversionSet) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetUnitSystems"></a>

<a id="getunitsystems"></a>

### GetUnitSystems

<a id="GRANTA_MIScriptingToolkit.GetUnitSystems.GetUnitSystems"></a>

### *class* GetUnitSystems(DBKey=None, excludeCurrencies=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type for requesting the unit systems on a particular Granta MI database.
A DBKey must be specified.

* **Parameters:**
  * **DBKey** – type str
  * **excludeCurrencies** – type bool

<a id="GRANTA_MIScriptingToolkit.GetUnitSystems.GetUnitSystems.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.GetUnitSystems.GetUnitSystems.excludeCurrencies"></a>

#### *property* excludeCurrencies

Property excludeCurrencies is of type bool.

<a id="GRANTA_MIScriptingToolkit.GetUnitSystems.GetUnitSystems.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetUnitSystemsResponse"></a>

<a id="getunitsystemsresponse"></a>

### GetUnitSystemsResponse

<a id="GRANTA_MIScriptingToolkit.GetUnitSystemsResponse.GetUnitSystemsResponse"></a>

### *class* GetUnitSystemsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

The output of a [`GetUnitSystems`](#module-GRANTA_MIScriptingToolkit.GetUnitSystems) requests.
Contains an array of unit systems for the specified database.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetUnitSystemsResponse object.

<a id="GRANTA_MIScriptingToolkit.GetUnitSystemsResponse.GetUnitSystemsResponse.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.GetUnitSystemsResponse.GetUnitSystemsResponse.unitSystems"></a>

#### *property* unitSystems

Property unitSystems is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GetUploadAddressesRequest"></a>

<a id="getuploadaddressesrequest"></a>

### GetUploadAddressesRequest

<a id="GRANTA_MIScriptingToolkit.GetUploadAddressesRequest.GetUploadAddressesRequest"></a>

### *class* GetUploadAddressesRequest(attributeReferences=None, recordReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetUploadAddresses operation.
Contains a list of records and attributes to get the upload URL addresses of.

* **Parameters:**
  * **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects
  * **recordReferences** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

<a id="GRANTA_MIScriptingToolkit.GetUploadAddressesRequest.GetUploadAddressesRequest.attributeReferences"></a>

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetUploadAddressesRequest.GetUploadAddressesRequest.recordReferences"></a>

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GetUploadAddressesRequest.GetUploadAddressesRequest.AddAttributeReference"></a>

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetUploadAddressesRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

<a id="GRANTA_MIScriptingToolkit.GetUploadAddressesRequest.GetUploadAddressesRequest.AddRecordReference"></a>

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetUploadAddressesRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.GetUploadAddressesRequest.GetUploadAddressesRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GetUploadAddressesResponse"></a>

<a id="getuploadaddressesresponse"></a>

### GetUploadAddressesResponse

<a id="GRANTA_MIScriptingToolkit.GetUploadAddressesResponse.GetUploadAddressesResponse"></a>

### *class* GetUploadAddressesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetUploadAddresses operation.
Contains a list of
[`RecordWithAttributeAddresses`](#module-GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses)
objects for each record in the
[`GetUploadAddressesRequest`](#module-GRANTA_MIScriptingToolkit.GetUploadAddressesRequest).

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetUploadAddressesResponse object.

<a id="GRANTA_MIScriptingToolkit.GetUploadAddressesResponse.GetUploadAddressesResponse.recordsWithAttributeAddresses"></a>

#### *property* recordsWithAttributeAddresses

Property recordsWithAttributeAddresses is a list of [`RecordWithAttributeAddresses`](#module-GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.GraphDomain"></a>

<a id="graphdomain"></a>

### GraphDomain

<a id="GRANTA_MIScriptingToolkit.GraphDomain.GraphDomain"></a>

### *class* GraphDomain(parameterDomains=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain choices of fixed parameter values.
A value must be chosen for each parameter, within the given constraints.

* **Parameters:**
  **parameterDomains** – type list of [`ParameterDomain`](#module-GRANTA_MIScriptingToolkit.ParameterDomain) objects

<a id="GRANTA_MIScriptingToolkit.GraphDomain.GraphDomain.parameterDomains"></a>

#### *property* parameterDomains

Property parameterDomains is a list of [`ParameterDomain`](#module-GRANTA_MIScriptingToolkit.ParameterDomain) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.GraphDomain.GraphDomain.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.GreaterThanSearchValue"></a>

<a id="greaterthansearchvalue"></a>

### GreaterThanSearchValue

<a id="GRANTA_MIScriptingToolkit.GreaterThanSearchValue.GreaterThanSearchValue"></a>

### *class* GreaterThanSearchValue(tabularColumn=None, unit=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data greater than a specified value.
Criterion passes if data value is above a given value. Point, range, and integer attributes are
supported.

* **Parameters:**
  * **tabularColumn** – type str
  * **unit** – type str
  * **value** – type float

<a id="GRANTA_MIScriptingToolkit.GreaterThanSearchValue.GreaterThanSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.GreaterThanSearchValue.GreaterThanSearchValue.unit"></a>

#### *property* unit

Property unit is of type str.

<a id="GRANTA_MIScriptingToolkit.GreaterThanSearchValue.GreaterThanSearchValue.value"></a>

#### *property* value

Property value is of type float.

<a id="GRANTA_MIScriptingToolkit.GreaterThanSearchValue.GreaterThanSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.HelpInfo"></a>

<a id="helpinfo"></a>

### HelpInfo

<a id="GRANTA_MIScriptingToolkit.HelpInfo.HelpInfo"></a>

### *class* HelpInfo(databaseHelp=None, helpURI=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type describing how to obtain detailed Help information for an entity in a Granta MI database.

* **Parameters:**
  * **databaseHelp** – type bool
  * **helpURI** – type str

<a id="GRANTA_MIScriptingToolkit.HelpInfo.HelpInfo.databaseHelp"></a>

#### *property* databaseHelp

Property databaseHelp is of type bool.

<a id="GRANTA_MIScriptingToolkit.HelpInfo.HelpInfo.helpURI"></a>

#### *property* helpURI

Property helpURI is of type str.

<a id="GRANTA_MIScriptingToolkit.HelpInfo.HelpInfo.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.HighEndSearchValue"></a>

<a id="highendsearchvalue"></a>

### HighEndSearchValue

<a id="GRANTA_MIScriptingToolkit.HighEndSearchValue.HighEndSearchValue"></a>

### *class* HighEndSearchValue(unit=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Upper limit for the [`BetweenSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenSearchValue)
search criterion.
Requires a double value and an optional unit.

* **Parameters:**
  * **unit** – type str
  * **value** – type float

<a id="GRANTA_MIScriptingToolkit.HighEndSearchValue.HighEndSearchValue.unit"></a>

#### *property* unit

Property unit is of type str.

<a id="GRANTA_MIScriptingToolkit.HighEndSearchValue.HighEndSearchValue.value"></a>

#### *property* value

Property value is of type float.

<a id="GRANTA_MIScriptingToolkit.HighEndSearchValue.HighEndSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.HyperlinkDataType"></a>

<a id="hyperlinkdatatype"></a>

### HyperlinkDataType

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType"></a>

### *class* HyperlinkDataType(description=None, hyperlinkDisplay=None, isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain a HyperLink string value.

* **Parameters:**
  * **description** – type str
  * **hyperlinkDisplay** – type int
  * **isApplicable** – type bool
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType.HyperlinkDisplay"></a>

#### *class* HyperlinkDisplay

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType.HyperlinkDisplay.New"></a>

#### New *= 0*

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType.HyperlinkDisplay.Top"></a>

#### Top *= 1*

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType.HyperlinkDisplay.Content"></a>

#### Content *= 2*

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType.description"></a>

#### *property* description

Property description is of type str.

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType.hyperlinkDisplay"></a>

#### *property* hyperlinkDisplay

Property hyperlinkDisplay is of type int.

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.HyperlinkDataType.HyperlinkDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.IDataValue"></a>

<a id="idatavalue"></a>

### IDataValue

<a id="GRANTA_MIScriptingToolkit.IDataValue.IDataValue"></a>

### *class* IDataValue

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Base class for data values in Granta MI.

You should not interact directly with this class.

<a id="module-GRANTA_MIScriptingToolkit.ImportAttributeValue"></a>

<a id="importattributevalue"></a>

### ImportAttributeValue

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue"></a>

### *class* ImportAttributeValue(attributeReference=None, dateDataValue=None, discreteDataValue=None, fileDataValue=None, floatFunctionalGriddedDataType=None, floatFunctionalSeriesDataType=None, hyperlinkDataValue=None, integerDataValue=None, logicalDataValue=None, longTextDataValue=None, pictureDataValue=None, pointDataValue=None, rangeDataValue=None, shortTextDataValue=None, tabularDataValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An [`AttributeValue`](#module-GRANTA_MIScriptingToolkit.AttributeValue) to import to a Granta MI
database.
Requires a [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) and an
attribute value for the data type you wish to upload. Supports: PointDataType, RangeDataType,
FloatFunctionalSeriesDataType, FloatFunctionalGriddedDataType,  ShortTextDataType,
LongTextDataType,  DiscreteDataType, IntegerDataType,  LogicalDataType, HyperlinkDataType, and
[`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType).

* **Parameters:**
  * **attributeReference** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **dateDataValue** – type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType)
  * **discreteDataValue** – type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType)
  * **fileDataValue** – type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType)
  * **floatFunctionalGriddedDataType** – type [`FloatFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType)
  * **floatFunctionalSeriesDataType** – type [`FloatFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType)
  * **hyperlinkDataValue** – type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType)
  * **integerDataValue** – type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType)
  * **logicalDataValue** – type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType)
  * **longTextDataValue** – type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType)
  * **pictureDataValue** – type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType)
  * **pointDataValue** – type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType)
  * **rangeDataValue** – type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType)
  * **shortTextDataValue** – type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType)
  * **tabularDataValue** – type [`TabularDataType`](#module-GRANTA_MIScriptingToolkit.TabularDataType)

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.attributeReference"></a>

#### *property* attributeReference

Property attributeReference is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.dateDataValue"></a>

#### *property* dateDataValue

Property dateDataValue is of type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.discreteDataValue"></a>

#### *property* discreteDataValue

Property discreteDataValue is of type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.fileDataValue"></a>

#### *property* fileDataValue

Property fileDataValue is of type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.floatFunctionalGriddedDataType"></a>

#### *property* floatFunctionalGriddedDataType

Property floatFunctionalGriddedDataType is of type [`FloatFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.floatFunctionalSeriesDataType"></a>

#### *property* floatFunctionalSeriesDataType

Property floatFunctionalSeriesDataType is of type [`FloatFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.hyperlinkDataValue"></a>

#### *property* hyperlinkDataValue

Property hyperlinkDataValue is of type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.integerDataValue"></a>

#### *property* integerDataValue

Property integerDataValue is of type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.logicalDataValue"></a>

#### *property* logicalDataValue

Property logicalDataValue is of type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.longTextDataValue"></a>

#### *property* longTextDataValue

Property longTextDataValue is of type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.pictureDataValue"></a>

#### *property* pictureDataValue

Property pictureDataValue is of type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.pointDataValue"></a>

#### *property* pointDataValue

Property pointDataValue is of type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.rangeDataValue"></a>

#### *property* rangeDataValue

Property rangeDataValue is of type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.shortTextDataValue"></a>

#### *property* shortTextDataValue

Property shortTextDataValue is of type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.tabularDataValue"></a>

#### *property* tabularDataValue

Property tabularDataValue is of type [`TabularDataType`](#module-GRANTA_MIScriptingToolkit.TabularDataType).

<a id="GRANTA_MIScriptingToolkit.ImportAttributeValue.ImportAttributeValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ImportRecord"></a>

<a id="importrecord"></a>

### ImportRecord

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord"></a>

### *class* ImportRecord(copyDestinationParent=None, existingRecord=None, importAttributeValues=None, importRecordMode=None, isFolder=None, recordName=None, releaseRecord=None, subsetReferences=None, updateSubsetsMode=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A record for importing to the Granta MI database.
The ‘importRecordMode’ property specifies whether a record should be created, copied, or updated.
The accepted values are ‘Create’, ‘Update’, and ‘Copy’. If importRecordMode is ‘Create’, set
‘existingRecord’ to the parent record under which the new record is to be created. If
importRecordMode is ‘Update’, set ‘existingRecord’, to the target record to be changed. If
importRecordMode is ‘Copy’, set ‘existingRecord’ to be the source data for the operation, and use
‘copyDestinationParent’ to specify where the record copy should appear. For versioned databases,
set releaseRecord to specify whether the new or updated record should be released. Use
‘subsetReferences’ to define the Subsets the imported record belongs to (subsets will not be
inherited from the parent). ‘isFolder’ will have no effect if ‘importRecordMode’ is set to
‘Update’.

* **Parameters:**
  * **copyDestinationParent** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **existingRecord** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **importAttributeValues** – type list of [`ImportAttributeValue`](#module-GRANTA_MIScriptingToolkit.ImportAttributeValue) objects
  * **importRecordMode** – type str
  * **isFolder** – type bool
  * **recordName** – type str
  * **releaseRecord** – type bool
  * **subsetReferences** – type list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) objects
  * **updateSubsetsMode** – type int

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.importAttributeValues"></a>

#### *property* importAttributeValues

Property importAttributeValues is a list of [`ImportAttributeValue`](#module-GRANTA_MIScriptingToolkit.ImportAttributeValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.subsetReferences"></a>

#### *property* subsetReferences

Property subsetReferences is a list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.recordName"></a>

#### *property* recordName

Property recordName is of type str.

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.copyDestinationParent"></a>

#### *property* copyDestinationParent

Property copyDestinationParent is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.existingRecord"></a>

#### *property* existingRecord

Property existingRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.importRecordMode"></a>

#### *property* importRecordMode

Property importRecordMode is of type str. See [`GRANTA_Constants.ImportTypes`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.isFolder"></a>

#### *property* isFolder

Property isFolder is of type bool.

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.releaseRecord"></a>

#### *property* releaseRecord

Property releaseRecord is of type bool.

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.updateSubsetsMode"></a>

#### *property* updateSubsetsMode

Property updateSubsetsMode is of type int. See [`GRANTA_Constants.UpdateSubsetsMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.AddImportAttributeValue"></a>

#### AddImportAttributeValue(\_importAttributeValue)

Appends \_importAttributeValue to importAttributeValues property on ImportRecord C-object.

* **Parameters:**
  **\_importAttributeValue** – object of type ImportAttributeValue.

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.AddSubsetReference"></a>

#### AddSubsetReference(\_subsetReference)

Appends \_subsetReference to subsetReferences property on ImportRecord C-object.

* **Parameters:**
  **\_subsetReference** – object of type SubsetReference.

<a id="GRANTA_MIScriptingToolkit.ImportRecord.ImportRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.IntegerDataType"></a>

<a id="integerdatatype"></a>

### IntegerDataType

<a id="GRANTA_MIScriptingToolkit.IntegerDataType.IntegerDataType"></a>

### *class* IntegerDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain an integer data type.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type int

<a id="GRANTA_MIScriptingToolkit.IntegerDataType.IntegerDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.IntegerDataType.IntegerDataType.value"></a>

#### *property* value

Property value is of type int.

<a id="GRANTA_MIScriptingToolkit.IntegerDataType.IntegerDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.IntegrationDatabase"></a>

<a id="integrationdatabase"></a>

### IntegrationDatabase

<a id="GRANTA_MIScriptingToolkit.IntegrationDatabase.IntegrationDatabase"></a>

### *class* IntegrationDatabase(DBKey=None, author=None, company=None, integrationTables=None, volumeName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a database within an Integration Profile.

* **Parameters:**
  * **DBKey** – type str
  * **author** – type str
  * **company** – type str
  * **integrationTables** – type list of [`TableDetail`](#module-GRANTA_MIScriptingToolkit.TableDetail) objects
  * **volumeName** – type str

<a id="GRANTA_MIScriptingToolkit.IntegrationDatabase.IntegrationDatabase.author"></a>

#### *property* author

Property author is of type str.

<a id="GRANTA_MIScriptingToolkit.IntegrationDatabase.IntegrationDatabase.company"></a>

#### *property* company

Property company is of type str.

<a id="GRANTA_MIScriptingToolkit.IntegrationDatabase.IntegrationDatabase.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.IntegrationDatabase.IntegrationDatabase.integrationTables"></a>

#### *property* integrationTables

Property integrationTables is a list of [`TableDetail`](#module-GRANTA_MIScriptingToolkit.TableDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.IntegrationDatabase.IntegrationDatabase.volumeName"></a>

#### *property* volumeName

Property volumeName is of type str.

<a id="GRANTA_MIScriptingToolkit.IntegrationDatabase.IntegrationDatabase.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.IntegrationProfileDetail"></a>

<a id="integrationprofiledetail"></a>

### IntegrationProfileDetail

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileDetail.IntegrationProfileDetail"></a>

### *class* IntegrationProfileDetail(description=None, groupName=None, integrationDatabases=None, name=None, profile=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed information about an Integration Profile.

* **Parameters:**
  * **description** – type [`RichText`](#module-GRANTA_MIScriptingToolkit.RichText)
  * **groupName** – type str
  * **integrationDatabases** – type list of [`IntegrationDatabase`](#module-GRANTA_MIScriptingToolkit.IntegrationDatabase) objects
  * **name** – type str
  * **profile** – type [`IntegrationProfileReference`](#module-GRANTA_MIScriptingToolkit.IntegrationProfileReference)

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileDetail.IntegrationProfileDetail.description"></a>

#### *property* description

Property description is of type [`RichText`](#module-GRANTA_MIScriptingToolkit.RichText).

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileDetail.IntegrationProfileDetail.groupName"></a>

#### *property* groupName

Property groupName is of type str.

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileDetail.IntegrationProfileDetail.integrationDatabases"></a>

#### *property* integrationDatabases

Property integrationDatabases is a list of [`IntegrationDatabase`](#module-GRANTA_MIScriptingToolkit.IntegrationDatabase) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileDetail.IntegrationProfileDetail.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileDetail.IntegrationProfileDetail.profile"></a>

#### *property* profile

Property profile is of type [`IntegrationProfileReference`](#module-GRANTA_MIScriptingToolkit.IntegrationProfileReference).

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileDetail.IntegrationProfileDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.IntegrationProfileReference"></a>

<a id="integrationprofilereference"></a>

### IntegrationProfileReference

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileReference.IntegrationProfileReference"></a>

### *class* IntegrationProfileReference(key=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains the key for an Integration Profile.

* **Parameters:**
  **key** – type str

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileReference.IntegrationProfileReference.key"></a>

#### *property* key

Property key is of type str.

<a id="GRANTA_MIScriptingToolkit.IntegrationProfileReference.IntegrationProfileReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LayoutDetail"></a>

<a id="layoutdetail"></a>

### LayoutDetail

<a id="GRANTA_MIScriptingToolkit.LayoutDetail.LayoutDetail"></a>

### *class* LayoutDetail(attributeCategories=None, layout=None, name=None, table=None, displayNames=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a Layout in a Granta MI database.

* **Parameters:**
  * **attributeCategories** – type list of [`AttributeCategory`](#module-GRANTA_MIScriptingToolkit.AttributeCategory) objects
  * **layout** – type [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference)
  * **name** – type str
  * **table** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)
  * **displayNames** – type list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects

<a id="GRANTA_MIScriptingToolkit.LayoutDetail.LayoutDetail.attributeCategories"></a>

#### *property* attributeCategories

Property attributeCategories is a list of [`AttributeCategory`](#module-GRANTA_MIScriptingToolkit.AttributeCategory) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.LayoutDetail.LayoutDetail.displayNames"></a>

#### *property* displayNames

Property displayNames is a list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.LayoutDetail.LayoutDetail.layout"></a>

#### *property* layout

Property layout is of type [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference).

<a id="GRANTA_MIScriptingToolkit.LayoutDetail.LayoutDetail.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.LayoutDetail.LayoutDetail.table"></a>

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

<a id="GRANTA_MIScriptingToolkit.LayoutDetail.LayoutDetail.AddAttributeCategory"></a>

#### AddAttributeCategory(\_attributeCategory)

Appends \_attributeCategory to attributeCategories property on LayoutDetail C-object.

* **Parameters:**
  **\_attributeCategory** – object of type AttributeCategory.

<a id="GRANTA_MIScriptingToolkit.LayoutDetail.LayoutDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LayoutReference"></a>

<a id="layoutreference"></a>

### LayoutReference

<a id="GRANTA_MIScriptingToolkit.LayoutReference.LayoutReference"></a>

### *class* LayoutReference(DBKey=None, layoutIdentity=None, name=None, partialTableReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular Layout in a Granta MI database.

* **Parameters:**
  * **DBKey** – type str
  * **layoutIdentity** – type int
  * **name** – type str
  * **partialTableReference** – type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference)

<a id="GRANTA_MIScriptingToolkit.LayoutReference.LayoutReference.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.LayoutReference.LayoutReference.layoutIdentity"></a>

#### *property* layoutIdentity

Property layoutIdentity is of type int.

<a id="GRANTA_MIScriptingToolkit.LayoutReference.LayoutReference.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.LayoutReference.LayoutReference.partialTableReference"></a>

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

<a id="GRANTA_MIScriptingToolkit.LayoutReference.LayoutReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LessThanSearchValue"></a>

<a id="lessthansearchvalue"></a>

### LessThanSearchValue

<a id="GRANTA_MIScriptingToolkit.LessThanSearchValue.LessThanSearchValue"></a>

### *class* LessThanSearchValue(tabularColumn=None, unit=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data less than a specified value.
Criterion passes if data value is less than a given value. Point, range, and integer attributes are
supported.

* **Parameters:**
  * **tabularColumn** – type str
  * **unit** – type str
  * **value** – type float

<a id="GRANTA_MIScriptingToolkit.LessThanSearchValue.LessThanSearchValue.tabularColumn"></a>

#### *property* tabularColumn

Property tabularColumn is of type str.

<a id="GRANTA_MIScriptingToolkit.LessThanSearchValue.LessThanSearchValue.unit"></a>

#### *property* unit

Property unit is of type str.

<a id="GRANTA_MIScriptingToolkit.LessThanSearchValue.LessThanSearchValue.value"></a>

#### *property* value

Property value is of type float.

<a id="GRANTA_MIScriptingToolkit.LessThanSearchValue.LessThanSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LinkAllCombinations"></a>

<a id="linkallcombinations"></a>

### LinkAllCombinations

<a id="GRANTA_MIScriptingToolkit.LinkAllCombinations.LinkAllCombinations"></a>

### *class* LinkAllCombinations(nodeName=None, sourceRecords=None, targetRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, add links to all the given target records. Silently skip any links
that already exist.

* **Parameters:**
  * **nodeName** – type str
  * **sourceRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **targetRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

<a id="GRANTA_MIScriptingToolkit.LinkAllCombinations.LinkAllCombinations.sourceRecords"></a>

#### *property* sourceRecords

Property sourceRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.LinkAllCombinations.LinkAllCombinations.targetRecords"></a>

#### *property* targetRecords

Property targetRecords is of type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.LinkAllCombinations.LinkAllCombinations.nodeName"></a>

#### *property* nodeName

Property nodeName is of type str.

<a id="GRANTA_MIScriptingToolkit.LinkAllCombinations.LinkAllCombinations.AddSourceRecord"></a>

#### AddSourceRecord(\_recordReference)

Appends \_recordReference to sourceRecords property on LinkAllCombinations C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.LinkAllCombinations.LinkAllCombinations.AddTargetRecord"></a>

#### AddTargetRecord(\_recordReference)

Appends \_recordReference to targetRecords property on LinkAllCombinations C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.LinkAllCombinations.LinkAllCombinations.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LinkRecords"></a>

<a id="linkrecords"></a>

### LinkRecords

<a id="GRANTA_MIScriptingToolkit.LinkRecords.LinkRecords"></a>

### *class* LinkRecords(nodeName=None, sourceRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, add links to the target records specified for that source record.
Silently skip any links that already exist.

* **Parameters:**
  * **nodeName** – type str
  * **sourceRecords** – type list of [`NotatedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord) objects

<a id="GRANTA_MIScriptingToolkit.LinkRecords.LinkRecords.sourceRecords"></a>

#### *property* sourceRecords

Property sourceRecords is of type list of [`NotatedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord).

<a id="GRANTA_MIScriptingToolkit.LinkRecords.LinkRecords.nodeName"></a>

#### *property* nodeName

Property nodeName is of type str.

<a id="GRANTA_MIScriptingToolkit.LinkRecords.LinkRecords.AddSourceRecord"></a>

#### AddSourceRecord(\_notatedTargetedSourceRecord)

Appends \_notatedTargetedSourceRecord to sourceRecords property on LinkRecords C-object.

* **Parameters:**
  **\_notatedTargetedSourceRecord** – object of type NotatedTargetedSourceRecord.

<a id="GRANTA_MIScriptingToolkit.LinkRecords.LinkRecords.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LinkedRecordsDataType"></a>

<a id="linkedrecordsdatatype"></a>

### LinkedRecordsDataType

<a id="GRANTA_MIScriptingToolkit.LinkedRecordsDataType.LinkedRecordsDataType"></a>

### *class* LinkedRecordsDataType(nodeName=None, recordLinkGroups=None, typeString=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type representing a list of linked Records.

* **Parameters:**
  * **nodeName** – type str
  * **recordLinkGroups** – type list of [`RecordLinkGroup`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroup) objects
  * **typeString** – type str

<a id="GRANTA_MIScriptingToolkit.LinkedRecordsDataType.LinkedRecordsDataType.nodeName"></a>

#### *property* nodeName

Property nodeName is of type str.

<a id="GRANTA_MIScriptingToolkit.LinkedRecordsDataType.LinkedRecordsDataType.recordLinkGroups"></a>

#### *property* recordLinkGroups

Property recordLinkGroups is a list of [`RecordLinkGroup`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroup) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.LinkedRecordsDataType.LinkedRecordsDataType.typeString"></a>

#### *property* typeString

Property typeString is of type str.

<a id="GRANTA_MIScriptingToolkit.LinkedRecordsDataType.LinkedRecordsDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ListDataType"></a>

<a id="listdatatype"></a>

### ListDataType

<a id="GRANTA_MIScriptingToolkit.ListDataType.ListDataType"></a>

### *class* ListDataType(items=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A list of values within a Cell in Tabular Data.

* **Parameters:**
  **items** – type list of [`ListItem`](#module-GRANTA_MIScriptingToolkit.ListItem) objects

<a id="GRANTA_MIScriptingToolkit.ListDataType.ListDataType.items"></a>

#### *property* items

Property items is a list of [`ListItem`](#module-GRANTA_MIScriptingToolkit.ListItem) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ListDataType.ListDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ListItem"></a>

<a id="listitem"></a>

### ListItem

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem"></a>

### *class* ListItem(dataType=None, dateDataValue=None, discreteDataValue=None, fileDataValue=None, hyperlinkDataValue=None, integerDataValue=None, logicalDataValue=None, longTextDataValue=None, pictureDataValue=None, pointDataValue=None, rangeDataValue=None, shortTextDataValue=None, sourceRecordReference=None, floatFunctionalGriddedDataValue=None, floatFunctionalSeriesDataValue=None, discreteFunctionalGriddedDataValue=None, discreteFunctionalSeriesDataValue=None, emptyDataValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An item in a List data value.

* **Parameters:**
  * **dataType** – type str
  * **dateDataValue** – type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType)
  * **discreteDataValue** – type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType)
  * **fileDataValue** – type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType)
  * **hyperlinkDataValue** – type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType)
  * **integerDataValue** – type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType)
  * **logicalDataValue** – type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType)
  * **longTextDataValue** – type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType)
  * **pictureDataValue** – type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType)
  * **pointDataValue** – type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType)
  * **rangeDataValue** – type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType)
  * **shortTextDataValue** – type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType)
  * **sourceRecordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **floatFunctionalGriddedDataValue** – type [`FloatFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType)
  * **floatFunctionalSeriesDataValue** – type [`FloatFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType)
  * **discreteFunctionalGriddedDataValue** – type [`DiscreteFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType)
  * **discreteFunctionalSeriesDataValue** – type [`DiscreteFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType)
  * **emptyDataValue** – type [`EmptyDataType`](#module-GRANTA_MIScriptingToolkit.EmptyDataType)

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.dataType"></a>

#### *property* dataType

Property dataType is of type str.

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.dateDataValue"></a>

#### *property* dateDataValue

Property dateDataValue is of type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.discreteDataValue"></a>

#### *property* discreteDataValue

Property discreteDataValue is of type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.discreteFunctionalGriddedDataValue"></a>

#### *property* discreteFunctionalGriddedDataValue

Property discreteFunctionalGriddedDataValue is of type [`DiscreteFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.discreteFunctionalSeriesDataValue"></a>

#### *property* discreteFunctionalSeriesDataValue

Property discreteFunctionalSeriesDataValue is of type [`DiscreteFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.emptyDataValue"></a>

#### *property* emptyDataValue

Property emptyDataValue is of type [`EmptyDataType`](#module-GRANTA_MIScriptingToolkit.EmptyDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.fileDataValue"></a>

#### *property* fileDataValue

Property fileDataValue is of type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.floatFunctionalGriddedDataValue"></a>

#### *property* floatFunctionalGriddedDataValue

Property floatFunctionalGriddedDataValue is of type [`FloatFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.floatFunctionalSeriesDataValue"></a>

#### *property* floatFunctionalSeriesDataValue

Property floatFunctionalSeriesDataValue is of type [`FloatFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.hyperlinkDataValue"></a>

#### *property* hyperlinkDataValue

Property hyperlinkDataValue is of type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.integerDataValue"></a>

#### *property* integerDataValue

Property integerDataValue is of type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.logicalDataValue"></a>

#### *property* logicalDataValue

Property logicalDataValue is of type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.longTextDataValue"></a>

#### *property* longTextDataValue

Property longTextDataValue is of type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.pictureDataValue"></a>

#### *property* pictureDataValue

Property pictureDataValue is of type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.pointDataValue"></a>

#### *property* pointDataValue

Property pointDataValue is of type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.rangeDataValue"></a>

#### *property* rangeDataValue

Property rangeDataValue is of type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.shortTextDataValue"></a>

#### *property* shortTextDataValue

Property shortTextDataValue is of type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.sourceRecordReference"></a>

#### *property* sourceRecordReference

Property sourceRecordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.ListItem.ListItem.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LogicalDataType"></a>

<a id="logicaldatatype"></a>

### LogicalDataType

<a id="GRANTA_MIScriptingToolkit.LogicalDataType.LogicalDataType"></a>

### *class* LogicalDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain a logical data type.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type bool

<a id="GRANTA_MIScriptingToolkit.LogicalDataType.LogicalDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.LogicalDataType.LogicalDataType.value"></a>

#### *property* value

Property value is of type bool.

<a id="GRANTA_MIScriptingToolkit.LogicalDataType.LogicalDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LongTextDataType"></a>

<a id="longtextdatatype"></a>

### LongTextDataType

<a id="GRANTA_MIScriptingToolkit.LongTextDataType.LongTextDataType"></a>

### *class* LongTextDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain a long text data type.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.LongTextDataType.LongTextDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.LongTextDataType.LongTextDataType.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.LongTextDataType.LongTextDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LookupValue"></a>

<a id="lookupvalue"></a>

### LookupValue

<a id="GRANTA_MIScriptingToolkit.LookupValue.LookupValue"></a>

### *class* LookupValue(attributeReference=None, attributeValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object containing an [`AttributeValue`](#module-GRANTA_MIScriptingToolkit.AttributeValue) and
[`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) object that uniquely
identify a record in a table.

* **Parameters:**
  * **attributeReference** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **attributeValue** – type str

<a id="GRANTA_MIScriptingToolkit.LookupValue.LookupValue.attributeReference"></a>

#### *property* attributeReference

Property attributeReference is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

<a id="GRANTA_MIScriptingToolkit.LookupValue.LookupValue.attributeValue"></a>

#### *property* attributeValue

Property attributeValue is of type str.

<a id="GRANTA_MIScriptingToolkit.LookupValue.LookupValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.LowEndSearchValue"></a>

<a id="lowendsearchvalue"></a>

### LowEndSearchValue

<a id="GRANTA_MIScriptingToolkit.LowEndSearchValue.LowEndSearchValue"></a>

### *class* LowEndSearchValue(unit=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Lower limit for the [`BetweenSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenSearchValue)
search criterion.

* **Parameters:**
  * **unit** – type str
  * **value** – type float

<a id="GRANTA_MIScriptingToolkit.LowEndSearchValue.LowEndSearchValue.unit"></a>

#### *property* unit

Property unit is of type str.

<a id="GRANTA_MIScriptingToolkit.LowEndSearchValue.LowEndSearchValue.value"></a>

#### *property* value

Property value is of type float.

<a id="GRANTA_MIScriptingToolkit.LowEndSearchValue.LowEndSearchValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.MIEntityReference"></a>

<a id="mientityreference"></a>

### MIEntityReference

<a id="GRANTA_MIScriptingToolkit.MIEntityReference.MIEntityReference"></a>

### *class* MIEntityReference

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A base type for types that identify entities in a Granta MI database. The details of how entities are identified differ between concrete sub-types.

You should not interact directly with this class.

<a id="GRANTA_MIScriptingToolkit.MIEntityReference.MIEntityReference.GetDBKey"></a>

#### GetDBKey()

<a id="GRANTA_MIScriptingToolkit.MIEntityReference.MIEntityReference.WithDBKey"></a>

#### WithDBKey(value)

<a id="module-GRANTA_MIScriptingToolkit.MIEntityResolution"></a>

<a id="mientityresolution"></a>

### MIEntityResolution

<a id="GRANTA_MIScriptingToolkit.MIEntityResolution.MIEntityResolution"></a>

### *class* MIEntityResolution(canWrite=None, entityReference=None, resolved=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents whether the entity referred to by the reference property can actually be resolved to an
MI entity, and if that entity can be resolved whether or not it is writable.

* **Parameters:**
  * **canWrite** – type int
  * **entityReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **resolved** – type bool

<a id="GRANTA_MIScriptingToolkit.MIEntityResolution.MIEntityResolution.CanWrite"></a>

#### *class* CanWrite

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.MIEntityResolution.MIEntityResolution.CanWrite.Yes"></a>

#### Yes *= 0*

<a id="GRANTA_MIScriptingToolkit.MIEntityResolution.MIEntityResolution.CanWrite.No"></a>

#### No *= 1*

<a id="GRANTA_MIScriptingToolkit.MIEntityResolution.MIEntityResolution.CanWrite.NotSupported"></a>

#### NotSupported *= 2*

<a id="GRANTA_MIScriptingToolkit.MIEntityResolution.MIEntityResolution.canWrite"></a>

#### *property* canWrite

Property canWrite is of type int.

<a id="GRANTA_MIScriptingToolkit.MIEntityResolution.MIEntityResolution.entityReference"></a>

#### *property* entityReference

Property entityReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.MIEntityResolution.MIEntityResolution.resolved"></a>

#### *property* resolved

Property resolved is of type bool.

<a id="GRANTA_MIScriptingToolkit.MIEntityResolution.MIEntityResolution.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.MIParameterValue"></a>

<a id="miparametervalue"></a>

### MIParameterValue

<a id="GRANTA_MIScriptingToolkit.MIParameterValue.MIParameterValue"></a>

### *class* MIParameterValue(revisionInfo=None, value=None, valueName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A named value of a Parameter in a Granta MI Database.

* **Parameters:**
  * **revisionInfo** – type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo)
  * **value** – type float
  * **valueName** – type str

<a id="GRANTA_MIScriptingToolkit.MIParameterValue.MIParameterValue.revisionInfo"></a>

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

<a id="GRANTA_MIScriptingToolkit.MIParameterValue.MIParameterValue.value"></a>

#### *property* value

Property value is of type float.

<a id="GRANTA_MIScriptingToolkit.MIParameterValue.MIParameterValue.valueName"></a>

#### *property* valueName

Property valueName is of type str.

<a id="GRANTA_MIScriptingToolkit.MIParameterValue.MIParameterValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.MISession"></a>

<a id="misession"></a>

### MISession

<a id="GRANTA_MIScriptingToolkit.MISession.MISession"></a>

### *class* MISession(url='', verbosity=1)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A connection to a Granta MI Server. Don’t create this class directly, instead see
[`GRANTA_MISession`](#module-GRANTA_MIScriptingToolkit.GRANTA_MISession)

* **Parameters:**
  * **url** – url of your Granta MI Service Layer installation
  * **verbosity** – Logging verbosity; accepted values 1 - “ERROR”, 2 - “WARNING”, or 3 - “DEBUG”

<a id="GRANTA_MIScriptingToolkit.MISession.MISession.ConnectionIsValid"></a>

#### ConnectionIsValid()

Returns a tuple of (bool, string). The first element is whether or not requests can succeed, and the second is a description of the outcome of the test.

<a id="GRANTA_MIScriptingToolkit.MISession.MISession.TestConnection"></a>

#### TestConnection()

Raises an exception if a request to the Granta MI Service Layer does not respond or responds with an error.

<a id="GRANTA_MIScriptingToolkit.MISession.MISession.UseAutoLogon"></a>

#### UseAutoLogon()

If called, this session will use the Windows credentials of the current user to authenticate to the Granta MI Service Layer.

<a id="GRANTA_MIScriptingToolkit.MISession.MISession.SetCredentials"></a>

#### SetCredentials(domain, username, password)

* **Parameters:**
  * **username** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Granta MI username
  * **password** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Granta MI password
  * **domain** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Granta MI user domain

<a id="GRANTA_MIScriptingToolkit.MISession.MISession.SetAuthorization"></a>

#### SetAuthorization(auth)

* **Parameters:**
  **auth** ([*GRANTA_MIScriptingToolkit.OIDC.OIDC*](#GRANTA_MIScriptingToolkit.OIDC.OIDC)) – MI Auth object to do the authorization

<a id="GRANTA_MIScriptingToolkit.MISession.MISession.SetReceiveTimeout"></a>

#### SetReceiveTimeout(timeout)

Sets time in milliseconds to wait for a response before timing out.

* **Parameters:**
  **timeout** ([*int*](https://docs.python.org/3/library/functions.html#int)) – timeout in milliseconds

<a id="GRANTA_MIScriptingToolkit.MISession.MISession.actAsReadUser"></a>

#### *property* actAsReadUser

Property name is of type bool. If set to True, this session will perform operations as if it were a read user, even if the session authenticated as a higher privileged role.

<a id="module-GRANTA_MIScriptingToolkit.MinMax"></a>

<a id="minmax"></a>

### MinMax

<a id="GRANTA_MIScriptingToolkit.MinMax.MinMax"></a>

### *class* MinMax(maxValue=None, minValue=None, units=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The minimum and maximum data values for a specified numerical attribute, calculated from all records
you have read permissions for in a database.

* **Parameters:**
  * **maxValue** – type [`MinMaxValue`](#module-GRANTA_MIScriptingToolkit.MinMaxValue)
  * **minValue** – type [`MinMaxValue`](#module-GRANTA_MIScriptingToolkit.MinMaxValue)
  * **units** – type str

<a id="GRANTA_MIScriptingToolkit.MinMax.MinMax.maxValue"></a>

#### *property* maxValue

Property maxValue is of type [`MinMaxValue`](#module-GRANTA_MIScriptingToolkit.MinMaxValue).

<a id="GRANTA_MIScriptingToolkit.MinMax.MinMax.minValue"></a>

#### *property* minValue

Property minValue is of type [`MinMaxValue`](#module-GRANTA_MIScriptingToolkit.MinMaxValue).

<a id="GRANTA_MIScriptingToolkit.MinMax.MinMax.units"></a>

#### *property* units

Property units is of type str.

<a id="GRANTA_MIScriptingToolkit.MinMax.MinMax.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.MinMaxValue"></a>

<a id="minmaxvalue"></a>

### MinMaxValue

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue"></a>

### *class* MinMaxValue(dateTime=None, double=None, integer=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that represents the minimum or maximum data value for a numerical attribute in a database.

* **Parameters:**
  * **dateTime** – type str
  * **double** – type float
  * **integer** – type int
  * **type** – type int

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.Type"></a>

#### *class* Type

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.Type.ERROR"></a>

#### ERROR *= -1*

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.Type.DateType"></a>

#### DateType *= 0*

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.Type.DoubleType"></a>

#### DoubleType *= 1*

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.Type.IntegerType"></a>

#### IntegerType *= 2*

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.Type.NotANumber"></a>

#### NotANumber *= 3*

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.dateTime"></a>

#### *property* dateTime

Property dateTime is of type str.

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.double"></a>

#### *property* double

Property double is of type float.

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.integer"></a>

#### *property* integer

Property integer is of type int.

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.type"></a>

#### *property* type

Property type is of type int.

<a id="GRANTA_MIScriptingToolkit.MinMaxValue.MinMaxValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ModifyRecordLinksRequest"></a>

<a id="modifyrecordlinksrequest"></a>

### ModifyRecordLinksRequest

<a id="GRANTA_MIScriptingToolkit.ModifyRecordLinksRequest.ModifyRecordLinksRequest"></a>

### *class* ModifyRecordLinksRequest(importErrorMode=None, recordLinkCheckMode=None, recordLinkGroupReference=None, recordLinkModifications=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the ModifyRecordLinks operation.
Requires a [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference)
to the record link group you wish to modify and a
[`RecordLinkModifications`](#module-GRANTA_MIScriptingToolkit.RecordLinkModifications) object, which
contains the modifications you wish to make to the record link group. The ‘importErrorMode’
property defines how to handle errors which occur during linking and can take the following values:
‘FaultAndRollbackOnAnyError’,  which stops the linking request when an error occurs and attempts to
roll back to the state before the request was issued; or  ‘LogAndContinueWherePossible’, which will
log non-fatal errors and attempt to continue with the linking request. The ‘recordLinkCheckMode’
property defines how to check the status of existing links and takes the following values:
‘CheckOnlyForwardLinks’, which checks for link only in the forward direction and is quicker than
checking both directions; or ‘CheckForwardAndReverseLinks’, which is slower but safer as it checks
for both forward and backward links.

* **Parameters:**
  * **importErrorMode** – type str
  * **recordLinkCheckMode** – type str
  * **recordLinkGroupReference** – type [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference)
  * **recordLinkModifications** – type [`RecordLinkModifications`](#module-GRANTA_MIScriptingToolkit.RecordLinkModifications)

<a id="GRANTA_MIScriptingToolkit.ModifyRecordLinksRequest.ModifyRecordLinksRequest.importErrorMode"></a>

#### *property* importErrorMode

Property importErrorMode is of type str. See [`GRANTA_Constants.ImportErrorMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.ModifyRecordLinksRequest.ModifyRecordLinksRequest.recordLinkCheckMode"></a>

#### *property* recordLinkCheckMode

Property recordLinkCheckMode is of type str. See [`GRANTA_Constants.RecordLinkCheckMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.ModifyRecordLinksRequest.ModifyRecordLinksRequest.recordLinkGroupReference"></a>

#### *property* recordLinkGroupReference

Property recordLinkGroupReference is of type [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference).

<a id="GRANTA_MIScriptingToolkit.ModifyRecordLinksRequest.ModifyRecordLinksRequest.recordLinkModifications"></a>

#### *property* recordLinkModifications

Property recordLinkModifications is of type [`RecordLinkModifications`](#module-GRANTA_MIScriptingToolkit.RecordLinkModifications).

<a id="GRANTA_MIScriptingToolkit.ModifyRecordLinksRequest.ModifyRecordLinksRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ModifyRecordLinksResponse"></a>

<a id="modifyrecordlinksresponse"></a>

### ModifyRecordLinksResponse

<a id="GRANTA_MIScriptingToolkit.ModifyRecordLinksResponse.ModifyRecordLinksResponse"></a>

### *class* ModifyRecordLinksResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

The response from a ModifyRecordLinks request.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a ModifyRecordLinksResponse object.

<a id="GRANTA_MIScriptingToolkit.ModifyRecordLinksResponse.ModifyRecordLinksResponse.recordLinkChanges"></a>

#### *property* recordLinkChanges

Property recordLinkChanges is of type [`RecordLinkChanges`](#module-GRANTA_MIScriptingToolkit.RecordLinkChanges).

<a id="module-GRANTA_MIScriptingToolkit.NamedAttribute"></a>

<a id="namedattribute"></a>

### NamedAttribute

<a id="GRANTA_MIScriptingToolkit.NamedAttribute.NamedAttribute"></a>

### *class* NamedAttribute(about=None, attribute=None, isMeta=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Name information about an Attribute in a Granta MI database.

* **Parameters:**
  * **about** – type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute)
  * **attribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **isMeta** – type bool
  * **name** – type str

<a id="GRANTA_MIScriptingToolkit.NamedAttribute.NamedAttribute.about"></a>

#### *property* about

Property about is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute). Only populated if ‘isMeta’ is True.

<a id="GRANTA_MIScriptingToolkit.NamedAttribute.NamedAttribute.attribute"></a>

#### *property* attribute

Property attribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

<a id="GRANTA_MIScriptingToolkit.NamedAttribute.NamedAttribute.isMeta"></a>

#### *property* isMeta

Property isMeta is of type bool. If this is True, the ‘about’ property may have additional information about the related parent attribute.

<a id="GRANTA_MIScriptingToolkit.NamedAttribute.NamedAttribute.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.NamedAttribute.NamedAttribute.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.NamedLayout"></a>

<a id="namedlayout"></a>

### NamedLayout

<a id="GRANTA_MIScriptingToolkit.NamedLayout.NamedLayout"></a>

### *class* NamedLayout(layout=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A layout in a Granta MI database.

* **Parameters:**
  * **layout** – type [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference)
  * **name** – type str

<a id="GRANTA_MIScriptingToolkit.NamedLayout.NamedLayout.layout"></a>

#### *property* layout

Property layout is of type [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference).

<a id="GRANTA_MIScriptingToolkit.NamedLayout.NamedLayout.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.NamedLayout.NamedLayout.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.NamedRecord"></a>

<a id="namedrecord"></a>

### NamedRecord

<a id="GRANTA_MIScriptingToolkit.NamedRecord.NamedRecord"></a>

### *class* NamedRecord(longName=None, recordReference=None, shortName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) with the short and long name
of the record.

* **Parameters:**
  * **longName** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **shortName** – type str

<a id="GRANTA_MIScriptingToolkit.NamedRecord.NamedRecord.longName"></a>

#### *property* longName

Property longName is of type str.

<a id="GRANTA_MIScriptingToolkit.NamedRecord.NamedRecord.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.NamedRecord.NamedRecord.shortName"></a>

#### *property* shortName

Property shortName is of type str.

<a id="GRANTA_MIScriptingToolkit.NamedRecord.NamedRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.NamedSubset"></a>

<a id="namedsubset"></a>

### NamedSubset

<a id="GRANTA_MIScriptingToolkit.NamedSubset.NamedSubset"></a>

### *class* NamedSubset(name=None, subset=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) with the subset name.

* **Parameters:**
  * **name** – type str
  * **subset** – type [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference)

<a id="GRANTA_MIScriptingToolkit.NamedSubset.NamedSubset.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.NamedSubset.NamedSubset.subset"></a>

#### *property* subset

Property subset is of type [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference).

<a id="GRANTA_MIScriptingToolkit.NamedSubset.NamedSubset.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord"></a>

<a id="namedtargetedsourcerecord"></a>

### NamedTargetedSourceRecord

<a id="GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord.NamedTargetedSourceRecord"></a>

### *class* NamedTargetedSourceRecord(record=None, targetRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A named record used for modifying record links.

* **Parameters:**
  * **record** – type [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord)
  * **targetRecords** – type list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects

<a id="GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord.NamedTargetedSourceRecord.targetRecords"></a>

#### *property* targetRecords

Property targetRecords is a list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord.NamedTargetedSourceRecord.record"></a>

#### *property* record

Property record is of type [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord).

<a id="GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord.NamedTargetedSourceRecord.AddTargetRecords"></a>

#### AddTargetRecords(\_namedRecord)

Appends \_namedRecord to targetRecords property on NamedTargetedSourceRecord C-object.

* **Parameters:**
  **\_namedRecord** – object of type NamedRecord.

<a id="GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord.NamedTargetedSourceRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.NotatedTargetRecord"></a>

<a id="notatedtargetrecord"></a>

### NotatedTargetRecord

<a id="GRANTA_MIScriptingToolkit.NotatedTargetRecord.NotatedTargetRecord"></a>

### *class* NotatedTargetRecord(notes=None, record=None, reverseNotes=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) of the record you wish to
link to and notes on the record link.
Requires a [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference). Notes on the link
and the reverse link are optional.

* **Parameters:**
  * **notes** – type str
  * **record** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **reverseNotes** – type str

<a id="GRANTA_MIScriptingToolkit.NotatedTargetRecord.NotatedTargetRecord.notes"></a>

#### *property* notes

Property notes is of type str.

<a id="GRANTA_MIScriptingToolkit.NotatedTargetRecord.NotatedTargetRecord.record"></a>

#### *property* record

Property record is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.NotatedTargetRecord.NotatedTargetRecord.reverseNotes"></a>

#### *property* reverseNotes

Property reverseNotes is of type str.

<a id="GRANTA_MIScriptingToolkit.NotatedTargetRecord.NotatedTargetRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord"></a>

<a id="notatedtargetedsourcerecord"></a>

### NotatedTargetedSourceRecord

<a id="GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord"></a>

### *class* NotatedTargetedSourceRecord(sourceRecord=None, targetRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) to link from and container of
[`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) of the records to link to.
Requires a source [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord). Can set zero to
many target [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects you wish to link
to.

* **Parameters:**
  * **sourceRecord** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **targetRecords** – type list of [`NotatedTargetRecord`](#module-GRANTA_MIScriptingToolkit.NotatedTargetRecord) objects

<a id="GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord.targetRecords"></a>

#### *property* targetRecords

Property targetRecords is a list of [`NotatedTargetRecord`](#module-GRANTA_MIScriptingToolkit.NotatedTargetRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord.sourceRecord"></a>

#### *property* sourceRecord

Property sourceRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord.AddTargetRecord"></a>

#### AddTargetRecord(\_notatedTargetRecord)

Appends \_notatedTargetRecord to targetRecords property on NotatedTargetedSourceRecord C-object.

* **Parameters:**
  **\_notatedTargetRecord** – object of type NotatedTargetRecord.

<a id="GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.OIDC"></a>

<a id="oidc"></a>

### OIDC

<a id="GRANTA_MIScriptingToolkit.OIDC.OIDC"></a>

### *class* OIDC(accessToken=None, refreshToken=None, authorizeTimeout=None)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An object to allow authorization using OpenID Connect. Contact Ansys Granta Technical Support for information
on supported identity providers, and for configuration and setup documentation.

Pass to a [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) and call [`Authorize()`](#GRANTA_MIScriptingToolkit.OIDC.OIDC.Authorize) for a login page.

* **Parameters:**
  * **accessToken** – Valid access token for the URL of your MI Service Layer installation
  * **refreshToken** – Valid refresh token for the URL of your MI Service Layer installation
  * **authorizeTimeout** – Number of milliseconds to wait for a response after calling [`Authorize()`](#GRANTA_MIScriptingToolkit.OIDC.OIDC.Authorize)

<a id="GRANTA_MIScriptingToolkit.OIDC.OIDC.Authorize"></a>

#### Authorize()

Authorize a Granta MI session with an OpenID Connect provider.

<a id="GRANTA_MIScriptingToolkit.OIDC.OIDC.CheckAuthentication"></a>

#### CheckAuthentication()

Checks whether your access and refresh tokens are valid, and returns the result.

<a id="GRANTA_MIScriptingToolkit.OIDC.OIDC.TestAuthentication"></a>

#### TestAuthentication()

Checks whether your access and refresh tokens are valid, and displays an error message if the tokens are invalid.

<a id="GRANTA_MIScriptingToolkit.OIDC.OIDC.authorizeTimeout"></a>

#### *property* authorizeTimeout

Property authorizeTimeout is the time in milliseconds to wait for a response from the
external browser when [`Authorize()`](#GRANTA_MIScriptingToolkit.OIDC.OIDC.Authorize) is called.

<a id="GRANTA_MIScriptingToolkit.OIDC.OIDC.accessToken"></a>

#### *property* accessToken

Property accessToken is of type str.

<a id="GRANTA_MIScriptingToolkit.OIDC.OIDC.refreshToken"></a>

#### *property* refreshToken

Property refreshToken is of type str.

<a id="module-GRANTA_MIScriptingToolkit.ParameterDetail"></a>

<a id="parameterdetail"></a>

### ParameterDetail

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail"></a>

### *class* ParameterDetail(appliesToAttribute=None, appliesToRecord=None, defaultValue=None, interpolationType=None, name=None, order=None, parameterReference=None, parameterType=None, parameterValues=None, revisionInfo=None, scaleType=None, unit=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed information about a Parameter in a Granta MI Database.

* **Parameters:**
  * **appliesToAttribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **appliesToRecord** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **defaultValue** – type [`MIParameterValue`](#module-GRANTA_MIScriptingToolkit.MIParameterValue)
  * **interpolationType** – type int
  * **name** – type str
  * **order** – type int
  * **parameterReference** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **parameterType** – type int
  * **parameterValues** – type list of [`MIParameterValue`](#module-GRANTA_MIScriptingToolkit.MIParameterValue) objects
  * **revisionInfo** – type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo)
  * **scaleType** – type int
  * **unit** – type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation)

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.Interpolation"></a>

#### *class* Interpolation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.Interpolation.NONE"></a>

#### NONE *= 0*

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.Interpolation.Linear"></a>

#### Linear *= 1*

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.Interpolation.CubicSpline"></a>

#### CubicSpline *= 2*

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ScaleType"></a>

#### *class* ScaleType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ScaleType.NotSet"></a>

#### NotSet *= 0*

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ScaleType.Linear"></a>

#### Linear *= 1*

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ScaleType.Log"></a>

#### Log *= 2*

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ParameterType"></a>

#### *class* ParameterType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ParameterType.NumericUnrestricted"></a>

#### NumericUnrestricted *= 0*

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ParameterType.NumericRestricted"></a>

#### NumericRestricted *= 1*

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ParameterType.Discrete"></a>

#### Discrete *= 2*

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.appliesToAttribute"></a>

#### *property* appliesToAttribute

Property appliesToAttribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.appliesToRecord"></a>

#### *property* appliesToRecord

Property appliesToRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.defaultValue"></a>

#### *property* defaultValue

Property defaultValue is of type [`MIParameterValue`](#module-GRANTA_MIScriptingToolkit.MIParameterValue).

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.interpolationType"></a>

#### *property* interpolationType

Property interpolationType is of type int. See [`ParameterDetail.Interpolation`](#GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.Interpolation) for supported values.

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.parameterValues"></a>

#### *property* parameterValues

Property parameterValues is a list of [`MIParameterValue`](#module-GRANTA_MIScriptingToolkit.MIParameterValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.order"></a>

#### *property* order

Property order is of type int.

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.parameterReference"></a>

#### *property* parameterReference

Property parameterReference is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.parameterType"></a>

#### *property* parameterType

Property parameterType is of type int. See [`ParameterDetail.ParameterType`](#GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ParameterType) for supported values.

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.revisionInfo"></a>

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.scaleType"></a>

#### *property* scaleType

Property scaleType is of type int. See [`ParameterDetail.ScaleType`](#GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ScaleType) for supported values.

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.unit"></a>

#### *property* unit

Property unit is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

<a id="GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ParameterDomain"></a>

<a id="parameterdomain"></a>

### ParameterDomain

<a id="GRANTA_MIScriptingToolkit.ParameterDomain.ParameterDomain"></a>

### *class* ParameterDomain(exporterParameterId=None, interpolable=None, values=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a list of parameter values.

* **Parameters:**
  * **exporterParameterId** – type str
  * **interpolable** – type bool
  * **values** – type list of [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue) objects

<a id="GRANTA_MIScriptingToolkit.ParameterDomain.ParameterDomain.exporterParameterId"></a>

#### *property* exporterParameterId

Property exporterParameterId is of type str.

<a id="GRANTA_MIScriptingToolkit.ParameterDomain.ParameterDomain.interpolable"></a>

#### *property* interpolable

Property interpolable is of type bool.

<a id="GRANTA_MIScriptingToolkit.ParameterDomain.ParameterDomain.values"></a>

#### *property* values

Property values is a list of [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ParameterDomain.ParameterDomain.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ParameterInformation"></a>

<a id="parameterinformation"></a>

### ParameterInformation

<a id="GRANTA_MIScriptingToolkit.ParameterInformation.ParameterInformation"></a>

### *class* ParameterInformation(name=None, parameterReference=None, unit=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information for a parameter in a Granta MI database.
Contains the name and unit information for a parameter and a
[`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference) to the parameter.

* **Parameters:**
  * **name** – type str
  * **parameterReference** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **unit** – type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation)

<a id="GRANTA_MIScriptingToolkit.ParameterInformation.ParameterInformation.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.ParameterInformation.ParameterInformation.parameterReference"></a>

#### *property* parameterReference

Property parameterReference is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

<a id="GRANTA_MIScriptingToolkit.ParameterInformation.ParameterInformation.unit"></a>

#### *property* unit

Property unit is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

<a id="GRANTA_MIScriptingToolkit.ParameterInformation.ParameterInformation.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ParameterReference"></a>

<a id="parameterreference"></a>

### ParameterReference

<a id="GRANTA_MIScriptingToolkit.ParameterReference.ParameterReference"></a>

### *class* ParameterReference(DBKey=None, ID=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Identification of a particular parameter in a Granta MI database .
For requests a DBKey is required, and either the parameter ID  or the parameter name.

* **Parameters:**
  * **DBKey** – type str
  * **ID** – type int
  * **name** – type str

<a id="GRANTA_MIScriptingToolkit.ParameterReference.ParameterReference.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.ParameterReference.ParameterReference.ID"></a>

#### *property* ID

Property ID is of type int.

<a id="GRANTA_MIScriptingToolkit.ParameterReference.ParameterReference.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.ParameterReference.ParameterReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue"></a>

<a id="parameterreferenceandvalue"></a>

### ParameterReferenceAndValue

<a id="GRANTA_MIScriptingToolkit.ParameterReferenceAndValue.ParameterReferenceAndValue"></a>

### *class* ParameterReferenceAndValue(parameter=None, parameterValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains a [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference) and a
[`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

* **Parameters:**
  * **parameter** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)

<a id="GRANTA_MIScriptingToolkit.ParameterReferenceAndValue.ParameterReferenceAndValue.parameter"></a>

#### *property* parameter

Property parameter is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

<a id="GRANTA_MIScriptingToolkit.ParameterReferenceAndValue.ParameterReferenceAndValue.parameterValue"></a>

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

<a id="GRANTA_MIScriptingToolkit.ParameterReferenceAndValue.ParameterReferenceAndValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ParameterReferencesAndValues"></a>

<a id="parameterreferencesandvalues"></a>

### ParameterReferencesAndValues

<a id="GRANTA_MIScriptingToolkit.ParameterReferencesAndValues.ParameterReferencesAndValues"></a>

### *class* ParameterReferencesAndValues(parameterWithValues=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of
[`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue)
objects.

* **Parameters:**
  **parameterWithValues** – type list of [`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue) objects

<a id="GRANTA_MIScriptingToolkit.ParameterReferencesAndValues.ParameterReferencesAndValues.parameterWithValues"></a>

#### *property* parameterWithValues

Property parameterWithValues is a list of [`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ParameterReferencesAndValues.ParameterReferencesAndValues.AddParameterWithValue"></a>

#### AddParameterWithValue(\_parameterReferenceAndValue)

Appends \_parameterReferenceAndValue to parameterWithValues property on ParameterReferencesAndValues C-object.

* **Parameters:**
  **\_parameterReferenceAndValue** – object of type ParameterReferenceAndValue.

<a id="GRANTA_MIScriptingToolkit.ParameterReferencesAndValues.ParameterReferencesAndValues.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ParameterValue"></a>

<a id="parametervalue"></a>

### ParameterValue

<a id="GRANTA_MIScriptingToolkit.ParameterValue.ParameterValue"></a>

### *class* ParameterValue(discreteValue=None, numericValue=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A value of a Parameter in Functional data.

* **Parameters:**
  * **discreteValue** – type str
  * **numericValue** – type float
  * **type** – type str

<a id="GRANTA_MIScriptingToolkit.ParameterValue.ParameterValue.discreteValue"></a>

#### *property* discreteValue

Property discreteValue is of type str.

<a id="GRANTA_MIScriptingToolkit.ParameterValue.ParameterValue.numericValue"></a>

#### *property* numericValue

Property numericValue is of type float.

<a id="GRANTA_MIScriptingToolkit.ParameterValue.ParameterValue.type"></a>

#### *property* type

Property type is of type str. There is no need to set this property manually.
See [`GRANTA_Constants.ParameterTypes`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.ParameterValue.ParameterValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.Parameters"></a>

<a id="parameters"></a>

### Parameters

<a id="GRANTA_MIScriptingToolkit.Parameters.Parameters"></a>

### *class* Parameters(parameters=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation)
objects.

* **Parameters:**
  **parameters** – type list of [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation) objects

<a id="GRANTA_MIScriptingToolkit.Parameters.Parameters.parameters"></a>

#### *property* parameters

Property parameters is a list of [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.Parameters.Parameters.AddParameter"></a>

#### AddParameter(\_parameterInformation)

Appends \_parameterInformation to parameters property on Parameters C-object.

* **Parameters:**
  **\_parameterInformation** – object of type ParameterInformation.

<a id="GRANTA_MIScriptingToolkit.Parameters.Parameters.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.PartialTableReference"></a>

<a id="partialtablereference"></a>

### PartialTableReference

<a id="GRANTA_MIScriptingToolkit.PartialTableReference.PartialTableReference"></a>

### *class* PartialTableReference(tableGUID=None, tableID=None, tableName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A reference to a Granta MI table.
Usually, just one of the several optional fields should be provided; where more than one is
provided, the highest priority one is used, where the descending priority order is: tableIdentity,
tableGUID, tableName.

* **Parameters:**
  * **tableGUID** – type str
  * **tableID** – type int
  * **tableName** – type str

<a id="GRANTA_MIScriptingToolkit.PartialTableReference.PartialTableReference.tableGUID"></a>

#### *property* tableGUID

Property tableGUID is of type str.

<a id="GRANTA_MIScriptingToolkit.PartialTableReference.PartialTableReference.tableID"></a>

#### *property* tableID

Property tableID is of type int.

<a id="GRANTA_MIScriptingToolkit.PartialTableReference.PartialTableReference.tableName"></a>

#### *property* tableName

Property tableName is of type str.

<a id="GRANTA_MIScriptingToolkit.PartialTableReference.PartialTableReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.PathLeaf"></a>

<a id="pathleaf"></a>

### PathLeaf

<a id="GRANTA_MIScriptingToolkit.PathLeaf.PathLeaf"></a>

### *class* PathLeaf(longName=None, recordReference=None, shortName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The folder furthest from the root record folder, for each path checked or created.

* **Parameters:**
  * **longName** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **shortName** – type str

<a id="GRANTA_MIScriptingToolkit.PathLeaf.PathLeaf.longName"></a>

#### *property* longName

Property longName is of type str.

<a id="GRANTA_MIScriptingToolkit.PathLeaf.PathLeaf.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.PathLeaf.PathLeaf.shortName"></a>

#### *property* shortName

Property shortName is of type str.

<a id="GRANTA_MIScriptingToolkit.PathLeaf.PathLeaf.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.PictureDataType"></a>

<a id="picturedatatype"></a>

### PictureDataType

<a id="GRANTA_MIScriptingToolkit.PictureDataType.PictureDataType"></a>

### *class* PictureDataType(URL=None, contentType=None, data=None, isApplicable=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type representing a piece of Picture data in a Granta MI Database.
To get a byte-array representing the binary data, call ReadBinaryData(). To set the binary data (as
part of a data import), use ModifyBinaryData().

* **Parameters:**
  * **URL** – type str
  * **contentType** – type str
  * **data** – type str
  * **isApplicable** – type bool

<a id="GRANTA_MIScriptingToolkit.PictureDataType.PictureDataType.ModifyBinaryData"></a>

#### ModifyBinaryData(binaryData)

<a id="GRANTA_MIScriptingToolkit.PictureDataType.PictureDataType.ReadBinaryData"></a>

#### ReadBinaryData()

<a id="GRANTA_MIScriptingToolkit.PictureDataType.PictureDataType.contentType"></a>

#### *property* contentType

Property contentType is of type str.

<a id="GRANTA_MIScriptingToolkit.PictureDataType.PictureDataType.data"></a>

#### *property* data

Property data is of type str.

<a id="GRANTA_MIScriptingToolkit.PictureDataType.PictureDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.PictureDataType.PictureDataType.URL"></a>

#### *property* URL

Property URL is of type str.

<a id="GRANTA_MIScriptingToolkit.PictureDataType.PictureDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.PointDataType"></a>

<a id="pointdatatype"></a>

### PointDataType

<a id="GRANTA_MIScriptingToolkit.PointDataType.PointDataType"></a>

### *class* PointDataType(isApplicable=None, isEstimated=None, parameters=None, points=None, unitSymbol=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain an array of float data types.

* **Parameters:**
  * **isApplicable** – type bool
  * **isEstimated** – type bool
  * **parameters** – type [`Parameters`](#module-GRANTA_MIScriptingToolkit.Parameters)
  * **points** – type list of [`PointValueWithParameters`](#module-GRANTA_MIScriptingToolkit.PointValueWithParameters) objects
  * **unitSymbol** – type str

<a id="GRANTA_MIScriptingToolkit.PointDataType.PointDataType.points"></a>

#### *property* points

Property points is a list of [`PointValueWithParameters`](#module-GRANTA_MIScriptingToolkit.PointValueWithParameters) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.PointDataType.PointDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.PointDataType.PointDataType.isEstimated"></a>

#### *property* isEstimated

Property isEstimated is of type bool.

<a id="GRANTA_MIScriptingToolkit.PointDataType.PointDataType.parameters"></a>

#### *property* parameters

Property parameters is of type [`Parameters`](#module-GRANTA_MIScriptingToolkit.Parameters).

<a id="GRANTA_MIScriptingToolkit.PointDataType.PointDataType.unitSymbol"></a>

#### *property* unitSymbol

Property unitSymbol is of type str.

<a id="GRANTA_MIScriptingToolkit.PointDataType.PointDataType.AddPoint"></a>

#### AddPoint(\_pointValueWithParameters)

Appends \_pointValueWithParameters to points property on PointDataType C-object.

* **Parameters:**
  **\_pointValueWithParameters** – object of type PointValueWithParameters.

<a id="GRANTA_MIScriptingToolkit.PointDataType.PointDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.PointValueWithParameters"></a>

<a id="pointvaluewithparameters"></a>

### PointValueWithParameters

<a id="GRANTA_MIScriptingToolkit.PointValueWithParameters.PointValueWithParameters"></a>

### *class* PointValueWithParameters(hasTrailingZeroInfo=None, trailingZeroInfo=None, value=None, valueParameters=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A numeric value with associated
[`ParameterReferencesAndValues`](#module-GRANTA_MIScriptingToolkit.ParameterReferencesAndValues)
object.

* **Parameters:**
  * **hasTrailingZeroInfo** – type bool
  * **trailingZeroInfo** – type [`TrailingZeroInformation`](#module-GRANTA_MIScriptingToolkit.TrailingZeroInformation)
  * **value** – type float
  * **valueParameters** – type [`ParameterReferencesAndValues`](#module-GRANTA_MIScriptingToolkit.ParameterReferencesAndValues)

<a id="GRANTA_MIScriptingToolkit.PointValueWithParameters.PointValueWithParameters.hasTrailingZeroInfo"></a>

#### *property* hasTrailingZeroInfo

Property hasTrailingZeroInfo is of type bool.

<a id="GRANTA_MIScriptingToolkit.PointValueWithParameters.PointValueWithParameters.trailingZeroInfo"></a>

#### *property* trailingZeroInfo

Property trailingZeroInfo is of type [`TrailingZeroInformation`](#module-GRANTA_MIScriptingToolkit.TrailingZeroInformation).

<a id="GRANTA_MIScriptingToolkit.PointValueWithParameters.PointValueWithParameters.value"></a>

#### *property* value

Property value is of type float.

<a id="GRANTA_MIScriptingToolkit.PointValueWithParameters.PointValueWithParameters.valueParameters"></a>

#### *property* valueParameters

Property valueParameters is of type [`ParameterReferencesAndValues`](#module-GRANTA_MIScriptingToolkit.ParameterReferencesAndValues).

<a id="GRANTA_MIScriptingToolkit.PointValueWithParameters.PointValueWithParameters.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RangeDataType"></a>

<a id="rangedatatype"></a>

### RangeDataType

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType"></a>

### *class* RangeDataType(hasHigh=None, hasHighTrailingZeroInfo=None, hasLow=None, hasLowTrailingZeroInfo=None, high=None, highValueTrailingZeroInfo=None, isApplicable=None, isEstimated=None, low=None, lowValueTrailingZeroInfo=None, unitSymbol=None, highValueIsInclusive=None, lowValueIsInclusive=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Type for values of range data.
Both LowValue and HighValue must be populated.

* **Parameters:**
  * **hasHigh** – type bool
  * **hasHighTrailingZeroInfo** – type bool
  * **hasLow** – type bool
  * **hasLowTrailingZeroInfo** – type bool
  * **high** – type float
  * **highValueTrailingZeroInfo** – type [`TrailingZeroInformation`](#module-GRANTA_MIScriptingToolkit.TrailingZeroInformation)
  * **isApplicable** – type bool
  * **isEstimated** – type bool
  * **low** – type float
  * **lowValueTrailingZeroInfo** – type [`TrailingZeroInformation`](#module-GRANTA_MIScriptingToolkit.TrailingZeroInformation)
  * **unitSymbol** – type str
  * **highValueIsInclusive** – type bool
  * **lowValueIsInclusive** – type bool

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.hasHigh"></a>

#### *property* hasHigh

Property hasHigh is of type bool.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.hasHighTrailingZeroInfo"></a>

#### *property* hasHighTrailingZeroInfo

Property hasHighTrailingZeroInfo is of type bool.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.hasLow"></a>

#### *property* hasLow

Property hasLow is of type bool.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.hasLowTrailingZeroInfo"></a>

#### *property* hasLowTrailingZeroInfo

Property hasLowTrailingZeroInfo is of type bool.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.high"></a>

#### *property* high

Property high is of type float.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.highValueIsInclusive"></a>

#### *property* highValueIsInclusive

Property highValueIsInclusive is of type bool.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.highValueTrailingZeroInfo"></a>

#### *property* highValueTrailingZeroInfo

Property highValueTrailingZeroInfo is of type [`TrailingZeroInformation`](#module-GRANTA_MIScriptingToolkit.TrailingZeroInformation).

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.isEstimated"></a>

#### *property* isEstimated

Property isEstimated is of type bool.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.low"></a>

#### *property* low

Property low is of type float.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.lowValueIsInclusive"></a>

#### *property* lowValueIsInclusive

Property lowValueIsInclusive is of type bool.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.lowValueTrailingZeroInfo"></a>

#### *property* lowValueTrailingZeroInfo

Property lowValueTrailingZeroInfo is of type [`TrailingZeroInformation`](#module-GRANTA_MIScriptingToolkit.TrailingZeroInformation).

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.unitSymbol"></a>

#### *property* unitSymbol

Property unitSymbol is of type str.

<a id="GRANTA_MIScriptingToolkit.RangeDataType.RangeDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RasterSize"></a>

<a id="rastersize"></a>

### RasterSize

<a id="GRANTA_MIScriptingToolkit.RasterSize.RasterSize"></a>

### *class* RasterSize(heightPixels=None, widthPixels=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Gives the size in pixels of picture data.

* **Parameters:**
  * **heightPixels** – type int
  * **widthPixels** – type int

<a id="GRANTA_MIScriptingToolkit.RasterSize.RasterSize.heightPixels"></a>

#### *property* heightPixels

Property heightPixels is of type int.

<a id="GRANTA_MIScriptingToolkit.RasterSize.RasterSize.widthPixels"></a>

#### *property* widthPixels

Property widthPixels is of type int.

<a id="GRANTA_MIScriptingToolkit.RasterSize.RasterSize.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordAttribute"></a>

<a id="recordattribute"></a>

### RecordAttribute

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute"></a>

### *class* RecordAttribute(attribute=None, dataCreatedRecordVersion=None, dataRetiredRecordVersion=None, dataRevisionInfo=None, dataVersionNumber=None, hasData=None, parameterDetails=None, recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Meta-information about the data of a particular attribute of a particular Record in a Granta MI
database.
Does NOT include values of the data (see
[`AttributeValue`](#module-GRANTA_MIScriptingToolkit.AttributeValue) type).

* **Parameters:**
  * **attribute** – type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute)
  * **dataCreatedRecordVersion** – type int
  * **dataRetiredRecordVersion** – type int
  * **dataRevisionInfo** – type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo)
  * **dataVersionNumber** – type int
  * **hasData** – type bool
  * **parameterDetails** – type list of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute.attribute"></a>

#### *property* attribute

Property attribute is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute).

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute.dataCreatedRecordVersion"></a>

#### *property* dataCreatedRecordVersion

Property dataCreatedRecordVersion is of type int.

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute.dataRetiredRecordVersion"></a>

#### *property* dataRetiredRecordVersion

Property dataRetiredRecordVersion is of type int.

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute.dataRevisionInfo"></a>

#### *property* dataRevisionInfo

Property dataRevisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute.dataVersionNumber"></a>

#### *property* dataVersionNumber

Property dataVersionNumber is of type int.

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute.hasData"></a>

#### *property* hasData

Property hasData is of type bool.

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute.parameterDetails"></a>

#### *property* parameterDetails

Property parameterDetails is a list of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.RecordAttribute.RecordAttribute.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordData"></a>

<a id="recorddata"></a>

### RecordData

<a id="GRANTA_MIScriptingToolkit.RecordData.RecordData"></a>

### *class* RecordData(attributeValues=None, recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The values of data for attribute(s) of a particular record.

* **Parameters:**
  * **attributeValues** – type list of [`AttributeValue`](#module-GRANTA_MIScriptingToolkit.AttributeValue) objects
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

<a id="GRANTA_MIScriptingToolkit.RecordData.RecordData.attributeValues"></a>

#### *property* attributeValues

Property attributeValues is a list of [`AttributeValue`](#module-GRANTA_MIScriptingToolkit.AttributeValue) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordData.RecordData.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.RecordData.RecordData.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordExporterParameters"></a>

<a id="recordexporterparameters"></a>

### RecordExporterParameters

<a id="GRANTA_MIScriptingToolkit.RecordExporterParameters.RecordExporterParameters"></a>

### *class* RecordExporterParameters(attributes=None, record=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a record and its associated attribute exporter parameters.

* **Parameters:**
  * **attributes** – type list of [`AttributeExporterParameters`](#module-GRANTA_MIScriptingToolkit.AttributeExporterParameters) objects
  * **record** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

<a id="GRANTA_MIScriptingToolkit.RecordExporterParameters.RecordExporterParameters.attributes"></a>

#### *property* attributes

Property attributes is a list of [`AttributeExporterParameters`](#module-GRANTA_MIScriptingToolkit.AttributeExporterParameters) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordExporterParameters.RecordExporterParameters.record"></a>

#### *property* record

Property record is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.RecordExporterParameters.RecordExporterParameters.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordFilter"></a>

<a id="recordfilter"></a>

### RecordFilter

<a id="GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter"></a>

### *class* RecordFilter(profile=None, subsets=None, recordLists=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type allowing lists of Records to be filtered, e.g., by membership of Subset(s). You should
specify either a profile or a subset reference, but not both. You can pass in a list containing an
uninitialized [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) to effectively
disable the subset filter. Note that subsets are not inherited; newly-created records will not be
filtered until they are added to a Subset.

* **Parameters:**
  * **profile** – type str
  * **subsets** – type list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) objects
  * **recordLists** – type list of [`RecordListReference`](#module-GRANTA_MIScriptingToolkit.RecordListReference) objects

<a id="GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter.recordLists"></a>

#### *property* recordLists

Property recordLists is a list of [`RecordListReference`](#module-GRANTA_MIScriptingToolkit.RecordListReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter.subsets"></a>

#### *property* subsets

Property subsets is a list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter.profile"></a>

#### *property* profile

Property profile is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter.AddRecordList"></a>

#### AddRecordList(\_recordListReference)

Appends \_recordListReference to recordLists property on RecordFilter C-object.

* **Parameters:**
  **\_recordListReference** – object of type RecordListReference.

<a id="GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter.AddSubset"></a>

#### AddSubset(\_subsetReference)

Appends \_subsetReference to subsets property on RecordFilter C-object.

* **Parameters:**
  **\_subsetReference** – object of type SubsetReference.

<a id="GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordFolderPath"></a>

<a id="recordfolderpath"></a>

### RecordFolderPath

<a id="GRANTA_MIScriptingToolkit.RecordFolderPath.RecordFolderPath"></a>

### *class* RecordFolderPath(color=None, recordReference=None, treeNames=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The path to a Granta MI record folder. Contains the record folder at which the path starts as
parent, the tree names, and the color.

* **Parameters:**
  * **color** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **treeNames** – type list of str objects

<a id="GRANTA_MIScriptingToolkit.RecordFolderPath.RecordFolderPath.treeNames"></a>

#### *property* treeNames

Property treeNames is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordFolderPath.RecordFolderPath.color"></a>

#### *property* color

Property color is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordFolderPath.RecordFolderPath.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.RecordFolderPath.RecordFolderPath.AddTreeName"></a>

#### AddTreeName(value)

Appends value to treeNames property on RecordFolderPath C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

<a id="GRANTA_MIScriptingToolkit.RecordFolderPath.RecordFolderPath.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordLinkChanges"></a>

<a id="recordlinkchanges"></a>

### RecordLinkChanges

<a id="GRANTA_MIScriptingToolkit.RecordLinkChanges.RecordLinkChanges"></a>

### *class* RecordLinkChanges(linked=None, unlinked=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A set of changes to be made to record link groups.

* **Parameters:**
  * **linked** – type list of [`NamedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord) objects
  * **unlinked** – type list of [`NamedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord) objects

<a id="GRANTA_MIScriptingToolkit.RecordLinkChanges.RecordLinkChanges.linked"></a>

#### *property* linked

Property linked is a list of [`NamedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkChanges.RecordLinkChanges.unlinked"></a>

#### *property* unlinked

Property unlinked is a list of [`NamedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkChanges.RecordLinkChanges.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordLinkGroup"></a>

<a id="recordlinkgroup"></a>

### RecordLinkGroup

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroup.RecordLinkGroup"></a>

### *class* RecordLinkGroup(linkedRecords=None, name=None, standardNames=None, tableFilters=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type representing a group of linked records.

* **Parameters:**
  * **linkedRecords** – type list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects
  * **name** – type str
  * **standardNames** – type list of str objects
  * **tableFilters** – type list of int objects

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroup.RecordLinkGroup.linkedRecords"></a>

#### *property* linkedRecords

Property linkedRecords is a list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroup.RecordLinkGroup.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroup.RecordLinkGroup.standardNames"></a>

#### *property* standardNames

Property standardNames is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroup.RecordLinkGroup.tableFilters"></a>

#### *property* tableFilters

Property tableFilters is a list of int objects. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroup.RecordLinkGroup.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail"></a>

<a id="recordlinkgroupdetail"></a>

### RecordLinkGroupDetail

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail"></a>

### *class* RecordLinkGroupDetail(fromTable=None, linkGroupType=None, name=None, reference=None, reverseName=None, reverseReference=None, standardNames=None, toTable=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed information about a Record Link Group in a Granta MI Database.

* **Parameters:**
  * **fromTable** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)
  * **linkGroupType** – type str
  * **name** – type str
  * **reference** – type [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference)
  * **reverseName** – type str
  * **reverseReference** – type [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference)
  * **standardNames** – type list of str objects
  * **toTable** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail.fromTable"></a>

#### *property* fromTable

Property fromTable is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail.linkGroupType"></a>

#### *property* linkGroupType

Property linkGroupType is of type str. See [`GRANTA_Constants.RecordLinkGroupTypes`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail.standardNames"></a>

#### *property* standardNames

Property standardNames is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail.reference"></a>

#### *property* reference

Property reference is of type [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference).

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail.reverseName"></a>

#### *property* reverseName

Property reverseName is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail.reverseReference"></a>

#### *property* reverseReference

Property reverseReference is of type [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference).

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail.toTable"></a>

#### *property* toTable

Property toTable is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupDetail.RecordLinkGroupDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference"></a>

<a id="recordlinkgroupreference"></a>

### RecordLinkGroupReference

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupReference.RecordLinkGroupReference"></a>

### *class* RecordLinkGroupReference(DBKey=None, isStandardName=None, name=None, partialTableReference=None, recordLinkGroupIdentity=None, recordLinkGroupType=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular record link group in a Granta MI database.
This may be done by specifying the identity of the group, or its name and a partial table reference.

* **Parameters:**
  * **DBKey** – type str
  * **isStandardName** – type bool
  * **name** – type str
  * **partialTableReference** – type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference)
  * **recordLinkGroupIdentity** – type int
  * **recordLinkGroupType** – type str

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupReference.RecordLinkGroupReference.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupReference.RecordLinkGroupReference.isStandardName"></a>

#### *property* isStandardName

Property isStandardName is of type bool.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupReference.RecordLinkGroupReference.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupReference.RecordLinkGroupReference.partialTableReference"></a>

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupReference.RecordLinkGroupReference.recordLinkGroupIdentity"></a>

#### *property* recordLinkGroupIdentity

Property recordLinkGroupIdentity is of type int.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupReference.RecordLinkGroupReference.recordLinkGroupType"></a>

#### *property* recordLinkGroupType

Property recordLinkGroupType is of type str. See [`GRANTA_Constants.RecordLinkGroupTypes`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.RecordLinkGroupReference.RecordLinkGroupReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordLinkModifications"></a>

<a id="recordlinkmodifications"></a>

### RecordLinkModifications

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications"></a>

### *class* RecordLinkModifications(linkAllCombinations=None, linkRecords=None, unlinkAllRecords=None, unlinkRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A set of modifications to be made to record link groups.

* **Parameters:**
  * **linkAllCombinations** – type list of [`LinkAllCombinations`](#module-GRANTA_MIScriptingToolkit.LinkAllCombinations) objects
  * **linkRecords** – type list of [`LinkRecords`](#module-GRANTA_MIScriptingToolkit.LinkRecords) objects
  * **unlinkAllRecords** – type list of [`UnlinkAllRecords`](#module-GRANTA_MIScriptingToolkit.UnlinkAllRecords) objects
  * **unlinkRecords** – type list of [`UnlinkRecords`](#module-GRANTA_MIScriptingToolkit.UnlinkRecords) objects

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications.linkAllCombinations"></a>

#### *property* linkAllCombinations

Property linkAllCombinations is a list of [`LinkAllCombinations`](#module-GRANTA_MIScriptingToolkit.LinkAllCombinations) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications.linkRecords"></a>

#### *property* linkRecords

Property linkRecords is a list of [`LinkRecords`](#module-GRANTA_MIScriptingToolkit.LinkRecords) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications.unlinkAllRecords"></a>

#### *property* unlinkAllRecords

Property unlinkAllRecords is a list of [`UnlinkAllRecords`](#module-GRANTA_MIScriptingToolkit.UnlinkAllRecords) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications.unlinkRecords"></a>

#### *property* unlinkRecords

Property unlinkRecords is a list of [`UnlinkRecords`](#module-GRANTA_MIScriptingToolkit.UnlinkRecords) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications.AddLinkAllCombinations"></a>

#### AddLinkAllCombinations(\_linkAllCombinations)

Appends \_linkAllCombinations to linkAllCombinations property on RecordLinkModifications C-object.

* **Parameters:**
  **\_linkAllCombinations** – object of type LinkAllCombinations.

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications.AddLinkRecords"></a>

#### AddLinkRecords(\_linkRecords)

Appends \_linkRecords to linkRecords property on RecordLinkModifications C-object.

* **Parameters:**
  **\_linkRecords** – object of type LinkRecords.

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications.AddUnlinkAllRecords"></a>

#### AddUnlinkAllRecords(\_unlinkAllRecords)

Appends \_unlinkAllRecords to unlinkAllRecords property on RecordLinkModifications C-object.

* **Parameters:**
  **\_unlinkAllRecords** – object of type UnlinkAllRecords.

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications.AddUnlinkRecords"></a>

#### AddUnlinkRecords(\_unlinkRecords)

Appends \_unlinkRecords to unlinkRecords property on RecordLinkModifications C-object.

* **Parameters:**
  **\_unlinkRecords** – object of type UnlinkRecords.

<a id="GRANTA_MIScriptingToolkit.RecordLinkModifications.RecordLinkModifications.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordListReference"></a>

<a id="recordlistreference"></a>

### RecordListReference

<a id="GRANTA_MIScriptingToolkit.RecordListReference.RecordListReference"></a>

### *class* RecordListReference(GUID=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A unique identifier for a record list.

* **Parameters:**
  **GUID** – type str

<a id="GRANTA_MIScriptingToolkit.RecordListReference.RecordListReference.GUID"></a>

#### *property* GUID

Property GUID is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordListReference.RecordListReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordNameSearchRequest"></a>

<a id="recordnamesearchrequest"></a>

### RecordNameSearchRequest

<a id="GRANTA_MIScriptingToolkit.RecordNameSearchRequest.RecordNameSearchRequest"></a>

### *class* RecordNameSearchRequest(caseSensitiveNames=None, filter=None, populateGUIDs=None, recordName=None, searchFullNames=None, searchShortNames=None, table=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input for the RecordNameSearch operation. Both the table and recordName are required.

* **Parameters:**
  * **caseSensitiveNames** – type bool
  * **filter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **populateGUIDs** – type bool
  * **recordName** – type str
  * **searchFullNames** – type bool
  * **searchShortNames** – type bool
  * **table** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

<a id="GRANTA_MIScriptingToolkit.RecordNameSearchRequest.RecordNameSearchRequest.caseSensitiveNames"></a>

#### *property* caseSensitiveNames

Property caseSensitiveNames is of type bool.

<a id="GRANTA_MIScriptingToolkit.RecordNameSearchRequest.RecordNameSearchRequest.filter"></a>

#### *property* filter

Property filter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

<a id="GRANTA_MIScriptingToolkit.RecordNameSearchRequest.RecordNameSearchRequest.populateGUIDs"></a>

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

<a id="GRANTA_MIScriptingToolkit.RecordNameSearchRequest.RecordNameSearchRequest.recordName"></a>

#### *property* recordName

Property recordName is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordNameSearchRequest.RecordNameSearchRequest.searchFullNames"></a>

#### *property* searchFullNames

Property searchFullNames is of type bool.

<a id="GRANTA_MIScriptingToolkit.RecordNameSearchRequest.RecordNameSearchRequest.searchShortNames"></a>

#### *property* searchShortNames

Property searchShortNames is of type bool.

<a id="GRANTA_MIScriptingToolkit.RecordNameSearchRequest.RecordNameSearchRequest.table"></a>

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

<a id="GRANTA_MIScriptingToolkit.RecordNameSearchRequest.RecordNameSearchRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordReference"></a>

<a id="recordreference"></a>

### RecordReference

<a id="GRANTA_MIScriptingToolkit.RecordReference.RecordReference"></a>

### *class* RecordReference(DBKey=None, historyGUID=None, identity=None, lookupValue=None, recordGUID=None, version=None, recordUID=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular record in a Granta MI database.
This is done directly by specifying the Identity or GUID of the record.

* **Parameters:**
  * **DBKey** – type str
  * **historyGUID** – type str
  * **identity** – type int
  * **lookupValue** – type [`LookupValue`](#module-GRANTA_MIScriptingToolkit.LookupValue)
  * **recordGUID** – type str
  * **version** – type int
  * **recordUID** – type str

<a id="GRANTA_MIScriptingToolkit.RecordReference.RecordReference.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordReference.RecordReference.historyGUID"></a>

#### *property* historyGUID

Property historyGUID is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordReference.RecordReference.identity"></a>

#### *property* identity

Property identity is of type int.

<a id="GRANTA_MIScriptingToolkit.RecordReference.RecordReference.lookupValue"></a>

#### *property* lookupValue

Property lookupValue is of type [`LookupValue`](#module-GRANTA_MIScriptingToolkit.LookupValue).

<a id="GRANTA_MIScriptingToolkit.RecordReference.RecordReference.recordGUID"></a>

#### *property* recordGUID

Property recordGUID is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordReference.RecordReference.recordUID"></a>

#### *property* recordUID

Property recordUID is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordReference.RecordReference.version"></a>

#### *property* version

Property version is of type int.

<a id="GRANTA_MIScriptingToolkit.RecordReference.RecordReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordSearchCriterion"></a>

<a id="recordsearchcriterion"></a>

### RecordSearchCriterion

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion"></a>

### *class* RecordSearchCriterion(betweenDateTimesSearchValue=None, betweenSearchValue=None, containsAllSearchValue=None, containsAnySearchValue=None, containsSearchValue=None, doesNotContainSearchValue=None, doesNotExistSearchValue=None, exactlySearchValue=None, existsSearchValue=None, greaterThanSearchValue=None, lessThanSearchValue=None, searchAttribute=None, type=None, equalToSearchValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

One criterion that controls results returned from a search.
A search comprises one or more such criteria.

* **Parameters:**
  * **betweenDateTimesSearchValue** – type [`BetweenDateTimesSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenDateTimesSearchValue)
  * **betweenSearchValue** – type [`BetweenSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenSearchValue)
  * **containsAllSearchValue** – type [`ContainsAllSearchValue`](#module-GRANTA_MIScriptingToolkit.ContainsAllSearchValue)
  * **containsAnySearchValue** – type [`ContainsAnySearchValue`](#module-GRANTA_MIScriptingToolkit.ContainsAnySearchValue)
  * **containsSearchValue** – type [`ContainsSearchValue`](#module-GRANTA_MIScriptingToolkit.ContainsSearchValue)
  * **doesNotContainSearchValue** – type [`DoesNotContainSearchValue`](#module-GRANTA_MIScriptingToolkit.DoesNotContainSearchValue)
  * **doesNotExistSearchValue** – type [`DoesNotExistSearchValue`](#module-GRANTA_MIScriptingToolkit.DoesNotExistSearchValue)
  * **exactlySearchValue** – type [`ExactlySearchValue`](#module-GRANTA_MIScriptingToolkit.ExactlySearchValue)
  * **existsSearchValue** – type [`ExistsSearchValue`](#module-GRANTA_MIScriptingToolkit.ExistsSearchValue)
  * **greaterThanSearchValue** – type [`GreaterThanSearchValue`](#module-GRANTA_MIScriptingToolkit.GreaterThanSearchValue)
  * **lessThanSearchValue** – type [`LessThanSearchValue`](#module-GRANTA_MIScriptingToolkit.LessThanSearchValue)
  * **searchAttribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **type** – type str
  * **equalToSearchValue** – type [`EqualToSearchValue`](#module-GRANTA_MIScriptingToolkit.EqualToSearchValue)

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.betweenDateTimesSearchValue"></a>

#### *property* betweenDateTimesSearchValue

Property betweenDateTimesSearchValue is of type [`BetweenDateTimesSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenDateTimesSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.betweenSearchValue"></a>

#### *property* betweenSearchValue

Property betweenSearchValue is of type [`BetweenSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.containsAllSearchValue"></a>

#### *property* containsAllSearchValue

Property containsAllSearchValue is of type [`ContainsAllSearchValue`](#module-GRANTA_MIScriptingToolkit.ContainsAllSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.containsAnySearchValue"></a>

#### *property* containsAnySearchValue

Property containsAnySearchValue is of type [`ContainsAnySearchValue`](#module-GRANTA_MIScriptingToolkit.ContainsAnySearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.containsSearchValue"></a>

#### *property* containsSearchValue

Property containsSearchValue is of type [`ContainsSearchValue`](#module-GRANTA_MIScriptingToolkit.ContainsSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.doesNotContainSearchValue"></a>

#### *property* doesNotContainSearchValue

Property doesNotContainSearchValue is of type [`DoesNotContainSearchValue`](#module-GRANTA_MIScriptingToolkit.DoesNotContainSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.doesNotExistSearchValue"></a>

#### *property* doesNotExistSearchValue

Property doesNotExistSearchValue is of type [`DoesNotExistSearchValue`](#module-GRANTA_MIScriptingToolkit.DoesNotExistSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.equalToSearchValue"></a>

#### *property* equalToSearchValue

Property equalToSearchValue is of type [`EqualToSearchValue`](#module-GRANTA_MIScriptingToolkit.EqualToSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.exactlySearchValue"></a>

#### *property* exactlySearchValue

Property exactlySearchValue is of type [`ExactlySearchValue`](#module-GRANTA_MIScriptingToolkit.ExactlySearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.existsSearchValue"></a>

#### *property* existsSearchValue

Property existsSearchValue is of type [`ExistsSearchValue`](#module-GRANTA_MIScriptingToolkit.ExistsSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.greaterThanSearchValue"></a>

#### *property* greaterThanSearchValue

Property greaterThanSearchValue is of type [`GreaterThanSearchValue`](#module-GRANTA_MIScriptingToolkit.GreaterThanSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.lessThanSearchValue"></a>

#### *property* lessThanSearchValue

Property lessThanSearchValue is of type [`LessThanSearchValue`](#module-GRANTA_MIScriptingToolkit.LessThanSearchValue).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.searchAttribute"></a>

#### *property* searchAttribute

Property searchAttribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.type"></a>

#### *property* type

Property type is of type str.

<a id="GRANTA_MIScriptingToolkit.RecordSearchCriterion.RecordSearchCriterion.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordVersionState"></a>

<a id="recordversionstate"></a>

### RecordVersionState

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState"></a>

### *class* RecordVersionState(recordReference=None, versionState=None, hasReleasedRevision=None, hasSupersededRevision=None, hasWithdrawnRevision=None, createdRevision=None, modifiedRevision=None, releasedRevision=None, supersededRevision=None, withdrawnRevision=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The version status of a particular Record in a Granta MI database.

* **Parameters:**
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **versionState** – type int
  * **hasReleasedRevision** – type bool
  * **hasSupersededRevision** – type bool
  * **hasWithdrawnRevision** – type bool
  * **createdRevision** – type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision)
  * **modifiedRevision** – type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision)
  * **releasedRevision** – type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision)
  * **supersededRevision** – type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision)
  * **withdrawnRevision** – type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision)

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.VersionState"></a>

#### *class* VersionState

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.VersionState.Released"></a>

#### Released *= 0*

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.VersionState.Superseded"></a>

#### Superseded *= 1*

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.VersionState.Withdrawn"></a>

#### Withdrawn *= 2*

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.VersionState.Unreleased"></a>

#### Unreleased *= 3*

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.VersionState.Unversioned"></a>

#### Unversioned *= 4*

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.VersionState.Unknown"></a>

#### Unknown *= 5*

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.createdRevision"></a>

#### *property* createdRevision

Property createdRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.hasReleasedRevision"></a>

#### *property* hasReleasedRevision

Property hasReleasedRevision is of type bool.

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.hasSupersededRevision"></a>

#### *property* hasSupersededRevision

Property hasSupersededRevision is of type bool.

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.hasWithdrawnRevision"></a>

#### *property* hasWithdrawnRevision

Property hasWithdrawnRevision is of type bool.

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.modifiedRevision"></a>

#### *property* modifiedRevision

Property modifiedRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.releasedRevision"></a>

#### *property* releasedRevision

Property releasedRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.supersededRevision"></a>

#### *property* supersededRevision

Property supersededRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.versionState"></a>

#### *property* versionState

Property versionState is of type int. See [`RecordVersionState.VersionState`](#GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.VersionState) for supported values.

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.withdrawnRevision"></a>

#### *property* withdrawnRevision

Property withdrawnRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

<a id="GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses"></a>

<a id="recordwithattributeaddresses"></a>

### RecordWithAttributeAddresses

<a id="GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses.RecordWithAttributeAddresses"></a>

### *class* RecordWithAttributeAddresses(attributeAddresses=None, recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) with a list of attributes
and their upload URL addresses.

* **Parameters:**
  * **attributeAddresses** – type list of [`AttributeAddress`](#module-GRANTA_MIScriptingToolkit.AttributeAddress) objects
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

<a id="GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses.RecordWithAttributeAddresses.attributeAddresses"></a>

#### *property* attributeAddresses

Property attributeAddresses is a list of [`AttributeAddress`](#module-GRANTA_MIScriptingToolkit.AttributeAddress) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses.RecordWithAttributeAddresses.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses.RecordWithAttributeAddresses.AddAttributeAddress"></a>

#### AddAttributeAddress(\_attributeAddress)

Appends \_attributeAddress to attributeAddresses property on RecordWithAttributeAddresses C-object.

* **Parameters:**
  **\_attributeAddress** – object of type AttributeAddress.

<a id="GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses.RecordWithAttributeAddresses.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ResolveReferencesRequest"></a>

<a id="resolvereferencesrequest"></a>

### ResolveReferencesRequest

<a id="GRANTA_MIScriptingToolkit.ResolveReferencesRequest.ResolveReferencesRequest"></a>

### *class* ResolveReferencesRequest(entities=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the ResolveReferences operation.

* **Parameters:**
  **entities** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

<a id="GRANTA_MIScriptingToolkit.ResolveReferencesRequest.ResolveReferencesRequest.entities"></a>

#### *property* entities

Property entities is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.ResolveReferencesRequest.ResolveReferencesRequest.AddEntitie"></a>

#### AddEntitie(\_recordReference)

Appends \_recordReference to entities property on ResolveReferencesRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.ResolveReferencesRequest.ResolveReferencesRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.ResolveReferencesResponse"></a>

<a id="resolvereferencesresponse"></a>

### ResolveReferencesResponse

<a id="GRANTA_MIScriptingToolkit.ResolveReferencesResponse.ResolveReferencesResponse"></a>

### *class* ResolveReferencesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the ResolveReferences operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a ResolveReferencesResponse object.

<a id="GRANTA_MIScriptingToolkit.ResolveReferencesResponse.ResolveReferencesResponse.entityResolutions"></a>

#### *property* entityResolutions

Property entityResolutions is a list of [`MIEntityResolution`](#module-GRANTA_MIScriptingToolkit.MIEntityResolution) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.Response"></a>

<a id="response"></a>

### Response

<a id="GRANTA_MIScriptingToolkit.Response.Response"></a>

### *class* Response(c_obj)

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC)

Base class for response types in Granta MI.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a response object.

<a id="GRANTA_MIScriptingToolkit.Response.Response.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="GRANTA_MIScriptingToolkit.Response.Response.serviceLayerResponse"></a>

#### *property* serviceLayerResponse

Property serviceLayerResponse is of type [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse).

<a id="module-GRANTA_MIScriptingToolkit.RevisionInfo"></a>

<a id="revisioninfo"></a>

### RevisionInfo

<a id="GRANTA_MIScriptingToolkit.RevisionInfo.RevisionInfo"></a>

### *class* RevisionInfo(created=None, modified=None, updateCount=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Describes when an entity in a Granta MI database was created and updated.

* **Parameters:**
  * **created** – type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision)
  * **modified** – type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision)
  * **updateCount** – type int

<a id="GRANTA_MIScriptingToolkit.RevisionInfo.RevisionInfo.created"></a>

#### *property* created

Property created is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

<a id="GRANTA_MIScriptingToolkit.RevisionInfo.RevisionInfo.modified"></a>

#### *property* modified

Property modified is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

<a id="GRANTA_MIScriptingToolkit.RevisionInfo.RevisionInfo.updateCount"></a>

#### *property* updateCount

Property updateCount is of type int.

<a id="GRANTA_MIScriptingToolkit.RevisionInfo.RevisionInfo.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.RichText"></a>

<a id="richtext"></a>

### RichText

<a id="GRANTA_MIScriptingToolkit.RichText.RichText"></a>

### *class* RichText(type=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains a piece of text and its type.

* **Parameters:**
  * **type** – type int
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.RichText.RichText.Type"></a>

#### *class* Type

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.RichText.RichText.Type.Plain"></a>

#### Plain *= 0*

<a id="GRANTA_MIScriptingToolkit.RichText.RichText.Type.Markdown"></a>

#### Markdown *= 1*

<a id="GRANTA_MIScriptingToolkit.RichText.RichText.type"></a>

#### *property* type

Property type is of type int.

<a id="GRANTA_MIScriptingToolkit.RichText.RichText.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.RichText.RichText.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SearchResult"></a>

<a id="searchresult"></a>

### SearchResult

<a id="GRANTA_MIScriptingToolkit.SearchResult.SearchResult"></a>

### *class* SearchResult(longName=None, ranking=None, recordReference=None, shortName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An extension of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) with a ranking. The
higher the ranking the better the match to your search criteria.

* **Parameters:**
  * **longName** – type str
  * **ranking** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **shortName** – type str

<a id="GRANTA_MIScriptingToolkit.SearchResult.SearchResult.longName"></a>

#### *property* longName

Property longName is of type str.

<a id="GRANTA_MIScriptingToolkit.SearchResult.SearchResult.ranking"></a>

#### *property* ranking

Property ranking is of type str.

<a id="GRANTA_MIScriptingToolkit.SearchResult.SearchResult.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.SearchResult.SearchResult.shortName"></a>

#### *property* shortName

Property shortName is of type str.

<a id="GRANTA_MIScriptingToolkit.SearchResult.SearchResult.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="id5"></a>

### SearchService

<a id="GRANTA_MIScriptingToolkit.SearchService.SearchService"></a>

### *class* SearchService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

The Search service finds Records, within Granta MI Databases, matching specified criteria.

<a id="GRANTA_MIScriptingToolkit.SearchService.SearchService.SimpleTextSearch"></a>

#### SimpleTextSearch(\_req)

Searches for records matching simple text criteria.

* **Parameters:**
  **\_req** – [`SimpleTextSearch`](#module-GRANTA_MIScriptingToolkit.SimpleTextSearch) object
* **Returns:**
  [`SimpleTextSearchResponse`](#module-GRANTA_MIScriptingToolkit.SimpleTextSearchResponse) object

<a id="GRANTA_MIScriptingToolkit.SearchService.SearchService.CriteriaSearch"></a>

#### CriteriaSearch(\_req)

Searches for records matching attribute-based criteria.

* **Parameters:**
  **\_req** – [`CriteriaSearch`](#module-GRANTA_MIScriptingToolkit.CriteriaSearch) object
* **Returns:**
  [`SimpleTextSearchResponse`](#module-GRANTA_MIScriptingToolkit.SimpleTextSearchResponse) object

<a id="GRANTA_MIScriptingToolkit.SearchService.SearchService.RecordNameSearch"></a>

#### RecordNameSearch(\_req)

Searches for Records with a given exact Record name.

* **Parameters:**
  **\_req** – [`RecordNameSearchRequest`](#module-GRANTA_MIScriptingToolkit.RecordNameSearchRequest) object
* **Returns:**
  [`SimpleTextSearchResponse`](#module-GRANTA_MIScriptingToolkit.SimpleTextSearchResponse) object

<a id="module-GRANTA_MIScriptingToolkit.Series"></a>

<a id="series"></a>

### Series

<a id="GRANTA_MIScriptingToolkit.Series.Series"></a>

### *class* Series(XYPoints=None, constraints=None, decoration=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type for functional data which includes X-Y data and any constraints.

* **Parameters:**
  * **XYPoints** – type [`XYData`](#module-GRANTA_MIScriptingToolkit.XYData)
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)
  * **decoration** – type int

<a id="GRANTA_MIScriptingToolkit.Series.Series.constraints"></a>

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

<a id="GRANTA_MIScriptingToolkit.Series.Series.decoration"></a>

#### *property* decoration

Property decoration is of type int. See [`GRANTA_Constants.GraphDecoration`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.Series.Series.XYPoints"></a>

#### *property* XYPoints

Property XYPoints is of type [`XYData`](#module-GRANTA_MIScriptingToolkit.XYData).

<a id="GRANTA_MIScriptingToolkit.Series.Series.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.Service"></a>

<a id="service"></a>

### Service

<a id="GRANTA_MIScriptingToolkit.Service.Service"></a>

### *class* Service(mi_session, retries=0)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Base class for Granta MI Service objects. For internal use only.

<a id="module-GRANTA_MIScriptingToolkit.ServiceLayerResponse"></a>

<a id="servicelayerresponse"></a>

### ServiceLayerResponse

<a id="GRANTA_MIScriptingToolkit.ServiceLayerResponse.ServiceLayerResponse"></a>

### *class* ServiceLayerResponse(errorMessage=None, requestMessage=None, responseCode=None, responseMessage=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The HTTP response information from Granta MI Service Layer. Useful for debugging bad requests.

* **Parameters:**
  * **errorMessage** – type str
  * **requestMessage** – type str
  * **responseCode** – type int
  * **responseMessage** – type str

<a id="GRANTA_MIScriptingToolkit.ServiceLayerResponse.ServiceLayerResponse.errorMessage"></a>

#### *property* errorMessage

Property errorMessage is of type str.

<a id="GRANTA_MIScriptingToolkit.ServiceLayerResponse.ServiceLayerResponse.requestMessage"></a>

#### *property* requestMessage

Property requestMessage is of type str.

<a id="GRANTA_MIScriptingToolkit.ServiceLayerResponse.ServiceLayerResponse.responseCode"></a>

#### *property* responseCode

Property responseCode is of type int. This is an HTTP status code.

<a id="GRANTA_MIScriptingToolkit.ServiceLayerResponse.ServiceLayerResponse.responseMessage"></a>

#### *property* responseMessage

Property responseMessage is of type str.

<a id="GRANTA_MIScriptingToolkit.ServiceLayerResponse.ServiceLayerResponse.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SetRecordAttributesRequest"></a>

<a id="setrecordattributesrequest"></a>

### SetRecordAttributesRequest

<a id="GRANTA_MIScriptingToolkit.SetRecordAttributesRequest.SetRecordAttributesRequest"></a>

### *class* SetRecordAttributesRequest(importErrorMode=None, importRecords=None, notes=None, releaseNotes=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input to a set record attributes operation. Includes an array of records to import.

* **Parameters:**
  * **importErrorMode** – type str
  * **importRecords** – type list of [`ImportRecord`](#module-GRANTA_MIScriptingToolkit.ImportRecord) objects
  * **notes** – type str
  * **releaseNotes** – type str

<a id="GRANTA_MIScriptingToolkit.SetRecordAttributesRequest.SetRecordAttributesRequest.importRecords"></a>

#### *property* importRecords

Property importRecords is of type list of [`ImportRecord`](#module-GRANTA_MIScriptingToolkit.ImportRecord).

<a id="GRANTA_MIScriptingToolkit.SetRecordAttributesRequest.SetRecordAttributesRequest.notes"></a>

#### *property* notes

Property notes is of type str.

<a id="GRANTA_MIScriptingToolkit.SetRecordAttributesRequest.SetRecordAttributesRequest.releaseNotes"></a>

#### *property* releaseNotes

Property releaseNotes is of type str.

<a id="GRANTA_MIScriptingToolkit.SetRecordAttributesRequest.SetRecordAttributesRequest.importErrorMode"></a>

#### *property* importErrorMode

Property importErrorMode is of type str. See [`GRANTA_Constants.ImportErrorMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.SetRecordAttributesRequest.SetRecordAttributesRequest.AddImportRecord"></a>

#### AddImportRecord(\_importRecord)

Appends \_importRecord to importRecords property on SetRecordAttributesRequest C-object.

* **Parameters:**
  **\_importRecord** – object of type ImportRecord.

<a id="GRANTA_MIScriptingToolkit.SetRecordAttributesRequest.SetRecordAttributesRequest.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SetRecordAttributesResponse"></a>

<a id="setrecordattributesresponse"></a>

### SetRecordAttributesResponse

<a id="GRANTA_MIScriptingToolkit.SetRecordAttributesResponse.SetRecordAttributesResponse"></a>

### *class* SetRecordAttributesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Response for set record attributes operation. Includes an array of import records.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a SetRecordAttributesResponse object.

<a id="GRANTA_MIScriptingToolkit.SetRecordAttributesResponse.SetRecordAttributesResponse.recordsImported"></a>

#### *property* recordsImported

Property recordsImported is a list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="module-GRANTA_MIScriptingToolkit.ShortTextDataType"></a>

<a id="shorttextdatatype"></a>

### ShortTextDataType

<a id="GRANTA_MIScriptingToolkit.ShortTextDataType.ShortTextDataType"></a>

### *class* ShortTextDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Type for values of short text (string) data.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type str

<a id="GRANTA_MIScriptingToolkit.ShortTextDataType.ShortTextDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.ShortTextDataType.ShortTextDataType.value"></a>

#### *property* value

Property value is of type str.

<a id="GRANTA_MIScriptingToolkit.ShortTextDataType.ShortTextDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SimpleTextSearch"></a>

<a id="simpletextsearch"></a>

### SimpleTextSearch

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch"></a>

### *class* SimpleTextSearch(DBKey=None, populateGUIDs=None, recordFilter=None, restrictToTables=None, searchFilter=None, searchMode=None, searchValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input to a simple text search operation.
Both the DBKey, and search value are required.

* **Parameters:**
  * **DBKey** – type str
  * **populateGUIDs** – type bool
  * **recordFilter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **restrictToTables** – type list of [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference) objects
  * **searchFilter** – type int
  * **searchMode** – type int
  * **searchValue** – type str

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch.restrictToTables"></a>

#### *property* restrictToTables

Property restrictToTables is a list of [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch.populateGUIDs"></a>

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch.searchValue"></a>

#### *property* searchValue

Property searchValue is of type str.

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch.recordFilter"></a>

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch.searchFilter"></a>

#### *property* searchFilter

Property searchFilter is of type int. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch.searchMode"></a>

#### *property* searchMode

Property searchMode is of type int. See [`GRANTA_Constants.SearchMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch.AddRestrictToTable"></a>

#### AddRestrictToTable(\_partialTableReference)

Appends \_partialTableReference to restrictToTables property on SimpleTextSearch C-object.

* **Parameters:**
  **\_partialTableReference** – object of type PartialTableReference.

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearch.SimpleTextSearch.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SimpleTextSearchResponse"></a>

<a id="simpletextsearchresponse"></a>

### SimpleTextSearchResponse

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearchResponse.SimpleTextSearchResponse"></a>

### *class* SimpleTextSearchResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

The output to the simple text search operation.
Contains a list of records returned by the search and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a SimpleTextSearchResponse object.

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearchResponse.SimpleTextSearchResponse.searchResults"></a>

#### *property* searchResults

Property searchResults is a list of [`SearchResult`](#module-GRANTA_MIScriptingToolkit.SearchResult) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.SimpleTextSearchResponse.SimpleTextSearchResponse.AddSearchResult"></a>

#### AddSearchResult(\_searchResult)

Appends \_searchResult to searchResults property on SimpleTextSearchResponse C-object.

* **Parameters:**
  **\_searchResult** – object of type SearchResult.

<a id="module-GRANTA_MIScriptingToolkit.SourceRecord"></a>

<a id="sourcerecord"></a>

### SourceRecord

<a id="GRANTA_MIScriptingToolkit.SourceRecord.SourceRecord"></a>

### *class* SourceRecord(record=None, recordLinkGroups=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that contains a record reference and associated record link groups.

* **Parameters:**
  * **record** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **recordLinkGroups** – type [`LinkedRecordsDataType`](#module-GRANTA_MIScriptingToolkit.LinkedRecordsDataType)

<a id="GRANTA_MIScriptingToolkit.SourceRecord.SourceRecord.record"></a>

#### *property* record

Property record is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.SourceRecord.SourceRecord.recordLinkGroups"></a>

#### *property* recordLinkGroups

Property recordLinkGroups is of type [`LinkedRecordsDataType`](#module-GRANTA_MIScriptingToolkit.LinkedRecordsDataType).

<a id="GRANTA_MIScriptingToolkit.SourceRecord.SourceRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SourceUnitConversionSet"></a>

<a id="sourceunitconversionset"></a>

### SourceUnitConversionSet

<a id="GRANTA_MIScriptingToolkit.SourceUnitConversionSet.SourceUnitConversionSet"></a>

### *class* SourceUnitConversionSet(conversions=None, sourceSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

All the unit conversions available for a specified unit.

* **Parameters:**
  * **conversions** – type list of [`UnitConversionTarget`](#module-GRANTA_MIScriptingToolkit.UnitConversionTarget) objects
  * **sourceSymbol** – type str

<a id="GRANTA_MIScriptingToolkit.SourceUnitConversionSet.SourceUnitConversionSet.conversions"></a>

#### *property* conversions

Property conversions is a list of [`UnitConversionTarget`](#module-GRANTA_MIScriptingToolkit.UnitConversionTarget) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.SourceUnitConversionSet.SourceUnitConversionSet.sourceSymbol"></a>

#### *property* sourceSymbol

Property sourceSymbol is of type str.

<a id="GRANTA_MIScriptingToolkit.SourceUnitConversionSet.SourceUnitConversionSet.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SpecificUnitConversionContext"></a>

<a id="specificunitconversioncontext"></a>

### SpecificUnitConversionContext

<a id="GRANTA_MIScriptingToolkit.SpecificUnitConversionContext.SpecificUnitConversionContext"></a>

### *class* SpecificUnitConversionContext(absoluteUnits=None, currency=None, unitSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type defining how values with convertible units should be represented.

* **Parameters:**
  * **absoluteUnits** – type bool
  * **currency** – type str
  * **unitSymbol** – type str

<a id="GRANTA_MIScriptingToolkit.SpecificUnitConversionContext.SpecificUnitConversionContext.absoluteUnits"></a>

#### *property* absoluteUnits

Property absoluteUnits is of type bool.

<a id="GRANTA_MIScriptingToolkit.SpecificUnitConversionContext.SpecificUnitConversionContext.currency"></a>

#### *property* currency

Property currency is of type str.

<a id="GRANTA_MIScriptingToolkit.SpecificUnitConversionContext.SpecificUnitConversionContext.unitSymbol"></a>

#### *property* unitSymbol

Property unitSymbol is of type str.

<a id="GRANTA_MIScriptingToolkit.SpecificUnitConversionContext.SpecificUnitConversionContext.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SubsetDetail"></a>

<a id="subsetdetail"></a>

### SubsetDetail

<a id="GRANTA_MIScriptingToolkit.SubsetDetail.SubsetDetail"></a>

### *class* SubsetDetail(name=None, subset=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a subset in a Granta MI database.

* **Parameters:**
  * **name** – type str
  * **subset** – type [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference)

<a id="GRANTA_MIScriptingToolkit.SubsetDetail.SubsetDetail.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.SubsetDetail.SubsetDetail.subset"></a>

#### *property* subset

Property subset is of type [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference).

<a id="GRANTA_MIScriptingToolkit.SubsetDetail.SubsetDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SubsetReference"></a>

<a id="subsetreference"></a>

### SubsetReference

<a id="GRANTA_MIScriptingToolkit.SubsetReference.SubsetReference"></a>

### *class* SubsetReference(DBKey=None, name=None, partialTableReference=None, subsetIdentity=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that identifies a particular subset in a Granta MI database. This may be done by specifying
the identity of the subset, or by specifying a name that will match (only) the subset along with
the table to which the subset belongs.

* **Parameters:**
  * **DBKey** – type str
  * **name** – type str
  * **partialTableReference** – type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference)
  * **subsetIdentity** – type int

<a id="GRANTA_MIScriptingToolkit.SubsetReference.SubsetReference.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.SubsetReference.SubsetReference.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.SubsetReference.SubsetReference.partialTableReference"></a>

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference). When used for input, this only needs to be specified if you are specifying a name rather than an id.

<a id="GRANTA_MIScriptingToolkit.SubsetReference.SubsetReference.subsetIdentity"></a>

#### *property* subsetIdentity

Property subsetIdentity is of type int.

<a id="GRANTA_MIScriptingToolkit.SubsetReference.SubsetReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.SubsetsDataType"></a>

<a id="subsetsdatatype"></a>

### SubsetsDataType

<a id="GRANTA_MIScriptingToolkit.SubsetsDataType.SubsetsDataType"></a>

### *class* SubsetsDataType(dataVersionNo=None, importNodeName=None, namedSubsets=None, nodeName=None, typeString=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Contains a list of subsets.
Contains a list of subsets (returned by DataExport for the pseudo attribute for Subsets).

* **Parameters:**
  * **dataVersionNo** – type int
  * **importNodeName** – type str
  * **namedSubsets** – type list of [`NamedSubset`](#module-GRANTA_MIScriptingToolkit.NamedSubset) objects
  * **nodeName** – type str
  * **typeString** – type str

<a id="GRANTA_MIScriptingToolkit.SubsetsDataType.SubsetsDataType.dataVersionNo"></a>

#### *property* dataVersionNo

Property dataVersionNo is of type int.

<a id="GRANTA_MIScriptingToolkit.SubsetsDataType.SubsetsDataType.importNodeName"></a>

#### *property* importNodeName

Property importNodeName is of type str.

<a id="GRANTA_MIScriptingToolkit.SubsetsDataType.SubsetsDataType.namedSubsets"></a>

#### *property* namedSubsets

Property namedSubsets is a list of [`NamedSubset`](#module-GRANTA_MIScriptingToolkit.NamedSubset) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.SubsetsDataType.SubsetsDataType.nodeName"></a>

#### *property* nodeName

Property nodeName is of type str.

<a id="GRANTA_MIScriptingToolkit.SubsetsDataType.SubsetsDataType.typeString"></a>

#### *property* typeString

Property typeString is of type str.

<a id="GRANTA_MIScriptingToolkit.SubsetsDataType.SubsetsDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TableDetail"></a>

<a id="tabledetail"></a>

### TableDetail

<a id="GRANTA_MIScriptingToolkit.TableDetail.TableDetail"></a>

### *class* TableDetail(attributeReferences=None, defaultLayout=None, defaultSubset=None, standardAttributeReferences=None, tableFilters=None, tableReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a table in a Granta MI database.

* **Parameters:**
  * **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects
  * **defaultLayout** – type [`NamedLayout`](#module-GRANTA_MIScriptingToolkit.NamedLayout)
  * **defaultSubset** – type [`SubsetDetail`](#module-GRANTA_MIScriptingToolkit.SubsetDetail)
  * **standardAttributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects
  * **tableFilters** – type list of int objects
  * **tableReference** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

<a id="GRANTA_MIScriptingToolkit.TableDetail.TableDetail.attributeReferences"></a>

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TableDetail.TableDetail.defaultLayout"></a>

#### *property* defaultLayout

Property defaultLayout is of type [`NamedLayout`](#module-GRANTA_MIScriptingToolkit.NamedLayout).

<a id="GRANTA_MIScriptingToolkit.TableDetail.TableDetail.defaultSubset"></a>

#### *property* defaultSubset

Property defaultSubset is of type [`SubsetDetail`](#module-GRANTA_MIScriptingToolkit.SubsetDetail).

<a id="GRANTA_MIScriptingToolkit.TableDetail.TableDetail.standardAttributeReferences"></a>

#### *property* standardAttributeReferences

Property standardAttributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TableDetail.TableDetail.tableFilters"></a>

#### *property* tableFilters

Property tableFilters is a list of int objects. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TableDetail.TableDetail.tableReference"></a>

#### *property* tableReference

Property tableReference is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

<a id="GRANTA_MIScriptingToolkit.TableDetail.TableDetail.AddAttributeReferences"></a>

#### AddAttributeReferences(\_attributeReference)

Appends \_attributeReference to attributeReferences property on TableDetail C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

<a id="GRANTA_MIScriptingToolkit.TableDetail.TableDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TableReference"></a>

<a id="tablereference"></a>

### TableReference

<a id="GRANTA_MIScriptingToolkit.TableReference.TableReference"></a>

### *class* TableReference(DBKey=None, GUID=None, ID=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular table in a particular Granta MI database.
The DBKey is required in addition to at least one of either: ID, GUID, or Name.

* **Parameters:**
  * **DBKey** – type str
  * **GUID** – type str
  * **ID** – type int
  * **name** – type str

<a id="GRANTA_MIScriptingToolkit.TableReference.TableReference.DBKey"></a>

#### *property* DBKey

Property DBKey is of type str.

<a id="GRANTA_MIScriptingToolkit.TableReference.TableReference.GUID"></a>

#### *property* GUID

Property GUID is of type str.

<a id="GRANTA_MIScriptingToolkit.TableReference.TableReference.ID"></a>

#### *property* ID

Property ID is of type int.

<a id="GRANTA_MIScriptingToolkit.TableReference.TableReference.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.TableReference.TableReference.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TabularColumnDetail"></a>

<a id="tabularcolumndetail"></a>

### TabularColumnDetail

<a id="GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail"></a>

### *class* TabularColumnDetail(dataType=None, databaseUnit=None, discreteValues=None, name=None, revisionInfo=None, type=None, identity=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Describes a Tabular Column, defined in a Tabular Attribute.
This details how the schema describes the Column, and does not provide information about the
contents of the Column in any particular Datum.

* **Parameters:**
  * **dataType** – type str
  * **databaseUnit** – type str
  * **discreteValues** – type list of str objects
  * **name** – type str
  * **revisionInfo** – type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo)
  * **type** – type int
  * **identity** – type int

<a id="GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.dataType"></a>

#### *property* dataType

Property dataType is of type str.

<a id="GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.databaseUnit"></a>

#### *property* databaseUnit

Property databaseUnit is of type str.

<a id="GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.discreteValues"></a>

#### *property* discreteValues

Property discreteValues is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.identity"></a>

#### *property* identity

Property identity is of type int.

<a id="GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.revisionInfo"></a>

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

<a id="GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.type"></a>

#### *property* type

Property type is of type int.

<a id="GRANTA_MIScriptingToolkit.TabularColumnDetail.TabularColumnDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TabularDataCell"></a>

<a id="tabulardatacell"></a>

### TabularDataCell

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell"></a>

### *class* TabularDataCell(data=None, dataType=None, dateDataValue=None, discreteDataValue=None, fileDataValue=None, hyperlinkDataValue=None, integerDataValue=None, listDataValue=None, logicalDataValue=None, longTextDataValue=None, pictureDataValue=None, pointDataValue=None, rangeDataValue=None, shortTextDataValue=None, emptyDataValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Cell within an item of Tabular Data. When importing, TabularDataRow’s CreateRow() and
CreateUpdateRow() functions initialize empty cells. You can set this type’s data member to be
various data types: range, point, short text, long text, discrete, integer, logical, hyperlink,
file, picture, or date.

* **Parameters:**
  * **data** – type [`IDataValue`](#module-GRANTA_MIScriptingToolkit.IDataValue)
  * **dataType** – type str
  * **dateDataValue** – type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType)
  * **discreteDataValue** – type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType)
  * **fileDataValue** – type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType)
  * **hyperlinkDataValue** – type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType)
  * **integerDataValue** – type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType)
  * **listDataValue** – type [`ListDataType`](#module-GRANTA_MIScriptingToolkit.ListDataType)
  * **logicalDataValue** – type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType)
  * **longTextDataValue** – type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType)
  * **pictureDataValue** – type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType)
  * **pointDataValue** – type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType)
  * **rangeDataValue** – type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType)
  * **shortTextDataValue** – type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType)
  * **emptyDataValue** – type [`EmptyDataType`](#module-GRANTA_MIScriptingToolkit.EmptyDataType)

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.dataType"></a>

#### *property* dataType

Property dataType is of type str.

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.dateDataValue"></a>

#### *property* dateDataValue

Property dateDataValue is of type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.discreteDataValue"></a>

#### *property* discreteDataValue

Property discreteDataValue is of type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.emptyDataValue"></a>

#### *property* emptyDataValue

Property emptyDataValue is of type [`EmptyDataType`](#module-GRANTA_MIScriptingToolkit.EmptyDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.fileDataValue"></a>

#### *property* fileDataValue

Property fileDataValue is of type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.hyperlinkDataValue"></a>

#### *property* hyperlinkDataValue

Property hyperlinkDataValue is of type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.integerDataValue"></a>

#### *property* integerDataValue

Property integerDataValue is of type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.listDataValue"></a>

#### *property* listDataValue

Property listDataValue is of type [`ListDataType`](#module-GRANTA_MIScriptingToolkit.ListDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.logicalDataValue"></a>

#### *property* logicalDataValue

Property logicalDataValue is of type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.longTextDataValue"></a>

#### *property* longTextDataValue

Property longTextDataValue is of type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.pictureDataValue"></a>

#### *property* pictureDataValue

Property pictureDataValue is of type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.pointDataValue"></a>

#### *property* pointDataValue

Property pointDataValue is of type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.rangeDataValue"></a>

#### *property* rangeDataValue

Property rangeDataValue is of type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.shortTextDataValue"></a>

#### *property* shortTextDataValue

Property shortTextDataValue is of type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.data"></a>

#### *property* data

Property data is of type [`IDataValue`](#module-GRANTA_MIScriptingToolkit.IDataValue).

<a id="GRANTA_MIScriptingToolkit.TabularDataCell.TabularDataCell.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TabularDataRow"></a>

<a id="tabulardatarow"></a>

### TabularDataRow

<a id="GRANTA_MIScriptingToolkit.TabularDataRow.TabularDataRow"></a>

### *class* TabularDataRow(Id=None, cells=None, linkedRecords=None, linkingValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Row within an item of Tabular Data. When importing, this must be created by TabularDataType’s
CreateRow() or CreateUpdateRow() functions. These functions return rows with empty cells (the
number of which is the number of columns added with AddColumn()).

* **Parameters:**
  * **Id** – type int
  * **cells** – type list of [`TabularDataCell`](#module-GRANTA_MIScriptingToolkit.TabularDataCell) objects
  * **linkedRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **linkingValue** – type str

<a id="GRANTA_MIScriptingToolkit.TabularDataRow.TabularDataRow.cells"></a>

#### *property* cells

Property cells is a list of [`TabularDataCell`](#module-GRANTA_MIScriptingToolkit.TabularDataCell) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TabularDataRow.TabularDataRow.Id"></a>

#### *property* Id

Property Id is of type int.

<a id="GRANTA_MIScriptingToolkit.TabularDataRow.TabularDataRow.linkedRecords"></a>

#### *property* linkedRecords

Property linkedRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TabularDataRow.TabularDataRow.linkingValue"></a>

#### *property* linkingValue

Property linkingValue is of type str.

<a id="GRANTA_MIScriptingToolkit.TabularDataRow.TabularDataRow.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TabularDataType"></a>

<a id="tabulardatatype"></a>

### TabularDataType

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType"></a>

### *class* TabularDataType(columns=None, isApplicable=None, tabularDataRows=None, summaryColumns=None, summaryRow=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Type representing an item of exported Tabular Data, including metadata such as Column definitions.
This type can also be used for import, although the usage pattern is different. See the
[`TabularDataRow`](#module-GRANTA_MIScriptingToolkit.TabularDataRow) type for more information.

* **Parameters:**
  * **columns** – type list of [`TabularDataTypeColumn`](#module-GRANTA_MIScriptingToolkit.TabularDataTypeColumn) objects
  * **isApplicable** – type bool
  * **tabularDataRows** – type list of [`TabularDataRow`](#module-GRANTA_MIScriptingToolkit.TabularDataRow) objects
  * **summaryColumns** – type list of [`TabularDataTypeColumn`](#module-GRANTA_MIScriptingToolkit.TabularDataTypeColumn) objects
  * **summaryRow** – type [`TabularDataRow`](#module-GRANTA_MIScriptingToolkit.TabularDataRow)

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.ChangeType"></a>

#### *class* ChangeType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.ChangeType.InsertBefore"></a>

#### InsertBefore *= 0*

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.ChangeType.Append"></a>

#### Append *= 1*

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.ChangeType.Update"></a>

#### Update *= 2*

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.ChangeType.Delete"></a>

#### Delete *= 3*

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.CreateRow"></a>

#### CreateRow()

Create and return a row for a tabular data import operation.

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.CreateUpdateRow"></a>

#### CreateUpdateRow(type, identity)

Create and return a row for a tabular data import update operation. To append a new row, use identity 0: `new_row = tabular_data_type.CreateUpdateRow(type=ChangeType.Append, identity=0)`. To clear data from an existing cell, use EmptyDataType in an update operation.

* **Parameters:**
  * **type** – This specifies the operation to perform on this tabular datum.
    See [`TabularDataType.ChangeType`](#GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.ChangeType) for supported values.
  * **identity** – The ID of the row to update. You should retrieve this from a data export operation (GetRecordAttributesByRef). If type is Append, pass this argument in as 0.

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.columns"></a>

#### *property* columns

Property columns is a list of [`TabularDataTypeColumn`](#module-GRANTA_MIScriptingToolkit.TabularDataTypeColumn) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.isApplicable"></a>

#### *property* isApplicable

Property isApplicable is of type bool.

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.summaryColumns"></a>

#### *property* summaryColumns

Property summaryColumns is a list of [`TabularDataTypeColumn`](#module-GRANTA_MIScriptingToolkit.TabularDataTypeColumn) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.tabularDataRows"></a>

#### *property* tabularDataRows

Property tabularDataRows is a list of [`TabularDataRow`](#module-GRANTA_MIScriptingToolkit.TabularDataRow) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.summaryRow"></a>

#### *property* summaryRow

Property summaryRow is of type [`TabularDataRow`](#module-GRANTA_MIScriptingToolkit.TabularDataRow).

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.AddColumn"></a>

#### AddColumn(value)

Appends value to columns property on TabularDataType C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

<a id="GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TabularDataTypeColumn"></a>

<a id="tabulardatatypecolumn"></a>

### TabularDataTypeColumn

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn"></a>

### *class* TabularDataTypeColumn(columnType=None, dataType=None, databaseUnit=None, identity=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a column or data summary column in a specific tabular attribute.

* **Parameters:**
  * **columnType** – type int
  * **dataType** – type str
  * **databaseUnit** – type str
  * **identity** – type int
  * **name** – type str

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.ColType"></a>

#### *class* ColType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.ColType.Local"></a>

#### Local *= 0*

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.ColType.TargetAttribute"></a>

#### TargetAttribute *= 1*

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.ColType.TargetRecord"></a>

#### TargetRecord *= 2*

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.ColType.TargetTabularColumn"></a>

#### TargetTabularColumn *= 3*

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.ColType.Unavailable"></a>

#### Unavailable *= 4*

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.columnType"></a>

#### *property* columnType

Property columnType is of type int.

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.dataType"></a>

#### *property* dataType

Property dataType is of type str.

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.databaseUnit"></a>

#### *property* databaseUnit

Property databaseUnit is of type str.

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.identity"></a>

#### *property* identity

Property identity is of type int.

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.name"></a>

#### *property* name

Property name is of type str.

<a id="GRANTA_MIScriptingToolkit.TabularDataTypeColumn.TabularDataTypeColumn.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TabularDetail"></a>

<a id="tabulardetail"></a>

### TabularDetail

<a id="GRANTA_MIScriptingToolkit.TabularDetail.TabularDetail"></a>

### *class* TabularDetail(columns=None, linkedTable=None, linkingAttribute=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a specific tabular attribute. If the tabular attribute has a linking attribute,
you can specify the linking attribute and the linked table containing that attribute.

* **Parameters:**
  * **columns** – type list of [`TabularColumnDetail`](#module-GRANTA_MIScriptingToolkit.TabularColumnDetail) objects
  * **linkedTable** – type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference)
  * **linkingAttribute** – type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute)

<a id="GRANTA_MIScriptingToolkit.TabularDetail.TabularDetail.columns"></a>

#### *property* columns

Property columns is a list of [`TabularColumnDetail`](#module-GRANTA_MIScriptingToolkit.TabularColumnDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TabularDetail.TabularDetail.linkedTable"></a>

#### *property* linkedTable

Property linkedTable is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

<a id="GRANTA_MIScriptingToolkit.TabularDetail.TabularDetail.linkingAttribute"></a>

#### *property* linkingAttribute

Property linkingAttribute is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute).

<a id="GRANTA_MIScriptingToolkit.TabularDetail.TabularDetail.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TargetedSourceRecord"></a>

<a id="targetedsourcerecord"></a>

### TargetedSourceRecord

<a id="GRANTA_MIScriptingToolkit.TargetedSourceRecord.TargetedSourceRecord"></a>

### *class* TargetedSourceRecord(sourceRecord=None, targetRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type for unlinking records, contains a source
[`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) and an array of target
[`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.

* **Parameters:**
  * **sourceRecord** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **targetRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

<a id="GRANTA_MIScriptingToolkit.TargetedSourceRecord.TargetedSourceRecord.targetRecords"></a>

#### *property* targetRecords

Property targetRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TargetedSourceRecord.TargetedSourceRecord.sourceRecord"></a>

#### *property* sourceRecord

Property sourceRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.TargetedSourceRecord.TargetedSourceRecord.AddTargetRecord"></a>

#### AddTargetRecord(\_recordReference)

Appends \_recordReference to targetRecords property on TargetedSourceRecord C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.TargetedSourceRecord.TargetedSourceRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TrailingZeroInformation"></a>

<a id="trailingzeroinformation"></a>

### TrailingZeroInformation

<a id="GRANTA_MIScriptingToolkit.TrailingZeroInformation.TrailingZeroInformation"></a>

### *class* TrailingZeroInformation(enteredUnit=None, enteredValue=None, significantFigures=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type representing the numerical value as originally entered, including original unit and significant
figures.

* **Parameters:**
  * **enteredUnit** – type str
  * **enteredValue** – type str
  * **significantFigures** – type int

<a id="GRANTA_MIScriptingToolkit.TrailingZeroInformation.TrailingZeroInformation.enteredUnit"></a>

#### *property* enteredUnit

Property enteredUnit is of type str.

<a id="GRANTA_MIScriptingToolkit.TrailingZeroInformation.TrailingZeroInformation.enteredValue"></a>

#### *property* enteredValue

Property enteredValue is of type str.

<a id="GRANTA_MIScriptingToolkit.TrailingZeroInformation.TrailingZeroInformation.significantFigures"></a>

#### *property* significantFigures

Property significantFigures is of type int.

<a id="GRANTA_MIScriptingToolkit.TrailingZeroInformation.TrailingZeroInformation.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.TreeRecord"></a>

<a id="treerecord"></a>

### TreeRecord

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord"></a>

### *class* TreeRecord(children=None, color=None, longName=None, parentRecordHistoryIdentity=None, recordReference=None, shortName=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type representing a single record in a Granta MI database, along with information about its position
in the node-tree.

* **Parameters:**
  * **children** – type list of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects
  * **color** – type str
  * **longName** – type str
  * **parentRecordHistoryIdentity** – type int
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **shortName** – type str
  * **type** – type str

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord.children"></a>

#### *property* children

Property children is a list of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord.color"></a>

#### *property* color

Property color is of type str.

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord.longName"></a>

#### *property* longName

Property longName is of type str.

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord.parentRecordHistoryIdentity"></a>

#### *property* parentRecordHistoryIdentity

Property parentRecordHistoryIdentity is of type int.

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord.recordReference"></a>

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord.shortName"></a>

#### *property* shortName

Property shortName is of type str.

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord.type"></a>

#### *property* type

Property type is of type str.

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord.AddChildren"></a>

#### AddChildren(\_treeRecord)

Appends \_treeRecord to children property on TreeRecord C-object.

* **Parameters:**
  **\_treeRecord** – object of type TreeRecord.

<a id="GRANTA_MIScriptingToolkit.TreeRecord.TreeRecord.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.UnitConversion"></a>

<a id="unitconversion"></a>

### UnitConversion

<a id="GRANTA_MIScriptingToolkit.UnitConversion.UnitConversion"></a>

### *class* UnitConversion(factor=None, offset=None, sourceSymbol=None, targetSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about how to convert from a specified source unit to a target unit.

* **Parameters:**
  * **factor** – type float
  * **offset** – type float
  * **sourceSymbol** – type str
  * **targetSymbol** – type str

<a id="GRANTA_MIScriptingToolkit.UnitConversion.UnitConversion.factor"></a>

#### *property* factor

Property factor is of type float.

<a id="GRANTA_MIScriptingToolkit.UnitConversion.UnitConversion.offset"></a>

#### *property* offset

Property offset is of type float.

<a id="GRANTA_MIScriptingToolkit.UnitConversion.UnitConversion.sourceSymbol"></a>

#### *property* sourceSymbol

Property sourceSymbol is of type str.

<a id="GRANTA_MIScriptingToolkit.UnitConversion.UnitConversion.targetSymbol"></a>

#### *property* targetSymbol

Property targetSymbol is of type str.

<a id="GRANTA_MIScriptingToolkit.UnitConversion.UnitConversion.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.UnitConversionContext"></a>

<a id="unitconversioncontext"></a>

### UnitConversionContext

<a id="GRANTA_MIScriptingToolkit.UnitConversionContext.UnitConversionContext"></a>

### *class* UnitConversionContext(absoluteUnits=None, currency=None, unitSystem=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type defining how values with units should be represented.

* **Parameters:**
  * **absoluteUnits** – type bool
  * **currency** – type str
  * **unitSystem** – type str

<a id="GRANTA_MIScriptingToolkit.UnitConversionContext.UnitConversionContext.absoluteUnits"></a>

#### *property* absoluteUnits

Property absoluteUnits is of type bool.

<a id="GRANTA_MIScriptingToolkit.UnitConversionContext.UnitConversionContext.currency"></a>

#### *property* currency

Property currency is of type str.

<a id="GRANTA_MIScriptingToolkit.UnitConversionContext.UnitConversionContext.unitSystem"></a>

#### *property* unitSystem

Property unitSystem is of type str.

<a id="GRANTA_MIScriptingToolkit.UnitConversionContext.UnitConversionContext.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.UnitConversionContextConversionSet"></a>

<a id="unitconversioncontextconversionset"></a>

### UnitConversionContextConversionSet

<a id="GRANTA_MIScriptingToolkit.UnitConversionContextConversionSet.UnitConversionContextConversionSet"></a>

### *class* UnitConversionContextConversionSet(unitConversionContext=None, unitConversions=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

All the unit conversions available with a specified unit conversion context.

* **Parameters:**
  * **unitConversionContext** – type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext)
  * **unitConversions** – type list of [`UnitConversion`](#module-GRANTA_MIScriptingToolkit.UnitConversion) objects

<a id="GRANTA_MIScriptingToolkit.UnitConversionContextConversionSet.UnitConversionContextConversionSet.unitConversions"></a>

#### *property* unitConversions

Property unitConversions is a list of [`UnitConversion`](#module-GRANTA_MIScriptingToolkit.UnitConversion) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.UnitConversionContextConversionSet.UnitConversionContextConversionSet.unitConversionContext"></a>

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

<a id="GRANTA_MIScriptingToolkit.UnitConversionContextConversionSet.UnitConversionContextConversionSet.AddUnitConversion"></a>

#### AddUnitConversion(\_unitConversion)

Appends \_unitConversion to unitConversions property on UnitConversionContextConversionSet C-object.

* **Parameters:**
  **\_unitConversion** – object of type UnitConversion.

<a id="GRANTA_MIScriptingToolkit.UnitConversionContextConversionSet.UnitConversionContextConversionSet.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.UnitConversionTarget"></a>

<a id="unitconversiontarget"></a>

### UnitConversionTarget

<a id="GRANTA_MIScriptingToolkit.UnitConversionTarget.UnitConversionTarget"></a>

### *class* UnitConversionTarget(factor=None, offset=None, targetSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about how to convert to a target unit. When this type is used directly, the source unit
is assumed to be already known from a different type. To obtain a value in the target units,
multiply the source value by the factor, and then add the offset.

* **Parameters:**
  * **factor** – type float
  * **offset** – type float
  * **targetSymbol** – type str

<a id="GRANTA_MIScriptingToolkit.UnitConversionTarget.UnitConversionTarget.factor"></a>

#### *property* factor

Property factor is of type float.

<a id="GRANTA_MIScriptingToolkit.UnitConversionTarget.UnitConversionTarget.offset"></a>

#### *property* offset

Property offset is of type float.

<a id="GRANTA_MIScriptingToolkit.UnitConversionTarget.UnitConversionTarget.targetSymbol"></a>

#### *property* targetSymbol

Property targetSymbol is of type str.

<a id="GRANTA_MIScriptingToolkit.UnitConversionTarget.UnitConversionTarget.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.UnitInformation"></a>

<a id="unitinformation"></a>

### UnitInformation

<a id="GRANTA_MIScriptingToolkit.UnitInformation.UnitInformation"></a>

### *class* UnitInformation(unitName=None, unitSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type used to give details of units for quantities.
When this type is output by the Service Layer, both name and symbol will be populated. When passed
as input to the Service Layer, only name or symbol need to be populated; if both are populated,
only the symbol is used.

* **Parameters:**
  * **unitName** – type str
  * **unitSymbol** – type str

<a id="GRANTA_MIScriptingToolkit.UnitInformation.UnitInformation.unitName"></a>

#### *property* unitName

Property unitName is of type str.

<a id="GRANTA_MIScriptingToolkit.UnitInformation.UnitInformation.unitSymbol"></a>

#### *property* unitSymbol

Property unitSymbol is of type str.

<a id="GRANTA_MIScriptingToolkit.UnitInformation.UnitInformation.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.UnittedParameterValue"></a>

<a id="unittedparametervalue"></a>

### UnittedParameterValue

<a id="GRANTA_MIScriptingToolkit.UnittedParameterValue.UnittedParameterValue"></a>

### *class* UnittedParameterValue(parameterWithValues=None, unitSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Parameter, along with a single value of that Parameter, optionally with units.

* **Parameters:**
  * **parameterWithValues** – type [`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue)
  * **unitSymbol** – type str

<a id="GRANTA_MIScriptingToolkit.UnittedParameterValue.UnittedParameterValue.parameterWithValues"></a>

#### *property* parameterWithValues

Property parameterWithValues is of type [`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue).

<a id="GRANTA_MIScriptingToolkit.UnittedParameterValue.UnittedParameterValue.unitSymbol"></a>

#### *property* unitSymbol

Property unitSymbol is of type str.

<a id="GRANTA_MIScriptingToolkit.UnittedParameterValue.UnittedParameterValue.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.UnlinkAllRecords"></a>

<a id="unlinkallrecords"></a>

### UnlinkAllRecords

<a id="GRANTA_MIScriptingToolkit.UnlinkAllRecords.UnlinkAllRecords"></a>

### *class* UnlinkAllRecords(nodeName=None, sourceRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, remove all links in the Record Link Group.

* **Parameters:**
  * **nodeName** – type str
  * **sourceRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

<a id="GRANTA_MIScriptingToolkit.UnlinkAllRecords.UnlinkAllRecords.sourceRecords"></a>

#### *property* sourceRecords

Property sourceRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.UnlinkAllRecords.UnlinkAllRecords.nodeName"></a>

#### *property* nodeName

Property nodeName is of type str.

<a id="GRANTA_MIScriptingToolkit.UnlinkAllRecords.UnlinkAllRecords.AddSourceRecord"></a>

#### AddSourceRecord(\_recordReference)

Appends \_recordReference to sourceRecords property on UnlinkAllRecords C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

<a id="GRANTA_MIScriptingToolkit.UnlinkAllRecords.UnlinkAllRecords.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.UnlinkRecords"></a>

<a id="unlinkrecords"></a>

### UnlinkRecords

<a id="GRANTA_MIScriptingToolkit.UnlinkRecords.UnlinkRecords"></a>

### *class* UnlinkRecords(nodeName=None, sourceRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, remove links to the target records specified for that source record.
Silently skip any links that do not exist.

* **Parameters:**
  * **nodeName** – type str
  * **sourceRecords** – type list of [`TargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.TargetedSourceRecord) objects

<a id="GRANTA_MIScriptingToolkit.UnlinkRecords.UnlinkRecords.sourceRecords"></a>

#### *property* sourceRecords

Property sourceRecords is of type list of [`TargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.TargetedSourceRecord).

<a id="GRANTA_MIScriptingToolkit.UnlinkRecords.UnlinkRecords.nodeName"></a>

#### *property* nodeName

Property nodeName is of type str.

<a id="GRANTA_MIScriptingToolkit.UnlinkRecords.UnlinkRecords.AddSourceRecord"></a>

#### AddSourceRecord(\_targetedSourceRecord)

Appends \_targetedSourceRecord to sourceRecords property on UnlinkRecords C-object.

* **Parameters:**
  **\_targetedSourceRecord** – object of type TargetedSourceRecord.

<a id="GRANTA_MIScriptingToolkit.UnlinkRecords.UnlinkRecords.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.XYData"></a>

<a id="xydata"></a>

### XYData

<a id="GRANTA_MIScriptingToolkit.XYData.XYData"></a>

### *class* XYData(XYPoints=None, XYRanges=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of y-axis values for a graph where the y-axis values are either point or range values.

* **Parameters:**
  * **XYPoints** – type list of [`XYPoint`](#module-GRANTA_MIScriptingToolkit.XYPoint) objects
  * **XYRanges** – type list of [`XYRange`](#module-GRANTA_MIScriptingToolkit.XYRange) objects
  * **type** – type str

<a id="GRANTA_MIScriptingToolkit.XYData.XYData.XYPoints"></a>

#### *property* XYPoints

Property XYPoints is a list of [`XYPoint`](#module-GRANTA_MIScriptingToolkit.XYPoint) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.XYData.XYData.XYRanges"></a>

#### *property* XYRanges

Property XYRanges is a list of [`XYRange`](#module-GRANTA_MIScriptingToolkit.XYRange) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.XYData.XYData.type"></a>

#### *property* type

Property type is of type str.

<a id="GRANTA_MIScriptingToolkit.XYData.XYData.AddXYPoint"></a>

#### AddXYPoint(\_XYPoint)

Appends \_XYPoint to XYPoints property on XYData C-object.

* **Parameters:**
  **\_XYPoint** – object of type XYPoint.

<a id="GRANTA_MIScriptingToolkit.XYData.XYData.AddXYRange"></a>

#### AddXYRange(\_XYRange)

Appends \_XYRange to XYRanges property on XYData C-object.

* **Parameters:**
  **\_XYRange** – object of type XYRange.

<a id="GRANTA_MIScriptingToolkit.XYData.XYData.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.XYDiscrete"></a>

<a id="xydiscrete"></a>

### XYDiscrete

<a id="GRANTA_MIScriptingToolkit.XYDiscrete.XYDiscrete"></a>

### *class* XYDiscrete(Y=None, isEstimated=None, parameterValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An x-y datum where the y-axis value is a discrete value.

* **Parameters:**
  * **Y** – type str
  * **isEstimated** – type bool
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)

<a id="GRANTA_MIScriptingToolkit.XYDiscrete.XYDiscrete.isEstimated"></a>

#### *property* isEstimated

Property isEstimated is of type bool.

<a id="GRANTA_MIScriptingToolkit.XYDiscrete.XYDiscrete.parameterValue"></a>

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

<a id="GRANTA_MIScriptingToolkit.XYDiscrete.XYDiscrete.Y"></a>

#### *property* Y

Property Y is of type str.

<a id="GRANTA_MIScriptingToolkit.XYDiscrete.XYDiscrete.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.XYDiscreteData"></a>

<a id="xydiscretedata"></a>

### XYDiscreteData

<a id="GRANTA_MIScriptingToolkit.XYDiscreteData.XYDiscreteData"></a>

### *class* XYDiscreteData(XYDiscretes=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of y-axis values for a graph where the y-axis values are discrete values.

* **Parameters:**
  **XYDiscretes** – type list of [`XYDiscrete`](#module-GRANTA_MIScriptingToolkit.XYDiscrete) objects

<a id="GRANTA_MIScriptingToolkit.XYDiscreteData.XYDiscreteData.XYDiscretes"></a>

#### *property* XYDiscretes

Property XYDiscretes is a list of [`XYDiscrete`](#module-GRANTA_MIScriptingToolkit.XYDiscrete) objects.
Warning: Do not attempt to edit or append to the returned value.

<a id="GRANTA_MIScriptingToolkit.XYDiscreteData.XYDiscreteData.AddXYDiscrete"></a>

#### AddXYDiscrete(\_XYDiscrete)

Appends \_XYDiscrete to XYDiscretes property on XYDiscreteData C-object.

* **Parameters:**
  **\_XYDiscrete** – object of type XYDiscrete.

<a id="GRANTA_MIScriptingToolkit.XYDiscreteData.XYDiscreteData.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.XYPoint"></a>

<a id="xypoint"></a>

### XYPoint

<a id="GRANTA_MIScriptingToolkit.XYPoint.XYPoint"></a>

### *class* XYPoint(Y=None, isEstimated=None, parameterValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An x-y datum where the y-axis value is a point.

* **Parameters:**
  * **Y** – type float
  * **isEstimated** – type bool
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)

<a id="GRANTA_MIScriptingToolkit.XYPoint.XYPoint.isEstimated"></a>

#### *property* isEstimated

Property isEstimated is of type bool.

<a id="GRANTA_MIScriptingToolkit.XYPoint.XYPoint.parameterValue"></a>

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

<a id="GRANTA_MIScriptingToolkit.XYPoint.XYPoint.Y"></a>

#### *property* Y

Property Y is of type float.

<a id="GRANTA_MIScriptingToolkit.XYPoint.XYPoint.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<a id="module-GRANTA_MIScriptingToolkit.XYRange"></a>

<a id="xyrange"></a>

### XYRange

<a id="GRANTA_MIScriptingToolkit.XYRange.XYRange"></a>

### *class* XYRange(isEstimated=None, lowerY=None, parameterValue=None, upperY=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An x-y datum where the y-axis value is a range.

* **Parameters:**
  * **isEstimated** – type bool
  * **lowerY** – type float
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)
  * **upperY** – type float

<a id="GRANTA_MIScriptingToolkit.XYRange.XYRange.isEstimated"></a>

#### *property* isEstimated

Property isEstimated is of type bool.

<a id="GRANTA_MIScriptingToolkit.XYRange.XYRange.lowerY"></a>

#### *property* lowerY

Property lowerY is of type float.

<a id="GRANTA_MIScriptingToolkit.XYRange.XYRange.parameterValue"></a>

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

<a id="GRANTA_MIScriptingToolkit.XYRange.XYRange.upperY"></a>

#### *property* upperY

Property upperY is of type float.

<a id="GRANTA_MIScriptingToolkit.XYRange.XYRange.c_obj"></a>

#### *property* c_obj

Pointer to the underlying C-object

<!-- Module contents -->
<!-- --------------- -->
<!-- .. automodule:: GRANTA_MIScriptingToolkit -->
<!-- :members: -->
<!-- :undoc-members: -->
<!-- :show-inheritance: -->
