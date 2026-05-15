# py_os_parameter

<a id="py_os_parameter.DProp"></a>

## *class* py_os_parameter.DProp

<a id="py_os_parameter.DProp.__init__"></a>

#### \_\_init_\_()

<a id="py_os_parameter.DPropList"></a>

## *class* py_os_parameter.DPropList

<a id="py_os_parameter.DPropList.__init__"></a>

#### \_\_init_\_()

<a id="py_os_parameter.DPropList.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_parameter.DPropList.dprop_export_list"></a>

#### dprop_export_list() → [DPropList](#py_os_parameter.DPropList)

<a id="py_os_parameter.DPropList.push_back"></a>

#### push_back(arg2: [DPropPair](#py_os_parameter.DPropPair))

<a id="py_os_parameter.DPropList.size"></a>

#### size() → int

<a id="py_os_parameter.DPropPair"></a>

## *class* py_os_parameter.DPropPair

<a id="py_os_parameter.DPropPair.__init__"></a>

#### \_\_init_\_()

<a id="py_os_parameter.DPropPair.first"></a>

#### *property* first

<a id="py_os_parameter.DPropPair.second"></a>

#### *property* second

<a id="py_os_parameter.ParameterList"></a>

## *class* py_os_parameter.ParameterList

<a id="py_os_parameter.ParameterList.__init__"></a>

#### \_\_init_\_()

<a id="py_os_parameter.ParameterList.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_parameter.ParameterList.param_export_list"></a>

#### param_export_list() → [ParameterList](#py_os_parameter.ParameterList)

<a id="py_os_parameter.ParameterList.push_back"></a>

#### push_back(arg2: [PyParameter](#py_os_parameter.PyParameter))

<a id="py_os_parameter.ParameterList.size"></a>

#### size() → int

<a id="py_os_parameter.PyParameter"></a>

## *class* py_os_parameter.PyParameter

<a id="py_os_parameter.PyParameter.__eq__"></a>

#### \_\_eq_\_(arg2: PyParameter) → bool

<a id="py_os_parameter.PyParameter.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: str)

#### \_\_init_\_(arg2: str, arg3: float, arg4: float, arg5: float, arg6: int)

#### \_\_init_\_(arg2: str, arg3: float, arg4: float, arg5: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry), arg6: int)

#### \_\_init_\_(arg2: str, arg3: [PyOSDesignEntryVec](py_os_design.md#py_os_design.PyOSDesignEntryVec), arg4: [DeterministicType](dynardo_py_algorithms.md#dynardo_py_algorithms.DeterministicType))

#### \_\_init_\_(arg2: str, arg3: str)

#### \_\_init_\_(arg2: str, arg3: [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType), arg4: [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind), arg5: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))

<a id="py_os_parameter.PyParameter.__is_equal__"></a>

#### \_\_is_equal_\_(arg2: PyParameter) → bool

<a id="py_os_parameter.PyParameter.__is_not_equal__"></a>

#### \_\_is_not_equal_\_(arg2: [PyParameter](#py_os_parameter.PyParameter)) → bool

<a id="py_os_parameter.PyParameter.__ne__"></a>

#### \_\_ne_\_(arg2: [PyParameter](#py_os_parameter.PyParameter)) → bool

<a id="py_os_parameter.PyParameter.erase_det_prop"></a>

#### erase_det_prop(name: str)

<a id="py_os_parameter.PyParameter.get_dependency_expression"></a>

#### get_dependency_expression() → str

<a id="py_os_parameter.PyParameter.get_det_discrete_states"></a>

#### get_det_discrete_states() → [PyOSDesignEntryVec](py_os_design.md#py_os_design.PyOSDesignEntryVec)

<a id="py_os_parameter.PyParameter.get_det_kind"></a>

#### get_det_kind() → [DeterministicType](dynardo_py_algorithms.md#dynardo_py_algorithms.DeterministicType)

<a id="py_os_parameter.PyParameter.get_det_prop_by_index"></a>

#### get_det_prop_by_index(index: int) → [DProp](#py_os_parameter.DProp)

