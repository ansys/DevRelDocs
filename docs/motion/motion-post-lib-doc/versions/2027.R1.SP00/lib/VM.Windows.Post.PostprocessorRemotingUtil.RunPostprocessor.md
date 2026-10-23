# Method RunPostprocessor
<a id="VM_Windows_Post_PostprocessorRemotingUtil_RunPostprocessor_System_String_"></a>

Namespace: [VM.Windows.Post](VM.Windows.Post.md)  
Assembly: VM.Windows.Post.Remoting.dll  

## <a id="VM_Windows_Post_PostprocessorRemotingUtil_RunPostprocessor_System_String_"></a> RunPostprocessor\(string\)

Starts the Postprocessor executable at the specified path when it is not already connected, then waits for its remoting service to become ready.

For a complete operations, see [Operation API Example - Run an Operation API Script](../document/operation-api/example/example_run_postprocessor_for_operation_api.md#run-an-operation-api-script).

```csharp
public Task<bool> RunPostprocessor(string exepath)
```

### Parameters

`exepath` string

The full path to the Postprocessor executable.

### Returns

 Task<bool\>

A task whose result is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the Postprocessor remoting service is ready. otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

<Danger>
The method returns before the Postprocessor is ready. Call `Wait()` on the returned task, or read its `Result`, before the next call. A call such as [ImportScriptFile\(string\)](VM.Windows.Post.PostprocessorRemotingUtil.ImportScriptFile.md) fails while the remoting service is not ready.
</Danger>

<a href="/lib/VM.Windows.Post.PostprocessorRemotingUtil.RunPostprocessor.md" download="VM.Windows.Post.PostprocessorRemotingUtil.RunPostprocessor.md">Download this page as Markdown</a>
