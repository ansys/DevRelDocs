# Interface IPickHelper

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the Pick Helper.
<todo>
Show or hide the picker ui.
Sets the picker ui editor such as Point and Direction.
Actives the picker ui.
</todo>

```csharp
public interface IPickHelper
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### ActiveDirectionPick\(\)

Actives the direction pick.

```csharp
void ActiveDirectionPick()
```

### ActiveHolePick\(\)

Actives the hole pick.

```csharp
void ActiveHolePick()
```

### ActiveOrientationPick\(\)

Actives the orientation pick.

```csharp
void ActiveOrientationPick()
```

### ActivePointPick\(\)

Actives the point pick.

```csharp
void ActivePointPick()
```

### ActiveTransformPick\(\)

Actives the transform pick.

```csharp
void ActiveTransformPick()
```

### ApplyEdge\(\)

Applies the edge.

```csharp
bool ApplyEdge()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ApplyEntityVM\(\)

Applies the entity VM.

```csharp
bool ApplyEntityVM()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ApplyFace\(\)

Applies the face.

```csharp
bool ApplyFace()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ApplyFaceset\(\)

Applies the faceset.

```csharp
bool ApplyFaceset()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ApplyHole\(\)

Applies the hole.

```csharp
bool ApplyHole()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ApplyMesh\(\)

Applies the mesh.

```csharp
bool ApplyMesh()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ApplyNode\(\)

Applies the node.

```csharp
bool ApplyNode()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ApplyPatchset\(\)

Applies the patchset.

```csharp
bool ApplyPatchset()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### RestorePreviousActiveCategory\(\)

Restores the previous active category.

```csharp
void RestorePreviousActiveCategory()
```

### SelectUnderCursorFromHiddenFormView\(\)

Select operation.

```csharp
void SelectUnderCursorFromHiddenFormView()
```

### SetAdjacentUseFaceNormal\(bool\)

Set to Adjacent option.

```csharp
void SetAdjacentUseFaceNormal(bool bUseFaceNormal)
```

#### Parameters

`bUseFaceNormal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true then use face normal angle, else use edge tangential angle.

### SetAdjacentValue\(double\)

Set to Adjacent value.

```csharp
void SetAdjacentValue(double dValue)
```

#### Parameters

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

the angle value.

### SetDirection\(string\)

Sets the direction.

```csharp
void SetDirection(string strDirectionXml)
```

#### Parameters

`strDirectionXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The direction XML.

### SetDirection\(string, string, string, string, string, string, bool, bool\)

Sets the direction.

```csharp
void SetDirection(string strDirectionX, string strDirectionY, string strDirectionZ, string strParamU, string strParamV, string strDirectionXml, bool isReverse, bool isParameterizable)
```

#### Parameters

`strDirectionX` [string](https://learn.microsoft.com/dotnet/api/system.string)

The direction X.

`strDirectionY` [string](https://learn.microsoft.com/dotnet/api/system.string)

The direction Y.

`strDirectionZ` [string](https://learn.microsoft.com/dotnet/api/system.string)

The direction Z.

`strParamU` [string](https://learn.microsoft.com/dotnet/api/system.string)

The param U.

`strParamV` [string](https://learn.microsoft.com/dotnet/api/system.string)

The param V.

`strDirectionXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR direction XML.

`isReverse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [is reverse].

`isParameterizable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [is parameterizable].

### SetMultiSelectShape\_Circle\(bool\)

Set to circle by radius dragging shape for multi selection.