<a id="py_os_parameter.PyParameter.get_det_prop_name"></a>

#### get_det_prop_name(index: int) → object

<a id="py_os_parameter.PyParameter.get_det_props"></a>

#### get_det_props() → [DPropList](#py_os_parameter.DPropList)

<a id="py_os_parameter.PyParameter.get_det_type"></a>

#### get_det_type() → [EntryType](py_os_design.md#py_os_design.EntryType)

<a id="py_os_parameter.PyParameter.get_id"></a>

#### get_id() → [UUID](id.md#id.UUID)

<a id="py_os_parameter.PyParameter.get_lower_bound"></a>

#### get_lower_bound() → [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)

<a id="py_os_parameter.PyParameter.get_mutable_map"></a>

#### get_mutable_map() → object

<a id="py_os_parameter.PyParameter.get_name"></a>

#### get_name() → str

<a id="py_os_parameter.PyParameter.get_parameter_type"></a>

#### get_parameter_type() → [ParameterType](dynardo_py_algorithms.md#dynardo_py_algorithms.ParameterType)

<a id="py_os_parameter.PyParameter.get_ran_cov"></a>

#### get_ran_cov() → float

<a id="py_os_parameter.PyParameter.get_ran_kind"></a>

#### get_ran_kind() → [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind)

<a id="py_os_parameter.PyParameter.get_ran_parameters"></a>

#### get_ran_parameters() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)

<a id="py_os_parameter.PyParameter.get_ran_prop"></a>

#### get_ran_prop() → [RanProp](#py_os_parameter.RanProp)

<a id="py_os_parameter.PyParameter.get_ran_statistical_moments"></a>

#### get_ran_statistical_moments() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)

<a id="py_os_parameter.PyParameter.get_ran_type"></a>

#### get_ran_type() → [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType)

<a id="py_os_parameter.PyParameter.get_reference_value"></a>

#### get_reference_value() → [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)

<a id="py_os_parameter.PyParameter.get_upper_bound"></a>

#### get_upper_bound() → [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)

<a id="py_os_parameter.PyParameter.has_continuous_distribution"></a>

#### has_continuous_distribution() → bool

<a id="py_os_parameter.PyParameter.has_marginal_distribution"></a>

#### has_marginal_distribution() → bool

<a id="py_os_parameter.PyParameter.has_set_ran_cov"></a>

#### has_set_ran_cov() → bool

<a id="py_os_parameter.PyParameter.has_set_ran_parameters"></a>

#### has_set_ran_parameters() → bool

<a id="py_os_parameter.PyParameter.has_set_ran_statistical_moments"></a>

#### has_set_ran_statistical_moments() → bool

<a id="py_os_parameter.PyParameter.is_active"></a>

#### is_active() → bool

<a id="py_os_parameter.PyParameter.is_const"></a>

#### is_const() → bool

<a id="py_os_parameter.PyParameter.is_continuous"></a>

#### is_continuous() → bool

<a id="py_os_parameter.PyParameter.is_dependent"></a>

#### is_dependent() → bool

<a id="py_os_parameter.PyParameter.is_empirical"></a>

#### is_empirical() → bool

<a id="py_os_parameter.PyParameter.is_mixed"></a>

#### is_mixed() → bool

<a id="py_os_parameter.PyParameter.is_modifiable"></a>

#### is_modifiable() → bool

<a id="py_os_parameter.PyParameter.is_mutable"></a>

#### is_mutable(member: object) → bool

<a id="py_os_parameter.PyParameter.is_optimization"></a>

#### is_optimization() → bool

<a id="py_os_parameter.PyParameter.is_pure_optimization"></a>

#### is_pure_optimization() → bool

<a id="py_os_parameter.PyParameter.is_pure_stochastic"></a>

#### is_pure_stochastic() → bool

<a id="py_os_parameter.PyParameter.is_ran_prop_validated"></a>

#### is_ran_prop_validated() → bool

<a id="py_os_parameter.PyParameter.is_stochastic"></a>

#### is_stochastic() → bool

