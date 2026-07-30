# py_file_access

<a id="py_file_access.FileProvider"></a>

## *class* py_file_access.FileProvider

- <a id="py_file_access.FileProvider.__init__"></a>`__init__()`<br>
  Raises an exception This class cannot be instantiated from Python
- <a id="py_file_access.FileProvider.__iter__"></a>`__iter__() → object`
- <a id="py_file_access.FileProvider.__len__"></a>`__len__() → int`
- <a id="py_file_access.FileProvider.file_access_types"></a>*property* `file_access_types`<br>
  List available types of file access.
- <a id="py_file_access.FileProvider.get_item"></a>`get_item(arg2: [FileProviderId](#py_file_access.FileProviderId)) → [FileProviderItem](#py_file_access.FileProviderItem)`<br>
  Get item by ID.
- <a id="py_file_access.FileProvider.set_item"></a>`set_item(arg2: [FileProviderItem](#py_file_access.FileProviderItem)) → bool`<br>
  Set item.

<a id="py_file_access.FileProviderId"></a>

## *class* py_file_access.FileProviderId

- <a id="py_file_access.FileProviderId.__init__"></a>`__init__()`
- <a id="py_file_access.FileProviderId.__str__"></a>`__str__() → str`
- <a id="py_file_access.FileProviderId.name"></a>*property* `name`<br>
  Name

<a id="py_file_access.FileProviderItem"></a>

## *class* py_file_access.FileProviderItem

- <a id="py_file_access.FileProviderItem.Action"></a>`*class* Action`<br>
  **Enumeration** Enumerates possible FileProviderItem action types.
- <a id="py_file_access.FileProviderItem.Action.LOCAL_COMPRESS_GZ"></a>`LOCAL_COMPRESS_GZ *= py_file_access.Action.LOCAL_COMPRESS_GZ*`
- <a id="py_file_access.FileProviderItem.Action.LOCAL_REMOVE"></a>`LOCAL_REMOVE *= py_file_access.Action.LOCAL_REMOVE*`
- <a id="py_file_access.FileProviderItem.Action.NONE"></a>`NONE *= py_file_access.Action.NONE*`
- <a id="py_file_access.FileProviderItem.Action.RECEIVE"></a>`RECEIVE *= py_file_access.Action.RECEIVE*`
- <a id="py_file_access.FileProviderItem.Action.SEND"></a>`SEND *= py_file_access.Action.SEND*`
- <a id="py_file_access.FileProviderItem.ActionPoint"></a>`*class* ActionPoint`<br>
  **Enumeration** Enumerates possible FileProviderItem action points.
- <a id="py_file_access.FileProviderItem.ActionPoint.CLOSE"></a>`CLOSE *= py_file_access.ActionPoint.CLOSE*`
- <a id="py_file_access.FileProviderItem.ActionPoint.LOAD"></a>`LOAD *= py_file_access.ActionPoint.LOAD*`
- <a id="py_file_access.FileProviderItem.ActionPoint.NODE_FAILED"></a>`NODE_FAILED *= py_file_access.ActionPoint.NODE_FAILED*`
- <a id="py_file_access.FileProviderItem.ActionPoint.NODE_FINISHED"></a>`NODE_FINISHED *= py_file_access.ActionPoint.NODE_FINISHED*`
- <a id="py_file_access.FileProviderItem.ActionPoint.NODE_STARTED"></a>`NODE_STARTED *= py_file_access.ActionPoint.NODE_STARTED*`
- <a id="py_file_access.FileProviderItem.ActionPoint.NODE_SUCCEEDED"></a>`NODE_SUCCEEDED *= py_file_access.ActionPoint.NODE_SUCCEEDED*`
- <a id="py_file_access.FileProviderItem.ActionPoint.NONE"></a>`NONE *= py_file_access.ActionPoint.NONE*`
- <a id="py_file_access.FileProviderItem.ActionPoint.RUN_FINISHED"></a>`RUN_FINISHED *= py_file_access.ActionPoint.RUN_FINISHED*`
- <a id="py_file_access.FileProviderItem.ActionPoint.RUN_STARTED"></a>`RUN_STARTED *= py_file_access.ActionPoint.RUN_STARTED*`
- <a id="py_file_access.FileProviderItem.ActionPoint.SAVE"></a>`SAVE *= py_file_access.ActionPoint.SAVE*`
- <a id="py_file_access.FileProviderItem.Existence"></a>`*class* Existence`<br>
  **Enumeration** Enumerates possible FileProviderItem file existence options.
- <a id="py_file_access.FileProviderItem.Existence.DONT_CARE"></a>`DONT_CARE *= py_file_access.Existence.DONT_CARE*`
- <a id="py_file_access.FileProviderItem.Existence.INDICATES_FAILURE"></a>`INDICATES_FAILURE *= py_file_access.Existence.INDICATES_FAILURE*`
- <a id="py_file_access.FileProviderItem.Existence.REQUIRED_FOR_SUCCESS"></a>`REQUIRED_FOR_SUCCESS *= py_file_access.Existence.REQUIRED_FOR_SUCCESS*`
- <a id="py_file_access.FileProviderItem.Usage"></a>`*class* Usage`<br>
  **Enumeration** Enumerates possible FileProviderItem usage types.
