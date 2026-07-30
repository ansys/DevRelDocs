# py_monitoring_kernel

<a id="py_monitoring_kernel.Color"></a>

## *class* py_monitoring_kernel.Color

Color object used to style designs.

<a id="py_monitoring_kernel.Color.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [PredefinedColor](#py_monitoring_kernel.PredefinedColor))

#### \_\_init_\_(arg2: int, arg3: int, arg4: int)

#### \_\_init_\_(arg2: int, arg3: int, arg4: int, arg5: int)

#### \_\_init_\_(arg2: int, arg3: int)

<a id="py_monitoring_kernel.Color.a"></a>

#### *property* a

Alpha component of the color.

<a id="py_monitoring_kernel.Color.b"></a>

#### *property* b

Blue component of the color.

<a id="py_monitoring_kernel.Color.g"></a>

#### *property* g

Green component of the color.

<a id="py_monitoring_kernel.Color.r"></a>

#### *property* r

Red component of the color.

<a id="py_monitoring_kernel.Control"></a>

## *class* py_monitoring_kernel.Control

<a id="py_monitoring_kernel.Control.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_monitoring_kernel.ControlInterface"></a>

## *class* py_monitoring_kernel.ControlInterface

Base interface of a monitoring control. Controls display data and/or provide data editing functionality.

<a id="py_monitoring_kernel.ControlInterface.GetId"></a>

#### GetId() → [Id](#py_monitoring_kernel.Id)

<a id="py_monitoring_kernel.ControlInterface.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_monitoring_kernel.ControlInterface.get_id"></a>

#### get_id() → [Id](#py_monitoring_kernel.Id)

<a id="py_monitoring_kernel.ControlPositioning"></a>

## *class* py_monitoring_kernel.ControlPositioning

**Enumeration**

Enumerates possible control positioning alternatives.

<a id="py_monitoring_kernel.ControlPositioning.ABSOLUTE_POSITIONING"></a>

#### ABSOLUTE_POSITIONING *= py_monitoring_kernel.ControlPositioning.ABSOLUTE_POSITIONING*

<a id="py_monitoring_kernel.ControlPositioning.FREE_POSITIONING"></a>

#### FREE_POSITIONING *= py_monitoring_kernel.ControlPositioning.FREE_POSITIONING*

<a id="py_monitoring_kernel.ControlPositioning.RELATIVE_POSITIONING"></a>

#### RELATIVE_POSITIONING *= py_monitoring_kernel.ControlPositioning.RELATIVE_POSITIONING*

<a id="py_monitoring_kernel.Controller"></a>

## *class* py_monitoring_kernel.Controller

<a id="py_monitoring_kernel.Controller.__init__"></a>

#### \_\_init_\_()

<a id="py_monitoring_kernel.ControllerInterface"></a>

## *class* py_monitoring_kernel.ControllerInterface

Base interface of a controller object, managing monitoring data, monitoring visuals and controls, and data change requests.

<a id="py_monitoring_kernel.ControllerInterface.GetMonitoringData"></a>

#### GetMonitoringData(arg2: [Id](#py_monitoring_kernel.Id)) → [MonitoringData](#py_monitoring_kernel.MonitoringData)

Get a certain monitoring data object.

<a id="py_monitoring_kernel.ControllerInterface.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_monitoring_kernel.ControllerInterface.get_monitoring_data"></a>

#### get_monitoring_data(arg2: [Id](#py_monitoring_kernel.Id)) → [MonitoringData](#py_monitoring_kernel.MonitoringData)

Get a certain monitoring data object.

<a id="py_monitoring_kernel.Convenience"></a>

## *class* py_monitoring_kernel.Convenience

<a id="py_monitoring_kernel.Convenience.__init__"></a>

#### \_\_init_\_()

<a id="py_monitoring_kernel.Convenience.activate_all_criteria"></a>

#### *static* activate_all_criteria(arg2: [Id](#py_monitoring_kernel.Id))

Globally activate all criteria.

<a id="py_monitoring_kernel.Convenience.activate_all_parameters"></a>

#### *static* activate_all_parameters(arg2: [Id](#py_monitoring_kernel.Id))

Globally activate all parameters.

<a id="py_monitoring_kernel.Convenience.activate_all_responses"></a>

#### *static* activate_all_responses(arg2: [Id](#py_monitoring_kernel.Id))

Globally activate all responses.

<a id="py_monitoring_kernel.Convenience.add_limit"></a>

#### *static* add_limit(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Limit](#py_monitoring_kernel.Limit))

Add a global limit value.

<a id="py_monitoring_kernel.Convenience.deactivate_all_designs"></a>

#### *static* deactivate_all_designs(arg2: [Id](#py_monitoring_kernel.Id))

Globally deactivate all designs.

<a id="py_monitoring_kernel.Convenience.deactivate_unimportant_parameters"></a>

#### *static* deactivate_unimportant_parameters(arg2: [Id](#py_monitoring_kernel.Id))

Globally deactivate all unimportant parameters.

<a id="py_monitoring_kernel.Convenience.deselect_all_designs"></a>

#### *static* deselect_all_designs(arg2: [Id](#py_monitoring_kernel.Id))

Globally deselect all designs.

<a id="py_monitoring_kernel.Convenience.export_palette"></a>

#### *static* export_palette(arg2: [Id](#py_monitoring_kernel.Id), arg3: str, arg4: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), arg5: bool)

Export palette.

<a id="py_monitoring_kernel.Convenience.get_limit_by_name"></a>

#### *static* get_limit_by_name(arg2: [Id](#py_monitoring_kernel.Id), arg3: str) → [Limit](#py_monitoring_kernel.Limit)

