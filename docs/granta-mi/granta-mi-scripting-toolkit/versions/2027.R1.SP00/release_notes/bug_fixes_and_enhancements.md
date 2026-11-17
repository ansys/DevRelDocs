# Enhancements and bug fixes

<a id="enhancements-and-bug-fixes"></a>

<a id="streamlined-api"></a>

## Streamlined API

* [`set_links()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.set_links) now validates that the provided link groups are modifiable immediately, rather
  than when [`update_links()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.update_links) or [`update()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.update) is called.
* [`AttributeTabular.append_row()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.append_row) now returns the appended [`TabularRow`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow) object.
* Added [`TabularRow.is_empty`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow.is_empty) property to check whether a tabular row is empty.
* Previously, `isinstance(value, PictureValue)` would return `True` for [`FileValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue) instances, and
  `isinstance(value, LocalPictureValue)` would return `True` for [`LocalFileValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalFileValue) instances. These checks
  now correctly return `False`.
* Previously, triggering `__str__` for [`LocalPictureValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue) and [`LocalFileValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalFileValue) objects would return a
  string describing the corresponding linked version of the object. Triggering `__str__` for these objects now
  correctly returns a string describing the local version.
* Equality checks between [`FileValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue) instances now correctly account for [`FileValue.file_name`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue.file_name) and
  [`FileValue.description`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue.description).
* Validation of search criteria has been improved, with more checks being performed immediately. Checks that previously
  were carried out when the search was performed, are now run when the [`SearchCriterion`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.SearchCriterion) object is created.
* [`LocalPointValue.default_unit`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalPointValue.default_unit) and [`LocalRangeValue.default_unit`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue.default_unit) now correctly return
  [`None`](https://docs.python.org/3/builtins/constants.html#None) for dimensionless columns instead of raising an [`AttributeError`](https://docs.python.org/3/builtins/exceptions.html#AttributeError).
* Previously attempting to re-import an [`AttributePicture`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture) that was exported as a URL (with
  `include_binary_data=False`) would silently delete the picture data on the server, and now an
  [`UnexportedBinaryDataError`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) is raised.
* Previously attempting to re-import an [`AttributeFile`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile) that was exported as a URL would raise an
  [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError), and now an [`UnexportedBinaryDataError`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) is raised.
* [`UnexportedBinaryDataError`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) is now available directly from the `ansys.grantami.core` top-level package,
  instead of requiring an import from `ansys.grantami.core.mi_meta_classes`.
* Previously, [`LocalHyperlinkValue.hyperlink_display`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.hyperlink_display) would default to [`None`](https://docs.python.org/3/builtins/constants.html#None), resulting in a
  [`StopIteration`](https://docs.python.org/3/builtins/exceptions.html#StopIteration) error upon attempting to import the parent tabular attribute.
  [`LocalHyperlinkValue.hyperlink_display`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.hyperlink_display) now defaults to `New`.
* Setting [`LocalHyperlinkValue.hyperlink_display`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.hyperlink_display) or [`HyperlinkValue.hyperlink_display`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue.hyperlink_display) to an invalid
  value now raises a [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError) that lists the valid values, instead of a message stating only that the
  provided value is invalid.
* Previously, attempting to use [`OIDCSessionBuilder`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder) without the `[oidc]` extra installed raised an
  unclear [`AttributeError`](https://docs.python.org/3/builtins/exceptions.html#AttributeError). A clearer error message is now raised instead.

<a id="documentation"></a>

## Documentation

* Added [Optimizing memory usage](../user_guide/performance_optimization.md#optimizing-memory-isolated-bulk-fetch) to the [Performance optimization](../user_guide/performance_optimization.md) page, describing
  how to optimize memory usage for large bulk fetch operations.
* Added links to MI Scripting Toolkit how-to videos on the [Getting started](../getting_started/index.md) page.
