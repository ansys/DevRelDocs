# Method PHXVariablesToRuntimeVariables

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## PHXVariablesToRuntimeVariables(IEnumerable<PHXVariable>)

Converts all passed in PHXVariables into IRuntimeVariables.

```csharp
public static Tuple<IEnumerable<IRuntimeVariable>, IEnumerable<IRuntimeVariable>> PHXVariablesToRuntimeVariables(IEnumerable<PHXVariable> variables)

```

### Parameters

`variables` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<PHXVariable>

The variables to convert. May be null

### Returns

[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple-2)<[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<IRuntimeVariable>>

A Tuple which consists of the converted inputs as the first item and the converted outputs as the second item.
Neither the tuple itself nor the enumerables will ever be null
