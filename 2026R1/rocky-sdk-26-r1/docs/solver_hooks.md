### Solver hooks<p id="solver_hooks"></p>

The Rocky Solver SDK allows users to attach customized C++ code
into strategic points of the code that executes a simulation in Rocky.
At these points, which are named generically as [hooks](glossary.md#hook),
the Rocky Solver SDK will provide access to data relevant to the
intended operation at that location, and also sometimes the means to
send back data to the solver, in order to modify some specific behavior.
As an illustration, Figure 3.1 shows the position of the main hooks provided by
the Rocky Solver SDK in a very simplified flowchart of a
simulation in Rocky.

![](./images/hooks_flowchart.png

*Figure 3.1: Position of the main hooks provided by the Rocky Solver SDK, relative to the main operations made during a simulation*

This section describes the hooks a [module](glossary.md#module) can attach to
during a simulation in order to execute custom C++ code. These hooks can
be separated broadly into two groups: the ones that are executed only
once, when Rocky starts or terminates the simulation, and the ones that
are called several times during the simulation, as Rocky updates the
state of the particulate system.


### Initialization and termination hooks


The following hooks are called once, when the simulation starts or
terminates, as shown in the diagram of Figure
3.1.

#### ROCKY_PLUGIN_CONFIGURE

At this point, Rocky parses the configuration settings of external
modules. This hook is intended for a module to retrieve the custom input
data that was set by the user through the Rocky UI and store it locally
for later use. The specifications for custom input data is defined by a
module through a Python file, as described in chapter
[Module specification](module_specification.md).

**Parameters:**

-   `const IRockyPluginData &input_data`

    Brings all the values of module parameters entered through the Rocky
    UI. For a description of the available methods for retrieving the
    values from `IRockyPluginData`, see chapter
    [Class Reference](class_reference_index.md).

-   `void *&data`

    Accepts a generic pointer that is returned back by other hooks. The
    module may use this pointer to point to a local `struct`, in order to be
    able to access to custom data in other stages of the simulation.

#### ROCKY_PLUGIN_SETUP

During the setup, Rocky allocates resources that will be needed during
the simulation. In this hook, a custom module may allocate memory or
other resources for storing custom data.

**Parameters:**

-   `IRockyModel &model`

    Provides data about the general configuration of a simulation. For a
    list of the methods associated to `IRockyModel`, see chapter
     [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_COMPUTE_TIMESTEP

When a module implements a custom [contact](glossary.md#contact) force model,
it is possible that the model will need a special procedure for the
calculation of a stable timestep. If that is the case, this is the hook
where that calculation must be implemented. By default, this hook is only
called once at the start of the simulation. However, if one wants to force
it to be called more than once, the module may invoke `IRockyModel::trigger_update_timestep()`.
A call to this method (preferably at the `ROCKY_PLUGIN_END_ITERATION` hook)
signals to the solver that the timestep needs to be updated at the start of
the next iteration.

**Parameters:**

-   `IRockyTimestepData &timestep_data`

    An object with basic methods for accessing material and materials
    interactions properties, as well as [particle group](glossary.md#particle-group) data, to let users implement a stable
    time step calculation. See chapter
     [Class Reference](class_reference_index.md) for a complete description of `IRockyTimestepData`.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_COMPUTE_ADHESIVE_DISTANCES

Deprecated hook. In the current version of the Rocky Solver SDK,
[adhesive distance](glossary.md#adhesive-distance) values can be set within any hook with access to a `IRockyModel` object,
by using the `set_adhesive_distance` method.

#### ROCKY_PLUGIN_INITIALIZE_PARTICLE

This hook can be used to initialize particle [scalars](glossary.md#scalar)
with values different from zero (the default value when a scalar
variable in Rocky is created). The associated code is executed always in
CPU, in a loop over all active particles in the simulation.

**Parameters:**

-   `IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `IRockyParticleHost &particle`

    An active particle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_INITIALIZE_TRIANGLE

This hook can be used to initialize triangle [scalars](glossary.md#scalar)
with values different from zero (the default value when a scalar
variable in Rocky is created). The associated code is executed always in
CPU, in a loop over all geometry triangles in the project.

**Parameters:**

-   `IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `IRockyTriangleHost &triangle`

    A geometry triangle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_NON_DIMENSIONALIZE

Internally, Rocky treats all variables as dimensionless in order to
minimize roundoff errors. Therefore, all custom parameters defined in
the module must be nondimensionalized at this stage in order to be used
correctly during the later calculations.

**Parameters:**

-   `IRockyModel &model`

    Provides data about the general configuration of a simulation. For
    the nondimensionalization process, this object provides dimensional
    factors for each one of the fundamental magnitudes and some common
    derived ones. For a list of all the methods associated to `IRockyModel &model`, see
    chapter [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_SETUP_OUTPUT_PROPERTIES

This hook is intended for the setup of particle and/or geometry triangle
properties that a module will deliver to Rocky at output times for
visualization and/or post-processing. Within this hook, the data that
Rocky will need for displaying each new property must be specified. For
instance, the label that will identify the property within the UI, the
associated S.I. unit, and a nondimensionalization factor, if necessary.

**Parameters:**

-   `IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `IRockyOutputPropertyCollection &output_property_collection`

    This is an auxiliary object with methods for setting up custom
    particle and geometry properties. For a list of all associated
    methods, see chapter [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_INITIALIZE

This hook is placed at the point when Rocky sets the initial state of
the simulation. If necessary, the module may use that initial state as a
basis to initialize its own custom data.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation. For a
    list of all the methods associated to `IRockyModel`, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_INITIALIZE_CUDA

When a simulation must run in single or multi-GPU, Rocky needs to
allocate memory and copy the initial state of the simulation to the GPU
[devices](glossary.md#device). This hook, called for each enabled GPU device,
is intended for performing those operations with the custom data of a
module.

**Parameters:**

-   `IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `void *host_data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

-   `int device_id`

    Identifier of an individual GPU.

-   `void *&device_data`

    Accepts a generic pointer associated to the GPU device identified by
    `device_id`. The module must ensure in this hook that this pointer will point
    to a copy of the local `struct` in the GPU device, after allocating memory
    and performing the copy operation. Rocky will return back this
    pointer in all the iteration hooks that are executed in GPU, in
    order to be able to access custom data values at those places.

#### ROCKY_PLUGIN_TEAR_DOWN

When Rocky terminates a simulation, the module has the opportunity in
this hook to perform final actions, such as deallocate memory used for
custom data, gracefully close resources, and output final remarks about
the simulation.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_TEAR_DOWN_CUDA

In this hook the module must free the memory allocated for custom data
in the GPU devices during the execution of `ROCKY_PLUGIN_INITIALIZE_CUDA`.

**Parameters:**

-   `IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `int device_id`

    Identifier of an individual GPU.

-   `void *device_data`

    Accepts a generic pointer associated with the GPU id that is
    returned back by other GPU-aware hooks. The module may use it as a
    mechanism to persist custom data between GPU devices during the
    simulation execution.

### General-purpose iteration hooks


These hooks are called on each iteration during the simulation loop in
which the motion of the particles and all the enabled models are solved.
As they are not related to a specific type of model, these hooks can be
used for different purposes, such as collecting relevant simulation
data, calculating useful complementary magnitudes related to the
simulation, pre-processing data needed by some custom model, etc.

#### ROCKY_PLUGIN_BEGIN_ITERATION

The code attached to this hook is executed when a new cycle of
calculations is initiated, corresponding to a new timestep, as depicted
in Figure 3.1. At this point, a module may reset custom variables for
a new iteration.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation. For a
    list of all the methods associated to `IRockyModel`, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_BEGIN_ITERATION_CUDA

This hook is placed also at the beginning of a new cycle of
calculations, but it is executed on each one of the active GPU devices,
when a simulation runs in GPU.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `void *host_data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE` for pointing to a local `struct`.

-   `int device_id`

    Identifier of an individual GPU.

-   `void *&device_data`

    The generic pointer pointing to a copy of a local `struct` in a GPU
    device, provided in `ROCKY_PLUGIN_INITIALIZE_CUDA`.

#### ROCKY_PLUGIN_PRE_FORCE_ON_CONTACTS

The associated custom code will be executed before the calculation of
contact forces, inside a loop over the active [frictional contacts](glossary.md#frictional-contact).
A closing `ROCKY_PLUGIN_PRE_FORCE_ON_CONTACTS_END()` statement must be
inserted at the end of the custom code block.

**Parameters:**

-   ` IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyContact &contact`

    An active frictional contact object. For a complete list of the
    associated methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_FORCE_ON_PARTICLES

The associated custom code will be executed before the calculation of
contact forces, inside a loop over the active particles in the
simulation. A closing `ROCKY_PLUGIN_PRE_FORCE_ON_PARTICLES_END()` statement must be inserted at the end of the
custom code block.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    An active particle object. For a complete list of the associated
    methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_FORCE_ON_JOINTS

The associated custom code will be executed before the calculation of
[Joint](glossary.md#joint) forces, inside a loop over the joints in all
active [Multi-element particle](glossary.md#multi-element-particle) in a
simulation. A `ROCKY_PLUGIN_PRE_FORCE_ON_JOINTS_END()` statement must be inserted at the end of the custom
code block.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyJoint &joint`

    An active joint object. For a complete list of the associated
    methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_FORCE_ON_CONTACTS

The associated custom code will be executed after the calculation of
contact forces, inside a loop over the active frictional contacts. A
closing `ROCKY_PLUGIN_POST_FORCE_ON_CONTACTS_END()` statement must be inserted at the end of the custom code
block.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyContact &contact`

    An active frictional contact object. For a complete list of the
    associated methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_FORCE_ON_PARTICLES

The associated custom code will be executed after the calculation of
contact forces and the corresponding forces over particles, inside a
loop over the active particles in the simulation. A closing `ROCKY_PLUGIN_POST_FORCE_ON_PARTICLES_END()` statement
must be inserted at the end of the custom code block.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    An active particle object. For a complete list of the associated
    methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_FORCE_ON_JOINTS

The associated custom code will be executed after the calculation of
joint forces, inside a loop over the joints in all active multi-element
particles in a simulation. A `ROCKY_PLUGIN_POST_FORCE_ON_JOINTS_END()` statement must be inserted at the end of
the associated custom code.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyJoint &joint`

    An active joint object. For a complete list of the associated
    methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_MOVE_PARTICLES

The associated custom code is executed before Rocky updates the
kinematic state of the particles. At the end of the custom code block, a
closing `ROCKY_PLUGIN_PRE_MOVE_PARTICLES_END()` statement must be inserted.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    An active particle object. For a complete list of the associated
    methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_MOVE_PARTICLES

The associated custom code is executed after Rocky has updated the
kinematic state of the particles. At this point, updated positions and
velocities for all active particles are available. At the end of the
custom code block, a closing `ROCKY_PLUGIN_POST_MOVE_PARTICLES_END()` statement must be inserted.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    An active particle object. For a complete list of the associated
    methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_SEARCH_ON_PARTICLES

This hook is attached at a point before the first stage of contact
detection, which is the search of neighbors for every active particle in
the simulation (see the description of this operation on the *DEM
Technical Manual*). This search operation is not executed at every time
iteration. Its frequency depends on the dynamics of the particulate
process being simulated, and it usually vary during a simulation. The
code associated to this specific hook will be executed within a loop
involving all the active particles. A closing `ROCKY_PLUGIN_PRE_SEARCH_ON_PARTICLES_END()` statement is required
at the end of the code block.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    An active particle object. For a complete list of the associated
    methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_COMPUTE_VICINITY_DISTANCE

This hook must be used as a part of modules implementing a model of long
range interactions between particles and/or between particles and
geometry triangles. In the case of long range interactions between
particles, any pair of particles whose centroids are located at a
distance smaller than a specified value is considered to have an active
interaction, or in the nomenclature used in Rocky, they form a vicinity
pair. In the case of interactions between a particle and a geometry
triangle, a vicinity pair is formed in similar way, that is, when the
distance between their centroids is lower than a specified value. The
purpose of this hook is, as a matter of fact, to specify the value of
that limiting distance, which in Rocky is called vicinity distance. It
can be calculated based on other simulation parameters, and also can
vary with time.

At each time iteration, Rocky will determine all vicinity pairs based on
the simple criterion described above. Then, the hooks
`ROCKY_PLUGIN_PRE_FORCE_ON_PARTICLE_VICINITY_PAIR`,
`ROCKY_PLUGIN_PRE_FORCE_ON_TRIANGLE_VICINITY_PAIR`,
`ROCKY_PLUGIN_POST_FORCE_ON_PARTICLE_VICINITY_PAIR` and
`ROCKY_PLUGIN_POST_FORCE_ON_TRIANGLE_VICINITY_PAIR` to calculate forces,
heat transfer rates or any other interaction magnitudes for all
particle-to-particle and particle-to-triangle
vicinity pairs, respectively. If a project has several modules that
specify different values of vicinity distance, Rocky will use the
largest one.

The code block associated to this hook must end with a return statement,
returning the value of the current vicinity distance, followed by a
closing `ROCKY_PLUGIN_COMPUTE_VICINITY_DISTANCE_END()` statement.

**Parameters:**

-   `IRockyModel &model`

    Object that provides data about the general configuration of a
    simulation.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_FORCE_ON_PARTICLE_VICINITY_PAIR

This hook is intended for the calculation of long range
particle-to-particle interaction magnitudes (forces, heat transfer
rates, or other). A module implementing this kind of model must define
previously the maximum distance at which the interaction is possible, by
using the `ROCKY_PLUGIN_COMPUTE_VICINITY_DISTANCE` hook. Based on that distance,
Rocky will determine all particle-to-particle vicinity pairs for which a long range interaction
could be calculated within this hook. The code associated to this hook
must end with a `ROCKY_PLUGIN_PRE_FORCE_ON_PARTICLE_VICINITY_PAIR_END()` statement.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyVicinityPair &vicinity_pair`

    A particle-to-particle vicinity pair. For a complete list of the
    associated methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_FORCE_ON_TRIANGLE_VICINITY_PAIR

This hook is intended for the calculation of long range
particle-to-triangle interaction magnitudes (forces, heat transfer
rates, or other). A module implementing this kind of model must define
previously the maximum distance at which the interaction is possible, by
using the `ROCKY_PLUGIN_COMPUTE_VICINITY_DISTANCE` hook. Based on that distance,
Rocky will determine all particle-to-triangle vicinity pairs for which a long
range interaction could be calculated within this hook. The code associated to
this hook must end with a `ROCKY_PLUGIN_PRE_FORCE_ON_TRIANGLE_VICINITY_PAIR_END()` statement.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyVicinityPair &vicinity_pair`

    A particle-to-triangle vicinity pair. For a complete list of the
    associated methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_FORCE_ON_PARTICLE_VICINITY_PAIR

This hook is intended for the calculation of long range
particle-to-particle interaction magnitudes (forces, heat transfer
rates, or other). A module implementing this kind of model must define
previously the maximum distance at which the interaction is possible, by
using the `ROCKY_PLUGIN_COMPUTE_VICINITY_DISTANCE` hook. Based on that distance,
Rocky will determine all particle-to-particle vicinity pairs for which a long range interaction
could be calculated within this hook. The code associated to this hook
must end with a `ROCKY_PLUGIN_POST_FORCE_ON_PARTICLE_VICINITY_PAIR_END()` statement.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyVicinityPair &vicinity_pair`

    A particle-to-particle vicinity pair. For a complete list of the
    associated methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_FORCE_ON_TRIANGLE_VICINITY_PAIR

This hook is intended for the calculation of long range
particle-to-triangle interaction magnitudes (forces, heat transfer
rates, or other). A module implementing this kind of model must define
previously the maximum distance at which the interaction is possible, by
using the `ROCKY_PLUGIN_COMPUTE_VICINITY_DISTANCE` hook. Based on that distance,
Rocky will determine all particle-to-triangle vicinity pairs for which a long
range interaction could be calculated within this hook. The code associated to
this hook must end with a `ROCKY_PLUGIN_POST_FORCE_ON_TRIANGLE_VICINITY_PAIR_END()` statement.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyVicinityPair &vicinity_pair`

    A particle-to-triangle vicinity pair. For a complete list of the
    associated methods, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

### Hooks associated to specific models


The hooks described in this section must be used only by modules that
add new models to Rocky.

#### ROCKY_PLUGIN_NORMAL_FORCE_ON_CONTACTS

When a module implements a custom contact model, the calculation of the
normal component of the contact force must be made in the code attached
to this hook. The custom calculation implemented here will override any
built-in normal contact force model in Rocky. It is mandatory that the
attached custom code block be closed with a `ROCKY_PLUGIN_NORMAL_FORCE_ON_CONTACTS_END()` statement.

*Note: Besides the hook implementation, the module's specification
file must include the definition of the
`normal_force_model` attribute, as explained in chapter [Module specification](module_specification.md), in order to inform
Rocky that the module implements a custom normal force model.*

**Parameters:**

-   `IRockyContact &contact`

    The frictional contact for which the normal force is being
    calculated.

-   `IRockyContactIntermediateData& intermediate_data`

    An object containing intermediate data useful for the calculation of
    contact forces. For a list of the available data in this object,
    please refer to chapter
    [Class Reference](class_reference_index.md).

-   `IRockyContactOutputData& output_data`

    The object that will receive the values calculated by a custom
    contact model and will deliver them to Rocky.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_TANGENTIAL_FORCE_ON_CONTACTS

When a module implements a custom contact model, the calculation of the
tangential component of the contact force must be made in the code
attached to this hook. It is executed always after the calculation of
the normal force component, either by a built-in model or by custom code
in `ROCKY_PLUGIN_NORMAL_FORCE_ON_CONTACTS` (see Figure 3.2). Therefore, at this point,
a value of the normal component of the contact force will be available for the calculation of
the tangential component. If implemented in a module, the calculation in
this hook will override any built-in tangential contact force model in
Rocky. The custom code block must end with a closing
`ROCKY_PLUGIN_TANGENTIAL_FORCE_ON_CONTACTS_END()` statement.

*Note: Besides the hook implementation, the module's specification
file must include the definition of the tangential_force_model attribute, as
explained in chapter [Module specification](module_specification.md), in order to inform Rocky that the module implements
a custom tangential force model*

**Parameters:**

-   `IRockyContact &contact`

    The frictional contact for which the tangential force is being
    calculated.

-   `IRockyContactIntermediateData& intermediate_data`

    An object containing intermediate data useful for the calculation of
    contact forces. For a list of the available data in this object,
    please refer to chapter
    [Class Reference](class_reference_index.md).

-   `IRockyContactOutputData& output_data`

    An object that will receive the values calculated by a custom
    contact model and will deliver them to Rocky.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

![](./images/hooks_contact.png

*Figure 3.2: Hooks used for the implementation of a contact model. The code associated to the hooks is executed in the order ndicated in this diagram*

#### ROCKY_PLUGIN_IMPACT_ENERGY_ON_CONTACTS

Sometimes a custom contact model will require a special calculation of
the impact energy, which is usually one of the main inputs for an
[instantaneous breakage](glossary.md#instantaneous-breakage) model. If such
calculation is required, it must be implemented in this hook.

*Note: Besides the hook implementation, the module's specification
file must include the definition of the impact_energy_model attribute, as
explained in chapter [Module specification](module_specification.md), in order to inform Rocky that the module implements
a custom tangential force model*

As shown
in Figure 3.2,
it is always executed after the calculation of the normal and tangential
components of the contact force, therefore, the availability of values
of these forces for the impact energy calculation is guaranteed. The
custom code block must end with a `ROCKY_PLUGIN_IMPACT_ENERGY_ON_CONTACTS_END()` statement.

**Parameters:**

-   `IRockyContact &contact`

    The frictional contact for which the impact energy is being
    calculated.

-   `IRockyContactIntermediateData& intermediate_data`

    An object containing intermediate data useful for the calculation of
    contact forces. For a list of the available data in this object,
    please refer to chapter
    [Class Reference](class_reference_index.md).

-   `IRockyContactOutputData& output_data`

    An object that will receive the values calculated by a custom
    contact model and will deliver them to Rocky.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_ROLLING_RESISTANCE_ON_CONTACTS

Besides implementing the calculation of the contact forces, a custom
contact model may optionally calculate and set moments caused by rolling
resistance. This hook, specifically designed for that purpose, is
executed at the end of the contact model pipeline, as shown in Figure 3.2. The
custom code block associated to this hook must end with a
`ROCKY_PLUGIN_ROLLING_RESISTANCE_ON_CONTACTS_END()` statement.

*Note: Besides the implementation of the calculation of rolling resistance moments
in this hook, the module must include within its specification file the definition
of the `rolling_resistance_model` attribute, as explained in chapter [Module specification](module_specification.md), in order to
inform Rocky that the module implements a custom rolling resistance model.*

**Parameters:**

-   `IRockyContact &contact`

    The frictional contact for which the rolling resistance moments must
    be calculated.

-   `IRockyContactIntermediateData& intermediate_data`

    An object containing intermediate data useful for the calculation of
    contact forces. For a list of the available data in this object,
    please refer to chapter
    [Class Reference](class_reference_index.md).

-   `IRockyContactOutputData& output_data`

    An object that will receive the values calculated by a custom
    contact model and will deliver them to Rocky.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_COMPUTE_CONTACT_ADHESIVE_FORCES

When a module implements a custom adhesion model, the adhesive force
acting in an [adhesive contact](glossary.md#adhesive-contact) must be
calculated in the associated block of code. That custom adhesion model
will override any built-in adhesion model in Rocky. The block attached
to this hook must end with a `ROCKY_PLUGIN_COMPUTE_CONTACT_ADHESIVE_FORCES_END()`
statement.

*Note: Besides the implementation of the calculation of rolling resistance moments
in this hook, the module must include within its specification file the definition
of the `adhesion_model` attribute, as explained in chapter [Module specification](module_specification.md), in order to
inform Rocky that the module implements a custom rolling resistance model.*

Normally, the adhesion force has only a component in the normal
direction, but, for special cases, the custom code may calculate and
deliver to Rocky a tangential component of the adhesion force as well.
On the other hand, by convention in Rocky, adhesion forces are oriented
in the same way that contact forces are oriented. Consequently, an
attractive adhesion force must be prescribed with a negative sign.

**Parameters:**

-   `IRockyContact &contact`

    The adhesive contact for which the adhesive force is being
    calculated.

-   `IRockyAdhesionOutputData &output_data`

    An object that will receive the values of the calculated components
    of the adhesion force and will deliver them to Rocky. It is
    mandatory to set the normal component of the adhesion force, but the
    tangential component is optional.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_COMPUTE_JOINT_FORCES

A module implementing a custom joint model must include the calculation
joint forces and moments in this block of code, based on the linear and
angular joint deformations. Currently, the implementation of custom
joint models is supported only for flexible fibers and shells.

The block of code implementing a custom joint model must end with a
`ROCKY_PLUGIN_COMPUTE_JOINT_FORCES_END()` statement.

*Note: Besides the hook implementation, the module’s specification file must include the definition of the
joint_model attribute, as explained in chapter [Module specification](module_specification.md), in order to inform Rocky that
the module implements a custom joint model.*

**Parameters:**

-   ` IRockyJoint &joint`

    The joint for which the forces and moments are being calculated.

-   ` IRockyJointOutputData &output_data`

    An object that will receive the values of the forces and moments and
    will deliver them to Rocky.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_COMPUTE_JOINT_BREAKAGE

This hook must be used to implement a new criterion of [discrete breakage](glossary.md#discrete-breakage)
for multi-element flexible particles. If implemented, the associated code will be executed in a
loop traversing the joints of all the multi-element particles enabled to
break, after the calculation of joint forces and moments. When the
custom criterion for breakage is satisfied, the boolean parameter that
Rocky passes to the hook, `broken`, must be set to `true`. Only in this way Rocky
will then disable the joint, effectively breaking up the link between
the previously connected [elements](glossary.md#element).

Currently, custom criteria for joint breakage is supported only for
flexible fibers and shells. In the specific case of shells, a custom
breakage criterion will be evaluated only at the center point of a
joint. Therefore, when that criterion is satisfied, the joint will break
instantaneously and completely. This behavior is different from the
built-in joint breakage models in Rocky, in which a period of partial
breakage may exist before the joint fully breaks, as described on the
DEM Technical Manual.

The associated code block that implements a joint breakage criterion
must end with a `ROCKY_PLUGIN_COMPUTE_JOINT_BREAKAGE_END()` statement.

*Note: Besides the hook implementation, the module's specification file must
include the definition of the joint_breakage_model attribute, as explained
in chapter [Module specification](module_specification.md), in order to inform Rocky that the module implements a
custom discrete breakage criterion.*

**Parameters:**

-   `IRockyJoint &joint`

    The joint that will be checked for breakage.

-   `bool &broken`

    Its value must be set to `true` if the joint is supposed to break.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_INITIALIZE_INSTANTANEOUS_BREAKAGE

The code associated to this hook will be executed during the
initialization of the simulation and after the generation of every new
fragment at an instantaneous breakage event. It can be used for setting
initial values for variables that a custom instantaneous breakage model
may need.

**Parameters:**

-   `IRockyBreakableParticle &breakable_particle`

    An abstraction of a particle that is able to break by instantaneous
    breakage. For a list of the available methods, please see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_COMPUTE_INSTANTANEOUS_BREAKAGE

This hook must be used to implement a new criterion for instantaneous
breakage. If implemented, the associated code will be executed in a loop
traversing all particles enabled to break, after the calculation of
contact forces. At the moment the custom criterion for instantaneous
breakage is satisfied, the boolean parameter passed by reference to the
hook, `broken`, must be set to `true`. Later on in the same time iteration, Rocky
will execute the fragmentation algorithm with the active fragment
distribution model, for all particles that have satisfied that
condition. The code block that implements a custom instantaneous
breakage criterion must end with a closing
`ROCKY_PLUGIN_COMPUTE_INSTANTANEOUS_BREAKAGE_END()` statement.

*Note: Besides the hook implementation, the module's specification file must include the definition
of the `instantaneous_breakage_model` attribute, as explained in chapter [Module specification](module_specification.md), in order to inform Rocky
that the module implements a custom instantaneous breakage criterion*

**Parameters:**

-   `IRockyParticle &particle`

    The particle that will be checked for breakage.

-   `bool &broken`

    Its value must be set to `true` if the calculations indicate that the
    particle is supposed to break.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_INITIALIZE_FRAGMENTS_SIZE_DISTRIBUTION

The code associated to this hook will be executed during the
initialization of the simulation and after the generation of every new
fragment at an instantaneous breakage event. It can be used for setting
initial values for variables that a custom fragment size distribution
model may need.

**Parameters:**

-   `IRockyBreakableParticle &breakable_particle`

    An abstraction of a particle that is able to break by instantaneous
    breakage. For a list of the available methods, please see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_COMPUTE_FRAGMENTS_SIZE_DISTRIBUTION

This hook can be used to implement a new model for the calculation of
the size distribution of fragments in an instantaneous breakage event.
It can be used either as a complement to a custom instantaneous breakage
criterion or in a standalone module devised to work with built-in
instantaneous breakage models in Rocky. In the latter case, the only
constraint is that the calculation must be based on the value of the
\f(t_{10}\f) parameter, as in most of the built-in models in Rocky.

*Note:Besides the hook implementation, the module’s specification
file must include the definition of the
`fragments_size_distribution_model`
attribute, as explained in chapter [Module specification](module_specification.md), in
order to inform Rocky that the module
implements a custom fragments size
distribution.*

**Parameters:**

-   `IRockyBreakableParticle &breakable_particle`

    An abstraction of a particle that is able to break by instantaneous
    breakage. For a list of the available methods, please see chapter
    [Class Reference](class_reference_index.md).

-   ` std::vector<double>& distribution`

    A vector containing the sizes of the fragments resulting in a
    breakage event, arranged in descending order.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_COMPUTE_BOUNDARIES_WEAR

This hook can be used to implement a custom calculation of the surface
wear caused by particle collisions on the boundaries (geometries) in a
simulation. The associated code must calculate and deliver to Rocky the
volume of [material](glossary.md#material) worn from a [boundary triangle](glossary.md#boundary
triangle) during a simulation timestep in a
single particle-geometry contact. Then, Rocky will collect the worn
volumes from all triangles that make up the boundaries and will execute
the algorithm of grid deformation on them. The associated custom code
must be closed by a `ROCKY_PLUGIN_COMPUTE_BOUNDARIES_WEAR_END()` statement.

*Note: Besides the hook implementation, the module's specification
file must include also the definition
of the `geometries_wear_model` attribute,
as explained in chapter [Module specification](module_specification.md), in order to inform Rocky that the module implements
*

**Parameters:**

-   `IRockyContact &triangle_contact`

    A contact between a particle and a triangle from a wear-enabled
    geometry.

-   `double& wear_volume`

    The module must set in this variable the volume of material worn
    from the geometry as a result of the action of the contact forces on
    the `triangle_contact`, during a single timestep.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_COMPUTE_CONTACT_HEAT_CONDUCTION

This hook can be used to implement a custom calculation of the heat
transfer rate by conduction between two particles or between a particle
and a [boundary](glossary.md#boundary). The associated code block must be
closed by a `ROCKY_PLUGIN_COMPUTE_CONTACT_HEAT_CONDUCTION_END()` statement.

*Note: Besides the hook implementation, the module's specification
file must include also the definition
of the heat_conduction_model attribute,
as explained in chapter [Module specification](module_specification.md), in order to
inform Rocky that the module implements a custom contact heat conduction
model.*


**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyContact &contact`

    The frictional contact at which the heat transfer rate is being
    calculated.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_COMPUTE_THERMAL_INTEGRATION

This hook can be used to integrate the energy balance equation for a
single particle, in order to update its temperature. This operation will
require the use of the total heat transfer rate to the particle,
calculated in previous steps (by conduction or any other mechanisms
active in the simulation). The associated code block must be closed by a
`ROCKY_PLUGIN_COMPUTE_THERMAL_INTEGRATION_END()` statement.

*Note: Besides the hook implementation, the module's specification
file must include also the definition
of the thermal_integration_model attribute, as explained in chapter [Module specification](module_specification.md), in
order to inform Rocky that the module
implements a custom thermal integration procedure*


**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    The particle whose temperature must be updated by integrating the
    energy balance equation.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_COMPUTE_GEOMETRIES_MOTION

This hook is intended for the implementation of a custom motion kernel.
In Rocky, a motion kernel is responsible for moving geometries from one
location in the domain to another during the simulation. The code
associated to this hook will be executed at every Rocky timestep during
the simulation. To work, the custom motion kernel must first know which
geometries in the Rocky project are available for motion, which it gets
from their Rocky IDs or names. Then at every timestep, it moves the
proper geometries according to the custom motion kernel setup. No custom
motion setup is done in Rocky; Rocky only provides in this hook the
current position, orientation, translational and rotational velocities
of the geometries and the forces and moments applied by the particles to
the geometries, and then that information can be taken or not into
account to calculate the next motion for the geometry.

**Parameters:**

-   `IRockyModel& model`

    Provides data about the general configuration of a simulation.

-   `IRockyGeometriesMotionData& motion`

    A data structure that holds motion information for all geometries in
    the Rocky project.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

### CFD coupling hooks

The Rocky Solver SDK includes a number a hooks intended for
implementing new interaction models between particles and fluid flow. A
custom model can implement one or several of those models, associating
the corresponding code to appropriate hooks. It is worth noting, though,
that the code related to all CFD coupling hooks used in a module must be
grouped inside a block beginning with `ROCKY_PLUGIN_CFD_COUPLING()` and ending with `ROCKY_PLUGIN_CFD_COUPLING_END()`.

The code associated to CFD coupling hooks will have effect only on both
constant and Fluent 1-way coupling modes, as well as on the Fluent 2-way
coupling mode. For details about how the CFD coupling models are defined
in Rocky, please refer to the DEM-CFD Coupling Technical Manual.

###  ROCKY_PLUGIN_CFD_COUPLING_DRAG_COEFFICIENT

This hook is intended for the calculation of a custom drag coefficient,
which, in turn, Rocky will use to calculate the drag force acting over a
particle. This force will be calculated by means of equation 3.5 of the
DEM-CFD Coupling Technical Manual. The associated code block must end
with a `return` statement, returning the calculated coefficient value,
followed by a closing `ROCKY_PLUGIN_CFD_COUPLING_DRAG_COEFFICIENT_END()` statement.

*Note: In order to inform Rocky that a module implements a custom drag coefficient
calculation, the module’s specification file must include the definition of the
`cfd_drag_law_model` attribute, as explained in chapter [Module specification](module_specification.md).*

**Parameters:**

-   ` IRockyParticle &particle`

    The particle on which the calculated drag force will be applied.

-   ` RockyCFDProperties &cfd`

    A data structure containing data related to the fluid flow and the
    particle-fluid interactions. For list of the available data, please
    refer to chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_CFD_COUPLING_LIFT_COEFFICIENT

This hook is intended for the calculation of a custom lift coefficient,
which, in turn, Rocky will use to calculate the lift force acting over a
particle. This force will be calculated by means of equation 3.69 of the
DEM-CFD Coupling Technical Manual. The associated code block must end
with a `return` statement, returning the calculated coefficient value,
followed by a closing `ROCKY_PLUGIN_CFD_COUPLING_LIFT_COEFFICIENT_END()` statement.

*Note: In order to inform Rocky that a module implements a custom lift coefficient
calculation, the module’s specification
file must include the definition of the
`cfd_lift_law_model` attribute, as explained in chapter [Module specification](module_specification.md).*


**Parameters:**

-   `IRockyParticle &particle`

    The particle on which the calculated lift force will be applied.

-   `RockyCFDProperties &cfd`

    A data structure containing data related to the fluid flow and the
    interaction particle-fluid. For list of the available data, please
    refer to chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

###  ROCKY_PLUGIN_CFD_COUPLING_VIRTUAL_MASS_COEFFICIENT

This hook is intended for the calculation of a custom virtual mass
coefficient, which, in turn, Rocky will use to calculate the virtual
mass and the a ssociated force acting over a particle. This force will
be calculated by means of equation 3.65 of the DEM-CFD Coupling
Technical Manual. The associated code block must end with a `return`
statement, returning the calculated coefficient value, followed by a
closing `ROCKY_PLUGIN_CFD_COUPLING_VIRTUAL_MASS_COEFFICIENT_END()` statement.

**Parameters:**

-   `IRockyParticle &particle`

    The particle on which the calculated virtual mass force will be
    applied.

-   `RockyCFDProperties &cfd`

    A data structure containing data related to the fluid flow and the
    interaction particle-fluid. For list of the available data, please
    refer to chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

*Note: In order to inform Rocky that a module implements a custom virtual mass
calculation, the module’s specification
file must include the definition of the
`cfd_virtual_mass_law_model` attribute,
as explained in chapter [Module specification](module_specification.md)*


###  ROCKY_PLUGIN_CFD_COUPLING_TORQUE_COEFFICIENT

This hook is intended for the calculation of a custom torque
coefficient, which, in turn, Rocky will use to calculate the
flow-generated torque acting over a particle. This force will be
calculated by means of equation 3.78 of the DEM-CFD Coupling Technical
Manual. The associated code block must end with a `return` statement,
returning the calculated coefficient value, followed by a closing ROCKY_PLUGIN_CFD_COUPLING_TORQUE_COEFFICIENT_END()`
statement.

*Note: In order to inform Rocky that a module implements a custom torque coefficient calculation,
the module’s specification file must include the definition of the `cfd_torque_law_model` attribute, as
explained in chapter [Module specification](module_specification.md).*

**Parameters:**

-   `IRockyParticle &particle`

    The particle on which the calculated torque will be applied.

-   `RockyCFDProperties &cfd`

    A data structure containing data related to the fluid flow and the
    interaction particle-fluid. For list of the available data, please
    refer to chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

### ROCKY_PLUGIN_CFD_COUPLING_NUSSELT_NUMBER

This hook is intended for the calculation of a custom Nusselt number, which, in
turn, Rocky will use to calculate the heat transfer rate between a particle and
the surrounding fluid. The heat transfer coefficient based on the calculated
Nusselt number will be obtained by means of equation 4.3 of the DEM-CFD Coupling
Technical Manual.

Afterwards, the convective heat transfer rate will be calculated with equation
4.2 of the referred manual. The code block associated to this hook must end with
a `return` statement, returning the calculated coefficient value, followed by a
closing `ROCKY_PLUGIN_CFD_COUPLING_LIFT_COEFFICIENT_END()` statement.

*Note: In order to inform Rocky that a module implements a custom Nusselt
number calculation, the module's specification file must include the
definition of the `cfd_convection_law_model` attribute, as explained in chapter
[Module specification](module_specification.md).*

*Note: The Reynolds number definition in equation 3.6 of the DEM-CFD Coupling
Technical Manual, that can be accessed via this API, is computed based on the
equivalent sphere diameter (the diameter of the sphere with the same volume as
the particle being simulated). On the other hand, the convective heat transfer
rate calculated using equation 4.2 of the DEM-CFD Coupling Technical Manual uses
the actual particle area.*

**Parameters:**

- `IRockyParticle &particle`

    The particle to which the calculated the convective heat transfer
    rate is referred.

- `RockyCFDProperties &cfd`

    A data structure containing data related to the fluid flow and the
    interaction particle-fluid. For list of the available data, please
    refer to chapter
    [Class Reference](class_reference_index.md).

- `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the
    user's custom data.

#### ROCKY_PLUGIN_PRE_FORCE_ON_FLUID

The code associated to this hook will be executed before the calculation
of the CFD coupling coefficients and the corresponding forces and heat
transfer rates. It can be used for performing some pre-calculation
needed in later hooks. The associated code block must be closed with a
`ROCKY_PLUGIN_PRE_FORCE_ON_FLUID_END()` statement.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    The particle to which the CFD coupling interaction properties are
    referred.

-   `RockyCFDProperties &cfd`

    A data structure containing data related to the fluid flow and the
    interaction particle-fluid. For list of the available data, please
    refer to chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_FORCE_ON_FLUID

The code associated to this hook will be executed after the calculation
of the CFD coupling coefficients and the corresponding forces and heat
transfer rates. The associated code block must be closed with a `ROCKY_PLUGIN_PRE_FORCE_ON_FLUID_END()`
statement.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    The particle to which the CFD coupling interaction properties are
    referred.

-   `RockyCFDProperties &cfd`

    A data structure containing data related to the fluid flow and the
    interaction particle-fluid. For list of the available data, please
    refer to chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_MOVE_ON_FLUID

The code associated to this hook will be executed after the calculation
of the CFD coupling forces and heat transfer rates, but before solving
the motion equations for the particles. The associated code block must
be closed with a ` ROCKY_PLUGIN_PRE_MOVE_ON_FLUID_END()` statement.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    The particle to which the CFD coupling interaction properties are
    referred.

-   `RockyCFDProperties &cfd`

    A data structure containing data related to the fluid flow and the
    interaction particle-fluid. For list of the available data, please
    refer to chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_MOVE_ON_FLUID

The code associated to this hook will be executed after the calculation
of the CFD coupling forces and heat transfer rates, and after solving
the motion equations for the particles. The associated code block must
be closed with a `ROCKY_PLUGIN_POST_MOVE_ON_FLUID_END()` statement.

**Parameters:**

-   `IRockyDeviceModel &device_model`

    General information about the current state of the simulation.

-   `IRockyParticle &particle`

    The particle to which the CFD coupling interaction properties are
    referred.

-   `RockyCFDProperties &cfd`

    A data structure containing data related to the fluid flow and the
    interaction particle-fluid. For list of the available data, please
    refer to chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

### SPH hooks

Latest versions of Rocky include a feature that implements the Smoothed
Particle Hydrodynamics (SPH) method as a new option for adding fluid
flow interacting with the particles in a simulation. Currently the Rocky
Solver SDK includes some hooks, classes and methods specifically
designed for the implementation of custom models that may override or
complement the SPH model implemented within Rocky. This section
describes the hooks that the current version includes for that effect.

Figure 3.3 shows schematically the points where the SPH hooks are located in
relation to the regular hooks provided by the Rocky Solver SDK.

![](./images/hooks_sph_flowchart.png

*Figure 3.3: Position of the SPH hooks (in black) relative to the regular hooks (in green) and the main operations made during a simulation.*

As shown in Figure 3.3, the calculation of SPH forces and the hooks
related to that operation are executed after the calculation of the DEM
forces. Moreover, the solution of the SPH motion equation is made also
after the solution of the corresponding DEM motion equations. However,
the SPH `PRE_MOVE` hooks are executed before the solution of the DEM motion
equations.

It is important to note that in the implementation of a custom SPH
module, all hooks related to SPH must be included in a block beginning
with a `ROCKY_PLUGIN_SPH` instruction. Moreover, that block must be closed with
a `ROCKY_PLUGIN_SPH_END` statement.

A feature only present on SPH hooks is the possibility of replicating a
hook multiple times in order to implement short iterative subroutines.
Unlike other calculations in Rocky, this iterative subroutines can be
executed in the same time level in order to solve coupling between flow
variables. As shown schematically in Figure 3.4,
each new iteration must be attached to a new hook, which has the same
name as the base-hook, but suffixed with an index.

*Note: Currently, those indexes can go up to 4; therefore, these iterative subroutines may have up to 5 iterations altogether.*

If defined in the
code associated to a module, these indexed hooks will be executed in
sequence before proceeding to the next step in the implemented
algorithm. All the SPH hooks included in Figure
3.3 for `ROCKY_PLUGIN_INITIALIZE_SPH_ELEMENT`, `ROCKY_PLUGIN_FORCE_ON_SPH_ELEMENT_INTERACTIONS` and
`ROCKY_PLUGIN_FORCE_ON_SPH_TRIANGLE_INTERACTIONS` can be indexed in the way indicated in Figure
3.4 for implementing short iterative subroutines. Currently, those indexes can go up to
4; therefore, these iterative subroutines
may have up to 5 iterations altogether.

![](./images/hooks_sph_detail.png

*Figure 3.4: Replication of SPH hooks for the implementation of short iterative subroutines.*

#### ROCKY_PLUGIN_INITIALIZE_SPH_ELEMENT

This hook is designed for initializing SPH element scalars with values
different from zero, which is the default value when they are created.
Like all initialization hooks, this hook is executed always in CPU,
within a loop over all SPH elements.

**Parameters:**

-   `IRockyModel& model`

    An object that provides data about the general configuration of the
    Rocky simulation.

-   `IRockySPHModel& sph_model`

    An object that provides data about the general configuration of the
    flow model discretized with the SPH method.

-   `IRockySPHElementHost& sph_element`

    An object representing a SPH element contained in the simulation.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_FORCE_ON_SPH_ELEMENT_INTERACTIONS

The purpose of this hook is to calculate forces that SPH elements exert
on each other using custom models. If a custom module implements code
associated to this hook, it will override the calculation of all forces
between SPH elements made within Rocky's built-in SPH. This means that
such custom module will take the responsibility of calculating pressure
forces, viscous forces, and any other interaction forces that SPH
elements could exert on each other. The resultant of those forces must
be passed to Rocky by using the `IRockySPHElementInteraction::add_force`
method in order to be applied to the interacting SPH elements.
Alternatively, the module can pass custom calculated resultant accelerations
to Rocky by using the `IRockySPHElementInteraction::add_acceleration` method.
Additionally, the code block associated to this hook must be closed by a
`ROCKY_PLUGIN_FORCE_ON_SPH_ELEMENT_INTERACTIONS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElementInteraction& sph_interaction`

    An object representing a pair of SPH elements located within the
    support region of each other.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_FORCE_ON_SPH_TRIANGLE_INTERACTIONS

This hook is intended for calculating the interaction forces between SPH
elements and geometry triangles. If a custom module implements code
associated to this hook, it will override the calculation of those
forces made within Rocky's built-in SPH. The resultant of the
interaction forces calculated within the code associated to this hook
must be passed to Rocky by using the `IRockySPHTriangleInteraction::add_force`
method in order to be applied to the respective SPH element and the geometry triangle.
Alternatively, for the SPH element exclusively, the module can pass the calculated
resultant acceleration to Rocky by using the `IRockySPHElementInteraction::add_acceleration` method.
Additionally, the code block associated to this hook must end with a
`ROCKY_PLUGIN_FORCE_ON_SPH_TRIANGLE_INTERACTIONS_END()` statement.

**Parameters:**

-   `IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHTriangleInteraction& sph_interaction`

    An object representing an interacting pair SPH element-geometry
    triangle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_ELEMENTS

This hook is intended for calculating forces due to surface tension
within a loop over SPH elements. There is an alternative hook
(`ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_ELEMENT_INTERACTIONS`) if
the calculation of those forces needs to be done within a loop over SPH
element interactions. As the surface tension force acts on the normal
direction to a free surface, whenever a custom surface tension model is
active in a simulation, a normal vector is calculated internally for all
SPH elements according to the continuum approximation of interfaces. The
calculated surface tension force must be passed to Rocky by using the
`IRockySPHElement::add_force()` method. Alternatively, the module can
pass the acceleration caused by that force, by using the
`IRockySPHElement::add_acceleration()` method. The code block associated to this
hook must be closed by a `ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_ELEMENTS_END()` statement.

*Note: Rocky must be informed that
the module implements a surface
tension model, by including the
`sph_surface_tension_model` attribute
in the module’s specification file. Please
also note that a module implementing
a custom surface tension model must
include only code associated to the
hook over SPH elements or to the hook
over SPH element interactions, but not
both.*

*Note: For additional details on the normal vector of the free surface calculation, please
refer to the documentation of the IRockySPHElement::get_normal() method.*

**Parameters:**

-   `IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElement& sph_element`

    An object representing a SPH element.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE` for pointing to a local `struct`
    containing custom data.

#### ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_ELEMENT_INTERACTIONS

This hook is intended for calculating forces due to surface tension
within a loop over SPH element interactions. There is an alternative
hook (`ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_ELEMENTS`)
if the calculation of those forces needs to be done within a
loop over SPH elements. As the surface tension force acts on the normal
direction to a free surface, whenever a custom surface tension model is
active in a simulation, a normal vector is calculated internally for all
SPH elements according to the continuum approximation of interfaces. The
calculated surface tension force must be passed to Rocky by using the `IRockySPHElementInteraction::add_force()`
method in order to be applied to the interacting SPH elements.
Alternatively, the module can pass the acceleration caused by that
force, by using the `IRockySPHElementInteraction::add_acceleration()`
method. The code block associated to this hook
must be closed by a `ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_ELEMENT_INTERACTIONS_END()` statement.

*Note: Rocky must be informed that
the module implements a surface
tension model, by including the
`sph_surface_tension_model` attribute
in the module's specification file. Please
also note that a module implementing
a custom surface tension model must
include only code associated to the
hook over SPH elements or to the hook
over SPH element interactions, but not
both.*

*Note: For additional details on the normal vector of the free surface calculation, please
refer to the documentation of the IRockySPHElement::get_normal() method.*

**Parameters:**

-   `IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElementInteraction& sph_interaction`

    An object representing a pair of SPH elements located within the
    support region of each other.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE` for pointing to a local `struct`
    containing custom data.

#### ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_TRIANGLE_INTERACTIONS

Some surface tension models may need to apply forces associated to
interactions between SPH elements and geometry triangles. This hook may
be used for that purpose. If calculated, the force value must be passed
to Rocky by using the IRockySPHTriangleInteraction::add_force()` method in order to be applied to the respective
SPH element and the geometry triangle. Alternatively, the module can
pass the acceleration value caused by that force with the `IRockySPHTriangleInteraction::add_acceleration()` method. The
code block associated to this hook must be closed with a `ROCKY_PLUGIN_SURFACE_TENSION_ON_SPH_TRIANGLE_INTERACTIONS_END()` statement.

**Parameters:**

-   `IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHTriangleInteraction& sph_interaction`

    An object representing an interacting pair SPH element-geometry
    triangle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE` for pointing to a local `struct`
    containing custom data.

#### ROCKY_PLUGIN_VISCOUS_ACCELERATIONS_ON_SPH_ELEMENT_INTERACTIONS

This hook is intended for overriding the built-in calculations of the
accelerations caused by viscous forces in element-to-element
interactions. When a custom module including code associated to this
hook is active on a simulation, the internal calculation of the viscous
forces is skipped and the value returned by the implemented code is used
instead. Such code may be used for implementing a SPH discretization of
the Newtonian viscous term different from the built-in alternatives in
Rocky, or, otherwise, for introducing a specific non-Newtonian viscosity
law. The associated code must end with a `return` statement that returns the
calculated viscous acceleration, followed by a closing
`ROCKY_PLUGIN_VISCOUS_ACCELERATIONS_ON_SPH_ELEMENT_INTERACTIONS_END()` statement.

**Parameters:**

-   `IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElementInteraction& sph_interaction`

    An object representing a pair of SPH elements located within the
    support region of each other.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE` for pointing to a local `struct`
    containing custom data.

*Note: Rocky must be informed also that
the module implements viscous
accelerations, by including the
`sph_viscous_force_model` attribute
in the module’s specification file, as
explained in chapter [Module specification](module_specification.md).*

#### ROCKY_PLUGIN_VISCOUS_ACCELERATIONS_ON_SPH_TRIANGLE_INTERACTIONS


This hook is intended for overriding the built-in calculations of the
accelerations caused by viscous forces in element-to-geometry-triangle
interactions. When a custom module including code associated to this
hook is active on a simulation, the internal calculation of the viscous
forces is skipped and the value returned by the implemented code is used
instead. Such code may be used for implementing a SPH discretization of
the Newtonian viscous term different from the built-in alternatives in
Rocky, or, otherwise, for introducing a specific non-Newtonian viscosity
law. The associated code must end with a `return` statement that returns the
calculated viscous acceleration, followed by a closing
`ROCKY_PLUGIN_VISCOUS_ACCELERATIONS_ON_SPH_TRIANGLE_INTERACTIONS_END()` statement.

*Note: Rocky must be informed also that
the module implements viscous
accelerations, by including the
`sph_viscous_force_model` attribute
in the module’s specification file, as
explained in chapter [Module specification](module_specification.md)*

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElementInteraction& sph_interaction`
    An object representing a pair of SPH elements located within the
    support region of each other.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE` for pointing to a local `struct`
    containing custom data.

#### ROCKY_PLUGIN_PRE_FORCE_ON_SPH_ELEMENTS

This is a general-purpose hook executed before the calculation of the
SPH forces, inside a loop over all active SPH elements in a simulation.
It can be used, for instance, for the calculation of element-related
physical magnitudes needed in the subsequent calculation of the
interaction SPH forces. The associated code block must be closed by a
`ROCKY_PLUGIN_PRE_FORCE_ON_SPH_ELEMENTS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   ` IRockySPHElement& sph_element`

    An object representing a SPH element.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_FORCE_ON_SPH_ELEMENT_INTERACTIONS

This is a general-purpose hook executed before the calculation of the
SPH forces, inside a loop over all active SPH element pairs with force
interactions. It can be used, for instance, for the calculation of
physical magnitudes associated to SPH element pairs, needed in the
subsequent calculation of the interaction SPH forces. The associated
code block must be closed by a
`ROCKY_PLUGIN_PRE_FORCE_ON_SPH_ELEMENT_INTERACTIONS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElementInteraction& sph_interaction`

    An object representing a pair of SPH elements located within the
    support region of each other.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_FORCE_ON_SPH_TRIANGLE_INTERACTIONS

This is a general-purpose hook executed before the calculation of the
SPH forces, inside a loop over all active interactions between SPH
elements and geometry triangles. It can be used, for instance, for the
calculation of physical magnitudes associated to those interactions,
needed in the subsequent calculation of the interaction SPH forces. The
associated code block must be closed by a
`ROCKY_PLUGIN_PRE_FORCE_ON_SPH_TRIANGLE_INTERACTIONS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   ` IRockySPHTriangleInteraction& sph_interaction`

    An object representing an interacting pair SPH element-geometry
    triangle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_FORCE_ON_SPH_ELEMENTS

This is a general-purpose hook executed after the calculation of the SPH
forces, inside a loop over all active SPH elements in a simulation. The
associated code block must be closed by a
`ROCKY_PLUGIN_POST_FORCE_ON_SPH_ELEMENTS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   ` IRockySPHElement& sph_element`

    An object representing a SPH element.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_FORCE_ON_SPH_ELEMENT_INTERACTIONS

This is a general-purpose hook executed after the calculation of the SPH
forces, inside a loop over all active SPH element pairs with force
interactions. The associated code block must be closed by a `ROCKY_PLUGIN_POST_FORCE_ON_SPH_ELEMENT_INTERACTIONS_END()`
statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElementInteraction& sph_interaction`

    An object representing a pair of SPH elements located within the
    support region of each other.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_FORCE_ON_SPH_TRIANGLE_INTERACTIONS

This is a general-purpose hook executed after the calculation of the SPH
forces, inside a loop over all active interactions between SPH elements
and geometry triangles. The associated code must be closed by a
`ROCKY_PLUGIN_PRE_FORCE_ON_SPH_TRIANGLE_INTERACTIONS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   ` IRockySPHTriangleInteraction& sph_interaction`

    An object representing an interacting pair SPH element-geometry
    triangle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_MOVE_ON_SPH_ELEMENTS

This is a general-purpose hook executed before the solution of the
motion equations for the SPH elements, inside a loop over all active SPH
elements in a simulation. The associated code block must be closed by a
`ROCKY_PLUGIN_PRE_MOVE_ON_SPH_ELEMENTS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   ` IRockySPHElement& sph_element`

    An object representing a SPH element.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_MOVE_ON_SPH_ELEMENT_INTERACTIONS

This is a general-purpose hook executed before the solution of the
motion equations for the SPH elements, inside a loop over all active SPH
element pairs with force interactions. The associated code must end with
a `ROCKY_PLUGIN_PRE_MOVE_ON_SPH_ELEMENT_INTERACTIONS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElementInteraction& sph_interaction`

    An object representing a pair of SPH elements located within the
    support region of each other.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_MOVE_ON_SPH_TRIANGLE_INTERACTIONS

This is a general-purpose hook executed before the solution of the
motion equations for the SPH elements, inside a loop over all active
interactions between SPH elements and geometry triangles. The code must
end with a `ROCKY_PLUGIN_PRE_MOVE_ON_SPH_TRIANGLE_INTERACTIONS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   ` IRockySPHTriangleInteraction& sph_interaction`

    An object representing an interacting pair SPH element-geometry
    triangle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_MOVE_ON_SPH_ELEMENTS

This is a general-purpose hook executed after the solution of the motion
equations for the SPH elements, inside a loop over all active SPH
elements in a simulation. The associated code block must be closed by a
`ROCKY_PLUGIN_POST_MOVE_ON_SPH_ELEMENTS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   ` IRockySPHElement& sph_element`

    An object representing a SPH element.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_MOVE_ON_SPH_ELEMENT_INTERACTIONS

This is a general-purpose hook executed after the solution of the motion
equations for the SPH elements, inside a loop over all active SPH
element pairs with force interactions. The associated code must end with
a `ROCKY_PLUGIN_POST_MOVE_ON_SPH_ELEMENT_INTERACTIONS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElementInteraction& sph_interaction`

    An object representing a pair of SPH elements located within the
    support region of each other.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_MOVE_ON_SPH_TRIANGLE_INTERACTIONS

This is a general-purpose hook executed after the solution of the motion
equations for the SPH elements, inside a loop over all active
interactions between SPH elements and geometry triangles. The code must
end with a `ROCKY_PLUGIN_POST_MOVE_ON_SPH_TRIANGLE_INTERACTIONS_END()` statement.

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   ` IRockySPHTriangleInteraction& sph_interaction`

    An object representing an interacting pair SPH element-geometry
    triangle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_HEAT_TRANSFER_ON_SPH_ELEMENT_INTERACTIONS

This is the hook that a custom module must use for overriding the
built-in SPH element-to-element thermal calculations implemented within
the Rocky solver.

The code associated to this hook will be executed before solving the
motion equations of DEM particles and SPH elements, as shown in Figure
3.3. The custom code must calculate the heat transfer rate going from free SPH
elements to other free SPH elements and also from free SPH elements to
SPH elements linked to DEM particles. On the other hand, the thermal
interaction between two linked SPH elements can be ignored, since the
heat exchanged between DEM particles is handled by the code related to
DEM. To work properly, a custom SPH thermal module must also implement
the calculation of the SPH element-to-geometry-triangle heat transfer
rate within the `ROCKY_PLUGIN_HEAT_TRANSFER_ON_SPH_TRIANGLE_INTERACTIONS`
hook. The update of the temperature of all SPH particles will be made
internally by the Rocky solver based on the balance of thermal energy.

The associated code must end with a `return` statement that returns the
calculated heat transfer rate value, followed by a closing
`ROCKY_PLUGIN_HEAT_TRANSFER_ON_SPH_ELEMENT_INTERACTIONS_END()` statement.

*Note: The specification's file of such a module must include the definition of the
`sph_heat_transfer_model` attribute, in order to be recognized as a module
implementing a custom SPH thermal model.*

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElementInteraction& sph_interaction`

    An object representing a pair of SPH elements located within the
    support region of each other.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_HEAT_TRANSFER_ON_SPH_TRIANGLE_INTERACTIONS

This is the hook that a custom module must use for overriding the
built-in SPH element-to-geometry triangle thermal calculations
implemented within the Rocky solver.

The code associated to this hook will be executed immediately after the
`ROCKY_PLUGIN_HEAT_TRANSFER_ON_SPH_ELEMENT_INTERACTIONS` hook and before
solving the motion equations of DEM particles and SPH
elements, as shown in Figure 3.3. The custom code must calculate only the heat
transfer rate exchanged between free SPH elements and geometry
triangles. The thermal interaction between linked SPH elements and
geometry triangles can be ignored, because it is handled by the
DEM-related code.

The associated code must end with a `return` statement that returns the
calculated heat transfer rate value, followed by a closing
`ROCKY_PLUGIN_HEAT_TRANSFER_ON_SPH_TRIANGLE_INTERACTIONS_END()` statement.

*Note: The specification's file of such a module must include the definition of the
`sph_heat_transfer_model` attribute, in order to be recognized as a module
implementing a custom SPH thermal model*

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   ` IRockySPHTriangleInteraction& sph_interaction`

    An object representing an interacting pair SPH element-geometry
    triangle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_MOLECULAR_VISCOSITY_ON_SPH_ELEMENTS

This hook allows SDK users to override the viscosity value set in the UI.
The code associated to this hook will be executed during initialization and on every iteration
before the SPH viscous force calculations.

The associated code must end with a `return` statement that returns the
calculated viscosity value, followed by a closing
`ROCKY_PLUGIN_MOLECULAR_VISCOSITY_ON_SPH_ELEMENTS_END()` statement.

*Note: The specification file of such a module must include the definition of the
`sph_variable_molecular_viscosity` attribute, in order to be recognized as a module
implementing a variable molecular viscosity model.*

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockySPHElement& sph_element`

    An object representing an SPH element.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_HEAT_TRANSFER_COEFFICIENT_CORRELATION_ON_TRIANGLES

This hook allows SDK users to calculate the Heat Transfer Coefficient (HTC) on the triangles.
The usage of this hook does not require thermal model to be enabled, since its main usage is to calculate HTC on a triangle through
correlations, with average velocity and average fluid properties on the neighborhood of that triangle as inputs.

The code associated to this hook will be executed immediately before the output step, where the data will be saved in disk.

The associated code must end with a `return` statement that returns the
calculated heat transfer coefficient value, followed by a closing
`ROCKY_PLUGIN_HEAT_TRANSFER_COEFFICIENT_CORRELATION_ON_TRIANGLES_END()` statement.

*Note: The specification file of such a module must include the definition of the
`sph_heat_transfer_coefficient` attribute, in order to be recognized as a module
implementing a variable molecular viscosity model.*

**Parameters:**

-   ` IRockyDeviceModel& model`

    An object that provides general information about the current state
    of the simulation.

-   `IRockySPHDeviceModel& sph_model`

    An object that provides data about current state of the flow model
    discretized using the SPH method.

-   `IRockyGeometryTriangle& triangle`

    An object representing a geometry triangle.

-   `const float3& average_velocity`

    The average velocity of SPH on the neighborhood of the triangle.

-   `const float& average_viscosity`

    The average viscosity on the neighborhood of the triangle.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.


### Output hooks

The current version of the Rocky Solver SDK includes some hooks
intended for enabling modules to deliver custom data to Rocky in order
to be saved, visualized and post-processed. The output of custom data
can be made only at output times, when Rocky's own data is stored in
disk as well.

#### ROCKY_PLUGIN_PRE_OUTPUT_CUDA_SYNC_DATA

When running a simulation in GPU, all custom data is copied to the GPU
devices during the initialization stage and then processed entirely
there. Therefore, when it is required to deliver portions of this data
to Rocky for visualization and post-processing purposes, it has to be
copied back to the CPU.

*Note: The exception are the scalar variaables added by the module, which are synchronized and made available for visualization automatically by Rocky.However, any other custom data that will need to be outputted must be copied to the CPU within this hook.*

This hook is intended primarily for performing
that operation with custom data. The associated code will be executed at
output times, before Rocky performs the output of its own data, as shown
in Figure 3.1.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   ` void *host_data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

-   `int device_id`

    Identifier of an individual GPU.

-   `void *device_data`

    The generic pointer pointing to a copy of a local `struct` in a GPU
    device, provided in `ROCKY_PLUGIN_INITIALIZE_CUDA`.

#### ROCKY_PLUGIN_PRE_OUTPUT

This hook must be used for performing operations on custom data that
need to be done before Rocky begins the writing of output data on disk.
An operation that may be done within this hook is the update of the
datasets that are used to store data that Rocky will display as time
curves and cross-plot curves.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_PRE_OUTPUT_ON_CONTACTS

The code associated to this hook will be executed within a loop
including all active frictional contacts, at a point before the writing
of output data on disk. This hook can be employed for transferring data
stored in contact scalars to other data structures, as it is done, for
instance, on collision statistics modules.

**Parameters:**

-   ` IRockyDeviceModel &device_model`

    An object that provides data about the current state of the
    simulation, stored within a device.

-   `IRockyContact &contact`

    An active frictional contact object.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_OUTPUT_PARTICLE_PROPERTY

The purpose of this hook is to populate particle properties with values
calculated by a custom module. Rocky will display these values per
particle according to a color scale, in the same way as any built-in
particle property.

*Note: This operation is not needed for particle scalars, which are automatically displayed by Rocky as particle properties, if the parameter output is specified as true when creating the scalars with the method `add`.*

The code associated to this hook will be executed
within a nested loop involving all active particles and all custom
particle properties defined previously within the `ROCKY_PLUGIN_SETUP_OUTPUT_PROPERTIES` hook.

**Parameters:**

-   `IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `IRockyParticleHost& particle`

    An active particle.

-   `int property_id`

    The index associated to the custom particle property for which
    values must be specified within the hook. The value of this index is
    assigned according to the order in which the particle properties
    were specified within the `ROCKY_PLUGIN_SETUP_OUTPUT_PROPERTIES` hook, starting at zero.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_OUTPUT_TRIANGLE_PROPERTY

The purpose of this hook is to populate geometry triangle properties
with values calculated by a custom module. Rocky will display these
values per geometry triangle according to a color scale, in the same way
as any built-in geometry property.

*Note: This operation is not needed for triangle scalars, which are automatically displayed by Rocky as geometry triangle properties, if the parameter output is specified as `true` when creating the scalars with the method `add`.*

The code associated to this hook will be executed within a nested loop involving all active particles and all
custom triangle properties defined previously within the `ROCKY_PLUGIN_SETUP_OUTPUT_PROPERTIES` hook.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `IRockyParticleHost& particle`

    An active particle.

-   `int property_id`

    The index associated to the custom triangle property for which
    values must be specified within the hook. The value of this index is
    assigned according to the order in which the triangle properties
    were specified within the `ROCKY_PLUGIN_SETUP_OUTPUT_PROPERTIES`
    hook, starting at zero.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_POST_OUTPUT

This hook must be used for performing simple operations on custom data
after an output has been made, such as resetting counters or
accumulators.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.


#### ROCKY_PLUGIN_END_ITERATION

The code attached to this hook is executed when the cycle of
calculations for a time step ends, right before starting a new time step,
in Figure 3.1.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation. For a
    list of all the methods associated to `IRockyModel`, see chapter
    [Class Reference](class_reference_index.md).

-   `void *data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE`, pointing to the user's custom data.

#### ROCKY_PLUGIN_END_ITERATION_CUDA

This hook is placed also at the end of a cycle of
calculations, but it is executed on each one of the active GPU devices,
when a simulation runs in GPU.

**Parameters:**

-   ` IRockyModel &model`

    Provides data about the general configuration of a simulation.

-   `void *host_data`

    The generic pointer provided in `ROCKY_PLUGIN_CONFIGURE` for pointing to a local `struct`.

-   `int device_id`

    Identifier of an individual GPU.

-   `void *&device_data`

    The generic pointer pointing to a copy of a local `struct` in a GPU
    device, provided in `ROCKY_PLUGIN_INITIALIZE_CUDA`.