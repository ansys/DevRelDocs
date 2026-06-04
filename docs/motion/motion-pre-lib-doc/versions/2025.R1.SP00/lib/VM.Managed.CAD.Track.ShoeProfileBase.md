#  Class ShoeProfileBase

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The abstract class for shoe profile

```csharp
public abstract class ShoeProfileBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ShoeProfileBase](VM.Managed.CAD.Track.ShoeProfileBase.md)

#### Derived

[ShoeProfileParametric](VM.Managed.CAD.Track.ShoeProfileParametric.md), 
[ShoeProfileSimple](VM.Managed.CAD.Track.ShoeProfileSimple.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_Track_ShoeProfileBase__ctor"></a> ShoeProfileBase\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeProfileBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeProfileBase()
```

## Fields

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_m_lstPtOrigin"></a> m\_lstPtOrigin

The original point data.

```csharp
protected List<VectorBase> m_lstPtOrigin
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_m_lstPtWorkPlane"></a> m\_lstPtWorkPlane

The transformed point data to work plane.

```csharp
protected List<VectorBase> m_lstPtWorkPlane
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

## Properties

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_BasePlateHeight"></a> BasePlateHeight

Gets and sets height for base plate.

```csharp
public double BasePlateHeight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_ShoeLength"></a> ShoeLength

Gets and sets shoe total length.

```csharp
public double ShoeLength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_CheckValidationAboutBuild"></a> CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public virtual void CheckValidationAboutBuild()
```

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_CreateProfile"></a> CreateProfile\(\)

Create profile data.

```csharp
protected virtual bool CreateProfile()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_GetPointData_For_XYPlane"></a> GetPointData\_For\_XYPlane\(\)

Gets points data on XY plane.

```csharp
public List<VectorBase> GetPointData_For_XYPlane()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_GetWorkPlaneData"></a> GetWorkPlaneData\(\)

Gets and sets profile data transformed work plane.

```csharp
protected void GetWorkPlaneData()
```

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_SetInitializeValue"></a> SetInitializeValue\(\)

Sets initail value.

```csharp
public virtual void SetInitializeValue()
```

### <a id="VM_Managed_CAD_Track_ShoeProfileBase_Validation"></a> Validation\(\)

Check validation for member variables.

```csharp
public virtual void Validation()
```

