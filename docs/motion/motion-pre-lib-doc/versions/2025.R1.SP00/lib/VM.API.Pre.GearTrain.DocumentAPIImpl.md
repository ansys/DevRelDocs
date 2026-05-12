#  Class DocumentAPIImpl

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for gear train document.

```csharp
public static class DocumentAPIImpl
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DocumentAPIImpl](VM.API.Pre.GearTrain.DocumentAPIImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_DocumentAPIImpl_CreateNewGearTrainDocumentImpl__1_System_String_System_String_VM_Vector_VM_Unit_System_Double_System_Boolean_VM_Plane_System_Boolean_VM_API_Pre_LengthUnitType_VM_Managed_Vector_System_String_System_String_"></a> CreateNewGearTrainDocumentImpl<T\>\(string, string, Vector, Unit, double, bool, Plane, bool, LengthUnitType, Vector, string, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newGearTrainFilePath" })]
public static T CreateNewGearTrainDocumentImpl<T>(string newGearTrainFilePath, string documentName, Vector gravity, Unit unit, double iconSize, bool advancedMode, Plane symmetricPlane, bool useSymmetric, LengthUnitType kernelLengthUnit, Vector shaftDirection, string extension, string documentType) where T : GearTrainDocument
```

#### Parameters

`newGearTrainFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new gear train.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document.

`gravity` Vector

The gravity value.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon.

`advancedMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag whether using advanced mode.

`symmetricPlane` Plane

The symetric plane.

`useSymmetric` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag whether using symmetric.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

`shaftDirection` Vector

The direction of shaft.

`extension` [string](https://learn.microsoft.com/dotnet/api/system.string)

The extension.

`documentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The document type.

#### Returns

 T

The new <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Type Parameters

`T` 

The document type

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newMeshFilePath' argument is empty.

