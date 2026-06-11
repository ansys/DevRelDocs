# os_doe_py_export

<a id="os_doe_py_export.DOE"></a>

## *class* os_doe_py_export.DOE

<a id="os_doe_py_export.DOE.__init__"></a>

#### \_\_init_\_(arg2: int, arg3: int)

<a id="os_doe_py_export.DOE.append"></a>

#### append(arg2: [DOE](#os_doe_py_export.DOE))

<a id="os_doe_py_export.DOE.build"></a>

#### build(arg2: [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES), arg3: int, arg4: bool)

<a id="os_doe_py_export.DOE.get_center"></a>

#### get_center() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)

<a id="os_doe_py_export.DOE.get_designs"></a>

#### get_designs() → [doubleVecVec](stdcpp_python_export.md#stdcpp_python_export.doubleVecVec)

<a id="os_doe_py_export.DOE.get_lower_bounds"></a>

#### get_lower_bounds() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)

<a id="os_doe_py_export.DOE.get_matrix"></a>

#### get_matrix() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="os_doe_py_export.DOE.get_upper_bounds"></a>

#### get_upper_bounds() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)

<a id="os_doe_py_export.DOE.move"></a>

#### move(arg2: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))

<a id="os_doe_py_export.DOE.scale"></a>

#### scale(arg2: [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec))

<a id="os_doe_py_export.DOE.sort"></a>

#### sort()

<a id="os_doe_py_export.DOE.unique"></a>

#### unique()

<a id="os_doe_py_export.OSDOE"></a>

## *class* os_doe_py_export.OSDOE

<a id="os_doe_py_export.OSDOE.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: int)

<a id="os_doe_py_export.OSDOE.build_robustness"></a>

#### build_robustness(Parameters: PyParameterManager to be used, Reference: PyOSDesignPoint/Nominal design point, DOE: DOETYPES method, Number: int of discretization)

Builds designs on unit hypercube at the design point given and transforms them to desired domain space.

<a id="os_doe_py_export.OSDOE.build_sensitivity"></a>

#### build_sensitivity(Parameters: PyParameterManager to be used, DOE: DOETYPES method, Number: int of discretization)

Builds designs on unit hypercube and transforms them to the desired domain space.

<a id="os_doe_py_export.OSDOE.get_design"></a>

#### get_design(arg2: int) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)

<a id="os_doe_py_export.OSDOE.get_designs"></a>

#### get_designs() → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)

<a id="os_doe_py_export.OSDOE.get_lower_bounds"></a>

#### get_lower_bounds() → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)

<a id="os_doe_py_export.OSDOE.get_num_designs"></a>

#### get_num_designs() → int

<a id="os_doe_py_export.OSDOE.get_upper_bounds"></a>

#### get_upper_bounds() → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)

<a id="os_doe_py_export.OSDOE.set_seed"></a>

#### set_seed(arg2: int) → int

<a id="os_doe_py_export.OSDOE.size"></a>

#### size() → int

<a id="os_doe_py_export.OSDOE.sort"></a>

#### sort() → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)

<a id="os_doe_py_export.OSDOE.unique"></a>

#### unique() → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)
