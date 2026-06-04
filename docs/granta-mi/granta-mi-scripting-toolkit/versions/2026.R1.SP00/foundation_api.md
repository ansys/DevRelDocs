# Foundation API reference

<a id="foundation-api-reference"></a>

#### WARNING
Always consult your ACE representative before using the Foundation API. See [Foundation API](user_guide/package_overview.md#foundation-api) for more
information.

<a id="services-reference"></a>

## Services reference

<a id="browse-service"></a>

<a id="browseservice"></a>

### BrowseService

### *class* BrowseService(mi_session, retries=0)

The Browse service provides read-only operation for a Granta MI Server.

#### get_associated_records(\_req)

Returns all the Records, in a single target Table, that are associated with each of a given set of source Records, via Tabular Data links. These links can be in the forward or reverse direction. Note that, if there is more than one Tabular Attribute linking the source and target Tables, the Associated Records are the union of all those linked by each of the Tabular Attributes.

* **Parameters:**
  **\_req** ([`GetAssociatedRecordsRequest`](#module-ansys.grantami.backend.soap.GetAssociatedRecordsRequest) object)
* **Return type:**
  [`GetAssociatedRecordsResponse`](#module-ansys.grantami.backend.soap.GetAssociatedRecordsResponse) object

#### get_attribute_details(\_req)

Returns detailed meta-information about given Attribute(s) in a Granta MI Database. Does not retrieve values of the Data; for that, use the DataExport service.

* **Parameters:**
  **\_req** ([`GetAttributeDetailsRequest`](#module-ansys.grantami.backend.soap.GetAttributeDetailsRequest) object)
* **Return type:**
  [`GetAttributeDetailsResponse`](#module-ansys.grantami.backend.soap.GetAttributeDetailsResponse) object

#### get_attribute_parameters(\_req)

Gets detailed information about the Parameters that are declared to be usable with given Attribute(s) in a Granta MI Database. Can only be used with Functional Attributes or Multi-Valued Attributes.

* **Parameters:**
  **\_req** ([`GetAttributeParametersRequest`](#module-ansys.grantami.backend.soap.GetAttributeParametersRequest) object)
* **Return type:**
  [`GetAttributeParametersResponse`](#module-ansys.grantami.backend.soap.GetAttributeParametersResponse) object

#### get_child_nodes(\_req)

Returns information about the child nodes of the given node in the node-tree of a Granta MI Table.

* **Parameters:**
  **\_req** ([`GetChildNodes`](#module-ansys.grantami.backend.soap.GetChildNodes) object)
* **Return type:**
  [`GetChildNodesResponse`](#module-ansys.grantami.backend.soap.GetChildNodesResponse) object

#### get_currencies()

Returns the currencies available in the Granta MI Server.

* **Return type:**
  [`GetCurrenciesResponse`](#module-ansys.grantami.backend.soap.GetCurrenciesResponse) object

#### get_database_parameters(\_req)

List the parameter(s) in a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetDatabaseParameters`](#module-ansys.grantami.backend.soap.GetDatabaseParameters) object)
* **Return type:**
  [`GetDatabaseParametersResponse`](#module-ansys.grantami.backend.soap.GetDatabaseParametersResponse) object

#### get_databases()

List the databases available on the Granta MI Server.

* **Return type:**
  [`GetDatabasesResponse`](#module-ansys.grantami.backend.soap.GetDatabasesResponse) object

#### get_datasheet_path(\_req)

For each record reference gets the relative portion of an HTTP URL to a Granta MI datasheet, served by MI Viewer.

* **Parameters:**
  **\_req** ([`GetDatasheetPath`](#module-ansys.grantami.backend.soap.GetDatasheetPath) object)
* **Return type:**
  [`GetDatasheetPathResponse`](#module-ansys.grantami.backend.soap.GetDatasheetPathResponse) object

#### get_datasheet_path_parameterized(\_req)

Gets information that may be used to construct an HTTP URL to a Granta MI datasheet, served by MI Viewer.

* **Parameters:**
  **\_req** ([`GetDatasheetPathParameterized`](#module-ansys.grantami.backend.soap.GetDatasheetPathParameterized) object)
* **Return type:**
  [`GetDatasheetPathParameterizedResponse`](#module-ansys.grantami.backend.soap.GetDatasheetPathParameterizedResponse) object

#### get_integration_profiles(\_req)

List the profiles available on a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetIntegrationProfiles`](#module-ansys.grantami.backend.soap.GetIntegrationProfiles) object)
* **Return type:**
  [`GetIntegrationProfilesResponse`](#module-ansys.grantami.backend.soap.GetIntegrationProfilesResponse) object

#### get_layouts(\_req)

List the Layouts for an MI Database or for one Table in a Database.

* **Parameters:**
  **\_req** ([`GetLayouts`](#module-ansys.grantami.backend.soap.GetLayouts) object)
* **Return type:**
  [`GetLayoutsResponse`](#module-ansys.grantami.backend.soap.GetLayoutsResponse) object

#### get_linked_records(\_req)

Returns the linked records for specified records, for one or more record link groups.

* **Parameters:**
  **\_req** ([`GetLinkedRecordsRequest`](#module-ansys.grantami.backend.soap.GetLinkedRecordsRequest) object)
* **Return type:**
  [`GetLinkedRecordsResponse`](#module-ansys.grantami.backend.soap.GetLinkedRecordsResponse) object

#### get_meta_attributes(\_req)

Returns the Meta-Attributes of one or more parent Attributes in a Table of a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetMetaAttributesRequest`](#module-ansys.grantami.backend.soap.GetMetaAttributesRequest) object)
* **Return type:**
  [`GetMetaAttributesResponse`](#module-ansys.grantami.backend.soap.GetMetaAttributesResponse) object

#### get_parameter_details(\_req)

Returns detailed information about the given Parameter(s) in a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetParameterDetailsRequest`](#module-ansys.grantami.backend.soap.GetParameterDetailsRequest) object)
* **Return type:**
  [`GetParameterDetailsResponse`](#module-ansys.grantami.backend.soap.GetParameterDetailsResponse) object

#### get_record_attributes(\_req)

Returns information about which Attributes have Data, for given Record(s). Includes information about when Data was created and retired, in a Version-Controlled Table. Does not retrieve values of the Data; for that, use the DataExport or EngineeringData services.

* **Parameters:**
  **\_req** ([`GetRecordAttributesRequest`](#module-ansys.grantami.backend.soap.GetRecordAttributesRequest) object)
* **Return type:**
  [`GetRecordAttributesResponse`](#module-ansys.grantami.backend.soap.GetRecordAttributesResponse) object

#### get_record_link_groups(\_req)

Gets details of Record Link Groups in a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetRecordLinkGroups`](#module-ansys.grantami.backend.soap.GetRecordLinkGroups) object)
* **Return type:**
  [`GetRecordLinkGroupsResponse`](#module-ansys.grantami.backend.soap.GetRecordLinkGroupsResponse) object

#### get_record_versions(\_req)

Returns version information about the records specified in the request object.

* **Parameters:**
  **\_req** ([`GetRecordVersionsRequest`](#module-ansys.grantami.backend.soap.GetRecordVersionsRequest) object)
* **Return type:**
  [`GetRecordVersionsResponse`](#module-ansys.grantami.backend.soap.GetRecordVersionsResponse) object

#### get_root_node(\_req)

Returns information about the root node of a particular Table in a Granta MI Database. This can be passed to get_child_nodes operation to find the contents of the rest of the node-tree of the Table.

* **Parameters:**
  **\_req** ([`GetRootNode`](#module-ansys.grantami.backend.soap.GetRootNode) object)
* **Return type:**
  [`GetRootNodeResponse`](#module-ansys.grantami.backend.soap.GetRootNodeResponse) object

#### get_subsets(\_req)

List the Subsets for a Granta MI Database or for one Table in a Database.

* **Parameters:**
  **\_req** ([`GetSubsetsRequest`](#module-ansys.grantami.backend.soap.GetSubsetsRequest) object)
* **Return type:**
  [`GetSubsetsResponse`](#module-ansys.grantami.backend.soap.GetSubsetsResponse) object

#### get_tables(\_req)

List the tables contained in a particular Granta MI Database.

* **Parameters:**
  **\_req** ([`GetTables`](#module-ansys.grantami.backend.soap.GetTables) object)
* **Return type:**
  [`GetTablesResponse`](#module-ansys.grantami.backend.soap.GetTablesResponse) object

#### get_tree_records(\_req)

Returns name, record type, and some tree information for the given record(s). Does not retrieve the tree children; for that, use the get_child_records operation.

* **Parameters:**
  **\_req** ([`GetTreeRecordsRequest`](#module-ansys.grantami.backend.soap.GetTreeRecordsRequest) object)
* **Return type:**
  [`GetTreeRecordsResponse`](#module-ansys.grantami.backend.soap.GetTreeRecordsResponse) object

#### get_unit_conversions(\_req)

Gets all the unit conversions available for a specified unit or unit system.

* **Parameters:**
  **\_req** ([`GetUnitConversionsRequest`](#module-ansys.grantami.backend.soap.GetUnitConversionsRequest) object)
* **Return type:**
  [`GetUnitConversionsResponse`](#module-ansys.grantami.backend.soap.GetUnitConversionsResponse) object

#### get_unit_systems(\_req)

Returns information about the unit systems known to a Granta MI Database

* **Parameters:**
  **\_req** ([`GetUnitSystems`](#module-ansys.grantami.backend.soap.GetUnitSystems) object)
* **Return type:**
  [`GetUnitSystemsResponse`](#module-ansys.grantami.backend.soap.GetUnitSystemsResponse) object

#### get_units(\_req)

Returns information about the units known to one or more Granta MI Databases

* **Parameters:**
  **\_req** ([`GetUnits`](#module-ansys.grantami.backend.soap.GetUnits) object)
* **Return type:**
  [`GetUnitsResponse`](#module-ansys.grantami.backend.soap.GetUnitsResponse) object

#### resolve_references(\_req)

Checks whether the specified Granta MI entities exist in the database and, if so, whether the current user has read permissions or write permissions for it.

* **Parameters:**
  **\_req** ([`ResolveReferencesRequest`](#module-ansys.grantami.backend.soap.ResolveReferencesRequest) object)
* **Return type:**
  [`ResolveReferencesResponse`](#module-ansys.grantami.backend.soap.ResolveReferencesResponse) object

<a id="search-service"></a>

<a id="searchservice"></a>

### SearchService

### *class* SearchService(mi_session, retries=0)

The Search service finds Records, within Granta MI Databases, matching specified criteria.

#### criteria_search(\_req)

Searches for records matching attribute-based criteria.

* **Parameters:**
  **\_req** ([`CriteriaSearch`](#module-ansys.grantami.backend.soap.CriteriaSearch) object)
* **Return type:**
  [`SimpleTextSearchResponse`](#module-ansys.grantami.backend.soap.SimpleTextSearchResponse) object

#### record_name_search(\_req)

Searches for Records with a given exact Record name.

* **Parameters:**
  **\_req** ([`RecordNameSearchRequest`](#module-ansys.grantami.backend.soap.RecordNameSearchRequest) object)
* **Return type:**
  [`SimpleTextSearchResponse`](#module-ansys.grantami.backend.soap.SimpleTextSearchResponse) object

#### simple_text_search(\_req)

Searches for records matching simple text criteria.

* **Parameters:**
  **\_req** ([`SimpleTextSearch`](#module-ansys.grantami.backend.soap.SimpleTextSearch) object)
* **Return type:**
  [`SimpleTextSearchResponse`](#module-ansys.grantami.backend.soap.SimpleTextSearchResponse) object

<a id="data-import-service"></a>

<a id="dataimportservice"></a>

### DataImportService

### *class* DataImportService(mi_session, retries=0)

The DataImport service writes data to attributes of records in Granta MI Databases.

#### delete_or_withdraw_if_latest_record_version(\_req)

Deletes or withdraws the latest version of the specified record(s). In a version-controlled table, the latest version of a record can be seen by Write users in Edit mode of MI Viewer. This operation will revert (or delete) unreleased record versions, withdraw released versions, and skip withdrawn versions. In a non-version-controlled table, records will only have one version. This operation will delete specified records of this type. Note: this operation will only act on the latest record version. In the case where the specified record corresponds to a record version that is an earlier version, the operation will return a fault.

* **Parameters:**
  **\_req** ([`DeleteOrWithdrawIfLatestRecordVersionRequest`](#module-ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionRequest) object)
* **Return type:**
  [`DeleteOrWithdrawIfLatestRecordVersionResponse`](#module-ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionResponse) object

#### ensure_record_folder_paths(\_req)

Checks whether given hierarchies of folders exist, creating them if not. Each hierarchy is specified as a sequence of tree names; where the folder needs to be created, this name is also used as the full name of the created folder. New folders will be assigned to their parents’ subsets; existing folders are not assigned or removed from any subsets. If a colour is specified, new folders will be of that colour; existing folders’ colours are never changed. Note: this operation can accept an arbitrary number of Record Folder paths to be ensured, but in practice there is a limit to the amount of changes that can be done in a single operation.

* **Parameters:**
  **\_req** ([`EnsureRecordFolderPathsRequest`](#module-ansys.grantami.backend.soap.EnsureRecordFolderPathsRequest) object)
* **Return type:**
  [`EnsureRecordFolderPathsResponse`](#module-ansys.grantami.backend.soap.EnsureRecordFolderPathsResponse) object

#### get_upload_addresses(\_req)

Returns an address to which a datum can be uploaded, for each combination of given sets of records and attributes in a Granta MI database. Each address will be an HTTP or HTTPS URL. The upload service only supports a subset of all available Granta MI attribute types, but this operation will give an address for an attribute of any type.

* **Parameters:**
  **\_req** ([`GetUploadAddressesRequest`](#module-ansys.grantami.backend.soap.GetUploadAddressesRequest) object)
* **Return type:**
  [`GetUploadAddressesResponse`](#module-ansys.grantami.backend.soap.GetUploadAddressesResponse) object

#### modify_record_links(\_req)

Adds or removes static Links between record(s) in a Granta MI Database.

* **Parameters:**
  **\_req** ([`ModifyRecordLinksRequest`](#module-ansys.grantami.backend.soap.ModifyRecordLinksRequest) object)
* **Return type:**
  [`ModifyRecordLinksResponse`](#module-ansys.grantami.backend.soap.ModifyRecordLinksResponse) object

#### set_record_attributes(\_req)

Sets the data values for the given attribute(s) and record(s) in a Granta MI Database. This method will create any records or folders which do not already exist in the database (however, new folders should be created with ‘EnsureRecordFolderPaths’ instead). Note: This operation can accept an arbitrary number of attributes and records to be imported, but in practice there is a fairly low limit to the amount of data that can be imported in a single operation. Client code should perform large imports in small chunks.

* **Parameters:**
  **\_req** ([`SetRecordAttributesRequest`](#module-ansys.grantami.backend.soap.SetRecordAttributesRequest) object)
* **Return type:**
  [`SetRecordAttributesResponse`](#module-ansys.grantami.backend.soap.SetRecordAttributesResponse) object

<a id="data-export-service"></a>

<a id="dataexportservice"></a>

### DataExportService

### *class* DataExportService(mi_session, retries=0)

The DataExport service retrieves and returns data from attributes of records in Granta MI Databases.

#### get_record_attributes_by_ref(\_req)

Retrieves the data values for the given attribute(s) and record(s) in a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetRecordAttributesByRefRequest`](#module-ansys.grantami.backend.soap.GetRecordAttributesByRefRequest) object)
* **Return type:**
  [`GetRecordAttributesByRefResponse`](#module-ansys.grantami.backend.soap.GetRecordAttributesByRefResponse) object

<a id="engineering-data-service"></a>

<a id="engineeringdataservice"></a>

### EngineeringDataService

### *class* EngineeringDataService(mi_session, retries=0)

The EngineeringData service provides custom data export operations for a Granta MI Server.

#### export_record_data(\_req)

Performs an FEA Export and returns the result as the response.

* **Parameters:**
  **\_req** ([`ExportRecordDataRequest`](#module-ansys.grantami.backend.soap.ExportRecordDataRequest) object)
* **Return type:**
  [`ExportRecordDataResponse`](#module-ansys.grantami.backend.soap.ExportRecordDataResponse) object

#### exporters_for_records(\_req)

Returns the FEA Exporter configurations, known to the MI Server, filtering for their applicability to given Record(s) and optionally to particular situations.

* **Parameters:**
  **\_req** ([`ExportersForRecordsRequest`](#module-ansys.grantami.backend.soap.ExportersForRecordsRequest) object)
* **Return type:**
  [`ExportersForRecordsResponse`](#module-ansys.grantami.backend.soap.ExportersForRecordsResponse) object

#### get_available_exporters(\_req)

Returns the FEA Exporter configurations known to the MI Server, optionally filtering for their applicability to particular situations.

* **Parameters:**
  **\_req** ([`GetAvailableExportersRequest`](#module-ansys.grantami.backend.soap.GetAvailableExportersRequest) object)
* **Return type:**
  [`GetAvailableExportersResponse`](#module-ansys.grantami.backend.soap.GetAvailableExportersResponse) object

#### get_exporter_parameters(\_req)

Returns information about the MI Parameter Values that will need to be chosen, to run the specified Exporter on the specified Record(s).

* **Parameters:**
  **\_req** ([`GetExporterParametersRequest`](#module-ansys.grantami.backend.soap.GetExporterParametersRequest) object)
* **Return type:**
  [`GetExporterParametersResponse`](#module-ansys.grantami.backend.soap.GetExporterParametersResponse) object

<a id="record-manipulator-service"></a>

<a id="recordmanipulatorservice"></a>

### RecordManipulatorService

### *class* RecordManipulatorService(mi_session, retries=0)

The Record Manipulator service provides a way to move a record whilst preserving its metadata and attribute values.

#### move_record(\_req)

Reparents a record. Metadata such as creation date will be preserved, along with attribute values.

* **Parameters:**
  **\_req** ([`RecordMoveRequest`](#module-ansys.grantami.backend.soap.RecordMoveRequest) object)
* **Return type:**
  [`EmptyRestResponse`](#module-ansys.grantami.backend.soap.EmptyRestResponse) object

<a id="objects-reference"></a>

## Objects reference

<a id="module-ansys.grantami.backend.soap.AssociatedRecords"></a>

<a id="associatedrecords"></a>

### AssociatedRecords

<a id="ansys.grantami.backend.soap.AssociatedRecords.AssociatedRecords"></a>

### *class* AssociatedRecords(associated_records=None, source_record=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object containing a source [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) object and an array
of associated [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

* **Parameters:**
  * **associated_records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **source_record** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.AssociatedRecords.AssociatedRecords.associated_records"></a>

#### *property* associated_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property associated_records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.AssociatedRecords.AssociatedRecords.source_record"></a>

#### *property* source_record *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property source_record is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.AttributeAddress"></a>

<a id="attributeaddress"></a>

### AttributeAddress

<a id="ansys.grantami.backend.soap.AttributeAddress.AttributeAddress"></a>

### *class* AttributeAddress(url=None, attribute_id=None, attribute_name=None, attribute_standard_name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The upload URL of an attribute and an attribute identifier.
The attribute is identified by the identity, name, and where available, standard name.

* **Parameters:**
  * **url** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **attribute_id** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **attribute_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **attribute_standard_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.AttributeAddress.AttributeAddress.attribute_id"></a>

#### *property* attribute_id *: [int](https://docs.python.org/3/library/functions.html#int)*

Property attribute_id is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.AttributeAddress.AttributeAddress.attribute_name"></a>

#### *property* attribute_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property attribute_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeAddress.AttributeAddress.attribute_standard_name"></a>

#### *property* attribute_standard_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property attribute_standard_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeAddress.AttributeAddress.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property url is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.AttributeCategory"></a>

<a id="attributecategory"></a>

### AttributeCategory

<a id="ansys.grantami.backend.soap.AttributeCategory.AttributeCategory"></a>

### *class* AttributeCategory(category_attribute_details=None, name=None, order=None, record_link_group_details=None, display_names=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Gives the details of contents of a category in a layout. Does not include Tabular Data Association
Chains.

* **Parameters:**
  * **category_attribute_details** (list of [`CategoryAttributeDetail`](#module-ansys.grantami.backend.soap.CategoryAttributeDetail))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **order** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **record_link_group_details** (list of [`RecordLinkGroupDetail`](#module-ansys.grantami.backend.soap.RecordLinkGroupDetail))
  * **display_names** (list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName))

<a id="ansys.grantami.backend.soap.AttributeCategory.AttributeCategory.add_category_attribute_detail"></a>

#### add_category_attribute_detail(\_categoryAttributeDetail)

Appends \_categoryAttributeDetail to categoryAttributeDetails property on AttributeCategory C-object.

* **Parameters:**
  **\_categoryAttributeDetail** ([`CategoryAttributeDetail`](#module-ansys.grantami.backend.soap.CategoryAttributeDetail))

<a id="ansys.grantami.backend.soap.AttributeCategory.AttributeCategory.add_record_link_group_detail"></a>

#### add_record_link_group_detail(\_recordLinkGroupDetail)

Appends \_recordLinkGroupDetail to recordLinkGroupDetails property on AttributeCategory C-object.

* **Parameters:**
  **\_recordLinkGroupDetail** ([`RecordLinkGroupDetail`](#module-ansys.grantami.backend.soap.RecordLinkGroupDetail))

<a id="ansys.grantami.backend.soap.AttributeCategory.AttributeCategory.category_attribute_details"></a>

#### *property* category_attribute_details *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[CategoryAttributeDetail](#ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail)]*

Property category_attribute_details is a list of [`CategoryAttributeDetail`](#module-ansys.grantami.backend.soap.CategoryAttributeDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`CategoryAttributeDetail`](#module-ansys.grantami.backend.soap.CategoryAttributeDetail)

<a id="ansys.grantami.backend.soap.AttributeCategory.AttributeCategory.display_names"></a>

#### *property* display_names *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DisplayName](#ansys.grantami.backend.soap.DisplayName.DisplayName)]*

Property display_names is a list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName)

<a id="ansys.grantami.backend.soap.AttributeCategory.AttributeCategory.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeCategory.AttributeCategory.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int)*

Property order is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.AttributeCategory.AttributeCategory.record_link_group_details"></a>

#### *property* record_link_group_details *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordLinkGroupDetail](#ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail)]*

Property record_link_group_details is a list of [`RecordLinkGroupDetail`](#module-ansys.grantami.backend.soap.RecordLinkGroupDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordLinkGroupDetail`](#module-ansys.grantami.backend.soap.RecordLinkGroupDetail)

<a id="module-ansys.grantami.backend.soap.AttributeDetail"></a>

<a id="attributedetail"></a>

### AttributeDetail

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail"></a>

### *class* AttributeDetail(about=None, attribute=None, axis_name=None, chartable=None, database_unit=None, default_threshold=None, discrete_values=None, identity=None, is_meta=None, is_multi_valued=None, is_searchable=None, is_unique=None, min_max=None, name=None, order=None, revision_info=None, tabular=None, type_=None, is_functional_range=None, is_ordered=None, display_names=None, data_rule=None, help_info=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about an attribute in a Granta MI database.
Does not include values of the attribute. For requests, the name, and type are required.

* **Parameters:**
  * **about** ([`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute))
  * **attribute** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **axis_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **chartable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **database_unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **default_threshold** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **discrete_values** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **identity** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **is_meta** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_multi_valued** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_searchable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_unique** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **min_max** ([`MinMax`](#module-ansys.grantami.backend.soap.MinMax))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **order** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **revision_info** ([`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo))
  * **tabular** ([`TabularDetail`](#module-ansys.grantami.backend.soap.TabularDetail))
  * **type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **is_functional_range** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_ordered** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **display_names** (list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName))
  * **data_rule** ([`DataRule`](#module-ansys.grantami.backend.soap.DataRule))
  * **help_info** ([`HelpInfo`](#module-ansys.grantami.backend.soap.HelpInfo))

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.about"></a>

#### *property* about *: [NamedAttribute](#ansys.grantami.backend.soap.NamedAttribute.NamedAttribute)*

Property about is of type [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute). Only populated if ‘isMeta’ is True.

* **Return type:**
  [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.attribute"></a>

#### *property* attribute *: [AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)*

Property attribute is of type [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference).

* **Return type:**
  [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.axis_name"></a>

#### *property* axis_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property axis_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.chartable"></a>

#### *property* chartable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property chartable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.data_rule"></a>

#### *property* data_rule *: [DataRule](#ansys.grantami.backend.soap.DataRule.DataRule)*

Property data_rule is of type [`DataRule`](#module-ansys.grantami.backend.soap.DataRule).

* **Return type:**
  [`DataRule`](#module-ansys.grantami.backend.soap.DataRule)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.database_unit"></a>

#### *property* database_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property database_unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.default_threshold"></a>

#### *property* default_threshold *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property default_threshold is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.discrete_values"></a>

#### *property* discrete_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property discrete_values is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.display_names"></a>

#### *property* display_names *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DisplayName](#ansys.grantami.backend.soap.DisplayName.DisplayName)]*

Property display_names is a list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.help_info"></a>

#### *property* help_info *: [HelpInfo](#ansys.grantami.backend.soap.HelpInfo.HelpInfo)*

Property help_info is of type [`HelpInfo`](#module-ansys.grantami.backend.soap.HelpInfo).

* **Return type:**
  [`HelpInfo`](#module-ansys.grantami.backend.soap.HelpInfo)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.identity"></a>

#### *property* identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.is_functional_range"></a>

#### *property* is_functional_range *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_functional_range is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.is_meta"></a>

#### *property* is_meta *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_meta is of type bool. If this is True, the ‘about’ property may have additional information about the related parent attribute.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.is_multi_valued"></a>

#### *property* is_multi_valued *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_multi_valued is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.is_ordered"></a>

#### *property* is_ordered *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_ordered is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.is_searchable"></a>

#### *property* is_searchable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_searchable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.is_unique"></a>

#### *property* is_unique *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_unique is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.min_max"></a>

#### *property* min_max *: [MinMax](#ansys.grantami.backend.soap.MinMax.MinMax)*

Property min_max is of type [`MinMax`](#module-ansys.grantami.backend.soap.MinMax).

* **Return type:**
  [`MinMax`](#module-ansys.grantami.backend.soap.MinMax)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int)*

Property order is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.revision_info"></a>

#### *property* revision_info *: [RevisionInfo](#ansys.grantami.backend.soap.RevisionInfo.RevisionInfo)*

Property revision_info is of type [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo).

* **Return type:**
  [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.tabular"></a>

#### *property* tabular *: [TabularDetail](#ansys.grantami.backend.soap.TabularDetail.TabularDetail)*

Property tabular is of type [`TabularDetail`](#module-ansys.grantami.backend.soap.TabularDetail).

* **Return type:**
  [`TabularDetail`](#module-ansys.grantami.backend.soap.TabularDetail)

<a id="ansys.grantami.backend.soap.AttributeDetail.AttributeDetail.type_"></a>

#### *property* type_ *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property type_ is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.AttributeExporterParameters"></a>

<a id="attributeexporterparameters"></a>

### AttributeExporterParameters

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters"></a>

### *class* AttributeExporterParameters(attribute=None, data_presence=None, graph_domains=None, parameters=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain an attribute along with associated parameters and domains.
All [`Parameters`](#module-ansys.grantami.backend.soap.Parameters) are declared on the MI parameterised Attribute,
even if not used in some combination of [`Exporter`](#module-ansys.grantami.backend.soap.Exporter) and Record.
It also contains the possible domains in which the fixed Parameter values must be chosen.

* **Parameters:**
  * **attribute** ([`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute))
  * **data_presence** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **graph_domains** (list of [`GraphDomain`](#module-ansys.grantami.backend.soap.GraphDomain))
  * **parameters** (list of [`ExporterParameter`](#module-ansys.grantami.backend.soap.ExporterParameter))

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.DataPresence"></a>

#### *class* DataPresence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.DataPresence.DataIncompatibleWithConfiguration"></a>

#### DataIncompatibleWithConfiguration *= 4*

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.DataPresence.Missing"></a>

#### Missing *= 3*

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.DataPresence.NotApplicable"></a>

#### NotApplicable *= 2*

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.DataPresence.Present"></a>

#### Present *= 1*

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.DataPresence.Unknown"></a>

#### Unknown *= 0*

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.add_graph_domain"></a>

#### add_graph_domain(\_graphDomain)

Appends \_graphDomain to graphDomains property on AttributeExporterParameters C-object.

* **Parameters:**
  **\_graphDomain** ([`GraphDomain`](#module-ansys.grantami.backend.soap.GraphDomain))

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.add_parameter"></a>

#### add_parameter(\_exporterParameter)

Appends \_exporterParameter to parameters property on AttributeExporterParameters C-object.

* **Parameters:**
  **\_exporterParameter** ([`ExporterParameter`](#module-ansys.grantami.backend.soap.ExporterParameter))

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.attribute"></a>

#### *property* attribute *: [NamedAttribute](#ansys.grantami.backend.soap.NamedAttribute.NamedAttribute)*

Property attribute is of type [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute).

* **Return type:**
  [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute)

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.data_presence"></a>

#### *property* data_presence *: [int](https://docs.python.org/3/library/functions.html#int)*

Property data_presence is of type int. See [`AttributeExporterParameters.DataPresence`](#ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.DataPresence) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.graph_domains"></a>

#### *property* graph_domains *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[GraphDomain](#ansys.grantami.backend.soap.GraphDomain.GraphDomain)]*

Property graph_domains is a list of [`GraphDomain`](#module-ansys.grantami.backend.soap.GraphDomain) objects. Each graph domain contains information on the possible values that the corresponding parameter (by list index) can take.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`GraphDomain`](#module-ansys.grantami.backend.soap.GraphDomain)

<a id="ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters.parameters"></a>

#### *property* parameters *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ExporterParameter](#ansys.grantami.backend.soap.ExporterParameter.ExporterParameter)]*

Property parameters is a list of [`ExporterParameter`](#module-ansys.grantami.backend.soap.ExporterParameter) objects. This is a list of parameters that parameterize the attribute in question.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ExporterParameter`](#module-ansys.grantami.backend.soap.ExporterParameter)

<a id="module-ansys.grantami.backend.soap.AttributeMetaAttributes"></a>

<a id="attributemetaattributes"></a>

### AttributeMetaAttributes

<a id="ansys.grantami.backend.soap.AttributeMetaAttributes.AttributeMetaAttributes"></a>

### *class* AttributeMetaAttributes(meta_attributes=None, parent_attribute=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Lists the Meta-Attributes of a particular Attribute in a Granta MI Database Table.

* **Parameters:**
  * **meta_attributes** (list of [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute))
  * **parent_attribute** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.AttributeMetaAttributes.AttributeMetaAttributes.meta_attributes"></a>

#### *property* meta_attributes *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[NamedAttribute](#ansys.grantami.backend.soap.NamedAttribute.NamedAttribute)]*

Property meta_attributes is a list of [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute)

<a id="ansys.grantami.backend.soap.AttributeMetaAttributes.AttributeMetaAttributes.parent_attribute"></a>

#### *property* parent_attribute *: [AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)*

Property parent_attribute is of type [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference).

* **Return type:**
  [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="module-ansys.grantami.backend.soap.AttributeReference"></a>

<a id="attributereference"></a>

### AttributeReference

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference"></a>

### *class* AttributeReference(db_key=None, attribute_id=None, is_standard_name=None, name=None, partial_table_reference=None, pseudo_attribute=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Identification of a particular attribute in a Granta MI database.
For requests, a db_key is required and either the attribute ID or the attribute name. If the name is
not a standard name, then a partial_table_reference is also required.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **attribute_id** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **is_standard_name** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **partial_table_reference** ([`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference))
  * **pseudo_attribute** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference"></a>

#### *class* MIPseudoAttributeReference

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.createdDate"></a>

#### createdDate *= 21*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.creator"></a>

#### creator *= 22*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.lastModifier"></a>

#### lastModifier *= 23*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.modifiedDate"></a>

#### modifiedDate *= 4*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.name"></a>

#### name *= 0*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.parentName"></a>

#### parentName *= 17*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.parentRecordHistoryGUID"></a>

#### parentRecordHistoryGUID *= 20*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.parentRecordHistoryIdentity"></a>

#### parentRecordHistoryIdentity *= 19*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.parentShortName"></a>

#### parentShortName *= 18*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordColor"></a>

#### recordColor *= 7*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordGUID"></a>

#### recordGUID *= 10*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordHistoryGUID"></a>

#### recordHistoryGUID *= 11*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordHistoryIdentity"></a>

#### recordHistoryIdentity *= 6*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordType"></a>

#### recordType *= 5*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.recordVersionNumber"></a>

#### recordVersionNumber *= 12*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.releasedDate"></a>

#### releasedDate *= 3*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.shortName"></a>

#### shortName *= 1*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.subsets"></a>

#### subsets *= 2*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.tableName"></a>

#### tableName *= 13*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference.writable"></a>

#### writable *= 16*

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.attribute_id"></a>

#### *property* attribute_id *: [int](https://docs.python.org/3/library/functions.html#int)*

Property attribute_id is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.is_standard_name"></a>

#### *property* is_standard_name *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_standard_name is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.partial_table_reference"></a>

#### *property* partial_table_reference *: [PartialTableReference](#ansys.grantami.backend.soap.PartialTableReference.PartialTableReference)*

Property partial_table_reference is of type [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference).

* **Return type:**
  [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference)

<a id="ansys.grantami.backend.soap.AttributeReference.AttributeReference.pseudo_attribute"></a>

#### *property* pseudo_attribute *: [int](https://docs.python.org/3/library/functions.html#int)*

Property pseudo_attribute is of type int. See [`AttributeReference.MIPseudoAttributeReference`](#ansys.grantami.backend.soap.AttributeReference.AttributeReference.MIPseudoAttributeReference) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.AttributeValue"></a>

<a id="attributevalue"></a>

### AttributeValue

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue"></a>

### *class* AttributeValue(attribute_id=None, attribute_name=None, attribute_standard_name=None, data_type=None, discrete_data_value=None, hyperlink_data_value=None, integer_data_value=None, logical_data_value=None, date_data_value=None, date_time_data_value=None, discrete_functional_gridded_data_value=None, discrete_functional_series_data_value=None, file_data_value=None, float_functional_gridded_data_value=None, float_functional_series_data_value=None, long_text_data_value=None, picture_data_value=None, point_data_value=None, range_data_value=None, short_text_data_value=None, subsets_data_value=None, tabular_data_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type representing the value of a piece of data for a particular attribute. Access supported data
types, and the attribute identity by Name, ID, or Standard Name.

* **Parameters:**
  * **attribute_id** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **attribute_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **attribute_standard_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **data_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **discrete_data_value** ([`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType))
  * **hyperlink_data_value** ([`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType))
  * **integer_data_value** ([`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType))
  * **logical_data_value** ([`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType))
  * **date_data_value** ([`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType))
  * **date_time_data_value** ([`DateTimeDataType`](#module-ansys.grantami.backend.soap.DateTimeDataType))
  * **discrete_functional_gridded_data_value** ([`DiscreteFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType))
  * **discrete_functional_series_data_value** ([`DiscreteFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType))
  * **file_data_value** ([`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType))
  * **float_functional_gridded_data_value** ([`FloatFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType))
  * **float_functional_series_data_value** ([`FloatFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType))
  * **long_text_data_value** ([`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType))
  * **picture_data_value** ([`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType))
  * **point_data_value** ([`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType))
  * **range_data_value** ([`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType))
  * **short_text_data_value** ([`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType))
  * **subsets_data_value** ([`SubsetsDataType`](#module-ansys.grantami.backend.soap.SubsetsDataType))
  * **tabular_data_value** ([`TabularDataType`](#module-ansys.grantami.backend.soap.TabularDataType))

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.attribute_id"></a>

#### *property* attribute_id *: [int](https://docs.python.org/3/library/functions.html#int)*

Property attribute_id is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.attribute_name"></a>

#### *property* attribute_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property attribute_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.attribute_standard_name"></a>

#### *property* attribute_standard_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property attribute_standard_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.data_type"></a>

#### *property* data_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property data_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.date_data_value"></a>

#### *property* date_data_value *: [DateDataType](#ansys.grantami.backend.soap.DateDataType.DateDataType)*

Property date_data_value is of type [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType).

* **Return type:**
  [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.date_time_data_value"></a>

#### *property* date_time_data_value *: [DateTimeDataType](#ansys.grantami.backend.soap.DateTimeDataType.DateTimeDataType)*

Property date_time_data_value is of type [`DateTimeDataType`](#module-ansys.grantami.backend.soap.DateTimeDataType).

* **Return type:**
  [`DateTimeDataType`](#module-ansys.grantami.backend.soap.DateTimeDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.discrete_data_value"></a>

#### *property* discrete_data_value *: [DiscreteDataType](#ansys.grantami.backend.soap.DiscreteDataType.DiscreteDataType)*

Property discrete_data_value is of type [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType).

* **Return type:**
  [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.discrete_functional_gridded_data_value"></a>

#### *property* discrete_functional_gridded_data_value *: [DiscreteFunctionalGriddedDataType](#ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType)*

Property discrete_functional_gridded_data_value is of type [`DiscreteFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType).

* **Return type:**
  [`DiscreteFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.discrete_functional_series_data_value"></a>

#### *property* discrete_functional_series_data_value *: [DiscreteFunctionalSeriesDataType](#ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType)*

Property discrete_functional_series_data_value is of type [`DiscreteFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType).

* **Return type:**
  [`DiscreteFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.file_data_value"></a>

#### *property* file_data_value *: [FileDataType](#ansys.grantami.backend.soap.FileDataType.FileDataType)*

Property file_data_value is of type [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType).

* **Return type:**
  [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.float_functional_gridded_data_value"></a>

#### *property* float_functional_gridded_data_value *: [FloatFunctionalGriddedDataType](#ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType)*

Property float_functional_gridded_data_value is of type [`FloatFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType).

* **Return type:**
  [`FloatFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.float_functional_series_data_value"></a>

#### *property* float_functional_series_data_value *: [FloatFunctionalSeriesDataType](#ansys.grantami.backend.soap.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType)*

Property float_functional_series_data_value is of type [`FloatFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType).

* **Return type:**
  [`FloatFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.hyperlink_data_value"></a>

#### *property* hyperlink_data_value *: [HyperlinkDataType](#ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType)*

Property hyperlink_data_value is of type [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType).

* **Return type:**
  [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.integer_data_value"></a>

#### *property* integer_data_value *: [IntegerDataType](#ansys.grantami.backend.soap.IntegerDataType.IntegerDataType)*

Property integer_data_value is of type [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType).

* **Return type:**
  [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.logical_data_value"></a>

#### *property* logical_data_value *: [LogicalDataType](#ansys.grantami.backend.soap.LogicalDataType.LogicalDataType)*

Property logical_data_value is of type [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType).

* **Return type:**
  [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.long_text_data_value"></a>

#### *property* long_text_data_value *: [LongTextDataType](#ansys.grantami.backend.soap.LongTextDataType.LongTextDataType)*

Property long_text_data_value is of type [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType).

* **Return type:**
  [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.picture_data_value"></a>

#### *property* picture_data_value *: [PictureDataType](#ansys.grantami.backend.soap.PictureDataType.PictureDataType)*

Property picture_data_value is of type [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType).

* **Return type:**
  [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.point_data_value"></a>

#### *property* point_data_value *: [PointDataType](#ansys.grantami.backend.soap.PointDataType.PointDataType)*

Property point_data_value is of type [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType).

* **Return type:**
  [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.range_data_value"></a>

#### *property* range_data_value *: [RangeDataType](#ansys.grantami.backend.soap.RangeDataType.RangeDataType)*

Property range_data_value is of type [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType).

* **Return type:**
  [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.short_text_data_value"></a>

#### *property* short_text_data_value *: [ShortTextDataType](#ansys.grantami.backend.soap.ShortTextDataType.ShortTextDataType)*

Property short_text_data_value is of type [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType).

* **Return type:**
  [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.subsets_data_value"></a>

#### *property* subsets_data_value *: [SubsetsDataType](#ansys.grantami.backend.soap.SubsetsDataType.SubsetsDataType)*

Property subsets_data_value is of type [`SubsetsDataType`](#module-ansys.grantami.backend.soap.SubsetsDataType).

* **Return type:**
  [`SubsetsDataType`](#module-ansys.grantami.backend.soap.SubsetsDataType)

<a id="ansys.grantami.backend.soap.AttributeValue.AttributeValue.tabular_data_value"></a>

#### *property* tabular_data_value *: [TabularDataType](#ansys.grantami.backend.soap.TabularDataType.TabularDataType)*

Property tabular_data_value is of type [`TabularDataType`](#module-ansys.grantami.backend.soap.TabularDataType).

* **Return type:**
  [`TabularDataType`](#module-ansys.grantami.backend.soap.TabularDataType)

<a id="module-ansys.grantami.backend.soap.BetweenDateTimesSearchValue"></a>

<a id="betweendatetimessearchvalue"></a>

### BetweenDateTimesSearchValue

<a id="ansys.grantami.backend.soap.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue"></a>

### *class* BetweenDateTimesSearchValue(high_end=None, low_end=None, tabular_column=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data between two times.
This criterion type is specific to DateTime Attributes. Both a low_end and a high_end value are
required. The date format is in XSD’s dateTime data type (YYYY-MM-DDThh:mm:ss).

* **Parameters:**
  * **high_end** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **low_end** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue.high_end"></a>

#### *property* high_end *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property high_end is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue.low_end"></a>

#### *property* low_end *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property low_end is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.BetweenSearchValue"></a>

<a id="betweensearchvalue"></a>

### BetweenSearchValue

<a id="ansys.grantami.backend.soap.BetweenSearchValue.BetweenSearchValue"></a>

### *class* BetweenSearchValue(high_end=None, low_end=None, tabular_column=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data between two values.
Only Point, Range, and Integer attributes are supported by this search criteria. Both a low_end and
a high_end value are required.

* **Parameters:**
  * **high_end** ([`HighEndSearchValue`](#module-ansys.grantami.backend.soap.HighEndSearchValue))
  * **low_end** ([`LowEndSearchValue`](#module-ansys.grantami.backend.soap.LowEndSearchValue))
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.BetweenSearchValue.BetweenSearchValue.high_end"></a>

#### *property* high_end *: [HighEndSearchValue](#ansys.grantami.backend.soap.HighEndSearchValue.HighEndSearchValue)*

Property high_end is of type [`HighEndSearchValue`](#module-ansys.grantami.backend.soap.HighEndSearchValue).

* **Return type:**
  [`HighEndSearchValue`](#module-ansys.grantami.backend.soap.HighEndSearchValue)

<a id="ansys.grantami.backend.soap.BetweenSearchValue.BetweenSearchValue.low_end"></a>

#### *property* low_end *: [LowEndSearchValue](#ansys.grantami.backend.soap.LowEndSearchValue.LowEndSearchValue)*

Property low_end is of type [`LowEndSearchValue`](#module-ansys.grantami.backend.soap.LowEndSearchValue).

* **Return type:**
  [`LowEndSearchValue`](#module-ansys.grantami.backend.soap.LowEndSearchValue)

<a id="ansys.grantami.backend.soap.BetweenSearchValue.BetweenSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.BinaryDataSettings"></a>

<a id="binarydatasettings"></a>

### BinaryDataSettings

<a id="ansys.grantami.backend.soap.BinaryDataSettings.BinaryDataSettings"></a>

### *class* BinaryDataSettings(binary_data_representation=None, max_image_size=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Settings for exporting file and picture data.

* **Parameters:**
  * **binary_data_representation** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **max_image_size** ([`RasterSize`](#module-ansys.grantami.backend.soap.RasterSize))

<a id="ansys.grantami.backend.soap.BinaryDataSettings.BinaryDataSettings.binary_data_representation"></a>

#### *property* binary_data_representation *: [int](https://docs.python.org/3/library/functions.html#int)*

Property binary_data_representation is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.BinaryDataSettings.BinaryDataSettings.max_image_size"></a>

#### *property* max_image_size *: [RasterSize](#ansys.grantami.backend.soap.RasterSize.RasterSize)*

Property max_image_size is of type [`RasterSize`](#module-ansys.grantami.backend.soap.RasterSize).

* **Return type:**
  [`RasterSize`](#module-ansys.grantami.backend.soap.RasterSize)

<a id="id1"></a>

### BrowseService

<a id="module-ansys.grantami.backend.soap.BrowseService"></a>

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService"></a>

### *class* BrowseService(mi_session, retries=0)

Bases: [`Service`](#ansys.grantami.backend.soap.Service.Service)

The Browse service provides read-only operation for a Granta MI Server.

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_associated_records"></a>

#### get_associated_records(\_req)

Returns all the Records, in a single target Table, that are associated with each of a given set of source Records, via Tabular Data links. These links can be in the forward or reverse direction. Note that, if there is more than one Tabular Attribute linking the source and target Tables, the Associated Records are the union of all those linked by each of the Tabular Attributes.

* **Parameters:**
  **\_req** ([`GetAssociatedRecordsRequest`](#module-ansys.grantami.backend.soap.GetAssociatedRecordsRequest) object)
* **Return type:**
  [`GetAssociatedRecordsResponse`](#module-ansys.grantami.backend.soap.GetAssociatedRecordsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_attribute_details"></a>

#### get_attribute_details(\_req)

Returns detailed meta-information about given Attribute(s) in a Granta MI Database. Does not retrieve values of the Data; for that, use the DataExport service.

* **Parameters:**
  **\_req** ([`GetAttributeDetailsRequest`](#module-ansys.grantami.backend.soap.GetAttributeDetailsRequest) object)
* **Return type:**
  [`GetAttributeDetailsResponse`](#module-ansys.grantami.backend.soap.GetAttributeDetailsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_attribute_parameters"></a>

#### get_attribute_parameters(\_req)

Gets detailed information about the Parameters that are declared to be usable with given Attribute(s) in a Granta MI Database. Can only be used with Functional Attributes or Multi-Valued Attributes.

* **Parameters:**
  **\_req** ([`GetAttributeParametersRequest`](#module-ansys.grantami.backend.soap.GetAttributeParametersRequest) object)
* **Return type:**
  [`GetAttributeParametersResponse`](#module-ansys.grantami.backend.soap.GetAttributeParametersResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_child_nodes"></a>

#### get_child_nodes(\_req)

Returns information about the child nodes of the given node in the node-tree of a Granta MI Table.

* **Parameters:**
  **\_req** ([`GetChildNodes`](#module-ansys.grantami.backend.soap.GetChildNodes) object)
* **Return type:**
  [`GetChildNodesResponse`](#module-ansys.grantami.backend.soap.GetChildNodesResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_currencies"></a>

#### get_currencies()

Returns the currencies available in the Granta MI Server.

* **Return type:**
  [`GetCurrenciesResponse`](#module-ansys.grantami.backend.soap.GetCurrenciesResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_database_parameters"></a>

#### get_database_parameters(\_req)

List the parameter(s) in a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetDatabaseParameters`](#module-ansys.grantami.backend.soap.GetDatabaseParameters) object)
* **Return type:**
  [`GetDatabaseParametersResponse`](#module-ansys.grantami.backend.soap.GetDatabaseParametersResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_databases"></a>

#### get_databases()

List the databases available on the Granta MI Server.

* **Return type:**
  [`GetDatabasesResponse`](#module-ansys.grantami.backend.soap.GetDatabasesResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_datasheet_path"></a>

#### get_datasheet_path(\_req)

For each record reference gets the relative portion of an HTTP URL to a Granta MI datasheet, served by MI Viewer.

* **Parameters:**
  **\_req** ([`GetDatasheetPath`](#module-ansys.grantami.backend.soap.GetDatasheetPath) object)
* **Return type:**
  [`GetDatasheetPathResponse`](#module-ansys.grantami.backend.soap.GetDatasheetPathResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_datasheet_path_parameterized"></a>

#### get_datasheet_path_parameterized(\_req)

Gets information that may be used to construct an HTTP URL to a Granta MI datasheet, served by MI Viewer.

* **Parameters:**
  **\_req** ([`GetDatasheetPathParameterized`](#module-ansys.grantami.backend.soap.GetDatasheetPathParameterized) object)
* **Return type:**
  [`GetDatasheetPathParameterizedResponse`](#module-ansys.grantami.backend.soap.GetDatasheetPathParameterizedResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_integration_profiles"></a>

#### get_integration_profiles(\_req)

List the profiles available on a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetIntegrationProfiles`](#module-ansys.grantami.backend.soap.GetIntegrationProfiles) object)
* **Return type:**
  [`GetIntegrationProfilesResponse`](#module-ansys.grantami.backend.soap.GetIntegrationProfilesResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_layouts"></a>

#### get_layouts(\_req)

List the Layouts for an MI Database or for one Table in a Database.

* **Parameters:**
  **\_req** ([`GetLayouts`](#module-ansys.grantami.backend.soap.GetLayouts) object)
* **Return type:**
  [`GetLayoutsResponse`](#module-ansys.grantami.backend.soap.GetLayoutsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_linked_records"></a>

#### get_linked_records(\_req)

Returns the linked records for specified records, for one or more record link groups.

* **Parameters:**
  **\_req** ([`GetLinkedRecordsRequest`](#module-ansys.grantami.backend.soap.GetLinkedRecordsRequest) object)
* **Return type:**
  [`GetLinkedRecordsResponse`](#module-ansys.grantami.backend.soap.GetLinkedRecordsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_meta_attributes"></a>

#### get_meta_attributes(\_req)

Returns the Meta-Attributes of one or more parent Attributes in a Table of a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetMetaAttributesRequest`](#module-ansys.grantami.backend.soap.GetMetaAttributesRequest) object)
* **Return type:**
  [`GetMetaAttributesResponse`](#module-ansys.grantami.backend.soap.GetMetaAttributesResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_parameter_details"></a>

#### get_parameter_details(\_req)

Returns detailed information about the given Parameter(s) in a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetParameterDetailsRequest`](#module-ansys.grantami.backend.soap.GetParameterDetailsRequest) object)
* **Return type:**
  [`GetParameterDetailsResponse`](#module-ansys.grantami.backend.soap.GetParameterDetailsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_record_attributes"></a>

#### get_record_attributes(\_req)

Returns information about which Attributes have Data, for given Record(s). Includes information about when Data was created and retired, in a Version-Controlled Table. Does not retrieve values of the Data; for that, use the DataExport or EngineeringData services.

* **Parameters:**
  **\_req** ([`GetRecordAttributesRequest`](#module-ansys.grantami.backend.soap.GetRecordAttributesRequest) object)
* **Return type:**
  [`GetRecordAttributesResponse`](#module-ansys.grantami.backend.soap.GetRecordAttributesResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_record_link_groups"></a>

#### get_record_link_groups(\_req)

Gets details of Record Link Groups in a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetRecordLinkGroups`](#module-ansys.grantami.backend.soap.GetRecordLinkGroups) object)
* **Return type:**
  [`GetRecordLinkGroupsResponse`](#module-ansys.grantami.backend.soap.GetRecordLinkGroupsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_record_versions"></a>

#### get_record_versions(\_req)

Returns version information about the records specified in the request object.

* **Parameters:**
  **\_req** ([`GetRecordVersionsRequest`](#module-ansys.grantami.backend.soap.GetRecordVersionsRequest) object)
* **Return type:**
  [`GetRecordVersionsResponse`](#module-ansys.grantami.backend.soap.GetRecordVersionsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_root_node"></a>

#### get_root_node(\_req)

Returns information about the root node of a particular Table in a Granta MI Database. This can be passed to get_child_nodes operation to find the contents of the rest of the node-tree of the Table.

* **Parameters:**
  **\_req** ([`GetRootNode`](#module-ansys.grantami.backend.soap.GetRootNode) object)
* **Return type:**
  [`GetRootNodeResponse`](#module-ansys.grantami.backend.soap.GetRootNodeResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_subsets"></a>

#### get_subsets(\_req)

List the Subsets for a Granta MI Database or for one Table in a Database.

* **Parameters:**
  **\_req** ([`GetSubsetsRequest`](#module-ansys.grantami.backend.soap.GetSubsetsRequest) object)
* **Return type:**
  [`GetSubsetsResponse`](#module-ansys.grantami.backend.soap.GetSubsetsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_tables"></a>

#### get_tables(\_req)

List the tables contained in a particular Granta MI Database.

* **Parameters:**
  **\_req** ([`GetTables`](#module-ansys.grantami.backend.soap.GetTables) object)
* **Return type:**
  [`GetTablesResponse`](#module-ansys.grantami.backend.soap.GetTablesResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_tree_records"></a>

#### get_tree_records(\_req)

Returns name, record type, and some tree information for the given record(s). Does not retrieve the tree children; for that, use the get_child_records operation.

* **Parameters:**
  **\_req** ([`GetTreeRecordsRequest`](#module-ansys.grantami.backend.soap.GetTreeRecordsRequest) object)
* **Return type:**
  [`GetTreeRecordsResponse`](#module-ansys.grantami.backend.soap.GetTreeRecordsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_unit_conversions"></a>

#### get_unit_conversions(\_req)

Gets all the unit conversions available for a specified unit or unit system.

* **Parameters:**
  **\_req** ([`GetUnitConversionsRequest`](#module-ansys.grantami.backend.soap.GetUnitConversionsRequest) object)
* **Return type:**
  [`GetUnitConversionsResponse`](#module-ansys.grantami.backend.soap.GetUnitConversionsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_unit_systems"></a>

#### get_unit_systems(\_req)

Returns information about the unit systems known to a Granta MI Database

* **Parameters:**
  **\_req** ([`GetUnitSystems`](#module-ansys.grantami.backend.soap.GetUnitSystems) object)
* **Return type:**
  [`GetUnitSystemsResponse`](#module-ansys.grantami.backend.soap.GetUnitSystemsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.get_units"></a>

#### get_units(\_req)

Returns information about the units known to one or more Granta MI Databases

* **Parameters:**
  **\_req** ([`GetUnits`](#module-ansys.grantami.backend.soap.GetUnits) object)
* **Return type:**
  [`GetUnitsResponse`](#module-ansys.grantami.backend.soap.GetUnitsResponse) object

<a id="ansys.grantami.backend.soap.BrowseService.BrowseService.resolve_references"></a>

#### resolve_references(\_req)

Checks whether the specified Granta MI entities exist in the database and, if so, whether the current user has read permissions or write permissions for it.

* **Parameters:**
  **\_req** ([`ResolveReferencesRequest`](#module-ansys.grantami.backend.soap.ResolveReferencesRequest) object)
* **Return type:**
  [`ResolveReferencesResponse`](#module-ansys.grantami.backend.soap.ResolveReferencesResponse) object

<a id="module-ansys.grantami.backend.soap.CategoryAttributeDetail"></a>

<a id="categoryattributedetail"></a>

### CategoryAttributeDetail

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail"></a>

### *class* CategoryAttributeDetail(about=None, attribute=None, axis_name=None, chartable=None, database_unit=None, default_threshold=None, discrete_values=None, help_info=None, identity=None, is_meta=None, is_multi_valued=None, is_read_only=None, is_required=None, is_searchable=None, name=None, order=None, revision_info=None, type_=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Gives the attribute details with a client read only and is required flag.

* **Parameters:**
  * **about** ([`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute))
  * **attribute** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **axis_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **chartable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **database_unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **default_threshold** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **discrete_values** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **help_info** ([`HelpInfo`](#module-ansys.grantami.backend.soap.HelpInfo))
  * **identity** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **is_meta** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_multi_valued** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_read_only** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_required** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_searchable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **order** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **revision_info** ([`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo))
  * **type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.about"></a>

#### *property* about *: [NamedAttribute](#ansys.grantami.backend.soap.NamedAttribute.NamedAttribute)*

Property about is of type [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute).

* **Return type:**
  [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.attribute"></a>

#### *property* attribute *: [AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)*

Property attribute is of type [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference).

* **Return type:**
  [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.axis_name"></a>

#### *property* axis_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property axis_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.chartable"></a>

#### *property* chartable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property chartable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.database_unit"></a>

#### *property* database_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property database_unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.default_threshold"></a>

#### *property* default_threshold *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property default_threshold is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.discrete_values"></a>

#### *property* discrete_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property discrete_values is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.help_info"></a>

#### *property* help_info *: [HelpInfo](#ansys.grantami.backend.soap.HelpInfo.HelpInfo)*

Property help_info is of type [`HelpInfo`](#module-ansys.grantami.backend.soap.HelpInfo).

* **Return type:**
  [`HelpInfo`](#module-ansys.grantami.backend.soap.HelpInfo)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.identity"></a>

#### *property* identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.is_meta"></a>

#### *property* is_meta *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_meta is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.is_multi_valued"></a>

#### *property* is_multi_valued *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_multi_valued is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.is_read_only"></a>

#### *property* is_read_only *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_read_only is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.is_required"></a>

#### *property* is_required *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_required is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.is_searchable"></a>

#### *property* is_searchable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_searchable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int)*

Property order is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.revision_info"></a>

#### *property* revision_info *: [RevisionInfo](#ansys.grantami.backend.soap.RevisionInfo.RevisionInfo)*

Property revision_info is of type [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo).

* **Return type:**
  [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo)

<a id="ansys.grantami.backend.soap.CategoryAttributeDetail.CategoryAttributeDetail.type_"></a>

#### *property* type_ *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property type_ is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.Constraint"></a>

<a id="constraint"></a>

### Constraint

<a id="ansys.grantami.backend.soap.Constraint.Constraint"></a>

### *class* Constraint(label=None, parameter=None, parameter_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A constraint on functional data.
For requests, both parameter and parameter value are required.

* **Parameters:**
  * **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **parameter** ([`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference))
  * **parameter_value** ([`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue))

<a id="ansys.grantami.backend.soap.Constraint.Constraint.label"></a>

#### *property* label *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property label is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.Constraint.Constraint.parameter"></a>

#### *property* parameter *: [ParameterReference](#ansys.grantami.backend.soap.ParameterReference.ParameterReference)*

Property parameter is of type [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference).

* **Return type:**
  [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference)

<a id="ansys.grantami.backend.soap.Constraint.Constraint.parameter_value"></a>

#### *property* parameter_value *: [ParameterValue](#ansys.grantami.backend.soap.ParameterValue.ParameterValue)*

Property parameter_value is of type [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue).

* **Return type:**
  [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue)

<a id="module-ansys.grantami.backend.soap.Constraints"></a>

<a id="constraints"></a>

### Constraints

<a id="ansys.grantami.backend.soap.Constraints.Constraints"></a>

### *class* Constraints(constraints=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A container of constraints.

* **Parameters:**
  **constraints** (list of [`Constraint`](#module-ansys.grantami.backend.soap.Constraint))

<a id="ansys.grantami.backend.soap.Constraints.Constraints.add_constraint"></a>

#### add_constraint(\_constraint)

Appends \_constraint to constraints property on Constraints C-object.

* **Parameters:**
  **\_constraint** ([`Constraint`](#module-ansys.grantami.backend.soap.Constraint))

<a id="ansys.grantami.backend.soap.Constraints.Constraints.constraints"></a>

#### *property* constraints *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[Constraint](#ansys.grantami.backend.soap.Constraint.Constraint)]*

Property constraints is a list of [`Constraint`](#module-ansys.grantami.backend.soap.Constraint) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`Constraint`](#module-ansys.grantami.backend.soap.Constraint)

<a id="module-ansys.grantami.backend.soap.ContainsAllSearchValue"></a>

<a id="containsallsearchvalue"></a>

### ContainsAllSearchValue

<a id="ansys.grantami.backend.soap.ContainsAllSearchValue.ContainsAllSearchValue"></a>

### *class* ContainsAllSearchValue(tabular_column=None, values=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for discrete data types that contain all of the specified search values.
If the discrete values of the data include further values, it still passes. This criterion type is
specific to discrete attributes.

* **Parameters:**
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **values** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ContainsAllSearchValue.ContainsAllSearchValue.add_value"></a>

#### add_value(value)

Appends value to values property on ContainsAllSearchValue C-object.

* **Parameters:**
  **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ContainsAllSearchValue.ContainsAllSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ContainsAllSearchValue.ContainsAllSearchValue.values"></a>

#### *property* values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property values is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.ContainsAnySearchValue"></a>

<a id="containsanysearchvalue"></a>

### ContainsAnySearchValue

<a id="ansys.grantami.backend.soap.ContainsAnySearchValue.ContainsAnySearchValue"></a>

### *class* ContainsAnySearchValue(tabular_column=None, values=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for discrete data types that contain any of the specified search values.
This criterion type is specific to discrete attributes.

* **Parameters:**
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **values** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ContainsAnySearchValue.ContainsAnySearchValue.add_value"></a>

#### add_value(value)

Appends value to values property on ContainsAnySearchValue C-object.

* **Parameters:**
  **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ContainsAnySearchValue.ContainsAnySearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ContainsAnySearchValue.ContainsAnySearchValue.values"></a>

#### *property* values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property values is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.ContainsSearchValue"></a>

<a id="containssearchvalue"></a>

### ContainsSearchValue

<a id="ansys.grantami.backend.soap.ContainsSearchValue.ContainsSearchValue"></a>

### *class* ContainsSearchValue(tabular_column=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data that contains the specified search text value.
Search criterion applies to text, logical, and discrete attributes. For logicals, specify ‘true’ or
‘false’ as the text.

* **Parameters:**
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ContainsSearchValue.ContainsSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ContainsSearchValue.ContainsSearchValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.CriteriaSearch"></a>

<a id="criteriasearch"></a>

### CriteriaSearch

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch"></a>

### *class* CriteriaSearch(db_key=None, parameter_values=None, populate_guids=None, record_filter=None, search_criteria=None, search_filter=None, search_mode=None, significant_figures=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input for the CriteriaSearch operation.
Both the db_key and search_criteria parameters are required. If no subsets are specified, only the
default subset will be searched.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **parameter_values** (list of [`UnittedParameterValue`](#module-ansys.grantami.backend.soap.UnittedParameterValue))
  * **populate_guids** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **record_filter** ([`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter))
  * **search_criteria** (list of [`RecordSearchCriterion`](#module-ansys.grantami.backend.soap.RecordSearchCriterion))
  * **search_filter** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **search_mode** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **significant_figures** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.add_parameter_value"></a>

#### add_parameter_value(\_unittedParameterValue)

Appends \_unittedParameterValue to parameterValues property on CriteriaSearch C-object.

* **Parameters:**
  **\_unittedParameterValue** ([`UnittedParameterValue`](#module-ansys.grantami.backend.soap.UnittedParameterValue))

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.add_search_criteria"></a>

#### add_search_criteria(\_recordSearchCriterion)

Appends \_recordSearchCriterion to searchCriteria property on CriteriaSearch C-object.

* **Parameters:**
  **\_recordSearchCriterion** ([`RecordSearchCriterion`](#module-ansys.grantami.backend.soap.RecordSearchCriterion))

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.parameter_values"></a>

#### *property* parameter_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnittedParameterValue](#ansys.grantami.backend.soap.UnittedParameterValue.UnittedParameterValue)]*

Property parameter_values is a list of [`UnittedParameterValue`](#module-ansys.grantami.backend.soap.UnittedParameterValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnittedParameterValue`](#module-ansys.grantami.backend.soap.UnittedParameterValue)

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.populate_guids"></a>

#### *property* populate_guids *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property populate_guids is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.record_filter"></a>

#### *property* record_filter *: [RecordFilter](#ansys.grantami.backend.soap.RecordFilter.RecordFilter)*

Property record_filter is of type [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter).

* **Return type:**
  [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter)

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.search_criteria"></a>

#### *property* search_criteria *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordSearchCriterion](#ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion)]*

Property search_criteria is a list of [`RecordSearchCriterion`](#module-ansys.grantami.backend.soap.RecordSearchCriterion) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordSearchCriterion`](#module-ansys.grantami.backend.soap.RecordSearchCriterion)

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.search_filter"></a>

#### *property* search_filter *: [int](https://docs.python.org/3/library/functions.html#int)*

Property search_filter is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.search_mode"></a>

#### *property* search_mode *: [int](https://docs.python.org/3/library/functions.html#int)*

Property search_mode is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.CriteriaSearch.CriteriaSearch.significant_figures"></a>

#### *property* significant_figures *: [int](https://docs.python.org/3/library/functions.html#int)*

Property significant_figures is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.CurrencyDetail"></a>

<a id="currencydetail"></a>

### CurrencyDetail

<a id="ansys.grantami.backend.soap.CurrencyDetail.CurrencyDetail"></a>

### *class* CurrencyDetail(code=None, factor=None, name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Provides the currency code and name.
Currencies are uniquely identified by their ISO 4217 code, the currency name is also provided.

* **Parameters:**
  * **code** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **factor** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.CurrencyDetail.CurrencyDetail.code"></a>

#### *property* code *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property code is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.CurrencyDetail.CurrencyDetail.factor"></a>

#### *property* factor *: [float](https://docs.python.org/3/library/functions.html#float)*

Property factor is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.CurrencyDetail.CurrencyDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="id2"></a>

### DataExportService

<a id="module-ansys.grantami.backend.soap.DataExportService"></a>

<a id="ansys.grantami.backend.soap.DataExportService.DataExportService"></a>

### *class* DataExportService(mi_session, retries=0)

Bases: [`Service`](#ansys.grantami.backend.soap.Service.Service)

The DataExport service retrieves and returns data from attributes of records in Granta MI Databases.

<a id="ansys.grantami.backend.soap.DataExportService.DataExportService.get_record_attributes_by_ref"></a>

#### get_record_attributes_by_ref(\_req)

Retrieves the data values for the given attribute(s) and record(s) in a Granta MI Database.

* **Parameters:**
  **\_req** ([`GetRecordAttributesByRefRequest`](#module-ansys.grantami.backend.soap.GetRecordAttributesByRefRequest) object)
* **Return type:**
  [`GetRecordAttributesByRefResponse`](#module-ansys.grantami.backend.soap.GetRecordAttributesByRefResponse) object

<a id="id3"></a>

### DataImportService

<a id="module-ansys.grantami.backend.soap.DataImportService"></a>

<a id="ansys.grantami.backend.soap.DataImportService.DataImportService"></a>

### *class* DataImportService(mi_session, retries=0)

Bases: [`Service`](#ansys.grantami.backend.soap.Service.Service)

The DataImport service writes data to attributes of records in Granta MI Databases.

<a id="ansys.grantami.backend.soap.DataImportService.DataImportService.delete_or_withdraw_if_latest_record_version"></a>

#### delete_or_withdraw_if_latest_record_version(\_req)

Deletes or withdraws the latest version of the specified record(s). In a version-controlled table, the latest version of a record can be seen by Write users in Edit mode of MI Viewer. This operation will revert (or delete) unreleased record versions, withdraw released versions, and skip withdrawn versions. In a non-version-controlled table, records will only have one version. This operation will delete specified records of this type. Note: this operation will only act on the latest record version. In the case where the specified record corresponds to a record version that is an earlier version, the operation will return a fault.

* **Parameters:**
  **\_req** ([`DeleteOrWithdrawIfLatestRecordVersionRequest`](#module-ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionRequest) object)
* **Return type:**
  [`DeleteOrWithdrawIfLatestRecordVersionResponse`](#module-ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionResponse) object

<a id="ansys.grantami.backend.soap.DataImportService.DataImportService.ensure_record_folder_paths"></a>

#### ensure_record_folder_paths(\_req)

Checks whether given hierarchies of folders exist, creating them if not. Each hierarchy is specified as a sequence of tree names; where the folder needs to be created, this name is also used as the full name of the created folder. New folders will be assigned to their parents’ subsets; existing folders are not assigned or removed from any subsets. If a colour is specified, new folders will be of that colour; existing folders’ colours are never changed. Note: this operation can accept an arbitrary number of Record Folder paths to be ensured, but in practice there is a limit to the amount of changes that can be done in a single operation.

* **Parameters:**
  **\_req** ([`EnsureRecordFolderPathsRequest`](#module-ansys.grantami.backend.soap.EnsureRecordFolderPathsRequest) object)
* **Return type:**
  [`EnsureRecordFolderPathsResponse`](#module-ansys.grantami.backend.soap.EnsureRecordFolderPathsResponse) object

<a id="ansys.grantami.backend.soap.DataImportService.DataImportService.get_upload_addresses"></a>

#### get_upload_addresses(\_req)

Returns an address to which a datum can be uploaded, for each combination of given sets of records and attributes in a Granta MI database. Each address will be an HTTP or HTTPS URL. The upload service only supports a subset of all available Granta MI attribute types, but this operation will give an address for an attribute of any type.

* **Parameters:**
  **\_req** ([`GetUploadAddressesRequest`](#module-ansys.grantami.backend.soap.GetUploadAddressesRequest) object)
* **Return type:**
  [`GetUploadAddressesResponse`](#module-ansys.grantami.backend.soap.GetUploadAddressesResponse) object

<a id="ansys.grantami.backend.soap.DataImportService.DataImportService.modify_record_links"></a>

#### modify_record_links(\_req)

Adds or removes static Links between record(s) in a Granta MI Database.

* **Parameters:**
  **\_req** ([`ModifyRecordLinksRequest`](#module-ansys.grantami.backend.soap.ModifyRecordLinksRequest) object)
* **Return type:**
  [`ModifyRecordLinksResponse`](#module-ansys.grantami.backend.soap.ModifyRecordLinksResponse) object

<a id="ansys.grantami.backend.soap.DataImportService.DataImportService.set_record_attributes"></a>

#### set_record_attributes(\_req)

Sets the data values for the given attribute(s) and record(s) in a Granta MI Database. This method will create any records or folders which do not already exist in the database (however, new folders should be created with ‘EnsureRecordFolderPaths’ instead). Note: This operation can accept an arbitrary number of attributes and records to be imported, but in practice there is a fairly low limit to the amount of data that can be imported in a single operation. Client code should perform large imports in small chunks.

* **Parameters:**
  **\_req** ([`SetRecordAttributesRequest`](#module-ansys.grantami.backend.soap.SetRecordAttributesRequest) object)
* **Return type:**
  [`SetRecordAttributesResponse`](#module-ansys.grantami.backend.soap.SetRecordAttributesResponse) object

<a id="module-ansys.grantami.backend.soap.DatabaseDetail"></a>

<a id="databasedetail"></a>

### DatabaseDetail

<a id="ansys.grantami.backend.soap.DatabaseDetail.DatabaseDetail"></a>

### *class* DatabaseDetail(db_key=None, author=None, company=None, volume_name=None, db_guid=None, db_version_guid=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a Granta MI database.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **author** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **company** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **volume_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **db_guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **db_version_guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DatabaseDetail.DatabaseDetail.author"></a>

#### *property* author *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property author is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DatabaseDetail.DatabaseDetail.company"></a>

#### *property* company *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property company is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DatabaseDetail.DatabaseDetail.db_guid"></a>

#### *property* db_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_guid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DatabaseDetail.DatabaseDetail.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DatabaseDetail.DatabaseDetail.db_version_guid"></a>

#### *property* db_version_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_version_guid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DatabaseDetail.DatabaseDetail.volume_name"></a>

#### *property* volume_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property volume_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DatabaseRevision"></a>

<a id="databaserevision"></a>

### DatabaseRevision

<a id="ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision"></a>

### *class* DatabaseRevision(revision_date=None, revision_note=None, username=None, has_revision_note=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a specific database revision. Includes the author, the date and time, and the
transaction note (if present).

* **Parameters:**
  * **revision_date** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **revision_note** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **username** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **has_revision_note** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision.has_revision_note"></a>

#### *property* has_revision_note *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_revision_note is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision.revision_date"></a>

#### *property* revision_date *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property revision_date is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision.revision_note"></a>

#### *property* revision_note *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property revision_note is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision.username"></a>

#### *property* username *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property username is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DatabaseUnitSet"></a>

<a id="databaseunitset"></a>

### DatabaseUnitSet

<a id="ansys.grantami.backend.soap.DatabaseUnitSet.DatabaseUnitSet"></a>

### *class* DatabaseUnitSet(db_key=None, unit_symbols=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An array of UnitSymbols for a specific database.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **unit_symbols** (list of [`UnitSymbol`](#module-ansys.grantami.backend.soap.UnitSymbol))

<a id="ansys.grantami.backend.soap.DatabaseUnitSet.DatabaseUnitSet.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DatabaseUnitSet.DatabaseUnitSet.unit_symbols"></a>

#### *property* unit_symbols *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnitSymbol](#ansys.grantami.backend.soap.UnitSymbol.UnitSymbol)]*

Property unit_symbols is a list of [`UnitSymbol`](#module-ansys.grantami.backend.soap.UnitSymbol) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnitSymbol`](#module-ansys.grantami.backend.soap.UnitSymbol)

<a id="module-ansys.grantami.backend.soap.DataRule"></a>

<a id="datarule"></a>

### DataRule

<a id="ansys.grantami.backend.soap.DataRule.DataRule"></a>

### *class* DataRule(description=None, display_descriptions=None, display_names=None, name=None, regular_expression=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A data validation rule that will be applied to the corresponding Short Text Attribute when importing
data.

* **Parameters:**
  * **description** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **display_descriptions** (list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName))
  * **display_names** (list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **regular_expression** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DataRule.DataRule.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property description is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DataRule.DataRule.display_descriptions"></a>

#### *property* display_descriptions *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DisplayName](#ansys.grantami.backend.soap.DisplayName.DisplayName)]*

Property display_descriptions is a list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName)

<a id="ansys.grantami.backend.soap.DataRule.DataRule.display_names"></a>

#### *property* display_names *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DisplayName](#ansys.grantami.backend.soap.DisplayName.DisplayName)]*

Property display_names is a list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName)

<a id="ansys.grantami.backend.soap.DataRule.DataRule.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DataRule.DataRule.regular_expression"></a>

#### *property* regular_expression *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property regular_expression is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DatasheetPath"></a>

<a id="datasheetpath"></a>

### DatasheetPath

<a id="ansys.grantami.backend.soap.DatasheetPath.DatasheetPath"></a>

### *class* DatasheetPath(url=None, record_reference=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Link to a record in a Granta MI database.
Includes a [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) and a URL for the record datasheet.

* **Parameters:**
  * **url** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.DatasheetPath.DatasheetPath.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.DatasheetPath.DatasheetPath.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property url is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DateDataType"></a>

<a id="datedatatype"></a>

### DateDataType

<a id="ansys.grantami.backend.soap.DateDataType.DateDataType"></a>

### *class* DateDataType(is_applicable=None, value=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

Container of date data. The format is YYYY-MM-DD.

* **Parameters:**
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DateDataType.DateDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.DateDataType.DateDataType.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DateTimeDataType"></a>

<a id="datetimedatatype"></a>

### DateTimeDataType

<a id="ansys.grantami.backend.soap.DateTimeDataType.DateTimeDataType"></a>

### *class* DateTimeDataType(is_applicable=None, value=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

Container of datetime data. The format is YYYY-MM-DDThh:mm:ss and is compatible with ISO 8601.

* **Parameters:**
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DateTimeDataType.DateTimeDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.DateTimeDataType.DateTimeDataType.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DefaultParameterValue"></a>

<a id="defaultparametervalue"></a>

### DefaultParameterValue

<a id="ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue"></a>

### *class* DefaultParameterValue(discrete_value=None, numeric_value=None, type_=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type representing the default value of a parameter, may be overridden at the datum level, or
inherited from the attribute or the database default.

* **Parameters:**
  * **discrete_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **numeric_value** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue.DefaultParameterValueType"></a>

#### *class* DefaultParameterValueType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue.DefaultParameterValueType.Discrete"></a>

#### Discrete *= 2*

<a id="ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue.DefaultParameterValueType.Numeric"></a>

#### Numeric *= 1*

<a id="ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue.DefaultParameterValueType.Unknown"></a>

#### Unknown *= 0*

<a id="ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue.discrete_value"></a>

#### *property* discrete_value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property discrete_value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue.numeric_value"></a>

#### *property* numeric_value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property numeric_value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue.type_"></a>

#### *property* type_ *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property type_ is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionRequest"></a>

<a id="deleteorwithdrawiflatestrecordversionrequest"></a>

### DeleteOrWithdrawIfLatestRecordVersionRequest

<a id="ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest"></a>

### *class* DeleteOrWithdrawIfLatestRecordVersionRequest(delete_or_withdraw_records=None, notes=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

DeleteOrWithdrawIfLatestRecordVersionRequest. Input for the DeleteOrWithdrawIfLatestRecordVersion
operation, containing the [`DeleteOrWithdrawRecord`](#module-ansys.grantami.backend.soap.DeleteOrWithdrawRecord) objects.

* **Parameters:**
  * **delete_or_withdraw_records** (list of [`DeleteOrWithdrawRecord`](#module-ansys.grantami.backend.soap.DeleteOrWithdrawRecord))
  * **notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest.add_delete_or_withdraw_record"></a>

#### add_delete_or_withdraw_record(\_deleteOrWithdrawRecord)

Appends \_deleteOrWithdrawRecord to deleteOrWithdrawRecords property on DeleteOrWithdrawIfLatestRecordVersionRequest C-object.

* **Parameters:**
  **\_deleteOrWithdrawRecord** ([`DeleteOrWithdrawRecord`](#module-ansys.grantami.backend.soap.DeleteOrWithdrawRecord))

<a id="ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest.delete_or_withdraw_records"></a>

#### *property* delete_or_withdraw_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DeleteOrWithdrawRecord](#ansys.grantami.backend.soap.DeleteOrWithdrawRecord.DeleteOrWithdrawRecord)]*

Property delete_or_withdraw_records is a list of [`DeleteOrWithdrawRecord`](#module-ansys.grantami.backend.soap.DeleteOrWithdrawRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DeleteOrWithdrawRecord`](#module-ansys.grantami.backend.soap.DeleteOrWithdrawRecord)

<a id="ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest.notes"></a>

#### *property* notes *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property notes is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionResponse"></a>

<a id="deleteorwithdrawiflatestrecordversionresponse"></a>

### DeleteOrWithdrawIfLatestRecordVersionResponse

<a id="ansys.grantami.backend.soap.DeleteOrWithdrawIfLatestRecordVersionResponse.DeleteOrWithdrawIfLatestRecordVersionResponse"></a>

### *class* DeleteOrWithdrawIfLatestRecordVersionResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

DeleteOrWithdrawIfLatestRecordVersionResponse. Output of the DeleteOrWithdrawIfLatestRecordVersion
operation.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a DeleteOrWithdrawIfLatestRecordVersionResponse object.

<a id="module-ansys.grantami.backend.soap.DeleteOrWithdrawRecord"></a>

<a id="deleteorwithdrawrecord"></a>

### DeleteOrWithdrawRecord

<a id="ansys.grantami.backend.soap.DeleteOrWithdrawRecord.DeleteOrWithdrawRecord"></a>

### *class* DeleteOrWithdrawRecord(record_reference=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Record to be deleted or withdrawn. Contains a [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Parameters:**
  **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.DeleteOrWithdrawRecord.DeleteOrWithdrawRecord.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.DiscreteDataType"></a>

<a id="discretedatatype"></a>

### DiscreteDataType

<a id="ansys.grantami.backend.soap.DiscreteDataType.DiscreteDataType"></a>

### *class* DiscreteDataType(discrete_values=None, is_applicable=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

Container of discrete data.

* **Parameters:**
  * **discrete_values** (list of [`DiscreteValue`](#module-ansys.grantami.backend.soap.DiscreteValue))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.DiscreteDataType.DiscreteDataType.add_discrete_value"></a>

#### add_discrete_value(\_discreteValue)

Appends \_discreteValue to discreteValues property on DiscreteDataType C-object.

* **Parameters:**
  **\_discreteValue** ([`DiscreteValue`](#module-ansys.grantami.backend.soap.DiscreteValue))

<a id="ansys.grantami.backend.soap.DiscreteDataType.DiscreteDataType.discrete_values"></a>

#### *property* discrete_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DiscreteValue](#ansys.grantami.backend.soap.DiscreteValue.DiscreteValue)]*

Property discrete_values is a list of [`DiscreteValue`](#module-ansys.grantami.backend.soap.DiscreteValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DiscreteValue`](#module-ansys.grantami.backend.soap.DiscreteValue)

<a id="ansys.grantami.backend.soap.DiscreteDataType.DiscreteDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType"></a>

<a id="discretefunctionalgriddeddatatype"></a>

### DiscreteFunctionalGriddedDataType

<a id="ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType"></a>

### *class* DiscreteFunctionalGriddedDataType(default_x_axis_parameter=None, functional_data_parameter_settings=None, is_applicable=None, values=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type to contain the values of discrete-valued functional gridded data.
This type is only valid for export.

* **Parameters:**
  * **default_x_axis_parameter** ([`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation))
  * **functional_data_parameter_settings** (list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **values** ([`DiscreteFunctionalValues`](#module-ansys.grantami.backend.soap.DiscreteFunctionalValues))

<a id="ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.add_functional_data_parameter_settings"></a>

#### add_functional_data_parameter_settings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on DiscreteFunctionalGriddedDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** ([`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings))

<a id="ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.default_x_axis_parameter"></a>

#### *property* default_x_axis_parameter *: [ParameterInformation](#ansys.grantami.backend.soap.ParameterInformation.ParameterInformation)*

Property default_x_axis_parameter is of type [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation).

* **Return type:**
  [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation)

<a id="ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.functional_data_parameter_settings"></a>

#### *property* functional_data_parameter_settings *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[FunctionalDataParameterSettings](#ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings)]*

Property functional_data_parameter_settings is a list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings)

<a id="ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType.values"></a>

#### *property* values *: [DiscreteFunctionalValues](#ansys.grantami.backend.soap.DiscreteFunctionalValues.DiscreteFunctionalValues)*

Property values is of type [`DiscreteFunctionalValues`](#module-ansys.grantami.backend.soap.DiscreteFunctionalValues).

* **Return type:**
  [`DiscreteFunctionalValues`](#module-ansys.grantami.backend.soap.DiscreteFunctionalValues)

<a id="module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType"></a>

<a id="discretefunctionalseriesdatatype"></a>

### DiscreteFunctionalSeriesDataType

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType"></a>

### *class* DiscreteFunctionalSeriesDataType(functional_data_parameter_settings=None, graph=None, is_applicable=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type to contain the values of discrete-valued functional series data.
This type is only valid for export.

* **Parameters:**
  * **functional_data_parameter_settings** (list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings))
  * **graph** ([`DiscreteFunctionalSeriesGraph`](#module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType.add_functional_data_parameter_settings"></a>

#### add_functional_data_parameter_settings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on DiscreteFunctionalSeriesDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** ([`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings))

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType.functional_data_parameter_settings"></a>

#### *property* functional_data_parameter_settings *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[FunctionalDataParameterSettings](#ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings)]*

Property functional_data_parameter_settings is a list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings)

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType.graph"></a>

#### *property* graph *: [DiscreteFunctionalSeriesGraph](#ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph)*

Property graph is of type [`DiscreteFunctionalSeriesGraph`](#module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph).

* **Return type:**
  [`DiscreteFunctionalSeriesGraph`](#module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph)

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph"></a>

<a id="discretefunctionalseriesgraph"></a>

### DiscreteFunctionalSeriesGraph

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph"></a>

### *class* DiscreteFunctionalSeriesGraph(x_axis_parameter=None, hide_graph=None, series=None, \_is_owner=True)

A type to contain a collection of [`DiscreteSeries`](#module-ansys.grantami.backend.soap.DiscreteSeries) objects that
contain the functional data.

* **Parameters:**
  * **x_axis_parameter** ([`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation))
  * **hide_graph** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **series** (list of [`DiscreteSeries`](#module-ansys.grantami.backend.soap.DiscreteSeries))

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph.add_series"></a>

#### add_series(\_discreteSeries)

Appends \_discreteSeries to series property on DiscreteFunctionalSeriesGraph C-object.

* **Parameters:**
  **\_discreteSeries** ([`DiscreteSeries`](#module-ansys.grantami.backend.soap.DiscreteSeries))

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph.hide_graph"></a>

#### *property* hide_graph *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property hide_graph is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph.series"></a>

#### *property* series *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DiscreteSeries](#ansys.grantami.backend.soap.DiscreteSeries.DiscreteSeries)]*

Property series is a list of [`DiscreteSeries`](#module-ansys.grantami.backend.soap.DiscreteSeries) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DiscreteSeries`](#module-ansys.grantami.backend.soap.DiscreteSeries)

<a id="ansys.grantami.backend.soap.DiscreteFunctionalSeriesGraph.DiscreteFunctionalSeriesGraph.x_axis_parameter"></a>

#### *property* x_axis_parameter *: [ParameterInformation](#ansys.grantami.backend.soap.ParameterInformation.ParameterInformation)*

Property x_axis_parameter is of type [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation).

* **Return type:**
  [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation)

<a id="module-ansys.grantami.backend.soap.DiscreteFunctionalValue"></a>

<a id="discretefunctionalvalue"></a>

### DiscreteFunctionalValue

<a id="ansys.grantami.backend.soap.DiscreteFunctionalValue.DiscreteFunctionalValue"></a>

### *class* DiscreteFunctionalValue(constraints=None, value=None, is_estimated=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A single grid point in Gridded Discrete-Valued Functional Data, where the Y-axis value is a discrete
value.

* **Parameters:**
  * **constraints** ([`Constraints`](#module-ansys.grantami.backend.soap.Constraints))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **is_estimated** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.DiscreteFunctionalValue.DiscreteFunctionalValue.constraints"></a>

#### *property* constraints *: [Constraints](#ansys.grantami.backend.soap.Constraints.Constraints)*

Property constraints is of type [`Constraints`](#module-ansys.grantami.backend.soap.Constraints).

* **Return type:**
  [`Constraints`](#module-ansys.grantami.backend.soap.Constraints)

<a id="ansys.grantami.backend.soap.DiscreteFunctionalValue.DiscreteFunctionalValue.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_estimated is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.DiscreteFunctionalValue.DiscreteFunctionalValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DiscreteFunctionalValues"></a>

<a id="discretefunctionalvalues"></a>

### DiscreteFunctionalValues

<a id="ansys.grantami.backend.soap.DiscreteFunctionalValues.DiscreteFunctionalValues"></a>

### *class* DiscreteFunctionalValues(values=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of [`DiscreteFunctionalValue`](#module-ansys.grantami.backend.soap.DiscreteFunctionalValue) objects.

* **Parameters:**
  **values** (list of [`DiscreteFunctionalValue`](#module-ansys.grantami.backend.soap.DiscreteFunctionalValue))

<a id="ansys.grantami.backend.soap.DiscreteFunctionalValues.DiscreteFunctionalValues.add_value"></a>

#### add_value(\_discreteFunctionalValue)

Appends \_discreteFunctionalValue to values property on DiscreteFunctionalValues C-object.

* **Parameters:**
  **\_discreteFunctionalValue** ([`DiscreteFunctionalValue`](#module-ansys.grantami.backend.soap.DiscreteFunctionalValue))

<a id="ansys.grantami.backend.soap.DiscreteFunctionalValues.DiscreteFunctionalValues.values"></a>

#### *property* values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DiscreteFunctionalValue](#ansys.grantami.backend.soap.DiscreteFunctionalValue.DiscreteFunctionalValue)]*

Property values is a list of [`DiscreteFunctionalValue`](#module-ansys.grantami.backend.soap.DiscreteFunctionalValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DiscreteFunctionalValue`](#module-ansys.grantami.backend.soap.DiscreteFunctionalValue)

<a id="module-ansys.grantami.backend.soap.DiscreteSeries"></a>

<a id="discreteseries"></a>

### DiscreteSeries

<a id="ansys.grantami.backend.soap.DiscreteSeries.DiscreteSeries"></a>

### *class* DiscreteSeries(xy_points=None, constraints=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type for functional data which includes X-Y discrete data and any constraints.

* **Parameters:**
  * **xy_points** ([`XYDiscreteData`](#module-ansys.grantami.backend.soap.XYDiscreteData))
  * **constraints** ([`Constraints`](#module-ansys.grantami.backend.soap.Constraints))

<a id="ansys.grantami.backend.soap.DiscreteSeries.DiscreteSeries.constraints"></a>

#### *property* constraints *: [Constraints](#ansys.grantami.backend.soap.Constraints.Constraints)*

Property constraints is of type [`Constraints`](#module-ansys.grantami.backend.soap.Constraints).

* **Return type:**
  [`Constraints`](#module-ansys.grantami.backend.soap.Constraints)

<a id="ansys.grantami.backend.soap.DiscreteSeries.DiscreteSeries.xy_points"></a>

#### *property* xy_points *: [XYDiscreteData](#ansys.grantami.backend.soap.XYDiscreteData.XYDiscreteData)*

Property xy_points is of type [`XYDiscreteData`](#module-ansys.grantami.backend.soap.XYDiscreteData).

* **Return type:**
  [`XYDiscreteData`](#module-ansys.grantami.backend.soap.XYDiscreteData)

<a id="module-ansys.grantami.backend.soap.DiscreteValue"></a>

<a id="discretevalue"></a>

### DiscreteValue

<a id="ansys.grantami.backend.soap.DiscreteValue.DiscreteValue"></a>

### *class* DiscreteValue(order=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The value of a discrete data type.
Contains an order and a value.

* **Parameters:**
  * **order** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DiscreteValue.DiscreteValue.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int)*

Property order is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.DiscreteValue.DiscreteValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DisplayName"></a>

<a id="displayname"></a>

### DisplayName

<a id="ansys.grantami.backend.soap.DisplayName.DisplayName"></a>

### *class* DisplayName(language=None, translation=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A language identifier and localized string for the display name of an object.

* **Parameters:**
  * **language** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **translation** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DisplayName.DisplayName.language"></a>

#### *property* language *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property language is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DisplayName.DisplayName.translation"></a>

#### *property* translation *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property translation is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DoesNotContainSearchValue"></a>

<a id="doesnotcontainsearchvalue"></a>

### DoesNotContainSearchValue

<a id="ansys.grantami.backend.soap.DoesNotContainSearchValue.DoesNotContainSearchValue"></a>

### *class* DoesNotContainSearchValue(tabular_column=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for discrete data types that contain none of the specified search values.
This criterion type is specific to discrete attributes.

* **Parameters:**
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DoesNotContainSearchValue.DoesNotContainSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.DoesNotContainSearchValue.DoesNotContainSearchValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.DoesNotExistSearchValue"></a>

<a id="doesnotexistsearchvalue"></a>

### DoesNotExistSearchValue

<a id="ansys.grantami.backend.soap.DoesNotExistSearchValue.DoesNotExistSearchValue"></a>

### *class* DoesNotExistSearchValue(tabular_column=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for attributes with no data.
All attribute types supported.

* **Parameters:**
  **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.DoesNotExistSearchValue.DoesNotExistSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.EmptyDataType"></a>

<a id="emptydatatype"></a>

### EmptyDataType

<a id="ansys.grantami.backend.soap.EmptyDataType.EmptyDataType"></a>

### *class* EmptyDataType(\_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type that indicates that the [`TabularDataCell`](#module-ansys.grantami.backend.soap.TabularDataCell) is empty.
This type is specific to Tabular attributes, and can be used in update operations to clear the
contents of a [`TabularDataCell`](#module-ansys.grantami.backend.soap.TabularDataCell).

<a id="module-ansys.grantami.backend.soap.EmptyRestResponse"></a>

<a id="emptyrestresponse"></a>

### EmptyRestResponse

<a id="ansys.grantami.backend.soap.EmptyRestResponse.EmptyRestResponse"></a>

### *class* EmptyRestResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

A response from a REST service that contains no data.
This type contains only a [`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a EmptyRestResponse object.

<a id="id4"></a>

### EngineeringDataService

<a id="module-ansys.grantami.backend.soap.EngineeringDataService"></a>

<a id="ansys.grantami.backend.soap.EngineeringDataService.EngineeringDataService"></a>

### *class* EngineeringDataService(mi_session, retries=0)

Bases: [`Service`](#ansys.grantami.backend.soap.Service.Service)

The EngineeringData service provides custom data export operations for a Granta MI Server.

<a id="ansys.grantami.backend.soap.EngineeringDataService.EngineeringDataService.export_record_data"></a>

#### export_record_data(\_req)

Performs an FEA Export and returns the result as the response.

* **Parameters:**
  **\_req** ([`ExportRecordDataRequest`](#module-ansys.grantami.backend.soap.ExportRecordDataRequest) object)
* **Return type:**
  [`ExportRecordDataResponse`](#module-ansys.grantami.backend.soap.ExportRecordDataResponse) object

<a id="ansys.grantami.backend.soap.EngineeringDataService.EngineeringDataService.exporters_for_records"></a>

#### exporters_for_records(\_req)

Returns the FEA Exporter configurations, known to the MI Server, filtering for their applicability to given Record(s) and optionally to particular situations.

* **Parameters:**
  **\_req** ([`ExportersForRecordsRequest`](#module-ansys.grantami.backend.soap.ExportersForRecordsRequest) object)
* **Return type:**
  [`ExportersForRecordsResponse`](#module-ansys.grantami.backend.soap.ExportersForRecordsResponse) object

<a id="ansys.grantami.backend.soap.EngineeringDataService.EngineeringDataService.get_available_exporters"></a>

#### get_available_exporters(\_req)

Returns the FEA Exporter configurations known to the MI Server, optionally filtering for their applicability to particular situations.

* **Parameters:**
  **\_req** ([`GetAvailableExportersRequest`](#module-ansys.grantami.backend.soap.GetAvailableExportersRequest) object)
* **Return type:**
  [`GetAvailableExportersResponse`](#module-ansys.grantami.backend.soap.GetAvailableExportersResponse) object

<a id="ansys.grantami.backend.soap.EngineeringDataService.EngineeringDataService.get_exporter_parameters"></a>

#### get_exporter_parameters(\_req)

Returns information about the MI Parameter Values that will need to be chosen, to run the specified Exporter on the specified Record(s).

* **Parameters:**
  **\_req** ([`GetExporterParametersRequest`](#module-ansys.grantami.backend.soap.GetExporterParametersRequest) object)
* **Return type:**
  [`GetExporterParametersResponse`](#module-ansys.grantami.backend.soap.GetExporterParametersResponse) object

<a id="module-ansys.grantami.backend.soap.EnsureRecordFolderPathsRequest"></a>

<a id="ensurerecordfolderpathsrequest"></a>

### EnsureRecordFolderPathsRequest

<a id="ansys.grantami.backend.soap.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest"></a>

### *class* EnsureRecordFolderPathsRequest(folder_paths=None, import_error_mode=None, notes=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the EnsureRecordFolderPaths operation, containing the folder paths to check and the import
error mode.

* **Parameters:**
  * **folder_paths** (list of [`RecordFolderPath`](#module-ansys.grantami.backend.soap.RecordFolderPath))
  * **import_error_mode** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest.add_folder_path"></a>

#### add_folder_path(\_recordFolderPath)

Appends \_recordFolderPath to folderPaths property on EnsureRecordFolderPathsRequest C-object.

* **Parameters:**
  **\_recordFolderPath** ([`RecordFolderPath`](#module-ansys.grantami.backend.soap.RecordFolderPath))

<a id="ansys.grantami.backend.soap.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest.folder_paths"></a>

#### *property* folder_paths *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordFolderPath](#ansys.grantami.backend.soap.RecordFolderPath.RecordFolderPath)]*

Property folder_paths is a list of [`RecordFolderPath`](#module-ansys.grantami.backend.soap.RecordFolderPath) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordFolderPath`](#module-ansys.grantami.backend.soap.RecordFolderPath)

<a id="ansys.grantami.backend.soap.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest.import_error_mode"></a>

#### *property* import_error_mode *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property import_error_mode is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.EnsureRecordFolderPathsRequest.EnsureRecordFolderPathsRequest.notes"></a>

#### *property* notes *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property notes is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.EnsureRecordFolderPathsResponse"></a>

<a id="ensurerecordfolderpathsresponse"></a>

### EnsureRecordFolderPathsResponse

<a id="ansys.grantami.backend.soap.EnsureRecordFolderPathsResponse.EnsureRecordFolderPathsResponse"></a>

### *class* EnsureRecordFolderPathsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output of the EnsureRecordFolderPaths operation.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a EnsureRecordFolderPathsResponse object.

<a id="ansys.grantami.backend.soap.EnsureRecordFolderPathsResponse.EnsureRecordFolderPathsResponse.path_leaves"></a>

#### *property* path_leaves *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[PathLeaf](#ansys.grantami.backend.soap.PathLeaf.PathLeaf)]*

Property path_leaves is a list of [`PathLeaf`](#module-ansys.grantami.backend.soap.PathLeaf) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`PathLeaf`](#module-ansys.grantami.backend.soap.PathLeaf)

<a id="module-ansys.grantami.backend.soap.EqualToSearchValue"></a>

<a id="equaltosearchvalue"></a>

### EqualToSearchValue

<a id="ansys.grantami.backend.soap.EqualToSearchValue.EqualToSearchValue"></a>

### *class* EqualToSearchValue(tabular_column=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for short text values that exactly match the specified search value.
Applies to short text attributes only.

* **Parameters:**
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.EqualToSearchValue.EqualToSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.EqualToSearchValue.EqualToSearchValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.ExactlySearchValue"></a>

<a id="exactlysearchvalue"></a>

### ExactlySearchValue

<a id="ansys.grantami.backend.soap.ExactlySearchValue.ExactlySearchValue"></a>

### *class* ExactlySearchValue(tabular_column=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for integer values that exactly match the specified search value.
Applies to integer attributes only.

* **Parameters:**
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **value** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.ExactlySearchValue.ExactlySearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExactlySearchValue.ExactlySearchValue.value"></a>

#### *property* value *: [int](https://docs.python.org/3/library/functions.html#int)*

Property value is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.ExistsSearchValue"></a>

<a id="existssearchvalue"></a>

### ExistsSearchValue

<a id="ansys.grantami.backend.soap.ExistsSearchValue.ExistsSearchValue"></a>

### *class* ExistsSearchValue(tabular_column=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for attributes that contain data.
All attribute types supported.

* **Parameters:**
  **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ExistsSearchValue.ExistsSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.ExportRecordDataRequest"></a>

<a id="exportrecorddatarequest"></a>

### ExportRecordDataRequest

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest"></a>

### *class* ExportRecordDataRequest(attribute_references=None, exporter_key=None, filter=None, parameter_values=None, records=None, sig_figs=None, stop_before_id=None, stop_before_index=None, unit_conversion_context=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the ExportRecordData operation. For this request to be valid, you must set the references
and the exporter key. The argument stop_before_index is 0-indexed.

* **Parameters:**
  * **attribute_references** (list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **exporter_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **filter** ([`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter))
  * **parameter_values** (list of [`UnittedParameterValue`](#module-ansys.grantami.backend.soap.UnittedParameterValue))
  * **records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **sig_figs** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **stop_before_id** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **stop_before_index** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **unit_conversion_context** ([`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext))

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.add_attribute_reference"></a>

#### add_attribute_reference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on ExportRecordDataRequest C-object.

* **Parameters:**
  **\_attributeReference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.add_parameter_values"></a>

#### add_parameter_values(\_unittedParameterValue)

Appends \_unittedParameterValue to parameterValues property on ExportRecordDataRequest C-object.

* **Parameters:**
  **\_unittedParameterValue** ([`UnittedParameterValue`](#module-ansys.grantami.backend.soap.UnittedParameterValue))

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.add_record"></a>

#### add_record(\_recordReference)

Appends \_recordReference to records property on ExportRecordDataRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.attribute_references"></a>

#### *property* attribute_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)]*

Property attribute_references is a list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) objects. If this property is not specified, the attributes from the exporter configuration are used. If this element is included and non-empty, the attributes specified are used.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.exporter_key"></a>

#### *property* exporter_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property exporter_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.filter"></a>

#### *property* filter *: [RecordFilter](#ansys.grantami.backend.soap.RecordFilter.RecordFilter)*

Property filter is of type [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter). If specified, this filters the records that can be included when traversing record links within Tabular Data. This filter is NOT applied to the explicit list of records passed to this operation.

* **Return type:**
  [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter)

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.parameter_values"></a>

#### *property* parameter_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnittedParameterValue](#ansys.grantami.backend.soap.UnittedParameterValue.UnittedParameterValue)]*

Property parameter_values is a list of [`UnittedParameterValue`](#module-ansys.grantami.backend.soap.UnittedParameterValue) objects. Parameter values to use for any parameterised Data in the export. Each Parameter can only have one value for all parameterised Attributes in an export. Note that the true Parameter names (or Standard Names) in the MI Database must be used; aliases defined in the exporter configuration will not be understood.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnittedParameterValue`](#module-ansys.grantami.backend.soap.UnittedParameterValue)

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.records"></a>

#### *property* records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.sig_figs"></a>

#### *property* sig_figs *: [int](https://docs.python.org/3/library/functions.html#int)*

Property sig_figs is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.stop_before_id"></a>

#### *property* stop_before_id *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property stop_before_id is of type str. Stops the export process before the step specified by the identifier (for example, after the initial XML is generated but before conversion into the specified CAE format). Contact your MI Administrator if you require this feature.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.stop_before_index"></a>

#### *property* stop_before_index *: [int](https://docs.python.org/3/library/functions.html#int)*

Property stop_before_index is of type int. Stops the export process before the step specified by the index (for example, after the initial XML is generated but before conversion into the specified CAE format). Contact your MI Administrator if you require this feature.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ExportRecordDataRequest.ExportRecordDataRequest.unit_conversion_context"></a>

#### *property* unit_conversion_context *: [UnitConversionContext](#ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext)*

Property unit_conversion_context is of type [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext).

* **Return type:**
  [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext)

<a id="module-ansys.grantami.backend.soap.ExportRecordDataResponse"></a>

<a id="exportrecorddataresponse"></a>

### ExportRecordDataResponse

<a id="ansys.grantami.backend.soap.ExportRecordDataResponse.ExportRecordDataResponse"></a>

### *class* ExportRecordDataResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output for the ExportRecordData operation.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a ExportRecordDataResponse object.

<a id="ansys.grantami.backend.soap.ExportRecordDataResponse.ExportRecordDataResponse.text"></a>

#### *property* text *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property text is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.ExportedAttribute"></a>

<a id="exportedattribute"></a>

### ExportedAttribute

<a id="ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute"></a>

### *class* ExportedAttribute(db_key=None, attribute_id=None, is_standard_name=None, name=None, partial_table_reference=None, preferred_x_axis_parameter=None, pseudo_attribute=None, specific_unit_conversion_context=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular attribute in a Granta MI, and also specifies how
that Attribute should be exported.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **attribute_id** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **is_standard_name** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **partial_table_reference** ([`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference))
  * **preferred_x_axis_parameter** ([`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference))
  * **pseudo_attribute** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **specific_unit_conversion_context** ([`SpecificUnitConversionContext`](#module-ansys.grantami.backend.soap.SpecificUnitConversionContext))

<a id="ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute.attribute_id"></a>

#### *property* attribute_id *: [int](https://docs.python.org/3/library/functions.html#int)*

Property attribute_id is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute.is_standard_name"></a>

#### *property* is_standard_name *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_standard_name is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute.partial_table_reference"></a>

#### *property* partial_table_reference *: [PartialTableReference](#ansys.grantami.backend.soap.PartialTableReference.PartialTableReference)*

Property partial_table_reference is of type [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference).

* **Return type:**
  [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference)

<a id="ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute.preferred_x_axis_parameter"></a>

#### *property* preferred_x_axis_parameter *: [ParameterReference](#ansys.grantami.backend.soap.ParameterReference.ParameterReference)*

Property preferred_x_axis_parameter is of type [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference).

* **Return type:**
  [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference)

<a id="ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute.pseudo_attribute"></a>

#### *property* pseudo_attribute *: [int](https://docs.python.org/3/library/functions.html#int)*

Property pseudo_attribute is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute.specific_unit_conversion_context"></a>

#### *property* specific_unit_conversion_context *: [SpecificUnitConversionContext](#ansys.grantami.backend.soap.SpecificUnitConversionContext.SpecificUnitConversionContext)*

Property specific_unit_conversion_context is of type [`SpecificUnitConversionContext`](#module-ansys.grantami.backend.soap.SpecificUnitConversionContext).

* **Return type:**
  [`SpecificUnitConversionContext`](#module-ansys.grantami.backend.soap.SpecificUnitConversionContext)

<a id="module-ansys.grantami.backend.soap.Exporter"></a>

<a id="exporter"></a>

### Exporter

<a id="ansys.grantami.backend.soap.Exporter.Exporter"></a>

### *class* Exporter(absolute_units_optional=None, description=None, key=None, model=None, name=None, output_file=None, package=None, transforms=None, unit_systems=None, use_absolute_units=None, validated_ok=None, version=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Details of a particular FEA Exporter configuration, typically obtained from an Exporter
Configuration File (EXP file) on the MI Server.

* **Parameters:**
  * **absolute_units_optional** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **description** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **model** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **output_file** ([`ExporterOutputFile`](#module-ansys.grantami.backend.soap.ExporterOutputFile))
  * **package** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **transforms** (list of [`ExporterTransform`](#module-ansys.grantami.backend.soap.ExporterTransform))
  * **unit_systems** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **use_absolute_units** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **validated_ok** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **version** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.Exporter.Exporter.absolute_units_optional"></a>

#### *property* absolute_units_optional *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property absolute_units_optional is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property description is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.key"></a>

#### *property* key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property key is of type str. The key that uniquely identifies this Exporter. This value is generated by the MI Server at runtime and may change between runs.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.model"></a>

#### *property* model *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property model is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.output_file"></a>

#### *property* output_file *: [ExporterOutputFile](#ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile)*

Property output_file is of type [`ExporterOutputFile`](#module-ansys.grantami.backend.soap.ExporterOutputFile).

* **Return type:**
  [`ExporterOutputFile`](#module-ansys.grantami.backend.soap.ExporterOutputFile)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.package"></a>

#### *property* package *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property package is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.transforms"></a>

#### *property* transforms *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ExporterTransform](#ansys.grantami.backend.soap.ExporterTransform.ExporterTransform)]*

Property transforms is a list of [`ExporterTransform`](#module-ansys.grantami.backend.soap.ExporterTransform) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ExporterTransform`](#module-ansys.grantami.backend.soap.ExporterTransform)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.unit_systems"></a>

#### *property* unit_systems *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property unit_systems is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.use_absolute_units"></a>

#### *property* use_absolute_units *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property use_absolute_units is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.validated_ok"></a>

#### *property* validated_ok *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property validated_ok is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.Exporter.Exporter.version"></a>

#### *property* version *: [int](https://docs.python.org/3/library/functions.html#int)*

Property version is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.ExporterOutputFile"></a>

<a id="exporteroutputfile"></a>

### ExporterOutputFile

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile"></a>

### *class* ExporterOutputFile(convention=None, custom_file_name=None, encoding=None, extension=None, folder=None, include_bom=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Specifies how an output file should be named. All values have the same meaning as in the
[`Exporter`](#module-ansys.grantami.backend.soap.Exporter) configuration schema. It is up to the client to
adhere (or not) to this.

* **Parameters:**
  * **convention** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **custom_file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **encoding** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **extension** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **folder** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **include_bom** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention"></a>

#### *class* ExporterFileNameConvention

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.Custom"></a>

#### Custom *= 4*

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.Default"></a>

#### Default *= 0*

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.RecordName"></a>

#### RecordName *= 3*

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.TableName"></a>

#### TableName *= 2*

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention.TreeName"></a>

#### TreeName *= 1*

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.convention"></a>

#### *property* convention *: [int](https://docs.python.org/3/library/functions.html#int)*

Property convention is of type int. See [`ExporterOutputFile.ExporterFileNameConvention`](#ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.ExporterFileNameConvention) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.custom_file_name"></a>

#### *property* custom_file_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property custom_file_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.encoding"></a>

#### *property* encoding *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property encoding is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.extension"></a>

#### *property* extension *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property extension is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.folder"></a>

#### *property* folder *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property folder is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterOutputFile.ExporterOutputFile.include_bom"></a>

#### *property* include_bom *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property include_bom is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.ExporterParameter"></a>

<a id="exporterparameter"></a>

### ExporterParameter

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter"></a>

### *class* ExporterParameter(id_=None, name=None, parameter_reference=None, unit=None, usage=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a Parameter of Functional Data.

* **Parameters:**
  * **id** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **parameter_reference** ([`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference))
  * **unit** ([`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation))
  * **usage** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.Usage"></a>

#### *class* Usage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.Usage.Unknown"></a>

#### Unknown *= 0*

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.Usage.fixed"></a>

#### fixed *= 2*

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.Usage.free"></a>

#### free *= 1*

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.Usage.unused"></a>

#### unused *= 3*

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.id_"></a>

#### *property* id_ *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property id_ is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.parameter_reference"></a>

#### *property* parameter_reference *: [ParameterReference](#ansys.grantami.backend.soap.ParameterReference.ParameterReference)*

Property parameter_reference is of type [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference).

* **Return type:**
  [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference)

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.unit"></a>

#### *property* unit *: [UnitInformation](#ansys.grantami.backend.soap.UnitInformation.UnitInformation)*

Property unit is of type [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation).

* **Return type:**
  [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation)

<a id="ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.usage"></a>

#### *property* usage *: [int](https://docs.python.org/3/library/functions.html#int)*

Property usage is of type int. See [`ExporterParameter.Usage`](#ansys.grantami.backend.soap.ExporterParameter.ExporterParameter.Usage) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.ExporterPopulation"></a>

<a id="exporterpopulation"></a>

### ExporterPopulation

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation"></a>

### *class* ExporterPopulation(description=None, key=None, model=None, name=None, package=None, population_state=None, transforms=None, validated_ok=None, version=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Details of a particular FEA [`Exporter`](#module-ansys.grantami.backend.soap.Exporter) configuration, typically
obtained from an [`Exporter`](#module-ansys.grantami.backend.soap.Exporter) Configuration File (EXP file) on
the MI Server.

* **Parameters:**
  * **description** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **model** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **package** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **population_state** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **transforms** (list of [`ExporterTransform`](#module-ansys.grantami.backend.soap.ExporterTransform))
  * **validated_ok** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **version** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.PopulationState"></a>

#### *class* PopulationState

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.PopulationState.FullyPopulated"></a>

#### FullyPopulated *= 1*

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.PopulationState.PartiallyPopulated"></a>

#### PartiallyPopulated *= 2*

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.PopulationState.Unknown"></a>

#### Unknown *= 0*

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property description is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.key"></a>

#### *property* key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.model"></a>

#### *property* model *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property model is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.package"></a>

#### *property* package *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property package is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.population_state"></a>

#### *property* population_state *: [int](https://docs.python.org/3/library/functions.html#int)*

Property population_state is of type int. See [`ExporterPopulation.PopulationState`](#ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.PopulationState) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.transforms"></a>

#### *property* transforms *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ExporterTransform](#ansys.grantami.backend.soap.ExporterTransform.ExporterTransform)]*

Property transforms is a list of [`ExporterTransform`](#module-ansys.grantami.backend.soap.ExporterTransform) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ExporterTransform`](#module-ansys.grantami.backend.soap.ExporterTransform)

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.validated_ok"></a>

#### *property* validated_ok *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property validated_ok is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation.version"></a>

#### *property* version *: [int](https://docs.python.org/3/library/functions.html#int)*

Property version is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.ExporterTransform"></a>

<a id="exportertransform"></a>

### ExporterTransform

<a id="ansys.grantami.backend.soap.ExporterTransform.ExporterTransform"></a>

### *class* ExporterTransform(id_=None, type_=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains a type and an ID for an [`Exporter`](#module-ansys.grantami.backend.soap.Exporter) Transform.

* **Parameters:**
  * **id** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **type** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.ExporterTransform.ExporterTransform.Type"></a>

#### *class* Type

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.ExporterTransform.ExporterTransform.Type.Unknown"></a>

#### Unknown *= 0*

<a id="ansys.grantami.backend.soap.ExporterTransform.ExporterTransform.Type.XSLT"></a>

#### XSLT *= 1*

<a id="ansys.grantami.backend.soap.ExporterTransform.ExporterTransform.id_"></a>

#### *property* id_ *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property id_ is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExporterTransform.ExporterTransform.type_"></a>

#### *property* type_ *: [int](https://docs.python.org/3/library/functions.html#int)*

Property type_ is of type int. See [`ExporterTransform.Type`](#ansys.grantami.backend.soap.ExporterTransform.ExporterTransform.Type) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.ExportersForRecord"></a>

<a id="exportersforrecord"></a>

### ExportersForRecord

<a id="ansys.grantami.backend.soap.ExportersForRecord.ExportersForRecord"></a>

### *class* ExportersForRecord(exporters=None, record=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a record and its associated exporters.

* **Parameters:**
  * **exporters** (list of [`ExporterPopulation`](#module-ansys.grantami.backend.soap.ExporterPopulation))
  * **record** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.ExportersForRecord.ExportersForRecord.exporters"></a>

#### *property* exporters *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ExporterPopulation](#ansys.grantami.backend.soap.ExporterPopulation.ExporterPopulation)]*

Property exporters is a list of [`ExporterPopulation`](#module-ansys.grantami.backend.soap.ExporterPopulation) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ExporterPopulation`](#module-ansys.grantami.backend.soap.ExporterPopulation)

<a id="ansys.grantami.backend.soap.ExportersForRecord.ExportersForRecord.record"></a>

#### *property* record *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.ExportersForRecordsRequest"></a>

<a id="exportersforrecordsrequest"></a>

### ExportersForRecordsRequest

<a id="ansys.grantami.backend.soap.ExportersForRecordsRequest.ExportersForRecordsRequest"></a>

### *class* ExportersForRecordsRequest(applicability_tag=None, model=None, package=None, package_and_model_required=None, records=None, specific_attribute_exporters_only=None, version_policy=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the ExportersForRecords operation.

* **Parameters:**
  * **applicability_tag** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **model** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **package** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **package_and_model_required** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **specific_attribute_exporters_only** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **version_policy** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.ExportersForRecordsRequest.ExportersForRecordsRequest.add_record"></a>

#### add_record(\_recordReference)

Appends \_recordReference to records property on ExportersForRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.ExportersForRecordsRequest.ExportersForRecordsRequest.applicability_tag"></a>

#### *property* applicability_tag *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property applicability_tag is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExportersForRecordsRequest.ExportersForRecordsRequest.model"></a>

#### *property* model *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property model is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExportersForRecordsRequest.ExportersForRecordsRequest.package"></a>

#### *property* package *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property package is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ExportersForRecordsRequest.ExportersForRecordsRequest.package_and_model_required"></a>

#### *property* package_and_model_required *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property package_and_model_required is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.ExportersForRecordsRequest.ExportersForRecordsRequest.records"></a>

#### *property* records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.ExportersForRecordsRequest.ExportersForRecordsRequest.specific_attribute_exporters_only"></a>

#### *property* specific_attribute_exporters_only *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property specific_attribute_exporters_only is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.ExportersForRecordsRequest.ExportersForRecordsRequest.version_policy"></a>

#### *property* version_policy *: [int](https://docs.python.org/3/library/functions.html#int)*

Property version_policy is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.ExportersForRecordsResponse"></a>

<a id="exportersforrecordsresponse"></a>

### ExportersForRecordsResponse

<a id="ansys.grantami.backend.soap.ExportersForRecordsResponse.ExportersForRecordsResponse"></a>

### *class* ExportersForRecordsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the ExportersForRecords operation. Contains a list of records and supported exporters.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a ExportersForRecordsResponse object.

<a id="ansys.grantami.backend.soap.ExportersForRecordsResponse.ExportersForRecordsResponse.records"></a>

#### *property* records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ExportersForRecord](#ansys.grantami.backend.soap.ExportersForRecord.ExportersForRecord)]*

Property records is a list of [`ExportersForRecord`](#module-ansys.grantami.backend.soap.ExportersForRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ExportersForRecord`](#module-ansys.grantami.backend.soap.ExportersForRecord)

<a id="module-ansys.grantami.backend.soap.FileDataType"></a>

<a id="filedatatype"></a>

### FileDataType

<a id="ansys.grantami.backend.soap.FileDataType.FileDataType"></a>

### *class* FileDataType(url=None, content_type=None, data=None, description=None, file_name=None, is_applicable=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type representing a piece of File data in a Granta MI database.
The URL can be used to data export a file from a Granta MI database. For importing a file into a
Granta MI database, the values of ‘file_name’, file ‘content_type’ and file ‘data’ must be
specified, where ‘file_name’ is the name you want the file to appear as in Granta MI, the
‘content_type’ data is the MIME content type of the binary data, and ‘data’ is the contents of the
file you wish to import to Granta MI.

* **Parameters:**
  * **url** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **content_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **data** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **description** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **file_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.FileDataType.FileDataType.modify_binary_data"></a>

#### modify_binary_data(binary_data)

Modify the byte string data of the file.

* **Parameters:**
  **binary_data** ([*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes))

<a id="ansys.grantami.backend.soap.FileDataType.FileDataType.read_binary_data"></a>

#### read_binary_data()

Return a byte string representation of this file.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)

<a id="ansys.grantami.backend.soap.FileDataType.FileDataType.content_type"></a>

#### *property* content_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property content_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.FileDataType.FileDataType.data"></a>

#### *property* data *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property data is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.FileDataType.FileDataType.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property description is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.FileDataType.FileDataType.file_name"></a>

#### *property* file_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property file_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.FileDataType.FileDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FileDataType.FileDataType.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property url is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.FloatFunctionalGraph"></a>

<a id="floatfunctionalgraph"></a>

### FloatFunctionalGraph

<a id="ansys.grantami.backend.soap.FloatFunctionalGraph.FloatFunctionalGraph"></a>

### *class* FloatFunctionalGraph(hide_graph=None, logarithmic_y_axis=None, series=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a collection of [`Series`](#module-ansys.grantami.backend.soap.Series) objects that contain
the functional data.

* **Parameters:**
  * **hide_graph** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **logarithmic_y_axis** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **series** (list of [`Series`](#module-ansys.grantami.backend.soap.Series))

<a id="ansys.grantami.backend.soap.FloatFunctionalGraph.FloatFunctionalGraph.add_series"></a>

#### add_series(\_series)

Appends \_series to series property on FloatFunctionalGraph C-object.

* **Parameters:**
  **\_series** ([`Series`](#module-ansys.grantami.backend.soap.Series))

<a id="ansys.grantami.backend.soap.FloatFunctionalGraph.FloatFunctionalGraph.hide_graph"></a>

#### *property* hide_graph *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property hide_graph is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FloatFunctionalGraph.FloatFunctionalGraph.logarithmic_y_axis"></a>

#### *property* logarithmic_y_axis *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property logarithmic_y_axis is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FloatFunctionalGraph.FloatFunctionalGraph.series"></a>

#### *property* series *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[Series](#ansys.grantami.backend.soap.Series.Series)]*

Property series is a list of [`Series`](#module-ansys.grantami.backend.soap.Series) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`Series`](#module-ansys.grantami.backend.soap.Series)

<a id="module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType"></a>

<a id="floatfunctionalgriddeddatatype"></a>

### FloatFunctionalGriddedDataType

<a id="ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType"></a>

### *class* FloatFunctionalGriddedDataType(decoration=None, default_x_axis_parameter=None, is_applicable=None, unit_information=None, values=None, functional_data_parameter_settings=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type to contain the values of float-valued functional gridded data.
For requests, Values and [`Parameters`](#module-ansys.grantami.backend.soap.Parameters) are required.

* **Parameters:**
  * **decoration** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **default_x_axis_parameter** ([`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **unit_information** ([`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation))
  * **values** ([`FloatFunctionalValues`](#module-ansys.grantami.backend.soap.FloatFunctionalValues))
  * **functional_data_parameter_settings** (list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings))

<a id="ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.add_functional_data_parameter_settings"></a>

#### add_functional_data_parameter_settings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on FloatFunctionalGriddedDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** ([`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings))

<a id="ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.decoration"></a>

#### *property* decoration *: [int](https://docs.python.org/3/library/functions.html#int)*

Property decoration is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.default_x_axis_parameter"></a>

#### *property* default_x_axis_parameter *: [ParameterInformation](#ansys.grantami.backend.soap.ParameterInformation.ParameterInformation)*

Property default_x_axis_parameter is of type [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation).

* **Return type:**
  [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation)

<a id="ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.functional_data_parameter_settings"></a>

#### *property* functional_data_parameter_settings *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[FunctionalDataParameterSettings](#ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings)]*

Property functional_data_parameter_settings is a list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings)

<a id="ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.unit_information"></a>

#### *property* unit_information *: [UnitInformation](#ansys.grantami.backend.soap.UnitInformation.UnitInformation)*

Property unit_information is of type [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation).

* **Return type:**
  [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation)

<a id="ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType.values"></a>

#### *property* values *: [FloatFunctionalValues](#ansys.grantami.backend.soap.FloatFunctionalValues.FloatFunctionalValues)*

Property values is of type [`FloatFunctionalValues`](#module-ansys.grantami.backend.soap.FloatFunctionalValues).

* **Return type:**
  [`FloatFunctionalValues`](#module-ansys.grantami.backend.soap.FloatFunctionalValues)

<a id="module-ansys.grantami.backend.soap.FloatFunctionalPointValue"></a>

<a id="floatfunctionalpointvalue"></a>

### FloatFunctionalPointValue

<a id="ansys.grantami.backend.soap.FloatFunctionalPointValue.FloatFunctionalPointValue"></a>

### *class* FloatFunctionalPointValue(constraints=None, value=None, is_estimated=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A single grid point in Gridded Float-Valued Functional Data, where the Y-axis value is a point.

* **Parameters:**
  * **constraints** ([`Constraints`](#module-ansys.grantami.backend.soap.Constraints))
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **is_estimated** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.FloatFunctionalPointValue.FloatFunctionalPointValue.constraints"></a>

#### *property* constraints *: [Constraints](#ansys.grantami.backend.soap.Constraints.Constraints)*

Property constraints is of type [`Constraints`](#module-ansys.grantami.backend.soap.Constraints).

* **Return type:**
  [`Constraints`](#module-ansys.grantami.backend.soap.Constraints)

<a id="ansys.grantami.backend.soap.FloatFunctionalPointValue.FloatFunctionalPointValue.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_estimated is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FloatFunctionalPointValue.FloatFunctionalPointValue.value"></a>

#### *property* value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="module-ansys.grantami.backend.soap.FloatFunctionalRangeValue"></a>

<a id="floatfunctionalrangevalue"></a>

### FloatFunctionalRangeValue

<a id="ansys.grantami.backend.soap.FloatFunctionalRangeValue.FloatFunctionalRangeValue"></a>

### *class* FloatFunctionalRangeValue(constraints=None, high_value=None, low_value=None, is_estimated=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A single grid point in Gridded Float-Valued Functional Data, where the Y-axis value is a range.

* **Parameters:**
  * **constraints** ([`Constraints`](#module-ansys.grantami.backend.soap.Constraints))
  * **high_value** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **low_value** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **is_estimated** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.FloatFunctionalRangeValue.FloatFunctionalRangeValue.constraints"></a>

#### *property* constraints *: [Constraints](#ansys.grantami.backend.soap.Constraints.Constraints)*

Property constraints is of type [`Constraints`](#module-ansys.grantami.backend.soap.Constraints).

* **Return type:**
  [`Constraints`](#module-ansys.grantami.backend.soap.Constraints)

<a id="ansys.grantami.backend.soap.FloatFunctionalRangeValue.FloatFunctionalRangeValue.high_value"></a>

#### *property* high_value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property high_value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.FloatFunctionalRangeValue.FloatFunctionalRangeValue.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_estimated is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FloatFunctionalRangeValue.FloatFunctionalRangeValue.low_value"></a>

#### *property* low_value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property low_value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType"></a>

<a id="floatfunctionalseriesdatatype"></a>

### FloatFunctionalSeriesDataType

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType"></a>

### *class* FloatFunctionalSeriesDataType(graph=None, is_applicable=None, unit_information=None, functional_data_parameter_settings=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type to contain the values of float-valued functional series data.
For requests Graph, and [`Parameters`](#module-ansys.grantami.backend.soap.Parameters) are required.

* **Parameters:**
  * **graph** ([`FloatFunctionalSeriesGraph`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesGraph))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **unit_information** ([`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation))
  * **functional_data_parameter_settings** (list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings))

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.add_functional_data_parameter_settings"></a>

#### add_functional_data_parameter_settings(\_functionalDataParameterSettings)

Appends \_functionalDataParameterSettings to functionalDataParameterSettings property on FloatFunctionalSeriesDataType C-object.

* **Parameters:**
  **\_functionalDataParameterSettings** ([`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings))

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.functional_data_parameter_settings"></a>

#### *property* functional_data_parameter_settings *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[FunctionalDataParameterSettings](#ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings)]*

Property functional_data_parameter_settings is a list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`FunctionalDataParameterSettings`](#module-ansys.grantami.backend.soap.FunctionalDataParameterSettings)

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.graph"></a>

#### *property* graph *: [FloatFunctionalSeriesGraph](#ansys.grantami.backend.soap.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph)*

Property graph is of type [`FloatFunctionalSeriesGraph`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesGraph).

* **Return type:**
  [`FloatFunctionalSeriesGraph`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesGraph)

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType.unit_information"></a>

#### *property* unit_information *: [UnitInformation](#ansys.grantami.backend.soap.UnitInformation.UnitInformation)*

Property unit_information is of type [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation).

* **Return type:**
  [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation)

<a id="module-ansys.grantami.backend.soap.FloatFunctionalSeriesGraph"></a>

<a id="floatfunctionalseriesgraph"></a>

### FloatFunctionalSeriesGraph

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph"></a>

### *class* FloatFunctionalSeriesGraph(x_axis_parameter=None, hide_graph=None, logarithmic_y_axis=None, series=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type a collection of [`Series`](#module-ansys.grantami.backend.soap.Series) objects that contain the data
functional data and parameter information for the graph x-axis.
For requests an x_axis_parameter is required.

* **Parameters:**
  * **x_axis_parameter** ([`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation))
  * **hide_graph** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **logarithmic_y_axis** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **series** (list of [`Series`](#module-ansys.grantami.backend.soap.Series))

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.add_series"></a>

#### add_series(\_series)

Appends \_series to series property on FloatFunctionalSeriesGraph C-object.

* **Parameters:**
  **\_series** ([`Series`](#module-ansys.grantami.backend.soap.Series))

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.hide_graph"></a>

#### *property* hide_graph *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property hide_graph is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.logarithmic_y_axis"></a>

#### *property* logarithmic_y_axis *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property logarithmic_y_axis is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.series"></a>

#### *property* series *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[Series](#ansys.grantami.backend.soap.Series.Series)]*

Property series is a list of [`Series`](#module-ansys.grantami.backend.soap.Series) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`Series`](#module-ansys.grantami.backend.soap.Series)

<a id="ansys.grantami.backend.soap.FloatFunctionalSeriesGraph.FloatFunctionalSeriesGraph.x_axis_parameter"></a>

#### *property* x_axis_parameter *: [ParameterInformation](#ansys.grantami.backend.soap.ParameterInformation.ParameterInformation)*

Property x_axis_parameter is of type [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation).

* **Return type:**
  [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation)

<a id="module-ansys.grantami.backend.soap.FloatFunctionalValues"></a>

<a id="floatfunctionalvalues"></a>

### FloatFunctionalValues

<a id="ansys.grantami.backend.soap.FloatFunctionalValues.FloatFunctionalValues"></a>

### *class* FloatFunctionalValues(point_values=None, range_values=None, value_type=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of [`FloatFunctionalPointValue`](#module-ansys.grantami.backend.soap.FloatFunctionalPointValue) and
[`FloatFunctionalRangeValue`](#module-ansys.grantami.backend.soap.FloatFunctionalRangeValue) objects.

* **Parameters:**
  * **point_values** (list of [`FloatFunctionalPointValue`](#module-ansys.grantami.backend.soap.FloatFunctionalPointValue))
  * **range_values** (list of [`FloatFunctionalRangeValue`](#module-ansys.grantami.backend.soap.FloatFunctionalRangeValue))
  * **value_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.FloatFunctionalValues.FloatFunctionalValues.add_point_value"></a>

#### add_point_value(\_floatFunctionalPointValue)

Appends \_floatFunctionalPointValue to pointValues property on FloatFunctionalValues C-object.

* **Parameters:**
  **\_floatFunctionalPointValue** ([`FloatFunctionalPointValue`](#module-ansys.grantami.backend.soap.FloatFunctionalPointValue))

<a id="ansys.grantami.backend.soap.FloatFunctionalValues.FloatFunctionalValues.add_range_value"></a>

#### add_range_value(\_floatFunctionalRangeValue)

Appends \_floatFunctionalRangeValue to rangeValues property on FloatFunctionalValues C-object.

* **Parameters:**
  **\_floatFunctionalRangeValue** ([`FloatFunctionalRangeValue`](#module-ansys.grantami.backend.soap.FloatFunctionalRangeValue))

<a id="ansys.grantami.backend.soap.FloatFunctionalValues.FloatFunctionalValues.point_values"></a>

#### *property* point_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[FloatFunctionalPointValue](#ansys.grantami.backend.soap.FloatFunctionalPointValue.FloatFunctionalPointValue)]*

Property point_values is a list of [`FloatFunctionalPointValue`](#module-ansys.grantami.backend.soap.FloatFunctionalPointValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`FloatFunctionalPointValue`](#module-ansys.grantami.backend.soap.FloatFunctionalPointValue)

<a id="ansys.grantami.backend.soap.FloatFunctionalValues.FloatFunctionalValues.range_values"></a>

#### *property* range_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[FloatFunctionalRangeValue](#ansys.grantami.backend.soap.FloatFunctionalRangeValue.FloatFunctionalRangeValue)]*

Property range_values is a list of [`FloatFunctionalRangeValue`](#module-ansys.grantami.backend.soap.FloatFunctionalRangeValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`FloatFunctionalRangeValue`](#module-ansys.grantami.backend.soap.FloatFunctionalRangeValue)

<a id="ansys.grantami.backend.soap.FloatFunctionalValues.FloatFunctionalValues.value_type"></a>

#### *property* value_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.FunctionalDataParameterSettings"></a>

<a id="functionaldataparametersettings"></a>

### FunctionalDataParameterSettings

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings"></a>

### *class* FunctionalDataParameterSettings(datum_default_value=None, datum_interpolation_method=None, datum_scale_type=None, effective_default_value=None, effective_default_value_defined_at=None, effective_interpolation_method=None, effective_interpolation_method_defined_at=None, effective_scale_type=None, effective_scale_type_defined_at=None, has_datum_default_value=None, has_datum_interpolation_method=None, has_datum_scale_type=None, has_effective_default_value=None, parameter=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about the use of a parameter for a given Functional Data Attribute.

* **Parameters:**
  * **datum_default_value** ([`DefaultParameterValue`](#module-ansys.grantami.backend.soap.DefaultParameterValue))
  * **datum_interpolation_method** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **datum_scale_type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **effective_default_value** ([`DefaultParameterValue`](#module-ansys.grantami.backend.soap.DefaultParameterValue))
  * **effective_default_value_defined_at** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **effective_interpolation_method** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **effective_interpolation_method_defined_at** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **effective_scale_type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **effective_scale_type_defined_at** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **has_datum_default_value** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_datum_interpolation_method** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_datum_scale_type** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_effective_default_value** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **parameter** ([`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation))

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.DefinedAt"></a>

#### *class* DefinedAt

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.DefinedAt.Attribute"></a>

#### Attribute *= 1*

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.DefinedAt.Datum"></a>

#### Datum *= 2*

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.DefinedAt.Parameter"></a>

#### Parameter *= 0*

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.datum_default_value"></a>

#### *property* datum_default_value *: [DefaultParameterValue](#ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue)*

Property datum_default_value is of type [`DefaultParameterValue`](#module-ansys.grantami.backend.soap.DefaultParameterValue).

* **Return type:**
  [`DefaultParameterValue`](#module-ansys.grantami.backend.soap.DefaultParameterValue)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.datum_interpolation_method"></a>

#### *property* datum_interpolation_method *: [int](https://docs.python.org/3/library/functions.html#int)*

Property datum_interpolation_method is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.datum_scale_type"></a>

#### *property* datum_scale_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property datum_scale_type is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effective_default_value"></a>

#### *property* effective_default_value *: [DefaultParameterValue](#ansys.grantami.backend.soap.DefaultParameterValue.DefaultParameterValue)*

Property effective_default_value is of type [`DefaultParameterValue`](#module-ansys.grantami.backend.soap.DefaultParameterValue).

* **Return type:**
  [`DefaultParameterValue`](#module-ansys.grantami.backend.soap.DefaultParameterValue)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effective_default_value_defined_at"></a>

#### *property* effective_default_value_defined_at *: [int](https://docs.python.org/3/library/functions.html#int)*

Property effective_default_value_defined_at is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effective_interpolation_method"></a>

#### *property* effective_interpolation_method *: [int](https://docs.python.org/3/library/functions.html#int)*

Property effective_interpolation_method is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effective_interpolation_method_defined_at"></a>

#### *property* effective_interpolation_method_defined_at *: [int](https://docs.python.org/3/library/functions.html#int)*

Property effective_interpolation_method_defined_at is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effective_scale_type"></a>

#### *property* effective_scale_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property effective_scale_type is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.effective_scale_type_defined_at"></a>

#### *property* effective_scale_type_defined_at *: [int](https://docs.python.org/3/library/functions.html#int)*

Property effective_scale_type_defined_at is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.has_datum_default_value"></a>

#### *property* has_datum_default_value *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_datum_default_value is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.has_datum_interpolation_method"></a>

#### *property* has_datum_interpolation_method *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_datum_interpolation_method is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.has_datum_scale_type"></a>

#### *property* has_datum_scale_type *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_datum_scale_type is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.has_effective_default_value"></a>

#### *property* has_effective_default_value *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_effective_default_value is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FunctionalDataParameterSettings.FunctionalDataParameterSettings.parameter"></a>

#### *property* parameter *: [ParameterInformation](#ansys.grantami.backend.soap.ParameterInformation.ParameterInformation)*

Property parameter is of type [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation).

* **Return type:**
  [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation)

<a id="module-ansys.grantami.backend.soap.FunctionalDataSettings"></a>

<a id="functionaldatasettings"></a>

### FunctionalDataSettings

<a id="ansys.grantami.backend.soap.FunctionalDataSettings.FunctionalDataSettings"></a>

### *class* FunctionalDataSettings(convert_grid_to_series=None, max_series=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Settings affecting the export of Functional Data.
If convert_grid_to_series is true, gridded Functional Data will be converted to series data,
allowing you to avoid the need to deal with the gridded data format.

* **Parameters:**
  * **convert_grid_to_series** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **max_series** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.FunctionalDataSettings.FunctionalDataSettings.convert_grid_to_series"></a>

#### *property* convert_grid_to_series *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property convert_grid_to_series is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.FunctionalDataSettings.FunctionalDataSettings.max_series"></a>

#### *property* max_series *: [int](https://docs.python.org/3/library/functions.html#int)*

Property max_series is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.GRANTA_Constants"></a>

<a id="granta-constants"></a>

### GRANTA_Constants

<a id="ansys.grantami.backend.soap.GRANTA_Constants.BinaryDataRepresentation"></a>

### *class* BinaryDataRepresentation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.BinaryDataRepresentation.Inline"></a>

#### Inline *= 0*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.BinaryDataRepresentation.URL"></a>

#### URL *= 1*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.GraphDecoration"></a>

### *class* GraphDecoration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.GraphDecoration.Lines"></a>

#### Lines *= 0*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.GraphDecoration.LinesAndMarkers"></a>

#### LinesAndMarkers *= 2*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.GraphDecoration.Markers"></a>

#### Markers *= 1*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ImportErrorMode"></a>

### *class* ImportErrorMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ImportErrorMode.Continue"></a>

#### Continue *= 'LogAndContinueWherePossible'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ImportErrorMode.Fault"></a>

#### Fault *= 'FaultAndRollbackOnAnyError'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ImportTypes"></a>

### *class* ImportTypes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ImportTypes.Copy"></a>

#### Copy *= 'Copy'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ImportTypes.Create"></a>

#### Create *= 'Create'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ImportTypes.Update"></a>

#### Update *= 'Update'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.MinMaxType"></a>

### *class* MinMaxType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.MinMaxType.MMApproximate"></a>

#### MMApproximate *= 1*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.MinMaxType.MMNone"></a>

#### MMNone *= 0*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.MinMaxType.MMTrue"></a>

#### MMTrue *= 2*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ParameterTypes"></a>

### *class* ParameterTypes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ParameterTypes.Discrete"></a>

#### Discrete *= 'Discrete'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.ParameterTypes.Numeric"></a>

#### Numeric *= 'Numeric'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.RecordLinkCheckMode"></a>

### *class* RecordLinkCheckMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.RecordLinkCheckMode.Forward"></a>

#### Forward *= 'CheckOnlyForwardLinks'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.RecordLinkCheckMode.ForwardAndReverse"></a>

#### ForwardAndReverse *= 'CheckForwardAndReverseLinks'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.RecordLinkGroupTypes"></a>

### *class* RecordLinkGroupTypes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.RecordLinkGroupTypes.CrossDatabase"></a>

#### CrossDatabase *= 'crossDatabase'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.RecordLinkGroupTypes.Dynamic"></a>

#### Dynamic *= 'dynamic'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.RecordLinkGroupTypes.Static"></a>

#### Static *= 'static'*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.SearchMode"></a>

### *class* SearchMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.SearchMode.Normal"></a>

#### Normal *= 0*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.SearchMode.ReadOnly"></a>

#### ReadOnly *= 1*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.SearchMode.Unspecified"></a>

#### Unspecified *= 2*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter"></a>

### *class* TablesFilter

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.CoatingsTablesOnly"></a>

#### CoatingsTablesOnly *= 9*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.ElementsTablesOnly"></a>

#### ElementsTablesOnly *= 13*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.EndOfLifeOptionsTablesOnly"></a>

#### EndOfLifeOptionsTablesOnly *= 7*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.EnergyConversionOptionsTablesOnly"></a>

#### EnergyConversionOptionsTablesOnly *= 8*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.InHouseTablesOnly"></a>

#### InHouseTablesOnly *= 11*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.LegislationsTablesOnly"></a>

#### LegislationsTablesOnly *= 4*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.MaterialsTablesOnly"></a>

#### MaterialsTablesOnly *= 1*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.MobileUseTypesTablesOnly"></a>

#### MobileUseTypesTablesOnly *= 18*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.NoFilter"></a>

#### NoFilter *= 0*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.PartsTablesOnly"></a>

#### PartsTablesOnly *= 10*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.ProcessesTablesOnly"></a>

#### ProcessesTablesOnly *= 2*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.ProducersTablesOnly"></a>

#### ProducersTablesOnly *= 15*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.ReferenceTablesOnly"></a>

#### ReferenceTablesOnly *= 17*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.RegionsTablesOnly"></a>

#### RegionsTablesOnly *= 6*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.SequenceSpecificationsTablesOnly"></a>

#### SequenceSpecificationsTablesOnly *= 12*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.ShapeTablesOnly"></a>

#### ShapeTablesOnly *= 16*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.SubstancesTablesOnly"></a>

#### SubstancesTablesOnly *= 3*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.TransportTypesTablesOnly"></a>

#### TransportTypesTablesOnly *= 5*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TablesFilter.UniverseTablesOnly"></a>

#### UniverseTablesOnly *= 14*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType"></a>

### *class* TabularSummaryColumnRollupType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.Chart"></a>

#### Chart *= 10*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.CoefficientOfVariation"></a>

#### CoefficientOfVariation *= 9*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.Count"></a>

#### Count *= 6*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.CountDistinct"></a>

#### CountDistinct *= 7*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.List"></a>

#### List *= 0*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.ListDistinct"></a>

#### ListDistinct *= 8*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.Max"></a>

#### Max *= 1*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.Mean"></a>

#### Mean *= 3*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.Min"></a>

#### Min *= 2*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.StandardDeviation"></a>

#### StandardDeviation *= 4*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.TabularSummaryColumnRollupType.Sum"></a>

#### Sum *= 5*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.UpdateSubsetsMode"></a>

### *class* UpdateSubsetsMode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.UpdateSubsetsMode.Append"></a>

#### Append *= 1*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.UpdateSubsetsMode.Replace"></a>

#### Replace *= 2*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.VersionPolicy"></a>

### *class* VersionPolicy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GRANTA_Constants.VersionPolicy.IncludeAll"></a>

#### IncludeAll *= 1*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.VersionPolicy.LatestVersionPerName"></a>

#### LatestVersionPerName *= 2*

<a id="ansys.grantami.backend.soap.GRANTA_Constants.VersionPolicy.NoPolicy"></a>

#### NoPolicy *= 0*

<a id="module-ansys.grantami.backend.soap.GRANTA_Exceptions"></a>

<a id="granta-exceptions"></a>

### GRANTA_Exceptions

<a id="ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_Exception"></a>

### *exception* GRANTA_Exception(expr, msg)

Bases: [`Exception`](https://docs.python.org/3/library/exceptions.html#Exception)

Exception raised when there are errors in input.

* **Parameters:**
  * **expr** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Input expression in which the error occurred
  * **msg** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Explanation of the error

<a id="ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError"></a>

### *exception* GRANTA_ServiceLayerError(sl_response, operation)

Bases: [`Exception`](https://docs.python.org/3/library/exceptions.html#Exception)

Exception raised when the Granta MI Service Layer returns an error.

* **Parameters:**
  * **sl_response** ([`ServiceLayerResponse`](#ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse)) – Request data causing this error
  * **operation** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the operation from which this exception originated

<a id="ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError.data"></a>

#### *property* data *: [ServiceLayerResponse](#ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse)*

The raw ServiceLayerResponse object.

* **Return type:**
  [`ServiceLayerResponse`](#ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse)

<a id="ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError.message"></a>

#### *property* message *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Error message received from the Service Layer if an error occurred while processing the request, or the HTTP
status message corresponding to the status code received.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError.operation"></a>

#### *property* operation *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

The Operation invoked by this Service Layer message.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError.request_xml"></a>

#### *property* request_xml *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Content of the XML request for this Service Layer message.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError.response_code"></a>

#### *property* response_code *: [int](https://docs.python.org/3/library/functions.html#int)*

HTTP Status code received from the Service Layer.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError.response_xml"></a>

#### *property* response_xml *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Content of the XML response for this Service Layer message.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.GRANTA_Logging"></a>

<a id="granta-logging"></a>

### GRANTA_Logging

<a id="ansys.grantami.backend.soap.GRANTA_Logging.GRANTA_Logging"></a>

### *class* GRANTA_Logging

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Implements some basic logging functionality. Tracked events are printed to the console.
: For comprehensive logging capabilities, use the Python ‘logging’ module.

<a id="ansys.grantami.backend.soap.GRANTA_Logging.GRANTA_Logging.core_logger"></a>

#### *property* core_logger *: [Logger](https://docs.python.org/3/library/logging.html#logging.Logger)*

<a id="ansys.grantami.backend.soap.GRANTA_Logging.GRANTA_Logging.http_logger"></a>

#### *property* http_logger *: [Logger](https://docs.python.org/3/library/logging.html#logging.Logger)*

<a id="ansys.grantami.backend.soap.GRANTA_Logging.GRANTA_Logging.propagate"></a>

#### propagate *: [bool](https://docs.python.org/3/library/functions.html#bool)* *= True*

<a id="module-ansys.grantami.backend.soap.GRANTA_MISession"></a>

<a id="granta-misession"></a>

### GRANTA_MISession

<a id="ansys.grantami.backend.soap.GRANTA_MISession.GRANTA_MISession"></a>

### *class* GRANTA_MISession(url, username=None, password=None, domain=None, verbosity='ERROR', auto_logon=False, receive_timeout=300000, authorization=None, retries=0)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The base object for the GRANTA_MIScripting toolkit. This creates a connection to a
Granta MI Server via a Granta MI Service Layer.

Parameters username, password, domain, and auto_logon are optional - use either set_credentials or
use_auto_logon to specify the desired authentication method if these are omitted.

* **Parameters:**
  * **url** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – URL of your Granta MI Service Layer installation
  * **username** ([`str`](https://docs.python.org/3/library/stdtypes.html#str),  optional) – Your Granta MI username (for Basic authentication)
  * **password** ([`str`](https://docs.python.org/3/library/stdtypes.html#str), optional) – Your Granta MI password (for Basic authentication)
  * **domain** ([`str`](https://docs.python.org/3/library/stdtypes.html#str), optional) – Your Granta MI user domain (for Basic authentication)
  * **verbosity** ([`str`](https://docs.python.org/3/library/stdtypes.html#str), {‘ERROR’, ‘WARNING’, ‘DEBUG’}) – Logging verbosity
  * **auto_logon** ([`bool`](https://docs.python.org/3/library/functions.html#bool), default: False) – If set to True, this object will authenticate as the current Windows user
  * **receive_timeout** ([*int*](https://docs.python.org/3/library/functions.html#int)) – Time in milliseconds to wait for a response before timing out
  * **authorization** ([`OIDC`](#ansys.grantami.backend.soap.OIDC.OIDC) object) – Authorization plugin (for OpenID Connect authentication)
  * **retries** ([`int`](https://docs.python.org/3/library/functions.html#int), default: 0) – The number of times to retry failing requests

#### NOTE
If MI Scripting Toolkit has been installed on the same server machine as Granta MI, then the Granta MI
server name *must* be specified in full in the url parameter. If you use ‘localhost’ or a loopback address, MI
Scripting Toolkit will be unable to use the specified user account to connect to Granta MI.

<a id="ansys.grantami.backend.soap.GRANTA_MISession.GRANTA_MISession.test_connection"></a>

#### test_connection()

Raises a GRANTA_Exception if connection cannot be made

For example if bad credentials are provided, or Granta MI Service Layer is unreachable

<a id="ansys.grantami.backend.soap.GRANTA_MISession.GRANTA_MISession.browse_service"></a>

#### *property* browse_service *: [BrowseService](#ansys.grantami.backend.soap.BrowseService.BrowseService)*

Service providing schema browse operations.

* **Return type:**
  [`BrowseService`](#ansys.grantami.backend.soap.BrowseService.BrowseService)

<a id="ansys.grantami.backend.soap.GRANTA_MISession.GRANTA_MISession.data_export_service"></a>

#### *property* data_export_service *: [DataExportService](#ansys.grantami.backend.soap.DataExportService.DataExportService)*

Service providing data export operations.

* **Return type:**
  [`DataExportService`](#ansys.grantami.backend.soap.DataExportService.DataExportService)

<a id="ansys.grantami.backend.soap.GRANTA_MISession.GRANTA_MISession.data_import_service"></a>

#### *property* data_import_service *: [DataImportService](#ansys.grantami.backend.soap.DataImportService.DataImportService)*

Service providing data import operations.

* **Return type:**
  [`DataImportService`](#ansys.grantami.backend.soap.DataImportService.DataImportService)

<a id="ansys.grantami.backend.soap.GRANTA_MISession.GRANTA_MISession.engineering_data_service"></a>

#### *property* engineering_data_service *: [EngineeringDataService](#ansys.grantami.backend.soap.EngineeringDataService.EngineeringDataService)*

Service providing export operations for Finite Element Analysis material cards.

* **Return type:**
  [`EngineeringDataService`](#ansys.grantami.backend.soap.EngineeringDataService.EngineeringDataService)

<a id="ansys.grantami.backend.soap.GRANTA_MISession.GRANTA_MISession.record_manipulator_service"></a>

#### *property* record_manipulator_service *: [RecordManipulatorService](#ansys.grantami.backend.soap.RecordManipulatorService.RecordManipulatorService)*

Service providing additional operations for record manipulation.

* **Return type:**
  [`RecordManipulatorService`](#ansys.grantami.backend.soap.RecordManipulatorService.RecordManipulatorService)

<a id="ansys.grantami.backend.soap.GRANTA_MISession.GRANTA_MISession.search_service"></a>

#### *property* search_service *: [SearchService](#ansys.grantami.backend.soap.SearchService.SearchService)*

Service providing record search operations.

* **Return type:**
  [`SearchService`](#ansys.grantami.backend.soap.SearchService.SearchService)

<a id="module-ansys.grantami.backend.soap.GetAssociatedRecordsRequest"></a>

<a id="getassociatedrecordsrequest"></a>

### GetAssociatedRecordsRequest

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest"></a>

### *class* GetAssociatedRecordsRequest(attribute_references=None, link_direction=None, populate_guids=None, record_filter=None, record_references=None, table_reference=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_associated_records operation.

* **Parameters:**
  * **attribute_references** (list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **link_direction** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **populate_guids** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **record_filter** ([`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter))
  * **record_references** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **table_reference** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection"></a>

#### *class* AssociationLinkDirection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection.Both"></a>

#### Both *= 0*

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection.Forward"></a>

#### Forward *= 1*

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection.NONE"></a>

#### NONE *= -1*

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.AssociationLinkDirection.Reverse"></a>

#### Reverse *= 2*

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.add_attribute_reference"></a>

#### add_attribute_reference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetAssociatedRecordsRequest C-object.

* **Parameters:**
  **\_attributeReference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.add_record_reference"></a>

#### add_record_reference(\_recordReference)

Appends \_recordReference to recordReferences property on GetAssociatedRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.attribute_references"></a>

#### *property* attribute_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)]*

Property attribute_references is a list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.link_direction"></a>

#### *property* link_direction *: [int](https://docs.python.org/3/library/functions.html#int)*

Property link_direction is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.populate_guids"></a>

#### *property* populate_guids *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property populate_guids is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.record_filter"></a>

#### *property* record_filter *: [RecordFilter](#ansys.grantami.backend.soap.RecordFilter.RecordFilter)*

Property record_filter is of type [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter).

* **Return type:**
  [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter)

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.record_references"></a>

#### *property* record_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property record_references is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsRequest.GetAssociatedRecordsRequest.table_reference"></a>

#### *property* table_reference *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property table_reference is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="module-ansys.grantami.backend.soap.GetAssociatedRecordsResponse"></a>

<a id="getassociatedrecordsresponse"></a>

### GetAssociatedRecordsResponse

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsResponse.GetAssociatedRecordsResponse"></a>

### *class* GetAssociatedRecordsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the GetAssociatedRecords operation.
An array of [`AssociatedRecords`](#module-ansys.grantami.backend.soap.AssociatedRecords) objects.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetAssociatedRecordsResponse object.

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsResponse.GetAssociatedRecordsResponse.add_associated_records"></a>

#### add_associated_records(\_associatedRecords)

Appends \_associatedRecords to associatedRecords property on GetAssociatedRecordsResponse C-object.

* **Parameters:**
  **\_associatedRecords** ([`AssociatedRecords`](#module-ansys.grantami.backend.soap.AssociatedRecords))

<a id="ansys.grantami.backend.soap.GetAssociatedRecordsResponse.GetAssociatedRecordsResponse.associated_records"></a>

#### *property* associated_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AssociatedRecords](#ansys.grantami.backend.soap.AssociatedRecords.AssociatedRecords)]*

Property associated_records is a list of [`AssociatedRecords`](#module-ansys.grantami.backend.soap.AssociatedRecords) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AssociatedRecords`](#module-ansys.grantami.backend.soap.AssociatedRecords)

<a id="module-ansys.grantami.backend.soap.GetAttributeDetailsRequest"></a>

<a id="getattributedetailsrequest"></a>

### GetAttributeDetailsRequest

<a id="ansys.grantami.backend.soap.GetAttributeDetailsRequest.GetAttributeDetailsRequest"></a>

### *class* GetAttributeDetailsRequest(attribute_references=None, min_max_calculation=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_attribute_details operation.
For requests at least one [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) is required.

* **Parameters:**
  * **attribute_references** (list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **min_max_calculation** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.GetAttributeDetailsRequest.GetAttributeDetailsRequest.add_attribute_reference"></a>

#### add_attribute_reference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetAttributeDetailsRequest C-object.

* **Parameters:**
  **\_attributeReference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.GetAttributeDetailsRequest.GetAttributeDetailsRequest.attribute_references"></a>

#### *property* attribute_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)]*

Property attribute_references is a list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.GetAttributeDetailsRequest.GetAttributeDetailsRequest.min_max_calculation"></a>

#### *property* min_max_calculation *: [int](https://docs.python.org/3/library/functions.html#int)*

Property min_max_calculation is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.GetAttributeDetailsResponse"></a>

<a id="getattributedetailsresponse"></a>

### GetAttributeDetailsResponse

<a id="ansys.grantami.backend.soap.GetAttributeDetailsResponse.GetAttributeDetailsResponse"></a>

### *class* GetAttributeDetailsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_attribute_details operation.
Includes an array of [`AttributeDetail`](#module-ansys.grantami.backend.soap.AttributeDetail) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetAttributeDetailsResponse object.

<a id="ansys.grantami.backend.soap.GetAttributeDetailsResponse.GetAttributeDetailsResponse.add_attribute_details"></a>

#### add_attribute_details(\_attributeDetail)

Appends \_attributeDetail to attributeDetails property on GetAttributeDetailsResponse C-object.

* **Parameters:**
  **\_attributeDetail** ([`AttributeDetail`](#module-ansys.grantami.backend.soap.AttributeDetail))

<a id="ansys.grantami.backend.soap.GetAttributeDetailsResponse.GetAttributeDetailsResponse.attribute_details"></a>

#### *property* attribute_details *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeDetail](#ansys.grantami.backend.soap.AttributeDetail.AttributeDetail)]*

Property attribute_details is a list of [`AttributeDetail`](#module-ansys.grantami.backend.soap.AttributeDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeDetail`](#module-ansys.grantami.backend.soap.AttributeDetail)

<a id="module-ansys.grantami.backend.soap.GetAttributeParametersRequest"></a>

<a id="getattributeparametersrequest"></a>

### GetAttributeParametersRequest

<a id="ansys.grantami.backend.soap.GetAttributeParametersRequest.GetAttributeParametersRequest"></a>

### *class* GetAttributeParametersRequest(attribute_references=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_attribute_parameters operation.
For requests, at least one [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) is required.

* **Parameters:**
  **attribute_references** (list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.GetAttributeParametersRequest.GetAttributeParametersRequest.add_attribute_reference"></a>

#### add_attribute_reference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetAttributeParametersRequest C-object.

* **Parameters:**
  **\_attributeReference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.GetAttributeParametersRequest.GetAttributeParametersRequest.attribute_references"></a>

#### *property* attribute_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)]*

Property attribute_references is a list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="module-ansys.grantami.backend.soap.GetAttributeParametersResponse"></a>

<a id="getattributeparametersresponse"></a>

### GetAttributeParametersResponse

<a id="ansys.grantami.backend.soap.GetAttributeParametersResponse.GetAttributeParametersResponse"></a>

### *class* GetAttributeParametersResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_attribute_parameters operation.
Includes an array of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetAttributeParametersResponse object.

<a id="ansys.grantami.backend.soap.GetAttributeParametersResponse.GetAttributeParametersResponse.attribute_parameters"></a>

#### *property* attribute_parameters *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ParameterDetail](#ansys.grantami.backend.soap.ParameterDetail.ParameterDetail)]*

Property attribute_parameters is a list of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail)

<a id="module-ansys.grantami.backend.soap.GetAvailableExportersRequest"></a>

<a id="getavailableexportersrequest"></a>

### GetAvailableExportersRequest

<a id="ansys.grantami.backend.soap.GetAvailableExportersRequest.GetAvailableExportersRequest"></a>

### *class* GetAvailableExportersRequest(db_key=None, applicability_tag=None, match_db=None, model=None, package=None, partial_table_reference=None, version_policy=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_available_exporters operation.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **applicability_tag** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **match_db** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **model** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **package** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **partial_table_reference** ([`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference))
  * **version_policy** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.GetAvailableExportersRequest.GetAvailableExportersRequest.applicability_tag"></a>

#### *property* applicability_tag *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property applicability_tag is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetAvailableExportersRequest.GetAvailableExportersRequest.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetAvailableExportersRequest.GetAvailableExportersRequest.match_db"></a>

#### *property* match_db *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property match_db is of type bool. If true, we check that the exporter config Table element is in a Database element for the right db_key.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetAvailableExportersRequest.GetAvailableExportersRequest.model"></a>

#### *property* model *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property model is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetAvailableExportersRequest.GetAvailableExportersRequest.package"></a>

#### *property* package *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property package is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetAvailableExportersRequest.GetAvailableExportersRequest.partial_table_reference"></a>

#### *property* partial_table_reference *: [PartialTableReference](#ansys.grantami.backend.soap.PartialTableReference.PartialTableReference)*

Property partial_table_reference is of type [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference).

* **Return type:**
  [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference)

<a id="ansys.grantami.backend.soap.GetAvailableExportersRequest.GetAvailableExportersRequest.version_policy"></a>

#### *property* version_policy *: [int](https://docs.python.org/3/library/functions.html#int)*

Property version_policy is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.GetAvailableExportersResponse"></a>

<a id="getavailableexportersresponse"></a>

### GetAvailableExportersResponse

<a id="ansys.grantami.backend.soap.GetAvailableExportersResponse.GetAvailableExportersResponse"></a>

### *class* GetAvailableExportersResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_available_exporters operation. Contains a list of exporters.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetAvailableExportersResponse object.

<a id="ansys.grantami.backend.soap.GetAvailableExportersResponse.GetAvailableExportersResponse.exporters"></a>

#### *property* exporters *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[Exporter](#ansys.grantami.backend.soap.Exporter.Exporter)]*

Property exporters is a list of [`Exporter`](#module-ansys.grantami.backend.soap.Exporter) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`Exporter`](#module-ansys.grantami.backend.soap.Exporter)

<a id="module-ansys.grantami.backend.soap.GetChildNodes"></a>

<a id="getchildnodes"></a>

### GetChildNodes

<a id="ansys.grantami.backend.soap.GetChildNodes.GetChildNodes"></a>

### *class* GetChildNodes(exclude_withdrawn=None, parent=None, populate_guids=None, record_filter=None, recurse=None, recurse_max_depth=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_child_nodes operation.
A [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) for the record you wish to find the children
of is required.

* **Parameters:**
  * **exclude_withdrawn** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **parent** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **populate_guids** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **record_filter** ([`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter))
  * **recurse** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **recurse_max_depth** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.GetChildNodes.GetChildNodes.exclude_withdrawn"></a>

#### *property* exclude_withdrawn *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property exclude_withdrawn is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetChildNodes.GetChildNodes.parent"></a>

#### *property* parent *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property parent is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.GetChildNodes.GetChildNodes.populate_guids"></a>

#### *property* populate_guids *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property populate_guids is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetChildNodes.GetChildNodes.record_filter"></a>

#### *property* record_filter *: [RecordFilter](#ansys.grantami.backend.soap.RecordFilter.RecordFilter)*

Property record_filter is of type [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter).

* **Return type:**
  [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter)

<a id="ansys.grantami.backend.soap.GetChildNodes.GetChildNodes.recurse"></a>

#### *property* recurse *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property recurse is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetChildNodes.GetChildNodes.recurse_max_depth"></a>

#### *property* recurse_max_depth *: [int](https://docs.python.org/3/library/functions.html#int)*

Property recurse_max_depth is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.GetChildNodesResponse"></a>

<a id="getchildnodesresponse"></a>

### GetChildNodesResponse

<a id="ansys.grantami.backend.soap.GetChildNodesResponse.GetChildNodesResponse"></a>

### *class* GetChildNodesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Response for the get_child_nodes operation.
Includes an array of [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetChildNodesResponse object.

<a id="ansys.grantami.backend.soap.GetChildNodesResponse.GetChildNodesResponse.add_tree_record"></a>

#### add_tree_record(\_treeRecord)

Appends \_treeRecord to treeRecords property on GetChildNodesResponse C-object.

* **Parameters:**
  **\_treeRecord** ([`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord))

<a id="ansys.grantami.backend.soap.GetChildNodesResponse.GetChildNodesResponse.tree_records"></a>

#### *property* tree_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TreeRecord](#ansys.grantami.backend.soap.TreeRecord.TreeRecord)]*

Property tree_records is a list of [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord)

<a id="module-ansys.grantami.backend.soap.GetCurrenciesResponse"></a>

<a id="getcurrenciesresponse"></a>

### GetCurrenciesResponse

<a id="ansys.grantami.backend.soap.GetCurrenciesResponse.GetCurrenciesResponse"></a>

### *class* GetCurrenciesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Response for the get_currencies operation.
Includes an array of [`CurrencyDetail`](#module-ansys.grantami.backend.soap.CurrencyDetail) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetCurrenciesResponse object.

<a id="ansys.grantami.backend.soap.GetCurrenciesResponse.GetCurrenciesResponse.currencies"></a>

#### *property* currencies *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[CurrencyDetail](#ansys.grantami.backend.soap.CurrencyDetail.CurrencyDetail)]*

Property currencies is a list of [`CurrencyDetail`](#module-ansys.grantami.backend.soap.CurrencyDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`CurrencyDetail`](#module-ansys.grantami.backend.soap.CurrencyDetail)

<a id="module-ansys.grantami.backend.soap.GetDatabaseParameters"></a>

<a id="getdatabaseparameters"></a>

### GetDatabaseParameters

<a id="ansys.grantami.backend.soap.GetDatabaseParameters.GetDatabaseParameters"></a>

### *class* GetDatabaseParameters(db_key=None, require_standard_names=None, use_standard_names_where_possible=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_database_parameters operation.
Requires a db_key to be set. The parameters require_standard_names and
use_standard_names_where_possible both default to false.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **require_standard_names** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **use_standard_names_where_possible** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.GetDatabaseParameters.GetDatabaseParameters.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetDatabaseParameters.GetDatabaseParameters.require_standard_names"></a>

#### *property* require_standard_names *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property require_standard_names is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetDatabaseParameters.GetDatabaseParameters.use_standard_names_where_possible"></a>

#### *property* use_standard_names_where_possible *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property use_standard_names_where_possible is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.GetDatabaseParametersResponse"></a>

<a id="getdatabaseparametersresponse"></a>

### GetDatabaseParametersResponse

<a id="ansys.grantami.backend.soap.GetDatabaseParametersResponse.GetDatabaseParametersResponse"></a>

### *class* GetDatabaseParametersResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_database_parameters operation.
Includes an array of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetDatabaseParametersResponse object.

<a id="ansys.grantami.backend.soap.GetDatabaseParametersResponse.GetDatabaseParametersResponse.add_parameter_detail"></a>

#### add_parameter_detail(\_parameterDetail)

Appends \_parameterDetail to parameterDetails property on GetDatabaseParametersResponse C-object.

* **Parameters:**
  **\_parameterDetail** ([`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail))

<a id="ansys.grantami.backend.soap.GetDatabaseParametersResponse.GetDatabaseParametersResponse.parameter_details"></a>

#### *property* parameter_details *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ParameterDetail](#ansys.grantami.backend.soap.ParameterDetail.ParameterDetail)]*

Property parameter_details is a list of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail)

<a id="module-ansys.grantami.backend.soap.GetDatabasesResponse"></a>

<a id="getdatabasesresponse"></a>

### GetDatabasesResponse

<a id="ansys.grantami.backend.soap.GetDatabasesResponse.GetDatabasesResponse"></a>

### *class* GetDatabasesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_databases operation.
Includes an array of [`DatabaseDetail`](#module-ansys.grantami.backend.soap.DatabaseDetail) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetDatabasesResponse object.

<a id="ansys.grantami.backend.soap.GetDatabasesResponse.GetDatabasesResponse.add_database"></a>

#### add_database(\_databaseDetail)

Appends \_databaseDetail to databases property on GetDatabasesResponse C-object.

* **Parameters:**
  **\_databaseDetail** ([`DatabaseDetail`](#module-ansys.grantami.backend.soap.DatabaseDetail))

<a id="ansys.grantami.backend.soap.GetDatabasesResponse.GetDatabasesResponse.databases"></a>

#### *property* databases *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DatabaseDetail](#ansys.grantami.backend.soap.DatabaseDetail.DatabaseDetail)]*

Property databases is a list of [`DatabaseDetail`](#module-ansys.grantami.backend.soap.DatabaseDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DatabaseDetail`](#module-ansys.grantami.backend.soap.DatabaseDetail)

<a id="module-ansys.grantami.backend.soap.GetDatasheetPath"></a>

<a id="getdatasheetpath"></a>

### GetDatasheetPath

<a id="ansys.grantami.backend.soap.GetDatasheetPath.GetDatasheetPath"></a>

### *class* GetDatasheetPath(datasheet_type=None, record_references=None, unit_conversion_context=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_datasheet_path operation.
Requires at least one [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) to be provided. The
parameters unit_conversion_context and datasheet_type are optional. datasheet_type defaults to
‘Datasheet’.

* **Parameters:**
  * **datasheet_type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **record_references** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **unit_conversion_context** ([`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext))

<a id="ansys.grantami.backend.soap.GetDatasheetPath.GetDatasheetPath.add_record_reference"></a>

#### add_record_reference(\_recordReference)

Appends \_recordReference to recordReferences property on GetDatasheetPath C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetDatasheetPath.GetDatasheetPath.datasheet_type"></a>

#### *property* datasheet_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property datasheet_type is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.GetDatasheetPath.GetDatasheetPath.record_references"></a>

#### *property* record_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property record_references is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.GetDatasheetPath.GetDatasheetPath.unit_conversion_context"></a>

#### *property* unit_conversion_context *: [UnitConversionContext](#ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext)*

Property unit_conversion_context is of type [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext).

* **Return type:**
  [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext)

<a id="module-ansys.grantami.backend.soap.GetDatasheetPathParameterized"></a>

<a id="getdatasheetpathparameterized"></a>

### GetDatasheetPathParameterized

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterized.GetDatasheetPathParameterized"></a>

### *class* GetDatasheetPathParameterized(db_key=None, datasheet_type=None, unit_conversion_context=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_datasheet_path_parameterized operation.
Requires a db_key to be set. The parameters unit_conversion_context and datasheet_type are optional.
datasheet_type defaults to ‘Datasheet’.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **datasheet_type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **unit_conversion_context** ([`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext))

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterized.GetDatasheetPathParameterized.datasheet_type"></a>

#### *property* datasheet_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property datasheet_type is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterized.GetDatasheetPathParameterized.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterized.GetDatasheetPathParameterized.unit_conversion_context"></a>

#### *property* unit_conversion_context *: [UnitConversionContext](#ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext)*

Property unit_conversion_context is of type [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext).

* **Return type:**
  [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext)

<a id="module-ansys.grantami.backend.soap.GetDatasheetPathParameterizedResponse"></a>

<a id="getdatasheetpathparameterizedresponse"></a>

### GetDatasheetPathParameterizedResponse

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse"></a>

### *class* GetDatasheetPathParameterizedResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_datasheet_path_parametrized operation.
Includes an array of DatasheetPathParameterized objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetDatasheetPathParameterizedResponse object.

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.currency_query"></a>

#### *property* currency_query *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property currency_query is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.db_key_query"></a>

#### *property* db_key_query *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key_query is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.record_history_identity_query_name"></a>

#### *property* record_history_identity_query_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property record_history_identity_query_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.unit_system_query"></a>

#### *property* unit_system_query *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit_system_query is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetDatasheetPathParameterizedResponse.GetDatasheetPathParameterizedResponse.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property url is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.GetDatasheetPathResponse"></a>

<a id="getdatasheetpathresponse"></a>

### GetDatasheetPathResponse

<a id="ansys.grantami.backend.soap.GetDatasheetPathResponse.GetDatasheetPathResponse"></a>

### *class* GetDatasheetPathResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_datasheet_path operation.
Includes an array of [`DatasheetPath`](#module-ansys.grantami.backend.soap.DatasheetPath) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetDatasheetPathResponse object.

<a id="ansys.grantami.backend.soap.GetDatasheetPathResponse.GetDatasheetPathResponse.datasheet_paths"></a>

#### *property* datasheet_paths *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DatasheetPath](#ansys.grantami.backend.soap.DatasheetPath.DatasheetPath)]*

Property datasheet_paths is a list of [`DatasheetPath`](#module-ansys.grantami.backend.soap.DatasheetPath) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DatasheetPath`](#module-ansys.grantami.backend.soap.DatasheetPath)

<a id="module-ansys.grantami.backend.soap.GetExporterParametersRequest"></a>

<a id="getexporterparametersrequest"></a>

### GetExporterParametersRequest

<a id="ansys.grantami.backend.soap.GetExporterParametersRequest.GetExporterParametersRequest"></a>

### *class* GetExporterParametersRequest(exporter_key=None, populate_guids=None, records=None, unit_conversion_context=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_exporter_parameters operation.

* **Parameters:**
  * **exporter_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **populate_guids** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **unit_conversion_context** ([`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext))

<a id="ansys.grantami.backend.soap.GetExporterParametersRequest.GetExporterParametersRequest.add_record"></a>

#### add_record(\_recordReference)

Appends \_recordReference to records property on GetExporterParametersRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetExporterParametersRequest.GetExporterParametersRequest.exporter_key"></a>

#### *property* exporter_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property exporter_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetExporterParametersRequest.GetExporterParametersRequest.populate_guids"></a>

#### *property* populate_guids *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property populate_guids is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetExporterParametersRequest.GetExporterParametersRequest.records"></a>

#### *property* records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.GetExporterParametersRequest.GetExporterParametersRequest.unit_conversion_context"></a>

#### *property* unit_conversion_context *: [UnitConversionContext](#ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext)*

Property unit_conversion_context is of type [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext).

* **Return type:**
  [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext)

<a id="module-ansys.grantami.backend.soap.GetExporterParametersResponse"></a>

<a id="getexporterparametersresponse"></a>

### GetExporterParametersResponse

<a id="ansys.grantami.backend.soap.GetExporterParametersResponse.GetExporterParametersResponse"></a>

### *class* GetExporterParametersResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_exporter_parameters operation. Contains a list of records and details for
exporting their attributes.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetExporterParametersResponse object.

<a id="ansys.grantami.backend.soap.GetExporterParametersResponse.GetExporterParametersResponse.records"></a>

#### *property* records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordExporterParameters](#ansys.grantami.backend.soap.RecordExporterParameters.RecordExporterParameters)]*

Property records is a list of [`RecordExporterParameters`](#module-ansys.grantami.backend.soap.RecordExporterParameters) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordExporterParameters`](#module-ansys.grantami.backend.soap.RecordExporterParameters)

<a id="module-ansys.grantami.backend.soap.GetIntegrationProfiles"></a>

<a id="getintegrationprofiles"></a>

### GetIntegrationProfiles

<a id="ansys.grantami.backend.soap.GetIntegrationProfiles.GetIntegrationProfiles"></a>

### *class* GetIntegrationProfiles(databases=None, depth=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_integration_profiles operation.

* **Parameters:**
  * **databases** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **depth** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.GetIntegrationProfiles.GetIntegrationProfiles.Depth"></a>

#### *class* Depth

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GetIntegrationProfiles.GetIntegrationProfiles.Depth.Databases"></a>

#### Databases *= 1*

<a id="ansys.grantami.backend.soap.GetIntegrationProfiles.GetIntegrationProfiles.Depth.Profiles"></a>

#### Profiles *= 0*

<a id="ansys.grantami.backend.soap.GetIntegrationProfiles.GetIntegrationProfiles.Depth.Tables"></a>

#### Tables *= 2*

<a id="ansys.grantami.backend.soap.GetIntegrationProfiles.GetIntegrationProfiles.add_database"></a>

#### add_database(value)

Appends value to databases property on GetIntegrationProfiles C-object.

* **Parameters:**
  **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.GetIntegrationProfiles.GetIntegrationProfiles.databases"></a>

#### *property* databases *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property databases is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetIntegrationProfiles.GetIntegrationProfiles.depth"></a>

#### *property* depth *: [int](https://docs.python.org/3/library/functions.html#int)*

Property depth is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.GetIntegrationProfilesResponse"></a>

<a id="getintegrationprofilesresponse"></a>

### GetIntegrationProfilesResponse

<a id="ansys.grantami.backend.soap.GetIntegrationProfilesResponse.GetIntegrationProfilesResponse"></a>

### *class* GetIntegrationProfilesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from get_integration_profiles operation.
Includes an array of [`IntegrationProfileDetail`](#module-ansys.grantami.backend.soap.IntegrationProfileDetail) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse).

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetIntegrationProfilesResponse object.

<a id="ansys.grantami.backend.soap.GetIntegrationProfilesResponse.GetIntegrationProfilesResponse.profile_details"></a>

#### *property* profile_details *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[IntegrationProfileDetail](#ansys.grantami.backend.soap.IntegrationProfileDetail.IntegrationProfileDetail)]*

Property profile_details is a list of [`IntegrationProfileDetail`](#module-ansys.grantami.backend.soap.IntegrationProfileDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`IntegrationProfileDetail`](#module-ansys.grantami.backend.soap.IntegrationProfileDetail)

<a id="module-ansys.grantami.backend.soap.GetLayouts"></a>

<a id="getlayouts"></a>

### GetLayouts

<a id="ansys.grantami.backend.soap.GetLayouts.GetLayouts"></a>

### *class* GetLayouts(applicability_tag=None, layouts=None, min_max_calculation=None, table=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_layouts operation.
Includes a table reference or list of layouts to retrieve.

* **Parameters:**
  * **applicability_tag** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **layouts** (list of [`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference))
  * **min_max_calculation** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **table** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))

<a id="ansys.grantami.backend.soap.GetLayouts.GetLayouts.add_layout"></a>

#### add_layout(\_layoutReference)

Appends \_layoutReference to layouts property on GetLayouts C-object.

* **Parameters:**
  **\_layoutReference** ([`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference))

<a id="ansys.grantami.backend.soap.GetLayouts.GetLayouts.applicability_tag"></a>

#### *property* applicability_tag *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property applicability_tag is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetLayouts.GetLayouts.layouts"></a>

#### *property* layouts *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[LayoutReference](#ansys.grantami.backend.soap.LayoutReference.LayoutReference)]*

Property layouts is a list of [`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference)

<a id="ansys.grantami.backend.soap.GetLayouts.GetLayouts.min_max_calculation"></a>

#### *property* min_max_calculation *: [int](https://docs.python.org/3/library/functions.html#int)*

Property min_max_calculation is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.GetLayouts.GetLayouts.table"></a>

#### *property* table *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property table is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="module-ansys.grantami.backend.soap.GetLayoutsResponse"></a>

<a id="getlayoutsresponse"></a>

### GetLayoutsResponse

<a id="ansys.grantami.backend.soap.GetLayoutsResponse.GetLayoutsResponse"></a>

### *class* GetLayoutsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_layouts operation.
Includes a list of layouts retrieved.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetLayoutsResponse object.

<a id="ansys.grantami.backend.soap.GetLayoutsResponse.GetLayoutsResponse.add_layout_detail"></a>

#### add_layout_detail(\_layoutDetail)

Appends \_layoutDetail to layoutDetails property on GetLayoutsResponse C-object.

* **Parameters:**
  **\_layoutDetail** ([`LayoutDetail`](#module-ansys.grantami.backend.soap.LayoutDetail))

<a id="ansys.grantami.backend.soap.GetLayoutsResponse.GetLayoutsResponse.layout_details"></a>

#### *property* layout_details *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[LayoutDetail](#ansys.grantami.backend.soap.LayoutDetail.LayoutDetail)]*

Property layout_details is a list of [`LayoutDetail`](#module-ansys.grantami.backend.soap.LayoutDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`LayoutDetail`](#module-ansys.grantami.backend.soap.LayoutDetail)

<a id="module-ansys.grantami.backend.soap.GetLinkedRecordsRequest"></a>

<a id="getlinkedrecordsrequest"></a>

### GetLinkedRecordsRequest

<a id="ansys.grantami.backend.soap.GetLinkedRecordsRequest.GetLinkedRecordsRequest"></a>

### *class* GetLinkedRecordsRequest(direct_links_only=None, populate_guids=None, record_filter=None, record_link_groups=None, record_references=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_linked_records operation.

* **Parameters:**
  * **direct_links_only** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **populate_guids** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **record_filter** ([`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter))
  * **record_link_groups** (list of [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference))
  * **record_references** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetLinkedRecordsRequest.GetLinkedRecordsRequest.add_record_link_group"></a>

#### add_record_link_group(\_recordLinkGroupReference)

Appends \_recordLinkGroupReference to recordLinkGroups property on GetLinkedRecordsRequest C-object.

* **Parameters:**
  **\_recordLinkGroupReference** ([`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference))

<a id="ansys.grantami.backend.soap.GetLinkedRecordsRequest.GetLinkedRecordsRequest.add_record_reference"></a>

#### add_record_reference(\_recordReference)

Appends \_recordReference to recordReferences property on GetLinkedRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetLinkedRecordsRequest.GetLinkedRecordsRequest.direct_links_only"></a>

#### *property* direct_links_only *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property direct_links_only is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetLinkedRecordsRequest.GetLinkedRecordsRequest.populate_guids"></a>

#### *property* populate_guids *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property populate_guids is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetLinkedRecordsRequest.GetLinkedRecordsRequest.record_filter"></a>

#### *property* record_filter *: [RecordFilter](#ansys.grantami.backend.soap.RecordFilter.RecordFilter)*

Property record_filter is of type [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter).

* **Return type:**
  [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter)

<a id="ansys.grantami.backend.soap.GetLinkedRecordsRequest.GetLinkedRecordsRequest.record_link_groups"></a>

#### *property* record_link_groups *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordLinkGroupReference](#ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference)]*

Property record_link_groups is a list of [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference)

<a id="ansys.grantami.backend.soap.GetLinkedRecordsRequest.GetLinkedRecordsRequest.record_references"></a>

#### *property* record_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property record_references is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.GetLinkedRecordsResponse"></a>

<a id="getlinkedrecordsresponse"></a>

### GetLinkedRecordsResponse

<a id="ansys.grantami.backend.soap.GetLinkedRecordsResponse.GetLinkedRecordsResponse"></a>

### *class* GetLinkedRecordsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_linked_records operation.
Includes an array of [`SourceRecord`](#module-ansys.grantami.backend.soap.SourceRecord) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetLinkedRecordsResponse object.

<a id="ansys.grantami.backend.soap.GetLinkedRecordsResponse.GetLinkedRecordsResponse.source_records"></a>

#### *property* source_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[SourceRecord](#ansys.grantami.backend.soap.SourceRecord.SourceRecord)]*

Property source_records is a list of [`SourceRecord`](#module-ansys.grantami.backend.soap.SourceRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`SourceRecord`](#module-ansys.grantami.backend.soap.SourceRecord)

<a id="module-ansys.grantami.backend.soap.GetMetaAttributesRequest"></a>

<a id="getmetaattributesrequest"></a>

### GetMetaAttributesRequest

<a id="ansys.grantami.backend.soap.GetMetaAttributesRequest.GetMetaAttributesRequest"></a>

### *class* GetMetaAttributesRequest(attribute_references=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_meta_attributes operation.

* **Parameters:**
  **attribute_references** (list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.GetMetaAttributesRequest.GetMetaAttributesRequest.add_attribute_reference"></a>

#### add_attribute_reference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetMetaAttributesRequest C-object.

* **Parameters:**
  **\_attributeReference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.GetMetaAttributesRequest.GetMetaAttributesRequest.attribute_references"></a>

#### *property* attribute_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)]*

Property attribute_references is a list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="module-ansys.grantami.backend.soap.GetMetaAttributesResponse"></a>

<a id="getmetaattributesresponse"></a>

### GetMetaAttributesResponse

<a id="ansys.grantami.backend.soap.GetMetaAttributesResponse.GetMetaAttributesResponse"></a>

### *class* GetMetaAttributesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_meta_attributes operation. Includes an array of
[`AttributeMetaAttributes`](#module-ansys.grantami.backend.soap.AttributeMetaAttributes) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetMetaAttributesResponse object.

<a id="ansys.grantami.backend.soap.GetMetaAttributesResponse.GetMetaAttributesResponse.attributes"></a>

#### *property* attributes *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeMetaAttributes](#ansys.grantami.backend.soap.AttributeMetaAttributes.AttributeMetaAttributes)]*

Property attributes is a list of [`AttributeMetaAttributes`](#module-ansys.grantami.backend.soap.AttributeMetaAttributes) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeMetaAttributes`](#module-ansys.grantami.backend.soap.AttributeMetaAttributes)

<a id="module-ansys.grantami.backend.soap.GetParameterDetailsRequest"></a>

<a id="getparameterdetailsrequest"></a>

### GetParameterDetailsRequest

<a id="ansys.grantami.backend.soap.GetParameterDetailsRequest.GetParameterDetailsRequest"></a>

### *class* GetParameterDetailsRequest(attribute=None, parameter_references=None, record_reference=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_parameter_details operation.

* **Parameters:**
  * **attribute** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **parameter_references** (list of [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetParameterDetailsRequest.GetParameterDetailsRequest.add_parameter_reference"></a>

#### add_parameter_reference(\_parameterReference)

Appends \_parameterReference to parameterReferences property on GetParameterDetailsRequest C-object.

* **Parameters:**
  **\_parameterReference** ([`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference))

<a id="ansys.grantami.backend.soap.GetParameterDetailsRequest.GetParameterDetailsRequest.attribute"></a>

#### *property* attribute *: [AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)*

Property attribute is of type [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference).

* **Return type:**
  [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.GetParameterDetailsRequest.GetParameterDetailsRequest.parameter_references"></a>

#### *property* parameter_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ParameterReference](#ansys.grantami.backend.soap.ParameterReference.ParameterReference)]*

Property parameter_references is a list of [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference)

<a id="ansys.grantami.backend.soap.GetParameterDetailsRequest.GetParameterDetailsRequest.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.GetParameterDetailsResponse"></a>

<a id="getparameterdetailsresponse"></a>

### GetParameterDetailsResponse

<a id="ansys.grantami.backend.soap.GetParameterDetailsResponse.GetParameterDetailsResponse"></a>

### *class* GetParameterDetailsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_parameter_details operation.
Includes an array of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetParameterDetailsResponse object.

<a id="ansys.grantami.backend.soap.GetParameterDetailsResponse.GetParameterDetailsResponse.attribute_parameters"></a>

#### *property* attribute_parameters *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ParameterDetail](#ansys.grantami.backend.soap.ParameterDetail.ParameterDetail)]*

Property attribute_parameters is a list of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail)

<a id="module-ansys.grantami.backend.soap.GetRecordAttributesByRefRequest"></a>

<a id="getrecordattributesbyrefrequest"></a>

### GetRecordAttributesByRefRequest

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest"></a>

### *class* GetRecordAttributesByRefRequest(attribute_references=None, binary_data=None, direct_links_only=None, exported_attributes=None, functional_data_settings=None, populate_guids=None, record_filter=None, record_references=None, unit_conversion_context=None, use_fallback=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_record_attributes_by_ref operation.
For requests, at least one [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) and at least one
[`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) is required.

* **Parameters:**
  * **attribute_references** (list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **binary_data** ([`BinaryDataSettings`](#module-ansys.grantami.backend.soap.BinaryDataSettings))
  * **direct_links_only** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **exported_attributes** (list of [`ExportedAttribute`](#module-ansys.grantami.backend.soap.ExportedAttribute))
  * **functional_data_settings** ([`FunctionalDataSettings`](#module-ansys.grantami.backend.soap.FunctionalDataSettings))
  * **populate_guids** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **record_filter** ([`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter))
  * **record_references** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **unit_conversion_context** ([`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext))
  * **use_fallback** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.add_attribute_reference"></a>

#### add_attribute_reference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetRecordAttributesByRefRequest C-object.

* **Parameters:**
  **\_attributeReference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.add_exported_attribute"></a>

#### add_exported_attribute(\_exportedAttribute)

Appends \_exportedAttribute to exportedAttributes property on GetRecordAttributesByRefRequest C-object.

* **Parameters:**
  **\_exportedAttribute** ([`ExportedAttribute`](#module-ansys.grantami.backend.soap.ExportedAttribute))

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.add_record_reference"></a>

#### add_record_reference(\_recordReference)

Appends \_recordReference to recordReferences property on GetRecordAttributesByRefRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.attribute_references"></a>

#### *property* attribute_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)]*

Property attribute_references is a list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.binary_data"></a>

#### *property* binary_data *: [BinaryDataSettings](#ansys.grantami.backend.soap.BinaryDataSettings.BinaryDataSettings)*

Property binary_data is of type [`BinaryDataSettings`](#module-ansys.grantami.backend.soap.BinaryDataSettings).

* **Return type:**
  [`BinaryDataSettings`](#module-ansys.grantami.backend.soap.BinaryDataSettings)

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.direct_links_only"></a>

#### *property* direct_links_only *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property direct_links_only is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.exported_attributes"></a>

#### *property* exported_attributes *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ExportedAttribute](#ansys.grantami.backend.soap.ExportedAttribute.ExportedAttribute)]*

Property exported_attributes is a list of [`ExportedAttribute`](#module-ansys.grantami.backend.soap.ExportedAttribute) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ExportedAttribute`](#module-ansys.grantami.backend.soap.ExportedAttribute)

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.functional_data_settings"></a>

#### *property* functional_data_settings *: [FunctionalDataSettings](#ansys.grantami.backend.soap.FunctionalDataSettings.FunctionalDataSettings)*

Property functional_data_settings is of type [`FunctionalDataSettings`](#module-ansys.grantami.backend.soap.FunctionalDataSettings).

* **Return type:**
  [`FunctionalDataSettings`](#module-ansys.grantami.backend.soap.FunctionalDataSettings)

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.populate_guids"></a>

#### *property* populate_guids *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property populate_guids is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.record_filter"></a>

#### *property* record_filter *: [RecordFilter](#ansys.grantami.backend.soap.RecordFilter.RecordFilter)*

Property record_filter is of type [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter).

* **Return type:**
  [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter)

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.record_references"></a>

#### *property* record_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property record_references is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.unit_conversion_context"></a>

#### *property* unit_conversion_context *: [UnitConversionContext](#ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext)*

Property unit_conversion_context is of type [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext).

* **Return type:**
  [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext)

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefRequest.GetRecordAttributesByRefRequest.use_fallback"></a>

#### *property* use_fallback *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property use_fallback is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.GetRecordAttributesByRefResponse"></a>

<a id="getrecordattributesbyrefresponse"></a>

### GetRecordAttributesByRefResponse

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefResponse.GetRecordAttributesByRefResponse"></a>

### *class* GetRecordAttributesByRefResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_record_attributes_by_ref operation.
Includes an array of [`RecordData`](#module-ansys.grantami.backend.soap.RecordData) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetRecordAttributesByRefResponse object.

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefResponse.GetRecordAttributesByRefResponse.add_record_data"></a>

#### add_record_data(\_recordData)

Appends \_recordData to recordData property on GetRecordAttributesByRefResponse C-object.

* **Parameters:**
  **\_recordData** ([`RecordData`](#module-ansys.grantami.backend.soap.RecordData))

<a id="ansys.grantami.backend.soap.GetRecordAttributesByRefResponse.GetRecordAttributesByRefResponse.record_data"></a>

#### *property* record_data *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordData](#ansys.grantami.backend.soap.RecordData.RecordData)]*

Property record_data is a list of [`RecordData`](#module-ansys.grantami.backend.soap.RecordData) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordData`](#module-ansys.grantami.backend.soap.RecordData)

<a id="module-ansys.grantami.backend.soap.GetRecordAttributesRequest"></a>

<a id="getrecordattributesrequest"></a>

### GetRecordAttributesRequest

<a id="ansys.grantami.backend.soap.GetRecordAttributesRequest.GetRecordAttributesRequest"></a>

### *class* GetRecordAttributesRequest(include_empty=None, include_meta=None, include_param_details=None, min_max_calculation=None, record_references=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_record_attributes operation.

* **Parameters:**
  * **include_empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **include_meta** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **include_param_details** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **min_max_calculation** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **record_references** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetRecordAttributesRequest.GetRecordAttributesRequest.add_record_reference"></a>

#### add_record_reference(\_recordReference)

Appends \_recordReference to recordReferences property on GetRecordAttributesRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetRecordAttributesRequest.GetRecordAttributesRequest.include_empty"></a>

#### *property* include_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property include_empty is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetRecordAttributesRequest.GetRecordAttributesRequest.include_meta"></a>

#### *property* include_meta *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property include_meta is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetRecordAttributesRequest.GetRecordAttributesRequest.include_param_details"></a>

#### *property* include_param_details *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property include_param_details is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.GetRecordAttributesRequest.GetRecordAttributesRequest.min_max_calculation"></a>

#### *property* min_max_calculation *: [int](https://docs.python.org/3/library/functions.html#int)*

Property min_max_calculation is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.GetRecordAttributesRequest.GetRecordAttributesRequest.record_references"></a>

#### *property* record_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property record_references is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.GetRecordAttributesResponse"></a>

<a id="getrecordattributesresponse"></a>

### GetRecordAttributesResponse

<a id="ansys.grantami.backend.soap.GetRecordAttributesResponse.GetRecordAttributesResponse"></a>

### *class* GetRecordAttributesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_record_attributes operation.
Includes an array of [`RecordAttribute`](#module-ansys.grantami.backend.soap.RecordAttribute) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetRecordAttributesResponse object.

<a id="ansys.grantami.backend.soap.GetRecordAttributesResponse.GetRecordAttributesResponse.add_record_attribute"></a>

#### add_record_attribute(\_recordAttribute)

Appends \_recordAttribute to recordAttributes property on GetRecordAttributesResponse C-object.

* **Parameters:**
  **\_recordAttribute** ([`RecordAttribute`](#module-ansys.grantami.backend.soap.RecordAttribute))

<a id="ansys.grantami.backend.soap.GetRecordAttributesResponse.GetRecordAttributesResponse.record_attributes"></a>

#### *property* record_attributes *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordAttribute](#ansys.grantami.backend.soap.RecordAttribute.RecordAttribute)]*

Property record_attributes is a list of [`RecordAttribute`](#module-ansys.grantami.backend.soap.RecordAttribute) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordAttribute`](#module-ansys.grantami.backend.soap.RecordAttribute)

<a id="module-ansys.grantami.backend.soap.GetRecordLinkGroups"></a>

<a id="getrecordlinkgroups"></a>

### GetRecordLinkGroups

<a id="ansys.grantami.backend.soap.GetRecordLinkGroups.GetRecordLinkGroups"></a>

### *class* GetRecordLinkGroups(db_key=None, record_link_groups=None, standard_names_only=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Returns details of Record Link Groups in a Granta MI Database.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_link_groups** (list of [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference))
  * **standard_names_only** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.GetRecordLinkGroups.GetRecordLinkGroups.add_record_link_group"></a>

#### add_record_link_group(\_recordLinkGroupReference)

Appends \_recordLinkGroupReference to recordLinkGroups property on GetRecordLinkGroups C-object.

* **Parameters:**
  **\_recordLinkGroupReference** ([`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference))

<a id="ansys.grantami.backend.soap.GetRecordLinkGroups.GetRecordLinkGroups.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str. When this is provided, details of all Record Link Groups in the specified Granta MI Database will be returned.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetRecordLinkGroups.GetRecordLinkGroups.record_link_groups"></a>

#### *property* record_link_groups *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordLinkGroupReference](#ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference)]*

Property record_link_groups is a list of [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference)

<a id="ansys.grantami.backend.soap.GetRecordLinkGroups.GetRecordLinkGroups.standard_names_only"></a>

#### *property* standard_names_only *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property standard_names_only is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.GetRecordLinkGroupsResponse"></a>

<a id="getrecordlinkgroupsresponse"></a>

### GetRecordLinkGroupsResponse

<a id="ansys.grantami.backend.soap.GetRecordLinkGroupsResponse.GetRecordLinkGroupsResponse"></a>

### *class* GetRecordLinkGroupsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_record_link_groups operation.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetRecordLinkGroupsResponse object.

<a id="ansys.grantami.backend.soap.GetRecordLinkGroupsResponse.GetRecordLinkGroupsResponse.record_link_groups"></a>

#### *property* record_link_groups *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordLinkGroupDetail](#ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail)]*

Property record_link_groups is a list of [`RecordLinkGroupDetail`](#module-ansys.grantami.backend.soap.RecordLinkGroupDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordLinkGroupDetail`](#module-ansys.grantami.backend.soap.RecordLinkGroupDetail)

<a id="module-ansys.grantami.backend.soap.GetRecordVersionsRequest"></a>

<a id="getrecordversionsrequest"></a>

### GetRecordVersionsRequest

<a id="ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest"></a>

### *class* GetRecordVersionsRequest(records=None, versions=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_record_versions operation.

* **Parameters:**
  * **records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **versions** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector"></a>

#### *class* VersionSelector

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector.All"></a>

#### All *= 3*

<a id="ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector.AllReleased"></a>

#### AllReleased *= 2*

<a id="ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector.Latest"></a>

#### Latest *= 1*

<a id="ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector.LatestRead"></a>

#### LatestRead *= 0*

<a id="ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest.add_record"></a>

#### add_record(\_recordReference)

Appends \_recordReference to records property on GetRecordVersionsRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest.records"></a>

#### *property* records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest.versions"></a>

#### *property* versions *: [int](https://docs.python.org/3/library/functions.html#int)*

Property versions is of type int. See [`GetRecordVersionsRequest.VersionSelector`](#ansys.grantami.backend.soap.GetRecordVersionsRequest.GetRecordVersionsRequest.VersionSelector) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.GetRecordVersionsResponse"></a>

<a id="getrecordversionsresponse"></a>

### GetRecordVersionsResponse

<a id="ansys.grantami.backend.soap.GetRecordVersionsResponse.GetRecordVersionsResponse"></a>

### *class* GetRecordVersionsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_record_versions operation. Contains a list of version states.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetRecordVersionsResponse object.

<a id="ansys.grantami.backend.soap.GetRecordVersionsResponse.GetRecordVersionsResponse.record_states"></a>

#### *property* record_states *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordVersionState](#ansys.grantami.backend.soap.RecordVersionState.RecordVersionState)]*

Property record_states is a list of [`RecordVersionState`](#module-ansys.grantami.backend.soap.RecordVersionState) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordVersionState`](#module-ansys.grantami.backend.soap.RecordVersionState)

<a id="module-ansys.grantami.backend.soap.GetRootNode"></a>

<a id="getrootnode"></a>

### GetRootNode

<a id="ansys.grantami.backend.soap.GetRootNode.GetRootNode"></a>

### *class* GetRootNode(table=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the get_root_node operation.
Requires a [`TableReference`](#module-ansys.grantami.backend.soap.TableReference) .

* **Parameters:**
  **table** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))

<a id="ansys.grantami.backend.soap.GetRootNode.GetRootNode.table"></a>

#### *property* table *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property table is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="module-ansys.grantami.backend.soap.GetRootNodeResponse"></a>

<a id="getrootnoderesponse"></a>

### GetRootNodeResponse

<a id="ansys.grantami.backend.soap.GetRootNodeResponse.GetRootNodeResponse"></a>

### *class* GetRootNodeResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_root_node operation.
Includes a [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord) object and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetRootNodeResponse object.

<a id="ansys.grantami.backend.soap.GetRootNodeResponse.GetRootNodeResponse.root_node"></a>

#### *property* root_node *: [TreeRecord](#ansys.grantami.backend.soap.TreeRecord.TreeRecord)*

Property root_node is of type [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord).

* **Return type:**
  [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord)

<a id="module-ansys.grantami.backend.soap.GetSubsetsRequest"></a>

<a id="getsubsetsrequest"></a>

### GetSubsetsRequest

<a id="ansys.grantami.backend.soap.GetSubsetsRequest.GetSubsetsRequest"></a>

### *class* GetSubsetsRequest(subset_references=None, table=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the get_subsets operation.
Requires a [`TableReference`](#module-ansys.grantami.backend.soap.TableReference) .

* **Parameters:**
  * **subset_references** (list of [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference))
  * **table** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))

<a id="ansys.grantami.backend.soap.GetSubsetsRequest.GetSubsetsRequest.add_subset_reference"></a>

#### add_subset_reference(\_subsetReference)

Appends \_subsetReference to subsetReferences property on GetSubsetsRequest C-object.

* **Parameters:**
  **\_subsetReference** ([`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference))

<a id="ansys.grantami.backend.soap.GetSubsetsRequest.GetSubsetsRequest.subset_references"></a>

#### *property* subset_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[SubsetReference](#ansys.grantami.backend.soap.SubsetReference.SubsetReference)]*

Property subset_references is a list of [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference)

<a id="ansys.grantami.backend.soap.GetSubsetsRequest.GetSubsetsRequest.table"></a>

#### *property* table *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property table is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="module-ansys.grantami.backend.soap.GetSubsetsResponse"></a>

<a id="getsubsetsresponse"></a>

### GetSubsetsResponse

<a id="ansys.grantami.backend.soap.GetSubsetsResponse.GetSubsetsResponse"></a>

### *class* GetSubsetsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_subsets operation.
Includes an array of SubsetDetails objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetSubsetsResponse object.

<a id="ansys.grantami.backend.soap.GetSubsetsResponse.GetSubsetsResponse.subset_details"></a>

#### *property* subset_details *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[SubsetDetail](#ansys.grantami.backend.soap.SubsetDetail.SubsetDetail)]*

Property subset_details is a list of [`SubsetDetail`](#module-ansys.grantami.backend.soap.SubsetDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`SubsetDetail`](#module-ansys.grantami.backend.soap.SubsetDetail)

<a id="module-ansys.grantami.backend.soap.GetTables"></a>

<a id="gettables"></a>

### GetTables

<a id="ansys.grantami.backend.soap.GetTables.GetTables"></a>

### *class* GetTables(db_key=None, attribute_selectors=None, table_filter=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the get_tables operation.
Requires a db_key to be set.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **attribute_selectors** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*int*](https://docs.python.org/3/library/functions.html#int))
  * **table_filter** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.GetTables.GetTables.AttributeSelector"></a>

#### *class* AttributeSelector

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.GetTables.GetTables.AttributeSelector.MetaAttributes"></a>

#### MetaAttributes *= 2*

<a id="ansys.grantami.backend.soap.GetTables.GetTables.AttributeSelector.NONE"></a>

#### NONE *= 0*

<a id="ansys.grantami.backend.soap.GetTables.GetTables.AttributeSelector.NonMetaAttributes"></a>

#### NonMetaAttributes *= 1*

<a id="ansys.grantami.backend.soap.GetTables.GetTables.AttributeSelector.StandardAttributes"></a>

#### StandardAttributes *= 3*

<a id="ansys.grantami.backend.soap.GetTables.GetTables.add_attribute_selector"></a>

#### add_attribute_selector(value)

Appends value to attributeSelectors property on GetTables C-object.

* **Parameters:**
  **value** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.GetTables.GetTables.attribute_selectors"></a>

#### *property* attribute_selectors *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[int](https://docs.python.org/3/library/functions.html#int)]*

Property attribute_selectors is a list of int objects. See [`GetTables.AttributeSelector`](#ansys.grantami.backend.soap.GetTables.GetTables.AttributeSelector) for supported values.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.GetTables.GetTables.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetTables.GetTables.table_filter"></a>

#### *property* table_filter *: [int](https://docs.python.org/3/library/functions.html#int)*

Property table_filter is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.GetTablesResponse"></a>

<a id="gettablesresponse"></a>

### GetTablesResponse

<a id="ansys.grantami.backend.soap.GetTablesResponse.GetTablesResponse"></a>

### *class* GetTablesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_tables operation.
Includes an array of [`TableDetail`](#module-ansys.grantami.backend.soap.TableDetail) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetTablesResponse object.

<a id="ansys.grantami.backend.soap.GetTablesResponse.GetTablesResponse.add_table_detail"></a>

#### add_table_detail(\_tableDetail)

Appends \_tableDetail to tableDetails property on GetTablesResponse C-object.

* **Parameters:**
  **\_tableDetail** ([`TableDetail`](#module-ansys.grantami.backend.soap.TableDetail))

<a id="ansys.grantami.backend.soap.GetTablesResponse.GetTablesResponse.table_details"></a>

#### *property* table_details *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TableDetail](#ansys.grantami.backend.soap.TableDetail.TableDetail)]*

Property table_details is a list of [`TableDetail`](#module-ansys.grantami.backend.soap.TableDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TableDetail`](#module-ansys.grantami.backend.soap.TableDetail)

<a id="module-ansys.grantami.backend.soap.GetTreeRecordsRequest"></a>

<a id="gettreerecordsrequest"></a>

### GetTreeRecordsRequest

<a id="ansys.grantami.backend.soap.GetTreeRecordsRequest.GetTreeRecordsRequest"></a>

### *class* GetTreeRecordsRequest(records=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the get_tree_records operation.
Requires at least one [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Parameters:**
  **records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetTreeRecordsRequest.GetTreeRecordsRequest.add_record"></a>

#### add_record(\_recordReference)

Appends \_recordReference to records property on GetTreeRecordsRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetTreeRecordsRequest.GetTreeRecordsRequest.records"></a>

#### *property* records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.GetTreeRecordsResponse"></a>

<a id="gettreerecordsresponse"></a>

### GetTreeRecordsResponse

<a id="ansys.grantami.backend.soap.GetTreeRecordsResponse.GetTreeRecordsResponse"></a>

### *class* GetTreeRecordsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output to the get_tree_records operation.
Includes an array of [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord) objects and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetTreeRecordsResponse object.

<a id="ansys.grantami.backend.soap.GetTreeRecordsResponse.GetTreeRecordsResponse.add_tree_record"></a>

#### add_tree_record(\_treeRecord)

Appends \_treeRecord to treeRecords property on GetTreeRecordsResponse C-object.

* **Parameters:**
  **\_treeRecord** ([`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord))

<a id="ansys.grantami.backend.soap.GetTreeRecordsResponse.GetTreeRecordsResponse.tree_records"></a>

#### *property* tree_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TreeRecord](#ansys.grantami.backend.soap.TreeRecord.TreeRecord)]*

Property tree_records is a list of [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord)

<a id="module-ansys.grantami.backend.soap.GetUnitConversionsRequest"></a>

<a id="getunitconversionsrequest"></a>

### GetUnitConversionsRequest

<a id="ansys.grantami.backend.soap.GetUnitConversionsRequest.GetUnitConversionsRequest"></a>

### *class* GetUnitConversionsRequest(db_key=None, source_currency=None, target_currency=None, unit_conversion_contexts=None, unit_symbols=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the get_unit_conversions operation.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **source_currency** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **target_currency** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **unit_conversion_contexts** (list of [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext))
  * **unit_symbols** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.GetUnitConversionsRequest.GetUnitConversionsRequest.add_unit_conversion_context"></a>

#### add_unit_conversion_context(\_unitConversionContext)

Appends \_unitConversionContext to unitConversionContexts property on GetUnitConversionsRequest C-object.

* **Parameters:**
  **\_unitConversionContext** ([`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext))

<a id="ansys.grantami.backend.soap.GetUnitConversionsRequest.GetUnitConversionsRequest.add_unit_symbol"></a>

#### add_unit_symbol(value)

Appends value to unitSymbols property on GetUnitConversionsRequest C-object.

* **Parameters:**
  **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.GetUnitConversionsRequest.GetUnitConversionsRequest.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetUnitConversionsRequest.GetUnitConversionsRequest.source_currency"></a>

#### *property* source_currency *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property source_currency is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetUnitConversionsRequest.GetUnitConversionsRequest.target_currency"></a>

#### *property* target_currency *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property target_currency is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetUnitConversionsRequest.GetUnitConversionsRequest.unit_conversion_contexts"></a>

#### *property* unit_conversion_contexts *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnitConversionContext](#ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext)]*

Property unit_conversion_contexts is a list of [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext)

<a id="ansys.grantami.backend.soap.GetUnitConversionsRequest.GetUnitConversionsRequest.unit_symbols"></a>

#### *property* unit_symbols *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property unit_symbols is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.GetUnitConversionsResponse"></a>

<a id="getunitconversionsresponse"></a>

### GetUnitConversionsResponse

<a id="ansys.grantami.backend.soap.GetUnitConversionsResponse.GetUnitConversionsResponse"></a>

### *class* GetUnitConversionsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_unit_conversions operation.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetUnitConversionsResponse object.

<a id="ansys.grantami.backend.soap.GetUnitConversionsResponse.GetUnitConversionsResponse.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetUnitConversionsResponse.GetUnitConversionsResponse.source_units"></a>

#### *property* source_units *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[SourceUnitConversionSet](#ansys.grantami.backend.soap.SourceUnitConversionSet.SourceUnitConversionSet)]*

Property source_units is a list of [`SourceUnitConversionSet`](#module-ansys.grantami.backend.soap.SourceUnitConversionSet) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`SourceUnitConversionSet`](#module-ansys.grantami.backend.soap.SourceUnitConversionSet)

<a id="ansys.grantami.backend.soap.GetUnitConversionsResponse.GetUnitConversionsResponse.unit_conversion_contexts"></a>

#### *property* unit_conversion_contexts *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnitConversionContextConversionSet](#ansys.grantami.backend.soap.UnitConversionContextConversionSet.UnitConversionContextConversionSet)]*

Property unit_conversion_contexts is a list of [`UnitConversionContextConversionSet`](#module-ansys.grantami.backend.soap.UnitConversionContextConversionSet) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnitConversionContextConversionSet`](#module-ansys.grantami.backend.soap.UnitConversionContextConversionSet)

<a id="module-ansys.grantami.backend.soap.GetUnits"></a>

<a id="getunits"></a>

### GetUnits

<a id="ansys.grantami.backend.soap.GetUnits.GetUnits"></a>

### *class* GetUnits(db_key=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type for requesting the units known to specific Granta MI databases.
A DBKey must be specified.

* **Parameters:**
  **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.GetUnits.GetUnits.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.GetUnitsResponse"></a>

<a id="getunitsresponse"></a>

### GetUnitsResponse

<a id="ansys.grantami.backend.soap.GetUnitsResponse.GetUnitsResponse"></a>

### *class* GetUnitsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

The output of a get_units request.
Contains an array of DatabaseUnitSets for the specified databases.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetUnitsResponse object.

<a id="ansys.grantami.backend.soap.GetUnitsResponse.GetUnitsResponse.database_unit_sets"></a>

#### *property* database_unit_sets *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DatabaseUnitSet](#ansys.grantami.backend.soap.DatabaseUnitSet.DatabaseUnitSet)]*

Property database_unit_sets is a list of [`DatabaseUnitSet`](#module-ansys.grantami.backend.soap.DatabaseUnitSet) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DatabaseUnitSet`](#module-ansys.grantami.backend.soap.DatabaseUnitSet)

<a id="module-ansys.grantami.backend.soap.GetUnitSystems"></a>

<a id="getunitsystems"></a>

### GetUnitSystems

<a id="ansys.grantami.backend.soap.GetUnitSystems.GetUnitSystems"></a>

### *class* GetUnitSystems(db_key=None, exclude_currencies=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type for requesting the unit systems on a particular Granta MI database.
A db_key must be specified.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **exclude_currencies** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.GetUnitSystems.GetUnitSystems.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetUnitSystems.GetUnitSystems.exclude_currencies"></a>

#### *property* exclude_currencies *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property exclude_currencies is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.GetUnitSystemsResponse"></a>

<a id="getunitsystemsresponse"></a>

### GetUnitSystemsResponse

<a id="ansys.grantami.backend.soap.GetUnitSystemsResponse.GetUnitSystemsResponse"></a>

### *class* GetUnitSystemsResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

The output of a get_unit_systems requests.
Contains an array of unit systems for the specified database.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetUnitSystemsResponse object.

<a id="ansys.grantami.backend.soap.GetUnitSystemsResponse.GetUnitSystemsResponse.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GetUnitSystemsResponse.GetUnitSystemsResponse.unit_systems"></a>

#### *property* unit_systems *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnitSystemDetail](#ansys.grantami.backend.soap.UnitSystemDetail.UnitSystemDetail)]*

Property unit_systems is a list of [`UnitSystemDetail`](#module-ansys.grantami.backend.soap.UnitSystemDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnitSystemDetail`](#module-ansys.grantami.backend.soap.UnitSystemDetail)

<a id="module-ansys.grantami.backend.soap.GetUploadAddressesRequest"></a>

<a id="getuploadaddressesrequest"></a>

### GetUploadAddressesRequest

<a id="ansys.grantami.backend.soap.GetUploadAddressesRequest.GetUploadAddressesRequest"></a>

### *class* GetUploadAddressesRequest(attribute_references=None, record_references=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the get_upload_addresses operation.
Contains a list of records and attributes to get the upload URL addresses of.

* **Parameters:**
  * **attribute_references** (list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **record_references** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetUploadAddressesRequest.GetUploadAddressesRequest.add_attribute_reference"></a>

#### add_attribute_reference(\_attributeReference)

Appends \_attributeReference to attributeReferences property on GetUploadAddressesRequest C-object.

* **Parameters:**
  **\_attributeReference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.GetUploadAddressesRequest.GetUploadAddressesRequest.add_record_reference"></a>

#### add_record_reference(\_recordReference)

Appends \_recordReference to recordReferences property on GetUploadAddressesRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.GetUploadAddressesRequest.GetUploadAddressesRequest.attribute_references"></a>

#### *property* attribute_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)]*

Property attribute_references is a list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.GetUploadAddressesRequest.GetUploadAddressesRequest.record_references"></a>

#### *property* record_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property record_references is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.GetUploadAddressesResponse"></a>

<a id="getuploadaddressesresponse"></a>

### GetUploadAddressesResponse

<a id="ansys.grantami.backend.soap.GetUploadAddressesResponse.GetUploadAddressesResponse"></a>

### *class* GetUploadAddressesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the get_upload_addresses operation.
Contains a list of [`RecordWithAttributeAddresses`](#module-ansys.grantami.backend.soap.RecordWithAttributeAddresses) objects for
each record in the [`GetUploadAddressesRequest`](#module-ansys.grantami.backend.soap.GetUploadAddressesRequest).

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a GetUploadAddressesResponse object.

<a id="ansys.grantami.backend.soap.GetUploadAddressesResponse.GetUploadAddressesResponse.records_with_attribute_addresses"></a>

#### *property* records_with_attribute_addresses *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordWithAttributeAddresses](#ansys.grantami.backend.soap.RecordWithAttributeAddresses.RecordWithAttributeAddresses)]*

Property records_with_attribute_addresses is a list of [`RecordWithAttributeAddresses`](#module-ansys.grantami.backend.soap.RecordWithAttributeAddresses) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordWithAttributeAddresses`](#module-ansys.grantami.backend.soap.RecordWithAttributeAddresses)

<a id="module-ansys.grantami.backend.soap.GraphDomain"></a>

<a id="graphdomain"></a>

### GraphDomain

<a id="ansys.grantami.backend.soap.GraphDomain.GraphDomain"></a>

### *class* GraphDomain(parameter_domains=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain choices of fixed parameter values.
A value must be chosen for each parameter, within the given constraints.

* **Parameters:**
  **parameter_domains** (list of [`ParameterDomain`](#module-ansys.grantami.backend.soap.ParameterDomain))

<a id="ansys.grantami.backend.soap.GraphDomain.GraphDomain.parameter_domains"></a>

#### *property* parameter_domains *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ParameterDomain](#ansys.grantami.backend.soap.ParameterDomain.ParameterDomain)]*

Property parameter_domains is a list of [`ParameterDomain`](#module-ansys.grantami.backend.soap.ParameterDomain) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ParameterDomain`](#module-ansys.grantami.backend.soap.ParameterDomain)

<a id="module-ansys.grantami.backend.soap.GreaterThanSearchValue"></a>

<a id="greaterthansearchvalue"></a>

### GreaterThanSearchValue

<a id="ansys.grantami.backend.soap.GreaterThanSearchValue.GreaterThanSearchValue"></a>

### *class* GreaterThanSearchValue(tabular_column=None, unit=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data greater than a specified value.
Criterion passes if data value is above a given value. Point, range, and integer attributes are
supported.

* **Parameters:**
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float))

<a id="ansys.grantami.backend.soap.GreaterThanSearchValue.GreaterThanSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GreaterThanSearchValue.GreaterThanSearchValue.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.GreaterThanSearchValue.GreaterThanSearchValue.value"></a>

#### *property* value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="module-ansys.grantami.backend.soap.HelpInfo"></a>

<a id="helpinfo"></a>

### HelpInfo

<a id="ansys.grantami.backend.soap.HelpInfo.HelpInfo"></a>

### *class* HelpInfo(database_help=None, help_uri=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type describing how to obtain detailed Help information for an entity in a Granta MI database.

* **Parameters:**
  * **database_help** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **help_uri** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.HelpInfo.HelpInfo.database_help"></a>

#### *property* database_help *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property database_help is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.HelpInfo.HelpInfo.help_uri"></a>

#### *property* help_uri *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property help_uri is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.HighEndSearchValue"></a>

<a id="highendsearchvalue"></a>

### HighEndSearchValue

<a id="ansys.grantami.backend.soap.HighEndSearchValue.HighEndSearchValue"></a>

### *class* HighEndSearchValue(unit=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Upper limit for the [`BetweenSearchValue`](#module-ansys.grantami.backend.soap.BetweenSearchValue) search criterion.
Requires a double value and an optional unit.

* **Parameters:**
  * **unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float))

<a id="ansys.grantami.backend.soap.HighEndSearchValue.HighEndSearchValue.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.HighEndSearchValue.HighEndSearchValue.value"></a>

#### *property* value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="module-ansys.grantami.backend.soap.HyperlinkDataType"></a>

<a id="hyperlinkdatatype"></a>

### HyperlinkDataType

<a id="ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType"></a>

### *class* HyperlinkDataType(description=None, hyperlink_display=None, is_applicable=None, value=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type to contain a HyperLink string value.

* **Parameters:**
  * **description** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **hyperlink_display** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType.HyperlinkDisplay"></a>

#### *class* HyperlinkDisplay

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType.HyperlinkDisplay.Content"></a>

#### Content *= 2*

<a id="ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType.HyperlinkDisplay.New"></a>

#### New *= 0*

<a id="ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType.HyperlinkDisplay.Top"></a>

#### Top *= 1*

<a id="ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property description is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType.hyperlink_display"></a>

#### *property* hyperlink_display *: [int](https://docs.python.org/3/library/functions.html#int)*

Property hyperlink_display is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.IDataValue"></a>

<a id="idatavalue"></a>

### IDataValue

<a id="ansys.grantami.backend.soap.IDataValue.IDataValue"></a>

### *class* IDataValue

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Base class for data values in Granta MI.

You should not interact directly with this class.

<a id="module-ansys.grantami.backend.soap.ImportAttributeValue"></a>

<a id="importattributevalue"></a>

### ImportAttributeValue

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue"></a>

### *class* ImportAttributeValue(attribute_reference=None, date_data_value=None, discrete_data_value=None, file_data_value=None, hyperlink_data_value=None, integer_data_value=None, logical_data_value=None, long_text_data_value=None, picture_data_value=None, point_data_value=None, range_data_value=None, short_text_data_value=None, tabular_data_value=None, float_functional_gridded_data_value=None, float_functional_series_data_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An [`AttributeValue`](#module-ansys.grantami.backend.soap.AttributeValue) to import to a Granta MI database.
Requires a [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) and an attribute value for the
data type you wish to upload. Supports: PointDataType, RangeDataType,
FloatFunctionalSeriesDataType, FloatFunctionalGriddedDataType,  ShortTextDataType,
LongTextDataType,  DiscreteDataType, IntegerDataType,  LogicalDataType, HyperlinkDataType, and
[`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType).

* **Parameters:**
  * **attribute_reference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **date_data_value** ([`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType))
  * **discrete_data_value** ([`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType))
  * **file_data_value** ([`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType))
  * **hyperlink_data_value** ([`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType))
  * **integer_data_value** ([`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType))
  * **logical_data_value** ([`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType))
  * **long_text_data_value** ([`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType))
  * **picture_data_value** ([`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType))
  * **point_data_value** ([`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType))
  * **range_data_value** ([`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType))
  * **short_text_data_value** ([`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType))
  * **tabular_data_value** ([`TabularDataImportType`](#module-ansys.grantami.backend.soap.TabularDataImportType))
  * **float_functional_gridded_data_value** ([`FloatFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType))
  * **float_functional_series_data_value** ([`FloatFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType))

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.attribute_reference"></a>

#### *property* attribute_reference *: [AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)*

Property attribute_reference is of type [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference).

* **Return type:**
  [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.date_data_value"></a>

#### *property* date_data_value *: [DateDataType](#ansys.grantami.backend.soap.DateDataType.DateDataType)*

Property date_data_value is of type [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType).

* **Return type:**
  [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.discrete_data_value"></a>

#### *property* discrete_data_value *: [DiscreteDataType](#ansys.grantami.backend.soap.DiscreteDataType.DiscreteDataType)*

Property discrete_data_value is of type [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType).

* **Return type:**
  [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.file_data_value"></a>

#### *property* file_data_value *: [FileDataType](#ansys.grantami.backend.soap.FileDataType.FileDataType)*

Property file_data_value is of type [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType).

* **Return type:**
  [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.float_functional_gridded_data_value"></a>

#### *property* float_functional_gridded_data_value *: [FloatFunctionalGriddedDataType](#ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType)*

Property float_functional_gridded_data_value is of type [`FloatFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType).

* **Return type:**
  [`FloatFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.float_functional_series_data_value"></a>

#### *property* float_functional_series_data_value *: [FloatFunctionalSeriesDataType](#ansys.grantami.backend.soap.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType)*

Property float_functional_series_data_value is of type [`FloatFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType).

* **Return type:**
  [`FloatFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.hyperlink_data_value"></a>

#### *property* hyperlink_data_value *: [HyperlinkDataType](#ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType)*

Property hyperlink_data_value is of type [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType).

* **Return type:**
  [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.integer_data_value"></a>

#### *property* integer_data_value *: [IntegerDataType](#ansys.grantami.backend.soap.IntegerDataType.IntegerDataType)*

Property integer_data_value is of type [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType).

* **Return type:**
  [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.logical_data_value"></a>

#### *property* logical_data_value *: [LogicalDataType](#ansys.grantami.backend.soap.LogicalDataType.LogicalDataType)*

Property logical_data_value is of type [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType).

* **Return type:**
  [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.long_text_data_value"></a>

#### *property* long_text_data_value *: [LongTextDataType](#ansys.grantami.backend.soap.LongTextDataType.LongTextDataType)*

Property long_text_data_value is of type [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType).

* **Return type:**
  [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.picture_data_value"></a>

#### *property* picture_data_value *: [PictureDataType](#ansys.grantami.backend.soap.PictureDataType.PictureDataType)*

Property picture_data_value is of type [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType).

* **Return type:**
  [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.point_data_value"></a>

#### *property* point_data_value *: [PointDataType](#ansys.grantami.backend.soap.PointDataType.PointDataType)*

Property point_data_value is of type [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType).

* **Return type:**
  [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.range_data_value"></a>

#### *property* range_data_value *: [RangeDataType](#ansys.grantami.backend.soap.RangeDataType.RangeDataType)*

Property range_data_value is of type [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType).

* **Return type:**
  [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.short_text_data_value"></a>

#### *property* short_text_data_value *: [ShortTextDataType](#ansys.grantami.backend.soap.ShortTextDataType.ShortTextDataType)*

Property short_text_data_value is of type [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType).

* **Return type:**
  [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType)

<a id="ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue.tabular_data_value"></a>

#### *property* tabular_data_value *: [TabularDataImportType](#ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType)*

Property tabular_data_value is of type [`TabularDataImportType`](#module-ansys.grantami.backend.soap.TabularDataImportType).

* **Return type:**
  [`TabularDataImportType`](#module-ansys.grantami.backend.soap.TabularDataImportType)

<a id="module-ansys.grantami.backend.soap.ImportRecord"></a>

<a id="importrecord"></a>

### ImportRecord

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord"></a>

### *class* ImportRecord(copy_destination_parent=None, existing_record=None, import_attribute_values=None, import_record_mode=None, is_folder=None, record_name=None, release_record=None, subset_references=None, update_subsets_mode=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A record for importing to the Granta MI database.
The ‘import_record_mode’ property specifies whether a record should be created, copied, or updated.
The accepted values are ‘Create’, ‘Update’, and ‘Copy’. If import_record_mode is ‘Create’, set
‘existing_record’ to the parent record under which the new record is to be created. If
import_record_mode is ‘Update’, set ‘existing_record’, to the target record to be changed. If
import_record_mode is ‘Copy’, set ‘existing_record’ to be the source data for the operation, and
use ‘copy_destination_parent’ to specify where the record copy should appear. For versioned
databases, set release_record to specify whether the new or updated record should be released. Use
‘subset_references’ to define the Subsets the imported record belongs to (subsets will not be
inherited from the parent). ‘is_folder’ will have no effect if ‘import_record_mode’ is set to
‘Update’.

* **Parameters:**
  * **copy_destination_parent** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **existing_record** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **import_attribute_values** (list of [`ImportAttributeValue`](#module-ansys.grantami.backend.soap.ImportAttributeValue))
  * **import_record_mode** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **is_folder** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **record_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **release_record** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **subset_references** (list of [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference))
  * **update_subsets_mode** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.add_import_attribute_value"></a>

#### add_import_attribute_value(\_importAttributeValue)

Appends \_importAttributeValue to importAttributeValues property on ImportRecord C-object.

* **Parameters:**
  **\_importAttributeValue** ([`ImportAttributeValue`](#module-ansys.grantami.backend.soap.ImportAttributeValue))

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.add_subset_reference"></a>

#### add_subset_reference(\_subsetReference)

Appends \_subsetReference to subsetReferences property on ImportRecord C-object.

* **Parameters:**
  **\_subsetReference** ([`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference))

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.copy_destination_parent"></a>

#### *property* copy_destination_parent *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property copy_destination_parent is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.existing_record"></a>

#### *property* existing_record *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property existing_record is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.import_attribute_values"></a>

#### *property* import_attribute_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ImportAttributeValue](#ansys.grantami.backend.soap.ImportAttributeValue.ImportAttributeValue)]*

Property import_attribute_values is a list of [`ImportAttributeValue`](#module-ansys.grantami.backend.soap.ImportAttributeValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ImportAttributeValue`](#module-ansys.grantami.backend.soap.ImportAttributeValue)

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.import_record_mode"></a>

#### *property* import_record_mode *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property import_record_mode is of type str. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.is_folder"></a>

#### *property* is_folder *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_folder is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.record_name"></a>

#### *property* record_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property record_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.release_record"></a>

#### *property* release_record *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property release_record is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.subset_references"></a>

#### *property* subset_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[SubsetReference](#ansys.grantami.backend.soap.SubsetReference.SubsetReference)]*

Property subset_references is a list of [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference)

<a id="ansys.grantami.backend.soap.ImportRecord.ImportRecord.update_subsets_mode"></a>

#### *property* update_subsets_mode *: [int](https://docs.python.org/3/library/functions.html#int)*

Property update_subsets_mode is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.IntegerDataType"></a>

<a id="integerdatatype"></a>

### IntegerDataType

<a id="ansys.grantami.backend.soap.IntegerDataType.IntegerDataType"></a>

### *class* IntegerDataType(is_applicable=None, value=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type to contain an integer data type.

* **Parameters:**
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **value** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.IntegerDataType.IntegerDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.IntegerDataType.IntegerDataType.value"></a>

#### *property* value *: [int](https://docs.python.org/3/library/functions.html#int)*

Property value is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.IntegrationDatabase"></a>

<a id="integrationdatabase"></a>

### IntegrationDatabase

<a id="ansys.grantami.backend.soap.IntegrationDatabase.IntegrationDatabase"></a>

### *class* IntegrationDatabase(db_key=None, author=None, company=None, integration_tables=None, volume_name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents a database within an Integration Profile.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **author** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **company** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **integration_tables** (list of [`TableDetail`](#module-ansys.grantami.backend.soap.TableDetail))
  * **volume_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.IntegrationDatabase.IntegrationDatabase.author"></a>

#### *property* author *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property author is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.IntegrationDatabase.IntegrationDatabase.company"></a>

#### *property* company *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property company is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.IntegrationDatabase.IntegrationDatabase.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.IntegrationDatabase.IntegrationDatabase.integration_tables"></a>

#### *property* integration_tables *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TableDetail](#ansys.grantami.backend.soap.TableDetail.TableDetail)]*

Property integration_tables is a list of [`TableDetail`](#module-ansys.grantami.backend.soap.TableDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TableDetail`](#module-ansys.grantami.backend.soap.TableDetail)

<a id="ansys.grantami.backend.soap.IntegrationDatabase.IntegrationDatabase.volume_name"></a>

#### *property* volume_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property volume_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.IntegrationProfileDetail"></a>

<a id="integrationprofiledetail"></a>

### IntegrationProfileDetail

<a id="ansys.grantami.backend.soap.IntegrationProfileDetail.IntegrationProfileDetail"></a>

### *class* IntegrationProfileDetail(description=None, group_name=None, integration_databases=None, name=None, profile=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed information about an Integration Profile.

* **Parameters:**
  * **description** ([`RichText`](#module-ansys.grantami.backend.soap.RichText))
  * **group_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **integration_databases** (list of [`IntegrationDatabase`](#module-ansys.grantami.backend.soap.IntegrationDatabase))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **profile** ([`IntegrationProfileReference`](#module-ansys.grantami.backend.soap.IntegrationProfileReference))

<a id="ansys.grantami.backend.soap.IntegrationProfileDetail.IntegrationProfileDetail.description"></a>

#### *property* description *: [RichText](#ansys.grantami.backend.soap.RichText.RichText)*

Property description is of type [`RichText`](#module-ansys.grantami.backend.soap.RichText).

* **Return type:**
  [`RichText`](#module-ansys.grantami.backend.soap.RichText)

<a id="ansys.grantami.backend.soap.IntegrationProfileDetail.IntegrationProfileDetail.group_name"></a>

#### *property* group_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property group_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.IntegrationProfileDetail.IntegrationProfileDetail.integration_databases"></a>

#### *property* integration_databases *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[IntegrationDatabase](#ansys.grantami.backend.soap.IntegrationDatabase.IntegrationDatabase)]*

Property integration_databases is a list of [`IntegrationDatabase`](#module-ansys.grantami.backend.soap.IntegrationDatabase) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`IntegrationDatabase`](#module-ansys.grantami.backend.soap.IntegrationDatabase)

<a id="ansys.grantami.backend.soap.IntegrationProfileDetail.IntegrationProfileDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.IntegrationProfileDetail.IntegrationProfileDetail.profile"></a>

#### *property* profile *: [IntegrationProfileReference](#ansys.grantami.backend.soap.IntegrationProfileReference.IntegrationProfileReference)*

Property profile is of type [`IntegrationProfileReference`](#module-ansys.grantami.backend.soap.IntegrationProfileReference).

* **Return type:**
  [`IntegrationProfileReference`](#module-ansys.grantami.backend.soap.IntegrationProfileReference)

<a id="module-ansys.grantami.backend.soap.IntegrationProfileReference"></a>

<a id="integrationprofilereference"></a>

### IntegrationProfileReference

<a id="ansys.grantami.backend.soap.IntegrationProfileReference.IntegrationProfileReference"></a>

### *class* IntegrationProfileReference(key=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains the key for an Integration Profile.

* **Parameters:**
  **key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.IntegrationProfileReference.IntegrationProfileReference.key"></a>

#### *property* key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.LayoutDetail"></a>

<a id="layoutdetail"></a>

### LayoutDetail

<a id="ansys.grantami.backend.soap.LayoutDetail.LayoutDetail"></a>

### *class* LayoutDetail(attribute_categories=None, layout=None, name=None, table=None, display_names=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a Layout in a Granta MI database.

* **Parameters:**
  * **attribute_categories** (list of [`AttributeCategory`](#module-ansys.grantami.backend.soap.AttributeCategory))
  * **layout** ([`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **table** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))
  * **display_names** (list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName))

<a id="ansys.grantami.backend.soap.LayoutDetail.LayoutDetail.add_attribute_category"></a>

#### add_attribute_category(\_attributeCategory)

Appends \_attributeCategory to attributeCategories property on LayoutDetail C-object.

* **Parameters:**
  **\_attributeCategory** ([`AttributeCategory`](#module-ansys.grantami.backend.soap.AttributeCategory))

<a id="ansys.grantami.backend.soap.LayoutDetail.LayoutDetail.attribute_categories"></a>

#### *property* attribute_categories *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeCategory](#ansys.grantami.backend.soap.AttributeCategory.AttributeCategory)]*

Property attribute_categories is a list of [`AttributeCategory`](#module-ansys.grantami.backend.soap.AttributeCategory) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeCategory`](#module-ansys.grantami.backend.soap.AttributeCategory)

<a id="ansys.grantami.backend.soap.LayoutDetail.LayoutDetail.display_names"></a>

#### *property* display_names *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DisplayName](#ansys.grantami.backend.soap.DisplayName.DisplayName)]*

Property display_names is a list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName)

<a id="ansys.grantami.backend.soap.LayoutDetail.LayoutDetail.layout"></a>

#### *property* layout *: [LayoutReference](#ansys.grantami.backend.soap.LayoutReference.LayoutReference)*

Property layout is of type [`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference).

* **Return type:**
  [`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference)

<a id="ansys.grantami.backend.soap.LayoutDetail.LayoutDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.LayoutDetail.LayoutDetail.table"></a>

#### *property* table *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property table is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="module-ansys.grantami.backend.soap.LayoutReference"></a>

<a id="layoutreference"></a>

### LayoutReference

<a id="ansys.grantami.backend.soap.LayoutReference.LayoutReference"></a>

### *class* LayoutReference(db_key=None, layout_identity=None, name=None, partial_table_reference=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular Layout in a Granta MI database.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **layout_identity** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **partial_table_reference** ([`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference))

<a id="ansys.grantami.backend.soap.LayoutReference.LayoutReference.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.LayoutReference.LayoutReference.layout_identity"></a>

#### *property* layout_identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property layout_identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.LayoutReference.LayoutReference.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.LayoutReference.LayoutReference.partial_table_reference"></a>

#### *property* partial_table_reference *: [PartialTableReference](#ansys.grantami.backend.soap.PartialTableReference.PartialTableReference)*

Property partial_table_reference is of type [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference).

* **Return type:**
  [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference)

<a id="module-ansys.grantami.backend.soap.LessThanSearchValue"></a>

<a id="lessthansearchvalue"></a>

### LessThanSearchValue

<a id="ansys.grantami.backend.soap.LessThanSearchValue.LessThanSearchValue"></a>

### *class* LessThanSearchValue(tabular_column=None, unit=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Search criterion to search for data less than a specified value.
Criterion passes if data value is less than a given value. Point, range, and integer attributes are
supported.

* **Parameters:**
  * **tabular_column** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float))

<a id="ansys.grantami.backend.soap.LessThanSearchValue.LessThanSearchValue.tabular_column"></a>

#### *property* tabular_column *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property tabular_column is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.LessThanSearchValue.LessThanSearchValue.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.LessThanSearchValue.LessThanSearchValue.value"></a>

#### *property* value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="module-ansys.grantami.backend.soap.LinkAllCombinations"></a>

<a id="linkallcombinations"></a>

### LinkAllCombinations

<a id="ansys.grantami.backend.soap.LinkAllCombinations.LinkAllCombinations"></a>

### *class* LinkAllCombinations(node_name=None, source_records=None, target_records=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, add links to all the given target records. Silently skip any links
that already exist.

* **Parameters:**
  * **node_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **source_records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **target_records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.LinkAllCombinations.LinkAllCombinations.add_source_record"></a>

#### add_source_record(\_recordReference)

Appends \_recordReference to sourceRecords property on LinkAllCombinations C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.LinkAllCombinations.LinkAllCombinations.add_target_record"></a>

#### add_target_record(\_recordReference)

Appends \_recordReference to targetRecords property on LinkAllCombinations C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.LinkAllCombinations.LinkAllCombinations.node_name"></a>

#### *property* node_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property node_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.LinkAllCombinations.LinkAllCombinations.source_records"></a>

#### *property* source_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property source_records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.LinkAllCombinations.LinkAllCombinations.target_records"></a>

#### *property* target_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property target_records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.LinkRecords"></a>

<a id="linkrecords"></a>

### LinkRecords

<a id="ansys.grantami.backend.soap.LinkRecords.LinkRecords"></a>

### *class* LinkRecords(node_name=None, source_records=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, add links to the target records specified for that source record.
Silently skip any links that already exist.

* **Parameters:**
  * **node_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **source_records** (list of [`NotatedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NotatedTargetedSourceRecord))

<a id="ansys.grantami.backend.soap.LinkRecords.LinkRecords.add_source_record"></a>

#### add_source_record(\_notatedTargetedSourceRecord)

Appends \_notatedTargetedSourceRecord to sourceRecords property on LinkRecords C-object.

* **Parameters:**
  **\_notatedTargetedSourceRecord** ([`NotatedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NotatedTargetedSourceRecord))

<a id="ansys.grantami.backend.soap.LinkRecords.LinkRecords.node_name"></a>

#### *property* node_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property node_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.LinkRecords.LinkRecords.source_records"></a>

#### *property* source_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[NotatedTargetedSourceRecord](#ansys.grantami.backend.soap.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord)]*

Property source_records is a list of [`NotatedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NotatedTargetedSourceRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`NotatedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NotatedTargetedSourceRecord)

<a id="module-ansys.grantami.backend.soap.LinkedRecordsDataType"></a>

<a id="linkedrecordsdatatype"></a>

### LinkedRecordsDataType

<a id="ansys.grantami.backend.soap.LinkedRecordsDataType.LinkedRecordsDataType"></a>

### *class* LinkedRecordsDataType(node_name=None, record_link_groups=None, type_string=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type representing a list of linked Records.

* **Parameters:**
  * **node_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_link_groups** (list of [`RecordLinkGroup`](#module-ansys.grantami.backend.soap.RecordLinkGroup))
  * **type_string** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.LinkedRecordsDataType.LinkedRecordsDataType.node_name"></a>

#### *property* node_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property node_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.LinkedRecordsDataType.LinkedRecordsDataType.record_link_groups"></a>

#### *property* record_link_groups *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordLinkGroup](#ansys.grantami.backend.soap.RecordLinkGroup.RecordLinkGroup)]*

Property record_link_groups is a list of [`RecordLinkGroup`](#module-ansys.grantami.backend.soap.RecordLinkGroup) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordLinkGroup`](#module-ansys.grantami.backend.soap.RecordLinkGroup)

<a id="ansys.grantami.backend.soap.LinkedRecordsDataType.LinkedRecordsDataType.type_string"></a>

#### *property* type_string *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property type_string is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.ListDataType"></a>

<a id="listdatatype"></a>

### ListDataType

<a id="ansys.grantami.backend.soap.ListDataType.ListDataType"></a>

### *class* ListDataType(items=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A list of values within a Cell in Tabular Data.

* **Parameters:**
  **items** (list of [`ListItem`](#module-ansys.grantami.backend.soap.ListItem))

<a id="ansys.grantami.backend.soap.ListDataType.ListDataType.items"></a>

#### *property* items *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ListItem](#ansys.grantami.backend.soap.ListItem.ListItem)]*

Property items is a list of [`ListItem`](#module-ansys.grantami.backend.soap.ListItem) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ListItem`](#module-ansys.grantami.backend.soap.ListItem)

<a id="module-ansys.grantami.backend.soap.ListItem"></a>

<a id="listitem"></a>

### ListItem

<a id="ansys.grantami.backend.soap.ListItem.ListItem"></a>

### *class* ListItem(data_type=None, date_data_value=None, discrete_data_value=None, file_data_value=None, hyperlink_data_value=None, integer_data_value=None, logical_data_value=None, long_text_data_value=None, picture_data_value=None, point_data_value=None, range_data_value=None, short_text_data_value=None, source_record_reference=None, float_functional_gridded_data_value=None, float_functional_series_data_value=None, discrete_functional_gridded_data_value=None, discrete_functional_series_data_value=None, empty_data_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An item in a List data value.

* **Parameters:**
  * **data_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **date_data_value** ([`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType))
  * **discrete_data_value** ([`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType))
  * **file_data_value** ([`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType))
  * **hyperlink_data_value** ([`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType))
  * **integer_data_value** ([`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType))
  * **logical_data_value** ([`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType))
  * **long_text_data_value** ([`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType))
  * **picture_data_value** ([`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType))
  * **point_data_value** ([`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType))
  * **range_data_value** ([`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType))
  * **short_text_data_value** ([`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType))
  * **source_record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **float_functional_gridded_data_value** ([`FloatFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType))
  * **float_functional_series_data_value** ([`FloatFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType))
  * **discrete_functional_gridded_data_value** ([`DiscreteFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType))
  * **discrete_functional_series_data_value** ([`DiscreteFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType))
  * **empty_data_value** ([`EmptyDataType`](#module-ansys.grantami.backend.soap.EmptyDataType))

<a id="ansys.grantami.backend.soap.ListItem.ListItem.data_type"></a>

#### *property* data_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property data_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.date_data_value"></a>

#### *property* date_data_value *: [DateDataType](#ansys.grantami.backend.soap.DateDataType.DateDataType)*

Property date_data_value is of type [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType).

* **Return type:**
  [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.discrete_data_value"></a>

#### *property* discrete_data_value *: [DiscreteDataType](#ansys.grantami.backend.soap.DiscreteDataType.DiscreteDataType)*

Property discrete_data_value is of type [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType).

* **Return type:**
  [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.discrete_functional_gridded_data_value"></a>

#### *property* discrete_functional_gridded_data_value *: [DiscreteFunctionalGriddedDataType](#ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType.DiscreteFunctionalGriddedDataType)*

Property discrete_functional_gridded_data_value is of type [`DiscreteFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType).

* **Return type:**
  [`DiscreteFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalGriddedDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.discrete_functional_series_data_value"></a>

#### *property* discrete_functional_series_data_value *: [DiscreteFunctionalSeriesDataType](#ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType.DiscreteFunctionalSeriesDataType)*

Property discrete_functional_series_data_value is of type [`DiscreteFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType).

* **Return type:**
  [`DiscreteFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.DiscreteFunctionalSeriesDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.empty_data_value"></a>

#### *property* empty_data_value *: [EmptyDataType](#ansys.grantami.backend.soap.EmptyDataType.EmptyDataType)*

Property empty_data_value is of type [`EmptyDataType`](#module-ansys.grantami.backend.soap.EmptyDataType).

* **Return type:**
  [`EmptyDataType`](#module-ansys.grantami.backend.soap.EmptyDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.file_data_value"></a>

#### *property* file_data_value *: [FileDataType](#ansys.grantami.backend.soap.FileDataType.FileDataType)*

Property file_data_value is of type [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType).

* **Return type:**
  [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.float_functional_gridded_data_value"></a>

#### *property* float_functional_gridded_data_value *: [FloatFunctionalGriddedDataType](#ansys.grantami.backend.soap.FloatFunctionalGriddedDataType.FloatFunctionalGriddedDataType)*

Property float_functional_gridded_data_value is of type [`FloatFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType).

* **Return type:**
  [`FloatFunctionalGriddedDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalGriddedDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.float_functional_series_data_value"></a>

#### *property* float_functional_series_data_value *: [FloatFunctionalSeriesDataType](#ansys.grantami.backend.soap.FloatFunctionalSeriesDataType.FloatFunctionalSeriesDataType)*

Property float_functional_series_data_value is of type [`FloatFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType).

* **Return type:**
  [`FloatFunctionalSeriesDataType`](#module-ansys.grantami.backend.soap.FloatFunctionalSeriesDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.hyperlink_data_value"></a>

#### *property* hyperlink_data_value *: [HyperlinkDataType](#ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType)*

Property hyperlink_data_value is of type [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType).

* **Return type:**
  [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.integer_data_value"></a>

#### *property* integer_data_value *: [IntegerDataType](#ansys.grantami.backend.soap.IntegerDataType.IntegerDataType)*

Property integer_data_value is of type [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType).

* **Return type:**
  [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.logical_data_value"></a>

#### *property* logical_data_value *: [LogicalDataType](#ansys.grantami.backend.soap.LogicalDataType.LogicalDataType)*

Property logical_data_value is of type [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType).

* **Return type:**
  [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.long_text_data_value"></a>

#### *property* long_text_data_value *: [LongTextDataType](#ansys.grantami.backend.soap.LongTextDataType.LongTextDataType)*

Property long_text_data_value is of type [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType).

* **Return type:**
  [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.picture_data_value"></a>

#### *property* picture_data_value *: [PictureDataType](#ansys.grantami.backend.soap.PictureDataType.PictureDataType)*

Property picture_data_value is of type [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType).

* **Return type:**
  [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.point_data_value"></a>

#### *property* point_data_value *: [PointDataType](#ansys.grantami.backend.soap.PointDataType.PointDataType)*

Property point_data_value is of type [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType).

* **Return type:**
  [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.range_data_value"></a>

#### *property* range_data_value *: [RangeDataType](#ansys.grantami.backend.soap.RangeDataType.RangeDataType)*

Property range_data_value is of type [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType).

* **Return type:**
  [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.short_text_data_value"></a>

#### *property* short_text_data_value *: [ShortTextDataType](#ansys.grantami.backend.soap.ShortTextDataType.ShortTextDataType)*

Property short_text_data_value is of type [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType).

* **Return type:**
  [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType)

<a id="ansys.grantami.backend.soap.ListItem.ListItem.source_record_reference"></a>

#### *property* source_record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property source_record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.LogicalDataType"></a>

<a id="logicaldatatype"></a>

### LogicalDataType

<a id="ansys.grantami.backend.soap.LogicalDataType.LogicalDataType"></a>

### *class* LogicalDataType(is_applicable=None, value=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type to contain a logical data type.

* **Parameters:**
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **value** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.LogicalDataType.LogicalDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.LogicalDataType.LogicalDataType.value"></a>

#### *property* value *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property value is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.LongTextDataType"></a>

<a id="longtextdatatype"></a>

### LongTextDataType

<a id="ansys.grantami.backend.soap.LongTextDataType.LongTextDataType"></a>

### *class* LongTextDataType(is_applicable=None, value=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type to contain a long text data type.

* **Parameters:**
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.LongTextDataType.LongTextDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.LongTextDataType.LongTextDataType.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.LookupValue"></a>

<a id="lookupvalue"></a>

### LookupValue

<a id="ansys.grantami.backend.soap.LookupValue.LookupValue"></a>

### *class* LookupValue(attribute_reference=None, attribute_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object containing an [`AttributeValue`](#module-ansys.grantami.backend.soap.AttributeValue) and
[`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) object that uniquely identify a record in
a table.

* **Parameters:**
  * **attribute_reference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **attribute_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.LookupValue.LookupValue.attribute_reference"></a>

#### *property* attribute_reference *: [AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)*

Property attribute_reference is of type [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference).

* **Return type:**
  [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.LookupValue.LookupValue.attribute_value"></a>

#### *property* attribute_value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property attribute_value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.LowEndSearchValue"></a>

<a id="lowendsearchvalue"></a>

### LowEndSearchValue

<a id="ansys.grantami.backend.soap.LowEndSearchValue.LowEndSearchValue"></a>

### *class* LowEndSearchValue(unit=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Lower limit for the [`BetweenSearchValue`](#module-ansys.grantami.backend.soap.BetweenSearchValue) search criterion.

* **Parameters:**
  * **unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float))

<a id="ansys.grantami.backend.soap.LowEndSearchValue.LowEndSearchValue.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.LowEndSearchValue.LowEndSearchValue.value"></a>

#### *property* value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="module-ansys.grantami.backend.soap.MIEntityResolution"></a>

<a id="mientityresolution"></a>

### MIEntityResolution

<a id="ansys.grantami.backend.soap.MIEntityResolution.MIEntityResolution"></a>

### *class* MIEntityResolution(can_write=None, entity_reference=None, resolved=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents whether the entity referred to by the reference property can actually be resolved to an
MI entity, and if that entity can be resolved whether or not it is writable.

* **Parameters:**
  * **can_write** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **entity_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **resolved** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.MIEntityResolution.MIEntityResolution.CanWrite"></a>

#### *class* CanWrite

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.MIEntityResolution.MIEntityResolution.CanWrite.No"></a>

#### No *= 1*

<a id="ansys.grantami.backend.soap.MIEntityResolution.MIEntityResolution.CanWrite.NotSupported"></a>

#### NotSupported *= 2*

<a id="ansys.grantami.backend.soap.MIEntityResolution.MIEntityResolution.CanWrite.Yes"></a>

#### Yes *= 0*

<a id="ansys.grantami.backend.soap.MIEntityResolution.MIEntityResolution.can_write"></a>

#### *property* can_write *: [int](https://docs.python.org/3/library/functions.html#int)*

Property can_write is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.MIEntityResolution.MIEntityResolution.entity_reference"></a>

#### *property* entity_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property entity_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.MIEntityResolution.MIEntityResolution.resolved"></a>

#### *property* resolved *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property resolved is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.MIParameterValue"></a>

<a id="miparametervalue"></a>

### MIParameterValue

<a id="ansys.grantami.backend.soap.MIParameterValue.MIParameterValue"></a>

### *class* MIParameterValue(revision_info=None, value=None, value_name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A named value of a Parameter in a Granta MI Database.

* **Parameters:**
  * **revision_info** ([`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo))
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **value_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.MIParameterValue.MIParameterValue.revision_info"></a>

#### *property* revision_info *: [RevisionInfo](#ansys.grantami.backend.soap.RevisionInfo.RevisionInfo)*

Property revision_info is of type [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo).

* **Return type:**
  [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo)

<a id="ansys.grantami.backend.soap.MIParameterValue.MIParameterValue.value"></a>

#### *property* value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.MIParameterValue.MIParameterValue.value_name"></a>

#### *property* value_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.MISession"></a>

<a id="misession"></a>

### MISession

<a id="ansys.grantami.backend.soap.MISession.MISession"></a>

### *class* MISession(url='', verbosity=1)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A connection to a Granta MI Server. Don’t create this class directly, instead see
[`GRANTA_MISession`](#ansys.grantami.backend.soap.GRANTA_MISession.GRANTA_MISession)

* **Parameters:**
  * **url** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – URL to access the Granta MI Service Layer
  * **verbosity** ([`str`](https://docs.python.org/3/library/stdtypes.html#str), {1, 2, 3}) – Logging verbosity, accepted values are: 1 - “ERROR”, 2 - “WARNING”, or 3 - “DEBUG”

<a id="ansys.grantami.backend.soap.MISession.MISession.connection_is_valid"></a>

#### connection_is_valid()

Indicates whether the connection was successful.

* **Returns:**
  * **is_valid** (*bool*) – Whether the connection test succeeded
  * **description** (*str*) – Description of the test outcome
* **Return type:**
  [*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), [str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.backend.soap.MISession.MISession.set_authorization"></a>

#### set_authorization(auth)

Use Open ID Connect to authenticate to the Granta MI Service Layer

* **Parameters:**
  **auth** ([`OIDC`](#ansys.grantami.backend.soap.OIDC.OIDC))

<a id="ansys.grantami.backend.soap.MISession.MISession.set_credentials"></a>

#### set_credentials(domain, username, password)

Use the provided credentials to authenticate with the Granta MI Service Layer.

The Granta MI Service Layer must be configured to allow Basic authentication, or the MI Scripting Toolkit
session must be created on Windows, and NTLM authentication must be enabled.

* **Parameters:**
  * **username** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Granta MI username
  * **password** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Granta MI password
  * **domain** ([`str`](https://docs.python.org/3/library/stdtypes.html#str), optional) – Granta MI user domain

<a id="ansys.grantami.backend.soap.MISession.MISession.set_receive_timeout"></a>

#### set_receive_timeout(timeout)

Sets time in milliseconds to wait for a response before timing out.

* **Parameters:**
  **timeout** ([*int*](https://docs.python.org/3/library/functions.html#int)) – Timeout (in milliseconds)

<a id="ansys.grantami.backend.soap.MISession.MISession.test_connection"></a>

#### test_connection()

Raises an exception if a request to the Granta MI Service Layer does not respond or responds with an error.

* **Raises:**
  [**GRANTA_Exception**](#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_Exception) – If the connection test failed

<a id="ansys.grantami.backend.soap.MISession.MISession.use_auto_logon"></a>

#### use_auto_logon()

Use the Windows credentials of the current user to authenticate to the Granta MI Service Layer.

<a id="ansys.grantami.backend.soap.MISession.MISession.act_as_read_user"></a>

#### *property* act_as_read_user *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Forces the session to operate with READ permissions, even if the user has higher privileges.

If the user authenticates with a role that has additional privileges the session will behave as though they
have only read permissions. This prevents writing to the database and affects which versions of records are
visible for version controlled databases.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="module-ansys.grantami.backend.soap.MinMax"></a>

<a id="minmax"></a>

### MinMax

<a id="ansys.grantami.backend.soap.MinMax.MinMax"></a>

### *class* MinMax(max_value=None, min_value=None, units=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The minimum and maximum data values for a specified numerical attribute, calculated from all records
you have read permissions for in a database.

* **Parameters:**
  * **max_value** ([`MinMaxValue`](#module-ansys.grantami.backend.soap.MinMaxValue))
  * **min_value** ([`MinMaxValue`](#module-ansys.grantami.backend.soap.MinMaxValue))
  * **units** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.MinMax.MinMax.max_value"></a>

#### *property* max_value *: [MinMaxValue](#ansys.grantami.backend.soap.MinMaxValue.MinMaxValue)*

Property max_value is of type [`MinMaxValue`](#module-ansys.grantami.backend.soap.MinMaxValue).

* **Return type:**
  [`MinMaxValue`](#module-ansys.grantami.backend.soap.MinMaxValue)

<a id="ansys.grantami.backend.soap.MinMax.MinMax.min_value"></a>

#### *property* min_value *: [MinMaxValue](#ansys.grantami.backend.soap.MinMaxValue.MinMaxValue)*

Property min_value is of type [`MinMaxValue`](#module-ansys.grantami.backend.soap.MinMaxValue).

* **Return type:**
  [`MinMaxValue`](#module-ansys.grantami.backend.soap.MinMaxValue)

<a id="ansys.grantami.backend.soap.MinMax.MinMax.units"></a>

#### *property* units *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property units is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.MinMaxValue"></a>

<a id="minmaxvalue"></a>

### MinMaxValue

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue"></a>

### *class* MinMaxValue(date_time=None, double=None, integer=None, type_=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that represents the minimum or maximum data value for a numerical attribute in a database.

* **Parameters:**
  * **date_time** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **double** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **integer** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **type** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.Type"></a>

#### *class* Type

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.Type.DateType"></a>

#### DateType *= 0*

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.Type.DoubleType"></a>

#### DoubleType *= 1*

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.Type.ERROR"></a>

#### ERROR *= -1*

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.Type.IntegerType"></a>

#### IntegerType *= 2*

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.Type.NotANumber"></a>

#### NotANumber *= 3*

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.date_time"></a>

#### *property* date_time *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property date_time is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.double"></a>

#### *property* double *: [float](https://docs.python.org/3/library/functions.html#float)*

Property double is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.integer"></a>

#### *property* integer *: [int](https://docs.python.org/3/library/functions.html#int)*

Property integer is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.MinMaxValue.MinMaxValue.type_"></a>

#### *property* type_ *: [int](https://docs.python.org/3/library/functions.html#int)*

Property type_ is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.ModifyRecordLinksRequest"></a>

<a id="modifyrecordlinksrequest"></a>

### ModifyRecordLinksRequest

<a id="ansys.grantami.backend.soap.ModifyRecordLinksRequest.ModifyRecordLinksRequest"></a>

### *class* ModifyRecordLinksRequest(import_error_mode=None, record_link_check_mode=None, record_link_group_reference=None, record_link_modifications=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input to the modify_record_links operation.
Requires a [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference) to the record link group
you wish to modify and a [`RecordLinkModifications`](#module-ansys.grantami.backend.soap.RecordLinkModifications) object,
which contains the modifications you wish to make to the record link group. The ‘import_error_mode’
property defines how to handle errors which occur during linking and can take the following values:
‘FaultAndRollbackOnAnyError’,  which stops the linking request when an error occurs and attempts to
roll back to the state before the request was issued; or  ‘LogAndContinueWherePossible’, which will
log non-fatal errors and attempt to continue with the linking request. The ‘record_link_check_mode’
property defines how to check the status of existing links and takes the following values:
‘CheckOnlyForwardLinks’, which checks for link only in the forward direction and is quicker than
checking both directions; or ‘CheckForwardAndReverseLinks’, which is slower but safer as it checks
for both forward and backward links.

* **Parameters:**
  * **import_error_mode** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_link_check_mode** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_link_group_reference** ([`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference))
  * **record_link_modifications** ([`RecordLinkModifications`](#module-ansys.grantami.backend.soap.RecordLinkModifications))

<a id="ansys.grantami.backend.soap.ModifyRecordLinksRequest.ModifyRecordLinksRequest.import_error_mode"></a>

#### *property* import_error_mode *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property import_error_mode is of type str. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ModifyRecordLinksRequest.ModifyRecordLinksRequest.record_link_check_mode"></a>

#### *property* record_link_check_mode *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property record_link_check_mode is of type str. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ModifyRecordLinksRequest.ModifyRecordLinksRequest.record_link_group_reference"></a>

#### *property* record_link_group_reference *: [RecordLinkGroupReference](#ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference)*

Property record_link_group_reference is of type [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference).

* **Return type:**
  [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference)

<a id="ansys.grantami.backend.soap.ModifyRecordLinksRequest.ModifyRecordLinksRequest.record_link_modifications"></a>

#### *property* record_link_modifications *: [RecordLinkModifications](#ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications)*

Property record_link_modifications is of type [`RecordLinkModifications`](#module-ansys.grantami.backend.soap.RecordLinkModifications).

* **Return type:**
  [`RecordLinkModifications`](#module-ansys.grantami.backend.soap.RecordLinkModifications)

<a id="module-ansys.grantami.backend.soap.ModifyRecordLinksResponse"></a>

<a id="modifyrecordlinksresponse"></a>

### ModifyRecordLinksResponse

<a id="ansys.grantami.backend.soap.ModifyRecordLinksResponse.ModifyRecordLinksResponse"></a>

### *class* ModifyRecordLinksResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

The response from a modify_record_links request.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a ModifyRecordLinksResponse object.

<a id="ansys.grantami.backend.soap.ModifyRecordLinksResponse.ModifyRecordLinksResponse.record_link_changes"></a>

#### *property* record_link_changes *: [RecordLinkChanges](#ansys.grantami.backend.soap.RecordLinkChanges.RecordLinkChanges)*

Property record_link_changes is of type [`RecordLinkChanges`](#module-ansys.grantami.backend.soap.RecordLinkChanges).

* **Return type:**
  [`RecordLinkChanges`](#module-ansys.grantami.backend.soap.RecordLinkChanges)

<a id="module-ansys.grantami.backend.soap.NamedAttribute"></a>

<a id="namedattribute"></a>

### NamedAttribute

<a id="ansys.grantami.backend.soap.NamedAttribute.NamedAttribute"></a>

### *class* NamedAttribute(about=None, attribute=None, is_meta=None, name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Name information about an Attribute in a Granta MI database.

* **Parameters:**
  * **about** ([`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute))
  * **attribute** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **is_meta** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.NamedAttribute.NamedAttribute.about"></a>

#### *property* about *: [NamedAttribute](#ansys.grantami.backend.soap.NamedAttribute.NamedAttribute)*

Property about is of type [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute). Only populated if ‘is_meta’ is True.

* **Return type:**
  [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute)

<a id="ansys.grantami.backend.soap.NamedAttribute.NamedAttribute.attribute"></a>

#### *property* attribute *: [AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)*

Property attribute is of type [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference).

* **Return type:**
  [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.NamedAttribute.NamedAttribute.is_meta"></a>

#### *property* is_meta *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_meta is of type bool. If this is True, the ‘about’ property may have additional information about the related parent attribute.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.NamedAttribute.NamedAttribute.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.NamedLayout"></a>

<a id="namedlayout"></a>

### NamedLayout

<a id="ansys.grantami.backend.soap.NamedLayout.NamedLayout"></a>

### *class* NamedLayout(layout=None, name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A layout in a Granta MI database.

* **Parameters:**
  * **layout** ([`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.NamedLayout.NamedLayout.layout"></a>

#### *property* layout *: [LayoutReference](#ansys.grantami.backend.soap.LayoutReference.LayoutReference)*

Property layout is of type [`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference).

* **Return type:**
  [`LayoutReference`](#module-ansys.grantami.backend.soap.LayoutReference)

<a id="ansys.grantami.backend.soap.NamedLayout.NamedLayout.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.NamedRecord"></a>

<a id="namedrecord"></a>

### NamedRecord

<a id="ansys.grantami.backend.soap.NamedRecord.NamedRecord"></a>

### *class* NamedRecord(long_name=None, record_reference=None, short_name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) with the short and long name of the record.

* **Parameters:**
  * **long_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **short_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.NamedRecord.NamedRecord.long_name"></a>

#### *property* long_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property long_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.NamedRecord.NamedRecord.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.NamedRecord.NamedRecord.short_name"></a>

#### *property* short_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property short_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.NamedSubset"></a>

<a id="namedsubset"></a>

### NamedSubset

<a id="ansys.grantami.backend.soap.NamedSubset.NamedSubset"></a>

### *class* NamedSubset(name=None, subset=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference) with the subset name.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **subset** ([`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference))

<a id="ansys.grantami.backend.soap.NamedSubset.NamedSubset.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.NamedSubset.NamedSubset.subset"></a>

#### *property* subset *: [SubsetReference](#ansys.grantami.backend.soap.SubsetReference.SubsetReference)*

Property subset is of type [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference).

* **Return type:**
  [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference)

<a id="module-ansys.grantami.backend.soap.NamedTargetedSourceRecord"></a>

<a id="namedtargetedsourcerecord"></a>

### NamedTargetedSourceRecord

<a id="ansys.grantami.backend.soap.NamedTargetedSourceRecord.NamedTargetedSourceRecord"></a>

### *class* NamedTargetedSourceRecord(record=None, target_records=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A named record used for modifying record links.

* **Parameters:**
  * **record** ([`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord))
  * **target_records** (list of [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord))

<a id="ansys.grantami.backend.soap.NamedTargetedSourceRecord.NamedTargetedSourceRecord.add_target_records"></a>

#### add_target_records(\_namedRecord)

Appends \_namedRecord to targetRecords property on NamedTargetedSourceRecord C-object.

* **Parameters:**
  **\_namedRecord** ([`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord))

<a id="ansys.grantami.backend.soap.NamedTargetedSourceRecord.NamedTargetedSourceRecord.record"></a>

#### *property* record *: [NamedRecord](#ansys.grantami.backend.soap.NamedRecord.NamedRecord)*

Property record is of type [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord).

* **Return type:**
  [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord)

<a id="ansys.grantami.backend.soap.NamedTargetedSourceRecord.NamedTargetedSourceRecord.target_records"></a>

#### *property* target_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[NamedRecord](#ansys.grantami.backend.soap.NamedRecord.NamedRecord)]*

Property target_records is a list of [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord)

<a id="module-ansys.grantami.backend.soap.NotatedTargetRecord"></a>

<a id="notatedtargetrecord"></a>

### NotatedTargetRecord

<a id="ansys.grantami.backend.soap.NotatedTargetRecord.NotatedTargetRecord"></a>

### *class* NotatedTargetRecord(notes=None, record=None, reverse_notes=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) of the record you wish to link to and notes
on the record link.
Requires a [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference). Notes on the link and the reverse
link are optional.

* **Parameters:**
  * **notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **reverse_notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.NotatedTargetRecord.NotatedTargetRecord.notes"></a>

#### *property* notes *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property notes is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.NotatedTargetRecord.NotatedTargetRecord.record"></a>

#### *property* record *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.NotatedTargetRecord.NotatedTargetRecord.reverse_notes"></a>

#### *property* reverse_notes *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property reverse_notes is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.NotatedTargetedSourceRecord"></a>

<a id="notatedtargetedsourcerecord"></a>

### NotatedTargetedSourceRecord

<a id="ansys.grantami.backend.soap.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord"></a>

### *class* NotatedTargetedSourceRecord(source_record=None, target_records=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord) to link from and container of
[`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord) of the records to link to.
Requires a source [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord). Can set zero to many target
[`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord) objects you wish to link to.

* **Parameters:**
  * **source_record** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **target_records** (list of [`NotatedTargetRecord`](#module-ansys.grantami.backend.soap.NotatedTargetRecord))

<a id="ansys.grantami.backend.soap.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord.add_target_record"></a>

#### add_target_record(\_notatedTargetRecord)

Appends \_notatedTargetRecord to targetRecords property on NotatedTargetedSourceRecord C-object.

* **Parameters:**
  **\_notatedTargetRecord** ([`NotatedTargetRecord`](#module-ansys.grantami.backend.soap.NotatedTargetRecord))

<a id="ansys.grantami.backend.soap.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord.source_record"></a>

#### *property* source_record *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property source_record is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.NotatedTargetedSourceRecord.NotatedTargetedSourceRecord.target_records"></a>

#### *property* target_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[NotatedTargetRecord](#ansys.grantami.backend.soap.NotatedTargetRecord.NotatedTargetRecord)]*

Property target_records is a list of [`NotatedTargetRecord`](#module-ansys.grantami.backend.soap.NotatedTargetRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`NotatedTargetRecord`](#module-ansys.grantami.backend.soap.NotatedTargetRecord)

<a id="module-ansys.grantami.backend.soap.OIDC"></a>

<a id="oidc"></a>

### OIDC

<a id="ansys.grantami.backend.soap.OIDC.OIDC"></a>

### *class* OIDC(access_token=None, refresh_token=None, authorize_timeout=None)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An object to allow authorization using OpenID Connect. Contact Ansys Granta Technical Support for information
on supported identity providers, and for configuration and setup documentation.

If neither `access_token` nor `refresh_token` are provided then call [`authorize_with_authorization_code_flow()`](#ansys.grantami.backend.soap.OIDC.OIDC.authorize_with_authorization_code_flow) or
[`authorize_with_device_code_flow()`](#ansys.grantami.backend.soap.OIDC.OIDC.authorize_with_device_code_flow) for interactive login with the user’s credentials. If `refresh_token` is
provided then the session will attempt to obtain an access token from the identity provider. If `access_token` is
provided then the session will use it directly.

* **Parameters:**
  * **access_token** ([`str`](https://docs.python.org/3/library/stdtypes.html#str), optional) – Valid access token for the MI Service Layer
  * **refresh_token** ([`str`](https://docs.python.org/3/library/stdtypes.html#str), optional) – Valid refresh token for the MI Service Layer
  * **authorize_timeout** ([`int`](https://docs.python.org/3/library/functions.html#int), default 300,000) – Number of milliseconds to wait for a response after calling [`authorize_with_authorization_code_flow()`](#ansys.grantami.backend.soap.OIDC.OIDC.authorize_with_authorization_code_flow)
    or [`authorize_with_device_code_flow()`](#ansys.grantami.backend.soap.OIDC.OIDC.authorize_with_device_code_flow).

<a id="ansys.grantami.backend.soap.OIDC.OIDC.authorize_with_authorization_code_flow"></a>

#### authorize_with_authorization_code_flow()

Authorize a Granta MI session with an OpenID Connect provider.

Uses the Authorization Code Flow with PKCE to authenticate.

<a id="ansys.grantami.backend.soap.OIDC.OIDC.authorize_with_device_code_flow"></a>

#### authorize_with_device_code_flow()

Authorize a Granta MI session with an OpenID Connect provider.

Uses the Device Code Flow to authenticate.

<a id="ansys.grantami.backend.soap.OIDC.OIDC.check_authentication"></a>

#### check_authentication()

Checks whether your access and refresh tokens are valid.

* **Returns:**
  * **is_valid** (*bool*) – Whether the tokens could be used to connect to the Granta MI Service layer
  * **message** (*str*) – Error message if the tokens could not be used to connect to the Granta MI Service Layer.
* **Return type:**
  [*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), [str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.backend.soap.OIDC.OIDC.test_authentication"></a>

#### test_authentication()

Checks whether your access and refresh tokens are valid.

* **Raises:**
  [**GRANTA_Exception**](#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_Exception) – If the tokens could not be used to connect to the Granta MI Service Layer.

<a id="ansys.grantami.backend.soap.OIDC.OIDC.access_token"></a>

#### *property* access_token *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

OIDC access token.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.OIDC.OIDC.authorize_timeout"></a>

#### *property* authorize_timeout *: [int](https://docs.python.org/3/library/functions.html#int)*

The number of milliseconds to wait for the user to authenticate in their browser.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.OIDC.OIDC.refresh_token"></a>

#### *property* refresh_token *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

OIDC refresh token, if one is available from the OpenID Identity Provider.

#### NOTE
The identity provider must provide the `offline_access` scope for refresh tokens to be available

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.ParameterDetail"></a>

<a id="parameterdetail"></a>

### ParameterDetail

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail"></a>

### *class* ParameterDetail(applies_to_attribute=None, applies_to_record=None, default_value=None, interpolation_type=None, name=None, order=None, parameter_reference=None, parameter_type=None, parameter_values=None, revision_info=None, scale_type=None, unit=None, help_info=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed information about a Parameter in a Granta MI Database.

* **Parameters:**
  * **applies_to_attribute** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **applies_to_record** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **default_value** ([`MIParameterValue`](#module-ansys.grantami.backend.soap.MIParameterValue))
  * **interpolation_type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **order** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **parameter_reference** ([`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference))
  * **parameter_type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **parameter_values** (list of [`MIParameterValue`](#module-ansys.grantami.backend.soap.MIParameterValue))
  * **revision_info** ([`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo))
  * **scale_type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **unit** ([`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation))
  * **help_info** ([`HelpInfo`](#module-ansys.grantami.backend.soap.HelpInfo))

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.Interpolation"></a>

#### *class* Interpolation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.Interpolation.CubicSpline"></a>

#### CubicSpline *= 2*

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.Interpolation.Linear"></a>

#### Linear *= 1*

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.Interpolation.NONE"></a>

#### NONE *= 0*

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ParameterType"></a>

#### *class* ParameterType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ParameterType.Discrete"></a>

#### Discrete *= 2*

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ParameterType.NumericRestricted"></a>

#### NumericRestricted *= 1*

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ParameterType.NumericUnrestricted"></a>

#### NumericUnrestricted *= 0*

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ScaleType"></a>

#### *class* ScaleType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ScaleType.Linear"></a>

#### Linear *= 1*

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ScaleType.Log"></a>

#### Log *= 2*

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ScaleType.NotSet"></a>

#### NotSet *= 0*

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.applies_to_attribute"></a>

#### *property* applies_to_attribute *: [AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)*

Property applies_to_attribute is of type [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference).

* **Return type:**
  [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.applies_to_record"></a>

#### *property* applies_to_record *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property applies_to_record is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.default_value"></a>

#### *property* default_value *: [MIParameterValue](#ansys.grantami.backend.soap.MIParameterValue.MIParameterValue)*

Property default_value is of type [`MIParameterValue`](#module-ansys.grantami.backend.soap.MIParameterValue).

* **Return type:**
  [`MIParameterValue`](#module-ansys.grantami.backend.soap.MIParameterValue)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.help_info"></a>

#### *property* help_info *: [HelpInfo](#ansys.grantami.backend.soap.HelpInfo.HelpInfo)*

Property help_info is of type [`HelpInfo`](#module-ansys.grantami.backend.soap.HelpInfo).

* **Return type:**
  [`HelpInfo`](#module-ansys.grantami.backend.soap.HelpInfo)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.interpolation_type"></a>

#### *property* interpolation_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property interpolation_type is of type int. See [`ParameterDetail.Interpolation`](#ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.Interpolation) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int)*

Property order is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.parameter_reference"></a>

#### *property* parameter_reference *: [ParameterReference](#ansys.grantami.backend.soap.ParameterReference.ParameterReference)*

Property parameter_reference is of type [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference).

* **Return type:**
  [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.parameter_type"></a>

#### *property* parameter_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property parameter_type is of type int. See [`ParameterDetail.ParameterType`](#ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ParameterType) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.parameter_values"></a>

#### *property* parameter_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[MIParameterValue](#ansys.grantami.backend.soap.MIParameterValue.MIParameterValue)]*

Property parameter_values is a list of [`MIParameterValue`](#module-ansys.grantami.backend.soap.MIParameterValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`MIParameterValue`](#module-ansys.grantami.backend.soap.MIParameterValue)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.revision_info"></a>

#### *property* revision_info *: [RevisionInfo](#ansys.grantami.backend.soap.RevisionInfo.RevisionInfo)*

Property revision_info is of type [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo).

* **Return type:**
  [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.scale_type"></a>

#### *property* scale_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property scale_type is of type int. See [`ParameterDetail.ScaleType`](#ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.ScaleType) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ParameterDetail.ParameterDetail.unit"></a>

#### *property* unit *: [UnitInformation](#ansys.grantami.backend.soap.UnitInformation.UnitInformation)*

Property unit is of type [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation).

* **Return type:**
  [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation)

<a id="module-ansys.grantami.backend.soap.ParameterDomain"></a>

<a id="parameterdomain"></a>

### ParameterDomain

<a id="ansys.grantami.backend.soap.ParameterDomain.ParameterDomain"></a>

### *class* ParameterDomain(exporter_parameter_id=None, interpolable=None, values=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a list of parameter values.

* **Parameters:**
  * **exporter_parameter_id** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **interpolable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **values** (list of [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue))

<a id="ansys.grantami.backend.soap.ParameterDomain.ParameterDomain.exporter_parameter_id"></a>

#### *property* exporter_parameter_id *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property exporter_parameter_id is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ParameterDomain.ParameterDomain.interpolable"></a>

#### *property* interpolable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property interpolable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.ParameterDomain.ParameterDomain.values"></a>

#### *property* values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ParameterValue](#ansys.grantami.backend.soap.ParameterValue.ParameterValue)]*

Property values is a list of [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue)

<a id="module-ansys.grantami.backend.soap.ParameterInformation"></a>

<a id="parameterinformation"></a>

### ParameterInformation

<a id="ansys.grantami.backend.soap.ParameterInformation.ParameterInformation"></a>

### *class* ParameterInformation(name=None, parameter_reference=None, unit=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information for a parameter in a Granta MI database.
Contains the name and unit information for a parameter and a
[`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference) to the parameter.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **parameter_reference** ([`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference))
  * **unit** ([`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation))

<a id="ansys.grantami.backend.soap.ParameterInformation.ParameterInformation.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ParameterInformation.ParameterInformation.parameter_reference"></a>

#### *property* parameter_reference *: [ParameterReference](#ansys.grantami.backend.soap.ParameterReference.ParameterReference)*

Property parameter_reference is of type [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference).

* **Return type:**
  [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference)

<a id="ansys.grantami.backend.soap.ParameterInformation.ParameterInformation.unit"></a>

#### *property* unit *: [UnitInformation](#ansys.grantami.backend.soap.UnitInformation.UnitInformation)*

Property unit is of type [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation).

* **Return type:**
  [`UnitInformation`](#module-ansys.grantami.backend.soap.UnitInformation)

<a id="module-ansys.grantami.backend.soap.ParameterReference"></a>

<a id="parameterreference"></a>

### ParameterReference

<a id="ansys.grantami.backend.soap.ParameterReference.ParameterReference"></a>

### *class* ParameterReference(db_key=None, id_=None, name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Identification of a particular parameter in a Granta MI database .
For requests a db_key is required, and either the parameter ID or the parameter name.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **id** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ParameterReference.ParameterReference.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ParameterReference.ParameterReference.id_"></a>

#### *property* id_ *: [int](https://docs.python.org/3/library/functions.html#int)*

Property id_ is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ParameterReference.ParameterReference.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.ParameterReferenceAndValue"></a>

<a id="parameterreferenceandvalue"></a>

### ParameterReferenceAndValue

<a id="ansys.grantami.backend.soap.ParameterReferenceAndValue.ParameterReferenceAndValue"></a>

### *class* ParameterReferenceAndValue(parameter=None, parameter_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains a [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference) and a
[`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue).

* **Parameters:**
  * **parameter** ([`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference))
  * **parameter_value** ([`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue))

<a id="ansys.grantami.backend.soap.ParameterReferenceAndValue.ParameterReferenceAndValue.parameter"></a>

#### *property* parameter *: [ParameterReference](#ansys.grantami.backend.soap.ParameterReference.ParameterReference)*

Property parameter is of type [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference).

* **Return type:**
  [`ParameterReference`](#module-ansys.grantami.backend.soap.ParameterReference)

<a id="ansys.grantami.backend.soap.ParameterReferenceAndValue.ParameterReferenceAndValue.parameter_value"></a>

#### *property* parameter_value *: [ParameterValue](#ansys.grantami.backend.soap.ParameterValue.ParameterValue)*

Property parameter_value is of type [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue).

* **Return type:**
  [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue)

<a id="module-ansys.grantami.backend.soap.ParameterReferencesAndValues"></a>

<a id="parameterreferencesandvalues"></a>

### ParameterReferencesAndValues

<a id="ansys.grantami.backend.soap.ParameterReferencesAndValues.ParameterReferencesAndValues"></a>

### *class* ParameterReferencesAndValues(parameter_with_values=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of [`ParameterReferenceAndValue`](#module-ansys.grantami.backend.soap.ParameterReferenceAndValue) objects.

* **Parameters:**
  **parameter_with_values** (list of [`ParameterReferenceAndValue`](#module-ansys.grantami.backend.soap.ParameterReferenceAndValue))

<a id="ansys.grantami.backend.soap.ParameterReferencesAndValues.ParameterReferencesAndValues.add_parameter_with_value"></a>

#### add_parameter_with_value(\_parameterReferenceAndValue)

Appends \_parameterReferenceAndValue to parameterWithValues property on ParameterReferencesAndValues C-object.

* **Parameters:**
  **\_parameterReferenceAndValue** ([`ParameterReferenceAndValue`](#module-ansys.grantami.backend.soap.ParameterReferenceAndValue))

<a id="ansys.grantami.backend.soap.ParameterReferencesAndValues.ParameterReferencesAndValues.parameter_with_values"></a>

#### *property* parameter_with_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ParameterReferenceAndValue](#ansys.grantami.backend.soap.ParameterReferenceAndValue.ParameterReferenceAndValue)]*

Property parameter_with_values is a list of [`ParameterReferenceAndValue`](#module-ansys.grantami.backend.soap.ParameterReferenceAndValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ParameterReferenceAndValue`](#module-ansys.grantami.backend.soap.ParameterReferenceAndValue)

<a id="module-ansys.grantami.backend.soap.ParameterValue"></a>

<a id="parametervalue"></a>

### ParameterValue

<a id="ansys.grantami.backend.soap.ParameterValue.ParameterValue"></a>

### *class* ParameterValue(discrete_value=None, numeric_value=None, type_=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A value of a Parameter in Functional data.

* **Parameters:**
  * **discrete_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **numeric_value** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ParameterValue.ParameterValue.discrete_value"></a>

#### *property* discrete_value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property discrete_value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ParameterValue.ParameterValue.numeric_value"></a>

#### *property* numeric_value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property numeric_value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.ParameterValue.ParameterValue.type_"></a>

#### *property* type_ *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property type_ is of type str. There is no need to set this property manually.
See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.Parameters"></a>

<a id="parameters"></a>

### Parameters

<a id="ansys.grantami.backend.soap.Parameters.Parameters"></a>

### *class* Parameters(parameters=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation) objects.

* **Parameters:**
  **parameters** (list of [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation))

<a id="ansys.grantami.backend.soap.Parameters.Parameters.add_parameter"></a>

#### add_parameter(\_parameterInformation)

Appends \_parameterInformation to parameters property on Parameters C-object.

* **Parameters:**
  **\_parameterInformation** ([`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation))

<a id="ansys.grantami.backend.soap.Parameters.Parameters.parameters"></a>

#### *property* parameters *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ParameterInformation](#ansys.grantami.backend.soap.ParameterInformation.ParameterInformation)]*

Property parameters is a list of [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ParameterInformation`](#module-ansys.grantami.backend.soap.ParameterInformation)

<a id="module-ansys.grantami.backend.soap.PartialTableReference"></a>

<a id="partialtablereference"></a>

### PartialTableReference

<a id="ansys.grantami.backend.soap.PartialTableReference.PartialTableReference"></a>

### *class* PartialTableReference(table_guid=None, table_id=None, table_name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A reference to a Granta MI table.
Usually, just one of the several optional fields should be provided; where more than one is
provided, the highest priority one is used, where the descending priority order is: table_identity,
table_guid, table_name.

* **Parameters:**
  * **table_guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **table_id** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **table_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.PartialTableReference.PartialTableReference.table_guid"></a>

#### *property* table_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property table_guid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.PartialTableReference.PartialTableReference.table_id"></a>

#### *property* table_id *: [int](https://docs.python.org/3/library/functions.html#int)*

Property table_id is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.PartialTableReference.PartialTableReference.table_name"></a>

#### *property* table_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property table_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.PathLeaf"></a>

<a id="pathleaf"></a>

### PathLeaf

<a id="ansys.grantami.backend.soap.PathLeaf.PathLeaf"></a>

### *class* PathLeaf(long_name=None, record_reference=None, short_name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The folder furthest from the root record folder, for each path checked or created.

* **Parameters:**
  * **long_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **short_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.PathLeaf.PathLeaf.long_name"></a>

#### *property* long_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property long_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.PathLeaf.PathLeaf.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.PathLeaf.PathLeaf.short_name"></a>

#### *property* short_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property short_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.PictureDataType"></a>

<a id="picturedatatype"></a>

### PictureDataType

<a id="ansys.grantami.backend.soap.PictureDataType.PictureDataType"></a>

### *class* PictureDataType(url=None, content_type=None, data=None, is_applicable=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type representing a piece of Picture data in a Granta MI Database.
To get a byte-array representing the binary data, call read_binary_data(). To set the binary data
(as part of a data import), use modify_binary_data().

* **Parameters:**
  * **url** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **content_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **data** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))

<a id="ansys.grantami.backend.soap.PictureDataType.PictureDataType.modify_binary_data"></a>

#### modify_binary_data(binary_data)

* **Parameters:**
  **binary_data** ([*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes))

<a id="ansys.grantami.backend.soap.PictureDataType.PictureDataType.read_binary_data"></a>

#### read_binary_data()

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)

<a id="ansys.grantami.backend.soap.PictureDataType.PictureDataType.content_type"></a>

#### *property* content_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property content_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.PictureDataType.PictureDataType.data"></a>

#### *property* data *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property data is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.PictureDataType.PictureDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.PictureDataType.PictureDataType.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property url is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.PointDataType"></a>

<a id="pointdatatype"></a>

### PointDataType

<a id="ansys.grantami.backend.soap.PointDataType.PointDataType"></a>

### *class* PointDataType(is_applicable=None, is_estimated=None, parameters=None, points=None, unit_symbol=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

A type to contain an array of float data types.

* **Parameters:**
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_estimated** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **parameters** ([`Parameters`](#module-ansys.grantami.backend.soap.Parameters))
  * **points** (list of [`PointValueWithParameters`](#module-ansys.grantami.backend.soap.PointValueWithParameters))
  * **unit_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.PointDataType.PointDataType.add_point"></a>

#### add_point(\_pointValueWithParameters)

Appends \_pointValueWithParameters to points property on PointDataType C-object.

* **Parameters:**
  **\_pointValueWithParameters** ([`PointValueWithParameters`](#module-ansys.grantami.backend.soap.PointValueWithParameters))

<a id="ansys.grantami.backend.soap.PointDataType.PointDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.PointDataType.PointDataType.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_estimated is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.PointDataType.PointDataType.parameters"></a>

#### *property* parameters *: [Parameters](#ansys.grantami.backend.soap.Parameters.Parameters)*

Property parameters is of type [`Parameters`](#module-ansys.grantami.backend.soap.Parameters).

* **Return type:**
  [`Parameters`](#module-ansys.grantami.backend.soap.Parameters)

<a id="ansys.grantami.backend.soap.PointDataType.PointDataType.points"></a>

#### *property* points *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[PointValueWithParameters](#ansys.grantami.backend.soap.PointValueWithParameters.PointValueWithParameters)]*

Property points is a list of [`PointValueWithParameters`](#module-ansys.grantami.backend.soap.PointValueWithParameters) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`PointValueWithParameters`](#module-ansys.grantami.backend.soap.PointValueWithParameters)

<a id="ansys.grantami.backend.soap.PointDataType.PointDataType.unit_symbol"></a>

#### *property* unit_symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit_symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.PointValueWithParameters"></a>

<a id="pointvaluewithparameters"></a>

### PointValueWithParameters

<a id="ansys.grantami.backend.soap.PointValueWithParameters.PointValueWithParameters"></a>

### *class* PointValueWithParameters(has_trailing_zero_info=None, trailing_zero_info=None, value=None, value_parameters=None, has_sig_figs_for_import=None, sig_figs_for_import=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A numeric value with associated [`ParameterReferencesAndValues`](#module-ansys.grantami.backend.soap.ParameterReferencesAndValues)
object.

* **Parameters:**
  * **has_trailing_zero_info** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **trailing_zero_info** ([`TrailingZeroInformation`](#module-ansys.grantami.backend.soap.TrailingZeroInformation))
  * **value** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **value_parameters** ([`ParameterReferencesAndValues`](#module-ansys.grantami.backend.soap.ParameterReferencesAndValues))
  * **has_sig_figs_for_import** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **sig_figs_for_import** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.PointValueWithParameters.PointValueWithParameters.has_sig_figs_for_import"></a>

#### *property* has_sig_figs_for_import *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_sig_figs_for_import is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.PointValueWithParameters.PointValueWithParameters.has_trailing_zero_info"></a>

#### *property* has_trailing_zero_info *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_trailing_zero_info is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.PointValueWithParameters.PointValueWithParameters.sig_figs_for_import"></a>

#### *property* sig_figs_for_import *: [int](https://docs.python.org/3/library/functions.html#int)*

Property sig_figs_for_import is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.PointValueWithParameters.PointValueWithParameters.trailing_zero_info"></a>

#### *property* trailing_zero_info *: [TrailingZeroInformation](#ansys.grantami.backend.soap.TrailingZeroInformation.TrailingZeroInformation)*

Property trailing_zero_info is of type [`TrailingZeroInformation`](#module-ansys.grantami.backend.soap.TrailingZeroInformation).

* **Return type:**
  [`TrailingZeroInformation`](#module-ansys.grantami.backend.soap.TrailingZeroInformation)

<a id="ansys.grantami.backend.soap.PointValueWithParameters.PointValueWithParameters.value"></a>

#### *property* value *: [float](https://docs.python.org/3/library/functions.html#float)*

Property value is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.PointValueWithParameters.PointValueWithParameters.value_parameters"></a>

#### *property* value_parameters *: [ParameterReferencesAndValues](#ansys.grantami.backend.soap.ParameterReferencesAndValues.ParameterReferencesAndValues)*

Property value_parameters is of type [`ParameterReferencesAndValues`](#module-ansys.grantami.backend.soap.ParameterReferencesAndValues).

* **Return type:**
  [`ParameterReferencesAndValues`](#module-ansys.grantami.backend.soap.ParameterReferencesAndValues)

<a id="module-ansys.grantami.backend.soap.RangeDataType"></a>

<a id="rangedatatype"></a>

### RangeDataType

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType"></a>

### *class* RangeDataType(has_high=None, has_high_trailing_zero_info=None, has_low=None, has_low_trailing_zero_info=None, high=None, high_value_trailing_zero_info=None, is_applicable=None, is_estimated=None, low=None, low_value_trailing_zero_info=None, unit_symbol=None, high_value_is_inclusive=None, low_value_is_inclusive=None, has_high_value_sig_figs_for_import=None, has_low_value_sig_figs_for_import=None, high_value_sig_figs_for_import=None, low_value_sig_figs_for_import=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

Type for values of range data.
Both low_value and high_value must be populated.

* **Parameters:**
  * **has_high** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_high_trailing_zero_info** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_low** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_low_trailing_zero_info** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **high** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **high_value_trailing_zero_info** ([`TrailingZeroInformation`](#module-ansys.grantami.backend.soap.TrailingZeroInformation))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **is_estimated** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **low** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **low_value_trailing_zero_info** ([`TrailingZeroInformation`](#module-ansys.grantami.backend.soap.TrailingZeroInformation))
  * **unit_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **high_value_is_inclusive** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **low_value_is_inclusive** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_high_value_sig_figs_for_import** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_low_value_sig_figs_for_import** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **high_value_sig_figs_for_import** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **low_value_sig_figs_for_import** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.has_high"></a>

#### *property* has_high *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_high is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.has_high_trailing_zero_info"></a>

#### *property* has_high_trailing_zero_info *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_high_trailing_zero_info is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.has_high_value_sig_figs_for_import"></a>

#### *property* has_high_value_sig_figs_for_import *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_high_value_sig_figs_for_import is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.has_low"></a>

#### *property* has_low *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_low is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.has_low_trailing_zero_info"></a>

#### *property* has_low_trailing_zero_info *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_low_trailing_zero_info is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.has_low_value_sig_figs_for_import"></a>

#### *property* has_low_value_sig_figs_for_import *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_low_value_sig_figs_for_import is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.high"></a>

#### *property* high *: [float](https://docs.python.org/3/library/functions.html#float)*

Property high is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.high_value_is_inclusive"></a>

#### *property* high_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property high_value_is_inclusive is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.high_value_sig_figs_for_import"></a>

#### *property* high_value_sig_figs_for_import *: [int](https://docs.python.org/3/library/functions.html#int)*

Property high_value_sig_figs_for_import is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.high_value_trailing_zero_info"></a>

#### *property* high_value_trailing_zero_info *: [TrailingZeroInformation](#ansys.grantami.backend.soap.TrailingZeroInformation.TrailingZeroInformation)*

Property high_value_trailing_zero_info is of type [`TrailingZeroInformation`](#module-ansys.grantami.backend.soap.TrailingZeroInformation).

* **Return type:**
  [`TrailingZeroInformation`](#module-ansys.grantami.backend.soap.TrailingZeroInformation)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_estimated is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.low"></a>

#### *property* low *: [float](https://docs.python.org/3/library/functions.html#float)*

Property low is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.low_value_is_inclusive"></a>

#### *property* low_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property low_value_is_inclusive is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.low_value_sig_figs_for_import"></a>

#### *property* low_value_sig_figs_for_import *: [int](https://docs.python.org/3/library/functions.html#int)*

Property low_value_sig_figs_for_import is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.low_value_trailing_zero_info"></a>

#### *property* low_value_trailing_zero_info *: [TrailingZeroInformation](#ansys.grantami.backend.soap.TrailingZeroInformation.TrailingZeroInformation)*

Property low_value_trailing_zero_info is of type [`TrailingZeroInformation`](#module-ansys.grantami.backend.soap.TrailingZeroInformation).

* **Return type:**
  [`TrailingZeroInformation`](#module-ansys.grantami.backend.soap.TrailingZeroInformation)

<a id="ansys.grantami.backend.soap.RangeDataType.RangeDataType.unit_symbol"></a>

#### *property* unit_symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit_symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.RasterSize"></a>

<a id="rastersize"></a>

### RasterSize

<a id="ansys.grantami.backend.soap.RasterSize.RasterSize"></a>

### *class* RasterSize(height_pixels=None, width_pixels=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Gives the size in pixels of picture data.

* **Parameters:**
  * **height_pixels** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **width_pixels** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.RasterSize.RasterSize.height_pixels"></a>

#### *property* height_pixels *: [int](https://docs.python.org/3/library/functions.html#int)*

Property height_pixels is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RasterSize.RasterSize.width_pixels"></a>

#### *property* width_pixels *: [int](https://docs.python.org/3/library/functions.html#int)*

Property width_pixels is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.RecordAttribute"></a>

<a id="recordattribute"></a>

### RecordAttribute

<a id="ansys.grantami.backend.soap.RecordAttribute.RecordAttribute"></a>

### *class* RecordAttribute(attribute=None, data_created_record_version=None, data_retired_record_version=None, data_revision_info=None, data_version_number=None, has_data=None, parameter_details=None, record_reference=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Meta-information about the data of a particular attribute of a particular Record in a Granta MI
database.
Does NOT include values of the data (see [`AttributeValue`](#module-ansys.grantami.backend.soap.AttributeValue) type).

* **Parameters:**
  * **attribute** ([`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute))
  * **data_created_record_version** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **data_retired_record_version** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **data_revision_info** ([`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo))
  * **data_version_number** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **has_data** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **parameter_details** (list of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.RecordAttribute.RecordAttribute.attribute"></a>

#### *property* attribute *: [NamedAttribute](#ansys.grantami.backend.soap.NamedAttribute.NamedAttribute)*

Property attribute is of type [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute).

* **Return type:**
  [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute)

<a id="ansys.grantami.backend.soap.RecordAttribute.RecordAttribute.data_created_record_version"></a>

#### *property* data_created_record_version *: [int](https://docs.python.org/3/library/functions.html#int)*

Property data_created_record_version is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RecordAttribute.RecordAttribute.data_retired_record_version"></a>

#### *property* data_retired_record_version *: [int](https://docs.python.org/3/library/functions.html#int)*

Property data_retired_record_version is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RecordAttribute.RecordAttribute.data_revision_info"></a>

#### *property* data_revision_info *: [RevisionInfo](#ansys.grantami.backend.soap.RevisionInfo.RevisionInfo)*

Property data_revision_info is of type [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo).

* **Return type:**
  [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo)

<a id="ansys.grantami.backend.soap.RecordAttribute.RecordAttribute.data_version_number"></a>

#### *property* data_version_number *: [int](https://docs.python.org/3/library/functions.html#int)*

Property data_version_number is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RecordAttribute.RecordAttribute.has_data"></a>

#### *property* has_data *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_data is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RecordAttribute.RecordAttribute.parameter_details"></a>

#### *property* parameter_details *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ParameterDetail](#ansys.grantami.backend.soap.ParameterDetail.ParameterDetail)]*

Property parameter_details is a list of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ParameterDetail`](#module-ansys.grantami.backend.soap.ParameterDetail)

<a id="ansys.grantami.backend.soap.RecordAttribute.RecordAttribute.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.RecordData"></a>

<a id="recorddata"></a>

### RecordData

<a id="ansys.grantami.backend.soap.RecordData.RecordData"></a>

### *class* RecordData(attribute_values=None, record_reference=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The values of data for attribute(s) of a particular record.

* **Parameters:**
  * **attribute_values** (list of [`AttributeValue`](#module-ansys.grantami.backend.soap.AttributeValue))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.RecordData.RecordData.attribute_values"></a>

#### *property* attribute_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeValue](#ansys.grantami.backend.soap.AttributeValue.AttributeValue)]*

Property attribute_values is a list of [`AttributeValue`](#module-ansys.grantami.backend.soap.AttributeValue) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeValue`](#module-ansys.grantami.backend.soap.AttributeValue)

<a id="ansys.grantami.backend.soap.RecordData.RecordData.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.RecordExporterParameters"></a>

<a id="recordexporterparameters"></a>

### RecordExporterParameters

<a id="ansys.grantami.backend.soap.RecordExporterParameters.RecordExporterParameters"></a>

### *class* RecordExporterParameters(attributes=None, record=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type to contain a record and its associated attribute exporter parameters.

* **Parameters:**
  * **attributes** (list of [`AttributeExporterParameters`](#module-ansys.grantami.backend.soap.AttributeExporterParameters))
  * **record** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.RecordExporterParameters.RecordExporterParameters.attributes"></a>

#### *property* attributes *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeExporterParameters](#ansys.grantami.backend.soap.AttributeExporterParameters.AttributeExporterParameters)]*

Property attributes is a list of [`AttributeExporterParameters`](#module-ansys.grantami.backend.soap.AttributeExporterParameters) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeExporterParameters`](#module-ansys.grantami.backend.soap.AttributeExporterParameters)

<a id="ansys.grantami.backend.soap.RecordExporterParameters.RecordExporterParameters.record"></a>

#### *property* record *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.RecordFilter"></a>

<a id="recordfilter"></a>

### RecordFilter

<a id="ansys.grantami.backend.soap.RecordFilter.RecordFilter"></a>

### *class* RecordFilter(profile=None, subsets=None, record_lists=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type allowing lists of Records to be filtered, e.g., by membership of Subset(s). You should
specify either a profile or a subset reference, but not both. You can pass in a list containing an
uninitialized [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference) to effectively disable the
subset filter. Note that subsets are not inherited; newly-created records will not be filtered
until they are added to a Subset.

* **Parameters:**
  * **profile** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **subsets** (list of [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference))
  * **record_lists** (list of [`RecordListReference`](#module-ansys.grantami.backend.soap.RecordListReference))

<a id="ansys.grantami.backend.soap.RecordFilter.RecordFilter.add_record_list"></a>

#### add_record_list(\_recordListReference)

Appends \_recordListReference to recordLists property on RecordFilter C-object.

* **Parameters:**
  **\_recordListReference** ([`RecordListReference`](#module-ansys.grantami.backend.soap.RecordListReference))

<a id="ansys.grantami.backend.soap.RecordFilter.RecordFilter.add_subset"></a>

#### add_subset(\_subsetReference)

Appends \_subsetReference to subsets property on RecordFilter C-object.

* **Parameters:**
  **\_subsetReference** ([`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference))

<a id="ansys.grantami.backend.soap.RecordFilter.RecordFilter.profile"></a>

#### *property* profile *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property profile is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordFilter.RecordFilter.record_lists"></a>

#### *property* record_lists *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordListReference](#ansys.grantami.backend.soap.RecordListReference.RecordListReference)]*

Property record_lists is a list of [`RecordListReference`](#module-ansys.grantami.backend.soap.RecordListReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordListReference`](#module-ansys.grantami.backend.soap.RecordListReference)

<a id="ansys.grantami.backend.soap.RecordFilter.RecordFilter.subsets"></a>

#### *property* subsets *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[SubsetReference](#ansys.grantami.backend.soap.SubsetReference.SubsetReference)]*

Property subsets is a list of [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference)

<a id="module-ansys.grantami.backend.soap.RecordFolderPath"></a>

<a id="recordfolderpath"></a>

### RecordFolderPath

<a id="ansys.grantami.backend.soap.RecordFolderPath.RecordFolderPath"></a>

### *class* RecordFolderPath(color=None, record_reference=None, tree_names=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The path to a Granta MI record folder. Contains the record folder at which the path starts as
parent, the tree names, and the color.

* **Parameters:**
  * **color** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **tree_names** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.RecordFolderPath.RecordFolderPath.add_tree_name"></a>

#### add_tree_name(value)

Appends value to treeNames property on RecordFolderPath C-object.

* **Parameters:**
  **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.RecordFolderPath.RecordFolderPath.color"></a>

#### *property* color *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property color is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordFolderPath.RecordFolderPath.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.RecordFolderPath.RecordFolderPath.tree_names"></a>

#### *property* tree_names *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property tree_names is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.RecordLinkChanges"></a>

<a id="recordlinkchanges"></a>

### RecordLinkChanges

<a id="ansys.grantami.backend.soap.RecordLinkChanges.RecordLinkChanges"></a>

### *class* RecordLinkChanges(linked=None, unlinked=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A set of changes to be made to record link groups.

* **Parameters:**
  * **linked** (list of [`NamedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NamedTargetedSourceRecord))
  * **unlinked** (list of [`NamedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NamedTargetedSourceRecord))

<a id="ansys.grantami.backend.soap.RecordLinkChanges.RecordLinkChanges.linked"></a>

#### *property* linked *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[NamedTargetedSourceRecord](#ansys.grantami.backend.soap.NamedTargetedSourceRecord.NamedTargetedSourceRecord)]*

Property linked is a list of [`NamedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NamedTargetedSourceRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`NamedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NamedTargetedSourceRecord)

<a id="ansys.grantami.backend.soap.RecordLinkChanges.RecordLinkChanges.unlinked"></a>

#### *property* unlinked *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[NamedTargetedSourceRecord](#ansys.grantami.backend.soap.NamedTargetedSourceRecord.NamedTargetedSourceRecord)]*

Property unlinked is a list of [`NamedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NamedTargetedSourceRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`NamedTargetedSourceRecord`](#module-ansys.grantami.backend.soap.NamedTargetedSourceRecord)

<a id="module-ansys.grantami.backend.soap.RecordLinkGroup"></a>

<a id="recordlinkgroup"></a>

### RecordLinkGroup

<a id="ansys.grantami.backend.soap.RecordLinkGroup.RecordLinkGroup"></a>

### *class* RecordLinkGroup(linked_records=None, name=None, standard_names=None, table_filters=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type representing a group of linked records.

* **Parameters:**
  * **linked_records** (list of [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **standard_names** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **table_filters** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.RecordLinkGroup.RecordLinkGroup.linked_records"></a>

#### *property* linked_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[NamedRecord](#ansys.grantami.backend.soap.NamedRecord.NamedRecord)]*

Property linked_records is a list of [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord)

<a id="ansys.grantami.backend.soap.RecordLinkGroup.RecordLinkGroup.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordLinkGroup.RecordLinkGroup.standard_names"></a>

#### *property* standard_names *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property standard_names is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordLinkGroup.RecordLinkGroup.table_filters"></a>

#### *property* table_filters *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[int](https://docs.python.org/3/library/functions.html#int)]*

Property table_filters is a list of int objects. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.RecordLinkGroupDetail"></a>

<a id="recordlinkgroupdetail"></a>

### RecordLinkGroupDetail

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail"></a>

### *class* RecordLinkGroupDetail(from_table=None, link_group_type=None, name=None, reference=None, reverse_name=None, reverse_reference=None, standard_names=None, to_table=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed information about a Record Link Group in a Granta MI Database.

* **Parameters:**
  * **from_table** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))
  * **link_group_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **reference** ([`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference))
  * **reverse_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **reverse_reference** ([`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference))
  * **standard_names** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **to_table** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail.add_standard_name"></a>

#### add_standard_name(value)

Appends value to standardNames property on RecordLinkGroupDetail C-object.

* **Parameters:**
  **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail.from_table"></a>

#### *property* from_table *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property from_table is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail.link_group_type"></a>

#### *property* link_group_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property link_group_type is of type str. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail.reference"></a>

#### *property* reference *: [RecordLinkGroupReference](#ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference)*

Property reference is of type [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference).

* **Return type:**
  [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference)

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail.reverse_name"></a>

#### *property* reverse_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property reverse_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail.reverse_reference"></a>

#### *property* reverse_reference *: [RecordLinkGroupReference](#ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference)*

Property reverse_reference is of type [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference).

* **Return type:**
  [`RecordLinkGroupReference`](#module-ansys.grantami.backend.soap.RecordLinkGroupReference)

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail.standard_names"></a>

#### *property* standard_names *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property standard_names is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordLinkGroupDetail.RecordLinkGroupDetail.to_table"></a>

#### *property* to_table *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property to_table is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="module-ansys.grantami.backend.soap.RecordLinkGroupReference"></a>

<a id="recordlinkgroupreference"></a>

### RecordLinkGroupReference

<a id="ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference"></a>

### *class* RecordLinkGroupReference(db_key=None, is_standard_name=None, name=None, partial_table_reference=None, record_link_group_identity=None, record_link_group_type=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular record link group in a Granta MI database.
This may be done by specifying the identity of the group, or its name and a partial table reference.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **is_standard_name** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **partial_table_reference** ([`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference))
  * **record_link_group_identity** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **record_link_group_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference.is_standard_name"></a>

#### *property* is_standard_name *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_standard_name is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference.partial_table_reference"></a>

#### *property* partial_table_reference *: [PartialTableReference](#ansys.grantami.backend.soap.PartialTableReference.PartialTableReference)*

Property partial_table_reference is of type [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference).

* **Return type:**
  [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference)

<a id="ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference.record_link_group_identity"></a>

#### *property* record_link_group_identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property record_link_group_identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RecordLinkGroupReference.RecordLinkGroupReference.record_link_group_type"></a>

#### *property* record_link_group_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property record_link_group_type is of type str. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.RecordLinkModifications"></a>

<a id="recordlinkmodifications"></a>

### RecordLinkModifications

<a id="ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications"></a>

### *class* RecordLinkModifications(link_all_combinations=None, link_records=None, unlink_all_records=None, unlink_records=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A set of modifications to be made to record link groups.

* **Parameters:**
  * **link_all_combinations** (list of [`LinkAllCombinations`](#module-ansys.grantami.backend.soap.LinkAllCombinations))
  * **link_records** (list of [`LinkRecords`](#module-ansys.grantami.backend.soap.LinkRecords))
  * **unlink_all_records** (list of [`UnlinkAllRecords`](#module-ansys.grantami.backend.soap.UnlinkAllRecords))
  * **unlink_records** (list of [`UnlinkRecords`](#module-ansys.grantami.backend.soap.UnlinkRecords))

<a id="ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications.add_link_all_combinations"></a>

#### add_link_all_combinations(\_linkAllCombinations)

Appends \_linkAllCombinations to linkAllCombinations property on RecordLinkModifications C-object.

* **Parameters:**
  **\_linkAllCombinations** ([`LinkAllCombinations`](#module-ansys.grantami.backend.soap.LinkAllCombinations))

<a id="ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications.add_link_records"></a>

#### add_link_records(\_linkRecords)

Appends \_linkRecords to linkRecords property on RecordLinkModifications C-object.

* **Parameters:**
  **\_linkRecords** ([`LinkRecords`](#module-ansys.grantami.backend.soap.LinkRecords))

<a id="ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications.add_unlink_all_records"></a>

#### add_unlink_all_records(\_unlinkAllRecords)

Appends \_unlinkAllRecords to unlinkAllRecords property on RecordLinkModifications C-object.

* **Parameters:**
  **\_unlinkAllRecords** ([`UnlinkAllRecords`](#module-ansys.grantami.backend.soap.UnlinkAllRecords))

<a id="ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications.add_unlink_records"></a>

#### add_unlink_records(\_unlinkRecords)

Appends \_unlinkRecords to unlinkRecords property on RecordLinkModifications C-object.

* **Parameters:**
  **\_unlinkRecords** ([`UnlinkRecords`](#module-ansys.grantami.backend.soap.UnlinkRecords))

<a id="ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications.link_all_combinations"></a>

#### *property* link_all_combinations *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[LinkAllCombinations](#ansys.grantami.backend.soap.LinkAllCombinations.LinkAllCombinations)]*

Property link_all_combinations is a list of [`LinkAllCombinations`](#module-ansys.grantami.backend.soap.LinkAllCombinations) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`LinkAllCombinations`](#module-ansys.grantami.backend.soap.LinkAllCombinations)

<a id="ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications.link_records"></a>

#### *property* link_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[LinkRecords](#ansys.grantami.backend.soap.LinkRecords.LinkRecords)]*

Property link_records is a list of [`LinkRecords`](#module-ansys.grantami.backend.soap.LinkRecords) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`LinkRecords`](#module-ansys.grantami.backend.soap.LinkRecords)

<a id="ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications.unlink_all_records"></a>

#### *property* unlink_all_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnlinkAllRecords](#ansys.grantami.backend.soap.UnlinkAllRecords.UnlinkAllRecords)]*

Property unlink_all_records is a list of [`UnlinkAllRecords`](#module-ansys.grantami.backend.soap.UnlinkAllRecords) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnlinkAllRecords`](#module-ansys.grantami.backend.soap.UnlinkAllRecords)

<a id="ansys.grantami.backend.soap.RecordLinkModifications.RecordLinkModifications.unlink_records"></a>

#### *property* unlink_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnlinkRecords](#ansys.grantami.backend.soap.UnlinkRecords.UnlinkRecords)]*

Property unlink_records is a list of [`UnlinkRecords`](#module-ansys.grantami.backend.soap.UnlinkRecords) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnlinkRecords`](#module-ansys.grantami.backend.soap.UnlinkRecords)

<a id="module-ansys.grantami.backend.soap.RecordListReference"></a>

<a id="recordlistreference"></a>

### RecordListReference

<a id="ansys.grantami.backend.soap.RecordListReference.RecordListReference"></a>

### *class* RecordListReference(guid=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A unique identifier for a record list.

* **Parameters:**
  **guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.RecordListReference.RecordListReference.guid"></a>

#### *property* guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property guid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="id5"></a>

### RecordManipulatorService

<a id="module-ansys.grantami.backend.soap.RecordManipulatorService"></a>

<a id="ansys.grantami.backend.soap.RecordManipulatorService.RecordManipulatorService"></a>

### *class* RecordManipulatorService(mi_session, retries=0)

Bases: [`Service`](#ansys.grantami.backend.soap.Service.Service)

The Record Manipulator service provides a way to move a record whilst preserving its metadata and attribute values.

<a id="ansys.grantami.backend.soap.RecordManipulatorService.RecordManipulatorService.move_record"></a>

#### move_record(\_req)

Reparents a record. Metadata such as creation date will be preserved, along with attribute values.

* **Parameters:**
  **\_req** ([`RecordMoveRequest`](#module-ansys.grantami.backend.soap.RecordMoveRequest) object)
* **Return type:**
  [`EmptyRestResponse`](#module-ansys.grantami.backend.soap.EmptyRestResponse) object

<a id="module-ansys.grantami.backend.soap.RecordMoveRequest"></a>

<a id="recordmoverequest"></a>

### RecordMoveRequest

<a id="ansys.grantami.backend.soap.RecordMoveRequest.RecordMoveRequest"></a>

### *class* RecordMoveRequest(db_key=None, new_parent_record_history_guid=None, record_history_guid=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The details of a MoveRecord operation.
The record to be moved and the new location are both specified with Record History GUIDs.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **new_parent_record_history_guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_history_guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.RecordMoveRequest.RecordMoveRequest.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordMoveRequest.RecordMoveRequest.new_parent_record_history_guid"></a>

#### *property* new_parent_record_history_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property new_parent_record_history_guid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordMoveRequest.RecordMoveRequest.record_history_guid"></a>

#### *property* record_history_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property record_history_guid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.RecordNameSearchRequest"></a>

<a id="recordnamesearchrequest"></a>

### RecordNameSearchRequest

<a id="ansys.grantami.backend.soap.RecordNameSearchRequest.RecordNameSearchRequest"></a>

### *class* RecordNameSearchRequest(case_sensitive_names=None, filter=None, populate_guids=None, record_name=None, search_full_names=None, search_short_names=None, table=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input for the record_name_search operation. Both the table and record_name are required.

* **Parameters:**
  * **case_sensitive_names** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **filter** ([`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter))
  * **populate_guids** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **record_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **search_full_names** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **search_short_names** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **table** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))

<a id="ansys.grantami.backend.soap.RecordNameSearchRequest.RecordNameSearchRequest.case_sensitive_names"></a>

#### *property* case_sensitive_names *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property case_sensitive_names is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RecordNameSearchRequest.RecordNameSearchRequest.filter"></a>

#### *property* filter *: [RecordFilter](#ansys.grantami.backend.soap.RecordFilter.RecordFilter)*

Property filter is of type [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter).

* **Return type:**
  [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter)

<a id="ansys.grantami.backend.soap.RecordNameSearchRequest.RecordNameSearchRequest.populate_guids"></a>

#### *property* populate_guids *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property populate_guids is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RecordNameSearchRequest.RecordNameSearchRequest.record_name"></a>

#### *property* record_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property record_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordNameSearchRequest.RecordNameSearchRequest.search_full_names"></a>

#### *property* search_full_names *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property search_full_names is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RecordNameSearchRequest.RecordNameSearchRequest.search_short_names"></a>

#### *property* search_short_names *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property search_short_names is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RecordNameSearchRequest.RecordNameSearchRequest.table"></a>

#### *property* table *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property table is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="module-ansys.grantami.backend.soap.RecordReference"></a>

<a id="recordreference"></a>

### RecordReference

<a id="ansys.grantami.backend.soap.RecordReference.RecordReference"></a>

### *class* RecordReference(db_key=None, history_guid=None, identity=None, lookup_value=None, record_guid=None, version=None, record_uid=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular record in a Granta MI database.
This is done directly by specifying the Identity or GUID of the record.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **history_guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **identity** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **lookup_value** ([`LookupValue`](#module-ansys.grantami.backend.soap.LookupValue))
  * **record_guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **version** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **record_uid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.RecordReference.RecordReference.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordReference.RecordReference.history_guid"></a>

#### *property* history_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property history_guid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordReference.RecordReference.identity"></a>

#### *property* identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RecordReference.RecordReference.lookup_value"></a>

#### *property* lookup_value *: [LookupValue](#ansys.grantami.backend.soap.LookupValue.LookupValue)*

Property lookup_value is of type [`LookupValue`](#module-ansys.grantami.backend.soap.LookupValue).

* **Return type:**
  [`LookupValue`](#module-ansys.grantami.backend.soap.LookupValue)

<a id="ansys.grantami.backend.soap.RecordReference.RecordReference.record_guid"></a>

#### *property* record_guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property record_guid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordReference.RecordReference.record_uid"></a>

#### *property* record_uid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property record_uid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.RecordReference.RecordReference.version"></a>

#### *property* version *: [int](https://docs.python.org/3/library/functions.html#int)*

Property version is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.RecordSearchCriterion"></a>

<a id="recordsearchcriterion"></a>

### RecordSearchCriterion

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion"></a>

### *class* RecordSearchCriterion(between_date_times_search_value=None, between_search_value=None, contains_all_search_value=None, contains_any_search_value=None, contains_search_value=None, does_not_contain_search_value=None, does_not_exist_search_value=None, exactly_search_value=None, exists_search_value=None, greater_than_search_value=None, less_than_search_value=None, search_attribute=None, type_=None, equal_to_search_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

One criterion that controls results returned from a search.
A search comprises one or more such criteria.

* **Parameters:**
  * **between_date_times_search_value** ([`BetweenDateTimesSearchValue`](#module-ansys.grantami.backend.soap.BetweenDateTimesSearchValue))
  * **between_search_value** ([`BetweenSearchValue`](#module-ansys.grantami.backend.soap.BetweenSearchValue))
  * **contains_all_search_value** ([`ContainsAllSearchValue`](#module-ansys.grantami.backend.soap.ContainsAllSearchValue))
  * **contains_any_search_value** ([`ContainsAnySearchValue`](#module-ansys.grantami.backend.soap.ContainsAnySearchValue))
  * **contains_search_value** ([`ContainsSearchValue`](#module-ansys.grantami.backend.soap.ContainsSearchValue))
  * **does_not_contain_search_value** ([`DoesNotContainSearchValue`](#module-ansys.grantami.backend.soap.DoesNotContainSearchValue))
  * **does_not_exist_search_value** ([`DoesNotExistSearchValue`](#module-ansys.grantami.backend.soap.DoesNotExistSearchValue))
  * **exactly_search_value** ([`ExactlySearchValue`](#module-ansys.grantami.backend.soap.ExactlySearchValue))
  * **exists_search_value** ([`ExistsSearchValue`](#module-ansys.grantami.backend.soap.ExistsSearchValue))
  * **greater_than_search_value** ([`GreaterThanSearchValue`](#module-ansys.grantami.backend.soap.GreaterThanSearchValue))
  * **less_than_search_value** ([`LessThanSearchValue`](#module-ansys.grantami.backend.soap.LessThanSearchValue))
  * **search_attribute** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **equal_to_search_value** ([`EqualToSearchValue`](#module-ansys.grantami.backend.soap.EqualToSearchValue))

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.between_date_times_search_value"></a>

#### *property* between_date_times_search_value *: [BetweenDateTimesSearchValue](#ansys.grantami.backend.soap.BetweenDateTimesSearchValue.BetweenDateTimesSearchValue)*

Property between_date_times_search_value is of type [`BetweenDateTimesSearchValue`](#module-ansys.grantami.backend.soap.BetweenDateTimesSearchValue).

* **Return type:**
  [`BetweenDateTimesSearchValue`](#module-ansys.grantami.backend.soap.BetweenDateTimesSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.between_search_value"></a>

#### *property* between_search_value *: [BetweenSearchValue](#ansys.grantami.backend.soap.BetweenSearchValue.BetweenSearchValue)*

Property between_search_value is of type [`BetweenSearchValue`](#module-ansys.grantami.backend.soap.BetweenSearchValue).

* **Return type:**
  [`BetweenSearchValue`](#module-ansys.grantami.backend.soap.BetweenSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.contains_all_search_value"></a>

#### *property* contains_all_search_value *: [ContainsAllSearchValue](#ansys.grantami.backend.soap.ContainsAllSearchValue.ContainsAllSearchValue)*

Property contains_all_search_value is of type [`ContainsAllSearchValue`](#module-ansys.grantami.backend.soap.ContainsAllSearchValue).

* **Return type:**
  [`ContainsAllSearchValue`](#module-ansys.grantami.backend.soap.ContainsAllSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.contains_any_search_value"></a>

#### *property* contains_any_search_value *: [ContainsAnySearchValue](#ansys.grantami.backend.soap.ContainsAnySearchValue.ContainsAnySearchValue)*

Property contains_any_search_value is of type [`ContainsAnySearchValue`](#module-ansys.grantami.backend.soap.ContainsAnySearchValue).

* **Return type:**
  [`ContainsAnySearchValue`](#module-ansys.grantami.backend.soap.ContainsAnySearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.contains_search_value"></a>

#### *property* contains_search_value *: [ContainsSearchValue](#ansys.grantami.backend.soap.ContainsSearchValue.ContainsSearchValue)*

Property contains_search_value is of type [`ContainsSearchValue`](#module-ansys.grantami.backend.soap.ContainsSearchValue).

* **Return type:**
  [`ContainsSearchValue`](#module-ansys.grantami.backend.soap.ContainsSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.does_not_contain_search_value"></a>

#### *property* does_not_contain_search_value *: [DoesNotContainSearchValue](#ansys.grantami.backend.soap.DoesNotContainSearchValue.DoesNotContainSearchValue)*

Property does_not_contain_search_value is of type [`DoesNotContainSearchValue`](#module-ansys.grantami.backend.soap.DoesNotContainSearchValue).

* **Return type:**
  [`DoesNotContainSearchValue`](#module-ansys.grantami.backend.soap.DoesNotContainSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.does_not_exist_search_value"></a>

#### *property* does_not_exist_search_value *: [DoesNotExistSearchValue](#ansys.grantami.backend.soap.DoesNotExistSearchValue.DoesNotExistSearchValue)*

Property does_not_exist_search_value is of type [`DoesNotExistSearchValue`](#module-ansys.grantami.backend.soap.DoesNotExistSearchValue).

* **Return type:**
  [`DoesNotExistSearchValue`](#module-ansys.grantami.backend.soap.DoesNotExistSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.equal_to_search_value"></a>

#### *property* equal_to_search_value *: [EqualToSearchValue](#ansys.grantami.backend.soap.EqualToSearchValue.EqualToSearchValue)*

Property equal_to_search_value is of type [`EqualToSearchValue`](#module-ansys.grantami.backend.soap.EqualToSearchValue).

* **Return type:**
  [`EqualToSearchValue`](#module-ansys.grantami.backend.soap.EqualToSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.exactly_search_value"></a>

#### *property* exactly_search_value *: [ExactlySearchValue](#ansys.grantami.backend.soap.ExactlySearchValue.ExactlySearchValue)*

Property exactly_search_value is of type [`ExactlySearchValue`](#module-ansys.grantami.backend.soap.ExactlySearchValue).

* **Return type:**
  [`ExactlySearchValue`](#module-ansys.grantami.backend.soap.ExactlySearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.exists_search_value"></a>

#### *property* exists_search_value *: [ExistsSearchValue](#ansys.grantami.backend.soap.ExistsSearchValue.ExistsSearchValue)*

Property exists_search_value is of type [`ExistsSearchValue`](#module-ansys.grantami.backend.soap.ExistsSearchValue).

* **Return type:**
  [`ExistsSearchValue`](#module-ansys.grantami.backend.soap.ExistsSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.greater_than_search_value"></a>

#### *property* greater_than_search_value *: [GreaterThanSearchValue](#ansys.grantami.backend.soap.GreaterThanSearchValue.GreaterThanSearchValue)*

Property greater_than_search_value is of type [`GreaterThanSearchValue`](#module-ansys.grantami.backend.soap.GreaterThanSearchValue).

* **Return type:**
  [`GreaterThanSearchValue`](#module-ansys.grantami.backend.soap.GreaterThanSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.less_than_search_value"></a>

#### *property* less_than_search_value *: [LessThanSearchValue](#ansys.grantami.backend.soap.LessThanSearchValue.LessThanSearchValue)*

Property less_than_search_value is of type [`LessThanSearchValue`](#module-ansys.grantami.backend.soap.LessThanSearchValue).

* **Return type:**
  [`LessThanSearchValue`](#module-ansys.grantami.backend.soap.LessThanSearchValue)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.search_attribute"></a>

#### *property* search_attribute *: [AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)*

Property search_attribute is of type [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference).

* **Return type:**
  [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.RecordSearchCriterion.RecordSearchCriterion.type_"></a>

#### *property* type_ *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property type_ is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.RecordVersionState"></a>

<a id="recordversionstate"></a>

### RecordVersionState

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState"></a>

### *class* RecordVersionState(record_reference=None, version_state=None, has_released_revision=None, has_superseded_revision=None, has_withdrawn_revision=None, created_revision=None, modified_revision=None, released_revision=None, superseded_revision=None, withdrawn_revision=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The version status of a particular Record in a Granta MI database.

* **Parameters:**
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **version_state** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **has_released_revision** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_superseded_revision** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **has_withdrawn_revision** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **created_revision** ([`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision))
  * **modified_revision** ([`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision))
  * **released_revision** ([`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision))
  * **superseded_revision** ([`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision))
  * **withdrawn_revision** ([`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision))

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.VersionState"></a>

#### *class* VersionState

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.VersionState.Released"></a>

#### Released *= 0*

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.VersionState.Superseded"></a>

#### Superseded *= 1*

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.VersionState.Unknown"></a>

#### Unknown *= 5*

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.VersionState.Unreleased"></a>

#### Unreleased *= 3*

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.VersionState.Unversioned"></a>

#### Unversioned *= 4*

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.VersionState.Withdrawn"></a>

#### Withdrawn *= 2*

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.created_revision"></a>

#### *property* created_revision *: [DatabaseRevision](#ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision)*

Property created_revision is of type [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision).

* **Return type:**
  [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.has_released_revision"></a>

#### *property* has_released_revision *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_released_revision is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.has_superseded_revision"></a>

#### *property* has_superseded_revision *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_superseded_revision is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.has_withdrawn_revision"></a>

#### *property* has_withdrawn_revision *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_withdrawn_revision is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.modified_revision"></a>

#### *property* modified_revision *: [DatabaseRevision](#ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision)*

Property modified_revision is of type [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision).

* **Return type:**
  [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.released_revision"></a>

#### *property* released_revision *: [DatabaseRevision](#ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision)*

Property released_revision is of type [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision).

* **Return type:**
  [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.superseded_revision"></a>

#### *property* superseded_revision *: [DatabaseRevision](#ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision)*

Property superseded_revision is of type [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision).

* **Return type:**
  [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.version_state"></a>

#### *property* version_state *: [int](https://docs.python.org/3/library/functions.html#int)*

Property version_state is of type int. See [`RecordVersionState.VersionState`](#ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.VersionState) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RecordVersionState.RecordVersionState.withdrawn_revision"></a>

#### *property* withdrawn_revision *: [DatabaseRevision](#ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision)*

Property withdrawn_revision is of type [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision).

* **Return type:**
  [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision)

<a id="module-ansys.grantami.backend.soap.RecordWithAttributeAddresses"></a>

<a id="recordwithattributeaddresses"></a>

### RecordWithAttributeAddresses

<a id="ansys.grantami.backend.soap.RecordWithAttributeAddresses.RecordWithAttributeAddresses"></a>

### *class* RecordWithAttributeAddresses(attribute_addresses=None, record_reference=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) with a list of attributes and their upload
URL addresses.

* **Parameters:**
  * **attribute_addresses** (list of [`AttributeAddress`](#module-ansys.grantami.backend.soap.AttributeAddress))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.RecordWithAttributeAddresses.RecordWithAttributeAddresses.add_attribute_address"></a>

#### add_attribute_address(\_attributeAddress)

Appends \_attributeAddress to attributeAddresses property on RecordWithAttributeAddresses C-object.

* **Parameters:**
  **\_attributeAddress** ([`AttributeAddress`](#module-ansys.grantami.backend.soap.AttributeAddress))

<a id="ansys.grantami.backend.soap.RecordWithAttributeAddresses.RecordWithAttributeAddresses.attribute_addresses"></a>

#### *property* attribute_addresses *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeAddress](#ansys.grantami.backend.soap.AttributeAddress.AttributeAddress)]*

Property attribute_addresses is a list of [`AttributeAddress`](#module-ansys.grantami.backend.soap.AttributeAddress) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeAddress`](#module-ansys.grantami.backend.soap.AttributeAddress)

<a id="ansys.grantami.backend.soap.RecordWithAttributeAddresses.RecordWithAttributeAddresses.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.ResolveReferencesRequest"></a>

<a id="resolvereferencesrequest"></a>

### ResolveReferencesRequest

<a id="ansys.grantami.backend.soap.ResolveReferencesRequest.ResolveReferencesRequest"></a>

### *class* ResolveReferencesRequest(entities=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Input for the resolve_references operation.

* **Parameters:**
  **entities** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.ResolveReferencesRequest.ResolveReferencesRequest.add_entitie"></a>

#### add_entitie(\_recordReference)

Appends \_recordReference to entities property on ResolveReferencesRequest C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.ResolveReferencesRequest.ResolveReferencesRequest.entities"></a>

#### *property* entities *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property entities is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.ResolveReferencesResponse"></a>

<a id="resolvereferencesresponse"></a>

### ResolveReferencesResponse

<a id="ansys.grantami.backend.soap.ResolveReferencesResponse.ResolveReferencesResponse"></a>

### *class* ResolveReferencesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Output from the resolve_references operation.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a ResolveReferencesResponse object.

<a id="ansys.grantami.backend.soap.ResolveReferencesResponse.ResolveReferencesResponse.entity_resolutions"></a>

#### *property* entity_resolutions *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[MIEntityResolution](#ansys.grantami.backend.soap.MIEntityResolution.MIEntityResolution)]*

Property entity_resolutions is a list of [`MIEntityResolution`](#module-ansys.grantami.backend.soap.MIEntityResolution) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`MIEntityResolution`](#module-ansys.grantami.backend.soap.MIEntityResolution)

<a id="module-ansys.grantami.backend.soap.Response"></a>

<a id="response"></a>

### Response

<a id="ansys.grantami.backend.soap.Response.Response"></a>

### *class* Response(c_obj)

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC)

Base class for response types in Granta MI.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a response object.

<a id="ansys.grantami.backend.soap.Response.Response.service_layer_response"></a>

#### *property* service_layer_response *: [ServiceLayerResponse](#ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse)*

The raw response object received from the Granta MI Service Layer.

* **Return type:**
  [`ServiceLayerResponse`](#ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse)

<a id="module-ansys.grantami.backend.soap.RevisionInfo"></a>

<a id="revisioninfo"></a>

### RevisionInfo

<a id="ansys.grantami.backend.soap.RevisionInfo.RevisionInfo"></a>

### *class* RevisionInfo(created=None, modified=None, update_count=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Describes when an entity in a Granta MI database was created and updated.

* **Parameters:**
  * **created** ([`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision))
  * **modified** ([`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision))
  * **update_count** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.RevisionInfo.RevisionInfo.created"></a>

#### *property* created *: [DatabaseRevision](#ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision)*

Property created is of type [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision).

* **Return type:**
  [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision)

<a id="ansys.grantami.backend.soap.RevisionInfo.RevisionInfo.modified"></a>

#### *property* modified *: [DatabaseRevision](#ansys.grantami.backend.soap.DatabaseRevision.DatabaseRevision)*

Property modified is of type [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision).

* **Return type:**
  [`DatabaseRevision`](#module-ansys.grantami.backend.soap.DatabaseRevision)

<a id="ansys.grantami.backend.soap.RevisionInfo.RevisionInfo.update_count"></a>

#### *property* update_count *: [int](https://docs.python.org/3/library/functions.html#int)*

Property update_count is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.RichText"></a>

<a id="richtext"></a>

### RichText

<a id="ansys.grantami.backend.soap.RichText.RichText"></a>

### *class* RichText(type_=None, value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Contains a piece of text and its type.

* **Parameters:**
  * **type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.RichText.RichText.Type"></a>

#### *class* Type

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.RichText.RichText.Type.Markdown"></a>

#### Markdown *= 1*

<a id="ansys.grantami.backend.soap.RichText.RichText.Type.Plain"></a>

#### Plain *= 0*

<a id="ansys.grantami.backend.soap.RichText.RichText.type_"></a>

#### *property* type_ *: [int](https://docs.python.org/3/library/functions.html#int)*

Property type_ is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.RichText.RichText.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.SearchResult"></a>

<a id="searchresult"></a>

### SearchResult

<a id="ansys.grantami.backend.soap.SearchResult.SearchResult"></a>

### *class* SearchResult(long_name=None, ranking=None, record_reference=None, short_name=None, color=None, record_type=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An extension of [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord) with a ranking. The higher the
ranking the better the match to your search criteria.

* **Parameters:**
  * **long_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **ranking** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **short_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **color** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **record_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.SearchResult.SearchResult.color"></a>

#### *property* color *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property color is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SearchResult.SearchResult.long_name"></a>

#### *property* long_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property long_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SearchResult.SearchResult.ranking"></a>

#### *property* ranking *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property ranking is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SearchResult.SearchResult.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.SearchResult.SearchResult.record_type"></a>

#### *property* record_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property record_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SearchResult.SearchResult.short_name"></a>

#### *property* short_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property short_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="id6"></a>

### SearchService

<a id="module-ansys.grantami.backend.soap.SearchService"></a>

<a id="ansys.grantami.backend.soap.SearchService.SearchService"></a>

### *class* SearchService(mi_session, retries=0)

Bases: [`Service`](#ansys.grantami.backend.soap.Service.Service)

The Search service finds Records, within Granta MI Databases, matching specified criteria.

<a id="ansys.grantami.backend.soap.SearchService.SearchService.criteria_search"></a>

#### criteria_search(\_req)

Searches for records matching attribute-based criteria.

* **Parameters:**
  **\_req** ([`CriteriaSearch`](#module-ansys.grantami.backend.soap.CriteriaSearch) object)
* **Return type:**
  [`SimpleTextSearchResponse`](#module-ansys.grantami.backend.soap.SimpleTextSearchResponse) object

<a id="ansys.grantami.backend.soap.SearchService.SearchService.record_name_search"></a>

#### record_name_search(\_req)

Searches for Records with a given exact Record name.

* **Parameters:**
  **\_req** ([`RecordNameSearchRequest`](#module-ansys.grantami.backend.soap.RecordNameSearchRequest) object)
* **Return type:**
  [`SimpleTextSearchResponse`](#module-ansys.grantami.backend.soap.SimpleTextSearchResponse) object

<a id="ansys.grantami.backend.soap.SearchService.SearchService.simple_text_search"></a>

#### simple_text_search(\_req)

Searches for records matching simple text criteria.

* **Parameters:**
  **\_req** ([`SimpleTextSearch`](#module-ansys.grantami.backend.soap.SimpleTextSearch) object)
* **Return type:**
  [`SimpleTextSearchResponse`](#module-ansys.grantami.backend.soap.SimpleTextSearchResponse) object

<a id="module-ansys.grantami.backend.soap.Series"></a>

<a id="series"></a>

### Series

<a id="ansys.grantami.backend.soap.Series.Series"></a>

### *class* Series(xy_points=None, constraints=None, decoration=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type for functional data which includes X-Y data and any constraints.

* **Parameters:**
  * **xy_points** ([`XYData`](#module-ansys.grantami.backend.soap.XYData))
  * **constraints** ([`Constraints`](#module-ansys.grantami.backend.soap.Constraints))
  * **decoration** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.Series.Series.constraints"></a>

#### *property* constraints *: [Constraints](#ansys.grantami.backend.soap.Constraints.Constraints)*

Property constraints is of type [`Constraints`](#module-ansys.grantami.backend.soap.Constraints).

* **Return type:**
  [`Constraints`](#module-ansys.grantami.backend.soap.Constraints)

<a id="ansys.grantami.backend.soap.Series.Series.decoration"></a>

#### *property* decoration *: [int](https://docs.python.org/3/library/functions.html#int)*

Property decoration is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.Series.Series.xy_points"></a>

#### *property* xy_points *: [XYData](#ansys.grantami.backend.soap.XYData.XYData)*

Property xy_points is of type [`XYData`](#module-ansys.grantami.backend.soap.XYData).

* **Return type:**
  [`XYData`](#module-ansys.grantami.backend.soap.XYData)

<a id="module-ansys.grantami.backend.soap.Service"></a>

<a id="service"></a>

### Service

<a id="ansys.grantami.backend.soap.Service.Service"></a>

### *class* Service(mi_session, retries=0)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Base class for Granta MI Service objects. For internal use only.

<a id="module-ansys.grantami.backend.soap.ServiceLayerResponse"></a>

<a id="servicelayerresponse"></a>

### ServiceLayerResponse

<a id="ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse"></a>

### *class* ServiceLayerResponse(error_message=None, request_message=None, response_code=None, response_message=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The HTTP response information from Granta MI Service Layer. Useful for debugging bad requests.

* **Parameters:**
  * **error_message** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **request_message** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **response_code** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **response_message** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse.error_message"></a>

#### *property* error_message *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property error_message is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse.request_message"></a>

#### *property* request_message *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property request_message is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse.response_code"></a>

#### *property* response_code *: [int](https://docs.python.org/3/library/functions.html#int)*

Property response_code is of type int. This is an HTTP status code.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.ServiceLayerResponse.ServiceLayerResponse.response_message"></a>

#### *property* response_message *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property response_message is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.SetRecordAttributesRequest"></a>

<a id="setrecordattributesrequest"></a>

### SetRecordAttributesRequest

<a id="ansys.grantami.backend.soap.SetRecordAttributesRequest.SetRecordAttributesRequest"></a>

### *class* SetRecordAttributesRequest(import_error_mode=None, import_records=None, notes=None, release_notes=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input to a set record attributes operation. Includes an array of records to import.

* **Parameters:**
  * **import_error_mode** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **import_records** (list of [`ImportRecord`](#module-ansys.grantami.backend.soap.ImportRecord))
  * **notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **release_notes** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.SetRecordAttributesRequest.SetRecordAttributesRequest.add_import_record"></a>

#### add_import_record(\_importRecord)

Appends \_importRecord to importRecords property on SetRecordAttributesRequest C-object.

* **Parameters:**
  **\_importRecord** ([`ImportRecord`](#module-ansys.grantami.backend.soap.ImportRecord))

<a id="ansys.grantami.backend.soap.SetRecordAttributesRequest.SetRecordAttributesRequest.import_error_mode"></a>

#### *property* import_error_mode *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property import_error_mode is of type str. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SetRecordAttributesRequest.SetRecordAttributesRequest.import_records"></a>

#### *property* import_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[ImportRecord](#ansys.grantami.backend.soap.ImportRecord.ImportRecord)]*

Property import_records is a list of [`ImportRecord`](#module-ansys.grantami.backend.soap.ImportRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`ImportRecord`](#module-ansys.grantami.backend.soap.ImportRecord)

<a id="ansys.grantami.backend.soap.SetRecordAttributesRequest.SetRecordAttributesRequest.notes"></a>

#### *property* notes *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property notes is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SetRecordAttributesRequest.SetRecordAttributesRequest.release_notes"></a>

#### *property* release_notes *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property release_notes is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.SetRecordAttributesResponse"></a>

<a id="setrecordattributesresponse"></a>

### SetRecordAttributesResponse

<a id="ansys.grantami.backend.soap.SetRecordAttributesResponse.SetRecordAttributesResponse"></a>

### *class* SetRecordAttributesResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

Response for set_record_attributes operation. Includes an array of import records.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a SetRecordAttributesResponse object.

<a id="ansys.grantami.backend.soap.SetRecordAttributesResponse.SetRecordAttributesResponse.records_imported"></a>

#### *property* records_imported *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[NamedRecord](#ansys.grantami.backend.soap.NamedRecord.NamedRecord)]*

Property records_imported is a list of [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`NamedRecord`](#module-ansys.grantami.backend.soap.NamedRecord)

<a id="module-ansys.grantami.backend.soap.ShortTextDataType"></a>

<a id="shorttextdatatype"></a>

### ShortTextDataType

<a id="ansys.grantami.backend.soap.ShortTextDataType.ShortTextDataType"></a>

### *class* ShortTextDataType(is_applicable=None, value=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

Type for values of short text (string) data.

* **Parameters:**
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.ShortTextDataType.ShortTextDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.ShortTextDataType.ShortTextDataType.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.SimpleTextSearch"></a>

<a id="simpletextsearch"></a>

### SimpleTextSearch

<a id="ansys.grantami.backend.soap.SimpleTextSearch.SimpleTextSearch"></a>

### *class* SimpleTextSearch(db_key=None, populate_guids=None, record_filter=None, restrict_to_tables=None, search_filter=None, search_mode=None, search_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

The input to a simple_text_search operation.
Both the db_key, and search value are required.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **populate_guids** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **record_filter** ([`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter))
  * **restrict_to_tables** (list of [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference))
  * **search_filter** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **search_mode** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **search_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.SimpleTextSearch.SimpleTextSearch.add_restrict_to_table"></a>

#### add_restrict_to_table(\_partialTableReference)

Appends \_partialTableReference to restrictToTables property on SimpleTextSearch C-object.

* **Parameters:**
  **\_partialTableReference** ([`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference))

<a id="ansys.grantami.backend.soap.SimpleTextSearch.SimpleTextSearch.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SimpleTextSearch.SimpleTextSearch.populate_guids"></a>

#### *property* populate_guids *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property populate_guids is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.SimpleTextSearch.SimpleTextSearch.record_filter"></a>

#### *property* record_filter *: [RecordFilter](#ansys.grantami.backend.soap.RecordFilter.RecordFilter)*

Property record_filter is of type [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter).

* **Return type:**
  [`RecordFilter`](#module-ansys.grantami.backend.soap.RecordFilter)

<a id="ansys.grantami.backend.soap.SimpleTextSearch.SimpleTextSearch.restrict_to_tables"></a>

#### *property* restrict_to_tables *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[PartialTableReference](#ansys.grantami.backend.soap.PartialTableReference.PartialTableReference)]*

Property restrict_to_tables is a list of [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference)

<a id="ansys.grantami.backend.soap.SimpleTextSearch.SimpleTextSearch.search_filter"></a>

#### *property* search_filter *: [int](https://docs.python.org/3/library/functions.html#int)*

Property search_filter is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.SimpleTextSearch.SimpleTextSearch.search_mode"></a>

#### *property* search_mode *: [int](https://docs.python.org/3/library/functions.html#int)*

Property search_mode is of type int. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.SimpleTextSearch.SimpleTextSearch.search_value"></a>

#### *property* search_value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property search_value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.SimpleTextSearchResponse"></a>

<a id="simpletextsearchresponse"></a>

### SimpleTextSearchResponse

<a id="ansys.grantami.backend.soap.SimpleTextSearchResponse.SimpleTextSearchResponse"></a>

### *class* SimpleTextSearchResponse(c_obj)

Bases: [`Response`](#ansys.grantami.backend.soap.Response.Response)

The output to the simple_text_search operation.
Contains a list of records returned by the search and a
[`ServiceLayerResponse`](#module-ansys.grantami.backend.soap.ServiceLayerResponse) object.

* **Parameters:**
  **c_obj** ([*ctypes._Pointer*](https://docs.python.org/3/library/ctypes.html#ctypes._Pointer)) – Pointer to a SimpleTextSearchResponse object.

<a id="ansys.grantami.backend.soap.SimpleTextSearchResponse.SimpleTextSearchResponse.add_search_result"></a>

#### add_search_result(\_searchResult)

Appends \_searchResult to searchResults property on SimpleTextSearchResponse C-object.

* **Parameters:**
  **\_searchResult** ([`SearchResult`](#module-ansys.grantami.backend.soap.SearchResult))

<a id="ansys.grantami.backend.soap.SimpleTextSearchResponse.SimpleTextSearchResponse.search_results"></a>

#### *property* search_results *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[SearchResult](#ansys.grantami.backend.soap.SearchResult.SearchResult)]*

Property search_results is a list of [`SearchResult`](#module-ansys.grantami.backend.soap.SearchResult) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`SearchResult`](#module-ansys.grantami.backend.soap.SearchResult)

<a id="module-ansys.grantami.backend.soap.SourceRecord"></a>

<a id="sourcerecord"></a>

### SourceRecord

<a id="ansys.grantami.backend.soap.SourceRecord.SourceRecord"></a>

### *class* SourceRecord(record=None, record_link_groups=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that contains a record reference and associated record link groups.

* **Parameters:**
  * **record** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **record_link_groups** ([`LinkedRecordsDataType`](#module-ansys.grantami.backend.soap.LinkedRecordsDataType))

<a id="ansys.grantami.backend.soap.SourceRecord.SourceRecord.record"></a>

#### *property* record *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.SourceRecord.SourceRecord.record_link_groups"></a>

#### *property* record_link_groups *: [LinkedRecordsDataType](#ansys.grantami.backend.soap.LinkedRecordsDataType.LinkedRecordsDataType)*

Property record_link_groups is of type [`LinkedRecordsDataType`](#module-ansys.grantami.backend.soap.LinkedRecordsDataType).

* **Return type:**
  [`LinkedRecordsDataType`](#module-ansys.grantami.backend.soap.LinkedRecordsDataType)

<a id="module-ansys.grantami.backend.soap.SourceUnitConversionSet"></a>

<a id="sourceunitconversionset"></a>

### SourceUnitConversionSet

<a id="ansys.grantami.backend.soap.SourceUnitConversionSet.SourceUnitConversionSet"></a>

### *class* SourceUnitConversionSet(conversions=None, source_symbol=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

All the unit conversions available for a specified unit.

* **Parameters:**
  * **conversions** (list of [`UnitConversionTarget`](#module-ansys.grantami.backend.soap.UnitConversionTarget))
  * **source_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.SourceUnitConversionSet.SourceUnitConversionSet.conversions"></a>

#### *property* conversions *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnitConversionTarget](#ansys.grantami.backend.soap.UnitConversionTarget.UnitConversionTarget)]*

Property conversions is a list of [`UnitConversionTarget`](#module-ansys.grantami.backend.soap.UnitConversionTarget) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnitConversionTarget`](#module-ansys.grantami.backend.soap.UnitConversionTarget)

<a id="ansys.grantami.backend.soap.SourceUnitConversionSet.SourceUnitConversionSet.source_symbol"></a>

#### *property* source_symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property source_symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.SpecificUnitConversionContext"></a>

<a id="specificunitconversioncontext"></a>

### SpecificUnitConversionContext

<a id="ansys.grantami.backend.soap.SpecificUnitConversionContext.SpecificUnitConversionContext"></a>

### *class* SpecificUnitConversionContext(absolute_units=None, currency=None, unit_symbol=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type defining how values with convertible units should be represented.

* **Parameters:**
  * **absolute_units** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **currency** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **unit_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.SpecificUnitConversionContext.SpecificUnitConversionContext.absolute_units"></a>

#### *property* absolute_units *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property absolute_units is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.SpecificUnitConversionContext.SpecificUnitConversionContext.currency"></a>

#### *property* currency *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property currency is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SpecificUnitConversionContext.SpecificUnitConversionContext.unit_symbol"></a>

#### *property* unit_symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit_symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.SubsetDetail"></a>

<a id="subsetdetail"></a>

### SubsetDetail

<a id="ansys.grantami.backend.soap.SubsetDetail.SubsetDetail"></a>

### *class* SubsetDetail(name=None, subset=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a subset in a Granta MI database.

* **Parameters:**
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **subset** ([`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference))

<a id="ansys.grantami.backend.soap.SubsetDetail.SubsetDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SubsetDetail.SubsetDetail.subset"></a>

#### *property* subset *: [SubsetReference](#ansys.grantami.backend.soap.SubsetReference.SubsetReference)*

Property subset is of type [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference).

* **Return type:**
  [`SubsetReference`](#module-ansys.grantami.backend.soap.SubsetReference)

<a id="module-ansys.grantami.backend.soap.SubsetReference"></a>

<a id="subsetreference"></a>

### SubsetReference

<a id="ansys.grantami.backend.soap.SubsetReference.SubsetReference"></a>

### *class* SubsetReference(db_key=None, name=None, partial_table_reference=None, subset_identity=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that identifies a particular subset in a Granta MI database. This may be done by specifying
the identity of the subset, or by specifying a name that will match (only) the subset along with
the table to which the subset belongs.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **partial_table_reference** ([`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference))
  * **subset_identity** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.SubsetReference.SubsetReference.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SubsetReference.SubsetReference.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SubsetReference.SubsetReference.partial_table_reference"></a>

#### *property* partial_table_reference *: [PartialTableReference](#ansys.grantami.backend.soap.PartialTableReference.PartialTableReference)*

Property partial_table_reference is of type [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference). When used for input, this only needs to be specified if you are specifying a name rather than an id.

* **Return type:**
  [`PartialTableReference`](#module-ansys.grantami.backend.soap.PartialTableReference)

<a id="ansys.grantami.backend.soap.SubsetReference.SubsetReference.subset_identity"></a>

#### *property* subset_identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property subset_identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.SubsetsDataType"></a>

<a id="subsetsdatatype"></a>

### SubsetsDataType

<a id="ansys.grantami.backend.soap.SubsetsDataType.SubsetsDataType"></a>

### *class* SubsetsDataType(data_version_no=None, import_node_name=None, named_subsets=None, node_name=None, type_string=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

Contains a list of subsets.
Contains a list of subsets (returned by DataExport for the pseudo attribute for Subsets).

* **Parameters:**
  * **data_version_no** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **import_node_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **named_subsets** (list of [`NamedSubset`](#module-ansys.grantami.backend.soap.NamedSubset))
  * **node_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **type_string** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.SubsetsDataType.SubsetsDataType.data_version_no"></a>

#### *property* data_version_no *: [int](https://docs.python.org/3/library/functions.html#int)*

Property data_version_no is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.SubsetsDataType.SubsetsDataType.import_node_name"></a>

#### *property* import_node_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property import_node_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SubsetsDataType.SubsetsDataType.named_subsets"></a>

#### *property* named_subsets *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[NamedSubset](#ansys.grantami.backend.soap.NamedSubset.NamedSubset)]*

Property named_subsets is a list of [`NamedSubset`](#module-ansys.grantami.backend.soap.NamedSubset) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`NamedSubset`](#module-ansys.grantami.backend.soap.NamedSubset)

<a id="ansys.grantami.backend.soap.SubsetsDataType.SubsetsDataType.node_name"></a>

#### *property* node_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property node_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.SubsetsDataType.SubsetsDataType.type_string"></a>

#### *property* type_string *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property type_string is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.TableDetail"></a>

<a id="tabledetail"></a>

### TableDetail

<a id="ansys.grantami.backend.soap.TableDetail.TableDetail"></a>

### *class* TableDetail(attribute_references=None, default_layout=None, default_subset=None, standard_attribute_references=None, table_filters=None, table_reference=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Detailed meta-information about a table in a Granta MI database.

* **Parameters:**
  * **attribute_references** (list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **default_layout** ([`NamedLayout`](#module-ansys.grantami.backend.soap.NamedLayout))
  * **default_subset** ([`SubsetDetail`](#module-ansys.grantami.backend.soap.SubsetDetail))
  * **standard_attribute_references** (list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))
  * **table_filters** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*int*](https://docs.python.org/3/library/functions.html#int))
  * **table_reference** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))

<a id="ansys.grantami.backend.soap.TableDetail.TableDetail.add_attribute_references"></a>

#### add_attribute_references(\_attributeReference)

Appends \_attributeReference to attributeReferences property on TableDetail C-object.

* **Parameters:**
  **\_attributeReference** ([`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference))

<a id="ansys.grantami.backend.soap.TableDetail.TableDetail.attribute_references"></a>

#### *property* attribute_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)]*

Property attribute_references is a list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.TableDetail.TableDetail.default_layout"></a>

#### *property* default_layout *: [NamedLayout](#ansys.grantami.backend.soap.NamedLayout.NamedLayout)*

Property default_layout is of type [`NamedLayout`](#module-ansys.grantami.backend.soap.NamedLayout).

* **Return type:**
  [`NamedLayout`](#module-ansys.grantami.backend.soap.NamedLayout)

<a id="ansys.grantami.backend.soap.TableDetail.TableDetail.default_subset"></a>

#### *property* default_subset *: [SubsetDetail](#ansys.grantami.backend.soap.SubsetDetail.SubsetDetail)*

Property default_subset is of type [`SubsetDetail`](#module-ansys.grantami.backend.soap.SubsetDetail).

* **Return type:**
  [`SubsetDetail`](#module-ansys.grantami.backend.soap.SubsetDetail)

<a id="ansys.grantami.backend.soap.TableDetail.TableDetail.standard_attribute_references"></a>

#### *property* standard_attribute_references *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[AttributeReference](#ansys.grantami.backend.soap.AttributeReference.AttributeReference)]*

Property standard_attribute_references is a list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`AttributeReference`](#module-ansys.grantami.backend.soap.AttributeReference)

<a id="ansys.grantami.backend.soap.TableDetail.TableDetail.table_filters"></a>

#### *property* table_filters *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[int](https://docs.python.org/3/library/functions.html#int)]*

Property table_filters is a list of int objects. See [`GRANTA_Constants`](#module-ansys.grantami.backend.soap.GRANTA_Constants) for supported values.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TableDetail.TableDetail.table_reference"></a>

#### *property* table_reference *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property table_reference is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="module-ansys.grantami.backend.soap.TableReference"></a>

<a id="tablereference"></a>

### TableReference

<a id="ansys.grantami.backend.soap.TableReference.TableReference"></a>

### *class* TableReference(db_key=None, guid=None, id_=None, name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type that allows identification of a particular table in a particular Granta MI database.
The db_key is required in addition to at least one of either: id, guid, or name.

* **Parameters:**
  * **db_key** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **guid** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **id** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.TableReference.TableReference.db_key"></a>

#### *property* db_key *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property db_key is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TableReference.TableReference.guid"></a>

#### *property* guid *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property guid is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TableReference.TableReference.id_"></a>

#### *property* id_ *: [int](https://docs.python.org/3/library/functions.html#int)*

Property id_ is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TableReference.TableReference.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.TabularColumnDetail"></a>

<a id="tabularcolumndetail"></a>

### TabularColumnDetail

<a id="ansys.grantami.backend.soap.TabularColumnDetail.TabularColumnDetail"></a>

### *class* TabularColumnDetail(data_type=None, database_unit=None, discrete_values=None, name=None, revision_info=None, type_=None, identity=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Describes a Tabular Column, defined in a Tabular Attribute.
This details how the schema describes the Column, and does not provide information about the
contents of the Column in any particular Datum.

* **Parameters:**
  * **data_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **database_unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **discrete_values** ([*list*](https://docs.python.org/3/library/stdtypes.html#list) *of* [*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **revision_info** ([`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo))
  * **type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **identity** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.TabularColumnDetail.TabularColumnDetail.data_type"></a>

#### *property* data_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property data_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularColumnDetail.TabularColumnDetail.database_unit"></a>

#### *property* database_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property database_unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularColumnDetail.TabularColumnDetail.discrete_values"></a>

#### *property* discrete_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Property discrete_values is a list of str objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list) of [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularColumnDetail.TabularColumnDetail.identity"></a>

#### *property* identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TabularColumnDetail.TabularColumnDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularColumnDetail.TabularColumnDetail.revision_info"></a>

#### *property* revision_info *: [RevisionInfo](#ansys.grantami.backend.soap.RevisionInfo.RevisionInfo)*

Property revision_info is of type [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo).

* **Return type:**
  [`RevisionInfo`](#module-ansys.grantami.backend.soap.RevisionInfo)

<a id="ansys.grantami.backend.soap.TabularColumnDetail.TabularColumnDetail.type_"></a>

#### *property* type_ *: [int](https://docs.python.org/3/library/functions.html#int)*

Property type_ is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.TabularDataCell"></a>

<a id="tabulardatacell"></a>

### TabularDataCell

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell"></a>

### *class* TabularDataCell(data=None, data_type=None, date_data_value=None, discrete_data_value=None, file_data_value=None, hyperlink_data_value=None, integer_data_value=None, list_data_value=None, logical_data_value=None, long_text_data_value=None, picture_data_value=None, point_data_value=None, range_data_value=None, short_text_data_value=None, empty_data_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Cell within an exported item of Tabular Data. The data type property can be used to determine what
type of data the cell contains.

* **Parameters:**
  * **data** ([`IDataValue`](#module-ansys.grantami.backend.soap.IDataValue))
  * **data_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **date_data_value** ([`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType))
  * **discrete_data_value** ([`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType))
  * **file_data_value** ([`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType))
  * **hyperlink_data_value** ([`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType))
  * **integer_data_value** ([`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType))
  * **list_data_value** ([`ListDataType`](#module-ansys.grantami.backend.soap.ListDataType))
  * **logical_data_value** ([`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType))
  * **long_text_data_value** ([`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType))
  * **picture_data_value** ([`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType))
  * **point_data_value** ([`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType))
  * **range_data_value** ([`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType))
  * **short_text_data_value** ([`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType))
  * **empty_data_value** ([`EmptyDataType`](#module-ansys.grantami.backend.soap.EmptyDataType))

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.data"></a>

#### *property* data *: [IDataValue](#ansys.grantami.backend.soap.IDataValue.IDataValue)*

Property data is of type [`IDataValue`](#module-ansys.grantami.backend.soap.IDataValue).

* **Return type:**
  [`IDataValue`](#module-ansys.grantami.backend.soap.IDataValue)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.data_type"></a>

#### *property* data_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property data_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.date_data_value"></a>

#### *property* date_data_value *: [DateDataType](#ansys.grantami.backend.soap.DateDataType.DateDataType)*

Property date_data_value is of type [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType).

* **Return type:**
  [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.discrete_data_value"></a>

#### *property* discrete_data_value *: [DiscreteDataType](#ansys.grantami.backend.soap.DiscreteDataType.DiscreteDataType)*

Property discrete_data_value is of type [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType).

* **Return type:**
  [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.empty_data_value"></a>

#### *property* empty_data_value *: [EmptyDataType](#ansys.grantami.backend.soap.EmptyDataType.EmptyDataType)*

Property empty_data_value is of type [`EmptyDataType`](#module-ansys.grantami.backend.soap.EmptyDataType).

* **Return type:**
  [`EmptyDataType`](#module-ansys.grantami.backend.soap.EmptyDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.file_data_value"></a>

#### *property* file_data_value *: [FileDataType](#ansys.grantami.backend.soap.FileDataType.FileDataType)*

Property file_data_value is of type [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType).

* **Return type:**
  [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.hyperlink_data_value"></a>

#### *property* hyperlink_data_value *: [HyperlinkDataType](#ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType)*

Property hyperlink_data_value is of type [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType).

* **Return type:**
  [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.integer_data_value"></a>

#### *property* integer_data_value *: [IntegerDataType](#ansys.grantami.backend.soap.IntegerDataType.IntegerDataType)*

Property integer_data_value is of type [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType).

* **Return type:**
  [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.list_data_value"></a>

#### *property* list_data_value *: [ListDataType](#ansys.grantami.backend.soap.ListDataType.ListDataType)*

Property list_data_value is of type [`ListDataType`](#module-ansys.grantami.backend.soap.ListDataType).

* **Return type:**
  [`ListDataType`](#module-ansys.grantami.backend.soap.ListDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.logical_data_value"></a>

#### *property* logical_data_value *: [LogicalDataType](#ansys.grantami.backend.soap.LogicalDataType.LogicalDataType)*

Property logical_data_value is of type [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType).

* **Return type:**
  [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.long_text_data_value"></a>

#### *property* long_text_data_value *: [LongTextDataType](#ansys.grantami.backend.soap.LongTextDataType.LongTextDataType)*

Property long_text_data_value is of type [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType).

* **Return type:**
  [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.picture_data_value"></a>

#### *property* picture_data_value *: [PictureDataType](#ansys.grantami.backend.soap.PictureDataType.PictureDataType)*

Property picture_data_value is of type [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType).

* **Return type:**
  [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.point_data_value"></a>

#### *property* point_data_value *: [PointDataType](#ansys.grantami.backend.soap.PointDataType.PointDataType)*

Property point_data_value is of type [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType).

* **Return type:**
  [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.range_data_value"></a>

#### *property* range_data_value *: [RangeDataType](#ansys.grantami.backend.soap.RangeDataType.RangeDataType)*

Property range_data_value is of type [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType).

* **Return type:**
  [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType)

<a id="ansys.grantami.backend.soap.TabularDataCell.TabularDataCell.short_text_data_value"></a>

#### *property* short_text_data_value *: [ShortTextDataType](#ansys.grantami.backend.soap.ShortTextDataType.ShortTextDataType)*

Property short_text_data_value is of type [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType).

* **Return type:**
  [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType)

<a id="module-ansys.grantami.backend.soap.TabularDataImportCell"></a>

<a id="tabulardataimportcell"></a>

### TabularDataImportCell

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell"></a>

### *class* TabularDataImportCell(column_name=None, data_type=None, date_data_value=None, discrete_data_value=None, empty_data_value=None, file_data_value=None, hyperlink_data_value=None, integer_data_value=None, logical_data_value=None, long_text_data_value=None, picture_data_value=None, point_data_value=None, range_data_value=None, short_text_data_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Cell within an item of Tabular Data for import. In contrast to
[`TabularDataCell`](#module-ansys.grantami.backend.soap.TabularDataCell) that relates to existing data,
TabularDataImportCell includes the column name and that column name must be provided.

* **Parameters:**
  * **column_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **data_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **date_data_value** ([`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType))
  * **discrete_data_value** ([`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType))
  * **empty_data_value** ([`EmptyDataType`](#module-ansys.grantami.backend.soap.EmptyDataType))
  * **file_data_value** ([`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType))
  * **hyperlink_data_value** ([`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType))
  * **integer_data_value** ([`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType))
  * **logical_data_value** ([`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType))
  * **long_text_data_value** ([`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType))
  * **picture_data_value** ([`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType))
  * **point_data_value** ([`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType))
  * **range_data_value** ([`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType))
  * **short_text_data_value** ([`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType))

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.column_name"></a>

#### *property* column_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property column_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.data_type"></a>

#### *property* data_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property data_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.date_data_value"></a>

#### *property* date_data_value *: [DateDataType](#ansys.grantami.backend.soap.DateDataType.DateDataType)*

Property date_data_value is of type [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType).

* **Return type:**
  [`DateDataType`](#module-ansys.grantami.backend.soap.DateDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.discrete_data_value"></a>

#### *property* discrete_data_value *: [DiscreteDataType](#ansys.grantami.backend.soap.DiscreteDataType.DiscreteDataType)*

Property discrete_data_value is of type [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType).

* **Return type:**
  [`DiscreteDataType`](#module-ansys.grantami.backend.soap.DiscreteDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.empty_data_value"></a>

#### *property* empty_data_value *: [EmptyDataType](#ansys.grantami.backend.soap.EmptyDataType.EmptyDataType)*

Property empty_data_value is of type [`EmptyDataType`](#module-ansys.grantami.backend.soap.EmptyDataType).

* **Return type:**
  [`EmptyDataType`](#module-ansys.grantami.backend.soap.EmptyDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.file_data_value"></a>

#### *property* file_data_value *: [FileDataType](#ansys.grantami.backend.soap.FileDataType.FileDataType)*

Property file_data_value is of type [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType).

* **Return type:**
  [`FileDataType`](#module-ansys.grantami.backend.soap.FileDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.hyperlink_data_value"></a>

#### *property* hyperlink_data_value *: [HyperlinkDataType](#ansys.grantami.backend.soap.HyperlinkDataType.HyperlinkDataType)*

Property hyperlink_data_value is of type [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType).

* **Return type:**
  [`HyperlinkDataType`](#module-ansys.grantami.backend.soap.HyperlinkDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.integer_data_value"></a>

#### *property* integer_data_value *: [IntegerDataType](#ansys.grantami.backend.soap.IntegerDataType.IntegerDataType)*

Property integer_data_value is of type [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType).

* **Return type:**
  [`IntegerDataType`](#module-ansys.grantami.backend.soap.IntegerDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.logical_data_value"></a>

#### *property* logical_data_value *: [LogicalDataType](#ansys.grantami.backend.soap.LogicalDataType.LogicalDataType)*

Property logical_data_value is of type [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType).

* **Return type:**
  [`LogicalDataType`](#module-ansys.grantami.backend.soap.LogicalDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.long_text_data_value"></a>

#### *property* long_text_data_value *: [LongTextDataType](#ansys.grantami.backend.soap.LongTextDataType.LongTextDataType)*

Property long_text_data_value is of type [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType).

* **Return type:**
  [`LongTextDataType`](#module-ansys.grantami.backend.soap.LongTextDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.picture_data_value"></a>

#### *property* picture_data_value *: [PictureDataType](#ansys.grantami.backend.soap.PictureDataType.PictureDataType)*

Property picture_data_value is of type [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType).

* **Return type:**
  [`PictureDataType`](#module-ansys.grantami.backend.soap.PictureDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.point_data_value"></a>

#### *property* point_data_value *: [PointDataType](#ansys.grantami.backend.soap.PointDataType.PointDataType)*

Property point_data_value is of type [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType).

* **Return type:**
  [`PointDataType`](#module-ansys.grantami.backend.soap.PointDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.range_data_value"></a>

#### *property* range_data_value *: [RangeDataType](#ansys.grantami.backend.soap.RangeDataType.RangeDataType)*

Property range_data_value is of type [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType).

* **Return type:**
  [`RangeDataType`](#module-ansys.grantami.backend.soap.RangeDataType)

<a id="ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell.short_text_data_value"></a>

#### *property* short_text_data_value *: [ShortTextDataType](#ansys.grantami.backend.soap.ShortTextDataType.ShortTextDataType)*

Property short_text_data_value is of type [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType).

* **Return type:**
  [`ShortTextDataType`](#module-ansys.grantami.backend.soap.ShortTextDataType)

<a id="module-ansys.grantami.backend.soap.TabularDataImportRow"></a>

<a id="tabulardataimportrow"></a>

### TabularDataImportRow

<a id="ansys.grantami.backend.soap.TabularDataImportRow.TabularDataImportRow"></a>

### *class* TabularDataImportRow(cells=None, linking_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Row within an item of Tabular Data, this type is specifically for creating a new tabular datum, or
for overwriting existing data in an import operation.

* **Parameters:**
  * **cells** (list of [`TabularDataImportCell`](#module-ansys.grantami.backend.soap.TabularDataImportCell))
  * **linking_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.TabularDataImportRow.TabularDataImportRow.add_cell_ref"></a>

#### add_cell_ref(\_tabularDataImportCell)

Appends \_tabularDataImportCell to cells property on TabularDataImportRow C-object.

* **Parameters:**
  **\_tabularDataImportCell** ([`TabularDataImportCell`](#module-ansys.grantami.backend.soap.TabularDataImportCell))

<a id="ansys.grantami.backend.soap.TabularDataImportRow.TabularDataImportRow.cells"></a>

#### *property* cells *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TabularDataImportCell](#ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell)]*

Property cells is a list of [`TabularDataImportCell`](#module-ansys.grantami.backend.soap.TabularDataImportCell) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TabularDataImportCell`](#module-ansys.grantami.backend.soap.TabularDataImportCell)

<a id="ansys.grantami.backend.soap.TabularDataImportRow.TabularDataImportRow.linking_value"></a>

#### *property* linking_value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property linking_value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.TabularDataImportType"></a>

<a id="tabulardataimporttype"></a>

### TabularDataImportType

<a id="ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType"></a>

### *class* TabularDataImportType(import_rows=None, is_applicable=None, update_rows=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

Type representing an item of Tabular Data, this type is specifically for import operations.

* **Parameters:**
  * **import_rows** (list of [`TabularDataImportRow`](#module-ansys.grantami.backend.soap.TabularDataImportRow))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **update_rows** (list of [`TabularDataUpdateRow`](#module-ansys.grantami.backend.soap.TabularDataUpdateRow))

<a id="ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType.add_import_row_refs"></a>

#### add_import_row_refs(\_tabularDataImportRow)

Appends \_tabularDataImportRow to importRows property on TabularDataImportType C-object.

* **Parameters:**
  **\_tabularDataImportRow** ([`TabularDataImportRow`](#module-ansys.grantami.backend.soap.TabularDataImportRow))

<a id="ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType.add_update_row_refs"></a>

#### add_update_row_refs(\_tabularDataUpdateRow)

Appends \_tabularDataUpdateRow to updateRows property on TabularDataImportType C-object.

* **Parameters:**
  **\_tabularDataUpdateRow** ([`TabularDataUpdateRow`](#module-ansys.grantami.backend.soap.TabularDataUpdateRow))

<a id="ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType.import_rows"></a>

#### *property* import_rows *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TabularDataImportRow](#ansys.grantami.backend.soap.TabularDataImportRow.TabularDataImportRow)]*

Property import_rows is a list of [`TabularDataImportRow`](#module-ansys.grantami.backend.soap.TabularDataImportRow) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TabularDataImportRow`](#module-ansys.grantami.backend.soap.TabularDataImportRow)

<a id="ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType.update_rows"></a>

#### *property* update_rows *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TabularDataUpdateRow](#ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow)]*

Property update_rows is a list of [`TabularDataUpdateRow`](#module-ansys.grantami.backend.soap.TabularDataUpdateRow) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TabularDataUpdateRow`](#module-ansys.grantami.backend.soap.TabularDataUpdateRow)

<a id="module-ansys.grantami.backend.soap.TabularDataRow"></a>

<a id="tabulardatarow"></a>

### TabularDataRow

<a id="ansys.grantami.backend.soap.TabularDataRow.TabularDataRow"></a>

### *class* TabularDataRow(id_=None, cells=None, linked_records=None, linking_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Row within an item of exported Tabular Data.

* **Parameters:**
  * **id** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **cells** (list of [`TabularDataCell`](#module-ansys.grantami.backend.soap.TabularDataCell))
  * **linked_records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **linking_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.TabularDataRow.TabularDataRow.cells"></a>

#### *property* cells *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TabularDataCell](#ansys.grantami.backend.soap.TabularDataCell.TabularDataCell)]*

Property cells is a list of [`TabularDataCell`](#module-ansys.grantami.backend.soap.TabularDataCell) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TabularDataCell`](#module-ansys.grantami.backend.soap.TabularDataCell)

<a id="ansys.grantami.backend.soap.TabularDataRow.TabularDataRow.id_"></a>

#### *property* id_ *: [int](https://docs.python.org/3/library/functions.html#int)*

Property id_ is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TabularDataRow.TabularDataRow.linked_records"></a>

#### *property* linked_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property linked_records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.TabularDataRow.TabularDataRow.linking_value"></a>

#### *property* linking_value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property linking_value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.TabularDataType"></a>

<a id="tabulardatatype"></a>

### TabularDataType

<a id="ansys.grantami.backend.soap.TabularDataType.TabularDataType"></a>

### *class* TabularDataType(columns=None, is_applicable=None, tabular_data_rows=None, summary_columns=None, summary_row=None, \_is_owner=True)

Bases: [`IDataValue`](#ansys.grantami.backend.soap.IDataValue.IDataValue)

Type representing an item of exported Tabular Data, including metadata such as Column definitions.
This type is not used for importing Tabular Data; instead, use
[`TabularDataImportType`](#module-ansys.grantami.backend.soap.TabularDataImportType).

* **Parameters:**
  * **columns** (list of [`TabularDataTypeColumn`](#module-ansys.grantami.backend.soap.TabularDataTypeColumn))
  * **is_applicable** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **tabular_data_rows** (list of [`TabularDataRow`](#module-ansys.grantami.backend.soap.TabularDataRow))
  * **summary_columns** (list of [`TabularDataTypeSummaryColumn`](#module-ansys.grantami.backend.soap.TabularDataTypeSummaryColumn))
  * **summary_row** ([`TabularDataRow`](#module-ansys.grantami.backend.soap.TabularDataRow))

<a id="ansys.grantami.backend.soap.TabularDataType.TabularDataType.add_column_ref"></a>

#### add_column_ref(\_tabularDataTypeColumn)

Appends \_tabularDataTypeColumn to columns property on TabularDataType C-object.

* **Parameters:**
  **\_tabularDataTypeColumn** ([`TabularDataTypeColumn`](#module-ansys.grantami.backend.soap.TabularDataTypeColumn))

<a id="ansys.grantami.backend.soap.TabularDataType.TabularDataType.columns"></a>

#### *property* columns *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TabularDataTypeColumn](#ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn)]*

Property columns is a list of [`TabularDataTypeColumn`](#module-ansys.grantami.backend.soap.TabularDataTypeColumn) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TabularDataTypeColumn`](#module-ansys.grantami.backend.soap.TabularDataTypeColumn)

<a id="ansys.grantami.backend.soap.TabularDataType.TabularDataType.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_applicable is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.TabularDataType.TabularDataType.summary_columns"></a>

#### *property* summary_columns *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TabularDataTypeSummaryColumn](#ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn)]*

Property summary_columns is a list of [`TabularDataTypeSummaryColumn`](#module-ansys.grantami.backend.soap.TabularDataTypeSummaryColumn) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TabularDataTypeSummaryColumn`](#module-ansys.grantami.backend.soap.TabularDataTypeSummaryColumn)

<a id="ansys.grantami.backend.soap.TabularDataType.TabularDataType.summary_row"></a>

#### *property* summary_row *: [TabularDataRow](#ansys.grantami.backend.soap.TabularDataRow.TabularDataRow)*

Property summary_row is of type [`TabularDataRow`](#module-ansys.grantami.backend.soap.TabularDataRow).

* **Return type:**
  [`TabularDataRow`](#module-ansys.grantami.backend.soap.TabularDataRow)

<a id="ansys.grantami.backend.soap.TabularDataType.TabularDataType.tabular_data_rows"></a>

#### *property* tabular_data_rows *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TabularDataRow](#ansys.grantami.backend.soap.TabularDataRow.TabularDataRow)]*

Property tabular_data_rows is a list of [`TabularDataRow`](#module-ansys.grantami.backend.soap.TabularDataRow) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TabularDataRow`](#module-ansys.grantami.backend.soap.TabularDataRow)

<a id="module-ansys.grantami.backend.soap.TabularDataTypeColumn"></a>

<a id="tabulardatatypecolumn"></a>

### TabularDataTypeColumn

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn"></a>

### *class* TabularDataTypeColumn(column_type=None, data_type=None, database_unit=None, identity=None, name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a column in a specific tabular attribute.

* **Parameters:**
  * **column_type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **data_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **database_unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **identity** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.ColType"></a>

#### *class* ColType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.ColType.Local"></a>

#### Local *= 0*

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.ColType.TargetAttribute"></a>

#### TargetAttribute *= 1*

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.ColType.TargetRecord"></a>

#### TargetRecord *= 2*

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.ColType.TargetTabularColumn"></a>

#### TargetTabularColumn *= 3*

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.ColType.Unavailable"></a>

#### Unavailable *= 4*

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.column_type"></a>

#### *property* column_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property column_type is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.data_type"></a>

#### *property* data_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property data_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.database_unit"></a>

#### *property* database_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property database_unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.identity"></a>

#### *property* identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TabularDataTypeColumn.TabularDataTypeColumn.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.TabularDataTypeSummaryColumn"></a>

<a id="tabulardatatypesummarycolumn"></a>

### TabularDataTypeSummaryColumn

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn"></a>

### *class* TabularDataTypeSummaryColumn(column_type=None, data_type=None, database_unit=None, identity=None, name=None, summary_rollup_cell_type=None, summary_rollup_type=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a summary column in a specific tabular attribute.

* **Parameters:**
  * **column_type** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **data_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **database_unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **identity** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **summary_rollup_cell_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **summary_rollup_type** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType"></a>

#### *class* TabularRollupType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.Chart"></a>

#### Chart *= 10*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.CoefficientOfVariation"></a>

#### CoefficientOfVariation *= 9*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.Count"></a>

#### Count *= 6*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.CountDistinct"></a>

#### CountDistinct *= 7*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.List"></a>

#### List *= 0*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.ListDistinct"></a>

#### ListDistinct *= 8*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.Max"></a>

#### Max *= 1*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.Mean"></a>

#### Mean *= 3*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.Min"></a>

#### Min *= 2*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.StandardDeviation"></a>

#### StandardDeviation *= 4*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.TabularRollupType.Sum"></a>

#### Sum *= 5*

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.column_type"></a>

#### *property* column_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property column_type is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.data_type"></a>

#### *property* data_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property data_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.database_unit"></a>

#### *property* database_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property database_unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.identity"></a>

#### *property* identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.summary_rollup_cell_type"></a>

#### *property* summary_rollup_cell_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property summary_rollup_cell_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataTypeSummaryColumn.TabularDataTypeSummaryColumn.summary_rollup_type"></a>

#### *property* summary_rollup_type *: [int](https://docs.python.org/3/library/functions.html#int)*

Property summary_rollup_type is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.TabularDataUpdateRow"></a>

<a id="tabulardataupdaterow"></a>

### TabularDataUpdateRow

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow"></a>

### *class* TabularDataUpdateRow(id_=None, cells=None, linking_value=None, update_type=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Row within an item of Tabular Data, this type is specifically for updating existing tabular data.
The `.update_type` property must be used to specify the type of row operation, `Update`,
`Append` and `Delete` are supported. For delete operations, only the `id_` property needs to
be provided. For all other operations, at least one cell must be provided.

* **Parameters:**
  * **id** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **cells** (list of [`TabularDataImportCell`](#module-ansys.grantami.backend.soap.TabularDataImportCell))
  * **linking_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **update_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.ChangeType"></a>

#### *class* ChangeType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.ChangeType.Append"></a>

#### Append *= 1*

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.ChangeType.Delete"></a>

#### Delete *= 3*

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.ChangeType.InsertBefore"></a>

#### InsertBefore *= 0*

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.ChangeType.Update"></a>

#### Update *= 2*

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.add_cell_ref"></a>

#### add_cell_ref(\_tabularDataImportCell)

Appends \_tabularDataImportCell to cells property on TabularDataUpdateRow C-object.

* **Parameters:**
  **\_tabularDataImportCell** ([`TabularDataImportCell`](#module-ansys.grantami.backend.soap.TabularDataImportCell))

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.cells"></a>

#### *property* cells *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TabularDataImportCell](#ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell)]*

Property cells is a list of [`TabularDataImportCell`](#module-ansys.grantami.backend.soap.TabularDataImportCell) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TabularDataImportCell`](#module-ansys.grantami.backend.soap.TabularDataImportCell)

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.id_"></a>

#### *property* id_ *: [int](https://docs.python.org/3/library/functions.html#int)*

Property id_ is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.linking_value"></a>

#### *property* linking_value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property linking_value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow.update_type"></a>

#### *property* update_type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property update_type is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.TabularDetail"></a>

<a id="tabulardetail"></a>

### TabularDetail

<a id="ansys.grantami.backend.soap.TabularDetail.TabularDetail"></a>

### *class* TabularDetail(columns=None, linked_table=None, linking_attribute=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about a specific tabular attribute. If the tabular attribute has a linking attribute,
you can specify the linking attribute and the linked table containing that attribute.

* **Parameters:**
  * **columns** (list of [`TabularColumnDetail`](#module-ansys.grantami.backend.soap.TabularColumnDetail))
  * **linked_table** ([`TableReference`](#module-ansys.grantami.backend.soap.TableReference))
  * **linking_attribute** ([`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute))

<a id="ansys.grantami.backend.soap.TabularDetail.TabularDetail.columns"></a>

#### *property* columns *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TabularColumnDetail](#ansys.grantami.backend.soap.TabularColumnDetail.TabularColumnDetail)]*

Property columns is a list of [`TabularColumnDetail`](#module-ansys.grantami.backend.soap.TabularColumnDetail) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TabularColumnDetail`](#module-ansys.grantami.backend.soap.TabularColumnDetail)

<a id="ansys.grantami.backend.soap.TabularDetail.TabularDetail.linked_table"></a>

#### *property* linked_table *: [TableReference](#ansys.grantami.backend.soap.TableReference.TableReference)*

Property linked_table is of type [`TableReference`](#module-ansys.grantami.backend.soap.TableReference).

* **Return type:**
  [`TableReference`](#module-ansys.grantami.backend.soap.TableReference)

<a id="ansys.grantami.backend.soap.TabularDetail.TabularDetail.linking_attribute"></a>

#### *property* linking_attribute *: [NamedAttribute](#ansys.grantami.backend.soap.NamedAttribute.NamedAttribute)*

Property linking_attribute is of type [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute).

* **Return type:**
  [`NamedAttribute`](#module-ansys.grantami.backend.soap.NamedAttribute)

<a id="module-ansys.grantami.backend.soap.TargetedSourceRecord"></a>

<a id="targetedsourcerecord"></a>

### TargetedSourceRecord

<a id="ansys.grantami.backend.soap.TargetedSourceRecord.TargetedSourceRecord"></a>

### *class* TargetedSourceRecord(source_record=None, target_records=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type for unlinking records, contains a source
[`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) and an array of target
[`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

* **Parameters:**
  * **source_record** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **target_records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.TargetedSourceRecord.TargetedSourceRecord.add_target_record"></a>

#### add_target_record(\_recordReference)

Appends \_recordReference to targetRecords property on TargetedSourceRecord C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.TargetedSourceRecord.TargetedSourceRecord.source_record"></a>

#### *property* source_record *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property source_record is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.TargetedSourceRecord.TargetedSourceRecord.target_records"></a>

#### *property* target_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property target_records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.TrailingZeroInformation"></a>

<a id="trailingzeroinformation"></a>

### TrailingZeroInformation

<a id="ansys.grantami.backend.soap.TrailingZeroInformation.TrailingZeroInformation"></a>

### *class* TrailingZeroInformation(entered_unit=None, entered_value=None, significant_figures=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type representing the numerical value as originally entered, including original unit and significant
figures.

* **Parameters:**
  * **entered_unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **entered_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **significant_figures** ([*int*](https://docs.python.org/3/library/functions.html#int))

<a id="ansys.grantami.backend.soap.TrailingZeroInformation.TrailingZeroInformation.entered_unit"></a>

#### *property* entered_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property entered_unit is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TrailingZeroInformation.TrailingZeroInformation.entered_value"></a>

#### *property* entered_value *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property entered_value is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TrailingZeroInformation.TrailingZeroInformation.significant_figures"></a>

#### *property* significant_figures *: [int](https://docs.python.org/3/library/functions.html#int)*

Property significant_figures is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="module-ansys.grantami.backend.soap.TreeRecord"></a>

<a id="treerecord"></a>

### TreeRecord

<a id="ansys.grantami.backend.soap.TreeRecord.TreeRecord"></a>

### *class* TreeRecord(children=None, color=None, long_name=None, parent_record_history_identity=None, record_reference=None, short_name=None, type_=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type representing a single record in a Granta MI database, along with information about its position
in the node-tree.

* **Parameters:**
  * **children** (list of [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord))
  * **color** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **long_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **parent_record_history_identity** ([*int*](https://docs.python.org/3/library/functions.html#int))
  * **record_reference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))
  * **short_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.TreeRecord.TreeRecord.add_children"></a>

#### add_children(\_treeRecord)

Appends \_treeRecord to children property on TreeRecord C-object.

* **Parameters:**
  **\_treeRecord** ([`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord))

<a id="ansys.grantami.backend.soap.TreeRecord.TreeRecord.children"></a>

#### *property* children *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TreeRecord](#ansys.grantami.backend.soap.TreeRecord.TreeRecord)]*

Property children is a list of [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TreeRecord`](#module-ansys.grantami.backend.soap.TreeRecord)

<a id="ansys.grantami.backend.soap.TreeRecord.TreeRecord.color"></a>

#### *property* color *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property color is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TreeRecord.TreeRecord.long_name"></a>

#### *property* long_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property long_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TreeRecord.TreeRecord.parent_record_history_identity"></a>

#### *property* parent_record_history_identity *: [int](https://docs.python.org/3/library/functions.html#int)*

Property parent_record_history_identity is of type int.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.backend.soap.TreeRecord.TreeRecord.record_reference"></a>

#### *property* record_reference *: [RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)*

Property record_reference is of type [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference).

* **Return type:**
  [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="ansys.grantami.backend.soap.TreeRecord.TreeRecord.short_name"></a>

#### *property* short_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property short_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.TreeRecord.TreeRecord.type_"></a>

#### *property* type_ *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property type_ is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.UnitConversion"></a>

<a id="unitconversion"></a>

### UnitConversion

<a id="ansys.grantami.backend.soap.UnitConversion.UnitConversion"></a>

### *class* UnitConversion(factor=None, offset=None, source_symbol=None, target_symbol=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about how to convert from a specified source unit to a target unit.

* **Parameters:**
  * **factor** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **offset** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **source_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **target_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.UnitConversion.UnitConversion.factor"></a>

#### *property* factor *: [float](https://docs.python.org/3/library/functions.html#float)*

Property factor is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.UnitConversion.UnitConversion.offset"></a>

#### *property* offset *: [float](https://docs.python.org/3/library/functions.html#float)*

Property offset is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.UnitConversion.UnitConversion.source_symbol"></a>

#### *property* source_symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property source_symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.UnitConversion.UnitConversion.target_symbol"></a>

#### *property* target_symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property target_symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.UnitConversionContext"></a>

<a id="unitconversioncontext"></a>

### UnitConversionContext

<a id="ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext"></a>

### *class* UnitConversionContext(absolute_units=None, currency=None, unit_system=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Type defining how values with units should be represented.

* **Parameters:**
  * **absolute_units** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **currency** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **unit_system** ([`UnitSystemDetail`](#module-ansys.grantami.backend.soap.UnitSystemDetail))

<a id="ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext.absolute_units"></a>

#### *property* absolute_units *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property absolute_units is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext.currency"></a>

#### *property* currency *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property currency is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext.unit_system"></a>

#### *property* unit_system *: [UnitSystemDetail](#ansys.grantami.backend.soap.UnitSystemDetail.UnitSystemDetail)*

Property unit_system is of type [`UnitSystemDetail`](#module-ansys.grantami.backend.soap.UnitSystemDetail).

* **Return type:**
  [`UnitSystemDetail`](#module-ansys.grantami.backend.soap.UnitSystemDetail)

<a id="module-ansys.grantami.backend.soap.UnitConversionContextConversionSet"></a>

<a id="unitconversioncontextconversionset"></a>

### UnitConversionContextConversionSet

<a id="ansys.grantami.backend.soap.UnitConversionContextConversionSet.UnitConversionContextConversionSet"></a>

### *class* UnitConversionContextConversionSet(unit_conversion_context=None, unit_conversions=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

All the unit conversions available with a specified unit conversion context.

* **Parameters:**
  * **unit_conversion_context** ([`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext))
  * **unit_conversions** (list of [`UnitConversion`](#module-ansys.grantami.backend.soap.UnitConversion))

<a id="ansys.grantami.backend.soap.UnitConversionContextConversionSet.UnitConversionContextConversionSet.add_unit_conversion"></a>

#### add_unit_conversion(\_unitConversion)

Appends \_unitConversion to unitConversions property on UnitConversionContextConversionSet C-object.

* **Parameters:**
  **\_unitConversion** ([`UnitConversion`](#module-ansys.grantami.backend.soap.UnitConversion))

<a id="ansys.grantami.backend.soap.UnitConversionContextConversionSet.UnitConversionContextConversionSet.unit_conversion_context"></a>

#### *property* unit_conversion_context *: [UnitConversionContext](#ansys.grantami.backend.soap.UnitConversionContext.UnitConversionContext)*

Property unit_conversion_context is of type [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext).

* **Return type:**
  [`UnitConversionContext`](#module-ansys.grantami.backend.soap.UnitConversionContext)

<a id="ansys.grantami.backend.soap.UnitConversionContextConversionSet.UnitConversionContextConversionSet.unit_conversions"></a>

#### *property* unit_conversions *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[UnitConversion](#ansys.grantami.backend.soap.UnitConversion.UnitConversion)]*

Property unit_conversions is a list of [`UnitConversion`](#module-ansys.grantami.backend.soap.UnitConversion) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`UnitConversion`](#module-ansys.grantami.backend.soap.UnitConversion)

<a id="module-ansys.grantami.backend.soap.UnitConversionTarget"></a>

<a id="unitconversiontarget"></a>

### UnitConversionTarget

<a id="ansys.grantami.backend.soap.UnitConversionTarget.UnitConversionTarget"></a>

### *class* UnitConversionTarget(factor=None, offset=None, target_symbol=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Information about how to convert to a target unit. When this type is used directly, the source unit
is assumed to be already known from a different type. To obtain a value in the target units,
multiply the source value by the factor, and then add the offset.

* **Parameters:**
  * **factor** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **offset** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **target_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.UnitConversionTarget.UnitConversionTarget.factor"></a>

#### *property* factor *: [float](https://docs.python.org/3/library/functions.html#float)*

Property factor is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.UnitConversionTarget.UnitConversionTarget.offset"></a>

#### *property* offset *: [float](https://docs.python.org/3/library/functions.html#float)*

Property offset is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.UnitConversionTarget.UnitConversionTarget.target_symbol"></a>

#### *property* target_symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property target_symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.UnitInformation"></a>

<a id="unitinformation"></a>

### UnitInformation

<a id="ansys.grantami.backend.soap.UnitInformation.UnitInformation"></a>

### *class* UnitInformation(unit_name=None, unit_symbol=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A type used to give details of units for quantities.
When this type is output by the Service Layer, both name and symbol will be populated. When passed
as input to the Service Layer, only name or symbol need to be populated; if both are populated,
only the symbol is used.

* **Parameters:**
  * **unit_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **unit_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.UnitInformation.UnitInformation.unit_name"></a>

#### *property* unit_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.UnitInformation.UnitInformation.unit_symbol"></a>

#### *property* unit_symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit_symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.UnitSymbol"></a>

<a id="unitsymbol"></a>

### UnitSymbol

<a id="ansys.grantami.backend.soap.UnitSymbol.UnitSymbol"></a>

### *class* UnitSymbol(has_currency=None, symbol=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A unit symbol known to MI, and whether it references a currency.

* **Parameters:**
  * **has_currency** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.UnitSymbol.UnitSymbol.has_currency"></a>

#### *property* has_currency *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property has_currency is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.UnitSymbol.UnitSymbol.symbol"></a>

#### *property* symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.UnitSystemDetail"></a>

<a id="unitsystemdetail"></a>

### UnitSystemDetail

<a id="ansys.grantami.backend.soap.UnitSystemDetail.UnitSystemDetail"></a>

### *class* UnitSystemDetail(display_names=None, name=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A unit system, along with any localised names, if defined.

* **Parameters:**
  * **display_names** (list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName))
  * **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.UnitSystemDetail.UnitSystemDetail.display_names"></a>

#### *property* display_names *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[DisplayName](#ansys.grantami.backend.soap.DisplayName.DisplayName)]*

Property display_names is a list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`DisplayName`](#module-ansys.grantami.backend.soap.DisplayName)

<a id="ansys.grantami.backend.soap.UnitSystemDetail.UnitSystemDetail.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.UnittedParameterValue"></a>

<a id="unittedparametervalue"></a>

### UnittedParameterValue

<a id="ansys.grantami.backend.soap.UnittedParameterValue.UnittedParameterValue"></a>

### *class* UnittedParameterValue(parameter_with_values=None, unit_symbol=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A Parameter, along with a single value of that Parameter, optionally with units.

* **Parameters:**
  * **parameter_with_values** ([`ParameterReferenceAndValue`](#module-ansys.grantami.backend.soap.ParameterReferenceAndValue))
  * **unit_symbol** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.UnittedParameterValue.UnittedParameterValue.parameter_with_values"></a>

#### *property* parameter_with_values *: [ParameterReferenceAndValue](#ansys.grantami.backend.soap.ParameterReferenceAndValue.ParameterReferenceAndValue)*

Property parameter_with_values is of type [`ParameterReferenceAndValue`](#module-ansys.grantami.backend.soap.ParameterReferenceAndValue).

* **Return type:**
  [`ParameterReferenceAndValue`](#module-ansys.grantami.backend.soap.ParameterReferenceAndValue)

<a id="ansys.grantami.backend.soap.UnittedParameterValue.UnittedParameterValue.unit_symbol"></a>

#### *property* unit_symbol *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property unit_symbol is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.UnlinkAllRecords"></a>

<a id="unlinkallrecords"></a>

### UnlinkAllRecords

<a id="ansys.grantami.backend.soap.UnlinkAllRecords.UnlinkAllRecords"></a>

### *class* UnlinkAllRecords(node_name=None, source_records=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, remove all links in the Record Link Group.

* **Parameters:**
  * **node_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **source_records** (list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.UnlinkAllRecords.UnlinkAllRecords.add_source_record"></a>

#### add_source_record(\_recordReference)

Appends \_recordReference to sourceRecords property on UnlinkAllRecords C-object.

* **Parameters:**
  **\_recordReference** ([`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference))

<a id="ansys.grantami.backend.soap.UnlinkAllRecords.UnlinkAllRecords.node_name"></a>

#### *property* node_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property node_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.UnlinkAllRecords.UnlinkAllRecords.source_records"></a>

#### *property* source_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[RecordReference](#ansys.grantami.backend.soap.RecordReference.RecordReference)]*

Property source_records is a list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`RecordReference`](#module-ansys.grantami.backend.soap.RecordReference)

<a id="module-ansys.grantami.backend.soap.UnlinkRecords"></a>

<a id="unlinkrecords"></a>

### UnlinkRecords

<a id="ansys.grantami.backend.soap.UnlinkRecords.UnlinkRecords"></a>

### *class* UnlinkRecords(node_name=None, source_records=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

For each given source record, remove links to the target records specified for that source record.
Silently skip any links that do not exist.

* **Parameters:**
  * **node_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **source_records** (list of [`TargetedSourceRecord`](#module-ansys.grantami.backend.soap.TargetedSourceRecord))

<a id="ansys.grantami.backend.soap.UnlinkRecords.UnlinkRecords.add_source_record"></a>

#### add_source_record(\_targetedSourceRecord)

Appends \_targetedSourceRecord to sourceRecords property on UnlinkRecords C-object.

* **Parameters:**
  **\_targetedSourceRecord** ([`TargetedSourceRecord`](#module-ansys.grantami.backend.soap.TargetedSourceRecord))

<a id="ansys.grantami.backend.soap.UnlinkRecords.UnlinkRecords.node_name"></a>

#### *property* node_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property node_name is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.UnlinkRecords.UnlinkRecords.source_records"></a>

#### *property* source_records *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[TargetedSourceRecord](#ansys.grantami.backend.soap.TargetedSourceRecord.TargetedSourceRecord)]*

Property source_records is a list of [`TargetedSourceRecord`](#module-ansys.grantami.backend.soap.TargetedSourceRecord) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`TargetedSourceRecord`](#module-ansys.grantami.backend.soap.TargetedSourceRecord)

<a id="module-ansys.grantami.backend.soap.XYData"></a>

<a id="xydata"></a>

### XYData

<a id="ansys.grantami.backend.soap.XYData.XYData"></a>

### *class* XYData(xy_points=None, xy_ranges=None, type_=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of y-axis values for a graph where the y-axis values are either point or range values.

* **Parameters:**
  * **xy_points** (list of [`XYPoint`](#module-ansys.grantami.backend.soap.XYPoint))
  * **xy_ranges** (list of [`XYRange`](#module-ansys.grantami.backend.soap.XYRange))
  * **type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))

<a id="ansys.grantami.backend.soap.XYData.XYData.add_xy_point"></a>

#### add_xy_point(\_XYPoint)

Appends \_XYPoint to XYPoints property on XYData C-object.

* **Parameters:**
  **\_XYPoint** ([`XYPoint`](#module-ansys.grantami.backend.soap.XYPoint))

<a id="ansys.grantami.backend.soap.XYData.XYData.add_xy_range"></a>

#### add_xy_range(\_XYRange)

Appends \_XYRange to XYRanges property on XYData C-object.

* **Parameters:**
  **\_XYRange** ([`XYRange`](#module-ansys.grantami.backend.soap.XYRange))

<a id="ansys.grantami.backend.soap.XYData.XYData.type_"></a>

#### *property* type_ *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property type_ is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.backend.soap.XYData.XYData.xy_points"></a>

#### *property* xy_points *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[XYPoint](#ansys.grantami.backend.soap.XYPoint.XYPoint)]*

Property xy_points is a list of [`XYPoint`](#module-ansys.grantami.backend.soap.XYPoint) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`XYPoint`](#module-ansys.grantami.backend.soap.XYPoint)

<a id="ansys.grantami.backend.soap.XYData.XYData.xy_ranges"></a>

#### *property* xy_ranges *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[XYRange](#ansys.grantami.backend.soap.XYRange.XYRange)]*

Property xy_ranges is a list of [`XYRange`](#module-ansys.grantami.backend.soap.XYRange) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`XYRange`](#module-ansys.grantami.backend.soap.XYRange)

<a id="module-ansys.grantami.backend.soap.XYDiscrete"></a>

<a id="xydiscrete"></a>

### XYDiscrete

<a id="ansys.grantami.backend.soap.XYDiscrete.XYDiscrete"></a>

### *class* XYDiscrete(y=None, is_estimated=None, parameter_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An x-y datum where the y-axis value is a discrete value.

* **Parameters:**
  * **y** ([*str*](https://docs.python.org/3/library/stdtypes.html#str))
  * **is_estimated** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **parameter_value** ([`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue))

<a id="ansys.grantami.backend.soap.XYDiscrete.XYDiscrete.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_estimated is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.XYDiscrete.XYDiscrete.parameter_value"></a>

#### *property* parameter_value *: [ParameterValue](#ansys.grantami.backend.soap.ParameterValue.ParameterValue)*

Property parameter_value is of type [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue).

* **Return type:**
  [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue)

<a id="ansys.grantami.backend.soap.XYDiscrete.XYDiscrete.y"></a>

#### *property* y *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Property y is of type str.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="module-ansys.grantami.backend.soap.XYDiscreteData"></a>

<a id="xydiscretedata"></a>

### XYDiscreteData

<a id="ansys.grantami.backend.soap.XYDiscreteData.XYDiscreteData"></a>

### *class* XYDiscreteData(xy_discretes=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A collection of y-axis values for a graph where the y-axis values are discrete values.

* **Parameters:**
  **xy_discretes** (list of [`XYDiscrete`](#module-ansys.grantami.backend.soap.XYDiscrete))

<a id="ansys.grantami.backend.soap.XYDiscreteData.XYDiscreteData.add_xy_discrete"></a>

#### add_xy_discrete(\_XYDiscrete)

Appends \_XYDiscrete to XYDiscretes property on XYDiscreteData C-object.

* **Parameters:**
  **\_XYDiscrete** ([`XYDiscrete`](#module-ansys.grantami.backend.soap.XYDiscrete))

<a id="ansys.grantami.backend.soap.XYDiscreteData.XYDiscreteData.xy_discretes"></a>

#### *property* xy_discretes *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[XYDiscrete](#ansys.grantami.backend.soap.XYDiscrete.XYDiscrete)]*

Property xy_discretes is a list of [`XYDiscrete`](#module-ansys.grantami.backend.soap.XYDiscrete) objects.

#### WARNING
Do not attempt to edit or append to the returned value.

* **Return type:**
  list of [`XYDiscrete`](#module-ansys.grantami.backend.soap.XYDiscrete)

<a id="module-ansys.grantami.backend.soap.XYPoint"></a>

<a id="xypoint"></a>

### XYPoint

<a id="ansys.grantami.backend.soap.XYPoint.XYPoint"></a>

### *class* XYPoint(y=None, is_estimated=None, parameter_value=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An x-y datum where the y-axis value is a point.

* **Parameters:**
  * **y** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **is_estimated** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **parameter_value** ([`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue))

<a id="ansys.grantami.backend.soap.XYPoint.XYPoint.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_estimated is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.XYPoint.XYPoint.parameter_value"></a>

#### *property* parameter_value *: [ParameterValue](#ansys.grantami.backend.soap.ParameterValue.ParameterValue)*

Property parameter_value is of type [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue).

* **Return type:**
  [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue)

<a id="ansys.grantami.backend.soap.XYPoint.XYPoint.y"></a>

#### *property* y *: [float](https://docs.python.org/3/library/functions.html#float)*

Property y is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="module-ansys.grantami.backend.soap.XYRange"></a>

<a id="xyrange"></a>

### XYRange

<a id="ansys.grantami.backend.soap.XYRange.XYRange"></a>

### *class* XYRange(is_estimated=None, lower_y=None, parameter_value=None, upper_y=None, \_is_owner=True)

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An x-y datum where the y-axis value is a range.

* **Parameters:**
  * **is_estimated** ([*bool*](https://docs.python.org/3/library/functions.html#bool))
  * **lower_y** ([*float*](https://docs.python.org/3/library/functions.html#float))
  * **parameter_value** ([`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue))
  * **upper_y** ([*float*](https://docs.python.org/3/library/functions.html#float))

<a id="ansys.grantami.backend.soap.XYRange.XYRange.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Property is_estimated is of type bool.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.backend.soap.XYRange.XYRange.lower_y"></a>

#### *property* lower_y *: [float](https://docs.python.org/3/library/functions.html#float)*

Property lower_y is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)

<a id="ansys.grantami.backend.soap.XYRange.XYRange.parameter_value"></a>

#### *property* parameter_value *: [ParameterValue](#ansys.grantami.backend.soap.ParameterValue.ParameterValue)*

Property parameter_value is of type [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue).

* **Return type:**
  [`ParameterValue`](#module-ansys.grantami.backend.soap.ParameterValue)

<a id="ansys.grantami.backend.soap.XYRange.XYRange.upper_y"></a>

#### *property* upper_y *: [float](https://docs.python.org/3/library/functions.html#float)*

Property upper_y is of type float.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float)