```csharp
void SetMultiSelectShape_Circle(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

the operation flag.

### SetMultiSelectShape\_Circle2\(bool\)

Set to circle by diameter dragging shape for multi selection.

```csharp
void SetMultiSelectShape_Circle2(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

the operation flag.

### SetMultiSelectShape\_None\(bool\)

Set to none dragging shape for multi selection.

```csharp
void SetMultiSelectShape_None(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

the operation flag.

### SetMultiSelectShape\_Polyline\(bool\)

Set to polyline dragging shape for multi selection.

```csharp
void SetMultiSelectShape_Polyline(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

the operation flag.

### SetMultiSelectShape\_Rectangle\(bool\)

Set to rectangle dragging shape for multi selection.

```csharp
void SetMultiSelectShape_Rectangle(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

the operation flag.

### SetMultiSelectType\_Addition\(\)

Set to additional selection for multi selection.

```csharp
void SetMultiSelectType_Addition()
```

### SetMultiSelectType\_Once\(\)

Set to select once for multi selection.

```csharp
void SetMultiSelectType_Once()
```

### SetMultiSelectType\_Subtraction\(\)

Set to subtractional selection for multi selection.

```csharp
void SetMultiSelectType_Subtraction()
```

### SetPoint\(string\)

Sets the point.

```csharp
void SetPoint(string strPointXml)
```

#### Parameters

`strPointXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The point XML.

### SetPoint\(string, string, string, string, string, string, bool\)

Sets the point.

```csharp
void SetPoint(string strPointX, string strPointY, string strPointZ, string strParamU, string strParamV, string strPointXml, bool isParameterizable)
```

#### Parameters

`strPointX` [string](https://learn.microsoft.com/dotnet/api/system.string)

The point X.

`strPointY` [string](https://learn.microsoft.com/dotnet/api/system.string)

The point Y.

`strPointZ` [string](https://learn.microsoft.com/dotnet/api/system.string)

The point Z.

`strParamU` [string](https://learn.microsoft.com/dotnet/api/system.string)

The param U.

`strParamV` [string](https://learn.microsoft.com/dotnet/api/system.string)

The param V.

`strPointXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The point XML.

`isParameterizable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [is parameterizable].

### ShowPickListUnderCursorFromHiddenFormView\(\)

Show Select List operation.

```csharp
void ShowPickListUnderCursorFromHiddenFormView()
```

### ShowSelectListUnderCursorFromHiddenFormView\(\)

Show Select List operation.

```csharp
void ShowSelectListUnderCursorFromHiddenFormView()
```

### StartDirectionPick\(\)

Starts the direction pick.

```csharp
void StartDirectionPick()
```

### StartEdgePick\(\)

Starts the edge pick.

```csharp
void StartEdgePick()
```

### StartEntityVMPick\(\)

Starts the entity VM pick.

```csharp
void StartEntityVMPick()
```

### StartFacePick\(\)

Starts the face pick.

```csharp
void StartFacePick()
```

### StartFacesetPick\(\)

Starts the faceset pick.

```csharp
void StartFacesetPick()
```

### StartHolePick\(\)

Starts the hole pick.

```csharp
void StartHolePick()
```

### StartMassMeasurePick\(\)

Starts the mass measure pick.

```csharp
void StartMassMeasurePick()
```

### StartMeshPick\(\)

Starts the mesh pick.

```csharp
void StartMeshPick()
```

### StartMultiEntityVMPick\(\)

Starts the multi chained system pick.

```csharp
void StartMultiEntityVMPick()
```

### StartMultiFacePick\(\)

Starts the multi face pick.

```csharp
void StartMultiFacePick()
```

### StartMultiNodePick\(\)

Starts the multi node pick.

```csharp
void StartMultiNodePick()
```

### StartMultiPatchPick\(\)

Starts the multi patch pick.

```csharp
void StartMultiPatchPick()
```

### StartNodePick\(\)

Starts the node pick.

```csharp
void StartNodePick()
```

### StartOrientationPick\(\)

Starts the orientation pick.

```csharp
void StartOrientationPick()
```

### StartPatchsetPick\(\)

Starts the patchset pick.

```csharp
void StartPatchsetPick()
```

### StartPickerUI\(\)

Starts the picker UI.

```csharp
void StartPickerUI()
```

### StartPointPick\(\)

Starts the point pick.

```csharp
void StartPointPick()
```

### StartTransformPick\(\)

Starts the transform pick.

```csharp
void StartTransformPick()
```

### StopPickerUI\(\)

Stops the picker UI.

```csharp
void StopPickerUI()
```

### StorePreviousActiveCategory\(\)

Stores the previous active category.

```csharp
void StorePreviousActiveCategory()
```