<a id="py_os_parameter.PyParameter.rename_det_prop"></a>

#### rename_det_prop(arg2: str)

#### rename_det_prop(arg2: str, to: str)

<a id="py_os_parameter.PyParameter.rename_parameter"></a>

#### rename_parameter(to: str)

<a id="py_os_parameter.PyParameter.set_active"></a>

#### set_active(active: bool)

<a id="py_os_parameter.PyParameter.set_bounds"></a>

#### set_bounds(lower_bound: PyOSDesignEntry, upper_bound: PyOSDesignEntry)

<a id="py_os_parameter.PyParameter.set_const"></a>

#### set_const(constant: bool)

<a id="py_os_parameter.PyParameter.set_dependent"></a>

#### set_dependent(expression: str)

<a id="py_os_parameter.PyParameter.set_det_prop_by_index"></a>

#### set_det_prop_by_index(value: [DProp](#py_os_parameter.DProp), index: int)

<a id="py_os_parameter.PyParameter.set_discrete_states"></a>

#### set_discrete_states(states: PyOSDesignEntryVec)

<a id="py_os_parameter.PyParameter.set_kind"></a>

#### set_kind(kind: [DeterministicType](dynardo_py_algorithms.md#dynardo_py_algorithms.DeterministicType))

<a id="py_os_parameter.PyParameter.set_lower_bound"></a>

#### set_lower_bound(value: PyOSDesignEntry)

<a id="py_os_parameter.PyParameter.set_modifiable"></a>

#### set_modifiable(arg2: bool)

<a id="py_os_parameter.PyParameter.set_mutable"></a>

#### set_mutable(member: object, state: bool)

<a id="py_os_parameter.PyParameter.set_mutable_map"></a>

#### set_mutable_map(arg2: object)

<a id="py_os_parameter.PyParameter.set_parameter_type"></a>

#### set_parameter_type(type: [ParameterType](dynardo_py_algorithms.md#dynardo_py_algorithms.ParameterType))

<a id="py_os_parameter.PyParameter.set_ran_cov"></a>

#### set_ran_cov(cov: float) → float

<a id="py_os_parameter.PyParameter.set_ran_kind"></a>

#### set_ran_kind(kind: [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind))

<a id="py_os_parameter.PyParameter.set_ran_parameters"></a>

#### set_ran_parameters(parameters: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))

<a id="py_os_parameter.PyParameter.set_ran_prop_validated"></a>

#### set_ran_prop_validated(arg2: bool)

<a id="py_os_parameter.PyParameter.set_ran_statistical_moments"></a>

#### set_ran_statistical_moments(moments: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))

<a id="py_os_parameter.PyParameter.set_ran_type"></a>

#### set_ran_type(type: [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType))

<a id="py_os_parameter.PyParameter.set_reference_value"></a>

#### set_reference_value(value: PyOSDesignEntry)

<a id="py_os_parameter.PyParameter.set_type"></a>

#### set_type(type: [EntryType](py_os_design.md#py_os_design.EntryType))

<a id="py_os_parameter.PyParameter.set_upper_bound"></a>

#### set_upper_bound(value: PyOSDesignEntry)

<a id="py_os_parameter.PyParameterManager"></a>

## *class* py_os_parameter.PyParameterManager

<a id="py_os_parameter.PyParameterManager.__eq__"></a>

#### \_\_eq_\_(arg2: PyParameterManager) → bool

<a id="py_os_parameter.PyParameterManager.__init__"></a>

#### \_\_init_\_()

<a id="py_os_parameter.PyParameterManager.__is_equal__"></a>

#### \_\_is_equal_\_(arg2: PyParameterManager) → bool

<a id="py_os_parameter.PyParameterManager.__is_not_equal__"></a>

#### \_\_is_not_equal_\_(arg2: [PyParameterManager](#py_os_parameter.PyParameterManager)) → bool

<a id="py_os_parameter.PyParameterManager.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_parameter.PyParameterManager.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_parameter.PyParameterManager.__ne__"></a>

