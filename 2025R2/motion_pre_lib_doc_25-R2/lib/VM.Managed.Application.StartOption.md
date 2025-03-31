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

### StartOption\(string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.Application.StartOption" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StartOption(string strTranslatorDirectory, string strKernelCoreModulePath, string strHoopsExchangeDirectory)
```

#### Parameters

`strTranslatorDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The translator directory.

`strKernelCoreModulePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The kernel core module path.

`strHoopsExchangeDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Hoops Exchange path.

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

### HoopsExchangeDirectory

Gets/Sets the Hoops Exchange directory.

```csharp
public string HoopsExchangeDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### KernelCoreModulePath

Gets/Sets the kernel core module path.

```csharp
public string KernelCoreModulePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### KernelMessageCallback

Gets/Sets the kernel message callback

```csharp
public Application.StartOption.WriteMessage KernelMessageCallback { get; set; }
```

#### Property Value

 [Application](VM.Managed.Application.md).[StartOption](VM.Managed.Application.StartOption.md).[WriteMessage](VM.Managed.Application.StartOption.WriteMessage.md)

### KernelMessageLogLevel

Gets/Sets the kernel message log level

```csharp
public int KernelMessageLogLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StrideConvertPath

Gets/Sets the Stride Convert path.

```csharp
public string StrideConvertPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StrideDependencies

Gets/Sets the Stride Dependencies.

```csharp
public string StrideDependencies { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TranslatorDirectory

Gets/Sets the translator directory.

```csharp
public string TranslatorDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TranslatorMessageCallback

Gets/Sets the kernel translator message callback

```csharp
public Application.StartOption.WriteMessage TranslatorMessageCallback { get; set; }
```

#### Property Value

 [Application](VM.Managed.Application.md).[StartOption](VM.Managed.Application.StartOption.md).[WriteMessage](VM.Managed.Application.StartOption.WriteMessage.md)

### TranslatorMessageLogLevel

Gets/Sets the kernel translator message log level

```csharp
public int TranslatorMessageLogLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UsePID

Gets/Sets the PID flag.

```csharp
public bool UsePID { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


