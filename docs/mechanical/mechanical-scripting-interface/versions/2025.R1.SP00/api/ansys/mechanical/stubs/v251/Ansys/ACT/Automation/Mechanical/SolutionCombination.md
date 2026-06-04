# `SolutionCombination`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SolutionCombination"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SolutionCombination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SolutionCombination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SolutionCombination.Activate)                                                       | Activate the current object.                                                      |
| [`AddBeamTool`](#SolutionCombination.AddBeamTool)                                                 | Creates a new BeamTool                                                            |
| [`AddComment`](#SolutionCombination.AddComment)                                                   | Creates a new child Comment.                                                      |
| [`AddCompositeFailureTool`](#SolutionCombination.AddCompositeFailureTool)                         | Creates a new CompositeFailureTool                                                |
| [`AddContactTool`](#SolutionCombination.AddContactTool)                                           | Creates a new ContactTool                                                         |
| [`AddDirectionalAcceleration`](#SolutionCombination.AddDirectionalAcceleration)                   | Creates a new DirectionalAcceleration                                             |
| [`AddDirectionalAxialForce`](#SolutionCombination.AddDirectionalAxialForce)                       | Creates a new DirectionalAxialForce                                               |
| [`AddDirectionalBendingMoment`](#SolutionCombination.AddDirectionalBendingMoment)                 | Creates a new DirectionalBendingMoment                                            |
| [`AddDirectionalDeformation`](#SolutionCombination.AddDirectionalDeformation)                     | Creates a new DirectionalDeformation                                              |
| [`AddDirectionalShearForce`](#SolutionCombination.AddDirectionalShearForce)                       | Creates a new DirectionalShearForce                                               |
| [`AddDirectionalTorsionalMoment`](#SolutionCombination.AddDirectionalTorsionalMoment)             | Creates a new DirectionalTorsionalMoment                                          |
| [`AddDirectionalVelocity`](#SolutionCombination.AddDirectionalVelocity)                           | Creates a new DirectionalVelocity                                                 |
| [`AddElasticStrainIntensity`](#SolutionCombination.AddElasticStrainIntensity)                     | Creates a new ElasticStrainIntensity                                              |
| [`AddEquivalentElasticStrain`](#SolutionCombination.AddEquivalentElasticStrain)                   | Creates a new EquivalentElasticStrain                                             |
| [`AddEquivalentElasticStrainRST`](#SolutionCombination.AddEquivalentElasticStrainRST)             | Creates a new EquivalentElasticStrainRST                                          |
| [`AddEquivalentStress`](#SolutionCombination.AddEquivalentStress)                                 | Creates a new EquivalentStress                                                    |
| [`AddEquivalentTotalStrain`](#SolutionCombination.AddEquivalentTotalStrain)                       | Creates a new EquivalentTotalStrain                                               |
| [`AddFatigueTool`](#SolutionCombination.AddFatigueTool)                                           | Creates a new FatigueTool                                                         |
| [`AddImage`](#SolutionCombination.AddImage)                                                       | Creates a new child Image.                                                        |
| [`AddLinearizedEquivalentStress`](#SolutionCombination.AddLinearizedEquivalentStress)             | Creates a new LinearizedEquivalentStress                                          |
| [`AddLinearizedMaximumPrincipalStress`](#SolutionCombination.AddLinearizedMaximumPrincipalStress) | Creates a new LinearizedMaximumPrincipalStress                                    |
| [`AddLinearizedMaximumShearStress`](#SolutionCombination.AddLinearizedMaximumShearStress)         | Creates a new LinearizedMaximumShearStress                                        |
| [`AddLinearizedMiddlePrincipalStress`](#SolutionCombination.AddLinearizedMiddlePrincipalStress)   | Creates a new LinearizedMiddlePrincipalStress                                     |
| [`AddLinearizedMinimumPrincipalStress`](#SolutionCombination.AddLinearizedMinimumPrincipalStress) | Creates a new LinearizedMinimumPrincipalStress                                    |
| [`AddLinearizedNormalStress`](#SolutionCombination.AddLinearizedNormalStress)                     | Creates a new LinearizedNormalStress                                              |
| [`AddLinearizedShearStress`](#SolutionCombination.AddLinearizedShearStress)                       | Creates a new LinearizedShearStress                                               |
| [`AddLinearizedStressIntensity`](#SolutionCombination.AddLinearizedStressIntensity)               | Creates a new LinearizedStressIntensity                                           |
| [`AddMaximumPrincipalElasticStrain`](#SolutionCombination.AddMaximumPrincipalElasticStrain)       | Creates a new MaximumPrincipalElasticStrain                                       |
| [`AddMaximumPrincipalStress`](#SolutionCombination.AddMaximumPrincipalStress)                     | Creates a new MaximumPrincipalStress                                              |
| [`AddMaximumShearElasticStrain`](#SolutionCombination.AddMaximumShearElasticStrain)               | Creates a new MaximumShearElasticStrain                                           |
| [`AddMaximumShearStress`](#SolutionCombination.AddMaximumShearStress)                             | Creates a new MaximumShearStress                                                  |
| [`AddMiddlePrincipalElasticStrain`](#SolutionCombination.AddMiddlePrincipalElasticStrain)         | Creates a new MiddlePrincipalElasticStrain                                        |
| [`AddMiddlePrincipalStress`](#SolutionCombination.AddMiddlePrincipalStress)                       | Creates a new MiddlePrincipalStress                                               |
| [`AddMinimumPrincipalElasticStrain`](#SolutionCombination.AddMinimumPrincipalElasticStrain)       | Creates a new MinimumPrincipalElasticStrain                                       |
| [`AddMinimumPrincipalStress`](#SolutionCombination.AddMinimumPrincipalStress)                     | Creates a new MinimumPrincipalStress                                              |
| [`AddNormalElasticStrain`](#SolutionCombination.AddNormalElasticStrain)                           | Creates a new NormalElasticStrain                                                 |
| [`AddNormalStress`](#SolutionCombination.AddNormalStress)                                         | Creates a new NormalStress                                                        |
| [`AddShearElasticStrain`](#SolutionCombination.AddShearElasticStrain)                             | Creates a new ShearElasticStrain                                                  |
| [`AddShearMomentDiagramMSUM`](#SolutionCombination.AddShearMomentDiagramMSUM)                     | Creates a new TotalShearMomentDiagram                                             |
| [`AddShearMomentDiagramMY`](#SolutionCombination.AddShearMomentDiagramMY)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramMZ`](#SolutionCombination.AddShearMomentDiagramMZ)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramUSUM`](#SolutionCombination.AddShearMomentDiagramUSUM)                     | Creates a new TotalShearMomentDiagram                                             |
| [`AddShearMomentDiagramUY`](#SolutionCombination.AddShearMomentDiagramUY)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramUZ`](#SolutionCombination.AddShearMomentDiagramUZ)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramVSUM`](#SolutionCombination.AddShearMomentDiagramVSUM)                     | Creates a new TotalShearMomentDiagram                                             |
| [`AddShearMomentDiagramVY`](#SolutionCombination.AddShearMomentDiagramVY)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearMomentDiagramVZ`](#SolutionCombination.AddShearMomentDiagramVZ)                         | Creates a new DirectionalShearMomentDiagram                                       |
| [`AddShearStress`](#SolutionCombination.AddShearStress)                                           | Creates a new ShearStress                                                         |
| [`AddStressIntensity`](#SolutionCombination.AddStressIntensity)                                   | Creates a new StressIntensity                                                     |
| [`AddStressTool`](#SolutionCombination.AddStressTool)                                             | Creates a new StressTool                                                          |
| [`AddTotalAcceleration`](#SolutionCombination.AddTotalAcceleration)                               | Creates a new TotalAcceleration                                                   |
| [`AddTotalAxialForce`](#SolutionCombination.AddTotalAxialForce)                                   | Creates a new TotalAxialForce                                                     |
| [`AddTotalBendingMoment`](#SolutionCombination.AddTotalBendingMoment)                             | Creates a new TotalBendingMoment                                                  |
| [`AddTotalDeformation`](#SolutionCombination.AddTotalDeformation)                                 | Creates a new TotalDeformation                                                    |
| [`AddTotalShearForce`](#SolutionCombination.AddTotalShearForce)                                   | Creates a new TotalShearForce                                                     |
| [`AddTotalTorsionalMoment`](#SolutionCombination.AddTotalTorsionalMoment)                         | Creates a new TotalTorsionalMoment                                                |
| [`AddTotalVelocity`](#SolutionCombination.AddTotalVelocity)                                       | Creates a new TotalVelocity                                                       |
| [`AddUserDefinedResult`](#SolutionCombination.AddUserDefinedResult)                               | Creates a new UserDefinedResult                                                   |
| [`AddVectorAxialForce`](#SolutionCombination.AddVectorAxialForce)                                 | Creates a new VectorAxialForce                                                    |
| [`AddVectorBendingMoment`](#SolutionCombination.AddVectorBendingMoment)                           | Creates a new VectorBendingMoment                                                 |
| [`AddVectorPrincipalElasticStrain`](#SolutionCombination.AddVectorPrincipalElasticStrain)         | Creates a new VectorPrincipalElasticStrain                                        |
| [`AddVectorPrincipalStress`](#SolutionCombination.AddVectorPrincipalStress)                       | Creates a new VectorPrincipalStress                                               |
| [`AddVectorShearForce`](#SolutionCombination.AddVectorShearForce)                                 | Creates a new VectorShearForce                                                    |
| [`AddVectorTorsionalMoment`](#SolutionCombination.AddVectorTorsionalMoment)                       | Creates a new VectorTorsionalMoment                                               |
| [`ClearGeneratedData`](#SolutionCombination.ClearGeneratedData)                                   | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#SolutionCombination.CopyTo)                                                           | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SolutionCombination.CreateParameter)                                         | Creates a new parameter for a Property.                                           |
| [`Delete`](#SolutionCombination.Delete)                                                           | Run the Delete action.                                                            |
| [`Duplicate`](#SolutionCombination.Duplicate)                                                     | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#SolutionCombination.EvaluateAllResults)                                   | Run the EvaluateAllResults action.                                                |
| [`GetChildren`](#SolutionCombination.GetChildren)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SolutionCombination.GetParameter)                                               | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SolutionCombination.GroupAllSimilarChildren)                         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SolutionCombination.GroupSimilarObjects)                                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#SolutionCombination.PropertyByAPIName)                                     | Get a property by its API name.                                                   |
| [`PropertyByName`](#SolutionCombination.PropertyByName)                                           | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SolutionCombination.RemoveParameter)                                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| [`Children`](#SolutionCombination.Children)                               | Gets the list of children.                                                                                                                  |
| [`Comments`](#SolutionCombination.Comments)                               | Gets the list of associated comments.                                                                                                       |
| [`DataModelObjectCategory`](#SolutionCombination.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                |
| [`Definition`](#SolutionCombination.Definition)                           | Get the SolutionCombinationDefinition object.                                                                                               |
| [`EnvelopeType`](#SolutionCombination.EnvelopeType)                       | Gets or sets the Envelope Type. Default: F:Ansys.Mechanical.DataModel.MechanicalEnums.SolutionCombination.EnvelopeType.Maximum              |
| [`Images`](#SolutionCombination.Images)                                   | Gets the list of associated images.                                                                                                         |
| [`InternalObject`](#SolutionCombination.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                          |
| [`Properties`](#SolutionCombination.Properties)                           | Gets the list of properties for this object.                                                                                                |
| [`Type`](#SolutionCombination.Type)                                       | Gets or sets the Solution Combination Type. Default: F:Ansys.Mechanical.DataModel.MechanicalEnums.SolutionCombination.Type.LoadCombinations |
| [`VisibleProperties`](#SolutionCombination.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="SolutionCombination.Children"></a>

### *property* SolutionCombination.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Comments"></a>

### *property* SolutionCombination.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.DataModelObjectCategory"></a>

### *property* SolutionCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Definition"></a>

### *property* SolutionCombination.Definition *: [Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition](SolutionCombinationDefinition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SolutionCombinationDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the SolutionCombinationDefinition object.
: This object contains all the Solution Combination data like Base Cases, Load Combinations and Coefficients.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.EnvelopeType"></a>

### *property* SolutionCombination.EnvelopeType *: [Ansys.Mechanical.DataModel.MechanicalEnums.SolutionCombination.EnvelopeType](../../../Mechanical/DataModel/MechanicalEnums/SolutionCombination/EnvelopeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.SolutionCombination.EnvelopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Envelope Type. Default: F:Ansys.Mechanical.DataModel.MechanicalEnums.SolutionCombination.EnvelopeType.Maximum

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Images"></a>

### *property* SolutionCombination.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.InternalObject"></a>

### *property* SolutionCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolutionCombinationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Properties"></a>

### *property* SolutionCombination.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Type"></a>

### *property* SolutionCombination.Type *: [Ansys.Mechanical.DataModel.MechanicalEnums.SolutionCombination.Type](../../../Mechanical/DataModel/MechanicalEnums/SolutionCombination/Type.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.SolutionCombination.Type) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Solution Combination Type. Default: F:Ansys.Mechanical.DataModel.MechanicalEnums.SolutionCombination.Type.LoadCombinations

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.VisibleProperties"></a>

### *property* SolutionCombination.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SolutionCombination.Activate"></a>

### SolutionCombination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddBeamTool"></a>

### SolutionCombination.AddBeamTool()

Creates a new BeamTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddComment"></a>

### SolutionCombination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddCompositeFailureTool"></a>

### SolutionCombination.AddCompositeFailureTool()

Creates a new CompositeFailureTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddContactTool"></a>

### SolutionCombination.AddContactTool()

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalAcceleration"></a>

### SolutionCombination.AddDirectionalAcceleration()

Creates a new DirectionalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalAxialForce"></a>

### SolutionCombination.AddDirectionalAxialForce()

Creates a new DirectionalAxialForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalBendingMoment"></a>

### SolutionCombination.AddDirectionalBendingMoment()

Creates a new DirectionalBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalDeformation"></a>

### SolutionCombination.AddDirectionalDeformation()

Creates a new DirectionalDeformation

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalShearForce"></a>

### SolutionCombination.AddDirectionalShearForce()

Creates a new DirectionalShearForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalTorsionalMoment"></a>

### SolutionCombination.AddDirectionalTorsionalMoment()

Creates a new DirectionalTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddDirectionalVelocity"></a>

### SolutionCombination.AddDirectionalVelocity()

Creates a new DirectionalVelocity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddElasticStrainIntensity"></a>

### SolutionCombination.AddElasticStrainIntensity()

Creates a new ElasticStrainIntensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddEquivalentElasticStrain"></a>

### SolutionCombination.AddEquivalentElasticStrain()

Creates a new EquivalentElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddEquivalentElasticStrainRST"></a>

### SolutionCombination.AddEquivalentElasticStrainRST()

Creates a new EquivalentElasticStrainRST

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddEquivalentStress"></a>

### SolutionCombination.AddEquivalentStress()

Creates a new EquivalentStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddEquivalentTotalStrain"></a>

### SolutionCombination.AddEquivalentTotalStrain()

Creates a new EquivalentTotalStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddFatigueTool"></a>

### SolutionCombination.AddFatigueTool()

Creates a new FatigueTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddImage"></a>

### SolutionCombination.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedEquivalentStress"></a>

### SolutionCombination.AddLinearizedEquivalentStress()

Creates a new LinearizedEquivalentStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedMaximumPrincipalStress"></a>

### SolutionCombination.AddLinearizedMaximumPrincipalStress()

Creates a new LinearizedMaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedMaximumShearStress"></a>

### SolutionCombination.AddLinearizedMaximumShearStress()

Creates a new LinearizedMaximumShearStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedMiddlePrincipalStress"></a>

### SolutionCombination.AddLinearizedMiddlePrincipalStress()

Creates a new LinearizedMiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedMinimumPrincipalStress"></a>

### SolutionCombination.AddLinearizedMinimumPrincipalStress()

Creates a new LinearizedMinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedNormalStress"></a>

### SolutionCombination.AddLinearizedNormalStress()

Creates a new LinearizedNormalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedShearStress"></a>

### SolutionCombination.AddLinearizedShearStress()

Creates a new LinearizedShearStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddLinearizedStressIntensity"></a>

### SolutionCombination.AddLinearizedStressIntensity()

Creates a new LinearizedStressIntensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMaximumPrincipalElasticStrain"></a>

### SolutionCombination.AddMaximumPrincipalElasticStrain()

Creates a new MaximumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMaximumPrincipalStress"></a>

### SolutionCombination.AddMaximumPrincipalStress()

Creates a new MaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMaximumShearElasticStrain"></a>

### SolutionCombination.AddMaximumShearElasticStrain()

Creates a new MaximumShearElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMaximumShearStress"></a>

### SolutionCombination.AddMaximumShearStress()

Creates a new MaximumShearStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMiddlePrincipalElasticStrain"></a>

### SolutionCombination.AddMiddlePrincipalElasticStrain()

Creates a new MiddlePrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMiddlePrincipalStress"></a>

### SolutionCombination.AddMiddlePrincipalStress()

Creates a new MiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMinimumPrincipalElasticStrain"></a>

### SolutionCombination.AddMinimumPrincipalElasticStrain()

Creates a new MinimumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddMinimumPrincipalStress"></a>

### SolutionCombination.AddMinimumPrincipalStress()

Creates a new MinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddNormalElasticStrain"></a>

### SolutionCombination.AddNormalElasticStrain()

Creates a new NormalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddNormalStress"></a>

### SolutionCombination.AddNormalStress()

Creates a new NormalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearElasticStrain"></a>

### SolutionCombination.AddShearElasticStrain()

Creates a new ShearElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramMSUM"></a>

### SolutionCombination.AddShearMomentDiagramMSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramMY"></a>

### SolutionCombination.AddShearMomentDiagramMY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramMZ"></a>

### SolutionCombination.AddShearMomentDiagramMZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramUSUM"></a>

### SolutionCombination.AddShearMomentDiagramUSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramUY"></a>

### SolutionCombination.AddShearMomentDiagramUY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramUZ"></a>

### SolutionCombination.AddShearMomentDiagramUZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramVSUM"></a>

### SolutionCombination.AddShearMomentDiagramVSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramVY"></a>

### SolutionCombination.AddShearMomentDiagramVY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearMomentDiagramVZ"></a>

### SolutionCombination.AddShearMomentDiagramVZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddShearStress"></a>

### SolutionCombination.AddShearStress()

Creates a new ShearStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddStressIntensity"></a>

### SolutionCombination.AddStressIntensity()

Creates a new StressIntensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddStressTool"></a>

### SolutionCombination.AddStressTool()

Creates a new StressTool

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalAcceleration"></a>

### SolutionCombination.AddTotalAcceleration()

Creates a new TotalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalAxialForce"></a>

### SolutionCombination.AddTotalAxialForce()

Creates a new TotalAxialForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalBendingMoment"></a>

### SolutionCombination.AddTotalBendingMoment()

Creates a new TotalBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalDeformation"></a>

### SolutionCombination.AddTotalDeformation()

Creates a new TotalDeformation

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalShearForce"></a>

### SolutionCombination.AddTotalShearForce()

Creates a new TotalShearForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalTorsionalMoment"></a>

### SolutionCombination.AddTotalTorsionalMoment()

Creates a new TotalTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddTotalVelocity"></a>

### SolutionCombination.AddTotalVelocity()

Creates a new TotalVelocity

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddUserDefinedResult"></a>

### SolutionCombination.AddUserDefinedResult()

Creates a new UserDefinedResult

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorAxialForce"></a>

### SolutionCombination.AddVectorAxialForce()

Creates a new VectorAxialForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorBendingMoment"></a>

### SolutionCombination.AddVectorBendingMoment()

Creates a new VectorBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorPrincipalElasticStrain"></a>

### SolutionCombination.AddVectorPrincipalElasticStrain()

Creates a new VectorPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorPrincipalStress"></a>

### SolutionCombination.AddVectorPrincipalStress()

Creates a new VectorPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorShearForce"></a>

### SolutionCombination.AddVectorShearForce()

Creates a new VectorShearForce

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.AddVectorTorsionalMoment"></a>

### SolutionCombination.AddVectorTorsionalMoment()

Creates a new VectorTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.ClearGeneratedData"></a>

### SolutionCombination.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.CopyTo"></a>

### SolutionCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.CreateParameter"></a>

### SolutionCombination.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Delete"></a>

### SolutionCombination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.Duplicate"></a>

### SolutionCombination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.EvaluateAllResults"></a>

### SolutionCombination.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.GetChildren"></a>

### SolutionCombination.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.GetParameter"></a>

### SolutionCombination.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.GroupAllSimilarChildren"></a>

### SolutionCombination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.GroupSimilarObjects"></a>

### SolutionCombination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.PropertyByAPIName"></a>

### SolutionCombination.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.PropertyByName"></a>

### SolutionCombination.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SolutionCombination.RemoveParameter"></a>

### SolutionCombination.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

