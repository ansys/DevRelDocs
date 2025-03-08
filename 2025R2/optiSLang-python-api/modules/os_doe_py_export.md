

### *class* os_doe_py_export.DOE


#### \_\_init_\_(arg2: int, arg3: int)


#### append(arg2: [DOE](#os_doe_py_export.DOE))


#### build(arg2: [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES), arg3: int, arg4: bool)


#### get_center() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)


#### get_designs() → [doubleVecVec](stdcpp_python_export.md#stdcpp_python_export.doubleVecVec)


#### get_lower_bounds() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)


#### get_matrix() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_upper_bounds() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)


#### move(arg2: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))


#### scale(arg2: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))


#### sort()


#### unique()


### *class* os_doe_py_export.OSDOE


#### \_\_init_\_()

#### \_\_init_\_(arg2: int)


#### build_robustness(Parameters: PyParameterManager to be used, Reference: PyOSDesignPoint/Nominal design point, DOE: DOETYPES method, Number: int of discretization)

Builds designs on unit hypercube at the design point given and transforms them to desired domain space.


#### build_sensitivity(Parameters: PyParameterManager to be used, DOE: DOETYPES method, Number: int of discretization)

Builds designs on unit hypercube and transforms them to the desired domain space.


#### get_design(arg2: int) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)


#### get_designs() → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)


#### get_lower_bounds() → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)


#### get_num_designs() → int


#### get_upper_bounds() → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)


#### set_seed(arg2: int) → int


#### size() → int


#### sort() → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)


#### unique() → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)
