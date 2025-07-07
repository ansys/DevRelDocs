# KroneckerProd {#matrix__kroneckerprod .sone-topic}

Kronecker product of two matrices.

The resulting matrix is defined by block by:

![](../images/matrix__kroneckerprod_00.svg)

Each element of the output matrix is defined by: ![](../images/matrix__kroneckerprod_01.svg) \(where / and % are respectively the quotient and remainder of the integer division\)

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Number of columns in first matrix|
|M|P|N/A|Number of rows in first matrix|
|P|P|N/A|Number of columns in second matrix|
|Q|P|N/A|Number of rows in second matrix|
|A|I|numeric^N^M|First input matrix|
|B|I|numeric^P^Q|Second input matrix|
|C|O|numeric^\(Q\*N\)^\(P\*M\)|Output matrix|

**Parent topic:**[Matrix](../../libraries/matrix/matrix.md)

