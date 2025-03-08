

### *class* py_random_variables.FitRV


#### \_\_init_\_()

#### \_\_init_\_(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

#### \_\_init_\_(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))

#### \_\_init_\_(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type), arg3: str)


#### get_cdf(arg2: float) → float


#### get_cdf_inv(arg2: float) → float


#### get_mean() → float


#### get_moments(arg2: int) → float


#### get_name() → str


#### get_num_moments() → int


#### get_num_parameters() → int


#### get_parameter(arg2: int) → float


#### get_pdf(arg2: float) → float


#### get_stddev() → float


#### is_valid() → bool


#### set_moments(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))


#### set_parameters(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))


### *class* py_random_variables.RVSet


#### \_\_init_\_(parameter: PyParameterManager manager, design: PyOSDesignPoint point to extract from) → object

Extract mixed and stochastic parameters from a design point and convert them into an RVSet.


### *class* py_random_variables.RVSet_Independent


#### \_\_init_\_()


### *class* py_random_variables.RVSet_Nataf


#### \_\_init_\_()
