# Class GenerateDataForChainedPlacing

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This class generates segment`s transformation data.

```csharp
public class GenerateDataForChainedPlacing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GenerateDataForChainedPlacing](VM.Managed.DAFUL.Chained.GenerateDataForChainedPlacing.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### GenerateDataForChainedPlacing\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.GenerateDataForChainedPlacing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GenerateDataForChainedPlacing()
```

## Fields

### m\_FirstCheckCrossTangent

```csharp
public bool m_FirstCheckCrossTangent
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Add\_PathList\(PathInfo\)

add the PathInfo

```csharp
public void Add_PathList(PathInfo path)
```

#### Parameters

`path` [PathInfo](VM.Managed.DAFUL.Chained.PathInfo.md)

Path information

### Add\_SegmentList\(SegmentInfo\)

add the SegmentInfo

```csharp
public void Add_SegmentList(SegmentInfo segment)
```

#### Parameters

`segment` [SegmentInfo](VM.Managed.DAFUL.Chained.SegmentInfo.md)

Segment Information

### CalculatePositionAndOrietationOfSegment\(int, ref SegmentPlacingInfo\[\]\)

Calculate position and orietation of segments.

```csharp
public bool CalculatePositionAndOrietationOfSegment(int _pznSegment, ref SegmentPlacingInfo[] arPlacingInfo)
```

#### Parameters

`_pznSegment` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of segment.

`arPlacingInfo` [SegmentPlacingInfo](VM.Managed.DAFUL.Chained.SegmentPlacingInfo.md)\[\]

The array including data for placing.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if the position and orientation of segments are calculated successfully, it is true.

### Calculate\_Gap\(int, ref double\)

Calculate the gap.

```csharp
public bool Calculate_Gap(int nTotalNoOfSegment, ref double dGap)
```

#### Parameters

`nTotalNoOfSegment` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of segment.

`dGap` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gap.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if the gap is calculated successfully, it is true.

### Calculate\_NoOfSegmentAndGap\(ref int, ref double\)

Calculate number of segment and gap.

```csharp
public bool Calculate_NoOfSegmentAndGap(ref int nSegment, ref double dGap)
```

#### Parameters

`nSegment` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of segment.Initial value must be -1.

`dGap` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gap.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if the number of segment and gap are calculated successfully, it is true.

### GetNthPathInfo\(int\)

Gets Nth PathInfo data.

```csharp
public PathInfo GetNthPathInfo(int Nth)
```

#### Parameters

`Nth` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Index.

#### Returns

 [PathInfo](VM.Managed.DAFUL.Chained.PathInfo.md)

The PathInfo.

### GetNthSegmentInfo\(int\)

Gets Nth SegmentInfo data.

```csharp
public SegmentInfo GetNthSegmentInfo(int Nth)
```

#### Parameters

`Nth` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index.

#### Returns

 [SegmentInfo](VM.Managed.DAFUL.Chained.SegmentInfo.md)

The SegmentInfo.

### Initialize\_PathList\(\)

Initialize list of PathInfo

```csharp
public void Initialize_PathList()
```

### Initialize\_PlacingData\(\)

Initialize and calculate the data for cunstruction chained system.

```csharp
public GenerateDataForChainedPlacing.PlacingDataResultType Initialize_PlacingData()
```

#### Returns

 [GenerateDataForChainedPlacing](VM.Managed.DAFUL.Chained.GenerateDataForChainedPlacing.md).[PlacingDataResultType](VM.Managed.DAFUL.Chained.GenerateDataForChainedPlacing.PlacingDataResultType.md)

<code>true</code> if success; otherwise, <code>false</code>.

### Initialize\_SegmentList\(\)

Initialize list of SegmentInfo

```csharp
public void Initialize_SegmentList()
```

### Positioning\_Algorithm\(ref int, ref double, double, bool, int\)

Called when the position and orientation of segments calculates.

```csharp
public SegmentPlacingInfo[] Positioning_Algorithm(ref int _NoOfSegment, ref double _Gap, double _ErrorGapPerSegment, bool _bFixedNo, int _nIteration)
```

#### Parameters

`_NoOfSegment` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of segment.

`_Gap` [double](https://learn.microsoft.com/dotnet/api/system.double)

The total distance between segment and segment.

`_ErrorGapPerSegment` [double](https://learn.microsoft.com/dotnet/api/system.double)

The average distance per segment between segment and segment.

`_bFixedNo` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [Fixed the number of segment]; otherwise, <code>false</code>

`_nIteration` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of iteration.

#### Returns

 [SegmentPlacingInfo](VM.Managed.DAFUL.Chained.SegmentPlacingInfo.md)\[\]

The list of segment placing information.


