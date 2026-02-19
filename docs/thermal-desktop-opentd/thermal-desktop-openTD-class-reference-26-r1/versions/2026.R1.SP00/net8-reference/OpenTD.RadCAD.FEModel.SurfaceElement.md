# Class SurfaceElement

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight surface element for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
public class SurfaceElement : Element
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Element](OpenTD.RadCAD.FEModel.Element.md) ← 
[SurfaceElement](OpenTD.RadCAD.FEModel.SurfaceElement.md)

## Inherited Members

[Element.id](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_id), 
[Element.order](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_order), 
[Element.numNodes](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_numNodes), 
[Element.nodeIds](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_nodeIds), 
[Element.midSideNodeIds](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_midSideNodeIds), 
[Element.material](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_material), 
[Element.orienter](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_orienter), 
[Element.Cx](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Cx), 
[Element.Cy](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Cy), 
[Element.Cz](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Cz), 
[Element.Xx](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Xx), 
[Element.Xy](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Xy), 
[Element.Xz](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Xz), 
[Element.Yx](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Yx), 
[Element.Yy](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Yy), 
[Element.Yz](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Yz), 
[Element.Zx](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Zx), 
[Element.Zy](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Zy), 
[Element.Zz](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_Zz), 
[Element.submodel](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_submodel), 
[Element.layer](OpenTD.RadCAD.FEModel.Element.md\#OpenTD\_RadCAD\_FEModel\_Element\_layer), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SurfaceElement\(\)

```csharp
public SurfaceElement()
```

## Fields

### MLI\_material\_a

```csharp
public string MLI_material_a
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MLI\_material\_b

```csharp
public string MLI_material_b
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MLI\_thickness\_a

```csharp
public Dimensional<ModelLength> MLI_thickness_a
```

#### Field Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### MLI\_thickness\_b

```csharp
public Dimensional<ModelLength> MLI_thickness_b
```

#### Field Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### material\_stack\_a

```csharp
public string material_stack_a
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### material\_stack\_b

```csharp
public string material_stack_b
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### onSolid

```csharp
public bool onSolid
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### optic\_a

```csharp
public string optic_a
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### optic\_b

```csharp
public string optic_b
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### surfaceIndex

```csharp
public int surfaceIndex
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### surfaceOrienters

```csharp
public List<Vector3d> surfaceOrienters
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### thickness

```csharp
public Dimensional<ModelLength> thickness
```

#### Field Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>


