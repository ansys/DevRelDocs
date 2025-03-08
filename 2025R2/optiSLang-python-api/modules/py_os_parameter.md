

### *class* py_os_parameter.DProp


#### \_\_init_\_()


### *class* py_os_parameter.DPropList


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### dprop_export_list() → [DPropList](#py_os_parameter.DPropList)


#### push_back(arg2: [DPropPair](#py_os_parameter.DPropPair))


#### size() → int


### *class* py_os_parameter.DPropPair


#### \_\_init_\_()


#### *property* first


#### *property* second


### *class* py_os_parameter.ParameterList


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### param_export_list() → [ParameterList](#py_os_parameter.ParameterList)


#### push_back(arg2: [PyParameter](#py_os_parameter.PyParameter))


#### size() → int


### *class* py_os_parameter.PyParameter


#### \_\_eq_\_(arg2: PyParameter) → bool


#### \_\_init_\_()

#### \_\_init_\_(arg2: str)

#### \_\_init_\_(arg2: str, arg3: float, arg4: float, arg5: float, arg6: int)

#### \_\_init_\_(arg2: str, arg3: float, arg4: float, arg5: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry), arg6: int)

#### \_\_init_\_(arg2: str, arg3: [PyOSDesignEntryVec](py_os_design.md#py_os_design.PyOSDesignEntryVec), arg4: [DeterministicType](dynardo_py_algorithms.md#dynardo_py_algorithms.DeterministicType))

#### \_\_init_\_(arg2: str, arg3: str)

#### \_\_init_\_(arg2: str, arg3: [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType), arg4: [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind), arg5: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))


#### \_\_is_equal_\_(arg2: PyParameter) → bool


#### \_\_is_not_equal_\_(arg2: [PyParameter](#py_os_parameter.PyParameter)) → bool


#### \_\_ne_\_(arg2: [PyParameter](#py_os_parameter.PyParameter)) → bool


#### erase_det_prop(name: str)


#### get_dependency_expression() → str


#### get_det_discrete_states() → [PyOSDesignEntryVec](py_os_design.md#py_os_design.PyOSDesignEntryVec)


#### get_det_kind() → [DeterministicType](dynardo_py_algorithms.md#dynardo_py_algorithms.DeterministicType)


#### get_det_prop_by_index(index: int) → [DProp](#py_os_parameter.DProp)


#### get_det_prop_name(index: int) → object


#### get_det_props() → [DPropList](#py_os_parameter.DPropList)


#### get_det_type() → [EntryType](py_os_design.md#py_os_design.EntryType)


#### get_id() → [UUID](id.md#id.UUID)


#### get_lower_bound() → [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)


#### get_mutable_map() → object


#### get_name() → str


#### get_parameter_type() → [ParameterType](dynardo_py_algorithms.md#dynardo_py_algorithms.ParameterType)


#### get_ran_cov() → float


#### get_ran_kind() → [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind)


#### get_ran_parameters() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)


#### get_ran_prop() → [RanProp](#py_os_parameter.RanProp)


#### get_ran_statistical_moments() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)


#### get_ran_type() → [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType)


#### get_reference_value() → [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)


#### get_upper_bound() → [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)


#### has_continuous_distribution() → bool


#### has_marginal_distribution() → bool


#### has_set_ran_cov() → bool


#### has_set_ran_parameters() → bool


#### has_set_ran_statistical_moments() → bool


#### is_active() → bool


#### is_const() → bool


#### is_continuous() → bool


#### is_dependent() → bool


#### is_empirical() → bool


#### is_mixed() → bool


#### is_modifiable() → bool


#### is_mutable(member: object) → bool


#### is_optimization() → bool


#### is_pure_optimization() → bool


#### is_pure_stochastic() → bool


#### is_ran_prop_validated() → bool


#### is_stochastic() → bool


#### rename_det_prop(arg2: str)

#### rename_det_prop(arg2: str, to: str)


#### rename_parameter(to: str)


#### set_active(active: bool)


