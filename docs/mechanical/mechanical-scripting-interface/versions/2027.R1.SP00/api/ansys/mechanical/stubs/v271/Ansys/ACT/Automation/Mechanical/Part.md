# `Part`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Part"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Part(internalObject: Any)

<a id="Part"></a>

### *class* Part(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Part.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Part.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Part.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Part.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Part.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#Part.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#Part.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Part.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Part.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Part.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Part.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#Part.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Part.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#Part.GenerateMesh)                           | Run the GenerateMesh action.                                                                |
| [`GetAPIName`](#Part.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Part.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Part.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Part.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Part.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetGeoPart`](#Part.GetGeoPart)                               | GetGeoPart method.                                                                          |
| [`GetHashCode`](#Part.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Part.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Part.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Part.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Part.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Part.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Part.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Part.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Part.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Part.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Part.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Part.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Part.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`InvertVisibility`](#Part.InvertVisibility)                   | Inverts the visibility of hidden bodies versus those that are visible.                      |
| [`IsPropertyEditable`](#Part.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Part.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Part.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PreviewInflation`](#Part.PreviewInflation)                   | Run the PreviewInflation action.                                                            |
| [`PreviewSurfaceMesh`](#Part.PreviewSurfaceMesh)               | Run the PreviewSurfaceMesh action.                                                          |
| [`PropertyByAPIName`](#Part.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Part.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Part.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Part.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Part.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`Update`](#Part.Update)                                       | Run the Update action.                                                                      |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [`ApproximateSurfaceArea`](#Part.ApproximateSurfaceArea)                       | Gets the approximate surface area of the part. This is only applicable to parts made up entirely of surface bodies.   |
| [`Assignment`](#Part.Assignment)                                               | Gets or sets the Assignment.                                                                                          |
| [`AttachedRefs`](#Part.AttachedRefs)                                           | AttachedRefs property.                                                                                                |
| [`Average`](#Part.Average)                                                     | Gets the Average.                                                                                                     |
| [`BarScaleFactor`](#Part.BarScaleFactor)                                       | Gets or sets Cable Bar Scale Factor.                                                                                  |
| [`BendingScaleFactor`](#Part.BendingScaleFactor)                               | Gets or sets Cable Bending Scale Factor.                                                                              |
| [`CableLength`](#Part.CableLength)                                             | Gets Cable Initial Length, which is the sum of cable body lengths under multibody cable.                              |
| [`CentroidX`](#Part.CentroidX)                                                 | Gets the CentroidX.                                                                                                   |
| [`CentroidY`](#Part.CentroidY)                                                 | Gets the CentroidY.                                                                                                   |
| [`CentroidZ`](#Part.CentroidZ)                                                 | Gets the CentroidZ.                                                                                                   |
| [`Children`](#Part.Children)                                                   | Gets the list of children.                                                                                            |
| [`ClsId`](#Part.ClsId)                                                         | ClsId property.                                                                                                       |
| [`Comments`](#Part.Comments)                                                   | Gets the list of associated comments.                                                                                 |
| [`ConfigurationId`](#Part.ConfigurationId)                                     | Gets the related Result Mesh's ConfigurationId.                                                                       |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                     | Gets or sets the CoordinateSystem.                                                                                    |
| [`DataModelObjectCategory`](#Part.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                                                                          |
| [`Elements`](#Part.Elements)                                                   | Gets the Elements.                                                                                                    |
| [`Figures`](#Part.Figures)                                                     | Gets the list of associated figures.                                                                                  |
| [`FreeLength`](#Part.FreeLength)                                               | Gets or sets Cable Free Length.                                                                                       |
| [`GroupingFolder`](#Part.GroupingFolder)                                       | GroupingFolder property.                                                                                              |
| [`Hidden`](#Part.Hidden)                                                       | Hide or show the body.                                                                                                |
| [`IconName`](#Part.IconName)                                                   | IconName property.                                                                                                    |
| [`Images`](#Part.Images)                                                       | Gets the list of associated images.                                                                                   |
| [`ImportableObjectSourceId`](#Part.ImportableObjectSourceId)                   | ImportableObjectSourceId property.                                                                                    |
| [`InternalObject`](#Part.InternalObject)                                       | Gets the internal object. For advanced usage only.                                                                    |
| [`IsVirtual`](#Part.IsVirtual)                                                 | IsVirtual property.                                                                                                   |
| [`LengthX`](#Part.LengthX)                                                     | Gets the LengthX.                                                                                                     |
| [`LengthY`](#Part.LengthY)                                                     | Gets the LengthY.                                                                                                     |
| [`LengthZ`](#Part.LengthZ)                                                     | Gets the LengthZ.                                                                                                     |
| [`Load`](#Part.Load)                                                           | Gets or sets Cable Load.                                                                                              |
| [`Mass`](#Part.Mass)                                                           | Gets the Mass.                                                                                                        |
| [`Material`](Material.md#Material)                                             | Gets or sets the Material.                                                                                            |
| [`MaterialName`](#Part.MaterialName)                                           | Gets or sets the MaterialName.                                                                                        |
| [`Maximum`](#Part.Maximum)                                                     | Gets the Maximum.                                                                                                     |
| [`MeshMetric`](#Part.MeshMetric)                                               | Gets the MeshMetric.                                                                                                  |
| [`Minimum`](#Part.Minimum)                                                     | Gets the Minimum.                                                                                                     |
| [`MomentOfInertiaIp1`](#Part.MomentOfInertiaIp1)                               | Gets the MomentOfInertiaIp1.                                                                                          |
| [`MomentOfInertiaIp2`](#Part.MomentOfInertiaIp2)                               | Gets the MomentOfInertiaIp2.                                                                                          |
| [`MomentOfInertiaIp3`](#Part.MomentOfInertiaIp3)                               | Gets the MomentOfInertiaIp3.                                                                                          |
| [`Name`](#Part.Name)                                                           | Name property.                                                                                                        |
| [`Nodes`](#Part.Nodes)                                                         | Gets the Nodes.                                                                                                       |
| [`ObjectId`](#Part.ObjectId)                                                   | ObjectId property.                                                                                                    |
| [`ObjectState`](#Part.ObjectState)                                             | ObjectState property.                                                                                                 |
| [`ObjectTags`](#Part.ObjectTags)                                               | ObjectTags property.                                                                                                  |
| [`Parent`](#Part.Parent)                                                       | Parent property.                                                                                                      |
| [`PreloadType`](#Part.PreloadType)                                             | Gets or sets the preload type for cable.                                                                              |
| [`Properties`](#Part.Properties)                                               | Gets the list of properties for this object.                                                                          |
| [`ReadOnly`](#Part.ReadOnly)                                                   | Gets or sets the ReadOnly.                                                                                            |
| [`ReferenceCoordinateSystem`](#Part.ReferenceCoordinateSystem)                 | Gets or sets the ReferenceCoordinateSystem.                                                                           |
| [`ResultMeshId`](#Part.ResultMeshId)                                           | Gets the related Result Mesh's ObjectId.                                                                              |
| [`StandardDeviation`](#Part.StandardDeviation)                                 | Gets the StandardDeviation.                                                                                           |
| [`State`](#Part.State)                                                         | State property.                                                                                                       |
| [`Suppressed`](#Part.Suppressed)                                               | Gets or sets the Suppressed.                                                                                          |
| [`SynchronizeFreeLengthWithGeometry`](#Part.SynchronizeFreeLengthWithGeometry) | Gets or sets whether Geometry properties or “Free Length” property entry is used for cable free length input.         |
| [`TorsionalScaleFactor`](#Part.TorsionalScaleFactor)                           | Gets or sets Cable Torsional Scale Factor.                                                                            |
| [`TransferableObjectId`](#Part.TransferableObjectId)                           | TransferableObjectId property.                                                                                        |
| [`UseStiffnessScaleFactor`](#Part.UseStiffnessScaleFactor)                     | Gets or sets the UseStiffnessScaleFactor.                                                                             |
| [`Visible`](#Part.Visible)                                                     | Gets or sets the Visible.                                                                                             |
| [`VisibleProperties`](#Part.VisibleProperties)                                 | Gets the list of properties that are visible for this object.                                                         |
| [`Volume`](Results/Volume.md#Volume)                                           | Gets the Volume.                                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="Part.ApproximateSurfaceArea"></a>

### *property* Part.ApproximateSurfaceArea *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the approximate surface area of the part. This is only applicable to parts made up entirely of surface bodies.

<!-- !! processed by numpydoc !! -->

<a id="Part.Assignment"></a>

### *property* Part.Assignment *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Assignment.

<!-- !! processed by numpydoc !! -->

<a id="Part.AttachedRefs"></a>

### *property* Part.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Part.Average"></a>

### *property* Part.Average *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="Part.BarScaleFactor"></a>

### *property* Part.BarScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets Cable Bar Scale Factor.

<!-- !! processed by numpydoc !! -->

<a id="Part.BendingScaleFactor"></a>

### *property* Part.BendingScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets Cable Bending Scale Factor.

<!-- !! processed by numpydoc !! -->

<a id="Part.CableLength"></a>

### *property* Part.CableLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets Cable Initial Length, which is the sum of cable body lengths under multibody cable.

<!-- !! processed by numpydoc !! -->

<a id="Part.CentroidX"></a>

### *property* Part.CentroidX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CentroidX.

<!-- !! processed by numpydoc !! -->

<a id="Part.CentroidY"></a>

### *property* Part.CentroidY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CentroidY.

<!-- !! processed by numpydoc !! -->

<a id="Part.CentroidZ"></a>

### *property* Part.CentroidZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CentroidZ.

<!-- !! processed by numpydoc !! -->

<a id="Part.Children"></a>

### *property* Part.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Part.ClsId"></a>

### *property* Part.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Part.Comments"></a>

### *property* Part.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Part.ConfigurationId"></a>

### *property* Part.ConfigurationId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the related Result Mesh's ConfigurationId.

<!-- !! processed by numpydoc !! -->

<a id="Part.CoordinateSystem"></a>

### *property* Part.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Part.DataModelObjectCategory"></a>

### *property* Part.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Part.Elements"></a>

### *property* Part.Elements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

<a id="Part.Figures"></a>

### *property* Part.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Part.FreeLength"></a>

### *property* Part.FreeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets Cable Free Length.

<!-- !! processed by numpydoc !! -->

<a id="Part.GroupingFolder"></a>

### *property* Part.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Part.Hidden"></a>

### *property* Part.Hidden *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Hide or show the body.

<!-- !! processed by numpydoc !! -->

<a id="Part.IconName"></a>

### *property* Part.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Part.Images"></a>

### *property* Part.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Part.ImportableObjectSourceId"></a>

### *property* Part.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Part.InternalObject"></a>

### *property* Part.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Part.IsVirtual"></a>

### *property* Part.IsVirtual *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsVirtual property.

<!-- !! processed by numpydoc !! -->

<a id="Part.LengthX"></a>

### *property* Part.LengthX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

<a id="Part.LengthY"></a>

### *property* Part.LengthY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

<a id="Part.LengthZ"></a>

### *property* Part.LengthZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

<a id="Part.Load"></a>

### *property* Part.Load *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets Cable Load.

<!-- !! processed by numpydoc !! -->

<a id="Part.Mass"></a>

### *property* Part.Mass *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="Part.Material"></a>

### *property* Part.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Part.MaterialName"></a>

### *property* Part.MaterialName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaterialName.

<!-- !! processed by numpydoc !! -->

<a id="Part.Maximum"></a>

### *property* Part.Maximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="Part.MeshMetric"></a>

### *property* Part.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

<a id="Part.Minimum"></a>

### *property* Part.Minimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="Part.MomentOfInertiaIp1"></a>

### *property* Part.MomentOfInertiaIp1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MomentOfInertiaIp1.

<!-- !! processed by numpydoc !! -->

<a id="Part.MomentOfInertiaIp2"></a>

### *property* Part.MomentOfInertiaIp2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MomentOfInertiaIp2.

<!-- !! processed by numpydoc !! -->

<a id="Part.MomentOfInertiaIp3"></a>

### *property* Part.MomentOfInertiaIp3 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MomentOfInertiaIp3.

<!-- !! processed by numpydoc !! -->

<a id="Part.Name"></a>

### *property* Part.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Part.Nodes"></a>

### *property* Part.Nodes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Part.ObjectId"></a>

### *property* Part.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Part.ObjectState"></a>

### *property* Part.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Part.ObjectTags"></a>

### *property* Part.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Part.Parent"></a>

### *property* Part.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Part.PreloadType"></a>

### *property* Part.PreloadType *: Ansys.Mechanical.DataModel.Enums.PreloadType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the preload type for cable.

<!-- !! processed by numpydoc !! -->

<a id="Part.Properties"></a>

### *property* Part.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Part.ReadOnly"></a>

### *property* Part.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Part.ReferenceCoordinateSystem"></a>

### *property* Part.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Part.ResultMeshId"></a>

### *property* Part.ResultMeshId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the related Result Mesh's ObjectId.

<!-- !! processed by numpydoc !! -->

<a id="Part.StandardDeviation"></a>

### *property* Part.StandardDeviation *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

<a id="Part.State"></a>

### *property* Part.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Part.Suppressed"></a>

### *property* Part.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Part.SynchronizeFreeLengthWithGeometry"></a>

### *property* Part.SynchronizeFreeLengthWithGeometry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether Geometry properties or “Free Length” property entry is used for cable free length input.

<!-- !! processed by numpydoc !! -->

<a id="Part.TorsionalScaleFactor"></a>

### *property* Part.TorsionalScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets Cable Torsional Scale Factor.

<!-- !! processed by numpydoc !! -->

<a id="Part.TransferableObjectId"></a>

### *property* Part.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Part.UseStiffnessScaleFactor"></a>

### *property* Part.UseStiffnessScaleFactor *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseStiffnessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="Part.Visible"></a>

### *property* Part.Visible *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="Part.VisibleProperties"></a>

### *property* Part.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Part.Volume"></a>

### *property* Part.Volume *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Part.Activate"></a>

### Part.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Part.AddComment"></a>

### Part.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Part.AddFigure"></a>

### Part.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Part.AddImage"></a>

### Part.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Part.ClearGeneratedData"></a>

### Part.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Part.Copy"></a>

### Part.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Part.CopyTo"></a>

### Part.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Part.CreateObjRef"></a>

### Part.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Part.CreateParameter"></a>

### Part.CreateParameter(paramPath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Part.Cut"></a>

### Part.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Part.Duplicate"></a>

### Part.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Part.Equals"></a>

### Part.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GenerateMesh"></a>

### Part.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetAPIName"></a>

### Part.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetAllProperties"></a>

### Part.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetChildren"></a>

### Part.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Part.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetDetailsView"></a>

### Part.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetEnumName"></a>

### Part.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Part.GetGeoPart"></a>

### Part.GetGeoPart() → Ansys.ACT.Interfaces.Geometry.IGeoPart

GetGeoPart method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetHashCode"></a>

### Part.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetIconFile"></a>

### Part.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetLifetimeService"></a>

### Part.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetObjectData"></a>

### Part.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetParameter"></a>

### Part.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetPath"></a>

### Part.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetPropertyName"></a>

### Part.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetPropertyValue"></a>

### Part.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetVisibleProperties"></a>

### Part.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GetVisiblePropertyNames"></a>

### Part.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Part.GroupAllSimilarChildren"></a>

### Part.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Part.GroupSimilarObjects"></a>

### Part.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Part.InitializeLifetimeService"></a>

### Part.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Part.InvertVisibility"></a>

### Part.InvertVisibility() → [None](https://docs.python.org/3/builtins/constants.html#None)

Inverts the visibility of hidden bodies versus those that are visible.

<!-- !! processed by numpydoc !! -->

<a id="Part.IsPropertyEditable"></a>

### Part.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Part.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Part.IsPropertyVisible"></a>

### Part.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Part.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Part.Paste"></a>

### Part.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Part.PreviewInflation"></a>

### Part.PreviewInflation() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

<a id="Part.PreviewSurfaceMesh"></a>

### Part.PreviewSurfaceMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

<a id="Part.PropertyByAPIName"></a>

### Part.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Part.PropertyById"></a>

### Part.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Part.PropertyByName"></a>

### Part.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Part.RemoveFromGroup"></a>

### Part.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Part.RemoveParameter"></a>

### Part.RemoveParameter(paramPath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Part.Update"></a>

### Part.Update() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Update action.

<!-- !! processed by numpydoc !! -->

