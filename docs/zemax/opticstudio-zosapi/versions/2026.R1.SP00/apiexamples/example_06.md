# Example 06: NSC Phase
Ex 6: A file with a simple spherical wavefront is created using a point source, which propagates to a detector.  Rather than using a Detector Viewer to extract the phase of the wavefront, the GetAllCoherentDataSafe() method is used to extract a 2D array to manually calculate the phase.  The GetAllCoherentDataSafe() method will only return the real & imaginary parts of the electric field, so atan2(image, real) is used to calculate the phase.  Note that for C++, GetAllCoherentData() method is used to return a 1D array which is then read out in nested FOR loops and provides the 2D phase data in the correct orientation.

    Input:		None

    Output:		Graph (Matlab, Python)
                API\e06_nsc_phase.txt (C++, C#)
                API\e06_nsc_phase.zos


[C#](example_06_cs.md)

[C++](example_06_cpp.md)

[Matlab](example_06_m.md)

[Python](example_06_py.md)

