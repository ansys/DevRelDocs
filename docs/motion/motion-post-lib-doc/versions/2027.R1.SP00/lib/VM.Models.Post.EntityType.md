# Enum EntityType
<a id="VM_Models_Post_EntityType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Identifies the kind of entity loaded from a result document, used to classify and filter entities exposed through [`IEntityBaseViewModel`](VM.ViewModels.Post.IEntityBaseViewModel.md).

```csharp
public enum EntityType
```

## Fields

`Actuator = 1` 

Identifies an actuator entity.



`AssemblyInfo = 2` 

Identifies an assembly information entity that describes a drivetrain assembly.



`AssemblyManager = 3` 

Identifies an assembly manager entity that groups the drivetrain components it manages.



`BeamGroup = 4` 

Identifies a beam group entity.



`BearingSet = 5` 

Identifies a bearing set entity in a drivetrain.



`Body = 6` 

Identifies a body entity.



`CSYS = 11` 

Identifies a coordinate system entity.



`ChainedSystem = 7` 

Identifies a chained system entity.



`Constraint = 8` 

Identifies a constraint entity.



`Contact = 9` 

Identifies a contact entity.



`Contour = 10` 

Identifies a contour entity created for a body or other contourable target.



`DataElementSet = 13` 

Identifies a data element set entity used to group finite element results for display.



`EasyFlexEntity = 12` 

Identifies an EasyFlex entity.



`Element = 15` 

Identifies a finite element entity.



`ElementSet = 16` 

Identifies an element set entity that groups finite elements.



`Expression = 14` 

Identifies an expression entity whose values are calculated from a user-defined function.



`FEProperty = 17` 

Identifies a finite element property entity.



`FODEquation = 18` 

Identifies a first-order differential equation entity.



`FatigueMaterial = 43` 

Identifies a fatigue material entity used for fatigue analysis.



`Force = 19` 

Identifies a force entity.



`Frequency = 20` 

Identifies a frequency entity produced by an eigenvalue analysis.



`FrequencySequence = 21` 

Identifies a frequency sequence entity.



`FrequencyTime = 22` 

Identifies a frequency time entity.



`GearPair = 25` 

Identifies a gear pair entity in a drivetrain.



`GearSet = 23` 

Identifies a gear set entity in a drivetrain.



`InputChannel = 24` 

Identifies an input channel entity.



`Marker = 26` 

Identifies a marker entity.



`Material = 27` 

Identifies a material entity.



`NamedSelection = 42` 

Identifies a named selection entity.



`Node = 29` 

Identifies a node entity of a finite element body.



`OutputChannel = 28` 

Identifies an output channel entity.



`PythonExpression = 30` 

Identifies a Python expression entity whose values are calculated from a user-defined Python script.



`Request = 31` 

Identifies a request entity.



`SInput = 34` 

Identifies a signal input entity.



`SODEquation = 35` 

Identifies a second-order differential equation entity.



`SOutput = 36` 

Identifies a signal output entity.



`SeaLevel = 32` 

Identifies a sea level entity used as a reference plane for buoyancy or wave results.



`ShaftSet = 33` 

Identifies a shaft set entity in a drivetrain.



`Spline = 37` 

Identifies a spline entity.



`Unknown = 0` 

The entity could not be classified as any other known kind.



`UserSubroutine = 38` 

Identifies a user subroutine entity whose values are calculated from user-supplied code.



`VariableEquation = 39` 

Identifies a variable equation entity.



`VectorDisplay = 41` 

Identifies a vector display entity created to show vector results in an animation.



`VehicleRoad = 40` 

Identifies a vehicle road entity that provides road geometry for contouring.

<a href="/lib/VM.Models.Post.EntityType.md" download="VM.Models.Post.EntityType.md">Download this page as Markdown</a>
