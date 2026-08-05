# amop

<a id="amop.AMop"></a>

## *class* amop.AMop

<a id="amop.AMop.__init__"></a>

#### \_\_init_\_(arg2: [AMopSettings](#amop.AMopSettings))

<a id="amop.AMop.adapt"></a>

#### adapt()

<a id="amop.AMop.appraise"></a>

#### appraise()

<a id="amop.AMop.finalize"></a>

#### finalize()

<a id="amop.AMop.get_criteria_success_info"></a>

#### get_criteria_success_info() → [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type)

<a id="amop.AMop.get_equalities"></a>

#### get_equalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="amop.AMop.get_inequalities"></a>

#### get_inequalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="amop.AMop.get_inputs"></a>

#### get_inputs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="amop.AMop.get_next_designs"></a>

#### get_next_designs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="amop.AMop.get_num_awaiting_designs"></a>

#### get_num_awaiting_designs() → int

<a id="amop.AMop.get_objectives"></a>

#### get_objectives() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="amop.AMop.get_responses"></a>

#### get_responses() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="amop.AMop.initialize"></a>

#### initialize(arg2: [AMopSettings](#amop.AMopSettings))

<a id="amop.AMop.is_converged"></a>

#### is_converged() → bool

<a id="amop.AMop.is_terminated"></a>

#### is_terminated() → bool

<a id="amop.AMop.set_criteria_success_info"></a>

#### set_criteria_success_info(arg2: [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type))

<a id="amop.AMop.set_equalities"></a>

#### set_equalities(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="amop.AMop.set_inequalities"></a>

#### set_inequalities(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="amop.AMop.set_inputs"></a>

#### set_inputs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="amop.AMop.set_objectives"></a>

#### set_objectives(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="amop.AMop.set_responses"></a>

#### set_responses(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="amop.AMop.set_start_designs"></a>

#### set_start_designs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

<a id="amop.AMop.set_terminated"></a>

#### set_terminated()

<a id="amop.AMopSettings"></a>

## *class* amop.AMopSettings

<a id="amop.AMopSettings.__init__"></a>

#### \_\_init_\_()

<a id="amop.AMopSettings.get_consider_failed_designs"></a>

#### get_consider_failed_designs() → bool

<a id="amop.AMopSettings.get_max_iteration"></a>

#### get_max_iteration() → int

<a id="amop.AMopSettings.get_min_cop"></a>

#### get_min_cop() → float

<a id="amop.AMopSettings.get_num_designs"></a>

#### get_num_designs() → int

<a id="amop.AMopSettings.get_num_designs_max"></a>

#### get_num_designs_max() → int

<a id="amop.AMopSettings.get_num_discretization_adapt"></a>

#### get_num_discretization_adapt() → int

Return AMOP discretization number for refinement settings

<a id="amop.AMopSettings.get_num_discretization_init"></a>

#### get_num_discretization_init() → int

Return AMOP discretization number for start iteration settings

<a id="amop.AMopSettings.get_num_equalities"></a>

#### get_num_equalities() → int

<a id="amop.AMopSettings.get_num_inequalities"></a>

#### get_num_inequalities() → int

<a id="amop.AMopSettings.get_num_inputs"></a>

#### get_num_inputs() → int

<a id="amop.AMopSettings.get_num_objectives"></a>

#### get_num_objectives() → int

<a id="amop.AMopSettings.get_num_responses"></a>

#### get_num_responses() → int

<a id="amop.AMopSettings.get_refinement_type"></a>

#### get_refinement_type() → [RefinementType](#amop.RefinementType)

<a id="amop.AMopSettings.get_sampling_type_adapt"></a>

#### get_sampling_type_adapt() → [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES)

<a id="amop.AMopSettings.get_sampling_type_init"></a>

#### get_sampling_type_init() → [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES)

<a id="amop.AMopSettings.get_stagnation_iterations"></a>

#### get_stagnation_iterations() → int

<a id="amop.AMopSettings.get_use_incomplete_designs"></a>

#### get_use_incomplete_designs() → bool

