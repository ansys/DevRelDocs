

### *class* PyOptimizerBase.OptimizerBase


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### adapt()


#### appraise()


#### finalize()


#### get_awaiting_designs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_best_design_numbers() → object


#### get_best_equalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_best_inequalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_best_inputs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_best_objectives() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_criteria_success_info() → [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type)


#### get_equalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_inequalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_inputs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_next_designs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_num_awaiting_designs() → int


#### get_objectives() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### initialize(arg2: [SettingsBase](#PyOptimizerBase.SettingsBase))


#### is_converged() → bool


#### is_terminated() → bool


#### set_criteria_success_info(arg2: [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type))


#### set_equalities(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_inequalities(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_inputs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_objectives(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_terminated()


### *class* PyOptimizerBase.SettingsBase


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### get_num_equalities() → int


#### get_num_inequalities() → int


#### get_num_inputs() → int


#### get_num_objectives() → int


#### set_defaults()


#### set_lower_bounds(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))


#### set_num_inequalities(arg2: int)


#### set_num_inputs(arg2: int)


#### set_num_objectives(arg2: int)


#### set_start_designs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_upper_bounds(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))
