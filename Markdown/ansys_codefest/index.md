# Introduction
    
Ansys Codefest Companion Library

## Getting Started

## Package Information

- Name - ansys-codefest
- Version - 0.2.0
- Author-email - "ANSYS, Inc." <pyansys.core@ansys.com>
- Maintainer-email - "ANSYS, Inc." <pyansys.core@ansys.com>
- Requires-Python - >=3.11,<4
- Description-Content-Type - text/markdown
- Classifier - Development Status :: 4 - Beta
- Classifier - Intended Audience :: Science/Research
- Classifier - Topic :: Scientific/Engineering :: Information Analysis
- Classifier - License :: OSI Approved :: MIT License
- Classifier - Operating System :: OS Independent
- Classifier - Programming Language :: Python :: 3.11
- Classifier - Programming Language :: Python :: 3.12
- Classifier - Programming Language :: Python :: 3.13
- Requires-Dist - Markdown>=3.6
- Requires-Dist - matplotlib>=3.9.0
- Requires-Dist - ipython>=8.10.0
- Requires-Dist - ansys-mapdl-core>0.68.0
- Requires-Dist - jupyter>=1.0.0
- Requires-Dist - pytest >=2.7.3 ; extra == "test"
- Requires-Dist - pytest-cov ; extra == "test"
- Requires-Dist - pre-commit ; extra == "test"
- Requires-Dist - pytest-rerunfailures ; extra == "test"
- Requires-Dist - pytest-cov ; extra == "test"
- Provides-Extra - test

# Ansys CodeFest Companion Library

This package is a companion library to Ansys CodeFests. The challenges have varying storylines and contexts, 
however, they all have the same common framework. For example, to access the PyMAPDL structures challenges, 
execute the following code.

```python
import ansys.codefest.mapdl as acf

# Challenge ids are *always* strings because some contain letters as well as numbers.
challenge = acf.Start.builtin_challenge('1a')
challenge.display_problem()
```

Then, once the specific challenge has been detailed, you can submit solution attempts using the following commands.

```python
import ansys.codefest.mapdl as acf

# Challenge ids are *always* strings because some contain letters as well as numbers.
challenge = acf.Start.builtin_challenge('1a')
design = challenge.suggest_a_design()
bridge = challenge.build_bridge(design)
success, feedback, beams = bridge.assess_for_breaks()
print(f'Bridge costs ${challenge.calculate_design_cost(design)} dollarydoos')
bridge.plot()
```

The program will then test your attempt and provide feedback about what you did wrong (if anything).
Finally, it will give a breakdown of all the elements you used and how close to the yield strength they came as 
percentages.



## Reference

* [Beam](ansys.codefest.mapdl.Beam.md)
* [BeamXn](ansys.codefest.mapdl.BeamXn.md)
* [Blueprint](ansys.codefest.mapdl.Blueprint.md)
* [BlueprintConstructionException](ansys.codefest.mapdl.BlueprintConstructionException.md)
* [BooleanVector](ansys.codefest.mapdl.BooleanVector.md)
* [Bridge](ansys.codefest.mapdl.Bridge.md)
* [BuildyMcBuildFace](ansys.codefest.mapdl.BuildyMcBuildFace.md)
* [Challenge](ansys.codefest.mapdl.Challenge.md)
* [ChallengeError](ansys.codefest.mapdl.ChallengeError.md)
* [CrossSection](ansys.codefest.mapdl.CrossSection.md)
* [Material](ansys.codefest.mapdl.Material.md)
* [NodalBoundaryCondition](ansys.codefest.mapdl.NodalBoundaryCondition.md)
* [Node](ansys.codefest.mapdl.Node.md)
* [PhysicalLimits](ansys.codefest.mapdl.PhysicalLimits.md)
* [Server](ansys.codefest.mapdl.Server.md)
* [Simulation](ansys.codefest.mapdl.Simulation.md)
* [Start](ansys.codefest.mapdl.Start.md)
* [StoryType](ansys.codefest.mapdl.StoryType.md)
* [Submission](ansys.codefest.mapdl.Submission.md)
* [TypeNode](ansys.codefest.mapdl.TypeNode.md)
* [Vector](ansys.codefest.mapdl.Vector.md)
* [calc_distance_between_vectors](ansys.codefest.mapdl.calc_distance_between_vectors.md)
* [degrees_to_radians](ansys.codefest.mapdl.degrees_to_radians.md)
* [rotate_coordinates](ansys.codefest.mapdl.rotate_coordinates.md)
* [save_pymapdl_script](ansys.codefest.mapdl.save_pymapdl_script.md)
* [save_simple_pymapdl_script](ansys.codefest.mapdl.save_simple_pymapdl_script.md)


This reference documentation was automatically generated using [lazydocs](https://github.com/ml-tooling/lazydocs).
        