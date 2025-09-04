# PyNOA

<a id="PyNOA.AdaptionMethods"></a>

## *class* PyNOA.AdaptionMethods

**Enumeration**

<a id="PyNOA.AdaptionMethods.Arithmetic"></a>

#### Arithmetic *= PyNOA.AdaptionMethods.Arithmetic*

<a id="PyNOA.AdaptionMethods.Copy"></a>

#### Copy *= PyNOA.AdaptionMethods.Copy*

<a id="PyNOA.AdaptionMethods.Multipoint"></a>

#### Multipoint *= PyNOA.AdaptionMethods.Multipoint*

<a id="PyNOA.AdaptionMethods.PSO"></a>

#### PSO *= PyNOA.AdaptionMethods.PSO*

<a id="PyNOA.AdaptionMethods.SBX"></a>

#### SBX *= PyNOA.AdaptionMethods.SBX*

<a id="PyNOA.AdaptionMethods.Singlepoint"></a>

#### Singlepoint *= PyNOA.AdaptionMethods.Singlepoint*

<a id="PyNOA.AdaptionMethods.Uniform"></a>

#### Uniform *= PyNOA.AdaptionMethods.Uniform*

<a id="PyNOA.Design"></a>

## *class* PyNOA.Design

<a id="PyNOA.Design.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA.Design.get_actual_number"></a>

#### get_actual_number() → int

<a id="PyNOA.Design.get_objective"></a>

#### get_objective() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)

<a id="PyNOA.Design.get_parameters"></a>

#### get_parameters() → [doubleVec](stdcpp_python_export.md#stdcpp_python_export.doubleVec)

<a id="PyNOA.MutationMethods"></a>

## *class* PyNOA.MutationMethods

**Enumeration**

<a id="PyNOA.MutationMethods.ConstraintAdaptive"></a>

#### ConstraintAdaptive *= PyNOA.MutationMethods.ConstraintAdaptive*

<a id="PyNOA.MutationMethods.ModulatedAdaptive"></a>

#### ModulatedAdaptive *= PyNOA.MutationMethods.ModulatedAdaptive*

<a id="PyNOA.MutationMethods.NormalDistribution"></a>

#### NormalDistribution *= PyNOA.MutationMethods.NormalDistribution*

<a id="PyNOA.MutationMethods.SelfAdaptive"></a>

#### SelfAdaptive *= PyNOA.MutationMethods.SelfAdaptive*

<a id="PyNOA.NOA"></a>

## *class* PyNOA.NOA

<a id="PyNOA.NOA.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [PyOptimizerBase.SettingsBase](PyOptimizerBase.md#PyOptimizerBase.SettingsBase))

<a id="PyNOA.NOASettings"></a>

## *class* PyNOA.NOASettings

<a id="PyNOA.NOASettings.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA.NOASettings.append_adaption_method"></a>

#### append_adaption_method(arg2: [AdaptionMethods](#PyNOA.AdaptionMethods))

Append a new adaption method. Use set_adaption_method to reset.

<a id="PyNOA.NOASettings.change_default_settings"></a>

#### change_default_settings(population: int size, max: int. generations, lower: doubleVec bounds, upper: doubleVec bounds)

<a id="PyNOA.NOASettings.get_adaption_methods"></a>

#### get_adaption_methods() → list

Get a list of all set adaption methods.

<a id="PyNOA.NOASettings.get_arch_size"></a>

#### get_arch_size() → int

Get maximum archive size.

<a id="PyNOA.NOASettings.get_cliff_value"></a>

#### get_cliff_value() → float

Get cliff for penalty term.

<a id="PyNOA.NOASettings.get_contraint_scaling_factor"></a>

#### get_contraint_scaling_factor() → float

Get scaling factor for constraints.

<a id="PyNOA.NOASettings.get_crossover_probabilities"></a>

#### get_crossover_probabilities() → list

Get a list of all crossover probabilities.

<a id="PyNOA.NOASettings.get_distribution_parameters"></a>

#### get_distribution_parameters() → list

Get a list of all distribution parameters.

<a id="PyNOA.NOASettings.get_fitness_scaling"></a>

#### get_fitness_scaling() → bool

Get use automatic fitness scaling.

<a id="PyNOA.NOASettings.get_hybrid"></a>

#### get_hybrid() → bool

Get use hybrid adaption.

<a id="PyNOA.NOASettings.get_max_archive_size"></a>

#### get_max_archive_size() → int

Return maximum archive size.

<a id="PyNOA.NOASettings.get_max_gen"></a>

#### get_max_gen() → int

Get maximum number of generations.

<a id="PyNOA.NOASettings.get_min_gen"></a>

#### get_min_gen() → int

Get minimum number of generations.

<a id="PyNOA.NOASettings.get_mut_gnr"></a>

#### get_mut_gnr() → float

Get number of mutating generations.

<a id="PyNOA.NOASettings.get_mut_rate"></a>

#### get_mut_rate() → float

Get probability of mutation.

<a id="PyNOA.NOASettings.get_mutate"></a>

