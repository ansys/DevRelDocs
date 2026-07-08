# Class ImportInfo
<a id="VM_Managed_DAFUL_FE_ImportInfo"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the import information.

```csharp
public class ImportInfo
```

#### Inheritance

object ← 
[ImportInfo](VM.Managed.DAFUL.FE.ImportInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_FE_ImportInfo__ctor"></a> ImportInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.ImportInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ImportInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_FE_ImportInfo_ElementInfo_System_UInt32_"></a> ElementInfo\[uint\]

Gets the element information from index.

```csharp
public ElementInfo ElementInfo[uint nID] { get; }
```

#### Property Value

 [ElementInfo](VM.Managed.DAFUL.FE.ElementInfo.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_Marker_System_UInt32_"></a> Marker\[uint\]

Gets the marker.

```csharp
public double[] Marker[uint nID] { get; }
```

#### Property Value

 double\[\]

### <a id="VM_Managed_DAFUL_FE_ImportInfo_Material_System_UInt32_"></a> Material\[uint\]

Gets the material.

```csharp
public IMaterial Material[uint nID] { get; }
```

#### Property Value

 IMaterial

### <a id="VM_Managed_DAFUL_FE_ImportInfo_NodeID_System_UInt32_"></a> NodeID\[uint\]

Gets the node ID.

```csharp
public uint NodeID[uint nIndex] { get; }
```

#### Property Value

 uint

### <a id="VM_Managed_DAFUL_FE_ImportInfo_NodeIndex_System_UInt32_"></a> NodeIndex\[uint\]

Gets the node index.

```csharp
public uint NodeIndex[uint nID] { get; }
```

#### Property Value

 uint

### <a id="VM_Managed_DAFUL_FE_ImportInfo_PropertyBeam_System_UInt32_"></a> PropertyBeam\[uint\]

Gets the property beam/beamL from index.

```csharp
public IFEObject PropertyBeam[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_PropertyShell_System_UInt32_"></a> PropertyShell\[uint\]

Gets the property shell from index.

```csharp
public IFEObject PropertyShell[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_PropertySolid_System_UInt32_"></a> PropertySolid\[uint\]

Gets the property solid from index.

```csharp
public IFEObject PropertySolid[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_RBE_System_UInt32_"></a> RBE\[uint\]

Gets the rbe from index.

```csharp
public IFEObject RBE[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_Set_System_UInt32_"></a> Set\[uint\]

Gets the SetPatch or SetEdge from index.

```csharp
public IFEObject Set[uint nID] { get; }
```

#### Property Value

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

## Methods

### <a id="VM_Managed_DAFUL_FE_ImportInfo_Add_VM_Managed_DAFUL_FE_IFEObject_"></a> Add\(IFEObject\)

Add.

```csharp
public void Add(IFEObject obj)
```

#### Parameters

`obj` [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

The FE object.

### <a id="VM_Managed_DAFUL_FE_ImportInfo_AddElementInfo_System_UInt32_VM_Managed_DAFUL_FE_ElementType_System_UInt32_"></a> AddElementInfo\(uint, ElementType, uint\)

Add element inromation.

```csharp
public void AddElementInfo(uint nID, ElementType enType, uint nIndex)
```

#### Parameters

`nID` uint

The ID.

`enType` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

The element type.

`nIndex` uint

The index.

### <a id="VM_Managed_DAFUL_FE_ImportInfo_AddMarker_System_UInt32_System_Double___"></a> AddMarker\(uint, double\[\]\)

Add marker.

```csharp
public void AddMarker(uint index, double[] marker)
```

#### Parameters

`index` uint

The index.

`marker` double\[\]

The marker.

### <a id="VM_Managed_DAFUL_FE_ImportInfo_AddMaterial_VM_Managed_Material_IMaterial_"></a> AddMaterial\(IMaterial\)

Add material.

```csharp
public void AddMaterial(IMaterial mat)
```

#### Parameters

`mat` IMaterial

The material.

### <a id="VM_Managed_DAFUL_FE_ImportInfo_AddNodeID_System_UInt32_System_UInt32_"></a> AddNodeID\(uint, uint\)

Add node ID.

```csharp
public void AddNodeID(uint nID, uint nIndex)
```

#### Parameters

`nID` uint

The ID.

`nIndex` uint

The index.

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_ElementInfo_System_UInt32_"></a> get\_ElementInfo\(uint\)

```csharp
public ElementInfo get_ElementInfo(uint nID)
```

#### Parameters

`nID` uint

#### Returns

 [ElementInfo](VM.Managed.DAFUL.FE.ElementInfo.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_Marker_System_UInt32_"></a> get\_Marker\(uint\)

```csharp
public double[] get_Marker(uint nID)
```

#### Parameters

`nID` uint

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_Material_System_UInt32_"></a> get\_Material\(uint\)

```csharp
public IMaterial get_Material(uint nID)
```

#### Parameters

`nID` uint

#### Returns

 IMaterial

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_NodeID_System_UInt32_"></a> get\_NodeID\(uint\)

```csharp
public uint get_NodeID(uint nIndex)
```

#### Parameters

`nIndex` uint

#### Returns

 uint

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_NodeIndex_System_UInt32_"></a> get\_NodeIndex\(uint\)

```csharp
public uint get_NodeIndex(uint nID)
```

#### Parameters

`nID` uint

#### Returns

 uint

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_PropertyBeam_System_UInt32_"></a> get\_PropertyBeam\(uint\)

```csharp
public IFEObject get_PropertyBeam(uint nID)
```

#### Parameters

`nID` uint

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_PropertyShell_System_UInt32_"></a> get\_PropertyShell\(uint\)

```csharp
public IFEObject get_PropertyShell(uint nID)
```

#### Parameters

`nID` uint

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_PropertySolid_System_UInt32_"></a> get\_PropertySolid\(uint\)

```csharp
public IFEObject get_PropertySolid(uint nID)
```

#### Parameters

`nID` uint

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_RBE_System_UInt32_"></a> get\_RBE\(uint\)

```csharp
public IFEObject get_RBE(uint nID)
```

#### Parameters

`nID` uint

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_Set_System_UInt32_"></a> get\_Set\(uint\)

```csharp
public IFEObject get_Set(uint nID)
```

#### Parameters

`nID` uint

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

