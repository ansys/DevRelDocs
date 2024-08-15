# `PostContactTool`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.PostContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PostContactTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------|-----------------------------------------------------------------------------------|
| `AddFluidPressure`              | Creates a new ContactFluidPressure                                                |
| `AddFrictionalStress`           | Creates a new ContactFrictionalStress                                             |
| `AddHeatFlux`                   | Creates a new ContactHeatFlux                                                     |
| `AddPressure`                   | Creates a new ContactPressure                                                     |
| `AddSlidingDistance`            | Creates a new ContactSlidingDistance                                              |
| `AddInitialInformation`         | Creates a new ContactDataTable                                                    |
| `AddGap`                        | Creates a new ContactGap                                                          |
| `AddPenetration`                | Creates a new ContactPenetration                                                  |
| `AddStatus`                     | Creates a new ContactStatus                                                       |
| `ClearGeneratedData`            | Run the ClearGeneratedData action.                                                |
| `EvaluateAllResults`            | Run the EvaluateAllResults action.                                                |
| `GenerateInitialContactResults` | Generate Initial Contact Results and Mesh Parts                                   |
| `Delete`                        | Run the Delete action.                                                            |
| `GetChildren`                   | Gets the list of children, filtered by type.                                      |
| `GetChildren`                   | Gets the list of children, filtered by type.                                      |
| `AddComment`                    | Creates a new child Comment.                                                      |
| `AddFigure`                     | Creates a new child Figure.                                                       |
| `AddImage`                      | Creates a new child Image.                                                        |
| `Activate`                      | Activate the current object.                                                      |
| `CopyTo`                        | Copies all visible properties from this object to another.                        |
| `Duplicate`                     | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`       | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`           | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                | Get a property by its unique name.                                                |
| `PropertyByAPIName`             | Get a property by its API name.                                                   |
| `CreateParameter`               | Creates a new parameter for a Property.                                           |
| `GetParameter`                  | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `ScopingMethod`           | Gets or sets the ScopingMethod.                               |
| `Location`                | Gets or sets the Location.                                    |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* PostContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PostContactTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### PostContactTool.AddFluidPressure()

Creates a new ContactFluidPressure

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddFrictionalStress()

Creates a new ContactFrictionalStress

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddHeatFlux()

Creates a new ContactHeatFlux

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddPressure()

Creates a new ContactPressure

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddSlidingDistance()

Creates a new ContactSlidingDistance

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddInitialInformation()

Creates a new ContactDataTable

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddGap()

Creates a new ContactGap

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddPenetration()

Creates a new ContactPenetration

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddStatus()

Creates a new ContactStatus

<!-- !! processed by numpydoc !! -->

### PostContactTool.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GenerateInitialContactResults()

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

### PostContactTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PostContactTool.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### PostContactTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PostContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PostContactTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PostContactTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PostContactTool.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### PostContactTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PostContactTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PostContactTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

