# Method RaiseTestRunEvent

Namespace: [Phoenix.ComponentBuilderAPI](Phoenix.ComponentBuilderAPI.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

## RaiseTestRunEvent()

Raises an event requesting that the OEM client perform a test run and does not wait for the run to complete.
The test run will use the input values from the OEM, so `Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost`1.SaveAsync` should be called before
calling this if changes are present in the builder UI.

```csharp
void RaiseTestRunEvent()

```
