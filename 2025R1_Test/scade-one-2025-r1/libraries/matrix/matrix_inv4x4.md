# Inv4x4 {#matrix__inv4x4 .sone-topic}

Inverse of a 4 by 4 matrix.

Returns an error flag and a matrix filled with zeros if the determinant is equal to zero.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|A|I|numeric^4^4|Input matrix|
|epsilon|I|numeric|Epsilon for comparison to zero|
|invA|O|numeric^4^4|Inverse matrix|
|error|O|bool|True if determinant is equal to zero|

**Parent topic:**[Math::Matrix](../../../techdoc_en-US/libraries/matrix/math_matrix.md)

