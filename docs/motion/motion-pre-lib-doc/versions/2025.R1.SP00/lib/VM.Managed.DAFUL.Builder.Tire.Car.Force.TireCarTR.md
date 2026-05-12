#  Class TireCarTR

Namespace: [VM.Managed.DAFUL.Builder.Tire.Car.Force](VM.Managed.DAFUL.Builder.Tire.Car.Force.md)  
Assembly: VMBldTireCar.dll  

```csharp
public class TireCarTR : TireTRBase<TireCar>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<TireCar\> ← 
BuilderSymmetric<TireCar\> ← 
BuilderNamed<TireCar\> ← 
TireTRBase<TireCar\> ← 
[TireCarTR](VM.Managed.DAFUL.Builder.Tire.Car.Force.TireCarTR.md)

#### Implements

IBuilder

#### Inherited Members

TireTRBase<TireCar\>.OnPostBuild\(ObjectBase, Document\), 
TireTRBase<TireCar\>.GetOrientation\(\), 
TireTRBase<TireCar\>.MakeWheelBody\(Document\), 
TireTRBase<TireCar\>.SetDataWheelBody\(WheelBodyBase, Document\), 
TireTRBase<TireCar\>.BaseConnectable, 
TireTRBase<TireCar\>.ActionConnectable, 
TireTRBase<TireCar\>.PropertyFilePath, 
TireTRBase<TireCar\>.Side, 
TireTRBase<TireCar\>.CMOffset, 
TireTRBase<TireCar\>.Mass, 
TireTRBase<TireCar\>.IxxIyy, 
TireTRBase<TireCar\>.Izz, 
TireTRBase<TireCar\>.WheelCenterOffset, 
TireTRBase<TireCar\>.TreadColor, 
TireTRBase<TireCar\>.Transform, 
BuilderNamed<TireCar\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<TireCar\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<TireCar\>.Name, 
BuilderSymmetric<TireCar\>.Build\(Document\), 
BuilderSymmetric<TireCar\>.Symmetric, 
BuilderSymmetric<TireCar\>.CurrentSymmetric, 
BuilderBase<TireCar\>.m\_bSuccess, 
BuilderBase<TireCar\>.Build\(Document\), 
BuilderBase<TireCar\>.Build\(Document, List<string\>\), 
BuilderBase<TireCar\>.Validate\(IList<string\>\), 
BuilderBase<TireCar\>.Success\(\), 
BuilderBase<TireCar\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<TireCar\>.OnFinalBuild\(string, Document\), 
BuilderBase<TireCar\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<TireCar\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<TireCar\>.Parameters, 
BuilderBase<TireCar\>.AddToDoc, 
BuilderBase<TireCar\>.UseChangedObject, 
BuilderBase<TireCar\>.SetPointKey, 
BuilderBase<TireCar\>.BuildObject, 
BuilderBase<TireCar\>.BuildDocument, 
BuilderBase<TireCar\>.UseInterface, 
BuilderBase<TireCar\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Tire_Car_Force_TireCarTR__ctor"></a> TireCarTR\(\)

```csharp
public TireCarTR()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_Tire_Car_Force_TireCarTR_GetOrientation"></a> GetOrientation\(\)

```csharp
protected override OMatrix GetOrientation()
```

#### Returns

 OMatrix

### <a id="VM_Managed_DAFUL_Builder_Tire_Car_Force_TireCarTR_MakeWheelBody_VM_Managed_Document_"></a> MakeWheelBody\(Document\)

```csharp
protected override WheelBodyBase MakeWheelBody(Document doc)
```

#### Parameters

`doc` Document

#### Returns

 WheelBodyBase

### <a id="VM_Managed_DAFUL_Builder_Tire_Car_Force_TireCarTR_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Tire_Car_Force_TireCarTR_SetDataWheelBody_VM_Managed_DAFUL_Tire_WheelBodyBase_VM_Managed_Document_"></a> SetDataWheelBody\(WheelBodyBase, Document\)

```csharp
protected override void SetDataWheelBody(WheelBodyBase wheel, Document doc)
```

#### Parameters

`wheel` WheelBodyBase

`doc` Document

