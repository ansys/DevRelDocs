# Class CommonProperties

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

This class defines common properties that all components may use in
the `Phoenix.PaczAPI.IComponentConfig.Properties` field.

```csharp
public static class CommonProperties

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CommonProperties](Phoenix.PaczAPI.CommonProperties.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

[AVERAGE_RUNTIME](Phoenix.PaczAPI.CommonProperties.AVERAGE_RUNTIME.md#Phoenix_PaczAPI_CommonProperties_AVERAGE_RUNTIME)

The amount of time an average run of the PACZ takes to complete, in ISO-8601 duration format
(PnDTnHnMn.nS). Examples:

- "PT20.345S" – parses as "20.345 seconds"
- "PT15M" – parses as "15 minutes" (where a minute is 60 seconds)

If the value is missing, empty, whitespace, <=0, or not a valid ISO-8601 duration it is ignored.

It is optional and used in ModelCenter Cloud to help tune performance.

[TIMEOUT](Phoenix.PaczAPI.CommonProperties.TIMEOUT.md#Phoenix_PaczAPI_CommonProperties_TIMEOUT)

How long to let the component run before canceling the run, in ISO-8601 duration format
(PnDTnHnMn.nS). Examples:

- "PT20.345S" – parses as "20.345 seconds"
- "PT15M" – parses as "15 minutes" (where a minute is 60 seconds)

The value is optional. If the value is present and non-empty, but <=0 or not a valid
ISO-8601 duration it is an error.
