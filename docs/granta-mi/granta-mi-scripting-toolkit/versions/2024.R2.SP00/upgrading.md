# Upgrading from earlier versions

Breaking changes from previous releases of MI Scripting Toolkit for Python.

<a id="upgrading-from-mi-scripting-toolkit-for-python-version-3-3"></a>

## Upgrading from MI Scripting Toolkit for Python Version 3.3

<a id="subsets"></a>

### Subsets

* If your code does not use the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property and the default subset in your
  tables contain all records, you should see no behavior changes. *This is the most common
  scenario.*
* If your code sets the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to the default subset, then you should
  disable this assignment from your code, since it now occurs automatically.
* If your code sets the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to a non-default subset, then you should
  clear the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property with `table_object.subsets.clear()` before setting the
  non-default subset.
* If your code sets the [`Table.subsets`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.subsets) property to a set containing more than one subset and
  you perform any subsequent record fetching or search operations, these operations will raise a
  `ValueError`. They would previously not consider all applied subsets, and so would return
  incorrect results.

<a id="searching-and-browsing-for-records"></a>

### Searching and browsing for records

* All searches except [`Database.search_for_records_by_text()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_by_text) now apply a subset filter when
  searching. If a table included in a search has multiple applied subsets, a `ValueError` is
  raised.
* The [`Table.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.search_for_records_where) `list_of_criteria` parameter must now only contain
  criteria based on pseudo-attributes and attribute definitions from the table being searched.
  Otherwise a `ValueError` is raised.
* The [`Database.search_for_records_where()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database.search_for_records_where) `list_of_criteria` parameter must now only
  contain criteria based on pseudo-attributes and attribute definitions from at most one table
  within the database being searched. Otherwise a `ValueError` is raised.
* Getting records based on the Granta MI tree is generally now subject to subset filtering. If a
  table included in a record fetch operation has multiple applied subsets, a `ValueError` is
  raised.

<a id="other-changes"></a>

### Other changes

* [`Session.records_from_string()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.records_from_string) now defaults to `use_strict_version=True`.
* `get_records_by_ids` and `get_record_by_id` methods on [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session), [`Database`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Database),
  and [`Table`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) classes no longer accept the `identity` argument. Use `history_identity`
  instead.
* [`Table.paths_from()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.paths_from), [`Table.path_from()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from), and [`Table.get_records_from_path()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.get_records_from_path) no
  longer support `str` and [`Table`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table) inputs. Use `None` to use the table root as starting
  node. All three methods now raise a `ValueError` if the record specified as `starting_node`
  is not in the current table, and raise a `TypeError` if the argument value is not a
  [`Record`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record) or `None`.
* [`Record.color`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color) no longer supports `str` inputs. Only [`RecordColor`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_constants.RecordColor) objects
  are supported.
* [`AttributeFunctional.add_point()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_point) and [`AttributeFunctional.add_range()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional.add_range) methods now
  raise `KeyError` exceptions if a dictionary with incorrect keys is provided.
* [`File.load()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.load), [`File.save()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.save), [`Picture.load()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.load), and [`Picture.save()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture.save) no longer
  accept `file_name` as an argument. Provide the full path including the file name to the `path`
  argument. For file attributes, the name of the file is part of the attribute value and can be
  accessed via [`AttributeFile.file_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile.file_name) or [`File.file_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.file_name) to build a full path.
* `File.name` has been removed. Use [`File.file_name`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.file_name).
* `Picture.name` has been removed.
* [`File`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File) and [`Picture`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Picture) no longer accept `name` or `load` as arguments. Provide
  the full path to the file/picture (including the file name) to the keyword only argument `path`.
* [`File.description`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.File.description) now only supports `str` inputs.

<a id="asyncjobs"></a>

### AsyncJobs

The AsyncJobQueue functionality has been moved to a new PyAnsys package called PyGranta JobQueue.
If you are using Granta MI 2024 R2 or later, you can use this package to import and export Excel
files and import text data into Granta MI. If you are using Granta MI 2024 R1 or earlier and require
Job Queue functionality, you should continue to use Scripting Toolkit v3.3.

<a id="upgrading-from-mi-scripting-toolkit-for-python-version-3-2"></a>

## Upgrading from MI Scripting Toolkit for Python Version 3.2

[`AttributeHyperlink.object`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.object) no longer supports `str` inputs. Only [`Hyperlink`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.Hyperlink) objects
are supported. This was deprecated in previous versions of the scripting toolkit.

<a id="upgrading-from-mi-scripting-toolkit-for-python-version-3-1"></a>

## Upgrading from MI Scripting Toolkit for Python Version 3.1

Any code which performs bulk export operations on file and picture attributes should be modified either to
access the binary data with an HTTP library such as [requests](https://pypi.org/project/requests/) or
[httpx](https://pypi.org/project/httpx/). Alternatively, the binary data can be exported directly by
specifying `include_binary_data = True` in the call to [`Table.bulk_fetch()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.bulk_fetch). However, this is likely
to be less performant for large amounts of data.

