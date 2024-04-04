# JointLoad

### *class* JointLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a JointLoad.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#JointLoad.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#JointLoad.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddCommandSnippet`](#JointLoad.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](#JointLoad.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#JointLoad.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#JointLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#JointLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#JointLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#JointLoad.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#JointLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#JointLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#JointLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#JointLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#JointLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#JointLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#JointLoad.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#JointLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#JointLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`NumberOfSegments`](#JointLoad.NumberOfSegments)                                                                      | Gets or sets the NumberOfSegments.                            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`FittingMethod`](#JointLoad.FittingMethod)                                                                            | Gets or sets the FittingMethod.                               |
| [`CutoffFrequency`](#JointLoad.CutoffFrequency)                                                                        | Gets or sets the CutoffFrequency.                             |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`LockAtLoadStep`](#JointLoad.LockAtLoadStep)                                                                          | Gets or sets the LockAtLoadStep.                              |
| [`Magnitude`](#JointLoad.Magnitude)                                                                                    | Gets the Magnitude.                                           |
| [`DOF`](#JointLoad.DOF)                                                                                                | Gets or sets the DOF.                                         |
| [`JointConditionType`](../../../../Mechanical/DataModel/Enums/JointConditionType.md#JointConditionType)                | Gets or sets the JointConditionType.                          |
| [`Suppressed`](#JointLoad.Suppressed)                                                                                  | Gets or sets the Suppressed.                                  |
| [`Joint`](../Connections/Joint.md#Joint)                                                                               | Gets or sets the Joint.                                       |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#JointLoad.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#JointLoad.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#JointLoad.Figures)                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#JointLoad.Images)                                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#JointLoad.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#JointLoad.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import JointLoad
```

## Property detail

### *property* JointLoad.NumberOfSegments *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.FittingMethod *: [Ansys.Mechanical.DataModel.Enums.FittingMethodType](../../../../Mechanical/DataModel/Enums/FittingMethodType.md#FittingMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FittingMethod.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.CutoffFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutoffFrequency.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSJointConditionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.LockAtLoadStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LockAtLoadStep.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.DOF *: [Ansys.Mechanical.DataModel.Enums.KinematicDOF](../../../../Mechanical/DataModel/Enums/KinematicDOF.md#KinematicDOF) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOF.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.JointConditionType *: [Ansys.Mechanical.DataModel.Enums.JointConditionType](../../../../Mechanical/DataModel/Enums/JointConditionType.md#JointConditionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointConditionType.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Joint *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### JointLoad.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### JointLoad.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### JointLoad.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### JointLoad.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### JointLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### JointLoad.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### JointLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### JointLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### JointLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### JointLoad.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### JointLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### JointLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### JointLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### JointLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### JointLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### JointLoad.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### JointLoad.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### JointLoad.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### JointLoad.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### JointLoad.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
