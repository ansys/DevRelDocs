# MeshConnection

### *class* MeshConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MeshConnection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`FlipMasterSlave`](#MeshConnection.FlipMasterSlave)                 | FlipMasterSlave method.                                                           |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`CreateNamedSelection`](#MeshConnection.CreateNamedSelection)       | CreateNamedSelection method.                                                      |
| [`Generate`](#MeshConnection.Generate)                               | Run the Generate action.                                                          |
| [`RenameBasedOnDefinition`](#MeshConnection.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MeshConnection.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MeshConnection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshConnection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshConnection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshConnection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshConnection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshConnection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshConnection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshConnection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshConnection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshConnection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshConnection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshConnection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshConnection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MasterElementSizeFactor`](#MeshConnection.MasterElementSizeFactor)                                                | Gets or sets the MasterElementSizeFactor.                     |
| [`ThicknessScaleFactor`](#MeshConnection.ThicknessScaleFactor)                                                      | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceValue`](#MeshConnection.ToleranceValue)                                                                  | Gets or sets the ToleranceValue.                              |
| [`ContactRegion`](Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#MeshConnection.ScopingMethod)                                                                    | ScopingMethod property.                                       |
| [`ToleranceSlider`](#MeshConnection.ToleranceSlider)                                                                | Gets or sets the ToleranceSlider.                             |
| [`MasterBodies`](#MeshConnection.MasterBodies)                                                                      | Gets the MasterBodies.                                        |
| [`SlaveBodies`](#MeshConnection.SlaveBodies)                                                                        | Gets the SlaveBodies.                                         |
| [`SnapTolerance`](#MeshConnection.SnapTolerance)                                                                    | Gets or sets the SnapTolerance.                               |
| [`ScopeMode`](#MeshConnection.ScopeMode)                                                                            | Gets the ScopeMode.                                           |
| [`SnapType`](../../../Mechanical/DataModel/Enums/SnapType.md#SnapType)                                              | Gets or sets the SnapType.                                    |
| [`ToleranceType`](../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                               |
| [`SnapToBoundary`](#MeshConnection.SnapToBoundary)                                                                  | Gets or sets the SnapToBoundary.                              |
| [`Suppressed`](#MeshConnection.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`MasterLocation`](#MeshConnection.MasterLocation)                                                                  | Gets or sets the MasterLocation.                              |
| [`SlaveLocation`](#MeshConnection.SlaveLocation)                                                                    | Gets or sets the SlaveLocation.                               |
| [`Children`](#MeshConnection.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#MeshConnection.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#MeshConnection.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#MeshConnection.Images)                                                                                  | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshConnection.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshConnection.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshConnection
```

## Property detail

### *property* MeshConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.MasterElementSizeFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterElementSizeFactor.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.MasterBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.SlaveBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.SnapTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapTolerance.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.SnapType *: [Ansys.Mechanical.DataModel.Enums.SnapType](../../../Mechanical/DataModel/Enums/SnapType.md#SnapType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapType.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.SnapToBoundary *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToBoundary.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.MasterLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.SlaveLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshConnection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshConnection.FlipMasterSlave()

FlipMasterSlave method.

<!-- !! processed by numpydoc !! -->

### MeshConnection.CreateNamedSelection()

CreateNamedSelection method.

<!-- !! processed by numpydoc !! -->

### MeshConnection.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

### MeshConnection.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MeshConnection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshConnection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshConnection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MeshConnection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshConnection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshConnection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshConnection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshConnection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshConnection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshConnection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshConnection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshConnection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshConnection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshConnection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
