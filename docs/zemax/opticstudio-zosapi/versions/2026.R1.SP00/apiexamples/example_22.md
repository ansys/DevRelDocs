# Example 22: Sequential Analysis
Ex 22: A batch ray trace is run in a sequential sample file. A list of 315 rays is generated and passed to ZOS-API for tracing in a single operation. This greatly reduces overhead when tracing a large number of rays.  Resulting ray data is stored and displayed outside of OpticStudio. Using the native OpticStudio spot diagram analysis, geometric and RMS spot radius are retrieved, and are also displayed.

    Input: 		Sequential\Objectives\Double Gauss 28 degree field.zos

    Output:		Graph (Matlab, Python)
                API\e22_seq_spot_diagram.txt (C++, C#)


[C#](example_22_cs.md)

[C++](example_22_cpp.md)

[Mathematica](example_22_nb.md)

[Matlab](example_22_m.md)

[Python](example_22_py.md)

