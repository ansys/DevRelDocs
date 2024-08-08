# `JointLoad`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.JointLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a JointLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`AddCommandSnippet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberOfSegments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`FittingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.FittingMethod)                     | Gets or sets the FittingMethod.                               |
| [`CutoffFrequency`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.CutoffFrequency)                 | Gets or sets the CutoffFrequency.                             |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`LockAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.LockAtLoadStep)                   | Gets or sets the LockAtLoadStep.                              |
| [`Magnitude`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Magnitude)                             | Gets the Magnitude.                                           |
| [`DOF`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.DOF)                                         | Gets or sets the DOF.                                         |
| [`JointConditionType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.JointConditionType)           | Gets or sets the JointConditionType.                          |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Joint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Joint)                                     | Gets or sets the Joint.                                       |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/JointLoad.md#JointLoad.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="JointLoad.NumberOfSegments"></a>

### *property* JointLoad.NumberOfSegments *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.FittingMethod"></a>

### *property* JointLoad.FittingMethod *: [Ansys.Mechanical.DataModel.Enums.FittingMethodType](../../../../Mechanical/DataModel/Enums/FittingMethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FittingMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FittingMethod.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CutoffFrequency"></a>

### *property* JointLoad.CutoffFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutoffFrequency.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.InternalObject"></a>

### *property* JointLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSJointConditionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.LockAtLoadStep"></a>

### *property* JointLoad.LockAtLoadStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LockAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Magnitude"></a>

### *property* JointLoad.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.DOF"></a>

### *property* JointLoad.DOF *: [Ansys.Mechanical.DataModel.Enums.KinematicDOF](../../../../Mechanical/DataModel/Enums/KinematicDOF.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KinematicDOF) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOF.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.JointConditionType"></a>

### *property* JointLoad.JointConditionType *: [Ansys.Mechanical.DataModel.Enums.JointConditionType](../../../../Mechanical/DataModel/Enums/JointConditionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointConditionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointConditionType.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Suppressed"></a>

### *property* JointLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Joint"></a>

### *property* JointLoad.Joint *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.DataModelObjectCategory"></a>

### *property* JointLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Children"></a>

### *property* JointLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Comments"></a>

### *property* JointLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Figures"></a>

### *property* JointLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Images"></a>

### *property* JointLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* JointLoad.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Properties"></a>

### *property* JointLoad.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.VisibleProperties"></a>

### *property* JointLoad.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="JointLoad.GetActivateAtLoadStep"></a>

### JointLoad.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.SetActivateAtLoadStep"></a>

### JointLoad.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.AddCommandSnippet"></a>

### JointLoad.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.RenameBasedOnDefinition"></a>

### JointLoad.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Delete"></a>

### JointLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetChildren"></a>

### JointLoad.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### JointLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### JointLoad.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Activate"></a>

### JointLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CopyTo"></a>

### JointLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.Duplicate"></a>

### JointLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GroupAllSimilarChildren"></a>

### JointLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GroupSimilarObjects"></a>

### JointLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.PropertyByName"></a>

### JointLoad.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.PropertyByAPIName"></a>

### JointLoad.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.CreateParameter"></a>

### JointLoad.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.GetParameter"></a>

### JointLoad.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="JointLoad.RemoveParameter"></a>

### JointLoad.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

