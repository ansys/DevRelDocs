

### *class* py_reliability_montecarlo.ReliabilityMonteCarlo

This algorithm implements Monte Carlo sampling.
The algorithm can be controlled either by a predefined number of samples, or by a desired accuracy (c.o.v.) of the estimator of Pf (or of (1-Pf) if Pf>0.5). In the latter case, the number of required samples will be selected by the algorithm during the iteration. The convergence test is carried out after each request of n parallel designs. If the desired accuracy can not be reached within the maximum allowed number of samples, the algorithm terminates without success.
If any of the solver requests fails (success_info=false for a specific design) the algorithm either ignores this design, or it counts it as a failure event.


#### \_\_init_\_()


### *class* py_reliability_montecarlo.SettingsMonteCarlo

Reliability algorithm settings for Monte Carlo.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)


#### *property* accuracy


#### *property* automatic_sample_size


#### *property* min_num_samples


#### *property* num_designs_per_sample


#### *property* num_total_samples


#### *property* scaling_factor
