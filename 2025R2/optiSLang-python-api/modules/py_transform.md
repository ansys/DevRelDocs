# py_transform

<a id="py_transform.DesignToVector"></a>

## py_transform.DesignToVector(arg1: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint), arg2: [DPropList](py_os_parameter.md#py_os_parameter.DPropList), arg3: bool) → [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type)

<a id="py_transform.DesigncontainerToMatrix"></a>

## py_transform.DesigncontainerToMatrix(arg1: [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer), arg2: [DPropList](py_os_parameter.md#py_os_parameter.DPropList), arg3: bool) → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="py_transform.MatrixToDesigncontainer"></a>

## py_transform.MatrixToDesigncontainer(arg1: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type), arg2: [DPropList](py_os_parameter.md#py_os_parameter.DPropList), arg3: bool) → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)

<a id="py_transform.TransformationFlags"></a>

## *class* py_transform.TransformationFlags

**Enumeration**

<a id="py_transform.TransformationFlags.AllProps"></a>

#### AllProps *= py_transform.TransformationFlags.AllProps*

<a id="py_transform.TransformationFlags.DetProps"></a>

#### DetProps *= py_transform.TransformationFlags.DetProps*

<a id="py_transform.TransformationFlags.NoTransformation"></a>

#### NoTransformation *= py_transform.TransformationFlags.NoTransformation*

<a id="py_transform.TransformationFlags.RanProps"></a>

#### RanProps *= py_transform.TransformationFlags.RanProps*

<a id="py_transform.VectorToDesign"></a>

## py_transform.VectorToDesign(arg1: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type), arg2: [DPropList](py_os_parameter.md#py_os_parameter.DPropList), arg3: bool) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)

<a id="py_transform.design_point_to_rv_set"></a>

## py_transform.design_point_to_rv_set(arg1: [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager), arg2: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)) → [RVSet](py_random_variables.md#py_random_variables.RVSet)

<a id="py_transform.design_to_standard_gauss"></a>

## py_transform.design_to_standard_gauss(arg1: [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer), arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet)) → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="py_transform.design_to_unit_cube"></a>

## py_transform.design_to_unit_cube(arg1: [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer), arg2: [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager), arg3: [TransformationFlags](#py_transform.TransformationFlags), arg4: [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList), arg5: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)) → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

## py_transform.design_to_unit_cube(arg1: [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer), arg2: [DPropList](py_os_parameter.md#py_os_parameter.DPropList)) → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

## py_transform.design_to_unit_cube(arg1: [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer), arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet)) → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="py_transform.standard_gauss_to_design"></a>

## py_transform.standard_gauss_to_design(arg1: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type), arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet)) → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)

<a id="py_transform.unit_cube_to_design"></a>

## py_transform.unit_cube_to_design(arg1: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type), arg2: [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager), arg3: [TransformationFlags](#py_transform.TransformationFlags), arg4: [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList), arg5: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)) → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)

## py_transform.unit_cube_to_design(arg1: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type), arg2: [DPropList](py_os_parameter.md#py_os_parameter.DPropList)) → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)

## py_transform.unit_cube_to_design(arg1: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type), arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet)) → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)
