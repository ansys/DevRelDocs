# Tabular attribute value items

<a id="tabular-attribute-value-items"></a>

<a id="api-guide-misc-tabular-attribute-values"></a>

<a id="tabular-row"></a>

## Tabular row

<a id="id1"></a>

<a id="ansys.grantami.core.mi_attribute_value_classes.TabularRow"></a>

### *class* TabularRow

Represents a single row in a tabular attribute.

Provides access to the cells in the row, as well as the linking value and identifier of the row.

### Notes

Do not create instances of this class. Use [`AttributeTabular.rows`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.rows) to access existing rows and
[`AttributeTabular.append_row()`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.append_row) to create new rows.

<a id="ansys.grantami.core.mi_attribute_value_classes.TabularRow.set_linking_value"></a>

#### set_linking_value(value)

Sets the linking value of the row.

Set to [`None`](https://docs.python.org/3/library/constants.html#None) to clear the linking value. The row will no longer be linked to any records.

* **Parameters:**
  **value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* *None*) – The new linking value for the row.
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If [`is_exported`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.is_exported) is [`True`](https://docs.python.org/3/library/constants.html#True) and destructive editing is not enabled.

#### SEE ALSO
[`AttributeTabular.is_destructive_editing_allowed`](attribute-values.md#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.is_destructive_editing_allowed)
: Whether destructive editing of the tabular attribute value is allowed.

<a id="ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells"></a>

#### *property* cells *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[TabularCell](#ansys.grantami.core._mi_tabular_value_classes.TabularCell) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[TabularCell](#ansys.grantami.core._mi_tabular_value_classes.TabularCell), ...], ...]*

The cells in the row.

* **Return type:**
  [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[TabularCell](#ansys.grantami.core._mi_tabular_value_classes.TabularCell)]

<a id="ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column"></a>

#### *property* cells_by_column *: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping)[[str](https://docs.python.org/3/library/stdtypes.html#str), [TabularCell](#ansys.grantami.core._mi_tabular_value_classes.TabularCell) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[TabularCell](#ansys.grantami.core._mi_tabular_value_classes.TabularCell), ...]]*

The cells in the row, indexed by the column name.

* **Returns:**
  Mapping of column name to TabularCell.
* **Return type:**
  Mapping[[str](https://docs.python.org/3/library/stdtypes.html#str), [TabularCell](#ansys.grantami.core._mi_tabular_value_classes.TabularCell)]

<a id="ansys.grantami.core.mi_attribute_value_classes.TabularRow.identity"></a>

#### *property* identity *: [int](https://docs.python.org/3/library/functions.html#int)*

The identity of the row.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_attribute_value_classes.TabularRow.is_exported"></a>

#### *property* is_exported *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the row represents an existing row in the database.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.TabularRow.linking_value"></a>

#### *property* linking_value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The linking value of the row.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="linked-tabular-cells"></a>

## Linked tabular cells

<a id="tabular-cell"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.TabularCell"></a>

### *class* TabularCell

Abstract base class for tabular cell value types.

Extended by [`EditableTabularCell`](#ansys.grantami.core._mi_tabular_value_classes.EditableTabularCell).

See the following concrete implementations:

* [`ShortTextValue`](#ansys.grantami.core._mi_tabular_value_classes.ShortTextValue)
* [`LongTextValue`](#ansys.grantami.core._mi_tabular_value_classes.LongTextValue)
* [`LogicalValue`](#ansys.grantami.core._mi_tabular_value_classes.LogicalValue)
* [`IntegerValue`](#ansys.grantami.core._mi_tabular_value_classes.IntegerValue)
* [`DateValue`](#ansys.grantami.core._mi_tabular_value_classes.DateValue)
* [`PointValue`](#ansys.grantami.core._mi_tabular_value_classes.PointValue)
* [`RangeValue`](#ansys.grantami.core._mi_tabular_value_classes.RangeValue)
* [`HyperlinkValue`](#ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue)
* [`DiscreteValue`](#ansys.grantami.core._mi_tabular_value_classes.DiscreteValue)
* [`PictureValue`](#ansys.grantami.core._mi_tabular_value_classes.PictureValue)
* [`FileValue`](#ansys.grantami.core._mi_tabular_value_classes.FileValue)
* [`IgnoredLocalTabularCell`](#ansys.grantami.core._mi_tabular_value_classes.IgnoredLocalTabularCell)
* [`UnavailableTabularCell`](#ansys.grantami.core._mi_tabular_value_classes.UnavailableTabularCell)

<a id="short-text-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.ShortTextValue"></a>

### *class* ShortTextValue

Represents a single short text value in a linked short text tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.ShortTextValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.ShortTextValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Text value associated with this tabular cell.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="long-text-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LongTextValue"></a>

### *class* LongTextValue

Represents a single long text value in a linked long text tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LongTextValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LongTextValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Text value associated with this tabular cell.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="logical-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LogicalValue"></a>

### *class* LogicalValue

Represents a single logical value in a linked logical tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LogicalValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LogicalValue.value"></a>

#### *property* value *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Logical value associated with this tabular cell.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool) or None

<a id="integer-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.IntegerValue"></a>

### *class* IntegerValue

Represents a single integer value in a linked integer tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.IntegerValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.IntegerValue.value"></a>

#### *property* value *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Integer value associated with this cell.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) or None

<a id="date-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.DateValue"></a>

### *class* DateValue

Represents a single date value in a linked date tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.DateValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.DateValue.value"></a>

#### *property* value *: [date](https://docs.python.org/3/library/datetime.html#datetime.date) | [None](https://docs.python.org/3/library/constants.html#None)*

Date value associated with this tabular cell.

* **Return type:**
  [`datetime.date`](https://docs.python.org/3/library/datetime.html#datetime.date) or None

<a id="picture-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.PictureValue"></a>

### *class* PictureValue

Represents a picture value in a linked picture tabular cell.

### Notes

Tabular Picture Cells only support a single binary data value, together with an optional URL and MIME file type.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.PictureValue.save"></a>

#### save(path)

Save binary data to disk.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – File path where the binary data will be saved.
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If path is not a string or pathlib.Path.
  * [**AssertionError**](https://docs.python.org/3/library/exceptions.html#AssertionError) – If the value is empty.

<a id="ansys.grantami.core._mi_tabular_value_classes.PictureValue.binary_data"></a>

#### *property* binary_data *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

Binary data associated with this tabular cell.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None
* **Raises:**
  [**UnexportedBinaryDataError**](exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) – If binary data is available on the server but was not exported.

<a id="ansys.grantami.core._mi_tabular_value_classes.PictureValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.PictureValue.mime_file_type"></a>

#### *property* mime_file_type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MIME (Multipurpose Internet Mail Extensions) file type.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.PictureValue.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL associated with this tabular cell.

In a future version this property will raise an exception if the attribute is exported with
`include_binary_data = True`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.PictureValue.value"></a>

#### *property* value *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

Binary data if present.

In a future version this property will return the URL if the attribute is exported with
`include_binary_data = False`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None

<a id="file-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.FileValue"></a>

### *class* FileValue

Represents a file data value in a linked file tabular cell.

### Notes

Tabular File Cells support a single binary data value and a file name, together with an optional description,
URL, and MIME file type.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.FileValue.save"></a>

#### save(path)

Save binary data to disk.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – File path where the binary data will be saved.
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If path is not a string or pathlib.Path.
  * [**AssertionError**](https://docs.python.org/3/library/exceptions.html#AssertionError) – If the value is empty.

<a id="ansys.grantami.core._mi_tabular_value_classes.FileValue.binary_data"></a>

#### *property* binary_data *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

Binary data associated with this tabular cell.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None
* **Raises:**
  [**UnexportedBinaryDataError**](exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) – If binary data is available on the server but was not exported.

<a id="ansys.grantami.core._mi_tabular_value_classes.FileValue.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Description of the file.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.FileValue.file_name"></a>

#### *property* file_name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Name of the file, including the file extension.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.FileValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.FileValue.mime_file_type"></a>

#### *property* mime_file_type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MIME (Multipurpose Internet Mail Extensions) file type.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.FileValue.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL associated with this tabular cell.

In a future version this property will raise an exception if the attribute is exported with
`include_binary_data = True`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.FileValue.value"></a>

#### *property* value *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

Binary data if present.

In a future version this property will return the URL if the attribute is exported with
`include_binary_data = False`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None

<a id="point-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.PointValue"></a>

### *class* PointValue

Represents a single point value in a linked point tabular cell.

### Notes

Tabular Point Cells only support a single value and an optional unit.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.PointValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.PointValue.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol of the tabular cell.

* **Returns:**
  Unit symbol, or [`None`](https://docs.python.org/3/library/constants.html#None) if the cell is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.PointValue.value"></a>

#### *property* value *: [int](https://docs.python.org/3/library/functions.html#int) | [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Point value associated with this cell.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float) or None

<a id="range-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.RangeValue"></a>

### *class* RangeValue

Represents a range value in a linked range tabular cell.

### Notes

Tabular Range Cells support a low and high value, both of which can be inclusive or exclusive, together with an
optional unit.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.RangeValue.high"></a>

#### *property* high *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

High value of the range.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.RangeValue.high_value_is_inclusive"></a>

#### *property* high_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the high value is included in the range.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.RangeValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.RangeValue.low"></a>

#### *property* low *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Low value of the range.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.RangeValue.low_value_is_inclusive"></a>

#### *property* low_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the low value is included in the range.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.RangeValue.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol of the tabular cell.

* **Returns:**
  Unit symbol, or [`None`](https://docs.python.org/3/library/constants.html#None) if the cell is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="discrete-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.DiscreteValue"></a>

### *class* DiscreteValue

Represents a single discrete value in a linked discrete tabular cell.

### Notes

Tabular Discrete Cells only support a single value and an order, which is the index of the value in the list of
possible discrete values for the column. This does not imply that the associated discrete type is ordered.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.DiscreteValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.DiscreteValue.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Position of the current discrete value in the discrete type.

* **Returns:**
  Position (1-indexed) in the discrete type. Relevant for ordered discrete types only.
* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.DiscreteValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Discrete value associated with this tabular cell.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="hyperlink-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue"></a>

### *class* HyperlinkValue

Represents a hyperlink value in a linked hyperlink tabular cell.

### Notes

Tabular Hyperlink Cells support a value, a display type, and a description.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue.hyperlink_description"></a>

#### *property* hyperlink_description *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Text which displays instead of the URL in MI applications.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue.hyperlink_display"></a>

#### *property* hyperlink_display *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

How the hyperlink should be opened in MI applications.

Takes one of the following values:

* `New`: Open in a new window or tab.
* `Top`: Open in the current window or tab.
* `Content`: Open within the current MI application (for example, in a frame or dialog).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL of the hyperlink.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="local-tabular-cells"></a>

## Local tabular cells

<a id="editable-cell"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.EditableTabularCell"></a>

### *class* EditableTabularCell

Abstract base class for editable tabular cell value types.

See the following concrete implementations:

* [`LocalShortTextValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalShortTextValue)
* [`LocalLongTextValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalLongTextValue)
* [`LocalLogicalValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalLogicalValue)
* [`LocalIntegerValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalIntegerValue)
* [`LocalDateValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalDateValue)
* [`LocalPointValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalPointValue)
* [`LocalRangeValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue)
* [`LocalHyperlinkValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue)
* [`LocalDiscreteValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalDiscreteValue)
* [`LocalPictureValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue)
* [`LocalFileValue`](#ansys.grantami.core._mi_tabular_value_classes.LocalFileValue)

<a id="local-short-text-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalShortTextValue"></a>

### *class* LocalShortTextValue

Represents a single short text value in a local short text tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalShortTextValue.clear"></a>

#### clear()

Clear the `value` property.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalShortTextValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalShortTextValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Text value associated with this tabular cell.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="local-long-text-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalLongTextValue"></a>

### *class* LocalLongTextValue

Represents a single long text value in a local long text tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalLongTextValue.clear"></a>

#### clear()

Clear the `value` property.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalLongTextValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalLongTextValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Text value associated with this tabular cell.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="local-logical-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalLogicalValue"></a>

### *class* LocalLogicalValue

Represents a single logical value in a local logical tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalLogicalValue.clear"></a>

#### clear()

Clear the `value` property.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalLogicalValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalLogicalValue.value"></a>

#### *property* value *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Logical value associated with this tabular cell.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool) or None

<a id="local-integer-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalIntegerValue"></a>

### *class* LocalIntegerValue

Represents a single integer value in a local integer tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalIntegerValue.clear"></a>

#### clear()

Clear the `value` property.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalIntegerValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalIntegerValue.value"></a>

#### *property* value *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Integer value associated with this cell.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) or None

<a id="local-date-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDateValue"></a>

### *class* LocalDateValue

Represents a single date value in a local date tabular cell.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDateValue.clear"></a>

#### clear()

Clear the `value` property.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDateValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDateValue.value"></a>

#### *property* value *: [date](https://docs.python.org/3/library/datetime.html#datetime.date) | [None](https://docs.python.org/3/library/constants.html#None)*

Date value associated with this tabular cell.

* **Return type:**
  [`datetime.date`](https://docs.python.org/3/library/datetime.html#datetime.date) or None

<a id="local-picture-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue"></a>

### *class* LocalPictureValue

Represents a picture value in a local picture tabular cell.

### Notes

Tabular Picture Cells only support a single binary data value, together with an optional URL and MIME file type.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.clear"></a>

#### clear()

Clear the `binary_data`, `url`, and `mime_file_type` properties.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.load"></a>

#### load(path)

Load an image file into this PictureValue object.

* **Parameters:**
  **path** ([*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *or* [*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Path to the image file to load. Relative paths are permitted. Takes the form
  `C:\Users\username\Pictures\image.jpg` or `/home/username/Pictures/image.jpg`.
* **Raises:**
  [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If path is not a pathlib.Path or string.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.save"></a>

#### save(path)

Save binary data to disk.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – File path where the binary data will be saved.
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If path is not a string or pathlib.Path.
  * [**AssertionError**](https://docs.python.org/3/library/exceptions.html#AssertionError) – If the value is empty.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.binary_data"></a>

#### *property* binary_data *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

Binary data associated with this tabular cell.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None
* **Raises:**
  [**UnexportedBinaryDataError**](exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) – If binary data is available on the server but was not exported.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.mime_file_type"></a>

#### *property* mime_file_type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MIME (Multipurpose Internet Mail Extensions) file type.

If this object is populated via export, the `mime_file_type` property returns the MIME file type stored in
Granta MI.

If this object is populated via [`load()`](#ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.load), or setting [`binary_data`](#ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.binary_data) or [`value`](#ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.value), the
`mime_file_type` property is populated using the `filetype` library. If `filetype` cannot determine the
MIME file type, the `mime_file_type` property is set to [`None`](https://docs.python.org/3/library/constants.html#None) and Granta MI determines the MIME file
type during import.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The [filetype PyPI page](https://pypi.org/project/filetype) lists supported MIME types.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL associated with this tabular cell.

In a future version this property will raise an exception if the attribute is exported with
`include_binary_data = True`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPictureValue.value"></a>

#### *property* value *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

Binary data if present.

In a future version this property will return the URL if the attribute is exported with
`include_binary_data = False`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None

<a id="local-file-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue"></a>

### *class* LocalFileValue

Represents a file data value in a local tabular cell.

### Notes

Tabular File Cells support a single binary data value and a file name, together with an optional description, URL,
and MIME file type.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.clear"></a>

#### clear()

Clear the `binary_data`, `url`, `mime_file_type`, `file_name`, and `description` properties.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.load"></a>

#### load(path)

Load a file into this FileValue object.

* **Parameters:**
  **path** ([*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *or* [*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Path to the file to load. Relative paths are permitted. Takes the form
  `C:\Users\username\Documents\file.pdf` or `/home/username/Documents/file.pdf`.
* **Raises:**
  [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If path is not a pathlib.Path or string.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.save"></a>

#### save(path)

Save binary data to disk.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – File path where the binary data will be saved.
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If path is not a string or pathlib.Path.
  * [**AssertionError**](https://docs.python.org/3/library/exceptions.html#AssertionError) – If the value is empty.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.binary_data"></a>

#### *property* binary_data *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

Binary data associated with this tabular cell.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None
* **Raises:**
  [**UnexportedBinaryDataError**](exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) – If binary data is available on the server but was not exported.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Description of the file.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.file_name"></a>

#### *property* file_name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Name of the file, including the file extension.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.mime_file_type"></a>

#### *property* mime_file_type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MIME (Multipurpose Internet Mail Extensions) file type.

If this object is populated via export, the `mime_file_type` property returns the MIME file type stored in
Granta MI.

If this object is populated via [`load()`](#ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.load), or setting [`binary_data`](#ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.binary_data) or [`value`](#ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.value), the
`mime_file_type` property is populated using the `filetype` library. If `filetype` cannot determine the
MIME file type, the `mime_file_type` property is set to [`None`](https://docs.python.org/3/library/constants.html#None) and Granta MI determines the MIME file
type during import.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The [filetype PyPI page](https://pypi.org/project/filetype) lists supported MIME types.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL associated with this tabular cell.

In a future version this property will raise an exception if the attribute is exported with
`include_binary_data = True`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalFileValue.value"></a>

#### *property* value *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

Binary data if present.

In a future version this property will return the URL if the attribute is exported with
`include_binary_data = False`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None

<a id="local-point-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPointValue"></a>

### *class* LocalPointValue

Represents a single point value in a local point tabular cell.

### Notes

Tabular Point Cells only support a single value and an optional unit. This class also exposes the default unit based
on the column definition.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPointValue.clear"></a>

#### clear()

Clear the `value` property.

Revert the `unit` property its default value.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPointValue.default_unit"></a>

#### *property* default_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Default unit symbol of the tabular cell.

* **Returns:**
  Default unit symbol as defined by the column, or [`None`](https://docs.python.org/3/library/constants.html#None) if the column is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPointValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPointValue.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol of the tabular cell.

* **Returns:**
  Unit symbol, or [`None`](https://docs.python.org/3/library/constants.html#None) if the cell is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalPointValue.value"></a>

#### *property* value *: [int](https://docs.python.org/3/library/functions.html#int) | [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Point value associated with this cell.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float) or None

<a id="local-range-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue"></a>

### *class* LocalRangeValue

Represents a range value in a local range tabular cell.

### Notes

Tabular Range Cells support a low and high value, both of which can be inclusive or exclusive, together with an
optional unit. This class also exposes the default unit based on the column definition.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue.clear"></a>

#### clear()

Clear the `low` and `high` properties.

Revert `low_value_is_inclusive`, `high_value_is_inclusive`, and `unit` properties to their default values.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue.default_unit"></a>

#### *property* default_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Default unit symbol of the tabular cell.

* **Returns:**
  Default unit symbol as defined on the column, or [`None`](https://docs.python.org/3/library/constants.html#None) if the column is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue.high"></a>

#### *property* high *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

High value of the range.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue.high_value_is_inclusive"></a>

#### *property* high_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the high value is included in the range.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue.low"></a>

#### *property* low *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Low value of the range.

* **Return type:**
  [float](https://docs.python.org/3/library/functions.html#float) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue.low_value_is_inclusive"></a>

#### *property* low_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the low value is included in the range.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalRangeValue.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol of the tabular cell.

* **Returns:**
  Unit symbol, or [`None`](https://docs.python.org/3/library/constants.html#None) if the cell is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="local-discrete-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDiscreteValue"></a>

### *class* LocalDiscreteValue

Represents a single discrete value in a local discrete tabular cell.

### Notes

Tabular Discrete Cells only support a single value and an order, which is the index of the value in the list of
possible discrete values for the column. This does not imply that the associated discrete type is ordered. This
class also exposes the possible discrete values based on the column definition.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDiscreteValue.clear"></a>

#### clear()

Clear the `value` property.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDiscreteValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDiscreteValue.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Position of the current discrete value in the discrete type.

* **Returns:**
  Position (1-indexed) in the discrete type. Relevant for ordered discrete types only.
* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDiscreteValue.possible_discrete_values"></a>

#### *property* possible_discrete_values *: [FrozenSet](https://docs.python.org/3/library/typing.html#typing.FrozenSet)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Set of the tabular cell’s possible discrete data values.

* **Return type:**
  FrozenSet[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalDiscreteValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Discrete value associated with this tabular cell.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="local-hyperlink-value"></a>

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue"></a>

### *class* LocalHyperlinkValue

Represents a hyperlink value in a local hyperlink tabular cell.

### Notes

Tabular Hyperlink Cells support a value, a display text, and a description.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) to access an instance of this class.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.clear"></a>

#### clear()

Clear the `value`, `hyperlink_display`, and `hyperlink_description` properties.

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.hyperlink_description"></a>

#### *property* hyperlink_description *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Text which displays instead of the URL in MI applications.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.hyperlink_display"></a>

#### *property* hyperlink_display *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

How the hyperlink should be opened in MI applications.

Takes one of the following values:

* `New`: Open in a new window or tab.
* `Top`: Open in the current window or tab.
* `Content`: Open within the current MI application (for example, in a frame or dialog).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.is_empty"></a>

#### *property* is_empty *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular cell is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core._mi_tabular_value_classes.LocalHyperlinkValue.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL of the hyperlink.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="miscellaneous-tabular-cells"></a>

## Miscellaneous tabular cells

<a id="ansys.grantami.core._mi_tabular_value_classes.IgnoredLocalTabularCell"></a>

### *class* IgnoredLocalTabularCell

Represents a tabular cell that has been marked as ignored.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Instances of this class
are returned by [`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) for ignored local columns.

#### SEE ALSO
[`AttributeDefinitionTabular.columns_to_process`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.columns_to_process)
: Specify ignored columns before data export.

<a id="ansys.grantami.core._mi_tabular_value_classes.UnavailableTabularCell"></a>

### *class* UnavailableTabularCell

Represents a cell that was not available for export.

### Notes

This cell type is used when the presence of data could not be determined definitively,
for example due to a missing target database.

Do not create instances of this class; it represents a pre-existing database structure. Instances of this class
are returned by [`TabularRow.cells`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells) or [`TabularRow.cells_by_column`](#ansys.grantami.core.mi_attribute_value_classes.TabularRow.cells_by_column) for unavailable columns.
