# Class ImportInfo

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the import information.

```csharp
public class ImportInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ImportInfo](VM.Managed.DAFUL.FE.ImportInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ImportInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.ImportInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ImportInfo()
```

## Properties

### ElementInfo\[uint\]

Gets the element information from index.

```csharp
public ElementInfo ElementInfo[uint nID] { get; }
```

#### Property Value

 [ElementInfo](VM.Managed.DAFUL.FE.ElementInfo.md)

### Marker\[uint\]

Gets the marker.

```csharp
public double[] Marker[uint nID] { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### Material\[uint\]

Gets the material.

```csharp
public IMaterial Material[uint nID] { get; }
```

#### Property Value

 IMaterial

### NodeID\[uint\]

Gets the node ID.

```csharp
public uint NodeID[uint nIndex] { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NodeIndex\[uint\]

Gets the node index.

```csharp
public uint NodeIndex[uint nID] { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PropertyBeam\[uint\]

Gets the property beam/beamL from index.

```csharp
public IFEObject PropertyBeam[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### PropertyShell\[uint\]

Gets the property shell from index.

```csharp
public IFEObject PropertyShell[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### PropertySolid\[uint\]

Gets the property solid from index.

```csharp
public IFEObject PropertySolid[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### RBE\[uint\]

Gets the rbe from index.

```csharp
public IFEObject RBE[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### Set\[uint\]

Gets the SetPatch or SetEdge from index.

```csharp
public IFEObject Set[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

## Methods

### Add\(IFEObject\)

Add.

```csharp
public void Add(IFEObject obj)
```

#### Parameters

`obj` [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

The FE object.

### AddElementInfo\(uint, ElementType, uint\)

Add element inromation.

```csharp
public void AddElementInfo(uint nID, ElementType enType, uint nIndex)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The ID.

`enType` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

The element type.

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index.

### AddMarker\(uint, double\[\]\)

Add marker.

```csharp
public void AddMarker(uint index, double[] marker)
```

#### Parameters

`index` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index.

`marker` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The marker.

### AddMaterial\(IMaterial\)

Add material.

```csharp
public void AddMaterial(IMaterial mat)
```

#### Parameters

`mat` IMaterial

The material.

### AddNodeID\(uint, uint\)

Add node ID.

```csharp
public void AddNodeID(uint nID, uint nIndex)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The ID.

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index.

### get\_ElementInfo\(uint\)

```csharp
public ElementInfo get_ElementInfo(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [ElementInfo](VM.Managed.DAFUL.FE.ElementInfo.md)

### get\_Marker\(uint\)

```csharp
public double[] get_Marker(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### get\_Material\(uint\)

```csharp
public IMaterial get_Material(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 IMaterial

### get\_NodeID\(uint\)

```csharp
public uint get_NodeID(uint nIndex)
```

#### Parameters

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### get\_NodeIndex\(uint\)

```csharp
public uint get_NodeIndex(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### get\_PropertyBeam\(uint\)

```csharp
public IFEObject get_PropertyBeam(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### get\_PropertyShell\(uint\)

```csharp
public IFEObject get_PropertyShell(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### get\_PropertySolid\(uint\)

```csharp
public IFEObject get_PropertySolid(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### get\_RBE\(uint\)

```csharp
public IFEObject get_RBE(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### get\_Set\(uint\)

```csharp
public IFEObject get_Set(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)


