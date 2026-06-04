# Constructor RuntimeVariable

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## RuntimeVariable()

Constructor which generates an unusable empty RuntimeVariable.

```csharp
public RuntimeVariable()

```

## RuntimeVariable(string, VariableType, IVariableValue, string, string, string, object, object, object[], string[], IReadOnlyDictionary<string, string>)

Constructor

```csharp
public RuntimeVariable(string name, VariableType type, IVariableValue defaultValue, string format = null, string units = null, string description = null, object upperBound = null, object lowerBound = null, object[] enumValues = null, string[] enumAliases = null, IReadOnlyDictionary<string, string> metadata = null)

```

### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the variable, must be non-null

`type` VariableType

The type of the variable using the JSON type names, must be non-null

`defaultValue` IVariableValue

The default value for the variable. Must be non-null except for File variables.

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

The format for displaying variable values

`units` [string](https://learn.microsoft.com/dotnet/api/system.string)

The units the variable is in

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A description of the variable

`upperBound` [object](https://learn.microsoft.com/dotnet/api/system.object)

An upper bound for the variable

`lowerBound` [object](https://learn.microsoft.com/dotnet/api/system.object)

A lower bound for the variable

`enumValues` [object](https://learn.microsoft.com/dotnet/api/system.object)[]

The enumerated values for the variable

`enumAliases` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

The enumerated aliases for the variable. If provided, enumValues must be provided and the same length.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>

Arbitrary additional metadata for the variable

### Remarks

This constructor creates a clone of the `defaultValue`.

## RuntimeVariable(string, VariableMetadata, IVariableValue, IReadOnlyDictionary<string, string>)

Constructor

```csharp
public RuntimeVariable(string name, VariableMetadata metadata, IVariableValue defaultValue, IReadOnlyDictionary<string, string> customMetadata)

```

### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the variable. Must be non-null.

`metadata` VariableMetadata

The metadata about the variable. Must be non-null.

`defaultValue` IVariableValue

The default value for the variable. The type of this
value must match the type of metadata

`customMetadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>

Custom metadata values associated with this variable

### Remarks

This constructor creates a clone of the `defaultValue`.

## RuntimeVariable(IRuntimeVariable)

Copy constructor. Makes a copy of the source such that dispose independently cleans up
the source and the new RuntimeVariable.

```csharp
public RuntimeVariable(IRuntimeVariable source)

```

### Parameters

`source` [IRuntimeVariable](Phoenix.PaczAPI.IRuntimeVariable.md)

The source to copy. A clone will be made and this object should
be independently Disposed.