#### \_\_ne_\_(arg2: [PyParameterManager](#py_os_parameter.PyParameterManager)) → bool

<a id="py_os_parameter.PyParameterManager.add_dependent_parameter"></a>

#### add_dependent_parameter(parameter_name: str, expression: str)

<a id="py_os_parameter.PyParameterManager.add_deterministic_continuous_parameter"></a>

#### add_deterministic_continuous_parameter(name: str, lower_bound: float, upper_bound: float, reference_value: float)

Add a new deterministic continuous parameter. A range_mode of 1 or 2 sets a relative lower respectively upper bound. A range_mode of 3 sets both bounds relative.

```python
pm = PyParameterManager()
pm.add_deterministic_continuous_parameter('a', 0., 3., 1.5)
```

<a id="py_os_parameter.PyParameterManager.add_parameter"></a>

#### add_parameter(name: str)

<a id="py_os_parameter.PyParameterManager.add_stochastic_parameter"></a>

#### add_stochastic_parameter(name: str, type: [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType), kind: [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind), reference_value: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))

Add a new stochastic parameter. It is required to set a parameter type and random parameters afterwards.

```python
pm = PyParameterManager()
pm.add_stochastic_parameter('s1', RandomVariableType.NORMAL, RandomVariableKind.DETERMINISTIC, PyOSDesignEntry(0.72))
pm.set_parameter_type('s1', ParameterType.STOCHASTIC)
pm.set_ran_parameters('s1', double_list_to_vec([0.72, 0.3]))   # normal distribution: mu, sigmah
```

<a id="py_os_parameter.PyParameterManager.clear"></a>

#### clear()

<a id="py_os_parameter.PyParameterManager.contains_parameter"></a>

#### contains_parameter(name: str) → bool

#### contains_parameter(id: [UUID](id.md#id.UUID)) → bool

<a id="py_os_parameter.PyParameterManager.empty"></a>

#### empty() → bool

<a id="py_os_parameter.PyParameterManager.erase_correlation"></a>

#### erase_correlation(arg2: str, parameter_name: str) → bool

<a id="py_os_parameter.PyParameterManager.erase_correlations"></a>

#### erase_correlations(parameter_name_b: str) → bool

<a id="py_os_parameter.PyParameterManager.erase_parameter"></a>

#### erase_parameter(parameter_name: str)

<a id="py_os_parameter.PyParameterManager.get_bounds"></a>

#### get_bounds(parameter_name: str, lower_bound: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry), upper_bound: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))

#### get_bounds(parameter_name: str) → tuple

[0] Note, that lower_bound and upper_bound are output arguments.

[1] Return a parameter’s boundaries as a tuple.

<a id="py_os_parameter.PyParameterManager.get_det_props"></a>

#### get_det_props() → [DPropList](#py_os_parameter.DPropList)

<a id="py_os_parameter.PyParameterManager.get_det_props_by_index"></a>

#### get_det_props_by_index(parameter_name: str, index: int) → [DProp](#py_os_parameter.DProp)

<a id="py_os_parameter.PyParameterManager.get_parameter"></a>

#### get_parameter(parameter_name: str) → [PyParameter](#py_os_parameter.PyParameter)

#### get_parameter(parameter_id: [UUID](id.md#id.UUID)) → [PyParameter](#py_os_parameter.PyParameter)

<a id="py_os_parameter.PyParameterManager.get_parameter_by_index"></a>

#### get_parameter_by_index(index: int) → [PyParameter](#py_os_parameter.PyParameter)

<a id="py_os_parameter.PyParameterManager.get_parameters"></a>

#### get_parameters() → [ParameterList](#py_os_parameter.ParameterList)

<a id="py_os_parameter.PyParameterManager.get_ran_prop"></a>

#### get_ran_prop(parameter_name: str) → [RanProp](#py_os_parameter.RanProp)

<a id="py_os_parameter.PyParameterManager.get_ran_props"></a>

#### get_ran_props() → [RanPropList](#py_os_parameter.RanPropList)

<a id="py_os_parameter.PyParameterManager.get_reference_design"></a>

