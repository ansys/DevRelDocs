# Example 07: Tilt and Decenter Elements
Ex 7: Mimics the functionality of the Tilt/Decenter Elements tool, while demonstrating API implementation of design lockdown, calculation of Merit Function operands, and looping over LDE parameters. A sample file is opened, and the Design Lockdown tool is applied to fix the semi-diameters of all of the components. Two Coordinate Break surfaces are added around surfaces 3 and 4 to apply randomized tilts and decenters to the center lens element. We ensure the coordinate system returns to the original following the perturbations by applying a position solve and several pickup solves. To avoid the need for Ray Aiming, the STOP is moved to the first surface before the randomized perturbations are applied. The final file is saved to the API samples folder.

    Input:		Sequential\Objectives\Cooke 40 degree field.zos

    Output:		API\CS\CS_07_TiltDecenterAndMFOperand.zos
                API\CPP\CPP_07_TiltDecenterAndMFOperand.zos
                API\MATLAB\MATLAB_07_TiltDecenterAndMFOperand.zos
                API\Python\Python_07_TiltDecenterAndMFOperand.zos


[C#](example_07_cs.md)

[C++](example_07_cpp.md)

[Matlab](example_07_m.md)

[Python](example_07_py.md)

