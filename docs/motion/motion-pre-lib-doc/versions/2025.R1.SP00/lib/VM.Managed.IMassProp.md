#  Interface IMassProp

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

## Methods

### <a id="VM_Managed_IMassProp_GetMassProp_System_Double__VM_Managed_VectorBase_VM_Managed_OMatrix_System_Double___System_Boolean_"></a> GetMassProp\(ref double, VectorBase, OMatrix, double\[\], bool\)

Gets the mass property.

```csharp
void GetMassProp(ref double dMass, VectorBase vecCenterPosition, OMatrix vecOrientation, double[] arTensor, bool bGlobal)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`vecCenterPosition` [VectorBase](VM.Managed.VectorBase.md)

The center position.

`vecOrientation` [OMatrix](VM.Managed.OMatrix.md)

The orientation.

`arTensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The tensor.

`bGlobal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_IMassProp_SetMassProp_System_Double_VM_Managed_VectorBase_VM_Managed_OMatrix_System_Double___System_Boolean_"></a> SetMassProp\(double, VectorBase, OMatrix, double\[\], bool\)

Sets the mass property.

```csharp
void SetMassProp(double dMass, VectorBase vecCenterPosition, OMatrix vecOrientation, double[] arTensor, bool bGlobal)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`vecCenterPosition` [VectorBase](VM.Managed.VectorBase.md)

The center position.

`vecOrientation` [OMatrix](VM.Managed.OMatrix.md)

The orientation.

`arTensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The tensor.

`bGlobal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

