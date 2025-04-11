# Attribute values

<a id="attribute-vals"></a>

<a id="attribute-values"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue"></a>

### *class* AttributeValue

Stores and provides access to attribute data values.

#### NOTE
Do not create new instances of this class; it represents a pre-existing database structure,
and empty instances are provided when needed.

The attributes in a [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) are represented in the MI Scripting Toolkit by
[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) objects,
with an associated [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) object containing the attribute’s data.
[`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) is the base class, and each attribute type has a specialised class that inherits from it.

#### NOTE
The ‘Notes’ meta-attribute, common to all attributes, is not accessible through the MI Scripting Toolkit.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value"></a>

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.record"></a>

#### *property* record

[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) in which the attribute value is defined. Would be None if the [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) has been
created outside a Record context, e.g.
with [`Table.create_empty_attribute_value`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.create_empty_attribute_value).

* **Returns:**
  [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.definition"></a>

#### *property* definition

[`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) associated with this [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue).

* **Returns:**
  [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.id"></a>

#### *property* id

Attribute identifier.

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_meta"></a>

#### *property* is_meta

Whether the attribute is a meta-attribute.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_meta_for"></a>

#### *property* is_meta_for

Name of the parent attribute, if a meta-attribute. Returns `None` if not.

* **Returns:**
  str or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.meta_attributes"></a>

#### *property* meta_attributes

Meta-attributes associated with this attribute. Does not make calls to the Service Layer.

* **Returns:**
  Dict[str, [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.name"></a>

#### *property* name

Attribute name.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.type"></a>

#### *property* type

Attribute data type, as a four-character string. Possible attribute types are:

POIN = point,
<br/>
RNGE = range,
<br/>
FUNC = float functional,
<br/>
INPT = integer,
<br/>
LOGI = logical,
<br/>
DISC = discrete,
<br/>
STXT = short text,
<br/>
LTXT = long text,
<br/>
DTTM = date time,
<br/>
HLNK = hyperlink,
<br/>
PICT = picture,
<br/>
FILE = file,
<br/>
DSFN = discrete functional,
<br/>
MAFN = maths functional (equations and logic),
<br/>
TABL = tabular.
<br/>

DSFN and MAFN are not supported by the MI Scripting Toolkit, and appear as UNSUPPORTED DATA TYPE.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.unit"></a>

#### *property* unit

Unit symbol.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_applicable"></a>

#### *property* is_applicable

Whether the attribute is applicable to the current record. Setting this to `False` will clear
any data values on the attribute.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary"></a>

### *class* AttributeBinary

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class to handle [`BinaryType`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) objects
as attribute data values.

Provides access to [`BinaryType`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object methods and properties.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
  * **content_type** – str (MIME content/file type; see [`BinaryType`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType))
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.url"></a>

#### *property* url

URL of the hosted file. Returns `None` if not populated.

The data can be retrieved by using a Python HTTP library (e.g. Requests, HTTPX) and by supplying the
appropriate authentication for your Granta MI server.

To populate this property, the [`Table.bulk_fetch()`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch) method must be used with
`include_binary_data = False` (default). If `include_binary_data = True` is specified, or if the attribute
is fetched on-demand by accessing the `attributes` dictionary without performing a bulk fetch, this property
will always return `None`.

* **Returns:**
  str or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.mime_file_type"></a>

#### *property* mime_file_type

MIME (Multipurpose Internet Mail Extensions) file type, if populated.

When exporting, this property is populated with the value of the MIME file type as determined by Granta MI.

When importing, this property is populated automatically by the `load()` method:

* For Picture attributes, the MIME file type is determined by the image data.
* For File attributes, this property is not used and is set to `None`.

Some commonly-used extensions are:

image/png - .png
<br/>
image/gif - .gif
<br/>
image/bmp - .bmp
<br/>
image/tiff - .tif, .tiff
<br/>
text/plain - .txt
<br/>
application/zip - .zip
<br/>
application/pdf - .pdf
<br/>
application/vnd.ms-excel - .xls
<br/>
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet - .xlsx
<br/>
application/vnd.ms-powerpoint - .ppt
<br/>
application/vnd.openxmlformats-officedocument.presentationml.presentation - .pptx
<br/>
application/msword - .doc
<br/>
application/vnd.openxmlformats-officedocument.wordprocessingml.document - .docx
<br/>
* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.is_empty"></a>

#### is_empty()

Checks if the [`BinaryType`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.BinaryType) object is populated by checking if it contains any binary data.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary.value"></a>

#### *property* value

Returns the file as a bytes object, or None if unset.

* **Returns:**
  bytes or None.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture"></a>

### *class* AttributePicture

Extended [`AttributeBinary`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary) class for handling [`Picture`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) objects.

Provides access to [`Picture`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) save/load methods.

Pictures of up to 500 MB in size may be stored in Granta MI. To upload pictures larger than 20 Mb using Scripting
Toolkit:

* Granta MI Service Layer must be configured to allow large requests. If this is not configured,
  [`Session.update()`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update) will raise a [`GRANTA_ServiceLayerError`](../foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Exceptions.GRANTA_ServiceLayerError) for a “413 Request Entity Too Large” HTTP
  response. For more information, contact your Ansys technical representative.
* The Python client environment must have sufficient system resources to load and Base64-encode the binary data. If
  there are insufficient system resources, unhandled Python exceptions may be raised.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.save"></a>

#### save(path)

Wraps the [`Picture.save()`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.save) method.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path where the image should be saved.
  Takes the form `C:\\Users\\yourname\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture.load"></a>

#### load(path)

Wraps the [`Picture.load()`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.load) method (populates the [`Picture`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) object with the specified image file).

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path to the image file to load.
  Takes the form `C:\\Users\\yourname\\Pictures\\image.jpg` or `/home/username/Pictures/image.jpg`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile"></a>

### *class* AttributeFile

Extended [`AttributeBinary`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeBinary) class to handle [`File`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) objects.

Provides access to [`File`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) object save/load methods, file name, and description.

Files of up to 500 MB in size may be stored in Granta MI. To upload files larger than 20 Mb using Scripting Toolkit:

* Granta MI Service Layer must be configured to allow large requests. If this is not configured,
  [`Session.update()`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session.update) will raise a [`GRANTA_ServiceLayerError`](../foundation/api.md#GRANTA_MIScriptingToolkit.GRANTA_Exceptions.GRANTA_ServiceLayerError) for a “413 Request Entity Too Large” HTTP
  response. For more information, contact your Ansys technical representative.
* The Python client environment must have sufficient system resources to load and Base64-encode the binary data. If
  there are insufficient system resources, unhandled Python exceptions may be raised.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.save"></a>

#### save(path)

Wraps the [`File.save()`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.save) method.

* **Parameters:**
  **path** (*Union* *[*[*str*](https://docs.python.org/3/library/stdtypes.html#str) *,* [*pathlib.Path*](https://docs.python.org/3/library/pathlib.html#pathlib.Path) *]*) – Path where the file should be saved.
  Takes the form `C:\\Users\\yourname\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.load"></a>

#### load(path)

Wraps the [`File.load()`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.load) method (populates the [`File`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) object with the specified file).

* **Parameters:**
  **path** – Union[str, pathlib.Path] (Path to the file to be imported.
  Takes the form `C:\\Users\\yourname\\Documents\\file.pdf` or `/home/username/Documents/file.pdf`.
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.file_name"></a>

#### *property* file_name

Name of the file associated with the [`File`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) object. Displayed in MI applications.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.description"></a>

#### *property* description

Description of the file displayed in MI applications.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDate"></a>

### *class* AttributeDate

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for date attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDate.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDate.value_as_string"></a>

#### *property* value_as_string

Return the value of the date attribute as a string.

* **Returns:**
  str | None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDate.value"></a>

#### *property* value

Return the value of the date attribute as a [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) object.

* **Returns:**
  [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) object | None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete"></a>

### *class* AttributeDiscrete

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for discrete attributes.

Provides access to the list of strings that store the attribute’s data values, and their display order.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinitionDiscrete`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionDiscrete) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.value"></a>

#### *property* value

Discrete value(s) associated with this attribute.

* **Returns:**
  List[str] or str if not multivalued

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.order"></a>

#### *property* order

Display order of the discrete data values (strings) in MI Viewer. Order cannot be edited using the MI
Scripting Toolkit.

* **Returns:**
  Optional[List[int]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.is_multivalued"></a>

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.possible_discrete_values"></a>

#### *property* possible_discrete_values

List of the attribute’s possible discrete data values.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional"></a>

### *class* AttributeFunctional

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for functional data attributes.

Stores and provides access to a data structure, parameters (constraints), specified x-axis, and individual
columns and series within the functional data attribute. Series and Gridded data are stored identically in
[`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) objects. However, the two data types are imported into MI differently.

The [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) object data structure is as follows:

```python
[[ 'y min', 'y max', 'constraint 1', 'constraint 2', 'Estimated point?'],
 [  0.0,      0.0,      'Test',         0.5,       ,      False,       ],
 [   . ,       . ,         .  ,          . ,       ,        .  ,       ],
 [   . ,       . ,         .  ,          . ,       ,        .  ,       ],
 [   . ,       . ,         .  ,          . ,       ,        .  ,       ]]
```

The allowed data types are `float` for x-y data, `float`, `str` or `None` for constraints, and `bool` for
flagging whether the data point is estimated or not.

The functional data type is used to store graphical data in Granta MI. In MI Viewer there are two ways to
view the data: *Series* and *Gridded*.

* Series data is grouped according to constraints or parameters placed on x-y data. The x-axis is a
  constraint that is specified on import. Each group (‘Series’) can have a different linestyle.
* Gridded data is similar to Series data, except that the x-axis is dynamically chosen within MI Viewer, and
  all data groups share one linestyle.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.update_header_units"></a>

#### update_header_units()

Updates the unit symbols in the header with the currently selected units.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.unit"></a>

#### *property* unit

Unit symbol for the y-axis.

To access the unit for the x-axis parameter or constraint parameters, use the `unit` property on the object
returned by the [`xaxis_parameter`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.xaxis_parameter) or [`ParameterDefinition`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition) respectively.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.clear"></a>

#### clear()

Deletes all data stored in the [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) object.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.is_empty"></a>

#### is_empty()

Checks whether any of the data values in the attribute are populated.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_point"></a>

#### add_point(columns)

Adds a point value to the [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) object. Requires a dictionary with keys for the y-value,
each constraint, and whether the value is estimated (optional):

* Dictionary keys for the y-value can be either ‘y’, ‘Y’, the attribute name, or the attribute name prefixed
  with ‘Y ‘ and suffixed with the unit symbol in square brackets, i.e. formatted as in [`column_headers`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.column_headers).
* Constraint keys can be either the parameter name, or the parameter name with units.
* Constraints are optional and can either be omitted entirely or set to None.
* The key for whether the value is estimated must be ‘Estimated?’.

#### NOTE
The Estimated? flag can currently only be set for *Gridded* data, not *Series*.

* **Parameters:**
  **columns** – Dict[str, Union[str, float, bool, int]]
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_range"></a>

#### add_range(columns)

Adds a range value to the [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) object. Requires a dictionary with keys for the two
y-values (ymin and ymax), each constraint, and whether the value is estimated (optional).

* Dictionary keys for the y-value can be either ‘ymin’, ‘ymax’, or the attribute name with units and
  ‘Y min’ or ‘Y max’ appended.
* Constraint keys can either be the parameter name, or the parameter name with units.
* Constraints are optional and can either be omitted entirely or set to None.
* The key for whether the value is estimated must be ‘Estimated?’.

#### NOTE
The Estimated? flag can currently only be set for *Gridded* data, not *Series*.

* **Parameters:**
  **columns** – dict
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.xaxis_parameter"></a>

#### *property* xaxis_parameter

[`AttributeParameter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) for the current x-axis parameter of the functional data attribute.

Modify the [`ParameterDefinition.unit`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.unit) property on the returned object to specify a different unit for
import.

* **Returns:**
  [`AttributeParameter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.column_headers"></a>

#### *property* column_headers

Column headers with units.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.constraint_column_index"></a>

#### *property* constraint_column_index

Mapping of columns to indices for functional data attributes.

* **Returns:**
  Dict[str, int]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.data_by_column"></a>

#### data_by_column()

Sorts data into columns (lists of values indexed by column name). Changing a dictionary generated
using this method does not affect the underlying data, and data in the dictionary will not be
refreshed automatically if the underlying data changes.

* **Returns:**
  Dict[str, List[Any]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.parameters"></a>

#### *property* parameters

Parameters used by the functional data attribute, indexed by name.

Modify the [`ParameterDefinition.unit`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.unit) property on the returned objects to specify a different unit for
import.

* **Returns:**
  Dict[str, [`AttributeParameter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries"></a>

### *class* FunctionalSeries

Extended [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) class for Series functional data attributes.

Provides access to Series numbers and linestyles, and a method of generating a [`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object from a
[`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object ([`generate_grid_version()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.generate_grid_version)).

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.generate_grid_version"></a>

#### generate_grid_version()

Creates a Gridded version of the [`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object and returns a copy of it.

* **Returns:**
  [`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.data_with_series_number"></a>

#### *property* data_with_series_number

Series number for all data points, returned as an additional column with the data values.

* **Returns:**
  List[List[Union[str, float, bool, int]]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.series_linestyles"></a>

#### *property* series_linestyles

Linestyles for each series (linestyle can be ‘Lines’, ‘Markers’, or ‘Both’).

* **Returns:**
  Dict[int, str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries.log_yaxis"></a>

#### *property* log_yaxis

Whether the Y axis is using a logarithmic scale.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid"></a>

### *class* FunctionalGrid

Extended [`AttributeFunctional`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) class for Gridded functional data attributes.

Provides access to linestyle and a method of generating a [`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object from a
[`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object ([`generate_series_version()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid.generate_series_version)).

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid.generate_series_version"></a>

#### generate_series_version()

Creates a Series version of the [`FunctionalGrid`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid) object and returns a copy of it.

* **Returns:**
  [`FunctionalSeries`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalSeries) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.FunctionalGrid.linestyle"></a>

#### *property* linestyle

Linestyle for gridded functional data (gridded data can only have one linestyle:
‘Lines’, ‘Markers’, or ‘Both’).

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink"></a>

### *class* AttributeHyperlink

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for hyperlink attributes.

Provides access to the `hyperlink_description` and `hyperlink_display` text properties.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.object"></a>

#### *property* object

Hyperlink attribute object value.

* **Returns:**
  [`Hyperlink`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink)

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.value"></a>

#### *property* value

Returns the URL as a string, or `None` if unset.

* **Returns:**
  str or `None`.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.hyperlink_display"></a>

#### *property* hyperlink_display

Indicates how the hyperlink should be opened when clicked on in MI applications. Takes one of the
following values:

- `New`: Open in a new window or tab.
- `Top`: Open in the current window or tab.
- `Content`: Open within the current MI application (for example, in a frame or dialog).

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.hyperlink_description"></a>

#### *property* hyperlink_description

Text which displays instead of the URL in MI applications.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeInteger"></a>

### *class* AttributeInteger

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for integer attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeInteger.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeInteger.value"></a>

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLogical"></a>

### *class* AttributeLogical

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for logical attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLogical.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint"></a>

### *class* AttributePoint

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for point data attributes.

Provides access to lists of point values and their parameters. Points can be multi-valued and are represented
in the Streamlined API as lists of floats. They can have multiple parameters.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinitionPoint`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionPoint) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.is_multivalued"></a>

#### *property* is_multivalued

Whether this attribute allows multiple values to be set.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated. [`AttributePoint`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint) objects are empty if the length
of the list [`AttributePoint.value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value) == 0.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.is_estimated"></a>

#### *property* is_estimated

Whether the value has been estimated.

Defaults to False for new attribute values.

return: bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.parameter_definitions"></a>

#### *property* parameter_definitions

Parameter definitions for the parameters associated with the point attribute, indexed by name.

Modify the [`ParameterDefinition.unit`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.ParameterDefinition.unit) property on the returned objects to specify a different unit for
import.

* **Returns:**
  Dict[str, [`AttributeParameter`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeParameter)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.parameters"></a>

#### *property* parameters

Parameters associated with each point in [`AttributePoint.value`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value). Each point has a
dictionary, indexed by parameter name and containing the parameter value for that point.

* **Returns:**
  List[Dict[str, Union[float, str]]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value"></a>

#### *property* value

Point values associated with this attribute.

* **Returns:**
  Union[List[float], float]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange"></a>

### *class* AttributeRange

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for range data attributes.  Range attribute values are represented in
the MI Scripting Toolkit by dictionaries of the form `{'low': float, 'high': float}`, and should be entered
in this form when editing them.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.value"></a>

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.is_estimated"></a>

#### *property* is_estimated

Whether the value has been estimated.

Defaults to False for new attribute values.

return: bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.high_value_is_inclusive"></a>

#### *property* high_value_is_inclusive

Whether the high value is included in the range.

Defaults to True for new attribute values.

return: bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeRange.low_value_is_inclusive"></a>

#### *property* low_value_is_inclusive

Whether the low value is included in the range.

Defaults to True for new attribute values.

return: bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular"></a>

### *class* AttributeTabular

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for tabular data attributes.

Provides access to tabular data and its properties, such as linking attribute and table, and methods for
adding, deleting or swapping rows.

Importing a tabular attribute using Granta MI Scripting Toolkit replaces all data in the existing attribute. This
can have implications if you use Data Updater to manage this data.

#### WARNING
Importing an empty tabular attribute is deprecated. To delete all rows in an existing tabular attribute,
use the [`Record.clear_attributes`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.clear_attributes) method to delete the attribute value. To mark the attribute
as Not Applicable, set the [`AttributeValue.is_applicable`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.is_applicable) property to `False`.

Use the [`AttributeTabular.shape`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.shape) property to determine the current number of rows in the
tabular attribute.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.columns"></a>

#### *property* columns

List of columns in the tabular data.

* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.column_types"></a>

#### *property* column_types

Data type in each column. Only populated for local, linked attribute, or linked column tabular columns.
The element will be an empty string otherwise.

* **Example:**
  `['STXT', 'POIN', 'DISC', '', '']`
* **Returns:**
  List[str]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.linked_columns"></a>

#### *property* linked_columns

Whether each column is linked or not.

* **Returns:**
  List[bool]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.linking_table"></a>

#### *property* linking_table

[`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object which the linking attribute belongs to. Returns `None` for purely local tabular data.

* **Returns:**
  [`Table`](table.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.linking_attribute"></a>

#### *property* linking_attribute

Linking attribute, a short text-type attribute used to link rows in the tabular data attribute to records.
Returns `None` for purely local tabular data.

* **Returns:**
  [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object or None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value"></a>

#### *property* value

Raw data for the attribute. Data is organized as a list of lists:

* The items in the outer list represent a row, and so the length of the outer list corresponds to the number of
  rows in the tabular attribute.
* The items in each inner list represent a cell, and so the lengths of the inner lists correspond to the number
  of columns in the tabular attribute.

When exporting data as a read user, this property may omit rows for the following reasons:

* If a row is completely empty.
* If a row contains no local data and has a linking value which does not exist in the target table.
* If a row contains no local data and has a linking value which exists in the target table, but all linked
  records are inaccessible to the user because of version control or access control.

When exporting data as a write user or above, this property will include all rows.

When assigning a value using this property, the number of items in the inner and outer lists **must** match the
existing value. To modify the number of existing rows, use the [`AttributeTabular.add_row()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.add_row) and
[`AttributeTabular.delete_row()`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.delete_row) methods before assigning a value.

* **Returns:**
  List[List[Union[str, list, [`Picture`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture), [`File`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File), [`Hyperlink`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink), float, int, tuple]]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.units"></a>

#### *property* units

[`TabularUnits`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) object associated with this [`AttributeTabular`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular) object.

* **Returns:**
  [`TabularUnits`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_meta_classes.TabularUnits) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.show"></a>

#### show()

Displays the data as an ascii-art style table.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.load"></a>

#### load()

Loads exported tabular data.

Exported data is generally lazily loaded by any property of the tabular that requires it. This method can be
used to explicitly load the exported data or to discard staged user modifications and reset the attribute value
to the exported data.

* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.linked_records"></a>

#### *property* linked_records

The records linked to each row, indexed by the linking value of each row at loading.

These links are calculated in Granta MI, and therefore cannot be edited by the user. The dictionary is
unaffected by local changes to the tabular data, and the data must be re-imported to reflect local changes.

This property will be empty if the user cannot access the linked table, or if
[`AttributeDefinitionTabular.ignore_linked_records`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinitionTabular.ignore_linked_records) was set to `True` before data export.

* **Returns:**
  Dict[str, List[[`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)]]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.shape"></a>

#### *property* shape

Number of columns by number of rows.

* **Returns:**
  Tuple[int, int]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.add_row"></a>

#### add_row(linking_value='<linking value not chosen>')

Inserts a new unpopulated row, and sets the linking value for that row if one is provided.

* **Parameters:**
  **linking_value** – str
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.delete_row"></a>

#### delete_row(index)

Removes the row at the specified index.

* **Example:**
  `delete_row(0)` deletes the first row.
* **Parameters:**
  **index** – int
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.swap_rows"></a>

#### swap_rows(row1, row2)

Change the positions of two rows with indices `row1` and `row2`.

* **Example:**
  `my_data.swap_rows(0, 4)` swaps the first and fifth rows in the Tabular data structure `my_data`.
* **Parameters:**
  * **row1** – int
  * **row2** – int
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeShortText"></a>

### *class* AttributeShortText

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for short text attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeShortText.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeShortText.value"></a>

#### *property* value

Current value of the attribute. Can be modified.

* **Returns:**
  Union[List[str], List[float], str, Dict[str, float], int, float, bool, bytes]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLongText"></a>

### *class* AttributeLongText

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for long text attributes.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeLongText.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported"></a>

### *class* AttributeUnsupported

Extended [`AttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue) class for attributes with unsupported data types.

Note that unsupported attribute data will not yield any information regarding its value in that record. However,
some meta-data is still available through this class (such as the attribute’s name and data type).
An unsupported attribute value remains unpopulated, and these objects cannot be edited.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported.__init__"></a>

#### \_\_init_\_(attr_def, \_mi, record)

* **Parameters:**
  * **attr_def** – [`AttributeDefinition`](attribute-definitions.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_classes.AttributeDefinition) object
  * **\_mi** – [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported.object"></a>

#### *property* object

Gets the underlying [`UnsupportedType`](supporting.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.UnsupportedType) object representing the attribute value or the tabular cell. Does
not allow access to the data.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported.is_applicable"></a>

#### *property* is_applicable

Whether the attribute is applicable to the current record. Setting this to `False` will clear
any data values on the attribute.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeUnsupported.is_empty"></a>

#### is_empty()

Checks whether the attribute value is populated.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue"></a>

### *class* PseudoAttributeValue

Stores and provides access to pseudo-attribute data values.

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.__init__"></a>

#### \_\_init_\_(name, record)

* **Parameters:**
  * **name** – str
  * **record** – Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record)
* **Returns:**
  None

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.record"></a>

#### *property* record

Parent [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) described by the [`PseudoAttributeValue`](#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue)

* **Returns:**
  [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.value"></a>

#### *property* value

Current value of the pseudo-attribute. Cannot be modified. Modification of pseudo-attributes must be done
through the [`Record`](record.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) object properties `color`, `short_name` and `name`.

* **Returns:**
  Union[List[str], str, int, bool, Set[str], [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime), [`RecordColor`](constants.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor)]

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.id"></a>

#### *property* id

Attribute identifier (this is always 0 for pseudo-attributes).

* **Returns:**
  int

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.is_empty"></a>

#### is_empty()

Checks whether the pseudo-attribute value is populated or not.

* **Returns:**
  bool

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.name"></a>

#### *property* name

Name of the pseudo-attribute.

* **Returns:**
  str

<a id="GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.PseudoAttributeValue.type"></a>

#### *property* type

Data type of the pseudo-attribute value (four-character string).

* **Returns:**
  str
