#  Class CarDocumentAPI

Namespace: [VM.API.Pre.Car](VM.API.Pre.Car.md)  
Assembly: VM.API.Pre.Car.dll  

This class implements APIs for document.

```csharp
public static class CarDocumentAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CarDocumentAPI](VM.API.Pre.Car.CarDocumentAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Car_CarDocumentAPI_ChangeGroupDriveline_VM_Managed_DAFUL_Car_TestRigDocumentBase_System_Boolean_System_Boolean_"></a> ChangeGroupDriveline\(TestRigDocumentBase, bool, bool\)

Change group driveline.

```csharp
[NotNull(new string[] { "document" })]
public static void ChangeGroupDriveline(this TestRigDocumentBase document, bool activeFront, bool activeRear)
```

#### Parameters

`document` TestRigDocumentBase

The document to be changed group.

`activeFront` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag for active front.

`activeRear` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag for active rear.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### <a id="VM_API_Pre_Car_CarDocumentAPI_ChangeGroupKinematicAndCompliance_VM_Managed_DAFUL_Car_TestRigDocumentBase_System_Boolean_"></a> ChangeGroupKinematicAndCompliance\(TestRigDocumentBase, bool\)

Change group kinematic and compliance.

```csharp
[NotNull(new string[] { "document" })]
public static void ChangeGroupKinematicAndCompliance(this TestRigDocumentBase document, bool kinematic)
```

#### Parameters

`document` TestRigDocumentBase

The document to be changed group.

`kinematic` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag for using kinematic.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewAntiRollBarFromTemplateDocument_System_String_System_String_VM_Managed_DAFUL_Car_MinorRole_"></a> CreateNewAntiRollBarFromTemplateDocument\(string, string, MinorRole\)

Create <xref href="VM.Managed.DAFUL.Car.AntiRollBarDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static AntiRollBarDocument CreateNewAntiRollBarFromTemplateDocument(string newAntiRollBarFromTemplateFilePath, string existedAntiRollBarTemplateFilePath, MinorRole minorRole = MinorRole.Any)
```

#### Parameters

`newAntiRollBarFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new anti-roll bar from template file path.

`existedAntiRollBarTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of existed anti-roll bar template file path.

`minorRole` MinorRole

The minor role type. The default value is Any.

#### Returns

 AntiRollBarDocument

The new <xref href="VM.Managed.DAFUL.Car.AntiRollBarDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewAntiRollBarTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewAntiRollBarTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.AntiRollBarDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static AntiRollBarDocument CreateNewAntiRollBarTemplateDocument(string newAntiRollBarFilePath, string documentName = "AntiRollBar", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newAntiRollBarFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new anti-roll bar.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is AntiRollBar.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 AntiRollBarDocument

The new <xref href="VM.Managed.DAFUL.Car.AntiRollBarDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newAntiRollBarFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewBodyFromTemplateDocument_System_String_System_String_VM_Managed_DAFUL_Car_MinorRole_"></a> CreateNewBodyFromTemplateDocument\(string, string, MinorRole\)

Create <xref href="VM.Managed.DAFUL.Car.BodyDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static BodyDocument CreateNewBodyFromTemplateDocument(string newBodyFromTemplateFilePath, string existedBodyTemplateFilePath, MinorRole minorRole = MinorRole.Any)
```

#### Parameters

`newBodyFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new body from template file path.

`existedBodyTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of existed body template file path.

`minorRole` MinorRole

The minor role type. The default value is Any.

#### Returns

 BodyDocument

The new <xref href="VM.Managed.DAFUL.Car.BodyDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewBodyTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewBodyTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.BodyDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static BodyDocument CreateNewBodyTemplateDocument(string newBodyFilePath, string documentName = "Body", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newBodyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new body.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is Body.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 BodyDocument

The new <xref href="VM.Managed.DAFUL.Car.BodyDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newBodyFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewBrakeSystemFromTemplateDocument_System_String_System_String_VM_Managed_DAFUL_Car_MinorRole_"></a> CreateNewBrakeSystemFromTemplateDocument\(string, string, MinorRole\)

Create <xref href="VM.Managed.DAFUL.Car.BrakeSystemDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static BrakeSystemDocument CreateNewBrakeSystemFromTemplateDocument(string newBrakeSystemFromTemplateFilePath, string existedBrakeSystemTemplateFilePath, MinorRole minorRole = MinorRole.Any)
```

