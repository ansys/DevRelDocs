# Python Modules

## Modules

You can display detailed help for each module by using the `help` command with the module as parameter after importing it into the Python console. For example:
```
import PyOptimizerBase 
import PyNOA 
help(PyNOA)
```
A list of available classes and functions is displayed in the Python console.

### Data types

|Python Module | Description |
| ------------ | ----------- |
| id | Provides helper classes to access objects in optiSLang |
| py_algorithm_info | Provides information about algorithms used in optiSLang Monitoring Databases (omdb). |
| py_omdb | Provides functions to handle [omdb files]( https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_post_monitoring_database_file.html). |
| py_os_criterion | Defines [criteria]( https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_opti_specific.html) as objectives, constraints, or limit state functions. |
| py_os_design | Provides functions to modify or export [designs](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_opti_specific.html) or to extract design information. |
| py_os_parameter | Provides functions to create a [parameter manager](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_opti_specific.html). |
| py_random_variables | Provides types to define random variables. |
| py_transform | Provides transformation functions. |
| pyvariant | Uses the [Variant]( https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_compound.html) data type. |
| stdcpp_python_export | Uses some [general data types]( https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_data_types.html) (vectors, lists, or sets of strings, doubles, or ints). |

### Kernel (imported by default)

|Python Module | Description |
| ------------ | ----------- |
| _optiSLang_Actors | Provides available optiSLang actors. |
| _optiSLang_Kernel | Provides systems and functions to create simulation chains. |

### Postprocessing

|Python Module | Description |
| ------------ | ----------- |
| py_monitoring_gui | Contains classes to control visuals in [postprocessing]( https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_postprocessing.html). |
| py_monitoring_kernel | Provides functions to handle monitoring data. |
| py_osl3binfile | Provides methods to write a binfile using parameter manager and designs. | 

### Algorithms

|Python Module | Description |
| ------------ | ----------- |
| dynardo_py_algorithms | Defiines algorithm enums (DOETYPES, DeterministicType, ParameterType, RandomVariableKind, RandomVariableType) and types (DeterministicTypeVec, bitset_type, matrix_type, vector_type).|
| os_doe_py_export | Provides methods for Design of Experiments (DOE). | 
| py_doe_settings | Defines settings for DOE caclulations. | 
| PyARSM | Provides settings and methods for the Approximation of Response Surface Method. | 
| PyMemetic | Provides settings and methods for the Memetic algorithm. | 
| PyNLPQLP | Provides settings and functions for the NLPQL algorithm. | 
| PyNOA | Provides settings and methods for nature-inspired optimization algorithms. | 
| PyOptimizerBase | Acts as the base class for optimization algorithms to set common objects as bounds and start designs. | 
| PySimplex | Provides settings and methods for the Simplex algorithm. | 
| reliability | Provides settings and methods for reliability algorithms. | 

### Project

|Python Module | Description |
| ------------ | ----------- |
| py_project | Provides functions to modify or to extract project information. | 

## Actors

You can display detailed help for all actors by using the `help(actors)` command in the Python console. You can display detailed help for a single actor by using the `help(actors.actorname)` command. For example:
```
help(actors.SensitivityActor)
```
The actor class is the base class for all of the following nodes and systems. You can adding input and output slots here and can use Set and Get functionality for special properties for each derived actor.

### Enums

- UpdateBinFileInterval - Defines when to write a binfile. 
- AT_THE_END = _optiSLang_Actors.UpdateBinFileInterval.AT_THE_END
- EVERY_DESIGN = _optiSLang_Actors.UpdateBinFileInterval.EVERY_DESIGN
- EVERY_ITERATION = _optiSLang_Actors.UpdateBinFileInterval.EVERY_ITERATION
- NEVER = _optiSLang_Actors.UpdateBinFileInterval.NEVER 

### Nodes

- [CalculatorSetActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_calculator.html) - Define outputs using mathematical expressions. 
- DistinctWorkingDirActor - The following nodes are derived from DistinctWorkingDirActor.
  - [IntegrationBaseActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_integrations_overview.html) - Adding parameter can be done in this class. Special properties can be set within the derived actor classes.
  - AnsysWorkbenchActor - Methods to add parameter, responses, input and output slots and to establish a connection to Ansys.
  - [ETKActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_output_nodes.html) and derived classes [ETKTextOutputActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_text_output.html) and [ETK ABAQUS](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_etk_abaqus.html)
  - [ProcessActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_overview_process.html) and derived classes [BashScriptActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_bash_script.html), [PerlScriptActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_perl_script.html), [PythonScriptActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_python_script.html), and [AbaqusProcessActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_abaqus_process.html).
  - [MatlabActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_mat_octave_sim.html)
  - [MopsolverActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_mop.html)
  - [Python2Actor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_python_integration.html)
  - [TextInputActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_text_input.html)
- [MOPActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_mop.html) 
- [PathActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_overview_types.html) 
- [PostprocessingActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_node_postprocessing.html) 
- [VariableActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_overview_types.html)
- [VariantMonitoringActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_overview_monitoring.html)

### Sequencing systems

For a detailed list of available methods see `help(SequencingSystem)`.
- [ParametricSystemActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_parametric_system.html) - This actor class is the base of all algorithm actors (systems). Parameter, criteria, results, start designs, and designs are managed here. 
- AlgorithmSystemActor - This class offers functionality for binfile writing. Algorithm settings can be modified using the set functionality of specific algorithm actors. 
  - [OptimizationBaseActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_opti_strategies.html)
    - [ARSMActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_arsm.html)
    - [MemeticActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v241/en/opti_beta/opti_beta_memetic.html)
    - [NLPQLPActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_nlpql.html) 
    - [NOAActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_nature_inspired.html) (EAActor, PSOActor, SDIActor)
    - [SimplexActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_simplex_method.html) 
  - SamplingActor 
    - [RobustnessActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_robustness_analysis.html)
    - [SensitivityActor](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/opti_ug/opti_ug_sensitivity_analysis.html)


