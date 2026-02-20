# Class UniqueNameObject

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

An object that is uniquely-identified by its name,
instead of, for example, an AutoCAD handle.

```csharp
[Union(0, typeof(MaterialStackData))]
[Union(1, typeof(Dataset))]
[Union(2, typeof(OpticalPropsData))]
[Union(3, typeof(SubmodelData))]
[Union(4, typeof(SymbolData))]
[Union(5, typeof(ThermoPropsData))]
public abstract class UniqueNameObject : OpenTDObject, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[UniqueNameObject](OpenTD.UniqueNameObject.md)

#### Derived

[Dataset](OpenTD.PostProcessing.Dataset.md)

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

## Properties

### Name

This object is uniquely-identified by this name.

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### \_n

Do not use.

```csharp
public string _n { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### ModifyName\(string\)

```csharp
protected virtual string ModifyName(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ProxyRename\(string, string\)

```csharp
protected abstract void ProxyRename(string from, string to)
```

#### Parameters

`from` [string](https://learn.microsoft.com/dotnet/api/system.string)

`to` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Rename\(string\)

Use this method to rename the client-side object and the
TD item it is linked to.

```csharp
public virtual void Rename(string to)
```

#### Parameters

`to` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

[OpenTDObject](OpenTD.OpenTDObject.md)


