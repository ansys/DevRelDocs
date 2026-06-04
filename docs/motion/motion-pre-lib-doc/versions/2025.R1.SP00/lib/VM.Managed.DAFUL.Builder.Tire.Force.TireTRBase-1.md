#  Class TireTRBase<T\>

Namespace: [VM.Managed.DAFUL.Builder.Tire.Force](VM.Managed.DAFUL.Builder.Tire.Force.md)  
Assembly: VMBldTire.dll  

```csharp
public abstract class TireTRBase<T> : BuilderNamed<T>, IBuilder where T : ObjectBase, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<T\> ← 
BuilderSymmetric<T\> ← 
BuilderNamed<T\> ← 
[TireTRBase<T\>](VM.Managed.DAFUL.Builder.Tire.Force.TireTRBase\-1.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<T\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<T\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<T\>.Name, 
BuilderSymmetric<T\>.Build\(Document\), 
BuilderSymmetric<T\>.Symmetric, 
BuilderSymmetric<T\>.CurrentSymmetric, 
BuilderBase<T\>.m\_bSuccess, 
BuilderBase<T\>.Build\(Document\), 
BuilderBase<T\>.Build\(Document, List<string\>\), 
BuilderBase<T\>.Validate\(IList<string\>\), 
BuilderBase<T\>.Success\(\), 
BuilderBase<T\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<T\>.OnFinalBuild\(string, Document\), 
BuilderBase<T\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<T\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<T\>.Parameters, 
BuilderBase<T\>.AddToDoc, 
BuilderBase<T\>.UseChangedObject, 
BuilderBase<T\>.SetPointKey, 
BuilderBase<T\>.BuildObject, 
BuilderBase<T\>.BuildDocument, 
BuilderBase<T\>.UseInterface, 
BuilderBase<T\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1__ctor"></a> TireTRBase\(\)

```csharp
protected TireTRBase()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_ActionConnectable"></a> ActionConnectable

```csharp
public IConnectable ActionConnectable { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_BaseConnectable"></a> BaseConnectable

```csharp
public IConnectable BaseConnectable { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_CMOffset"></a> CMOffset

```csharp
public Variable CMOffset { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_IxxIyy"></a> IxxIyy

```csharp
public Variable IxxIyy { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_Izz"></a> Izz

```csharp
public Variable Izz { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_Mass"></a> Mass

```csharp
public Variable Mass { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_PropertyFilePath"></a> PropertyFilePath

```csharp
public string PropertyFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_Side"></a> Side

```csharp
public WheelBodyBase.SideType Side { get; set; }
```

#### Property Value

 WheelBodyBase.SideType

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_Transform"></a> Transform

```csharp
public TransformBase Transform { get; }
```

#### Property Value

 TransformBase

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_TreadColor"></a> TreadColor

```csharp
public string TreadColor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_WheelCenterOffset"></a> WheelCenterOffset

```csharp
public Variable WheelCenterOffset { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_GetOrientation"></a> GetOrientation\(\)

```csharp
protected virtual OMatrix GetOrientation()
```

#### Returns

 OMatrix

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_MakeWheelBody_VM_Managed_Document_"></a> MakeWheelBody\(Document\)

```csharp
protected virtual WheelBodyBase MakeWheelBody(Document doc)
```

#### Parameters

`doc` Document

#### Returns

 WheelBodyBase

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Tire_Force_TireTRBase_1_SetDataWheelBody_VM_Managed_DAFUL_Tire_WheelBodyBase_VM_Managed_Document_"></a> SetDataWheelBody\(WheelBodyBase, Document\)

```csharp
protected virtual void SetDataWheelBody(WheelBodyBase wheel, Document doc)
```

#### Parameters

`wheel` WheelBodyBase

`doc` Document

