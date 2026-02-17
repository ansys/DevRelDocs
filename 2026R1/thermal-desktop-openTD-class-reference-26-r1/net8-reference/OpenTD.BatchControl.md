# <a id="OpenTD_BatchControl"></a> Class BatchControl

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Used to control batch run settings in the Case Set Manager.

```csharp
public class BatchControl : TdConnected
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
[BatchControl](OpenTD.BatchControl.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_BatchControl__ctor"></a> BatchControl\(\)

```csharp
public BatchControl()
```

### <a id="OpenTD_BatchControl__ctor_OpenTD_ThermalDesktop_"></a> BatchControl\(ThermalDesktop\)

```csharp
public BatchControl(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_BatchControl_changeDirLocalOrMaster"></a> changeDirLocalOrMaster

```csharp
public int changeDirLocalOrMaster { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_BatchControl_copyFiles"></a> copyFiles

```csharp
public bool copyFiles { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_BatchControl_copyFilesFormat"></a> copyFilesFormat

```csharp
public string copyFilesFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_BatchControl_licenseWait"></a> licenseWait

```csharp
public bool licenseWait { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_BatchControl_masterHeader"></a> masterHeader

```csharp
public string masterHeader { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_BatchControl_masterPerCasePost"></a> masterPerCasePost

```csharp
public string masterPerCasePost { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_BatchControl_outputEachCaseToLogFile"></a> outputEachCaseToLogFile

```csharp
public bool outputEachCaseToLogFile { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_BatchControl_runBatchCommandFormat"></a> runBatchCommandFormat

```csharp
public string runBatchCommandFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_BatchControl_setDirectoryFormat"></a> setDirectoryFormat

```csharp
public string setDirectoryFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_BatchControl_sindaCleanup"></a> sindaCleanup

```csharp
public bool sindaCleanup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_BatchControl_sindaMultiProcessor"></a> sindaMultiProcessor

```csharp
public bool sindaMultiProcessor { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_BatchControl_sindaStatusWindow"></a> sindaStatusWindow

```csharp
public bool sindaStatusWindow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_BatchControl_submitCommand"></a> submitCommand

```csharp
public string submitCommand { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_BatchControl_SetToHTCondor"></a> SetToHTCondor\(\)

```csharp
public void SetToHTCondor()
```

### <a id="OpenTD_BatchControl_SetToLocalMachine"></a> SetToLocalMachine\(\)

```csharp
public void SetToLocalMachine()
```

