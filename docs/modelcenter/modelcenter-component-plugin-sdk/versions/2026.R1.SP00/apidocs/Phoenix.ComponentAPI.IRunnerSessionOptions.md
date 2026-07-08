# Interface IRunnerSessionOptions

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

This interface is intended to be a "marker" interface for any runner session options type.
Session options are checked for validity at runtime; all `Phoenix.ComponentAPI.IHarnessRunnerClient`
implementations will accept any `Phoenix.ComponentAPI.IRunnerSessionOptions` object at compile time.
This comes from a desire to make it possible to write common code in OEM clients for various `Phoenix.ComponentAPI.IHarnessRunnerClient`
implementations, even if they require different options types, and then use factory / utility methods in that
code to ensure the correct options type is always passed.

When implementing a new `Phoenix.ComponentAPI.IHarnessRunnerClient` implementation, you should make it clear
to those attempting to use your client implementation what qualifies as an acceptable `Phoenix.ComponentAPI.IRunnerSessionOptions`
object. If options do not make sense for your client, you may choose to accept any object or even null.
It would also be a good idea to provide convenient ways of producing any argument object that is required.

```csharp
public interface IRunnerSessionOptions

```
