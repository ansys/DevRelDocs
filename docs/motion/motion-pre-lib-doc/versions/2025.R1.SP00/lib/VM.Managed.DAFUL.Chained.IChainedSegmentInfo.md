#  Interface IChainedSegmentInfo

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This interface is the gateway that get or set ChainedSegment data.

```csharp
public interface IChainedSegmentInfo
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_Clear_Connectors"></a> Clear\_Connectors\(\)

Remove all objects.

```csharp
void Clear_Connectors()
```

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_Clear_Contacts"></a> Clear\_Contacts\(\)

Remove all objects.

```csharp
void Clear_Contacts()
```

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_Clear_Transforms"></a> Clear\_Transforms\(\)

Remove all objects.

```csharp
void Clear_Transforms()
```

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_GetConnectors"></a> GetConnectors\(\)

Gets the array of connectors.

```csharp
ObjectBase[] GetConnectors()
```

#### Returns

 ObjectBase\[\]

The array of connectors(Body,NodeSet,FaceSet,PatchSet).

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_GetGeometryReference"></a> GetGeometryReference\(\)

Gets the geomerty reference.

```csharp
ObjectBase GetGeometryReference()
```

#### Returns

 ObjectBase

The geometry reference.

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_GetListContact"></a> GetListContact\(\)

Gets the array of contact geometry.

```csharp
ObjectBase[] GetListContact()
```

#### Returns

 ObjectBase\[\]

The array of contact geometry(FaceSet,PatchSet).

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_GetSegmentHeight1"></a> GetSegmentHeight1\(\)

Gets the segment height1.

```csharp
Variable GetSegmentHeight1()
```

#### Returns

 Variable

The segment height1.

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_GetSegmentHeight2"></a> GetSegmentHeight2\(\)

Gets the segment height2.

```csharp
Variable GetSegmentHeight2()
```

#### Returns

 Variable

The segment height2.

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_GetSegmentLength"></a> GetSegmentLength\(\)

Gets the segment length.

```csharp
Variable GetSegmentLength()
```

#### Returns

 Variable

The segment length.

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_GetTransforms"></a> GetTransforms\(\)

Gets the array of transforms.

```csharp
ObjectBase[] GetTransforms()
```

#### Returns

 ObjectBase\[\]

The array of transform(DesignFrame,Marker).

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_Get_WorkPlane"></a> Get\_WorkPlane\(\)

Get work plane.

```csharp
Plane Get_WorkPlane()
```

#### Returns

 Plane

The plane

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetConnector_VM_Managed_ObjectBase_"></a> SetConnector\(ObjectBase\)

Sets the connector of chained system.

```csharp
bool SetConnector(ObjectBase connector)
```

#### Parameters

`connector` ObjectBase

The object(Body,NodeSet,FaceSet,PatchSet).

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref> is equal to <xref href="VM.Managed.IChainedSegmentConnector" data-throw-if-not-resolved="false"></xref>; otherwise, <code>false</code>

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetConnectors_VM_Managed_ObjectBase___"></a> SetConnectors\(ObjectBase\[\]\)

Sets the array of connectors.

```csharp
bool SetConnectors(ObjectBase[] _lstconnectors)
```

#### Parameters

`_lstconnectors` ObjectBase\[\]

The array of connectors(Body,NodeSet,FaceSet,PatchSet).

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref> is equal to <xref href="VM.Managed.IChainedSegmentConnector" data-throw-if-not-resolved="false"></xref>; otherwise, <code>false</code>

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetContact_VM_Managed_ObjectBase_"></a> SetContact\(ObjectBase\)

Sets the contact geometry.

```csharp
bool SetContact(ObjectBase contact)
```

#### Parameters

`contact` ObjectBase

The contact geometry(FaceSet,PatchSet).

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref> include the following property <xref href="VM.Managed.IChainedSegmentContact" data-throw-if-not-resolved="false"></xref> ; otherwise, <code>false</code>

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetGeometryReference_VM_Managed_ObjectBase_"></a> SetGeometryReference\(ObjectBase\)

Sets the geomerty reference.

```csharp
bool SetGeometryReference(ObjectBase _geometryreference)
```

#### Parameters

`_geometryreference` ObjectBase

The geometry reference

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref> include the following property <xref href="VM.Managed.DesignFrame" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.ReferenceDesignFrame" data-throw-if-not-resolved="false"></xref>; otherwise, <code>false</code>

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetListContact_VM_Managed_ObjectBase___"></a> SetListContact\(ObjectBase\[\]\)

Sets the array of contact geometry.

```csharp
bool SetListContact(ObjectBase[] _lstcontact)
```

#### Parameters

`_lstcontact` ObjectBase\[\]

The array of contact geometry(FaceSet,PatchSet).

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetSegmentHeight1_VM_Managed_Variable_"></a> SetSegmentHeight1\(Variable\)

Sets the segment height1.

```csharp
void SetSegmentHeight1(Variable _segmentheight1)
```

#### Parameters

`_segmentheight1` Variable

The segment height1.

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetSegmentHeight2_VM_Managed_Variable_"></a> SetSegmentHeight2\(Variable\)

Sets the segment height2.

```csharp
void SetSegmentHeight2(Variable _segmentheight2)
```

#### Parameters

`_segmentheight2` Variable

The segment height2.

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetSegmentLength_VM_Managed_Variable_"></a> SetSegmentLength\(Variable\)

Sets the segment length.

```csharp
void SetSegmentLength(Variable _segmentlength)
```

#### Parameters

`_segmentlength` Variable

The segment length

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetTransform_VM_Managed_ObjectBase_"></a> SetTransform\(ObjectBase\)

Sets the transform.

```csharp
bool SetTransform(ObjectBase transform)
```

#### Parameters

`transform` ObjectBase

the transform(DesignFrame, Marker)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref> include the following property <xref href="VM.Managed.DesignFrame" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.ReferenceDesignFrame" data-throw-if-not-resolved="false"></xref>; otherwise, <code>false</code>

### <a id="VM_Managed_DAFUL_Chained_IChainedSegmentInfo_SetTransforms_VM_Managed_ObjectBase___"></a> SetTransforms\(ObjectBase\[\]\)

Sets the array of transforms

```csharp
bool SetTransforms(ObjectBase[] _lsttransforms)
```

#### Parameters

`_lsttransforms` ObjectBase\[\]

The array of transforms(DesignFrame,Marker).

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref> include the following property <xref href="VM.Managed.DesignFrame" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.ReferenceDesignFrame" data-throw-if-not-resolved="false"></xref>; otherwise, <code>false</code>

