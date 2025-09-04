# PyNOA2

<a id="PyNOA2.CMA"></a>

## *class* PyNOA2.CMA

<a id="PyNOA2.CMA.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA2.ConstraintHandling"></a>

## *class* PyNOA2.ConstraintHandling

**Enumeration**

<a id="PyNOA2.ConstraintHandling.PENALTY_DISTANCE"></a>

#### PENALTY_DISTANCE *= PyNOA2.ConstraintHandling.PENALTY_DISTANCE*

<a id="PyNOA2.ConstraintHandling.PENALTY_RANK"></a>

#### PENALTY_RANK *= PyNOA2.ConstraintHandling.PENALTY_RANK*

<a id="PyNOA2.EA"></a>

## *class* PyNOA2.EA

<a id="PyNOA2.EA.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA2.FitnessMethod"></a>

## *class* PyNOA2.FitnessMethod

**Enumeration**

<a id="PyNOA2.FitnessMethod.PARETO_DOMINANCE"></a>

#### PARETO_DOMINANCE *= PyNOA2.FitnessMethod.PARETO_DOMINANCE*

<a id="PyNOA2.FitnessMethod.WEIGHTED_SUM"></a>

#### WEIGHTED_SUM *= PyNOA2.FitnessMethod.WEIGHTED_SUM*

<a id="PyNOA2.MutationMethod"></a>

## *class* PyNOA2.MutationMethod

**Enumeration**

<a id="PyNOA2.MutationMethod.NONE"></a>

#### NONE *= PyNOA2.MutationMethod.NONE*

<a id="PyNOA2.MutationMethod.NORMAL_DISTRIBUTED"></a>

#### NORMAL_DISTRIBUTED *= PyNOA2.MutationMethod.NORMAL_DISTRIBUTED*

<a id="PyNOA2.MutationMethod.SELF_ADAPTIVE"></a>

#### SELF_ADAPTIVE *= PyNOA2.MutationMethod.SELF_ADAPTIVE*

<a id="PyNOA2.NOABase"></a>

## *class* PyNOA2.NOABase

<a id="PyNOA2.NOABase.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="PyNOA2.OptimizerSettingsCMA"></a>

## *class* PyNOA2.OptimizerSettingsCMA

<a id="PyNOA2.OptimizerSettingsCMA.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA2.OptimizerSettingsCMA.get_initial_sigma"></a>

#### get_initial_sigma() → float

<a id="PyNOA2.OptimizerSettingsCMA.get_parent_size"></a>

#### get_parent_size() → int

<a id="PyNOA2.OptimizerSettingsCMA.set_defaults"></a>

#### set_defaults(arg2: int, arg3: [SearchStrategy](#PyNOA2.SearchStrategy))

<a id="PyNOA2.OptimizerSettingsCMA.set_initial_sigma"></a>

#### set_initial_sigma(arg2: float)

<a id="PyNOA2.OptimizerSettingsCMA.set_parent_size"></a>

#### set_parent_size(arg2: int)

<a id="PyNOA2.OptimizerSettingsEA"></a>

## *class* PyNOA2.OptimizerSettingsEA

<a id="PyNOA2.OptimizerSettingsEA.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA2.OptimizerSettingsEA.get_archive_size"></a>

#### get_archive_size() → int

<a id="PyNOA2.OptimizerSettingsEA.get_crossover_probability"></a>

#### get_crossover_probability(arg2: int) → float

<a id="PyNOA2.OptimizerSettingsEA.get_distribution_parameter"></a>

#### get_distribution_parameter(arg2: int) → float

<a id="PyNOA2.OptimizerSettingsEA.get_mutation_method"></a>

#### get_mutation_method() → [MutationMethod](#PyNOA2.MutationMethod)

<a id="PyNOA2.OptimizerSettingsEA.get_mutation_rate"></a>

#### get_mutation_rate() → float

<a id="PyNOA2.OptimizerSettingsEA.get_mutation_stddev_begin"></a>

#### get_mutation_stddev_begin() → float

<a id="PyNOA2.OptimizerSettingsEA.get_mutation_stddev_end"></a>

#### get_mutation_stddev_end() → float

<a id="PyNOA2.OptimizerSettingsEA.get_num_crossover_points"></a>

