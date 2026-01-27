# Material Model concepts

A material model gives us a way of simulating and predicting the real world behavior of a material using maths.

For example, for small deformations, how far a material deforms under load can be approximated using Hooke's law for solids, which states that "the strain in a solid is proportional to the applied stress (within the elastic limit of that solid)".

This can be expressed as the equation σ=Eϵ
where:
- σ is stress (force per unit area, Pa)
- E is Young's modulus (a material-specific constant, Pa) 
- ϵ is strain (relative deformation).

So, if the Young's modulus is available, this model can be used to easily simulate and predict how much an amount of material would stretch (ϵ) when it is under a certain amount of stress (σ) -> ϵ = σ/E. 

Granta MI data modules contain properties (including the Young's modulus) of many thousands of materials. The Granta Material Model Service (GMMS) is a service that allows clients to export material model properties, for materials of their choice.

## Terminology: ##

#### Material model
Some mathematical approximation of a part of real life. In the above example, how things stretch (or squash) under load, summed up by the equation σ=Eϵ (Hooke's law).
#### Material model properties
All the material-specific properties that are required to run a model (the material-specific numbers to plug in to the the model's equation). In the example, this is Young's modulus. 

**Note:** Either stress or strain are also required - but these are simulation conditions. For example, to predict how much a bridge deformed under a certain loading, then the loading (the value of stress to plug in to the equation with the Young's modulus) would need to be supplied. 
#### Material Model Definitions (MMD)
The name of a model, what material model properties it involves, and what form those properties should take. 

**Note:** The Material Model Definition does not actually include the model equation, the client should know how to calculate the model correctly. The Granta Material Model Service is just providing the material model properties.
#### Material Model Output (MMO)
A data structure that contains the material model properties. The output of the Granta Material Model Service is typically a set of Material Model Outputs.
#### Granta Material Model Service (MMS) 
The Granta Material Model Service allows clients to export material model properties.

In the above example, the MMD would define the material model to have a name of "Hooke's law" and a requirement of the Young's modulus. 
- Material model: The physics that describes  ϵ = σ/E
- Material model properties: Young's modulus (E)
- Conceptually the definition might look like this: 
  - Name: Hooke's law
  - Material Model Properties: [ (Young's modulus, Symbol ='E', Required format: scalar) ]
- Conceptually the Material Model Output for a material called 'Cast Iron' might look like this
  - Name: Hooke's law
  - Material Name: Cast Iron
  - Properties: [ (Young's modulus, Symbol ='E', Value = 170 GPa )]