<a id="upgrading-from-mi-scripting-toolkit-for-python-version-3-0"></a>

## Upgrading from MI Scripting Toolkit for Python Version 3.0

* The ability to set the [`Record.color`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color) property using a string is deprecated and will be removed in a
  future release. Record color must now be specified using an enum. The enum will behave like a string in most cases,
  but this is not guaranteed.

  We recommend that you update any scripts that use the [`Record.color`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.color) property to ensure that they handle enum
  values - e.g., concatenation of `recordColor1+recordColor2` becomes `f"{recordColor1}{recordColor2}"`
* The `Record.id` property has been deprecated and will be removed in a future release. The record’s History ID
  value is available via a new property [`Record.history_identity`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.history_identity). We recommend that you update any scripts that
  use `Record.id` to use [`Record.history_identity`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_record_classes.Record.history_identity) instead.

<a id="upgrading-from-mi-scripting-toolkit-for-python-version-2-x"></a>

## Upgrading from MI Scripting Toolkit for Python Version 2.X

<a id="backwards-incompatible-api-changes"></a>

### Backwards-incompatible API changes

Scripts written for 2.X versions of MI Scripting Toolkit will need to be modified due to the following breaking changes:

<a id="new-store-password-option-on-the-session-class"></a>

### New `store_password` option on the [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) class

**Old behavior:** The `password` for a [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) is used to connect to Granta MI once, and cannot be stored.

**New behavior:** The `password` assigned to a [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) can be stored and used multiple times. You must
specify whether you want to store the password or not using the `store_password` property. If `store_password` is
missing, bulk operations will fail.

<a id="attributevalue-value-property-has-been-standardized"></a>

### AttributeValue.value property has been standardized

