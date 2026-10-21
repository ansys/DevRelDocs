# Method ImportScriptFile
<a id="VM_Windows_Post_PostprocessorRemotingUtil_ImportScriptFile_System_String_"></a>

Namespace: [VM.Windows.Post](VM.Windows.Post.md)  
Assembly: VM.Windows.Post.Remoting.dll  

## <a id="VM_Windows_Post_PostprocessorRemotingUtil_ImportScriptFile_System_String_"></a> ImportScriptFile\(string\)

Runs a Python script file in the Postprocessor.

```csharp
public Task<bool> ImportScriptFile(string filepath)
```

### Parameters

`filepath` string

The full path of the Python script file to run.

### Returns

 Task<bool\>

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the Postprocessor ran the script. otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

<Danger>
The method returns before the call completes. Call `Wait()` on the returned task, or read its `Result`, to wait for the result. Wait for [RunPostprocessor\(string\)](VM.Windows.Post.PostprocessorRemotingUtil.RunPostprocessor.md) in the same way before this call.
</Danger>