Get limit with given name when found.

<a id="py_monitoring_kernel.Convenience.get_num_deactivated_parameters"></a>

#### *static* get_num_deactivated_parameters(arg2: [Id](#py_monitoring_kernel.Id)) → int

Get number of deactivated parameters.

<a id="py_monitoring_kernel.Convenience.get_palette"></a>

#### *static* get_palette(arg2: [Id](#py_monitoring_kernel.Id), arg3: str) → [PaletteData](#py_monitoring_kernel.PaletteData)

Get palette by name.

<a id="py_monitoring_kernel.Convenience.get_palette_names"></a>

#### *static* get_palette_names(arg2: [Id](#py_monitoring_kernel.Id)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get all exitings palette names.

<a id="py_monitoring_kernel.Convenience.get_unimportant_parameters"></a>

#### *static* get_unimportant_parameters(arg2: [Id](#py_monitoring_kernel.Id)) → [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet)

Get names of all unimportant parameters.

<a id="py_monitoring_kernel.Convenience.get_unused_responses"></a>

#### *static* get_unused_responses(arg2: [Id](#py_monitoring_kernel.Id)) → [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet)

Get names of all unused responses.

<a id="py_monitoring_kernel.Convenience.has_limit"></a>

#### *static* has_limit(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Limit](#py_monitoring_kernel.Limit)) → bool

Return true when limit is found.

<a id="py_monitoring_kernel.Convenience.is_parameter_active"></a>

#### *static* is_parameter_active(arg2: [Id](#py_monitoring_kernel.Id), arg3: str) → bool

Returns true when parameter is active.

<a id="py_monitoring_kernel.Convenience.is_response_active"></a>

#### *static* is_response_active(arg2: [Id](#py_monitoring_kernel.Id), arg3: str) → bool

Returns true when response is active.

<a id="py_monitoring_kernel.Convenience.load_palette_from_file"></a>

#### *static* load_palette_from_file(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Load palette from file.

<a id="py_monitoring_kernel.Convenience.load_palette_from_folder"></a>

#### *static* load_palette_from_folder(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Load palettes from folder.

<a id="py_monitoring_kernel.Convenience.preserve_param_activation"></a>

#### *static* preserve_param_activation() → bool

Returns true when parameter activation should be preserved.

<a id="py_monitoring_kernel.Convenience.remove_default_limits"></a>

#### *static* remove_default_limits(arg2: [Id](#py_monitoring_kernel.Id))

Remove all default limits.

<a id="py_monitoring_kernel.Convenience.remove_limit"></a>

#### *static* remove_limit(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Limit](#py_monitoring_kernel.Limit))

Remove a global limit.

<a id="py_monitoring_kernel.Convenience.select_best_designs"></a>

#### *static* select_best_designs(arg2: [Id](#py_monitoring_kernel.Id))

Select best designs.

<a id="py_monitoring_kernel.Convenience.set_1st_axis"></a>

#### *static* set_1st_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension))

Globally change what object to display at first axis.

<a id="py_monitoring_kernel.Convenience.set_2nd_axis"></a>

#### *static* set_2nd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension))

Globally change what object to display at second axis.

<a id="py_monitoring_kernel.Convenience.set_3rd_axis"></a>

#### *static* set_3rd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension))

Globally change what object to display at third axis.

<a id="py_monitoring_kernel.Convenience.set_criteria_activated"></a>

#### *static* set_criteria_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally activate criteria.

<a id="py_monitoring_kernel.Convenience.set_criteria_deactivated"></a>

#### *static* set_criteria_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally deactivate criteria.

<a id="py_monitoring_kernel.Convenience.set_criterion_activated"></a>

#### *static* set_criterion_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally activate a certain criterion.

<a id="py_monitoring_kernel.Convenience.set_criterion_deactivated"></a>

#### *static* set_criterion_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally deactivate a certain criterion.

<a id="py_monitoring_kernel.Convenience.set_criterion_to_1st_axis"></a>

#### *static* set_criterion_to_1st_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what criterion to display at first axis.

<a id="py_monitoring_kernel.Convenience.set_criterion_to_2nd_axis"></a>

#### *static* set_criterion_to_2nd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what criterion to display at second axis.

<a id="py_monitoring_kernel.Convenience.set_criterion_to_3rd_axis"></a>

#### *static* set_criterion_to_3rd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what criterion to display at third axis.

<a id="py_monitoring_kernel.Convenience.set_default_palette"></a>

#### *static* set_default_palette(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Set default palette.

<a id="py_monitoring_kernel.Convenience.set_design_activated"></a>

#### *static* set_design_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HID](id.md#id.HID), arg4: bool)

Globally activate/deactivate a certain design.

<a id="py_monitoring_kernel.Convenience.set_design_selected"></a>

#### *static* set_design_selected(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HID](id.md#id.HID), arg4: bool)

Globally select/deselect a certain design.

<a id="py_monitoring_kernel.Convenience.set_design_set"></a>

#### *static* set_design_set(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change set of designs to display.

<a id="py_monitoring_kernel.Convenience.set_design_style"></a>

#### *static* set_design_style(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HID](id.md#id.HID), arg4: [Style](#py_monitoring_kernel.Style))

Globally change the style of a certain design.

<a id="py_monitoring_kernel.Convenience.set_designs_selected"></a>

#### *static* set_designs_selected(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HIDSet](id.md#id.HIDSet), arg4: bool)

Globally select/deselect certain designs.

<a id="py_monitoring_kernel.Convenience.set_designs_style"></a>