#### get_num_crossover_points(arg2: int) → int

<a id="PyNOA2.OptimizerSettingsEA.get_num_recombination_methods"></a>

#### get_num_recombination_methods() → int

<a id="PyNOA2.OptimizerSettingsEA.get_parent_size"></a>

#### get_parent_size() → int

<a id="PyNOA2.OptimizerSettingsEA.get_ranking_method"></a>

#### get_ranking_method() → [RankingMethod](#PyNOA2.RankingMethod)

<a id="PyNOA2.OptimizerSettingsEA.get_recombination_method"></a>

#### get_recombination_method(arg2: int) → [RecombinationMethod](#PyNOA2.RecombinationMethod)

<a id="PyNOA2.OptimizerSettingsEA.get_selection_method"></a>

#### get_selection_method() → [SelectionMethod](#PyNOA2.SelectionMethod)

<a id="PyNOA2.OptimizerSettingsEA.get_tournament_size"></a>

#### get_tournament_size() → int

<a id="PyNOA2.OptimizerSettingsEA.set_archive_size"></a>

#### set_archive_size(arg2: int)

<a id="PyNOA2.OptimizerSettingsEA.set_crossover_probability"></a>

#### set_crossover_probability(arg2: int, arg3: float)

<a id="PyNOA2.OptimizerSettingsEA.set_defaults"></a>

#### set_defaults(arg2: int, arg3: [SearchStrategy](#PyNOA2.SearchStrategy))

<a id="PyNOA2.OptimizerSettingsEA.set_distribution_parameter"></a>

#### set_distribution_parameter(arg2: int, arg3: float)

<a id="PyNOA2.OptimizerSettingsEA.set_mutation_method"></a>

#### set_mutation_method(arg2: [MutationMethod](#PyNOA2.MutationMethod))

<a id="PyNOA2.OptimizerSettingsEA.set_mutation_rate"></a>

#### set_mutation_rate(arg2: float)

<a id="PyNOA2.OptimizerSettingsEA.set_mutation_stddev"></a>

#### set_mutation_stddev(arg2: float, arg3: float)

<a id="PyNOA2.OptimizerSettingsEA.set_num_crossover_points"></a>

#### set_num_crossover_points(arg2: int, arg3: int)

<a id="PyNOA2.OptimizerSettingsEA.set_num_recombination_methods"></a>

#### set_num_recombination_methods(arg2: int)

<a id="PyNOA2.OptimizerSettingsEA.set_parent_size"></a>

#### set_parent_size(arg2: int)

<a id="PyNOA2.OptimizerSettingsEA.set_ranking_method"></a>

#### set_ranking_method(arg2: [RankingMethod](#PyNOA2.RankingMethod))

<a id="PyNOA2.OptimizerSettingsEA.set_recombination_method"></a>

#### set_recombination_method(arg2: int, arg3: [RecombinationMethod](#PyNOA2.RecombinationMethod))

<a id="PyNOA2.OptimizerSettingsEA.set_selection_method"></a>

#### set_selection_method(arg2: [SelectionMethod](#PyNOA2.SelectionMethod))

<a id="PyNOA2.OptimizerSettingsEA.set_tournament_size"></a>

#### set_tournament_size(arg2: int)

<a id="PyNOA2.OptimizerSettingsNOABase"></a>

## *class* PyNOA2.OptimizerSettingsNOABase

<a id="PyNOA2.OptimizerSettingsNOABase.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="PyNOA2.OptimizerSettingsNOABase.get_constraint_handling"></a>

#### get_constraint_handling() → [ConstraintHandling](#PyNOA2.ConstraintHandling)

<a id="PyNOA2.OptimizerSettingsNOABase.get_fitness_method"></a>

#### get_fitness_method() → [FitnessMethod](#PyNOA2.FitnessMethod)

<a id="PyNOA2.OptimizerSettingsNOABase.get_max_evaluations"></a>

#### get_max_evaluations() → int

<a id="PyNOA2.OptimizerSettingsNOABase.get_max_generations"></a>

#### get_max_generations() → int

<a id="PyNOA2.OptimizerSettingsNOABase.get_population_size"></a>

#### get_population_size() → int

