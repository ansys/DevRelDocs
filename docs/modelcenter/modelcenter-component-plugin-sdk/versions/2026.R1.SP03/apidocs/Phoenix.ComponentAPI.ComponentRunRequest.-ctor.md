# Constructor ComponentRunRequest

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## ComponentRunRequest()

Creates an empty run request with no input variables specified.

```csharp
public ComponentRunRequest()

```

### Remarks

You probably want `Phoenix.ComponentAPI.ComponentRunRequest.CreateCloneFrom(System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,Phoenix.ModelCenter.Common.Types.VariableState}})`,
`Phoenix.ComponentAPI.ComponentRunRequest.MoveStateFrom(System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,Phoenix.ModelCenter.Common.Types.VariableState}})`, or
`Phoenix.ComponentAPI.ComponentRunRequest.CreateFromConfigDefaults(Phoenix.PaczAPI.IReadOnlyComponentConfig)`
