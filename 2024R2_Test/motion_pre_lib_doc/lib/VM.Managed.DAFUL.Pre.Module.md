# Class Module

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the module.

```csharp
public class Module
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Module](VM.Managed.DAFUL.Pre.Module.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Module\(\)

```csharp
public Module()
```

## Properties

### DocumentCommands

Gets or sets the document commands.

```csharp
public List<Module.Command> DocumentCommands { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Module](VM.Managed.DAFUL.Pre.Module.md).[Command](VM.Managed.DAFUL.Pre.Module.Command.md)\>

### IsOverlap

Gets or sets a value indicating whether this instance is overlap.

```csharp
public bool IsOverlap { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

Gets or sets the name.

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ParentModule

Gets or sets the parent module.

```csharp
public string ParentModule { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Toolkit

Gets or sets the toolkit.

```csharp
public string Toolkit { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ViewCommands

Gets or sets the view commands.

```csharp
public List<Module.Command> ViewCommands { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Module](VM.Managed.DAFUL.Pre.Module.md).[Command](VM.Managed.DAFUL.Pre.Module.Command.md)\>