#### *static* set_designs_style(arg2: [Id](#py_monitoring_kernel.Id), arg3: [HIDSet](id.md#id.HIDSet), arg4: [Style](#py_monitoring_kernel.Style))

Globally change the style of a given designs.

<a id="py_monitoring_kernel.Convenience.set_limit_lower_value_at_dimension"></a>

#### *static* set_limit_lower_value_at_dimension(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension), arg4: [Limit](#py_monitoring_kernel.Limit), arg5: float)

Set limit lower value at a dimension.

<a id="py_monitoring_kernel.Convenience.set_limit_target_at_dimension"></a>

#### *static* set_limit_target_at_dimension(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension), arg4: [Limit](#py_monitoring_kernel.Limit), arg5: float)

Set limit target at a dimension.

<a id="py_monitoring_kernel.Convenience.set_limit_upper_value_at_dimension"></a>

#### *static* set_limit_upper_value_at_dimension(arg2: [Id](#py_monitoring_kernel.Id), arg3: [Dimension](#py_monitoring_kernel.Dimension), arg4: [Limit](#py_monitoring_kernel.Limit), arg5: float)

Set limit upper value at a dimension.

<a id="py_monitoring_kernel.Convenience.set_palette"></a>

#### *static* set_palette(arg2: [Id](#py_monitoring_kernel.Id), arg3: [PaletteData](#py_monitoring_kernel.PaletteData), arg4: bool)

Set palette with the option to overwrite. If overwrite is False palette name will be made unique.

<a id="py_monitoring_kernel.Convenience.set_parameter_activated"></a>

#### *static* set_parameter_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str, arg4: bool)

Globally activate/deactivate a certain parameter.

<a id="py_monitoring_kernel.Convenience.set_parameter_to_1st_axis"></a>

#### *static* set_parameter_to_1st_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what parameter to display at first axis.

<a id="py_monitoring_kernel.Convenience.set_parameter_to_2nd_axis"></a>

#### *static* set_parameter_to_2nd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what parameter to display at second axis.

<a id="py_monitoring_kernel.Convenience.set_parameter_to_3rd_axis"></a>

#### *static* set_parameter_to_3rd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what parameter to display at third axis.

<a id="py_monitoring_kernel.Convenience.set_parameter_value"></a>

#### *static* set_parameter_value(arg2: [Id](#py_monitoring_kernel.Id), arg3: str, arg4: float)

Globally set the value of a certain parameter.

<a id="py_monitoring_kernel.Convenience.set_parameter_values"></a>

#### *static* set_parameter_values(arg2: [Id](#py_monitoring_kernel.Id), arg3: [string_to_double_map](stdcpp_python_export.md#stdcpp_python_export.string_to_double_map))

Globally set the value of certain parameters.

<a id="py_monitoring_kernel.Convenience.set_parameters_activated"></a>

#### *static* set_parameters_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet), arg4: bool)

Globally activate/deactivate parameters.

<a id="py_monitoring_kernel.Convenience.set_parameters_deactivated"></a>

#### *static* set_parameters_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally deactivate parameters.

<a id="py_monitoring_kernel.Convenience.set_response_activated"></a>

#### *static* set_response_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally activate a certain response.

<a id="py_monitoring_kernel.Convenience.set_response_deactivated"></a>

#### *static* set_response_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally deactivate a certain response.

<a id="py_monitoring_kernel.Convenience.set_response_to_1st_axis"></a>

#### *static* set_response_to_1st_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what response to display at first axis.

<a id="py_monitoring_kernel.Convenience.set_response_to_2nd_axis"></a>

#### *static* set_response_to_2nd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what response to display at second axis.

<a id="py_monitoring_kernel.Convenience.set_response_to_3rd_axis"></a>

#### *static* set_response_to_3rd_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what response to display at third axis.

<a id="py_monitoring_kernel.Convenience.set_response_to_cop_axis"></a>

#### *static* set_response_to_cop_axis(arg2: [Id](#py_monitoring_kernel.Id), arg3: str)

Globally change what response to display at CoP listener axis.

<a id="py_monitoring_kernel.Convenience.set_responses_activated"></a>

#### *static* set_responses_activated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally activate responses.

<a id="py_monitoring_kernel.Convenience.set_responses_deactivated"></a>

#### *static* set_responses_deactivated(arg2: [Id](#py_monitoring_kernel.Id), arg3: [WStrSet](stdcpp_python_export.md#stdcpp_python_export.WStrSet))

Globally deactivate responses.

<a id="py_monitoring_kernel.Convenience.switch_first_and_second_axis"></a>

#### *static* switch_first_and_second_axis(arg2: [Id](#py_monitoring_kernel.Id))

Globally switch what is being displayed at first and second axis.

<a id="py_monitoring_kernel.CorrelationTypes"></a>

## *class* py_monitoring_kernel.CorrelationTypes

**Enumeration**

<a id="py_monitoring_kernel.CorrelationTypes.DistanceCorr"></a>

#### DistanceCorr *= py_monitoring_kernel.CorrelationTypes.DistanceCorr*

<a id="py_monitoring_kernel.CorrelationTypes.LinearCorr"></a>

#### LinearCorr *= py_monitoring_kernel.CorrelationTypes.LinearCorr*

<a id="py_monitoring_kernel.CorrelationTypes.QuadraticCorr"></a>

#### QuadraticCorr *= py_monitoring_kernel.CorrelationTypes.QuadraticCorr*

<a id="py_monitoring_kernel.CorrelationTypes.QuadraticMinusLinear"></a>

