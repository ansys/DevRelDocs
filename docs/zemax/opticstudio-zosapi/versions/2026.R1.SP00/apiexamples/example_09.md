# Example 09: NSC CAD
Ex 9: A new non-sequential file is opened and saved to the API sample folder. Object 1 is changed to CAD Part: STEP/IGES/SAT. This object type requires the user to choose from a list of available CAD objects within the Objects directory. The list is accessed and searched to find “ExtPoly.stp”. Once ExtPoly.stp is inserted into the editor, its surface-to-face mapping is updated. Creation of a polygon object file is then demonstrated by directly writing a POB file. Using the POB syntax, a cube is defined and inserted as object 2 into the NSCE.

    Input:		Zemax\Objects\CAD Files\ExtPoly.stp

    Output:		API\e09_NSC_CAD.zos
                Zemax\Objects\Polygon Objects\API_cube_demo.pob


[C#](example_09_cs.md)

[C++](example_09_cpp.md)

[Matlab](example_09_m.md)

[Python](example_09_py.md)

