

### *class* PyNOA.AdaptionMethods

**Enumeration**


#### Arithmetic *= PyNOA.AdaptionMethods.Arithmetic*


#### Copy *= PyNOA.AdaptionMethods.Copy*


#### Multipoint *= PyNOA.AdaptionMethods.Multipoint*


#### PSO *= PyNOA.AdaptionMethods.PSO*


#### SBX *= PyNOA.AdaptionMethods.SBX*


#### Singlepoint *= PyNOA.AdaptionMethods.Singlepoint*


#### Uniform *= PyNOA.AdaptionMethods.Uniform*


### *class* PyNOA.Design


#### \_\_init_\_()


#### get_actual_number() → int


#### get_objective() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)


#### get_parameters() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)


### *class* PyNOA.MutationMethods

**Enumeration**


#### ConstraintAdaptive *= PyNOA.MutationMethods.ConstraintAdaptive*


#### ModulatedAdaptive *= PyNOA.MutationMethods.ModulatedAdaptive*


#### NormalDistribution *= PyNOA.MutationMethods.NormalDistribution*


#### SelfAdaptive *= PyNOA.MutationMethods.SelfAdaptive*


### *class* PyNOA.NOA


#### \_\_init_\_()

#### \_\_init_\_(arg2: [PyOptimizerBase.SettingsBase](PyOptimizerBase.md#PyOptimizerBase.SettingsBase))


### *class* PyNOA.NOASettings


#### \_\_init_\_()


#### append_adaption_method(arg2: [AdaptionMethods](#PyNOA.AdaptionMethods))

Append a new adaption method. Use set_adaption_method to reset.


#### change_default_settings(population: int size, max: int. generations, lower: doubleVec bounds, upper: doubleVec bounds)


#### get_adaption_methods() → list

Get a list of all set adaption methods.


#### get_arch_size() → int

Get maximum archive size.


#### get_cliff_value() → float

Get cliff for penalty term.


#### get_contraint_scaling_factor() → float

Get scaling factor for constraints.


#### get_crossover_probabilities() → list

Get a list of all crossover probabilities.


#### get_distribution_parameters() → list

Get a list of all distribution parameters.


#### get_fitness_scaling() → bool

Get use automatic fitness scaling.


#### get_hybrid() → bool

Get use hybrid adaption.


#### get_max_archive_size() → int

Return maximum archive size.


#### get_max_gen() → int

Get maximum number of generations.


#### get_min_gen() → int

Get minimum number of generations.


#### get_mut_gnr() → float

Get number of mutating generations.


#### get_mut_rate() → float

Get probability of mutation.


#### get_mutate() → bool

Get whether to mutate or not.


#### get_mutation_method() → [MutationMethods](#PyNOA.MutationMethods)

Get mutation method.


#### get_mutation_std_dev() → tuple

Get mutation standard deviation values.


#### get_number_of_parents() → int


#### get_numbers_of_crosspoints() → list

Get a list of all numbers of crosspoints.


#### get_penalty_method() → [PenaltyMethods](#PyNOA.PenaltyMethods)

Get penalty method to evaluate constraint violations.


#### get_ranking_method() → [RankingMethods](#PyNOA.RankingMethods)

Get ranking method.


#### get_seed() → int


#### get_selection_method() → [SelectionMethods](#PyNOA.SelectionMethods)

Get selection method.


#### get_selection_pressure() → float

Get value for selection pressure.


#### get_stagnation_generations() → int

Get convergence parameter.


#### get_stagnation_limit() → float

Get convergence parameter.


#### get_start_pop_size() → int


#### get_tournament_size() → int

Get number of designs to compare in tournament.


#### *property* parameter_free

Whether to use parameter free constraint handling in penalty method.


#### *property* roulette_with_replacement

Roulette selection applied with replacement.


#### set_adaption_method(arg2: [AdaptionMethods](#PyNOA.AdaptionMethods))

Reset adaption methods and set first adaption method.


#### set_arch_size(arg2: int)

Set maximum archive size.


