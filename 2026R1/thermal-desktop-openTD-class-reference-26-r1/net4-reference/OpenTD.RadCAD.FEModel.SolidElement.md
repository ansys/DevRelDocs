# <a id="OpenTD_RadCAD_FEModel_SolidElement"></a> Class SolidElement

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight solid element for use creating a finite element
mesh using an FEMeshImporter only.

```csharp
public class SolidElement : Element
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Element](OpenTD.RadCAD.FEModel.Element.md) ← 
[SolidElement](OpenTD.RadCAD.FEModel.SolidElement.md)

#### Inherited Members

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
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_RadCAD_FEModel_SolidElement__ctor"></a> SolidElement\(\)

```csharp
public SolidElement()
```

## Fields

### <a id="OpenTD_RadCAD_FEModel_SolidElement_solidOrienters"></a> solidOrienters

```csharp
public List<Quaternion> solidOrienters
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Quaternion](OpenTD.RadCAD.FEModel.Quaternion.md)\>

