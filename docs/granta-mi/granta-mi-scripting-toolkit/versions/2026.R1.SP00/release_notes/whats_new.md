# What’s new in 5.0

<a id="whats-new"></a>

<a id="what-s-new-in-version"></a>

MI Scripting Toolkit 5.0 is a major release.

Support has been added for import and export of precision information for point and range values, and is described in
[Trailing zeros and precision](#whats-new-precision).

Additionally, significant improvements have been made to existing functionality in the following areas:

* [Installation and imports](#whats-new-installation-and-imports)
* [Session construction](#whats-new-session-construction)
* [Attribute values](#whats-new-attribute-value)
* [Invalid operations on staged records](#whats-new-staged-record-behavior)

<a id="whats-new-precision"></a>

<a id="trailing-zeros-and-precision"></a>

## Trailing zeros and precision

Support has been added for precision information on point and range attributes. This allows both the export of trailing
zero information from Granta MI databases and the import of values with specified significant figures.

<a id="export-of-trailing-zero-information"></a>

### Export of trailing zero information

Trailing zero information can be exported from point and range attributes via the following properties:

* [`AttributePointSingle.trailing_zero_information`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.trailing_zero_information)
* [`AttributePointMulti.trailing_zero_information`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.trailing_zero_information)
* [`AttributeRange.low_value_trailing_zero_information`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.low_value_trailing_zero_information) and
  [`AttributeRange.high_value_trailing_zero_information`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.high_value_trailing_zero_information)

These properties return [`TrailingZeroInformation`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.TrailingZeroInformation) objects, which describe
how many digits in the float value are significant.

<a id="import-of-values-with-significant-figures"></a>

### Import of values with significant figures

Attribute values with significant figures can be imported to point and range attributes via the following properties:

* [`AttributePointSingle.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.value)
* [`AttributePointMulti.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.value)
* [`AttributeRange.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value)

These properties now accept [`ValueWithPrecision`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) instances as alternative inputs to [`float`](https://docs.python.org/3/library/functions.html#float) values. The
number of significant figures [`ValueWithPrecision.significant_figures`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision.significant_figures), evaluated from the provided
[`ValueWithPrecision.value`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision.value) and [`ValueWithPrecision.number_of_digits`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision.number_of_digits), is added to the attribute value
during import.

See [Data with Precision](../samples/streamlined/14_Data_with_Precision.md) for examples of the new functionality.

<a id="whats-new-installation-and-imports"></a>

<a id="installation-and-imports"></a>

## Installation and imports

The MI Scripting Toolkit streamlined API is now provided by `ansys-grantami-core`. This package has a dependency on the
Foundation API, which is provided by `ansys-grantami-backend-soap`. Both packages are delivered together. See
[Getting started](../getting_started/index.md) for how to install the packages, and [Package overview](../user_guide/package_overview.md) for more detail
on how MI Scripting Toolkit is structured.

<a id="whats-new-compatibility-package"></a>

The `GRANTA_MIScriptingToolkit` package (referred to as the *compatibility package*) is provided for backwards
compatibility purposes and may be installed if required. It will be installed by default if upgrading an existing
installation.

<a id="streamlined-api"></a>

### Streamlined API

The streamlined API should be accessed by importing `ansys.grantami.core`. Imports from
`GRANTA_MIScriptingToolkit.granta` are allowed if the *compatibility package* is installed, but are deprecated.
Imports from `GRANTA_MIScriptingToolkit.granta` subpackages are not allowed:

* `from GRANTA_MIScriptingToolkit import granta as mpy` is permitted, but emits an [`APIDeprecationWarning`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.APIDeprecationWarning).
* `from GRANTA_MIScriptingToolkit.granta import Record` is permitted, but emits an [`APIDeprecationWarning`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.APIDeprecationWarning).
* `from GRANTA_MIScriptingToolkit.granta.mi_record_classes import Record` is no longer allowed and raises an
  [`ImportError`](https://docs.python.org/3/library/exceptions.html#ImportError).

<a id="foundation-api"></a>

### Foundation API

The foundation API should be accessed by importing `ansys.grantami.backend.soap`. Imports from
`GRANTA_MIScriptingToolkit` are allowed if the *compatibility package* is installed, but are deprecated. Imports from
`GRANTA_MIScriptingToolkit` subpackages are not allowed:

* `import GRANTA_MIScriptingToolkit as gdl` is permitted, but emits an [`APIDeprecationWarning`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.APIDeprecationWarning).
* `from GRANTA_MIScriptingToolkit import RecordReference` is permitted, but emits an [`APIDeprecationWarning`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.APIDeprecationWarning).
* `from GRANTA_MIScriptingToolkit.RecordReference import RecordReference` is no longer allowed and raises an
  [`ImportError`](https://docs.python.org/3/library/exceptions.html#ImportError).

<a id="whats-new-session-construction"></a>

<a id="session-construction"></a>

## Session construction

Connecting to Granta MI is now done with a [`SessionBuilder`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder) class. Once the connection is complete, a
[`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) object is returned. New [`OIDCSessionBuilder`](../streamlined_api/session.md#ansys.grantami.core.mi.OIDCSessionBuilder) and [`SessionConfiguration`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionConfiguration) classes have
also been introduced to support the [`SessionBuilder`](../streamlined_api/session.md#ansys.grantami.core.mi.SessionBuilder) class.

Direct use of the [`Session`](../streamlined_api/session.md#ansys.grantami.core.mi.Session) constructor is available if importing the Streamlined API via the
[compatibility package](#whats-new-compatibility-package), but is deprecated.

<a id="whats-new-attribute-value"></a>

<a id="attribute-values"></a>

## Attribute values

Significant changes have been made to [`AttributeValue`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) in this release, to better
represent the underlying Granta MI behavior. These changes bring the following benefits:

* Better client-side validation. More checks are performed when the Python objects are modified, ensuring the data is
  compatible with Granta MI when imported.
* More representative classes for attribute sub-types, for example multi-value vs single-value attributes and series vs
  grid functional data. The allowed types are now narrower and more specific, making the streamlined API easier to use.
* More predictable behavior via the use of immutable types. Attribute values now make use of tuples instead of lists,
  which allows for additional validation and fewer side effects.

The following attribute values have changed significantly in this release and are described in the following
sub-sections:

* [AttributeDate](#whats-new-attribute-date)
* [AttributePoint](#whats-new-attribute-point)
* [AttributeDiscrete](#whats-new-attribute-discrete)
* [AttributeRange](#whats-new-attribute-range)
* [AttributeHyperlink](#whats-new-attribute-hyperlink)
* [Float functional attributes](#whats-new-attribute-float-functional)
* [AttributeTabular](#whats-new-attribute-tabular)

Additionally, the following changes have been made to other attribute values:

* [`AttributeLogical.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeLogical.value) now defaults to [`None`](https://docs.python.org/3/library/constants.html#None).
* [`AttributePicture.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture.value), [`AttributePicture.mime_file_type`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture.mime_file_type), and
  [`AttributePicture.url`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture.url) now default to [`None`](https://docs.python.org/3/library/constants.html#None).
* [`AttributeFile.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.value), [`AttributeFile.mime_file_type`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.mime_file_type), and
  [`AttributeFile.url`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.url) now default to [`None`](https://docs.python.org/3/library/constants.html#None).
* [`AttributeFile.file_name`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.file_name) now defaults to the attribute name instead of an empty string.
* [`AttributeBinary`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeBinary), [`AttributeDate`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDate), [`AttributeDiscrete`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete), [`AttributeHyperlink`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink),
  [`AttributeInteger`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeInteger), [`AttributeLogical`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeLogical), [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular), [`AttributeShortText`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeShortText),
  [`AttributeLongText`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeLongText), and [`AttributeUnsupported`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeUnsupported) no longer have `unit` properties.

<a id="whats-new-attribute-date"></a>

<a id="attributedate"></a>

### [`AttributeDate`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDate)

[`AttributeDate.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDate.value) now only supports [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) objects:

* Values exported from Granta MI are represented as [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) objects instead of
  [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects set to midnight on the appropriate date.
* Values to be imported to Granta MI must be specified as [`date`](https://docs.python.org/3/library/datetime.html#datetime.date) objects. [`datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime)
  and [`str`](https://docs.python.org/3/library/stdtypes.html#str) objects are no longer supported.

The following additional enhancements have been made to [`AttributeDate`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDate):

* The `AttributeDate.value_as_string` property has been removed. Instead, use [`isoformat()`](https://docs.python.org/3/library/datetime.html#datetime.date.isoformat) on
  the output of [`AttributeDate.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDate.value).
* Setting a date attribute to a value earlier than 1st January 1753 now raises a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) immediately.
  Previously, a non-descriptive error would be raised on import.

<a id="whats-new-attribute-point"></a>

<a id="attributepoint"></a>

### [`AttributePoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePoint)

[`AttributePoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePoint) has been split into [`AttributePointSingle`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle) and [`AttributePointMulti`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti).

[`AttributePointSingle`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle) represents attribute values for point attributes defined as not allowing multiple
values:

* [`AttributePointSingle.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.value) only accepts scalar inputs.
* Single point attributes do not include parameters.

[`AttributePointMulti`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti) represents attribute values for point attributes defined as allowing multiple values:

* [`AttributePointMulti.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.value) only accepts tuples of [`ParameterizedPointValue`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.ParameterizedPointValue) as input.
* Parameter values are included in the [`ParameterizedPointValue`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.ParameterizedPointValue) values.
* The property `AttributePointMulti.parameter_definitions` has been removed. [`AttributePointMulti`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti) defines
  an [`AttributePointMulti.parameters`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.parameters) property, which describes parameters of the attribute and their current
  unit.

The following additional enhancements have been made to point attribute values:

* [`AttributePointSingle.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.value) and [`AttributePointMulti.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.value) both default to [`None`](https://docs.python.org/3/library/constants.html#None) for empty or
  not applicable attribute values.
* Invalid inputs now raise a [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError).
* [`AttributePointSingle.default_unit`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.default_unit) and [`AttributePointMulti.default_unit`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.default_unit) return the default unit for
  the point attribute as defined in the attribute definition, but converted to the active unit system.
* The methods [`AttributePointMulti.set_value()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.set_value) and [`AttributePointSingle.set_value()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.set_value) have been added to
  support setting the attribute value from a broader set of types.
* The `unit` property now returns [`None`](https://docs.python.org/3/library/constants.html#None) for dimensionless attributes, instead of an empty string.
* Point attribute values now support precision information. See [Trailing zeros and precision](#whats-new-precision) for more
  details.

<a id="whats-new-attribute-discrete"></a>

<a id="attributediscrete"></a>

### [`AttributeDiscrete`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete)

[`AttributeDiscrete`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete) has been split into [`AttributeDiscreteSingle`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle) and [`AttributeDiscreteMulti`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti).

[`AttributeDiscreteSingle`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle) represents attribute values for discrete attributes defined as not allowing multiple
values:

* [`AttributeDiscreteSingle.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle.value) only accepts string inputs. A list of strings is not permitted.
* [`AttributeDiscreteSingle.order`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle.order) is now a single integer value.

[`AttributeDiscreteMulti`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti) represents attribute values for discrete attributes defined as allowing multiple
values:

* [`AttributeDiscreteMulti.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti.value) now returns a tuple of strings, and only accepts a tuple of strings as input. A
  single string is not permitted.
* [`AttributeDiscreteMulti.order`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti.order) is a tuple of integers.

The following additional enhancements have been made to discrete attribute values:

* [`AttributeDiscreteSingle.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle.value) and [`AttributeDiscreteMulti.order`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti.order) both default to [`None`](https://docs.python.org/3/library/constants.html#None) for empty
  or not applicable attribute values.
* Properties [`AttributeDiscreteSingle.order`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle.order) and [`AttributeDiscreteMulti.order`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti.order) are now updated when
  [`AttributeDiscreteSingle.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle.value) or [`AttributeDiscreteMulti.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti.value) are modified.

<a id="whats-new-attribute-range"></a>

<a id="attributerange"></a>

### [`AttributeRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange)

The interface for range attribute values has changed significantly since the previous release.

#### WARNING
Any code that uses the v4.2 `AttributeRange` class will need to be modified when upgrading to v5.0.

[`AttributeRange.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value) can now only be set to an instance of [`Range`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.Range):

* [`Range`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.Range) is a frozen dataclass.
* The alternative constructor [`Range.from_data()`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.Range.from_data) supports previously accepted range values (see
  [`Range_Value_Type`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.Range_Value_Type)).
* [`Range.as_dict()`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.Range.as_dict) returns a dictionary of low and high values, identical to the value previously returned by
  [`AttributeRange.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value) for exported attribute values.
* [`AttributeRange.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value) returns [`None`](https://docs.python.org/3/library/constants.html#None) for empty or not applicable attribute values, and a [`Range`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.Range)
  object otherwise.

The following additional enhancements have been made to [`AttributeRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange):

* Added properties [`AttributeRange.low`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.low) and [`AttributeRange.high`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.high) to access the low and high values of a
  range attribute. These properties always return [`float`](https://docs.python.org/3/library/functions.html#float), [`ValueWithPrecision`](../streamlined_api/supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision), or [`None`](https://docs.python.org/3/library/constants.html#None) (for
  open-ended ranges), not [`int`](https://docs.python.org/3/library/functions.html#int).
* [`AttributeRange.default_unit`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.default_unit) returns the default unit for the attribute as defined in the attribute
  definition, but converted to the active unit system.
* [`AttributeRange.unit`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.unit) now returns [`None`](https://docs.python.org/3/library/constants.html#None) for dimensionless attributes, instead of an empty string.
* Range attribute values now support precision information. See [Trailing zeros and precision](#whats-new-precision) for more details.

<a id="whats-new-attribute-hyperlink"></a>

<a id="attributehyperlink"></a>

### [`AttributeHyperlink`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink)

* The property `.object` has been removed from [`AttributeHyperlink`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink). Use the properties
  [`AttributeHyperlink.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.value), [`AttributeHyperlink.hyperlink_display`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_display), and
  [`AttributeHyperlink.hyperlink_description`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_description)
  instead.
* Properties [`AttributeHyperlink.hyperlink_description`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_description), [`AttributeFile.description`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.description),
  [`AttributeFile.url`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.url), and [`AttributePicture.url`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributePicture.url) now return [`None`](https://docs.python.org/3/library/constants.html#None) if properties are not set,
  instead of an empty string.

<a id="whats-new-attribute-float-functional"></a>

<a id="float-functional-attributes"></a>

### Float functional attributes

The interface for float functional attribute values has changed significantly since the previous release.

#### WARNING
Any code that uses the v4.2 `AttributeFunctional` class will need to be modified when upgrading to v5.0.

These changes were required for the following reasons:

* To support series functional data where multiple series share the same set of parameter values. In previous versions,
  it was not possible to determine which data points belonged to which series.
* To support enhanced validation. In previous versions, it was possible to create invalid functional data objects
  that would only fail when import was attempted.
* To support greater control over datum-level parameter settings. In previous versions, it was not possible to
  fully specify datum-level parameter settings, or to determine if a parameter setting was inherited or set directly.

As a result of these changes, there is now a greater reliance on immutable data types in the functional data interface.
Immutable data types allow for enhanced validation of the data, because the data can be validated when it is assigned
to the attribute, and cannot subsequently be modified to an invalid state. New classes have been defined to represent
grid and series functional data for both point and range data types. These classes ensure that the data provided is
compatible with the schema definition of the attribute.

See [Float Functional Data](../samples/streamlined/10_Edit_Float_Functional_Data.md) for an example of interacting with the new float
functional data interface.

<a id="attribute-value-changes"></a>

#### Attribute value changes

* `FunctionalSeries` has been split into two new classes to represent point and range series data. These changes allow
  the representation of series data where multiple series share the same set of parameter values. The list below
  contains the new classes, and the specific types accepted by the `.value` property:
  * [`AttributeFunctionalSeriesPoint.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.value) accepts a [`tuple`](https://docs.python.org/3/library/stdtypes.html#tuple) of [`SeriesPoint`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.SeriesPoint) objects.
  * [`AttributeFunctionalSeriesRange.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.value) accepts a [`tuple`](https://docs.python.org/3/library/stdtypes.html#tuple) of [`SeriesRange`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.SeriesRange) objects.
* `FunctionalGrid` has been split into two separate classes to represent point and range grid data. The `.value`
  property for each of these classes accepts specific objects as described below:
  * [`AttributeFunctionalGridPoint.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.value) accepts a [`GridPoint`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.GridPoint) object.
  * [`AttributeFunctionalGridRange.value`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.value) accepts a [`GridRange`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.GridRange) object.
* `FunctionalSeries.hide_graph` has been renamed to `show_as_table`. This is available on
  [`AttributeFunctionalSeriesPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.show_as_table) and
  [`AttributeFunctionalSeriesRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.show_as_table) classes.
* By default, the methods `generate_grid_version()` or `generate_series_version()` on
  [`AttributeFunctionalSeriesPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.generate_grid_version),
  [`AttributeFunctionalSeriesRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.generate_grid_version),
  [`AttributeFunctionalGridPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.generate_series_version), and
  [`AttributeFunctionalGridRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.generate_series_version) classes
  copy the data, unit, datum parameter settings, and applicableness to the new attribute value. The
  optional parameter `create_empty` can be set to `True` to create empty versions of the attribute values
  instead.
* Removed `AttributeFunctionalSeries.series_linestyles` and `AttributeFunctionalGrid.linestyle`. Use the
  `decoration` property available for [`SeriesPoint`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.SeriesPoint.decoration),
  [`SeriesRange`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.SeriesRange.decoration), [`GridPoint`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.GridPoint.decoration) and
  [`GridRange`](../streamlined_api/supporting.md#ansys.grantami.core._mi_value_classes.GridRange.decoration) classes instead.
* Removed `AttributeFunctional.clear()`. Set the `.value` to [`None`](https://docs.python.org/3/library/constants.html#None).
* The functional data representation from previous versions is available as the read-only property `table_view` for
  [`AttributeFunctionalSeriesPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.table_view),
  [`AttributeFunctionalSeriesRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.table_view),
  [`AttributeFunctionalGridPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.table_view), and
  [`AttributeFunctionalGridRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.table_view) classes.
* The methods [`AttributeFunctionalSeriesPoint.set_value()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.set_value) and [`AttributeFunctionalSeriesRange.set_value()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.set_value)
  have been added to support setting the attribute value from any sequence of series objects.
* The `unit` property on functional attribute classes now returns [`None`](https://docs.python.org/3/library/constants.html#None) for dimensionless attributes, instead of
  an empty string.

<a id="x-axis-changes"></a>

#### X-axis changes

* `AttributeFunctional.xaxis_parameter` has been removed. To access x-axis parameter information, use the `x_axis`
  property to obtain the x-axis parameter name, and provide the result to the `parameters` mapping. The `x_axis`
  property is available for [`AttributeFunctionalSeriesPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.x_axis),
  [`AttributeFunctionalSeriesRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.x_axis),
  [`AttributeFunctionalGridPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.x_axis), and
  [`AttributeFunctionalGridRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.x_axis) classes.
* The mapping `AttributeFunctional.xaxis` has been removed. Use `with_new_x_axis()`, to create an attribute value
  with a different x-axis. This method is available for
  [`AttributeFunctionalSeriesPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.with_new_x_axis),
  [`AttributeFunctionalSeriesRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.with_new_x_axis),
  [`AttributeFunctionalGridPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.with_new_x_axis), and
  [`AttributeFunctionalGridRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.with_new_x_axis) classes.

<a id="parameter-changes"></a>

#### Parameter changes

* The `parameters` property, available for
  [`AttributeFunctionalSeriesPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.parameters),
  [`AttributeFunctionalSeriesRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.parameters),
  [`AttributeFunctionalGridPoint`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.parameters), and
  [`AttributeFunctionalGridRange`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.parameters),
  now returns a mapping of parameter names to [`FunctionalValueParameter`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter) objects.
* [`FunctionalValueParameter`](../streamlined_api/supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter) objects hold information about datum level parameter settings. If these properties
  are set, they represent a datum-specific setting for that parameter which may override an attribute-level setting. If
  they are set to [`None`](https://docs.python.org/3/library/constants.html#None), this specifies that the particular setting is inherited from the attribute parameter
  definition. In this case, the inherited value is available in the corresponding ‘effective’ property. See the API
  reference for more details.

<a id="whats-new-attribute-tabular"></a>

<a id="attributetabular"></a>

### [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular)

The interface for tabular attribute values has changed significantly since the previous release.

#### WARNING
Any code that uses the v4.2 `AttributeTabular` class will need to be modified when upgrading to v5.0.

These changes were required to allow a more granular and efficient way to edit and import data. In previous versions of
MI Scripting Toolkit, tabular data was imported as a whole object, even when updating a single cell. This could cause a large
overhead when interacting with tabular attributes with many rows, and with binary columns.

As a result of these changes, the interface now provides more information about rows and cells, and improves performance
in scenarios where only a subset of the table data is modified.

New classes have been added to represent tabular rows and cells. These ensure that data provided is consistent with the
schema definition of the attribute.

<a id="id1"></a>

#### Attribute value changes

* New class [`TabularRow`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow) represents a row in a tabular attribute value. The row provides access to the linking
  value of the row, the row identifier and the cells in the row. The cells can be accessed as a tuple via
  [`TabularRow.cells`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells), or as a mapping from column name to cell via [`TabularRow.cells_by_column`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column).
* A new property [`AttributeTabular.rows`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.rows) provides access to the rows of the table as a sequence of
  [`TabularRow`](../streamlined_api/tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow) objects.
* The `.value` property on [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular) is now read-only, replicating where possible the existing
  interface. All updates should be performed via the new interface.
* The `.add_row` method on [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular) has been renamed to [`AttributeTabular.append_row()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.append_row), to
  better reflect its behavior.
* The `.units` property has been removed from [`AttributeTabular`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular). To access the units as defined on the
  column, use the [`AttributeDefinitionTabular.column_units`](../streamlined_api/attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.column_units) property. To access the unit for a specific cell,
  use the [`RangeValue.unit`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.RangeValue.unit) or [`PointValue.unit`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.PointValue.unit) property on the cell.
* Direct indexing of the tabular attribute value to access rows has been removed.
* Operations which can cause data loss for users of Data Updater have been disabled by default. To enable them for a
  specific attribute value, call [`AttributeTabular.enable_destructive_editing()`](../streamlined_api/attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.enable_destructive_editing).

<a id="cell-changes"></a>

#### Cell changes

* New classes [`ShortTextValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.ShortTextValue), [`LongTextValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LongTextValue), [`LogicalValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.LogicalValue), [`IntegerValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.IntegerValue),
  [`DateValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.DateValue), [`PictureValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.PictureValue), and [`FileValue`](../streamlined_api/tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue) represent individual linked cells in a tabular
  attribute value. The corresponding Local versions of these classes are used to represent local cells.

<a id="whats-new-staged-record-behavior"></a>

<a id="invalid-operations-on-staged-records"></a>

## Invalid operations on staged records

The behavior when invalid operations are performed on staged records has been standardized. The following methods and
properties now all raise [`InvalidRecordStateError`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.InvalidRecordStateError) when called on staged records:

| Member                                                                                                                                                                                                              | Previous behavior                                                                                                                     |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [`Exporter.get_parameters_required_for_export()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_exporters.Exporter.get_parameters_required_for_export)                                                    | Raised [`GRANTA_Exception`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_Exception)                      |
| [`Exporter.run_exporter()`](../streamlined_api/supporting.md#ansys.grantami.core.mi_exporters.Exporter.run_exporter)                                                                                                | Raised [`IndexError`](https://docs.python.org/3/library/exceptions.html#IndexError)                                                   |
| [`Session.bulk_delete_or_withdraw_records()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.bulk_delete_or_withdraw_records)                                                                         | Silently ignored staged records.                                                                                                      |
| [`Session.bulk_fetch_release_states()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.bulk_fetch_release_states)                                                                                     | Raised [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError)                                                   |
| [`Session.update_links()`](../streamlined_api/session.md#ansys.grantami.core.mi.Session.update_links)                                                                                                               | Raised [`AssertionError`](https://docs.python.org/3/library/exceptions.html#AssertionError)                                           |
| [`Table.bulk_fetch_data_revision_history()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_data_revision_history)                                                                | Raised [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                           |
| [`Table.bulk_fetch_associated_records()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch_associated_records)                                                                      | Raised [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                           |
| [`Table.bulk_link_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_link_fetch)                                                                                                  | Raised [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                           |
| [`Table.bulk_fetch()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch)                                                                                                            | Silently ignored staged records                                                                                                       |
| [`Table.get_records_from_path()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.get_records_from_path)                                                                                      | Raised [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError) if the provided `starting_node` was a staged record |
| [`Table.path_from()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.path_from) and [`Table.paths_from()`](../streamlined_api/table.md#ansys.grantami.core.mi_tree_classes.Table.paths_from) | Raised [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError)      |
| [`Record.children`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.children)                                                                                                             | Raised [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError)                                                     |
| [`Record.refetch_children()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.refetch_children)                                                                                           | Raised [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError)                                                     |
| [`Record.refetch_pseudo_attributes()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.refetch_pseudo_attributes)                                                                         | Silently performed no action                                                                                                          |
| Pseudo-attribute properties on [`Record`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record)                                                                                                | Raised an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                        |
| [`Record.refresh_properties()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.refresh_properties)                                                                                       | Silently performed no action                                                                                                          |
| [`Record.refresh_path()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.refresh_path)                                                                                                   | Raised [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                           |
| [`Record.path`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.path)                                                                                                                     | Raised [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                           |
| [`Record.viewer_url`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.viewer_url)                                                                                                         | Raised [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                           |
| [`Record.get_descendants()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.get_descendants)                                                                                             | Raised [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError)      |
| [`Record.get_associated_records()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.get_associated_records)                                                                               | Raised [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                           |
| [`Record.move_to()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.move_to)                                                                                                             | Raised [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError)      |
| [`Record.refetch_record_release_state()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.refetch_record_release_state)                                                                   | Would set the release state to `Non-existent on server`                                                                               |
| [`Record.record_history`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.record_history)                                                                                                 | Raised [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                           |
| [`Record.release_state`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.release_state)                                                                                                   | Incorrectly returned [`None`](https://docs.python.org/3/library/constants.html#None)                                                  |
| [`Record.refetch_record_versions()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.refetch_record_versions)                                                                             | Raised [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError)                                                   |
| [`Record.all_versions`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.all_versions)                                                                                                     | Raised [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError)                                                   |
| [`Record.delete_or_withdraw_record_on_server()`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.delete_or_withdraw_record_on_server)                                                     | Raised [`AssertionError`](https://docs.python.org/3/library/exceptions.html#AssertionError)                                           |
| [`Record.data_revision_history`](../streamlined_api/record.md#ansys.grantami.core.mi_record_classes.Record.data_revision_history)                                                                                   | Raised [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)                                           |