#### get_reference_design() → [PyOSDesignEntryVec](py_os_design.md#py_os_design.PyOSDesignEntryVec)

<a id="py_os_parameter.PyParameterManager.get_reference_design_point"></a>

#### get_reference_design_point() → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)

<a id="py_os_parameter.PyParameterManager.get_size"></a>

#### get_size() → int

<a id="py_os_parameter.PyParameterManager.get_unique_name"></a>

#### get_unique_name() → str

<a id="py_os_parameter.PyParameterManager.import_from_csv"></a>

#### import_from_csv(csv: Path path)

Add parameters from csv to parameter manager.

<a id="py_os_parameter.PyParameterManager.import_from_json"></a>

#### import_from_json(path: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Add parameters from json to parameter manager.

<a id="py_os_parameter.PyParameterManager.import_from_json_string"></a>

#### import_from_json_string(content: str)

Add parameters from json string to parameter manager.

<a id="py_os_parameter.PyParameterManager.insert_parameter"></a>

#### insert_parameter(parameter: [PyParameter](#py_os_parameter.PyParameter))

<a id="py_os_parameter.PyParameterManager.rename_det_prop"></a>

#### rename_det_prop(parameter_name: str, from: str, to: str)

<a id="py_os_parameter.PyParameterManager.rename_parameter"></a>

#### rename_parameter(from: str, to: str)

<a id="py_os_parameter.PyParameterManager.reset_correlations"></a>

#### reset_correlations()

<a id="py_os_parameter.PyParameterManager.save_to_csv"></a>

#### save_to_csv(csv: Path path)

Save parameter manager to a csv file.

<a id="py_os_parameter.PyParameterManager.save_to_json"></a>

#### save_to_json(path: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Save parameter manager to a json file.

<a id="py_os_parameter.PyParameterManager.set_active"></a>

#### set_active(parameter_name: str, active: bool)

<a id="py_os_parameter.PyParameterManager.set_bounds"></a>

#### set_bounds(parameter_name: str, lower_bound: PyOSDesignEntry, upper_bound: PyOSDesignEntry)

<a id="py_os_parameter.PyParameterManager.set_const_all_in_list"></a>

#### set_const_all_in_list(names: WStrList) → [PyParameterManager](#py_os_parameter.PyParameterManager)

<a id="py_os_parameter.PyParameterManager.set_const_flag"></a>

#### set_const_flag(parameter_name: str)

<a id="py_os_parameter.PyParameterManager.set_correlation"></a>

#### set_correlation(parameter_name_a: str, parameter_name_b: str, value: float) → bool

<a id="py_os_parameter.PyParameterManager.set_dependent"></a>

#### set_dependent(parameter_name: str, expression: str)

<a id="py_os_parameter.PyParameterManager.set_discrete_states"></a>

#### set_discrete_states(parameter_name: str, discrete_states: [PyOSDesignEntryVec](py_os_design.md#py_os_design.PyOSDesignEntryVec))

<a id="py_os_parameter.PyParameterManager.set_kind"></a>

#### set_kind(parameter_name: str, kind: [DeterministicType](dynardo_py_algorithms.md#dynardo_py_algorithms.DeterministicType))

<a id="py_os_parameter.PyParameterManager.set_lower_bound"></a>

#### set_lower_bound(parameter_name: str, value: PyOSDesignEntry)

<a id="py_os_parameter.PyParameterManager.set_modifiable"></a>

#### set_modifiable(parameter_name: str, modifiable: bool)

<a id="py_os_parameter.PyParameterManager.set_parameter_type"></a>

#### set_parameter_type(parameter_name: str, type: [ParameterType](dynardo_py_algorithms.md#dynardo_py_algorithms.ParameterType))

<a id="py_os_parameter.PyParameterManager.set_ran_cov"></a>

#### set_ran_cov(parameter_name: str, cov: float) → float

<a id="py_os_parameter.PyParameterManager.set_ran_kind"></a>

#### set_ran_kind(parameter_name: str, kind: [RandomVariableKind](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableKind))

