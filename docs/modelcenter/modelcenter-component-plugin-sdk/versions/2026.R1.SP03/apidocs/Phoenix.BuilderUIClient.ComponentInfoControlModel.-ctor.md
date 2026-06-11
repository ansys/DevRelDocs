# Constructor ComponentInfoControlModel

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## ComponentInfoControlModel(IReadOnlyExtractedPacz, string, string, IFile, IDirectory, IProcess)

Constructor.

```csharp
public ComponentInfoControlModel(IReadOnlyExtractedPacz pacz, string source, string type, IFile file = null, IDirectory directory = null, IProcess process = null)

```

### Parameters

`pacz` IReadOnlyExtractedPacz

The pacz information of the component.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source path of the component.

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of component (i.e. Legacy Pacz, Quadratic, etc.).

`file` [IFile](Phoenix.BuilderUIClient.IFile.md)

Interface for getting file information. Pass null for the default implementation.

`directory` [IDirectory](Phoenix.BuilderUIClient.IDirectory.md)

Interface for getting directory information. Pass null for the default implementation.

`process` [IProcess](Phoenix.BuilderUIClient.IProcess.md)

Interface for creating processes. Pass null for the default implementation.
