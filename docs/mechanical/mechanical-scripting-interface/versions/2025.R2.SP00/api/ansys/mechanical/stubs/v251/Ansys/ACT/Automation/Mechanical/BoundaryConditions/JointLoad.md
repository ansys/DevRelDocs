# `JointLoad`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.JointLoad"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.JointLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a JointLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#JointLoad.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#JointLoad.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#JointLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#JointLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#JointLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#JointLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#JointLoad.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#JointLoad.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#JointLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#JointLoad.GetActivateAtLoadStep)     | Gets whether the joint is active at the specified load step.                      |
| [`GetChildren`](#JointLoad.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#JointLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#JointLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#JointLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#JointLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#JointLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#JointLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#JointLoad.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`SetActivateAtLoadStep`](#JointLoad.SetActivateAtLoadStep)     | Sets whether the joint is active at the specified load step.                      |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#JointLoad.Children)                               | Gets the list of children.                                    |
| [`Comments`](#JointLoad.Comments)                               | Gets the list of associated comments.                         |
| [`CutoffFrequency`](#JointLoad.CutoffFrequency)                 | Gets or sets the CutoffFrequency.                             |
| [`DOF`](#JointLoad.DOF)                                         | Gets or sets the DOF.                                         |
| [`DataModelObjectCategory`](#JointLoad.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#JointLoad.Figures)                                 | Gets the list of associated figures.                          |
| [`FittingMethod`](#JointLoad.FittingMethod)                     | Gets or sets the FittingMethod.                               |
| [`Images`](#JointLoad.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#JointLoad.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Joint`](#JointLoad.Joint)                                     | Gets or sets the Joint.                                       |
| [`JointConditionType`](#JointLoad.JointConditionType)           | Gets or sets the JointConditionType.                          |
| [`LockAtLoadStep`](#JointLoad.LockAtLoadStep)                   | Gets or sets the LockAtLoadStep.                              |
| [`Magnitude`](#JointLoad.Magnitude)                             | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#JointLoad.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#JointLoad.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#JointLoad.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#JointLoad.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="JointLoad.Children"></a>

### *property* JointLoad.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Comments"></a>

### *property* JointLoad.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CutoffFrequency"></a>

### *property* JointLoad.CutoffFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutoffFrequency.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.DOF"></a>

### *property* JointLoad.DOF *: [Ansys.Mechanical.DataModel.Enums.KinematicDOF](../../../../Mechanical/DataModel/Enums/KinematicDOF.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.KinematicDOF) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOF.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.DataModelObjectCategory"></a>

### *property* JointLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Figures"></a>

### *property* JointLoad.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.FittingMethod"></a>

### *property* JointLoad.FittingMethod *: [Ansys.Mechanical.DataModel.Enums.FittingMethodType](../../../../Mechanical/DataModel/Enums/FittingMethodType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FittingMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FittingMethod.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Images"></a>

### *property* JointLoad.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.InternalObject"></a>

### *property* JointLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSJointConditionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Joint"></a>

### *property* JointLoad.Joint *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.JointConditionType"></a>

### *property* JointLoad.JointConditionType *: [Ansys.Mechanical.DataModel.Enums.JointConditionType](../../../../Mechanical/DataModel/Enums/JointConditionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.JointConditionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointConditionType.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.LockAtLoadStep"></a>

### *property* JointLoad.LockAtLoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LockAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Magnitude"></a>

### *property* JointLoad.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.NumberOfSegments"></a>

### *property* JointLoad.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Properties"></a>

### *property* JointLoad.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Suppressed"></a>

### *property* JointLoad.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.VisibleProperties"></a>

### *property* JointLoad.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="JointLoad.Activate"></a>

### JointLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.AddCommandSnippet"></a>

### JointLoad.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.AddComment"></a>

### JointLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.AddFigure"></a>

### JointLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.AddImage"></a>

### JointLoad.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CopyTo"></a>

### JointLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CreateParameter"></a>

### JointLoad.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Delete"></a>

### JointLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Duplicate"></a>

### JointLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetActivateAtLoadStep"></a>

### JointLoad.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the joint is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetChildren"></a>

### JointLoad.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetParameter"></a>

### JointLoad.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GroupAllSimilarChildren"></a>

### JointLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GroupSimilarObjects"></a>

### JointLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.PropertyByAPIName"></a>

### JointLoad.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.PropertyByName"></a>

### JointLoad.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.RemoveParameter"></a>

### JointLoad.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.RenameBasedOnDefinition"></a>

### JointLoad.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.SetActivateAtLoadStep"></a>

### JointLoad.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the joint is active at the specified load step.

<!-- !! processed by numpydoc !! -->

