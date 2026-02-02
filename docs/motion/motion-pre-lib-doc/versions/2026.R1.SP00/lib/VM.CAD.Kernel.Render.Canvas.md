# Class Canvas
<a id="VM_CAD_Kernel_Render_Canvas"></a>

Namespace: [VM.CAD.Kernel.Render](VM.CAD.Kernel.Render.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public sealed class Canvas : KernelObject, IDrawReference
```

#### Inheritance

object ← 
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

### <a id="VM_CAD_Kernel_Render_Canvas_BackplaneCull"></a> BackplaneCull

Sets the back plane cull.

```csharp
public bool BackplaneCull { set; }
```

#### Property Value

 bool

### <a id="VM_CAD_Kernel_Render_Canvas_Color"></a> Color

Sets the color.

```csharp
public Color Color { set; }
```

#### Property Value

 Color

### <a id="VM_CAD_Kernel_Render_Canvas_Document"></a> Document

Gets the Document

```csharp
public IDocument3D Document { get; }
```

#### Property Value

 IDocument3D

### <a id="VM_CAD_Kernel_Render_Canvas_LightInterpolationOption"></a> LightInterpolationOption

Sets the light interpolation option.

```csharp
public LightInterpolationOptionType LightInterpolationOption { set; }
```

#### Property Value

 [LightInterpolationOptionType](VM.CAD.Kernel.Render.LightInterpolationOptionType.md)

### <a id="VM_CAD_Kernel_Render_Canvas_LineShape"></a> LineShape

Sets the line shape.

```csharp
public LineType LineShape { set; }
```

#### Property Value

 [LineType](VM.CAD.Kernel.Render.LineType.md)

### <a id="VM_CAD_Kernel_Render_Canvas_LineWeight"></a> LineWeight

Sets the line weight.

```csharp
public double LineWeight { set; }
```

#### Property Value

 double

### <a id="VM_CAD_Kernel_Render_Canvas_TextSize"></a> TextSize

Set the text size.

```csharp
public double TextSize { set; }
```

#### Property Value

 double

### <a id="VM_CAD_Kernel_Render_Canvas_Transparency"></a> Transparency

Sets the transparency.

```csharp
public double Transparency { set; }
```

#### Property Value

 double

### <a id="VM_CAD_Kernel_Render_Canvas_WireframeMode"></a> WireframeMode

Sets the wire frame mode.

```csharp
public bool WireframeMode { set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_CAD_Kernel_Render_Canvas_AppendModellingMatrix_VM_TMatrix_"></a> AppendModellingMatrix\(TMatrix\)

Append modelling matrix.

```csharp
public void AppendModellingMatrix(TMatrix mat)
```

#### Parameters

`mat` TMatrix

The transformation matrix

### <a id="VM_CAD_Kernel_Render_Canvas_Clear"></a> Clear\(\)

Clear canvas.

```csharp
public void Clear()
```

### <a id="VM_CAD_Kernel_Render_Canvas_Create_VM_Models_Pre_IDocument3D_System_Boolean_"></a> Create\(IDocument3D, bool\)

Create a new instance of the <xref href="VM.CAD.Kernel.Render.Canvas" data-throw-if-not-resolved="false"></xref> class

```csharp
public static Canvas Create(IDocument3D doc, bool ThreadSafeCanvas = true)
```

#### Parameters

`doc` IDocument3D

The document

`ThreadSafeCanvas` bool

true if to create thread-safe canvas, otherwise false.

#### Returns

 [Canvas](VM.CAD.Kernel.Render.Canvas.md)

### <a id="VM_CAD_Kernel_Render_Canvas_Create_System_UIntPtr_VM_Models_Pre_IDocument3D_System_Boolean_"></a> Create\(UIntPtr, IDocument3D, bool\)

Create a new instance of the <xref href="VM.CAD.Kernel.Render.Canvas" data-throw-if-not-resolved="false"></xref> class

```csharp
public static Canvas Create(UIntPtr key, IDocument3D doc, bool ThreadSafeCanvas = true)
```

#### Parameters

`key` UIntPtr

The key of the canvas

`doc` IDocument3D

The document

`ThreadSafeCanvas` bool

true if to create thread-safe canvas, otherwise false.

#### Returns

 [Canvas](VM.CAD.Kernel.Render.Canvas.md)

### <a id="VM_CAD_Kernel_Render_Canvas_DisplayTheFront_System_Double_"></a> DisplayTheFront\(double\)

Display front above all.

```csharp
public void DisplayTheFront(double dDepthRange = -1)
```

#### Parameters

`dDepthRange` double

The depth range. If it is negative value, default value will be used.

### <a id="VM_CAD_Kernel_Render_Canvas_DrawArc_VM_Vector_VM_Vector_VM_Vector_"></a> DrawArc\(Vector, Vector, Vector\)

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

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawArrow_VM_Vector_VM_Vector_System_Double_"></a> DrawArrow\(Vector, Vector, double\)

Draw arrow.

```csharp
public UIntPtr DrawArrow(Vector vecStart, Vector vecEnd, double dArrowSize = -1)
```

#### Parameters

`vecStart` Vector

The start point

`vecEnd` Vector

The end point

`dArrowSize` double

The arrow size. If dArrowSize is negative or zero value, default value will be used.

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawCircle_VM_Vector_System_Double_VM_Vector_System_Boolean_"></a> DrawCircle\(Vector, double, Vector, bool\)

Draw circle.

```csharp
public UIntPtr DrawCircle(Vector vecCenter, double dRad, Vector vecNormal, bool bFill = false)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` double

The radius

`vecNormal` Vector

The normal vector

`bFill` bool

The fill flag

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawCylinder_VM_Vector_VM_Vector_System_Double_System_Boolean_System_Boolean_"></a> DrawCylinder\(Vector, Vector, double, bool, bool\)

Draw cylinder.

```csharp
public UIntPtr DrawCylinder(Vector vecStart, Vector vecEnd, double dRad, bool bFirstCap = true, bool bSecondCap = true)
```

#### Parameters

`vecStart` Vector

The start point

`vecEnd` Vector

The end point

`dRad` double

The radius

`bFirstCap` bool

if first cap and second cap is true, "both";
            if first cap is true and second cap is false, "first";
            if first cap is false and second cap is true, "second";
            if first cap and second cap is false, "none"

`bSecondCap` bool

if first cap and second cap is true, "both";
            if first cap is true and second cap is false, "first";
            if first cap is false and second cap is true, "second";
            if first cap and second cap is false, "none"

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawCylinder_VM_Vector_VM_Vector_System_Double_System_String_"></a> DrawCylinder\(Vector, Vector, double, string\)

Draw cylinder.

```csharp
public UIntPtr DrawCylinder(Vector vecStart, Vector vecEnd, double dRad, string strCapOption)
```

#### Parameters

`vecStart` Vector

The start point

`vecEnd` Vector

The end point

`dRad` double

The radius

`strCapOption` string

String specifying which ends to cap, either "first", "second", "none", or "both"

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawDimension_VM_Vector_System_String_"></a> DrawDimension\(Vector, string\)

Draws the dimension.

```csharp
public UIntPtr DrawDimension(Vector vecCenter, string strText)
```

#### Parameters

`vecCenter` Vector

The center position.

`strText` string

The string text.

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawIcon_VM_CAD_Kernel_Render_IconInfo_"></a> DrawIcon\(IconInfo\)

Draw icon.

```csharp
public void DrawIcon(IconInfo iconInfo)
```

#### Parameters

`iconInfo` [IconInfo](VM.CAD.Kernel.Render.IconInfo.md)

The icon information

### <a id="VM_CAD_Kernel_Render_Canvas_DrawIcon_VM_CAD_Kernel_Render_IconInfo_System_Double_"></a> DrawIcon\(IconInfo, double\)

Draw icon.

```csharp
public void DrawIcon(IconInfo iconInfo, double dScale)
```

#### Parameters

`iconInfo` [IconInfo](VM.CAD.Kernel.Render.IconInfo.md)

The icon information

`dScale` double

The scale

### <a id="VM_CAD_Kernel_Render_Canvas_DrawLine_VM_Vector_VM_Vector_"></a> DrawLine\(Vector, Vector\)

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

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawMarker_VM_Vector_"></a> DrawMarker\(Vector\)

Draw marker.

```csharp
public UIntPtr DrawMarker(Vector vecCenter)
```

#### Parameters

`vecCenter` Vector

The center point

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawMesh_System_Int32_System_Int32_System_Collections_Generic_ICollection_VM_Vector__"></a> DrawMesh\(int, int, ICollection<Vector\>\)

Draw mesh.

```csharp
public UIntPtr DrawMesh(int nRows, int nColumns, ICollection<Vector> points)
```

#### Parameters

`nRows` int

The rows numner

`nColumns` int

The columns number

`points` ICollection<Vector\>

The collection of points

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawMesh_System_Int32_System_Int32_VM_Vector___"></a> DrawMesh\(int, int, Vector\[\]\)

Draw mesh.

```csharp
public UIntPtr DrawMesh(int nRows, int nColumns, Vector[] points)
```

#### Parameters

`nRows` int

The rows numner

`nColumns` int

The columns number

`points` Vector\[\]

The array of points

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawNurbs_System_Int32_System_Int32_System_Int32_System_Int32_System_Collections_Generic_ICollection_VM_Vector__System_Collections_Generic_ICollection_System_Single__System_Collections_Generic_ICollection_System_Single__System_Collections_Generic_ICollection_System_Single__"></a> DrawNurbs\(int, int, int, int, ICollection<Vector\>, ICollection<float\>, ICollection<float\>, ICollection<float\>\)

Draw nurbs.

```csharp
public UIntPtr DrawNurbs(int u_degree, int v_degree, int u_count, int v_count, ICollection<Vector> ctrlPts, ICollection<float> weights, ICollection<float> u_knots, ICollection<float> v_knots)
```

#### Parameters

`u_degree` int

Degree of the surface in the u direction

`v_degree` int

Degree of the surface in the v direction

`u_count` int

Number of valid control points in the u direction

`v_count` int

Number of valid control points in the v direction

`ctrlPts` ICollection<Vector\>

Vector of x-y-z triplets for the coordinates of the control points

`weights` ICollection<float\>

Control point weights

`u_knots` ICollection<float\>

Knot sequence in the u direction

`v_knots` ICollection<float\>

Knot sequence in the v direction

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawNurbs_System_Int32_System_Int32_System_Int32_System_Int32_VM_Vector___System_Single___System_Single___System_Single___"></a> DrawNurbs\(int, int, int, int, Vector\[\], float\[\], float\[\], float\[\]\)

Draw nurbs.

```csharp
public UIntPtr DrawNurbs(int u_degree, int v_degree, int u_count, int v_count, Vector[] ctrlPts, float[] weights, float[] u_knots, float[] v_knots)
```

#### Parameters

`u_degree` int

Degree of the surface in the u direction

`v_degree` int

Degree of the surface in the v direction

`u_count` int

Number of valid control points in the u direction

`v_count` int

Number of valid control points in the v direction

`ctrlPts` Vector\[\]

Vector of x-y-z triplets for the coordinates of the control points

`weights` float\[\]

Control point weights

`u_knots` float\[\]

Knot sequence in the u direction

`v_knots` float\[\]

Knot sequence in the v direction

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawPolygon_System_Collections_Generic_ICollection_VM_Vector__"></a> DrawPolygon\(ICollection<Vector\>\)

Draw polygon.

```csharp
public UIntPtr DrawPolygon(ICollection<Vector> colPoint)
```

#### Parameters

`colPoint` ICollection<Vector\>

The collection of points

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawPolygon_VM_Vector___"></a> DrawPolygon\(Vector\[\]\)

Draw polygon.

```csharp
public UIntPtr DrawPolygon(Vector[] arPoint)
```

#### Parameters

`arPoint` Vector\[\]

The array of points

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawPolyline_System_Collections_Generic_ICollection_VM_Vector__"></a> DrawPolyline\(ICollection<Vector\>\)

Draw polyline.

```csharp
public UIntPtr DrawPolyline(ICollection<Vector> colPoint)
```

#### Parameters

`colPoint` ICollection<Vector\>

The collection of points

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawPolyline_VM_Vector___"></a> DrawPolyline\(Vector\[\]\)

Draw polyline.

```csharp
public UIntPtr DrawPolyline(Vector[] arPoint)
```

#### Parameters

`arPoint` Vector\[\]

The array of points

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawShell_System_Collections_Generic_ICollection_VM_Vector__System_Collections_Generic_ICollection_System_Int32__System_Double_"></a> DrawShell\(ICollection<Vector\>, ICollection<int\>, double\)

Draw shell.

```csharp
public UIntPtr DrawShell(ICollection<Vector> points, ICollection<int> connectivities, double dScale = 1)
```

#### Parameters

`points` ICollection<Vector\>

The collection of points.

`connectivities` ICollection<int\>

The collection of connectivities.

`dScale` double

The scale to draw.

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawShell_VM_Vector___System_Int32___System_Double_"></a> DrawShell\(Vector\[\], int\[\], double\)

Draw shell.

```csharp
public UIntPtr DrawShell(Vector[] points, int[] connectivities, double dScale = 1)
```

#### Parameters

`points` Vector\[\]

The array of points.

`connectivities` int\[\]

The array of connectivities.

`dScale` double

The scale factor to draw.

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawShellWithFaceNormal_System_Collections_Generic_ICollection_VM_Vector__System_Collections_Generic_ICollection_System_Int32__System_Collections_Generic_ICollection_VM_Vector__"></a> DrawShellWithFaceNormal\(ICollection<Vector\>, ICollection<int\>, ICollection<Vector\>\)

Draw shell with face normal.

```csharp
public UIntPtr DrawShellWithFaceNormal(ICollection<Vector> points, ICollection<int> connectivities, ICollection<Vector> faceNormals = null)
```

#### Parameters

`points` ICollection<Vector\>

The collection of points.

`connectivities` ICollection<int\>

The collection of connectivities.

`faceNormals` ICollection<Vector\>

The collection of face normal vectors.

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawShellWithFaceNormal_VM_Vector___System_Int32___VM_Vector___"></a> DrawShellWithFaceNormal\(Vector\[\], int\[\], Vector\[\]\)

Draw shell with face normal.

```csharp
public UIntPtr DrawShellWithFaceNormal(Vector[] points, int[] connectivities, Vector[] faceNormals = null)
```

#### Parameters

`points` Vector\[\]

The array of points.

`connectivities` int\[\]

The array of connectivities.

`faceNormals` Vector\[\]

The array of face normal vectors.

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawShellWithVertexNormal_System_Collections_Generic_ICollection_VM_Vector__System_Collections_Generic_ICollection_System_Int32__System_Collections_Generic_ICollection_VM_Vector__"></a> DrawShellWithVertexNormal\(ICollection<Vector\>, ICollection<int\>, ICollection<Vector\>\)

Draw shell with vertex normal.

```csharp
public UIntPtr DrawShellWithVertexNormal(ICollection<Vector> points, ICollection<int> connectivities, ICollection<Vector> vertexNormals = null)
```

#### Parameters

`points` ICollection<Vector\>

The collection of points.

`connectivities` ICollection<int\>

The collection of connectivities.

`vertexNormals` ICollection<Vector\>

The collection of vertex normal vectors.

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawShellWithVertexNormal_VM_Vector___System_Int32___VM_Vector___"></a> DrawShellWithVertexNormal\(Vector\[\], int\[\], Vector\[\]\)

Draw shell with vertex normal.

```csharp
public UIntPtr DrawShellWithVertexNormal(Vector[] points, int[] connectivities, Vector[] vertexNormals = null)
```

#### Parameters

`points` Vector\[\]

The array of points.

`connectivities` int\[\]

The array of connectivities.

`vertexNormals` Vector\[\]

The array of vertex normal vectors.

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawSphere_VM_Vector_System_Double_"></a> DrawSphere\(Vector, double\)

Draw sphere.

```csharp
public UIntPtr DrawSphere(Vector vecCenter, double dRad)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` double

The radius

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawSphere_VM_Vector_System_Double_VM_Vector_VM_Vector_"></a> DrawSphere\(Vector, double, Vector, Vector\)

Draw sphere.

```csharp
public UIntPtr DrawSphere(Vector vecCenter, double dRad, Vector vecAxis, Vector vecOrtho)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` double

The radius

`vecAxis` Vector

The axis vector

`vecOrtho` Vector

The orthogonal vector

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawText_VM_Vector_System_String_"></a> DrawText\(Vector, string\)

Draw text.

```csharp
public UIntPtr DrawText(Vector vecCenter, string strText)
```

#### Parameters

`vecCenter` Vector

The center position of text

`strText` string

The text

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawWireCylinder_VM_Vector_VM_Vector_System_Double_"></a> DrawWireCylinder\(Vector, Vector, double\)

Draw cylinder with face.

```csharp
public UIntPtr DrawWireCylinder(Vector vecStart, Vector vecEnd, double dRad)
```

#### Parameters

`vecStart` Vector

The start point

`vecEnd` Vector

The end point

`dRad` double

The radius

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawWireSphere_VM_Vector_System_Double_"></a> DrawWireSphere\(Vector, double\)

Draw wire sphere.

```csharp
public UIntPtr DrawWireSphere(Vector vecCenter, double dRad)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` double

The radius

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_DrawWireSphere_VM_Vector_System_Double_VM_Vector_VM_Vector_"></a> DrawWireSphere\(Vector, double, Vector, Vector\)

Draw wire sphere.

```csharp
public UIntPtr DrawWireSphere(Vector vecCenter, double dRad, Vector vecAxis, Vector vecOrtho)
```

#### Parameters

`vecCenter` Vector

The center point

`dRad` double

The radius

`vecAxis` Vector

The axis vector

`vecOrtho` Vector

The orthogonal vector

#### Returns

 UIntPtr

### <a id="VM_CAD_Kernel_Render_Canvas_EndGeometryEdit"></a> EndGeometryEdit\(\)

End geometry for edit.

```csharp
public void EndGeometryEdit()
```

### <a id="VM_CAD_Kernel_Render_Canvas_FastDrawShell_System_UIntPtr_System_UInt64_System_UIntPtr_System_UInt64_System_Double_"></a> FastDrawShell\(UIntPtr, ulong, UIntPtr, ulong, double\)

Draw shell (fast).

```csharp
public void FastDrawShell(UIntPtr points, ulong nPoints, UIntPtr connectivities, ulong nConnectivities, double dScale)
```

#### Parameters

`points` UIntPtr

The points array

`nPoints` ulong

The number of points

`connectivities` UIntPtr

The connectivities array

`nConnectivities` ulong

The number of connectivities

`dScale` double

The scale

### <a id="VM_CAD_Kernel_Render_Canvas_FastDrawShellWithFaceNormal_System_UIntPtr_System_UInt64_System_UIntPtr_System_UInt64_"></a> FastDrawShellWithFaceNormal\(UIntPtr, ulong, UIntPtr, ulong\)

Draw shell with face normal (fast).

```csharp
public void FastDrawShellWithFaceNormal(UIntPtr points, ulong nPoints, UIntPtr connectivities, ulong nConnectivities)
```

#### Parameters

`points` UIntPtr

The points array

`nPoints` ulong

The number of points

`connectivities` UIntPtr

The connectivities array

`nConnectivities` ulong

The number of connectivities

### <a id="VM_CAD_Kernel_Render_Canvas_GetExtension__1"></a> GetExtension<T\>\(\)

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

### <a id="VM_CAD_Kernel_Render_Canvas_GetExtension__1_System_String_"></a> GetExtension<T\>\(string\)

Get canvas extension

```csharp
public T GetExtension<T>(string strExtensionName) where T : KernelExtension
```

#### Parameters

`strExtensionName` string

The name of the canvas extension.

#### Returns

 T

The canvas extension

#### Type Parameters

`T` 

The type of the canvas extension

### <a id="VM_CAD_Kernel_Render_Canvas_GetSubCanvas_System_String_"></a> GetSubCanvas\(string\)

Get sub canvas.

```csharp
public Canvas GetSubCanvas(string strCanvasName)
```

#### Parameters

`strCanvasName` string

The canvas name

#### Returns

 [Canvas](VM.CAD.Kernel.Render.Canvas.md)

### <a id="VM_CAD_Kernel_Render_Canvas_IgnoreDepthTest"></a> IgnoreDepthTest\(\)

Ignore depth test.

```csharp
public void IgnoreDepthTest()
```

### <a id="VM_CAD_Kernel_Render_Canvas_SetMarkerSymbol_VM_CAD_Kernel_Render_MarkerType_System_Double_"></a> SetMarkerSymbol\(MarkerType, double\)

Set marker symbol.

```csharp
public void SetMarkerSymbol(MarkerType type, double dSize = -1)
```

#### Parameters

`type` [MarkerType](VM.CAD.Kernel.Render.MarkerType.md)

The type of the marker to draw.

`dSize` double

The marker size. If it is negative value, default value will be used.

### <a id="VM_CAD_Kernel_Render_Canvas_SetModellingMatrix_VM_TMatrix_"></a> SetModellingMatrix\(TMatrix\)

Set modelling matrix.

```csharp
public void SetModellingMatrix(TMatrix mat)
```

#### Parameters

`mat` TMatrix

The transformation matrix

### <a id="VM_CAD_Kernel_Render_Canvas_SetScale_System_Double_System_Double_System_Double_"></a> SetScale\(double, double, double\)

Set scale.

```csharp
public void SetScale(double dX, double dY, double dZ)
```

#### Parameters

`dX` double

The X coordinate of scale

`dY` double

The Y coordinate of scale

`dZ` double

The Z coordinate of scale

### <a id="VM_CAD_Kernel_Render_Canvas_SetWireframeMode_System_Boolean_System_Boolean_"></a> SetWireframeMode\(bool, bool\)

Set wireframe mode.

```csharp
public void SetWireframeMode(bool bWireframe, bool bVisibleEdge)
```

#### Parameters

`bWireframe` bool

Whether use wire frame mode

`bVisibleEdge` bool

Whether visible edge

### <a id="VM_CAD_Kernel_Render_Canvas_StartGeometryEdit_System_UIntPtr_"></a> StartGeometryEdit\(UIntPtr\)

Start geometry for edit.

```csharp
public void StartGeometryEdit(UIntPtr pKeyGeom)
```

#### Parameters

`pKeyGeom` UIntPtr

The geometry key

### <a id="VM_CAD_Kernel_Render_Canvas_TrimNurbs_System_Int32_System_Int32_System_Collections_Generic_ICollection_VM_Vector__System_Collections_Generic_ICollection_System_Single__System_Collections_Generic_ICollection_System_Single__System_Double_System_Double_"></a> TrimNurbs\(int, int, ICollection<Vector\>, ICollection<float\>, ICollection<float\>, double, double\)

Trim nurbs.

```csharp
public void TrimNurbs(int degree, int cpcount, ICollection<Vector> ctrlPts, ICollection<float> weights, ICollection<float> knots, double start_u, double end_u)
```

#### Parameters

`degree` int

Degree of the curve

`cpcount` int

Number of valid points in control_points

`ctrlPts` ICollection<Vector\>

The points

`weights` ICollection<float\>

Control point weights

`knots` ICollection<float\>

Knot sequence

`start_u` double

Start parameter

`end_u` double

End parameter

### <a id="VM_CAD_Kernel_Render_Canvas_TrimNurbs_System_Int32_System_Int32_VM_Vector___System_Single___System_Single___System_Double_System_Double_"></a> TrimNurbs\(int, int, Vector\[\], float\[\], float\[\], double, double\)

Trim nurbs.

```csharp
public void TrimNurbs(int degree, int cpcount, Vector[] ctrlPts, float[] weights, float[] knots, double start_u, double end_u)
```

#### Parameters

`degree` int

Degree of the curve

`cpcount` int

Number of valid points in control_points

`ctrlPts` Vector\[\]

The points

`weights` float\[\]

Control point weights

`knots` float\[\]

Knot sequence

`start_u` double

Start parameter

`end_u` double

End parameter

