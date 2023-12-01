# Table of Contents

* [ansyscodefest](#ansyscodefest)
* [ansyscodefest.constants](#ansyscodefest.constants)
    * [BeamXn](#ansyscodefest.constants.BeamXn)
* [ansyscodefest.main](#ansyscodefest.main)
    * [Start](#ansyscodefest.main.Start)
    * [Bridge](#ansyscodefest.main.Bridge)
      * [assess\_for\_breaks](#ansyscodefest.main.Bridge.assess_for_breaks)
      * [plot](#ansyscodefest.main.Bridge.plot)
    * [BuildyMcBuildFace](#ansyscodefest.main.BuildyMcBuildFace)
      * [suggest\_a\_design](#ansyscodefest.main.BuildyMcBuildFace.suggest_a_design)
      * [get\_fixed\_nodes](#ansyscodefest.main.BuildyMcBuildFace.get_fixed_nodes)
      * [display\_problem](#ansyscodefest.main.BuildyMcBuildFace.display_problem)
      * [attempt\_count](#ansyscodefest.main.BuildyMcBuildFace.attempt_count)
      * [build\_bridge](#ansyscodefest.main.BuildyMcBuildFace.build_bridge)
      * [plot\_design](#ansyscodefest.main.BuildyMcBuildFace.plot_design)
      * [calculate\_design\_cost](#ansyscodefest.main.BuildyMcBuildFace.calculate_design_cost)
    * [rotate\_coordinates](#ansyscodefest.main.rotate_coordinates)
    * [degrees\_to\_radians](#ansyscodefest.main.degrees_to_radians)
    * [save\_pymapdl\_script](#ansyscodefest.main.save_pymapdl_script)
* [ansyscodefest.mechanics.core](#ansyscodefest.mechanics.core)
    * [BlueprintConstructionException](#ansyscodefest.mechanics.core.BlueprintConstructionException)
    * [TypeNode](#ansyscodefest.mechanics.core.TypeNode)
    * [Vector](#ansyscodefest.mechanics.core.Vector)
      * [zero](#ansyscodefest.mechanics.core.Vector.zero)
      * [is\_non\_zero](#ansyscodefest.mechanics.core.Vector.is_non_zero)
    * [BooleanVector](#ansyscodefest.mechanics.core.BooleanVector)
      * [all\_true](#ansyscodefest.mechanics.core.BooleanVector.all_true)
      * [all\_false](#ansyscodefest.mechanics.core.BooleanVector.all_false)
      * [true](#ansyscodefest.mechanics.core.BooleanVector.true)
      * [false](#ansyscodefest.mechanics.core.BooleanVector.false)
    * [NodalBoundaryCondition](#ansyscodefest.mechanics.core.NodalBoundaryCondition)
      * [remove\_all\_freedoms](#ansyscodefest.mechanics.core.NodalBoundaryCondition.remove_all_freedoms)
      * [remove\_translation\_freedoms](#ansyscodefest.mechanics.core.NodalBoundaryCondition.remove_translation_freedoms)
      * [remove\_rotational\_freedoms](#ansyscodefest.mechanics.core.NodalBoundaryCondition.remove_rotational_freedoms)
      * [add\_translation\_freedoms](#ansyscodefest.mechanics.core.NodalBoundaryCondition.add_translation_freedoms)
      * [add\_rotational\_freedoms](#ansyscodefest.mechanics.core.NodalBoundaryCondition.add_rotational_freedoms)
      * [has\_applied\_force](#ansyscodefest.mechanics.core.NodalBoundaryCondition.has_applied_force)
      * [fixed\_point](#ansyscodefest.mechanics.core.NodalBoundaryCondition.fixed_point)
      * [free\_point](#ansyscodefest.mechanics.core.NodalBoundaryCondition.free_point)
    * [Node](#ansyscodefest.mechanics.core.Node)
      * [start\_node](#ansyscodefest.mechanics.core.Node.start_node)
      * [end\_node](#ansyscodefest.mechanics.core.Node.end_node)
      * [rock\_node](#ansyscodefest.mechanics.core.Node.rock_node)
      * [constructed\_node](#ansyscodefest.mechanics.core.Node.constructed_node)
      * [is\_valid](#ansyscodefest.mechanics.core.Node.is_valid)
    * [CrossSection](#ansyscodefest.mechanics.core.CrossSection)
      * [area](#ansyscodefest.mechanics.core.CrossSection.area)
      * [is\_valid](#ansyscodefest.mechanics.core.CrossSection.is_valid)
    * [Beam](#ansyscodefest.mechanics.core.Beam)
      * [length](#ansyscodefest.mechanics.core.Beam.length)
      * [cross\_section\_area](#ansyscodefest.mechanics.core.Beam.cross_section_area)
      * [mass](#ansyscodefest.mechanics.core.Beam.mass)
      * [cost](#ansyscodefest.mechanics.core.Beam.cost)
      * [has\_been\_broken](#ansyscodefest.mechanics.core.Beam.has_been_broken)
      * [is\_valid](#ansyscodefest.mechanics.core.Beam.is_valid)
      * [is\_beam\_allowed](#ansyscodefest.mechanics.core.Beam.is_beam_allowed)
    * [Blueprint](#ansyscodefest.mechanics.core.Blueprint)
      * [grid\_lims](#ansyscodefest.mechanics.core.Blueprint.grid_lims)
      * [is\_valid](#ansyscodefest.mechanics.core.Blueprint.is_valid)
      * [mass](#ansyscodefest.mechanics.core.Blueprint.mass)
      * [cost](#ansyscodefest.mechanics.core.Blueprint.cost)
      * [save\_as](#ansyscodefest.mechanics.core.Blueprint.save_as)
      * [with\_challenge\_attempt\_geometry](#ansyscodefest.mechanics.core.Blueprint.with_challenge_attempt_geometry)
    * [Simulation](#ansyscodefest.mechanics.core.Simulation)
      * [setup](#ansyscodefest.mechanics.core.Simulation.setup)
      * [set\_materials](#ansyscodefest.mechanics.core.Simulation.set_materials)
      * [set\_cross\_section](#ansyscodefest.mechanics.core.Simulation.set_cross_section)
      * [construct\_nodes](#ansyscodefest.mechanics.core.Simulation.construct_nodes)
      * [construct\_beams](#ansyscodefest.mechanics.core.Simulation.construct_beams)
      * [apply\_force](#ansyscodefest.mechanics.core.Simulation.apply_force)
      * [constrain\_dof](#ansyscodefest.mechanics.core.Simulation.constrain_dof)
      * [solve](#ansyscodefest.mechanics.core.Simulation.solve)
      * [execute](#ansyscodefest.mechanics.core.Simulation.execute)
      * [post\_process](#ansyscodefest.mechanics.core.Simulation.post_process)
      * [assess\_for\_breaks](#ansyscodefest.mechanics.core.Simulation.assess_for_breaks)
      * [fetch\_beam\_stresses](#ansyscodefest.mechanics.core.Simulation.fetch_beam_stresses)
      * [plot\_result](#ansyscodefest.mechanics.core.Simulation.plot_result)
    * [calc\_distance\_between\_vectors](#ansyscodefest.mechanics.core.calc_distance_between_vectors)

<a id="ansyscodefest"></a>

# ansyscodefest

<a id="ansyscodefest.constants"></a>

# ansyscodefest.constants

<a id="ansyscodefest.constants.BeamXn"></a>

## BeamXn Objects

```python
class BeamXn(IntEnum)
```

Beam cross-section enum.

In PyMAPDL the beam cross-sections correspond to the following sectypes.

* RECT = RECTANGLE = 1
* HREC = RECTANGLETUBE = 4
* CSOLID = CIRCLE = 2
* CTUBE = CYLINDER = 3

##### Examples

```python
>>> import ansyscodefest as acf
>>> acf.BeamXn.RECTANGLE
<BeamXn.RECTANGLE: 1>
```

<a id="ansyscodefest.main"></a>

# ansyscodefest.main

Python package designed to facilitate the Ansys Codefest structured challenges.
This package is designed to operate in the Ansys Notebook environment.

To tackle the challenges in the Codefest run the `Start` function and
store the objects that are returned. Each is a `challenge` which can be
tackled. Instructions for each challenge will be available on the developer
portal.

```Python
>>> import ansyscodefest as acf
>>> buildy = acf.Start.levelup()
```

##### Meaning of `mc.`

Additionally, this library contains a work-in-progress sandbox tool,
which can be accessed via the mechanics sub-package, but if you are tackling
a challenge as part of an event it is not recommended to try this out.

Some objects you will come across in the challenges are from this module.
Those which are, like the `mc.Beam` objects, will be given the `mc` namespace
alias to denote their origin.

```Python
>>> import ansyscodefest.mechanics.core as mc
```
##### `SUBMISSION` type

The `SUBMISSION` type is used in several places in the docstrings.
This corresponds to the following type:

`SUBMISSION = Dict[str, Union[List[List[int]], List[int], List[float], BeamXn]]`

<a id="ansyscodefest.main.Start"></a>

## Start Objects

```python
class Start()
```

Collection of codefest-starting methods.

Some methods optionally take a level number.

##### Examples

```python
>>> import ansyscodefest as acf
>>> builder = acf.Start().levelup()
```

<a id="ansyscodefest.main.Bridge"></a>

## Bridge Objects

```python
@dataclass
class Bridge()
```

Bridge class returned after a simulation has been executed.

Possesses a few simple post-processing methods for simulations.

<a id="ansyscodefest.main.Bridge.assess_for_breaks"></a>

#### assess\_for\_breaks

```python
def assess_for_breaks(
        display: bool = False) -> Tuple[bool, str, List[mc.Beam]]
```

Assess which beams have broken, if any, and return a report.

Returns a bool to say if the bridge was successful or not, as well
as the feedback as a string and a list of beam objects containing the
stresses of each beam.

**Returns**:

  `Tuple[bool, str, List[mc.Beam]]`

<a id="ansyscodefest.main.Bridge.plot"></a>

#### plot

```python
def plot()
```

Plot the simulation's stresses and return the figure, axes,
and colorbar objects.

**Returns**:

  `Tuple[plt.Figure, plt.Axes, mpl.colorbar.Colorbar]`

<a id="ansyscodefest.main.BuildyMcBuildFace"></a>

## BuildyMcBuildFace Objects

```python
@dataclass
class BuildyMcBuildFace()
```

Instance of the bridge-building machine: BuildyMcBuildFace.

You can submit attempts and look at the challenge input via this class.
Instances of this class should NOT be created directly, but should be
created by one of the `Start` methods.

<a id="ansyscodefest.main.BuildyMcBuildFace.suggest_a_design"></a>

#### suggest\_a\_design

```python
def suggest_a_design() -> SUBMISSION
```

Return a working design that solves the problem if one is available.

If a design is not available, then an empty dictionary is returned and
a warning raised.

**Notes**:

  This design will work, but it will not be optimal and may be extremely
  inefficient and/or costly. It is meant as an example and a starting
  point.
  

**Returns**:

  `SUBMISSION`

<a id="ansyscodefest.main.BuildyMcBuildFace.get_fixed_nodes"></a>

#### get\_fixed\_nodes

```python
def get_fixed_nodes() -> List[List[int]]
```

Get a list of the fixed nodes (rocks + start + end).

Returns a list of all rock nodes as well as the start and end nodes.
A "node" in this list is a list of 3 integers:

`[node_number, x_coord, y_coord]`


**Notes**:

  Rock node numbers start at N + 1, where N is the number of nodes on the
  problem square. E.g. if your problem square is 23 x 23, then N = 23^2
  N = 529, so the first rock node number will be 530, the second 531, and
  so on.
  
  The Start and End nodes are ALWAYS numbered 1 and 2, respectively.
  

**Returns**:

  `List[List[int]]`

<a id="ansyscodefest.main.BuildyMcBuildFace.display_problem"></a>

#### display\_problem

```python
def display_problem() -> None
```

Print the summary text of the challenge.

**Returns**:

  `None`

<a id="ansyscodefest.main.BuildyMcBuildFace.attempt_count"></a>

#### attempt\_count

```python
@property
def attempt_count() -> int
```

Return number of attempted bridges made so far.

Return number of times you submitted a design as an integer. Only
valid designs are counted.

**Returns**:

  `int`

<a id="ansyscodefest.main.BuildyMcBuildFace.build_bridge"></a>

#### build\_bridge

```python
def build_bridge(design: SUBMISSION,
                 plot: bool = False,
                 display: bool = True) -> Bridge
```

Construct bridge from a design.

Depending on the design this step may take time. The method does
three things in this order:


1. Validate the design can be used to create a simulation
2. Create a simulation blueprint from the design
3. Create a simulation from the blueprint and execute it
4. Create a Bridge object with the simulation and return it

Steps 1 and 2 are typically very fast, but 3 can take significantly
longer depending on the complexity of your design.

If your submission does not pass the validation
step, it does not count as an attempt. Include plot=True
as an arg if you'd like matplotlib to plot the result as well.#

**Arguments**:

  `design : Dict[str, Union[List[List[int]], List[int], List[float], BeamXn]]`
  
  `plot : bool`
  
  `display : bool`
  

**Returns**:

  `Bridge`
  
  ##### Examples
```python
>>> import ansyscodefest as acf
>>> example = acf.Start.example(1)
>>> design = example.suggest_a_design()
>>> bridge = example.build_bridge(design, plot=False)
>>> success, feedback, beams = bridge.assess_for_breaks()
>>> success
False
>>> feedback
"..."
```
  
  Materials can optionally be included in the design as a list of IDs
  (integers) that correspond to the list of beams.
  See all the materials available (and their IDs) by accessing the
  `acf.MATERIALS` dict.
  
```python
>>> acf.MATERIALS
```

<a id="ansyscodefest.main.BuildyMcBuildFace.plot_design"></a>

#### plot\_design

```python
def plot_design(
    design: SUBMISSION,
    beams: List[mc.Beam] = None
) -> Tuple[plt.Figure, plt.Axes, mpl.colorbar.Colorbar]
```

Plot a bridge design using matplotlib, return fig, ax, and colorbar.

Optionally you can include the list of beams with results to plot the
stresses on each as well.

**Arguments**:

- ``design` - SUBMISSION`
  
- ``beams` - List[mc.Beam]`
  

**Returns**:

  `Tuple[plt.Figure, plt.Axes, mpl.colorbar.Colorbar]`

<a id="ansyscodefest.main.BuildyMcBuildFace.calculate_design_cost"></a>

#### calculate\_design\_cost

```python
def calculate_design_cost(design: SUBMISSION) -> float
```

Calculate how much the provided design would cost

This does not perform a simulation and the result is returned as
a float in dollars.


**Arguments**:

  `design : Dict[str, Union[List[List[int]], List[int], List[float], BeamXn]]`
  

**Returns**:

  `float`

<a id="ansyscodefest.main.rotate_coordinates"></a>

#### rotate\_coordinates

```python
def rotate_coordinates(nodes: List[List[int]],
                       rotation: float) -> List[List[int]]
```

Rotate a set of coordinates in the x-y plane about an angle in degrees.

Works on nodes with any dimension greater than or equal to two.


**Arguments**:

  `nodes : List[List[int]]`
  
  `rotation : float`
  

**Returns**:

  `List[List[int]]`

<a id="ansyscodefest.main.degrees_to_radians"></a>

#### degrees\_to\_radians

```python
def degrees_to_radians(theta: float) -> float
```

Convert degrees to radians.

**Arguments**:

  `theta : float`
  

**Returns**:

  `float`

<a id="ansyscodefest.main.save_pymapdl_script"></a>

#### save\_pymapdl\_script

```python
def save_pymapdl_script(save_path: pathlib.Path = pathlib.Path(
    './pymapdl_bridge_simulator.py'))
```

Save the PyMAPDL script version of the builder to file.

Defaults to your local directory.

**Arguments**:

  `save_path : pathlib.Path`
  

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core"></a>

# ansyscodefest.mechanics.core

`ansyscodefest.mechanics`

`ansyscodefest` sandbox sub-package.

Work-in-progress; the interface is still subject to change.

The broad structure of the sandbox challenge is as follows.

1. Create the nodes & the boundary conditions at each node
    * including degrees of freedom and forces
2. Create the beams, and set the materials for each beam
3. Create a blueprint from the nodes and beams
4. Create a simulation from the blueprint
5. Run the simulation
6. Process the results

> Nodes -> Beams -> Blueprint -> Simulation

## Examples

In this simple example we create a pair of nodes, connected by a horizontal
beam with a downward force applied to one of the nodes, perpendicular to the
beam. The other node we fix in space.

```Python
import ansyscodefest.mechanics as mc
import matplotlib.pyplot as plt

nodes = [mc.Node(1, mc.Vector.zero(), mc.NodalBoundaryCondition.fixed_point()),
         mc.Node(2, mc.Vector(.8, 0., 0.), mc.NodalBoundaryCondition.free_point(mc.Vector(0., -100., 0.)))]
beams = [mc.Beam(nodes[0], nodes[1])]

blueprint = mc.Blueprint(nodes, beams)

sim = mc.Simulation(blueprint)
sim.execute()
sim.plot_result()
plt.show()
```

<a id="ansyscodefest.mechanics.core.BlueprintConstructionException"></a>

## BlueprintConstructionException Objects

```python
class BlueprintConstructionException(Exception)
```

Exception raised when a blueprint is transformed into a simulation
and an error is encountered.

<a id="ansyscodefest.mechanics.core.TypeNode"></a>

## TypeNode Objects

```python
class TypeNode(IntEnum)
```

Enum for the type a node can be.

START nodes are those at which you enter a cavern.
END nodes are the exit nodes for the caverns.
CONSTRUCTED nodes are built by yourself or your machine.
ROCK nodes are fixed nodes that are pre-existing in the caverns.

##### Examples

```python
>>> new = TypeNode.START
>>> new
<TypeNode.START: 1>
```

<a id="ansyscodefest.mechanics.core.Vector"></a>

## Vector Objects

```python
@dataclass
class Vector()
```

3D Float vector dataclass

Simple 3D vector class for simple operations. Typically used for position,
velocity, force, etc. The z-value can be assumed to be 0 because this
framework deals only with 2D problems for now.

##### Examples

```python
>>> import ansyscodefest.mechanics.core as mc
>>> v = mc.Vector(1., 2., 3.)
```

<a id="ansyscodefest.mechanics.core.Vector.zero"></a>

#### zero

```python
@classmethod
def zero(cls) -> 'Vector'
```

Class method to generate a zero-vector

**Returns**:

  `mc.Vector`

<a id="ansyscodefest.mechanics.core.Vector.is_non_zero"></a>

#### is\_non\_zero

```python
def is_non_zero() -> bool
```

Return True if any component in the vector is non-zero.

**Returns**:

  `bool`

<a id="ansyscodefest.mechanics.core.BooleanVector"></a>

## BooleanVector Objects

```python
@dataclass
class BooleanVector()
```

3D Boolean vector dataclass.

Simple 3D vector class for simple boolean operations.
Typically used for vectors where components are optional.

The components are explicitly refewrred to as x, y and z.

##### Examples

```python
>>> import ansyscodefest.mechanics.core as mc
>>> bv = mc.BooleanVector(True, False, True)
>>> bv.y
False
>>> bv.z
True
```

<a id="ansyscodefest.mechanics.core.BooleanVector.all_true"></a>

#### all\_true

```python
@classmethod
def all_true(cls) -> 'BooleanVector'
```

Return an instance of BooleanVector which is True in all components

**Returns**:

  `mc.BooleanVector`

<a id="ansyscodefest.mechanics.core.BooleanVector.all_false"></a>

#### all\_false

```python
@classmethod
def all_false(cls) -> 'BooleanVector'
```

Return an instance of BooleanVector which is False in all components

**Returns**:

  `mc.BooleanVector`

<a id="ansyscodefest.mechanics.core.BooleanVector.true"></a>

#### true

```python
@property
def true() -> bool
```

If the vector is True in all components return True.

**Returns**:

  `bool`

<a id="ansyscodefest.mechanics.core.BooleanVector.false"></a>

#### false

```python
@property
def false() -> bool
```

If the vector is False in all components return True.

**Returns**:

  `bool`

<a id="ansyscodefest.mechanics.core.NodalBoundaryCondition"></a>

## NodalBoundaryCondition Objects

```python
@dataclass
class NodalBoundaryCondition()
```

Dataclass storing the boundary conditions at a node.

<a id="ansyscodefest.mechanics.core.NodalBoundaryCondition.remove_all_freedoms"></a>

#### remove\_all\_freedoms

```python
def remove_all_freedoms() -> None
```

Remove all degrees of freedom from the node

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.NodalBoundaryCondition.remove_translation_freedoms"></a>

#### remove\_translation\_freedoms

```python
def remove_translation_freedoms() -> None
```

Remove all translational degrees of freedom from the node

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.NodalBoundaryCondition.remove_rotational_freedoms"></a>

#### remove\_rotational\_freedoms

```python
def remove_rotational_freedoms() -> None
```

Remove all rotational degrees of freedom from the node

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.NodalBoundaryCondition.add_translation_freedoms"></a>

#### add\_translation\_freedoms

```python
def add_translation_freedoms() -> None
```

Add all translational degrees of freedom to the node

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.NodalBoundaryCondition.add_rotational_freedoms"></a>

#### add\_rotational\_freedoms

```python
def add_rotational_freedoms() -> None
```

Add all rotational degrees of freedom to the node

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.NodalBoundaryCondition.has_applied_force"></a>

#### has\_applied\_force

```python
def has_applied_force() -> bool
```

If any force has been applied to the node, return True,
else False.

**Returns**:

  `bool`

<a id="ansyscodefest.mechanics.core.NodalBoundaryCondition.fixed_point"></a>

#### fixed\_point

```python
@classmethod
def fixed_point(
    cls, force: Vector = Vector.zero()) -> 'NodalBoundaryCondition'
```

Create a fixed point boundary condition with no degrees of freedom

optionally, you can also supply a force to be applied to the node.

**Returns**:

  `mc.NodalBoundaryCondition`

<a id="ansyscodefest.mechanics.core.NodalBoundaryCondition.free_point"></a>

#### free\_point

```python
@classmethod
def free_point(cls, force: Vector = Vector.zero()) -> 'NodalBoundaryCondition'
```

Create a free point boundary condition with all degrees of freedom

optionally, you can also supply a force to be applied to the node.

**Arguments**:

  `force : Vector`
  

**Returns**:

  `NodalBoundaryCondition`

<a id="ansyscodefest.mechanics.core.Node"></a>

## Node Objects

```python
@dataclass
class Node()
```

Point used to join beams together and specify BCs.

<a id="ansyscodefest.mechanics.core.Node.start_node"></a>

#### start\_node

```python
@classmethod
def start_node(cls, coord: COORD_2D) -> 'Node'
```

Create an instance of a 'start' node at a given coordinate.

**Arguments**:

  `coord : Tuple[INT_OR_FLOAT, INT_OR_FLOAT]`
  

**Returns**:

  `mc.Node`

<a id="ansyscodefest.mechanics.core.Node.end_node"></a>

#### end\_node

```python
@classmethod
def end_node(cls, coord: COORD_2D) -> 'Node'
```

Create an instance of an 'end' node at a given coordinate.

**Arguments**:

  `coord : Tuple[INT_OR_FLOAT, INT_OR_FLOAT]`
  

**Returns**:

  `mc.Node`

<a id="ansyscodefest.mechanics.core.Node.rock_node"></a>

#### rock\_node

```python
@classmethod
def rock_node(cls, coord: COORD_2D, num: int) -> 'Node'
```

Create an instance of a 'rock' node at a given coordinate.

AKA a fixed point node.

Unlike start and end nodes which have fixed node numbers the rock node
must have a node number specified. This can not be a number in-use
elsewhere.

**Arguments**:

  `coord : Tuple[INT_OR_FLOAT, INT_OR_FLOAT]`
  `num : int`
  

**Returns**:

  `mc.Node`

<a id="ansyscodefest.mechanics.core.Node.constructed_node"></a>

#### constructed\_node

```python
@classmethod
def constructed_node(cls, coord: COORD_2D, num: int) -> 'Node'
```

Create a 'constructed' node. AKA a node from a design.

Unlike start and end nodes which have fixed node numbers constructed
nodes must have a node number specified.
This can not be a number in-use elsewhere.

**Arguments**:

  `coord : Tuple[INT_OR_FLOAT, INT_OR_FLOAT]`
  `num : int`
  

**Returns**:

  `mc.Node`

<a id="ansyscodefest.mechanics.core.Node.is_valid"></a>

#### is\_valid

```python
def is_valid() -> Tuple[bool, List[str]]
```

Returns (True, feedback) if this Node instance is valid for use.

If not valid feedback will be a list of strings explaining why the Node
is invalid.

**Returns**:

  `Tuple[bool, List[str]]`

<a id="ansyscodefest.mechanics.core.CrossSection"></a>

## CrossSection Objects

```python
@dataclass
class CrossSection()
```

Beam cross-section details.

There are 4 cross-sections available:
RECT - BeamXn.RECTANGLE
HREC - BeamXn.RECTANGLETUBE
CSOLID - BeamXn.CIRCLE
CTUBE - BeamXn.CYLINDER

<a id="ansyscodefest.mechanics.core.CrossSection.area"></a>

#### area

```python
@property
def area() -> float
```

Return the cross-sectional area of the beam.

**Returns**:

  `float`

<a id="ansyscodefest.mechanics.core.CrossSection.is_valid"></a>

#### is\_valid

```python
def is_valid() -> Tuple[bool, List[str]]
```

Return True if this instance of CrossSection has valid param values.

If it is not valid, feedback will be a list of strings explaining
why the Node is invalid.

**Returns**:

  `Tuple[bool, List[str]]`

<a id="ansyscodefest.mechanics.core.Beam"></a>

## Beam Objects

```python
@dataclass
class Beam()
```

Continuous material linking two nodes.

<a id="ansyscodefest.mechanics.core.Beam.length"></a>

#### length

```python
@property
def length() -> float
```

Return beam length

**Returns**:

  `float`

<a id="ansyscodefest.mechanics.core.Beam.cross_section_area"></a>

#### cross\_section\_area

```python
@property
def cross_section_area() -> float
```

Return beam cross-section area.

**Returns**:

  `float`

<a id="ansyscodefest.mechanics.core.Beam.mass"></a>

#### mass

```python
@property
def mass() -> float
```

Return Beam mass

**Returns**:

  `float`

<a id="ansyscodefest.mechanics.core.Beam.cost"></a>

#### cost

```python
@property
def cost() -> float
```

Return Beam cost

**Returns**:

  `float`

<a id="ansyscodefest.mechanics.core.Beam.has_been_broken"></a>

#### has\_been\_broken

```python
def has_been_broken() -> bool
```

Return True if the beam has experienced stress >= its yield.

**Returns**:

  `bool`

<a id="ansyscodefest.mechanics.core.Beam.is_valid"></a>

#### is\_valid

```python
def is_valid() -> Tuple[bool, List[str]]
```

Return True if this instance of Beam is valid.

**Returns**:

  `bool`

<a id="ansyscodefest.mechanics.core.Beam.is_beam_allowed"></a>

#### is\_beam\_allowed

```python
def is_beam_allowed() -> Tuple[bool, List[str]]
```

Return True if beam is allowed by the environment.

Difference between 'allowed' and 'valid'.
All allowed beams are valid but not all valid beams are allowed.

**Returns**:

  `Tuple[bool, List[str]]`

<a id="ansyscodefest.mechanics.core.Blueprint"></a>

## Blueprint Objects

```python
@dataclass
class Blueprint()
```

The Plan/Blueprint for a simulation. Contains nodes, beams and BCs.

<a id="ansyscodefest.mechanics.core.Blueprint.grid_lims"></a>

#### grid\_lims

```python
@property
def grid_lims() -> Tuple[Tuple[int, int], Tuple[int, int]]
```

Return the populated grid limits.

**Returns**:

  `Tuple[Tuple[int, int], Tuple[int, int]]`

<a id="ansyscodefest.mechanics.core.Blueprint.is_valid"></a>

#### is\_valid

```python
def is_valid() -> Tuple[bool, str]
```

Returns True if this Blueprint instance is ready to be
converted to a sim.

A blueprint must contain a list of nodes, a list of beams, a load path
(going from node 1 to node 2 via nodes connected by beams), a beam
cross-section value and the dimensions of that cross-section.

**Returns**:

  `Tuple[bool, str]`

<a id="ansyscodefest.mechanics.core.Blueprint.mass"></a>

#### mass

```python
@property
def mass() -> float
```

Return total mass of material in the blueprint.

**Returns**:

  `float`

<a id="ansyscodefest.mechanics.core.Blueprint.cost"></a>

#### cost

```python
@property
def cost() -> float
```

Return total cost of material in the blueprint.

**Returns**:

  `float`

<a id="ansyscodefest.mechanics.core.Blueprint.save_as"></a>

#### save\_as

```python
def save_as(file_path: pathlib.Path = pathlib.Path('./input.txt')) -> None
```

save blueprint to specified file path.

Defaults to "input.txt" in your current working directory.

**Arguments**:

  `file_path : pathlib.Path`
  

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Blueprint.with_challenge_attempt_geometry"></a>

#### with\_challenge\_attempt\_geometry

```python
def with_challenge_attempt_geometry(attempt: SUBMISSION) -> None
```

Add challenge attempt geometry to blueprint.

**Arguments**:

  `attempt : SUBMISSION`
  

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation"></a>

## Simulation Objects

```python
@dataclass
class Simulation()
```

Simulation class. Consumes 1 blueprint instance in order to perform =

<a id="ansyscodefest.mechanics.core.Simulation.setup"></a>

#### setup

```python
def setup() -> _MapdlCore
```

Run the standard MAPDL set up commands and return mapdl namespace.

**Returns**:

  `_MapdlCore`

<a id="ansyscodefest.mechanics.core.Simulation.set_materials"></a>

#### set\_materials

```python
def set_materials() -> None
```

Set the materials as dictated by the blueprint

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation.set_cross_section"></a>

#### set\_cross\_section

```python
def set_cross_section(section: CrossSection) -> None
```

Set the cross-section for all subsequent beams.

**Arguments**:

  `section : mc.CrossSection`
  

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation.construct_nodes"></a>

#### construct\_nodes

```python
def construct_nodes() -> None
```

Construct the simulation's nodes as dictated by the blueprint

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation.construct_beams"></a>

#### construct\_beams

```python
def construct_beams() -> None
```

Construct the simulation's beams/elements as dictated
by the blueprint

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation.apply_force"></a>

#### apply\_force

```python
def apply_force() -> None
```

Apply forces to nodes as dictated by the blueprint

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation.constrain_dof"></a>

#### constrain\_dof

```python
def constrain_dof() -> None
```

Constrain the simulation's nodes as dictated by the blueprint

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation.solve"></a>

#### solve

```python
def solve() -> None
```

Run the simulation

Executes the APDL simulation.

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation.execute"></a>

#### execute

```python
def execute() -> None
```

Run the entire Simulation script in order.

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation.post_process"></a>

#### post\_process

```python
def post_process() -> None
```

Process the results of the simulation.

Extract and store the max equivalent stress on each beam.

**Returns**:

  `None`

<a id="ansyscodefest.mechanics.core.Simulation.assess_for_breaks"></a>

#### assess\_for\_breaks

```python
def assess_for_breaks() -> Tuple[bool, str]
```

Assess which beams have broken, if any, and return a report.

The result will be printed to screen, but, the success and the
description fo what happened will be returned together as a tuple of
a bool and a string.

**Returns**:

  `Tuple[bool, str]`

<a id="ansyscodefest.mechanics.core.Simulation.fetch_beam_stresses"></a>

#### fetch\_beam\_stresses

```python
def fetch_beam_stresses() -> List[Tuple[int, float]]
```

Fetch the stresses on each beam, and include the beam number.

Returns a list of tuples containing the beam number and the stress that
beam experienced.

**Returns**:

  `List[Tuple[int, float]]`

<a id="ansyscodefest.mechanics.core.Simulation.plot_result"></a>

#### plot\_result

```python
def plot_result() -> Tuple[plt.Figure, plt.Axes, mpl.colorbar.Colorbar]
```

Plot the simulation's stresses and return the fig, ax, cb objects

**Returns**:

  `Tuple[plt.Figure, plt.Axes, mpl.colorbar.Colorbar]`

<a id="ansyscodefest.mechanics.core.calc_distance_between_vectors"></a>

#### calc\_distance\_between\_vectors

```python
def calc_distance_between_vectors(v1: Vector, v2: Vector) -> float
```

Calculate the distance between 2 cartesian vectors.

**Arguments**:

  `v1 : mc.Vector`
  `v2 : mc.Vector`
  

**Returns**:

  `float`

