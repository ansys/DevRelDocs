#  Class CADOperation

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

CADOperation

```csharp
public class CADOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CADOperation](VM.Managed.DAFUL.CADOperation.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_CADOperation__ctor"></a> CADOperation\(\)

```csharp
public CADOperation()
```

## Methods

### <a id="VM_Managed_DAFUL_CADOperation_CalcBoundingBox_VM_Managed_DAFUL_PartDocument_VM_Managed_IDesignFrame_"></a> CalcBoundingBox\(PartDocument, IDesignFrame\)

calculate bounding box.

```csharp
public static double[] CalcBoundingBox(PartDocument docPart, IDesignFrame designFrame)
```

#### Parameters

`docPart` [PartDocument](VM.Managed.DAFUL.PartDocument.md)

The document.

`designFrame` IDesignFrame

The design frame.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The bounding box.

### <a id="VM_Managed_DAFUL_CADOperation_GetProfilePointOfCurveset_VM_Managed_DAFUL_IContactableRigid2D_System_Boolean__System_Collections_Generic_List_VM_Managed_VectorBase___"></a> GetProfilePointOfCurveset\(IContactableRigid2D, ref bool, ref List<VectorBase\>\)

Get profile point of curveset

```csharp
public static int GetProfilePointOfCurveset(IContactableRigid2D curveset, ref bool bCloseLoop, ref List<VectorBase> lst)
```

#### Parameters

`curveset` [IContactableRigid2D](VM.Managed.DAFUL.IContactableRigid2D.md)

The curveset.

`bCloseLoop` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The close loop.

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The profile point list.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of profile point.

### <a id="VM_Managed_DAFUL_CADOperation_RecalcMassProp_VM_Managed_DAFUL_PartDocument_MassProperty_"></a> RecalcMassProp\(MassProperty\)

Re-calculation mass property.

```csharp
public static void RecalcMassProp(PartDocument.MassProperty mp)
```

#### Parameters

`mp` [PartDocument](VM.Managed.DAFUL.PartDocument.md).[MassProperty](VM.Managed.DAFUL.PartDocument.MassProperty.md)

The material property.

