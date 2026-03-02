# Class CaseSetManager

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use the CaseSetManager to run cases in batch mode, or to perform
other operations available in TD's Case Set Manager.

```csharp
public class CaseSetManager : TdConnected, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
[CaseSetManager](OpenTD.CaseSetManager.md)

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

### CaseSetManager\(ThermalDesktop\)

```csharp
public CaseSetManager(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### Options

```csharp
public CaseSetManagerOptions Options { get; }
```

#### Property Value

 [CaseSetManagerOptions](OpenTD.CaseSetManagerOptions.md)

## Methods

### Add\(string, string, string\)

```csharp
public CaseSet Add(string name, string groupName = "", string sindaFilenames = "")
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`groupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sindaFilenames` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [CaseSet](OpenTD.CaseSet.md)

### Delete\(string, string\)

```csharp
public void Delete(string name, string groupName = "")
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`groupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetCaseSets\(\)

```csharp
public List<CaseSet> GetCaseSets()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[CaseSet](OpenTD.CaseSet.md)\>

### IsCaseRunning\(\)

Some types of cases return control to TD before they finish. Example:
cases involving Dynamic Sinda. This also means they return control to
OpenTD before the case finishes. Use this method to check whether a
given TD instance is currently running this kind of case. This method
is currently experimental.

```csharp
public bool IsCaseRunning()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Rename\(string, string, string, string\)

```csharp
public void Rename(string name, string groupName, string newName, string newGroupName)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`groupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Run\(string, string, bool\)

Run one case.
Set useOldMethod to true for a less-verbose run method that
may not be compatible with every case configuration.

```csharp
public void Run(string name, string groupName = "", bool useOldMethod = false)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`groupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`useOldMethod` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Run\(IEnumerable<int\>\)

Run multiple cases, just like selecting them and pressing the run button in the GUI.
Use this method to run cases using TD batch mode.

```csharp
public void Run(IEnumerable<int> caseIndices)
```

#### Parameters

`caseIndices` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

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

[CaseSet](OpenTD.CaseSet.md)


