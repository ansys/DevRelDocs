# Inv2x2 

Inverse of a 2 by 2 matrix.

Returns an error flag and a matrix filled with zeros if the determinant is equal to zero.

## Interface 

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|A|I|numeric^2^2|Input matrix|
|epsilon|I|numeric|Epsilon for comparison to zero|
|invA|O|numeric^2^2|Inverse matrix|
|error|O|bool|True if determinant is equal to zero|

**Parent topic:**[Matrix](./matrix.md)

