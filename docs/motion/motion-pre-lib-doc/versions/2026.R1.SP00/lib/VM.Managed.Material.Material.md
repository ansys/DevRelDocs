# Class Material
<a id="VM_Managed_Material_Material"></a>

Namespace: [VM.Managed.Material](VM.Managed.Material.md)  
Assembly: VMAppCore.dll  

This class is to represent the material.

```csharp
public class Material : IMaterial
```

#### Inheritance

object ← 
[Material](VM.Managed.Material.Material.md)

#### Implements

[IMaterial](VM.Managed.Material.IMaterial.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Material_Material__ctor"></a> Material\(\)

Initializes a new instance of the <xref href="VM.Managed.Material.Material" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Material()
```

## Properties

### <a id="VM_Managed_Material_Material_DensityValue"></a> DensityValue

Gets the density value.

```csharp
public virtual double DensityValue { get; }
```

#### Property Value

 double

### <a id="VM_Managed_Material_Material_Index"></a> Index

Gets or sets the material ID.

```csharp
public virtual uint Index { get; set; }
```

#### Property Value

 uint