#### QuadraticMinusLinear *= py_monitoring_kernel.CorrelationTypes.QuadraticMinusLinear*

<a id="py_monitoring_kernel.CorrelationTypes.SpearmanRankOrder"></a>

#### SpearmanRankOrder *= py_monitoring_kernel.CorrelationTypes.SpearmanRankOrder*

<a id="py_monitoring_kernel.DefaultStyle"></a>

## py_monitoring_kernel.DefaultStyle() → [Style](#py_monitoring_kernel.Style)

Default style of designs.

<a id="py_monitoring_kernel.Dimension"></a>

## *class* py_monitoring_kernel.Dimension

Dimension object, which holds a dimension type (parameter/response/criterion) and a name.

<a id="py_monitoring_kernel.Dimension.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(DimensionType: [DimensionType](#py_monitoring_kernel.DimensionType), name: str)

#### \_\_init_\_(DimensionType: [DimensionType](#py_monitoring_kernel.DimensionType), name: str, vector_component: object) → object

[1] Create a Dimension with DimensionType and name.

[2] Create a Dimension with DimensionType and name and additionally a vector component index indicator, either an integer value, which is directly used as index, or a boolean value, then the index is created from the name if the name contains something like [%d].

<a id="py_monitoring_kernel.Dimension.get_index"></a>

#### get_index() → object

<a id="py_monitoring_kernel.Dimension.is_criterion"></a>

#### is_criterion() → bool

Return true if the dimension is a criterion.

<a id="py_monitoring_kernel.Dimension.is_parameter"></a>

#### is_parameter() → bool

Return true if the dimension is a parameter.

<a id="py_monitoring_kernel.Dimension.is_response"></a>

#### is_response() → bool

Return true if the dimension is a response.

<a id="py_monitoring_kernel.Dimension.is_signal"></a>

#### is_signal() → bool

Return true if the dimension is a signal.

<a id="py_monitoring_kernel.Dimension.is_vector_component"></a>

#### is_vector_component() → bool

Return true if the dimension is a vector component.

<a id="py_monitoring_kernel.Dimension.name"></a>

#### *property* name

The name of the dimension.

<a id="py_monitoring_kernel.Dimension.type"></a>

#### *property* type

The type of the dimension.

<a id="py_monitoring_kernel.DimensionList"></a>

## *class* py_monitoring_kernel.DimensionList

<a id="py_monitoring_kernel.DimensionList.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="py_monitoring_kernel.DimensionList.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="py_monitoring_kernel.DimensionList.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="py_monitoring_kernel.DimensionList.__init__"></a>

#### \_\_init_\_()

<a id="py_monitoring_kernel.DimensionList.__iter__"></a>

#### \_\_iter_\_() → object

#### \_\_iter_\_() → object

<a id="py_monitoring_kernel.DimensionList.__len__"></a>

#### \_\_len_\_() → int

<a id="py_monitoring_kernel.DimensionList.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="py_monitoring_kernel.DimensionList.append"></a>

#### append(arg2: object)

<a id="py_monitoring_kernel.DimensionList.extend"></a>

#### extend(arg2: object)

<a id="py_monitoring_kernel.DimensionList.push_back"></a>

#### push_back(arg2: [Dimension](#py_monitoring_kernel.Dimension))

<a id="py_monitoring_kernel.DimensionList.size"></a>

#### size() → int

<a id="py_monitoring_kernel.DimensionType"></a>

## *class* py_monitoring_kernel.DimensionType

**Enumeration**

Enumerates available dimension types.

<a id="py_monitoring_kernel.DimensionType.DIM_TYPE_CRITERION"></a>

#### DIM_TYPE_CRITERION *= py_monitoring_kernel.DimensionType.DIM_TYPE_CRITERION*

<a id="py_monitoring_kernel.DimensionType.DIM_TYPE_INVALID"></a>

#### DIM_TYPE_INVALID *= py_monitoring_kernel.DimensionType.DIM_TYPE_INVALID*

<a id="py_monitoring_kernel.DimensionType.DIM_TYPE_PARAMETER"></a>

#### DIM_TYPE_PARAMETER *= py_monitoring_kernel.DimensionType.DIM_TYPE_PARAMETER*

<a id="py_monitoring_kernel.DimensionType.DIM_TYPE_RESPONSE"></a>

#### DIM_TYPE_RESPONSE *= py_monitoring_kernel.DimensionType.DIM_TYPE_RESPONSE*

<a id="py_monitoring_kernel.DimensionType.DIM_TYPE_SIGNAL"></a>

#### DIM_TYPE_SIGNAL *= py_monitoring_kernel.DimensionType.DIM_TYPE_SIGNAL*

<a id="py_monitoring_kernel.DimensionVector"></a>

## *class* py_monitoring_kernel.DimensionVector

<a id="py_monitoring_kernel.DimensionVector.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="py_monitoring_kernel.DimensionVector.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="py_monitoring_kernel.DimensionVector.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="py_monitoring_kernel.DimensionVector.__init__"></a>

#### \_\_init_\_()

<a id="py_monitoring_kernel.DimensionVector.__iter__"></a>

#### \_\_iter_\_() → object

#### \_\_iter_\_() → object

<a id="py_monitoring_kernel.DimensionVector.__len__"></a>

#### \_\_len_\_() → int

<a id="py_monitoring_kernel.DimensionVector.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="py_monitoring_kernel.DimensionVector.append"></a>

#### append(arg2: object)

<a id="py_monitoring_kernel.DimensionVector.extend"></a>

#### extend(arg2: object)

<a id="py_monitoring_kernel.DimensionVector.push_back"></a>

