# Interface IChainedSegmentInfo

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

### Clear\_Connectors\(\)

Remove all objects.

```csharp
void Clear_Connectors()
```

### Clear\_Contacts\(\)

Remove all objects.

```csharp
void Clear_Contacts()
```

### Clear\_Transforms\(\)

Remove all objects.

```csharp
void Clear_Transforms()
```

### GetConnectors\(\)

Gets the array of connectors.

```csharp
ObjectBase[] GetConnectors()
```

#### Returns

 ObjectBase\[\]

The array of connectors(Body,NodeSet,FaceSet,PatchSet).

### GetGeometryReference\(\)

Gets the geomerty reference.

```csharp
ObjectBase GetGeometryReference()
```

#### Returns

 ObjectBase

The geometry reference.

### GetListContact\(\)

Gets the array of contact geometry.

```csharp
ObjectBase[] GetListContact()
```

#### Returns

 ObjectBase\[\]

The array of contact geometry(FaceSet,PatchSet).

### GetSegmentHeight1\(\)

Gets the segment height1.

```csharp
Variable GetSegmentHeight1()
```

#### Returns

 Variable

The segment height1.

### GetSegmentHeight2\(\)

Gets the segment height2.

```csharp
Variable GetSegmentHeight2()
```

#### Returns

 Variable

The segment height2.

### GetSegmentLength\(\)

Gets the segment length.

```csharp
Variable GetSegmentLength()
```

#### Returns

 Variable

The segment length.

### GetTransforms\(\)

Gets the array of transforms.

```csharp
ObjectBase[] GetTransforms()
```

#### Returns

 ObjectBase\[\]

The array of transform(DesignFrame,Marker).

### Get\_WorkPlane\(\)

Get work plane.

```csharp
Plane Get_WorkPlane()
```

#### Returns

 Plane

The plane

### SetConnector\(ObjectBase\)

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

### SetConnectors\(ObjectBase\[\]\)

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

### SetContact\(ObjectBase\)

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

### SetGeometryReference\(ObjectBase\)

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

### SetListContact\(ObjectBase\[\]\)

Sets the array of contact geometry.

```csharp
bool SetListContact(ObjectBase[] _lstcontact)
```

#### Parameters

`_lstcontact` ObjectBase\[\]

The array of contact geometry(FaceSet,PatchSet).

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetSegmentHeight1\(Variable\)

Sets the segment height1.

```csharp
void SetSegmentHeight1(Variable _segmentheight1)
```

#### Parameters

`_segmentheight1` Variable

The segment height1.

### SetSegmentHeight2\(Variable\)

Sets the segment height2.

```csharp
void SetSegmentHeight2(Variable _segmentheight2)
```

#### Parameters

`_segmentheight2` Variable

The segment height2.

### SetSegmentLength\(Variable\)

Sets the segment length.

```csharp
void SetSegmentLength(Variable _segmentlength)
```

#### Parameters

`_segmentlength` Variable

The segment length

### SetTransform\(ObjectBase\)

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

### SetTransforms\(ObjectBase\[\]\)

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


