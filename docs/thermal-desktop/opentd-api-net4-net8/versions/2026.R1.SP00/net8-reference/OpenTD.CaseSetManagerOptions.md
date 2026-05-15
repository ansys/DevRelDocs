# Class CaseSetManagerOptions

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Client-side representation of Case Set Manager options in a TD instance.

```csharp
[MessagePackObject(true)]
public class CaseSetManagerOptions : TdConnected, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
[CaseSetManagerOptions](OpenTD.CaseSetManagerOptions.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CaseSetManagerOptions\(\)

```csharp
public CaseSetManagerOptions()
```

### CaseSetManagerOptions\(ThermalDesktop\)

```csharp
public CaseSetManagerOptions(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### BatchControl

```csharp
public BatchControl BatchControl { get; set; }
```

#### Property Value

 [BatchControl](OpenTD.BatchControl.md)

### ExpectedDupNodes

```csharp
public List<string> ExpectedDupNodes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### LowerPriority

```csharp
public bool LowerPriority { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetSymbolsUponCompletion

```csharp
public int ResetSymbolsUponCompletion { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RunBatch

```csharp
public int RunBatch { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SaveDwg

```csharp
public bool SaveDwg { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShowTextScreenDuringRun

```csharp
public bool ShowTextScreenDuringRun { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### duplicateNodes

```csharp
public CaseSetManagerOptions.DuplicateNodes duplicateNodes { get; set; }
```

#### Property Value

 [CaseSetManagerOptions](OpenTD.CaseSetManagerOptions.md).[DuplicateNodes](OpenTD.CaseSetManagerOptions.DuplicateNodes.md)

## Methods

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)


