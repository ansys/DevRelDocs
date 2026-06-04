# Method StartWriteMode

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## StartWriteMode(IExtractedPacz)

Set the control to be writable temporarily. Sets writable mode immediately, and unsets it when the returned
`System.IDisposable` is disposed.

```csharp
public IDisposable StartWriteMode(IExtractedPacz pacz)

```

### Parameters

`pacz` IExtractedPacz

### Returns

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

An IDisposable that will set this control back to read-only mode when disposed