#### set_bounds(lower: doubleVec bounds, upper: doubleVec bounds)

Set limiting bound for each dimension.


#### set_cliff_value(arg2: float)

Set cliff for penalty term.


#### set_contraint_scaling_factor(arg2: float)

Set scaling factor for constraints.


#### set_crossover_probability(arg2: float)

Set crossover rate.


#### set_default(adaption: AdaptionMethods method, local: bool search)

Apply default settings.


#### set_distribution_parameter(arg2: float)

Set distribution parameter for SBX.


#### set_ea_balanced()

Set defaults for EA - balanced.


#### set_ea_global()

Set defaults for EA - global.


#### set_ea_local()

Set defaults for EA - local.


#### set_fitness_scaling(arg2: bool)

Set use automatic fitness scaling.


#### set_hybrid(arg2: bool)

Set use hybrid adaption.


#### set_max_gen(arg2: int)

Set maximum number of generations.


#### set_min_gen(arg2: int)

Set minimum number of generations.


#### set_mut_gnr(arg2: float)

Set number of mutating generations.


#### set_mut_rate(arg2: float)

Set probability of mutation.


#### set_mutate(arg2: bool)

Set whether to mutate or not.


#### set_mutation_method(arg2: [MutationMethods](#PyNOA.MutationMethods))

Set mutation method.


#### set_mutation_std_dev(lower: float bound continuous parameter, upper: float bound continuous parameter, lower: float bound discrete parameter, upper: float bound discrete parameter)

Set mutation standard deviation.


#### set_number_of_crosspoints(arg2: int)

Set number of crosspoints.


#### set_number_of_parents(Set: int number of parents.)


#### set_penalty_method(arg2: [PenaltyMethods](#PyNOA.PenaltyMethods))

Set penalty method to evaluate constraint violations.


#### set_pso_coefficients(intertia: float weight at first generation, intertia: float weight at last generation, personal: float acceleration coefficient at first generation, personal: float acceleration coefficient at last generation, global: float acceleration coefficient at first generation, global: float acceleration coefficient at last generation)

Set parameters relevant to PSO.


#### set_pso_global()

Set defaults for PSO - global.


#### set_pso_local()

Set defaults for PSO - local.


#### set_ranking_method(arg2: [RankingMethods](#PyNOA.RankingMethods))

Set ranking method.


#### set_seed(arg2: int)


#### set_selection_method(arg2: [SelectionMethods](#PyNOA.SelectionMethods))

Set selection method.


#### set_selection_pressure(arg2: float)

Set value for selection pressure.


#### set_stagnation_generations(arg2: int)

Set convergence parameter.


#### set_stagnation_limit(arg2: float)

Set convergence parameter.


#### set_start_pop_size(Set: int start population size.)


#### set_tournament_size(arg2: int)

Set number of designs to compare in tournament.


### *class* PyNOA.PenaltyMethods

**Enumeration**


#### DISTANCE *= PyNOA.PenaltyMethods.DISTANCE*


#### HYBRID *= PyNOA.PenaltyMethods.HYBRID*


#### NUM_VIOLATIONS *= PyNOA.PenaltyMethods.NUM_VIOLATIONS*


### *class* PyNOA.RankingMethods

**Enumeration**


#### CrowdingDensity *= PyNOA.RankingMethods.CrowdingDensity*


#### CumulatedDensity *= PyNOA.RankingMethods.CumulatedDensity*


#### Exponential *= PyNOA.RankingMethods.Exponential*


#### Linear *= PyNOA.RankingMethods.Linear*


#### Pareto *= PyNOA.RankingMethods.Pareto*


### *class* PyNOA.SelectionMethods

**Enumeration**


#### ArchiveBest *= PyNOA.SelectionMethods.ArchiveBest*


#### PopulationBest *= PyNOA.SelectionMethods.PopulationBest*


#### Roulette *= PyNOA.SelectionMethods.Roulette*


#### Stochastic *= PyNOA.SelectionMethods.Stochastic*


#### Tournament *= PyNOA.SelectionMethods.Tournament*
