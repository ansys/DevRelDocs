

### *class* py_monitoring_kernel.Color

Color object used to style designs.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [PredefinedColor](#py_monitoring_kernel.PredefinedColor))

#### \_\_init_\_(arg2: int, arg3: int, arg4: int)

#### \_\_init_\_(arg2: int, arg3: int, arg4: int, arg5: int)

#### \_\_init_\_(arg2: int, arg3: int)


#### *property* a

Alpha component of the color.


#### *property* b

Blue component of the color.


#### *property* g

Green component of the color.


#### *property* r

Red component of the color.


### *class* py_monitoring_kernel.Control


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


### *class* py_monitoring_kernel.ControlInterface

Base interface of a monitoring control. Controls display data and/or provide data editing functionality.


#### GetId() → [Id](#py_monitoring_kernel.Id)


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### get_id() → [Id](#py_monitoring_kernel.Id)


### *class* py_monitoring_kernel.ControlPositioning

**Enumeration**

Enumerates possible control positioning alternatives.


#### ABSOLUTE_POSITIONING *= py_monitoring_kernel.ControlPositioning.ABSOLUTE_POSITIONING*


#### FREE_POSITIONING *= py_monitoring_kernel.ControlPositioning.FREE_POSITIONING*


#### RELATIVE_POSITIONING *= py_monitoring_kernel.ControlPositioning.RELATIVE_POSITIONING*


### *class* py_monitoring_kernel.Controller


#### \_\_init_\_()


### *class* py_monitoring_kernel.ControllerInterface

Base interface of a controller object, managing monitoring data, monitoring visuals and controls, and data change requests.


#### GetMonitoringData(arg2: [Id](#py_monitoring_kernel.Id)) → [MonitoringData](#py_monitoring_kernel.MonitoringData)

Get a certain monitoring data object.


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### get_monitoring_data(arg2: [Id](#py_monitoring_kernel.Id)) → [MonitoringData](#py_monitoring_kernel.MonitoringData)

Get a certain monitoring data object.


### *class* py_monitoring_kernel.Convenience


#### \_\_init_\_()


#### *static* activate_all_criteria(arg2: [Id](#py_monitoring_kernel.Id))

Globally activate all criteria.


#### *static* activate_all_parameters(arg2: [Id](#py_monitoring_kernel.Id))

Globally activate all parameters.


#### *static* activate_all_responses(arg2: [Id](#py_monitoring_kernel.Id))

Globally activate all responses.


#### *static* add_limit(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Limit](#py_monitoring_kernel.Limit))

Add a global limit value.


#### *static* deactivate_all_designs(arg2: [Id](#py_monitoring_kernel.Id))

Globally deactivate all designs.


#### *static* deactivate_unimportant_parameters(arg2: [Id](#py_monitoring_kernel.Id))

Globally deactivate all unimportant parameters.


#### *static* deselect_all_designs(arg2: [Id](#py_monitoring_kernel.Id))

Globally deselect all designs.


#### *static* export_palette(arg2: [Id](#py_monitoring_kernel.Id), arg3: str, arg4: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), arg5: bool)

Export palette.


#### *static* get_limit_by_name(arg2: [Id](#py_monitoring_kernel.Id), arg3: str) → [Limit](#py_monitoring_kernel.Limit)

Get limit with given name when found.


#### *static* get_num_deactivated_parameters(arg2: [Id](#py_monitoring_kernel.Id)) → int

Get number of deactivated parameters.


#### *static* get_palette(arg2: [Id](#py_monitoring_kernel.Id), arg3: str) → [PaletteData](#py_monitoring_kernel.PaletteData)

Get palette by name.


#### *static* get_palette_names(arg2: [Id](#py_monitoring_kernel.Id)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get all exitings palette names.


#### *static* get_unimportant_parameters(arg2: [Id](#py_monitoring_kernel.Id)) → [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet)

Get names of all unimportant parameters.


#### *static* get_unused_responses(arg2: [Id](#py_monitoring_kernel.Id)) → [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet)

Get names of all unused responses.


#### *static* has_limit(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Limit](#py_monitoring_kernel.Limit)) → bool

Return true when limit is found.


#### *static* is_parameter_active(arg2: [Id](#py_monitoring_kernel.Id), arg3: str) → bool

Returns true when parameter is active.


#### *static* is_response_active(arg2: [Id](#py_monitoring_kernel.Id), arg3: str) → bool

Returns true when response is active.


#### *static* load_palette_from_file(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Load palette from file.


#### *static* load_palette_from_folder(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Load palettes from folder.


#### *static* preserve_param_activation() → bool

Returns true when parameter activation should be preserved.


#### *static* remove_default_limits(arg2: [Id](#py_monitoring_kernel.Id))

Remove all default limits.


#### *static* remove_limit(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Limit](#py_monitoring_kernel.Limit))

Remove a global limit.


#### *static* select_best_designs(arg2: [Id](#py_monitoring_kernel.Id))

Select best designs.


#### *static* set_1st_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension))

Globally change what object to display at first axis.


#### *static* set_2nd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension))

Globally change what object to display at second axis.


#### *static* set_3rd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension))

Globally change what object to display at third axis.


#### *static* set_criteria_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally activate criteria.


#### *static* set_criteria_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally deactivate criteria.


#### *static* set_criterion_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally activate a certain criterion.


#### *static* set_criterion_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally deactivate a certain criterion.


#### *static* set_criterion_to_1st_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what criterion to display at first axis.


#### *static* set_criterion_to_2nd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what criterion to display at second axis.


#### *static* set_criterion_to_3rd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what criterion to display at third axis.


#### *static* set_default_palette(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Set default palette.


#### *static* set_design_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HID](id.md#id.HID), arg4: bool)

Globally activate/deactivate a certain design.


#### *static* set_design_selected(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HID](id.md#id.HID), arg4: bool)

Globally select/deselect a certain design.


#### *static* set_design_set(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change set of designs to display.


#### *static* set_design_style(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HID](id.md#id.HID), arg4: [Style](#py_monitoring_kernel.Style))

Globally change the style of a certain design.


#### *static* set_designs_selected(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HIDSet](id.md#id.HIDSet), arg4: bool)

Globally select/deselect certain designs.


#### *static* set_designs_style(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HIDSet](id.md#id.HIDSet), arg4: [Style](#py_monitoring_kernel.Style))

Globally change the style of a given designs.


#### *static* set_limit_lower_value_at_dimension(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension), arg4: [Limit](#py_monitoring_kernel.Limit), arg5: float)

Set limit lower value at a dimension.


#### *static* set_limit_target_at_dimension(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension), arg4: [Limit](#py_monitoring_kernel.Limit), arg5: float)

Set limit target at a dimension.


#### *static* set_limit_upper_value_at_dimension(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension), arg4: [Limit](#py_monitoring_kernel.Limit), arg5: float)

Set limit upper value at a dimension.


#### *static* set_palette(arg2: [Id](#py_monitoring_kernel.Id), arg3: [PaletteData](#py_monitoring_kernel.PaletteData), arg4: bool)

Set palette with the option to overwrite. If overwrite is False palette name will be made unique.


#### *static* set_parameter_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str, arg4: bool)

Globally activate/deactivate a certain parameter.


#### *static* set_parameter_to_1st_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what parameter to display at first axis.


#### *static* set_parameter_to_2nd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what parameter to display at second axis.


#### *static* set_parameter_to_3rd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what parameter to display at third axis.


#### *static* set_parameter_value(arg2: [Id](#py_monitoring_kernel.Id), arg3: str, arg4: float)

Globally set the value of a certain parameter.


#### *static* set_parameter_values(arg2: [Id](#py_monitoring_kernel.Id), arg3: [string_to_double_map](stdcpp_python_export.md#stdcpp_python_export.string_to_double_map))

Globally set the value of certain parameters.


#### *static* set_parameters_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet), arg4: bool)

Globally activate/deactivate parameters.


#### *static* set_parameters_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally deactivate parameters.


#### *static* set_response_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally activate a certain response.


#### *static* set_response_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally deactivate a certain response.


#### *static* set_response_to_1st_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what response to display at first axis.


#### *static* set_response_to_2nd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what response to display at second axis.


#### *static* set_response_to_3rd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what response to display at third axis.


#### *static* set_response_to_cop_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what response to display at CoP listener axis.


#### *static* set_responses_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally activate responses.


#### *static* set_responses_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally deactivate responses.


#### *static* switch_first_and_second_axis(arg2: [Id](#py_monitoring_kernel.Id))

Globally switch what is being displayed at first and second axis.


### *class* py_monitoring_kernel.CorrelationTypes

**Enumeration**


#### DistanceCorr *= py_monitoring_kernel.CorrelationTypes.DistanceCorr*


#### LinearCorr *= py_monitoring_kernel.CorrelationTypes.LinearCorr*


#### QuadraticCorr *= py_monitoring_kernel.CorrelationTypes.QuadraticCorr*


#### QuadraticMinusLinear *= py_monitoring_kernel.CorrelationTypes.QuadraticMinusLinear*


#### SpearmanRankOrder *= py_monitoring_kernel.CorrelationTypes.SpearmanRankOrder*


### py_monitoring_kernel.DefaultStyle() → [Style](#py_monitoring_kernel.Style)

Default style of designs.


### *class* py_monitoring_kernel.Dimension

Dimension object, which holds a dimension type (parameter/response/criterion) and a name.


#### \_\_init_\_()

#### \_\_init_\_(DimensionType: [DimensionType](#py_monitoring_kernel.DimensionType), name: str)

#### \_\_init_\_(DimensionType: [DimensionType](#py_monitoring_kernel.DimensionType), name: str, vector_component: object) → object

[1] Create a Dimension with DimensionType and name.

[2] Create a Dimension with DimensionType and name and additionally a vector component index indicator, either an integer value, which is directly used as index, or a boolean value, then the index is created from the name if the name contains something like [%d].


#### get_index() → object


#### is_criterion() → bool

Return true if the dimension is a criterion.


#### is_parameter() → bool

Return true if the dimension is a parameter.


#### is_response() → bool

Return true if the dimension is a response.


#### is_signal() → bool

Return true if the dimension is a signal.


#### is_vector_component() → bool

Return true if the dimension is a vector component.


#### *property* name

The name of the dimension.


#### *property* type

The type of the dimension.


### *class* py_monitoring_kernel.DimensionList


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object

#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [Dimension](#py_monitoring_kernel.Dimension))


#### size() → int


### *class* py_monitoring_kernel.DimensionType

**Enumeration**

Enumerates available dimension types.


#### DIM_TYPE_CRITERION *= py_monitoring_kernel.DimensionType.DIM_TYPE_CRITERION*


#### DIM_TYPE_INVALID *= py_monitoring_kernel.DimensionType.DIM_TYPE_INVALID*


#### DIM_TYPE_PARAMETER *= py_monitoring_kernel.DimensionType.DIM_TYPE_PARAMETER*


#### DIM_TYPE_RESPONSE *= py_monitoring_kernel.DimensionType.DIM_TYPE_RESPONSE*


#### DIM_TYPE_SIGNAL *= py_monitoring_kernel.DimensionType.DIM_TYPE_SIGNAL*


### *class* py_monitoring_kernel.DimensionVector


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object

#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [Dimension](#py_monitoring_kernel.Dimension))


#### size() → int


### *class* py_monitoring_kernel.Id

An id to identify arbitrary objects within monitoring. Consists of a unique UUID and a name.


#### \_\_init_\_()

#### \_\_init_\_(arg2: str)


#### *property* name

Name of the object. May not be unique.


### *class* py_monitoring_kernel.Limit

Limit object, which holds a default lower and a default upper value, an ID and a style.


#### \_\_init_\_()

#### \_\_init_\_(arg2: str, arg3: LimitValue, arg4: LimitValue)


#### *property* default_lower_value

The default lower value of the limit.


#### *property* default_upper_value

The default upper value of the limit.


#### *property* name

The name of the limit.


#### *property* style

The name of the limit.


### *class* py_monitoring_kernel.LimitValue

**Enumeration**

Enumerates available limit values.


#### LIMIT_DEFAULT_FAILURE_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_DEFAULT_FAILURE_VALUE*


#### LIMIT_DEFAULT_SAFETY_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_DEFAULT_SAFETY_VALUE*


#### LIMIT_MAX_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_MAX_VALUE*


#### LIMIT_MEAN_PLUS_STDDEV_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_MEAN_PLUS_STDDEV_VALUE*


#### LIMIT_MEAN_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_MEAN_VALUE*


#### LIMIT_MIN_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_MIN_VALUE*


#### LIMIT_NONE_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_NONE_VALUE*


### *class* py_monitoring_kernel.MonitoringData

Encapsulates a block of data to be monitored.


#### GetAlgorithmInfo() → [AlgorithmInfo](py_algorithm_info.md#py_algorithm_info.AlgorithmInfo)

Get structure providing information about the underlying algorithm that lead to the results.


#### GetBoundsOfParameter(arg2: [Dimension](#py_monitoring_kernel.Dimension)) → object


#### GetCriteriaNames() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get criteria names.


#### GetDesignSets() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get the names of available design sets.


#### GetNominalDesign() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)

Get the nominal design if available.


#### GetObjectiveNames() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get objective names.


#### GetOriginalDesigns() → [PyOSDesignContainer](py_os_design.md#py_os_design.PyOSDesignContainer)

Get the original design container. Design deactivation states are not considered.


#### GetParameterNames() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get parameter names.


#### GetReferenceDesign() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)

Get the reference design if available.


#### GetResponseNames() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get response names.


#### GetSurrogateByName(arg2: str) → object

Get a certain actual surrogate model.


#### GetSurrogateNamesSortedByCoP() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get surrogate model names, sorted descending by their CoP.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [Id](#py_monitoring_kernel.Id))


#### get_algorithm_info() → [AlgorithmInfo](py_algorithm_info.md#py_algorithm_info.AlgorithmInfo)

Get structure providing information about the underlying algorithm that lead to the results.


#### get_best_design_ids() → [SignalDesignList](py_monitoring_gui.md#py_monitoring_gui.Visuals.SignalDesignList)

Returns a container of design IDs from the best active designs.


#### get_bounds_of_parameter(arg2: [Dimension](#py_monitoring_kernel.Dimension)) → object


#### get_criteria_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get criteria names.


#### get_design_sets() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get the names of available design sets.


#### get_nominal_design() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)

Get the nominal design if available.


#### get_objective_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get objective names.


#### get_original_designs() → [PyOSDesignContainer](py_os_design.md#py_os_design.PyOSDesignContainer)

Get the original design container. Design deactivation states are not considered.


#### get_original_parameter_manager() → [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager)

Get the original parameter manager. Parameter deactivation states are not considered.


#### get_parameter_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get parameter names.


#### get_reference_design() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)

Get the reference design if available.


#### get_response_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get response names.


#### get_signal_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get signal names.


#### get_surrogate_by_name(arg2: str) → object

Get a certain actual surrogate model.


#### get_surrogate_names_sorted_by_cop() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get surrogate model names, sorted descending by their CoP.


#### get_surrogates() → list

Get all surrogate models.


#### has_embedded_user_settings() → bool

Returns whether data container has embedded user settings.


#### *property* id

The identifier of the data object.


### *class* py_monitoring_kernel.PaletteColor

Color object which holds value, value_type and color. PALETTE_VALUE_MINIMUM and PALETTE_VALUE_MAXIMUM should only occur once because they define the colors below and above of the value range.


#### \_\_init_\_()

#### \_\_init_\_()


#### *property* color


#### *property* value


#### *property* value_type


### *class* py_monitoring_kernel.PaletteColorData

Color data object which holds PaletteColors, gradient and value type.


#### \_\_init_\_()

#### \_\_init_\_()


#### *property* color_vec


#### *property* gradient


#### *property* value_type


### *class* py_monitoring_kernel.PaletteColorValueType

**Enumeration**

Enumerates available palette_colore value types. Default is PALETTE_VALUE_CUSTOM


#### PALETTE_VALUE_CUSTOM *= py_monitoring_kernel.PaletteColorValueType.PALETTE_VALUE_CUSTOM*


#### PALETTE_VALUE_MAXIMUM *= py_monitoring_kernel.PaletteColorValueType.PALETTE_VALUE_MAXIMUM*


#### PALETTE_VALUE_MINIMUM *= py_monitoring_kernel.PaletteColorValueType.PALETTE_VALUE_MINIMUM*


### *class* py_monitoring_kernel.PaletteColorVector


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object

#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [PaletteColor](#py_monitoring_kernel.PaletteColor))


#### size() → int


### *class* py_monitoring_kernel.PaletteData

Data object which contains name, is_default, save_in_file and PaletteColorData.


#### \_\_init_\_()

#### \_\_init_\_()


#### *property* color_data


#### *property* default


#### *property* name


#### *property* save_in_file


### *class* py_monitoring_kernel.PaletteGradient

**Enumeration**

Enumerates color gradient types. Default is PALETTE_GRADIENT_INTERPOLATING.


#### PALETTE_GRADIENT_Discrete *= py_monitoring_kernel.PaletteGradient.PALETTE_GRADIENT_Discrete*


#### PALETTE_GRADIENT_INTERPOLATING *= py_monitoring_kernel.PaletteGradient.PALETTE_GRADIENT_INTERPOLATING*


### *class* py_monitoring_kernel.PaletteValueType

**Enumeration**

Enumerates value_types. Default is PALETTE_GRADIENT_INTERPOLATING.


#### PALETTE_VALUE_TYPE_ABSOLUTE *= py_monitoring_kernel.PaletteValueType.PALETTE_VALUE_TYPE_ABSOLUTE*


#### PALETTE_VALUE_TYPE_PERCENTUAL *= py_monitoring_kernel.PaletteValueType.PALETTE_VALUE_TYPE_PERCENTUAL*


### *class* py_monitoring_kernel.PredefinedColor

**Enumeration**

Enumerates predefined colors.


#### COLOR_BLACK *= py_monitoring_kernel.PredefinedColor.COLOR_BLACK*


#### COLOR_BLUE *= py_monitoring_kernel.PredefinedColor.COLOR_BLUE*


#### COLOR_CYAN *= py_monitoring_kernel.PredefinedColor.COLOR_CYAN*


#### COLOR_DEFAULT *= py_monitoring_kernel.PredefinedColor.COLOR_DEFAULT*


#### COLOR_GREEN *= py_monitoring_kernel.PredefinedColor.COLOR_GREEN*


#### COLOR_MAGENTA *= py_monitoring_kernel.PredefinedColor.COLOR_MAGENTA*


#### COLOR_ORANGE *= py_monitoring_kernel.PredefinedColor.COLOR_ORANGE*


#### COLOR_PINK *= py_monitoring_kernel.PredefinedColor.COLOR_PINK*


#### COLOR_RED *= py_monitoring_kernel.PredefinedColor.COLOR_RED*


#### COLOR_VIOLET *= py_monitoring_kernel.PredefinedColor.COLOR_VIOLET*


#### COLOR_YELLOW *= py_monitoring_kernel.PredefinedColor.COLOR_YELLOW*


### *class* py_monitoring_kernel.PredefinedStipple

**Enumeration**

Enumerates available style stipplings.


#### STIPPLE_DASHED *= py_monitoring_kernel.PredefinedStipple.STIPPLE_DASHED*


#### STIPPLE_DOTTED *= py_monitoring_kernel.PredefinedStipple.STIPPLE_DOTTED*


#### STIPPLE_NONE *= py_monitoring_kernel.PredefinedStipple.STIPPLE_NONE*


#### STIPPLE_SOLID *= py_monitoring_kernel.PredefinedStipple.STIPPLE_SOLID*


### *class* py_monitoring_kernel.PredefinedSymbol

**Enumeration**

Enumerates available style symbols.


#### SYMBOL_CIRCLE *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_CIRCLE*


#### SYMBOL_DIAMOND *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_DIAMOND*


#### SYMBOL_NONE *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_NONE*


#### SYMBOL_RECTANGLE *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_RECTANGLE*


#### SYMBOL_TRIANGLE *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_TRIANGLE*


### *class* py_monitoring_kernel.PyControlContainer

A (visual) container object, managing and displaying controls.


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### add_control(arg2: ControlInterface)


#### find_control_by_name(arg2: str) → [ControlInterface](#py_monitoring_kernel.ControlInterface)

Find control by name


#### get_control(arg2: [Id](#py_monitoring_kernel.Id)) → [ControlInterface](#py_monitoring_kernel.ControlInterface)

Get control by ID


#### open(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Open a monitoring database


#### remove_all_controls()

Remove all controls from the container


#### remove_control(arg2: [Id](#py_monitoring_kernel.Id))

Remove a control from the container


#### set_control_visible(arg2: [Id](#py_monitoring_kernel.Id), arg3: bool)

Show/Hide a control


#### set_positioning(arg2: Id)


### *class* py_monitoring_kernel.Stipple

Stipple object used to style designs.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [PredefinedStipple](#py_monitoring_kernel.PredefinedStipple), arg3: float)


#### *property* stipple

The actual stipple id.


### *class* py_monitoring_kernel.Style

Style object used to style designs.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [Color](#py_monitoring_kernel.Color))

#### \_\_init_\_(arg2: [Color](#py_monitoring_kernel.Color), arg3: [Symbol](#py_monitoring_kernel.Symbol))

#### \_\_init_\_(arg2: [Color](#py_monitoring_kernel.Color), arg3: [Symbol](#py_monitoring_kernel.Symbol), arg4: [Stipple](#py_monitoring_kernel.Stipple))


#### *property* color

The color of the style.


#### *property* stipple

The stipple of the style.


#### *property* symbol

The symbol of the style.


### *class* py_monitoring_kernel.StyleList


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### push_back(arg2: [Style](#py_monitoring_kernel.Style))


#### size() → int


#### style_export_list() → [StyleList](#py_monitoring_kernel.StyleList)


### *class* py_monitoring_kernel.Symbol

Symbol object used to style designs.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [PredefinedSymbol](#py_monitoring_kernel.PredefinedSymbol), arg3: float)


#### *property* symbol

The actual symbol id.


### py_monitoring_kernel.default_style() → [Style](#py_monitoring_kernel.Style)

Default style of designs.
