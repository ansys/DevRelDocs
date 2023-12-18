# Foundation API Reference

## Services Reference

<a id="browse-service"></a>

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

## Objects Reference

### AssociatedRecords

### *class* AssociatedRecords(associatedRecords=None, sourceRecord=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object containing a source [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
object and an array of associated
[`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.

* **Parameters:**
  * **associatedRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **sourceRecord** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

#### *property* associatedRecords

Property associatedRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* sourceRecord

Property sourceRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* c_obj

Pointer to the underlying C-object

### AttributeAddress

### *class* AttributeAddress(URL=None, attributeID=None, attributeName=None, attributeStandardName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The upload URL of an attribute and an attribute identifier.
The attribute is identified by the identity, name, and where available, standard name.

* **Parameters:**
  * **URL** – type str
  * **attributeID** – type int
  * **attributeName** – type str
  * **attributeStandardName** – type str

#### *property* attributeID

Property attributeID is of type int.

#### *property* attributeName

Property attributeName is of type str.

#### *property* attributeStandardName

Property attributeStandardName is of type str.

#### *property* URL

Property URL is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### AttributeCategory

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

#### *property* categoryAttributeDetails

Property categoryAttributeDetails is a list of [`CategoryAttributeDetail`](#module-GRANTA_MIScriptingToolkit.CategoryAttributeDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* recordLinkGroupDetails

Property recordLinkGroupDetails is a list of [`RecordLinkGroupDetail`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* displayNames

Property displayNames is a list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* name

Property name is of type str.

#### *property* order

Property order is of type int.

#### AddCategoryAttributeDetail(\_categoryAttributeDetail)

Appends \_categoryAttributeDetail to categoryAttributeDetails property on AttributeCategory C-object.

* **Parameters:**
  **\_categoryAttributeDetail** – object of type CategoryAttributeDetail.

#### AddRecordLinkGroupDetail(\_recordLinkGroupDetail)

Appends \_recordLinkGroupDetail to recordLinkGroupDetails property on AttributeCategory C-object.

* **Parameters:**
  **\_recordLinkGroupDetail** – object of type RecordLinkGroupDetail.

#### *property* c_obj

Pointer to the underlying C-object

### AttributeDetail

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

#### *property* about

Property about is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute). Only populated if ‘isMeta’ is True.

#### *property* attribute

Property attribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

#### *property* axisName

Property axisName is of type str.

#### *property* chartable

Property chartable is of type bool.

#### *property* databaseUnit

Property databaseUnit is of type str.

#### *property* defaultThreshold

Property defaultThreshold is of type str.

#### *property* discreteValues

Property discreteValues is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* displayNames

Property displayNames is a list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* identity

Property identity is of type int.

#### *property* isFunctionalRange

Property isFunctionalRange is of type bool.

#### *property* isMeta

Property isMeta is of type bool. If this is True, the ‘about’ property may have additional information about the related parent attribute.

#### *property* isMultiValued

Property isMultiValued is of type bool.

#### *property* isOrdered

Property isOrdered is of type bool.

#### *property* isSearchable

Property isSearchable is of type bool.

#### *property* isUnique

Property isUnique is of type bool.

#### *property* minMax

Property minMax is of type [`MinMax`](#module-GRANTA_MIScriptingToolkit.MinMax).

#### *property* name

Property name is of type str.

#### *property* order

Property order is of type int.

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

#### *property* tabular

Property tabular is of type [`TabularDetail`](#module-GRANTA_MIScriptingToolkit.TabularDetail).

#### *property* type

Property type is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### AttributeExporterParameters

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

#### *class* DataPresence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Unknown *= 0*

#### Present *= 1*

#### NotApplicable *= 2*

#### Missing *= 3*

#### DataIncompatibleWithConfiguration *= 4*

#### *property* graphDomains

Property graphDomains is a list of [`GraphDomain`](#module-GRANTA_MIScriptingToolkit.GraphDomain) objects. Each graph domain contains information on the possible values that the corresponding parameter (by list index) can take.
Warning: Do not attempt to edit or append to the returned value.

#### *property* parameters

Property parameters is a list of [`ExporterParameter`](#module-GRANTA_MIScriptingToolkit.ExporterParameter) objects. This is a list of parameters that parameterize the attribute in question.
Warning: Do not attempt to edit or append to the returned value.

#### *property* attribute

Property attribute is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute).

#### *property* dataPresence

Property dataPresence is of type int. See [`AttributeExporterParameters.DataPresence`](#GRANTA_MIScriptingToolkit.AttributeExporterParameters.AttributeExporterParameters.DataPresence) for supported values.

#### AddGraphDomain(\_graphDomain)

Appends \_graphDomain to graphDomains property on AttributeExporterParameters C-object.

* **Parameters:**
  **\_graphDomain** – object of type GraphDomain.

#### AddParameter(\_exporterParameter)

Appends \_exporterParameter to parameters property on AttributeExporterParameters C-object.

* **Parameters:**
  **\_exporterParameter** – object of type ExporterParameter.

#### *property* c_obj

Pointer to the underlying C-object

### AttributeMetaAttributes

### *class* AttributeMetaAttributes(metaAttributes=None, parentAttribute=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Lists the Meta-Attributes of a particular Attribute in a Granta MI Database Table.

* **Parameters:**
  * **metaAttributes** – type list of [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute) objects
  * **parentAttribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)

#### *property* metaAttributes

Property metaAttributes is a list of [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* parentAttribute

Property parentAttribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

#### *property* c_obj

Pointer to the underlying C-object

### AttributeReference

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

#### *class* MIPseudoAttributeReference

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### name *= 0*

#### shortName *= 1*

#### subsets *= 2*

#### releasedDate *= 3*

#### modifiedDate *= 4*

#### recordType *= 5*

#### recordHistoryIdentity *= 6*

#### recordColor *= 7*

#### recordVersionNumber *= 12*

#### tableName *= 13*

#### writable *= 16*

#### parentName *= 17*

#### parentShortName *= 18*

#### parentRecordHistoryIdentity *= 19*

#### createdDate *= 21*

#### creator *= 22*

#### lastModifier *= 23*

#### *property* attributeID

Property attributeID is of type int.

#### *property* DBKey

Property DBKey is of type str.

#### *property* isStandardName

Property isStandardName is of type bool.

#### *property* name

Property name is of type str.

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

#### *property* pseudoAttribute

Property pseudoAttribute is of type int. See [`AttributeReference.MIPseudoAttributeReference`](#GRANTA_MIScriptingToolkit.AttributeReference.AttributeReference.MIPseudoAttributeReference) for supported values.

#### *property* c_obj

Pointer to the underlying C-object

### AttributeValue

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

#### *property* attributeID

Property attributeID is of type int.

#### *property* attributeName

Property attributeName is of type str.

#### *property* attributeStandardName

Property attributeStandardName is of type str.

#### *property* dataType

Property dataType is of type str.

#### *property* dateDataType

Property dateDataType is of type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType).

#### *property* dateTimeDataType

Property dateTimeDataType is of type [`DateTimeDataType`](#module-GRANTA_MIScriptingToolkit.DateTimeDataType).

#### *property* discreteDataValue

Property discreteDataValue is of type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType).

#### *property* discreteFunctionalGriddedDataType

Property discreteFunctionalGriddedDataType is of type [`DiscreteFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType).

#### *property* discreteFunctionalSeriesDataType

Property discreteFunctionalSeriesDataType is of type [`DiscreteFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType).

#### *property* fileDataType

Property fileDataType is of type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType).

#### *property* floatFunctionalGriddedDataType

Property floatFunctionalGriddedDataType is of type [`FloatFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType).

#### *property* floatFunctionalSeriesDataType

