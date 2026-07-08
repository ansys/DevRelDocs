# RAFluentSemiResolvedCoupling

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAFluentSemiResolvedCoupling"></a>

### *class* RAFluentSemiResolvedCoupling

PrePost Scripting wrapper class for the Fluent Two-Way Semi Resolved coupling mode

**Methods:**

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`GetCouplingFilesKept`](#generated.RAFluentSemiResolvedCoupling.GetCouplingFilesKept)()                                  | Get the value of "Coupling Files Kept".                          |
| [`GetFluentAdditionalArgs`](#generated.RAFluentSemiResolvedCoupling.GetFluentAdditionalArgs)()                            | Get the value of "Fluent Additional Args".                       |
| [`GetFluentExecutionMode`](#generated.RAFluentSemiResolvedCoupling.GetFluentExecutionMode)()                              | Get "Fluent Execution Mode" as a string.                         |
| [`GetFluentOutputFrequencyMultiplier`](#generated.RAFluentSemiResolvedCoupling.GetFluentOutputFrequencyMultiplier)()      | Get the value of "Fluent Output Frequency Multiplier".           |
| [`GetFluentReleases`](#generated.RAFluentSemiResolvedCoupling.GetFluentReleases)()                                        | Get a list of available Fluent releases.                         |
| [`GetFluentSolverProcesses`](#generated.RAFluentSemiResolvedCoupling.GetFluentSolverProcesses)()                          | Get the value of "Fluent Solver Processes".                      |
| [`GetFluentVersion`](#generated.RAFluentSemiResolvedCoupling.GetFluentVersion)()                                          | Get the value of "Version".                                      |
| [`GetUseDatInitialization`](#generated.RAFluentSemiResolvedCoupling.GetUseDatInitialization)()                            | Get the value of "Use Dat Initialization".                       |
| [`GetValidFluentExecutionModeValues`](#generated.RAFluentSemiResolvedCoupling.GetValidFluentExecutionModeValues)()        | Get a list of all possible values for "Fluent Execution Mode".   |
| [`SetCouplingFilesKept`](#generated.RAFluentSemiResolvedCoupling.SetCouplingFilesKept)(value)                             | Set the value of "Coupling Files Kept".                          |
| [`SetFluentAdditionalArgs`](#generated.RAFluentSemiResolvedCoupling.SetFluentAdditionalArgs)(value)                       | Set the value of "Fluent Additional Args".                       |
| [`SetFluentExecutionMode`](#generated.RAFluentSemiResolvedCoupling.SetFluentExecutionMode)(value)                         | Set the value of "Fluent Execution Mode".                        |
| [`SetFluentOutputFrequencyMultiplier`](#generated.RAFluentSemiResolvedCoupling.SetFluentOutputFrequencyMultiplier)(value) | Set the value of "Fluent Output Frequency Multiplier".           |
| [`SetFluentSolverProcesses`](#generated.RAFluentSemiResolvedCoupling.SetFluentSolverProcesses)(value)                     | Set the value of "Fluent Solver Processes".                      |
| [`SetFluentVersion`](#generated.RAFluentSemiResolvedCoupling.SetFluentVersion)(fluent_version)                            | Set the value of "Version".                                      |
| [`SetPartIdIfValid`](#generated.RAFluentSemiResolvedCoupling.SetPartIdIfValid)()                                          | Set the process' part id (unused for now)                        |
| [`SetUseDatInitialization`](#generated.RAFluentSemiResolvedCoupling.SetUseDatInitialization)(value)                       | Set the value of "Use Dat Initialization".                       |
| [`SetupStoreFiles`](#generated.RAFluentSemiResolvedCoupling.SetupStoreFiles)(cas_filename[, case_config])                 | Copies CAS file to Rocky's project folder and update Fluent info |

<a id="generated.RAFluentSemiResolvedCoupling.GetCouplingFilesKept"></a>

#### GetCouplingFilesKept()

Get the value of “Coupling Files Kept”.

<a id="generated.RAFluentSemiResolvedCoupling.GetFluentAdditionalArgs"></a>

#### GetFluentAdditionalArgs()

Get the value of “Fluent Additional Args”.

<a id="generated.RAFluentSemiResolvedCoupling.GetFluentExecutionMode"></a>

#### GetFluentExecutionMode()

Get “Fluent Execution Mode” as a string.

* **Returns:**
  The returned value will be one of [‘serial’, ‘local_parallel’, ‘distributed_parallel’].

<a id="generated.RAFluentSemiResolvedCoupling.GetFluentOutputFrequencyMultiplier"></a>

#### GetFluentOutputFrequencyMultiplier()

Get the value of “Fluent Output Frequency Multiplier”.

<a id="generated.RAFluentSemiResolvedCoupling.GetFluentReleases"></a>

#### GetFluentReleases()

Get a list of available Fluent releases.

* **Return type:**
  list(unicode)
* **Returns:**
  The list of available Fluent releases

<a id="generated.RAFluentSemiResolvedCoupling.GetFluentSolverProcesses"></a>

#### GetFluentSolverProcesses()

Get the value of “Fluent Solver Processes”.

<a id="generated.RAFluentSemiResolvedCoupling.GetFluentVersion"></a>

#### GetFluentVersion()

Get the value of “Version”.

* **Return type:**
  str

<a id="generated.RAFluentSemiResolvedCoupling.GetUseDatInitialization"></a>

#### GetUseDatInitialization()

Get the value of “Use Dat Initialization”.

<a id="generated.RAFluentSemiResolvedCoupling.GetValidFluentExecutionModeValues"></a>

#### GetValidFluentExecutionModeValues()

Get a list of all possible values for “Fluent Execution Mode”.

* **Returns:**
  The returned list is [‘serial’, ‘local_parallel’, ‘distributed_parallel’].

<a id="generated.RAFluentSemiResolvedCoupling.SetCouplingFilesKept"></a>

#### SetCouplingFilesKept(value: Union[str, int])

Set the value of “Coupling Files Kept”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentSemiResolvedCoupling.SetFluentAdditionalArgs"></a>

#### SetFluentAdditionalArgs(value: str)

Set the value of “Fluent Additional Args”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluentSemiResolvedCoupling.SetFluentExecutionMode"></a>

#### SetFluentExecutionMode(value: str)

Set the value of “Fluent Execution Mode”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘serial’, ‘local_parallel’, ‘distributed_parallel’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Fluent Execution Mode” option.

<a id="generated.RAFluentSemiResolvedCoupling.SetFluentOutputFrequencyMultiplier"></a>

#### SetFluentOutputFrequencyMultiplier(value: Union[str, int])

Set the value of “Fluent Output Frequency Multiplier”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentSemiResolvedCoupling.SetFluentSolverProcesses"></a>

#### SetFluentSolverProcesses(value: Union[str, int])

Set the value of “Fluent Solver Processes”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentSemiResolvedCoupling.SetFluentVersion"></a>

#### SetFluentVersion(fluent_version: str)

Set the value of “Version”.

* **Parameters:**
  **fluent_version** (*str*) – The caption of the Fluent Version that can be seen in the  UI.

<a id="generated.RAFluentSemiResolvedCoupling.SetPartIdIfValid"></a>

#### SetPartIdIfValid()

Set the process’ part id (unused for now)

<a id="generated.RAFluentSemiResolvedCoupling.SetUseDatInitialization"></a>

#### SetUseDatInitialization(value: bool)

Set the value of “Use Dat Initialization”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluentSemiResolvedCoupling.SetupStoreFiles"></a>

#### SetupStoreFiles(cas_filename: str, case_config: Optional[FluentCaseConfig] = None)

Copies CAS file to Rocky’s project folder and update Fluent info
