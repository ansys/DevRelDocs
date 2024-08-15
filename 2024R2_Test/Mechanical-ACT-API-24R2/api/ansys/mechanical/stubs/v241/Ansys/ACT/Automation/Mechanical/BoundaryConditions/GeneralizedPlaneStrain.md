# `GeneralizedPlaneStrain`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeneralizedPlaneStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeneralizedPlaneStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------|---------------------------------------------------------------|
| `InternalObject`                     | Gets the internal object. For advanced usage only.            |
| `MagnitudeAlongFiber`                | Gets or sets the MagnitudeAlongFiber.                         |
| `MagnitudeRotationX`                 | Gets or sets the MagnitudeRotationX.                          |
| `MagnitudeRotationY`                 | Gets or sets the MagnitudeRotationY.                          |
| `XCoordinateOfRefPoint`              | Gets or sets the XCoordinateOfRefPoint.                       |
| `YCoordinateOfRefPoint`              | Gets or sets the YCoordinateOfRefPoint.                       |
| `BoundaryConditionAlongFiber`        | Gets or sets the BoundaryConditionAlongFiber.                 |
| `BoundaryConditionForRotationAboutX` | Gets or sets the BoundaryConditionForRotationAboutX.          |
| `BoundaryConditionForRotationAboutY` | Gets or sets the BoundaryConditionForRotationAboutY.          |
| `Suppressed`                         | Gets or sets the Suppressed.                                  |
| `CoordinateSystem`                   | Gets or sets the CoordinateSystem.                            |
| `DataModelObjectCategory`            | Gets the current DataModelObject's category.                  |
| `Children`                           | Gets the list of children.                                    |
| `Comments`                           | Gets the list of associated comments.                         |
| `Figures`                            | Gets the list of associated figures.                          |
| `Images`                             | Gets the list of associated images.                           |
| `InternalObject`                     | Gets the internal object. For advanced usage only.            |
| `Properties`                         | Gets the list of properties for this object.                  |
| `VisibleProperties`                  | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

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

### *property* GeneralizedPlaneStrain.BoundaryConditionAlongFiber *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionAlongFiber](../../../../Mechanical/DataModel/Enums/BoundaryConditionAlongFiber.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BoundaryConditionAlongFiber) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionAlongFiber.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.BoundaryConditionForRotationAboutX *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation](../../../../Mechanical/DataModel/Enums/BoundaryConditionForRotation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionForRotationAboutX.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.BoundaryConditionForRotationAboutY *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation](../../../../Mechanical/DataModel/Enums/BoundaryConditionForRotation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BoundaryConditionForRotation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionForRotationAboutY.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### GeneralizedPlaneStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrain.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