#### set_bounds(lower_bound: PyOSDesignEntry, upper_bound: PyOSDesignEntry)


#### set_const(constant: bool)


#### set_dependent(expression: str)


#### set_det_prop_by_index(value: [DProp](#py_os_parameter.DProp), index: int)


#### set_discrete_states(states: PyOSDesignEntryVec)


#### set_kind(kind: [DeterministicType](dynardo_py_algorithms.md#dynardo_py_algorithms.DeterministicType))


#### set_lower_bound(value: PyOSDesignEntry)


#### set_modifiable(arg2: bool)


#### set_mutable(member: object, state: bool)


#### set_mutable_map(arg2: object)


#### set_parameter_type(type: [ParameterType](dynardo_py_algorithms.md#dynardo_py_algorithms.ParameterType))


#### set_ran_cov(cov: float) → float


#### set_ran_kind(kind: [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind))


#### set_ran_parameters(parameters: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))


#### set_ran_prop_validated(arg2: bool)


#### set_ran_statistical_moments(moments: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))


#### set_ran_type(type: [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType))


#### set_reference_value(value: PyOSDesignEntry)


#### set_type(type: [EntryType](py_os_design.md#py_os_design.EntryType))


#### set_upper_bound(value: PyOSDesignEntry)


### *class* py_os_parameter.PyParameterManager


#### \_\_eq_\_(arg2: PyParameterManager) → bool


#### \_\_init_\_()


#### \_\_is_equal_\_(arg2: PyParameterManager) → bool


