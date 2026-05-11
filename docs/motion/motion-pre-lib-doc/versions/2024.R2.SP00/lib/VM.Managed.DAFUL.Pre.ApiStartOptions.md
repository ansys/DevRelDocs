# Struct ApiStartOptions

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpreAPI.dll  

Options for starting the <xref href="VM.Managed.DAFUL.Pre.Api" data-throw-if-not-resolved="false"></xref>.

```csharp
public struct ApiStartOptions
```

## Properties

### ActionOnLicenseError

Action for license error message.

```csharp
public Action<string, string> ActionOnLicenseError { readonly get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### ActionOnLicenseInformation

Action for license information message.

```csharp
public Action<string, string> ActionOnLicenseInformation { readonly get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### ActionOnLicenseWarning

Action for license warning message.

```csharp
public Action<string, string> ActionOnLicenseWarning { readonly get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### ConsoleDefault

Default start option for the console applications.

```csharp
public static ApiStartOptions ConsoleDefault { get; }
```

#### Property Value

 [ApiStartOptions](VM.Managed.DAFUL.Pre.ApiStartOptions.md)

### KernelPath

Kernel path

```csharp
public string KernelPath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TranslatorDirectory

Translator directory

```csharp
public string TranslatorDirectory { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