<a id="PyNOA2.OptimizerSettingsNOABase.get_search_strategy"></a>

#### get_search_strategy() → [SearchStrategy](#PyNOA2.SearchStrategy)

<a id="PyNOA2.OptimizerSettingsNOABase.get_seed"></a>

#### get_seed() → int

<a id="PyNOA2.OptimizerSettingsNOABase.get_stagnation_generations"></a>

#### get_stagnation_generations() → int

<a id="PyNOA2.OptimizerSettingsNOABase.get_start_population_size"></a>

#### get_start_population_size() → int

<a id="PyNOA2.OptimizerSettingsNOABase.set_constraint_handling"></a>

#### set_constraint_handling(arg2: [ConstraintHandling](#PyNOA2.ConstraintHandling))

<a id="PyNOA2.OptimizerSettingsNOABase.set_fitness_method"></a>

#### set_fitness_method(arg2: [FitnessMethod](#PyNOA2.FitnessMethod))

<a id="PyNOA2.OptimizerSettingsNOABase.set_max_generations"></a>

#### set_max_generations(arg2: int)

<a id="PyNOA2.OptimizerSettingsNOABase.set_population_size"></a>

#### set_population_size(arg2: int)

<a id="PyNOA2.OptimizerSettingsNOABase.set_seed"></a>

#### set_seed(arg2: int)

<a id="PyNOA2.OptimizerSettingsNOABase.set_stagnation_generations"></a>

#### set_stagnation_generations(arg2: int)

<a id="PyNOA2.OptimizerSettingsNOABase.set_start_population_size"></a>

#### set_start_population_size(arg2: int)

<a id="PyNOA2.OptimizerSettingsPSO"></a>

## *class* PyNOA2.OptimizerSettingsPSO

<a id="PyNOA2.OptimizerSettingsPSO.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA2.OptimizerSettingsPSO.get_global_acccoeff_begin"></a>

#### get_global_acccoeff_begin() → float

<a id="PyNOA2.OptimizerSettingsPSO.get_global_acccoeff_end"></a>

#### get_global_acccoeff_end() → float

<a id="PyNOA2.OptimizerSettingsPSO.get_inertia_weight_begin"></a>

#### get_inertia_weight_begin() → float

<a id="PyNOA2.OptimizerSettingsPSO.get_inertia_weight_end"></a>

#### get_inertia_weight_end() → float

<a id="PyNOA2.OptimizerSettingsPSO.get_passive_congrcoeff_begin"></a>

#### get_passive_congrcoeff_begin() → float

<a id="PyNOA2.OptimizerSettingsPSO.get_passive_congrcoeff_end"></a>

#### get_passive_congrcoeff_end() → float

<a id="PyNOA2.OptimizerSettingsPSO.get_personal_acccoeff_begin"></a>

#### get_personal_acccoeff_begin() → float

<a id="PyNOA2.OptimizerSettingsPSO.get_personal_acccoeff_end"></a>

#### get_personal_acccoeff_end() → float

<a id="PyNOA2.OptimizerSettingsPSO.set_defaults"></a>

#### set_defaults(arg2: int, arg3: [SearchStrategy](#PyNOA2.SearchStrategy))

<a id="PyNOA2.OptimizerSettingsPSO.set_global_acccoeff_begin"></a>

#### set_global_acccoeff_begin(arg2: float)

<a id="PyNOA2.OptimizerSettingsPSO.set_global_acccoeff_end"></a>

#### set_global_acccoeff_end(arg2: float)

<a id="PyNOA2.OptimizerSettingsPSO.set_inertia_weight_begin"></a>

#### set_inertia_weight_begin(arg2: float)

<a id="PyNOA2.OptimizerSettingsPSO.set_inertia_weight_end"></a>

#### set_inertia_weight_end(arg2: float)

<a id="PyNOA2.OptimizerSettingsPSO.set_passive_congrcoeff_begin"></a>

#### set_passive_congrcoeff_begin(arg2: float)

<a id="PyNOA2.OptimizerSettingsPSO.set_passive_congrcoeff_end"></a>

#### set_passive_congrcoeff_end(arg2: float)

<a id="PyNOA2.OptimizerSettingsPSO.set_personal_acccoeff_begin"></a>