#### push_back(arg2: [Dimension](#py_monitoring_kernel.Dimension))

<a id="py_monitoring_kernel.DimensionVector.size"></a>

#### size() → int

<a id="py_monitoring_kernel.Id"></a>

## *class* py_monitoring_kernel.Id

An id to identify arbitrary objects within monitoring. Consists of a unique UUID and a name.

<a id="py_monitoring_kernel.Id.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: str)

<a id="py_monitoring_kernel.Id.name"></a>

#### *property* name

Name of the object. May not be unique.

<a id="py_monitoring_kernel.Limit"></a>

## *class* py_monitoring_kernel.Limit

Limit object, which holds a default lower and a default upper value, an ID and a style.

<a id="py_monitoring_kernel.Limit.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: str, arg3: LimitValue, arg4: LimitValue)

<a id="py_monitoring_kernel.Limit.default_lower_value"></a>

#### *property* default_lower_value

The default lower value of the limit.

<a id="py_monitoring_kernel.Limit.default_upper_value"></a>

#### *property* default_upper_value

The default upper value of the limit.

<a id="py_monitoring_kernel.Limit.name"></a>

#### *property* name

The name of the limit.

<a id="py_monitoring_kernel.Limit.style"></a>

#### *property* style

The name of the limit.

<a id="py_monitoring_kernel.LimitValue"></a>

## *class* py_monitoring_kernel.LimitValue

**Enumeration**

Enumerates available limit values.

<a id="py_monitoring_kernel.LimitValue.LIMIT_DEFAULT_FAILURE_VALUE"></a>

#### LIMIT_DEFAULT_FAILURE_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_DEFAULT_FAILURE_VALUE*

<a id="py_monitoring_kernel.LimitValue.LIMIT_DEFAULT_SAFETY_VALUE"></a>

#### LIMIT_DEFAULT_SAFETY_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_DEFAULT_SAFETY_VALUE*

<a id="py_monitoring_kernel.LimitValue.LIMIT_MAX_VALUE"></a>

#### LIMIT_MAX_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_MAX_VALUE*

<a id="py_monitoring_kernel.LimitValue.LIMIT_MEAN_PLUS_STDDEV_VALUE"></a>

#### LIMIT_MEAN_PLUS_STDDEV_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_MEAN_PLUS_STDDEV_VALUE*

<a id="py_monitoring_kernel.LimitValue.LIMIT_MEAN_VALUE"></a>

#### LIMIT_MEAN_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_MEAN_VALUE*

<a id="py_monitoring_kernel.LimitValue.LIMIT_MIN_VALUE"></a>

#### LIMIT_MIN_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_MIN_VALUE*

<a id="py_monitoring_kernel.LimitValue.LIMIT_NONE_VALUE"></a>

#### LIMIT_NONE_VALUE *= py_monitoring_kernel.LimitValue.LIMIT_NONE_VALUE*

<a id="py_monitoring_kernel.MonitoringData"></a>

## *class* py_monitoring_kernel.MonitoringData

Encapsulates a block of data to be monitored.

<a id="py_monitoring_kernel.MonitoringData.GetAlgorithmInfo"></a>

#### GetAlgorithmInfo() → [AlgorithmInfo](py_algorithm_info.md#py_algorithm_info.AlgorithmInfo)

Get structure providing information about the underlying algorithm that lead to the results.

<a id="py_monitoring_kernel.MonitoringData.GetBoundsOfParameter"></a>

#### GetBoundsOfParameter(arg2: [Dimension](#py_monitoring_kernel.Dimension)) → object

<a id="py_monitoring_kernel.MonitoringData.GetCriteriaNames"></a>

#### GetCriteriaNames() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get criteria names.

<a id="py_monitoring_kernel.MonitoringData.GetDesignSets"></a>

#### GetDesignSets() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get the names of available design sets.

<a id="py_monitoring_kernel.MonitoringData.GetNominalDesign"></a>

#### GetNominalDesign() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)

Get the nominal design if available.

<a id="py_monitoring_kernel.MonitoringData.GetObjectiveNames"></a>

#### GetObjectiveNames() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get objective names.

<a id="py_monitoring_kernel.MonitoringData.GetOriginalDesigns"></a>

#### GetOriginalDesigns() → [PyOSDesignContainer](py_os_design.md#py_os_design.PyOSDesignContainer)

Get the original design container. Design deactivation states are not considered.

<a id="py_monitoring_kernel.MonitoringData.GetParameterNames"></a>

#### GetParameterNames() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get parameter names.

<a id="py_monitoring_kernel.MonitoringData.GetReferenceDesign"></a>

#### GetReferenceDesign() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)

Get the reference design if available.

<a id="py_monitoring_kernel.MonitoringData.GetResponseNames"></a>

#### GetResponseNames() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get response names.

<a id="py_monitoring_kernel.MonitoringData.GetSurrogateByName"></a>

#### GetSurrogateByName(arg2: str) → object

Get a certain actual surrogate model.

<a id="py_monitoring_kernel.MonitoringData.GetSurrogateNamesSortedByCoP"></a>

#### GetSurrogateNamesSortedByCoP() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get surrogate model names, sorted descending by their CoP.

<a id="py_monitoring_kernel.MonitoringData.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [Id](#py_monitoring_kernel.Id))

<a id="py_monitoring_kernel.MonitoringData.get_algorithm_info"></a>

#### get_algorithm_info() → [AlgorithmInfo](py_algorithm_info.md#py_algorithm_info.AlgorithmInfo)

Get structure providing information about the underlying algorithm that lead to the results.

