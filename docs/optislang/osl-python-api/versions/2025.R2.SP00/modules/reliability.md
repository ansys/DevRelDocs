# reliability

<a id="reliability.LineSearchMethod"></a>

## *class* reliability.LineSearchMethod

**Enumeration**

<a id="reliability.LineSearchMethod.Bisection"></a>

#### Bisection *= reliability.LineSearchMethod.Bisection*

<a id="reliability.LineSearchMethod.RegulaFalsi"></a>

#### RegulaFalsi *= reliability.LineSearchMethod.RegulaFalsi*

<a id="reliability.ReliabilityAdaptiveSampling"></a>

## *class* reliability.ReliabilityAdaptiveSampling

Adaptive sampling implements importance sampling using multiple adaptation steps. The first step scales all designs by an initial blow up factor in standard-normal space. The objective of the scaling is to obtain a reasonable number of samples in the failure domain during the 1st step. Hence, the blow up factor should be chosen according to the failure probability pf the problem. While generating the samples one ignores samples which are further away than 

```
max_allowed_sigma_
```

 from the origin in standard normal space. The reason is that importance weights become inaccurate for samples being that far away.
After sampling the user-defined number of samples in a single step, the median and covariance matrix of the sampling density function of the next step will be determined according to the statistics of the samples lying in the failure domain. A modified eigenvalue decomposition of the covariance matrix ensures positive definiteness. Furthermore, if the C.O.V. of Pf is relatively large, the covariance matrix is scaled such that it is closer to the identity matrix.
The user defines the number of steps and the number of samples per step. If any of the solver calls fails, the corresponding sample is either ignored or (if one tells the algorithm to interpret the failed run as a failure event) is accounted to the failure domain.

<a id="reliability.ReliabilityAdaptiveSampling.__init__"></a>

#### \_\_init_\_()

<a id="reliability.ReliabilityAdaptiveSampling.get_current_step"></a>

#### get_current_step() → int

Returns the current iteration step number.

<a id="reliability.ReliabilityAdaptiveSampling.get_current_weights"></a>

#### get_current_weights() → [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type)

Returns the current importance sampling weights.

<a id="reliability.ReliabilityBase"></a>

## *class* reliability.ReliabilityBase

<a id="reliability.ReliabilityBase.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="reliability.ReliabilityBase.adapt"></a>

#### adapt()

Creates internally the next set of designs. This is called within the loop after Appraise and prepares the next call of get_next_designs.

<a id="reliability.ReliabilityBase.appraise"></a>

#### appraise()

Performs a search step by the internal reliability algorithm. This is called after simulation and setting results and used inputs. The method reads all given information (and eventually performs one internal search step). After calling this method it should be possible to check the state of the iteration by is_terminated().

<a id="reliability.ReliabilityBase.can_provide_probability_of_failure"></a>

#### can_provide_probability_of_failure() → bool

Returns true when the probability of failure can be calculated.

<a id="reliability.ReliabilityBase.finalize"></a>

#### finalize()

Finalizes the iteration. Does whatever is neccessary to finalize - delete pointers, collect data…

<a id="reliability.ReliabilityBase.get_criteria_success_info"></a>

#### get_criteria_success_info() → [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type)

<a id="reliability.ReliabilityBase.get_estimators_std_dev"></a>

#### get_estimators_std_dev() → float

Returns the standard deviation of the estimator of the probability of failure. It should be called after finalize(). If this quantity does not make sense (i.e. in case of FORM), it returns zero.

<a id="reliability.ReliabilityBase.get_inputs"></a>

#### get_inputs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="reliability.ReliabilityBase.get_iteration_name"></a>

#### get_iteration_name() → str

Returns the name of the current iteration.

<a id="reliability.ReliabilityBase.get_next_design_ids"></a>

#### get_next_design_ids() → [uintVec](stdcpp_python_export.md#stdcpp_python_export.uintVec)

