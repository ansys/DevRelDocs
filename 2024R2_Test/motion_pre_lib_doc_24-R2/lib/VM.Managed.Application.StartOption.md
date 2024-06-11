# Class Application.StartOption

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the application start option.

```csharp
public sealed class Application.StartOption
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Application.StartOption](VM.Managed.Application.StartOption.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### StartOption\(string\)

Initializes a new instance of the <xref href="VM.Managed.Application.StartOption" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StartOption(string strTranslatorDirectory)
```

#### Parameters

`strTranslatorDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The translator directory.

### StartOption\(\)

Initializes a new instance of the <xref href="VM.Managed.Application.StartOption" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StartOption()
```

## Properties

### GenerateHoopsCode

Gets/Sets the Hoops code generation flag.

```csharp
public bool GenerateHoopsCode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TranslatorDirectory

Gets/Sets the translator directory.

```csharp
public string TranslatorDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UsePID

Gets/Sets the PID flag.

```csharp
public bool UsePID { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


