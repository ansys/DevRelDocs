# py_reliability_montecarlo

<a id="py_reliability_montecarlo.ReliabilityMonteCarlo"></a>

## *class* py_reliability_montecarlo.ReliabilityMonteCarlo

This algorithm implements Monte Carlo sampling.
The algorithm can be controlled either by a predefined number of samples, or by a desired accuracy (c.o.v.) of the estimator of Pf (or of (1-Pf) if Pf>0.5). In the latter case, the number of required samples will be selected by the algorithm during the iteration. The convergence test is carried out after each request of n parallel designs. If the desired accuracy can not be reached within the maximum allowed number of samples, the algorithm terminates without success.
If any of the solver requests fails (success_info=false for a specific design) the algorithm either ignores this design, or it counts it as a failure event.

<a id="py_reliability_montecarlo.ReliabilityMonteCarlo.__init__"></a>

#### \_\_init_\_()

<a id="py_reliability_montecarlo.SettingsMonteCarlo"></a>

## *class* py_reliability_montecarlo.SettingsMonteCarlo

Reliability algorithm settings for Monte Carlo.

<a id="py_reliability_montecarlo.SettingsMonteCarlo.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [RVSet](py_random_variables.md#py_random_variables.RVSet), arg3: int)

<a id="py_reliability_montecarlo.SettingsMonteCarlo.accuracy"></a>

#### *property* accuracy

<a id="py_reliability_montecarlo.SettingsMonteCarlo.automatic_sample_size"></a>

#### *property* automatic_sample_size

<a id="py_reliability_montecarlo.SettingsMonteCarlo.min_num_samples"></a>

#### *property* min_num_samples

<a id="py_reliability_montecarlo.SettingsMonteCarlo.num_designs_per_sample"></a>

#### *property* num_designs_per_sample

<a id="py_reliability_montecarlo.SettingsMonteCarlo.num_total_samples"></a>

#### *property* num_total_samples

<a id="py_reliability_montecarlo.SettingsMonteCarlo.scaling_factor"></a>

#### *property* scaling_factor
