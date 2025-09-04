# py_file_access

<a id="py_file_access.FileProvider"></a>

## *class* py_file_access.FileProvider

<a id="py_file_access.FileProvider.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_file_access.FileProvider.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_file_access.FileProvider.__len__"></a>

#### \_\_len_\_() → int

<a id="py_file_access.FileProvider.file_access_types"></a>

#### *property* file_access_types

List available types of file access.

<a id="py_file_access.FileProvider.get_item"></a>

#### get_item(arg2: [FileProviderId](#py_file_access.FileProviderId)) → [FileProviderItem](#py_file_access.FileProviderItem)

Get item by ID.

<a id="py_file_access.FileProvider.set_item"></a>

#### set_item(arg2: [FileProviderItem](#py_file_access.FileProviderItem)) → bool

Set item.

<a id="py_file_access.FileProviderId"></a>

## *class* py_file_access.FileProviderId

<a id="py_file_access.FileProviderId.__init__"></a>

#### \_\_init_\_()

<a id="py_file_access.FileProviderId.__str__"></a>

#### \_\_str_\_() → str

<a id="py_file_access.FileProviderId.name"></a>

#### *property* name

Name

<a id="py_file_access.FileProviderItem"></a>

## *class* py_file_access.FileProviderItem

<a id="py_file_access.FileProviderItem.Action"></a>

#### *class* Action

**Enumeration**

Enumerates possible FileProviderItem action types.

<a id="py_file_access.FileProviderItem.Action.LOCAL_COMPRESS_GZ"></a>

#### LOCAL_COMPRESS_GZ *= py_file_access.Action.LOCAL_COMPRESS_GZ*

<a id="py_file_access.FileProviderItem.Action.LOCAL_REMOVE"></a>

#### LOCAL_REMOVE *= py_file_access.Action.LOCAL_REMOVE*

<a id="py_file_access.FileProviderItem.Action.NONE"></a>

#### NONE *= py_file_access.Action.NONE*

<a id="py_file_access.FileProviderItem.Action.RECEIVE"></a>

#### RECEIVE *= py_file_access.Action.RECEIVE*

<a id="py_file_access.FileProviderItem.Action.SEND"></a>

#### SEND *= py_file_access.Action.SEND*

<a id="py_file_access.FileProviderItem.ActionPoint"></a>

#### *class* ActionPoint

**Enumeration**

Enumerates possible FileProviderItem action points.

<a id="py_file_access.FileProviderItem.ActionPoint.CLOSE"></a>

#### CLOSE *= py_file_access.ActionPoint.CLOSE*

<a id="py_file_access.FileProviderItem.ActionPoint.LOAD"></a>

#### LOAD *= py_file_access.ActionPoint.LOAD*

<a id="py_file_access.FileProviderItem.ActionPoint.NODE_FAILED"></a>

#### NODE_FAILED *= py_file_access.ActionPoint.NODE_FAILED*

<a id="py_file_access.FileProviderItem.ActionPoint.NODE_FINISHED"></a>

#### NODE_FINISHED *= py_file_access.ActionPoint.NODE_FINISHED*

<a id="py_file_access.FileProviderItem.ActionPoint.NODE_STARTED"></a>

#### NODE_STARTED *= py_file_access.ActionPoint.NODE_STARTED*

<a id="py_file_access.FileProviderItem.ActionPoint.NODE_SUCCEEDED"></a>

#### NODE_SUCCEEDED *= py_file_access.ActionPoint.NODE_SUCCEEDED*

<a id="py_file_access.FileProviderItem.ActionPoint.NONE"></a>

#### NONE *= py_file_access.ActionPoint.NONE*

<a id="py_file_access.FileProviderItem.ActionPoint.RUN_FINISHED"></a>

#### RUN_FINISHED *= py_file_access.ActionPoint.RUN_FINISHED*

<a id="py_file_access.FileProviderItem.ActionPoint.RUN_STARTED"></a>

#### RUN_STARTED *= py_file_access.ActionPoint.RUN_STARTED*

<a id="py_file_access.FileProviderItem.ActionPoint.SAVE"></a>

#### SAVE *= py_file_access.ActionPoint.SAVE*

<a id="py_file_access.FileProviderItem.Existence"></a>

#### *class* Existence

**Enumeration**

Enumerates possible FileProviderItem file existence options.

<a id="py_file_access.FileProviderItem.Existence.DONT_CARE"></a>

#### DONT_CARE *= py_file_access.Existence.DONT_CARE*

<a id="py_file_access.FileProviderItem.Existence.INDICATES_FAILURE"></a>

#### INDICATES_FAILURE *= py_file_access.Existence.INDICATES_FAILURE*

