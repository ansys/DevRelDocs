# Class LeafSpringOperationExtensions
<a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions"></a>

Namespace: [VM.Operations.Pre.Force](VM.Operations.Pre.Force.md)  
Assembly: VM.Operations.Pre.Force.dll  

```csharp
public static class LeafSpringOperationExtensions
```

#### Inheritance

object ← 
[LeafSpringOperationExtensions](VM.Operations.Pre.Force.LeafSpringOperationExtensions.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions_CopyBushPropertyValue_VM_Managed_DAFUL_Force_PropertyBush_VM_Managed_DAFUL_Force_PropertyBush_"></a> CopyBushPropertyValue\(PropertyBush, PropertyBush\)

```csharp
public static void CopyBushPropertyValue(PropertyBush target, PropertyBush source)
```

#### Parameters

`target` [PropertyBush](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFB/Bush.cs)

`source` [PropertyBush](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFB/Bush.cs)

### <a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions_CreateCenterBoltBody_VM_Managed_Document_System_String_VM_Vector_System_Double_System_Boolean_"></a> CreateCenterBoltBody\(Document, string, Vector, double, bool\)

```csharp
public static SolidBody CreateCenterBoltBody(Document document, string name, Vector position, double mass, bool addToDocument = true)
```

#### Parameters

`document` Document

`name` string

`position` Vector

`mass` double

`addToDocument` bool

#### Returns

 [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

### <a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions_CreateClipToLeafVectorForceUserSubroutine_VM_Managed_Document_VM_Managed_DAFUL_Force_PropertyVector_System_String_VM_Models_Pre_Force_Clip_VM_Managed_DAFUL_Beam_BeamGroup_System_Int32_VM_Managed_DAFUL_Marker_VM_Managed_DAFUL_CenterMarker_VM_Managed_DAFUL_SolidBody_System_Boolean_"></a> CreateClipToLeafVectorForceUserSubroutine\(Document, PropertyVector, string, Clip, BeamGroup, int, Marker, CenterMarker, SolidBody, bool\)

```csharp
public static UserSubroutine CreateClipToLeafVectorForceUserSubroutine(Document document, PropertyVector property, string name, Clip clip, BeamGroup leafBeamGroup, int beamGroupBodyIndex, Marker upperMarker, CenterMarker fixedBodyCenterMarker, SolidBody beamGroupBody, bool addToDocument = true)
```

#### Parameters

`document` Document

`property` [PropertyVector](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/Vector.cs)

`name` string

`clip` [Clip](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre.Force/Models/LeafSpring/Clip.cs)

`leafBeamGroup` [BeamGroup](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDBeamGroup/BeamGroup.cs)

`beamGroupBodyIndex` int

`upperMarker` [Marker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

`fixedBodyCenterMarker` [CenterMarker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

`beamGroupBody` [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

`addToDocument` bool

#### Returns

 [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

### <a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions_CreateEyeBody_VM_Managed_Document_System_String_System_ValueTuple_VM_Vector_VM_Vector__System_ValueTuple_System_Double_System_Double__System_Boolean_"></a> CreateEyeBody\(Document, string, \(Vector Top, Vector Bottom\), \(double Outer, double Inner\), bool\)

```csharp
public static SolidBody CreateEyeBody(Document document, string name, (Vector Top, Vector Bottom) position, (double Outer, double Inner) radius, bool addToDocument = true)
```

#### Parameters

`document` Document

`name` string

`position` \(Vector Top, Vector Bottom\)

`radius` \(double Outer, double Inner\)

`addToDocument` bool

#### Returns

 [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

### <a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions_CreateLeafToLeafVectorForceUserSubroutine_VM_Managed_Document_VM_Managed_DAFUL_Force_PropertyVector_System_String_VM_Models_Pre_Force_Leaf___System_Collections_Generic_IList_VM_Models_Pre_Force_LeafInfo__System_Int32_System_Int32_System_Int32_System_Int32_VM_Managed_DAFUL_CenterMarker_VM_Managed_DAFUL_CenterMarker_System_Boolean_"></a> CreateLeafToLeafVectorForceUserSubroutine\(Document, PropertyVector, string, Leaf\[\], IList<LeafInfo\>, int, int, int, int, CenterMarker, CenterMarker, bool\)

```csharp
public static UserSubroutine CreateLeafToLeafVectorForceUserSubroutine(Document document, PropertyVector property, string name, Leaf[] leaves, IList<LeafInfo> leafInfos, int baseLeafIndex, int baseBodyIndex, int actionLeafIndex, int actionBodyIndex, CenterMarker baseBodyCenterMarker, CenterMarker actionBodyCenterMarker, bool addToDocument = true)
```

#### Parameters

`document` Document

`property` [PropertyVector](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFP/Vector.cs)

`name` string

`leaves` [Leaf](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre.Force/Models/LeafSpring/Leaf.Linker.cs)\[\]

`leafInfos` IList<LeafInfo\>

`baseLeafIndex` int

`baseBodyIndex` int

`actionLeafIndex` int

`actionBodyIndex` int

`baseBodyCenterMarker` [CenterMarker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

`actionBodyCenterMarker` [CenterMarker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

`addToDocument` bool

#### Returns

 [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

### <a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions_GetConnectionOrientationForTestSimulation"></a> GetConnectionOrientationForTestSimulation\(\)

```csharp
public static OMatrix GetConnectionOrientationForTestSimulation()
```

#### Returns

 OMatrix

### <a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions_GetShackleBodyBuilder_System_Double_System_Int32_System_ValueTuple_VM_Vector_VM_Vector__System_ValueTuple_VM_Vector_VM_Vector__VM_Models_Pre_Force_Shackle_"></a> GetShackleBodyBuilder\(double, int, \(Vector Top, Vector Bottom\), \(Vector Top, Vector Bottom\), Shackle\)

```csharp
public static BuilderMulti GetShackleBodyBuilder(double mainLeafWidth, int directionY, (Vector Top, Vector Bottom) eyeHolePosition, (Vector Top, Vector Bottom) shackleHolePosition, Shackle shackle)
```

#### Parameters

`mainLeafWidth` double

`directionY` int

`eyeHolePosition` \(Vector Top, Vector Bottom\)

`shackleHolePosition` \(Vector Top, Vector Bottom\)

`shackle` [Shackle](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre.Force/Models/LeafSpring/Shackle.cs)

#### Returns

 BuilderMulti

### <a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions_GetclipBodyRadius_VM_Models_Pre_Force_Clip_"></a> GetclipBodyRadius\(Clip\)

```csharp
public static double GetclipBodyRadius(Clip clip)
```

#### Parameters

`clip` [Clip](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre.Force/Models/LeafSpring/Clip.cs)

#### Returns

 double

### <a id="VM_Operations_Pre_Force_LeafSpringOperationExtensions_SetBushPropertyAllZero_VM_Managed_DAFUL_Force_PropertyBush_"></a> SetBushPropertyAllZero\(PropertyBush\)

```csharp
public static void SetBushPropertyAllZero(PropertyBush propertyBush)
```

#### Parameters

`propertyBush` [PropertyBush](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFB/Bush.cs)

