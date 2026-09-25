# Enum EntityType
<a id="VM_Models_Post_EntityType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Identifies the kind of entity loaded from a result document, used to classify and filter entities exposed through [`IEntityBaseViewModel`](VM.ViewModels.Post.IEntityBaseViewModel.md).

```csharp
public enum EntityType
```

## Fields

`Actuator` 

Identifies an actuator entity.



`AssemblyInfo` 

Identifies an assembly information entity that describes a drivetrain assembly.



`AssemblyManager` 

Identifies an assembly manager entity that groups the drivetrain components it manages.



`BeamGroup` 

Identifies a beam group entity.



`BearingSet` 

Identifies a bearing set entity in a drivetrain.



`Body` 

Identifies a body entity.



`CSYS` 

Identifies a coordinate system entity.



`ChainedSystem` 

Identifies a chained system entity.



`Constraint` 

Identifies a constraint entity.



`Contact` 

Identifies a contact entity.



`Contour` 

Identifies a contour entity created for a body or other contourable target.



`DataElementSet` 

Identifies a data element set entity used to group finite element results for display.



`EasyFlexEntity` 

Identifies an EasyFlex entity.



`Element` 

Identifies a finite element entity.



`ElementSet` 

Identifies an element set entity that groups finite elements.



`Expression` 

Identifies an expression entity whose values are calculated from a user-defined function.



`FEProperty` 

Identifies a finite element property entity.



`FODEquation` 

Identifies a first-order differential equation entity.



`FatigueMaterial` 

Identifies a fatigue material entity used for fatigue analysis.



`Force` 

Identifies a force entity.



`Frequency` 

Identifies a frequency entity produced by an eigenvalue analysis.



`FrequencySequence` 

Identifies a frequency sequence entity.



`FrequencyTime` 

Identifies a frequency time entity.



`GearPair` 

Identifies a gear pair entity in a drivetrain.



`GearSet` 

Identifies a gear set entity in a drivetrain.



`InputChannel` 

Identifies an input channel entity.



`Marker` 

Identifies a marker entity.



`Material` 

Identifies a material entity.



`NamedSelection` 

Identifies a named selection entity.



`Node` 

Identifies a node entity of a finite element body.



`OutputChannel` 

Identifies an output channel entity.



`PythonExpression` 

Identifies a Python expression entity whose values are calculated from a user-defined Python script.



`Request` 

Identifies a request entity.



`SInput` 

Identifies a signal input entity.



`SODEquation` 

Identifies a second-order differential equation entity.



`SOutput` 

Identifies a signal output entity.



`SeaLevel` 

Identifies a sea level entity used as a reference plane for buoyancy or wave results.



`ShaftSet` 

Identifies a shaft set entity in a drivetrain.



`Spline` 

Identifies a spline entity.



`Unknown` 

The entity could not be classified as any other known kind.



`UserSubroutine` 

Identifies a user subroutine entity whose values are calculated from user-supplied code.



`VariableEquation` 

Identifies a variable equation entity.



`VectorDisplay` 

Identifies a vector display entity created to show vector results in an animation.



`VehicleRoad` 

Identifies a vehicle road entity that provides road geometry for contouring.


