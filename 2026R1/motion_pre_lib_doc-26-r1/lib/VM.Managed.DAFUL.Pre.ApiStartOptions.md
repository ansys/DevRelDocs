#  Struct ApiStartOptions

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpreAPI.dll  

Options for starting the <xref href="VM.Managed.DAFUL.Pre.Api" data-throw-if-not-resolved="false"></xref>.

```csharp
public struct ApiStartOptions
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_ActionOnKernelMessage"></a> ActionOnKernelMessage

Write kernel message action

```csharp
public Action<string> ActionOnKernelMessage { readonly get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_ActionOnKernelTranslatorMessage"></a> ActionOnKernelTranslatorMessage

Write kernel translator message action

```csharp
public readonly Action<object> ActionOnKernelTranslatorMessage { get; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_ActionOnLicenseError"></a> ActionOnLicenseError

Action for license error message.

```csharp
public Action<string, string> ActionOnLicenseError { readonly get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_ActionOnLicenseInformation"></a> ActionOnLicenseInformation

Action for license information message.

```csharp
public Action<string, string> ActionOnLicenseInformation { readonly get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_ActionOnLicenseWarning"></a> ActionOnLicenseWarning

Action for license warning message.

```csharp
public Action<string, string> ActionOnLicenseWarning { readonly get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_ConsoleDefault"></a> ConsoleDefault

Default start option for the console applications.

```csharp
public static ApiStartOptions ConsoleDefault { get; }
```

#### Property Value

 [ApiStartOptions](VM.Managed.DAFUL.Pre.ApiStartOptions.md)

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_HoopsExchangeDirectory"></a> HoopsExchangeDirectory

Hoops Exchange directory

```csharp
public string HoopsExchangeDirectory { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_KernelCoreModulePath"></a> KernelCoreModulePath

Kernel core module path

```csharp
public string KernelCoreModulePath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_KernelPath"></a> KernelPath

Kernel path

```csharp
public string KernelPath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_ApiStartOptions_TranslatorDirectory"></a> TranslatorDirectory

Translator directory

```csharp
public string TranslatorDirectory { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

