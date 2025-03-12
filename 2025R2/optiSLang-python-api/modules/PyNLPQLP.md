

### *class* PyNLPQLP.DiffType

**Enumeration**


#### BACKWARD *= PyNLPQLP.DiffType.BACKWARD*


#### CENTRAL *= PyNLPQLP.DiffType.CENTRAL*


#### FORWARD *= PyNLPQLP.DiffType.FORWARD*


#### FOURTH_ORDER *= PyNLPQLP.DiffType.FOURTH_ORDER*


### *class* PyNLPQLP.NLPQLP


#### \_\_init_\_()

#### \_\_init_\_(arg2: [SettingsNLPQLP](#PyNLPQLP.SettingsNLPQLP))


### *class* PyNLPQLP.SettingsNLPQLP


#### \_\_init_\_()


#### get_accuracy() → float

Get tolerance by which optimality conditions are met.


#### get_gradient_dx() → [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type)

Get differentiation step size.


#### get_line_search_stack_size() → int

Get value of nonmonotonous line search stack size.


#### get_max_num_function_calls() → int

Get the maximum allowed number of function calls.


#### get_max_step_size() → int


#### get_number_of_parallel_line_searches() → int

Get number of line searches running parallel.


#### get_numerical_differences() → [DiffType](#PyNLPQLP.DiffType)

Get value used for the differentiaion scheme.


#### *property* min_line_search_stepsize

Default 0 means auto detection of step size.


#### set_accuracy(arg2: float)

Set tolerance by which optimality conditions are met.


#### set_gradient_dx(arg2: float)

#### set_gradient_dx(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))

[0] Set differentiation step size.

[1] Set differentiation step size.


#### set_line_search_stack_size(arg2: int)

Set value of nonmonotonous line search stack size.


#### set_max_num_function_calls(arg2: int)

Set the maximum allowed number of function calls.


#### set_max_step_size(arg2: float)

#### set_max_step_size(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))


#### set_number_of_parallel_line_searches(arg2: int)

Set number of line searches running parallel.


#### set_numerical_differences(arg2: [DiffType](#PyNLPQLP.DiffType))

Set value used for the differentiaion scheme.


#### *property* use_initial_stepsize_limit

Initial stepsize limit.
