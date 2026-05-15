# Attribute values

<a id="attribute-values"></a>

<!-- from ansys.grantami.backend.mock.docs.attribute_values import (
    multivalued_point_attribute,
) -->

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue"></a>

### *class* AttributeValue

Stores and provides access to attribute data values.

The attributes in a [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) are represented in the MI Scripting Toolkit by [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)
objects, with an associated [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) object containing the attribute’s data.
[`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) is the base class, and each attribute type has a specialised class that inherits from it.

### Notes

Do not create instances of this class; it represents an abstract database structure.

The ‘Notes’ field, available for all attributes, is a property of the update operation. Use the
[`update()`](session.md#ansys.grantami.core.mi.Session.update) `notes` argument to provide revision notes.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.definition"></a>

#### *property* definition *: [AttributeDefinition](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)*

The attribute definition associated with this attribute value.

* **Return type:**
  [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.id"></a>

#### *property* id *: [int](https://docs.python.org/3/library/functions.html#int)*

Attribute identifier.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the attribute is applicable to the current record.

Setting this to [`False`](https://docs.python.org/3/library/constants.html#False) will clear any data values on the attribute on import.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)
* **Raises:**
  [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If attempting to set a non-boolean value.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_meta"></a>

#### *property* is_meta *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the attribute is a meta-attribute.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_meta_for"></a>

#### *property* is_meta_for *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Name of the parent attribute.

* **Returns:**
  Name of the parent attribute, or [`None`](https://docs.python.org/3/library/constants.html#None) if not a meta-attribute.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.meta_attributes"></a>

#### *property* meta_attributes *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [AttributeValue](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue)]*

Meta-attributes associated with this attribute.

Does not make calls to the Service Layer.

* **Return type:**
  dict[str, [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Attribute name.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.record"></a>

#### *property* record *: [Record](record.md#ansys.grantami.core.mi_record_classes.Record)*

Record in which the attribute value is defined.

* **Return type:**
  [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the AttributeValue is not associated with a record.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.type"></a>

#### *property* type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Attribute data type, as a four-character string.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

### Notes

* Numeric attributes: `POIN` (point), `RNGE` (range), `INPT` (integer).
* Text attributes: `STXT` (short text), `LTXT` (long text), `DISC` (discrete).
* Functional attributes: `FUNC` (float functional).
* Media attributes: `HLNK` (hyperlink), `PICT` (picture), `FILE` (file).
* Other attributes: `LOGI` (logical), `DTTM` (date time), `TABL` (tabular).

`DSFN` and `MAFN` data values are not supported by the MI Scripting Toolkit, and appear as UNSUPPORTED DATA
TYPE.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeValue.value"></a>

#### *abstract property* value *: [Any](https://docs.python.org/3/library/typing.html#typing.Any)*

Current value of the attribute.

Can be modified.

* **Return type:**
  Any

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeBinary"></a>

### *class* AttributeBinary

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class to handle [`BinaryType`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType) objects as attribute data values.

Base class for [`AttributePicture`](#ansys.grantami.core.mi_attribute_value_classes.AttributePicture) and [`AttributeFile`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFile).

### Notes

Do not create instances of this class; it represents an abstract database structure.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeBinary.is_empty"></a>

#### is_empty()

Checks if the [`BinaryType`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType) object is populated by checking if it contains any binary data.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeBinary.binary_data"></a>

#### *property* binary_data *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

The binary data for the file.

Binary data can be set with a bytes object or file buffer.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If binary data is available on the server but has not been exported.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeBinary.mime_file_type"></a>

#### *property* mime_file_type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MIME (Multipurpose Internet Mail Extensions) file type.

If this object is populated via export, the `mime_file_type` property returns the MIME file type stored in
Granta MI.

Setting this attribute value (via either `.load()`, setting the [`binary_data`](#ansys.grantami.core.mi_attribute_value_classes.AttributeBinary.binary_data) property, or
setting the underlying `.object.binary_data`) will update the `mime_file_type` property using the
`filetype` library. If `filetype` cannot determine the MIME file type, the `mime_file_type` property is
set to [`None`](https://docs.python.org/3/library/constants.html#None) and Granta MI determines the MIME file type during import.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The [filetype PyPI page](https://pypi.org/project/filetype) lists supported MIME types.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeBinary.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL of the hosted file.

In a future version this property will raise an exception if the attribute is exported with
`include_binary_data = True`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Returns:**
  URL to the file stored in the parent Granta MI attribute, or [`None`](https://docs.python.org/3/library/constants.html#None) if the URL was not populated.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The data can be retrieved by using a Python HTTP library (e.g. Requests, HTTPX) and by supplying the
appropriate authentication for your Granta MI server.

To populate this property, the [`Table.bulk_fetch()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) method must be used with
`include_binary_data = False` (default). If `include_binary_data = True` is specified, or if the attribute
is fetched on-demand by accessing the `attributes` dictionary without performing a bulk fetch, this property
will always return [`None`](https://docs.python.org/3/library/constants.html#None).

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeBinary.value"></a>

#### *property* value *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

The binary data of the hosted file, if exported.

* **Return type:**
  bytes or [`None`](https://docs.python.org/3/library/constants.html#None)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If binary data is available on the server but has not been exported. In the next release, this behavior will
      be deprecated. A later release will not raise an exception if the attribute is exported with
      `include_binary_data = False`. Instead, the URL will be returned if the attribute is populated. See
      [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePicture"></a>

### *class* AttributePicture

Extended [`AttributeBinary`](#ansys.grantami.core.mi_attribute_value_classes.AttributeBinary) class for handling [`Picture`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.Picture) objects.

Provides access to [`Picture`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.Picture) save/load methods.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

Pictures of up to 500 MB in size may be stored in Granta MI databases. To upload pictures larger than 20 Mb using
Scripting Toolkit:

* Granta MI Service Layer must be configured to allow large requests. If this is not configured,
  [`Session.update()`](session.md#ansys.grantami.core.mi.Session.update) will raise a [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError) for a “413 Request Entity Too Large” HTTP
  response. For more information, contact your Ansys Technical Representative.
* The Python client environment must have sufficient system resources to load and Base64-encode the binary data. If
  there are insufficient system resources, unhandled Python exceptions may be raised.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePicture.is_empty"></a>

#### is_empty()

Checks if the [`BinaryType`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType) object is populated by checking if it contains any binary data.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePicture.load"></a>

#### load(path)

Wraps the [`Picture.load()`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.Picture.load) method (populates the [`Picture`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.Picture) object with the specified image file).

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path to the image file to load.
  Takes the form `C:\\Users\\yourname\\Pictures\\image.jpg` or
  `/home/username/Pictures/image.jpg`.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePicture.save"></a>

#### save(path)

Wraps the [`Picture.save()`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.Picture.save) method.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path where the image should be saved.
  Takes the form `C:\\Users\\yourname\\Pictures\\image.jpg` or
  `/home/username/Pictures/image.jpg`.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePicture.binary_data"></a>

#### *property* binary_data *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

The binary data for the file.

Binary data can be set with a bytes object or file buffer.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If binary data is available on the server but has not been exported.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePicture.mime_file_type"></a>

#### *property* mime_file_type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MIME (Multipurpose Internet Mail Extensions) file type.

If this object is populated via export, the `mime_file_type` property returns the MIME file type stored in
Granta MI.

Setting this attribute value (via either `.load()`, setting the [`binary_data`](#ansys.grantami.core.mi_attribute_value_classes.AttributePicture.binary_data) property, or
setting the underlying `.object.binary_data`) will update the `mime_file_type` property using the
`filetype` library. If `filetype` cannot determine the MIME file type, the `mime_file_type` property is
set to [`None`](https://docs.python.org/3/library/constants.html#None) and Granta MI determines the MIME file type during import.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The [filetype PyPI page](https://pypi.org/project/filetype) lists supported MIME types.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePicture.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL of the hosted file.

In a future version this property will raise an exception if the attribute is exported with
`include_binary_data = True`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Returns:**
  URL to the file stored in the parent Granta MI attribute, or [`None`](https://docs.python.org/3/library/constants.html#None) if the URL was not populated.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The data can be retrieved by using a Python HTTP library (e.g. Requests, HTTPX) and by supplying the
appropriate authentication for your Granta MI server.

To populate this property, the [`Table.bulk_fetch()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) method must be used with
`include_binary_data = False` (default). If `include_binary_data = True` is specified, or if the attribute
is fetched on-demand by accessing the `attributes` dictionary without performing a bulk fetch, this property
will always return [`None`](https://docs.python.org/3/library/constants.html#None).

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePicture.value"></a>

#### *property* value *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

The binary data of the hosted file, if exported.

* **Return type:**
  bytes or [`None`](https://docs.python.org/3/library/constants.html#None)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If binary data is available on the server but has not been exported. In the next release, this behavior will
      be deprecated. A later release will not raise an exception if the attribute is exported with
      `include_binary_data = False`. Instead, the URL will be returned if the attribute is populated. See
      [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile"></a>

### *class* AttributeFile

Extended [`AttributeBinary`](#ansys.grantami.core.mi_attribute_value_classes.AttributeBinary) class to handle [`File`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.File) objects.

Provides access to [`File`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.File) object save/load methods, file name, and description.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

Files of up to 500 MB in size may be stored in Granta MI databases. To upload files larger than 20 Mb using
Scripting Toolkit:

* Granta MI Service Layer must be configured to allow large requests. If this is not configured,
  [`Session.update()`](session.md#ansys.grantami.core.mi.Session.update) will raise a [`GRANTA_ServiceLayerError`](../foundation_api.md#ansys.grantami.backend.soap.GRANTA_Exceptions.GRANTA_ServiceLayerError) for a “413 Request Entity Too Large” HTTP
  response. For more information, contact your Ansys Technical Representative.
* The Python client environment must have sufficient system resources to load and Base64-encode the binary data. If
  there are insufficient system resources, unhandled Python exceptions may be raised.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile.is_empty"></a>

#### is_empty()

Checks if the [`BinaryType`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.BinaryType) object is populated by checking if it contains any binary data.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile.load"></a>

#### load(path)

Wraps the [`File.load()`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.File.load) method (populates the [`File`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.File) object with the specified file).

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path to the file to be imported.
  Takes the form `C:\\Users\\yourname\\Documents\\file.pdf` or
  `/home/username/Documents/file.pdf`.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile.save"></a>

#### save(path)

Wraps the [`File.save()`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.File.save) method.

* **Parameters:**
  **path** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *or* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path)) – Path where the file should be saved.
  Takes the form `C:\\Users\\yourname\\Documents\\file.pdf` or
  `/home/username/Documents/file.pdf`.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile.binary_data"></a>

#### *property* binary_data *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

The binary data for the file.

Binary data can be set with a bytes object or file buffer.

* **Return type:**
  [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) or None
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If binary data is available on the server but has not been exported.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile.description"></a>

#### *property* description *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Description of the file displayed in MI applications.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) | None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile.file_name"></a>

#### *property* file_name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the file associated with the [`File`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.File) object.

Displayed in MI applications.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile.mime_file_type"></a>

#### *property* mime_file_type *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

MIME (Multipurpose Internet Mail Extensions) file type.

If this object is populated via export, the `mime_file_type` property returns the MIME file type stored in
Granta MI.

Setting this attribute value (via either `.load()`, setting the [`binary_data`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFile.binary_data) property, or
setting the underlying `.object.binary_data`) will update the `mime_file_type` property using the
`filetype` library. If `filetype` cannot determine the MIME file type, the `mime_file_type` property is
set to [`None`](https://docs.python.org/3/library/constants.html#None) and Granta MI determines the MIME file type during import.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The [filetype PyPI page](https://pypi.org/project/filetype) lists supported MIME types.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile.url"></a>

#### *property* url *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

URL of the hosted file.

In a future version this property will raise an exception if the attribute is exported with
`include_binary_data = True`. See [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

* **Returns:**
  URL to the file stored in the parent Granta MI attribute, or [`None`](https://docs.python.org/3/library/constants.html#None) if the URL was not populated.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

### Notes

The data can be retrieved by using a Python HTTP library (e.g. Requests, HTTPX) and by supplying the
appropriate authentication for your Granta MI server.

To populate this property, the [`Table.bulk_fetch()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) method must be used with
`include_binary_data = False` (default). If `include_binary_data = True` is specified, or if the attribute
is fetched on-demand by accessing the `attributes` dictionary without performing a bulk fetch, this property
will always return [`None`](https://docs.python.org/3/library/constants.html#None).

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFile.value"></a>

#### *property* value *: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [None](https://docs.python.org/3/library/constants.html#None)*

The binary data of the hosted file, if exported.

* **Return type:**
  bytes or [`None`](https://docs.python.org/3/library/constants.html#None)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If binary data is available on the server but has not been exported. In the next release, this behavior will
      be deprecated. A later release will not raise an exception if the attribute is exported with
      `include_binary_data = False`. Instead, the URL will be returned if the attribute is populated. See
      [Planned file and picture data changes](../release_notes/deprecations.md#planned-changes-file-picture) for more details.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDate"></a>

### *class* AttributeDate

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for date attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDate.value"></a>

#### *property* value *: [date](https://docs.python.org/3/library/datetime.html#datetime.date) | [None](https://docs.python.org/3/library/constants.html#None)*

Return the value of the date attribute as a [`datetime.date`](https://docs.python.org/3/library/datetime.html#datetime.date) object.

Can be modified. Use [`datetime.date.fromisoformat()`](https://docs.python.org/3/library/datetime.html#datetime.date.fromisoformat) to create a date object from a string before
assigning to this property.

* **Return type:**
  [datetime.date](https://docs.python.org/3/library/datetime.html#datetime.date) or None
* **Raises:**
  [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a non-date value.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete"></a>

### *class* AttributeDiscrete

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for discrete attributes.

Base class for [`AttributeDiscreteSingle`](#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle) and [`AttributeDiscreteMulti`](#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti).

### Notes

Do not create instances of this class; it represents an abstract database structure.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete.is_multivalued"></a>

#### *property* is_multivalued *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether this attribute allows multiple values to be set.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete.possible_discrete_values"></a>

#### *property* possible_discrete_values *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

List of the attribute’s possible discrete data values.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle"></a>

### *class* AttributeDiscreteSingle

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for discrete attributes.

Provides access to the attribute’s data value as a string, and the order.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle.order"></a>

#### *property* order *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Position of the current discrete value in the discrete type.

Relevant for ordered discrete types. Read-only property. Index starts at 1.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteSingle.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Discrete value associated with this attribute.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a non-string value.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the value is not in the list of possible discrete values.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti"></a>

### *class* AttributeDiscreteMulti

Extended [`AttributeDiscrete`](#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscrete) class for multivalued discrete attributes.

Provides access to the tuple of strings that store the attribute’s data values, and their order.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

[`AttributeDiscreteMulti`](#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti) objects are empty if [`AttributeDiscreteMulti.value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti.value) is [`None`](https://docs.python.org/3/library/constants.html#None) or an
empty tuple.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti.order"></a>

#### *property* order *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int)] | [None](https://docs.python.org/3/library/constants.html#None)*

Positions of the current discrete values in the discrete type.

Relevant for ordered discrete types. Read-only property. Index starts at 1.

* **Return type:**
  [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int)] or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeDiscreteMulti.value"></a>

#### *property* value *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str)] | [None](https://docs.python.org/3/library/constants.html#None)*

Discrete value(s) associated with this attribute.

To set to a single value, use a tuple with one item, such as `('item',)`.

* **Return type:**
  [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str)] or None
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a string, a non-tuple value, or if any element in the tuple is not a string.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If one or more values are not in the list of possible discrete values.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink"></a>

### *class* AttributeHyperlink

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for hyperlink attributes.

Provides access to the `hyperlink_description` and `hyperlink_display` text properties.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_description"></a>

#### *property* hyperlink_description *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Text which displays instead of the URL in MI applications.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.hyperlink_display"></a>

#### *property* hyperlink_display *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Indicates how the hyperlink should be opened when clicked on in MI applications.

Takes one of the following values:

* `New`: Open in a new window or tab.
* `Top`: Open in the current window or tab.
* `Content`: Open within the current MI application (for example, in a frame or dialog).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If providing an invalid hyperlink display style.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeHyperlink.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the URL as a string, or None if unset.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeInteger"></a>

### *class* AttributeInteger

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for integer attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeInteger.value"></a>

#### *property* value *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Current value of the attribute.

Can be modified.

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int) or None
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a non-integer value.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the value is too large (must be between -2,147,483,648 and 2,147,483,647).

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeLogical"></a>

### *class* AttributeLogical

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for logical attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeLogical.value"></a>

#### *property* value *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Current value of the attribute.

Can be modified.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePoint"></a>

### *class* AttributePoint

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for point data attributes.

Base class for [`AttributePointSingle`](#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle) and [`AttributePointMulti`](#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti).

### Notes

Do not create instances of this class; it represents an abstract database structure.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePoint.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the value has been estimated.

Defaults to [`False`](https://docs.python.org/3/library/constants.html#False) for new attribute values.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePoint.is_multivalued"></a>

#### *property* is_multivalued *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether this attribute allows multiple values to be set.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle"></a>

### *class* AttributePointSingle

Extended [`AttributePoint`](#ansys.grantami.core.mi_attribute_value_classes.AttributePoint) class for single-valued point data attributes.

Provides access to the single scalar value.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.set_value"></a>

#### set_value(value)

Sets the attribute value.

This method is an alternative to setting the [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.value) property directly. It accepts any object that
implements the [`SupportsFloat`](https://docs.python.org/3/library/typing.html#typing.SupportsFloat) protocol and sets the attribute value to the result of the
conversion of the input value to a float.

* **Parameters:**
  **value** ([`SupportsFloat`](https://docs.python.org/3/library/typing.html#typing.SupportsFloat)) – Value to set.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.default_unit"></a>

#### *property* default_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Attribute database unit in the active unit system.

The unit used by MI Viewer or MI Explore to display this attribute in the active unit system. This
property is only affected by the unit system choice, and is not affected by [`Table.set_display_unit()`](table.md#ansys.grantami.core.mi_tree_classes.Table.set_display_unit).

* **Returns:**
  [`None`](https://docs.python.org/3/library/constants.html#None) if the attribute is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.trailing_zero_information"></a>

#### *property* trailing_zero_information *: [TrailingZeroInformation](supporting.md#ansys.grantami.core.mi_meta_classes.TrailingZeroInformation) | [None](https://docs.python.org/3/library/constants.html#None)*

Trailing zero information associated with the attribute value.

This property is only populated for exported attribute values which include trailing zero information. To
include trailing zero information in an attribute value during import with the Scripting Toolkit, use a
[`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) to set the [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.value).

* **Return type:**
  [`TrailingZeroInformation`](supporting.md#ansys.grantami.core.mi_meta_classes.TrailingZeroInformation) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol of the attribute.

Can be modified. [`None`](https://docs.python.org/3/library/constants.html#None) if the attribute is dimensionless.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointSingle.value"></a>

#### *property* value *: [float](https://docs.python.org/3/library/functions.html#float) | [int](https://docs.python.org/3/library/functions.html#int) | [ValueWithPrecision](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) | [None](https://docs.python.org/3/library/constants.html#None)*

Point values associated with this attribute.

* **Return type:**
  float or int or [`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) or None
* **Raises:**
  [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a value that is not a float, int, or [`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision).

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti"></a>

### *class* AttributePointMulti

Extended [`AttributePoint`](#ansys.grantami.core.mi_attribute_value_classes.AttributePoint) class for multi-valued point data attributes.

Multi-valued points are represented in the Streamlined API as tuples of [`ParameterizedPointValue`](supporting.md#ansys.grantami.core._mi_value_classes.ParameterizedPointValue) objects.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

[`AttributePointMulti`](#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti) objects are empty if [`AttributePointMulti.value`](#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.value) is [`None`](https://docs.python.org/3/library/constants.html#None) or an empty
tuple.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.set_value"></a>

#### set_value(values, parameters=None)

Sets the [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.value) to a tuple of [`ParameterizedPointValue`](supporting.md#ansys.grantami.core._mi_value_classes.ParameterizedPointValue) built from values and parameters.

Arguments `values` and `parameters` must be Sequences of equal lengths.

* **Parameters:**
  * **values** (Sequence[SupportsFloat | [`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision)]) – Point values.
  * **parameters** (*Sequence* *[**Mapping* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*str*](https://docs.python.org/3/library/stdtypes.html#str) *|* [*float*](https://docs.python.org/3/library/functions.html#float) *]* *] or* *None* *,* *optional*) – Parameter values for each point in values. If [`None`](https://docs.python.org/3/library/constants.html#None), values are set without parameter values.

### Examples

Attribute value without parameter values:

```pycon
>>> multivalued_point_attribute: AttributePointMulti
>>> multivalued_point_attribute.set_value([1.0, 2, 3.0])
>>> multivalued_point_attribute.value  
(ParameterizedPointValue(value=1.0, parameters=()),
ParameterizedPointValue(value=2.0, parameters=()),
ParameterizedPointValue(value=3.0, parameters=()))
```

Attribute value with parameter values for the first value only:

```pycon
>>> multivalued_point_attribute: AttributePointMulti
>>> multivalued_point_attribute.set_value([1.0, 2, 3.0], [{"Temperature": 25.0, "Statistical basis": "A-basis"}, {}, {}])
>>> multivalued_point_attribute.value  
(ParameterizedPointValue(value=1.0, parameters=(PointParameterValue(name='Temperature', value=25.0), PointParameterValue(name='Statistical basis', value='A-basis'))),
ParameterizedPointValue(value=2.0, parameters=()),
ParameterizedPointValue(value=3.0, parameters=()))
```

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.default_unit"></a>

#### *property* default_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Attribute database unit in the active unit system.

The unit used by MI Viewer or MI Explore to display this attribute in the active unit system. This
property is only affected by the unit system choice, and is not affected by [`Table.set_display_unit()`](table.md#ansys.grantami.core.mi_tree_classes.Table.set_display_unit).

* **Returns:**
  [`None`](https://docs.python.org/3/library/constants.html#None) if the attribute is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.parameters"></a>

#### *property* parameters *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [PointValueParameter](supporting.md#ansys.grantami.core.mi_attribute_value_classes.PointValueParameter)]*

Parameters associated with the point data attribute, indexed by name.

Modify the [`PointValueParameter.unit`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.PointValueParameter.unit) property on the returned objects to specify a different unit for
import.

* **Returns:**
  Read-only mapping of parameters
* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, [`PointValueParameter`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.PointValueParameter)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.points"></a>

#### *property* points *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), ...]*

Read-only view of point values currently set on the attribute value.

The returned value does not include parameter values and converts [`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) to float.

* **Return type:**
  [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float), …]

### Examples

For a multi-valued point attribute named `Modulus`, with parameters `Temperature` and `Statistical basis`:

```pycon
>>> multivalued_point_attribute: AttributePointMulti
>>> multivalued_point_attribute.value = (
...     ParameterizedPointValue(
...         value=1.0,
...         parameters=(
...             PointParameterValue("Temperature", 25.0),
...             PointParameterValue("Statistical basis", "A-basis"),
...         ),
...     ),
...     ParameterizedPointValue(value=2.0),
... )
>>> multivalued_point_attribute.points
(1.0, 2.0)
```

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.trailing_zero_information"></a>

#### *property* trailing_zero_information *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[TrailingZeroInformation](supporting.md#ansys.grantami.core.mi_meta_classes.TrailingZeroInformation) | [None](https://docs.python.org/3/library/constants.html#None), ...] | [None](https://docs.python.org/3/library/constants.html#None)*

Trailing zero information associated with the attribute value.

This property is only populated for exported attribute values which include trailing zero information. To
include trailing zero information in an attribute value during import with the Scripting Toolkit, use
[`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) in [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.value).

* **Return type:**
  [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[*TrailingZeroInformation*](supporting.md#ansys.grantami.core.mi_meta_classes.TrailingZeroInformation) | None] | None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol of the attribute.

Can be modified. [`None`](https://docs.python.org/3/library/constants.html#None) if the attribute is dimensionless.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributePointMulti.value"></a>

#### *property* value *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[ParameterizedPointValue](supporting.md#ansys.grantami.core._mi_value_classes.ParameterizedPointValue), ...]*

Point values associated with this attribute.

* **Return type:**
  [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[ParameterizedPointValue](supporting.md#ansys.grantami.core._mi_value_classes.ParameterizedPointValue), …]

### Examples

For a multi-valued point attribute named `Modulus`, with parameters `Temperature` and `Statistical basis`:

```pycon
>>> multivalued_point_attribute: AttributePointMulti
>>> multivalued_point_attribute.value = (
...     ParameterizedPointValue(
...         value=1.0,
...         parameters=(
...             PointParameterValue("Temperature", 25.0),
...             PointParameterValue("Statistical basis", "A-basis"),
...         ),
...     ),
...     ParameterizedPointValue(value=2.0),
... )
>>> multivalued_point_attribute.value  
(ParameterizedPointValue(value=1.0, parameters=(PointParameterValue(name='Temperature', value=25.0), PointParameterValue(name='Statistical basis', value='A-basis'))),
ParameterizedPointValue(value=2.0, parameters=()))
```

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange"></a>

### *class* AttributeRange

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for range data attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.default_unit"></a>

#### *property* default_unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Attribute database unit in the active unit system.

The unit used by MI Viewer or MI Explore to display this attribute in the active unit system. This
property is only affected by the unit system choice, and is not affected by [`Table.set_display_unit()`](table.md#ansys.grantami.core.mi_tree_classes.Table.set_display_unit).

* **Returns:**
  [`None`](https://docs.python.org/3/library/constants.html#None) if the attribute is dimensionless.
* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.high"></a>

#### *property* high *: [float](https://docs.python.org/3/library/functions.html#float) | [ValueWithPrecision](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) | [None](https://docs.python.org/3/library/constants.html#None)*

High value of the range.

Read-only property. Proxies to [`Range.high`](supporting.md#ansys.grantami.core._mi_value_classes.Range.high) on the attribute [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value).

* **Return type:**
  float or [`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) or None
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the attribute value is empty.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.high_value_is_inclusive"></a>

#### *property* high_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the high value is included in the range.

Read-only property. Proxies to [`Range.high_value_is_inclusive`](supporting.md#ansys.grantami.core._mi_value_classes.Range.high_value_is_inclusive) on the attribute [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value).

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the attribute value is empty.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.high_value_trailing_zero_information"></a>

#### *property* high_value_trailing_zero_information *: [TrailingZeroInformation](supporting.md#ansys.grantami.core.mi_meta_classes.TrailingZeroInformation) | [None](https://docs.python.org/3/library/constants.html#None)*

Trailing zero information associated with the high value.

This property is only populated for exported attribute values which include trailing zero information. To
include trailing zero information in an attribute value during import with the Scripting Toolkit, use a
[`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) object to set the [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value).

* **Return type:**
  [`TrailingZeroInformation`](supporting.md#ansys.grantami.core.mi_meta_classes.TrailingZeroInformation) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.is_estimated"></a>

#### *property* is_estimated *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the value has been estimated.

Defaults to [`False`](https://docs.python.org/3/library/constants.html#False) for new attribute values.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.low"></a>

#### *property* low *: [float](https://docs.python.org/3/library/functions.html#float) | [ValueWithPrecision](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) | [None](https://docs.python.org/3/library/constants.html#None)*

Low value of the range.

Read-only property. Proxies to [`Range.low`](supporting.md#ansys.grantami.core._mi_value_classes.Range.low) on the attribute [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value).

* **Return type:**
  float or [`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) or None
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the attribute value is empty.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.low_value_is_inclusive"></a>

#### *property* low_value_is_inclusive *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the low value is included in the range.

Read-only property. Proxies to [`Range.low_value_is_inclusive`](supporting.md#ansys.grantami.core._mi_value_classes.Range.low_value_is_inclusive) on the attribute [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value).

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the attribute value is empty.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.low_value_trailing_zero_information"></a>

#### *property* low_value_trailing_zero_information *: [TrailingZeroInformation](supporting.md#ansys.grantami.core.mi_meta_classes.TrailingZeroInformation) | [None](https://docs.python.org/3/library/constants.html#None)*

Trailing zero information associated with the low value.

This property is only populated for exported attribute values which include trailing zero information. To
include trailing zero information in an attribute value during import with the Scripting Toolkit, use a
[`ValueWithPrecision`](supporting.md#ansys.grantami.core.mi_meta_classes.ValueWithPrecision) object to set the [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value).

* **Return type:**
  [`TrailingZeroInformation`](supporting.md#ansys.grantami.core.mi_meta_classes.TrailingZeroInformation) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Unit symbol of the attribute.

Can be modified. [`None`](https://docs.python.org/3/library/constants.html#None) if the attribute is dimensionless.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeRange.value"></a>

#### *property* value *: [Range](supporting.md#ansys.grantami.core._mi_value_classes.Range) | [None](https://docs.python.org/3/library/constants.html#None)*

Current value of the attribute.

Can be modified.

* **Return type:**
  [`Range`](supporting.md#ansys.grantami.core._mi_value_classes.Range) or None
* **Raises:**
  [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a value that is not a Range instance.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular"></a>

### *class* AttributeTabular

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for tabular data attributes.

Provides access to tabular data and its properties, such as linking attribute and table, and methods for
adding, deleting or swapping rows.

#### WARNING
Linked functional columns are not supported in tabular attributes. Exported cells are represented as
[`UnsupportedType`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.UnsupportedType)

Importing an empty tabular attribute is deprecated. Instead:

* To delete all rows in an existing tabular attribute, use the [`Record.clear_attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.clear_attributes) method to delete
  the attribute value.
* To mark the attribute as Not Applicable, set the [`AttributeValue.is_applicable`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable) property to `False`.

Use the [`AttributeTabular.shape`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.shape) property to determine the current number of rows in the tabular
attribute.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.append_row"></a>

#### append_row(linking_value=None)

Appends a new unpopulated row, and sets the linking value for that row if one is provided.

* **Parameters:**
  **linking_value** ([*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* *optional*) – Linking value for the new row.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.delete_row"></a>

#### delete_row(index)

Removes the row at the specified index.

* **Parameters:**
  **index** ([*int*](https://docs.python.org/3/library/functions.html#int)) – Index of the row to delete.

### Examples

`delete_row(0)` deletes the first row.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.enable_destructive_editing"></a>

#### enable_destructive_editing()

Enable destructive editing of the tabular data.

* **Warns:**
  **UserWarning** – If unexported binary data is present in any of the tabular cells.

#### WARNING
Destructive editing removes existing rows and creates new ones. Destructive editing should be avoided because:

* This can be slow for attributes with File or Picture attributes, especially if many rows are present.
* Users of Data Updater will face conflicts when applying subsequent updates.

If destructive editing is performed while unexported binary data is present, a
[`UnexportedBinaryDataError`](exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) is raised on import. See [`Table.bulk_fetch()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) for more information.

#### SEE ALSO
[`is_destructive_editing_allowed`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.is_destructive_editing_allowed)
: Whether destructive editing of the tabular attribute value is allowed.

[`destructively_edited`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.destructively_edited)
: Whether destructive editing has been performed.

### Notes

The following actions are considered destructive:

* [`AttributeTabular.swap_rows()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.swap_rows)
* [`TabularRow.set_linking_value()`](tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow.set_linking_value) for an exported row

Destructive editing may be forced for a tabular attribute by calling [`force_destructive_editing()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.force_destructive_editing) before
importing the data.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.force_destructive_editing"></a>

#### force_destructive_editing()

Force destructive editing of the tabular data.

See [`enable_destructive_editing()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.enable_destructive_editing) for warnings associated with destructive editing. This method should
only be used for cases where destructive editing is absolutely necessary and is not triggered automatically.

* **Warns:**
  **UserWarning** – If unexported binary data is present in any of the tabular cells.

### Notes

If destructive editing is performed while unexported binary data is present, a
[`UnexportedBinaryDataError`](exceptions.md#ansys.grantami.core.mi_meta_classes.UnexportedBinaryDataError) is raised on import. See [`Table.bulk_fetch()`](table.md#ansys.grantami.core.mi_tree_classes.Table.bulk_fetch) for more information.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.load"></a>

#### load()

Loads exported tabular data.

Exported data is generally lazily loaded by any property of the tabular that requires it. This method can be
used to explicitly load the exported data or to discard staged user modifications and reset the attribute value
to the exported data.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.show"></a>

#### show()

Displays the data as an ascii-art style table.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.swap_rows"></a>

#### swap_rows(row1, row2)

Change the positions of two rows with indices `row1` and `row2`.

* **Parameters:**
  * **row1** ([*int*](https://docs.python.org/3/library/functions.html#int)) – Index of the first row.
  * **row2** ([*int*](https://docs.python.org/3/library/functions.html#int)) – Index of the second row.
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If destructive editing is not enabled.

#### WARNING
The swap_rows operation is considered destructive and will trigger a complete re-import of the tabular data
which may be slow, and will prevent Data Updater from tracking row-level updates to the tabular data. It is
disabled by default. To enable this action, call the method [`enable_destructive_editing()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.enable_destructive_editing) before calling
this method.

#### SEE ALSO
[`is_destructive_editing_allowed`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.is_destructive_editing_allowed)
: Whether destructive editing of the tabular attribute value is allowed.

### Examples

Swap the first and fifth rows in the Tabular data structure `my_data`:

```python
my_data.swap_rows(0, 4)
```

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.column_types"></a>

#### *property* column_types *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

Data type in each column.

* **Returns:**
  Only populated for local, linked attribute, or linked column tabular columns. The element will be an empty
  string otherwise.
* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

### Examples

`['STXT', 'POIN', 'DISC', '', '']`

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.columns"></a>

#### *property* columns *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*

List of columns in the tabular data.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.definition"></a>

#### *property* definition *: [AttributeDefinitionTabular](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular)*

The attribute definition associated with this attribute value.

* **Return type:**
  [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.destructively_edited"></a>

#### *property* destructively_edited *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the tabular data has been destructively edited.

If the value of this property is [`False`](https://docs.python.org/3/library/constants.html#False) then imports will be safe to use with Data Updater.

#### SEE ALSO
[`enable_destructive_editing()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.enable_destructive_editing)
: Enable destructive editing of the tabular data.

* **Returns:**
  [`True`](https://docs.python.org/3/library/constants.html#True) if destructive editing is enabled and any actions have been taken that require destructive
  editing. [`False`](https://docs.python.org/3/library/constants.html#False) if no destructive actions have been taken or if destructive editing is not
  enabled.
* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.is_destructive_editing_allowed"></a>

#### *property* is_destructive_editing_allowed *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether destructive editing of the tabular data is allowed.

By default, destructive editing is not allowed.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

#### SEE ALSO
[`enable_destructive_editing()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.enable_destructive_editing)
: Enable destructive editing of the tabular data.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.linked_columns"></a>

#### *property* linked_columns *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)]*

Whether each column is linked or not.

* **Return type:**
  [list](https://docs.python.org/3/library/stdtypes.html#list)[[bool](https://docs.python.org/3/library/functions.html#bool)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.linked_records"></a>

#### *property* linked_records *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [list](https://docs.python.org/3/library/stdtypes.html#list)[[Record](record.md#ansys.grantami.core.mi_record_classes.Record)]]*

The records linked to each row, indexed by the linking value of each row at loading.

These links are calculated in Granta MI, and therefore cannot be edited by the user. The dictionary is
unaffected by local changes to the tabular data, and the data must be re-imported to reflect local changes.

This property will be empty if the user cannot access the linked table, or if
[`AttributeDefinitionTabular.ignore_linked_records`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinitionTabular.ignore_linked_records) was set to [`True`](https://docs.python.org/3/library/constants.html#True) before data export.

* **Return type:**
  dict[str, list[[`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)]]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.linking_attribute"></a>

#### *property* linking_attribute *: [AttributeDefinition](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Short text-type attribute used to link rows in the tabular data attribute to records.

* **Returns:**
  [`AttributeDefinition`](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) object. [`None`](https://docs.python.org/3/library/constants.html#None) for purely local tabular data.
* **Return type:**
  [AttributeDefinition](attribute-definitions.md#ansys.grantami.core.mi_attribute_classes.AttributeDefinition) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.linking_table"></a>

#### *property* linking_table *: [Table](table.md#ansys.grantami.core.mi_tree_classes.Table) | [None](https://docs.python.org/3/library/constants.html#None)*

[`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table) object which the linking attribute belongs to.

* **Returns:**
  [`Table`](table.md#ansys.grantami.core.mi_tree_classes.Table) object. [`None`](https://docs.python.org/3/library/constants.html#None) for purely local tabular data.
* **Return type:**
  [Table](table.md#ansys.grantami.core.mi_tree_classes.Table) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.rows"></a>

#### *property* rows *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[TabularRow](tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow), ...]*

Returns a tuple of [`TabularRow`](tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow) objects representing each row in the tabular data.

* **Return type:**
  tuple[[`TabularRow`](tabular.md#ansys.grantami.core.mi_attribute_value_classes.TabularRow), …]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.shape"></a>

#### *property* shape *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int), [int](https://docs.python.org/3/library/functions.html#int)]*

Number of rows by number of columns.

* **Return type:**
  [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int), [int](https://docs.python.org/3/library/functions.html#int)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeTabular.value"></a>

#### *property* value *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [int](https://docs.python.org/3/library/functions.html#int) | [bool](https://docs.python.org/3/library/functions.html#bool) | [date](https://docs.python.org/3/library/datetime.html#datetime.date) | [MappingProxyType](https://docs.python.org/3/library/types.html#types.MappingProxyType) | [HyperlinkValue](tabular.md#ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue) | [PictureValue](tabular.md#ansys.grantami.core._mi_tabular_value_classes.PictureValue) | [FileValue](tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float)] | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str)] | [None](https://docs.python.org/3/library/constants.html#None) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str) | [int](https://docs.python.org/3/library/functions.html#int) | [bool](https://docs.python.org/3/library/functions.html#bool) | [date](https://docs.python.org/3/library/datetime.html#datetime.date) | [MappingProxyType](https://docs.python.org/3/library/types.html#types.MappingProxyType) | [HyperlinkValue](tabular.md#ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue) | [PictureValue](tabular.md#ansys.grantami.core._mi_tabular_value_classes.PictureValue) | [FileValue](tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[float](https://docs.python.org/3/library/functions.html#float)] | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str)] | [None](https://docs.python.org/3/library/constants.html#None)]]]*

Raw data for the attribute.

Data is organized as a tuple of tuples:

* The items in the outer tuple represent a row, and so the length of the outer tuple corresponds to the number
  of rows in the tabular attribute.
* The items in each inner tuple represent a cell, and so the lengths of the inner tuples correspond to the
  number of columns in the tabular attribute.

* **Return type:**
  tuple[tuple[str | int | bool | datetime.date | MappingProxyType | [`HyperlinkValue`](tabular.md#ansys.grantami.core._mi_tabular_value_classes.HyperlinkValue) | [`PictureValue`](tabular.md#ansys.grantami.core._mi_tabular_value_classes.PictureValue) | [`FileValue`](tabular.md#ansys.grantami.core._mi_tabular_value_classes.FileValue) | tuple | None]]

### Notes

When exporting data as a read user, this property may omit rows for the following reasons:

* If a row is completely empty.
* If a row contains no local data and has a linking value which does not exist in the target table.
* If a row contains no local data and has a linking value which exists in the target table, but all linked
  records are inaccessible to the user because of version control or access control.

When exporting data as a write user or above, this property will include all rows.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeShortText"></a>

### *class* AttributeShortText

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for short text attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeShortText.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Current value of the attribute.

Can be modified. Short text values can be at most 255 characters long.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the value is too long.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeLongText"></a>

### *class* AttributeLongText

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for long text attributes.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeLongText.value"></a>

#### *property* value *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Current value of the attribute.

Can be modified.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint"></a>

### *class* AttributeFunctionalSeriesPoint

Attribute value class for point series functional data.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.generate_grid_version"></a>

#### generate_grid_version(create_empty=False)

Convert this object to the equivalent grid functional attribute value object and return the result.

* **Parameters:**
  **create_empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether to create an empty object. Default is [`False`](https://docs.python.org/3/library/constants.html#False).
* **Returns:**
  New instance of a grid functional attribute value.
* **Return type:**
  [`AttributeFunctionalGridPoint`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If data cannot be represented as grid functional data.

### Notes

If `create_empty` is [`True`](https://docs.python.org/3/library/constants.html#True), an empty functional attribute value is returned.

If `create_empty` is [`False`](https://docs.python.org/3/library/constants.html#False), the following information is copied to the new functional attribute value:

* [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.value) (converted to [`GridPoint`](supporting.md#ansys.grantami.core._mi_value_classes.GridPoint))
* [`unit`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.unit)
* [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.parameters)
* [`is_applicable`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable)

If this method is used with data that cannot be represented as grid functional data, conversion will fail with
a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError).

Series functional data can be defined with multiple points sharing the same set of parameter values. These may
occur with hysteresis curves or multiple series without distinguishing parameters. Such data cannot be
represented as grid data.

Series with identical parameter values, or with no parameter values, can be converted to grid functional data as
long as all points have unique x-axis values. However, information about which series the points used to belong
to will be lost.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.set_value"></a>

#### set_value(value)

Set the current value of the attribute.

This method is an alternative to setting the [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.value) property directly, and accepts any sequence type.

* **Parameters:**
  **value** (Sequence[[`SeriesPoint`](supporting.md#ansys.grantami.core._mi_value_classes.SeriesPoint)]) – New value for the attribute.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.with_new_x_axis"></a>

#### with_new_x_axis(parameter_name, create_empty=False)

Generate an empty attribute value of the same type with another parameter as X-axis.

* **Parameters:**
  * **parameter_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the parameter to use as X-axis.
  * **create_empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether to create an empty attribute value or copy existing data. Default is [`False`](https://docs.python.org/3/library/constants.html#False).
* **Returns:**
  New instance of functional attribute of identical type.
* **Return type:**
  [`AttributeFunctionalSeriesPoint`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the name is not a valid parameter.

### Notes

If `create_empty` is [`True`](https://docs.python.org/3/library/constants.html#True), an empty functional attribute value is returned.

If `create_empty` is [`False`](https://docs.python.org/3/library/constants.html#False), the following information is copied to the new functional attribute value:

* [`unit`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.unit)
* [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.parameters)
* [`is_applicable`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable)
* [`show_as_table`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.show_as_table)
* [`log_yaxis`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.log_yaxis)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.log_yaxis"></a>

#### *property* log_yaxis *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the Y axis is using a logarithmic scale.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.parameters"></a>

#### *property* parameters *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [FunctionalValueParameter](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter)]*

Parameters associated with the functional data attribute, indexed by name.

Modify the [`FunctionalValueParameter.unit`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit) property on the returned objects to specify a different unit
for import.

* **Returns:**
  Read-only mapping of parameters associated with this functional value.
* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, [`FunctionalValueParameter`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.show_as_table"></a>

#### *property* show_as_table *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the attribute should be displayed as a table.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.table_view"></a>

#### *property* table_view *: [FunctionalSeriesPointTableView](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesPointTableView)*

Supports additional read-only views of the attribute value.

* **Return type:**
  [`FunctionalSeriesPointTableView`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesPointTableView)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Unit symbol for the y-axis.

For the x-axis parameter or constraint parameters, use [`unit`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit) on
`FunctionalValueParameter` objects provided by the [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.parameters) property.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.value"></a>

#### *property* value *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[SeriesPoint](supporting.md#ansys.grantami.core._mi_value_classes.SeriesPoint), ...]*

Current value of the attribute.

Can be modified.

#### Versionchanged
Changed in version 5.0: This property now accepts as input and returns a structured representation of a functional attribute value.
[`table_view`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.table_view) provides properties to obtain the value in the format
previously returned by this property.

* **Return type:**
  tuple[[`SeriesPoint`](supporting.md#ansys.grantami.core._mi_value_classes.SeriesPoint), …]
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a value that is not a tuple of SeriesPoint objects.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the value defines series with incompatible parameters or invalid parameter names.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.x_axis"></a>

#### *property* x_axis *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the parameter used as the x-axis for the attribute value.

Data exported from Granta MI may define a different x-axis parameter than the default x-axis parameter set in
the attribute definition. To import data with a different x-axis parameter, use [`with_new_x_axis()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint.with_new_x_axis).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange"></a>

### *class* AttributeFunctionalSeriesRange

Attribute value class for series range functional data.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.generate_grid_version"></a>

#### generate_grid_version(create_empty=False)

Convert this object to the equivalent grid functional attribute value object and return the result.

* **Parameters:**
  **create_empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether to create an empty object. Default is [`False`](https://docs.python.org/3/library/constants.html#False).
* **Returns:**
  New instance of a grid functional attribute value.
* **Return type:**
  [`AttributeFunctionalGridRange`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If data cannot be represented as grid functional data.

### Notes

If `create_empty` is [`True`](https://docs.python.org/3/library/constants.html#True), an empty functional attribute value is returned.

If `create_empty` is [`False`](https://docs.python.org/3/library/constants.html#False), the following information is copied to the new functional attribute value:

* [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.value) (converted to [`GridRange`](supporting.md#ansys.grantami.core._mi_value_classes.GridRange))
* [`unit`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.unit)
* [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.parameters)
* [`is_applicable`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable)

Series functional data can be defined with multiple points sharing the same set of parameter values. These may
occur with hysteresis curves or multiple series without distinguishing parameters. Such data cannot be
represented as grid data. If this method is used with data that cannot be represented as grid functional data,
conversion will fail with a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError).

Series with identical parameter values, or with no parameter values can be converted to grid functional as long
as all points have unique x-axis values.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.set_value"></a>

#### set_value(value)

Set the current value of the attribute.

This method is an alternative to setting the [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.value) property directly, and accepts any Sequence type.

* **Parameters:**
  **value** (Sequence[[`SeriesRange`](supporting.md#ansys.grantami.core._mi_value_classes.SeriesRange)]) – New value for the attribute.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.with_new_x_axis"></a>

#### with_new_x_axis(parameter_name, create_empty=False)

Generate an empty attribute value of the same type with another parameter as X-axis.

* **Parameters:**
  * **parameter_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the parameter to use as X-axis.
  * **create_empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether to create an empty attribute value or copy existing data. Default is [`False`](https://docs.python.org/3/library/constants.html#False).
* **Returns:**
  New instance of functional attribute of identical type.
* **Return type:**
  [`AttributeFunctionalSeriesRange`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the name is not a valid parameter.

### Notes

If `create_empty` is [`True`](https://docs.python.org/3/library/constants.html#True), an empty functional attribute value is returned.

If `create_empty` is [`False`](https://docs.python.org/3/library/constants.html#False), the following information is copied to the new functional attribute value:

* [`unit`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.unit)
* [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.parameters)
* [`is_applicable`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable)
* [`show_as_table`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.show_as_table)
* [`log_yaxis`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.log_yaxis)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.log_yaxis"></a>

#### *property* log_yaxis *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the Y axis is using a logarithmic scale.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.parameters"></a>

#### *property* parameters *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [FunctionalValueParameter](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter)]*

Parameters associated with the functional data attribute, indexed by name.

Modify the [`FunctionalValueParameter.unit`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit) property on the returned objects to specify a different unit
for import.

* **Returns:**
  Read-only mapping of parameters associated with this functional value.
* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, [`FunctionalValueParameter`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.show_as_table"></a>

#### *property* show_as_table *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the attribute should be displayed as a table.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.table_view"></a>

#### *property* table_view *: [FunctionalSeriesRangeTableView](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesRangeTableView)*

Supports additional read-only views of the attribute value.

* **Return type:**
  [`FunctionalSeriesRangeTableView`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalSeriesRangeTableView)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Unit symbol for the y-axis.

For the x-axis parameter or constraint parameters, use [`unit`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit) on
`FunctionalValueParameter` objects provided by the [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.parameters) property.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.value"></a>

#### *property* value *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[SeriesRange](supporting.md#ansys.grantami.core._mi_value_classes.SeriesRange), ...]*

Current value of the attribute.

Can be modified.

#### Versionchanged
Changed in version 5.0: This property now accepts as input and returns a structured representation of a functional attribute value.
[`table_view`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.table_view) provides properties to obtain the value in the format
previously returned by this property.

* **Return type:**
  tuple[[`SeriesRange`](supporting.md#ansys.grantami.core._mi_value_classes.SeriesRange), …]
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a value that is not a tuple of SeriesRange objects.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the value defines series with incompatible parameters or invalid parameter names.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.x_axis"></a>

#### *property* x_axis *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the parameter used as the x-axis for the attribute value.

Data exported from Granta MI may define a different x-axis parameter than the default x-axis parameter set in
the attribute definition. To import data with a different x-axis parameter, use [`with_new_x_axis()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange.with_new_x_axis).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint"></a>

### *class* AttributeFunctionalGridPoint

Attribute value class for point grid functional data.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.generate_series_version"></a>

#### generate_series_version(create_empty=False)

Convert this object to the equivalent series functional attribute value object and return the result.

* **Parameters:**
  **create_empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether to create an empty object. Default is [`False`](https://docs.python.org/3/library/constants.html#False).
* **Returns:**
  New instance of a series functional attribute value.
* **Return type:**
  [`AttributeFunctionalSeriesPoint`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesPoint)

### Notes

If `create_empty` is [`True`](https://docs.python.org/3/library/constants.html#True), an empty functional attribute value is returned.

If `create_empty` is [`False`](https://docs.python.org/3/library/constants.html#False), the following information is copied to the new functional attribute value:

* [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.value) (converted to [`SeriesPoint`](supporting.md#ansys.grantami.core._mi_value_classes.SeriesPoint))
* [`unit`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.unit)
* [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.parameters)
* [`is_applicable`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.with_new_x_axis"></a>

#### with_new_x_axis(parameter_name, create_empty=False)

Generate an empty attribute value of the same type with another parameter as X-axis.

* **Parameters:**
  * **parameter_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the parameter to use as X-axis.
  * **create_empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether to create an empty attribute value or copy existing data. Default is [`False`](https://docs.python.org/3/library/constants.html#False).
* **Returns:**
  New instance of functional attribute of identical type.
* **Return type:**
  [`AttributeFunctionalGridPoint`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the name is not a valid parameter.

### Notes

If `create_empty` is [`True`](https://docs.python.org/3/library/constants.html#True), an empty functional attribute value is returned.

If `create_empty` is [`False`](https://docs.python.org/3/library/constants.html#False), the following information is copied to the new functional attribute value:

* [`unit`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.unit)
* [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.parameters)
* [`is_applicable`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.parameters"></a>

#### *property* parameters *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [FunctionalValueParameter](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter)]*

Parameters associated with the functional data attribute, indexed by name.

Modify the [`FunctionalValueParameter.unit`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit) property on the returned objects to specify a different unit
for import.

* **Returns:**
  Read-only mapping of parameters associated with this functional value.
* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, [`FunctionalValueParameter`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.table_view"></a>

#### *property* table_view *: [FunctionalGridPointTableView](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalGridPointTableView)*

Supports additional read-only views of the attribute value.

* **Return type:**
  [`FunctionalGridPointTableView`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalGridPointTableView)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Unit symbol for the y-axis.

For the x-axis parameter or constraint parameters, use [`unit`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit) on
`FunctionalValueParameter` objects provided by the [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.parameters) property.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.value"></a>

#### *property* value *: [GridPoint](supporting.md#ansys.grantami.core._mi_value_classes.GridPoint)*

Current value of the attribute.

Can be modified.

#### Versionchanged
Changed in version 5.0: This property now accepts as input and returns a structured representation of a functional attribute value.
[`table_view`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.table_view) provides properties to obtain the value in the format
previously returned by this property.

* **Return type:**
  [`GridPoint`](supporting.md#ansys.grantami.core._mi_value_classes.GridPoint)
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a value that is not a GridPoint object.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the value defines invalid parameter names.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.x_axis"></a>

#### *property* x_axis *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the parameter used as the x-axis for the attribute value.

Data exported from Granta MI may define a different x-axis parameter than the default x-axis parameter set in
the attribute definition. To import data with a different x-axis parameter, use [`with_new_x_axis()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridPoint.with_new_x_axis).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange"></a>

### *class* AttributeFunctionalGridRange

Attribute value class for range grid functional data.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.generate_series_version"></a>

#### generate_series_version(create_empty=False)

Convert this object to the equivalent series functional attribute value object and return the result.

* **Parameters:**
  **create_empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether to create an empty object. Default is [`False`](https://docs.python.org/3/library/constants.html#False).
* **Returns:**
  New instance of a series functional attribute value.
* **Return type:**
  [`AttributeFunctionalSeriesRange`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalSeriesRange)

### Notes

If `create_empty` is [`True`](https://docs.python.org/3/library/constants.html#True), an empty functional attribute value is returned.

If `create_empty` is [`False`](https://docs.python.org/3/library/constants.html#False), the following information is copied to the new functional attribute value:

* [`value`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.value) (converted to [`SeriesRange`](supporting.md#ansys.grantami.core._mi_value_classes.SeriesRange))
* [`unit`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.unit)
* [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.parameters)
* [`is_applicable`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.with_new_x_axis"></a>

#### with_new_x_axis(parameter_name, create_empty=False)

Generate an empty attribute value of the same type with another parameter as X-axis.

* **Parameters:**
  * **parameter_name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str)) – Name of the parameter to use as X-axis.
  * **create_empty** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *,* *optional*) – Whether to create an empty attribute value or copy existing data. Default is [`False`](https://docs.python.org/3/library/constants.html#False).
* **Returns:**
  New instance of functional attribute of identical type.
* **Return type:**
  [`AttributeFunctionalGridRange`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange)
* **Raises:**
  [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the name is not a valid parameter.

### Notes

If `create_empty` is [`True`](https://docs.python.org/3/library/constants.html#True), an empty functional attribute value is returned.

If `create_empty` is [`False`](https://docs.python.org/3/library/constants.html#False), the following information is copied to the new functional attribute value:

* [`unit`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.unit)
* [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.parameters)
* [`is_applicable`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue.is_applicable)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.parameters"></a>

#### *property* parameters *: mappingproxy[[str](https://docs.python.org/3/library/stdtypes.html#str), [FunctionalValueParameter](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter)]*

Parameters associated with the functional data attribute, indexed by name.

Modify the [`FunctionalValueParameter.unit`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit) property on the returned objects to specify a different unit
for import.

* **Returns:**
  Read-only mapping of parameters associated with this functional value.
* **Return type:**
  [`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) [str, [`FunctionalValueParameter`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter)]

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.table_view"></a>

#### *property* table_view *: [FunctionalGridRangeTableView](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalGridRangeTableView)*

Supports additional read-only views of the attribute value.

* **Return type:**
  [`FunctionalGridRangeTableView`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalGridRangeTableView)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.unit"></a>

#### *property* unit *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Unit symbol for the y-axis.

For the x-axis parameter or constraint parameters, use [`unit`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.FunctionalValueParameter.unit) on
`FunctionalValueParameter` objects provided by the [`parameters`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.parameters) property.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str) or None

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.value"></a>

#### *property* value *: [GridRange](supporting.md#ansys.grantami.core._mi_value_classes.GridRange)*

Current value of the attribute.

Can be modified.

#### Versionchanged
Changed in version 5.0: This property now accepts as input and returns a structured representation of a functional attribute value.
[`table_view`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.table_view) provides properties to obtain the value in the format
previously returned by this property.

* **Return type:**
  [`GridRange`](supporting.md#ansys.grantami.core._mi_value_classes.GridRange)
* **Raises:**
  * [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If providing a value that is not a GridRange object.
  * [**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError) – If the value defines invalid parameter names.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.x_axis"></a>

#### *property* x_axis *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the parameter used as the x-axis for the attribute value.

Data exported from Granta MI may define a different x-axis parameter than the default x-axis parameter set in
the attribute definition. To import data with a different x-axis parameter, use [`with_new_x_axis()`](#ansys.grantami.core.mi_attribute_value_classes.AttributeFunctionalGridRange.with_new_x_axis).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeUnsupported"></a>

### *class* AttributeUnsupported

Extended [`AttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.AttributeValue) class for attributes with unsupported data types.

### Notes

Unsupported attribute data will not yield any information regarding its value in that record. However,
some meta-data is still available through this class (such as the attribute’s name and data type).
An unsupported attribute value remains unpopulated, and these objects cannot be edited.

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.attributes`](record.md#ansys.grantami.core.mi_record_classes.Record.attributes) to access instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeUnsupported.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeUnsupported.is_applicable"></a>

#### *property* is_applicable *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the attribute is applicable to the current record.

Setting this to [`False`](https://docs.python.org/3/library/constants.html#False) will clear any data values on the attribute on import.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)
* **Raises:**
  [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError) – If attempting to set a non-boolean value.

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeUnsupported.object"></a>

#### *property* object *: [UnsupportedType](supporting.md#ansys.grantami.core.mi_attribute_value_classes.UnsupportedType)*

Gets the underlying [`UnsupportedType`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.UnsupportedType) object representing the attribute value or the tabular cell.

Does not allow access to the data.

* **Return type:**
  [`UnsupportedType`](supporting.md#ansys.grantami.core.mi_attribute_value_classes.UnsupportedType)

<a id="ansys.grantami.core.mi_attribute_value_classes.AttributeUnsupported.value"></a>

#### *property* value *: [None](https://docs.python.org/3/library/constants.html#None)*

This property always returns None for unsupported attribute values.

<a id="ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue"></a>

### *class* PseudoAttributeValue

Stores and provides access to pseudo-attribute data values.

### Notes

Do not create instances of this class; it represents a pre-existing database structure. Use
[`Record.get_attributes()`](record.md#ansys.grantami.core.mi_record_classes.Record.get_attributes) to generate instances of this class.

<a id="ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue.is_empty"></a>

#### is_empty()

Checks whether the pseudo-attribute value is populated or not.

* **Return type:**
  [bool](https://docs.python.org/3/library/functions.html#bool)

<a id="ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue.id"></a>

#### *property* id *: [int](https://docs.python.org/3/library/functions.html#int)*

Attribute identifier (this is always 0 for pseudo-attributes).

* **Return type:**
  [int](https://docs.python.org/3/library/functions.html#int)

<a id="ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue.name"></a>

#### *property* name *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Name of the pseudo-attribute.

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue.record"></a>

#### *property* record *: [Record](record.md#ansys.grantami.core.mi_record_classes.Record)*

Parent [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record) described by the [`PseudoAttributeValue`](#ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue).

* **Return type:**
  [`Record`](record.md#ansys.grantami.core.mi_record_classes.Record)

<a id="ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue.type"></a>

#### *property* type *: [str](https://docs.python.org/3/library/stdtypes.html#str)*

Data type of the pseudo-attribute value (four-character string).

* **Return type:**
  [str](https://docs.python.org/3/library/stdtypes.html#str)

<a id="ansys.grantami.core.mi_attribute_value_classes.PseudoAttributeValue.value"></a>

#### *property* value *: [list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] | [str](https://docs.python.org/3/library/stdtypes.html#str) | [int](https://docs.python.org/3/library/functions.html#int) | [bool](https://docs.python.org/3/library/functions.html#bool) | [set](https://docs.python.org/3/library/stdtypes.html#set)[[str](https://docs.python.org/3/library/stdtypes.html#str)] | [datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) | [RecordColor](constants.md#ansys.grantami.core.mi_constants.RecordColor)*

Current value of the pseudo-attribute.

Cannot be modified. Modification of editable pseudo-attributes must be done through the [`Record.color`](record.md#ansys.grantami.core.mi_record_classes.Record.color),
[`Record.short_name`](record.md#ansys.grantami.core.mi_record_classes.Record.short_name) and [`Record.name`](record.md#ansys.grantami.core.mi_record_classes.Record.name) properties.

* **Return type:**
  list[str] or str or int or bool or set[str] or datetime.datetime or [`RecordColor`](constants.md#ansys.grantami.core.mi_constants.RecordColor)
