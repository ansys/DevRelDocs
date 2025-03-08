Load and inspect optiSLang OMDB files with Python:

```default
from py_omdb import PyOMDB

omdb = PyOMDB("/path/to/my.omdb")

for param_name in omdb.get_parameter_names():
    print(param_name)

for best_design in omdb.get_best_designs():
    print(best_design.get_id())
```



### *class* py_omdb.AttachedPath


#### \_\_init_\_(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))


#### *property* auto_insert_placeholders

Automatically detect the design directory format and replace it by a placeholder.


#### *property* path

Path to an external file.


#### *property* title

User-defined title.


### *class* py_omdb.PyOMDB


#### \_\_init_\_()

#### \_\_init_\_(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

#### \_\_init_\_(arg2: str)


#### *property* algorithm_info

Structure providing information about the underlying algorithm that lead to the results.


#### attach_file_path(file: [AttachedPath](#py_omdb.AttachedPath))

#### attach_file_path(id: [UUID](id.md#id.UUID), file: [AttachedPath](#py_omdb.AttachedPath))

[0] Attach a path to an external file.

[1] Attach a path to an external file by id.


#### check_consistency()

Must be called after changes to OMDB.


#### clear_meta_data()

Clear the monitoring meta data.


#### *property* criteria

Criteria contained in monitoring database


#### *property* design_container

Design container contained in monitoring database


#### extract_important_parameter_name_list(, design_set: str]) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


#### get_attached_file_paths() → dict

Return a dictionay with ids as keys and attached paths as values.


#### get_best_designs() → [PyOSDesignContainer](py_os_design.md#py_os_design.PyOSDesignContainer)

Get the best designs. Takes design activation state into account.


#### get_best_subspaces(, design_set: str]) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)


#### get_build_date() → str

Return the build date of the application this database file has been created with.


#### get_design_duplication(arg2: [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)) → object

#### get_design_duplication(arg2: [HID](id.md#id.HID)) → object


#### get_nominal_design() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)


#### get_parameter_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


#### get_reference_design() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)


#### get_response_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


#### get_signal_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


#### get_surrogate_info(, design_set: str]) → [SurrogateInfoContainerList](#py_omdb.SurrogateInfoContainerList)


#### get_surrogate_info_names(, design_set: str]) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


#### get_version() → int

Return the version of the application this database file has been created with in the format 0xMMNNPP (MM = major, NN = minor, PP = maintenance).


#### get_version_str() → str

Return the version of the application this database file has been created with.


#### get_version_suffix() → str

Return the version suffix of the application this database file has been created with.


#### is_design_active(design: [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)) → bool

#### is_design_active(design: [HID](id.md#id.HID)) → bool

[0] Returns whether a design is active.

[1] Returns whether a design is active.


#### *property* parameter_manager

Parameter manager contained in monitoring database


#### remove_file_path(id: [UUID](id.md#id.UUID))

Remove attached file path by id.


#### save_to_file(output: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))


### *class* py_omdb.PySurrogateInfo


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### get_cop() → float


#### get_important_parameter_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


#### get_name() → str


#### get_params_sorted_by_cop() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


#### get_response_component_name() → str


#### get_single_cop(parameter_name: str) → float


#### get_testing_type() → [TestingType](#py_omdb.TestingType)


#### has_cop() → bool


#### has_single_cop(parameter_name: str) → bool


### *class* py_omdb.SurrogateInfoContainerList


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


### *class* py_omdb.TestingType

**Enumeration**


#### CROSSVALIDATION *= py_omdb.TestingType.CROSSVALIDATION*


#### LEAVEONEOUT *= py_omdb.TestingType.LEAVEONEOUT*


### py_omdb.write_cop_matrix_to_file(omdb: PyOMDB, file: Path)

Write COP matrix from omdb to file.
