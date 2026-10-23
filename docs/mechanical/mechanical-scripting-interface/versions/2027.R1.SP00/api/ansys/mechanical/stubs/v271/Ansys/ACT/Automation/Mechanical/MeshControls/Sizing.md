# `Sizing`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.Sizing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.Sizing(internalObject: Any)

<a id="Sizing"></a>

### *class* Sizing(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Sizing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Sizing.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Sizing.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Sizing.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Sizing.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Sizing.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Sizing.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Sizing.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Sizing.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Sizing.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Sizing.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Sizing.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Sizing.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#Sizing.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#Sizing.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Sizing.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Sizing.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Sizing.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Sizing.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Sizing.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Sizing.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Sizing.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Sizing.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Sizing.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Sizing.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Sizing.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Sizing.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Sizing.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Sizing.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Sizing.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Sizing.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Sizing.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Sizing.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Sizing.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Sizing.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Sizing.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Sizing.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Sizing.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Sizing.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Sizing.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#Sizing.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Active`](#Sizing.Active)                                   | Gets the Active.                                                                            |
| [`AttachedRefs`](#Sizing.AttachedRefs)                       | AttachedRefs property.                                                                      |
| [`Behavior`](#Sizing.Behavior)                               | Gets or sets the Behavior.                                                                  |
| [`BiasFactor`](#Sizing.BiasFactor)                           | Gets or sets the BiasFactor.                                                                |
| [`BiasGrowthRate`](#Sizing.BiasGrowthRate)                   | Gets or sets the BiasGrowthRate.                                                            |
| [`BiasOption`](#Sizing.BiasOption)                           | Gets or sets the BiasOption.                                                                |
| [`BiasType`](#Sizing.BiasType)                               | Gets or sets the BiasType.                                                                  |
| [`BlendToNeighbors`](#Sizing.BlendToNeighbors)               | Gets or sets whether to automatically blend sizes away from the scoped edges. Default: True |
| [`BodyOfInfluence`](#Sizing.BodyOfInfluence)                 | Gets the BodyOfInfluence.                                                                   |
| [`CaptureCurvature`](#Sizing.CaptureCurvature)               | Gets or sets the CaptureCurvature.                                                          |
| [`CaptureProximity`](#Sizing.CaptureProximity)               | Gets or sets the CaptureProximity.                                                          |
| [`Children`](#Sizing.Children)                               | Gets the list of children.                                                                  |
| [`ClsId`](#Sizing.ClsId)                                     | ClsId property.                                                                             |
| [`Comments`](#Sizing.Comments)                               | Gets the list of associated comments.                                                       |
| [`CurvatureNormalAngle`](#Sizing.CurvatureNormalAngle)       | Gets or sets the CurvatureNormalAngle.                                                      |
| [`DataModelObjectCategory`](#Sizing.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                |
| [`DefeatureSize`](#Sizing.DefeatureSize)                     | Gets or sets the DefeatureSize.                                                             |
| [`ElementSize`](#Sizing.ElementSize)                         | Gets or sets the ElementSize.                                                               |
| [`Figures`](#Sizing.Figures)                                 | Gets the list of associated figures.                                                        |
| [`GroupingFolder`](#Sizing.GroupingFolder)                   | GroupingFolder property.                                                                    |
| [`GrowthRate`](#Sizing.GrowthRate)                           | Gets or sets the GrowthRate.                                                                |
| [`IconName`](#Sizing.IconName)                               | IconName property.                                                                          |
| [`Images`](#Sizing.Images)                                   | Gets the list of associated images.                                                         |
| [`InternalObject`](#Sizing.InternalObject)                   | Gets the internal object. For advanced usage only.                                          |
| [`LocalMinimumSize`](#Sizing.LocalMinimumSize)               | Gets or sets the LocalMinimumSize.                                                          |
| [`Location`](#Sizing.Location)                               | Gets or sets the Location.                                                                  |
| [`Name`](#Sizing.Name)                                       | Name property.                                                                              |
| [`NamedSelection`](#NamedSelection)      | Gets or sets the NamedSelection.                                                            |
| [`NumberOfDivisions`](#Sizing.NumberOfDivisions)             | Gets or sets the NumberOfDivisions.                                                         |
| [`ObjectId`](#Sizing.ObjectId)                               | ObjectId property.                                                                          |
| [`ObjectState`](#Sizing.ObjectState)                         | ObjectState property.                                                                       |
| [`ObjectTags`](#Sizing.ObjectTags)                           | ObjectTags property.                                                                        |
| [`OriginX`](#Sizing.OriginX)                                 | Gets the OriginX.                                                                           |
| [`OriginY`](#Sizing.OriginY)                                 | Gets the OriginY.                                                                           |
| [`OriginZ`](#Sizing.OriginZ)                                 | Gets the OriginZ.                                                                           |
| [`Parent`](#Sizing.Parent)                                   | Parent property.                                                                            |
| [`Properties`](#Sizing.Properties)                           | Gets the list of properties for this object.                                                |
| [`ProximityGapFactor`](#Sizing.ProximityGapFactor)           | Gets or sets the ProximityGapFactor.                                                        |
| [`ProximityMinimumSize`](#Sizing.ProximityMinimumSize)       | Gets or sets the ProximityMinimumSize.                                                      |
| [`ProximitySizeSources`](#Sizing.ProximitySizeSources)       | Gets or sets the ProximitySizeSources.                                                      |
| [`ReverseBias`](#Sizing.ReverseBias)                         | Gets or sets the ReverseBias.                                                               |
| [`ScopingMethod`](#Sizing.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                             |
| [`SphereCenter`](#Sizing.SphereCenter)                       | Gets or sets the SphereCenter.                                                              |
| [`SphereRadius`](#Sizing.SphereRadius)                       | Gets or sets the SphereRadius.                                                              |
| [`State`](#Sizing.State)                                     | State property.                                                                             |
| [`Suppressed`](#Sizing.Suppressed)                           | Gets or sets the Suppressed.                                                                |
| [`Type`](#Sizing.Type)                                       | Gets or sets the Type.                                                                      |
| [`VisibleProperties`](#Sizing.VisibleProperties)             | Gets the list of properties that are visible for this object.                               |

<a id="property-detail"></a>

## Property detail

<a id="Sizing.Active"></a>

### *property* Sizing.Active *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.AttachedRefs"></a>

### *property* Sizing.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Behavior"></a>

### *property* Sizing.Behavior *: [Ansys.Mechanical.DataModel.Enums.SizingBehavior](../../../../Mechanical/DataModel/Enums/SizingBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SizingBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasFactor"></a>

### *property* Sizing.BiasFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BiasFactor.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasGrowthRate"></a>

### *property* Sizing.BiasGrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BiasGrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasOption"></a>

### *property* Sizing.BiasOption *: Ansys.Mechanical.DataModel.Enums.BiasOptionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BiasOption.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BiasType"></a>

### *property* Sizing.BiasType *: Ansys.Mechanical.DataModel.Enums.BiasType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BiasType.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BlendToNeighbors"></a>

### *property* Sizing.BlendToNeighbors *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to automatically blend sizes away from the scoped edges. Default: True

<!-- !! processed by numpydoc !! -->

<a id="Sizing.BodyOfInfluence"></a>

### *property* Sizing.BodyOfInfluence *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BodyOfInfluence.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CaptureCurvature"></a>

### *property* Sizing.CaptureCurvature *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CaptureCurvature.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CaptureProximity"></a>

### *property* Sizing.CaptureProximity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CaptureProximity.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Children"></a>

### *property* Sizing.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ClsId"></a>

### *property* Sizing.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Comments"></a>

### *property* Sizing.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CurvatureNormalAngle"></a>

### *property* Sizing.CurvatureNormalAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CurvatureNormalAngle.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.DataModelObjectCategory"></a>

### *property* Sizing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.DefeatureSize"></a>

### *property* Sizing.DefeatureSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ElementSize"></a>

### *property* Sizing.ElementSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Figures"></a>

### *property* Sizing.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GroupingFolder"></a>

### *property* Sizing.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GrowthRate"></a>

### *property* Sizing.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.IconName"></a>

### *property* Sizing.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Images"></a>

### *property* Sizing.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.InternalObject"></a>

### *property* Sizing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.LocalMinimumSize"></a>

### *property* Sizing.LocalMinimumSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocalMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Location"></a>

### *property* Sizing.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Name"></a>

### *property* Sizing.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.NamedSelection"></a>

### *property* Sizing.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.NumberOfDivisions"></a>

### *property* Sizing.NumberOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ObjectId"></a>

### *property* Sizing.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ObjectState"></a>

### *property* Sizing.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ObjectTags"></a>

### *property* Sizing.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.OriginX"></a>

### *property* Sizing.OriginX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginX.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.OriginY"></a>

### *property* Sizing.OriginY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginY.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.OriginZ"></a>

### *property* Sizing.OriginZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OriginZ.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Parent"></a>

### *property* Sizing.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Properties"></a>

### *property* Sizing.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ProximityGapFactor"></a>

### *property* Sizing.ProximityGapFactor *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProximityGapFactor.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ProximityMinimumSize"></a>

### *property* Sizing.ProximityMinimumSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProximityMinimumSize.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ProximitySizeSources"></a>

### *property* Sizing.ProximitySizeSources *: [Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType](../../../../Mechanical/DataModel/Enums/ProximitySFSourcesType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProximitySFSourcesType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProximitySizeSources.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ReverseBias"></a>

### *property* Sizing.ReverseBias *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReverseBias.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.ScopingMethod"></a>

### *property* Sizing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.SphereCenter"></a>

### *property* Sizing.SphereCenter *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SphereCenter.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.SphereRadius"></a>

### *property* Sizing.SphereRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.State"></a>

### *property* Sizing.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Suppressed"></a>

### *property* Sizing.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Type"></a>

### *property* Sizing.Type *: [Ansys.Mechanical.DataModel.Enums.SizingType](../../../../Mechanical/DataModel/Enums/SizingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SizingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.VisibleProperties"></a>

### *property* Sizing.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Sizing.Activate"></a>

### Sizing.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.AddComment"></a>

### Sizing.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.AddFigure"></a>

### Sizing.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.AddImage"></a>

### Sizing.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Copy"></a>

### Sizing.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CopyTo"></a>

### Sizing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CreateObjRef"></a>

### Sizing.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.CreateParameter"></a>

### Sizing.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Cut"></a>

### Sizing.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Delete"></a>

### Sizing.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Duplicate"></a>

### Sizing.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Equals"></a>

### Sizing.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GenerateMesh"></a>

### Sizing.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetAPIName"></a>

### Sizing.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetAllProperties"></a>

### Sizing.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetChildren"></a>

### Sizing.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Sizing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetDetailsView"></a>

### Sizing.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetEnumName"></a>

### Sizing.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetHashCode"></a>

### Sizing.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetIconFile"></a>

### Sizing.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetLifetimeService"></a>

### Sizing.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetObjectData"></a>

### Sizing.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetParameter"></a>

### Sizing.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetPath"></a>

### Sizing.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetPropertyName"></a>

### Sizing.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetPropertyValue"></a>

### Sizing.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetVisibleProperties"></a>

### Sizing.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GetVisiblePropertyNames"></a>

### Sizing.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GroupAllSimilarChildren"></a>

### Sizing.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.GroupSimilarObjects"></a>

### Sizing.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.InitializeLifetimeService"></a>

### Sizing.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.IsPropertyEditable"></a>

### Sizing.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Sizing.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.IsPropertyVisible"></a>

### Sizing.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Sizing.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.Paste"></a>

### Sizing.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.PropertyByAPIName"></a>

### Sizing.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Sizing.PropertyById"></a>

### Sizing.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.PropertyByName"></a>

### Sizing.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.RemoveFromGroup"></a>

### Sizing.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.RemoveParameter"></a>

### Sizing.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Sizing.RenameBasedOnDefinition"></a>

### Sizing.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

