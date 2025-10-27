# Struct Element
<a id="VM_Managed_DAFUL_FE_Element"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This struct is to represent the element.

```csharp
public struct Element
```

## Constructors

### <a id="VM_Managed_DAFUL_FE_Element__ctor_VM_Managed_DAFUL_FE_Mesh_System_UInt32_System_UInt32_VM_Managed_ObjectEventCore_"></a> Element\(Mesh, uint, uint, ObjectEventCore\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Element" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Element(Mesh meshParent, uint nIndex, uint nIndexType, ObjectEventCore coreProp)
```

#### Parameters

`meshParent` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The owner of mesh.

`nIndex` uint

The index.

`nIndexType` uint

The type of index.

`coreProp` ObjectEventCore

The event core.

## Fields

### <a id="VM_Managed_DAFUL_FE_Element_NodeIndex"></a> NodeIndex

The node index array.

```csharp
public uint[] NodeIndex
```

#### Field Value

 uint\[\]

### <a id="VM_Managed_DAFUL_FE_Element_Type"></a> Type

The element type.

```csharp
public ElementType Type
```

#### Field Value

 [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

## Properties

### <a id="VM_Managed_DAFUL_FE_Element_Property"></a> Property

Gets or sets the property.

```csharp
public PropertyBase Property { get; set; }
```

#### Property Value

 [PropertyBase](VM.Managed.DAFUL.FE.Property.PropertyBase.md)

