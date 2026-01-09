## Glossary<p id="glossary"></p>

The glossary below includes the definition of the main terms and
concepts used in the description of the Rocky Solver SDK in the
remainder of this manual.

### Adhesive contact<p id="adhesive-contact"></p>

A contact in which the interaction force is adhesive. There is no
need of physical contact for an adhesive force to exist between two
entities (two particles or a particle and a boundary triangle). In
Rocky, an adhesive contact will exist if an adhesive model is active
and the gap between the two entities is smaller than the adhesive
distance.

### Adhesive distance<p id="adhesive-distance"></p>

A value defined per material interaction, that specifies the limiting
distance (gap) for an adhesion contact to exist between two entities
associated to that material interaction.

### Boundary<p id="boundary"></p>

A boundary or geometry is each one of the individual surfaces,
formed by boundary triangles, that interacts with the particles during a simulation. A custom module can define custom geometry
properties whose values can be specified in runtime through the
Rocky UI for each boundary in a project.

### Boundary triangle<p id="boundary-triangle"></p>

Each one of the triangles that make up a geometry or boundary.

### CUDA<p id="cuda"></p>

Acronym for Compute Unified Device Architecture, which is a
parallel computing platform that allows developers to use a CUDA-enabled GPU for general purpose processing. It is the platform used
by Rocky to process simulations in GPU.

### Contact<p id="cuda"></p>

Computational representation of any pair particle/particle or
particle/boundary-triangle that has a force interaction at a given
time in a simulation. Rocky is constantly updating the list of active
contacts, according to the instantaneous positions of the particles in
a simulation.

### Contact model pipeline<p id="contact-model-pipeline"></p>

The sequence of calculations made by a contact model, where the
output of one calculation is passed as an input to the next one. It
can be customized through the implementation of a custom contact
model on an external module.

### Device<p id="device"></p>

In CUDA-related operations, it refers to the GPU and its memory.

### Discrete breakage<p id="discrete-breakage"></p>

Breakage modeling applicable only to flexible particles (fibers, shells,
and solid) in which the bonding action of a joint is disabled when
the breakage criterion is satisfied.

### Element<p id="element"></p>

Each one of the pieces that make up a flexible particle. In Rocky,
elements are sphero-cylinders in a flexible fiber, sphero-triangles in
a flexible shell, and tetrahedra in a solid flexible particle.

### Frictional contact<p id="frictional-contact"></p>

A contact in which the two entities are physically touching each
other. That is, there is an actual overlap between the entities and,
therefore, a contact force acting on both of them.


### Home entity<p id="home-entity"></p>

In contexts where a pair of entities is involved, one of these entities
is always labeled as *home*. In contacts, it is always a particle,
independent of the contact type. In joints, it is always an individual
element making up the particle. There is no special rule for labeling
an entity as *home* when the two entities have the same type.

### Hook<p id="hook"></p>

Location within the Rocky solver at which the Rocky Solver SDK
allows modules to insert custom C++ code in order to implement
new functionalities or modify some specific behavior

### Host<p id="host"></p>

In CUDA-related operations, it refers to the CPU and its memory.



### Instantaneous breakage <p id="instantaneous-breakage"></p>

Breakage modeling applicable only to non-flexible polyhedral
particles in which all the resulting fragments are generated at the
same time when the breakage criterion is satisfied.

### Joint<p id="joint"></p>

A joint is the entity that links two elements in a multi-element
flexible particle. A joint applies forces and moments over the joined
elements as a reaction to translational and angular deformations,
respectively. A joint model specifies how those forces and moments
are related to those deformations

### Known scalar<p id="known-scalar"></p>

A type of scalar variable that is defined within the Rocky solver, but
can be accessed from a custom module, if necessary.

### Material<p id="material"></p>

An abstraction of the material that makes up particles or boundaries
in Rocky. A material has associated values of physical properties
that are common to all particles in a particle group or to a whole
boundary.

### Material interaction<p id="material-interaction"></p>

Any of the combinations of two materials defined in a project. A
material interaction is a computational abstraction that associates
common properties to all contacts in which each one of the two
contacting entities is made of one of the two materials considered
in the material interaction. A custom module can define custom
material interaction properties whose values can be specified in
runtime through the Rocky UI for each material interaction in a
project.

### Module<p id="module"></p>

A component which is external to the Rocky core solver and that
implements a specific feature or overrides a built-in model. The
main purpose of the Rocky SDK is to enable users to implement
custom modules.

### Multi-element particle<p id="multi-element-particle"></p>

A flexible particle formed by more than one element. Rocky supports
three types of multi-element particles: fibers, shells and solid
particles.

### Near entity<p id="near-entity"></p>

In contexts where a pair of entities is involved, one of these entities
is always labeled as near. In contacts, it is always the entity (particle or triangle) in contact with the home particle. In joints, it is always
the individual element that is linked to the home element by a joint.

### Particle group<p id="particle-group"></p>

A collection of particles with the same shape, material, and other
defining characteristics, such as size distribution, flexibility, breakage
capabilities, etc.

### Point cloud<p id="point-cloud"></p>

A set of points without a connectivity structure, located inside the
solution domain. The spatial distribution of one or more physical
quantities can be defined by assigning values to each point belonging
to a point cloud. Those values can be retrieved during the execution
of a simulation though special SDK methods, in order to be used in
custom models.

### SPH element<p id="sph-element"></p>

Each one of the material particles that make up a fluid phase
described numerically using the SPH method. By construction,
the mass of a SPH element is invariable throughout the simulation.
There are two main types of SPH elements considered in Rocky: free
elements and linked or coupled elements. The former are regular SPH
elements within the fluid phase, while the latter are auxiliary SPH
elements placed inside solid particles in order to model the physical
interaction between those particles and the fluid.

### SPH interaction<p id="sph-interaction"></p>

A computational representation of a pair formed by two SPH
elements or by a SPH element and a boundary triangle that have
physical interaction at a given instant of time. Within the code, an
interaction of the former type is usually referred to as a SPH element
interaction, while an interaction of the latter type is called a SPH
triangle interaction. Thoughout the simulation, Rocky periodically
updates the lists of SPH interactions, based on the instantaneous
positions of SPH elements and boundary triangles.

### SPH kernel<p id="sph-kernel"></p>

A bell-shaped function of compact support used to approximate the
fluid dynamics equations in SPH. In the discretization process, the
physical quantities associated to a SPH element are smoothed over
a spherical region around the element by applying the SPH kernel
function. The value of the kernel function decreases monotonically
to zero over that region, whose radius is commonly called the kernel
radius. Only SPH elements located at a distance smaller than the
kernel radius of other SPH elements are considered to have a force
interaction between them

### Scalar<p id="scalar"></p>

A special type of variable associated to a specific type of entity
in Rocky (particles, boundary triangles, joints, or contacts) that is
designed to store values that persist throughout a simulation.

### Smoothed Particle Hydrodynamics (SPH)<p id="smoothed-particle-hydrodynamics-sph"></p>

A numerical method for solving the equations of fluid dynamics.
This method is closely related to the Discrete Element Method (DEM)
used in Rocky for simulating the motion of solid particles, since the
fluid is represented by discrete elements of constant mass whose
motion is determined by integration of Newton’s second law.

### Transfer scalar<p id="transfer-scalars"></p>

A type of scalar variable whose values are reset automatically at the
beginning of each new time iteration. Currently defined only for
particles, it is typically used to sum values coming from different
contacts associated to a particle at a given time

