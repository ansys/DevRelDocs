# `MeshConnection`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`FlipMasterSlave`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.FlipMasterSlave)                 | FlipMasterSlave method.                                                           |
| [`CreateNamedSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.CreateNamedSelection)       | CreateNamedSelection method.                                                      |
| [`Generate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Generate)                               | Run the Generate action.                                                          |
| [`RenameBasedOnDefinition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`MasterElementSizeFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.MasterElementSizeFactor) | Gets or sets the MasterElementSizeFactor.                     |
| [`ThicknessScaleFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.ThicknessScaleFactor)       | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.ToleranceValue)                   | Gets or sets the ToleranceValue.                              |
| [`ContactRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.ContactRegion)                     | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`ScopingMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.ScopingMethod)                     | ScopingMethod property.                                       |
| [`ToleranceSlider`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.ToleranceSlider)                 | Gets or sets the ToleranceSlider.                             |
| [`MasterBodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.MasterBodies)                       | Gets the MasterBodies.                                        |
| [`SlaveBodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.SlaveBodies)                         | Gets the SlaveBodies.                                         |
| [`SnapTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.SnapTolerance)                     | Gets or sets the SnapTolerance.                               |
| [`ScopeMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`SnapType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.SnapType)                               | Gets or sets the SnapType.                                    |
| [`ToleranceType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.ToleranceType)                     | Gets or sets the ToleranceType.                               |
| [`SnapToBoundary`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.SnapToBoundary)                   | Gets or sets the SnapToBoundary.                              |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`MasterLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.MasterLocation)                   | Gets or sets the MasterLocation.                              |
| [`SlaveLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.SlaveLocation)                     | Gets or sets the SlaveLocation.                               |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshConnection.md#MeshConnection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshConnection.InternalObject"></a>

### *property* MeshConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.MasterElementSizeFactor"></a>

### *property* MeshConnection.MasterElementSizeFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterElementSizeFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ThicknessScaleFactor"></a>

### *property* MeshConnection.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ToleranceValue"></a>

### *property* MeshConnection.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ContactRegion"></a>

### *property* MeshConnection.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.DataModelObjectCategory"></a>

### *property* MeshConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ScopingMethod"></a>

### *property* MeshConnection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ToleranceSlider"></a>

### *property* MeshConnection.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.MasterBodies"></a>

### *property* MeshConnection.MasterBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SlaveBodies"></a>

### *property* MeshConnection.SlaveBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SnapTolerance"></a>

### *property* MeshConnection.SnapTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ScopeMode"></a>

### *property* MeshConnection.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SnapType"></a>

### *property* MeshConnection.SnapType *: [Ansys.Mechanical.DataModel.Enums.SnapType](../../../Mechanical/DataModel/Enums/SnapType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SnapType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.ToleranceType"></a>

### *property* MeshConnection.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SnapToBoundary"></a>

### *property* MeshConnection.SnapToBoundary *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToBoundary.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Suppressed"></a>

### *property* MeshConnection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.MasterLocation"></a>

### *property* MeshConnection.MasterLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.SlaveLocation"></a>

### *property* MeshConnection.SlaveLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Children"></a>

### *property* MeshConnection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Comments"></a>

### *property* MeshConnection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Figures"></a>

### *property* MeshConnection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Images"></a>

### *property* MeshConnection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshConnection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Properties"></a>

### *property* MeshConnection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.VisibleProperties"></a>

### *property* MeshConnection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshConnection.FlipMasterSlave"></a>

### MeshConnection.FlipMasterSlave()

FlipMasterSlave method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.CreateNamedSelection"></a>

### MeshConnection.CreateNamedSelection()

CreateNamedSelection method.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Generate"></a>

### MeshConnection.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.RenameBasedOnDefinition"></a>

### MeshConnection.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Delete"></a>

### MeshConnection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.GetChildren"></a>

### MeshConnection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.AddComment"></a>

### MeshConnection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.AddFigure"></a>

### MeshConnection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.AddImage"></a>

### MeshConnection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Activate"></a>

### MeshConnection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.CopyTo"></a>

### MeshConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.Duplicate"></a>

### MeshConnection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.GroupAllSimilarChildren"></a>

### MeshConnection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.GroupSimilarObjects"></a>

### MeshConnection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.PropertyByName"></a>

### MeshConnection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.PropertyByAPIName"></a>

### MeshConnection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.CreateParameter"></a>

### MeshConnection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.GetParameter"></a>

### MeshConnection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshConnection.RemoveParameter"></a>

### MeshConnection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