<a id="amop.AMopSettings.get_use_pareto_refinement"></a>

#### get_use_pareto_refinement() → bool

<a id="amop.AMopSettings.get_use_start_designs_only"></a>

#### get_use_start_designs_only() → bool

<a id="amop.AMopSettings.get_weight_criteria"></a>

#### get_weight_criteria() → float

<a id="amop.AMopSettings.get_weight_density"></a>

#### get_weight_density() → float

<a id="amop.AMopSettings.get_weight_localCoP"></a>

#### get_weight_localCoP() → float

<a id="amop.AMopSettings.set_consider_failed_designs"></a>

#### set_consider_failed_designs(arg2: bool)

<a id="amop.AMopSettings.set_defaults"></a>

#### set_defaults()

<a id="amop.AMopSettings.set_lower_bounds"></a>

#### set_lower_bounds(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))

<a id="amop.AMopSettings.set_max_iteration"></a>

#### set_max_iteration(arg2: int)

<a id="amop.AMopSettings.set_min_cop"></a>

#### set_min_cop(arg2: float)

<a id="amop.AMopSettings.set_num_designs_max"></a>

#### set_num_designs_max(arg2: int)

<a id="amop.AMopSettings.set_num_discretization_adapt"></a>

#### set_num_discretization_adapt(num_discretization: int)

Set AMOP discretization number for refinement

<a id="amop.AMopSettings.set_num_discretization_init"></a>

#### set_num_discretization_init(num_discretization: int)

Set AMOP discretization number for start iteration

<a id="amop.AMopSettings.set_num_equalities"></a>

#### set_num_equalities(arg2: int)

<a id="amop.AMopSettings.set_num_inequalities"></a>

#### set_num_inequalities(arg2: int)

<a id="amop.AMopSettings.set_num_inputs"></a>

#### set_num_inputs(arg2: int)

<a id="amop.AMopSettings.set_num_objectives"></a>

#### set_num_objectives(arg2: int)

<a id="amop.AMopSettings.set_num_responses"></a>

#### set_num_responses(arg2: int)

<a id="amop.AMopSettings.set_refinement_type"></a>

#### set_refinement_type(arg2: [RefinementType](#amop.RefinementType))

<a id="amop.AMopSettings.set_sampling_type_adapt"></a>

#### set_sampling_type_adapt(arg2: [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES))

<a id="amop.AMopSettings.set_sampling_type_init"></a>

#### set_sampling_type_init(arg2: [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES))

<a id="amop.AMopSettings.set_stagnation_iterations"></a>

#### set_stagnation_iterations(arg2: int)

<a id="amop.AMopSettings.set_upper_bounds"></a>

#### set_upper_bounds(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))

<a id="amop.AMopSettings.set_use_incomplete_designs"></a>

#### set_use_incomplete_designs(arg2: bool)

<a id="amop.AMopSettings.set_use_pareto_refinement"></a>

#### set_use_pareto_refinement(arg2: bool)

<a id="amop.AMopSettings.set_use_start_designs_only"></a>

#### set_use_start_designs_only(arg2: bool)

<a id="amop.AMopSettings.set_weight_criteria"></a>

#### set_weight_criteria(arg2: float)

<a id="amop.AMopSettings.set_weight_density"></a>

#### set_weight_density(arg2: float)

<a id="amop.AMopSettings.set_weight_localCoP"></a>

#### set_weight_localCoP(arg2: float)

<a id="amop.RefinementType"></a>

## *class* amop.RefinementType

**Enumeration**

<a id="amop.RefinementType.CRITERIA_REFINEMENT"></a>

#### CRITERIA_REFINEMENT *= amop.RefinementType.CRITERIA_REFINEMENT*

<a id="amop.RefinementType.GLOBAL_REFINEMENT"></a>

#### GLOBAL_REFINEMENT *= amop.RefinementType.GLOBAL_REFINEMENT*

<a id="amop.RefinementType.LOCAL_REFINEMENT"></a>

#### LOCAL_REFINEMENT *= amop.RefinementType.LOCAL_REFINEMENT*
