# Interface IHasRoadFile
<a id="VM_Managed_DAFUL_Car_IHasRoadFile"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The road file interface

```csharp
public interface IHasRoadFile
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Car_IHasRoadFile_Name"></a> Name

Get name of the road

```csharp
string Name { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_IHasRoadFile_Offset"></a> Offset

Get offset of the road

```csharp
Vector Offset { get; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_Car_IHasRoadFile_ReferenceBodyFullName"></a> ReferenceBodyFullName

Get full name of reference body

```csharp
string ReferenceBodyFullName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_IHasRoadFile_RoadDataPath"></a> RoadDataPath

Gets or sets the road data file path.

```csharp
string RoadDataPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_IHasRoadFile_RoadRefFrameName"></a> RoadRefFrameName

Get Roadreference frame name

```csharp
string RoadRefFrameName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_IHasRoadFile_RoadReferencePosition"></a> RoadReferencePosition

Get reference position of the road

```csharp
Vector RoadReferencePosition { get; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_Car_IHasRoadFile_RotationAngle"></a> RotationAngle

Get rotation angle of the road

```csharp
double RotationAngle { get; }
```

#### Property Value

 double

