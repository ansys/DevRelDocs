# Example 16: User-Defined Operand (UDOC)
Ex 16: A user-defined operand (UDOC) is created which provides the total center thickness between 2 surfaces.  Since a UDOC is an executable that needs to be called from OpticStudio, a UDOC can only be created by languages which can compile code (C#/C++).  The source code is provided, but it needs to be compiled with the USER OPERAND solution rather than the standalone application solution.  The EXE also needs to be named UDOC##.exe and placed in the ZOS-API\\Operands folder.

    Input:		None

    Output:		UDOC01.exe


[C#](example_16_cs.md)

[C++](example_16_cpp.md)