<a id="py_monitoring_kernel.MonitoringData.get_best_design_ids"></a>

#### get_best_design_ids() → [SignalDesignList](py_monitoring_gui.md#py_monitoring_gui.Visuals.SignalDesignList)

Returns a container of design IDs from the best active designs.

<a id="py_monitoring_kernel.MonitoringData.get_bounds_of_parameter"></a>

#### get_bounds_of_parameter(arg2: [Dimension](#py_monitoring_kernel.Dimension)) → object

<a id="py_monitoring_kernel.MonitoringData.get_criteria_names"></a>

#### get_criteria_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get criteria names.

<a id="py_monitoring_kernel.MonitoringData.get_design_sets"></a>

#### get_design_sets() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get the names of available design sets.

<a id="py_monitoring_kernel.MonitoringData.get_nominal_design"></a>

#### get_nominal_design() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)

Get the nominal design if available.

<a id="py_monitoring_kernel.MonitoringData.get_objective_names"></a>

#### get_objective_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get objective names.

<a id="py_monitoring_kernel.MonitoringData.get_original_designs"></a>

#### get_original_designs() → [PyOSDesignContainer](py_os_design.md#py_os_design.PyOSDesignContainer)

Get the original design container. Design deactivation states are not considered.

<a id="py_monitoring_kernel.MonitoringData.get_original_parameter_manager"></a>

#### get_original_parameter_manager() → [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager)

Get the original parameter manager. Parameter deactivation states are not considered.

<a id="py_monitoring_kernel.MonitoringData.get_parameter_names"></a>

#### get_parameter_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get parameter names.

<a id="py_monitoring_kernel.MonitoringData.get_reference_design"></a>

#### get_reference_design() → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)

Get the reference design if available.

<a id="py_monitoring_kernel.MonitoringData.get_response_names"></a>

#### get_response_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get response names.

<a id="py_monitoring_kernel.MonitoringData.get_signal_names"></a>

#### get_signal_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get signal names.

<a id="py_monitoring_kernel.MonitoringData.get_surrogate_by_name"></a>

#### get_surrogate_by_name(arg2: str) → object

Get a certain actual surrogate model.

<a id="py_monitoring_kernel.MonitoringData.get_surrogate_names_sorted_by_cop"></a>

#### get_surrogate_names_sorted_by_cop() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get surrogate model names, sorted descending by their CoP.

<a id="py_monitoring_kernel.MonitoringData.get_surrogates"></a>

#### get_surrogates() → list

Get all surrogate models.

<a id="py_monitoring_kernel.MonitoringData.has_embedded_user_settings"></a>

#### has_embedded_user_settings() → bool

Returns whether data container has embedded user settings.

<a id="py_monitoring_kernel.MonitoringData.id"></a>

#### *property* id

The identifier of the data object.

<a id="py_monitoring_kernel.PaletteColor"></a>

## *class* py_monitoring_kernel.PaletteColor

Color object which holds value, value_type and color. PALETTE_VALUE_MINIMUM and PALETTE_VALUE_MAXIMUM should only occur once because they define the colors below and above of the value range.

<a id="py_monitoring_kernel.PaletteColor.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_()

<a id="py_monitoring_kernel.PaletteColor.color"></a>

#### *property* color

<a id="py_monitoring_kernel.PaletteColor.value"></a>

#### *property* value

<a id="py_monitoring_kernel.PaletteColor.value_type"></a>

#### *property* value_type

<a id="py_monitoring_kernel.PaletteColorData"></a>

## *class* py_monitoring_kernel.PaletteColorData

Color data object which holds PaletteColors, gradient and value type.

<a id="py_monitoring_kernel.PaletteColorData.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_()

<a id="py_monitoring_kernel.PaletteColorData.color_vec"></a>

#### *property* color_vec

<a id="py_monitoring_kernel.PaletteColorData.gradient"></a>

#### *property* gradient

<a id="py_monitoring_kernel.PaletteColorData.value_type"></a>

#### *property* value_type

<a id="py_monitoring_kernel.PaletteColorValueType"></a>

## *class* py_monitoring_kernel.PaletteColorValueType

**Enumeration**

Enumerates available palette_colore value types. Default is PALETTE_VALUE_CUSTOM

<a id="py_monitoring_kernel.PaletteColorValueType.PALETTE_VALUE_CUSTOM"></a>

#### PALETTE_VALUE_CUSTOM *= py_monitoring_kernel.PaletteColorValueType.PALETTE_VALUE_CUSTOM*

<a id="py_monitoring_kernel.PaletteColorValueType.PALETTE_VALUE_MAXIMUM"></a>

#### PALETTE_VALUE_MAXIMUM *= py_monitoring_kernel.PaletteColorValueType.PALETTE_VALUE_MAXIMUM*

<a id="py_monitoring_kernel.PaletteColorValueType.PALETTE_VALUE_MINIMUM"></a>

#### PALETTE_VALUE_MINIMUM *= py_monitoring_kernel.PaletteColorValueType.PALETTE_VALUE_MINIMUM*

<a id="py_monitoring_kernel.PaletteColorVector"></a>

## *class* py_monitoring_kernel.PaletteColorVector

<a id="py_monitoring_kernel.PaletteColorVector.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="py_monitoring_kernel.PaletteColorVector.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="py_monitoring_kernel.PaletteColorVector.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="py_monitoring_kernel.PaletteColorVector.__init__"></a>

#### \_\_init_\_()

<a id="py_monitoring_kernel.PaletteColorVector.__iter__"></a>

#### \_\_iter_\_() → object

#### \_\_iter_\_() → object

