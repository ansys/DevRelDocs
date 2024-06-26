# FatigueSensitivity

### *class* FatigueSensitivity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueSensitivity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`RenameBasedOnDefinition`](#FatigueSensitivity.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#FatigueSensitivity.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueSensitivity.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueSensitivity.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#FatigueSensitivity.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#FatigueSensitivity.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueSensitivity.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueSensitivity.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueSensitivity.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueSensitivity.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueSensitivity.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#FatigueSensitivity.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FatigueSensitivity.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueSensitivity.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LowerVariation`](#FatigueSensitivity.LowerVariation)                                                                    | Gets or sets the LowerVariation.                              |
| [`NumberOfFillPoints`](#FatigueSensitivity.NumberOfFillPoints)                                                            | Gets or sets the NumberOfFillPoints.                          |
| [`DesignLife`](#FatigueSensitivity.DesignLife)                                                                            | Gets or sets the DesignLife.                                  |
| [`UpperVariation`](#FatigueSensitivity.UpperVariation)                                                                    | Gets or sets the UpperVariation.                              |
| [`ChartViewingStyle`](#FatigueSensitivity.ChartViewingStyle)                                                              | Gets or sets the ChartViewingStyle.                           |
| [`Sensitivity`](#FatigueSensitivity.Sensitivity)                                                                          | Gets or sets the Sensitivity.                                 |
| [`Suppressed`](#FatigueSensitivity.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`Location`](#FatigueSensitivity.Location)                                                                                | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#FatigueSensitivity.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#FatigueSensitivity.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Images`](#FatigueSensitivity.Images)                                                                                    | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FatigueSensitivity.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FatigueSensitivity.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueSensitivity
```

## Property detail

### *property* FatigueSensitivity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.LowerVariation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowerVariation.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.NumberOfFillPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfFillPoints.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.DesignLife *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.UpperVariation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpperVariation.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.Sensitivity *: [Ansys.Mechanical.DataModel.Enums.FatigueSensitivityType](../../../../../Mechanical/DataModel/Enums/FatigueSensitivityType.md#FatigueSensitivityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Sensitivity.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FatigueSensitivity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FatigueSensitivity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FatigueSensitivity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
