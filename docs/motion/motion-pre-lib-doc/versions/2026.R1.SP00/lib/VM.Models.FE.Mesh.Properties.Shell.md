# Class Shell
<a id="VM_Models_FE_Mesh_Properties_Shell"></a>

Namespace: [VM.Models.FE.Mesh.Properties](VM.Models.FE.Mesh.Properties.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
[Table]
public class Shell : Solid, IEntity
```

#### Inheritance

object ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[Solid](VM.Models.FE.Mesh.Properties.Solid.md) ← 
[Shell](VM.Models.FE.Mesh.Properties.Shell.md)

#### Implements

[IEntity](VM.Models.FE.Mesh.IEntity.md)

#### Inherited Members

[Solid.Equals\(object\)](VM.Models.FE.Mesh.Properties.Solid.md\#VM\_Models\_FE\_Mesh\_Properties\_Solid\_Equals\_System\_Object\_), 
[Solid.MarkerId](VM.Models.FE.Mesh.Properties.Solid.md\#VM\_Models\_FE\_Mesh\_Properties\_Solid\_MarkerId), 
[Solid.MaterialId](VM.Models.FE.Mesh.Properties.Solid.md\#VM\_Models\_FE\_Mesh\_Properties\_Solid\_MaterialId), 
[Entity.Equals\(object\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Equals\_System\_Object\_), 
[Entity.GetHashCode\(\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_GetHashCode), 
[Entity.FromByteArray<T\>\(byte\[\]\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_FromByteArray\_\_1\_System\_Byte\_\_\_), 
[Entity.ToByteArray<T\>\(T\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_ToByteArray\_\_1\_\_\_0\_), 
[Entity.Id](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Id)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[BDFWriter.WriteToBDF\(Solid, TextWriter\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteToBDF\_VM\_Models\_FE\_Mesh\_Properties\_Solid\_System\_IO\_TextWriter\_)

## Constructors

### <a id="VM_Models_FE_Mesh_Properties_Shell__ctor"></a> Shell\(\)

```csharp
public Shell()
```

## Properties

### <a id="VM_Models_FE_Mesh_Properties_Shell_Thickness"></a> Thickness

```csharp
[Column]
public double Thickness { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Models_FE_Mesh_Properties_Shell_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

#### Returns

 bool

