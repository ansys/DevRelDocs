# Method ShowDialog

Namespace: [Phoenix.BuilderUIClient.FileDialogs](Phoenix.BuilderUIClient.FileDialogs.md)  
Assembly: Phoenix.BuilderUIClient.dll

## ShowDialog()

Runs a common dialog box with a default owner.

```csharp
public DialogResult ShowDialog()

```

### Returns

[DialogResult](https://learn.microsoft.com/dotnet/api/system.windows.forms.dialogresult)

The status of the close operation.

## ShowDialog(IWin32Window)

Runs a common dialog box with a specified owner.

```csharp
public DialogResult ShowDialog(IWin32Window owner)

```

### Parameters

`owner` [IWin32Window](https://learn.microsoft.com/dotnet/api/system.windows.forms.iwin32window)

The top-level window that will own the modal dialog box.

### Returns

[DialogResult](https://learn.microsoft.com/dotnet/api/system.windows.forms.dialogresult)

The status of the close operation.
