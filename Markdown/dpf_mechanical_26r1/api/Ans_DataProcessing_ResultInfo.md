---
uid: Ans.DataProcessing.ResultInfo
title: ResultInfo
---

# ResultInfo Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Entity describing what the result files contains: the available results, the unit system, the analysis type...

ResultInfo(pResultInfo: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new ResultInfo(IntPtr pResultInfo)
```

**Parameters:**

- `pResultInfo` (*IntPtr*)

## Methods

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### AnalysisType

```csharp
AnalysisType AnalysisType { get; }
```

#### PhysicsType

```csharp
PhysicsType PhysicsType { get; }
```

#### UnitSystem

```csharp
String UnitSystem { get; }
```

#### SolverVersion

```csharp
String SolverVersion { get; }
```

#### SolverDateTime

```csharp
String SolverDateTime { get; }
```

#### UserName

```csharp
String UserName { get; }
```

#### JobName

```csharp
String JobName { get; }
```

#### ProductName

```csharp
String ProductName { get; }
```

#### MainTitle

```csharp
String MainTitle { get; }
```

#### AnsysUnitSystemInt

```csharp
Int32 AnsysUnitSystemInt { get; }
```

#### ResultCount

```csharp
Int32 ResultCount { get; }
```

#### Results

```csharp
IList`1 Results { get; }
```

#### HasCyclic

```csharp
Boolean HasCyclic { get; }
```

#### CyclicSupport

```csharp
CyclicSupport CyclicSupport { get; }
```

#### CyclicSymmetryType

```csharp
String CyclicSymmetryType { get; }
```
