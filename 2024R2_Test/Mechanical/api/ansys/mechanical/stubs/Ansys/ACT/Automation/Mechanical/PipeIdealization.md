# PipeIdealization

### *class* PipeIdealization

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PipeIdealization.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#PipeIdealization.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`Activate`](#PipeIdealization.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PipeIdealization.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PipeIdealization.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PipeIdealization.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PipeIdealization.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PipeIdealization.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PipeIdealization.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PipeIdealization.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PipeIdealization.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PipeIdealization.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Factor`](#PipeIdealization.Factor)                                                                                | Gets or sets the Factor.                                      |
| [`Extend`](#PipeIdealization.Extend)                                                                                | Gets or sets the Extend.                                      |
| [`Suppressed`](#PipeIdealization.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`GeometrySelection`](#PipeIdealization.GeometrySelection)                                                          | Gets or sets the GeometrySelection.                           |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#PipeIdealization.Children)                                                                            | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PipeIdealization.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PipeIdealization.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PipeIdealization
```

## Property detail

### *property* PipeIdealization.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPipeIdealizationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PipeIdealization.Factor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Factor.

<!-- !! processed by numpydoc !! -->

### *property* PipeIdealization.Extend *: [Ansys.Mechanical.DataModel.Enums.GrowElbowElementsBy](../../../Mechanical/DataModel/Enums/GrowElbowElementsBy.md#GrowElbowElementsBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Extend.

<!-- !! processed by numpydoc !! -->

### *property* PipeIdealization.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PipeIdealization.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* PipeIdealization.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* PipeIdealization.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PipeIdealization.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PipeIdealization.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PipeIdealization.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### PipeIdealization.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PipeIdealization.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
