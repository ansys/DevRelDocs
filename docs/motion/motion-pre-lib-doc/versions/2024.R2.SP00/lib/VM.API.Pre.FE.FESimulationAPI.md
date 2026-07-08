# Class FESimulationAPI

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs to convert shell to solid.

```csharp
public static class FESimulationAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FESimulationAPI](VM.API.Pre.FE.FESimulationAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### ExportDFGForComponentEigenvalue\(IDocument, Obj, string\)

Export DFG for component eigenvalue.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static void ExportDFGForComponentEigenvalue(this IDocument document, Obj target, string resultPath = null)
```

#### Parameters

`document` IDocument

The document to export dfg for component eigenvalue.

`target` Obj

The target to export dfg for component eigenvalue.

`resultPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The result path to export dfg for component eigenvalue.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'target' arguments are empty.

### ExportDFSForComponentEigenvalue\(IDocument, Obj, string\)

Export DFS for component eigenvalue.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static void ExportDFSForComponentEigenvalue(this IDocument document, Obj target, string resultPath = null)
```

#### Parameters

`document` IDocument

The document to export dfs for component eigenvalue.

`target` Obj

The target to export dfs for component eigenvalue.

`resultPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The result path to export dfs for component eigenvalue.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'target' arguments are empty.

### ExportDFSXMLForComponentEigenvalue\(IDocument, Obj, string\)

Export XML for component eigenvalue.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static void ExportDFSXMLForComponentEigenvalue(this IDocument document, Obj target, string resultPath = null)
```

#### Parameters

`document` IDocument

The document to export xml for component eigenvalue.

`target` Obj

The target to export xml for component eigenvalue.

`resultPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The result path to export xml for component eigenvalue.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'target' arguments are empty.

### RunSimulationForComponentEigenvalue\(IDocument, Obj, string, SimulationParameter\)

Run simulation for component eigenvalue.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static void RunSimulationForComponentEigenvalue(this IDocument document, Obj target, string resultPath = null, SimulationRun.SimulationParameter simulationParameter = null)
```

#### Parameters

`document` IDocument

The document to simulate for component eigenvalue.

`target` Obj

The target to simulate for component eigenvalue.

`resultPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The result path to simulate for component eigenvalue.

`simulationParameter` SimulationRun.SimulationParameter

The simulation parameter.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'target' arguments are empty.


