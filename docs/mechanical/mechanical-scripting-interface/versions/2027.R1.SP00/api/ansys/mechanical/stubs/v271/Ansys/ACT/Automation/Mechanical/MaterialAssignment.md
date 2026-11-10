# `MaterialAssignment`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialAssignment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MaterialAssignment(internalObject: Any)

<a id="MaterialAssignment"></a>

### *class* MaterialAssignment(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MaterialAssignment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [`Activate`](#MaterialAssignment.Activate)                                     | Activate the current object.                                                                        |
| [`AddCommandSnippet`](#MaterialAssignment.AddCommandSnippet)                   | Creates a new CommandSnippet                                                                        |
| [`AddComment`](#MaterialAssignment.AddComment)                                 | Creates a new child Comment.                                                                        |
| [`AddFigure`](#MaterialAssignment.AddFigure)                                   | Creates a new child Figure.                                                                         |
| [`AddImage`](#MaterialAssignment.AddImage)                                     | Creates a new child Image.                                                                          |
| [`Copy`](#MaterialAssignment.Copy)                                             | Copies the current DataModelObject.                                                                 |
| [`CopyTo`](#MaterialAssignment.CopyTo)                                         | Copies all visible properties from this object to another.                                          |
| [`CreateMaterialPlot`](#MaterialAssignment.CreateMaterialPlot)                 | Run the CreateMaterialPlot action.                                                                  |
| [`CreateObjRef`](#MaterialAssignment.CreateObjRef)                             | CreateObjRef method.                                                                                |
| [`CreateParameter`](#MaterialAssignment.CreateParameter)                       | Creates a new parameter for a Property.                                                             |
| [`Cut`](#MaterialAssignment.Cut)                                               | Cuts the current DataModelObject.                                                                   |
| [`Delete`](#MaterialAssignment.Delete)                                         | Run the Delete action.                                                                              |
| [`Duplicate`](#MaterialAssignment.Duplicate)                                   | Creates a copy of the current DataModelObject.                                                      |
| [`Equals`](#MaterialAssignment.Equals)                                         | Equals method.                                                                                      |
| [`GetAPIName`](#MaterialAssignment.GetAPIName)                                 | Property name bound to dispId.                                                                      |
| [`GetAllProperties`](#MaterialAssignment.GetAllProperties)                     | GetAllProperties method.                                                                            |
| [`GetChildren`](#MaterialAssignment.GetChildren)                               | Gets the list of children, filtered by type.                                                        |
| [`GetDetailsView`](#MaterialAssignment.GetDetailsView)                         | GetDetailsView method.                                                                              |
| [`GetEngineeringDataMaterial`](#MaterialAssignment.GetEngineeringDataMaterial) | Returns the C# Engineering Data Object that the MaterialAssignment is using internally to keep data |
| [`GetEnumName`](#MaterialAssignment.GetEnumName)                               | Enum name bound to value                                                                            |
| [`GetHashCode`](#MaterialAssignment.GetHashCode)                               | GetHashCode method.                                                                                 |
| [`GetIconFile`](#MaterialAssignment.GetIconFile)                               | GetIconFile method.                                                                                 |
| [`GetLifetimeService`](#MaterialAssignment.GetLifetimeService)                 | GetLifetimeService method.                                                                          |
| [`GetObjectData`](#MaterialAssignment.GetObjectData)                           | GetObjectData method.                                                                               |
| [`GetParameter`](#MaterialAssignment.GetParameter)                             | Gets the parameter corresponding to the given property.                                             |
| [`GetPath`](#MaterialAssignment.GetPath)                                       | GetPath method.                                                                                     |
| [`GetPropertyName`](#MaterialAssignment.GetPropertyName)                       | GetPropertyName method.                                                                             |
| [`GetPropertyValue`](#MaterialAssignment.GetPropertyValue)                     | GetPropertyValue method.                                                                            |
| [`GetVisibleProperties`](#MaterialAssignment.GetVisibleProperties)             | GetVisibleProperties method.                                                                        |
| [`GetVisiblePropertyNames`](#MaterialAssignment.GetVisiblePropertyNames)       | GetVisiblePropertyNames method.                                                                     |
| [`GroupAllSimilarChildren`](#MaterialAssignment.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                                             |
| [`GroupSimilarObjects`](#MaterialAssignment.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                                                 |
| [`InitializeLifetimeService`](#MaterialAssignment.InitializeLifetimeService)   | InitializeLifetimeService method.                                                                   |
| [`IsPropertyEditable`](#MaterialAssignment.IsPropertyEditable)                 | IsPropertyEditable method.                                                                          |
| [`IsPropertyVisible`](#MaterialAssignment.IsPropertyVisible)                   | IsPropertyVisible method.                                                                           |
| [`Paste`](#MaterialAssignment.Paste)                                           | Pastes to the current DataModelObject context.                                                      |
| [`PropertyByAPIName`](#MaterialAssignment.PropertyByAPIName)                   | Get a property by its API name.                                                                     |
| [`PropertyById`](#MaterialAssignment.PropertyById)                             | PropertyById method.                                                                                |
| [`PropertyByName`](#MaterialAssignment.PropertyByName)                         | Get a property by its unique name.                                                                  |
| [`RemoveFromGroup`](#MaterialAssignment.RemoveFromGroup)                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.         |
| [`RemoveParameter`](#MaterialAssignment.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property.                   |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#MaterialAssignment.AttachedRefs)                                   | AttachedRefs property.                                        |
| [`Children`](#MaterialAssignment.Children)                                           | Gets the list of children.                                    |
| [`ClsId`](#MaterialAssignment.ClsId)                                                 | ClsId property.                                               |
| [`Comments`](#MaterialAssignment.Comments)                                           | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MaterialAssignment.DataModelObjectCategory)             | Gets the current DataModelObject's category.                  |
| [`FieldCoordinateSystem`](#MaterialAssignment.FieldCoordinateSystem)                 | Gets or sets the FieldCoordinateSystem.                       |
| [`Figures`](#MaterialAssignment.Figures)                                             | Gets the list of associated figures.                          |
| [`GroupingFolder`](#MaterialAssignment.GroupingFolder)                               | GroupingFolder property.                                      |
| [`IconName`](#MaterialAssignment.IconName)                                           | IconName property.                                            |
| [`Images`](#MaterialAssignment.Images)                                               | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#MaterialAssignment.ImportableObjectSourceId)           | ImportableObjectSourceId property.                            |
| [`InternalObject`](#MaterialAssignment.InternalObject)                               | Gets the internal object. For advanced usage only.            |
| [`Location`](#MaterialAssignment.Location)                                           | Gets or sets the Location.                                    |
| [`Material`](Material.md#Material)                                                   | Gets or sets the Material.                                    |
| [`MaterialName`](#MaterialAssignment.MaterialName)                                   | Gets or sets the MaterialName.                                |
| [`MaterialPolarizationDirection`](#MaterialAssignment.MaterialPolarizationDirection) | Gets or sets the MaterialPolarizationDirection.               |
| [`Name`](#MaterialAssignment.Name)                                                   | Name property.                                                |
| [`NonlinearEffects`](#MaterialAssignment.NonlinearEffects)                           | Gets or sets the NonlinearEffects.                            |
| [`ObjectId`](#MaterialAssignment.ObjectId)                                           | ObjectId property.                                            |
| [`ObjectState`](#MaterialAssignment.ObjectState)                                     | ObjectState property.                                         |
| [`ObjectTags`](#MaterialAssignment.ObjectTags)                                       | ObjectTags property.                                          |
| [`Parent`](#MaterialAssignment.Parent)                                               | Parent property.                                              |
| [`Properties`](#MaterialAssignment.Properties)                                       | Gets the list of properties for this object.                  |
| [`ReadOnly`](#MaterialAssignment.ReadOnly)                                           | Gets or sets the ReadOnly.                                    |
| [`ReferenceTemperatureValue`](#MaterialAssignment.ReferenceTemperatureValue)         | Gets or sets the ReferenceTemperatureValue.                   |
| [`ScopingMethod`](#MaterialAssignment.ScopingMethod)                                 | Gets or sets the ScopingMethod.                               |
| [`State`](#MaterialAssignment.State)                                                 | State property.                                               |
| [`Suppressed`](#MaterialAssignment.Suppressed)                                       | Gets or sets the Suppressed.                                  |
| [`ThermalStrainEffects`](#MaterialAssignment.ThermalStrainEffects)                   | Gets or sets the ThermalStrainEffects.                        |
| [`TransferableObjectId`](#MaterialAssignment.TransferableObjectId)                   | TransferableObjectId property.                                |
| [`UseReferenceTemperatureByBody`](#MaterialAssignment.UseReferenceTemperatureByBody) | Gets or sets the UseReferenceTemperatureByBody.               |
| [`VisibleProperties`](#MaterialAssignment.VisibleProperties)                         | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MaterialAssignment.AttachedRefs"></a>

### *property* MaterialAssignment.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Children"></a>

### *property* MaterialAssignment.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ClsId"></a>

### *property* MaterialAssignment.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Comments"></a>

### *property* MaterialAssignment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.DataModelObjectCategory"></a>

### *property* MaterialAssignment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.FieldCoordinateSystem"></a>

### *property* MaterialAssignment.FieldCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FieldCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Figures"></a>

### *property* MaterialAssignment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GroupingFolder"></a>

### *property* MaterialAssignment.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.IconName"></a>

### *property* MaterialAssignment.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Images"></a>

### *property* MaterialAssignment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ImportableObjectSourceId"></a>

### *property* MaterialAssignment.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.InternalObject"></a>

### *property* MaterialAssignment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialAssignmentAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Location"></a>

### *property* MaterialAssignment.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Material"></a>

### *property* MaterialAssignment.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.MaterialName"></a>

### *property* MaterialAssignment.MaterialName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaterialName.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.MaterialPolarizationDirection"></a>

### *property* MaterialAssignment.MaterialPolarizationDirection *: [Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection](../../../Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaterialPolarizationDirection.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Name"></a>

### *property* MaterialAssignment.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.NonlinearEffects"></a>

### *property* MaterialAssignment.NonlinearEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ObjectId"></a>

### *property* MaterialAssignment.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ObjectState"></a>

### *property* MaterialAssignment.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ObjectTags"></a>

### *property* MaterialAssignment.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Parent"></a>

### *property* MaterialAssignment.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Properties"></a>

### *property* MaterialAssignment.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ReadOnly"></a>

### *property* MaterialAssignment.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ReferenceTemperatureValue"></a>

### *property* MaterialAssignment.ReferenceTemperatureValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceTemperatureValue.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ScopingMethod"></a>

### *property* MaterialAssignment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.State"></a>

### *property* MaterialAssignment.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Suppressed"></a>

### *property* MaterialAssignment.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.ThermalStrainEffects"></a>

### *property* MaterialAssignment.ThermalStrainEffects *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.TransferableObjectId"></a>

### *property* MaterialAssignment.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.UseReferenceTemperatureByBody"></a>

### *property* MaterialAssignment.UseReferenceTemperatureByBody *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseReferenceTemperatureByBody.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.VisibleProperties"></a>

### *property* MaterialAssignment.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaterialAssignment.Activate"></a>

### MaterialAssignment.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.AddCommandSnippet"></a>

### MaterialAssignment.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.AddComment"></a>

### MaterialAssignment.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.AddFigure"></a>

### MaterialAssignment.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.AddImage"></a>

### MaterialAssignment.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Copy"></a>

### MaterialAssignment.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.CopyTo"></a>

### MaterialAssignment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.CreateMaterialPlot"></a>

### MaterialAssignment.CreateMaterialPlot() → [Ansys.ACT.Automation.Mechanical.MaterialPlot](MaterialPlot.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialPlot)

Run the CreateMaterialPlot action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.CreateObjRef"></a>

### MaterialAssignment.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.CreateParameter"></a>

### MaterialAssignment.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Cut"></a>

### MaterialAssignment.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Delete"></a>

### MaterialAssignment.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Duplicate"></a>

### MaterialAssignment.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Equals"></a>

### MaterialAssignment.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetAPIName"></a>

### MaterialAssignment.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetAllProperties"></a>

### MaterialAssignment.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetChildren"></a>

### MaterialAssignment.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MaterialAssignment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetDetailsView"></a>

### MaterialAssignment.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetEngineeringDataMaterial"></a>

### MaterialAssignment.GetEngineeringDataMaterial() → Any

Returns the C# Engineering Data Object that the MaterialAssignment is using internally to keep data

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetEnumName"></a>

### MaterialAssignment.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetHashCode"></a>

### MaterialAssignment.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetIconFile"></a>

### MaterialAssignment.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetLifetimeService"></a>

### MaterialAssignment.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetObjectData"></a>

### MaterialAssignment.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetParameter"></a>

### MaterialAssignment.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetPath"></a>

### MaterialAssignment.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetPropertyName"></a>

### MaterialAssignment.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetPropertyValue"></a>

### MaterialAssignment.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetVisibleProperties"></a>

### MaterialAssignment.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GetVisiblePropertyNames"></a>

### MaterialAssignment.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GroupAllSimilarChildren"></a>

### MaterialAssignment.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.GroupSimilarObjects"></a>

### MaterialAssignment.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.InitializeLifetimeService"></a>

### MaterialAssignment.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.IsPropertyEditable"></a>

### MaterialAssignment.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MaterialAssignment.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.IsPropertyVisible"></a>

### MaterialAssignment.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MaterialAssignment.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.Paste"></a>

### MaterialAssignment.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.PropertyByAPIName"></a>

### MaterialAssignment.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.PropertyById"></a>

### MaterialAssignment.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.PropertyByName"></a>

### MaterialAssignment.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.RemoveFromGroup"></a>

### MaterialAssignment.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MaterialAssignment.RemoveParameter"></a>

### MaterialAssignment.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