#### set_personal_acccoeff_begin(arg2: float)

<a id="PyNOA2.OptimizerSettingsPSO.set_personal_acccoeff_end"></a>

#### set_personal_acccoeff_end(arg2: float)

<a id="PyNOA2.OptimizerSettingsSDI"></a>

## *class* PyNOA2.OptimizerSettingsSDI

<a id="PyNOA2.OptimizerSettingsSDI.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA2.OptimizerSettingsSDI.get_sampling_bounds_width"></a>

#### get_sampling_bounds_width() → float

<a id="PyNOA2.OptimizerSettingsSDI.set_defaults"></a>

#### set_defaults(arg2: int, arg3: [SearchStrategy](#PyNOA2.SearchStrategy))

<a id="PyNOA2.OptimizerSettingsSDI.set_sampling_bounds_width"></a>

#### set_sampling_bounds_width(arg2: float)

<a id="PyNOA2.PSO"></a>

## *class* PyNOA2.PSO

<a id="PyNOA2.PSO.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA2.RankingMethod"></a>

## *class* PyNOA2.RankingMethod

**Enumeration**

<a id="PyNOA2.RankingMethod.EXPONENTIAL"></a>

#### EXPONENTIAL *= PyNOA2.RankingMethod.EXPONENTIAL*

<a id="PyNOA2.RankingMethod.LINEAR"></a>

#### LINEAR *= PyNOA2.RankingMethod.LINEAR*

<a id="PyNOA2.RankingMethod.PARETO"></a>

#### PARETO *= PyNOA2.RankingMethod.PARETO*

<a id="PyNOA2.RecombinationMethod"></a>

## *class* PyNOA2.RecombinationMethod

**Enumeration**

<a id="PyNOA2.RecombinationMethod.ARITHMETIC"></a>

#### ARITHMETIC *= PyNOA2.RecombinationMethod.ARITHMETIC*

<a id="PyNOA2.RecombinationMethod.COPY"></a>

#### COPY *= PyNOA2.RecombinationMethod.COPY*

<a id="PyNOA2.RecombinationMethod.MULTIPOINT"></a>

#### MULTIPOINT *= PyNOA2.RecombinationMethod.MULTIPOINT*

<a id="PyNOA2.RecombinationMethod.SIMULATED_BINARY"></a>

#### SIMULATED_BINARY *= PyNOA2.RecombinationMethod.SIMULATED_BINARY*

<a id="PyNOA2.RecombinationMethod.SINGLEPOINT"></a>

#### SINGLEPOINT *= PyNOA2.RecombinationMethod.SINGLEPOINT*

<a id="PyNOA2.RecombinationMethod.UNIFORM"></a>

#### UNIFORM *= PyNOA2.RecombinationMethod.UNIFORM*

<a id="PyNOA2.SDI"></a>

## *class* PyNOA2.SDI

<a id="PyNOA2.SDI.__init__"></a>

#### \_\_init_\_()

<a id="PyNOA2.SearchStrategy"></a>

## *class* PyNOA2.SearchStrategy

**Enumeration**

<a id="PyNOA2.SearchStrategy.BALANCED"></a>

#### BALANCED *= PyNOA2.SearchStrategy.BALANCED*

<a id="PyNOA2.SearchStrategy.GLOBAL"></a>

#### GLOBAL *= PyNOA2.SearchStrategy.GLOBAL*

<a id="PyNOA2.SearchStrategy.LOCAL"></a>

#### LOCAL *= PyNOA2.SearchStrategy.LOCAL*

<a id="PyNOA2.SelectionMethod"></a>

## *class* PyNOA2.SelectionMethod

**Enumeration**

<a id="PyNOA2.SelectionMethod.ROULETTE"></a>

#### ROULETTE *= PyNOA2.SelectionMethod.ROULETTE*

<a id="PyNOA2.SelectionMethod.STOCHASTIC"></a>

#### STOCHASTIC *= PyNOA2.SelectionMethod.STOCHASTIC*

<a id="PyNOA2.SelectionMethod.TOURNAMENT"></a>

#### TOURNAMENT *= PyNOA2.SelectionMethod.TOURNAMENT*
