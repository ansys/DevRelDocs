# <a id="OpenTD_Symbol"></a> Class Symbol

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Client-side representation of a Symbol in a TD instance.

```csharp
public class Symbol : SymbolData, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[UniqueNameObject](OpenTD.UniqueNameObject.md) ← 
SymbolData ← 
[Symbol](OpenTD.Symbol.md)

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
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="OpenTD_Symbol_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_Symbol_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### <a id="OpenTD_Symbol_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

