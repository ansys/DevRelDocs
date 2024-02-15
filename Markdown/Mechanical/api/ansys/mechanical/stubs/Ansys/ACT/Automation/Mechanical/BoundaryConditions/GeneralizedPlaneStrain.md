# GeneralizedPlaneStrain

### *class* GeneralizedPlaneStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeneralizedPlaneStrain.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#GeneralizedPlaneStrain.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GeneralizedPlaneStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeneralizedPlaneStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeneralizedPlaneStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GeneralizedPlaneStrain.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GeneralizedPlaneStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GeneralizedPlaneStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GeneralizedPlaneStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeneralizedPlaneStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GeneralizedPlaneStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GeneralizedPlaneStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GeneralizedPlaneStrain.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GeneralizedPlaneStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GeneralizedPlaneStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MagnitudeAlongFiber`](#GeneralizedPlaneStrain.MagnitudeAlongFiber)                                                               | Gets or sets the MagnitudeAlongFiber.                         |
| [`MagnitudeRotationX`](#GeneralizedPlaneStrain.MagnitudeRotationX)                                                                 | Gets or sets the MagnitudeRotationX.                          |
| [`MagnitudeRotationY`](#GeneralizedPlaneStrain.MagnitudeRotationY)                                                                 | Gets or sets the MagnitudeRotationY.                          |
| [`XCoordinateOfRefPoint`](#GeneralizedPlaneStrain.XCoordinateOfRefPoint)                                                           | Gets or sets the XCoordinateOfRefPoint.                       |
| [`YCoordinateOfRefPoint`](#GeneralizedPlaneStrain.YCoordinateOfRefPoint)                                                           | Gets or sets the YCoordinateOfRefPoint.                       |
| [`BoundaryConditionAlongFiber`](../../../../Mechanical/DataModel/Enums/BoundaryConditionAlongFiber.md#BoundaryConditionAlongFiber) | Gets or sets the BoundaryConditionAlongFiber.                 |
| [`BoundaryConditionForRotationAboutX`](#GeneralizedPlaneStrain.BoundaryConditionForRotationAboutX)                                 | Gets or sets the BoundaryConditionForRotationAboutX.          |
| [`BoundaryConditionForRotationAboutY`](#GeneralizedPlaneStrain.BoundaryConditionForRotationAboutY)                                 | Gets or sets the BoundaryConditionForRotationAboutY.          |
| [`Suppressed`](#GeneralizedPlaneStrain.Suppressed)                                                                                 | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                                         | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)             | Gets the current DataModelObject’s category.                  |
| [`Children`](#GeneralizedPlaneStrain.Children)                                                                                     | Gets the list of children.                                    |
| [`Comments`](#GeneralizedPlaneStrain.Comments)                                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#GeneralizedPlaneStrain.Figures)                                                                                       | Gets the list of associated figures.                          |
| [`Images`](#GeneralizedPlaneStrain.Images)                                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GeneralizedPlaneStrain.Properties)                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GeneralizedPlaneStrain.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import GeneralizedPlaneStrain
```

## Property detail

### *property* GeneralizedPlaneStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGenPlaneStrainAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.MagnitudeAlongFiber *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MagnitudeAlongFiber.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.MagnitudeRotationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MagnitudeRotationX.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.MagnitudeRotationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MagnitudeRotationY.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.XCoordinateOfRefPoint *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinateOfRefPoint.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.YCoordinateOfRefPoint *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinateOfRefPoint.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.BoundaryConditionAlongFiber *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionAlongFiber](../../../../Mechanical/DataModel/Enums/BoundaryConditionAlongFiber.md#BoundaryConditionAlongFiber) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionAlongFiber.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.BoundaryConditionForRotationAboutX *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation](../../../../Mechanical/DataModel/Enums/BoundaryConditionForRotation.md#BoundaryConditionForRotation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionForRotationAboutX.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.BoundaryConditionForRotationAboutY *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation](../../../../Mechanical/DataModel/Enums/BoundaryConditionForRotation.md#BoundaryConditionForRotation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionForRotationAboutY.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### GeneralizedPlaneStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
