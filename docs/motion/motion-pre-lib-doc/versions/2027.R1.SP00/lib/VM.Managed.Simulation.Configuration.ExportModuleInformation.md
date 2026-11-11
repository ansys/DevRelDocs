# Struct Configuration.ExportModuleInformation
<a id="VM_Managed_Simulation_Configuration_ExportModuleInformation"></a>

Namespace: [VM.Managed.Simulation](VM.Managed.Simulation.md)  
Assembly: VMDFBase.dll  

This struct is to represent the export module information.

```csharp
public struct Configuration.ExportModuleInformation
```

## Constructors

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation__ctor"></a> ExportModuleInformation\(\)

```csharp
public ExportModuleInformation()
```

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation__ctor_System_String_"></a> ExportModuleInformation\(string\)

```csharp
public ExportModuleInformation(string strFilePath)
```

#### Parameters

`strFilePath` string

## Properties

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation_ExportFormatType"></a> ExportFormatType

Gets or sets the export format type

```csharp
public Configuration.ExportModuleInformation.ExportFormat ExportFormatType { readonly get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[ExportModuleInformation](VM.Managed.Simulation.Configuration.ExportModuleInformation.md).[ExportFormat](VM.Managed.Simulation.Configuration.ExportModuleInformation.ExportFormat.md)

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation_FilePath"></a> FilePath

Gets or sets the file path

```csharp
public string FilePath { readonly get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation_IncludeReferenceFiles"></a> IncludeReferenceFiles

Gets or sets the including reference files flag

```csharp
public bool IncludeReferenceFiles { readonly get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation_UsePostGraphicFiles"></a> UsePostGraphicFiles

Gets or sets the using post graphics files flag

```csharp
public bool UsePostGraphicFiles { readonly get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation_Equals_System_Object_"></a> Equals\(object\)

<p>Check equality of two objects</p>

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

<p>Object to compare</p>

#### Returns

 bool

<p>true if two objects are equal. Otherwise false.</p>

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation_Equals_VM_Managed_Simulation_Configuration_ExportModuleInformation_"></a> Equals\(ExportModuleInformation\)

<p>Check equality of two objects</p>

```csharp
public bool Equals(Configuration.ExportModuleInformation other)
```

#### Parameters

`other` [Configuration](VM.Managed.Simulation.Configuration.md).[ExportModuleInformation](VM.Managed.Simulation.Configuration.ExportModuleInformation.md)

<p>Object to compare</p>

#### Returns

 bool

<p>true if two objects are equal. Otherwise false.</p>

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation_GetHashCode"></a> GetHashCode\(\)

<p>Get hash code of ExportModuleInformation</p>

```csharp
public override int GetHashCode()
```

#### Returns

 int

<p>The hash code</p>

## Operators

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation_op_Equality_VM_Managed_Simulation_Configuration_ExportModuleInformation_VM_Managed_Simulation_Configuration_ExportModuleInformation_"></a> operator ==\(ExportModuleInformation, ExportModuleInformation\)

<p>Compare two ExportModuleInformation and return equality</p>

```csharp
public static bool operator ==(Configuration.ExportModuleInformation left, Configuration.ExportModuleInformation right)
```

#### Parameters

`left` [Configuration](VM.Managed.Simulation.Configuration.md).[ExportModuleInformation](VM.Managed.Simulation.Configuration.ExportModuleInformation.md)

<p>The left parameter to compare</p>

`right` [Configuration](VM.Managed.Simulation.Configuration.md).[ExportModuleInformation](VM.Managed.Simulation.Configuration.ExportModuleInformation.md)

<p>The right parameter to compare</p>

#### Returns

 bool

<p>true if two arguments are same. Otherwise false.</p>

### <a id="VM_Managed_Simulation_Configuration_ExportModuleInformation_op_Inequality_VM_Managed_Simulation_Configuration_ExportModuleInformation_VM_Managed_Simulation_Configuration_ExportModuleInformation_"></a> operator \!=\(ExportModuleInformation, ExportModuleInformation\)

<p>Compare two ExportModuleInformation and return equality</p>

```csharp
public static bool operator !=(Configuration.ExportModuleInformation left, Configuration.ExportModuleInformation right)
```

#### Parameters

`left` [Configuration](VM.Managed.Simulation.Configuration.md).[ExportModuleInformation](VM.Managed.Simulation.Configuration.ExportModuleInformation.md)

<p>The left parameter to compare</p>

`right` [Configuration](VM.Managed.Simulation.Configuration.md).[ExportModuleInformation](VM.Managed.Simulation.Configuration.ExportModuleInformation.md)

<p>The right parameter to compare</p>

#### Returns

 bool

<p>true if two arguments are not same. Otherwise false.</p>

