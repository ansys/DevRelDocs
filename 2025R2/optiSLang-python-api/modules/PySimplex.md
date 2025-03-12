

### *class* PySimplex.OptimizerSettingsSimplex


#### \_\_init_\_()


#### get_max_iteration() → int

Get number of maximum iterations.


#### get_min_iteration_test() → int

Get number of minimum iterations before test.


#### get_min_objective_diff() → float

Get tolerance for objective test.


#### get_min_parameter_diff() → float

Get tolerance for parameter test: convergence test.


#### get_start_range() → float

Get start range for Simplex.


#### set_max_iteration(arg2: int)

Set number of maximum iterations.


#### set_min_iteration_test(arg2: int)

Set number of minimum iterations before test.


#### set_min_objective_diff(arg2: float)

Set tolerance for objective test.


#### set_min_parameter_diff(arg2: float)

Set tolerance for parameter test: convergence test.


#### set_start_range(arg2: float)

Set start range for Simplex.


### *class* PySimplex.Simplex


#### \_\_init_\_(arg2: [PyOptimizerBase.SettingsBase](PyOptimizerBase.md#PyOptimizerBase.SettingsBase))


#### get_best_design_history() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_iteration_history() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_iteration_number() → int
