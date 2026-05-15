# Enhancements and bug fixes

<a id="enhancements-and-bug-fixes"></a>

<a id="streamlined-api"></a>

## Streamlined API

* Added support for Device Code Flow authentication, making it easier to use the Scripting Toolkit in environments where
  a web browser is not available. Use [`OIDCSessionBuilder.with_device_code_flow()`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder.with_device_code_flow).
* Fixed an issue where it was not possible to authenticate with Microsoft Entra ID from Linux environments.
* Fixed an issue where it was not possible to refresh the OIDC access token a second time if token rotation was
  disabled.
* [`Session.get_db()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.get_db) called with the argument `version_guid` incorrectly attempted to match the provided value
  to database names. It now correctly matches databases by version guid.
* [`Database.version_guid`](../streamlined_api/database.md#ansys.grantami.core.mi_tree_classes.Database.version_guid) incorrectly returned the database name. It now correctly returns the database version
  guid.
* Added a [`Table.bulk_fetch_all_record_versions()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_all_record_versions) method, which fetches all versions of one or more records in
  bulk.
* Fixed an issue where results from [`Table.bulk_fetch_associated_records()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_associated_records) were created with an incorrect
  [`Table`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table) reference.
* The `unit` property has been removed from attribute definition classes that do not have units. The following classes
  are now the only ones that have a `unit` property:
  - [`AttributeDefinitionPoint`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionPoint)
  - [`AttributeDefinitionRange`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionRange)
  - [`AttributeDefinitionFloatFunctional`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionFloatFunctional)
* Attribute definition classes that expose the `unit` property now return [`None`](https://docs.python.org/3/library/constants.html#None) if the corresponding attribute
  has no associated unit, not an empty string.
* Units returned by [`AttributeDefinitionTabular.column_units`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_units) are now [`None`](https://docs.python.org/3/library/constants.html#None) for attributes with no
  associated unit columns, not an empty string.
* Added property [`AttributeDefinitionDiscrete.is_ordered`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionDiscrete.is_ordered), which describes whether the discrete type associated
  with the discrete attribute is ordered.
* The `unit` property returned by parameter definitions is now [`None`](https://docs.python.org/3/library/constants.html#None) if the corresponding parameter is
  dimensionless, not an empty string.
* [`Record.last_modified_on`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.last_modified_on), [`Record.created_on`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.created_on), and [`Record.released_on`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.released_on) now include timezone
  information. This allows these values to be localized correctly.
* Searching for records by date attribute value with naive [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects could cause unexpected
  results if the server was set to a non-UTC timezone. This has been resolved by enforcing search with
  [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) objects only.
* [`Exporter.save()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_exporters.Exporter.save) no longer raises an exception when saving the output of an FEA Export template configured to
  include a byte order mark.
* Fixed an issue where modifying [`AttributeBinary.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeBinary.value) did not update the corresponding
  [`BinaryType.mime_file_type`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType.mime_file_type).

<a id="foundation-api"></a>

## Foundation API

* The Foundation API has been upgraded to the 23/10 Service Layer SOAP interface, which is supported by Granta MI 2024
  R1 or later.
* Removed methods `GRANTA_Logging.debug`, `GRANTA_Logging.info`, `GRANTA_Logging.warning`, and
  `GRANTA_Logging.error`. Use [`GRANTA_Logging.core_logger()`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Logging.GRANTA_Logging.core_logger) to obtain the [`Logger`](https://docs.python.org/3/library/logging.html#logging.Logger) object
  directly.
* Removed method `OIDC.authorize()`, this has been replaced with
  [`OIDC.authorize_with_authorization_code_flow()`](../foundation_api.md#ansys.grantami.backend.soap.OIDC.OIDC.authorize_with_authorization_code_flow)
* Import of tabular attributes now uses separate types. [`TabularDataImportType`](../foundation_api.md#ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType) now accepts a list of
  [`TabularDataImportRow`](../foundation_api.md#ansys.grantami.backend.soap.TabularDataImportRow.TabularDataImportRow) via the [`TabularDataImportType.add_import_row_refs()`](../foundation_api.md#ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType.add_import_row_refs) property, or a list of
  [`TabularDataUpdateRow`](../foundation_api.md#ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow) via the [`TabularDataImportType.add_update_row_refs()`](../foundation_api.md#ansys.grantami.backend.soap.TabularDataImportType.TabularDataImportType.add_update_row_refs) property.
* Added new classes [`TabularDataImportRow`](../foundation_api.md#ansys.grantami.backend.soap.TabularDataImportRow.TabularDataImportRow), [`TabularDataUpdateRow`](../foundation_api.md#ansys.grantami.backend.soap.TabularDataUpdateRow.TabularDataUpdateRow), and [`TabularDataImportCell`](../foundation_api.md#ansys.grantami.backend.soap.TabularDataImportCell.TabularDataImportCell)
  to better support updating tabular attributes.
* Support has been added for Device Code Flow, this makes it easier to use the Scripting Toolkit in environments where a
  web browser is not available. Use [`OIDC.authorize_with_device_code_flow()`](../foundation_api.md#ansys.grantami.backend.soap.OIDC.OIDC.authorize_with_device_code_flow) to authenticate.
* The Foundation API now follows PEP 8 formatting guidelines.

<a id="documentation"></a>

## Documentation

* Added new example [Data with Precision](../samples/streamlined/14_Data_with_Precision.md).
* Removed example `Create Functional Data`. See [Data analytics example notebooks](../examples/data_analytics_examples.md) for examples that show how
  to fit raw test data.
* Replaced example `Import Functional Data` with [Float Functional Data](../samples/streamlined/10_Edit_Float_Functional_Data.md).
* Replaced examples `Edit Tabular Data` and `Create and edit tabular data` with new examples
  [Local Tabular Data](../samples/streamlined/11_Edit_Local_Tabular_Data.md) and [Linked Tabular Data](../samples/streamlined/12_Edit_Linked_Tabular_Data.md).
* Added new section [Package overview](../user_guide/package_overview.md). This section provides an overview of the structure of MI Scripting Toolkit
  and guidance on direct use of the Foundation API.
* Added new section [Exceptions](../user_guide/exceptions.md). This section describes the different exceptions raised by MI Scripting Toolkit,
  and how to handle them appropriately.
* Improved [Streamlined API reference](../streamlined_api/index.md) by adding additional cross-reference for parameter types, guidance around which
  methods and properties trigger Service Layer calls, and how to obtain correctly-instantiated classes for existing
  Granta MI items.
