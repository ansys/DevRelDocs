# <a id="VM_Managed_DAFUL_FE_ImportInfo"></a> Class ImportInfo

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

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

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

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_NodeIndex_System_UInt32_"></a> NodeIndex\[uint\]

Gets the node index.

```csharp
public uint NodeIndex[uint nID] { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_Property_System_UInt32_"></a> Property\[uint\]

Gets the property from index.

```csharp
public IFEObject Property[uint nID] { get; }
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

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The ID.

`enType` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

The element type.

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index.

### <a id="VM_Managed_DAFUL_FE_ImportInfo_AddMarker_System_UInt32_System_Double___"></a> AddMarker\(uint, double\[\]\)

Add marker.

```csharp
public void AddMarker(uint index, double[] marker)
```

#### Parameters

`index` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`marker` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

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

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The ID.

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index.

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_ElementInfo_System_UInt32_"></a> get\_ElementInfo\(uint\)

```csharp
public ElementInfo get_ElementInfo(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [ElementInfo](VM.Managed.DAFUL.FE.ElementInfo.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_Marker_System_UInt32_"></a> get\_Marker\(uint\)

```csharp
public double[] get_Marker(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_Material_System_UInt32_"></a> get\_Material\(uint\)

```csharp
public IMaterial get_Material(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 IMaterial

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_NodeID_System_UInt32_"></a> get\_NodeID\(uint\)

```csharp
public uint get_NodeID(uint nIndex)
```

#### Parameters

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_NodeIndex_System_UInt32_"></a> get\_NodeIndex\(uint\)

```csharp
public uint get_NodeIndex(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_Property_System_UInt32_"></a> get\_Property\(uint\)

```csharp
public IFEObject get_Property(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

### <a id="VM_Managed_DAFUL_FE_ImportInfo_get_Set_System_UInt32_"></a> get\_Set\(uint\)

```csharp
public IFEObject get_Set(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

