# Fracture

### *class* Fracture

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Fracture.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCrack`](#Fracture.AddCrack)                                                 | Creates a new child Crack.                                                        |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateAllCrackMesh`](#Fracture.GenerateAllCrackMesh)                         | Run the GenerateAllCrackMesh action.                                              |
| [`GenerateAllInterfaceDelamination`](#Fracture.GenerateAllInterfaceDelamination) | Generate all interfaces delamination from an external model.                      |
| [`AddArbitraryCrack`](#Fracture.AddArbitraryCrack)                               | Creates a new ArbitraryCrack                                                      |
| [`AddContactDebonding`](#Fracture.AddContactDebonding)                           | Creates a new ContactDebonding                                                    |
| [`AddCornerCrack`](#Fracture.AddCornerCrack)                                     | Creates a new CornerCrack                                                         |
| [`AddCylindricalCrack`](#Fracture.AddCylindricalCrack)                           | Creates a new CylindricalCrack                                                    |
| [`AddEdgeCrack`](#Fracture.AddEdgeCrack)                                         | Creates a new EdgeCrack                                                           |
| [`AddEllipticalCrack`](#Fracture.AddEllipticalCrack)                             | Creates a new EllipticalCrack                                                     |
| [`AddInterfaceDelamination`](#Fracture.AddInterfaceDelamination)                 | Creates a new InterfaceDelamination                                               |
| [`AddPreMeshedCrack`](#Fracture.AddPreMeshedCrack)                               | Creates a new PreMeshedCrack                                                      |
| [`AddRingCrack`](#Fracture.AddRingCrack)                                         | Creates a new RingCrack                                                           |
| [`AddSemiEllipticalCrack`](#Fracture.AddSemiEllipticalCrack)                     | Creates a new SemiEllipticalCrack                                                 |
| [`AddSMARTCrackGrowth`](#Fracture.AddSMARTCrackGrowth)                           | Creates a new SMARTCrackGrowth                                                    |
| [`AddThroughCrack`](#Fracture.AddThroughCrack)                                   | Creates a new ThroughCrack                                                        |
| [`Delete`](#Fracture.Delete)                                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Fracture.AddComment)                                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#Fracture.AddFigure)                                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Fracture.AddImage)                                                 | Creates a new child Image.                                                        |
| [`Activate`](#Fracture.Activate)                                                 | Activate the current object.                                                      |
| [`CopyTo`](#Fracture.CopyTo)                                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Fracture.Duplicate)                                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Fracture.GroupAllSimilarChildren)                   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Fracture.GroupSimilarObjects)                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Fracture.PropertyByName)                                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Fracture.PropertyByAPIName)                               | Get a property by its API name.                                                   |
| [`CreateParameter`](#Fracture.CreateParameter)                                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Fracture.GetParameter)                                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Fracture.RemoveParameter)                                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RemeshHexDominantToTetrahedral`](#Fracture.RemeshHexDominantToTetrahedral)                                        | Gets or sets the RemeshHexDominantToTetrahedral.              |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Fracture.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#Fracture.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#Fracture.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#Fracture.Images)                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Fracture.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Fracture.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Fracture
```

## Property detail

### *property* Fracture.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFractureGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Fracture.RemeshHexDominantToTetrahedral *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshHexDominantToTetrahedral.

<!-- !! processed by numpydoc !! -->

### *property* Fracture.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Fracture.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Fracture.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Fracture.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Fracture.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Fracture.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Fracture.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Fracture.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Fracture.AddCrack()

Creates a new child Crack.

<!-- !! processed by numpydoc !! -->

### Fracture.GenerateAllCrackMesh()

Run the GenerateAllCrackMesh action.

<!-- !! processed by numpydoc !! -->

### Fracture.GenerateAllInterfaceDelamination()

Generate all interfaces delamination from an external model.

<!-- !! processed by numpydoc !! -->

### Fracture.AddArbitraryCrack()

Creates a new ArbitraryCrack

<!-- !! processed by numpydoc !! -->

### Fracture.AddContactDebonding()

Creates a new ContactDebonding

<!-- !! processed by numpydoc !! -->

### Fracture.AddCornerCrack()

Creates a new CornerCrack

<!-- !! processed by numpydoc !! -->

### Fracture.AddCylindricalCrack()

Creates a new CylindricalCrack

<!-- !! processed by numpydoc !! -->

### Fracture.AddEdgeCrack()

Creates a new EdgeCrack

<!-- !! processed by numpydoc !! -->

### Fracture.AddEllipticalCrack()

Creates a new EllipticalCrack

<!-- !! processed by numpydoc !! -->

### Fracture.AddInterfaceDelamination()

Creates a new InterfaceDelamination

<!-- !! processed by numpydoc !! -->

### Fracture.AddPreMeshedCrack()

Creates a new PreMeshedCrack

<!-- !! processed by numpydoc !! -->

### Fracture.AddRingCrack()

Creates a new RingCrack

<!-- !! processed by numpydoc !! -->

### Fracture.AddSemiEllipticalCrack()

Creates a new SemiEllipticalCrack

<!-- !! processed by numpydoc !! -->

### Fracture.AddSMARTCrackGrowth()

Creates a new SMARTCrackGrowth

<!-- !! processed by numpydoc !! -->

### Fracture.AddThroughCrack()

Creates a new ThroughCrack

<!-- !! processed by numpydoc !! -->

### Fracture.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Fracture.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Fracture.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Fracture.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Fracture.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Fracture.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Fracture.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Fracture.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Fracture.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Fracture.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Fracture.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Fracture.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Fracture.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Fracture.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Fracture.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Fracture.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
