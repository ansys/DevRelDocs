# Constructor ComponentInfoControlViewModel

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## ComponentInfoControlViewModel(ISaveFileDialog, IFile, IDirectory, IProcess)

Constructor.

```csharp
public ComponentInfoControlViewModel(ISaveFileDialog saveDialog = null, IFile file = null, IDirectory directory = null, IProcess process = null)

```

### Parameters

`saveDialog` [ISaveFileDialog](Phoenix.BuilderUIClient.ISaveFileDialog.md)

`file` [IFile](Phoenix.BuilderUIClient.IFile.md)

Interface for getting file information. Pass null for the default implementation.

`directory` [IDirectory](Phoenix.BuilderUIClient.IDirectory.md)

Interface for getting directory information. Pass null for the default implementation.

`process` [IProcess](Phoenix.BuilderUIClient.IProcess.md)

Interface for creating processes. Pass null for the default implementation.
