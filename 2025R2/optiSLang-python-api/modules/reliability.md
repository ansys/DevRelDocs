

### *class* reliability.LineSearchMethod

**Enumeration**


#### Bisection *= reliability.LineSearchMethod.Bisection*


#### RegulaFalsi *= reliability.LineSearchMethod.RegulaFalsi*


### *class* reliability.ReliabilityAdaptiveSampling

Adaptive sampling implements importance sampling using multiple adaptation steps. The first step scales all designs by an initial blow up factor in standard-normal space. The objective of the scaling is to obtain a reasonable number of samples in the failure domain during the 1st step. Hence, the blow up factor should be chosen according to the failure probability pf the problem. While generating the samples one ignores samples which are further away than 

```
max_allowed_sigma_
```

 from the origin in standard normal space. The reason is that importance weights become inaccurate for samples being that far away.
After sampling the user-defined number of samples in a single step, the median and covariance matrix of the sampling density function of the next step will be determined according to the statistics of the samples lying in the failure domain. A modified eigenvalue decomposition of the covariance matrix ensures positive definiteness. Furthermore, if the C.O.V. of Pf is relatively large, the covariance matrix is scaled such that it is closer to the identity matrix.
The user defines the number of steps and the number of samples per step. If any of the solver calls fails, the corresponding sample is either ignored or (if one tells the algorithm to interpret the failed run as a failure event) is accounted to the failure domain.


#### \_\_init_\_()


#### get_current_step() → int

Returns the current iteration step number.


#### get_current_weights() → [vector_type](dynardo_py_algorithms.md#dynardo_py_algorithms.vector_type)

Returns the current importance sampling weights.


### *class* reliability.ReliabilityBase


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### adapt()

Creates internally the next set of designs. This is called within the loop after Appraise and prepares the next call of get_next_designs.


#### appraise()

Performs a search step by the internal reliability algorithm. This is called after simulation and setting results and used inputs. The method reads all given information (and eventually performs one internal search step). After calling this method it should be possible to check the state of the iteration by is_terminated().


#### can_provide_probability_of_failure() → bool

Returns true when the probability of failure can be calculated.


#### finalize()

Finalizes the iteration. Does whatever is neccessary to finalize - delete pointers, collect data…


#### get_criteria_success_info() → [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type)


#### get_estimators_std_dev() → float

Returns the standard deviation of the estimator of the probability of failure. It should be called after finalize(). If this quantity does not make sense (i.e. in case of FORM), it returns zero.


#### get_inputs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_iteration_name() → str

Returns the name of the current iteration.


#### get_next_design_ids() → [uintVec](stdcpp_python_export.md#stdcpp_python_export.uintVec)

Returns the ids for the next set of design vectors for which responses must be computed. This method is called at the begin of the iteration loop. It returns a reference to the internally stored set of infos of awaiting designs.


#### get_next_design_infos() → [uintVec](stdcpp_python_export.md#stdcpp_python_export.uintVec)

Returns some information for the next set of design vectors for which responses must be computed. This method is called at the begin of the iteration loop. It returns a reference to the internally stored set of infos of awaiting designs.


#### get_next_designs() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)

Returns the next set of design vectors for which responses must be computed. This method is called at the begin of the iteration loop. It returns a reference to the internally stored set of awaiting designs.


#### get_num_awaiting_designs() → int


#### get_num_computed_samples() → int


#### get_num_function_calls() → int


#### get_num_inputs() → int


#### get_num_safety_margins() → int


#### get_num_successfully_computed_samples() → int


#### get_probability_of_failure() → float

Returns the probability of failure.


#### get_reliability_index() → float

The default implementation calls GetProbabilityOfFailure and computes beta from that. It should be called after finalize().


#### get_rv_set() → [RVSet](py_random_variables.md#py_random_variables.RVSet)


#### get_safety_margins() → [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type)


#### get_success_info_as_failure_event() → [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type)


#### has_several_iterations() → bool

Returns True if the algorithm produces several design sets.


#### has_total_design_set() → bool

Returns True if the algorithm produces a total design set.


#### initialize(arg2: [SettingsBase](#reliability.SettingsBase))

(re)sets the algorithm using the given definition data (“settings”). It must be called at least once before starting the iteration loop. It may be called several times during the lifetime of an algorithm object (then clears old data, reallocates and resets).


