# RAFluentSemiResolvedCoupling

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAFluentSemiResolvedCoupling

Api Wrapper class for the Fluent Two-Way Semi Resolved coupling mode

**Methods:**

| [`GetConvergenceCriteria`](#generated.RAFluentSemiResolvedCoupling.GetConvergenceCriteria)()                              | Get the value of "Convergence Criteria".                         |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`GetCouplingFilesKept`](#generated.RAFluentSemiResolvedCoupling.GetCouplingFilesKept)()                                  | Get the value of "Coupling Files Kept".                          |
| [`GetFluentAdditionalArgs`](#generated.RAFluentSemiResolvedCoupling.GetFluentAdditionalArgs)()                            | Get the value of "Fluent Additional Args".                       |
| [`GetFluentExecutionMode`](#generated.RAFluentSemiResolvedCoupling.GetFluentExecutionMode)()                              | Get "Fluent Execution Mode" as a string.                         |
| [`GetFluentOutputFrequencyMultiplier`](#generated.RAFluentSemiResolvedCoupling.GetFluentOutputFrequencyMultiplier)()      | Get the value of "Fluent Output Frequency Multiplier".           |
| [`GetFluentReleases`](#generated.RAFluentSemiResolvedCoupling.GetFluentReleases)()                                        | Get a list of available Fluent releases.                         |
| [`GetFluentSolverProcesses`](#generated.RAFluentSemiResolvedCoupling.GetFluentSolverProcesses)()                          | Get the value of "Fluent Solver Processes".                      |
| [`GetFluentVersion`](#generated.RAFluentSemiResolvedCoupling.GetFluentVersion)()                                          | Get the value of "Version".                                      |
| [`GetIntegralCoefficient`](#generated.RAFluentSemiResolvedCoupling.GetIntegralCoefficient)()                              | Get the value of "Integral Coefficient".                         |
| [`GetProportionalCoefficient`](#generated.RAFluentSemiResolvedCoupling.GetProportionalCoefficient)()                      | Get the value of "Proportional Coefficient".                     |
| [`GetUseDatInitialization`](#generated.RAFluentSemiResolvedCoupling.GetUseDatInitialization)()                            | Get the value of "Use Dat Initialization".                       |
| [`GetValidFluentExecutionModeValues`](#generated.RAFluentSemiResolvedCoupling.GetValidFluentExecutionModeValues)()        | Get a list of all possible values for "Fluent Execution Mode".   |
| [`SetConvergenceCriteria`](#generated.RAFluentSemiResolvedCoupling.SetConvergenceCriteria)(value)                         | Set the value of "Convergence Criteria".                         |
| [`SetCouplingFilesKept`](#generated.RAFluentSemiResolvedCoupling.SetCouplingFilesKept)(value)                             | Set the value of "Coupling Files Kept".                          |
| [`SetFluentAdditionalArgs`](#generated.RAFluentSemiResolvedCoupling.SetFluentAdditionalArgs)(value)                       | Set the value of "Fluent Additional Args".                       |
| [`SetFluentExecutionMode`](#generated.RAFluentSemiResolvedCoupling.SetFluentExecutionMode)(value)                         | Set the value of "Fluent Execution Mode".                        |
| [`SetFluentOutputFrequencyMultiplier`](#generated.RAFluentSemiResolvedCoupling.SetFluentOutputFrequencyMultiplier)(value) | Set the value of "Fluent Output Frequency Multiplier".           |
| [`SetFluentSolverProcesses`](#generated.RAFluentSemiResolvedCoupling.SetFluentSolverProcesses)(value)                     | Set the value of "Fluent Solver Processes".                      |
| [`SetFluentVersion`](#generated.RAFluentSemiResolvedCoupling.SetFluentVersion)(fluent_version)                            | Set the value of "Version".                                      |
| [`SetIntegralCoefficient`](#generated.RAFluentSemiResolvedCoupling.SetIntegralCoefficient)(value)                         | Set the value of "Integral Coefficient".                         |
| [`SetPartIdIfValid`](#generated.RAFluentSemiResolvedCoupling.SetPartIdIfValid)()                                          | Set the process' part id (unused for now)                        |
| [`SetProportionalCoefficient`](#generated.RAFluentSemiResolvedCoupling.SetProportionalCoefficient)(value)                 | Set the value of "Proportional Coefficient".                     |
| [`SetUseDatInitialization`](#generated.RAFluentSemiResolvedCoupling.SetUseDatInitialization)(value)                       | Set the value of "Use Dat Initialization".                       |
| [`SetupStoreFiles`](#generated.RAFluentSemiResolvedCoupling.SetupStoreFiles)(cas_filename[, case_config])                 | Copies CAS file to Rocky's project folder and update Fluent info |

#### GetConvergenceCriteria()

Get the value of “Convergence Criteria”.

#### GetCouplingFilesKept()

Get the value of “Coupling Files Kept”.

#### GetFluentAdditionalArgs()

Get the value of “Fluent Additional Args”.

#### GetFluentExecutionMode()

Get “Fluent Execution Mode” as a string.

* **Returns:**
  The returned value will be one of [‘serial’, ‘local_parallel’, ‘distributed_parallel’].

#### GetFluentOutputFrequencyMultiplier()

Get the value of “Fluent Output Frequency Multiplier”.

#### GetFluentReleases()

Get a list of available Fluent releases.

* **Return type:**
  list(unicode)
* **Returns:**
  The list of available Fluent releases

#### GetFluentSolverProcesses()

Get the value of “Fluent Solver Processes”.

#### GetFluentVersion()

Get the value of “Version”.

* **Return type:**
  str

#### GetIntegralCoefficient()

Get the value of “Integral Coefficient”.

#### GetProportionalCoefficient()

Get the value of “Proportional Coefficient”.

#### GetUseDatInitialization()

Get the value of “Use Dat Initialization”.

#### GetValidFluentExecutionModeValues()

Get a list of all possible values for “Fluent Execution Mode”.

* **Returns:**
  The returned list is [‘serial’, ‘local_parallel’, ‘distributed_parallel’].

#### SetConvergenceCriteria(value: Union[str, float])

Set the value of “Convergence Criteria”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetCouplingFilesKept(value: Union[str, int])

Set the value of “Coupling Files Kept”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetFluentAdditionalArgs(value: str)

Set the value of “Fluent Additional Args”.

* **Parameters:**
  **value** – The value to set.

#### SetFluentExecutionMode(value: str)

Set the value of “Fluent Execution Mode”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘serial’, ‘local_parallel’, ‘distributed_parallel’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Fluent Execution Mode” option.

#### SetFluentOutputFrequencyMultiplier(value: Union[str, int])

Set the value of “Fluent Output Frequency Multiplier”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetFluentSolverProcesses(value: Union[str, int])

Set the value of “Fluent Solver Processes”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetFluentVersion(fluent_version: str)

Set the value of “Version”.

* **Parameters:**
  **fluent_version** (*str*) – The caption of the Fluent Version that can be seen in the  UI.

#### SetIntegralCoefficient(value: Union[str, float])

Set the value of “Integral Coefficient”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetPartIdIfValid()

Set the process’ part id (unused for now)

#### SetProportionalCoefficient(value: Union[str, float])

Set the value of “Proportional Coefficient”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetUseDatInitialization(value: bool)

Set the value of “Use Dat Initialization”.

* **Parameters:**
  **value** – The value to set.

#### SetupStoreFiles(cas_filename: str, case_config: Optional[FluentCaseConfig] = None)

Copies CAS file to Rocky’s project folder and update Fluent info
