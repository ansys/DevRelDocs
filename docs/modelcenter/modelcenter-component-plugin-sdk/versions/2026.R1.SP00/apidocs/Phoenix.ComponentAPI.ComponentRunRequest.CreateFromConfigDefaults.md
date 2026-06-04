# Method CreateFromConfigDefaults

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## CreateFromConfigDefaults(IReadOnlyComponentConfig)

Creates a new ComponentRunRequest by taking all the input default values from a component config

```csharp
public static ComponentRunRequest CreateFromConfigDefaults(IReadOnlyComponentConfig config)

```

### Parameters

`config` [IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md)

The configuration to read

### Returns

[ComponentRunRequest](Phoenix.ComponentAPI.ComponentRunRequest.md)

A newly created ComponentRunRequest

### Remarks

You should always use the returned value in a using block, or otherwise ensure it will
be disposed.
