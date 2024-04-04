# ContactStepControl

### *class* ContactStepControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactStepControl.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#ContactStepControl.Delete)                                   | Run the Delete action.                                                            |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactStepControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactStepControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactStepControl.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactStepControl.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactStepControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactStepControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactStepControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactStepControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactStepControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactStepControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactStepControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactStepControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactStepControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`NormalStiffnessValue`](#ContactStepControl.NormalStiffnessValue)                                                     | Gets or sets the NormalStiffnessValue.                        |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`CurrentStep`](#ContactStepControl.CurrentStep)                                                                       | Gets or sets the CurrentStep.                                 |
| [`NormalStiffnessFactor`](#ContactStepControl.NormalStiffnessFactor)                                                   | Gets or sets the NormalStiffnessFactor.                       |
| [`Status`](#ContactStepControl.Status)                                                                                 | Gets or sets the Status.                                      |
| [`NormalStiffness`](#ContactStepControl.NormalStiffness)                                                               | Gets or sets the NormalStiffness.                             |
| [`ContactSelection`](#ContactStepControl.ContactSelection)                                                             | Gets or sets the ContactSelection.                            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#ContactStepControl.Suppressed)                                                                         | Gets or sets the Suppressed.                                  |
| [`Children`](#ContactStepControl.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#ContactStepControl.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#ContactStepControl.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#ContactStepControl.Images)                                                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactStepControl.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactStepControl.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import ContactStepControl
```

## Property detail

### *property* ContactStepControl.NormalStiffnessValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessValue.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementControlsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.CurrentStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStep.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.NormalStiffnessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.Status *: [Ansys.Mechanical.DataModel.Enums.ElementControlsStatus](../../../../Mechanical/DataModel/Enums/ElementControlsStatus.md#ElementControlsStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Status.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.NormalStiffness *: [Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType](../../../../Mechanical/DataModel/Enums/ElementControlsNormalStiffnessType.md#ElementControlsNormalStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffness.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.ContactSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSelection.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactStepControl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactStepControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactStepControl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