#### \_\_is_not_equal_\_(arg2: [PyParameterManager](#py_os_parameter.PyParameterManager)) → bool


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_ne_\_(arg2: [PyParameterManager](#py_os_parameter.PyParameterManager)) → bool


#### add_dependent_parameter(parameter_name: str, expression: str)


#### add_deterministic_continuous_parameter(name: str, lower_bound: float, upper_bound: float, reference_value: float)

Add a new deterministic continuous parameter. A range_mode of 1 or 2 sets a relative lower respectively upper bound. A range_mode of 3 sets both bounds relative.

```default
pm = PyParameterManager()
pm.add_deterministic_continuous_parameter('a', 0., 3., 1.5)
```


#### add_parameter(name: str)


#### add_stochastic_parameter(name: str, type: [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType), kind: [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind), reference_value: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))

Add a new stochastic parameter. It is required to set a parameter type and random parameters afterwards.

```default
pm = PyParameterManager()
pm.add_stochastic_parameter('s1', RandomVariableType.NORMAL, RandomVariableKind.DETERMINISTIC, PyOSDesignEntry(0.72))
pm.set_parameter_type('s1', ParameterType.STOCHASTIC)
pm.set_ran_parameters('s1', double_list_to_vec([0.72, 0.3]))   # normal distribution: mu, sigmah
```


#### clear()


#### contains_parameter(name: str) → bool

#### contains_parameter(id: [UUID](id.md#id.UUID)) → bool


#### empty() → bool


#### erase_correlation(arg2: str, parameter_name: str) → bool


#### erase_correlations(parameter_name_b: str) → bool


#### erase_parameter(parameter_name: str)


#### get_bounds(parameter_name: str, lower_bound: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry), upper_bound: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))

#### get_bounds(parameter_name: str) → tuple

[0] Note, that lower_bound and upper_bound are output arguments.

[1] Return a parameter’s boundaries as a tuple.


#### get_det_props() → [DPropList](#py_os_parameter.DPropList)


#### get_det_props_by_index(parameter_name: str, index: int) → [DProp](#py_os_parameter.DProp)


#### get_parameter(parameter_name: str) → [PyParameter](#py_os_parameter.PyParameter)

#### get_parameter(parameter_id: [UUID](id.md#id.UUID)) → [PyParameter](#py_os_parameter.PyParameter)


#### get_parameter_by_index(index: int) → [PyParameter](#py_os_parameter.PyParameter)


#### get_parameters() → [ParameterList](#py_os_parameter.ParameterList)


#### get_ran_prop(parameter_name: str) → [RanProp](#py_os_parameter.RanProp)


#### get_ran_props() → [RanPropList](#py_os_parameter.RanPropList)


#### get_reference_design() → [PyOSDesignEntryVec](py_os_design.md#py_os_design.PyOSDesignEntryVec)


#### get_reference_design_point() → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)


#### get_size() → int


#### get_unique_name() → str


#### import_from_csv(csv: Path path)

Add parameters from csv to parameter manager.


#### import_from_json(path: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Add parameters from json to parameter manager.


#### import_from_json_string(content: str)

Add parameters from json string to parameter manager.


#### insert_parameter(parameter: [PyParameter](#py_os_parameter.PyParameter))


#### rename_det_prop(parameter_name: str, from: str, to: str)


#### rename_parameter(from: str, to: str)


#### reset_correlations()


#### save_to_csv(csv: Path path)

Save parameter manager to a csv file.


#### save_to_json(path: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Save parameter manager to a json file.


#### set_active(parameter_name: str, active: bool)


#### set_bounds(parameter_name: str, lower_bound: PyOSDesignEntry, upper_bound: PyOSDesignEntry)


#### set_const_all_in_list(names: WStrList) → [PyParameterManager](#py_os_parameter.PyParameterManager)


#### set_const_flag(parameter_name: str)


#### set_correlation(parameter_name_a: str, parameter_name_b: str, value: float) → bool


#### set_dependent(parameter_name: str, expression: str)


#### set_discrete_states(parameter_name: str, discrete_states: [PyOSDesignEntryVec](py_os_design.md#py_os_design.PyOSDesignEntryVec))


#### set_kind(parameter_name: str, kind: [DeterministicType](dynardo_py_algorithms.md#dynardo_py_algorithms.DeterministicType))


#### set_lower_bound(parameter_name: str, value: PyOSDesignEntry)


#### set_modifiable(parameter_name: str, modifiable: bool)


#### set_parameter_type(parameter_name: str, type: [ParameterType](dynardo_py_algorithms.md#dynardo_py_algorithms.ParameterType))


#### set_ran_cov(parameter_name: str, cov: float) → float


#### set_ran_kind(parameter_name: str, kind: [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind))


#### set_ran_parameters(parameter_name: str, parameters: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))


#### set_ran_statistical_moments(parameter_name: str, moments: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))


#### set_ran_type(parameter_name: str, type: [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType))


#### set_reference_design_point(design_point: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint))


#### set_reference_value(parameter_name: str, value: PyOSDesignEntry)


#### set_type(parameter_name: str, type: [EntryType](py_os_design.md#py_os_design.EntryType))


#### set_upper_bound(parameter_name: str, value: PyOSDesignEntry)


### *class* py_os_parameter.RanProp


#### \_\_init_\_()


### *class* py_os_parameter.RanPropList


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### push_back(arg2: [RanPropPair](#py_os_parameter.RanPropPair))


#### ran_prop_export_list() → [RanPropList](#py_os_parameter.RanPropList)


#### size() → int


### *class* py_os_parameter.RanPropPair


#### \_\_init_\_()


#### *property* first


#### *property* second


### py_os_parameter.get_const_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager), exclude_dependent: bool) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


### py_os_parameter.get_dependent_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


### py_os_parameter.get_lower_bound_values(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)


### py_os_parameter.get_non_const_det_props(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [DPropList](#py_os_parameter.DPropList)


### py_os_parameter.get_non_const_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager), exclude_dependent: bool) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


### py_os_parameter.get_non_const_ran_props(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [ParameterList](#py_os_parameter.ParameterList)


### py_os_parameter.get_num_non_const_det_props(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → int


### py_os_parameter.get_num_non_const_ran_props(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → int


### py_os_parameter.get_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


### py_os_parameter.get_pure_deterministic_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


### py_os_parameter.get_pure_stochastic_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)


### py_os_parameter.get_upper_bound_values(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)