Returns the ids for the next set of design vectors for which responses must be computed. This method is called at the begin of the iteration loop. It returns a reference to the internally stored set of infos of awaiting designs.

<a id="reliability.ReliabilityBase.get_next_design_infos"></a>

#### get_next_design_infos() → [uintVec](stdcpp_python_export.md#stdcpp_python_export.uintVec)

Returns some information for the next set of design vectors for which responses must be computed. This method is called at the begin of the iteration loop. It returns a reference to the internally stored set of infos of awaiting designs.

<a id="reliability.ReliabilityBase.get_next_designs"></a>

#### get_next_designs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

Returns the next set of design vectors for which responses must be computed. This method is called at the begin of the iteration loop. It returns a reference to the internally stored set of awaiting designs.

<a id="reliability.ReliabilityBase.get_num_awaiting_designs"></a>

#### get_num_awaiting_designs() → int

<a id="reliability.ReliabilityBase.get_num_computed_samples"></a>

#### get_num_computed_samples() → int

<a id="reliability.ReliabilityBase.get_num_function_calls"></a>

#### get_num_function_calls() → int

<a id="reliability.ReliabilityBase.get_num_inputs"></a>

#### get_num_inputs() → int

<a id="reliability.ReliabilityBase.get_num_safety_margins"></a>

#### get_num_safety_margins() → int

<a id="reliability.ReliabilityBase.get_num_successfully_computed_samples"></a>

#### get_num_successfully_computed_samples() → int

<a id="reliability.ReliabilityBase.get_probability_of_failure"></a>

#### get_probability_of_failure() → float

Returns the probability of failure.

<a id="reliability.ReliabilityBase.get_reliability_index"></a>

#### get_reliability_index() → float

The default implementation calls GetProbabilityOfFailure and computes beta from that. It should be called after finalize().

<a id="reliability.ReliabilityBase.get_rv_set"></a>

#### get_rv_set() → [RVSet](py_random_variables.md#py_random_variables.RVSet)

<a id="reliability.ReliabilityBase.get_safety_margins"></a>

#### get_safety_margins() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

<a id="reliability.ReliabilityBase.get_success_info_as_failure_event"></a>

#### get_success_info_as_failure_event() → [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type)

<a id="reliability.ReliabilityBase.has_several_iterations"></a>

#### has_several_iterations() → bool

Returns True if the algorithm produces several design sets.

<a id="reliability.ReliabilityBase.has_total_design_set"></a>

#### has_total_design_set() → bool

Returns True if the algorithm produces a total design set.

<a id="reliability.ReliabilityBase.initialize"></a>

#### initialize(arg2: [SettingsBase](#reliability.SettingsBase))

(re)sets the algorithm using the given definition data (“settings”). It must be called at least once before starting the iteration loop. It may be called several times during the lifetime of an algorithm object (then clears old data, reallocates and resets).

<a id="reliability.ReliabilityBase.is_converged"></a>

#### is_converged() → bool

Returns true if the iteration loop has converged. This method returns true if the algorithm has terminated and converged.

<a id="reliability.ReliabilityBase.is_terminated"></a>

#### is_terminated() → bool

Returns true if the iteration loop must be terminated. This method returns true if the algorithm has finished. If it either converged (or diverged or any other termination criterion is satisfied).

<a id="reliability.ReliabilityBase.restart"></a>

#### restart()

(re)sets the algorithm without touching the settings and maybe time-consuming pre-calculations. Initialize must be called at least once before.

<a id="reliability.ReliabilityBase.set_criteria_success_info"></a>

#### set_criteria_success_info(arg2: [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type))

Sets the success flags of the actually computed designs. It must be called before Appraise. The input argument tells the algorithm for which design point vector the external solver failed (or returned senseless results).

<a id="reliability.ReliabilityBase.set_inputs"></a>

#### set_inputs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

Sets the design point vectors of the actually computed designs. It must be called before Appraise.

