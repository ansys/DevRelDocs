

### *class* PyNOA2.CMA


#### \_\_init_\_()


### *class* PyNOA2.ConstraintHandling

**Enumeration**


#### PENALTY_DISTANCE *= PyNOA2.ConstraintHandling.PENALTY_DISTANCE*


#### PENALTY_RANK *= PyNOA2.ConstraintHandling.PENALTY_RANK*


### *class* PyNOA2.EA


#### \_\_init_\_()


### *class* PyNOA2.FitnessMethod

**Enumeration**


#### PARETO_DOMINANCE *= PyNOA2.FitnessMethod.PARETO_DOMINANCE*


#### WEIGHTED_SUM *= PyNOA2.FitnessMethod.WEIGHTED_SUM*


### *class* PyNOA2.MutationMethod

**Enumeration**


#### NONE *= PyNOA2.MutationMethod.NONE*


#### NORMAL_DISTRIBUTED *= PyNOA2.MutationMethod.NORMAL_DISTRIBUTED*


#### SELF_ADAPTIVE *= PyNOA2.MutationMethod.SELF_ADAPTIVE*


### *class* PyNOA2.NOABase


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


### *class* PyNOA2.OptimizerSettingsCMA


#### \_\_init_\_()


#### get_initial_sigma() → float


#### get_parent_size() → int


#### set_defaults(arg2: int, arg3: [SearchStrategy](#PyNOA2.SearchStrategy))


#### set_initial_sigma(arg2: float)


#### set_parent_size(arg2: int)


### *class* PyNOA2.OptimizerSettingsEA


#### \_\_init_\_()


#### get_archive_size() → int


#### get_crossover_probability(arg2: int) → float


#### get_distribution_parameter(arg2: int) → float


#### get_mutation_method() → [MutationMethod](#PyNOA2.MutationMethod)


#### get_mutation_rate() → float


#### get_mutation_stddev_begin() → float


#### get_mutation_stddev_end() → float


#### get_num_crossover_points(arg2: int) → int


#### get_num_recombination_methods() → int


#### get_parent_size() → int


#### get_ranking_method() → [RankingMethod](#PyNOA2.RankingMethod)


#### get_recombination_method(arg2: int) → [RecombinationMethod](#PyNOA2.RecombinationMethod)


#### get_selection_method() → [SelectionMethod](#PyNOA2.SelectionMethod)


#### get_tournament_size() → int


#### set_archive_size(arg2: int)


#### set_crossover_probability(arg2: int, arg3: float)


#### set_defaults(arg2: int, arg3: [SearchStrategy](#PyNOA2.SearchStrategy))


#### set_distribution_parameter(arg2: int, arg3: float)


#### set_mutation_method(arg2: [MutationMethod](#PyNOA2.MutationMethod))


#### set_mutation_rate(arg2: float)


#### set_mutation_stddev(arg2: float, arg3: float)


#### set_num_crossover_points(arg2: int, arg3: int)


#### set_num_recombination_methods(arg2: int)


#### set_parent_size(arg2: int)


#### set_ranking_method(arg2: [RankingMethod](#PyNOA2.RankingMethod))


#### set_recombination_method(arg2: int, arg3: [RecombinationMethod](#PyNOA2.RecombinationMethod))


#### set_selection_method(arg2: [SelectionMethod](#PyNOA2.SelectionMethod))


#### set_tournament_size(arg2: int)


### *class* PyNOA2.OptimizerSettingsNOABase


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### get_constraint_handling() → [ConstraintHandling](#PyNOA2.ConstraintHandling)


#### get_fitness_method() → [FitnessMethod](#PyNOA2.FitnessMethod)


#### get_max_evaluations() → int


#### get_max_generations() → int


#### get_population_size() → int


#### get_search_strategy() → [SearchStrategy](#PyNOA2.SearchStrategy)


#### get_seed() → int


#### get_stagnation_generations() → int


#### get_start_population_size() → int


#### set_constraint_handling(arg2: [ConstraintHandling](#PyNOA2.ConstraintHandling))


#### set_fitness_method(arg2: [FitnessMethod](#PyNOA2.FitnessMethod))


#### set_max_generations(arg2: int)


#### set_population_size(arg2: int)


#### set_seed(arg2: int)


#### set_stagnation_generations(arg2: int)


#### set_start_population_size(arg2: int)


### *class* PyNOA2.OptimizerSettingsPSO


#### \_\_init_\_()


#### get_global_acccoeff_begin() → float


#### get_global_acccoeff_end() → float


#### get_inertia_weight_begin() → float


#### get_inertia_weight_end() → float


#### get_passive_congrcoeff_begin() → float


#### get_passive_congrcoeff_end() → float


#### get_personal_acccoeff_begin() → float


#### get_personal_acccoeff_end() → float


#### set_defaults(arg2: int, arg3: [SearchStrategy](#PyNOA2.SearchStrategy))


#### set_global_acccoeff_begin(arg2: float)


#### set_global_acccoeff_end(arg2: float)


#### set_inertia_weight_begin(arg2: float)


#### set_inertia_weight_end(arg2: float)


#### set_passive_congrcoeff_begin(arg2: float)


#### set_passive_congrcoeff_end(arg2: float)


#### set_personal_acccoeff_begin(arg2: float)


#### set_personal_acccoeff_end(arg2: float)


### *class* PyNOA2.OptimizerSettingsSDI


#### \_\_init_\_()


#### get_sampling_bounds_width() → float


#### set_defaults(arg2: int, arg3: [SearchStrategy](#PyNOA2.SearchStrategy))


#### set_sampling_bounds_width(arg2: float)


### *class* PyNOA2.PSO


#### \_\_init_\_()


### *class* PyNOA2.RankingMethod

**Enumeration**


#### EXPONENTIAL *= PyNOA2.RankingMethod.EXPONENTIAL*


#### LINEAR *= PyNOA2.RankingMethod.LINEAR*


#### PARETO *= PyNOA2.RankingMethod.PARETO*


### *class* PyNOA2.RecombinationMethod

**Enumeration**


#### ARITHMETIC *= PyNOA2.RecombinationMethod.ARITHMETIC*


#### COPY *= PyNOA2.RecombinationMethod.COPY*


#### MULTIPOINT *= PyNOA2.RecombinationMethod.MULTIPOINT*


#### SIMULATED_BINARY *= PyNOA2.RecombinationMethod.SIMULATED_BINARY*


#### SINGLEPOINT *= PyNOA2.RecombinationMethod.SINGLEPOINT*


#### UNIFORM *= PyNOA2.RecombinationMethod.UNIFORM*


### *class* PyNOA2.SDI


#### \_\_init_\_()


### *class* PyNOA2.SearchStrategy

**Enumeration**


#### BALANCED *= PyNOA2.SearchStrategy.BALANCED*


#### GLOBAL *= PyNOA2.SearchStrategy.GLOBAL*


#### LOCAL *= PyNOA2.SearchStrategy.LOCAL*


### *class* PyNOA2.SelectionMethod

**Enumeration**


#### ROULETTE *= PyNOA2.SelectionMethod.ROULETTE*


#### STOCHASTIC *= PyNOA2.SelectionMethod.STOCHASTIC*


#### TOURNAMENT *= PyNOA2.SelectionMethod.TOURNAMENT*
