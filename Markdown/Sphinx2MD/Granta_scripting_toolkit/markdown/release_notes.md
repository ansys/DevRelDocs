<a id="release-notes"></a>

# What’s new in Version 3.3

Key features introduced or improved in MI Scripting Toolkit for Python 3.3.

## What’s new?

### Feature 1

Significant new feature 1

### Feature 2

Significant new feature 2

## Streamlined API enhancements and bug fixes

### Enhancements

* Two new properties have been added to [`AttributeRange`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange) objects:
  [`high_value_is_inclusive`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.high_value_is_inclusive) and
  [`low_value_is_inclusive`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.low_value_is_inclusive). These properties are
  available both when exporting and importing data.
* [`FunctionalSeries.log_yaxis`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.log_yaxis) is now a documented property.
* Retries can be set with the `max_retries` parameter in the [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) constructor.
* [`Record.record_history`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.record_history) has been added: it exposes information about the record revisions.
* [`AttributeFile.description`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.description) no longer duplicates the file name value as a default.
* A new property `is_estimated` has been added to the classes [`AttributeRange`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange)
  and [`mi_attribute_value_classes.AttributePoint`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint). This allows the value for these attributes
  to be marked as an estimate.
* New arguments `notes` and `release_notes` have been added to [`Session.update()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update). The `notes` and
  `release_notes` arguments add change notes to all records and folders being modified and released respectively.
* A new argument `withdrawal_notes` has been added to the class [`BulkRecordDeleterWithdrawer`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_bulk_utilities.BulkRecordDeleterWithdrawer), and to the
  methods [`Session.bulk_delete_or_withdraw_records()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.bulk_delete_or_withdraw_records) and [`Record.delete_or_withdraw_record_on_server()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.delete_or_withdraw_record_on_server).
  The `withdrawal_notes` argument adds change notes to all folders and records being withdrawn.

### Bug fixes

* Bulk fetching an attribute no longer creates empty meta-attributes values on the resulting [`AttributeValue`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue).
* Improved the resolution of the mime type of an image. Reducing the probability that the mime type is not determined, resulting in a `ValueError`.
* [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) `timeout` parameter is no longer ignored if `autologon` is set to `True`.
* Calling [`Session.connect()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.connect) with `spawn_new_connection` set to `False` no longer emits a warning for sessions
  instantiated with an existing Foundation session.
* Conda packages no longer install some unnecessary dependencies.

## Foundation API enhancements and bug fixes

* [`XYDiscrete.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.XYDiscrete.XYDiscrete.isEstimated), [`XYPoint.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.XYPoint.XYPoint.isEstimated), and [`XYRange.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.XYRange.XYRange.isEstimated)
  have been added. Additionally the property `Estimated` on the classes [`DiscreteFunctionalValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue),
  [`FloatFunctionalPointValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue), and [`FloatFunctionalRangeValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue) has been renamed to
  [`DiscreteFunctionalValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue.isEstimated), [`FloatFunctionalPointValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue.isEstimated), and
  [`FloatFunctionalRangeValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue.isEstimated). All types supporting Estimated data are now consistent in
  import and export.
* A new property has been added to the class [`RecordFilter`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter), [`RecordFilter.recordLists`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.RecordFilter.RecordFilter.recordLists) which
  allows searches to filter by membership in a Record List.
* A new property has been added to the class [`DeleteOrWithdrawIfLatestRecordVersionRequest`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest),
  [`DeleteOrWithdrawIfLatestRecordVersionRequest.notes`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DeleteOrWithdrawIfLatestRecordVersionRequest.DeleteOrWithdrawIfLatestRecordVersionRequest.notes) allows users to specify revision notes when
  withdrawing version-controlled records.
* A new class [`EmptyDataType`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.EmptyDataType.EmptyDataType) has been added, this enables the contents of individual tabular cells
  to be cleared in an `Update` operation without replacing an entire row.
* Bug fix

## Backwards incompatible API changes

### Streamlined API

* Actioned deprecation: [`AttributeHyperlink.object`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.object) no longer supports string inputs.
* Backwards incompatible change 2

### Foundation API

* The property `Estimated` on the classes [`DiscreteFunctionalValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue), [`FloatFunctionalPointValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue),
  and [`FloatFunctionalRangeValue`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue) has been renamed to [`DiscreteFunctionalValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.DiscreteFunctionalValue.DiscreteFunctionalValue.isEstimated),
  [`FloatFunctionalPointValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalPointValue.FloatFunctionalPointValue.isEstimated), and [`FloatFunctionalRangeValue.isEstimated`](GRANTA_MIScriptingToolkit.md#GRANTA_MIScriptingToolkit.FloatFunctionalRangeValue.FloatFunctionalRangeValue.isEstimated) respectively.

## Known issues

* If an attribute is exported with the [`Table.bulk_fetch`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method with
  `include_binary_data=False`, subsequent values returned by the `AttributePicture.mime_file_type` property
  will always return `image/png`, regardless of the actual image format. The header returned when accessing
  the URL is unaffected and should be used instead.

* The Foundation object [`RangeDataType`](GRANTA_MIScriptingToolkit.md#module-GRANTA_MIScriptingToolkit.RangeDataType) has an unexpected default value of False for `highValueIsInclusive`.
  It is recommended to specify the desired value explicitly. The Streamlined object [`AttributeRange`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange) is
  not affected.
