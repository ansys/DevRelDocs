# Radiation

### *class* Radiation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Radiation.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#Radiation.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#Radiation.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#Radiation.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#Radiation.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#Radiation.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#Radiation.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Radiation.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Radiation.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Radiation.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#Radiation.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#Radiation.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Radiation.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Radiation.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Radiation.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Radiation.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Radiation.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#Radiation.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Radiation.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Radiation.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](#Radiation.NumberOfSegments)                                                                      | Gets or sets the NumberOfSegments.                            |
| [`Enclosure`](#Radiation.Enclosure)                                                                                    | Gets or sets the Enclosure.                                   |
| [`Emissivity`](#Radiation.Emissivity)                                                                                  | Gets or sets the Emissivity.                                  |
| [`AmbientTemperature`](#Radiation.AmbientTemperature)                                                                  | Gets the AmbientTemperature.                                  |
| [`EditDataFor`](#Radiation.EditDataFor)                                                                                | Gets or sets the EditDataFor.                                 |
| [`EnclosureType`](../../../../Mechanical/DataModel/Enums/EnclosureType.md#EnclosureType)                               | Gets or sets the EnclosureType.                               |
| [`Correlation`](#Radiation.Correlation)                                                                                | Gets or sets the Correlation.                                 |
| [`ShellFace`](#Radiation.ShellFace)                                                                                    | Gets or sets the ShellFace.                                   |
| [`Location`](#Radiation.Location)                                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#Radiation.Suppressed)                                                                                  | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#Radiation.SharedRefBody)                                                                            | Gets or sets the SharedRefBody.                               |
| [`Children`](#Radiation.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#Radiation.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#Radiation.Figures)                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#Radiation.Images)                                                                                          | Gets the list of associated images.                           |
| [`ReadOnly`](#Radiation.ReadOnly)                                                                                      | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Radiation.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Radiation.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import Radiation
```

## Property detail

### *property* Radiation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Enclosure *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Enclosure.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Emissivity *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Emissivity.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.AmbientTemperature *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AmbientTemperature.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.EditDataFor *: [Ansys.Mechanical.DataModel.Enums.ConvectionTableSelection](../../../../Mechanical/DataModel/Enums/ConvectionTableSelection.md#ConvectionTableSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EditDataFor.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.EnclosureType *: [Ansys.Mechanical.DataModel.Enums.EnclosureType](../../../../Mechanical/DataModel/Enums/EnclosureType.md#EnclosureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnclosureType.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Correlation *: [Ansys.Mechanical.DataModel.Enums.RadiationType](../../../../Mechanical/DataModel/Enums/RadiationType.md#RadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Correlation.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Radiation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Radiation.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Radiation.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Radiation.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Radiation.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Radiation.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Radiation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Radiation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Radiation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Radiation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Radiation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Radiation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Radiation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Radiation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Radiation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Radiation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Radiation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Radiation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Radiation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Radiation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Radiation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Radiation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
