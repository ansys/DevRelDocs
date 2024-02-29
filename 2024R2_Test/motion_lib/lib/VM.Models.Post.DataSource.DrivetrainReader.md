# <a id="VM_Models_Post_DataSource_DrivetrainReader"></a> Class DrivetrainReader

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DrivetrainReader : IDriveTrainReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DrivetrainReader](VM.Models.Post.DataSource.DrivetrainReader.md)

#### Derived

[DrivetrainReader12](VM.Models.Post.DataSource.DrivetrainReader12.md), 
[DrivetrainReader13](VM.Models.Post.DataSource.DrivetrainReader13.md), 
[DrivetrainReader14](VM.Models.Post.DataSource.DrivetrainReader14.md), 
[DrivetrainReader15](VM.Models.Post.DataSource.DrivetrainReader15.md), 
[DrivetrainReader16](VM.Models.Post.DataSource.DrivetrainReader16.md), 
[DrivetrainReader17](VM.Models.Post.DataSource.DrivetrainReader17.md), 
[DrivetrainReader18](VM.Models.Post.DataSource.DrivetrainReader18.md), 
[DrivetrainReader19](VM.Models.Post.DataSource.DrivetrainReader19.md), 
[DrivetrainReader20](VM.Models.Post.DataSource.DrivetrainReader20.md), 
[DrivetrainReader21](VM.Models.Post.DataSource.DrivetrainReader21.md), 
[DrivetrainReader22](VM.Models.Post.DataSource.DrivetrainReader22.md), 
[DrivetrainReader23](VM.Models.Post.DataSource.DrivetrainReader23.md), 
[DrivetrainReader24](VM.Models.Post.DataSource.DrivetrainReader24.md)

#### Implements

IDriveTrainReader

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_DataSource_DrivetrainReader__ctor"></a> DrivetrainReader\(\)

```csharp
public DrivetrainReader()
```

## Fields

### <a id="VM_Models_Post_DataSource_DrivetrainReader_Separators"></a> Separators

```csharp
protected static readonly char[] Separators
```

#### Field Value

 [char](https://learn.microsoft.com/dotnet/api/system.char)\[\]

## Methods

### <a id="VM_Models_Post_DataSource_DrivetrainReader_GetSamplingInfo_System_IO_StreamReader_"></a> GetSamplingInfo\(StreamReader\)

```csharp
protected bool GetSamplingInfo(StreamReader sr)
```

#### Parameters

`sr` [StreamReader](https://learn.microsoft.com/dotnet/api/system.io.streamreader)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DrivetrainReader_RaadFiltType_System_IO_StreamReader_"></a> RaadFiltType\(StreamReader\)

```csharp
protected DriveTrainFileType RaadFiltType(StreamReader streamReader)
```

#### Parameters

`streamReader` [StreamReader](https://learn.microsoft.com/dotnet/api/system.io.streamreader)

#### Returns

 DriveTrainFileType

### <a id="VM_Models_Post_DataSource_DrivetrainReader_ReadAssemblyManagerInfo_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_IDriveTrain___System_String_"></a> ReadAssemblyManagerInfo\(ResultDocument, Identifier, IDriveTrain\[\], string\)

```csharp
public virtual bool ReadAssemblyManagerInfo(ResultDocument parentDocument, Identifier analysisResultID, IDriveTrain[] assemblyInfo, string dfmPath)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`assemblyInfo` IDriveTrain\[\]

`dfmPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DrivetrainReader_ReadColorMapData_System_IO_StreamReader_System_Int32_System_Int32_System_Double____"></a> ReadColorMapData\(StreamReader, int, int, ref double\[\]\)

```csharp
protected void ReadColorMapData(StreamReader sr, int rows, int cols, ref double[] datas)
```

#### Parameters

`sr` [StreamReader](https://learn.microsoft.com/dotnet/api/system.io.streamreader)

`rows` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`cols` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datas` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_DrivetrainReader_ReadColormapInfo_VM_Models_Post_DriveTrains_GearSet___System_String_"></a> ReadColormapInfo\(GearSet\[\], string\)

```csharp
public virtual bool ReadColormapInfo(GearSet[] gearSets, string dfmPath)
```

#### Parameters

`gearSets` GearSet\[\]

`dfmPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DrivetrainReader_ReadLine_System_IO_StreamReader_System_String__"></a> ReadLine\(StreamReader, ref string\)

```csharp
protected string ReadLine(StreamReader sr, ref string buf)
```

#### Parameters

`sr` [StreamReader](https://learn.microsoft.com/dotnet/api/system.io.streamreader)

`buf` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_DrivetrainReader_ReadResultInfo_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_IDriveTrain___System_String_"></a> ReadResultInfo\(ResultDocument, Identifier, IDriveTrain\[\], string\)

```csharp
public bool ReadResultInfo(ResultDocument parentDocument, Identifier analysisResultID, IDriveTrain[] driveTrainInfos, string dfmPath)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`driveTrainInfos` IDriveTrain\[\]

`dfmPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DrivetrainReader_SetGearSetFileType_VM_Models_Post_IGearSet___VM_Models_Post_DriveTrainFileType_"></a> SetGearSetFileType\(IGearSet\[\], DriveTrainFileType\)

```csharp
protected void SetGearSetFileType(IGearSet[] gearSets, DriveTrainFileType type)
```

#### Parameters

`gearSets` IGearSet\[\]

`type` DriveTrainFileType