#### get_mutate() → bool

Get whether to mutate or not.

<a id="PyNOA.NOASettings.get_mutation_method"></a>

#### get_mutation_method() → [MutationMethods](#PyNOA.MutationMethods)

Get mutation method.

<a id="PyNOA.NOASettings.get_mutation_std_dev"></a>

#### get_mutation_std_dev() → tuple

Get mutation standard deviation values.

<a id="PyNOA.NOASettings.get_number_of_parents"></a>

#### get_number_of_parents() → int

<a id="PyNOA.NOASettings.get_numbers_of_crosspoints"></a>

#### get_numbers_of_crosspoints() → list

Get a list of all numbers of crosspoints.

<a id="PyNOA.NOASettings.get_penalty_method"></a>

#### get_penalty_method() → [PenaltyMethods](#PyNOA.PenaltyMethods)

Get penalty method to evaluate constraint violations.

<a id="PyNOA.NOASettings.get_ranking_method"></a>

#### get_ranking_method() → [RankingMethods](#PyNOA.RankingMethods)

Get ranking method.

<a id="PyNOA.NOASettings.get_seed"></a>

#### get_seed() → int

<a id="PyNOA.NOASettings.get_selection_method"></a>

#### get_selection_method() → [SelectionMethods](#PyNOA.SelectionMethods)

Get selection method.

<a id="PyNOA.NOASettings.get_selection_pressure"></a>

#### get_selection_pressure() → float

Get value for selection pressure.

<a id="PyNOA.NOASettings.get_stagnation_generations"></a>

#### get_stagnation_generations() → int

Get convergence parameter.

<a id="PyNOA.NOASettings.get_stagnation_limit"></a>

#### get_stagnation_limit() → float

Get convergence parameter.

<a id="PyNOA.NOASettings.get_start_pop_size"></a>

#### get_start_pop_size() → int

<a id="PyNOA.NOASettings.get_tournament_size"></a>

#### get_tournament_size() → int

Get number of designs to compare in tournament.

<a id="PyNOA.NOASettings.parameter_free"></a>

#### *property* parameter_free

Whether to use parameter free constraint handling in penalty method.

<a id="PyNOA.NOASettings.roulette_with_replacement"></a>

#### *property* roulette_with_replacement

Roulette selection applied with replacement.

<a id="PyNOA.NOASettings.set_adaption_method"></a>

#### set_adaption_method(arg2: [AdaptionMethods](#PyNOA.AdaptionMethods))

Reset adaption methods and set first adaption method.

<a id="PyNOA.NOASettings.set_arch_size"></a>

#### set_arch_size(arg2: int)

Set maximum archive size.

<a id="PyNOA.NOASettings.set_bounds"></a>

#### set_bounds(lower: doubleVec bounds, upper: doubleVec bounds)

Set limiting bound for each dimension.

<a id="PyNOA.NOASettings.set_cliff_value"></a>

#### set_cliff_value(arg2: float)

Set cliff for penalty term.

<a id="PyNOA.NOASettings.set_contraint_scaling_factor"></a>

#### set_contraint_scaling_factor(arg2: float)

Set scaling factor for constraints.

<a id="PyNOA.NOASettings.set_crossover_probability"></a>

#### set_crossover_probability(arg2: float)

Set crossover rate.

<a id="PyNOA.NOASettings.set_default"></a>

#### set_default(adaption: AdaptionMethods method, local: bool search)

Apply default settings.

<a id="PyNOA.NOASettings.set_distribution_parameter"></a>

#### set_distribution_parameter(arg2: float)

Set distribution parameter for SBX.

<a id="PyNOA.NOASettings.set_ea_balanced"></a>

#### set_ea_balanced()

Set defaults for EA - balanced.

<a id="PyNOA.NOASettings.set_ea_global"></a>

#### set_ea_global()

Set defaults for EA - global.

<a id="PyNOA.NOASettings.set_ea_local"></a>

#### set_ea_local()

Set defaults for EA - local.

<a id="PyNOA.NOASettings.set_fitness_scaling"></a>

#### set_fitness_scaling(arg2: bool)

Set use automatic fitness scaling.

<a id="PyNOA.NOASettings.set_hybrid"></a>

#### set_hybrid(arg2: bool)

Set use hybrid adaption.

<a id="PyNOA.NOASettings.set_max_gen"></a>

#### set_max_gen(arg2: int)

Set maximum number of generations.

<a id="PyNOA.NOASettings.set_min_gen"></a>

#### set_min_gen(arg2: int)

Set minimum number of generations.

<a id="PyNOA.NOASettings.set_mut_gnr"></a>

#### set_mut_gnr(arg2: float)

Set number of mutating generations.

<a id="PyNOA.NOASettings.set_mut_rate"></a>

#### set_mut_rate(arg2: float)

Set probability of mutation.

<a id="PyNOA.NOASettings.set_mutate"></a>

#### set_mutate(arg2: bool)

Set whether to mutate or not.

<a id="PyNOA.NOASettings.set_mutation_method"></a>

