# `JointLoad`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.JointLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a JointLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `GetActivateAtLoadStep`   | GetActivateAtLoadStep method.                                                     |
| `SetActivateAtLoadStep`   | SetActivateAtLoadStep method.                                                     |
| `AddCommandSnippet`       | Creates a new CommandSnippet                                                      |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
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
|---------------------------|---------------------------------------------------------------|
| `NumberOfSegments`        | Gets or sets the NumberOfSegments.                            |
| `FittingMethod`           | Gets or sets the FittingMethod.                               |
| `CutoffFrequency`         | Gets or sets the CutoffFrequency.                             |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `LockAtLoadStep`          | Gets or sets the LockAtLoadStep.                              |
| `Magnitude`               | Gets the Magnitude.                                           |
| `DOF`                     | Gets or sets the DOF.                                         |
| `JointConditionType`      | Gets or sets the JointConditionType.                          |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `Joint`                   | Gets or sets the Joint.                                       |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* JointLoad.NumberOfSegments *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.FittingMethod *: [Ansys.Mechanical.DataModel.Enums.FittingMethodType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FittingMethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FittingMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* JointLoad.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.DOF *: [Ansys.Mechanical.DataModel.Enums.KinematicDOF](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/KinematicDOF.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.KinematicDOF) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOF.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.JointConditionType *: [Ansys.Mechanical.DataModel.Enums.JointConditionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/JointConditionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.JointConditionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointConditionType.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Joint *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* JointLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### JointLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### JointLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### JointLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### JointLoad.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

