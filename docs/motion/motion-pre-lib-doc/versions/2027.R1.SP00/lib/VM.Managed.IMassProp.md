# Interface IMassProp
<a id="VM_Managed_IMassProp"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the mass property.

```csharp
public interface IMassProp
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IMassProp_SupportSetMass"></a> SupportSetMass

Gets the flag for whether or not to support set for mass.

```csharp
bool SupportSetMass { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_IMassProp_GetMassProp_System_Double__VM_Managed_VectorBase_VM_Managed_OMatrix_System_Double___System_Boolean_"></a> GetMassProp\(ref double, VectorBase, OMatrix, double\[\], bool\)

Gets the mass property.

```csharp
void GetMassProp(ref double dMass, VectorBase vecCenterPosition, OMatrix vecOrientation, double[] arTensor, bool bGlobal)
```

#### Parameters

`dMass` double

The mass.

`vecCenterPosition` [VectorBase](VM.Managed.VectorBase.md)

The center position.

`vecOrientation` [OMatrix](VM.Managed.OMatrix.md)

The orientation.

`arTensor` double\[\]

The tensor.

`bGlobal` bool

### <a id="VM_Managed_IMassProp_SetMassProp_System_Double_VM_Managed_VectorBase_VM_Managed_OMatrix_System_Double___System_Boolean_"></a> SetMassProp\(double, VectorBase, OMatrix, double\[\], bool\)

Sets the mass property.

```csharp
void SetMassProp(double dMass, VectorBase vecCenterPosition, OMatrix vecOrientation, double[] arTensor, bool bGlobal)
```

#### Parameters

`dMass` double

The mass.

`vecCenterPosition` [VectorBase](VM.Managed.VectorBase.md)

The center position.

`vecOrientation` [OMatrix](VM.Managed.OMatrix.md)

The orientation.

`arTensor` double\[\]

The tensor.

`bGlobal` bool

