# py_algorithm_info

<a id="py_algorithm_info.AlgorithmInfo"></a>

## *class* py_algorithm_info.AlgorithmInfo

<a id="py_algorithm_info.AlgorithmInfo.__init__"></a>

#### \_\_init_\_(arg2: [SupportedAlgorithms](dynardo_py_algorithms.md#dynardo_py_algorithms.SupportedAlgorithms))

<a id="py_algorithm_info.AlgorithmInfo.add_signal_info"></a>

#### add_signal_info(signal: str name, abscissa: list)

Add new signal info by name and abscissa values. Skip if signal info is already present.

<a id="py_algorithm_info.AlgorithmInfo.add_signal_info_y_data"></a>

#### add_signal_info_y_data(signal: str name, channel: str name, data: str name, data: str part name, channel: list values)

Add new channel values to an existing signal info.

<a id="py_algorithm_info.AlgorithmInfo.clear_signal_info"></a>

#### clear_signal_info()

Clear all existing signal information.

<a id="py_algorithm_info.AlgorithmInfo.get_mop3_info"></a>

#### get_mop3_info() → [MOP3Info](#py_algorithm_info.MOP3Info)

Returns detailed MOP3 info if present.

<a id="py_algorithm_info.AlgorithmInfo.get_mop_info"></a>

#### get_mop_info() → [MOPInfo](#py_algorithm_info.MOPInfo)

Returns detailed MOP info if present.

<a id="py_algorithm_info.AlgorithmInfo.get_seed_value"></a>

#### get_seed_value() → int

Returns the given seed value for the processed algorithm.

<a id="py_algorithm_info.AlgorithmInfo.get_signal_info_channel_names"></a>

#### get_signal_info_channel_names(signal: str name) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get a list of channel names for given signal info name

<a id="py_algorithm_info.AlgorithmInfo.get_signal_info_data_names"></a>

#### get_signal_info_data_names(signal: str name, channel: str name) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get a list of data names for given signal info name and channel name

<a id="py_algorithm_info.AlgorithmInfo.get_signal_info_signal_names"></a>

#### get_signal_info_signal_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get a list of signal info names

<a id="py_algorithm_info.AlgorithmInfo.get_type"></a>

#### get_type() → [SupportedAlgorithms](dynardo_py_algorithms.md#dynardo_py_algorithms.SupportedAlgorithms)

Returns the algorithm type.

<a id="py_algorithm_info.AlgorithmInfo.has_best_design_infos"></a>

#### has_best_design_infos() → bool

Returns whether the detailed info has iteration best design infos.

<a id="py_algorithm_info.AlgorithmInfo.is_adaptive_mop_info"></a>

#### is_adaptive_mop_info() → bool

Returns whether the detailed info is of type AdaptiveMOP info.

<a id="py_algorithm_info.AlgorithmInfo.is_deterministic_sampling"></a>

#### is_deterministic_sampling() → bool

Returns whether the deterministic parameters were varied in this algorithm.

<a id="py_algorithm_info.AlgorithmInfo.is_mop3_info"></a>

#### is_mop3_info() → bool

Returns whether the detailed info is of type MOP3 info.

<a id="py_algorithm_info.AlgorithmInfo.is_mop_info"></a>

#### is_mop_info() → bool

Returns whether the detailed info is of type MOP info.

<a id="py_algorithm_info.AlgorithmInfo.is_optimization_info"></a>

#### is_optimization_info() → bool

Returns whether the detailed info is of type Optimization info.

<a id="py_algorithm_info.AlgorithmInfo.is_reliability_info"></a>

#### is_reliability_info() → bool

Returns whether the detailed info is of type Reliability info.

<a id="py_algorithm_info.AlgorithmInfo.is_robustness_info"></a>

#### is_robustness_info() → bool

Returns whether the detailed info is of type Robustness info.

<a id="py_algorithm_info.AlgorithmInfo.is_sensitivity_info"></a>

#### is_sensitivity_info() → bool

Returns whether the detailed info is of type Sensitivity info.

<a id="py_algorithm_info.AlgorithmInfo.is_stochastic_sampling"></a>

#### is_stochastic_sampling() → bool

Returns whether the stochastic parameters were varied in this algorithm.

<a id="py_algorithm_info.DetailedAlgorithmInfo"></a>

## *class* py_algorithm_info.DetailedAlgorithmInfo

<a id="py_algorithm_info.DetailedAlgorithmInfo.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_algorithm_info.MOP3Info"></a>

## *class* py_algorithm_info.MOP3Info

<a id="py_algorithm_info.MOP3Info.__init__"></a>

#### \_\_init_\_()

<a id="py_algorithm_info.MOP3Info.mop3_configuration"></a>

#### *property* mop3_configuration

Configuration file (string) for MOP3.

<a id="py_algorithm_info.MOP3Info.mop3_design_ids"></a>

#### *property* mop3_design_ids

Design IDs (string list/id vector) for MOP3.

<a id="py_algorithm_info.MOP3Info.mop3_parameter_manager"></a>

#### *property* mop3_parameter_manager

Parameter Manager (parameter_manager) for MOP3.

<a id="py_algorithm_info.MOP3Info.mop3_responses"></a>

#### *property* mop3_responses

Response Matrix (tmath::Matrix/Eigen::Matrix) for MOP3.

<a id="py_algorithm_info.MOP3Info.mop3_sdb"></a>

#### *property* mop3_sdb

Sdb file (string) for MOP3.

<a id="py_algorithm_info.MOP3Info.mop3_support_points"></a>

#### *property* mop3_support_points

Support Point Matrix (tmath::Matrix/Eigen::Matrix) for MOP3.

<a id="py_algorithm_info.MOPInfo"></a>

## *class* py_algorithm_info.MOPInfo

<a id="py_algorithm_info.MOPInfo.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_algorithm_info.MOPInfo.has_cv_values"></a>

#### has_cv_values() → bool

Returns whether cross validation values are present.

<a id="py_algorithm_info.PyAlgorithmInfo"></a>

## py_algorithm_info.PyAlgorithmInfo

alias of [`AlgorithmInfo`](#py_algorithm_info.AlgorithmInfo)

<a id="py_algorithm_info.PyDetailedAlgorithmInfo"></a>

## py_algorithm_info.PyDetailedAlgorithmInfo

alias of [`DetailedAlgorithmInfo`](#py_algorithm_info.DetailedAlgorithmInfo)

<a id="py_algorithm_info.PyMOPInfo"></a>

## py_algorithm_info.PyMOPInfo

alias of [`MOPInfo`](#py_algorithm_info.MOPInfo)
