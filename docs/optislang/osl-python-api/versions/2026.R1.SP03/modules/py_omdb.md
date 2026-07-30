# py_omdb

Load and inspect optiSLang OMDB files with Python:

```default
from py_omdb import PyOMDB

omdb = PyOMDB("/path/to/my.omdb")

for param_name in omdb.get_parameter_names():
    print(param_name)

for best_design in omdb.get_best_designs():
    print(best_design.get_id())
```

<a id="module-py_omdb"></a>

<a id="py_omdb.AttachedPath"></a>

## *class* py_omdb.AttachedPath

- <a id="py_omdb.AttachedPath.__init__"></a>`__init__(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))`
- <a id="py_omdb.AttachedPath.auto_insert_placeholders"></a>*property* `auto_insert_placeholders`<br>
  Automatically detect the design directory format and replace it by a placeholder.
- <a id="py_omdb.AttachedPath.path"></a>*property* `path`<br>
  Path to an external file.
- <a id="py_omdb.AttachedPath.title"></a>*property* `title`<br>
  User-defined title.

<a id="py_omdb.PyOMDB"></a>

## *class* py_omdb.PyOMDB

- <a id="py_omdb.PyOMDB.__init__"></a>`__init__()`
- `__init__(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))`
- `__init__(arg2: str)`
- <a id="py_omdb.PyOMDB.algorithm_info"></a>*property* `algorithm_info`<br>
  Structure providing information about the underlying algorithm that lead to the results.
- <a id="py_omdb.PyOMDB.attach_file_path"></a>`attach_file_path(file: [AttachedPath](#py_omdb.AttachedPath))`<br>
  [0] Attach a path to an external file. [1] Attach a path to an external file by id.
- `attach_file_path(id: [UUID](id.md#id.UUID), file: [AttachedPath](#py_omdb.AttachedPath))`
- <a id="py_omdb.PyOMDB.check_consistency"></a>`check_consistency()`<br>
  Must be called after changes to OMDB.
- <a id="py_omdb.PyOMDB.clear_meta_data"></a>`clear_meta_data()`<br>
  Clear the monitoring meta data.
- <a id="py_omdb.PyOMDB.criteria"></a>*property* `criteria`<br>
  Criteria contained in monitoring database
- <a id="py_omdb.PyOMDB.design_container"></a>*property* `design_container`<br>
  Design container contained in monitoring database
- <a id="py_omdb.PyOMDB.extract_important_parameter_name_list"></a>`extract_important_parameter_name_list(, design_set: str]) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)`
- <a id="py_omdb.PyOMDB.get_attached_file_paths"></a>`get_attached_file_paths() → dict`<br>
  Return a dictionay with ids as keys and attached paths as values.
- <a id="py_omdb.PyOMDB.get_best_designs"></a>`get_best_designs() → [PyOSDesignContainer](py_os_design.md#py_os_design.PyOSDesignContainer)`<br>
  Get the best designs. Takes design activation state into account.
- <a id="py_omdb.PyOMDB.get_best_subspaces"></a>`get_best_subspaces(, design_set: str]) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)`
- <a id="py_omdb.PyOMDB.get_build_date"></a>`get_build_date() → str`<br>
  Return the build date of the application this database file has been created with.
- <a id="py_omdb.PyOMDB.get_design_duplication"></a>`get_design_duplication(arg2: [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)) → object`
- `get_design_duplication(arg2: [HID](id.md#id.HID)) → object`
- <a id="py_omdb.PyOMDB.get_nominal_design"></a>`get_nominal_design() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)`
- <a id="py_omdb.PyOMDB.get_parameter_names"></a>`get_parameter_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)`
- <a id="py_omdb.PyOMDB.get_reference_design"></a>`get_reference_design() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)`
- <a id="py_omdb.PyOMDB.get_response_names"></a>`get_response_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)`
- <a id="py_omdb.PyOMDB.get_signal_names"></a>`get_signal_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)`
- <a id="py_omdb.PyOMDB.get_surrogate_info"></a>`get_surrogate_info(, design_set: str]) → [SurrogateInfoContainerList](#py_omdb.SurrogateInfoContainerList)`
- <a id="py_omdb.PyOMDB.get_surrogate_info_names"></a>`get_surrogate_info_names(, design_set: str]) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)`
- <a id="py_omdb.PyOMDB.get_version"></a>`get_version() → int`<br>
  Return the version of the application this database file has been created with in the format 0xMMNNPP (MM = major, NN = minor, PP = maintenance).
