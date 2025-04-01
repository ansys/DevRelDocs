# Class Canvas

Namespace: [VM.CAD.Kernel.Render](VM.CAD.Kernel.Render.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public sealed class Canvas : KernelObject, IDrawReference
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[Canvas](VM.CAD.Kernel.Render.Canvas.md)

#### Implements

[IDrawReference](VM.CAD.Kernel.Render.IDrawReference.md)

#### Inherited Members

[KernelObject.Dispose\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Dispose), 
[KernelObject.Key](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Key)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### BackplaneCull

Sets the back plane cull.

```csharp
public bool BackplaneCull { set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Color

Sets the color.

```csharp
public Color Color { set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### Document

Gets the Document

```csharp
public IDocument3D Document { get; }
```

#### Property Value

 IDocument3D

### LightInterpolationOption

Sets the light interpolation option.

```csharp
public LightInterpolationOptionType LightInterpolationOption { set; }
```

#### Property Value

 [LightInterpolationOptionType](VM.CAD.Kernel.Render.LightInterpolationOptionType.md)

### LineShape

Sets the line shape.

```csharp
public LineType LineShape { set; }
```

#### Property Value

 [LineType](VM.CAD.Kernel.Render.LineType.md)

### LineWeight

Sets the line weight.

```csharp
public double LineWeight { set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TextSize

Set the text size.

```csharp
public double TextSize { set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Transparency

Sets the transparency.

```csharp
public double Transparency { set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### WireframeMode

Sets the wire frame mode.

```csharp
public bool WireframeMode { set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AppendModellingMatrix\(TMatrix\)

Append modelling matrix.

```csharp
public void AppendModellingMatrix(TMatrix mat)
```

#### Parameters

`mat` TMatrix

The transformation matrix

### Clear\(\)

Clear canvas.

```csharp
public void Clear()
```

### Create\(IDocument3D, bool\)

Create a new instance of the <xref href="VM.CAD.Kernel.Render.Canvas" data-throw-if-not-resolved="false"></xref> class

```csharp
public static Canvas Create(IDocument3D doc, bool ThreadSafeCanvas = true)
```

#### Parameters

`doc` IDocument3D

The document

`ThreadSafeCanvas` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if to create thread-safe canvas, otherwise false.

#### Returns

 [Canvas](VM.CAD.Kernel.Render.Canvas.md)

### Create\(UIntPtr, IDocument3D, bool\)

Create a new instance of the <xref href="VM.CAD.Kernel.Render.Canvas" data-throw-if-not-resolved="false"></xref> class

```csharp
public static Canvas Create(UIntPtr key, IDocument3D doc, bool ThreadSafeCanvas = true)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key of the canvas

`doc` IDocument3D

The document

`ThreadSafeCanvas` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if to create thread-safe canvas, otherwise false.

#### Returns

 [Canvas](VM.CAD.Kernel.Render.Canvas.md)

### DisplayTheFront\(double\)

Display front above all.

```csharp
public void DisplayTheFront(double dDepthRange = -1)
```

#### Parameters

`dDepthRange` [double](https://learn.microsoft.com/dotnet/api/system.double)

The depth range. If it is negative value, default value will be used.

### DrawArc\(Vector, Vector, Vector\)

Draw arc.

```csharp
public UIntPtr DrawArc(Vector vecFirst, Vector vecSecond, Vector vecThird)
```

#### Parameters

`vecFirst` Vector

The first point

`vecSecond` Vector

The second point

`vecThird` Vector

The third point

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawArrow\(Vector, Vector, double\)

Draw arrow.

```csharp
public UIntPtr DrawArrow(Vector vecStart, Vector vecEnd, double dArrowSize = -1)
```

#### Parameters

`vecStart` Vector

The start point

`vecEnd` Vector

The end point

`dArrowSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The arrow size. If dArrowSize is negative or zero value, default value will be used.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawCircle\(Vector, double, Vector, bool\)

Draw circle.

```csharp
public UIntPtr DrawCircle(Vector vecCenter, double dRad, Vector vecNormal, bool bFill = false)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`vecNormal` Vector

The normal vector

`bFill` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The fill flag

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawCylinder\(Vector, Vector, double, bool, bool\)

Draw cylinder.

```csharp
public UIntPtr DrawCylinder(Vector vecStart, Vector vecEnd, double dRad, bool bFirstCap = true, bool bSecondCap = true)
```

#### Parameters

`vecStart` Vector

The start point

`vecEnd` Vector

The end point

`dRad` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`bFirstCap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if first cap and second cap is true, "both";
            if first cap is true and second cap is false, "first";
            if first cap is false and second cap is true, "second";
            if first cap and second cap is false, "none"

`bSecondCap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if first cap and second cap is true, "both";
            if first cap is true and second cap is false, "first";
            if first cap is false and second cap is true, "second";
            if first cap and second cap is false, "none"

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawCylinder\(Vector, Vector, double, string\)

Draw cylinder.

```csharp
public UIntPtr DrawCylinder(Vector vecStart, Vector vecEnd, double dRad, string strCapOption)
```

#### Parameters

`vecStart` Vector

The start point

`vecEnd` Vector

The end point

`dRad` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`strCapOption` [string](https://learn.microsoft.com/dotnet/api/system.string)

String specifying which ends to cap, either "first", "second", "none", or "both"

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawDimension\(Vector, string\)

Draws the dimension.

```csharp
public UIntPtr DrawDimension(Vector vecCenter, string strText)
```

#### Parameters

`vecCenter` Vector

The center position.

`strText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string text.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawIcon\(IconInfo\)

Draw icon.

```csharp
public void DrawIcon(IconInfo iconInfo)
```

#### Parameters

`iconInfo` [IconInfo](VM.CAD.Kernel.Render.IconInfo.md)

The icon information

### DrawIcon\(IconInfo, double\)

Draw icon.

```csharp
public void DrawIcon(IconInfo iconInfo, double dScale)
```

#### Parameters

`iconInfo` [IconInfo](VM.CAD.Kernel.Render.IconInfo.md)

The icon information

`dScale` [double](https://learn.microsoft.com/dotnet/api/system.double)

The scale

### DrawLine\(Vector, Vector\)

Draw line.

```csharp
public UIntPtr DrawLine(Vector vecStart, Vector vecEnd)
```

#### Parameters

`vecStart` Vector

The start point

`vecEnd` Vector

The end point

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawMarker\(Vector\)

Draw marker.

```csharp
public UIntPtr DrawMarker(Vector vecCenter)
```

#### Parameters

`vecCenter` Vector

The center point

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawMesh\(int, int, ICollection<Vector\>\)

Draw mesh.

```csharp
public UIntPtr DrawMesh(int nRows, int nColumns, ICollection<Vector> points)
```

#### Parameters

`nRows` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The rows numner

`nColumns` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The columns number

`points` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

The collection of points

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawMesh\(int, int, Vector\[\]\)

Draw mesh.

```csharp
public UIntPtr DrawMesh(int nRows, int nColumns, Vector[] points)
```

#### Parameters

`nRows` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The rows numner

`nColumns` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The columns number

`points` Vector\[\]

The array of points

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawNurbs\(int, int, int, int, ICollection<Vector\>, ICollection<float\>, ICollection<float\>, ICollection<float\>\)

Draw nurbs.

```csharp
public UIntPtr DrawNurbs(int u_degree, int v_degree, int u_count, int v_count, ICollection<Vector> ctrlPts, ICollection<float> weights, ICollection<float> u_knots, ICollection<float> v_knots)
```

#### Parameters

`u_degree` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Degree of the surface in the u direction

`v_degree` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Degree of the surface in the v direction

`u_count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of valid control points in the u direction

`v_count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of valid control points in the v direction

`ctrlPts` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

Vector of x-y-z triplets for the coordinates of the control points

`weights` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)\>

Control point weights

`u_knots` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)\>

Knot sequence in the u direction

`v_knots` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)\>

Knot sequence in the v direction

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawNurbs\(int, int, int, int, Vector\[\], float\[\], float\[\], float\[\]\)

Draw nurbs.

```csharp
public UIntPtr DrawNurbs(int u_degree, int v_degree, int u_count, int v_count, Vector[] ctrlPts, float[] weights, float[] u_knots, float[] v_knots)
```

#### Parameters

`u_degree` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Degree of the surface in the u direction

`v_degree` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Degree of the surface in the v direction

`u_count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of valid control points in the u direction

`v_count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of valid control points in the v direction

`ctrlPts` Vector\[\]

Vector of x-y-z triplets for the coordinates of the control points

`weights` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

Control point weights

`u_knots` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

Knot sequence in the u direction

`v_knots` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

Knot sequence in the v direction

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawPolygon\(ICollection<Vector\>\)

Draw polygon.

```csharp
public UIntPtr DrawPolygon(ICollection<Vector> colPoint)
```

#### Parameters

`colPoint` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

The collection of points

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawPolygon\(Vector\[\]\)

Draw polygon.

```csharp
public UIntPtr DrawPolygon(Vector[] arPoint)
```

#### Parameters

`arPoint` Vector\[\]

The array of points

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawPolyline\(ICollection<Vector\>\)

Draw polyline.

```csharp
public UIntPtr DrawPolyline(ICollection<Vector> colPoint)
```

#### Parameters

`colPoint` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

The collection of points

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawPolyline\(Vector\[\]\)

Draw polyline.

```csharp
public UIntPtr DrawPolyline(Vector[] arPoint)
```

#### Parameters

`arPoint` Vector\[\]

The array of points

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawShell\(ICollection<Vector\>, ICollection<int\>, double\)

Draw shell.

```csharp
public UIntPtr DrawShell(ICollection<Vector> points, ICollection<int> connectivities, double dScale = 1)
```

#### Parameters

`points` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

The collection of points.

`connectivities` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The collection of connectivities.

`dScale` [double](https://learn.microsoft.com/dotnet/api/system.double)

The scale to draw.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawShell\(Vector\[\], int\[\], double\)

Draw shell.

```csharp
public UIntPtr DrawShell(Vector[] points, int[] connectivities, double dScale = 1)
```

#### Parameters

`points` Vector\[\]

The array of points.

`connectivities` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The array of connectivities.

`dScale` [double](https://learn.microsoft.com/dotnet/api/system.double)

The scale factor to draw.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawShellWithFaceNormal\(ICollection<Vector\>, ICollection<int\>, ICollection<Vector\>\)

Draw shell with face normal.

```csharp
public UIntPtr DrawShellWithFaceNormal(ICollection<Vector> points, ICollection<int> connectivities, ICollection<Vector> faceNormals = null)
```

#### Parameters

`points` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

The collection of points.

`connectivities` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The collection of connectivities.

`faceNormals` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

The collection of face normal vectors.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawShellWithFaceNormal\(Vector\[\], int\[\], Vector\[\]\)

Draw shell with face normal.

```csharp
public UIntPtr DrawShellWithFaceNormal(Vector[] points, int[] connectivities, Vector[] faceNormals = null)
```

#### Parameters

`points` Vector\[\]

The array of points.

`connectivities` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The array of connectivities.

`faceNormals` Vector\[\]

The array of face normal vectors.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawShellWithVertexNormal\(ICollection<Vector\>, ICollection<int\>, ICollection<Vector\>\)

Draw shell with vertex normal.

```csharp
public UIntPtr DrawShellWithVertexNormal(ICollection<Vector> points, ICollection<int> connectivities, ICollection<Vector> vertexNormals = null)
```

#### Parameters

`points` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

The collection of points.

`connectivities` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The collection of connectivities.

`vertexNormals` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

The collection of vertex normal vectors.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawShellWithVertexNormal\(Vector\[\], int\[\], Vector\[\]\)

Draw shell with vertex normal.

```csharp
public UIntPtr DrawShellWithVertexNormal(Vector[] points, int[] connectivities, Vector[] vertexNormals = null)
```

#### Parameters

`points` Vector\[\]

The array of points.

`connectivities` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The array of connectivities.

`vertexNormals` Vector\[\]

The array of vertex normal vectors.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawSphere\(Vector, double\)

Draw sphere.

```csharp
public UIntPtr DrawSphere(Vector vecCenter, double dRad)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawSphere\(Vector, double, Vector, Vector\)

Draw sphere.

```csharp
public UIntPtr DrawSphere(Vector vecCenter, double dRad, Vector vecAxis, Vector vecOrtho)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`vecAxis` Vector

The axis vector

`vecOrtho` Vector

The orthogonal vector

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawText\(Vector, string\)

Draw text.

```csharp
public UIntPtr DrawText(Vector vecCenter, string strText)
```

#### Parameters

`vecCenter` Vector

The center position of text

`strText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The text

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawWireCylinder\(Vector, Vector, double\)

Draw cylinder with face.

```csharp
public UIntPtr DrawWireCylinder(Vector vecStart, Vector vecEnd, double dRad)
```

#### Parameters

`vecStart` Vector

The start point

`vecEnd` Vector

The end point

`dRad` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawWireSphere\(Vector, double\)

Draw wire sphere.

```csharp
public UIntPtr DrawWireSphere(Vector vecCenter, double dRad)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### DrawWireSphere\(Vector, double, Vector, Vector\)

Draw wire sphere.

```csharp
public UIntPtr DrawWireSphere(Vector vecCenter, double dRad, Vector vecAxis, Vector vecOrtho)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`vecAxis` Vector

The axis vector

`vecOrtho` Vector

The orthogonal vector

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### EndGeometryEdit\(\)

End geometry for edit.

```csharp
public void EndGeometryEdit()
```

### FastDrawShell\(UIntPtr, ulong, UIntPtr, ulong, double\)

Draw shell (fast).

```csharp
public void FastDrawShell(UIntPtr points, ulong nPoints, UIntPtr connectivities, ulong nConnectivities, double dScale)
```

#### Parameters

`points` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The points array

`nPoints` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The number of points

`connectivities` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The connectivities array

`nConnectivities` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The number of connectivities

`dScale` [double](https://learn.microsoft.com/dotnet/api/system.double)

The scale

### FastDrawShellWithFaceNormal\(UIntPtr, ulong, UIntPtr, ulong\)

Draw shell with face normal (fast).

```csharp
public void FastDrawShellWithFaceNormal(UIntPtr points, ulong nPoints, UIntPtr connectivities, ulong nConnectivities)
```

#### Parameters

`points` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The points array

`nPoints` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The number of points

`connectivities` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The connectivities array

`nConnectivities` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The number of connectivities

### GetExtension<T\>\(\)

Get canvas extension

```csharp
public T GetExtension<T>() where T : KernelExtension
```

#### Returns

 T

The canvas extension

#### Type Parameters

`T` 

The type of the canvas extension

### GetExtension<T\>\(string\)

Get canvas extension

```csharp
public T GetExtension<T>(string strExtensionName) where T : KernelExtension
```

#### Parameters

`strExtensionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the canvas extension.

#### Returns

 T

The canvas extension

#### Type Parameters

`T` 

The type of the canvas extension

### GetSubCanvas\(string\)

Get sub canvas.

```csharp
public Canvas GetSubCanvas(string strCanvasName)
```

#### Parameters

`strCanvasName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canvas name

#### Returns

 [Canvas](VM.CAD.Kernel.Render.Canvas.md)

### IgnoreDepthTest\(\)

Ignore depth test.

```csharp
public void IgnoreDepthTest()
```

### SetMarkerSymbol\(MarkerType, double\)

Set marker symbol.

```csharp
public void SetMarkerSymbol(MarkerType type, double dSize = -1)
```

#### Parameters

`type` [MarkerType](VM.CAD.Kernel.Render.MarkerType.md)

The type of the marker to draw.

`dSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The marker size. If it is negative value, default value will be used.

### SetModellingMatrix\(TMatrix\)

Set modelling matrix.

```csharp
public void SetModellingMatrix(TMatrix mat)
```

#### Parameters

`mat` TMatrix

The transformation matrix

### SetScale\(double, double, double\)

Set scale.

```csharp
public void SetScale(double dX, double dY, double dZ)
```

#### Parameters

`dX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The X coordinate of scale

`dY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Y coordinate of scale

`dZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Z coordinate of scale

### SetWireframeMode\(bool, bool\)

Set wireframe mode.

```csharp
public void SetWireframeMode(bool bWireframe, bool bVisibleEdge)
```

#### Parameters

`bWireframe` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use wire frame mode

`bVisibleEdge` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether visible edge

### StartGeometryEdit\(UIntPtr\)

Start geometry for edit.

```csharp
public void StartGeometryEdit(UIntPtr pKeyGeom)
```

#### Parameters

`pKeyGeom` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The geometry key

### TrimNurbs\(int, int, ICollection<Vector\>, ICollection<float\>, ICollection<float\>, double, double\)

Trim nurbs.

```csharp
public void TrimNurbs(int degree, int cpcount, ICollection<Vector> ctrlPts, ICollection<float> weights, ICollection<float> knots, double start_u, double end_u)
```

#### Parameters

`degree` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Degree of the curve

`cpcount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of valid points in control_points

`ctrlPts` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

The points

`weights` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)\>

Control point weights

`knots` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)\>

Knot sequence

`start_u` [double](https://learn.microsoft.com/dotnet/api/system.double)

Start parameter

`end_u` [double](https://learn.microsoft.com/dotnet/api/system.double)

End parameter

### TrimNurbs\(int, int, Vector\[\], float\[\], float\[\], double, double\)

Trim nurbs.

```csharp
public void TrimNurbs(int degree, int cpcount, Vector[] ctrlPts, float[] weights, float[] knots, double start_u, double end_u)
```

#### Parameters

`degree` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Degree of the curve

`cpcount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of valid points in control_points

`ctrlPts` Vector\[\]

The points

`weights` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

Control point weights

`knots` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

Knot sequence

`start_u` [double](https://learn.microsoft.com/dotnet/api/system.double)

Start parameter

`end_u` [double](https://learn.microsoft.com/dotnet/api/system.double)

End parameter