<a id="reliability.ReliabilityBase.set_safety_margins"></a>

#### set_safety_margins(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

Sets the safety margin function(s) of the actually computed designs. It must be called before Appraise.

<a id="reliability.ReliabilityBase.set_success_info_as_failure_event"></a>

#### set_success_info_as_failure_event(arg2: [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type))

Sets the failure event flags of the actually computed designs without successful solver run. It must be called before Appraise. The input argument tells the algorithm for which design point vector the value success_info_[i]=false can be interpreted as a failure event.

<a id="reliability.ReliabilityMonteCarlo"></a>

## *class* reliability.ReliabilityMonteCarlo

This algorithm implements Monte Carlo sampling.
The algorithm can be controlled either by a predefined number of samples, or by a desired accuracy (c.o.v.) of the estimator of Pf (or of (1-Pf) if Pf>0.5). In the latter case, the number of required samples will be selected by the algorithm during the iteration. The convergence test is carried out after each request of n parallel designs. If the desired accuracy can not be reached within the maximum allowed number of samples, the algorithm terminates without success.
If any of the solver requests fails (success_info=false for a specific design) the algorithm either ignores this design, or it counts it as a failure event.

<a id="reliability.ReliabilityMonteCarlo.__init__"></a>

#### \_\_init_\_()

<a id="reliability.SettingsARSMDS"></a>

## *class* reliability.SettingsARSMDS

Reliability algorithm settings for ARSM with Directional Sampling.

<a id="reliability.SettingsARSMDS.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)

<a id="reliability.SettingsARSMDS.blow_up"></a>

#### *property* blow_up

<a id="reliability.SettingsARSMDS.num_directions"></a>

#### *property* num_directions

<a id="reliability.SettingsARSMDS.num_steps"></a>

#### *property* num_steps

<a id="reliability.SettingsARSMDS.num_supports_initial_step"></a>

#### *property* num_supports_initial_step

<a id="reliability.SettingsARSMDS.num_supports_per_step"></a>

#### *property* num_supports_per_step

<a id="reliability.SettingsAdaptiveSampling"></a>

## *class* reliability.SettingsAdaptiveSampling

Reliability algorithm settings for Adaptive Sampling.

<a id="reliability.SettingsAdaptiveSampling.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)

<a id="reliability.SettingsAdaptiveSampling.accuracy"></a>

#### *property* accuracy

<a id="reliability.SettingsAdaptiveSampling.automatic_sample_size"></a>

#### *property* automatic_sample_size

<a id="reliability.SettingsAdaptiveSampling.initial_scale_factor"></a>

#### *property* initial_scale_factor

<a id="reliability.SettingsAdaptiveSampling.num_designs_per_sample"></a>

#### *property* num_designs_per_sample

<a id="reliability.SettingsAdaptiveSampling.num_steps"></a>

#### *property* num_steps

<a id="reliability.SettingsAdaptiveSampling.num_total_samples_per_step"></a>

#### *property* num_total_samples_per_step

<a id="reliability.SettingsAdaptiveSampling.use_standard_density"></a>

#### *property* use_standard_density

<a id="reliability.SettingsAdaptiveSampling.write_weights"></a>

#### *property* write_weights

<a id="reliability.SettingsBase"></a>

## *class* reliability.SettingsBase

Base class that define the reliability problem.

<a id="reliability.SettingsBase.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="reliability.SettingsBase.check_settings"></a>

#### check_settings()

Check if settings are correct. Raises an error if they are not.

<a id="reliability.SettingsBase.num_estimated_function_calls"></a>

#### *property* num_estimated_function_calls

<a id="reliability.SettingsBase.num_inputs"></a>

#### *property* num_inputs

<a id="reliability.SettingsBase.num_safety_margins"></a>

#### *property* num_safety_margins

<a id="reliability.SettingsBase.rand_generator_seed"></a>

#### *property* rand_generator_seed

