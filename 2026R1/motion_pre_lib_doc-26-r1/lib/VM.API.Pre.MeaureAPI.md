# Class MeaureAPI
<a id="VM_API_Pre_MeaureAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for measure.

```csharp
public static class MeaureAPI
```

#### Inheritance

object ← 
[MeaureAPI](VM.API.Pre.MeaureAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_MeaureAPI_GetMass_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Double__System_Double____"></a> GetMass\(SubSystemDocument, IEnumerable<Obj\>, out double, out double\[\]\)

Get mass information given <xref href="VM.API.Pre.Obj?text=objects" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "subSystemDocument", "objs" })]
public static void GetMass(this SubSystemDocument subSystemDocument, IEnumerable<Obj> objs, out double mass, out double[] inertia)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to get mass.

`objs` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

The collection of <xref href="VM.API.Pre.Obj?text=objects" data-throw-if-not-resolved="false"></xref> to get mass.

`mass` double

The total mass.

`inertia` double\[\]

The total inertia.

#### Exceptions

 ArgumentNullException

Will be thrown when the collection of objects is null.

### <a id="VM_API_Pre_MeaureAPI_GetMass_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_TMatrix_System_Double__System_Double____"></a> GetMass\(SubSystemDocument, IEnumerable<Obj\>, TMatrix, out double, out double\[\]\)

Get mass information given <xref href="VM.API.Pre.Obj?text=objects+and+given+transform" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "subSystemDocument", "objs" })]
public static void GetMass(this SubSystemDocument subSystemDocument, IEnumerable<Obj> objs, TMatrix transform, out double mass, out double[] inertia)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to get mass.

`objs` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

The collection of <xref href="VM.API.Pre.Obj?text=objects" data-throw-if-not-resolved="false"></xref> to get mass.

`transform` TMatrix

The transform.

`mass` double

The total mass.

`inertia` double\[\]

The total inertia.

#### Exceptions

 ArgumentNullException

Will be thrown when the collection of objects is null.

