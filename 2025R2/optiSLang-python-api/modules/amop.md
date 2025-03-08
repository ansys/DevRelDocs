

### *class* amop.AMop


#### \_\_init_\_(arg2: [AMopSettings](#amop.AMopSettings))


#### adapt()


#### appraise()


#### finalize()


#### get_criteria_success_info() → [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type)


#### get_equalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_inequalities() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_inputs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_next_designs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_num_awaiting_designs() → int


#### get_objectives() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_responses() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### initialize(arg2: [AMopSettings](#amop.AMopSettings))


#### is_converged() → bool


#### is_terminated() → bool


#### set_criteria_success_info(arg2: [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type))


#### set_equalities(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_inequalities(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_inputs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_objectives(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_responses(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_start_designs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))


#### set_terminated()


### *class* amop.AMopSettings


#### \_\_init_\_()


#### get_consider_failed_designs() → bool


#### get_max_iteration() → int


#### get_min_cop() → float


#### get_num_designs() → int


#### get_num_designs_max() → int


#### get_num_discretization_adapt() → int

Return AMOP discretization number for refinement settings


#### get_num_discretization_init() → int

Return AMOP discretization number for start iteration settings


#### get_num_equalities() → int


#### get_num_inequalities() → int


#### get_num_inputs() → int


#### get_num_objectives() → int


#### get_num_responses() → int


#### get_refinement_type() → [RefinementType](#amop.RefinementType)


#### get_sampling_type_adapt() → [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES)


#### get_sampling_type_init() → [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES)


#### get_stagnation_iterations() → int


#### get_use_incomplete_designs() → bool


#### get_use_pareto_refinement() → bool


#### get_use_start_designs_only() → bool


#### get_weight_criteria() → float


#### get_weight_density() → float


#### get_weight_localCoP() → float


#### set_consider_failed_designs(arg2: bool)


#### set_defaults()


#### set_lower_bounds(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))


#### set_max_iteration(arg2: int)


#### set_min_cop(arg2: float)


#### set_num_designs_max(arg2: int)


#### set_num_discretization_adapt(num_discretization: int)

Set AMOP discretization number for refinement


#### set_num_discretization_init(num_discretization: int)

Set AMOP discretization number for start iteration


#### set_num_equalities(arg2: int)


#### set_num_inequalities(arg2: int)


#### set_num_inputs(arg2: int)


#### set_num_objectives(arg2: int)


#### set_num_responses(arg2: int)


#### set_refinement_type(arg2: [RefinementType](#amop.RefinementType))


#### set_sampling_type_adapt(arg2: [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES))


#### set_sampling_type_init(arg2: [DOETYPES](dynardo_py_algorithms.md#dynardo_py_algorithms.DOETYPES))


#### set_stagnation_iterations(arg2: int)


#### set_upper_bounds(arg2: [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type))


#### set_use_incomplete_designs(arg2: bool)


#### set_use_pareto_refinement(arg2: bool)


#### set_use_start_designs_only(arg2: bool)


#### set_weight_criteria(arg2: float)


#### set_weight_density(arg2: float)


#### set_weight_localCoP(arg2: float)


### *class* amop.RefinementType

**Enumeration**


#### CRITERIA_REFINEMENT *= amop.RefinementType.CRITERIA_REFINEMENT*


#### GLOBAL_REFINEMENT *= amop.RefinementType.GLOBAL_REFINEMENT*


#### LOCAL_REFINEMENT *= amop.RefinementType.LOCAL_REFINEMENT*
