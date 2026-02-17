# <a id="OpenTD_ThermalLogicData"></a> Class ThermalLogicData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

User logic for one submodel. Can be used for thermal or fluid submodels.
(For fluid submodels, TD will write code to corresponding fluid headers,
e.g., any data in Variables0 will be written to the FLOGIC 0 header.)
Used in a Case Set.

```csharp
public class ThermalLogicData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ThermalLogicData](OpenTD.ThermalLogicData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_ThermalLogicData__ctor"></a> ThermalLogicData\(\)

```csharp
public ThermalLogicData()
```

## Properties

### <a id="OpenTD_ThermalLogicData_Array"></a> Array

```csharp
public string Array { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermalLogicData_Carray"></a> Carray

```csharp
public string Carray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermalLogicData_Conductor"></a> Conductor

```csharp
public string Conductor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermalLogicData_Control"></a> Control

```csharp
public string Control { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermalLogicData_Node"></a> Node

```csharp
public string Node { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermalLogicData_Output"></a> Output

```csharp
public string Output { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermalLogicData_Variables0"></a> Variables0

```csharp
public string Variables0 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermalLogicData_Variables1"></a> Variables1

```csharp
public string Variables1 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermalLogicData_Variables2"></a> Variables2

```csharp
public string Variables2 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[CaseSet](OpenTD.CaseSet.md)