<a id="py_monitoring_kernel.PaletteColorVector.__len__"></a>

#### \_\_len_\_() → int

<a id="py_monitoring_kernel.PaletteColorVector.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="py_monitoring_kernel.PaletteColorVector.append"></a>

#### append(arg2: object)

<a id="py_monitoring_kernel.PaletteColorVector.extend"></a>

#### extend(arg2: object)

<a id="py_monitoring_kernel.PaletteColorVector.push_back"></a>

#### push_back(arg2: [PaletteColor](#py_monitoring_kernel.PaletteColor))

<a id="py_monitoring_kernel.PaletteColorVector.size"></a>

#### size() → int

<a id="py_monitoring_kernel.PaletteData"></a>

## *class* py_monitoring_kernel.PaletteData

Data object which contains name, is_default, save_in_file and PaletteColorData.

<a id="py_monitoring_kernel.PaletteData.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_()

<a id="py_monitoring_kernel.PaletteData.color_data"></a>

#### *property* color_data

<a id="py_monitoring_kernel.PaletteData.default"></a>

#### *property* default

<a id="py_monitoring_kernel.PaletteData.name"></a>

#### *property* name

<a id="py_monitoring_kernel.PaletteData.save_in_file"></a>

#### *property* save_in_file

<a id="py_monitoring_kernel.PaletteGradient"></a>

## *class* py_monitoring_kernel.PaletteGradient

**Enumeration**

Enumerates color gradient types. Default is PALETTE_GRADIENT_INTERPOLATING.

<a id="py_monitoring_kernel.PaletteGradient.PALETTE_GRADIENT_Discrete"></a>

#### PALETTE_GRADIENT_Discrete *= py_monitoring_kernel.PaletteGradient.PALETTE_GRADIENT_Discrete*

<a id="py_monitoring_kernel.PaletteGradient.PALETTE_GRADIENT_INTERPOLATING"></a>

#### PALETTE_GRADIENT_INTERPOLATING *= py_monitoring_kernel.PaletteGradient.PALETTE_GRADIENT_INTERPOLATING*

<a id="py_monitoring_kernel.PaletteValueType"></a>

## *class* py_monitoring_kernel.PaletteValueType

**Enumeration**

Enumerates value_types. Default is PALETTE_GRADIENT_INTERPOLATING.

<a id="py_monitoring_kernel.PaletteValueType.PALETTE_VALUE_TYPE_ABSOLUTE"></a>

#### PALETTE_VALUE_TYPE_ABSOLUTE *= py_monitoring_kernel.PaletteValueType.PALETTE_VALUE_TYPE_ABSOLUTE*

<a id="py_monitoring_kernel.PaletteValueType.PALETTE_VALUE_TYPE_PERCENTUAL"></a>

#### PALETTE_VALUE_TYPE_PERCENTUAL *= py_monitoring_kernel.PaletteValueType.PALETTE_VALUE_TYPE_PERCENTUAL*

<a id="py_monitoring_kernel.PredefinedColor"></a>

## *class* py_monitoring_kernel.PredefinedColor

**Enumeration**

Enumerates predefined colors.

<a id="py_monitoring_kernel.PredefinedColor.COLOR_BLACK"></a>

#### COLOR_BLACK *= py_monitoring_kernel.PredefinedColor.COLOR_BLACK*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_BLUE"></a>

#### COLOR_BLUE *= py_monitoring_kernel.PredefinedColor.COLOR_BLUE*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_CYAN"></a>

#### COLOR_CYAN *= py_monitoring_kernel.PredefinedColor.COLOR_CYAN*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_DEFAULT"></a>

#### COLOR_DEFAULT *= py_monitoring_kernel.PredefinedColor.COLOR_DEFAULT*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_GREEN"></a>

#### COLOR_GREEN *= py_monitoring_kernel.PredefinedColor.COLOR_GREEN*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_MAGENTA"></a>

#### COLOR_MAGENTA *= py_monitoring_kernel.PredefinedColor.COLOR_MAGENTA*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_ORANGE"></a>

#### COLOR_ORANGE *= py_monitoring_kernel.PredefinedColor.COLOR_ORANGE*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_PINK"></a>

#### COLOR_PINK *= py_monitoring_kernel.PredefinedColor.COLOR_PINK*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_RED"></a>

#### COLOR_RED *= py_monitoring_kernel.PredefinedColor.COLOR_RED*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_VIOLET"></a>

#### COLOR_VIOLET *= py_monitoring_kernel.PredefinedColor.COLOR_VIOLET*

<a id="py_monitoring_kernel.PredefinedColor.COLOR_YELLOW"></a>

#### COLOR_YELLOW *= py_monitoring_kernel.PredefinedColor.COLOR_YELLOW*

<a id="py_monitoring_kernel.PredefinedStipple"></a>

## *class* py_monitoring_kernel.PredefinedStipple

**Enumeration**

Enumerates available style stipplings.

<a id="py_monitoring_kernel.PredefinedStipple.STIPPLE_DASHED"></a>

#### STIPPLE_DASHED *= py_monitoring_kernel.PredefinedStipple.STIPPLE_DASHED*

<a id="py_monitoring_kernel.PredefinedStipple.STIPPLE_DOTTED"></a>

#### STIPPLE_DOTTED *= py_monitoring_kernel.PredefinedStipple.STIPPLE_DOTTED*

<a id="py_monitoring_kernel.PredefinedStipple.STIPPLE_NONE"></a>

#### STIPPLE_NONE *= py_monitoring_kernel.PredefinedStipple.STIPPLE_NONE*

