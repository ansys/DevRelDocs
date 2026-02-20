# Class SindaName

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Holds the Submodel/Id pair uniquely identifying model objects
within their respective type.

```csharp
public class SindaName : IEquatable<SindaName>
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

## Implements

[IEquatable<SindaName\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### SindaName\(string, long\)

Initializes a new instance of the <xref href="OpenTD.Results.Dataset.Topology.SindaName" data-throw-if-not-resolved="false"></xref> class for a 
given submodel and id.

```csharp
public SindaName(string submodel, long id)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel. Case-insensitive.

`id` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The identifier.

## Properties

### Id

```csharp
public long Id { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### Key

```csharp
public string Key { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Submodel

```csharp
public string Submodel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Equals\(SindaName\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(SindaName other)
```

#### Parameters

`other` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

An object to compare with this object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

### Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the specified object  is equal to the current object; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

### GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### Parse\(string\)

Parses the specified SindaName key.

```csharp
public static SindaName Parse(string sindaNameKey)
```

#### Parameters

`sindaNameKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The sinda name key.

#### Returns

 [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

A SindaName.

#### Exceptions

 OpenTDException

Unable to split into two parts by '.'.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

sindaNameKey is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Id portion is not parseable as an Int64.

 [OverflowException](https://learn.microsoft.com/dotnet/api/system.overflowexception)

Id portion is less than MinValue 
    or greater than MaxValue for Int64 type.

### ToString\(\)

Converts to string.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A <xref href="System.String" data-throw-if-not-resolved="false"></xref> that represents this instance in 'Submodel.Id' form.

### TryParse\(string, out SindaName\)

Attempts to parse the specified sinda name key.

```csharp
public static bool TryParse(string sindaNameKey, out SindaName sindaName)
```

#### Parameters

`sindaNameKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The sinda name key.

`sindaName` [SindaName](OpenTD.Results.Dataset.Topology.SindaName.md)

The parsed SindaName when successful.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if the parse was successful and false otherwise.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

sindaNameKey is null.


