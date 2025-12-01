# Interface IPickHelper
<a id="VM_Managed_DAFUL_Pre_IPickHelper"></a>

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

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ActiveDirectionPick"></a> ActiveDirectionPick\(\)

Actives the direction pick.

```csharp
void ActiveDirectionPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ActiveHolePick"></a> ActiveHolePick\(\)

Actives the hole pick.

```csharp
void ActiveHolePick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ActiveOrientationPick"></a> ActiveOrientationPick\(\)

Actives the orientation pick.

```csharp
void ActiveOrientationPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ActivePointPick"></a> ActivePointPick\(\)

Actives the point pick.

```csharp
void ActivePointPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ActiveTransformPick"></a> ActiveTransformPick\(\)

Actives the transform pick.

```csharp
void ActiveTransformPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ApplyEdge"></a> ApplyEdge\(\)

Applies the edge.

```csharp
bool ApplyEdge()
```

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ApplyEntityVM"></a> ApplyEntityVM\(\)

Applies the entity VM.

```csharp
bool ApplyEntityVM()
```

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ApplyFace"></a> ApplyFace\(\)

Applies the face.

```csharp
bool ApplyFace()
```

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ApplyFaceset"></a> ApplyFaceset\(\)

Applies the faceset.

```csharp
bool ApplyFaceset()
```

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ApplyHole"></a> ApplyHole\(\)

Applies the hole.

```csharp
bool ApplyHole()
```

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ApplyMesh"></a> ApplyMesh\(\)

Applies the mesh.

```csharp
bool ApplyMesh()
```

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ApplyNode"></a> ApplyNode\(\)

Applies the node.

```csharp
bool ApplyNode()
```

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ApplyPatchset"></a> ApplyPatchset\(\)

Applies the patchset.

```csharp
bool ApplyPatchset()
```

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_RestorePreviousActiveCategory"></a> RestorePreviousActiveCategory\(\)

Restores the previous active category.

```csharp
void RestorePreviousActiveCategory()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SelectUnderCursorFromHiddenFormView"></a> SelectUnderCursorFromHiddenFormView\(\)

Select operation.

