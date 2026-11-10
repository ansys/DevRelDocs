# `Inflation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.Inflation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Inflation(internalObject: Any)

<a id="Inflation"></a>

### *class* Inflation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Inflation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Inflation.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Inflation.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Inflation.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Inflation.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Inflation.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Inflation.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Inflation.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Inflation.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Inflation.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Inflation.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Inflation.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Inflation.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#Inflation.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#Inflation.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Inflation.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Inflation.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Inflation.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Inflation.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Inflation.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Inflation.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Inflation.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Inflation.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Inflation.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Inflation.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Inflation.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Inflation.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Inflation.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Inflation.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Inflation.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Inflation.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Inflation.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Inflation.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Inflation.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Inflation.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Inflation.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Inflation.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Inflation.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Inflation.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Inflation.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#Inflation.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`Active`](#Inflation.Active)                                   | Gets the Active.                                              |
| [`AspectRatio`](#Inflation.AspectRatio)                         | Gets or sets the AspectRatio.                                 |
| [`AttachedRefs`](#Inflation.AttachedRefs)                       | AttachedRefs property.                                        |
| [`BoundaryLocation`](#Inflation.BoundaryLocation)               | Gets or sets the BoundaryLocation.                            |
| [`BoundaryNamedSelection`](#Inflation.BoundaryNamedSelection)   | Gets or sets the BoundaryNamedSelection.                      |
| [`Children`](#Inflation.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Inflation.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Inflation.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Inflation.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#Inflation.Figures)                                 | Gets the list of associated figures.                          |
| [`FirstLayerHeight`](#Inflation.FirstLayerHeight)               | Gets or sets the FirstLayerHeight.                            |
| [`GroupingFolder`](#Inflation.GroupingFolder)                   | GroupingFolder property.                                      |
| [`GrowthRate`](#Inflation.GrowthRate)                           | Gets or sets the GrowthRate.                                  |
| [`IconName`](#Inflation.IconName)                               | IconName property.                                            |
| [`Images`](#Inflation.Images)                                   | Gets the list of associated images.                           |
| [`InflationAlgorithm`](#Inflation.InflationAlgorithm)           | Gets or sets the InflationAlgorithm.                          |
| [`InflationOption`](#Inflation.InflationOption)                 | Gets or sets the InflationOption.                             |
| [`InternalObject`](#Inflation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#Inflation.Location)                               | Gets or sets the Location.                                    |
| [`MaximumLayers`](#Inflation.MaximumLayers)                     | Gets or sets the MaximumLayers.                               |
| [`MaximumThickness`](#Inflation.MaximumThickness)               | Gets or sets the MaximumThickness.                            |
| [`Name`](#Inflation.Name)                                       | Name property.                                                |
| [`NamedSelection`](#NamedSelection)         | Gets or sets the NamedSelection.                              |
| [`NumberOfLayers`](#Inflation.NumberOfLayers)                   | Gets or sets the NumberOfLayers.                              |
| [`ObjectId`](#Inflation.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Inflation.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Inflation.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Inflation.Parent)                                   | Parent property.                                              |
| [`Properties`](#Inflation.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#Inflation.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#Inflation.State)                                     | State property.                                               |
| [`Suppressed`](#Inflation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TransitionRatio`](#Inflation.TransitionRatio)                 | Gets or sets the TransitionRatio.                             |
| [`VisibleProperties`](#Inflation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Inflation.Active"></a>

### *property* Inflation.Active *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AspectRatio"></a>

### *property* Inflation.AspectRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AttachedRefs"></a>

### *property* Inflation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.BoundaryLocation"></a>

### *property* Inflation.BoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.BoundaryNamedSelection"></a>

### *property* Inflation.BoundaryNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Children"></a>

### *property* Inflation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.ClsId"></a>

### *property* Inflation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Comments"></a>

### *property* Inflation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.DataModelObjectCategory"></a>

### *property* Inflation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Figures"></a>

### *property* Inflation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.FirstLayerHeight"></a>

### *property* Inflation.FirstLayerHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FirstLayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GroupingFolder"></a>

### *property* Inflation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GrowthRate"></a>

### *property* Inflation.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.IconName"></a>

### *property* Inflation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Images"></a>

### *property* Inflation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InflationAlgorithm"></a>

### *property* Inflation.InflationAlgorithm *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InflationAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InflationOption"></a>

### *property* Inflation.InflationOption *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InflationOption.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InternalObject"></a>

### *property* Inflation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Location"></a>

### *property* Inflation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.MaximumLayers"></a>

### *property* Inflation.MaximumLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumLayers.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.MaximumThickness"></a>

### *property* Inflation.MaximumThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumThickness.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Name"></a>

### *property* Inflation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.NamedSelection"></a>

### *property* Inflation.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.NumberOfLayers"></a>

### *property* Inflation.NumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.ObjectId"></a>

### *property* Inflation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.ObjectState"></a>

### *property* Inflation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.ObjectTags"></a>

### *property* Inflation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Parent"></a>

### *property* Inflation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Properties"></a>

### *property* Inflation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.ScopingMethod"></a>

### *property* Inflation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.State"></a>

### *property* Inflation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Suppressed"></a>

### *property* Inflation.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.TransitionRatio"></a>

### *property* Inflation.TransitionRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TransitionRatio.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.VisibleProperties"></a>

### *property* Inflation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Inflation.Activate"></a>

### Inflation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AddComment"></a>

### Inflation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AddFigure"></a>

### Inflation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.AddImage"></a>

### Inflation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Copy"></a>

### Inflation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.CopyTo"></a>

### Inflation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.CreateObjRef"></a>

### Inflation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.CreateParameter"></a>

### Inflation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Cut"></a>

### Inflation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Delete"></a>

### Inflation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Duplicate"></a>

### Inflation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Equals"></a>

### Inflation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GenerateMesh"></a>

### Inflation.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetAPIName"></a>

### Inflation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetAllProperties"></a>

### Inflation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetChildren"></a>

### Inflation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Inflation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetDetailsView"></a>

### Inflation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetEnumName"></a>

### Inflation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetHashCode"></a>

### Inflation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetIconFile"></a>

### Inflation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetLifetimeService"></a>

### Inflation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetObjectData"></a>

### Inflation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetParameter"></a>

### Inflation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetPath"></a>

### Inflation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetPropertyName"></a>

### Inflation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetPropertyValue"></a>

### Inflation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetVisibleProperties"></a>

### Inflation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GetVisiblePropertyNames"></a>

### Inflation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GroupAllSimilarChildren"></a>

### Inflation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.GroupSimilarObjects"></a>

### Inflation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.InitializeLifetimeService"></a>

### Inflation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.IsPropertyEditable"></a>

### Inflation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Inflation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.IsPropertyVisible"></a>

### Inflation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Inflation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.Paste"></a>

### Inflation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.PropertyByAPIName"></a>

### Inflation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Inflation.PropertyById"></a>

### Inflation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.PropertyByName"></a>

### Inflation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.RemoveFromGroup"></a>

### Inflation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.RemoveParameter"></a>

### Inflation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Inflation.RenameBasedOnDefinition"></a>

### Inflation.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

