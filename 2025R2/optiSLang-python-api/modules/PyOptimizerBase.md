# PyOptimizerBase

<a id="PyOptimizerBase.OptimizerBase"></a>

## *class* PyOptimizerBase.OptimizerBase

<a id="PyOptimizerBase.OptimizerBase.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="PyOptimizerBase.OptimizerBase.adapt"></a>

#### adapt()

<a id="PyOptimizerBase.OptimizerBase.appraise"></a>

#### appraise()

<a id="PyOptimizerBase.OptimizerBase.finalize"></a>

#### finalize()

<a id="PyOptimizerBase.OptimizerBase.get_awaiting_designs"></a>

#### get_awaiting_designs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.get_best_design_numbers"></a>

#### get_best_design_numbers() → object

<a id="PyOptimizerBase.OptimizerBase.get_best_equalities"></a>

#### get_best_equalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.get_best_inequalities"></a>

#### get_best_inequalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.get_best_inputs"></a>

#### get_best_inputs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.get_best_objectives"></a>

#### get_best_objectives() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.get_criteria_success_info"></a>

#### get_criteria_success_info() → [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type)

<a id="PyOptimizerBase.OptimizerBase.get_equalities"></a>

#### get_equalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.get_inequalities"></a>

#### get_inequalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.get_inputs"></a>

#### get_inputs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.get_next_designs"></a>

#### get_next_designs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.get_num_awaiting_designs"></a>

#### get_num_awaiting_designs() → int

<a id="PyOptimizerBase.OptimizerBase.get_objectives"></a>

#### get_objectives() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PyOptimizerBase.OptimizerBase.initialize"></a>

#### initialize(arg2: [SettingsBase](#PyOptimizerBase.SettingsBase))

<a id="PyOptimizerBase.OptimizerBase.is_converged"></a>

#### is_converged() → bool

<a id="PyOptimizerBase.OptimizerBase.is_terminated"></a>

#### is_terminated() → bool

<a id="PyOptimizerBase.OptimizerBase.set_criteria_success_info"></a>

#### set_criteria_success_info(arg2: [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type))

<a id="PyOptimizerBase.OptimizerBase.set_equalities"></a>

#### set_equalities(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="PyOptimizerBase.OptimizerBase.set_inequalities"></a>

#### set_inequalities(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="PyOptimizerBase.OptimizerBase.set_inputs"></a>

#### set_inputs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="PyOptimizerBase.OptimizerBase.set_objectives"></a>

#### set_objectives(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="PyOptimizerBase.OptimizerBase.set_terminated"></a>

#### set_terminated()

<a id="PyOptimizerBase.SettingsBase"></a>

## *class* PyOptimizerBase.SettingsBase

<a id="PyOptimizerBase.SettingsBase.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="PyOptimizerBase.SettingsBase.get_num_equalities"></a>

#### get_num_equalities() → int

<a id="PyOptimizerBase.SettingsBase.get_num_inequalities"></a>

#### get_num_inequalities() → int

<a id="PyOptimizerBase.SettingsBase.get_num_inputs"></a>

#### get_num_inputs() → int

<a id="PyOptimizerBase.SettingsBase.get_num_objectives"></a>

#### get_num_objectives() → int

<a id="PyOptimizerBase.SettingsBase.set_defaults"></a>

#### set_defaults()

<a id="PyOptimizerBase.SettingsBase.set_lower_bounds"></a>

#### set_lower_bounds(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))

<a id="PyOptimizerBase.SettingsBase.set_num_inequalities"></a>

#### set_num_inequalities(arg2: int)

<a id="PyOptimizerBase.SettingsBase.set_num_inputs"></a>

#### set_num_inputs(arg2: int)

<a id="PyOptimizerBase.SettingsBase.set_num_objectives"></a>

#### set_num_objectives(arg2: int)

<a id="PyOptimizerBase.SettingsBase.set_start_designs"></a>

#### set_start_designs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="PyOptimizerBase.SettingsBase.set_upper_bounds"></a>

#### set_upper_bounds(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))