#### is_converged() → bool

Returns true if the iteration loop has converged. This method returns true if the algorithm has terminated and converged.


#### is_terminated() → bool

Returns true if the iteration loop must be terminated. This method returns true if the algorithm has finished. If it either converged (or diverged or any other termination criterion is satisfied).


#### restart()

(re)sets the algorithm without touching the settings and maybe time-consuming pre-calculations. Initialize must be called at least once before.


#### set_criteria_success_info(arg2: [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type))

Sets the success flags of the actually computed designs. It must be called before Appraise. The input argument tells the algorithm for which design point vector the external solver failed (or returned senseless results).


#### set_inputs(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

Sets the design point vectors of the actually computed designs. It must be called before Appraise.


#### set_safety_margins(arg2: [matrix_type](dynardo_py_algorithms.md#dynardo_py_algorithms.matrix_type))

Sets the safety margin function(s) of the actually computed designs. It must be called before Appraise.


#### set_success_info_as_failure_event(arg2: [bitset_type](dynardo_py_algorithms.md#dynardo_py_algorithms.bitset_type))

Sets the failure event flags of the actually computed designs without successful solver run. It must be called before Appraise. The input argument tells the algorithm for which design point vector the value success_info_[i]=false can be interpreted as a failure event.


### *class* reliability.ReliabilityMonteCarlo

This algorithm implements Monte Carlo sampling.
The algorithm can be controlled either by a predefined number of samples, or by a desired accuracy (c.o.v.) of the estimator of Pf (or of (1-Pf) if Pf>0.5). In the latter case, the number of required samples will be selected by the algorithm during the iteration. The convergence test is carried out after each request of n parallel designs. If the desired accuracy can not be reached within the maximum allowed number of samples, the algorithm terminates without success.
If any of the solver requests fails (success_info=false for a specific design) the algorithm either ignores this design, or it counts it as a failure event.


#### \_\_init_\_()


### *class* reliability.SettingsARSMDS

Reliability algorithm settings for ARSM with Directional Sampling.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)


#### *property* blow_up


#### *property* num_directions


#### *property* num_steps


#### *property* num_supports_initial_step


#### *property* num_supports_per_step


### *class* reliability.SettingsAdaptiveSampling

Reliability algorithm settings for Adaptive Sampling.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)


#### *property* accuracy


#### *property* automatic_sample_size


#### *property* initial_scale_factor


#### *property* num_designs_per_sample


#### *property* num_steps


#### *property* num_total_samples_per_step


#### *property* use_standard_density


#### *property* write_weights


### *class* reliability.SettingsBase

Base class that define the reliability problem.


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### check_settings()

Check if settings are correct. Raises an error if they are not.


#### *property* num_estimated_function_calls


#### *property* num_inputs


#### *property* num_safety_margins


#### *property* rand_generator_seed


#### *property* rvset


#### set_defaults()


#### *property* write_histories


#### *property* write_input_importance


### *class* reliability.SettingsDirectionalSampling

Reliability algorithm settings for directional sampling.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)


#### *property* linesearch_accuracy


#### *property* linesearch_method


#### *property* linesearch_num_parallel_presample


#### *property* num_directions


#### *property* num_parallel


#### *property* search_direction_sampling_method


### *class* reliability.SettingsFORM

Reliability algorithm settings for Form/OptimizerNLPQLP


#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)


#### *property* max_search_runs


#### *property* num_presamples


#### *property* optimizer_settings

FORM’s NLPQLP settings. Cannot be copied.


### *class* reliability.SettingsISPUD

Reliability algorithm settings for ISPUD( Importance sampling using the design point).


#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)


#### *property* accuracy


#### *property* automatic_sample_size


#### *property* form_settings

ISPUD’s FORM settings. Cannot be copied.


#### *property* num_designs_per_sample


#### *property* num_total_samples


#### *property* use_median_sampling


#### *property* use_start_designs


#### *property* vary_discrete_rvs


#### *property* write_weights


### *class* reliability.SettingsMonteCarlo

Reliability algorithm settings for Monte Carlo.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)


#### *property* accuracy


#### *property* automatic_sample_size


#### *property* min_num_samples


#### *property* num_designs_per_sample


#### *property* num_total_samples


#### *property* scaling_factor
