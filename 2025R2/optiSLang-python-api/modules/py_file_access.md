

### *class* py_file_access.FileProvider


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### *property* file_access_types

List available types of file access.


#### get_item(arg2: [FileProviderId](#py_file_access.FileProviderId)) → [FileProviderItem](#py_file_access.FileProviderItem)

Get item by ID.


#### set_item(arg2: [FileProviderItem](#py_file_access.FileProviderItem)) → bool

Set item.


### *class* py_file_access.FileProviderId


#### \_\_init_\_()


#### \_\_str_\_() → str


#### *property* name

Name


### *class* py_file_access.FileProviderItem


#### *class* Action

**Enumeration**

Enumerates possible FileProviderItem action types.


#### LOCAL_COMPRESS_GZ *= py_file_access.Action.LOCAL_COMPRESS_GZ*


#### LOCAL_REMOVE *= py_file_access.Action.LOCAL_REMOVE*


#### NONE *= py_file_access.Action.NONE*


#### RECEIVE *= py_file_access.Action.RECEIVE*


#### SEND *= py_file_access.Action.SEND*


#### *class* ActionPoint

**Enumeration**

Enumerates possible FileProviderItem action points.


#### CLOSE *= py_file_access.ActionPoint.CLOSE*


#### LOAD *= py_file_access.ActionPoint.LOAD*


#### NODE_FAILED *= py_file_access.ActionPoint.NODE_FAILED*


#### NODE_FINISHED *= py_file_access.ActionPoint.NODE_FINISHED*


#### NODE_STARTED *= py_file_access.ActionPoint.NODE_STARTED*


#### NODE_SUCCEEDED *= py_file_access.ActionPoint.NODE_SUCCEEDED*


#### NONE *= py_file_access.ActionPoint.NONE*


#### RUN_FINISHED *= py_file_access.ActionPoint.RUN_FINISHED*


#### RUN_STARTED *= py_file_access.ActionPoint.RUN_STARTED*


#### SAVE *= py_file_access.ActionPoint.SAVE*


#### *class* Existence

**Enumeration**

Enumerates possible FileProviderItem file existence options.


#### DONT_CARE *= py_file_access.Existence.DONT_CARE*


#### INDICATES_FAILURE *= py_file_access.Existence.INDICATES_FAILURE*


#### REQUIRED_FOR_SUCCESS *= py_file_access.Existence.REQUIRED_FOR_SUCCESS*


#### *class* Usage

**Enumeration**

Enumerates possible FileProviderItem usage types.


#### INPUT_FILE *= py_file_access.Usage.INPUT_FILE*


#### INTERMEDIATE_RESULT *= py_file_access.Usage.INTERMEDIATE_RESULT*


#### OUTPUT_FILE *= py_file_access.Usage.OUTPUT_FILE*


#### UNDETERMINED *= py_file_access.Usage.UNDETERMINED*


#### \_\_init_\_()


#### *property* action

Action to be performed


#### *property* action_point

Point in time for the action to be performed


#### *property* auto_generated

Whether file is auto-generated


#### *property* comment

Free text for comments


#### *property* existence

Option controlling whether the local file existence is required


#### *property* filename_regex

Option controlling the regular expression for filename matching


#### *property* id

ID


#### *property* local_path

RelativeSplittedPath on the local system


#### *property* name

Item name


#### *property* remove_on_reset

Whether file should be removed when associated node is reset


#### *property* revision

Revision


#### *property* save_location

Save location


#### *property* store_in_project

Whether to store file in project


#### *property* type

Access type


#### *property* usage

File usage


#### *property* use_regex_for_filename

Whether to match filenames against a regular expression when checking for local files existence


#### *property* wait_for_file

Whether to wait for the file after the node finished execution


### *class* py_file_access.ProvidedPath


#### \_\_init_\_()

#### \_\_init_\_(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

#### \_\_init_\_(arg2: [SplittedPath](stdcpp_python_export.md#stdcpp_python_export.SplittedPath))

#### \_\_init_\_(arg2: [RelativeSplittedPath](stdcpp_python_export.md#stdcpp_python_export.RelativeSplittedPath))

#### \_\_init_\_(arg2: [FileProviderId](#py_file_access.FileProviderId))


#### \_\_str_\_() → str


#### *property* actual_relative_split_path

Actual RelativeSplittedPath. Takes central file registration into account.


#### *property* empty

True if ProvidedPath is empty


#### *property* file_provider_id

A FileProviderId in case a FileProviderId is contained, or None otherwise.


#### get_actual_path(file_provider: FileProvider) → [Path](stdcpp_python_export.md#stdcpp_python_export.Path)

Return the actual file path. Takes central file registration into account.


#### *property* relative_split_path

A RelativeSplittedPath in case a RelativeSplittedPath is contained, or None otherwise.
