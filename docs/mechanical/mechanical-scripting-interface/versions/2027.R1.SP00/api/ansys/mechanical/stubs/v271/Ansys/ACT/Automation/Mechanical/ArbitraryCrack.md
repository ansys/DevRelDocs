# `ArbitraryCrack`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ArbitraryCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ArbitraryCrack(internalObject: Any)

<a id="ArbitraryCrack"></a>

### *class* ArbitraryCrack(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ArbitraryCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ArbitraryCrack.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#ArbitraryCrack.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#ArbitraryCrack.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ArbitraryCrack.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ArbitraryCrack.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ArbitraryCrack.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ArbitraryCrack.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ArbitraryCrack.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ArbitraryCrack.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ArbitraryCrack.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ArbitraryCrack.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ArbitraryCrack.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ArbitraryCrack.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ArbitraryCrack.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ArbitraryCrack.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ArbitraryCrack.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ArbitraryCrack.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ArbitraryCrack.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ArbitraryCrack.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ArbitraryCrack.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ArbitraryCrack.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ArbitraryCrack.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ArbitraryCrack.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ArbitraryCrack.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ArbitraryCrack.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ArbitraryCrack.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ArbitraryCrack.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ArbitraryCrack.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ArbitraryCrack.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ArbitraryCrack.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ArbitraryCrack.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ArbitraryCrack.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ArbitraryCrack.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ArbitraryCrack.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ArbitraryCrack.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ArbitraryCrack.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ArbitraryCrack.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ArbitraryCrack.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ArbitraryCrack.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ArbitraryCrack.AttachedRefs)                         | AttachedRefs property.                                        |
| [`BottomFaceNodes`](#ArbitraryCrack.BottomFaceNodes)                   | Gets or sets the BottomFaceNodes.                             |
| [`Children`](#ArbitraryCrack.Children)                                 | Gets the list of children.                                    |
| [`CircumferentialDivisions`](#ArbitraryCrack.CircumferentialDivisions) | Gets or sets the CircumferentialDivisions.                    |
| [`ClsId`](#ArbitraryCrack.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ArbitraryCrack.Comments)                                 | Gets the list of associated comments.                         |
| [`Contact1Nodes`](#ArbitraryCrack.Contact1Nodes)                       | Gets or sets the Contact1Nodes named selection name.          |
| [`ContactPairsNodes`](#ArbitraryCrack.ContactPairsNodes)               | Gets or sets the ContactPairsNodes.                           |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)             | Gets or sets the CoordinateSystem.                            |
| [`CrackFacesNodes`](#ArbitraryCrack.CrackFacesNodes)                   | Gets or sets the CrackFacesNodes.                             |
| [`CrackFrontNodes`](#ArbitraryCrack.CrackFrontNodes)                   | Gets or sets the CrackFrontNodes.                             |
| [`CrackID`](#ArbitraryCrack.CrackID)                                   | Gets the CrackID.                                             |
| [`CrackMeshMethod`](#ArbitraryCrack.CrackMeshMethod)                   | Gets the CrackMeshMethod.                                     |
| [`CrackShape`](#ArbitraryCrack.CrackShape)                             | Gets the CrackShape.                                          |
| [`CrackSourceType`](#ArbitraryCrack.CrackSourceType)                   | Gets the CrackSourceType.                                     |
| [`CrackSurfaceLocation`](#ArbitraryCrack.CrackSurfaceLocation)         | Gets or sets the CrackSurfaceLocation.                        |
| [`DataModelObjectCategory`](#ArbitraryCrack.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ArbitraryCrack.Figures)                                   | Gets the list of associated figures.                          |
| [`FrontElementSize`](#ArbitraryCrack.FrontElementSize)                 | Gets or sets the FrontElementSize.                            |
| [`GroupingFolder`](#ArbitraryCrack.GroupingFolder)                     | GroupingFolder property.                                      |
| [`GrowthRate`](#ArbitraryCrack.GrowthRate)                             | Gets or sets the GrowthRate.                                  |
| [`IconName`](#ArbitraryCrack.IconName)                                 | IconName property.                                            |
| [`Images`](#ArbitraryCrack.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ArbitraryCrack.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ArbitraryCrack.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LargestContourRadius`](#ArbitraryCrack.LargestContourRadius)         | Gets or sets the LargestContourRadius.                        |
| [`Location`](#ArbitraryCrack.Location)                                 | Gets or sets the Location.                                    |
| [`MeshContours`](#ArbitraryCrack.MeshContours)                         | Gets or sets the MeshContours.                                |
| [`Name`](#ArbitraryCrack.Name)                                         | Name property.                                                |
| [`ObjectId`](#ArbitraryCrack.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ArbitraryCrack.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ArbitraryCrack.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ArbitraryCrack.Parent)                                     | Parent property.                                              |
| [`Properties`](#ArbitraryCrack.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ArbitraryCrack.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SolutionContours`](#ArbitraryCrack.SolutionContours)                 | Gets or sets the SolutionContours.                            |
| [`State`](#ArbitraryCrack.State)                                       | State property.                                               |
| [`Suppressed`](#ArbitraryCrack.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`Target1Nodes`](#ArbitraryCrack.Target1Nodes)                         | Gets or sets the Target1Nodes named selection name.           |
| [`TopFaceNodes`](#ArbitraryCrack.TopFaceNodes)                         | Gets or sets the TopFaceNodes.                                |
| [`TransferableObjectId`](#ArbitraryCrack.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ArbitraryCrack.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`XScaleFactor`](#ArbitraryCrack.XScaleFactor)                         | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#ArbitraryCrack.YScaleFactor)                         | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#ArbitraryCrack.ZScaleFactor)                         | Gets or sets the ZScaleFactor.                                |

<a id="property-detail"></a>

## Property detail

<a id="ArbitraryCrack.AttachedRefs"></a>

### *property* ArbitraryCrack.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.BottomFaceNodes"></a>

### *property* ArbitraryCrack.BottomFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Children"></a>

### *property* ArbitraryCrack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CircumferentialDivisions"></a>

### *property* ArbitraryCrack.CircumferentialDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ClsId"></a>

### *property* ArbitraryCrack.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Comments"></a>

### *property* ArbitraryCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Contact1Nodes"></a>

### *property* ArbitraryCrack.Contact1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Contact1Nodes named selection name.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ContactPairsNodes"></a>

### *property* ArbitraryCrack.ContactPairsNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CoordinateSystem"></a>

### *property* ArbitraryCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackFacesNodes"></a>

### *property* ArbitraryCrack.CrackFacesNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackFrontNodes"></a>

### *property* ArbitraryCrack.CrackFrontNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackID"></a>

### *property* ArbitraryCrack.CrackID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackMeshMethod"></a>

### *property* ArbitraryCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackShape"></a>

### *property* ArbitraryCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackSourceType"></a>

### *property* ArbitraryCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackSurfaceLocation"></a>

### *property* ArbitraryCrack.CrackSurfaceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackSurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.DataModelObjectCategory"></a>

### *property* ArbitraryCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Figures"></a>

### *property* ArbitraryCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.FrontElementSize"></a>

### *property* ArbitraryCrack.FrontElementSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GroupingFolder"></a>

### *property* ArbitraryCrack.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GrowthRate"></a>

### *property* ArbitraryCrack.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.IconName"></a>

### *property* ArbitraryCrack.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Images"></a>

### *property* ArbitraryCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ImportableObjectSourceId"></a>

### *property* ArbitraryCrack.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.InternalObject"></a>

### *property* ArbitraryCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.LargestContourRadius"></a>

### *property* ArbitraryCrack.LargestContourRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Location"></a>

### *property* ArbitraryCrack.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.MeshContours"></a>

### *property* ArbitraryCrack.MeshContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Name"></a>

### *property* ArbitraryCrack.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ObjectId"></a>

### *property* ArbitraryCrack.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ObjectState"></a>

### *property* ArbitraryCrack.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ObjectTags"></a>

### *property* ArbitraryCrack.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Parent"></a>

### *property* ArbitraryCrack.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Properties"></a>

### *property* ArbitraryCrack.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ReadOnly"></a>

### *property* ArbitraryCrack.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.SolutionContours"></a>

### *property* ArbitraryCrack.SolutionContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.State"></a>

### *property* ArbitraryCrack.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Suppressed"></a>

### *property* ArbitraryCrack.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Target1Nodes"></a>

### *property* ArbitraryCrack.Target1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Target1Nodes named selection name.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.TopFaceNodes"></a>

### *property* ArbitraryCrack.TopFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.TransferableObjectId"></a>

### *property* ArbitraryCrack.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.VisibleProperties"></a>

### *property* ArbitraryCrack.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.XScaleFactor"></a>

### *property* ArbitraryCrack.XScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.YScaleFactor"></a>

### *property* ArbitraryCrack.YScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ZScaleFactor"></a>

### *property* ArbitraryCrack.ZScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ArbitraryCrack.Activate"></a>

### ArbitraryCrack.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.AddCommandSnippet"></a>

### ArbitraryCrack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.AddComment"></a>

### ArbitraryCrack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.AddFigure"></a>

### ArbitraryCrack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.AddImage"></a>

### ArbitraryCrack.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Copy"></a>

### ArbitraryCrack.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CopyTo"></a>

### ArbitraryCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CreateObjRef"></a>

### ArbitraryCrack.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CreateParameter"></a>

### ArbitraryCrack.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Cut"></a>

### ArbitraryCrack.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Delete"></a>

### ArbitraryCrack.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Duplicate"></a>

### ArbitraryCrack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Equals"></a>

### ArbitraryCrack.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetAPIName"></a>

### ArbitraryCrack.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetAllProperties"></a>

### ArbitraryCrack.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetChildren"></a>

### ArbitraryCrack.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ArbitraryCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetDetailsView"></a>

### ArbitraryCrack.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetEnumName"></a>

### ArbitraryCrack.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetHashCode"></a>

### ArbitraryCrack.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetIconFile"></a>

### ArbitraryCrack.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetLifetimeService"></a>

### ArbitraryCrack.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetObjectData"></a>

### ArbitraryCrack.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetParameter"></a>

### ArbitraryCrack.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetPath"></a>

### ArbitraryCrack.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetPropertyName"></a>

### ArbitraryCrack.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetPropertyValue"></a>

### ArbitraryCrack.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetVisibleProperties"></a>

### ArbitraryCrack.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetVisiblePropertyNames"></a>

### ArbitraryCrack.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GroupAllSimilarChildren"></a>

### ArbitraryCrack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GroupSimilarObjects"></a>

### ArbitraryCrack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.InitializeLifetimeService"></a>

### ArbitraryCrack.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.IsPropertyEditable"></a>

### ArbitraryCrack.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ArbitraryCrack.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.IsPropertyVisible"></a>

### ArbitraryCrack.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ArbitraryCrack.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Paste"></a>

### ArbitraryCrack.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.PropertyByAPIName"></a>

### ArbitraryCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.PropertyById"></a>

### ArbitraryCrack.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.PropertyByName"></a>

### ArbitraryCrack.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.RemoveFromGroup"></a>

### ArbitraryCrack.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.RemoveParameter"></a>

### ArbitraryCrack.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

