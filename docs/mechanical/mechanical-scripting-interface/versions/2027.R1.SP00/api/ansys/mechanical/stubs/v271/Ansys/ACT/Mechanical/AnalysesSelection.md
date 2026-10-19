# `AnalysesSelection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.AnalysesSelection"></a>

#### *class* Ansys.ACT.Mechanical.AnalysesSelection

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A helper class to supplement the Analyses Selection feature (Model-Level Objects).
: It is used to get and set the status of a global object to the Model's Analyses.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [`GetActivationStatusForAnalysis`](#AnalysesSelection.GetActivationStatusForAnalysis)   | Returns the object's status for the given Analysis.                                                                   |
| [`SetActivationStatusForAnalysis`](#AnalysesSelection.SetActivationStatusForAnalysis)   | Sets the object as Active or Inactive (depending on the object if it can be activated/deactivated) for that Analysis. |
| [`SetObjectActiveForAnalysis`](#AnalysesSelection.SetObjectActiveForAnalysis)           | SetObjectActiveForAnalysis method.                                                                                    |

<a id="method-detail"></a>

## Method detail

<a id="AnalysesSelection.GetActivationStatusForAnalysis"></a>

### *classmethod* AnalysesSelection.GetActivationStatusForAnalysis(object_to_check: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), environment_to_check: Ansys.ACT.Interfaces.Analysis.IAnalysis) → [Ansys.Mechanical.DataModel.MechanicalEnums.GlobalObjectStatus](../../Mechanical/DataModel/MechanicalEnums/GlobalObjectStatus.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.GlobalObjectStatus)

### *classmethod* AnalysesSelection.GetActivationStatusForAnalysis(object_id: [int](https://docs.python.org/3/builtins/functions.html#int), environment_id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Mechanical.DataModel.MechanicalEnums.GlobalObjectStatus](../../Mechanical/DataModel/MechanicalEnums/GlobalObjectStatus.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.GlobalObjectStatus)

Returns the object's status for the given Analysis.

<!-- !! processed by numpydoc !! -->

<a id="AnalysesSelection.SetActivationStatusForAnalysis"></a>

### *classmethod* AnalysesSelection.SetActivationStatusForAnalysis(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), environment: Ansys.ACT.Interfaces.Analysis.IAnalysis, isActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [Ansys.Mechanical.DataModel.MechanicalEnums.GlobalObjectStatus](../../Mechanical/DataModel/MechanicalEnums/GlobalObjectStatus.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.GlobalObjectStatus)

```text
Sets the object as Active or Inactive (depending on the object if it can be activated/deactivated) for that Analysis.
    The return value indicates if the object is activated, deactivated, or does not apply to that Analysis.
```

<!-- !! processed by numpydoc !! -->

<a id="AnalysesSelection.SetObjectActiveForAnalysis"></a>

### *classmethod* AnalysesSelection.SetObjectActiveForAnalysis(object_id: [int](https://docs.python.org/3/builtins/functions.html#int), environment_id: [int](https://docs.python.org/3/builtins/functions.html#int), isActive: [bool](https://docs.python.org/3/builtins/functions.html#bool), bCleanEnvt: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → Ansys.Common.Interop.DSObjectTypes.GlobalObjectState

SetObjectActiveForAnalysis method.

<!-- !! processed by numpydoc !! -->

