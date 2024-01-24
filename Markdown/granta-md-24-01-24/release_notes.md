# What’s new in Version 3.3

Key features introduced or improved in MI Scripting Toolkit for Python 3.3.

<a id="what-s-new"></a>

## What’s new?

<a id="inclusive-and-exclusive-range-attributes"></a>

### Inclusive and exclusive range attributes

Two new properties have been added to [`AttributeRange`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange) objects:
[`high_value_is_inclusive`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.high_value_is_inclusive) and [`low_value_is_inclusive`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.low_value_is_inclusive).
These properties are available both when exporting and importing data.

<a id="change-notes"></a>

### Change notes

New arguments `notes` and `release_notes` have been added to [`Session.update()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update). The `notes` and
`release_notes` arguments add change notes to all records and folders being modified and released respectively.
A new argument `withdrawal_notes` has been added to the class [`BulkRecordDeleterWithdrawer`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer), and to the
methods [`Session.bulk_delete_or_withdraw_records()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_delete_or_withdraw_records) and [`Record.delete_or_withdraw_record_on_server()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.delete_or_withdraw_record_on_server).
The `withdrawal_notes` argument adds change notes to all folders and records being withdrawn.

<a id="streamlined-api-enhancements-and-bug-fixes"></a>

## Streamlined API enhancements and bug fixes

<a id="enhancements"></a>

### Enhancements

* The list of valid pseudo-attribute names is now documented on the [`Record.pseudo_attributes`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.pseudo_attributes) property and
  [`PseudoAttributeDefinition`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.PseudoAttributeDefinition) constructor.
* [`Record.record_history`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.record_history) has been added: it exposes information about the record revisions.
* [`FunctionalSeries.log_yaxis`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.log_yaxis) is now a documented property.
* Retries can be set with the `max_retries` parameter in the [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) constructor.
* [`AttributeFile.description`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.description) no longer duplicates the file name value as a default.
* A new property `is_estimated` has been added to the classes [`AttributeRange`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange)
  and [`AttributePoint`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint). This allows values for these attributes to be marked as
  estimates.
* The properties that return [`ObjectHistory`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.ObjectHistory) objects are now documented.

<a id="bug-fixes"></a>

### Bug fixes

* Conda packages no longer install some unnecessary dependencies.
* Calling [`Session.connect()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.connect) with `spawn_new_connection` set to `False` no longer emits a warning for sessions
  instantiated with an existing Foundation session.
* [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) `timeout` parameter is no longer ignored if `autologon` is set to `True`.
* The [`Session.records_from_string()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.records_from_string) method now returns the correct version of the record as specified in the
  text if `use_strict_version = True` is specified. This behavior will become the default in a future version.
* Bulk fetching an attribute no longer creates empty meta-attributes values on the resulting
  [`AttributeValue`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue). When a record is bulk-fetched, only the requested
  meta-attributes are added to the [`AttributeValue`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue).
* Improved the resolution of the mime type of an image. Reducing the probability that the mime type is not determined,
  resulting in a `ValueError`.
* Files uploaded to a File attribute no longer inherit the overwritten file’s mime type.
* [`AttributeInteger.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeInteger.value) can now only be set to `int` or `None`. Other numeric
  types will raise a `TypeError`.

<a id="foundation-api-enhancements-and-bug-fixes"></a>

## Foundation API enhancements and bug fixes

* A number of retries can now be specified in the [`GRANTA_MISession`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.GRANTA_MISession.GRANTA_MISession) constructor.
* A new property [`RecordFilter.recordLists`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter.recordLists) has been added, which allows searches to filter by membership
  in a Record List.
* A new property [`DeleteOrWithdrawIfLatestRecordVersionRequest.notes`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest.notes) has been added, which allows users
  to specify revision notes when withdrawing version-controlled records.
* [`XYDiscrete.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.XYDiscrete.XYDiscrete.isEstimated), [`XYPoint.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.XYPoint.XYPoint.isEstimated), and [`XYRange.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.XYRange.XYRange.isEstimated)
  have been added. Additionally the property `Estimated` on the classes [`DiscreteFunctionalValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue),
  [`FloatFunctionalPointValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue), and [`FloatFunctionalRangeValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue) has been renamed to
  [`DiscreteFunctionalValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue.isEstimated), [`FloatFunctionalPointValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue.isEstimated), and
  [`FloatFunctionalRangeValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue.isEstimated) respectively. All types supporting Estimated data are now
  consistent in import and export.
* A new class [`EmptyDataType`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.EmptyDataType.EmptyDataType) has been added. This class enables the contents of individual tabular
  cells to be cleared in an `Update` operation without replacing an entire row.

<a id="backwards-incompatible-api-changes"></a>

## Backwards incompatible API changes

<a id="streamlined-api"></a>

### Streamlined API

* [`AttributeHyperlink.object`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.object) no longer supports `str` inputs. Only [`Hyperlink`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink) objects
  are supported. This was deprecated in previous versions of the scripting toolkit.

<a id="foundation-api"></a>

### Foundation API

* The property `Estimated` on the classes [`DiscreteFunctionalValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue), [`FloatFunctionalPointValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue),
  and [`FloatFunctionalRangeValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue) has been renamed to [`DiscreteFunctionalValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue.isEstimated),
  [`FloatFunctionalPointValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue.isEstimated), and [`FloatFunctionalRangeValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue.isEstimated) respectively.

<a id="known-issues"></a>

## Known issues

* If an attribute is exported with the [`Table.bulk_fetch`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method with
  `include_binary_data=False`, subsequent values returned by the `AttributePicture.mime_file_type` property
  will always return `image/png`, regardless of the actual image format. The header returned when accessing
  the URL is unaffected and should be used instead.
* In some situations a script running with Python 3.8 using the [Asynchronous Job Queue](stream_api.md#async-jobs) may fail to terminate.
  Upgrade Python to 3.9 or later to resolve the issue.
* Attempting to call
  [`Exporter.get_parameters_required_for_export`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_exporters.Exporter.get_parameters_required_for_export)
  for an FEA exporter which contains functional meta-attributes will fail with a `KeyError`. Contact your ACE
  representative or Ansys Support for further assistance.
