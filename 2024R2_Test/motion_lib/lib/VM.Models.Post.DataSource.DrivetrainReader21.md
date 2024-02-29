# <a id="VM_Models_Post_DataSource_DrivetrainReader21"></a> Class DrivetrainReader21

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class DrivetrainReader21 : DrivetrainReader, IDriveTrainReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DrivetrainReader](VM.Models.Post.DataSource.DrivetrainReader.md) ← 
[DrivetrainReader21](VM.Models.Post.DataSource.DrivetrainReader21.md)

#### Implements

IDriveTrainReader

#### Inherited Members

[DrivetrainReader.Separators](VM.Models.Post.DataSource.DrivetrainReader.md\#VM\_Models\_Post\_DataSource\_DrivetrainReader\_Separators), 
[DrivetrainReader.ReadAssemblyManagerInfo\(ResultDocument, Identifier, IDriveTrain\[\], string\)](VM.Models.Post.DataSource.DrivetrainReader.md\#VM\_Models\_Post\_DataSource\_DrivetrainReader\_ReadAssemblyManagerInfo\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_IDriveTrain\_\_\_System\_String\_), 
[DrivetrainReader.ReadColormapInfo\(GearSet\[\], string\)](VM.Models.Post.DataSource.DrivetrainReader.md\#VM\_Models\_Post\_DataSource\_DrivetrainReader\_ReadColormapInfo\_VM\_Models\_Post\_DriveTrains\_GearSet\_\_\_System\_String\_), 
[DrivetrainReader.ReadResultInfo\(ResultDocument, Identifier, IDriveTrain\[\], string\)](VM.Models.Post.DataSource.DrivetrainReader.md\#VM\_Models\_Post\_DataSource\_DrivetrainReader\_ReadResultInfo\_VM\_Models\_Post\_ResultDocument\_VM\_Identifier\_VM\_Models\_Post\_IDriveTrain\_\_\_System\_String\_), 
[DrivetrainReader.GetSamplingInfo\(StreamReader\)](VM.Models.Post.DataSource.DrivetrainReader.md\#VM\_Models\_Post\_DataSource\_DrivetrainReader\_GetSamplingInfo\_System\_IO\_StreamReader\_), 
[DrivetrainReader.RaadFiltType\(StreamReader\)](VM.Models.Post.DataSource.DrivetrainReader.md\#VM\_Models\_Post\_DataSource\_DrivetrainReader\_RaadFiltType\_System\_IO\_StreamReader\_), 
[DrivetrainReader.ReadColorMapData\(StreamReader, int, int, ref double\[\]\)](VM.Models.Post.DataSource.DrivetrainReader.md\#VM\_Models\_Post\_DataSource\_DrivetrainReader\_ReadColorMapData\_System\_IO\_StreamReader\_System\_Int32\_System\_Int32\_System\_Double\_\_\_\_), 
[DrivetrainReader.ReadLine\(StreamReader, ref string\)](VM.Models.Post.DataSource.DrivetrainReader.md\#VM\_Models\_Post\_DataSource\_DrivetrainReader\_ReadLine\_System\_IO\_StreamReader\_System\_String\_\_), 
[DrivetrainReader.SetGearSetFileType\(IGearSet\[\], DriveTrainFileType\)](VM.Models.Post.DataSource.DrivetrainReader.md\#VM\_Models\_Post\_DataSource\_DrivetrainReader\_SetGearSetFileType\_VM\_Models\_Post\_IGearSet\_\_\_VM\_Models\_Post\_DriveTrainFileType\_)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_DataSource_DrivetrainReader21__ctor"></a> DrivetrainReader21\(\)

```csharp
public DrivetrainReader21()
```

## Methods

### <a id="VM_Models_Post_DataSource_DrivetrainReader21_ReadAssemblyManagerInfo_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_IDriveTrain___System_String_"></a> ReadAssemblyManagerInfo\(ResultDocument, Identifier, IDriveTrain\[\], string\)

```csharp
public override bool ReadAssemblyManagerInfo(ResultDocument parentDocument, Identifier analysisResultID, IDriveTrain[] assemblyInfo, string filepath)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`assemblyInfo` IDriveTrain\[\]

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

