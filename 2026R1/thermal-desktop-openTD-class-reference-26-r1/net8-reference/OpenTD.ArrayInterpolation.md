# Class ArrayInterpolation

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Client-side representation of an Array Interpolatiopn Logic Object.

```csharp
[MessagePackObject(true)]
public class ArrayInterpolation : RcArrayInterpolationData, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[LogicObject](OpenTD.LogicObject.md) ← 
RcArrayInterpolationData ← 
[ArrayInterpolation](OpenTD.ArrayInterpolation.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[LogicObject.Update\(\)](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_Update), 
[LogicObject.UpdateFromTD\(\)](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_UpdateFromTD), 
[LogicObject.CreateIn\(ThermalDesktop\)](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[LogicObject.Handle](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_Handle), 
[LogicObject.Comment](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_Comment), 
[LogicObject.Submodel](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_Submodel), 
[LogicObject.EnabledExp](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_EnabledExp), 
[LogicObject.GroupName](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_GroupName), 
[LogicObject.Type](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_Type), 
[LogicObject.ToString\(\)](OpenTD.LogicObject.md\#OpenTD\_LogicObject\_ToString), 
[OpenTDObject.SetFrom\(OpenTDObject\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_SetFrom\_OpenTD\_OpenTDObject\_), 
[OpenTDObject.Update\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_Update), 
[OpenTDObject.UpdateFromTD\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateFromTD), 
[OpenTDObject.UpdateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.CreateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.TdProxy](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_TdProxy), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

## See Also

ITdDerived