- <a id="py_file_access.FileProviderItem.Usage.INPUT_FILE"></a>`INPUT_FILE *= py_file_access.Usage.INPUT_FILE*`
- <a id="py_file_access.FileProviderItem.Usage.INTERMEDIATE_RESULT"></a>`INTERMEDIATE_RESULT *= py_file_access.Usage.INTERMEDIATE_RESULT*`
- <a id="py_file_access.FileProviderItem.Usage.OUTPUT_FILE"></a>`OUTPUT_FILE *= py_file_access.Usage.OUTPUT_FILE*`
- <a id="py_file_access.FileProviderItem.Usage.UNDETERMINED"></a>`UNDETERMINED *= py_file_access.Usage.UNDETERMINED*`
- <a id="py_file_access.FileProviderItem.__init__"></a>`__init__()`
- <a id="py_file_access.FileProviderItem.action"></a>*property* `action`<br>
  Action to be performed
- <a id="py_file_access.FileProviderItem.action_point"></a>*property* `action_point`<br>
  Point in time for the action to be performed
- <a id="py_file_access.FileProviderItem.auto_generated"></a>*property* `auto_generated`<br>
  Whether file is auto-generated
- <a id="py_file_access.FileProviderItem.comment"></a>*property* `comment`<br>
  Free text for comments
- <a id="py_file_access.FileProviderItem.existence"></a>*property* `existence`<br>
  Option controlling whether the local file existence is required
- <a id="py_file_access.FileProviderItem.filename_regex"></a>*property* `filename_regex`<br>
  Option controlling the regular expression for filename matching
- <a id="py_file_access.FileProviderItem.id"></a>*property* `id`<br>
  ID
- <a id="py_file_access.FileProviderItem.local_path"></a>*property* `local_path`<br>
  RelativeSplittedPath on the local system
- <a id="py_file_access.FileProviderItem.name"></a>*property* `name`<br>
  Item name
- <a id="py_file_access.FileProviderItem.remove_on_reset"></a>*property* `remove_on_reset`<br>
  Whether file should be removed when associated node is reset
- <a id="py_file_access.FileProviderItem.revision"></a>*property* `revision`<br>
  Revision
- <a id="py_file_access.FileProviderItem.save_location"></a>*property* `save_location`<br>
  Save location
- <a id="py_file_access.FileProviderItem.store_in_project"></a>*property* `store_in_project`<br>
  Whether to store file in project
- <a id="py_file_access.FileProviderItem.type"></a>*property* `type`<br>
  Access type
- <a id="py_file_access.FileProviderItem.usage"></a>*property* `usage`<br>
  File usage
- <a id="py_file_access.FileProviderItem.use_regex_for_filename"></a>*property* `use_regex_for_filename`<br>
  Whether to match filenames against a regular expression when checking for local files existence
- <a id="py_file_access.FileProviderItem.wait_for_file"></a>*property* `wait_for_file`<br>
  Whether to wait for the file after the node finished execution

<a id="py_file_access.ProvidedPath"></a>

## *class* py_file_access.ProvidedPath

- <a id="py_file_access.ProvidedPath.__init__"></a>`__init__()`
- `__init__(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))`
- `__init__(arg2: [SplittedPath](stdcpp_python_export.md#stdcpp_python_export.SplittedPath))`
- `__init__(arg2: [RelativeSplittedPath](stdcpp_python_export.md#stdcpp_python_export.RelativeSplittedPath))`
- `__init__(arg2: [FileProviderId](#py_file_access.FileProviderId))`
- <a id="py_file_access.ProvidedPath.__str__"></a>`__str__() → str`
- <a id="py_file_access.ProvidedPath.actual_relative_split_path"></a>*property* `actual_relative_split_path`<br>
  Actual RelativeSplittedPath. Takes central file registration into account.
- <a id="py_file_access.ProvidedPath.empty"></a>*property* `empty`<br>
  True if ProvidedPath is empty
- <a id="py_file_access.ProvidedPath.file_provider_id"></a>*property* `file_provider_id`<br>
  A FileProviderId in case a FileProviderId is contained, or None otherwise.
- <a id="py_file_access.ProvidedPath.get_actual_path"></a>`get_actual_path(file_provider: FileProvider) → [Path](stdcpp_python_export.md#stdcpp_python_export.Path)`<br>
  Return the actual file path. Takes central file registration into account.
- <a id="py_file_access.ProvidedPath.relative_split_path"></a>*property* `relative_split_path`<br>
  A RelativeSplittedPath in case a RelativeSplittedPath is contained, or None otherwise.
