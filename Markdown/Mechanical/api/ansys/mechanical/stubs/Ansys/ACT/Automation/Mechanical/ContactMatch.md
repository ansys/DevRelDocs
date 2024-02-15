# ContactMatch

### *class* ContactMatch

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactMatch.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Generate`](#ContactMatch.Generate)                               | Run the Generate action.                                                          |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#ContactMatch.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactMatch.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactMatch.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactMatch.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactMatch.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactMatch.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactMatch.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactMatch.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactMatch.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactMatch.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactMatch.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactMatch.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactMatch.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactMatch.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactMatch.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#ContactMatch.ScopingMethod)                                                                      | ScopingMethod property.                                       |
| [`ToleranceSlider`](#ContactMatch.ToleranceSlider)                                                                  | Gets or sets the ToleranceSlider.                             |
| [`MasterBodies`](#ContactMatch.MasterBodies)                                                                        | Gets the MasterBodies.                                        |
| [`SlaveBodies`](#ContactMatch.SlaveBodies)                                                                          | Gets the SlaveBodies.                                         |
| [`SnapTolerance`](#ContactMatch.SnapTolerance)                                                                      | Gets or sets the SnapTolerance.                               |
| [`ScopeMode`](#ContactMatch.ScopeMode)                                                                              | Gets the ScopeMode.                                           |
| [`SnapType`](../../../Mechanical/DataModel/Enums/SnapType.md#SnapType)                                              | Gets or sets the SnapType.                                    |
| [`ToleranceType`](../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                               |
| [`SnapToBoundary`](#ContactMatch.SnapToBoundary)                                                                    | Gets or sets the SnapToBoundary.                              |
| [`Suppressed`](#ContactMatch.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`MasterLocation`](#ContactMatch.MasterLocation)                                                                    | Gets or sets the MasterLocation.                              |
| [`SlaveLocation`](#ContactMatch.SlaveLocation)                                                                      | Gets or sets the SlaveLocation.                               |
| [`Children`](#ContactMatch.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#ContactMatch.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#ContactMatch.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#ContactMatch.Images)                                                                                    | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactMatch.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactMatch.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ContactMatch
```

## Property detail

### *property* ContactMatch.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.MasterBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.SlaveBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.SnapTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.SnapType *: [Ansys.Mechanical.DataModel.Enums.SnapType](../../../Mechanical/DataModel/Enums/SnapType.md#SnapType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapType.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.SnapToBoundary *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToBoundary.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.MasterLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.SlaveLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactMatch.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactMatch.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

### ContactMatch.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ContactMatch.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactMatch.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactMatch.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactMatch.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactMatch.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactMatch.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactMatch.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactMatch.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactMatch.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactMatch.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactMatch.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactMatch.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactMatch.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactMatch.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactMatch.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactMatch.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
