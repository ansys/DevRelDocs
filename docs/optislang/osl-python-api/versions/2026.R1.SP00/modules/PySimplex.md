# PySimplex

<a id="PySimplex.OptimizerSettingsSimplex"></a>

## *class* PySimplex.OptimizerSettingsSimplex

<a id="PySimplex.OptimizerSettingsSimplex.__init__"></a>

#### \_\_init_\_()

<a id="PySimplex.OptimizerSettingsSimplex.get_max_iteration"></a>

#### get_max_iteration() → int

Get number of maximum iterations.

<a id="PySimplex.OptimizerSettingsSimplex.get_min_iteration_test"></a>

#### get_min_iteration_test() → int

Get number of minimum iterations before test.

<a id="PySimplex.OptimizerSettingsSimplex.get_min_objective_diff"></a>

#### get_min_objective_diff() → float

Get tolerance for objective test.

<a id="PySimplex.OptimizerSettingsSimplex.get_min_parameter_diff"></a>

#### get_min_parameter_diff() → float

Get tolerance for parameter test: convergence test.

<a id="PySimplex.OptimizerSettingsSimplex.get_start_range"></a>

#### get_start_range() → float

Get start range for Simplex.

<a id="PySimplex.OptimizerSettingsSimplex.set_max_iteration"></a>

#### set_max_iteration(arg2: int)

Set number of maximum iterations.

<a id="PySimplex.OptimizerSettingsSimplex.set_min_iteration_test"></a>

#### set_min_iteration_test(arg2: int)

Set number of minimum iterations before test.

<a id="PySimplex.OptimizerSettingsSimplex.set_min_objective_diff"></a>

#### set_min_objective_diff(arg2: float)

Set tolerance for objective test.

<a id="PySimplex.OptimizerSettingsSimplex.set_min_parameter_diff"></a>

#### set_min_parameter_diff(arg2: float)

Set tolerance for parameter test: convergence test.

<a id="PySimplex.OptimizerSettingsSimplex.set_start_range"></a>

#### set_start_range(arg2: float)

Set start range for Simplex.

<a id="PySimplex.Simplex"></a>

## *class* PySimplex.Simplex

<a id="PySimplex.Simplex.__init__"></a>

#### \_\_init_\_(arg2: [PyOptimizerBase.SettingsBase](PyOptimizerBase.md#PyOptimizerBase.SettingsBase))

<a id="PySimplex.Simplex.get_best_design_history"></a>

#### get_best_design_history() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PySimplex.Simplex.get_iteration_history"></a>

#### get_iteration_history() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="PySimplex.Simplex.get_iteration_number"></a>

#### get_iteration_number() → int
