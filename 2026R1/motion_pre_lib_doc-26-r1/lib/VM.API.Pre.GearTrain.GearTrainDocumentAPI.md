# Class GearTrainDocumentAPI
<a id="VM_API_Pre_GearTrain_GearTrainDocumentAPI"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for gear train document.

```csharp
public static class GearTrainDocumentAPI
```

#### Inheritance

object ← 
[GearTrainDocumentAPI](VM.API.Pre.GearTrain.GearTrainDocumentAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_GearTrainDocumentAPI_CreateNewGearTrainDocument_System_String_System_String_VM_Vector_VM_Unit_System_Double_System_Boolean_VM_Plane_System_Boolean_VM_API_Pre_LengthUnitType_System_Double_System_Double_System_Double_"></a> CreateNewGearTrainDocument\(string, string, Vector, Unit, double, bool, Plane, bool, LengthUnitType, double, double, double\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static GearTrainDocument CreateNewGearTrainDocument(string newGearTrainFilePath, string documentName = "Subsystem", Vector gravity = default, Unit unit = null, double iconSize = 1, bool advancedMode = true, Plane symmetricPlane = Plane.YZ, bool useSymmetric = false, LengthUnitType kernelLengthUnit = LengthUnitType.M, double shaftDirectionX = 0, double shaftDirectionY = 1, double shaftDirectionZ = 0)
```

#### Parameters

`newGearTrainFilePath` string

The file path of new gear train subsystem.

`documentName` string

The name of document. The default value is Subsystem.

`gravity` Vector

The gravity value.

`unit` Unit

The unit information.

`iconSize` double

The size of icon.

`advancedMode` bool

The flag whether using advanced mode.

`symmetricPlane` Plane

The symetric plane.

`useSymmetric` bool

The flag whether using symmetric.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

`shaftDirectionX` double

The x direction of shaft.

`shaftDirectionY` double

The y direction of shaft.

`shaftDirectionZ` double

The z direction of shaft.

#### Returns

 [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The new DocumentChainedPath object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'newLinkPathFilePath' argument is null.

