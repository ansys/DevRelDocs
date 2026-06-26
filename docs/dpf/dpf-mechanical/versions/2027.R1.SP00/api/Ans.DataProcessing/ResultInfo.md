---
uid: Ans.DataProcessing.ResultInfo
---

# *class* ResultInfo()

Entity describing what the result files contains: the available results, the unit system, the analysis type...

**Example:**

```python
my_model = Ans.DataProcessing.Model(r"../.../file.rst")

my_result_info = my_model.ResultInfo

my_result_info.AnalysisType

my_result_info.PhysicsType

my_result_info.UnitSystem

results_list = my_result_info.Results

results_list[0].Name

results_list[0].Homogeneity
```

## Methods

## Properties

#### *property* AnalysisType: AnalysisType

*get*

#### *property* PhysicsType: PhysicsType

*get*

#### *property* UnitSystem: str

Property `UnitSystem` describes the unit system used with its principal units

*get*

#### *property* SolverVersion: str

Property `SolverVersion` describes the version (MAJOR.MINOR format) of the solver

*get*

#### *property* SolverDateTime: str

Property `SolverDateTime` gives the solver date/time information

*get*

#### *property* UserName: str

Property `UserName` describes the user name

*get*

#### *property* JobName: str

Property `JobName` describes the job name

*get*

#### *property* ProductName: str

Property `ProductName` describes product name

*get*

#### *property* MainTitle: str

Property `MainTitle` describes main title

*get*

#### *property* AnsysUnitSystemInt: int

Property `AnsysUnitSystemInt` int used by ansys for the unit system

*get*

#### *property* ResultCount: int

Property `ResultCount` number of available results

*get*

#### *property* Results: list

Property `Results` list of results available

*get*

#### *property* HasCyclic: bool

Property `HasCyclic` returns true if the result file has cyclic symmetry (or multistage)

*get*

#### *property* CyclicSupport: CyclicSupport

Property `CyclicSupport` returns the cyclic support if the result file has cyclic symmetry (or multistage).

The CyclicSupport contains information relevant for cyclic expansion

*get*

#### *property* CyclicSymmetryType: str

Property `HasCyclic` returns "single_stage", "multi_stage" or "not_cyclic"

*get*
