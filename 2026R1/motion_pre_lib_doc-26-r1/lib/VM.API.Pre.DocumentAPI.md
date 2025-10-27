# Class DocumentAPI
<a id="VM_API_Pre_DocumentAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for document.

```csharp
public static class DocumentAPI
```

#### Inheritance

object ← 
[DocumentAPI](VM.API.Pre.DocumentAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_DocumentAPI_CloseDocument_VM_Models_Pre_IDocument_"></a> CloseDocument\(IDocument\)

Close <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static void CloseDocument(this IDocument document)
```

#### Parameters

`document` IDocument

The document to be saved.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is null.

### <a id="VM_API_Pre_DocumentAPI_CreateNewPartDocument_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_"></a> CreateNewPartDocument\(string, string, Unit, double, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PartDocument CreateNewPartDocument(string newPartFilePath, string documentName = "Part", Unit unit = null, double iconSize = 1, LengthUnitType unused = LengthUnitType.M)
```

#### Parameters

`newPartFilePath` string

The file path of new part.

`documentName` string

The name of document.

`unit` Unit

The unit information.

`iconSize` double

The size of icon.

`unused` [LengthUnitType](VM.API.Pre.LengthUnitType.md)

This parameter is unused.

#### Returns

 [PartDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartDocument.cs)

The new <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_DocumentAPI_CreateNewSubsystemDocument_System_String_System_String_VM_Vector_VM_Unit_System_Double_System_Boolean_VM_Plane_System_Boolean_VM_API_Pre_LengthUnitType_"></a> CreateNewSubsystemDocument\(string, string, Vector, Unit, double, bool, Plane, bool, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static SubSystemDocument CreateNewSubsystemDocument(string newSubsystemFilePath, string documentName = "Subsystem", Vector gravity = default, Unit unit = null, double iconSize = 1, bool advancedMode = true, Plane symmetricPlane = Plane.YZ, bool useSymmetric = false, LengthUnitType unused = LengthUnitType.M)
```

#### Parameters

`newSubsystemFilePath` string

The file path of new subsystem.

`documentName` string

The name of document.

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

`unused` [LengthUnitType](VM.API.Pre.LengthUnitType.md)

This parameter is unused.

#### Returns

 [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The new <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_DocumentAPI_CreateNewSubsystemFromTemplateDocument_System_String_System_String_"></a> CreateNewSubsystemFromTemplateDocument\(string, string\)

Create <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static SubSystemDocument CreateNewSubsystemFromTemplateDocument(string newSubsystemFromTemplateFilePath, string existedSubsystemTemplateFilePath)
```

#### Parameters

`newSubsystemFromTemplateFilePath` string

The file path of new subsystem from template file path.

`existedSubsystemTemplateFilePath` string

The file path of existed subsystem template file path.

#### Returns

 [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The new <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_DocumentAPI_CreateNewTemplateDocument_System_String_System_String_VM_Vector_VM_Unit_System_Double_System_Boolean_VM_Plane_System_Boolean_VM_API_Pre_LengthUnitType_"></a> CreateNewTemplateDocument\(string, string, Vector, Unit, double, bool, Plane, bool, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newSubsystemTemplateFilePath" })]
public static SubSystemDocument CreateNewTemplateDocument(string newSubsystemTemplateFilePath, string documentName = "Subsystem_Template", Vector gravity = default, Unit unit = null, double iconSize = 1, bool advancedMode = true, Plane symmetricPlane = Plane.YZ, bool useSymmetric = false, LengthUnitType unused = LengthUnitType.M)
```

#### Parameters

`newSubsystemTemplateFilePath` string

The file path of new subsystem template.

`documentName` string

The name of document.

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

`unused` [LengthUnitType](VM.API.Pre.LengthUnitType.md)

This parameter is unused.

#### Returns

 [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The new <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

### <a id="VM_API_Pre_DocumentAPI_ModifyScenario_VM_Models_Pre_IDocument_VM_API_Pre_Obj_System_Boolean_"></a> ModifyScenario\(IDocument, Obj, bool\)

Modify <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[MatchTypeObj(new object[] { "scenario", typeof(Scenario) })]
public static void ModifyScenario(this IDocument document, Obj scenario, bool use = false)
```

#### Parameters

`document` IDocument

The document to modify the simulation scenario.

`scenario` [Obj](VM.API.Pre.Obj.md)

The simulation scenario.

`use` bool

The use flag to modify the simulation scenario.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is null.

 ArgumentException

Will be thrown if the type of 'scenario' is not Scenario.

### <a id="VM_API_Pre_DocumentAPI_SaveDocument_VM_Models_Pre_IDocument_"></a> SaveDocument\(IDocument\)

Save <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static void SaveDocument(this IDocument document)
```

#### Parameters

`document` IDocument

The document to be saved.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is null.

### <a id="VM_API_Pre_DocumentAPI_SaveDocument_VM_Models_Pre_IDocument_System_String_"></a> SaveDocument\(IDocument, string\)

Save <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "filePath" })]
public static void SaveDocument(this IDocument document, string filePath)
```

#### Parameters

`document` IDocument

The document to be saved.

`filePath` string

The document file path to be saved

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'filePath' arguments are null.

