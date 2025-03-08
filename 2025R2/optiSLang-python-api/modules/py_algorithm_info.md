

### *class* py_algorithm_info.AlgorithmInfo


#### \_\_init_\_(arg2: [SupportedAlgorithms](dynardo_py_algorithms.md#dynardo_py_algorithms.SupportedAlgorithms))


#### add_signal_info(signal: str name, abscissa: list)

Add new signal info by name and abscissa values. Skip if signal info is already present.


#### add_signal_info_y_data(signal: str name, channel: str name, data: str name, data: str part name, channel: list values)

Add new channel values to an existing signal info.


#### clear_signal_info()

Clear all existing signal information.


#### get_mop3_info() → [MOP3Info](#py_algorithm_info.MOP3Info)

Returns detailed MOP3 info if present.


#### get_mop_info() → [MOPInfo](#py_algorithm_info.MOPInfo)

Returns detailed MOP info if present.


#### get_seed_value() → int

Returns the given seed value for the processed algorithm.


#### get_signal_info_channel_names(signal: str name) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get a list of channel names for given signal info name


#### get_signal_info_data_names(signal: str name, channel: str name) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get a list of data names for given signal info name and channel name


#### get_signal_info_signal_names() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get a list of signal info names


#### get_type() → [SupportedAlgorithms](dynardo_py_algorithms.md#dynardo_py_algorithms.SupportedAlgorithms)

Returns the algorithm type.


#### has_best_design_infos() → bool

Returns whether the detailed info has iteration best design infos.


#### is_adaptive_mop_info() → bool

Returns whether the detailed info is of type AdaptiveMOP info.


#### is_deterministic_sampling() → bool

Returns whether the deterministic parameters were varied in this algorithm.


#### is_mop3_info() → bool

Returns whether the detailed info is of type MOP3 info.


#### is_mop_info() → bool

Returns whether the detailed info is of type MOP info.


#### is_optimization_info() → bool

Returns whether the detailed info is of type Optimization info.


#### is_reliability_info() → bool

Returns whether the detailed info is of type Reliability info.


#### is_robustness_info() → bool

Returns whether the detailed info is of type Robustness info.


#### is_sensitivity_info() → bool

Returns whether the detailed info is of type Sensitivity info.


#### is_stochastic_sampling() → bool

Returns whether the stochastic parameters were varied in this algorithm.


### *class* py_algorithm_info.DetailedAlgorithmInfo


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


### *class* py_algorithm_info.MOP3Info


#### \_\_init_\_()


#### *property* mop3_configuration

Configuration file (string) for MOP3.


#### *property* mop3_design_ids

Design IDs (string list/id vector) for MOP3.


#### *property* mop3_parameter_manager

Parameter Manager (parameter_manager) for MOP3.


#### *property* mop3_responses

Response Matrix (tmath::Matrix/Eigen::Matrix) for MOP3.


#### *property* mop3_sdb

Sdb file (string) for MOP3.


#### *property* mop3_support_points

Support Point Matrix (tmath::Matrix/Eigen::Matrix) for MOP3.


### *class* py_algorithm_info.MOPInfo


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### has_cv_values() → bool

Returns whether cross validation values are present.


### py_algorithm_info.PyAlgorithmInfo

alias of [`AlgorithmInfo`](#py_algorithm_info.AlgorithmInfo)


### py_algorithm_info.PyDetailedAlgorithmInfo

alias of [`DetailedAlgorithmInfo`](#py_algorithm_info.DetailedAlgorithmInfo)


### py_algorithm_info.PyMOPInfo

alias of [`MOPInfo`](#py_algorithm_info.MOPInfo)
