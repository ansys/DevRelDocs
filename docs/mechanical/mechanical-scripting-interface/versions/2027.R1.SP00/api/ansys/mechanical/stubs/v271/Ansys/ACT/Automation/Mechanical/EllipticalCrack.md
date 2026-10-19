# `EllipticalCrack`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.EllipticalCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.EllipticalCrack(internalObject: Any)

<a id="EllipticalCrack"></a>

### *class* EllipticalCrack(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EllipticalCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EllipticalCrack.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#EllipticalCrack.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#EllipticalCrack.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#EllipticalCrack.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#EllipticalCrack.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#EllipticalCrack.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EllipticalCrack.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EllipticalCrack.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EllipticalCrack.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#EllipticalCrack.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EllipticalCrack.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#EllipticalCrack.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#EllipticalCrack.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#EllipticalCrack.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#EllipticalCrack.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#EllipticalCrack.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#EllipticalCrack.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EllipticalCrack.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#EllipticalCrack.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#EllipticalCrack.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EllipticalCrack.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#EllipticalCrack.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#EllipticalCrack.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EllipticalCrack.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#EllipticalCrack.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EllipticalCrack.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#EllipticalCrack.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EllipticalCrack.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EllipticalCrack.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EllipticalCrack.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EllipticalCrack.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EllipticalCrack.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EllipticalCrack.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#EllipticalCrack.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#EllipticalCrack.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#EllipticalCrack.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#EllipticalCrack.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EllipticalCrack.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EllipticalCrack.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#EllipticalCrack.AttachedRefs)                                     | AttachedRefs property.                                                                                                                                                                       |
| [`BottomFaceNodes`](#EllipticalCrack.BottomFaceNodes)                               | Gets or sets the BottomFaceNodes.                                                                                                                                                            |
| [`Children`](#EllipticalCrack.Children)                                             | Gets the list of children.                                                                                                                                                                   |
| [`CircumferentialDivisions`](#EllipticalCrack.CircumferentialDivisions)             | Gets or sets the CircumferentialDivisions.                                                                                                                                                   |
| [`ClsId`](#EllipticalCrack.ClsId)                                                   | ClsId property.                                                                                                                                                                              |
| [`Comments`](#EllipticalCrack.Comments)                                             | Gets the list of associated comments.                                                                                                                                                        |
| [`Contact1Nodes`](#EllipticalCrack.Contact1Nodes)                                   | Gets or sets the Contact1Nodes.                                                                                                                                                              |
| [`ContactPairsNodes`](#EllipticalCrack.ContactPairsNodes)                           | Gets or sets the ContactPairsNodes.                                                                                                                                                          |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                          | Gets or sets the CoordinateSystem.                                                                                                                                                           |
| [`CrackFacesNodes`](#EllipticalCrack.CrackFacesNodes)                               | Gets or sets the CrackFacesNodes.                                                                                                                                                            |
| [`CrackFrontDivisions`](#EllipticalCrack.CrackFrontDivisions)                       | Gets or sets the CrackFrontDivisions.                                                                                                                                                        |
| [`CrackFrontNodes`](#EllipticalCrack.CrackFrontNodes)                               | Gets or sets the CrackFrontNodes.                                                                                                                                                            |
| [`CrackID`](#EllipticalCrack.CrackID)                                               | Gets the CrackID.                                                                                                                                                                            |
| [`CrackMeshMethod`](#EllipticalCrack.CrackMeshMethod)                               | Gets or sets the CrackMeshMethod.                                                                                                                                                            |
| [`CrackShape`](#EllipticalCrack.CrackShape)                                         | Gets the CrackShape.                                                                                                                                                                         |
| [`CrackSourceType`](#EllipticalCrack.CrackSourceType)                               | Gets the CrackSourceType.                                                                                                                                                                    |
| [`DataModelObjectCategory`](#EllipticalCrack.DataModelObjectCategory)               | Gets the current DataModelObject's category.                                                                                                                                                 |
| [`Figures`](#EllipticalCrack.Figures)                                               | Gets the list of associated figures.                                                                                                                                                         |
| [`FractureAffectedZone`](#EllipticalCrack.FractureAffectedZone)                     | Gets or sets the FractureAffectedZone.                                                                                                                                                       |
| [`FractureAffectedZoneHeight`](#EllipticalCrack.FractureAffectedZoneHeight)         | Gets or sets the FractureAffectedZoneHeight.                                                                                                                                                 |
| [`FractureAffectedZoneTransition`](#EllipticalCrack.FractureAffectedZoneTransition) | Gets or sets the type of transition between hex-dominant and tetrahedral meshes at the fracture affected zone interface only when the crack mesh method is Hex-Dominant. Default: MPCContact |
| [`FrontElementSize`](#EllipticalCrack.FrontElementSize)                             | Gets or sets the FrontElementSize.                                                                                                                                                           |
| [`GroupingFolder`](#EllipticalCrack.GroupingFolder)                                 | GroupingFolder property.                                                                                                                                                                     |
| [`GrowthRate`](#EllipticalCrack.GrowthRate)                                         | Gets or sets the GrowthRate.                                                                                                                                                                 |
| [`IconName`](#EllipticalCrack.IconName)                                             | IconName property.                                                                                                                                                                           |
| [`Images`](#EllipticalCrack.Images)                                                 | Gets the list of associated images.                                                                                                                                                          |
| [`ImportableObjectSourceId`](#EllipticalCrack.ImportableObjectSourceId)             | ImportableObjectSourceId property.                                                                                                                                                           |
| [`InternalObject`](#EllipticalCrack.InternalObject)                                 | Gets the internal object. For advanced usage only.                                                                                                                                           |
| [`LargestContourRadius`](#EllipticalCrack.LargestContourRadius)                     | Gets or sets the LargestContourRadius.                                                                                                                                                       |
| [`Location`](#EllipticalCrack.Location)                                             | Gets or sets the Location.                                                                                                                                                                   |
| [`MajorRadius`](#EllipticalCrack.MajorRadius)                                       | Gets or sets the MajorRadius.                                                                                                                                                                |
| [`MeshContours`](#EllipticalCrack.MeshContours)                                     | Gets or sets the MeshContours.                                                                                                                                                               |
| [`MinorRadius`](#EllipticalCrack.MinorRadius)                                       | Gets or sets the MinorRadius.                                                                                                                                                                |
| [`Name`](#EllipticalCrack.Name)                                                     | Name property.                                                                                                                                                                               |
| [`ObjectId`](#EllipticalCrack.ObjectId)                                             | ObjectId property.                                                                                                                                                                           |
| [`ObjectState`](#EllipticalCrack.ObjectState)                                       | ObjectState property.                                                                                                                                                                        |
| [`ObjectTags`](#EllipticalCrack.ObjectTags)                                         | ObjectTags property.                                                                                                                                                                         |
| [`Parent`](#EllipticalCrack.Parent)                                                 | Parent property.                                                                                                                                                                             |
| [`Properties`](#EllipticalCrack.Properties)                                         | Gets the list of properties for this object.                                                                                                                                                 |
| [`ReadOnly`](#EllipticalCrack.ReadOnly)                                             | Gets or sets the ReadOnly.                                                                                                                                                                   |
| [`SolutionContours`](#EllipticalCrack.SolutionContours)                             | Gets or sets the SolutionContours.                                                                                                                                                           |
| [`State`](#EllipticalCrack.State)                                                   | State property.                                                                                                                                                                              |
| [`Suppressed`](#EllipticalCrack.Suppressed)                                         | Gets or sets the Suppressed.                                                                                                                                                                 |
| [`Target1Nodes`](#EllipticalCrack.Target1Nodes)                                     | Gets or sets the Target1Nodes.                                                                                                                                                               |
| [`TopFaceNodes`](#EllipticalCrack.TopFaceNodes)                                     | Gets or sets the TopFaceNodes.                                                                                                                                                               |
| [`TransferableObjectId`](#EllipticalCrack.TransferableObjectId)                     | TransferableObjectId property.                                                                                                                                                               |
| [`VisibleProperties`](#EllipticalCrack.VisibleProperties)                           | Gets the list of properties that are visible for this object.                                                                                                                                |
| [`XScaleFactor`](#EllipticalCrack.XScaleFactor)                                     | Gets or sets the XScaleFactor.                                                                                                                                                               |
| [`YScaleFactor`](#EllipticalCrack.YScaleFactor)                                     | Gets or sets the YScaleFactor.                                                                                                                                                               |
| [`ZScaleFactor`](#EllipticalCrack.ZScaleFactor)                                     | Gets or sets the ZScaleFactor.                                                                                                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="EllipticalCrack.AttachedRefs"></a>

### *property* EllipticalCrack.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.BottomFaceNodes"></a>

### *property* EllipticalCrack.BottomFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Children"></a>

### *property* EllipticalCrack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CircumferentialDivisions"></a>

### *property* EllipticalCrack.CircumferentialDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ClsId"></a>

### *property* EllipticalCrack.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Comments"></a>

### *property* EllipticalCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Contact1Nodes"></a>

### *property* EllipticalCrack.Contact1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ContactPairsNodes"></a>

### *property* EllipticalCrack.ContactPairsNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CoordinateSystem"></a>

### *property* EllipticalCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackFacesNodes"></a>

### *property* EllipticalCrack.CrackFacesNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackFrontDivisions"></a>

### *property* EllipticalCrack.CrackFrontDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackFrontNodes"></a>

### *property* EllipticalCrack.CrackFrontNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackID"></a>

### *property* EllipticalCrack.CrackID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackMeshMethod"></a>

### *property* EllipticalCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackShape"></a>

### *property* EllipticalCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackSourceType"></a>

### *property* EllipticalCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.DataModelObjectCategory"></a>

### *property* EllipticalCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Figures"></a>

### *property* EllipticalCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.FractureAffectedZone"></a>

### *property* EllipticalCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.FractureAffectedZoneHeight"></a>

### *property* EllipticalCrack.FractureAffectedZoneHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.FractureAffectedZoneTransition"></a>

### *property* EllipticalCrack.FractureAffectedZoneTransition *: [Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackFAZTransition](../../../Mechanical/DataModel/MechanicalEnums/Fracture/CrackFAZTransition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackFAZTransition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of transition between hex-dominant and tetrahedral meshes at the fracture affected zone interface only when the crack mesh method is Hex-Dominant. Default: MPCContact

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.FrontElementSize"></a>

### *property* EllipticalCrack.FrontElementSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GroupingFolder"></a>

### *property* EllipticalCrack.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GrowthRate"></a>

### *property* EllipticalCrack.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.IconName"></a>

### *property* EllipticalCrack.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Images"></a>

### *property* EllipticalCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ImportableObjectSourceId"></a>

### *property* EllipticalCrack.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.InternalObject"></a>

### *property* EllipticalCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.LargestContourRadius"></a>

### *property* EllipticalCrack.LargestContourRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Location"></a>

### *property* EllipticalCrack.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.MajorRadius"></a>

### *property* EllipticalCrack.MajorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.MeshContours"></a>

### *property* EllipticalCrack.MeshContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.MinorRadius"></a>

### *property* EllipticalCrack.MinorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Name"></a>

### *property* EllipticalCrack.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ObjectId"></a>

### *property* EllipticalCrack.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ObjectState"></a>

### *property* EllipticalCrack.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ObjectTags"></a>

### *property* EllipticalCrack.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Parent"></a>

### *property* EllipticalCrack.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Properties"></a>

### *property* EllipticalCrack.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ReadOnly"></a>

### *property* EllipticalCrack.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.SolutionContours"></a>

### *property* EllipticalCrack.SolutionContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.State"></a>

### *property* EllipticalCrack.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Suppressed"></a>

### *property* EllipticalCrack.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Target1Nodes"></a>

### *property* EllipticalCrack.Target1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.TopFaceNodes"></a>

### *property* EllipticalCrack.TopFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.TransferableObjectId"></a>

### *property* EllipticalCrack.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.VisibleProperties"></a>

### *property* EllipticalCrack.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.XScaleFactor"></a>

### *property* EllipticalCrack.XScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.YScaleFactor"></a>

### *property* EllipticalCrack.YScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ZScaleFactor"></a>

### *property* EllipticalCrack.ZScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EllipticalCrack.Activate"></a>

### EllipticalCrack.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.AddCommandSnippet"></a>

### EllipticalCrack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.AddComment"></a>

### EllipticalCrack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.AddFigure"></a>

### EllipticalCrack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.AddImage"></a>

### EllipticalCrack.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Copy"></a>

### EllipticalCrack.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CopyTo"></a>

### EllipticalCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CreateObjRef"></a>

### EllipticalCrack.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CreateParameter"></a>

### EllipticalCrack.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Cut"></a>

### EllipticalCrack.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Delete"></a>

### EllipticalCrack.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Duplicate"></a>

### EllipticalCrack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Equals"></a>

### EllipticalCrack.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetAPIName"></a>

### EllipticalCrack.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetAllProperties"></a>

### EllipticalCrack.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetChildren"></a>

### EllipticalCrack.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EllipticalCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetDetailsView"></a>

### EllipticalCrack.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetEnumName"></a>

### EllipticalCrack.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetHashCode"></a>

### EllipticalCrack.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetIconFile"></a>

### EllipticalCrack.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetLifetimeService"></a>

### EllipticalCrack.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetObjectData"></a>

### EllipticalCrack.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetParameter"></a>

### EllipticalCrack.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetPath"></a>

### EllipticalCrack.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetPropertyName"></a>

### EllipticalCrack.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetPropertyValue"></a>

### EllipticalCrack.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetVisibleProperties"></a>

### EllipticalCrack.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetVisiblePropertyNames"></a>

### EllipticalCrack.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GroupAllSimilarChildren"></a>

### EllipticalCrack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GroupSimilarObjects"></a>

### EllipticalCrack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.InitializeLifetimeService"></a>

### EllipticalCrack.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.IsPropertyEditable"></a>

### EllipticalCrack.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EllipticalCrack.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.IsPropertyVisible"></a>

### EllipticalCrack.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EllipticalCrack.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Paste"></a>

### EllipticalCrack.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.PropertyByAPIName"></a>

### EllipticalCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.PropertyById"></a>

### EllipticalCrack.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.PropertyByName"></a>

### EllipticalCrack.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.RemoveFromGroup"></a>

### EllipticalCrack.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.RemoveParameter"></a>

### EllipticalCrack.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

