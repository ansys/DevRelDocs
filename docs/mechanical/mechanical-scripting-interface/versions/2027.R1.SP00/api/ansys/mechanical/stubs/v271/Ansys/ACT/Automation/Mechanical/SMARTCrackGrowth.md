# `SMARTCrackGrowth`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SMARTCrackGrowth"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SMARTCrackGrowth(internalObject: Any)

<a id="SMARTCrackGrowth"></a>

### *class* SMARTCrackGrowth(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SMARTCrackGrowth.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SMARTCrackGrowth.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#SMARTCrackGrowth.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#SMARTCrackGrowth.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#SMARTCrackGrowth.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#SMARTCrackGrowth.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#SMARTCrackGrowth.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SMARTCrackGrowth.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SMARTCrackGrowth.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SMARTCrackGrowth.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#SMARTCrackGrowth.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#SMARTCrackGrowth.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#SMARTCrackGrowth.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SMARTCrackGrowth.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#SMARTCrackGrowth.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SMARTCrackGrowth.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#SMARTCrackGrowth.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#SMARTCrackGrowth.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SMARTCrackGrowth.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#SMARTCrackGrowth.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#SMARTCrackGrowth.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#SMARTCrackGrowth.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SMARTCrackGrowth.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#SMARTCrackGrowth.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SMARTCrackGrowth.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#SMARTCrackGrowth.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SMARTCrackGrowth.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#SMARTCrackGrowth.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SMARTCrackGrowth.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SMARTCrackGrowth.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SMARTCrackGrowth.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SMARTCrackGrowth.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SMARTCrackGrowth.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SMARTCrackGrowth.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#SMARTCrackGrowth.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#SMARTCrackGrowth.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#SMARTCrackGrowth.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#SMARTCrackGrowth.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SMARTCrackGrowth.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SMARTCrackGrowth.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| [`Analysis`](Analysis.md#Analysis)                                               | Gets the Analysis.                                                                                                              |
| [`AttachedRefs`](#SMARTCrackGrowth.AttachedRefs)                                 | AttachedRefs property.                                                                                                          |
| [`AutomaticTimeStepping`](#SMARTCrackGrowth.AutomaticTimeStepping)               | Gets or sets the AutomaticTimeStepping.                                                                                         |
| [`Children`](#SMARTCrackGrowth.Children)                                         | Gets the list of children.                                                                                                      |
| [`ClsId`](#SMARTCrackGrowth.ClsId)                                               | ClsId property.                                                                                                                 |
| [`CoefficientA`](#SMARTCrackGrowth.CoefficientA)                                 | Gets or sets the coefficient of first order term in the Richard function for the kink angle. Valid range: -180 to 180 Degrees.  |
| [`CoefficientB`](#SMARTCrackGrowth.CoefficientB)                                 | Gets or sets the coefficient of second order term in the Richard function for the kink angle. Valid range: -180 to 180 Degrees. |
| [`Comments`](#SMARTCrackGrowth.Comments)                                         | Gets the list of associated comments.                                                                                           |
| [`CrackGrowthLaw`](#SMARTCrackGrowth.CrackGrowthLaw)                             | Gets the CrackGrowthLaw.                                                                                                        |
| [`CrackGrowthMethodology`](#SMARTCrackGrowth.CrackGrowthMethodology)             | Gets or sets the CrackGrowthMethodology.                                                                                        |
| [`CrackGrowthOption`](#SMARTCrackGrowth.CrackGrowthOption)                       | Gets or sets the CrackGrowthOption.                                                                                             |
| [`CriticalRate`](#SMARTCrackGrowth.CriticalRate)                                 | Gets or sets the CriticalRate.                                                                                                  |
| [`DataModelObjectCategory`](#SMARTCrackGrowth.DataModelObjectCategory)           | Gets the current DataModelObject's category.                                                                                    |
| [`ElementSizeForCrackFront`](#SMARTCrackGrowth.ElementSizeForCrackFront)         | Gets or sets the ElementSizeForCrackFront.                                                                                      |
| [`ElementSizeForLocalRegion`](#SMARTCrackGrowth.ElementSizeForLocalRegion)       | Gets or sets the ElementSizeForLocalRegion.                                                                                     |
| [`EquivalentSIFMethod`](#SMARTCrackGrowth.EquivalentSIFMethod)                   | Gets or sets the Equivalent Stress Intensity Factor calculation method. Default: ProgramControlled                              |
| [`FactorAlpha1`](#SMARTCrackGrowth.FactorAlpha1)                                 | Gets or sets a positive multiplicative factor for K2 term in the equivalent SIF calculation function.                           |
| [`FactorAlpha2`](#SMARTCrackGrowth.FactorAlpha2)                                 | Gets or sets a positive multiplicative factor for K3 term in the equivalent SIF calculation function.                           |
| [`FailureCriteriaOption`](#SMARTCrackGrowth.FailureCriteriaOption)               | Gets or sets the FailureCriteriaOption.                                                                                         |
| [`Figures`](#SMARTCrackGrowth.Figures)                                           | Gets the list of associated figures.                                                                                            |
| [`GroupingFolder`](#SMARTCrackGrowth.GroupingFolder)                             | GroupingFolder property.                                                                                                        |
| [`IconName`](#SMARTCrackGrowth.IconName)                                         | IconName property.                                                                                                              |
| [`Images`](#SMARTCrackGrowth.Images)                                             | Gets the list of associated images.                                                                                             |
| [`ImportableObjectSourceId`](#SMARTCrackGrowth.ImportableObjectSourceId)         | ImportableObjectSourceId property.                                                                                              |
| [`IncrementEndValue`](#SMARTCrackGrowth.IncrementEndValue)                       | Gets or sets the IncrementEndValue.                                                                                             |
| [`IncrementMultiplier`](#SMARTCrackGrowth.IncrementMultiplier)                   | Gets or sets the IncrementMultiplier.                                                                                           |
| [`IncrementStartValue`](#SMARTCrackGrowth.IncrementStartValue)                   | Gets or sets the IncrementStartValue.                                                                                           |
| [`InitialCrack`](#SMARTCrackGrowth.InitialCrack)                                 | Gets or sets the InitialCrack.                                                                                                  |
| [`InitialTimeStep`](#SMARTCrackGrowth.InitialTimeStep)                           | Gets or sets the InitialTimeStep.                                                                                               |
| [`InternalObject`](#SMARTCrackGrowth.InternalObject)                             | Gets the internal object. For advanced usage only.                                                                              |
| [`KinkAngleInputType`](#SMARTCrackGrowth.KinkAngleInputType)                     | Gets or sets the kink angle input type for the SMART Crack Growth object. Default: ProgramControlled.                           |
| [`KinkAngleMethod`](#SMARTCrackGrowth.KinkAngleMethod)                           | Gets or sets the Kink Angle calculation method. Default: MaximumTangentialStress                                                |
| [`LocalRegionNamedSelection`](#SMARTCrackGrowth.LocalRegionNamedSelection)       | Gets or sets the LocalRegionNamedSelection.                                                                                     |
| [`LocalRegionType`](#SMARTCrackGrowth.LocalRegionType)                           | Gets or sets the LocalRegionType.                                                                                               |
| [`Material`](Material.md#Material)                                               | Gets or sets the Material.                                                                                                      |
| [`MaxIncrementOfCrackExtension`](#SMARTCrackGrowth.MaxIncrementOfCrackExtension) | Gets or sets the MaxIncrementOfCrackExtension.                                                                                  |
| [`MaxIncrementValue`](#SMARTCrackGrowth.MaxIncrementValue)                       | Gets or sets the MaxIncrementValue.                                                                                             |
| [`MaxIncrementValueTreatment`](#SMARTCrackGrowth.MaxIncrementValueTreatment)     | Gets or sets the treatment type for the specified value of MaxIncrementValue. Default: Absolute                                 |
| [`MaximumLimitAngle`](#SMARTCrackGrowth.MaximumLimitAngle)                       | Gets or sets the maximum kink angle limit. Valid range: 0 to 90 degrees (0 to π/2 radians).                                     |
| [`MaximumMultiplier`](#SMARTCrackGrowth.MaximumMultiplier)                       | Gets or sets the MaximumMultiplier.                                                                                             |
| [`MaximumTimeStep`](#SMARTCrackGrowth.MaximumTimeStep)                           | Gets or sets the MaximumTimeStep.                                                                                               |
| [`MeshCoarsening`](#SMARTCrackGrowth.MeshCoarsening)                             | Gets or sets the MeshCoarsening.                                                                                                |
| [`Method`](#SMARTCrackGrowth.Method)                                             | Gets the Method.                                                                                                                |
| [`MinIncrementControl`](#SMARTCrackGrowth.MinIncrementControl)                   | Gets or sets the control type for the smaller crack increment values.                                                           |
| [`MinIncrementOfCrackExtension`](#SMARTCrackGrowth.MinIncrementOfCrackExtension) | Gets or sets the MinIncrementOfCrackExtension.                                                                                  |
| [`MinIncrementValue`](#SMARTCrackGrowth.MinIncrementValue)                       | Gets or sets the MinIncrementValue.                                                                                             |
| [`MinIncrementValueTreatment`](#SMARTCrackGrowth.MinIncrementValueTreatment)     | Gets or sets the treatment type for the specified value of MinIncrementValue. Default: Absolute                                 |
| [`MinimumCutOffAngle`](#SMARTCrackGrowth.MinimumCutOffAngle)                     | Gets or sets the minimum kink angle cut-off. Valid range: 0 to 90 degrees (0 to π/2 radians).                                   |
| [`MinimumTimeStep`](#SMARTCrackGrowth.MinimumTimeStep)                           | Gets or sets the MinimumTimeStep.                                                                                               |
| [`MultiplicativeFactors`](#SMARTCrackGrowth.MultiplicativeFactors)               | Gets or sets the Multiplicative Factors Type for the Equivalent SIF Method. Default: ProgramControlled                          |
| [`Name`](#SMARTCrackGrowth.Name)                                                 | Name property.                                                                                                                  |
| [`NumberOfCycles`](#SMARTCrackGrowth.NumberOfCycles)                             | Gets or sets the NumberOfCycles.                                                                                                |
| [`ObjectId`](#SMARTCrackGrowth.ObjectId)                                         | ObjectId property.                                                                                                              |
| [`ObjectState`](#SMARTCrackGrowth.ObjectState)                                   | ObjectState property.                                                                                                           |
| [`ObjectTags`](#SMARTCrackGrowth.ObjectTags)                                     | ObjectTags property.                                                                                                            |
| [`Parent`](#SMARTCrackGrowth.Parent)                                             | Parent property.                                                                                                                |
| [`Properties`](#SMARTCrackGrowth.Properties)                                     | Gets the list of properties for this object.                                                                                    |
| [`ReadOnly`](#SMARTCrackGrowth.ReadOnly)                                         | Gets or sets the ReadOnly.                                                                                                      |
| [`RichardCoefficients`](#SMARTCrackGrowth.RichardCoefficients)                   | Gets or sets the Richard Coefficients Type for the Kink Angle Method. Default: ProgramControlled                                |
| [`State`](#SMARTCrackGrowth.State)                                               | State property.                                                                                                                 |
| [`StopAtMaxCrackExtensionValue`](#SMARTCrackGrowth.StopAtMaxCrackExtensionValue) | Gets or sets the StopAtMaxCrackExtensionValue.                                                                                  |
| [`StopCriterion`](#SMARTCrackGrowth.StopCriterion)                               | Gets or sets the StopCriterion.                                                                                                 |
| [`StopValue`](#SMARTCrackGrowth.StopValue)                                       | Gets or sets the StopValue.                                                                                                     |
| [`StressRatio`](Results/StressToolResults/StressRatio.md#StressRatio)            | Gets or sets the StressRatio.                                                                                                   |
| [`Suppressed`](#SMARTCrackGrowth.Suppressed)                                     | Gets or sets the Suppressed.                                                                                                    |
| [`TransferableObjectId`](#SMARTCrackGrowth.TransferableObjectId)                 | TransferableObjectId property.                                                                                                  |
| [`VisibleProperties`](#SMARTCrackGrowth.VisibleProperties)                       | Gets the list of properties that are visible for this object.                                                                   |

<a id="property-detail"></a>

## Property detail

<a id="SMARTCrackGrowth.Analysis"></a>

### *property* SMARTCrackGrowth.Analysis *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../Mechanical/DataModel/Enums/DelaminationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Analysis.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AttachedRefs"></a>

### *property* SMARTCrackGrowth.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AutomaticTimeStepping"></a>

### *property* SMARTCrackGrowth.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Children"></a>

### *property* SMARTCrackGrowth.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.ClsId"></a>

### *property* SMARTCrackGrowth.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CoefficientA"></a>

### *property* SMARTCrackGrowth.CoefficientA *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the coefficient of first order term in the Richard function for the kink angle. Valid range: -180 to 180 Degrees.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CoefficientB"></a>

### *property* SMARTCrackGrowth.CoefficientB *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the coefficient of second order term in the Richard function for the kink angle. Valid range: -180 to 180 Degrees.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Comments"></a>

### *property* SMARTCrackGrowth.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CrackGrowthLaw"></a>

### *property* SMARTCrackGrowth.CrackGrowthLaw *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackGrowthLaw.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CrackGrowthMethodology"></a>

### *property* SMARTCrackGrowth.CrackGrowthMethodology *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthMethodology](../../../Mechanical/DataModel/Enums/CrackGrowthMethodology.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackGrowthMethodology) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackGrowthMethodology.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CrackGrowthOption"></a>

### *property* SMARTCrackGrowth.CrackGrowthOption *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthOption](../../../Mechanical/DataModel/Enums/CrackGrowthOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackGrowthOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackGrowthOption.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CriticalRate"></a>

### *property* SMARTCrackGrowth.CriticalRate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.DataModelObjectCategory"></a>

### *property* SMARTCrackGrowth.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.ElementSizeForCrackFront"></a>

### *property* SMARTCrackGrowth.ElementSizeForCrackFront *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementSizeForCrackFront.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.ElementSizeForLocalRegion"></a>

### *property* SMARTCrackGrowth.ElementSizeForLocalRegion *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementSizeForLocalRegion.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.EquivalentSIFMethod"></a>

### *property* SMARTCrackGrowth.EquivalentSIFMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.EquivalentSIFMethod](../../../Mechanical/DataModel/MechanicalEnums/SMARTCrackGrowth/EquivalentSIFMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.EquivalentSIFMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Equivalent Stress Intensity Factor calculation method. Default: ProgramControlled

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.FactorAlpha1"></a>

### *property* SMARTCrackGrowth.FactorAlpha1 *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets a positive multiplicative factor for K2 term in the equivalent SIF calculation function.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.FactorAlpha2"></a>

### *property* SMARTCrackGrowth.FactorAlpha2 *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets a positive multiplicative factor for K3 term in the equivalent SIF calculation function.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.FailureCriteriaOption"></a>

### *property* SMARTCrackGrowth.FailureCriteriaOption *: [Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption](../../../Mechanical/DataModel/Enums/DelaminationFailureCriteriaOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FailureCriteriaOption.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Figures"></a>

### *property* SMARTCrackGrowth.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GroupingFolder"></a>

### *property* SMARTCrackGrowth.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.IconName"></a>

### *property* SMARTCrackGrowth.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Images"></a>

### *property* SMARTCrackGrowth.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.ImportableObjectSourceId"></a>

### *property* SMARTCrackGrowth.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.IncrementEndValue"></a>

### *property* SMARTCrackGrowth.IncrementEndValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IncrementEndValue.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.IncrementMultiplier"></a>

### *property* SMARTCrackGrowth.IncrementMultiplier *: Ansys.Mechanical.DataModel.Enums.IncrementMultiplier | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IncrementMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.IncrementStartValue"></a>

### *property* SMARTCrackGrowth.IncrementStartValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IncrementStartValue.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.InitialCrack"></a>

### *property* SMARTCrackGrowth.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.InitialTimeStep"></a>

### *property* SMARTCrackGrowth.InitialTimeStep *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.InternalObject"></a>

### *property* SMARTCrackGrowth.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.KinkAngleInputType"></a>

### *property* SMARTCrackGrowth.KinkAngleInputType *: [Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.KinkAngleInputType](../../../Mechanical/DataModel/MechanicalEnums/SMARTCrackGrowth/KinkAngleInputType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.KinkAngleInputType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the kink angle input type for the SMART Crack Growth object. Default: ProgramControlled.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.KinkAngleMethod"></a>

### *property* SMARTCrackGrowth.KinkAngleMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.EquivalentSIFMethod](../../../Mechanical/DataModel/MechanicalEnums/SMARTCrackGrowth/EquivalentSIFMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.EquivalentSIFMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Kink Angle calculation method. Default: MaximumTangentialStress

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.LocalRegionNamedSelection"></a>

### *property* SMARTCrackGrowth.LocalRegionNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocalRegionNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.LocalRegionType"></a>

### *property* SMARTCrackGrowth.LocalRegionType *: Ansys.Mechanical.DataModel.Enums.LocalRegionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocalRegionType.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Material"></a>

### *property* SMARTCrackGrowth.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MaxIncrementOfCrackExtension"></a>

### *property* SMARTCrackGrowth.MaxIncrementOfCrackExtension *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType](../../../Mechanical/DataModel/Enums/CrackGrowthIncrementType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaxIncrementOfCrackExtension.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MaxIncrementValue"></a>

### *property* SMARTCrackGrowth.MaxIncrementValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaxIncrementValue.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MaxIncrementValueTreatment"></a>

### *property* SMARTCrackGrowth.MaxIncrementValueTreatment *: [Ansys.Mechanical.DataModel.Enums.IncrementTreatment](../../../Mechanical/DataModel/Enums/IncrementTreatment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.IncrementTreatment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the treatment type for the specified value of MaxIncrementValue. Default: Absolute

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MaximumLimitAngle"></a>

### *property* SMARTCrackGrowth.MaximumLimitAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum kink angle limit. Valid range: 0 to 90 degrees (0 to π/2 radians).
It defines an upper bound for the kink angle. If the computed angle exceeds this value, the solver clamps it to the specified maximum value.
This property can be set when the KinkAngleInputType is either 'MaximumLimitOnly' or 'MinimumAndMaximum'.
Throws an ArgumentException if the type is unsupported, or if the angle is out of valid range, or MaximumLimitAngle is less than MinimumCutOffAngle for the 'MinimumAndMaximum' setting.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MaximumMultiplier"></a>

### *property* SMARTCrackGrowth.MaximumMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MaximumTimeStep"></a>

### *property* SMARTCrackGrowth.MaximumTimeStep *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MeshCoarsening"></a>

### *property* SMARTCrackGrowth.MeshCoarsening *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthMeshCoarsening](../../../Mechanical/DataModel/Enums/CrackGrowthMeshCoarsening.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackGrowthMeshCoarsening) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshCoarsening.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Method"></a>

### *property* SMARTCrackGrowth.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../Mechanical/DataModel/Enums/DelaminationMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MinIncrementControl"></a>

### *property* SMARTCrackGrowth.MinIncrementControl *: [Ansys.Mechanical.DataModel.Enums.IncrementControl](../../../Mechanical/DataModel/Enums/IncrementControl.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.IncrementControl) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the control type for the smaller crack increment values.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MinIncrementOfCrackExtension"></a>

### *property* SMARTCrackGrowth.MinIncrementOfCrackExtension *: [Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType](../../../Mechanical/DataModel/Enums/CrackGrowthIncrementType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackGrowthIncrementType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinIncrementOfCrackExtension.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MinIncrementValue"></a>

### *property* SMARTCrackGrowth.MinIncrementValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinIncrementValue.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MinIncrementValueTreatment"></a>

### *property* SMARTCrackGrowth.MinIncrementValueTreatment *: [Ansys.Mechanical.DataModel.Enums.IncrementTreatment](../../../Mechanical/DataModel/Enums/IncrementTreatment.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.IncrementTreatment) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the treatment type for the specified value of MinIncrementValue. Default: Absolute

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MinimumCutOffAngle"></a>

### *property* SMARTCrackGrowth.MinimumCutOffAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum kink angle cut-off. Valid range: 0 to 90 degrees (0 to π/2 radians).
It defines a lower threshold for kink angle. If the computed angle is less than this value, the solver resets the angle to zero.
This property can be set when the KinkAngleInputType is either 'MinimumCutOffOnly' or 'MinimumAndMaximum'.
Throws an ArgumentException if the type is unsupported, or if the angle is out of valid range, or MinimumCutOffAngle is greater than MaximumLimitAngle for the 'MinimumAndMaximum' setting.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MinimumTimeStep"></a>

### *property* SMARTCrackGrowth.MinimumTimeStep *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.MultiplicativeFactors"></a>

### *property* SMARTCrackGrowth.MultiplicativeFactors *: [Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.MultiplicativeFactorsType](../../../Mechanical/DataModel/MechanicalEnums/SMARTCrackGrowth/MultiplicativeFactorsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.MultiplicativeFactorsType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Multiplicative Factors Type for the Equivalent SIF Method. Default: ProgramControlled

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Name"></a>

### *property* SMARTCrackGrowth.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.NumberOfCycles"></a>

### *property* SMARTCrackGrowth.NumberOfCycles *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfCycles.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.ObjectId"></a>

### *property* SMARTCrackGrowth.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.ObjectState"></a>

### *property* SMARTCrackGrowth.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.ObjectTags"></a>

### *property* SMARTCrackGrowth.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Parent"></a>

### *property* SMARTCrackGrowth.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Properties"></a>

### *property* SMARTCrackGrowth.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.ReadOnly"></a>

### *property* SMARTCrackGrowth.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.RichardCoefficients"></a>

### *property* SMARTCrackGrowth.RichardCoefficients *: [Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.RichardCoefficientsType](../../../Mechanical/DataModel/MechanicalEnums/SMARTCrackGrowth/RichardCoefficientsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.SMARTCrackGrowth.RichardCoefficientsType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Richard Coefficients Type for the Kink Angle Method. Default: ProgramControlled

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.State"></a>

### *property* SMARTCrackGrowth.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.StopAtMaxCrackExtensionValue"></a>

### *property* SMARTCrackGrowth.StopAtMaxCrackExtensionValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StopAtMaxCrackExtensionValue.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.StopCriterion"></a>

### *property* SMARTCrackGrowth.StopCriterion *: [Ansys.Mechanical.DataModel.Enums.StopCriterion](../../../Mechanical/DataModel/Enums/StopCriterion.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StopCriterion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StopCriterion.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.StopValue"></a>

### *property* SMARTCrackGrowth.StopValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StopValue.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.StressRatio"></a>

### *property* SMARTCrackGrowth.StressRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressRatio.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Suppressed"></a>

### *property* SMARTCrackGrowth.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.TransferableObjectId"></a>

### *property* SMARTCrackGrowth.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.VisibleProperties"></a>

### *property* SMARTCrackGrowth.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SMARTCrackGrowth.Activate"></a>

### SMARTCrackGrowth.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AddCommandSnippet"></a>

### SMARTCrackGrowth.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AddComment"></a>

### SMARTCrackGrowth.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AddFigure"></a>

### SMARTCrackGrowth.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.AddImage"></a>

### SMARTCrackGrowth.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Copy"></a>

### SMARTCrackGrowth.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CopyTo"></a>

### SMARTCrackGrowth.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CreateObjRef"></a>

### SMARTCrackGrowth.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.CreateParameter"></a>

### SMARTCrackGrowth.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Cut"></a>

### SMARTCrackGrowth.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Delete"></a>

### SMARTCrackGrowth.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Duplicate"></a>

### SMARTCrackGrowth.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Equals"></a>

### SMARTCrackGrowth.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetAPIName"></a>

### SMARTCrackGrowth.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetAllProperties"></a>

### SMARTCrackGrowth.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetChildren"></a>

### SMARTCrackGrowth.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SMARTCrackGrowth.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetDetailsView"></a>

### SMARTCrackGrowth.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetEnumName"></a>

### SMARTCrackGrowth.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetHashCode"></a>

### SMARTCrackGrowth.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetIconFile"></a>

### SMARTCrackGrowth.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetLifetimeService"></a>

### SMARTCrackGrowth.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetObjectData"></a>

### SMARTCrackGrowth.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetParameter"></a>

### SMARTCrackGrowth.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetPath"></a>

### SMARTCrackGrowth.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetPropertyName"></a>

### SMARTCrackGrowth.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetPropertyValue"></a>

### SMARTCrackGrowth.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetVisibleProperties"></a>

### SMARTCrackGrowth.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GetVisiblePropertyNames"></a>

### SMARTCrackGrowth.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GroupAllSimilarChildren"></a>

### SMARTCrackGrowth.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.GroupSimilarObjects"></a>

### SMARTCrackGrowth.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.InitializeLifetimeService"></a>

### SMARTCrackGrowth.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.IsPropertyEditable"></a>

### SMARTCrackGrowth.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SMARTCrackGrowth.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.IsPropertyVisible"></a>

### SMARTCrackGrowth.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SMARTCrackGrowth.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.Paste"></a>

### SMARTCrackGrowth.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.PropertyByAPIName"></a>

### SMARTCrackGrowth.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.PropertyById"></a>

### SMARTCrackGrowth.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.PropertyByName"></a>

### SMARTCrackGrowth.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.RemoveFromGroup"></a>

### SMARTCrackGrowth.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SMARTCrackGrowth.RemoveParameter"></a>

### SMARTCrackGrowth.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

