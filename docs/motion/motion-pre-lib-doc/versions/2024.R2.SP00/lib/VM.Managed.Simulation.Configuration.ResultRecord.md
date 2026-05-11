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

Check equality of two objects

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

Object to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two objects are equal. Otherwise false.

### Equals\(ResultRecord\)

Check equality of two objects

```csharp
public bool Equals(Configuration.ResultRecord other)
```

#### Parameters

`other` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

Object to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two objects are equal. Otherwise false.

### GetHashCode\(\)

Get hash code of ResultRecord

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The hash code

### Initialize\(\)

Initialize

```csharp
public void Initialize()
```

## Operators

### operator ==\(ResultRecord, ResultRecord\)

Compare two ResultRecord and return equality

```csharp
public static bool operator ==(Configuration.ResultRecord left, Configuration.ResultRecord right)
```

#### Parameters

`left` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

The left parameter to compare

`right` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

The right parameter to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two arguments are same. Otherwise false.

### operator \!=\(ResultRecord, ResultRecord\)

Compare two ResultRecord and return equality

```csharp
public static bool operator !=(Configuration.ResultRecord left, Configuration.ResultRecord right)
```

#### Parameters

`left` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

The left parameter to compare

`right` [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

The right parameter to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two arguments are not same. Otherwise false.