- <a id="py_omdb.PyOMDB.get_version_str"></a>`get_version_str() → str`<br>
  Return the version of the application this database file has been created with.
- <a id="py_omdb.PyOMDB.get_version_suffix"></a>`get_version_suffix() → str`<br>
  Return the version suffix of the application this database file has been created with.
- <a id="py_omdb.PyOMDB.is_design_active"></a>`is_design_active(design: [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)) → bool`<br>
  [0] Returns whether a design is active. [1] Returns whether a design is active.
- `is_design_active(design: [HID](id.md#id.HID)) → bool`
- <a id="py_omdb.PyOMDB.parameter_manager"></a>*property* `parameter_manager`<br>
  Parameter manager contained in monitoring database
- <a id="py_omdb.PyOMDB.remove_file_path"></a>`remove_file_path(id: [UUID](id.md#id.UUID))`<br>
  Remove attached file path by id.
- <a id="py_omdb.PyOMDB.save_to_file"></a>`save_to_file(output: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))`

<a id="py_omdb.PySurrogateInfo"></a>

## *class* py_omdb.PySurrogateInfo

- <a id="py_omdb.PySurrogateInfo.__init__"></a>`__init__()`<br>
  Raises an exception This class cannot be instantiated from Python
- <a id="py_omdb.PySurrogateInfo.get_cop"></a>`get_cop() → float`
- <a id="py_omdb.PySurrogateInfo.get_important_parameter_names"></a>`get_important_parameter_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)`
- <a id="py_omdb.PySurrogateInfo.get_name"></a>`get_name() → str`
- <a id="py_omdb.PySurrogateInfo.get_params_sorted_by_cop"></a>`get_params_sorted_by_cop() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)`
- <a id="py_omdb.PySurrogateInfo.get_response_component_name"></a>`get_response_component_name() → str`
- <a id="py_omdb.PySurrogateInfo.get_single_cop"></a>`get_single_cop(parameter_name: str) → float`
- <a id="py_omdb.PySurrogateInfo.get_testing_type"></a>`get_testing_type() → [TestingType](#py_omdb.TestingType)`
- <a id="py_omdb.PySurrogateInfo.has_cop"></a>`has_cop() → bool`
- <a id="py_omdb.PySurrogateInfo.has_single_cop"></a>`has_single_cop(parameter_name: str) → bool`

<a id="py_omdb.SurrogateInfoContainerList"></a>

## *class* py_omdb.SurrogateInfoContainerList

- <a id="py_omdb.SurrogateInfoContainerList.__contains__"></a>`__contains__(arg2: object) → bool`
- <a id="py_omdb.SurrogateInfoContainerList.__delitem__"></a>`__delitem__(arg2: object)`
- <a id="py_omdb.SurrogateInfoContainerList.__getitem__"></a>`__getitem__(arg2: object) → object`
- <a id="py_omdb.SurrogateInfoContainerList.__init__"></a>`__init__()`<br>
  Raises an exception This class cannot be instantiated from Python
- <a id="py_omdb.SurrogateInfoContainerList.__iter__"></a>`__iter__() → object`
- <a id="py_omdb.SurrogateInfoContainerList.__len__"></a>`__len__() → int`
- <a id="py_omdb.SurrogateInfoContainerList.__setitem__"></a>`__setitem__(arg2: object, arg3: object)`
- <a id="py_omdb.SurrogateInfoContainerList.append"></a>`append(arg2: object)`
- <a id="py_omdb.SurrogateInfoContainerList.extend"></a>`extend(arg2: object)`

<a id="py_omdb.TestingType"></a>

## *class* py_omdb.TestingType

**Enumeration**

- <a id="py_omdb.TestingType.CROSSVALIDATION"></a>`CROSSVALIDATION *= py_omdb.TestingType.CROSSVALIDATION*`
- <a id="py_omdb.TestingType.LEAVEONEOUT"></a>`LEAVEONEOUT *= py_omdb.TestingType.LEAVEONEOUT*`

<a id="py_omdb.write_cop_matrix_to_file"></a>

## py_omdb.write_cop_matrix_to_file(omdb: PyOMDB, file: Path)

Write COP matrix from omdb to file.