#### Parameters

`newBrakeSystemFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new brake system from template file path.

`existedBrakeSystemTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of existed brake system template file path.

`minorRole` MinorRole

The minor role type. The default value is Any.

#### Returns

 BrakeSystemDocument

The new <xref href="VM.Managed.DAFUL.Car.BrakeSystemDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewBrakeSystemTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewBrakeSystemTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.BrakeSystemDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static BrakeSystemDocument CreateNewBrakeSystemTemplateDocument(string newBrakeSystemFilePath, string documentName = "BrakeSystem", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newBrakeSystemFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new brake system.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is BrakeSystem.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 BrakeSystemDocument

The new <xref href="VM.Managed.DAFUL.Car.BrakeSystemDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newBrakeSystemFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewBumpStopPropertyDocument_System_String_System_String_VM_Unit_VM_API_Pre_LengthUnitType_"></a> CreateNewBumpStopPropertyDocument\(string, string, Unit, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.Force.PropertyBumpstopDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PropertyBumpstopDocument CreateNewBumpStopPropertyDocument(string newBumpStopPropertyFilePath, string documentName = "Bumpstop", Unit unit = null, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newBumpStopPropertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new bump stop property file path.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is Bumpstop.

`unit` Unit

The unit information.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 PropertyBumpstopDocument

The new <xref href="VM.Managed.DAFUL.Car.Force.PropertyBumpstopDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewBushPropertyDocument_System_String_System_String_VM_Unit_VM_API_Pre_LengthUnitType_"></a> CreateNewBushPropertyDocument\(string, string, Unit, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Force.PropertyBushDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PropertyBushDocument CreateNewBushPropertyDocument(string newBushPropertyFilePath, string documentName = "Bush", Unit unit = null, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newBushPropertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new bump stop property file path.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is Bush.

`unit` Unit

The unit information.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 PropertyBushDocument

The new <xref href="VM.Managed.DAFUL.Force.PropertyBushDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewDamperPropertyDocument_System_String_System_String_VM_Unit_VM_API_Pre_LengthUnitType_"></a> CreateNewDamperPropertyDocument\(string, string, Unit, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.Force.PropertyDamperDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PropertyDamperDocument CreateNewDamperPropertyDocument(string newDamperPropertyFilePath, string documentName = "Damper", Unit unit = null, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newDamperPropertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new bump stop property file path.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is Damper.

`unit` Unit

The unit information.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 PropertyDamperDocument

The new <xref href="VM.Managed.DAFUL.Car.Force.PropertyDamperDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewDriveLineFromTemplateDocument_System_String_System_String_VM_Managed_DAFUL_Car_MinorRole_"></a> CreateNewDriveLineFromTemplateDocument\(string, string, MinorRole\)

Create <xref href="VM.Managed.DAFUL.Car.DriveLineDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static DriveLineDocument CreateNewDriveLineFromTemplateDocument(string newDriveLineFromTemplateFilePath, string existedDriveLineTemplateFilePath, MinorRole minorRole = MinorRole.Any)
```

#### Parameters

`newDriveLineFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new drive line from template file path.

`existedDriveLineTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of existed drive line template file path.

`minorRole` MinorRole

The minor role type. The default value is Any.

#### Returns

 DriveLineDocument

The new <xref href="VM.Managed.DAFUL.Car.DriveLineDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewDriveLineTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewDriveLineTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.DriveLineDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static DriveLineDocument CreateNewDriveLineTemplateDocument(string newDriveLineFilePath, string documentName = "DriveLine", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newDriveLineFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new drive line.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is DriveLine.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 DriveLineDocument

The new <xref href="VM.Managed.DAFUL.Car.DriveLineDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newDriveLineFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewFourPostTestRigFromTemplateDocument_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String___VM_Vector_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewFourPostTestRigFromTemplateDocument\(string, string, string, string, string, string, string, string, string, string, string\[\], Vector, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.FourPostTestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newTestRigFromTemplateFilePath" })]
[ExistFile(new string[] { "testRigTemplateFilePath", "frontSuspensionFromTemplateFilePath", "rearSuspensionFromTemplateFilePath", "steeringFromTemplateFilePath", "frontWheelFromTemplateFilePath", "rearWheelFromTemplateFilePath", "bodyFromTemplateFilePath" })]
public static FourPostTestRigDocument CreateNewFourPostTestRigFromTemplateDocument(string newTestRigFromTemplateFilePath, string testRigTemplateFilePath, string frontSuspensionFromTemplateFilePath, string rearSuspensionFromTemplateFilePath, string steeringFromTemplateFilePath, string frontWheelFromTemplateFilePath, string rearWheelFromTemplateFilePath, string bodyFromTemplateFilePath, string breakFromTemplateFilePath = null, string powerTrainFromTemplateFilePath = null, string[] otherFromTemplateFilePath = null, Vector gravity = default, Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new 4-post test-rig from template file path.

`testRigTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of test-rig template file path.

`frontSuspensionFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of front suspension template file path.

`rearSuspensionFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of rear suspension template file path.

`steeringFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of steering template file path.

`frontWheelFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of front wheel template file path.

`rearWheelFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of rear wheel template file path.

`bodyFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of body template file path.

`breakFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of break template file path.

`powerTrainFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of power train template file path.

`otherFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The file path of other template file path. The default value is null.

`gravity` Vector

The gravity value.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 FourPostTestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.FourPostTestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFromTemplateFilePath' argument is null.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'testRigTemplateFilePath', 'frontSuspensionFromTemplateFilePath', 'rearSuspensionFromTemplateFilePath', 'steeringFromTemplateFilePath', 'frontWheelFromTemplateFilePath', 'rearWheelFromTemplateFilePath', 'bodyFromTemplateFilePath' files are not exist.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewFourPostTestRigTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewFourPostTestRigTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.FourPostTestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static FourPostTestRigDocument CreateNewFourPostTestRigTemplateDocument(string newTestRigFilePath, string documentName = "FourPostTestRig", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new 4 post test-rig.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is test rig.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 FourPostTestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.FourPostTestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewFullCarTestRigFromTemplateDocument_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String___VM_Vector_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewFullCarTestRigFromTemplateDocument\(string, string, string, string, string, string, string, string, string, string, string\[\], Vector, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.VehicleTestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newTestRigFromTemplateFilePath" })]
[ExistFile(new string[] { "testRigTemplateFilePath", "frontSuspensionFromTemplateFilePath", "rearSuspensionFromTemplateFilePath", "steeringFromTemplateFilePath", "frontWheelFromTemplateFilePath", "rearWheelFromTemplateFilePath", "bodyFromTemplateFilePath" })]
public static VehicleTestRigDocument CreateNewFullCarTestRigFromTemplateDocument(string newTestRigFromTemplateFilePath, string testRigTemplateFilePath, string frontSuspensionFromTemplateFilePath, string rearSuspensionFromTemplateFilePath, string steeringFromTemplateFilePath, string frontWheelFromTemplateFilePath, string rearWheelFromTemplateFilePath, string bodyFromTemplateFilePath, string breakFromTemplateFilePath = null, string powerTrainFromTemplateFilePath = null, string[] otherFromTemplateFilePath = null, Vector gravity = default, Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new full test-rig from template file path.

`testRigTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of test-rig template file path.

`frontSuspensionFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of front suspension template file path.

`rearSuspensionFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of rear suspension template file path.

`steeringFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of steering template file path.

`frontWheelFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of front wheel template file path.

`rearWheelFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of rear wheel template file path.

`bodyFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of body template file path.

`breakFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of break template file path.

`powerTrainFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of power train template file path.

`otherFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The file path of other template file path. The default value is null.

`gravity` Vector

The gravity value.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 VehicleTestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.VehicleTestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFromTemplateFilePath' argument is null.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'testRigTemplateFilePath', 'frontSuspensionFromTemplateFilePath', 'rearSuspensionFromTemplateFilePath', 'steeringFromTemplateFilePath', 'frontWheelFromTemplateFilePath', 'rearWheelFromTemplateFilePath', 'bodyFromTemplateFilePath' files are not exist.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewFullCarTestRigTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewFullCarTestRigTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.VehicleTestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static VehicleTestRigDocument CreateNewFullCarTestRigTemplateDocument(string newTestRigFilePath, string documentName = "VehicleTestRig", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new full test-rig.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is test rig.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 VehicleTestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.VehicleTestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewHalfCarTestRigFromTemplateDocument_System_String_System_String_System_String_System_String_System_String___VM_Vector_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewHalfCarTestRigFromTemplateDocument\(string, string, string, string, string\[\], Vector, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.TestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newTestRigFromTemplateFilePath" })]
[ExistFile(new string[] { "testRigTemplateFilePath", "suspensionFromTemplateFilePath" })]
public static TestRigDocument CreateNewHalfCarTestRigFromTemplateDocument(string newTestRigFromTemplateFilePath, string testRigTemplateFilePath, string suspensionFromTemplateFilePath, string steeringFromTemplateFilePath = null, string[] otherFromTemplateFilePath = null, Vector gravity = default, Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new half test-rig from template file path.

`testRigTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of half test-rig template file path.

`suspensionFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of suspension template file path.

`steeringFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of steering template file path. The default value is null.

`otherFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The file path of other template file path. The default value is null.

`gravity` Vector

The gravity value.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 TestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.TestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFromTemplateFilePath' argument is null.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'testRigTemplateFilePath', 'suspensionFromTemplateFilePath' files are not exist.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewHalfCarTestRigTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewHalfCarTestRigTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.TestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static TestRigDocument CreateNewHalfCarTestRigTemplateDocument(string newTestRigFilePath, string documentName = "Suspension", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new half test-rig.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is test rig.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 TestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.TestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewPowerTrainFromTemplateDocument_System_String_System_String_VM_Managed_DAFUL_Car_MinorRole_"></a> CreateNewPowerTrainFromTemplateDocument\(string, string, MinorRole\)

Create <xref href="VM.Managed.DAFUL.Car.PowerTrainDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PowerTrainDocument CreateNewPowerTrainFromTemplateDocument(string newPowerTrainFromTemplateFilePath, string existedPowerTrainTemplateFilePath, MinorRole minorRole = MinorRole.Any)
```

#### Parameters

`newPowerTrainFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new power train from template file path.

`existedPowerTrainTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of existed power train template file path.

`minorRole` MinorRole

The minor role type. The default value is Any.

#### Returns

 PowerTrainDocument

The new <xref href="VM.Managed.DAFUL.Car.PowerTrainDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewPowerTrainTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewPowerTrainTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.PowerTrainDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PowerTrainDocument CreateNewPowerTrainTemplateDocument(string newPowerTrainFilePath, string documentName = "PowerTrain", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newPowerTrainFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new power train.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is PowerTrain.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 PowerTrainDocument

The new <xref href="VM.Managed.DAFUL.Car.PowerTrainDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newPowerTrainFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewReboundStopPropertyDocument_System_String_System_String_VM_Unit_VM_API_Pre_LengthUnitType_"></a> CreateNewReboundStopPropertyDocument\(string, string, Unit, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.Force.PropertyReboundstopDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PropertyReboundstopDocument CreateNewReboundStopPropertyDocument(string newReboundStopPropertyFilePath, string documentName = "ReboundStop", Unit unit = null, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newReboundStopPropertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new bump stop property file path.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is ReboundStop.

`unit` Unit

The unit information.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 PropertyReboundstopDocument

The new <xref href="VM.Managed.DAFUL.Car.Force.PropertyReboundstopDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewShimmyAndJudderTestRigFromTemplateDocument_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String___VM_Vector_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewShimmyAndJudderTestRigFromTemplateDocument\(string, string, string, string, string, string, string, string, string\[\], Vector, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.ShimmyJudderTestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newTestRigFromTemplateFilePath" })]
[ExistFile(new string[] { "testRigTemplateFilePath", "frontSuspensionFromTemplateFilePath", "rearSuspensionFromTemplateFilePath", "steeringFromTemplateFilePath", "bodyFromTemplateFilePath" })]
public static ShimmyJudderTestRigDocument CreateNewShimmyAndJudderTestRigFromTemplateDocument(string newTestRigFromTemplateFilePath, string testRigTemplateFilePath, string frontSuspensionFromTemplateFilePath, string rearSuspensionFromTemplateFilePath, string steeringFromTemplateFilePath, string bodyFromTemplateFilePath, string breakFromTemplateFilePath = null, string powerTrainFromTemplateFilePath = null, string[] otherFromTemplateFilePath = null, Vector gravity = default, Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new shimmy and judder test-rig from template file path.

`testRigTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of test-rig template file path.

`frontSuspensionFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of front suspension template file path.

`rearSuspensionFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of rear suspension template file path.

`steeringFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of steering template file path.

`bodyFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of body template file path.

`breakFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of break template file path.

`powerTrainFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of power train template file path.

`otherFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The file path of other template file path. The default value is null.

`gravity` Vector

The gravity value.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 ShimmyJudderTestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.ShimmyJudderTestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFromTemplateFilePath' argument is null.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'testRigTemplateFilePath', 'frontSuspensionFromTemplateFilePath', 'rearSuspensionFromTemplateFilePath', 'steeringFromTemplateFilePath', 'bodyFromTemplateFilePath' files are not exist.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewShimmyAndJudderTestRigTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewShimmyAndJudderTestRigTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.ShimmyJudderTestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static ShimmyJudderTestRigDocument CreateNewShimmyAndJudderTestRigTemplateDocument(string newTestRigFilePath, string documentName = "ShimmyJudderTestRig", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new shimmy and judder test-rig.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is test rig.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 ShimmyJudderTestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.ShimmyJudderTestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewSpringPropertyDocument_System_String_System_String_VM_Unit_VM_API_Pre_LengthUnitType_"></a> CreateNewSpringPropertyDocument\(string, string, Unit, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.Force.PropertySpringDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PropertySpringDocument CreateNewSpringPropertyDocument(string newSpringPropertyFilePath, string documentName = "Spring", Unit unit = null, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newSpringPropertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new bump stop property file path.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is Spring.

`unit` Unit

The unit information.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 PropertySpringDocument

The new <xref href="VM.Managed.DAFUL.Car.Force.PropertySpringDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewSteeringFromTemplateDocument_System_String_System_String_VM_Managed_DAFUL_Car_MinorRole_"></a> CreateNewSteeringFromTemplateDocument\(string, string, MinorRole\)

Create <xref href="VM.Managed.DAFUL.Car.SteeringDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static SteeringDocument CreateNewSteeringFromTemplateDocument(string newSteeringFromTemplateFilePath, string existedSteeringTemplateFilePath, MinorRole minorRole = MinorRole.Front)
```

#### Parameters

`newSteeringFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new steering from template file path.

`existedSteeringTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of existed steering template file path.

`minorRole` MinorRole

The minor role type. The default value is Front.

#### Returns

 SteeringDocument

The new <xref href="VM.Managed.DAFUL.Car.SteeringDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewSteeringTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewSteeringTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.SteeringDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static SteeringDocument CreateNewSteeringTemplateDocument(string newSteeringFilePath, string documentName = "Steering", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newSteeringFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new steering.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is Steering.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 SteeringDocument

The new <xref href="VM.Managed.DAFUL.Car.SteeringDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newSteeringFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewSuspensionFromTemplateDocument_System_String_System_String_VM_Managed_DAFUL_Car_MinorRole_"></a> CreateNewSuspensionFromTemplateDocument\(string, string, MinorRole\)

Create <xref href="VM.Managed.DAFUL.Car.SuspensionDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static SuspensionDocument CreateNewSuspensionFromTemplateDocument(string newSuspensionFromTemplateFilePath, string existedSuspensionTemplateFilePath, MinorRole minorRole = MinorRole.Front)
```

#### Parameters

`newSuspensionFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new suspension from template file path.

`existedSuspensionTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of existed suspension template file path.

`minorRole` MinorRole

The minor role type. The default value is Front.

#### Returns

 SuspensionDocument

The new <xref href="VM.Managed.DAFUL.Car.SuspensionDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewSuspensionTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewSuspensionTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.SuspensionDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static SuspensionDocument CreateNewSuspensionTemplateDocument(string newSuspensionFilePath, string documentName = "Suspension", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newSuspensionFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new suspension.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is suspension.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 SuspensionDocument

The new <xref href="VM.Managed.DAFUL.Car.SuspensionDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newSuspensionFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewTireTestRigFromTemplateDocument_System_String_System_String_System_String_VM_Vector_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewTireTestRigFromTemplateDocument\(string, string, string, Vector, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.TireTestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newTestRigFromTemplateFilePath" })]
[ExistFile(new string[] { "testRigTemplateFilePath", "wheelFromTemplateFilePath" })]
public static TireTestRigDocument CreateNewTireTestRigFromTemplateDocument(string newTestRigFromTemplateFilePath, string testRigTemplateFilePath, string wheelFromTemplateFilePath, Vector gravity = default, Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new tire test-rig from template file path.

`testRigTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of test-rig template file path.

`wheelFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of wheel template file path.

`gravity` Vector

The gravity value.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

#### Returns

 TireTestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.TireTestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFromTemplateFilePath' argument is null.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'testRigTemplateFilePath', 'wheelFromTemplateFilePath' files are not exist.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewTireTestRigTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewTireTestRigTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.TireTestRigDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static TireTestRigDocument CreateNewTireTestRigTemplateDocument(string newTestRigFilePath, string documentName = "TireTestRig", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newTestRigFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new tire test-rig.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is test rig.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 TireTestRigDocument

The new <xref href="VM.Managed.DAFUL.Car.TireTestRigDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newTestRigFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewWheelFromTemplateDocument_System_String_System_String_VM_Managed_DAFUL_Car_MinorRole_"></a> CreateNewWheelFromTemplateDocument\(string, string, MinorRole\)

Create <xref href="VM.Managed.DAFUL.Car.WheelDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static WheelDocument CreateNewWheelFromTemplateDocument(string newWheelFromTemplateFilePath, string existedWheelTemplateFilePath, MinorRole minorRole = MinorRole.Front)
```

#### Parameters

`newWheelFromTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new wheel from template file path.

`existedWheelTemplateFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of existed wheel template file path.

`minorRole` MinorRole

The minor role type. The default value is Front.

#### Returns

 WheelDocument

The new <xref href="VM.Managed.DAFUL.Car.WheelDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_Car_CarDocumentAPI_CreateNewWheelTemplateDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewWheelTemplateDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Car.WheelDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static WheelDocument CreateNewWheelTemplateDocument(string newWheelFilePath, string documentName = "Wheel", Unit unit = null, double iconSize = 1, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newWheelFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new wheel.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is Wheel.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon. The default value is 1.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 WheelDocument

The new <xref href="VM.Managed.DAFUL.Car.WheelDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newWheelFilePath' argument is null.

### <a id="VM_API_Pre_Car_CarDocumentAPI_FourPostReplaceAssembly_VM_Managed_DAFUL_Car_FourPostTestRigDocument_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> FourPostReplaceAssembly\(FourPostTestRigDocument, string, string, string, string, string, string, string, string, IEnumerable<string\>\)

Replace 4-Post assembly.

```csharp
public static void FourPostReplaceAssembly(this FourPostTestRigDocument document, string frontSuspensionPath = "", string rearSuspensionPath = "", string steeringPath = "", string frontWheelPath = "", string rearWheelPath = "", string bodyPath = "", string brakePath = "", string powerTrainPath = "", IEnumerable<string> otherPaths = null)
```

#### Parameters

`document` FourPostTestRigDocument

The document to be replaced.

`frontSuspensionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The front suspension path. The default value is "".

`rearSuspensionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rear suspension path. The default value is "".

`steeringPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The steering path. The default value is "".

`frontWheelPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The front wheel path. The default value is "".

`rearWheelPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rear wheel path. The default value is "".

`bodyPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body path. The default value is "".

`brakePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The brake path. The default value is "".

`powerTrainPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The power train path. The default value is "".

`otherPaths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The other paths. The default value is "".

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### <a id="VM_API_Pre_Car_CarDocumentAPI_FullCarReplaceAssembly_VM_Managed_DAFUL_Car_VehicleTestRigDocument_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> FullCarReplaceAssembly\(VehicleTestRigDocument, string, string, string, string, string, string, string, string, IEnumerable<string\>\)

Replace full car assembly.

```csharp
public static void FullCarReplaceAssembly(this VehicleTestRigDocument document, string frontSuspensionPath = "", string rearSuspensionPath = "", string steeringPath = "", string frontWheelPath = "", string rearWheelPath = "", string bodyPath = "", string brakePath = "", string powerTrainPath = "", IEnumerable<string> otherPaths = null)
```

#### Parameters

`document` VehicleTestRigDocument

The document to be replaced.

`frontSuspensionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The front suspension path. The default value is "".

`rearSuspensionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rear suspension path. The default value is "".

`steeringPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The steering path. The default value is "".

`frontWheelPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The front wheel path. The default value is "".

`rearWheelPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rear wheel path. The default value is "".

`bodyPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body path. The default value is "".

`brakePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The brake path. The default value is "".

`powerTrainPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The power train path. The default value is "".

`otherPaths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The other paths. The default value is "".

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### <a id="VM_API_Pre_Car_CarDocumentAPI_ModifyDesignParameter_VM_Managed_DAFUL_Car_TestRigDocumentBase_System_Collections_Generic_Dictionary_System_String_System_Collections_Generic_List_VM_Managed_DAFUL_Car_Operation_UpdateParameterOperation_ParamInfo___"></a> ModifyDesignParameter\(TestRigDocumentBase, Dictionary<string, List<ParamInfo\>\>\)

Modify design parameter.

```csharp
[NotNull(new string[] { "document", "dicParam" })]
public static void ModifyDesignParameter(this TestRigDocumentBase document, Dictionary<string, List<UpdateParameterOperation.ParamInfo>> dicParam)
```

#### Parameters

`document` TestRigDocumentBase

The document to be changed group.

`dicParam` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<UpdateParameterOperation.ParamInfo\>\>

The dictionary to be contained filepath and parameter information.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### <a id="VM_API_Pre_Car_CarDocumentAPI_ModifyModelingParameter_VM_Managed_DAFUL_Car_TestRigDocumentBase_VM_Managed_ObjectBase_"></a> ModifyModelingParameter\(TestRigDocumentBase, ObjectBase\)

Modify modeling parameter.

```csharp
[NotNull(new string[] { "document", "target" })]
public static void ModifyModelingParameter(this TestRigDocumentBase document, ObjectBase target)
```

#### Parameters

`document` TestRigDocumentBase

The document to be changed group.

`target` ObjectBase

The target.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### <a id="VM_API_Pre_Car_CarDocumentAPI_ShimmyJudderReplaceAssembly_VM_Managed_DAFUL_Car_ShimmyJudderTestRigDocument_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> ShimmyJudderReplaceAssembly\(ShimmyJudderTestRigDocument, string, string, string, string, string, string, IEnumerable<string\>\)

Replace full car assembly.

```csharp
public static void ShimmyJudderReplaceAssembly(this ShimmyJudderTestRigDocument document, string frontSuspensionPath = "", string rearSuspensionPath = "", string steeringPath = "", string bodyPath = "", string brakePath = "", string powerTrainPath = "", IEnumerable<string> otherPaths = null)
```

#### Parameters

`document` ShimmyJudderTestRigDocument

The document to be replaced.

`frontSuspensionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The front suspension path. The default value is "".

`rearSuspensionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rear suspension path. The default value is "".

`steeringPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The steering path. The default value is "".

`bodyPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body path. The default value is "".

`brakePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The brake path. The default value is "".

`powerTrainPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The power train path. The default value is "".

`otherPaths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The other paths. The default value is "".

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### <a id="VM_API_Pre_Car_CarDocumentAPI_SuspensionReplaceAssembly_VM_Managed_DAFUL_Car_TestRigDocument_System_String_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> SuspensionReplaceAssembly\(TestRigDocument, string, string, IEnumerable<string\>\)

Replace suspension assembly.

```csharp
public static void SuspensionReplaceAssembly(this TestRigDocument document, string suspensionPath = "", string steeringPath = "", IEnumerable<string> otherPaths = null)
```

#### Parameters

`document` TestRigDocument

The document to be replaced.

`suspensionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suspension path. The default value is "".

`steeringPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The steering path. The default value is "".

`otherPaths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The other paths. The default value is "".

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

### <a id="VM_API_Pre_Car_CarDocumentAPI_TireReplaceAssembly_VM_Managed_DAFUL_Car_TireTestRigDocument_System_String_"></a> TireReplaceAssembly\(TireTestRigDocument, string\)

Replace tire assembly.

```csharp
public static void TireReplaceAssembly(this TireTestRigDocument document, string wheelPath = "")
```

#### Parameters

`document` TireTestRigDocument

The document to be replaced.

`wheelPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The wheel path. The default value is "".

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'document' argument is not assembly.