<a id="py_os_parameter.PyParameterManager.set_ran_parameters"></a>

#### set_ran_parameters(parameter_name: str, parameters: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))

<a id="py_os_parameter.PyParameterManager.set_ran_statistical_moments"></a>

#### set_ran_statistical_moments(parameter_name: str, moments: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))

<a id="py_os_parameter.PyParameterManager.set_ran_type"></a>

#### set_ran_type(parameter_name: str, type: [RandomVariableType](dynardo_py_algorithms.md#dynardo_py_algorithms.RandomVariableType))

<a id="py_os_parameter.PyParameterManager.set_reference_design_point"></a>

#### set_reference_design_point(design_point: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint))

<a id="py_os_parameter.PyParameterManager.set_reference_value"></a>

#### set_reference_value(parameter_name: str, value: PyOSDesignEntry)

<a id="py_os_parameter.PyParameterManager.set_type"></a>

#### set_type(parameter_name: str, type: [EntryType](py_os_design.md#py_os_design.EntryType))

<a id="py_os_parameter.PyParameterManager.set_upper_bound"></a>

#### set_upper_bound(parameter_name: str, value: PyOSDesignEntry)

<a id="py_os_parameter.RanProp"></a>

## *class* py_os_parameter.RanProp

<a id="py_os_parameter.RanProp.__init__"></a>

#### \_\_init_\_()

<a id="py_os_parameter.RanPropList"></a>

## *class* py_os_parameter.RanPropList

<a id="py_os_parameter.RanPropList.__init__"></a>

#### \_\_init_\_()

<a id="py_os_parameter.RanPropList.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_parameter.RanPropList.push_back"></a>

#### push_back(arg2: [RanPropPair](#py_os_parameter.RanPropPair))

<a id="py_os_parameter.RanPropList.ran_prop_export_list"></a>

#### ran_prop_export_list() → [RanPropList](#py_os_parameter.RanPropList)

<a id="py_os_parameter.RanPropList.size"></a>

#### size() → int

<a id="py_os_parameter.RanPropPair"></a>

## *class* py_os_parameter.RanPropPair

<a id="py_os_parameter.RanPropPair.__init__"></a>

#### \_\_init_\_()

<a id="py_os_parameter.RanPropPair.first"></a>

#### *property* first

<a id="py_os_parameter.RanPropPair.second"></a>

#### *property* second

<a id="py_os_parameter.get_const_parameter_names"></a>

## py_os_parameter.get_const_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager), exclude_dependent: bool) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

<a id="py_os_parameter.get_dependent_parameter_names"></a>

## py_os_parameter.get_dependent_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

<a id="py_os_parameter.get_lower_bound_values"></a>

## py_os_parameter.get_lower_bound_values(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)

<a id="py_os_parameter.get_non_const_det_props"></a>

## py_os_parameter.get_non_const_det_props(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [DPropList](#py_os_parameter.DPropList)

<a id="py_os_parameter.get_non_const_parameter_names"></a>

## py_os_parameter.get_non_const_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager), exclude_dependent: bool) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

<a id="py_os_parameter.get_non_const_ran_props"></a>

## py_os_parameter.get_non_const_ran_props(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [ParameterList](#py_os_parameter.ParameterList)

<a id="py_os_parameter.get_num_non_const_det_props"></a>

## py_os_parameter.get_num_non_const_det_props(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → int

<a id="py_os_parameter.get_num_non_const_ran_props"></a>

## py_os_parameter.get_num_non_const_ran_props(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → int

<a id="py_os_parameter.get_parameter_names"></a>

## py_os_parameter.get_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

<a id="py_os_parameter.get_pure_deterministic_parameter_names"></a>

## py_os_parameter.get_pure_deterministic_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

<a id="py_os_parameter.get_pure_stochastic_parameter_names"></a>

## py_os_parameter.get_pure_stochastic_parameter_names(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

<a id="py_os_parameter.get_upper_bound_values"></a>

## py_os_parameter.get_upper_bound_values(parameter_manager: [PyParameterManager](#py_os_parameter.PyParameterManager)) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)
