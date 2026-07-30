# PyNLPQLP

<a id="PyNLPQLP.DiffType"></a>

## *class* PyNLPQLP.DiffType

**Enumeration**

- <a id="PyNLPQLP.DiffType.BACKWARD"></a>`BACKWARD *= PyNLPQLP.DiffType.BACKWARD*`
- <a id="PyNLPQLP.DiffType.CENTRAL"></a>`CENTRAL *= PyNLPQLP.DiffType.CENTRAL*`
- <a id="PyNLPQLP.DiffType.FORWARD"></a>`FORWARD *= PyNLPQLP.DiffType.FORWARD*`
- <a id="PyNLPQLP.DiffType.FOURTH_ORDER"></a>`FOURTH_ORDER *= PyNLPQLP.DiffType.FOURTH_ORDER*`

<a id="PyNLPQLP.NLPQLP"></a>

## *class* PyNLPQLP.NLPQLP

- <a id="PyNLPQLP.NLPQLP.__init__"></a>`__init__()`
- `__init__(arg2: [SettingsNLPQLP](#PyNLPQLP.SettingsNLPQLP))`

<a id="PyNLPQLP.SettingsNLPQLP"></a>

## *class* PyNLPQLP.SettingsNLPQLP

- <a id="PyNLPQLP.SettingsNLPQLP.__init__"></a>`__init__()`
- <a id="PyNLPQLP.SettingsNLPQLP.get_accuracy"></a>`get_accuracy() → float`<br>
  Get tolerance by which optimality conditions are met.
- <a id="PyNLPQLP.SettingsNLPQLP.get_gradient_dx"></a>`get_gradient_dx() → [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type)`<br>
  Get differentiation step size.
- <a id="PyNLPQLP.SettingsNLPQLP.get_line_search_stack_size"></a>`get_line_search_stack_size() → int`<br>
  Get value of nonmonotonous line search stack size.
- <a id="PyNLPQLP.SettingsNLPQLP.get_max_num_function_calls"></a>`get_max_num_function_calls() → int`<br>
  Get the maximum allowed number of function calls.
- <a id="PyNLPQLP.SettingsNLPQLP.get_max_step_size"></a>`get_max_step_size() → int`
- <a id="PyNLPQLP.SettingsNLPQLP.get_number_of_parallel_line_searches"></a>`get_number_of_parallel_line_searches() → int`<br>
  Get number of line searches running parallel.
- <a id="PyNLPQLP.SettingsNLPQLP.get_numerical_differences"></a>`get_numerical_differences() → [DiffType](#PyNLPQLP.DiffType)`<br>
  Get value used for the differentiaion scheme.
- <a id="PyNLPQLP.SettingsNLPQLP.min_line_search_stepsize"></a>*property* `min_line_search_stepsize`<br>
  Default 0 means auto detection of step size.
- <a id="PyNLPQLP.SettingsNLPQLP.set_accuracy"></a>`set_accuracy(arg2: float)`<br>
  Set tolerance by which optimality conditions are met.
- <a id="PyNLPQLP.SettingsNLPQLP.set_gradient_dx"></a>`set_gradient_dx(arg2: float)`<br>
  [0] Set differentiation step size. [1] Set differentiation step size.
- `set_gradient_dx(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))`
- <a id="PyNLPQLP.SettingsNLPQLP.set_line_search_stack_size"></a>`set_line_search_stack_size(arg2: int)`<br>
  Set value of nonmonotonous line search stack size.
- <a id="PyNLPQLP.SettingsNLPQLP.set_max_num_function_calls"></a>`set_max_num_function_calls(arg2: int)`<br>
  Set the maximum allowed number of function calls.
- <a id="PyNLPQLP.SettingsNLPQLP.set_max_step_size"></a>`set_max_step_size(arg2: float)`
- `set_max_step_size(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))`
- <a id="PyNLPQLP.SettingsNLPQLP.set_number_of_parallel_line_searches"></a>`set_number_of_parallel_line_searches(arg2: int)`<br>
  Set number of line searches running parallel.
- <a id="PyNLPQLP.SettingsNLPQLP.set_numerical_differences"></a>`set_numerical_differences(arg2: [DiffType](#PyNLPQLP.DiffType))`<br>
  Set value used for the differentiaion scheme.
- <a id="PyNLPQLP.SettingsNLPQLP.use_initial_stepsize_limit"></a>*property* `use_initial_stepsize_limit`<br>
  Initial stepsize limit.
