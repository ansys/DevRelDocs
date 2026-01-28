#  Struct Configuration.ResultRecord

Namespace: [VM.Managed.Simulation](VM.Managed.Simulation.md)  
Assembly: VMDFBase.dll  

This struct is to represent the result record.

```csharp
public struct Configuration.ResultRecord
```

## Properties

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_Constraints"></a> Constraints

Gets or sets the constraints flag

```csharp
public bool Constraints { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_Contacts"></a> Contacts

Gets or sets the contacts flag

```csharp
public bool Contacts { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_EHDBearing"></a> EHDBearing

Gets or sets the EHD Bearing flag

```csharp
public bool EHDBearing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_ExternalLoad"></a> ExternalLoad

```csharp
public bool ExternalLoad { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_Forces"></a> Forces

Gets or sets the forces flag

```csharp
public bool Forces { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_MotorEMForce"></a> MotorEMForce

Gets or sets the Motor EM Force flag

```csharp
public bool MotorEMForce { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_SubEntities"></a> SubEntities

Gets or sets the subentities flag

```csharp
public bool SubEntities { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_WriteToOutFile"></a> WriteToOutFile

Gets or sets the [write to out file] flag

```csharp
public bool WriteToOutFile { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_Equals_System_Object_"></a> Equals\(object\)

<p>Check equality of two objects</p>

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

<p>Object to compare</p>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<p>true if two objects are equal. Otherwise false.</p>

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_Equals_VM_Managed_Simulation_Configuration_ResultRecord_"></a> Equals\(ResultRecord\)

<p>Check equality of two objects</p>

```csharp
public bool Equals(Configuration.ResultRecord other)
```

#### Parameters

`other` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

<p>Object to compare</p>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<p>true if two objects are equal. Otherwise false.</p>

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_GetHashCode"></a> GetHashCode\(\)

<p>Get hash code of ResultRecord</p>

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

<p>The hash code</p>

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_Initialize"></a> Initialize\(\)

Initialize

```csharp
public void Initialize()
```

## Operators

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_op_Equality_VM_Managed_Simulation_Configuration_ResultRecord_VM_Managed_Simulation_Configuration_ResultRecord_"></a> operator ==\(ResultRecord, ResultRecord\)

<p>Compare two ResultRecord and return equality</p>

```csharp
public static bool operator ==(Configuration.ResultRecord left, Configuration.ResultRecord right)
```

#### Parameters

`left` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

<p>The left parameter to compare</p>

`right` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

<p>The right parameter to compare</p>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<p>true if two arguments are same. Otherwise false.</p>

### <a id="VM_Managed_Simulation_Configuration_ResultRecord_op_Inequality_VM_Managed_Simulation_Configuration_ResultRecord_VM_Managed_Simulation_Configuration_ResultRecord_"></a> operator \!=\(ResultRecord, ResultRecord\)

<p>Compare two ResultRecord and return equality</p>

```csharp
public static bool operator !=(Configuration.ResultRecord left, Configuration.ResultRecord right)
```

#### Parameters

`left` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

<p>The left parameter to compare</p>

`right` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

<p>The right parameter to compare</p>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<p>true if two arguments are not same. Otherwise false.</p>

