# Constructor PostprocessorRemotingUtil
<a id="VM_Windows_Post_PostprocessorRemotingUtil__ctor_System_Version_System_String_"></a>

Namespace: [VM.Windows.Post](VM.Windows.Post.md)  
Assembly: VM.Windows.Post.Remoting.dll  

## <a id="VM_Windows_Post_PostprocessorRemotingUtil__ctor_System_Version_System_String_"></a> PostprocessorRemotingUtil\(Version, string\)

Initializes [`PostprocessorRemotingUtil`](VM.Windows.Post.PostprocessorRemotingUtil.md) for a Postprocessor remoting endpoint.

```csharp
public PostprocessorRemotingUtil(Version version, string suffix = "")
```

### Parameters

`version` Version

The Postprocessor version used to build the remoting endpoint and launch arguments.

`suffix` string

The optional suffix appended to the remoting endpoint name.

### Exceptions

 ArgumentNullException

Thrown when <code class="paramref">version</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

## <a id="VM_Windows_Post_PostprocessorRemotingUtil__ctor_System_Version_System_Boolean_"></a> PostprocessorRemotingUtil\(Version, bool\)

Initializes [`PostprocessorRemotingUtil`](VM.Windows.Post.PostprocessorRemotingUtil.md) for a standard or Classic Postprocessor remoting endpoint.

```csharp
public PostprocessorRemotingUtil(Version version, bool classic)
```

### Parameters

`version` Version

The Postprocessor version used to build the remoting endpoint and launch arguments.

`classic` bool

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to connect to the Classic Postprocessor endpoint. otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Exceptions

 ArgumentNullException

Thrown when <code class="paramref">version</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.