<a id="py_file_access.FileProviderItem.Existence.REQUIRED_FOR_SUCCESS"></a>

#### REQUIRED_FOR_SUCCESS *= py_file_access.Existence.REQUIRED_FOR_SUCCESS*

<a id="py_file_access.FileProviderItem.Usage"></a>

#### *class* Usage

**Enumeration**

Enumerates possible FileProviderItem usage types.

<a id="py_file_access.FileProviderItem.Usage.INPUT_FILE"></a>

#### INPUT_FILE *= py_file_access.Usage.INPUT_FILE*

<a id="py_file_access.FileProviderItem.Usage.INTERMEDIATE_RESULT"></a>

#### INTERMEDIATE_RESULT *= py_file_access.Usage.INTERMEDIATE_RESULT*

<a id="py_file_access.FileProviderItem.Usage.OUTPUT_FILE"></a>

#### OUTPUT_FILE *= py_file_access.Usage.OUTPUT_FILE*

<a id="py_file_access.FileProviderItem.Usage.UNDETERMINED"></a>

#### UNDETERMINED *= py_file_access.Usage.UNDETERMINED*

<a id="py_file_access.FileProviderItem.__init__"></a>

#### \_\_init_\_()

<a id="py_file_access.FileProviderItem.action"></a>

#### *property* action

Action to be performed

<a id="py_file_access.FileProviderItem.action_point"></a>

#### *property* action_point

Point in time for the action to be performed

<a id="py_file_access.FileProviderItem.auto_generated"></a>

#### *property* auto_generated

Whether file is auto-generated

<a id="py_file_access.FileProviderItem.comment"></a>

#### *property* comment

Free text for comments

<a id="py_file_access.FileProviderItem.existence"></a>

#### *property* existence

Option controlling whether the local file existence is required

<a id="py_file_access.FileProviderItem.filename_regex"></a>

#### *property* filename_regex

Option controlling the regular expression for filename matching

<a id="py_file_access.FileProviderItem.id"></a>

#### *property* id

ID

<a id="py_file_access.FileProviderItem.local_path"></a>

#### *property* local_path

RelativeSplittedPath on the local system

<a id="py_file_access.FileProviderItem.name"></a>

#### *property* name

Item name

<a id="py_file_access.FileProviderItem.remove_on_reset"></a>

#### *property* remove_on_reset

Whether file should be removed when associated node is reset

<a id="py_file_access.FileProviderItem.revision"></a>

#### *property* revision

Revision

<a id="py_file_access.FileProviderItem.save_location"></a>

#### *property* save_location

Save location

<a id="py_file_access.FileProviderItem.store_in_project"></a>

#### *property* store_in_project

Whether to store file in project

<a id="py_file_access.FileProviderItem.type"></a>

#### *property* type

Access type

<a id="py_file_access.FileProviderItem.usage"></a>

#### *property* usage

File usage

<a id="py_file_access.FileProviderItem.use_regex_for_filename"></a>

#### *property* use_regex_for_filename

Whether to match filenames against a regular expression when checking for local files existence

<a id="py_file_access.FileProviderItem.wait_for_file"></a>

#### *property* wait_for_file

Whether to wait for the file after the node finished execution

<a id="py_file_access.ProvidedPath"></a>

## *class* py_file_access.ProvidedPath

<a id="py_file_access.ProvidedPath.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

#### \_\_init_\_(arg2: [SplittedPath](stdcpp_python_export.md#stdcpp_python_export.SplittedPath))

#### \_\_init_\_(arg2: [RelativeSplittedPath](stdcpp_python_export.md#stdcpp_python_export.RelativeSplittedPath))

#### \_\_init_\_(arg2: [FileProviderId](#py_file_access.FileProviderId))

<a id="py_file_access.ProvidedPath.__str__"></a>

#### \_\_str_\_() → str

<a id="py_file_access.ProvidedPath.actual_relative_split_path"></a>

#### *property* actual_relative_split_path

Actual RelativeSplittedPath. Takes central file registration into account.

<a id="py_file_access.ProvidedPath.empty"></a>

#### *property* empty

True if ProvidedPath is empty

<a id="py_file_access.ProvidedPath.file_provider_id"></a>

#### *property* file_provider_id

A FileProviderId in case a FileProviderId is contained, or None otherwise.

<a id="py_file_access.ProvidedPath.get_actual_path"></a>

#### get_actual_path(file_provider: FileProvider) → [Path](stdcpp_python_export.md#stdcpp_python_export.Path)

Return the actual file path. Takes central file registration into account.

<a id="py_file_access.ProvidedPath.relative_split_path"></a>

#### *property* relative_split_path

A RelativeSplittedPath in case a RelativeSplittedPath is contained, or None otherwise.
