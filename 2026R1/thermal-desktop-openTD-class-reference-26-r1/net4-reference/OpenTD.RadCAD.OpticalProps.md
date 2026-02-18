# <a id="OpenTD_RadCAD_OpticalProps"></a> Class OpticalProps

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of an optical property in a TD instance.

```csharp
public class OpticalProps : OpticalPropsData, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[UniqueNameObject](OpenTD.UniqueNameObject.md) ← 
OpticalPropsData ← 
[OpticalProps](OpenTD.RadCAD.OpticalProps.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[UniqueNameObject.Name](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_Name), 
[UniqueNameObject.Rename\(string\)](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_Rename\_System\_String\_), 
[UniqueNameObject.ToString\(\)](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_ToString), 
[UniqueNameObject.ModifyName\(string\)](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_ModifyName\_System\_String\_), 
[UniqueNameObject.ProxyRename\(string, string\)](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_ProxyRename\_System\_String\_System\_String\_), 
[UniqueNameObject.\_n](OpenTD.UniqueNameObject.md\#OpenTD\_UniqueNameObject\_\_n), 
[OpenTDObject.SetFrom\(OpenTDObject\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_SetFrom\_OpenTD\_OpenTDObject\_), 
[OpenTDObject.Update\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_Update), 
[OpenTDObject.UpdateFromTD\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateFromTD), 
[OpenTDObject.UpdateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.CreateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.TdProxy](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_TdProxy), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

### <a id="OpenTD_RadCAD_OpticalProps_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_RadCAD_OpticalProps_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### <a id="OpenTD_RadCAD_OpticalProps_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

