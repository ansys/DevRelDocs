# `CondensedPart`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPart"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CondensedPart(internalObject: Any)

<a id="CondensedPart"></a>

### *class* CondensedPart(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CondensedPart.Activate)                                         | Activate the current object.                                                                |
| [`AddCommandSnippet`](#CondensedPart.AddCommandSnippet)                       | Creates a new CommandSnippet                                                                |
| [`AddComment`](#CondensedPart.AddComment)                                     | Creates a new child Comment.                                                                |
| [`AddFigure`](#CondensedPart.AddFigure)                                       | Creates a new child Figure.                                                                 |
| [`AddImage`](#CondensedPart.AddImage)                                         | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#CondensedPart.ClearGeneratedData)                     | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#CondensedPart.Copy)                                                 | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CondensedPart.CopyTo)                                             | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CondensedPart.CreateObjRef)                                 | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CondensedPart.CreateParameter)                           | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CondensedPart.Cut)                                                   | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CondensedPart.Delete)                                             | Run the Delete action.                                                                      |
| [`DetectCondensedPartInterface`](#CondensedPart.DetectCondensedPartInterface) | Run the DetectCondensedPartInterface action.                                                |
| [`Duplicate`](#CondensedPart.Duplicate)                                       | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CondensedPart.Equals)                                             | Equals method.                                                                              |
| [`Export`](#CondensedPart.Export)                                             | Run the Export Condensed Part action.                                                       |
| [`ExportCondensedPart`](#CondensedPart.ExportCondensedPart)                   | ExportCondensedPart method.                                                                 |
| [`GenerateCondensedGeometry`](#CondensedPart.GenerateCondensedGeometry)       | GenerateCondensedGeometry method.                                                           |
| [`GenerateCondensedParts`](#CondensedPart.GenerateCondensedParts)             | Run the GenerateCondensedParts action.                                                      |
| [`GetAPIName`](#CondensedPart.GetAPIName)                                     | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CondensedPart.GetAllProperties)                         | GetAllProperties method.                                                                    |
| [`GetChildren`](#CondensedPart.GetChildren)                                   | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CondensedPart.GetDetailsView)                             | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CondensedPart.GetEnumName)                                   | Enum name bound to value                                                                    |
| [`GetHashCode`](#CondensedPart.GetHashCode)                                   | GetHashCode method.                                                                         |
| [`GetIconFile`](#CondensedPart.GetIconFile)                                   | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CondensedPart.GetLifetimeService)                     | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CondensedPart.GetObjectData)                               | GetObjectData method.                                                                       |
| [`GetParameter`](#CondensedPart.GetParameter)                                 | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CondensedPart.GetPath)                                           | GetPath method.                                                                             |
| [`GetPropertyName`](#CondensedPart.GetPropertyName)                           | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CondensedPart.GetPropertyValue)                         | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CondensedPart.GetVisibleProperties)                 | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CondensedPart.GetVisiblePropertyNames)           | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CondensedPart.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CondensedPart.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CondensedPart.InitializeLifetimeService)       | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CondensedPart.IsPropertyEditable)                     | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CondensedPart.IsPropertyVisible)                       | IsPropertyVisible method.                                                                   |
| [`Paste`](#CondensedPart.Paste)                                               | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CondensedPart.PropertyByAPIName)                       | Get a property by its API name.                                                             |
| [`PropertyById`](#CondensedPart.PropertyById)                                 | PropertyById method.                                                                        |
| [`PropertyByName`](#CondensedPart.PropertyByName)                             | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CondensedPart.RemoveFromGroup)                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CondensedPart.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#CondensedPart.AttachedRefs)                       | AttachedRefs property.                                                                                      |
| [`AttachmentMethod`](#CondensedPart.AttachmentMethod)               | Gets or sets the AttachmentMethod.                                                                          |
| [`Children`](#CondensedPart.Children)                               | Gets the list of children.                                                                                  |
| [`ClsId`](#CondensedPart.ClsId)                                     | ClsId property.                                                                                             |
| [`Comments`](#CondensedPart.Comments)                               | Gets the list of associated comments.                                                                       |
| [`DataModelObjectCategory`](#CondensedPart.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                |
| [`Figures`](#CondensedPart.Figures)                                 | Gets the list of associated figures.                                                                        |
| [`FutureExpansion`](#CondensedPart.FutureExpansion)                 | Gets or sets the FutureExpansion.                                                                           |
| [`FutureIntent`](#CondensedPart.FutureIntent)                       | “FutureIntent” property defines the type of solver supported to perform a use pass with the condensed part. |
| [`GenerateDampingMatrix`](#CondensedPart.GenerateDampingMatrix)     | Gets or sets the GenerateDampingMatrix.                                                                     |
| [`GeometrySelection`](#CondensedPart.GeometrySelection)             | Gets or sets the GeometrySelection.                                                                         |
| [`GroupingFolder`](#CondensedPart.GroupingFolder)                   | GroupingFolder property.                                                                                    |
| [`IconName`](#CondensedPart.IconName)                               | IconName property.                                                                                          |
| [`Images`](#CondensedPart.Images)                                   | Gets the list of associated images.                                                                         |
| [`InterfaceMethod`](#CondensedPart.InterfaceMethod)                 | Gets or sets the InterfaceMethod.                                                                           |
| [`Interfaces`](#CondensedPart.Interfaces)                           | Returns the Interfaces of the condensed part                                                                |
| [`InternalObject`](#CondensedPart.InternalObject)                   | Gets the internal object. For advanced usage only.                                                          |
| [`KeepFilesFor`](#CondensedPart.KeepFilesFor)                       | Gets or sets the KeepFilesFor.                                                                              |
| [`LumpedMassFormulation`](#CondensedPart.LumpedMassFormulation)     | Gets or sets the LumpedMassFormulation.                                                                     |
| [`MaximumFrequency`](#CondensedPart.MaximumFrequency)               | Gets or sets the MaximumFrequency.                                                                          |
| [`MinimumFrequency`](#CondensedPart.MinimumFrequency)               | Gets or sets the MinimumFrequency.                                                                          |
| [`Name`](#CondensedPart.Name)                                       | Name property.                                                                                              |
| [`NumberInterfaceEntries`](#CondensedPart.NumberInterfaceEntries)   | Gets the NumberInterfaceEntries.                                                                            |
| [`NumberMasterNodes`](#CondensedPart.NumberMasterNodes)             | Gets the NumberMasterNodes.                                                                                 |
| [`NumberOfModes`](#CondensedPart.NumberOfModes)                     | Gets or sets the NumberOfModes.                                                                             |
| [`ObjectId`](#CondensedPart.ObjectId)                               | ObjectId property.                                                                                          |
| [`ObjectState`](#CondensedPart.ObjectState)                         | ObjectState property.                                                                                       |
| [`ObjectTags`](#CondensedPart.ObjectTags)                           | ObjectTags property.                                                                                        |
| [`Parent`](#CondensedPart.Parent)                                   | Parent property.                                                                                            |
| [`Physics`](#CondensedPart.Physics)                                 | Gets the Physics.                                                                                           |
| [`PointMassTreatment`](#CondensedPart.PointMassTreatment)           | Gets or sets the PointMassTreatment.                                                                        |
| [`Properties`](#CondensedPart.Properties)                           | Gets the list of properties for this object.                                                                |
| [`RangeSearch`](#CondensedPart.RangeSearch)                         | Gets or sets the RangeSearch.                                                                               |
| [`ReductionMethod`](#CondensedPart.ReductionMethod)                 | Gets or sets the ReductionMethod.                                                                           |
| [`ReferenceTemperature`](#CondensedPart.ReferenceTemperature)       | Gets or sets the ReferenceTemperature.                                                                      |
| [`SolutionName`](#CondensedPart.SolutionName)                       | Gets or sets the SolutionName.                                                                              |
| [`SolutionNameMode`](#CondensedPart.SolutionNameMode)               | Gets or sets the SolutionNameMode.                                                                          |
| [`SolverFilesDirectory`](#CondensedPart.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                                                              |
| [`SolverType`](#CondensedPart.SolverType)                           | Gets or sets the SolverType.                                                                                |
| [`SolverUnitSystem`](#CondensedPart.SolverUnitSystem)               | Gets or sets the SolverUnitSystem.                                                                          |
| [`SolverUnits`](#CondensedPart.SolverUnits)                         | Gets or sets the SolverUnits.                                                                               |
| [`State`](#CondensedPart.State)                                     | State property.                                                                                             |
| [`StoreBasisResults`](#CondensedPart.StoreBasisResults)             | Gets or sets the StoreBasisResults.                                                                         |
| [`Suppressed`](#CondensedPart.Suppressed)                           | Gets or sets the Suppressed.                                                                                |
| [`TemperatureUnits`](#CondensedPart.TemperatureUnits)               | Gets the TemperatureUnits.                                                                                  |
| [`VisibleProperties`](#CondensedPart.VisibleProperties)             | Gets the list of properties that are visible for this object.                                               |

<a id="property-detail"></a>

## Property detail

<a id="CondensedPart.AttachedRefs"></a>

### *property* CondensedPart.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AttachmentMethod"></a>

### *property* CondensedPart.AttachmentMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod](../../../Mechanical/DataModel/Enums/CondensedPartCMSAttachmentMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AttachmentMethod.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Children"></a>

### *property* CondensedPart.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ClsId"></a>

### *property* CondensedPart.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Comments"></a>

### *property* CondensedPart.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.DataModelObjectCategory"></a>

### *property* CondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Figures"></a>

### *property* CondensedPart.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.FutureExpansion"></a>

### *property* CondensedPart.FutureExpansion *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FutureExpansion.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.FutureIntent"></a>

### *property* CondensedPart.FutureIntent *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

“FutureIntent” property defines the type of solver supported to perform a use pass with the condensed part.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GenerateDampingMatrix"></a>

### *property* CondensedPart.GenerateDampingMatrix *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GenerateDampingMatrix.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GeometrySelection"></a>

### *property* CondensedPart.GeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GroupingFolder"></a>

### *property* CondensedPart.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.IconName"></a>

### *property* CondensedPart.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Images"></a>

### *property* CondensedPart.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.InterfaceMethod"></a>

### *property* CondensedPart.InterfaceMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod](../../../Mechanical/DataModel/Enums/CondensedPartInterfaceMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InterfaceMethod.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Interfaces"></a>

### *property* CondensedPart.Interfaces *: [Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces](CondensedPartInterfaces.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the Interfaces of the condensed part

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.InternalObject"></a>

### *property* CondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.KeepFilesFor"></a>

### *property* CondensedPart.KeepFilesFor *: [Ansys.Mechanical.DataModel.Enums.CondensedPartKeepFilesFor](../../../Mechanical/DataModel/Enums/CondensedPartKeepFilesFor.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CondensedPartKeepFilesFor) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the KeepFilesFor.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.LumpedMassFormulation"></a>

### *property* CondensedPart.LumpedMassFormulation *: [Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation](../../../Mechanical/DataModel/Enums/CondensedPartLumpedMassFormulation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LumpedMassFormulation.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.MaximumFrequency"></a>

### *property* CondensedPart.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.MinimumFrequency"></a>

### *property* CondensedPart.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Name"></a>

### *property* CondensedPart.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.NumberInterfaceEntries"></a>

### *property* CondensedPart.NumberInterfaceEntries *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.NumberMasterNodes"></a>

### *property* CondensedPart.NumberMasterNodes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.NumberOfModes"></a>

### *property* CondensedPart.NumberOfModes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfModes.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ObjectId"></a>

### *property* CondensedPart.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ObjectState"></a>

### *property* CondensedPart.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ObjectTags"></a>

### *property* CondensedPart.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Parent"></a>

### *property* CondensedPart.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Physics"></a>

### *property* CondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.PointMassTreatment"></a>

### *property* CondensedPart.PointMassTreatment *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment](../../../Mechanical/DataModel/Enums/CondensedPartPointMassTreatment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PointMassTreatment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Properties"></a>

### *property* CondensedPart.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.RangeSearch"></a>

### *property* CondensedPart.RangeSearch *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeSearch.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ReductionMethod"></a>

### *property* CondensedPart.ReductionMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod](../../../Mechanical/DataModel/Enums/CondensedPartReductionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReductionMethod.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ReferenceTemperature"></a>

### *property* CondensedPart.ReferenceTemperature *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolutionName"></a>

### *property* CondensedPart.SolutionName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolutionNameMode"></a>

### *property* CondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolverFilesDirectory"></a>

### *property* CondensedPart.SolverFilesDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolverType"></a>

### *property* CondensedPart.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../Mechanical/DataModel/Enums/SolverType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolverType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolverUnitSystem"></a>

### *property* CondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolverUnits"></a>

### *property* CondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.State"></a>

### *property* CondensedPart.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.StoreBasisResults"></a>

### *property* CondensedPart.StoreBasisResults *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StoreBasisResults.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Suppressed"></a>

### *property* CondensedPart.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.TemperatureUnits"></a>

### *property* CondensedPart.TemperatureUnits *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.VisibleProperties"></a>

### *property* CondensedPart.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CondensedPart.Activate"></a>

### CondensedPart.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AddCommandSnippet"></a>

### CondensedPart.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AddComment"></a>

### CondensedPart.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AddFigure"></a>

### CondensedPart.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AddImage"></a>

### CondensedPart.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ClearGeneratedData"></a>

### CondensedPart.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Copy"></a>

### CondensedPart.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.CopyTo"></a>

### CondensedPart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.CreateObjRef"></a>

### CondensedPart.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.CreateParameter"></a>

### CondensedPart.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Cut"></a>

### CondensedPart.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Delete"></a>

### CondensedPart.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.DetectCondensedPartInterface"></a>

### CondensedPart.DetectCondensedPartInterface() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the DetectCondensedPartInterface action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Duplicate"></a>

### CondensedPart.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Equals"></a>

### CondensedPart.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Export"></a>

### CondensedPart.Export(exportFileName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), exportFormat: [Ansys.Mechanical.DataModel.MechanicalEnums.CondensedParts.ExportFormat](../../../Mechanical/DataModel/MechanicalEnums/CondensedParts/ExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.CondensedParts.ExportFormat), exportSettings: [Ansys.ACT.Automation.Mechanical.CondensedParts.ExportSettings](CondensedParts/ExportSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedParts.ExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Export Condensed Part action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ExportCondensedPart"></a>

### CondensedPart.ExportCondensedPart(exportFileName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportCondensedPart method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GenerateCondensedGeometry"></a>

### CondensedPart.GenerateCondensedGeometry() → [None](https://docs.python.org/3/builtins/constants.html#None)

GenerateCondensedGeometry method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GenerateCondensedParts"></a>

### CondensedPart.GenerateCondensedParts() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GenerateCondensedParts action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetAPIName"></a>

### CondensedPart.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetAllProperties"></a>

### CondensedPart.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetChildren"></a>

### CondensedPart.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetDetailsView"></a>

### CondensedPart.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetEnumName"></a>

### CondensedPart.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetHashCode"></a>

### CondensedPart.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetIconFile"></a>

### CondensedPart.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetLifetimeService"></a>

### CondensedPart.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetObjectData"></a>

### CondensedPart.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetParameter"></a>

### CondensedPart.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetPath"></a>

### CondensedPart.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetPropertyName"></a>

### CondensedPart.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetPropertyValue"></a>

### CondensedPart.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetVisibleProperties"></a>

### CondensedPart.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetVisiblePropertyNames"></a>

### CondensedPart.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GroupAllSimilarChildren"></a>

### CondensedPart.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GroupSimilarObjects"></a>

### CondensedPart.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.InitializeLifetimeService"></a>

### CondensedPart.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.IsPropertyEditable"></a>

### CondensedPart.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CondensedPart.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.IsPropertyVisible"></a>

### CondensedPart.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CondensedPart.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Paste"></a>

### CondensedPart.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.PropertyByAPIName"></a>

### CondensedPart.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.PropertyById"></a>

### CondensedPart.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.PropertyByName"></a>

### CondensedPart.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.RemoveFromGroup"></a>

### CondensedPart.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.RemoveParameter"></a>

### CondensedPart.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

