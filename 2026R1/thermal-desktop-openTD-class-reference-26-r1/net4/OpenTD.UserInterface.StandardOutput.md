# <a id="OpenTD_UserInterface_StandardOutput"></a> Class StandardOutput

Namespace: [OpenTD.UserInterface](OpenTD.UserInterface.md)  
Assembly: OpenTD.dll  

A standard place to write output messages from OpenTD client programs.
Destination defaults to an OutputDialog, but can be redirected by
subscribing to the OnWrite event.

```csharp
public static class StandardOutput
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StandardOutput](OpenTD.UserInterface.StandardOutput.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

### <a id="OpenTD_UserInterface_StandardOutput_HideDialog"></a> HideDialog\(\)

Hides the default StandardOutput dialog.

```csharp
public static void HideDialog()
```

### <a id="OpenTD_UserInterface_StandardOutput_ShowDialog"></a> ShowDialog\(\)

Shows the default StandardOutput dialog.

```csharp
public static void ShowDialog()
```

### <a id="OpenTD_UserInterface_StandardOutput_Write_System_String_"></a> Write\(string\)

Writes the specified message to StandardOutput.

```csharp
public static void Write(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message.

### <a id="OpenTD_UserInterface_StandardOutput_Write_System_String_System_Object___"></a> Write\(string, params object\[\]\)

Writes the specified format string to StandardOutput.

```csharp
public static void Write(string format, params object[] args)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

### <a id="OpenTD_UserInterface_StandardOutput_Write_System_Object_"></a> Write\(object\)

Uses ToString() to write the specified object to StandardOutput.

```csharp
public static void Write(object x)
```

#### Parameters

`x` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="OpenTD_UserInterface_StandardOutput_WriteLine_System_String_"></a> WriteLine\(string\)

Writes the specified message to StandardOutput, followed by newline.

```csharp
public static void WriteLine(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message.

### <a id="OpenTD_UserInterface_StandardOutput_WriteLine_System_String_System_Object___"></a> WriteLine\(string, params object\[\]\)

Writes the specified format string to StandardOutput, followed by newline.

```csharp
public static void WriteLine(string format, params object[] args)
```

#### Parameters

`format` [string](https://learn.microsoft.com/dotnet/api/system.string)

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

### <a id="OpenTD_UserInterface_StandardOutput_WriteLine_System_Object_"></a> WriteLine\(object\)

Uses ToString() to write the specified object to StandardOutput, followed by newline.

```csharp
public static void WriteLine(object x)
```

#### Parameters

`x` [object](https://learn.microsoft.com/dotnet/api/system.object)

The x.

### <a id="OpenTD_UserInterface_StandardOutput_WriteLine"></a> WriteLine\(\)

Writes newline to StandardOutput.

```csharp
public static void WriteLine()
```

### <a id="OpenTD_UserInterface_StandardOutput_OnWrite"></a> OnWrite

Subscribe to this event to route StandardOutput to a custom destination.

```csharp
public static event EventHandler<WriteEventArgs> OnWrite
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[WriteEventArgs](OpenTD.UserInterface.WriteEventArgs.md)\>

## See Also

[OutputDialog](OpenTD.UserInterface.Forms.OutputDialog.md), 
[StandardOutput](OpenTD.UserInterface.StandardOutput.md).[OnWrite](OpenTD.UserInterface.StandardOutput.md\#OpenTD\_UserInterface\_StandardOutput\_OnWrite)

