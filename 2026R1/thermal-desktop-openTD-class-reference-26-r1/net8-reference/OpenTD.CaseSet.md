# Class CaseSet

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Client-side representation of a Case Set in a TD instance.

```csharp
[MessagePackObject(true)]
public class CaseSet : CaseSetData, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
CaseSetData ← 
[CaseSet](OpenTD.CaseSet.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

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

### Rename\(string, string\)

Renames both this client-side instance and the TD entity.

```csharp
public void Rename(string newName, string newGroupName = "")
```

#### Parameters

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ReplaceFilenames\(string, string\)

```csharp
public void ReplaceFilenames(string oldSubstring, string newSubstring)
```

#### Parameters

`oldSubstring` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newSubstring` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Run\(bool\)

Attempts to run the case set from within its TD instance.
Set useOldMethod to true for a less-verbose run method that
may not be compatible with every case configuration.

```csharp
public void Run(bool useOldMethod = false)
```

#### Parameters

`useOldMethod` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)


