# Class ClipExtensions
<a id="VM_Models_Pre_Force_ClipExtensions"></a>

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.LeafSpring.dll  

```csharp
public class ClipExtensions
```

#### Inheritance

object ← 
[ClipExtensions](VM.Models.Pre.Force.ClipExtensions.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Force_ClipExtensions__ctor"></a> ClipExtensions\(\)

```csharp
public ClipExtensions()
```

## Methods

### <a id="VM_Models_Pre_Force_ClipExtensions_GetDistanceToCenterBoltbymodifiedLeafnumberatbottom_VM_Models_Pre_Force_LeafInfo___System_Int32_System_Int32_VM_Models_Pre_Force_ClipInfo___System_Double_System_Double_"></a> GetDistanceToCenterBoltbymodifiedLeafnumberatbottom\(LeafInfo\[\], int, int, ClipInfo\[\], double, double\)

```csharp
public static double GetDistanceToCenterBoltbymodifiedLeafnumberatbottom(LeafInfo[] leaves, int numberofleaf, int iLeafnumberatbottom, ClipInfo[] clips, double frontInactiveLength, double rearInactiveLength)
```

#### Parameters

`leaves` [LeafInfo](VM.Models.Pre.Force.LeafInfo.md)\[\]

`numberofleaf` int

`iLeafnumberatbottom` int

`clips` [ClipInfo](VM.Models.Pre.Force.ClipInfo.md)\[\]

`frontInactiveLength` double

`rearInactiveLength` double

#### Returns

 double

### <a id="VM_Models_Pre_Force_ClipExtensions_GetHeightbymodifiedLeafnumberatbottom_VM_Models_Pre_Force_LeafInfo___System_Double_System_Int32_System_Int32_"></a> GetHeightbymodifiedLeafnumberatbottom\(LeafInfo\[\], double, int, int\)

```csharp
public static double GetHeightbymodifiedLeafnumberatbottom(LeafInfo[] leaves, double distanceToCenterBolt, int iLeafnumberattop, int iLeafnumberatbottom)
```

#### Parameters

`leaves` [LeafInfo](VM.Models.Pre.Force.LeafInfo.md)\[\]

`distanceToCenterBolt` double

`iLeafnumberattop` int

`iLeafnumberatbottom` int

#### Returns

 double

### <a id="VM_Models_Pre_Force_ClipExtensions_GetInitialDistanceToCenterBolt_System_Double_System_Double_System_Int32_VM_Models_Pre_Force_ClipInfo___System_Double_System_Double_"></a> GetInitialDistanceToCenterBolt\(double, double, int, ClipInfo\[\], double, double\)

```csharp
public static double GetInitialDistanceToCenterBolt(double lastLeafFirstProfileX, double lastLeafLastProfileX, int numberofleafs, ClipInfo[] clips, double frontInactiveLength, double rearInactiveLength)
```

#### Parameters

`lastLeafFirstProfileX` double

`lastLeafLastProfileX` double

`numberofleafs` int

`clips` [ClipInfo](VM.Models.Pre.Force.ClipInfo.md)\[\]

`frontInactiveLength` double

`rearInactiveLength` double

#### Returns

 double

### <a id="VM_Models_Pre_Force_ClipExtensions_GetInitialHeight_VM_Models_Pre_Force_LeafInfo___System_Double_"></a> GetInitialHeight\(LeafInfo\[\], double\)

```csharp
public static double GetInitialHeight(LeafInfo[] leaves, double distanceToCenterBolt)
```

#### Parameters

`leaves` [LeafInfo](VM.Models.Pre.Force.LeafInfo.md)\[\]

`distanceToCenterBolt` double

#### Returns

 double

### <a id="VM_Models_Pre_Force_ClipExtensions_GetWidth_VM_Models_Pre_Force_LeafInfo___"></a> GetWidth\(LeafInfo\[\]\)

```csharp
public static double GetWidth(LeafInfo[] leaves)
```

#### Parameters

`leaves` [LeafInfo](VM.Models.Pre.Force.LeafInfo.md)\[\]

#### Returns

 double

### <a id="VM_Models_Pre_Force_ClipExtensions_ValidationDistanceToCenterBoltOfCurrentClip_VM_Models_Pre_Force_LeafInfo___VM_Models_Pre_Force_ClipInfo_System_Double__System_Double__"></a> ValidationDistanceToCenterBoltOfCurrentClip\(LeafInfo\[\], ClipInfo, out double, out double\)

```csharp
public static bool ValidationDistanceToCenterBoltOfCurrentClip(LeafInfo[] leaves, ClipInfo curuentclip, out double from, out double to)
```

#### Parameters

`leaves` [LeafInfo](VM.Models.Pre.Force.LeafInfo.md)\[\]

`curuentclip` [ClipInfo](VM.Models.Pre.Force.ClipInfo.md)

`from` double

`to` double

#### Returns

 bool

### <a id="VM_Models_Pre_Force_ClipExtensions_ValidationHeightOfCurrentClip_VM_Models_Pre_Force_LeafInfo___VM_Models_Pre_Force_ClipInfo_System_Double__"></a> ValidationHeightOfCurrentClip\(LeafInfo\[\], ClipInfo, out double\)

```csharp
public static bool ValidationHeightOfCurrentClip(LeafInfo[] leaves, ClipInfo curentclip, out double minimumheight)
```

#### Parameters

`leaves` [LeafInfo](VM.Models.Pre.Force.LeafInfo.md)\[\]

`curentclip` [ClipInfo](VM.Models.Pre.Force.ClipInfo.md)

`minimumheight` double

#### Returns

 bool

