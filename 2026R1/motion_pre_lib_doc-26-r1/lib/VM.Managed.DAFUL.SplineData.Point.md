# Struct SplineData.Point
<a id="VM_Managed_DAFUL_SplineData_Point"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSB.dll  

<p>This base class is to represent the point in spline value.</p>

```csharp
public struct SplineData.Point : IDataPoint
```

#### Implements

IDataPoint

## Constructors

### <a id="VM_Managed_DAFUL_SplineData_Point__ctor_System_Double_System_Double_"></a> Point\(double, double\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.SplineData.Point" data-throw-if-not-resolved="false"></xref> struct.</p>

```csharp
public Point(double dx, double dy)
```

#### Parameters

`dx` double

<p>The dx.</p>

`dy` double

<p>The dy.</p>

## Properties

### <a id="VM_Managed_DAFUL_SplineData_Point_X"></a> X

<p>Gets or sets the X value.</p>
<p>
Type : double
LinkRequestUpdate 시 처리 : N/A
Read/Write : N/A
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : No
변경 시 DFS 재생성 여부 : No
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public double X { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_SplineData_Point_Y"></a> Y

<p>Gets or sets the Y value.</p>
<p>
Type : double
LinkRequestUpdate 시 처리 : N/A
Read/Write : N/A
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : No
변경 시 DFS 재생성 여부 : No
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public double Y { get; set; }
```

#### Property Value

 double

## Operators

### <a id="VM_Managed_DAFUL_SplineData_Point_op_Implicit_VM_Managed_DAFUL_SplineData_Point__VM_DataPoint"></a> implicit operator DataPoint\(Point\)

```csharp
public static implicit operator DataPoint(SplineData.Point point)
```

#### Parameters

`point` [SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)

#### Returns

 DataPoint

### <a id="VM_Managed_DAFUL_SplineData_Point_op_Implicit_VM_DataPoint__VM_Managed_DAFUL_SplineData_Point"></a> implicit operator Point\(DataPoint\)

```csharp
public static implicit operator SplineData.Point(DataPoint dataPoint)
```

#### Parameters

`dataPoint` DataPoint

#### Returns

 [SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)

### <a id="VM_Managed_DAFUL_SplineData_Point_op_Implicit_VM_Managed_DAFUL_SplineValue_TwoPoint__VM_Managed_DAFUL_SplineData_Point"></a> implicit operator Point\(TwoPoint\)

```csharp
public static implicit operator SplineData.Point(SplineValue.TwoPoint twoPoint)
```

#### Parameters

`twoPoint` [SplineValue](VM.Managed.DAFUL.SplineValue.md).[TwoPoint](VM.Managed.DAFUL.SplineValue.TwoPoint.md)

#### Returns

 [SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)

