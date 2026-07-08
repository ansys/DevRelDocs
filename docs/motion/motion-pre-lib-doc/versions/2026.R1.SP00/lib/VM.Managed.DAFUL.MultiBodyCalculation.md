# Class MultiBodyCalculation
<a id="VM_Managed_DAFUL_MultiBodyCalculation"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the calculate multi body.

```csharp
public class MultiBodyCalculation
```

#### Inheritance

object ← 
[MultiBodyCalculation](VM.Managed.DAFUL.MultiBodyCalculation.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_MultiBodyCalculation__ctor"></a> MultiBodyCalculation\(\)

```csharp
public MultiBodyCalculation()
```

## Methods

### <a id="VM_Managed_DAFUL_MultiBodyCalculation_GetTotalMassInertia_System_Collections_Generic_List_VM_Managed_VectorBase__System_Collections_Generic_List_VM_Managed_OMatrix__System_Collections_Generic_List_System_Double__System_Collections_Generic_List_VM_Unit__System_Collections_Generic_List_VM_Unit__System_Int32_VM_Managed_VectorBase_VM_Managed_DAFUL_MultiBodyCalculation_BodyInf__"></a> GetTotalMassInertia\(List<VectorBase\>, List<OMatrix\>, List<double\>, List<Unit\>, List<Unit\>, int, VectorBase, ref BodyInf\)

Gets the total mass inertia.

```csharp
public static bool GetTotalMassInertia(List<VectorBase> lstGlobalCMPos, List<OMatrix> lstGlobalTensor, List<double> lstGlobalMass, List<Unit> lstSrcUnit, List<Unit> lstDstUnit, int nNumberOfBody, VectorBase vecTargetPos, ref MultiBodyCalculation.BodyInf bodyInf)
```

#### Parameters

`lstGlobalCMPos` List<VectorBase\>

The global CM pos.

`lstGlobalTensor` List<OMatrix\>

The global tensor.

`lstGlobalMass` List<double\>

The global mass.

`lstSrcUnit` List<Unit\>

The unit of source document.

`lstDstUnit` List<Unit\>

The unit of current document.

`nNumberOfBody` int

The number of body.

`vecTargetPos` VectorBase

The target position.

`bodyInf` [MultiBodyCalculation](VM.Managed.DAFUL.MultiBodyCalculation.md).[BodyInf](VM.Managed.DAFUL.MultiBodyCalculation.BodyInf.md)

The body info.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_MultiBodyCalculation_GetTotalMassInertia_System_Collections_Generic_List_VM_Managed_VectorBase__System_Collections_Generic_List_VM_Managed_OMatrix__System_Collections_Generic_List_System_Double__System_Int32_VM_Managed_VectorBase_VM_Managed_DAFUL_MultiBodyCalculation_BodyInf__"></a> GetTotalMassInertia\(List<VectorBase\>, List<OMatrix\>, List<double\>, int, VectorBase, ref BodyInf\)

Gets the total mass inertia.

```csharp
public static bool GetTotalMassInertia(List<VectorBase> lstGlobalCMPos, List<OMatrix> lstGlobalTensor, List<double> lstGlobalMass, int nNumberOfBody, VectorBase vecTargetPos, ref MultiBodyCalculation.BodyInf bodyInf)
```

#### Parameters

`lstGlobalCMPos` List<VectorBase\>

The global CM pos.

`lstGlobalTensor` List<OMatrix\>

The global tensor.

`lstGlobalMass` List<double\>

The global mass.

`nNumberOfBody` int

The number of body.

`vecTargetPos` VectorBase

The target position.

`bodyInf` [MultiBodyCalculation](VM.Managed.DAFUL.MultiBodyCalculation.md).[BodyInf](VM.Managed.DAFUL.MultiBodyCalculation.BodyInf.md)

The body info.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_MultiBodyCalculation_GetTotalMassInertiaForAseembledBody_System_Collections_Generic_List_VM_Managed_VectorBase__System_Collections_Generic_List_VM_Managed_OMatrix__System_Collections_Generic_List_System_Double__System_Int32_VM_Managed_DAFUL_MultiBodyCalculation_BodyInf__"></a> GetTotalMassInertiaForAseembledBody\(List<VectorBase\>, List<OMatrix\>, List<double\>, int, ref BodyInf\)

```csharp
public static bool GetTotalMassInertiaForAseembledBody(List<VectorBase> lstGlobalCMPos, List<OMatrix> lstGlobalTensor, List<double> lstGlobalMass, int nNumberOfBody, ref MultiBodyCalculation.BodyInf bodyInf)
```

#### Parameters

`lstGlobalCMPos` List<VectorBase\>

`lstGlobalTensor` List<OMatrix\>

`lstGlobalMass` List<double\>

`nNumberOfBody` int

`bodyInf` [MultiBodyCalculation](VM.Managed.DAFUL.MultiBodyCalculation.md).[BodyInf](VM.Managed.DAFUL.MultiBodyCalculation.BodyInf.md)

#### Returns

 bool