<a id="reliability.SettingsBase.rvset"></a>

#### *property* rvset

<a id="reliability.SettingsBase.set_defaults"></a>

#### set_defaults()

<a id="reliability.SettingsBase.write_histories"></a>

#### *property* write_histories

<a id="reliability.SettingsBase.write_input_importance"></a>

#### *property* write_input_importance

<a id="reliability.SettingsDirectionalSampling"></a>

## *class* reliability.SettingsDirectionalSampling

Reliability algorithm settings for directional sampling.

<a id="reliability.SettingsDirectionalSampling.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)

<a id="reliability.SettingsDirectionalSampling.linesearch_accuracy"></a>

#### *property* linesearch_accuracy

<a id="reliability.SettingsDirectionalSampling.linesearch_method"></a>

#### *property* linesearch_method

<a id="reliability.SettingsDirectionalSampling.linesearch_num_parallel_presample"></a>

#### *property* linesearch_num_parallel_presample

<a id="reliability.SettingsDirectionalSampling.num_directions"></a>

#### *property* num_directions

<a id="reliability.SettingsDirectionalSampling.num_parallel"></a>

#### *property* num_parallel

<a id="reliability.SettingsDirectionalSampling.search_direction_sampling_method"></a>

#### *property* search_direction_sampling_method

<a id="reliability.SettingsFORM"></a>

## *class* reliability.SettingsFORM

Reliability algorithm settings for Form/OptimizerNLPQLP

<a id="reliability.SettingsFORM.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)

<a id="reliability.SettingsFORM.max_search_runs"></a>

#### *property* max_search_runs

<a id="reliability.SettingsFORM.num_presamples"></a>

#### *property* num_presamples

<a id="reliability.SettingsFORM.optimizer_settings"></a>

#### *property* optimizer_settings

FORM’s NLPQLP settings. Cannot be copied.

<a id="reliability.SettingsISPUD"></a>

## *class* reliability.SettingsISPUD

Reliability algorithm settings for ISPUD( Importance sampling using the design point).

<a id="reliability.SettingsISPUD.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)

<a id="reliability.SettingsISPUD.accuracy"></a>

#### *property* accuracy

<a id="reliability.SettingsISPUD.automatic_sample_size"></a>

#### *property* automatic_sample_size

<a id="reliability.SettingsISPUD.form_settings"></a>

#### *property* form_settings

ISPUD’s FORM settings. Cannot be copied.

<a id="reliability.SettingsISPUD.num_designs_per_sample"></a>

#### *property* num_designs_per_sample

<a id="reliability.SettingsISPUD.num_total_samples"></a>

#### *property* num_total_samples

<a id="reliability.SettingsISPUD.use_median_sampling"></a>

#### *property* use_median_sampling

<a id="reliability.SettingsISPUD.use_start_designs"></a>

#### *property* use_start_designs

<a id="reliability.SettingsISPUD.vary_discrete_rvs"></a>

#### *property* vary_discrete_rvs

<a id="reliability.SettingsISPUD.write_weights"></a>

#### *property* write_weights

<a id="reliability.SettingsMonteCarlo"></a>

## *class* reliability.SettingsMonteCarlo

Reliability algorithm settings for Monte Carlo.

<a id="reliability.SettingsMonteCarlo.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)

<a id="reliability.SettingsMonteCarlo.accuracy"></a>

#### *property* accuracy

<a id="reliability.SettingsMonteCarlo.automatic_sample_size"></a>

#### *property* automatic_sample_size

<a id="reliability.SettingsMonteCarlo.min_num_samples"></a>

#### *property* min_num_samples

<a id="reliability.SettingsMonteCarlo.num_designs_per_sample"></a>

#### *property* num_designs_per_sample

<a id="reliability.SettingsMonteCarlo.num_total_samples"></a>

#### *property* num_total_samples

<a id="reliability.SettingsMonteCarlo.scaling_factor"></a>

#### *property* scaling_factor
