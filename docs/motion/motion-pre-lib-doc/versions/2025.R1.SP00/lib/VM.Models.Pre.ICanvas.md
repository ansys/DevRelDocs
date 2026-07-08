#  Interface ICanvas

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface ICanvas
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_ICanvas_Color"></a> Color

```csharp
Color Color { set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Pre_ICanvas_LineWeight"></a> LineWeight

```csharp
double LineWeight { set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_ICanvas_TextSize"></a> TextSize

```csharp
double TextSize { set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_ICanvas_WireframeMode"></a> WireframeMode

```csharp
bool WireframeMode { set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Pre_ICanvas_Clear"></a> Clear\(\)

```csharp
void Clear()
```

### <a id="VM_Models_Pre_ICanvas_DisplayTheFront"></a> DisplayTheFront\(\)

```csharp
void DisplayTheFront()
```

### <a id="VM_Models_Pre_ICanvas_DisplayTheFront_System_Double_"></a> DisplayTheFront\(double\)

```csharp
void DisplayTheFront(double depthRange)
```

#### Parameters

`depthRange` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_ICanvas_DrawLine_VM_Vector_VM_Vector_"></a> DrawLine\(Vector, Vector\)

```csharp
UIntPtr DrawLine(Vector start, Vector end)
```

#### Parameters

`start` Vector

`end` Vector

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_Models_Pre_ICanvas_DrawMarker_VM_Vector_"></a> DrawMarker\(Vector\)

```csharp
UIntPtr DrawMarker(Vector vector)
```

#### Parameters

`vector` Vector

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_Models_Pre_ICanvas_DrawText_VM_Vector_System_String_"></a> DrawText\(Vector, string\)

```csharp
UIntPtr DrawText(Vector vector, string text)
```

#### Parameters

`vector` Vector

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_Models_Pre_ICanvas_FastDrawLine_System_UIntPtr_System_UIntPtr_"></a> FastDrawLine\(UIntPtr, UIntPtr\)

```csharp
void FastDrawLine(UIntPtr start, UIntPtr end)
```

#### Parameters

`start` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`end` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_Models_Pre_ICanvas_FastDrawShell_System_UIntPtr_System_UInt64_System_UIntPtr_System_UInt64_System_Double_"></a> FastDrawShell\(UIntPtr, ulong, UIntPtr, ulong, double\)

```csharp
void FastDrawShell(UIntPtr points, ulong nPoints, UIntPtr connectivities, ulong nConnectivities, double dScale)
```

#### Parameters

`points` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`nPoints` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`connectivities` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`nConnectivities` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`dScale` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_ICanvas_GetSubCanvas_System_String_"></a> GetSubCanvas\(string\)

```csharp
ICanvas GetSubCanvas(string canvasName)
```

#### Parameters

`canvasName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ICanvas](VM.Models.Pre.ICanvas.md)

### <a id="VM_Models_Pre_ICanvas_Instantiate_VM_Models_Pre_IHasKeyObject_VM_TMatrix_"></a> Instantiate\(IHasKeyObject, TMatrix\)

```csharp
void Instantiate(IHasKeyObject @object, TMatrix matrix)
```

#### Parameters

`object` [IHasKeyObject](VM.Models.Pre.IHasKeyObject.md)

`matrix` TMatrix

### <a id="VM_Models_Pre_ICanvas_SetMarkerSymbol_VM_Models_MarkerTypes_System_Double_"></a> SetMarkerSymbol\(MarkerTypes, double\)

```csharp
void SetMarkerSymbol(MarkerTypes markerType, double size)
```

#### Parameters

`markerType` MarkerTypes

`size` [double](https://learn.microsoft.com/dotnet/api/system.double)