```csharp
void SelectUnderCursorFromHiddenFormView()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetAdjacentUseFaceNormal_System_Boolean_"></a> SetAdjacentUseFaceNormal\(bool\)

Set to Adjacent option.

```csharp
void SetAdjacentUseFaceNormal(bool bUseFaceNormal)
```

#### Parameters

`bUseFaceNormal` bool

true then use face normal angle, else use edge tangential angle.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetAdjacentValue_System_Double_"></a> SetAdjacentValue\(double\)

Set to Adjacent value.

```csharp
void SetAdjacentValue(double dValue)
```

#### Parameters

`dValue` double

the angle value.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetDirection_System_String_"></a> SetDirection\(string\)

Sets the direction.

```csharp
void SetDirection(string strDirectionXml)
```

#### Parameters

`strDirectionXml` string

The direction XML.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetDirection_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_"></a> SetDirection\(string, string, string, string, string, string, bool, bool\)

Sets the direction.

```csharp
void SetDirection(string strDirectionX, string strDirectionY, string strDirectionZ, string strParamU, string strParamV, string strDirectionXml, bool isReverse, bool isParameterizable)
```

#### Parameters

`strDirectionX` string

The direction X.

`strDirectionY` string

The direction Y.

`strDirectionZ` string

The direction Z.

`strParamU` string

The param U.

`strParamV` string

The param V.

`strDirectionXml` string

The STR direction XML.

`isReverse` bool

if set to <code>true</code> [is reverse].

`isParameterizable` bool

if set to <code>true</code> [is parameterizable].

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetMultiSelectShape_Circle_System_Boolean_"></a> SetMultiSelectShape\_Circle\(bool\)

Set to circle by radius dragging shape for multi selection.

```csharp
void SetMultiSelectShape_Circle(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` bool

the operation flag.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetMultiSelectShape_Circle2_System_Boolean_"></a> SetMultiSelectShape\_Circle2\(bool\)

Set to circle by diameter dragging shape for multi selection.

```csharp
void SetMultiSelectShape_Circle2(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` bool

the operation flag.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetMultiSelectShape_None_System_Boolean_"></a> SetMultiSelectShape\_None\(bool\)

Set to none dragging shape for multi selection.

```csharp
void SetMultiSelectShape_None(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` bool

the operation flag.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetMultiSelectShape_Polyline_System_Boolean_"></a> SetMultiSelectShape\_Polyline\(bool\)

Set to polyline dragging shape for multi selection.

```csharp
void SetMultiSelectShape_Polyline(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` bool

the operation flag.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetMultiSelectShape_Rectangle_System_Boolean_"></a> SetMultiSelectShape\_Rectangle\(bool\)

Set to rectangle dragging shape for multi selection.

```csharp
void SetMultiSelectShape_Rectangle(bool bAlreadyOperation)
```

#### Parameters

`bAlreadyOperation` bool

the operation flag.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetMultiSelectType_Addition"></a> SetMultiSelectType\_Addition\(\)

Set to additional selection for multi selection.

```csharp
void SetMultiSelectType_Addition()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetMultiSelectType_Once"></a> SetMultiSelectType\_Once\(\)

Set to select once for multi selection.

```csharp
void SetMultiSelectType_Once()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetMultiSelectType_Subtraction"></a> SetMultiSelectType\_Subtraction\(\)

Set to subtractional selection for multi selection.

```csharp
void SetMultiSelectType_Subtraction()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetPoint_System_String_"></a> SetPoint\(string\)

Sets the point.

```csharp
void SetPoint(string strPointXml)
```

#### Parameters

`strPointXml` string

The point XML.

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_SetPoint_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_"></a> SetPoint\(string, string, string, string, string, string, bool\)

Sets the point.

```csharp
void SetPoint(string strPointX, string strPointY, string strPointZ, string strParamU, string strParamV, string strPointXml, bool isParameterizable)
```

#### Parameters

`strPointX` string

The point X.

`strPointY` string

The point Y.

`strPointZ` string

The point Z.

`strParamU` string

The param U.

`strParamV` string

The param V.

`strPointXml` string

The point XML.

`isParameterizable` bool

if set to <code>true</code> [is parameterizable].

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ShowPickListUnderCursorFromHiddenFormView"></a> ShowPickListUnderCursorFromHiddenFormView\(\)

Show Select List operation.

```csharp
void ShowPickListUnderCursorFromHiddenFormView()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_ShowSelectListUnderCursorFromHiddenFormView"></a> ShowSelectListUnderCursorFromHiddenFormView\(\)

Show Select List operation.

```csharp
void ShowSelectListUnderCursorFromHiddenFormView()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartDirectionPick"></a> StartDirectionPick\(\)

Starts the direction pick.

```csharp
void StartDirectionPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartEdgePick"></a> StartEdgePick\(\)

Starts the edge pick.

```csharp
void StartEdgePick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartEntityVMPick"></a> StartEntityVMPick\(\)

Starts the entity VM pick.

```csharp
void StartEntityVMPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartFacePick"></a> StartFacePick\(\)

Starts the face pick.

```csharp
void StartFacePick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartFacesetPick"></a> StartFacesetPick\(\)

Starts the faceset pick.

```csharp
void StartFacesetPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartHolePick"></a> StartHolePick\(\)

Starts the hole pick.

```csharp
void StartHolePick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartMassMeasurePick"></a> StartMassMeasurePick\(\)

Starts the mass measure pick.

```csharp
void StartMassMeasurePick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartMeshPick"></a> StartMeshPick\(\)

Starts the mesh pick.

```csharp
void StartMeshPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartMultiEntityVMPick"></a> StartMultiEntityVMPick\(\)

Starts the multi chained system pick.

```csharp
void StartMultiEntityVMPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartMultiFacePick"></a> StartMultiFacePick\(\)

Starts the multi face pick.

```csharp
void StartMultiFacePick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartMultiNodePick"></a> StartMultiNodePick\(\)

Starts the multi node pick.

```csharp
void StartMultiNodePick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartMultiPatchPick"></a> StartMultiPatchPick\(\)

Starts the multi patch pick.

```csharp
void StartMultiPatchPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartNodePick"></a> StartNodePick\(\)

Starts the node pick.

```csharp
void StartNodePick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartOrientationPick"></a> StartOrientationPick\(\)

Starts the orientation pick.

```csharp
void StartOrientationPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartPatchsetPick"></a> StartPatchsetPick\(\)

Starts the patchset pick.

```csharp
void StartPatchsetPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartPickerUI"></a> StartPickerUI\(\)

Starts the picker UI.

```csharp
void StartPickerUI()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartPointPick"></a> StartPointPick\(\)

Starts the point pick.

```csharp
void StartPointPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StartTransformPick"></a> StartTransformPick\(\)

Starts the transform pick.

```csharp
void StartTransformPick()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StopPickerUI"></a> StopPickerUI\(\)

Stops the picker UI.

```csharp
void StopPickerUI()
```

### <a id="VM_Managed_DAFUL_Pre_IPickHelper_StorePreviousActiveCategory"></a> StorePreviousActiveCategory\(\)

Stores the previous active category.

```csharp
void StorePreviousActiveCategory()
```

