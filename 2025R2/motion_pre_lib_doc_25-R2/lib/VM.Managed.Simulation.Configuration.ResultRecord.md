# Struct Configuration.ResultRecord

Namespace: [VM.Managed.Simulation](VM.Managed.Simulation.md)  
Assembly: VMDFBase.dll  

This struct is to represent the result record.

```csharp
public struct Configuration.ResultRecord
```

## Properties

### Constraints

Gets or sets the constraints flag

```csharp
public bool Constraints { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Contacts

Gets or sets the contacts flag

```csharp
public bool Contacts { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EHDBearing

Gets or sets the EHD Bearing flag

```csharp
public bool EHDBearing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExternalLoad

```csharp
public bool ExternalLoad { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Forces

Gets or sets the forces flag

```csharp
public bool Forces { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MotorEMForce

Gets or sets the Motor EM Force flag

```csharp
public bool MotorEMForce { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SubEntities

Gets or sets the subentities flag

```csharp
public bool SubEntities { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WriteToOutFile

Gets or sets the [write to out file] flag

```csharp
public bool WriteToOutFile { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Equals\(object\)

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

### Equals\(ResultRecord\)

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

### GetHashCode\(\)

<p>Get hash code of ResultRecord</p>

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

<p>The hash code</p>

### Initialize\(\)

Initialize

```csharp
public void Initialize()
```

## Operators

### operator ==\(ResultRecord, ResultRecord\)

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

### operator \!=\(ResultRecord, ResultRecord\)

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