#### set_mutation_method(arg2: [MutationMethods](#PyNOA.MutationMethods))

Set mutation method.

<a id="PyNOA.NOASettings.set_mutation_std_dev"></a>

#### set_mutation_std_dev(lower: float bound continuous parameter, upper: float bound continuous parameter, lower: float bound discrete parameter, upper: float bound discrete parameter)

Set mutation standard deviation.

<a id="PyNOA.NOASettings.set_number_of_crosspoints"></a>

#### set_number_of_crosspoints(arg2: int)

Set number of crosspoints.

<a id="PyNOA.NOASettings.set_number_of_parents"></a>

#### set_number_of_parents(Set: int number of parents.)

<a id="PyNOA.NOASettings.set_penalty_method"></a>

#### set_penalty_method(arg2: [PenaltyMethods](#PyNOA.PenaltyMethods))

Set penalty method to evaluate constraint violations.

<a id="PyNOA.NOASettings.set_pso_coefficients"></a>

#### set_pso_coefficients(intertia: float weight at first generation, intertia: float weight at last generation, personal: float acceleration coefficient at first generation, personal: float acceleration coefficient at last generation, global: float acceleration coefficient at first generation, global: float acceleration coefficient at last generation)

Set parameters relevant to PSO.

<a id="PyNOA.NOASettings.set_pso_global"></a>

#### set_pso_global()

Set defaults for PSO - global.

<a id="PyNOA.NOASettings.set_pso_local"></a>

#### set_pso_local()

Set defaults for PSO - local.

<a id="PyNOA.NOASettings.set_ranking_method"></a>

#### set_ranking_method(arg2: [RankingMethods](#PyNOA.RankingMethods))

Set ranking method.

<a id="PyNOA.NOASettings.set_seed"></a>

#### set_seed(arg2: int)

<a id="PyNOA.NOASettings.set_selection_method"></a>

#### set_selection_method(arg2: [SelectionMethods](#PyNOA.SelectionMethods))

Set selection method.

<a id="PyNOA.NOASettings.set_selection_pressure"></a>

#### set_selection_pressure(arg2: float)

Set value for selection pressure.

<a id="PyNOA.NOASettings.set_stagnation_generations"></a>

#### set_stagnation_generations(arg2: int)

Set convergence parameter.

<a id="PyNOA.NOASettings.set_stagnation_limit"></a>

#### set_stagnation_limit(arg2: float)

Set convergence parameter.

<a id="PyNOA.NOASettings.set_start_pop_size"></a>

#### set_start_pop_size(Set: int start population size.)

<a id="PyNOA.NOASettings.set_tournament_size"></a>

#### set_tournament_size(arg2: int)

Set number of designs to compare in tournament.

<a id="PyNOA.PenaltyMethods"></a>

## *class* PyNOA.PenaltyMethods

**Enumeration**

<a id="PyNOA.PenaltyMethods.DISTANCE"></a>

#### DISTANCE *= PyNOA.PenaltyMethods.DISTANCE*

<a id="PyNOA.PenaltyMethods.HYBRID"></a>

#### HYBRID *= PyNOA.PenaltyMethods.HYBRID*

<a id="PyNOA.PenaltyMethods.NUM_VIOLATIONS"></a>

#### NUM_VIOLATIONS *= PyNOA.PenaltyMethods.NUM_VIOLATIONS*

<a id="PyNOA.RankingMethods"></a>

## *class* PyNOA.RankingMethods

**Enumeration**

<a id="PyNOA.RankingMethods.CrowdingDensity"></a>

#### CrowdingDensity *= PyNOA.RankingMethods.CrowdingDensity*

<a id="PyNOA.RankingMethods.CumulatedDensity"></a>

#### CumulatedDensity *= PyNOA.RankingMethods.CumulatedDensity*

<a id="PyNOA.RankingMethods.Exponential"></a>

#### Exponential *= PyNOA.RankingMethods.Exponential*

<a id="PyNOA.RankingMethods.Linear"></a>

#### Linear *= PyNOA.RankingMethods.Linear*

<a id="PyNOA.RankingMethods.Pareto"></a>

#### Pareto *= PyNOA.RankingMethods.Pareto*

<a id="PyNOA.SelectionMethods"></a>

## *class* PyNOA.SelectionMethods

**Enumeration**

<a id="PyNOA.SelectionMethods.ArchiveBest"></a>

#### ArchiveBest *= PyNOA.SelectionMethods.ArchiveBest*

<a id="PyNOA.SelectionMethods.PopulationBest"></a>

#### PopulationBest *= PyNOA.SelectionMethods.PopulationBest*

<a id="PyNOA.SelectionMethods.Roulette"></a>

#### Roulette *= PyNOA.SelectionMethods.Roulette*

<a id="PyNOA.SelectionMethods.Stochastic"></a>

#### Stochastic *= PyNOA.SelectionMethods.Stochastic*

<a id="PyNOA.SelectionMethods.Tournament"></a>

#### Tournament *= PyNOA.SelectionMethods.Tournament*