<a id="py_monitoring_kernel.PredefinedStipple.STIPPLE_SOLID"></a>

#### STIPPLE_SOLID *= py_monitoring_kernel.PredefinedStipple.STIPPLE_SOLID*

<a id="py_monitoring_kernel.PredefinedSymbol"></a>

## *class* py_monitoring_kernel.PredefinedSymbol

**Enumeration**

Enumerates available style symbols.

<a id="py_monitoring_kernel.PredefinedSymbol.SYMBOL_CIRCLE"></a>

#### SYMBOL_CIRCLE *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_CIRCLE*

<a id="py_monitoring_kernel.PredefinedSymbol.SYMBOL_DIAMOND"></a>

#### SYMBOL_DIAMOND *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_DIAMOND*

<a id="py_monitoring_kernel.PredefinedSymbol.SYMBOL_NONE"></a>

#### SYMBOL_NONE *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_NONE*

<a id="py_monitoring_kernel.PredefinedSymbol.SYMBOL_RECTANGLE"></a>

#### SYMBOL_RECTANGLE *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_RECTANGLE*

<a id="py_monitoring_kernel.PredefinedSymbol.SYMBOL_TRIANGLE"></a>

#### SYMBOL_TRIANGLE *= py_monitoring_kernel.PredefinedSymbol.SYMBOL_TRIANGLE*

<a id="py_monitoring_kernel.PyControlContainer"></a>

## *class* py_monitoring_kernel.PyControlContainer

A (visual) container object, managing and displaying controls.

<a id="py_monitoring_kernel.PyControlContainer.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_monitoring_kernel.PyControlContainer.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_monitoring_kernel.PyControlContainer.__len__"></a>

#### \_\_len_\_() → int

<a id="py_monitoring_kernel.PyControlContainer.add_control"></a>

#### add_control(arg2: ControlInterface)

<a id="py_monitoring_kernel.PyControlContainer.find_control_by_name"></a>

#### find_control_by_name(arg2: str) → [ControlInterface](#py_monitoring_kernel.ControlInterface)

Find control by name

<a id="py_monitoring_kernel.PyControlContainer.get_control"></a>

#### get_control(arg2: [Id](#py_monitoring_kernel.Id)) → [ControlInterface](#py_monitoring_kernel.ControlInterface)

Get control by ID

<a id="py_monitoring_kernel.PyControlContainer.open"></a>

#### open(arg2: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Open a monitoring database

<a id="py_monitoring_kernel.PyControlContainer.remove_all_controls"></a>

#### remove_all_controls()

Remove all controls from the container

<a id="py_monitoring_kernel.PyControlContainer.remove_control"></a>

#### remove_control(arg2: [Id](#py_monitoring_kernel.Id))

Remove a control from the container

<a id="py_monitoring_kernel.PyControlContainer.set_control_visible"></a>

#### set_control_visible(arg2: [Id](#py_monitoring_kernel.Id), arg3: bool)

Show/Hide a control

<a id="py_monitoring_kernel.PyControlContainer.set_positioning"></a>

#### set_positioning(arg2: Id)

<a id="py_monitoring_kernel.Stipple"></a>

## *class* py_monitoring_kernel.Stipple

Stipple object used to style designs.

<a id="py_monitoring_kernel.Stipple.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [PredefinedStipple](#py_monitoring_kernel.PredefinedStipple), arg3: float)

<a id="py_monitoring_kernel.Stipple.stipple"></a>

#### *property* stipple

The actual stipple id.

<a id="py_monitoring_kernel.Style"></a>

## *class* py_monitoring_kernel.Style

Style object used to style designs.

<a id="py_monitoring_kernel.Style.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [Color](#py_monitoring_kernel.Color))

#### \_\_init_\_(arg2: [Color](#py_monitoring_kernel.Color), arg3: [Symbol](#py_monitoring_kernel.Symbol))

#### \_\_init_\_(arg2: [Color](#py_monitoring_kernel.Color), arg3: [Symbol](#py_monitoring_kernel.Symbol), arg4: [Stipple](#py_monitoring_kernel.Stipple))

<a id="py_monitoring_kernel.Style.color"></a>

#### *property* color

The color of the style.

<a id="py_monitoring_kernel.Style.stipple"></a>

#### *property* stipple

The stipple of the style.

<a id="py_monitoring_kernel.Style.symbol"></a>

#### *property* symbol

The symbol of the style.

<a id="py_monitoring_kernel.StyleList"></a>

## *class* py_monitoring_kernel.StyleList

<a id="py_monitoring_kernel.StyleList.__init__"></a>

#### \_\_init_\_()

<a id="py_monitoring_kernel.StyleList.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_monitoring_kernel.StyleList.push_back"></a>

#### push_back(arg2: [Style](#py_monitoring_kernel.Style))

<a id="py_monitoring_kernel.StyleList.size"></a>

#### size() → int

<a id="py_monitoring_kernel.StyleList.style_export_list"></a>

#### style_export_list() → [StyleList](#py_monitoring_kernel.StyleList)

<a id="py_monitoring_kernel.Symbol"></a>

## *class* py_monitoring_kernel.Symbol

Symbol object used to style designs.

<a id="py_monitoring_kernel.Symbol.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [PredefinedSymbol](#py_monitoring_kernel.PredefinedSymbol), arg3: float)

<a id="py_monitoring_kernel.Symbol.symbol"></a>

#### *property* symbol

The actual symbol id.

<a id="py_monitoring_kernel.default_style"></a>

## py_monitoring_kernel.default_style() → [Style](#py_monitoring_kernel.Style)

Default style of designs.