Property floatFunctionalSeriesDataType is of type [`FloatFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType).

#### *property* hyperlinkDataValue

Property hyperlinkDataValue is of type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType).

#### *property* integerDataValue

Property integerDataValue is of type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType).

#### *property* logicalDataValue

Property logicalDataValue is of type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType).

#### *property* longTextDataType

Property longTextDataType is of type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType).

#### *property* pictureDataType

Property pictureDataType is of type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType).

#### *property* pointDataType

Property pointDataType is of type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType).

#### *property* rangeDataType

Property rangeDataType is of type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType).

#### *property* shortTextDataType

Property shortTextDataType is of type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType).

#### *property* subsetsDataType

Property subsetsDataType is of type [`SubsetsDataType`](#module-GRANTA_MIScriptingToolkit.SubsetsDataType).

#### *property* tabularDataType

Property tabularDataType is of type [`TabularDataType`](#module-GRANTA_MIScriptingToolkit.TabularDataType).

#### *property* c_obj

Pointer to the underlying C-object

### BetweenDateTimesSearchValue

### *class* BetweenDateTimesSearchValue(highEnd=None, lowEnd=None, tabularColumn=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data between two times.
This criterion type is specific to DateTime Attributes. Both a LowEnd and a HighEnd value are
required. The date format is in XSD’s dateTime data type (YYYY-MM-DDThh:mm:ss).

* **Parameters:**
  * **highEnd** – type str
  * **lowEnd** – type str
  * **tabularColumn** – type str

#### *property* highEnd

Property highEnd is of type str.

#### *property* lowEnd

Property lowEnd is of type str.

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### BetweenSearchValue

### *class* BetweenSearchValue(highEnd=None, lowEnd=None, tabularColumn=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data between two values.
Only Point, Range, and Integer attributes are supported by this search criteria. Both a LowEnd and a
HighEnd value are required.

* **Parameters:**
  * **highEnd** – type [`HighEndSearchValue`](#module-GRANTA_MIScriptingToolkit.HighEndSearchValue)
  * **lowEnd** – type [`LowEndSearchValue`](#module-GRANTA_MIScriptingToolkit.LowEndSearchValue)
  * **tabularColumn** – type str

#### *property* highEnd

Property highEnd is of type [`HighEndSearchValue`](#module-GRANTA_MIScriptingToolkit.HighEndSearchValue).

#### *property* lowEnd

Property lowEnd is of type [`LowEndSearchValue`](#module-GRANTA_MIScriptingToolkit.LowEndSearchValue).

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### BinaryDataSettings

### *class* BinaryDataSettings(binaryDataRepresentation=None, maxImageSize=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Settings for exporting file and picture data.

* **Parameters:**
  * **binaryDataRepresentation** – type int
  * **maxImageSize** – type [`RasterSize`](#module-GRANTA_MIScriptingToolkit.RasterSize)

#### *property* binaryDataRepresentation

Property binaryDataRepresentation is of type int. See [`GRANTA_Constants.BinaryDataRepresentation`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* maxImageSize

Property maxImageSize is of type [`RasterSize`](#module-GRANTA_MIScriptingToolkit.RasterSize).

#### *property* c_obj

Pointer to the underlying C-object

### BrowseService

### *class* BrowseService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

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

### CategoryAttributeDetail

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

#### *property* about

Property about is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute).

#### *property* attribute

Property attribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

#### *property* axisName

Property axisName is of type str.

#### *property* chartable

Property chartable is of type bool.

#### *property* databaseUnit

Property databaseUnit is of type str.

#### *property* defaultThreshold

Property defaultThreshold is of type str.

#### *property* discreteValues

Property discreteValues is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* helpInfo

Property helpInfo is of type [`HelpInfo`](#module-GRANTA_MIScriptingToolkit.HelpInfo).

#### *property* identity

Property identity is of type int.

#### *property* isMeta

Property isMeta is of type bool.

#### *property* isMultiValued

Property isMultiValued is of type bool.

#### *property* isReadOnly

Property isReadOnly is of type bool.

#### *property* isRequired

Property isRequired is of type bool.

#### *property* isSearchable

Property isSearchable is of type bool.

#### *property* name

Property name is of type str.

#### *property* order

Property order is of type int.

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

#### *property* type

Property type is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### Constraint

### *class* Constraint(label=None, parameter=None, parameterValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A constraint on functional data.
For requests, both parameter and parameter value are required.

* **Parameters:**
  * **label** – type str
  * **parameter** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)

#### *property* label

Property label is of type str.

#### *property* parameter

Property parameter is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

#### *property* c_obj

Pointer to the underlying C-object

### Constraints

### *class* Constraints(constraints=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A container of constraints.

* **Parameters:**
  **constraints** – type list of [`Constraint`](#module-GRANTA_MIScriptingToolkit.Constraint) objects

#### *property* constraints

Property constraints is a list of [`Constraint`](#module-GRANTA_MIScriptingToolkit.Constraint) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddConstraint(\_constraint)

Appends \_constraint to constraints property on Constraints C-object.

* **Parameters:**
  **\_constraint** – object of type Constraint.

#### *property* c_obj

Pointer to the underlying C-object

### ContainsAllSearchValue

### *class* ContainsAllSearchValue(tabularColumn=None, values=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for discrete data types that contain all of the specified search values.
If the discrete values of the data include further values, it still passes. This criterion type is
specific to discrete attributes.

* **Parameters:**
  * **tabularColumn** – type str
  * **values** – type list of str objects

#### *property* values

Property values is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* tabularColumn

Property tabularColumn is of type str.

#### AddValue(value)

Appends value to values property on ContainsAllSearchValue C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

#### *property* c_obj

Pointer to the underlying C-object

### ContainsAnySearchValue

### *class* ContainsAnySearchValue(tabularColumn=None, values=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for discrete data types that contain any of the specified search values.
This criterion type is specific to discrete attributes.

* **Parameters:**
  * **tabularColumn** – type str
  * **values** – type list of str objects

#### *property* values

Property values is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* tabularColumn

Property tabularColumn is of type str.

#### AddValue(value)

Appends value to values property on ContainsAnySearchValue C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

#### *property* c_obj

Pointer to the underlying C-object

### ContainsSearchValue

### *class* ContainsSearchValue(tabularColumn=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data that contains the specified search text value.
Search criterion applies to text, logical, and discrete attributes. For logicals, specify ‘true’ or
‘false’ as the text.

* **Parameters:**
  * **tabularColumn** – type str
  * **value** – type str

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### CriteriaSearch

### *class* CriteriaSearch(DBKey=None, parameterValues=None, populateGUIDs=None, recordFilter=None, searchCriteria=None, searchFilter=None, searchMode=None, significantFigures=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input for the CriteriaSearch operation.
Both the DBKey and recordSearchCriterion are required. If no subsets are specified, only the default
subset will be searched.

* **Parameters:**
  * **DBKey** – type str
  * **parameterValues** – type list of [`UnittedParameterValue`](#module-GRANTA_MIScriptingToolkit.UnittedParameterValue) objects
  * **populateGUIDs** – type bool
  * **recordFilter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **searchCriteria** – type list of [`RecordSearchCriterion`](#module-GRANTA_MIScriptingToolkit.RecordSearchCriterion) objects
  * **searchFilter** – type int
  * **searchMode** – type int
  * **significantFigures** – type int

#### *property* parameterValues

Property parameterValues is a list of [`UnittedParameterValue`](#module-GRANTA_MIScriptingToolkit.UnittedParameterValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* searchCriteria

Property searchCriteria is a list of [`RecordSearchCriterion`](#module-GRANTA_MIScriptingToolkit.RecordSearchCriterion) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* DBKey

Property DBKey is of type str.

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

#### *property* searchFilter

Property searchFilter is of type int. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* searchMode

Property searchMode is of type int. See [`GRANTA_Constants.SearchMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* significantFigures

Property significantFigures is of type int.

#### AddParameterValue(\_unittedParameterValue)

Appends \_unittedParameterValue to parameterValues property on CriteriaSearch C-object.

* **Parameters:**
  **\_unittedParameterValue** – object of type UnittedParameterValue.

#### AddSearchCriteria(\_recordSearchCriterion)

Appends \_recordSearchCriterion to searchCriteria property on CriteriaSearch C-object.

* **Parameters:**
  **\_recordSearchCriterion** – object of type RecordSearchCriterion.

#### *property* c_obj

Pointer to the underlying C-object

### DataExportService

### *class* DataExportService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

The DataExport service retrieves and returns data from attributes of records in Granta MI Databases.

#### GetRecordAttributesByRef(\_req)

Retrieves the data values for the given attribute(s) and record(s) in a Granta MI Database.

* **Parameters:**
  **\_req** – [`GetRecordAttributesByRefRequest`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesByRefRequest) object
* **Returns:**
  [`GetRecordAttributesByRefResponse`](#module-GRANTA_MIScriptingToolkit.GetRecordAttributesByRefResponse) object

### DataImportService

### *class* DataImportService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

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

### DatabaseDetail

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

#### *property* author

Property author is of type str.

#### *property* company

Property company is of type str.

#### *property* DBGUID

Property DBGUID is of type str.

#### *property* DBKey

Property DBKey is of type str.

#### *property* DBVersionGUID

Property DBVersionGUID is of type str.

#### *property* volumeName

Property volumeName is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### DatabaseRevision

### *class* DatabaseRevision(revisionDate=None, revisionNote=None, username=None, hasRevisionNote=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a specific database revision. Includes the author, the date and time, and the
transaction note (if present).

* **Parameters:**
  * **revisionDate** – type str
  * **revisionNote** – type str
  * **username** – type str
  * **hasRevisionNote** – type bool

#### *property* hasRevisionNote

Property hasRevisionNote is of type bool.

#### *property* revisionDate

Property revisionDate is of type str.

#### *property* revisionNote

Property revisionNote is of type str.

#### *property* username

Property username is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### DatasheetPath

### *class* DatasheetPath(URL=None, recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Link to a record in a Granta MI database.
Includes a [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) and a URL for the
record datasheet.

* **Parameters:**
  * **URL** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* URL

Property URL is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### DateDataType

### *class* DateDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Container of date data. The format is YYYY-MM-DD.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type str

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### DateTimeDataType

### *class* DateTimeDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Container of datetime data. The format is YYYY-MM-DDThh:mm:ss and is compatible with ISO 8601.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type str

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### DeleteOrWithdrawIfLatestRecordVersionRequest

### *class* DeleteOrWithdrawIfLatestRecordVersionRequest(deleteOrWithdrawRecords=None, notes=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

DeleteOrWithdrawIfLatestRecordVersionRequest. Input for the DeleteOrWithdrawIfLatestRecordVersion
operation, containing the
[`DeleteOrWithdrawRecord`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord) objects.

* **Parameters:**
  * **deleteOrWithdrawRecords** – type list of [`DeleteOrWithdrawRecord`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord) objects
  * **notes** – type str

#### *property* deleteOrWithdrawRecords

Property deleteOrWithdrawRecords is a list of [`DeleteOrWithdrawRecord`](#module-GRANTA_MIScriptingToolkit.DeleteOrWithdrawRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* notes

Property notes is of type str.

#### AddDeleteOrWithdrawRecord(\_deleteOrWithdrawRecord)

Appends \_deleteOrWithdrawRecord to deleteOrWithdrawRecords property on DeleteOrWithdrawIfLatestRecordVersionRequest C-object.

* **Parameters:**
  **\_deleteOrWithdrawRecord** – object of type DeleteOrWithdrawRecord.

#### *property* c_obj

Pointer to the underlying C-object

### DeleteOrWithdrawIfLatestRecordVersionResponse

### *class* DeleteOrWithdrawIfLatestRecordVersionResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

DeleteOrWithdrawIfLatestRecordVersionResponse. Output of the DeleteOrWithdrawIfLatestRecordVersion
operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a DeleteOrWithdrawIfLatestRecordVersionResponse object.

### DeleteOrWithdrawRecord

### *class* DeleteOrWithdrawRecord(recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Record to be deleted or withdrawn. Contains a
[`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

* **Parameters:**
  **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* c_obj

Pointer to the underlying C-object

### DiscreteDataType

### *class* DiscreteDataType(discreteValues=None, isApplicable=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Container of discrete data.

* **Parameters:**
  * **discreteValues** – type list of [`DiscreteValue`](#module-GRANTA_MIScriptingToolkit.DiscreteValue) objects
  * **isApplicable** – type bool

#### *property* discreteValues

Property discreteValues is a list of [`DiscreteValue`](#module-GRANTA_MIScriptingToolkit.DiscreteValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* isApplicable

Property isApplicable is of type bool.

#### AddDiscreteValue(\_discreteValue)

Appends \_discreteValue to discreteValues property on DiscreteDataType C-object.

* **Parameters:**
  **\_discreteValue** – object of type DiscreteValue.

#### *property* c_obj

Pointer to the underlying C-object

### DiscreteFunctionalGriddedDataType

### *class* DiscreteFunctionalGriddedDataType(defaultXAxisParameter=None, functionalDataParameterSettings=None, isApplicable=None, values=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain the values of discrete-valued functional gridded data.
This type is only valid for export.

* **Parameters:**
  * **defaultXAxisParameter** – type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation)
  * **functionalDataParameterSettings** – type list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects
  * **isApplicable** – type bool
  * **values** – type [`DiscreteFunctionalValues`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValues)

#### *property* functionalDataParameterSettings

Property functionalDataParameterSettings is a list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* defaultXAxisParameter

Property defaultXAxisParameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* values

Property values is of type [`DiscreteFunctionalValues`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValues).

#### AddFunctionalDataParameterSettings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on DiscreteFunctionalGriddedDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** – object of type FunctionalDataParameterSettings.

#### *property* c_obj

Pointer to the underlying C-object

### DiscreteFunctionalSeriesDataType

### *class* DiscreteFunctionalSeriesDataType(functionalDataParameterSettings=None, graph=None, isApplicable=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain the values of discrete-valued functional series data.
This type is only valid for export.

* **Parameters:**
  * **functionalDataParameterSettings** – type list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects
  * **graph** – type [`DiscreteFunctionalSeriesGraph`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph)
  * **isApplicable** – type bool

#### *property* functionalDataParameterSettings

Property functionalDataParameterSettings is a list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* graph

Property graph is of type [`DiscreteFunctionalSeriesGraph`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesGraph).

#### *property* isApplicable

Property isApplicable is of type bool.

#### AddFunctionalDataParameterSettings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on DiscreteFunctionalSeriesDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** – object of type FunctionalDataParameterSettings.

#### *property* c_obj

Pointer to the underlying C-object

### DiscreteFunctionalSeriesGraph

### *class* DiscreteFunctionalSeriesGraph(XAxisParameter=None, hideGraph=None, series=None, \_isOwner=True)

A type to contain a collection of
[`DiscreteSeries`](#module-GRANTA_MIScriptingToolkit.DiscreteSeries) objects that contain the
functional data.

* **Parameters:**
  * **XAxisParameter** – type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation)
  * **hideGraph** – type bool
  * **series** – type list of [`DiscreteSeries`](#module-GRANTA_MIScriptingToolkit.DiscreteSeries) objects

#### *property* series

Property series is a list of [`DiscreteSeries`](#module-GRANTA_MIScriptingToolkit.DiscreteSeries) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* hideGraph

Property hideGraph is of type bool.

#### *property* XAxisParameter

Property XAxisParameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

#### AddSeries(\_discreteSeries)

Appends \_discreteSeries to series property on DiscreteFunctionalSeriesGraph C-object.

* **Parameters:**
  **\_discreteSeries** – object of type DiscreteSeries.

#### *property* c_obj

Pointer to the underlying C-object

### DiscreteFunctionalValue

### *class* DiscreteFunctionalValue(constraints=None, value=None, isEstimated=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A single grid point in Gridded Discrete-Valued Functional Data, where the Y-axis value is a discrete
value.

* **Parameters:**
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)
  * **value** – type str
  * **isEstimated** – type bool

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

#### *property* isEstimated

Property isEstimated is of type bool.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### DiscreteFunctionalValues

### *class* DiscreteFunctionalValues(values=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of
[`DiscreteFunctionalValue`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValue) objects.

* **Parameters:**
  **values** – type list of [`DiscreteFunctionalValue`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValue) objects

#### *property* values

Property values is a list of [`DiscreteFunctionalValue`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddValue(\_discreteFunctionalValue)

Appends \_discreteFunctionalValue to values property on DiscreteFunctionalValues C-object.

* **Parameters:**
  **\_discreteFunctionalValue** – object of type DiscreteFunctionalValue.

#### *property* c_obj

Pointer to the underlying C-object

### DiscreteSeries

### *class* DiscreteSeries(XYPoints=None, constraints=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type for functional data which includes X-Y discrete data and any constraints.

* **Parameters:**
  * **XYPoints** – type [`XYDiscreteData`](#module-GRANTA_MIScriptingToolkit.XYDiscreteData)
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

#### *property* XYPoints

Property XYPoints is of type [`XYDiscreteData`](#module-GRANTA_MIScriptingToolkit.XYDiscreteData).

#### *property* c_obj

Pointer to the underlying C-object

### DiscreteValue

### *class* DiscreteValue(order=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The value of a discrete data type.
Contains an order and a value.

* **Parameters:**
  * **order** – type int
  * **value** – type str

#### *property* order

Property order is of type int.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### DisplayName

### *class* DisplayName(language=None, translation=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A language identifier and localized string for the display name of an object.

* **Parameters:**
  * **language** – type str
  * **translation** – type str

#### *property* language

Property language is of type str.

#### *property* translation

Property translation is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### DoesNotContainSearchValue

### *class* DoesNotContainSearchValue(tabularColumn=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for discrete data types that contain none of the specified search values.
This criterion type is specific to discrete attributes.

* **Parameters:**
  * **tabularColumn** – type str
  * **value** – type str

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### DoesNotExistSearchValue

### *class* DoesNotExistSearchValue(tabularColumn=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for attributes with no data.
All attribute types supported.

* **Parameters:**
  **tabularColumn** – type str

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### EmptyDataType

### *class* EmptyDataType(\_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type that indicates that the [`TabularDataCell`](#module-GRANTA_MIScriptingToolkit.TabularDataCell)
is empty.
This type is specific to Tabular attributes, and can be used in update operations to clear the
contents of a [`TabularDataCell`](#module-GRANTA_MIScriptingToolkit.TabularDataCell).

#### *property* c_obj

Pointer to the underlying C-object

### EngineeringDataService

### *class* EngineeringDataService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

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

### EnsureRecordFolderPathsRequest

### *class* EnsureRecordFolderPathsRequest(folderPaths=None, importErrorMode=None, notes=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the EnsureRecordFolderPaths operation, containing the folder paths to check and the import
error mode.

* **Parameters:**
  * **folderPaths** – type list of [`RecordFolderPath`](#module-GRANTA_MIScriptingToolkit.RecordFolderPath) objects
  * **importErrorMode** – type str
  * **notes** – type str

#### *property* folderPaths

Property folderPaths is a list of [`RecordFolderPath`](#module-GRANTA_MIScriptingToolkit.RecordFolderPath) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* importErrorMode

Property importErrorMode is of type str.

#### *property* notes

Property notes is of type str.

#### AddFolderPath(\_recordFolderPath)

Appends \_recordFolderPath to folderPaths property on EnsureRecordFolderPathsRequest C-object.

* **Parameters:**
  **\_recordFolderPath** – object of type RecordFolderPath.

#### *property* c_obj

Pointer to the underlying C-object

### EnsureRecordFolderPathsResponse

### *class* EnsureRecordFolderPathsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output of the EnsureRecordFolderPaths operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a EnsureRecordFolderPathsResponse object.

#### *property* pathLeaves

Property pathLeaves is a list of [`PathLeaf`](#module-GRANTA_MIScriptingToolkit.PathLeaf) objects.
Warning: Do not attempt to edit or append to the returned value.

### EqualToSearchValue

### *class* EqualToSearchValue(tabularColumn=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for short text values that exactly match the specified search value.
Applies to short text attributes only.

* **Parameters:**
  * **tabularColumn** – type str
  * **value** – type str

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### ExactlySearchValue

### *class* ExactlySearchValue(tabularColumn=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for integer values that exactly match the specified search value.
Applies to integer attributes only.

* **Parameters:**
  * **tabularColumn** – type str
  * **value** – type int

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* value

Property value is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### ExistsSearchValue

### *class* ExistsSearchValue(tabularColumn=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for attributes that contain data.
All attribute types supported.

* **Parameters:**
  **tabularColumn** – type str

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### ExportRecordDataRequest

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

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects. If this property is not specified, the attributes from the exporter configuration are used. If this element is included and non-empty, the attributes specified are used.
Warning: Do not attempt to edit or append to the returned value.

#### *property* parameterValues

Property parameterValues is a list of [`UnittedParameterValue`](#module-GRANTA_MIScriptingToolkit.UnittedParameterValue) objects. Parameter values to use for any parameterised Data in the export. Each Parameter can only have one value for all parameterised Attributes in an export. Note that the true Parameter names (or Standard Names) in the MI Database must be used; aliases defined in the exporter configuration will not be understood.
Warning: Do not attempt to edit or append to the returned value.

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* exporterKey

Property exporterKey is of type str.

#### *property* filter

Property filter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter). If specified, this filters the records that can be included when traversing record links within Tabular Data. This filter is NOT applied to the explicit list of records passed to this operation.

#### *property* sigFigs

Property sigFigs is of type int.

#### *property* stopBeforeId

Property stopBeforeId is of type str. Stops the export process before the step specified by the identifier (for example, after the initial XML is generated but before conversion into the specified CAE format). Contact your MI Administrator if you require this feature.

#### *property* stopBeforeIndex

Property stopBeforeIndex is of type int. Stops the export process before the step specified by the index (for example, after the initial XML is generated but before conversion into the specified CAE format). Contact your MI Administrator if you require this feature.

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on ExportRecordDataRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

#### AddParameterValues(\_unittedParameterValue)

Appends \_unittedParameterValue to parameterValues property on ExportRecordDataRequest C-object.

* **Parameters:**
  **\_unittedParameterValue** – object of type UnittedParameterValue.

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on ExportRecordDataRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### ExportRecordDataResponse

### *class* ExportRecordDataResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output for the ExportRecordData operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a ExportRecordDataResponse object.

#### *property* text

Property text is of type str.

### ExportedAttribute

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

#### *property* attributeID

Property attributeID is of type int.

#### *property* DBKey

Property DBKey is of type str.

#### *property* isStandardName

Property isStandardName is of type bool.

#### *property* name

Property name is of type str.

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

#### *property* preferredXAxisParameter

Property preferredXAxisParameter is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

#### *property* specificUnitConversionContext

Property specificUnitConversionContext is of type [`SpecificUnitConversionContext`](#module-GRANTA_MIScriptingToolkit.SpecificUnitConversionContext).

#### *property* pseudoAttribute

Property pseudoAttribute is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### Exporter

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

#### *property* absoluteUnitsOptional

Property absoluteUnitsOptional is of type bool.

#### *property* description

Property description is of type str.

#### *property* key

Property key is of type str. The key that uniquely identifies this Exporter. This value is generated by the MI Server at runtime and may change between runs.

#### *property* model

Property model is of type str.

#### *property* name

Property name is of type str.

#### *property* transforms

Property transforms is a list of [`ExporterTransform`](#module-GRANTA_MIScriptingToolkit.ExporterTransform) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* unitSystems

Property unitSystems is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* outputFile

Property outputFile is of type [`ExporterOutputFile`](#module-GRANTA_MIScriptingToolkit.ExporterOutputFile).

#### *property* package

Property package is of type str.

#### *property* useAbsoluteUnits

Property useAbsoluteUnits is of type bool.

#### *property* validatedOk

Property validatedOk is of type bool.

#### *property* version

Property version is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### ExporterOutputFile

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

#### *class* ExporterFileNameConvention

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Default *= 0*

#### TreeName *= 1*

#### TableName *= 2*

#### RecordName *= 3*

#### Custom *= 4*

#### *property* convention

Property convention is of type int. See [`ExporterOutputFile.ExporterFileNameConvention`](#GRANTA_MIScriptingToolkit.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention) for supported values.

#### *property* customFileName

Property customFileName is of type str.

#### *property* encoding

Property encoding is of type str.

#### *property* extension

Property extension is of type str.

#### *property* folder

Property folder is of type str.

#### *property* includeBOM

Property includeBOM is of type bool.

#### *property* c_obj

Pointer to the underlying C-object

### ExporterParameter

### *class* ExporterParameter(Id=None, name=None, parameterReference=None, unit=None, usage=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a Parameter of Functional Data.

* **Parameters:**
  * **Id** – type str
  * **name** – type str
  * **parameterReference** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **unit** – type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation)
  * **usage** – type int

#### *class* Usage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Unknown *= 0*

#### free *= 1*

#### fixed *= 2*

#### unused *= 3*

#### *property* Id

Property Id is of type str.

#### *property* name

Property name is of type str.

#### *property* parameterReference

Property parameterReference is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

#### *property* unit

Property unit is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

#### *property* usage

Property usage is of type int. See [`ExporterParameter.Usage`](#GRANTA_MIScriptingToolkit.ExporterParameter.ExporterParameter.Usage) for supported values.

#### *property* c_obj

Pointer to the underlying C-object

### ExporterPopulation

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

#### *class* PopulationState

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Unknown *= 0*

#### FullyPopulated *= 1*

#### PartiallyPopulated *= 2*

#### *property* description

Property description is of type str.

#### *property* key

Property key is of type str.

#### *property* model

Property model is of type str.

#### *property* name

Property name is of type str.

#### *property* transforms

Property transforms is a list of [`ExporterTransform`](#module-GRANTA_MIScriptingToolkit.ExporterTransform) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* package

Property package is of type str.

#### *property* populationState

Property populationState is of type int. See [`ExporterPopulation.PopulationState`](#GRANTA_MIScriptingToolkit.ExporterPopulation.ExporterPopulation.PopulationState) for supported values.

#### *property* validatedOk

Property validatedOk is of type bool.

#### *property* version

Property version is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### ExporterTransform

### *class* ExporterTransform(Id=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains a type and an ID for an [`Exporter`](#module-GRANTA_MIScriptingToolkit.Exporter) Transform.

* **Parameters:**
  * **Id** – type str
  * **type** – type int

#### *class* Type

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Unknown *= 0*

#### XSLT *= 1*

#### *property* Id

Property Id is of type str.

#### *property* type

Property type is of type int. See [`ExporterTransform.Type`](#GRANTA_MIScriptingToolkit.ExporterTransform.ExporterTransform.Type) for supported values.

#### *property* c_obj

Pointer to the underlying C-object

### ExportersForRecord

### *class* ExportersForRecord(exporters=None, record=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a record and its associated exporters.

* **Parameters:**
  * **exporters** – type list of [`ExporterPopulation`](#module-GRANTA_MIScriptingToolkit.ExporterPopulation) objects
  * **record** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

#### *property* exporters

Property exporters is a list of [`ExporterPopulation`](#module-GRANTA_MIScriptingToolkit.ExporterPopulation) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* record

Property record is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* c_obj

Pointer to the underlying C-object

### ExportersForRecordsRequest

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

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* applicabilityTag

Property applicabilityTag is of type str.

#### *property* model

Property model is of type str.

#### *property* package

Property package is of type str.

#### *property* packageAndModelRequired

Property packageAndModelRequired is of type bool.

#### *property* specificAttributeExportersOnly

Property specificAttributeExportersOnly is of type bool.

#### *property* versionPolicy

Property versionPolicy is of type int. See [`GRANTA_Constants.VersionPolicy`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on ExportersForRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### ExportersForRecordsResponse

### *class* ExportersForRecordsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the ExportersForRecords operation. Contains a list of records and supported exporters.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a ExportersForRecordsResponse object.

#### *property* records

Property records is a list of [`ExportersForRecord`](#module-GRANTA_MIScriptingToolkit.ExportersForRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

### FileDataType

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

#### ModifyBinaryData(binaryData)

Modify the byte string data of the file.

#### ReadBinaryData()

Return a byte string representation of this file.

#### *property* contentType

Property contentType is of type str.

#### *property* data

Property data is of type str.

#### *property* description

Property description is of type str.

#### *property* fileName

Property fileName is of type str.

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* URL

Property URL is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### FloatFunctionalGraph

### *class* FloatFunctionalGraph(hideGraph=None, logarithmicYAxis=None, series=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a collection of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects that
contain the functional data.

* **Parameters:**
  * **hideGraph** – type bool
  * **logarithmicYAxis** – type bool
  * **series** – type list of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects

#### *property* series

Property series is a list of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* hideGraph

Property hideGraph is of type bool.

#### *property* logarithmicYAxis

Property logarithmicYAxis is of type bool.

#### AddSeries(\_series)

Appends \_series to series property on FloatFunctionalGraph C-object.

* **Parameters:**
  **\_series** – object of type Series.

#### *property* c_obj

Pointer to the underlying C-object

### FloatFunctionalGriddedDataType

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

#### *property* functionalDataParameterSettings

Property functionalDataParameterSettings is a list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* decoration

Property decoration is of type int. See [`GRANTA_Constants.GraphDecoration`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* defaultXAxisParameter

Property defaultXAxisParameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* unitInformation

Property unitInformation is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

#### *property* values

Property values is of type [`FloatFunctionalValues`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalValues).

#### AddFunctionalDataParameterSettings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on FloatFunctionalGriddedDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** – object of type FunctionalDataParameterSettings.

#### *property* c_obj

Pointer to the underlying C-object

### FloatFunctionalPointValue

### *class* FloatFunctionalPointValue(constraints=None, value=None, isEstimated=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A single grid point in Gridded Float-Valued Functional Data, where the Y-axis value is a point.

* **Parameters:**
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)
  * **value** – type float
  * **isEstimated** – type bool

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

#### *property* isEstimated

Property isEstimated is of type bool.

#### *property* value

Property value is of type float.

#### *property* c_obj

Pointer to the underlying C-object

### FloatFunctionalRangeValue

### *class* FloatFunctionalRangeValue(constraints=None, highValue=None, lowValue=None, isEstimated=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A single grid point in Gridded Float-Valued Functional Data, where the Y-axis value is a range.

* **Parameters:**
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)
  * **highValue** – type float
  * **lowValue** – type float
  * **isEstimated** – type bool

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

#### *property* highValue

Property highValue is of type float.

#### *property* isEstimated

Property isEstimated is of type bool.

#### *property* lowValue

Property lowValue is of type float.

#### *property* c_obj

Pointer to the underlying C-object

### FloatFunctionalSeriesDataType

### *class* FloatFunctionalSeriesDataType(graph=None, isApplicable=None, unitInformation=None, functionalDataParameterSettings=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain the values of float-valued functional series data.
For requests Graph, and [`Parameters`](#module-GRANTA_MIScriptingToolkit.Parameters) are required.

* **Parameters:**
  * **graph** – type [`FloatFunctionalSeriesGraph`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph)
  * **isApplicable** – type bool
  * **unitInformation** – type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation)
  * **functionalDataParameterSettings** – type list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects

#### *property* functionalDataParameterSettings

Property functionalDataParameterSettings is a list of [`FunctionalDataParameterSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataParameterSettings) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* graph

Property graph is of type [`FloatFunctionalSeriesGraph`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesGraph).

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* unitInformation

Property unitInformation is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

#### AddFunctionalDataParameterSettings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on FloatFunctionalSeriesDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** – object of type FunctionalDataParameterSettings.

#### *property* c_obj

Pointer to the underlying C-object

### FloatFunctionalSeriesGraph

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

#### *property* series

Property series is a list of [`Series`](#module-GRANTA_MIScriptingToolkit.Series) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* hideGraph

Property hideGraph is of type bool.

#### *property* logarithmicYAxis

Property logarithmicYAxis is of type bool.

#### *property* XAxisParameter

Property XAxisParameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

#### AddSeries(\_series)

Appends \_series to series property on FloatFunctionalSeriesGraph C-object.

* **Parameters:**
  **\_series** – object of type Series.

#### *property* c_obj

Pointer to the underlying C-object

### FloatFunctionalValues

### *class* FloatFunctionalValues(pointValues=None, rangeValues=None, valueType=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of
[`FloatFunctionalPointValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalPointValue) and
[`FloatFunctionalRangeValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue) objects.

* **Parameters:**
  * **pointValues** – type list of [`FloatFunctionalPointValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalPointValue) objects
  * **rangeValues** – type list of [`FloatFunctionalRangeValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue) objects
  * **valueType** – type str

#### *property* pointValues

Property pointValues is a list of [`FloatFunctionalPointValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalPointValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* rangeValues

Property rangeValues is a list of [`FloatFunctionalRangeValue`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* valueType

Property valueType is of type str.

#### AddPointValue(\_floatFunctionalPointValue)

Appends \_floatFunctionalPointValue to pointValues property on FloatFunctionalValues C-object.

* **Parameters:**
  **\_floatFunctionalPointValue** – object of type FloatFunctionalPointValue.

#### AddRangeValue(\_floatFunctionalRangeValue)

Appends \_floatFunctionalRangeValue to rangeValues property on FloatFunctionalValues C-object.

* **Parameters:**
  **\_floatFunctionalRangeValue** – object of type FloatFunctionalRangeValue.

#### *property* c_obj

Pointer to the underlying C-object

### FunctionalDataParameterSettings

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

#### *property* datumDefaultValue

Property datumDefaultValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

#### *property* datumInterpolationMethod

Property datumInterpolationMethod is of type int.

#### *property* datumScaleType

Property datumScaleType is of type int.

#### *property* effectiveDefaultValue

Property effectiveDefaultValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

#### *property* effectiveDefaultValueDefinedAt

Property effectiveDefaultValueDefinedAt is of type int.

#### *property* effectiveInterpolationMethod

Property effectiveInterpolationMethod is of type int.

#### *property* effectiveInterpolationMethodDefinedAt

Property effectiveInterpolationMethodDefinedAt is of type int.

#### *property* effectiveScaleType

Property effectiveScaleType is of type int.

#### *property* effectiveScaleTypeDefinedAt

Property effectiveScaleTypeDefinedAt is of type int.

#### *property* hasDatumDefaultValue

Property hasDatumDefaultValue is of type bool.

#### *property* hasDatumInterpolationMethod

Property hasDatumInterpolationMethod is of type bool.

#### *property* hasDatumScaleType

Property hasDatumScaleType is of type bool.

#### *property* hasEffectiveDefaultValue

Property hasEffectiveDefaultValue is of type bool.

#### *property* parameter

Property parameter is of type [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation).

#### *property* c_obj

Pointer to the underlying C-object

### FunctionalDataSettings

### *class* FunctionalDataSettings(convertGridToSeries=None, maxSeries=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Settings affecting the export of Functional Data.
If convertGridToSeries is true, gridded Functional Data will be converted to series data, allowing
you to avoid the need to deal with the gridded data format.

* **Parameters:**
  * **convertGridToSeries** – type bool
  * **maxSeries** – type int

#### *property* convertGridToSeries

Property convertGridToSeries is of type bool.

#### *property* maxSeries

Property maxSeries is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### GRANTA_Constants

### *class* GRANTA_Constants

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### *class* BinaryDataRepresentation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Inline *= 0*

#### URL *= 1*

#### *class* VersionPolicy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### NoPolicy *= 0*

#### IncludeAll *= 1*

#### LatestVersionPerName *= 2*

#### *class* GraphDecoration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Lines *= 0*

#### Markers *= 1*

#### LinesAndMarkers *= 2*

#### *class* ImportTypes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Create *= 'Create'*

#### Update *= 'Update'*

#### Copy *= 'Copy'*

#### *class* UpdateSubsetsMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Append *= 1*

#### Replace *= 2*

#### *class* SearchMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Normal *= 0*

#### ReadOnly *= 1*

#### Unspecified *= 2*

#### *class* TablesFilter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### NoFilter *= 0*

#### MaterialsTablesOnly *= 1*

#### ProcessesTablesOnly *= 2*

#### SubstancesTablesOnly *= 3*

#### LegislationsTablesOnly *= 4*

#### TransportTypesTablesOnly *= 5*

#### RegionsTablesOnly *= 6*

#### EndOfLifeOptionsTablesOnly *= 7*

#### EnergyConversionOptionsTablesOnly *= 8*

#### CoatingsTablesOnly *= 9*

#### PartsTablesOnly *= 10*

#### InHouseTablesOnly *= 11*

#### SequenceSpecificationsTablesOnly *= 12*

#### ElementsTablesOnly *= 13*

#### UniverseTablesOnly *= 14*

#### ProducersTablesOnly *= 15*

#### ShapeTablesOnly *= 16*

#### ReferenceTablesOnly *= 17*

#### MobileUseTypesTablesOnly *= 18*

#### *class* ParameterTypes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Numeric *= 'Numeric'*

#### Discrete *= 'Discrete'*

#### *class* ImportErrorMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Fault *= 'FaultAndRollbackOnAnyError'*

#### Continue *= 'LogAndContinueWherePossible'*

#### *class* RecordLinkGroupTypes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Static *= 'static'*

#### Dynamic *= 'dynamic'*

#### CrossDatabase *= 'crossDatabase'*

#### *class* RecordLinkCheckMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Forward *= 'CheckOnlyForwardLinks'*

#### ForwardAndReverse *= 'CheckForwardAndReverseLinks'*

#### *class* MinMaxType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### MMNone *= 0*

#### MMApproximate *= 1*

#### MMTrue *= 2*

#### POINT_TYPE_STRING *= 'POIN'*

#### RANGE_TYPE_STRING *= 'RNGE'*

#### FLOAT_FUNCTIONAL_TYPE_STRING *= 'FUNC'*

#### INTEGER_TYPE_STRING *= 'INPT'*

#### LOGICAL_TYPE_STRING *= 'LOGI'*

#### DISCRETE_TYPE_STRING *= 'DISC'*

#### SHORT_TEXT_TYPE_STRING *= 'STXT'*

#### LONG_TEXT_TYPE_STRING *= 'LTXT'*

#### HYPERLINK_TYPE_STRING *= 'HLNK'*

#### FLOAT_FUNCTIONAL_SERIES_TYPE_STRING *= 'FLOAT_FUNCTIONAL_SERIES'*

#### FLOAT_FUNCTIONAL_GRIDDED_TYPE_STRING *= 'FLOAT_FUNCTIONAL_GRIDDED'*

#### POINT_XYDATA_TYPE_STRING *= 'XYPoint'*

#### RANGE_XYDATA_TYPE_STRING *= 'XYRange'*

### GRANTA_Exceptions

### *exception* GRANTA_Exception(expr, msg)

Bases: [`Exception`](https://docs.python.org/3/library/exceptions.html#Exception)

Exception raised when there are errors in input.

* **Parameters:**
  * **expr** – input expression in which the error occurred
  * **msg** – explanation of the error

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

### GRANTA_Logging

### *class* GRANTA_Logging

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Implements some basic logging functionality. Tracked events are printed to the console.
: For comprehensive logging capabilities, use the Python ‘logging’ module.

#### propagate *= True*

#### info(message)

#### debug(message)

#### warning(message)

#### error(message)

### GRANTA_MISession

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

#### TestConnection()

Raises a GRANTA_Exception if connection cannot be made - eg bad credentials or unreachable Granta MI Service Layer URL

#### *property* browseService

Property browseService is of type [`BrowseService`](#module-GRANTA_MIScriptingToolkit.BrowseService)

#### *property* searchService

Property searchService is of type [`SearchService`](#module-GRANTA_MIScriptingToolkit.SearchService)

#### *property* dataExportService

Property dataExportService is of type [`DataExportService`](#module-GRANTA_MIScriptingToolkit.DataExportService)

#### *property* dataImportService

Property dataImportService is of type [`DataImportService`](#module-GRANTA_MIScriptingToolkit.DataImportService)

#### *property* engineeringDataService

Property engineeringDataService is of type [`EngineeringDataService`](#module-GRANTA_MIScriptingToolkit.EngineeringDataService)

### GetAssociatedRecordsRequest

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

#### *class* AssociationLinkDirection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### NONE *= 0*

#### Both *= 1*

#### Forward *= 2*

#### Reverse *= 3*

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* linkDirection

Property linkDirection is of type int.

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

#### *property* tableReference

Property tableReference is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetAssociatedRecordsRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetAssociatedRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetAssociatedRecordsResponse

### *class* GetAssociatedRecordsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetAssociatedRecords operation.
An array of [`AssociatedRecords`](#module-GRANTA_MIScriptingToolkit.AssociatedRecords) objects.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetAssociatedRecordsResponse object.

#### *property* associatedRecords

Property associatedRecords is a list of [`AssociatedRecords`](#module-GRANTA_MIScriptingToolkit.AssociatedRecords) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddAssociatedRecords(\_associatedRecords)

Appends \_associatedRecords to associatedRecords property on GetAssociatedRecordsResponse C-object.

* **Parameters:**
  **\_associatedRecords** – object of type AssociatedRecords.

### GetAttributeDetailsRequest

### *class* GetAttributeDetailsRequest(attributeReferences=None, minMaxCalculation=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetAttributeDetails operation.
For requests at least one
[`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) is required.

* **Parameters:**
  * **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects
  * **minMaxCalculation** – type int

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* minMaxCalculation

Property minMaxCalculation is of type int.

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetAttributeDetailsRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetAttributeDetailsResponse

### *class* GetAttributeDetailsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetAttributeDetails operation.
Includes an array of [`AttributeDetail`](#module-GRANTA_MIScriptingToolkit.AttributeDetail) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetAttributeDetailsResponse object.

#### *property* attributeDetails

Property attributeDetails is a list of [`AttributeDetail`](#module-GRANTA_MIScriptingToolkit.AttributeDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddAttributeDetails(\_attributeDetail)

Appends \_attributeDetail to attributeDetails property on GetAttributeDetailsResponse C-object.

* **Parameters:**
  **\_attributeDetail** – object of type AttributeDetail.

### GetAttributeParametersRequest

### *class* GetAttributeParametersRequest(attributeReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetAttributeParameters operation.
For requests, at least one
[`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) is required.

* **Parameters:**
  **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetAttributeParametersRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetAttributeParametersResponse

### *class* GetAttributeParametersResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetAttributeParameters operation.
Includes an array of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetAttributeParametersResponse object.

#### *property* attributeParameters

Property attributeParameters is a list of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetAvailableExportersRequest

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

#### *property* applicabilityTag

Property applicabilityTag is of type str.

#### *property* DBKey

Property DBKey is of type str.

#### *property* matchDB

Property matchDB is of type bool. If true, we check that the exporter config Table element is in a Database element for the right dbKey.

#### *property* model

Property model is of type str.

#### *property* package

Property package is of type str.

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

#### *property* versionPolicy

Property versionPolicy is of type int. See [`GRANTA_Constants.VersionPolicy`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* c_obj

Pointer to the underlying C-object

### GetAvailableExportersResponse

### *class* GetAvailableExportersResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetAvailableExporters operation. Contains a list of exporters.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetAvailableExportersResponse object.

#### *property* exporters

Property exporters is a list of [`Exporter`](#module-GRANTA_MIScriptingToolkit.Exporter) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetChildNodes

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

#### *property* excludeWithdrawn

Property excludeWithdrawn is of type bool.

#### *property* parent

Property parent is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

#### *property* recurse

Property recurse is of type bool.

#### *property* recurseMaxDepth

Property recurseMaxDepth is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### GetChildNodesResponse

### *class* GetChildNodesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Response for the [`GetChildNodes`](#module-GRANTA_MIScriptingToolkit.GetChildNodes) operation.
Includes an array of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetChildNodesResponse object.

#### *property* treeRecords

Property treeRecords is a list of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddTreeRecord(\_treeRecord)

Appends \_treeRecord to treeRecords property on GetChildNodesResponse C-object.

* **Parameters:**
  **\_treeRecord** – object of type TreeRecord.

### GetDatabaseParameters

### *class* GetDatabaseParameters(DBKey=None, requireStandardNames=None, useStandardNamesWherePossible=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetDatabaseParameters operation.
Requires a DBKey to be set. The parameters requireStandardNames and useStandardNamesWherePossible
both default to false.

* **Parameters:**
  * **DBKey** – type str
  * **requireStandardNames** – type bool
  * **useStandardNamesWherePossible** – type bool

#### *property* DBKey

Property DBKey is of type str.

#### *property* requireStandardNames

Property requireStandardNames is of type bool.

#### *property* useStandardNamesWherePossible

Property useStandardNamesWherePossible is of type bool.

#### *property* c_obj

Pointer to the underlying C-object

### GetDatabaseParametersResponse

### *class* GetDatabaseParametersResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetDatabaseParametersResponse operation.
Includes an array of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetDatabaseParametersResponse object.

#### *property* parameterDetails

Property parameterDetails is a list of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddParameterDetail(\_parameterDetail)

Appends \_parameterDetail to parameterDetails property on GetDatabaseParametersResponse C-object.

* **Parameters:**
  **\_parameterDetail** – object of type ParameterDetail.

### GetDatabasesResponse

### *class* GetDatabasesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetDatabases operation.
Includes an array of [`DatabaseDetail`](#module-GRANTA_MIScriptingToolkit.DatabaseDetail) objects and
a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetDatabasesResponse object.

#### *property* databases

Property databases is a list of [`DatabaseDetail`](#module-GRANTA_MIScriptingToolkit.DatabaseDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddDatabase(\_databaseDetail)

Appends \_databaseDetail to databases property on GetDatabasesResponse C-object.

* **Parameters:**
  **\_databaseDetail** – object of type DatabaseDetail.

### GetDatasheetPath

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

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* datasheetType

Property datasheetType is of type int.

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetDatasheetPath C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetDatasheetPathParameterized

### *class* GetDatasheetPathParameterized(DBKey=None, datasheetType=None, unitConversionContext=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetDatasheetPathParameterized operation.
Requires a DBKey to be set. The parameters unitConversionContext and datasheetType are optional.
datasheetType defaults to ‘Datasheet’.

* **Parameters:**
  * **DBKey** – type str
  * **datasheetType** – type int
  * **unitConversionContext** – type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext)

#### *property* DBKey

Property DBKey is of type str.

#### *property* datasheetType

Property datasheetType is of type int.

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

#### *property* c_obj

Pointer to the underlying C-object

### GetDatasheetPathParameterizedResponse

### *class* GetDatasheetPathParameterizedResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the
[`GetDatasheetPathParameterized`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPathParameterized)
operation.
Includes an array of DatasheetPathParameterized objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetDatasheetPathParameterizedResponse object.

#### *property* currencyQuery

Property currencyQuery is of type str.

#### *property* DBKeyQuery

Property DBKeyQuery is of type str.

#### *property* recordHistoryIdentityQueryName

Property recordHistoryIdentityQueryName is of type str.

#### *property* URL

Property URL is of type str.

#### *property* unitSystemQuery

Property unitSystemQuery is of type str.

### GetDatasheetPathResponse

### *class* GetDatasheetPathResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetDatasheetPath`](#module-GRANTA_MIScriptingToolkit.GetDatasheetPath) operation.
Includes an array of [`DatasheetPath`](#module-GRANTA_MIScriptingToolkit.DatasheetPath) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetDatasheetPathResponse object.

#### *property* datasheetPaths

Property datasheetPaths is a list of [`DatasheetPath`](#module-GRANTA_MIScriptingToolkit.DatasheetPath) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetExporterParametersRequest

### *class* GetExporterParametersRequest(exporterKey=None, populateGUIDs=None, records=None, unitConversionContext=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetExporterParameters operation.

* **Parameters:**
  * **exporterKey** – type str
  * **populateGUIDs** – type bool
  * **records** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **unitConversionContext** – type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext)

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* exporterKey

Property exporterKey is of type str.

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on GetExporterParametersRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetExporterParametersResponse

### *class* GetExporterParametersResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetExporterParameters operation. Contains a list of records and details for
exporting their attributes.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetExporterParametersResponse object.

#### *property* records

Property records is a list of [`RecordExporterParameters`](#module-GRANTA_MIScriptingToolkit.RecordExporterParameters) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetIntegrationProfiles

### *class* GetIntegrationProfiles(databases=None, depth=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetIntegrationProfiles operation.

* **Parameters:**
  * **databases** – type list of str objects
  * **depth** – type int

#### *class* Depth

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Profiles *= 0*

#### Databases *= 1*

#### Tables *= 2*

#### *property* databases

Property databases is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* depth

Property depth is of type int.

#### AddDatabase(value)

Appends value to databases property on GetIntegrationProfiles C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

#### *property* c_obj

Pointer to the underlying C-object

### GetIntegrationProfilesResponse

### *class* GetIntegrationProfilesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from [`GetIntegrationProfiles`](#module-GRANTA_MIScriptingToolkit.GetIntegrationProfiles)
operation.
Includes an array of
[`IntegrationProfileDetail`](#module-GRANTA_MIScriptingToolkit.IntegrationProfileDetail) objects and
a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse).

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetIntegrationProfilesResponse object.

#### *property* profileDetails

Property profileDetails is a list of [`IntegrationProfileDetail`](#module-GRANTA_MIScriptingToolkit.IntegrationProfileDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetLayouts

### *class* GetLayouts(applicabilityTag=None, layouts=None, minMaxCalculation=None, table=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetLayouts operation.
Includes a table reference or list of layouts to retrieve.

* **Parameters:**
  * **applicabilityTag** – type str
  * **layouts** – type list of [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference) objects
  * **minMaxCalculation** – type int
  * **table** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

#### *property* layouts

Property layouts is a list of [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

#### *property* applicabilityTag

Property applicabilityTag is of type str.

#### *property* minMaxCalculation

Property minMaxCalculation is of type int.

#### AddLayout(\_layoutReference)

Appends \_layoutReference to layouts property on GetLayouts C-object.

* **Parameters:**
  **\_layoutReference** – object of type LayoutReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetLayoutsResponse

### *class* GetLayoutsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetLayouts`](#module-GRANTA_MIScriptingToolkit.GetLayouts) operation.
Includes a list of layouts retrieved.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetLayoutsResponse object.

#### *property* layoutDetails

Property layoutDetails is a list of [`LayoutDetail`](#module-GRANTA_MIScriptingToolkit.LayoutDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddLayoutDetail(\_layoutDetail)

Appends \_layoutDetail to layoutDetails property on GetLayoutsResponse C-object.

* **Parameters:**
  **\_layoutDetail** – object of type LayoutDetail.

### GetLinkedRecordsRequest

### *class* GetLinkedRecordsRequest(directLinksOnly=None, populateGUIDs=None, recordFilter=None, recordLinkGroups=None, recordReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetLinkedRecords operation.

* **Parameters:**
  * **directLinksOnly** – type bool
  * **populateGUIDs** – type bool
  * **recordFilter** – type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter)
  * **recordLinkGroups** – type list of [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference) objects
  * **recordReferences** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

#### *property* recordLinkGroups

Property recordLinkGroups is a list of [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* directLinksOnly

Property directLinksOnly is of type bool.

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

#### AddRecordLinkGroup(\_recordLinkGroupReference)

Appends \_recordLinkGroupReference to recordLinkGroups property on GetLinkedRecordsRequest C-object.

* **Parameters:**
  **\_recordLinkGroupReference** – object of type RecordLinkGroupReference.

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetLinkedRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetLinkedRecordsResponse

### *class* GetLinkedRecordsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetLinkedRecords operation.
Includes an array of [`SourceRecord`](#module-GRANTA_MIScriptingToolkit.SourceRecord) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetLinkedRecordsResponse object.

#### *property* sourceRecords

Property sourceRecords is a list of [`SourceRecord`](#module-GRANTA_MIScriptingToolkit.SourceRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetMetaAttributesRequest

### *class* GetMetaAttributesRequest(attributeReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetMetaAttributesRequest operation.

* **Parameters:**
  **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetMetaAttributesRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetMetaAttributesResponse

### *class* GetMetaAttributesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetMetaAttributes operation. Includes an array of
[`AttributeMetaAttributes`](#module-GRANTA_MIScriptingToolkit.AttributeMetaAttributes) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetMetaAttributesResponse object.

#### *property* attributes

Property attributes is a list of [`AttributeMetaAttributes`](#module-GRANTA_MIScriptingToolkit.AttributeMetaAttributes) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetParameterDetailsRequest

### *class* GetParameterDetailsRequest(attribute=None, parameterReferences=None, recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetParameterDetails operation.

* **Parameters:**
  * **attribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **parameterReferences** – type list of [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference) objects
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

#### *property* parameterReferences

Property parameterReferences is a list of [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* attribute

Property attribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### AddParameterReference(\_parameterReference)

Appends \_parameterReference to parameterReferences property on GetParameterDetailsRequest C-object.

* **Parameters:**
  **\_parameterReference** – object of type ParameterReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetParameterDetailsResponse

### *class* GetParameterDetailsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetParameterDetails operation.
Includes an array of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetParameterDetailsResponse object.

#### *property* attributeParameters

Property attributeParameters is a list of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetRecordAttributesByRefRequest

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

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* exportedAttributes

Property exportedAttributes is a list of [`ExportedAttribute`](#module-GRANTA_MIScriptingToolkit.ExportedAttribute) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* directLinksOnly

Property directLinksOnly is of type bool.

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

#### *property* useFallback

Property useFallback is of type bool.

#### *property* binaryData

Property binaryData is of type [`BinaryDataSettings`](#module-GRANTA_MIScriptingToolkit.BinaryDataSettings).

#### *property* functionalDataSettings

Property functionalDataSettings is of type [`FunctionalDataSettings`](#module-GRANTA_MIScriptingToolkit.FunctionalDataSettings).

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetRecordAttributesByRefRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

#### AddExportedAttribute(\_exportedAttribute)

Appends \_exportedAttribute to exportedAttributes property on GetRecordAttributesByRefRequest C-object.

* **Parameters:**
  **\_exportedAttribute** – object of type ExportedAttribute.

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetRecordAttributesByRefRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetRecordAttributesByRefResponse

### *class* GetRecordAttributesByRefResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetRecordAttributesByRef operation.
Includes an array of [`RecordData`](#module-GRANTA_MIScriptingToolkit.RecordData) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRecordAttributesByRefResponse object.

#### *property* recordData

Property recordData is a list of [`RecordData`](#module-GRANTA_MIScriptingToolkit.RecordData) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddRecordData(\_recordData)

Appends \_recordData to recordData property on GetRecordAttributesByRefResponse C-object.

* **Parameters:**
  **\_recordData** – object of type RecordData.

### GetRecordAttributesRequest

### *class* GetRecordAttributesRequest(includeEmpty=None, includeMeta=None, includeParamDetails=None, minMaxCalculation=None, recordReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetRecordAttribute operation.

* **Parameters:**
  * **includeEmpty** – type bool
  * **includeMeta** – type bool
  * **includeParamDetails** – type bool
  * **minMaxCalculation** – type int
  * **recordReferences** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* includeEmpty

Property includeEmpty is of type bool.

#### *property* includeMeta

Property includeMeta is of type bool.

#### *property* includeParamDetails

Property includeParamDetails is of type bool.

#### *property* minMaxCalculation

Property minMaxCalculation is of type int.

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetRecordAttributesRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetRecordAttributesResponse

### *class* GetRecordAttributesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetRecordAttributes operation.
Includes an array of [`RecordAttribute`](#module-GRANTA_MIScriptingToolkit.RecordAttribute) objects
and a [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRecordAttributesResponse object.

#### *property* recordAttributes

Property recordAttributes is a list of [`RecordAttribute`](#module-GRANTA_MIScriptingToolkit.RecordAttribute) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddRecordAttribute(\_recordAttribute)

Appends \_recordAttribute to recordAttributes property on GetRecordAttributesResponse C-object.

* **Parameters:**
  **\_recordAttribute** – object of type RecordAttribute.

### GetRecordLinkGroups

### *class* GetRecordLinkGroups(DBKey=None, recordLinkGroups=None, standardNamesOnly=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Returns details of Record Link Groups in a Granta MI Database.

* **Parameters:**
  * **DBKey** – type str
  * **recordLinkGroups** – type list of [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference) objects
  * **standardNamesOnly** – type bool

#### *property* recordLinkGroups

Property recordLinkGroups is a list of [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* DBKey

Property DBKey is of type str. When this is provided, details of all Record Link Groups in the specified Granta MI Database will be returned.

#### *property* standardNamesOnly

Property standardNamesOnly is of type bool.

#### AddRecordLinkGroup(\_recordLinkGroupReference)

Appends \_recordLinkGroupReference to recordLinkGroups property on GetRecordLinkGroups C-object.

* **Parameters:**
  **\_recordLinkGroupReference** – object of type RecordLinkGroupReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetRecordLinkGroupsResponse

### *class* GetRecordLinkGroupsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetRecordLinkGroups`](#module-GRANTA_MIScriptingToolkit.GetRecordLinkGroups)
operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRecordLinkGroupsResponse object.

#### *property* recordLinkGroups

Property recordLinkGroups is a list of [`RecordLinkGroupDetail`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetRecordVersionsRequest

### *class* GetRecordVersionsRequest(records=None, versions=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetRecordVersions operation.

* **Parameters:**
  * **records** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **versions** – type int

#### *class* VersionSelector

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### LatestRead *= 0*

#### Latest *= 1*

#### AllReleased *= 2*

#### All *= 3*

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* versions

Property versions is of type int. See [`GetRecordVersionsRequest.VersionSelector`](#GRANTA_MIScriptingToolkit.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector) for supported values.

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on GetRecordVersionsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetRecordVersionsResponse

### *class* GetRecordVersionsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetRecordVersions operation. Contains a list of version states.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRecordVersionsResponse object.

#### *property* recordStates

Property recordStates is a list of [`RecordVersionState`](#module-GRANTA_MIScriptingToolkit.RecordVersionState) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetRootNode

### *class* GetRootNode(table=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetRootNode operation.
Requires a [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference) .

* **Parameters:**
  **table** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

#### *property* c_obj

Pointer to the underlying C-object

### GetRootNodeResponse

### *class* GetRootNodeResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetRootNode`](#module-GRANTA_MIScriptingToolkit.GetRootNode) operation.
Includes a [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) object and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetRootNodeResponse object.

#### *property* rootNode

Property rootNode is of type [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord).

### GetSubsetsRequest

### *class* GetSubsetsRequest(subsetReferences=None, table=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetSubsets operation.
Requires a [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference) .

* **Parameters:**
  * **subsetReferences** – type list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) objects
  * **table** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)

#### *property* subsetReferences

Property subsetReferences is of type list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference).

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

#### AddSubsetReference(\_subsetReference)

Appends \_subsetReference to subsetReferences property on GetSubsetsRequest C-object.

* **Parameters:**
  **\_subsetReference** – object of type SubsetReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetSubsetsResponse

### *class* GetSubsetsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetSubsets operation.
Includes an array of SubsetDetails objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetSubsetsResponse object.

#### *property* subsetDetails

Property subsetDetails is a list of [`SubsetDetail`](#module-GRANTA_MIScriptingToolkit.SubsetDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetTables

### *class* GetTables(DBKey=None, attributeSelectors=None, tableFilter=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetTables operation.
Requires a DBKey to be set.

* **Parameters:**
  * **DBKey** – type str
  * **attributeSelectors** – type list of int objects
  * **tableFilter** – type int

#### *class* AttributeSelector

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### NONE *= 0*

#### NonMetaAttributes *= 1*

#### MetaAttributes *= 2*

#### StandardAttributes *= 3*

#### *property* attributeSelectors

Property attributeSelectors is a list of int objects. See [`GetTables.AttributeSelector`](#GRANTA_MIScriptingToolkit.GetTables.GetTables.AttributeSelector) for supported values.
Warning: Do not attempt to edit or append to the returned value.

#### *property* DBKey

Property DBKey is of type str.

#### *property* tableFilter

Property tableFilter is of type int. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### AddAttributeSelector(value)

Appends value to attributeSelectors property on GetTables C-object.

* **Parameters:**
  **value** – object of type int.

#### *property* c_obj

Pointer to the underlying C-object

### GetTablesResponse

### *class* GetTablesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the [`GetTables`](#module-GRANTA_MIScriptingToolkit.GetTables) operation.
Includes an array of [`TableDetail`](#module-GRANTA_MIScriptingToolkit.TableDetail) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetTablesResponse object.

#### *property* tableDetails

Property tableDetails is a list of [`TableDetail`](#module-GRANTA_MIScriptingToolkit.TableDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddTableDetail(\_tableDetail)

Appends \_tableDetail to tableDetails property on GetTablesResponse C-object.

* **Parameters:**
  **\_tableDetail** – object of type TableDetail.

### GetTreeRecordsRequest

### *class* GetTreeRecordsRequest(records=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetTreeRecords operation.
Requires at least one [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

* **Parameters:**
  **records** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

#### *property* records

Property records is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddRecord(\_recordReference)

Appends \_recordReference to records property on GetTreeRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetTreeRecordsResponse

### *class* GetTreeRecordsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output to the GetTreeRecords operation.
Includes an array of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetTreeRecordsResponse object.

#### *property* treeRecords

Property treeRecords is a list of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddTreeRecord(\_treeRecord)

Appends \_treeRecord to treeRecords property on GetTreeRecordsResponse C-object.

* **Parameters:**
  **\_treeRecord** – object of type TreeRecord.

### GetUnitConversionsRequest

### *class* GetUnitConversionsRequest(DBKey=None, sourceCurrency=None, targetCurrency=None, unitConversionContexts=None, unitSymbols=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the GetUnitConversions operation.

* **Parameters:**
  * **DBKey** – type str
  * **sourceCurrency** – type str
  * **targetCurrency** – type str
  * **unitConversionContexts** – type list of [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext) objects
  * **unitSymbols** – type list of str objects

#### *property* unitConversionContexts

Property unitConversionContexts is a list of [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* unitSymbols

Property unitSymbols is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* DBKey

Property DBKey is of type str.

#### *property* sourceCurrency

Property sourceCurrency is of type str.

#### *property* targetCurrency

Property targetCurrency is of type str.

#### AddUnitConversionContext(\_unitConversionContext)

Appends \_unitConversionContext to unitConversionContexts property on GetUnitConversionsRequest C-object.

* **Parameters:**
  **\_unitConversionContext** – object of type UnitConversionContext.

#### AddUnitSymbol(value)

Appends value to unitSymbols property on GetUnitConversionsRequest C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

#### *property* c_obj

Pointer to the underlying C-object

### GetUnitConversionsResponse

### *class* GetUnitConversionsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetUnitConversions operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetUnitConversionsResponse object.

#### *property* DBKey

Property DBKey is of type str.

#### *property* sourceUnits

Property sourceUnits is a list of [`SourceUnitConversionSet`](#module-GRANTA_MIScriptingToolkit.SourceUnitConversionSet) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* unitConversionContexts

Property unitConversionContexts is a list of [`UnitConversionContextConversionSet`](#module-GRANTA_MIScriptingToolkit.UnitConversionContextConversionSet) objects.
Warning: Do not attempt to edit or append to the returned value.

### GetUnitSystems

### *class* GetUnitSystems(DBKey=None, excludeCurrencies=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type for requesting the unit systems on a particular Granta MI database.
A DBKey must be specified.

* **Parameters:**
  * **DBKey** – type str
  * **excludeCurrencies** – type bool

#### *property* DBKey

Property DBKey is of type str.

#### *property* excludeCurrencies

Property excludeCurrencies is of type bool.

#### *property* c_obj

Pointer to the underlying C-object

### GetUnitSystemsResponse

### *class* GetUnitSystemsResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

The ouput of a [`GetUnitSystems`](#module-GRANTA_MIScriptingToolkit.GetUnitSystems) requests.
Contains an array of unit systems for the specified database.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetUnitSystemsResponse object.

#### *property* DBKey

Property DBKey is of type str.

#### *property* unitSystems

Property unitSystems is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

### GetUploadAddressesRequest

### *class* GetUploadAddressesRequest(attributeReferences=None, recordReferences=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the GetUploadAddresses operation.
Contains a list of records and attributes to get the upload URL addresses of.

* **Parameters:**
  * **attributeReferences** – type list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects
  * **recordReferences** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* recordReferences

Property recordReferences is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddAttributeReference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetUploadAddressesRequest C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

#### AddRecordReference(\_recordReference)

Appends \_recordReference to recordReferences property on GetUploadAddressesRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### GetUploadAddressesResponse

### *class* GetUploadAddressesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the GetUploadAddresses operation.
Contains a list of
[`RecordWithAttributeAddresses`](#module-GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses)
objects for each record in the
[`GetUploadAddressesRequest`](#module-GRANTA_MIScriptingToolkit.GetUploadAddressesRequest).

* **Parameters:**
  **c_obj** – ctypes.Pointer to a GetUploadAddressesResponse object.

#### *property* recordsWithAttributeAddresses

Property recordsWithAttributeAddresses is a list of [`RecordWithAttributeAddresses`](#module-GRANTA_MIScriptingToolkit.RecordWithAttributeAddresses) objects.
Warning: Do not attempt to edit or append to the returned value.

### GraphDomain

### *class* GraphDomain(parameterDomains=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain choices of fixed parameter values.
A value must be chosen for each parameter, within the given constraints.

* **Parameters:**
  **parameterDomains** – type list of [`ParameterDomain`](#module-GRANTA_MIScriptingToolkit.ParameterDomain) objects

#### *property* parameterDomains

Property parameterDomains is a list of [`ParameterDomain`](#module-GRANTA_MIScriptingToolkit.ParameterDomain) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* c_obj

Pointer to the underlying C-object

### GreaterThanSearchValue

### *class* GreaterThanSearchValue(tabularColumn=None, unit=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data greater than a specified value.
Criterion passes if data value is above a given value. Point, range, and integer attributes are
supported.

* **Parameters:**
  * **tabularColumn** – type str
  * **unit** – type str
  * **value** – type float

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* unit

Property unit is of type str.

#### *property* value

Property value is of type float.

#### *property* c_obj

Pointer to the underlying C-object

### HelpInfo

### *class* HelpInfo(databaseHelp=None, helpURI=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type describing how to obtain detailed Help information for an entity in a Granta MI database.

* **Parameters:**
  * **databaseHelp** – type bool
  * **helpURI** – type str

#### *property* databaseHelp

Property databaseHelp is of type bool.

#### *property* helpURI

Property helpURI is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### HighEndSearchValue

### *class* HighEndSearchValue(unit=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Upper limit for the [`BetweenSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenSearchValue)
search criterion.
Requires a double value and an optional unit.

* **Parameters:**
  * **unit** – type str
  * **value** – type float

#### *property* unit

Property unit is of type str.

#### *property* value

Property value is of type float.

#### *property* c_obj

Pointer to the underlying C-object

### HyperlinkDataType

### *class* HyperlinkDataType(description=None, hyperlinkDisplay=None, isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain a HyperLink string value.

* **Parameters:**
  * **description** – type str
  * **hyperlinkDisplay** – type int
  * **isApplicable** – type bool
  * **value** – type str

#### *class* HyperlinkDisplay

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### New *= 0*

#### Top *= 1*

#### Content *= 2*

#### *property* description

Property description is of type str.

#### *property* hyperlinkDisplay

Property hyperlinkDisplay is of type int.

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### IDataValue

### *class* IDataValue

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Base class for data values in Granta MI.

You should not interact directly with this class.

### ImportAttributeValue

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

#### *property* attributeReference

Property attributeReference is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

#### *property* dateDataValue

Property dateDataValue is of type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType).

#### *property* discreteDataValue

Property discreteDataValue is of type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType).

#### *property* fileDataValue

Property fileDataValue is of type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType).

#### *property* floatFunctionalGriddedDataType

Property floatFunctionalGriddedDataType is of type [`FloatFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType).

#### *property* floatFunctionalSeriesDataType

Property floatFunctionalSeriesDataType is of type [`FloatFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType).

#### *property* hyperlinkDataValue

Property hyperlinkDataValue is of type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType).

#### *property* integerDataValue

Property integerDataValue is of type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType).

#### *property* logicalDataValue

Property logicalDataValue is of type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType).

#### *property* longTextDataValue

Property longTextDataValue is of type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType).

#### *property* pictureDataValue

Property pictureDataValue is of type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType).

#### *property* pointDataValue

Property pointDataValue is of type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType).

#### *property* rangeDataValue

Property rangeDataValue is of type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType).

#### *property* shortTextDataValue

Property shortTextDataValue is of type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType).

#### *property* tabularDataValue

Property tabularDataValue is of type [`TabularDataType`](#module-GRANTA_MIScriptingToolkit.TabularDataType).

#### *property* c_obj

Pointer to the underlying C-object

### ImportRecord

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

#### *property* importAttributeValues

Property importAttributeValues is a list of [`ImportAttributeValue`](#module-GRANTA_MIScriptingToolkit.ImportAttributeValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* subsetReferences

Property subsetReferences is a list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* recordName

Property recordName is of type str.

#### *property* copyDestinationParent

Property copyDestinationParent is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* existingRecord

Property existingRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* importRecordMode

Property importRecordMode is of type str. See [`GRANTA_Constants.ImportTypes`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* isFolder

Property isFolder is of type bool.

#### *property* releaseRecord

Property releaseRecord is of type bool.

#### *property* updateSubsetsMode

Property updateSubsetsMode is of type int. See [`GRANTA_Constants.UpdateSubsetsMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### AddImportAttributeValue(\_importAttributeValue)

Appends \_importAttributeValue to importAttributeValues property on ImportRecord C-object.

* **Parameters:**
  **\_importAttributeValue** – object of type ImportAttributeValue.

#### AddSubsetReference(\_subsetReference)

Appends \_subsetReference to subsetReferences property on ImportRecord C-object.

* **Parameters:**
  **\_subsetReference** – object of type SubsetReference.

#### *property* c_obj

Pointer to the underlying C-object

### IntegerDataType

### *class* IntegerDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain an integer data type.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type int

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* value

Property value is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### IntegrationDatabase

### *class* IntegrationDatabase(DBKey=None, author=None, company=None, integrationTables=None, volumeName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a database within an Integration Profile.

* **Parameters:**
  * **DBKey** – type str
  * **author** – type str
  * **company** – type str
  * **integrationTables** – type list of [`TableDetail`](#module-GRANTA_MIScriptingToolkit.TableDetail) objects
  * **volumeName** – type str

#### *property* author

Property author is of type str.

#### *property* company

Property company is of type str.

#### *property* DBKey

Property DBKey is of type str.

#### *property* integrationTables

Property integrationTables is a list of [`TableDetail`](#module-GRANTA_MIScriptingToolkit.TableDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* volumeName

Property volumeName is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### IntegrationProfileDetail

### *class* IntegrationProfileDetail(description=None, groupName=None, integrationDatabases=None, name=None, profile=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed information about an Integration Profile.

* **Parameters:**
  * **description** – type [`RichText`](#module-GRANTA_MIScriptingToolkit.RichText)
  * **groupName** – type str
  * **integrationDatabases** – type list of [`IntegrationDatabase`](#module-GRANTA_MIScriptingToolkit.IntegrationDatabase) objects
  * **name** – type str
  * **profile** – type [`IntegrationProfileReference`](#module-GRANTA_MIScriptingToolkit.IntegrationProfileReference)

#### *property* description

Property description is of type [`RichText`](#module-GRANTA_MIScriptingToolkit.RichText).

#### *property* groupName

Property groupName is of type str.

#### *property* integrationDatabases

Property integrationDatabases is a list of [`IntegrationDatabase`](#module-GRANTA_MIScriptingToolkit.IntegrationDatabase) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* name

Property name is of type str.

#### *property* profile

Property profile is of type [`IntegrationProfileReference`](#module-GRANTA_MIScriptingToolkit.IntegrationProfileReference).

#### *property* c_obj

Pointer to the underlying C-object

### IntegrationProfileReference

### *class* IntegrationProfileReference(key=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains the key for an Integration Profile.

* **Parameters:**
  **key** – type str

#### *property* key

Property key is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### LayoutDetail

### *class* LayoutDetail(attributeCategories=None, layout=None, name=None, table=None, displayNames=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a Layout in a Granta MI database.

* **Parameters:**
  * **attributeCategories** – type list of [`AttributeCategory`](#module-GRANTA_MIScriptingToolkit.AttributeCategory) objects
  * **layout** – type [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference)
  * **name** – type str
  * **table** – type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference)
  * **displayNames** – type list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects

#### *property* attributeCategories

Property attributeCategories is a list of [`AttributeCategory`](#module-GRANTA_MIScriptingToolkit.AttributeCategory) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* displayNames

Property displayNames is a list of [`DisplayName`](#module-GRANTA_MIScriptingToolkit.DisplayName) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* layout

Property layout is of type [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference).

#### *property* name

Property name is of type str.

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

#### AddAttributeCategory(\_attributeCategory)

Appends \_attributeCategory to attributeCategories property on LayoutDetail C-object.

* **Parameters:**
  **\_attributeCategory** – object of type AttributeCategory.

#### *property* c_obj

Pointer to the underlying C-object

### LayoutReference

### *class* LayoutReference(DBKey=None, layoutIdentity=None, name=None, partialTableReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular Layout in a Granta MI database.

* **Parameters:**
  * **DBKey** – type str
  * **layoutIdentity** – type int
  * **name** – type str
  * **partialTableReference** – type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference)

#### *property* DBKey

Property DBKey is of type str.

#### *property* layoutIdentity

Property layoutIdentity is of type int.

#### *property* name

Property name is of type str.

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

#### *property* c_obj

Pointer to the underlying C-object

### LessThanSearchValue

### *class* LessThanSearchValue(tabularColumn=None, unit=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data less than a specified value.
Criterion passes if data value is less than a given value. Point, range, and integer attributes are
supported.

* **Parameters:**
  * **tabularColumn** – type str
  * **unit** – type str
  * **value** – type float

#### *property* tabularColumn

Property tabularColumn is of type str.

#### *property* unit

Property unit is of type str.

#### *property* value

Property value is of type float.

#### *property* c_obj

Pointer to the underlying C-object

### LinkAllCombinations

### *class* LinkAllCombinations(nodeName=None, sourceRecords=None, targetRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, add links to all the given target records. Silently skip any links
that already exist.

* **Parameters:**
  * **nodeName** – type str
  * **sourceRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects
  * **targetRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

#### *property* sourceRecords

Property sourceRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* targetRecords

Property targetRecords is of type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* nodeName

Property nodeName is of type str.

#### AddSourceRecord(\_recordReference)

Appends \_recordReference to sourceRecords property on LinkAllCombinations C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### AddTargetRecord(\_recordReference)

Appends \_recordReference to targetRecords property on LinkAllCombinations C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### LinkRecords

### *class* LinkRecords(nodeName=None, sourceRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, add links to the target records specified for that source record.
Silently skip any links that already exist.

* **Parameters:**
  * **nodeName** – type str
  * **sourceRecords** – type list of [`NotatedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord) objects

#### *property* sourceRecords

Property sourceRecords is of type list of [`NotatedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NotatedTargetedSourceRecord).

#### *property* nodeName

Property nodeName is of type str.

#### AddSourceRecord(\_notatedTargetedSourceRecord)

Appends \_notatedTargetedSourceRecord to sourceRecords property on LinkRecords C-object.

* **Parameters:**
  **\_notatedTargetedSourceRecord** – object of type NotatedTargetedSourceRecord.

#### *property* c_obj

Pointer to the underlying C-object

### LinkedRecordsDataType

### *class* LinkedRecordsDataType(nodeName=None, recordLinkGroups=None, typeString=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type representing a list of linked Records.

* **Parameters:**
  * **nodeName** – type str
  * **recordLinkGroups** – type list of [`RecordLinkGroup`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroup) objects
  * **typeString** – type str

#### *property* nodeName

Property nodeName is of type str.

#### *property* recordLinkGroups

Property recordLinkGroups is a list of [`RecordLinkGroup`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroup) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* typeString

Property typeString is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### ListDataType

### *class* ListDataType(items=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A list of values within a Cell in Tabular Data.

* **Parameters:**
  **items** – type list of [`ListItem`](#module-GRANTA_MIScriptingToolkit.ListItem) objects

#### *property* items

Property items is a list of [`ListItem`](#module-GRANTA_MIScriptingToolkit.ListItem) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* c_obj

Pointer to the underlying C-object

### ListItem

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

#### *property* dataType

Property dataType is of type str.

#### *property* dateDataValue

Property dateDataValue is of type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType).

#### *property* discreteDataValue

Property discreteDataValue is of type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType).

#### *property* discreteFunctionalGriddedDataValue

Property discreteFunctionalGriddedDataValue is of type [`DiscreteFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalGriddedDataType).

#### *property* discreteFunctionalSeriesDataValue

Property discreteFunctionalSeriesDataValue is of type [`DiscreteFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteFunctionalSeriesDataType).

#### *property* emptyDataValue

Property emptyDataValue is of type [`EmptyDataType`](#module-GRANTA_MIScriptingToolkit.EmptyDataType).

#### *property* fileDataValue

Property fileDataValue is of type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType).

#### *property* floatFunctionalGriddedDataValue

Property floatFunctionalGriddedDataValue is of type [`FloatFunctionalGriddedDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalGriddedDataType).

#### *property* floatFunctionalSeriesDataValue

Property floatFunctionalSeriesDataValue is of type [`FloatFunctionalSeriesDataType`](#module-GRANTA_MIScriptingToolkit.FloatFunctionalSeriesDataType).

#### *property* hyperlinkDataValue

Property hyperlinkDataValue is of type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType).

#### *property* integerDataValue

Property integerDataValue is of type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType).

#### *property* logicalDataValue

Property logicalDataValue is of type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType).

#### *property* longTextDataValue

Property longTextDataValue is of type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType).

#### *property* pictureDataValue

Property pictureDataValue is of type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType).

#### *property* pointDataValue

Property pointDataValue is of type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType).

#### *property* rangeDataValue

Property rangeDataValue is of type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType).

#### *property* shortTextDataValue

Property shortTextDataValue is of type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType).

#### *property* sourceRecordReference

Property sourceRecordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* c_obj

Pointer to the underlying C-object

### LogicalDataType

### *class* LogicalDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain a logical data type.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type bool

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* value

Property value is of type bool.

#### *property* c_obj

Pointer to the underlying C-object

### LongTextDataType

### *class* LongTextDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain a long text data type.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type str

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### LookupValue

### *class* LookupValue(attributeReference=None, attributeValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object containing an [`AttributeValue`](#module-GRANTA_MIScriptingToolkit.AttributeValue) and
[`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) object that uniquely
identify a record in a table.

* **Parameters:**
  * **attributeReference** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **attributeValue** – type str

#### *property* attributeReference

Property attributeReference is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

#### *property* attributeValue

Property attributeValue is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### LowEndSearchValue

### *class* LowEndSearchValue(unit=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Lower limit for the [`BetweenSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenSearchValue)
search criterion.

* **Parameters:**
  * **unit** – type str
  * **value** – type float

#### *property* unit

Property unit is of type str.

#### *property* value

Property value is of type float.

#### *property* c_obj

Pointer to the underlying C-object

### MIEntityReference

### *class* MIEntityReference

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A base type for types that identify entities in a Granta MI database. The details of how entities are identified differ between concrete sub-types.

You should not interact directly with this class.

#### GetDBKey()

#### WithDBKey(value)

### MIEntityResolution

### *class* MIEntityResolution(canWrite=None, entityReference=None, resolved=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents whether the entity referred to by the reference property can actually be resolved to an
MI entity, and if that entity can be resolved whether or not it is writable.

* **Parameters:**
  * **canWrite** – type int
  * **entityReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **resolved** – type bool

#### *class* CanWrite

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Yes *= 0*

#### No *= 1*

#### NotSupported *= 2*

#### *property* canWrite

Property canWrite is of type int.

#### *property* entityReference

Property entityReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* resolved

Property resolved is of type bool.

#### *property* c_obj

Pointer to the underlying C-object

### MIParameterValue

### *class* MIParameterValue(revisionInfo=None, value=None, valueName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A named value of a Parameter in a Granta MI Database.

* **Parameters:**
  * **revisionInfo** – type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo)
  * **value** – type float
  * **valueName** – type str

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

#### *property* value

Property value is of type float.

#### *property* valueName

Property valueName is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### MISession

### *class* MISession(url='', verbosity=1)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A connection to a Granta MI Server. Don’t create this class directly, instead see
[`GRANTA_MISession`](#module-GRANTA_MIScriptingToolkit.GRANTA_MISession)

* **Parameters:**
  * **url** – url of your Granta MI Service Layer installation
  * **verbosity** – Logging verbosity; accepted values 1 - “ERROR”, 2 - “WARNING”, or 3 - “DEBUG”

#### ConnectionIsValid()

Returns a tuple of (bool, string). The first element is whether or not requests can succeed, and the second is a description of the outcome of the test.

#### TestConnection()

Raises an exception if a request to the Granta MI Service Layer does not respond or responds with an error.

#### UseAutoLogon()

If called, this session will use the Windows credentials of the current user to authenticate to the Granta MI Service Layer.

#### SetCredentials(domain, username, password)

* **Parameters:**
  * **username** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Granta MI username
  * **password** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Granta MI password
  * **domain** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Granta MI user domain

#### SetAuthorization(auth)

* **Parameters:**
  **auth** ([*GRANTA_MIScriptingToolkit.OIDC.OIDC*](#GRANTA_MIScriptingToolkit.OIDC.OIDC)) – MI Auth object to do the authorization

#### SetReceiveTimeout(timeout)

Sets time in milliseconds to wait for a response before timing out.

* **Parameters:**
  **timeout** ([*int*](https://docs.python.org/3/library/functions.html#int)) – timeout in milliseconds

#### *property* actAsReadUser

Property name is of type bool. If set to True, this session will perform operations as if it were a read user, even if the session authenticated as a higher privileged role.

### MinMax

### *class* MinMax(maxValue=None, minValue=None, units=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The minimum and maximum data values for a specified numerical attribute, calculated from all records
you have read permissions for in a database.

* **Parameters:**
  * **maxValue** – type [`MinMaxValue`](#module-GRANTA_MIScriptingToolkit.MinMaxValue)
  * **minValue** – type [`MinMaxValue`](#module-GRANTA_MIScriptingToolkit.MinMaxValue)
  * **units** – type str

#### *property* maxValue

Property maxValue is of type [`MinMaxValue`](#module-GRANTA_MIScriptingToolkit.MinMaxValue).

#### *property* minValue

Property minValue is of type [`MinMaxValue`](#module-GRANTA_MIScriptingToolkit.MinMaxValue).

#### *property* units

Property units is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### MinMaxValue

### *class* MinMaxValue(dateTime=None, double=None, integer=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that represents the minimum or maximum data value for a numerical attribute in a database.

* **Parameters:**
  * **dateTime** – type str
  * **double** – type float
  * **integer** – type int
  * **type** – type int

#### *class* Type

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### ERROR *= -1*

#### DateType *= 0*

#### DoubleType *= 1*

#### IntegerType *= 2*

#### NotANumber *= 3*

#### *property* dateTime

Property dateTime is of type str.

#### *property* double

Property double is of type float.

#### *property* integer

Property integer is of type int.

#### *property* type

Property type is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### ModifyRecordLinksRequest

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

#### *property* importErrorMode

Property importErrorMode is of type str. See [`GRANTA_Constants.ImportErrorMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* recordLinkCheckMode

Property recordLinkCheckMode is of type str. See [`GRANTA_Constants.RecordLinkCheckMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* recordLinkGroupReference

Property recordLinkGroupReference is of type [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference).

#### *property* recordLinkModifications

Property recordLinkModifications is of type [`RecordLinkModifications`](#module-GRANTA_MIScriptingToolkit.RecordLinkModifications).

#### *property* c_obj

Pointer to the underlying C-object

### ModifyRecordLinksResponse

### *class* ModifyRecordLinksResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

The response from a ModifyRecordLinks request.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a ModifyRecordLinksResponse object.

#### *property* recordLinkChanges

Property recordLinkChanges is of type [`RecordLinkChanges`](#module-GRANTA_MIScriptingToolkit.RecordLinkChanges).

### NamedAttribute

### *class* NamedAttribute(about=None, attribute=None, isMeta=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Name information about an Attribute in a Granta MI database.

* **Parameters:**
  * **about** – type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute)
  * **attribute** – type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference)
  * **isMeta** – type bool
  * **name** – type str

#### *property* about

Property about is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute). Only populated if ‘isMeta’ is True.

#### *property* attribute

Property attribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

#### *property* isMeta

Property isMeta is of type bool. If this is True, the ‘about’ property may have additional information about the related parent attribute.

#### *property* name

Property name is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### NamedLayout

### *class* NamedLayout(layout=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A layout in a Granta MI database.

* **Parameters:**
  * **layout** – type [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference)
  * **name** – type str

#### *property* layout

Property layout is of type [`LayoutReference`](#module-GRANTA_MIScriptingToolkit.LayoutReference).

#### *property* name

Property name is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### NamedRecord

### *class* NamedRecord(longName=None, recordReference=None, shortName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) with the short and long name
of the record.

* **Parameters:**
  * **longName** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **shortName** – type str

#### *property* longName

Property longName is of type str.

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* shortName

Property shortName is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### NamedSubset

### *class* NamedSubset(name=None, subset=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) with the subset name.

* **Parameters:**
  * **name** – type str
  * **subset** – type [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference)

#### *property* name

Property name is of type str.

#### *property* subset

Property subset is of type [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference).

#### *property* c_obj

Pointer to the underlying C-object

### NamedTargetedSourceRecord

### *class* NamedTargetedSourceRecord(record=None, targetRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A named record used for modifying record links.

* **Parameters:**
  * **record** – type [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord)
  * **targetRecords** – type list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects

#### *property* targetRecords

Property targetRecords is a list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* record

Property record is of type [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord).

#### AddTargetRecords(\_namedRecord)

Appends \_namedRecord to targetRecords property on NamedTargetedSourceRecord C-object.

* **Parameters:**
  **\_namedRecord** – object of type NamedRecord.

#### *property* c_obj

Pointer to the underlying C-object

### NotatedTargetRecord

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

#### *property* notes

Property notes is of type str.

#### *property* record

Property record is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* reverseNotes

Property reverseNotes is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### NotatedTargetedSourceRecord

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

#### *property* targetRecords

Property targetRecords is a list of [`NotatedTargetRecord`](#module-GRANTA_MIScriptingToolkit.NotatedTargetRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* sourceRecord

Property sourceRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### AddTargetRecord(\_notatedTargetRecord)

Appends \_notatedTargetRecord to targetRecords property on NotatedTargetedSourceRecord C-object.

* **Parameters:**
  **\_notatedTargetRecord** – object of type NotatedTargetRecord.

#### *property* c_obj

Pointer to the underlying C-object

### OIDC

### *class* OIDC(accessToken=None, refreshToken=None, authorizeTimeout=None)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An object to allow authorization using OpenID Connect. Contact Ansys Granta Technical Support for information
on supported identity providers, and for configuration and setup documentation.

Pass to a [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) and call [`Authorize()`](#GRANTA_MIScriptingToolkit.OIDC.OIDC.Authorize) for a login page.

* **Parameters:**
  * **accessToken** – Valid access token for the URL of your MI Service Layer installation
  * **refreshToken** – Valid refresh token for the URL of your MI Service Layer installation
  * **authorizeTimeout** – Number of milliseconds to wait for a response after calling [`Authorize()`](#GRANTA_MIScriptingToolkit.OIDC.OIDC.Authorize)

#### Authorize()

Authorize a Granta MI session with an OpenID Connect provider.

#### CheckAuthentication()

Checks whether your access and refresh tokens are valid, and returns the result.

#### TestAuthentication()

Checks whether your access and refresh tokens are valid, and displays an error message if the tokens are invalid.

#### *property* authorizeTimeout

Property authorizeTimeout is the time in milliseconds to wait for a response from the
external browser when [`Authorize()`](#GRANTA_MIScriptingToolkit.OIDC.OIDC.Authorize) is called.

#### *property* accessToken

Property accessToken is of type str.

#### *property* refreshToken

Property refreshToken is of type str.

### ParameterDetail

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

#### *class* Interpolation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### NONE *= 0*

#### Linear *= 1*

#### CubicSpline *= 2*

#### *class* ScaleType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### NotSet *= 0*

#### Linear *= 1*

#### Log *= 2*

#### *class* ParameterType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### NumericUnrestricted *= 0*

#### NumericRestricted *= 1*

#### Discrete *= 2*

#### *property* appliesToAttribute

Property appliesToAttribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

#### *property* appliesToRecord

Property appliesToRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* defaultValue

Property defaultValue is of type [`MIParameterValue`](#module-GRANTA_MIScriptingToolkit.MIParameterValue).

#### *property* interpolationType

Property interpolationType is of type int. See [`ParameterDetail.Interpolation`](#GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.Interpolation) for supported values.

#### *property* name

Property name is of type str.

#### *property* parameterValues

Property parameterValues is a list of [`MIParameterValue`](#module-GRANTA_MIScriptingToolkit.MIParameterValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* order

Property order is of type int.

#### *property* parameterReference

Property parameterReference is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

#### *property* parameterType

Property parameterType is of type int. See [`ParameterDetail.ParameterType`](#GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ParameterType) for supported values.

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

#### *property* scaleType

Property scaleType is of type int. See [`ParameterDetail.ScaleType`](#GRANTA_MIScriptingToolkit.ParameterDetail.ParameterDetail.ScaleType) for supported values.

#### *property* unit

Property unit is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

#### *property* c_obj

Pointer to the underlying C-object

### ParameterDomain

### *class* ParameterDomain(exporterParameterId=None, interpolable=None, values=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a list of parameter values.

* **Parameters:**
  * **exporterParameterId** – type str
  * **interpolable** – type bool
  * **values** – type list of [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue) objects

#### *property* exporterParameterId

Property exporterParameterId is of type str.

#### *property* interpolable

Property interpolable is of type bool.

#### *property* values

Property values is a list of [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* c_obj

Pointer to the underlying C-object

### ParameterInformation

### *class* ParameterInformation(name=None, parameterReference=None, unit=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information for a parameter in a Granta MI database.
Contains the name and unit information for a parameter and a
[`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference) to the parameter.

* **Parameters:**
  * **name** – type str
  * **parameterReference** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **unit** – type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation)

#### *property* name

Property name is of type str.

#### *property* parameterReference

Property parameterReference is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

#### *property* unit

Property unit is of type [`UnitInformation`](#module-GRANTA_MIScriptingToolkit.UnitInformation).

#### *property* c_obj

Pointer to the underlying C-object

### ParameterReference

### *class* ParameterReference(DBKey=None, ID=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Identification of a particular parameter in a Granta MI database .
For requests a DBKey is required, and either the parameter ID  or the parameter name.

* **Parameters:**
  * **DBKey** – type str
  * **ID** – type int
  * **name** – type str

#### *property* DBKey

Property DBKey is of type str.

#### *property* ID

Property ID is of type int.

#### *property* name

Property name is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### ParameterReferenceAndValue

### *class* ParameterReferenceAndValue(parameter=None, parameterValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains a [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference) and a
[`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

* **Parameters:**
  * **parameter** – type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference)
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)

#### *property* parameter

Property parameter is of type [`ParameterReference`](#module-GRANTA_MIScriptingToolkit.ParameterReference).

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

#### *property* c_obj

Pointer to the underlying C-object

### ParameterReferencesAndValues

### *class* ParameterReferencesAndValues(parameterWithValues=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of
[`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue)
objects.

* **Parameters:**
  **parameterWithValues** – type list of [`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue) objects

#### *property* parameterWithValues

Property parameterWithValues is a list of [`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddParameterWithValue(\_parameterReferenceAndValue)

Appends \_parameterReferenceAndValue to parameterWithValues property on ParameterReferencesAndValues C-object.

* **Parameters:**
  **\_parameterReferenceAndValue** – object of type ParameterReferenceAndValue.

#### *property* c_obj

Pointer to the underlying C-object

### ParameterValue

### *class* ParameterValue(discreteValue=None, numericValue=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A value of a Parameter in Functional data.

* **Parameters:**
  * **discreteValue** – type str
  * **numericValue** – type float
  * **type** – type str

#### *property* discreteValue

Property discreteValue is of type str.

#### *property* numericValue

Property numericValue is of type float.

#### *property* type

Property type is of type str. There is no need to set this property manually.
See [`GRANTA_Constants.ParameterTypes`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* c_obj

Pointer to the underlying C-object

### Parameters

### *class* Parameters(parameters=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation)
objects.

* **Parameters:**
  **parameters** – type list of [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation) objects

#### *property* parameters

Property parameters is a list of [`ParameterInformation`](#module-GRANTA_MIScriptingToolkit.ParameterInformation) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddParameter(\_parameterInformation)

Appends \_parameterInformation to parameters property on Parameters C-object.

* **Parameters:**
  **\_parameterInformation** – object of type ParameterInformation.

#### *property* c_obj

Pointer to the underlying C-object

### PartialTableReference

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

#### *property* tableGUID

Property tableGUID is of type str.

#### *property* tableID

Property tableID is of type int.

#### *property* tableName

Property tableName is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### PathLeaf

### *class* PathLeaf(longName=None, recordReference=None, shortName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The folder furthest from the root record folder, for each path checked or created.

* **Parameters:**
  * **longName** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **shortName** – type str

#### *property* longName

Property longName is of type str.

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* shortName

Property shortName is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### PictureDataType

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

#### ModifyBinaryData(binaryData)

#### ReadBinaryData()

#### *property* contentType

Property contentType is of type str.

#### *property* data

Property data is of type str.

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* URL

Property URL is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### PointDataType

### *class* PointDataType(isApplicable=None, isEstimated=None, parameters=None, points=None, unitSymbol=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

A type to contain an array of float data types.

* **Parameters:**
  * **isApplicable** – type bool
  * **isEstimated** – type bool
  * **parameters** – type [`Parameters`](#module-GRANTA_MIScriptingToolkit.Parameters)
  * **points** – type list of [`PointValueWithParameters`](#module-GRANTA_MIScriptingToolkit.PointValueWithParameters) objects
  * **unitSymbol** – type str

#### *property* points

Property points is a list of [`PointValueWithParameters`](#module-GRANTA_MIScriptingToolkit.PointValueWithParameters) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* isEstimated

Property isEstimated is of type bool.

#### *property* parameters

Property parameters is of type [`Parameters`](#module-GRANTA_MIScriptingToolkit.Parameters).

#### *property* unitSymbol

Property unitSymbol is of type str.

#### AddPoint(\_pointValueWithParameters)

Appends \_pointValueWithParameters to points property on PointDataType C-object.

* **Parameters:**
  **\_pointValueWithParameters** – object of type PointValueWithParameters.

#### *property* c_obj

Pointer to the underlying C-object

### PointValueWithParameters

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

#### *property* hasTrailingZeroInfo

Property hasTrailingZeroInfo is of type bool.

#### *property* trailingZeroInfo

Property trailingZeroInfo is of type [`TrailingZeroInformation`](#module-GRANTA_MIScriptingToolkit.TrailingZeroInformation).

#### *property* value

Property value is of type float.

#### *property* valueParameters

Property valueParameters is of type [`ParameterReferencesAndValues`](#module-GRANTA_MIScriptingToolkit.ParameterReferencesAndValues).

#### *property* c_obj

Pointer to the underlying C-object

### RangeDataType

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

#### *property* hasHigh

Property hasHigh is of type bool.

#### *property* hasHighTrailingZeroInfo

Property hasHighTrailingZeroInfo is of type bool.

#### *property* hasLow

Property hasLow is of type bool.

#### *property* hasLowTrailingZeroInfo

Property hasLowTrailingZeroInfo is of type bool.

#### *property* high

Property high is of type float.

#### *property* highValueIsInclusive

Property highValueIsInclusive is of type bool.

#### *property* highValueTrailingZeroInfo

Property highValueTrailingZeroInfo is of type [`TrailingZeroInformation`](#module-GRANTA_MIScriptingToolkit.TrailingZeroInformation).

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* isEstimated

Property isEstimated is of type bool.

#### *property* low

Property low is of type float.

#### *property* lowValueIsInclusive

Property lowValueIsInclusive is of type bool.

#### *property* lowValueTrailingZeroInfo

Property lowValueTrailingZeroInfo is of type [`TrailingZeroInformation`](#module-GRANTA_MIScriptingToolkit.TrailingZeroInformation).

#### *property* unitSymbol

Property unitSymbol is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### RasterSize

### *class* RasterSize(heightPixels=None, widthPixels=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Gives the size in pixels of picture data.

* **Parameters:**
  * **heightPixels** – type int
  * **widthPixels** – type int

#### *property* heightPixels

Property heightPixels is of type int.

#### *property* widthPixels

Property widthPixels is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### RecordAttribute

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

#### *property* attribute

Property attribute is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute).

#### *property* dataCreatedRecordVersion

Property dataCreatedRecordVersion is of type int.

#### *property* dataRetiredRecordVersion

Property dataRetiredRecordVersion is of type int.

#### *property* dataRevisionInfo

Property dataRevisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

#### *property* dataVersionNumber

Property dataVersionNumber is of type int.

#### *property* hasData

Property hasData is of type bool.

#### *property* parameterDetails

Property parameterDetails is a list of [`ParameterDetail`](#module-GRANTA_MIScriptingToolkit.ParameterDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* c_obj

Pointer to the underlying C-object

### RecordData

### *class* RecordData(attributeValues=None, recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The values of data for attribute(s) of a particular record.

* **Parameters:**
  * **attributeValues** – type list of [`AttributeValue`](#module-GRANTA_MIScriptingToolkit.AttributeValue) objects
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

#### *property* attributeValues

Property attributeValues is a list of [`AttributeValue`](#module-GRANTA_MIScriptingToolkit.AttributeValue) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* c_obj

Pointer to the underlying C-object

### RecordExporterParameters

### *class* RecordExporterParameters(attributes=None, record=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a record and its associated attribute exporter parameters.

* **Parameters:**
  * **attributes** – type list of [`AttributeExporterParameters`](#module-GRANTA_MIScriptingToolkit.AttributeExporterParameters) objects
  * **record** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

#### *property* attributes

Property attributes is a list of [`AttributeExporterParameters`](#module-GRANTA_MIScriptingToolkit.AttributeExporterParameters) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* record

Property record is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* c_obj

Pointer to the underlying C-object

### RecordFilter

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

#### *property* recordLists

Property recordLists is a list of [`RecordListReference`](#module-GRANTA_MIScriptingToolkit.RecordListReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* subsets

Property subsets is a list of [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* profile

Property profile is of type str.

#### AddRecordList(\_recordListReference)

Appends \_recordListReference to recordLists property on RecordFilter C-object.

* **Parameters:**
  **\_recordListReference** – object of type RecordListReference.

#### AddSubset(\_subsetReference)

Appends \_subsetReference to subsets property on RecordFilter C-object.

* **Parameters:**
  **\_subsetReference** – object of type SubsetReference.

#### *property* c_obj

Pointer to the underlying C-object

### RecordFolderPath

### *class* RecordFolderPath(color=None, recordReference=None, treeNames=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The path to a Granta MI record folder. Contains the record folder at which the path starts as
parent, the tree names, and the color.

* **Parameters:**
  * **color** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **treeNames** – type list of str objects

#### *property* treeNames

Property treeNames is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* color

Property color is of type str.

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### AddTreeName(value)

Appends value to treeNames property on RecordFolderPath C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

#### *property* c_obj

Pointer to the underlying C-object

### RecordLinkChanges

### *class* RecordLinkChanges(linked=None, unlinked=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A set of changes to be made to record link groups.

* **Parameters:**
  * **linked** – type list of [`NamedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord) objects
  * **unlinked** – type list of [`NamedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord) objects

#### *property* linked

Property linked is a list of [`NamedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* unlinked

Property unlinked is a list of [`NamedTargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.NamedTargetedSourceRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* c_obj

Pointer to the underlying C-object

### RecordLinkGroup

### *class* RecordLinkGroup(linkedRecords=None, name=None, standardNames=None, tableFilters=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type representing a group of linked records.

* **Parameters:**
  * **linkedRecords** – type list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects
  * **name** – type str
  * **standardNames** – type list of str objects
  * **tableFilters** – type list of int objects

#### *property* linkedRecords

Property linkedRecords is a list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* name

Property name is of type str.

#### *property* standardNames

Property standardNames is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* tableFilters

Property tableFilters is a list of int objects. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.
Warning: Do not attempt to edit or append to the returned value.

#### *property* c_obj

Pointer to the underlying C-object

### RecordLinkGroupDetail

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

#### *property* fromTable

Property fromTable is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

#### *property* linkGroupType

Property linkGroupType is of type str. See [`GRANTA_Constants.RecordLinkGroupTypes`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* name

Property name is of type str.

#### *property* standardNames

Property standardNames is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* reference

Property reference is of type [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference).

#### *property* reverseName

Property reverseName is of type str.

#### *property* reverseReference

Property reverseReference is of type [`RecordLinkGroupReference`](#module-GRANTA_MIScriptingToolkit.RecordLinkGroupReference).

#### *property* toTable

Property toTable is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

#### *property* c_obj

Pointer to the underlying C-object

### RecordLinkGroupReference

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

#### *property* DBKey

Property DBKey is of type str.

#### *property* isStandardName

Property isStandardName is of type bool.

#### *property* name

Property name is of type str.

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

#### *property* recordLinkGroupIdentity

Property recordLinkGroupIdentity is of type int.

#### *property* recordLinkGroupType

Property recordLinkGroupType is of type str. See [`GRANTA_Constants.RecordLinkGroupTypes`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* c_obj

Pointer to the underlying C-object

### RecordLinkModifications

### *class* RecordLinkModifications(linkAllCombinations=None, linkRecords=None, unlinkAllRecords=None, unlinkRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A set of modifications to be made to record link groups.

* **Parameters:**
  * **linkAllCombinations** – type list of [`LinkAllCombinations`](#module-GRANTA_MIScriptingToolkit.LinkAllCombinations) objects
  * **linkRecords** – type list of [`LinkRecords`](#module-GRANTA_MIScriptingToolkit.LinkRecords) objects
  * **unlinkAllRecords** – type list of [`UnlinkAllRecords`](#module-GRANTA_MIScriptingToolkit.UnlinkAllRecords) objects
  * **unlinkRecords** – type list of [`UnlinkRecords`](#module-GRANTA_MIScriptingToolkit.UnlinkRecords) objects

#### *property* linkAllCombinations

Property linkAllCombinations is a list of [`LinkAllCombinations`](#module-GRANTA_MIScriptingToolkit.LinkAllCombinations) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* linkRecords

Property linkRecords is a list of [`LinkRecords`](#module-GRANTA_MIScriptingToolkit.LinkRecords) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* unlinkAllRecords

Property unlinkAllRecords is a list of [`UnlinkAllRecords`](#module-GRANTA_MIScriptingToolkit.UnlinkAllRecords) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* unlinkRecords

Property unlinkRecords is a list of [`UnlinkRecords`](#module-GRANTA_MIScriptingToolkit.UnlinkRecords) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddLinkAllCombinations(\_linkAllCombinations)

Appends \_linkAllCombinations to linkAllCombinations property on RecordLinkModifications C-object.

* **Parameters:**
  **\_linkAllCombinations** – object of type LinkAllCombinations.

#### AddLinkRecords(\_linkRecords)

Appends \_linkRecords to linkRecords property on RecordLinkModifications C-object.

* **Parameters:**
  **\_linkRecords** – object of type LinkRecords.

#### AddUnlinkAllRecords(\_unlinkAllRecords)

Appends \_unlinkAllRecords to unlinkAllRecords property on RecordLinkModifications C-object.

* **Parameters:**
  **\_unlinkAllRecords** – object of type UnlinkAllRecords.

#### AddUnlinkRecords(\_unlinkRecords)

Appends \_unlinkRecords to unlinkRecords property on RecordLinkModifications C-object.

* **Parameters:**
  **\_unlinkRecords** – object of type UnlinkRecords.

#### *property* c_obj

Pointer to the underlying C-object

### RecordListReference

### *class* RecordListReference(GUID=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A unique identifier for a record list.

* **Parameters:**
  **GUID** – type str

#### *property* GUID

Property GUID is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### RecordNameSearchRequest

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

#### *property* caseSensitiveNames

Property caseSensitiveNames is of type bool.

#### *property* filter

Property filter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

#### *property* recordName

Property recordName is of type str.

#### *property* searchFullNames

Property searchFullNames is of type bool.

#### *property* searchShortNames

Property searchShortNames is of type bool.

#### *property* table

Property table is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

#### *property* c_obj

Pointer to the underlying C-object

### RecordReference

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

#### *property* DBKey

Property DBKey is of type str.

#### *property* historyGUID

Property historyGUID is of type str.

#### *property* identity

Property identity is of type int.

#### *property* lookupValue

Property lookupValue is of type [`LookupValue`](#module-GRANTA_MIScriptingToolkit.LookupValue).

#### *property* recordGUID

Property recordGUID is of type str.

#### *property* recordUID

Property recordUID is of type str.

#### *property* version

Property version is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### RecordSearchCriterion

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

#### *property* betweenDateTimesSearchValue

Property betweenDateTimesSearchValue is of type [`BetweenDateTimesSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenDateTimesSearchValue).

#### *property* betweenSearchValue

Property betweenSearchValue is of type [`BetweenSearchValue`](#module-GRANTA_MIScriptingToolkit.BetweenSearchValue).

#### *property* containsAllSearchValue

Property containsAllSearchValue is of type [`ContainsAllSearchValue`](#module-GRANTA_MIScriptingToolkit.ContainsAllSearchValue).

#### *property* containsAnySearchValue

Property containsAnySearchValue is of type [`ContainsAnySearchValue`](#module-GRANTA_MIScriptingToolkit.ContainsAnySearchValue).

#### *property* containsSearchValue

Property containsSearchValue is of type [`ContainsSearchValue`](#module-GRANTA_MIScriptingToolkit.ContainsSearchValue).

#### *property* doesNotContainSearchValue

Property doesNotContainSearchValue is of type [`DoesNotContainSearchValue`](#module-GRANTA_MIScriptingToolkit.DoesNotContainSearchValue).

#### *property* doesNotExistSearchValue

Property doesNotExistSearchValue is of type [`DoesNotExistSearchValue`](#module-GRANTA_MIScriptingToolkit.DoesNotExistSearchValue).

#### *property* equalToSearchValue

Property equalToSearchValue is of type [`EqualToSearchValue`](#module-GRANTA_MIScriptingToolkit.EqualToSearchValue).

#### *property* exactlySearchValue

Property exactlySearchValue is of type [`ExactlySearchValue`](#module-GRANTA_MIScriptingToolkit.ExactlySearchValue).

#### *property* existsSearchValue

Property existsSearchValue is of type [`ExistsSearchValue`](#module-GRANTA_MIScriptingToolkit.ExistsSearchValue).

#### *property* greaterThanSearchValue

Property greaterThanSearchValue is of type [`GreaterThanSearchValue`](#module-GRANTA_MIScriptingToolkit.GreaterThanSearchValue).

#### *property* lessThanSearchValue

Property lessThanSearchValue is of type [`LessThanSearchValue`](#module-GRANTA_MIScriptingToolkit.LessThanSearchValue).

#### *property* searchAttribute

Property searchAttribute is of type [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference).

#### *property* type

Property type is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### RecordVersionState

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

#### *class* VersionState

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Released *= 0*

#### Superseded *= 1*

#### Withdrawn *= 2*

#### Unreleased *= 3*

#### Unversioned *= 4*

#### Unknown *= 5*

#### *property* createdRevision

Property createdRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

#### *property* hasReleasedRevision

Property hasReleasedRevision is of type bool.

#### *property* hasSupersededRevision

Property hasSupersededRevision is of type bool.

#### *property* hasWithdrawnRevision

Property hasWithdrawnRevision is of type bool.

#### *property* modifiedRevision

Property modifiedRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* releasedRevision

Property releasedRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

#### *property* supersededRevision

Property supersededRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

#### *property* versionState

Property versionState is of type int. See [`RecordVersionState.VersionState`](#GRANTA_MIScriptingToolkit.RecordVersionState.RecordVersionState.VersionState) for supported values.

#### *property* withdrawnRevision

Property withdrawnRevision is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

#### *property* c_obj

Pointer to the underlying C-object

### RecordWithAttributeAddresses

### *class* RecordWithAttributeAddresses(attributeAddresses=None, recordReference=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) with a list of attributes
and their upload URL addresses.

* **Parameters:**
  * **attributeAddresses** – type list of [`AttributeAddress`](#module-GRANTA_MIScriptingToolkit.AttributeAddress) objects
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)

#### *property* attributeAddresses

Property attributeAddresses is a list of [`AttributeAddress`](#module-GRANTA_MIScriptingToolkit.AttributeAddress) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### AddAttributeAddress(\_attributeAddress)

Appends \_attributeAddress to attributeAddresses property on RecordWithAttributeAddresses C-object.

* **Parameters:**
  **\_attributeAddress** – object of type AttributeAddress.

#### *property* c_obj

Pointer to the underlying C-object

### ResolveReferencesRequest

### *class* ResolveReferencesRequest(entities=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the ResolveReferences operation.

* **Parameters:**
  **entities** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

#### *property* entities

Property entities is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddEntitie(\_recordReference)

Appends \_recordReference to entities property on ResolveReferencesRequest C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### ResolveReferencesResponse

### *class* ResolveReferencesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Output from the ResolveReferences operation.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a ResolveReferencesResponse object.

#### *property* entityResolutions

Property entityResolutions is a list of [`MIEntityResolution`](#module-GRANTA_MIScriptingToolkit.MIEntityResolution) objects.
Warning: Do not attempt to edit or append to the returned value.

### Response

### *class* Response(c_obj)

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC)

Base class for response types in Granta MI.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a response object.

#### *property* c_obj

Pointer to the underlying C-object

#### *property* serviceLayerResponse

Property serviceLayerResponse is of type [`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse).

### RevisionInfo

### *class* RevisionInfo(created=None, modified=None, updateCount=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Describes when an entity in a Granta MI database was created and updated.

* **Parameters:**
  * **created** – type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision)
  * **modified** – type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision)
  * **updateCount** – type int

#### *property* created

Property created is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

#### *property* modified

Property modified is of type [`DatabaseRevision`](#module-GRANTA_MIScriptingToolkit.DatabaseRevision).

#### *property* updateCount

Property updateCount is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### RichText

### *class* RichText(type=None, value=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains a piece of text and its type.

* **Parameters:**
  * **type** – type int
  * **value** – type str

#### *class* Type

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Plain *= 0*

#### Markdown *= 1*

#### *property* type

Property type is of type int.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### SearchResult

### *class* SearchResult(longName=None, ranking=None, recordReference=None, shortName=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An extension of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) with a ranking. The
higher the ranking the better the match to your search criteria.

* **Parameters:**
  * **longName** – type str
  * **ranking** – type str
  * **recordReference** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **shortName** – type str

#### *property* longName

Property longName is of type str.

#### *property* ranking

Property ranking is of type str.

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* shortName

Property shortName is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### SearchService

### *class* SearchService(mi_session, retries=0)

Bases: [`Service`](#GRANTA_MIScriptingToolkit.Service.Service)

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

### Series

### *class* Series(XYPoints=None, constraints=None, decoration=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type for functional data which includes X-Y data and any constraints.

* **Parameters:**
  * **XYPoints** – type [`XYData`](#module-GRANTA_MIScriptingToolkit.XYData)
  * **constraints** – type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints)
  * **decoration** – type int

#### *property* constraints

Property constraints is of type [`Constraints`](#module-GRANTA_MIScriptingToolkit.Constraints).

#### *property* decoration

Property decoration is of type int. See [`GRANTA_Constants.GraphDecoration`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* XYPoints

Property XYPoints is of type [`XYData`](#module-GRANTA_MIScriptingToolkit.XYData).

#### *property* c_obj

Pointer to the underlying C-object

### Service

### *class* Service(mi_session, retries=0)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Base class for Granta MI Service objects. For internal use only.

### ServiceLayerResponse

### *class* ServiceLayerResponse(errorMessage=None, requestMessage=None, responseCode=None, responseMessage=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The HTTP response information from Granta MI Service Layer. Useful for debugging bad requests.

* **Parameters:**
  * **errorMessage** – type str
  * **requestMessage** – type str
  * **responseCode** – type int
  * **responseMessage** – type str

#### *property* errorMessage

Property errorMessage is of type str.

#### *property* requestMessage

Property requestMessage is of type str.

#### *property* responseCode

Property responseCode is of type int. This is an HTTP status code.

#### *property* responseMessage

Property responseMessage is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### SetRecordAttributesRequest

### *class* SetRecordAttributesRequest(importErrorMode=None, importRecords=None, notes=None, releaseNotes=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input to a set record attributes operation. Includes an array of records to import.

* **Parameters:**
  * **importErrorMode** – type str
  * **importRecords** – type list of [`ImportRecord`](#module-GRANTA_MIScriptingToolkit.ImportRecord) objects
  * **notes** – type str
  * **releaseNotes** – type str

#### *property* importRecords

Property importRecords is of type list of [`ImportRecord`](#module-GRANTA_MIScriptingToolkit.ImportRecord).

#### *property* notes

Property notes is of type str.

#### *property* releaseNotes

Property releaseNotes is of type str.

#### *property* importErrorMode

Property importErrorMode is of type str. See [`GRANTA_Constants.ImportErrorMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### AddImportRecord(\_importRecord)

Appends \_importRecord to importRecords property on SetRecordAttributesRequest C-object.

* **Parameters:**
  **\_importRecord** – object of type ImportRecord.

#### *property* c_obj

Pointer to the underlying C-object

### SetRecordAttributesResponse

### *class* SetRecordAttributesResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

Response for set record attributes operation. Includes an array of import records.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a SetRecordAttributesResponse object.

#### *property* recordsImported

Property recordsImported is a list of [`NamedRecord`](#module-GRANTA_MIScriptingToolkit.NamedRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

### ShortTextDataType

### *class* ShortTextDataType(isApplicable=None, value=None, \_isOwner=True)

Bases: [`IDataValue`](#GRANTA_MIScriptingToolkit.IDataValue.IDataValue)

Type for values of short text (string) data.

* **Parameters:**
  * **isApplicable** – type bool
  * **value** – type str

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* value

Property value is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### SimpleTextSearch

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

#### *property* restrictToTables

Property restrictToTables is a list of [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* DBKey

Property DBKey is of type str.

#### *property* populateGUIDs

Property populateGUIDs is of type bool.

#### *property* searchValue

Property searchValue is of type str.

#### *property* recordFilter

Property recordFilter is of type [`RecordFilter`](#module-GRANTA_MIScriptingToolkit.RecordFilter).

#### *property* searchFilter

Property searchFilter is of type int. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### *property* searchMode

Property searchMode is of type int. See [`GRANTA_Constants.SearchMode`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.

#### AddRestrictToTable(\_partialTableReference)

Appends \_partialTableReference to restrictToTables property on SimpleTextSearch C-object.

* **Parameters:**
  **\_partialTableReference** – object of type PartialTableReference.

#### *property* c_obj

Pointer to the underlying C-object

### SimpleTextSearchResponse

### *class* SimpleTextSearchResponse(c_obj)

Bases: [`Response`](#GRANTA_MIScriptingToolkit.Response.Response)

The output to the simple text search operation.
Contains a list of records returned by the search and a
[`ServiceLayerResponse`](#module-GRANTA_MIScriptingToolkit.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** – ctypes.Pointer to a SimpleTextSearchResponse object.

#### *property* searchResults

Property searchResults is a list of [`SearchResult`](#module-GRANTA_MIScriptingToolkit.SearchResult) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddSearchResult(\_searchResult)

Appends \_searchResult to searchResults property on SimpleTextSearchResponse C-object.

* **Parameters:**
  **\_searchResult** – object of type SearchResult.

### SourceRecord

### *class* SourceRecord(record=None, recordLinkGroups=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that contains a record reference and associated record link groups.

* **Parameters:**
  * **record** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **recordLinkGroups** – type [`LinkedRecordsDataType`](#module-GRANTA_MIScriptingToolkit.LinkedRecordsDataType)

#### *property* record

Property record is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* recordLinkGroups

Property recordLinkGroups is of type [`LinkedRecordsDataType`](#module-GRANTA_MIScriptingToolkit.LinkedRecordsDataType).

#### *property* c_obj

Pointer to the underlying C-object

### SourceUnitConversionSet

### *class* SourceUnitConversionSet(conversions=None, sourceSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

All the unit conversions available for a specified unit.

* **Parameters:**
  * **conversions** – type list of [`UnitConversionTarget`](#module-GRANTA_MIScriptingToolkit.UnitConversionTarget) objects
  * **sourceSymbol** – type str

#### *property* conversions

Property conversions is a list of [`UnitConversionTarget`](#module-GRANTA_MIScriptingToolkit.UnitConversionTarget) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* sourceSymbol

Property sourceSymbol is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### SpecificUnitConversionContext

### *class* SpecificUnitConversionContext(absoluteUnits=None, currency=None, unitSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type defining how values with convertable units should be represented.

* **Parameters:**
  * **absoluteUnits** – type bool
  * **currency** – type str
  * **unitSymbol** – type str

#### *property* absoluteUnits

Property absoluteUnits is of type bool.

#### *property* currency

Property currency is of type str.

#### *property* unitSymbol

Property unitSymbol is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### SubsetDetail

### *class* SubsetDetail(name=None, subset=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a subset in a Granta MI database.

* **Parameters:**
  * **name** – type str
  * **subset** – type [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference)

#### *property* name

Property name is of type str.

#### *property* subset

Property subset is of type [`SubsetReference`](#module-GRANTA_MIScriptingToolkit.SubsetReference).

#### *property* c_obj

Pointer to the underlying C-object

### SubsetReference

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

#### *property* DBKey

Property DBKey is of type str.

#### *property* name

Property name is of type str.

#### *property* partialTableReference

Property partialTableReference is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference). When used for input, this only needs to be specified if you are specifying a name rather than an id.

#### *property* subsetIdentity

Property subsetIdentity is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### SubsetsDataType

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

#### *property* dataVersionNo

Property dataVersionNo is of type int.

#### *property* importNodeName

Property importNodeName is of type str.

#### *property* namedSubsets

Property namedSubsets is a list of [`NamedSubset`](#module-GRANTA_MIScriptingToolkit.NamedSubset) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* nodeName

Property nodeName is of type str.

#### *property* typeString

Property typeString is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### TableDetail

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

#### *property* attributeReferences

Property attributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* defaultLayout

Property defaultLayout is of type [`NamedLayout`](#module-GRANTA_MIScriptingToolkit.NamedLayout).

#### *property* defaultSubset

Property defaultSubset is of type [`SubsetDetail`](#module-GRANTA_MIScriptingToolkit.SubsetDetail).

#### *property* standardAttributeReferences

Property standardAttributeReferences is a list of [`AttributeReference`](#module-GRANTA_MIScriptingToolkit.AttributeReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* tableFilters

Property tableFilters is a list of int objects. See [`GRANTA_Constants.TablesFilter`](#module-GRANTA_MIScriptingToolkit.GRANTA_Constants) for supported values.
Warning: Do not attempt to edit or append to the returned value.

#### *property* tableReference

Property tableReference is of type [`TableReference`](#module-GRANTA_MIScriptingToolkit.TableReference).

#### AddAttributeReferences(\_attributeReference)

Appends \_attributeReference to attributeReferences property on TableDetail C-object.

* **Parameters:**
  **\_attributeReference** – object of type AttributeReference.

#### *property* c_obj

Pointer to the underlying C-object

### TableReference

### *class* TableReference(DBKey=None, GUID=None, ID=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular table in a particular Granta MI database.
The DBKey is required in addition to at least one of either: ID, GUID, or Name.

* **Parameters:**
  * **DBKey** – type str
  * **GUID** – type str
  * **ID** – type int
  * **name** – type str

#### *property* DBKey

Property DBKey is of type str.

#### *property* GUID

Property GUID is of type str.

#### *property* ID

Property ID is of type int.

#### *property* name

Property name is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### TabularColumnDetail

### *class* TabularColumnDetail(dataType=None, databaseUnit=None, discreteValues=None, name=None, revisionInfo=None, type=None, \_isOwner=True)

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

#### *property* dataType

Property dataType is of type str.

#### *property* databaseUnit

Property databaseUnit is of type str.

#### *property* discreteValues

Property discreteValues is a list of str objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* name

Property name is of type str.

#### *property* revisionInfo

Property revisionInfo is of type [`RevisionInfo`](#module-GRANTA_MIScriptingToolkit.RevisionInfo).

#### *property* type

Property type is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### TabularDataCell

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

#### *property* dataType

Property dataType is of type str.

#### *property* dateDataValue

Property dateDataValue is of type [`DateDataType`](#module-GRANTA_MIScriptingToolkit.DateDataType).

#### *property* discreteDataValue

Property discreteDataValue is of type [`DiscreteDataType`](#module-GRANTA_MIScriptingToolkit.DiscreteDataType).

#### *property* emptyDataValue

Property emptyDataValue is of type [`EmptyDataType`](#module-GRANTA_MIScriptingToolkit.EmptyDataType).

#### *property* fileDataValue

Property fileDataValue is of type [`FileDataType`](#module-GRANTA_MIScriptingToolkit.FileDataType).

#### *property* hyperlinkDataValue

Property hyperlinkDataValue is of type [`HyperlinkDataType`](#module-GRANTA_MIScriptingToolkit.HyperlinkDataType).

#### *property* integerDataValue

Property integerDataValue is of type [`IntegerDataType`](#module-GRANTA_MIScriptingToolkit.IntegerDataType).

#### *property* listDataValue

Property listDataValue is of type [`ListDataType`](#module-GRANTA_MIScriptingToolkit.ListDataType).

#### *property* logicalDataValue

Property logicalDataValue is of type [`LogicalDataType`](#module-GRANTA_MIScriptingToolkit.LogicalDataType).

#### *property* longTextDataValue

Property longTextDataValue is of type [`LongTextDataType`](#module-GRANTA_MIScriptingToolkit.LongTextDataType).

#### *property* pictureDataValue

Property pictureDataValue is of type [`PictureDataType`](#module-GRANTA_MIScriptingToolkit.PictureDataType).

#### *property* pointDataValue

Property pointDataValue is of type [`PointDataType`](#module-GRANTA_MIScriptingToolkit.PointDataType).

#### *property* rangeDataValue

Property rangeDataValue is of type [`RangeDataType`](#module-GRANTA_MIScriptingToolkit.RangeDataType).

#### *property* shortTextDataValue

Property shortTextDataValue is of type [`ShortTextDataType`](#module-GRANTA_MIScriptingToolkit.ShortTextDataType).

#### *property* data

Property data is of type [`IDataValue`](#module-GRANTA_MIScriptingToolkit.IDataValue).

#### *property* c_obj

Pointer to the underlying C-object

### TabularDataRow

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

#### *property* cells

Property cells is a list of [`TabularDataCell`](#module-GRANTA_MIScriptingToolkit.TabularDataCell) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* Id

Property Id is of type int.

#### *property* linkedRecords

Property linkedRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* linkingValue

Property linkingValue is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### TabularDataType

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

#### *class* ChangeType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### InsertBefore *= 0*

#### Append *= 1*

#### Update *= 2*

#### Delete *= 3*

#### CreateRow()

Create and return a row for a tabular data import operation.

#### CreateUpdateRow(type, identity)

Create and return a row for a tabular data import update operation. To append a new row, use identity 0: `new_row = tabular_data_type.CreateUpdateRow(type=ChangeType.Append, identity=0)`. To clear data from an existing cell, use EmptyDataType in an update operation.

* **Parameters:**
  * **type** – This specifies the operation to perform on this tabular datum.
    See [`TabularDataType.ChangeType`](#GRANTA_MIScriptingToolkit.TabularDataType.TabularDataType.ChangeType) for supported values.
  * **identity** – The ID of the row to update. You should retrieve this from a data export operation (GetRecordAttributesByRef). If type is Append, pass this argument in as 0.

#### *property* columns

Property columns is a list of [`TabularDataTypeColumn`](#module-GRANTA_MIScriptingToolkit.TabularDataTypeColumn) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* isApplicable

Property isApplicable is of type bool.

#### *property* summaryColumns

Property summaryColumns is a list of [`TabularDataTypeColumn`](#module-GRANTA_MIScriptingToolkit.TabularDataTypeColumn) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* tabularDataRows

Property tabularDataRows is a list of [`TabularDataRow`](#module-GRANTA_MIScriptingToolkit.TabularDataRow) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* summaryRow

Property summaryRow is of type [`TabularDataRow`](#module-GRANTA_MIScriptingToolkit.TabularDataRow).

#### AddColumn(value)

Appends value to columns property on TabularDataType C-object.

* **Parameters:**
  **value** – object of type Defs.string_types.

#### *property* c_obj

Pointer to the underlying C-object

### TabularDataTypeColumn

### *class* TabularDataTypeColumn(columnType=None, dataType=None, databaseUnit=None, identity=None, name=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a column or data summary column in a specific tabular attribute.

* **Parameters:**
  * **columnType** – type int
  * **dataType** – type str
  * **databaseUnit** – type str
  * **identity** – type int
  * **name** – type str

#### *class* ColType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

#### Local *= 0*

#### TargetAttribute *= 1*

#### TargetRecord *= 2*

#### TargetTabularColumn *= 3*

#### Unavailable *= 4*

#### *property* columnType

Property columnType is of type int.

#### *property* dataType

Property dataType is of type str.

#### *property* databaseUnit

Property databaseUnit is of type str.

#### *property* identity

Property identity is of type int.

#### *property* name

Property name is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### TabularDetail

### *class* TabularDetail(columns=None, linkedTable=None, linkingAttribute=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a specific tabular attribute. If the tabular attribute has a linking attribute,
you can specify the linking attribute and the linked table containing that attribute.

* **Parameters:**
  * **columns** – type list of [`TabularColumnDetail`](#module-GRANTA_MIScriptingToolkit.TabularColumnDetail) objects
  * **linkedTable** – type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference)
  * **linkingAttribute** – type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute)

#### *property* columns

Property columns is a list of [`TabularColumnDetail`](#module-GRANTA_MIScriptingToolkit.TabularColumnDetail) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* linkedTable

Property linkedTable is of type [`PartialTableReference`](#module-GRANTA_MIScriptingToolkit.PartialTableReference).

#### *property* linkingAttribute

Property linkingAttribute is of type [`NamedAttribute`](#module-GRANTA_MIScriptingToolkit.NamedAttribute).

#### *property* c_obj

Pointer to the underlying C-object

### TargetedSourceRecord

### *class* TargetedSourceRecord(sourceRecord=None, targetRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type for unlinking records, contains a source
[`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) and an array of target
[`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.

* **Parameters:**
  * **sourceRecord** – type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference)
  * **targetRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

#### *property* targetRecords

Property targetRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* sourceRecord

Property sourceRecord is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### AddTargetRecord(\_recordReference)

Appends \_recordReference to targetRecords property on TargetedSourceRecord C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### TrailingZeroInformation

### *class* TrailingZeroInformation(enteredUnit=None, enteredValue=None, significantFigures=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type representing the numerical value as originally entered, including original unit and significant
figures.

* **Parameters:**
  * **enteredUnit** – type str
  * **enteredValue** – type str
  * **significantFigures** – type int

#### *property* enteredUnit

Property enteredUnit is of type str.

#### *property* enteredValue

Property enteredValue is of type str.

#### *property* significantFigures

Property significantFigures is of type int.

#### *property* c_obj

Pointer to the underlying C-object

### TreeRecord

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

#### *property* children

Property children is a list of [`TreeRecord`](#module-GRANTA_MIScriptingToolkit.TreeRecord) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* color

Property color is of type str.

#### *property* longName

Property longName is of type str.

#### *property* parentRecordHistoryIdentity

Property parentRecordHistoryIdentity is of type int.

#### *property* recordReference

Property recordReference is of type [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference).

#### *property* shortName

Property shortName is of type str.

#### *property* type

Property type is of type str.

#### AddChildren(\_treeRecord)

Appends \_treeRecord to children property on TreeRecord C-object.

* **Parameters:**
  **\_treeRecord** – object of type TreeRecord.

#### *property* c_obj

Pointer to the underlying C-object

### UnitConversion

### *class* UnitConversion(factor=None, offset=None, sourceSymbol=None, targetSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about how to convert from a specified source unit to a target unit.

* **Parameters:**
  * **factor** – type float
  * **offset** – type float
  * **sourceSymbol** – type str
  * **targetSymbol** – type str

#### *property* factor

Property factor is of type float.

#### *property* offset

Property offset is of type float.

#### *property* sourceSymbol

Property sourceSymbol is of type str.

#### *property* targetSymbol

Property targetSymbol is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### UnitConversionContext

### *class* UnitConversionContext(absoluteUnits=None, currency=None, unitSystem=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type defining how values with units should be represented.

* **Parameters:**
  * **absoluteUnits** – type bool
  * **currency** – type str
  * **unitSystem** – type str

#### *property* absoluteUnits

Property absoluteUnits is of type bool.

#### *property* currency

Property currency is of type str.

#### *property* unitSystem

Property unitSystem is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### UnitConversionContextConversionSet

### *class* UnitConversionContextConversionSet(unitConversionContext=None, unitConversions=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

All the unit conversions available with a specified unit conversion context.

* **Parameters:**
  * **unitConversionContext** – type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext)
  * **unitConversions** – type list of [`UnitConversion`](#module-GRANTA_MIScriptingToolkit.UnitConversion) objects

#### *property* unitConversions

Property unitConversions is a list of [`UnitConversion`](#module-GRANTA_MIScriptingToolkit.UnitConversion) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* unitConversionContext

Property unitConversionContext is of type [`UnitConversionContext`](#module-GRANTA_MIScriptingToolkit.UnitConversionContext).

#### AddUnitConversion(\_unitConversion)

Appends \_unitConversion to unitConversions property on UnitConversionContextConversionSet C-object.

* **Parameters:**
  **\_unitConversion** – object of type UnitConversion.

#### *property* c_obj

Pointer to the underlying C-object

### UnitConversionTarget

### *class* UnitConversionTarget(factor=None, offset=None, targetSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about how to convert to a target unit. When this type is used directly, the source unit
is assumed to be already known from a different type. To obtain a value in the target units,
multiply the source value by the factor, and then add the offset.

* **Parameters:**
  * **factor** – type float
  * **offset** – type float
  * **targetSymbol** – type str

#### *property* factor

Property factor is of type float.

#### *property* offset

Property offset is of type float.

#### *property* targetSymbol

Property targetSymbol is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### UnitInformation

### *class* UnitInformation(unitName=None, unitSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type used to give details of units for quantities.
When this type is output by the Service Layer, both name and symbol will be populated. When passed
as input to the Service Layer, only name or symbol need to be populated; if both are populated,
only the symbol is used.

* **Parameters:**
  * **unitName** – type str
  * **unitSymbol** – type str

#### *property* unitName

Property unitName is of type str.

#### *property* unitSymbol

Property unitSymbol is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### UnittedParameterValue

### *class* UnittedParameterValue(parameterWithValues=None, unitSymbol=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Parameter, along with a single value of that Parameter, optionally with units.

* **Parameters:**
  * **parameterWithValues** – type [`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue)
  * **unitSymbol** – type str

#### *property* parameterWithValues

Property parameterWithValues is of type [`ParameterReferenceAndValue`](#module-GRANTA_MIScriptingToolkit.ParameterReferenceAndValue).

#### *property* unitSymbol

Property unitSymbol is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### UnlinkAllRecords

### *class* UnlinkAllRecords(nodeName=None, sourceRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, remove all links in the Record Link Group.

* **Parameters:**
  * **nodeName** – type str
  * **sourceRecords** – type list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects

#### *property* sourceRecords

Property sourceRecords is a list of [`RecordReference`](#module-GRANTA_MIScriptingToolkit.RecordReference) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* nodeName

Property nodeName is of type str.

#### AddSourceRecord(\_recordReference)

Appends \_recordReference to sourceRecords property on UnlinkAllRecords C-object.

* **Parameters:**
  **\_recordReference** – object of type RecordReference.

#### *property* c_obj

Pointer to the underlying C-object

### UnlinkRecords

### *class* UnlinkRecords(nodeName=None, sourceRecords=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, remove links to the target records specified for that source record.
Silently skip any links that do not exist.

* **Parameters:**
  * **nodeName** – type str
  * **sourceRecords** – type list of [`TargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.TargetedSourceRecord) objects

#### *property* sourceRecords

Property sourceRecords is of type list of [`TargetedSourceRecord`](#module-GRANTA_MIScriptingToolkit.TargetedSourceRecord).

#### *property* nodeName

Property nodeName is of type str.

#### AddSourceRecord(\_targetedSourceRecord)

Appends \_targetedSourceRecord to sourceRecords property on UnlinkRecords C-object.

* **Parameters:**
  **\_targetedSourceRecord** – object of type TargetedSourceRecord.

#### *property* c_obj

Pointer to the underlying C-object

### XYData

### *class* XYData(XYPoints=None, XYRanges=None, type=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of y-axis values for a graph where the y-axis values are either point or range values.

* **Parameters:**
  * **XYPoints** – type list of [`XYPoint`](#module-GRANTA_MIScriptingToolkit.XYPoint) objects
  * **XYRanges** – type list of [`XYRange`](#module-GRANTA_MIScriptingToolkit.XYRange) objects
  * **type** – type str

#### *property* XYPoints

Property XYPoints is a list of [`XYPoint`](#module-GRANTA_MIScriptingToolkit.XYPoint) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* XYRanges

Property XYRanges is a list of [`XYRange`](#module-GRANTA_MIScriptingToolkit.XYRange) objects.
Warning: Do not attempt to edit or append to the returned value.

#### *property* type

Property type is of type str.

#### AddXYPoint(\_XYPoint)

Appends \_XYPoint to XYPoints property on XYData C-object.

* **Parameters:**
  **\_XYPoint** – object of type XYPoint.

#### AddXYRange(\_XYRange)

Appends \_XYRange to XYRanges property on XYData C-object.

* **Parameters:**
  **\_XYRange** – object of type XYRange.

#### *property* c_obj

Pointer to the underlying C-object

### XYDiscrete

### *class* XYDiscrete(Y=None, isEstimated=None, parameterValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An x-y datum where the y-axis value is a discrete value.

* **Parameters:**
  * **Y** – type str
  * **isEstimated** – type bool
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)

#### *property* isEstimated

Property isEstimated is of type bool.

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

#### *property* Y

Property Y is of type str.

#### *property* c_obj

Pointer to the underlying C-object

### XYDiscreteData

### *class* XYDiscreteData(XYDiscretes=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of y-axis values for a graph where the y-axis values are discrete values.

* **Parameters:**
  **XYDiscretes** – type list of [`XYDiscrete`](#module-GRANTA_MIScriptingToolkit.XYDiscrete) objects

#### *property* XYDiscretes

Property XYDiscretes is a list of [`XYDiscrete`](#module-GRANTA_MIScriptingToolkit.XYDiscrete) objects.
Warning: Do not attempt to edit or append to the returned value.

#### AddXYDiscrete(\_XYDiscrete)

Appends \_XYDiscrete to XYDiscretes property on XYDiscreteData C-object.

* **Parameters:**
  **\_XYDiscrete** – object of type XYDiscrete.

#### *property* c_obj

Pointer to the underlying C-object

### XYPoint

### *class* XYPoint(Y=None, isEstimated=None, parameterValue=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An x-y datum where the y-axis value is a point.

* **Parameters:**
  * **Y** – type float
  * **isEstimated** – type bool
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)

#### *property* isEstimated

Property isEstimated is of type bool.

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

#### *property* Y

Property Y is of type float.

#### *property* c_obj

Pointer to the underlying C-object

### XYRange

### *class* XYRange(isEstimated=None, lowerY=None, parameterValue=None, upperY=None, \_isOwner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An x-y datum where the y-axis value is a range.

* **Parameters:**
  * **isEstimated** – type bool
  * **lowerY** – type float
  * **parameterValue** – type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue)
  * **upperY** – type float

#### *property* isEstimated

Property isEstimated is of type bool.

#### *property* lowerY

Property lowerY is of type float.

#### *property* parameterValue

Property parameterValue is of type [`ParameterValue`](#module-GRANTA_MIScriptingToolkit.ParameterValue).

#### *property* upperY

Property upperY is of type float.

#### *property* c_obj

Pointer to the underlying C-object

<!-- Module contents -->
<!-- --------------- -->
<!-- .. automodule:: GRANTA_MIScriptingToolkit -->
<!-- :members: -->
<!-- :undoc-members: -->
<!-- :show-inheritance: -->