| Class                                                                                                                  | Old (2.X) behavior                                                                                                                                                                                                                                               | New (3.0) behavior                                                                                                                                                                                                                                                                                                                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttributePoint`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint)           | `.points` returns the attribute value or values as a [`list`](https://docs.python.org/3/library/stdtypes.html#list) in all cases.                                                                                                                                | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePoint.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of [`float`](https://docs.python.org/3/library/functions.html#float) values if the attribute is listed<br/>as multi-valued in the schema, and a single [`float`](https://docs.python.org/3/library/functions.html#float) value if single-valued. |
| [`AttributeDiscrete`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete)     | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.value) always returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list), even when attribute is listed as<br/>single-valued in the schema. | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeDiscrete.value) returns [`list`](https://docs.python.org/3/library/stdtypes.html#list) of [`str`](https://docs.python.org/3/library/stdtypes.html#str) values if the attribute is<br/>multi-valued, and a single [`str`](https://docs.python.org/3/library/stdtypes.html#str) value if single-valued.                                  |
| [`AttributeFunctional`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFunctional) | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                                                                                                                     | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of data values.                                                                                                                                                                                                                                  |
| [`AttributeTabular`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular)       | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) returns an instance of the class.                                                                                                                   | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeTabular.value) returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) of data values for each column.                                                                                                                                                                                                                |
| [`AttributeHyperlink`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink)   | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.value) returns an instance of the class.                                                                                                                 | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeHyperlink.value) returns the URL as a [`str`](https://docs.python.org/3/library/stdtypes.html#str), or [`None`](https://docs.python.org/3/library/constants.html#None) if no URL has been<br/>set.                                                                                                                                     |
| [`AttributeFile`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile)             | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                                                                                                                     | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns binary data as a [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object.                                                                                                                                                                                                                         |
| [`AttributePicture`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture)       | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns an instance of the class.                                                                                                                     | [`.value`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeValue.value) returns binary data as a [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) object.                                                                                                                                                                                                                         |

<a id="pending-deprecations"></a>

### Pending deprecations

We recommend changes to all scripts due to a pending deprecation:

<a id="file-and-picture-path-arguments-now-include-file-name"></a>

#### File and Picture `path` arguments now include file name

**Old behavior (may not be supported in future releases):** The `path` argument for [`AttributeFile`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributeFile) and
[`AttributePicture`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_attribute_value_classes.AttributePicture) objects and methods contains the folder path to the file, and the `file_name` argument
contains the file name and extension.

**New behavior:** The `path` argument contains the file path with file name and extension. The `file_name` argument
is no longer used.

<a id="additional-changes-to-version-2-0-scripts"></a>

### Additional changes to Version 2.0 scripts

Version 2.0 scripts may need to be modified to take account of these additional breaking changes:

<a id="all-search-methods-now-return-an-empty-list-when-no-records-are-found"></a>

#### All search methods now return an empty list when no records are found

**Old behavior:** Text and criteria searches returned [`None`](https://docs.python.org/3/library/constants.html#None) when no results were found, while other methods
returned an empty [`list`](https://docs.python.org/3/library/stdtypes.html#list).

**New behavior:** All search methods now return an empty [`list`](https://docs.python.org/3/library/stdtypes.html#list) when no records are found.

<a id="search-for-records-by-text-now-returns-same-type-at-session-level-and-database-level"></a>

#### search_for_records_by_text now returns same type at session level and database level

**Old behavior:** [`Session.search_for_records_by_text()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_text) returned an `iterator`, due to the potentially large
number of results. At the database and table level, it returned a [`list`](https://docs.python.org/3/library/stdtypes.html#list).

**New behavior:** [`Session.search_for_records_by_text()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session.search_for_records_by_text) now returns a [`list`](https://docs.python.org/3/library/stdtypes.html#list) in all cases.

<a id="table-path-from-no-longer-sets-the-record-color-unless-specified"></a>

#### Table.path_from no longer sets the record color unless specified

**Old behavior:** [`Table.path_from()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_tree_classes.Table.path_from) automatically set the color of the records in the path to the default record
color when `color` was not specified.

**New behavior:** The color of records in the path is not changed unless `color` is explicitly set.

<a id="identifying-databases-by-name-and-dbkey"></a>

#### Identifying databases by name and dbkey

The way that databases are identified when both database `name` and `db_key` are provided has changed.

**Old behavior:** if `name` and `db_key` were provided, the search would stop as soon as a unique name match was
made; `db_key` was only used if the name search did not produce a single result.

**New behavior:** if both `name` and `db_key` are specified, MI Scripting Toolkit will search through the available
databases until it finds a database where *both* the name *and* key match.

<a id="handling-of-dates"></a>

#### Handling of dates

The way that date-type data is handled has changed.

**Old behavior:** dates were handled as strings.

**New behavior:** dates can be read in as Python’s built-in [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects (as well as [`str`](https://docs.python.org/3/library/stdtypes.html#str)
objects), and additionally they return [`datetime.datetime`](https://docs.python.org/3/library/datetime.html#datetime.datetime) objects.

<a id="session-search-for-records-where-method-removed"></a>

#### Session.search_for_records_where method removed

The `search_for_records_where` method on the [`Session`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi.Session) class has been removed.

<a id="upgrading-from-mi-scripting-toolkit-for-python-version-1-x"></a>

## Upgrading from MI Scripting Toolkit for Python Version 1.X

The Streamlined API in MI Scripting Toolkit 2.0 onwards is designed to make upgrading from 1.X versions of MI Scripting
Toolkit as simple as possible.

<a id="you-do-not-need-to-change"></a>

### You do not need to change

> * How you import the Foundation API library.
> * Use or names of Services or modules.

<a id="you-do-need-to-change-or-check"></a>

### You do need to change (or check)

> * The version of Python you use.
> * Any syntax or commands you are using from Python 2 that have deprecated. [This summary](https://wiki.python.org/moin/Python2orPython3) from Python.org is a good place to start.
> * Any libraries not supported in Python 3.
> * Unicode/byte string encoding when upgrading to Python 3.

You may also need to modify your scripts to account for breaking changes in subsequent releases identified above.

<a id="taking-advantage-of-new-features"></a>

### Taking advantage of new features

As well as Python 3.5+ functionality such as type hints, automatic use of C accelerators, and memory-efficient list and
dict objects, the Streamlined API supports improved productivity with these key features:

> * Pythonic wrappers for request/response classes: write fewer lines of code
> * Optimized for bulk import and export of data
> * Improved user assistance: docstrings, new example Python notebooks, and `__repr__` for all classes

You can also get up to speed quickly with our Example Notebooks, and compare them to the equivalent Foundation API
Notebooks.
