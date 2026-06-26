# Interface IRuntimeVariable

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

A variable as defined in a component configuration. Contains a name, metadata,
and a default value.

```csharp
public interface IRuntimeVariable : IDisposable

```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

[CustomMetadata](Phoenix.PaczAPI.IRuntimeVariable.CustomMetadata.md#Phoenix_PaczAPI_IRuntimeVariable_CustomMetadata)

Get the variable custom metadata which allows for arbitrary
storage of name/value pairs with the variable.

[DefaultValue](Phoenix.PaczAPI.IRuntimeVariable.DefaultValue.md#Phoenix_PaczAPI_IRuntimeVariable_DefaultValue)

The default value for this variable.

[Metadata](Phoenix.PaczAPI.IRuntimeVariable.Metadata.md#Phoenix_PaczAPI_IRuntimeVariable_Metadata)

The metadata about the variable

[Name](Phoenix.PaczAPI.IRuntimeVariable.Name.md#Phoenix_PaczAPI_IRuntimeVariable_Name)

The name of the variable. Must be non-empty and may use dotted notation.
