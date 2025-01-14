# `Fracture`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Fracture"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Fracture

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Fracture.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Fracture.Activate)                                                 | Activate the current object.                                                      |
| [`AddArbitraryCrack`](#Fracture.AddArbitraryCrack)                               | Creates a new ArbitraryCrack                                                      |
| [`AddComment`](#Fracture.AddComment)                                             | Creates a new child Comment.                                                      |
| [`AddContactDebonding`](#Fracture.AddContactDebonding)                           | Creates a new ContactDebonding                                                    |
| [`AddCornerCrack`](#Fracture.AddCornerCrack)                                     | Creates a new CornerCrack                                                         |
| [`AddCrack`](#Fracture.AddCrack)                                                 | Creates a new child Crack.                                                        |
| [`AddCrackInitiation`](#Fracture.AddCrackInitiation)                             | Creates a new CrackInitiation                                                     |
| [`AddCylindricalCrack`](#Fracture.AddCylindricalCrack)                           | Creates a new CylindricalCrack                                                    |
| [`AddEdgeCrack`](#Fracture.AddEdgeCrack)                                         | Creates a new EdgeCrack                                                           |
| [`AddEllipticalCrack`](#Fracture.AddEllipticalCrack)                             | Creates a new EllipticalCrack                                                     |
| [`AddFigure`](#Fracture.AddFigure)                                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Fracture.AddImage)                                                 | Creates a new child Image.                                                        |
| [`AddInterfaceDelamination`](#Fracture.AddInterfaceDelamination)                 | Creates a new InterfaceDelamination                                               |
| [`AddPreMeshedCrack`](#Fracture.AddPreMeshedCrack)                               | Creates a new PreMeshedCrack                                                      |
| [`AddRingCrack`](#Fracture.AddRingCrack)                                         | Creates a new RingCrack                                                           |
| [`AddSMARTCrackGrowth`](#Fracture.AddSMARTCrackGrowth)                           | Creates a new SMARTCrackGrowth                                                    |
| [`AddSemiEllipticalCrack`](#Fracture.AddSemiEllipticalCrack)                     | Creates a new SemiEllipticalCrack                                                 |
| [`AddThroughCrack`](#Fracture.AddThroughCrack)                                   | Creates a new ThroughCrack                                                        |
| [`CopyTo`](#Fracture.CopyTo)                                                     | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Fracture.CreateParameter)                                   | Creates a new parameter for a Property.                                           |
| [`Delete`](#Fracture.Delete)                                                     | Run the Delete action.                                                            |
| [`Duplicate`](#Fracture.Duplicate)                                               | Creates a copy of the current DataModelObject.                                    |
| [`GenerateAllCrackMesh`](#Fracture.GenerateAllCrackMesh)                         | Run the GenerateAllCrackMesh action.                                              |
| [`GenerateAllInterfaceDelamination`](#Fracture.GenerateAllInterfaceDelamination) | Generate all interfaces delamination from an external model.                      |
| [`GetChildren`](#Fracture.GetChildren)                                           | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Fracture.GetParameter)                                         | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Fracture.GroupAllSimilarChildren)                   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Fracture.GroupSimilarObjects)                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Fracture.PropertyByAPIName)                               | Get a property by its API name.                                                   |
| [`PropertyByName`](#Fracture.PropertyByName)                                     | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Fracture.RemoveParameter)                                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Fracture.Children)                                                     | Gets the list of children.                                    |
| [`Comments`](#Fracture.Comments)                                                     | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Fracture.DataModelObjectCategory)                       | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Fracture.Figures)                                                       | Gets the list of associated figures.                          |
| [`Images`](#Fracture.Images)                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#Fracture.InternalObject)                                         | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Fracture.Properties)                                                 | Gets the list of properties for this object.                  |
| [`RemeshHexDominantToTetrahedralType`](#Fracture.RemeshHexDominantToTetrahedralType) |                                                               |
| [`VisibleProperties`](#Fracture.VisibleProperties)                                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Fracture.Children"></a>

### *property* Fracture.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Comments"></a>

### *property* Fracture.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.DataModelObjectCategory"></a>

### *property* Fracture.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Figures"></a>

### *property* Fracture.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Images"></a>

### *property* Fracture.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.InternalObject"></a>

### *property* Fracture.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFractureGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Properties"></a>

### *property* Fracture.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.RemeshHexDominantToTetrahedralType"></a>

### *property* Fracture.RemeshHexDominantToTetrahedralType *: [Ansys.Mechanical.DataModel.Enums.RemeshHexDominantToTetrahedral](../../../Mechanical/DataModel/Enums/RemeshHexDominantToTetrahedral.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RemeshHexDominantToTetrahedral) | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="Fracture.VisibleProperties"></a>

### *property* Fracture.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Fracture.Activate"></a>

### Fracture.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddArbitraryCrack"></a>

### Fracture.AddArbitraryCrack()

Creates a new ArbitraryCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddComment"></a>

### Fracture.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddContactDebonding"></a>

### Fracture.AddContactDebonding()

Creates a new ContactDebonding

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCornerCrack"></a>

### Fracture.AddCornerCrack()

Creates a new CornerCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCrack"></a>

### Fracture.AddCrack()

Creates a new child Crack.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCrackInitiation"></a>

### Fracture.AddCrackInitiation()

Creates a new CrackInitiation

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddCylindricalCrack"></a>

### Fracture.AddCylindricalCrack()

Creates a new CylindricalCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddEdgeCrack"></a>

### Fracture.AddEdgeCrack()

Creates a new EdgeCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddEllipticalCrack"></a>

### Fracture.AddEllipticalCrack()

Creates a new EllipticalCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddFigure"></a>

### Fracture.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddImage"></a>

### Fracture.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddInterfaceDelamination"></a>

### Fracture.AddInterfaceDelamination()

Creates a new InterfaceDelamination

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddPreMeshedCrack"></a>

### Fracture.AddPreMeshedCrack()

Creates a new PreMeshedCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddRingCrack"></a>

### Fracture.AddRingCrack()

Creates a new RingCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddSMARTCrackGrowth"></a>

### Fracture.AddSMARTCrackGrowth()

Creates a new SMARTCrackGrowth

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddSemiEllipticalCrack"></a>

### Fracture.AddSemiEllipticalCrack()

Creates a new SemiEllipticalCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.AddThroughCrack"></a>

### Fracture.AddThroughCrack()

Creates a new ThroughCrack

<!-- !! processed by numpydoc !! -->

<a id="Fracture.CopyTo"></a>

### Fracture.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.CreateParameter"></a>

### Fracture.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Delete"></a>

### Fracture.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.Duplicate"></a>

### Fracture.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GenerateAllCrackMesh"></a>

### Fracture.GenerateAllCrackMesh()

Run the GenerateAllCrackMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GenerateAllInterfaceDelamination"></a>

### Fracture.GenerateAllInterfaceDelamination()

Generate all interfaces delamination from an external model.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetChildren"></a>

### Fracture.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GetParameter"></a>

### Fracture.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GroupAllSimilarChildren"></a>

### Fracture.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.GroupSimilarObjects"></a>

### Fracture.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.PropertyByAPIName"></a>

### Fracture.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Fracture.PropertyByName"></a>

### Fracture.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Fracture.RemoveParameter"></a>

### Fracture.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

