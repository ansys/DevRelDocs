# Interface IPythonCode

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to python code entity.

```csharp
public interface IPythonCode : ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment
```

#### Implements

[ISubEntity](VM.Models.Pre.ISubEntity.md), 
[IEntityBase](VM.Models.Pre.IEntityBase.md), 
[IObjectBase](VM.Models.Pre.IObjectBase.md), 
[IObject](VM.Models.Pre.IObject.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IEventProvider](VM.Models.Pre.IEventProvider.md), 
[IHasKeyObject](VM.Models.Pre.IHasKeyObject.md), 
IHasName, 
IEnabled, 
IHasComment

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### CodePath

Path to the code file.

```csharp
string CodePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### CodeType

The type of the python code.

```csharp
CodeTypes CodeType { get; set; }
```

#### Property Value

 [CodeTypes](VM.Models.Pre.CodeTypes.md)

### DeployLocation

The location to deploy this code during analysis.

```csharp
string DeployLocation { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ImportCommand

The import command for using this code in the <xref href="VM.IExpression" data-throw-if-not-resolved="false"></xref>.
It must contain '$module$' keyword.

```csharp
string ImportCommand { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ImportModuleName

The module name for importing this code object

```csharp
string ImportModuleName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UseDeployLocation

The flag whether using the <xref href="VM.Models.Pre.IPythonCode.DeployLocation" data-throw-if-not-resolved="false"></xref> value.

```csharp
bool UseDeployLocation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseImportCommand

The flag whether using the <xref href="VM.Models.Pre.IPythonCode.ImportCommand" data-throw-if-not-resolved="false"></xref> value.

```csharp
bool UseImportCommand { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetImportCommand\(\)

Get actual import command

```csharp
string GetImportCommand()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The import command.


