# Inv3x3 

Inverse of a 3 by 3 matrix.

Returns an error flag and a matrix filled with zeros if the determinant is equal to zero.

## Interface 

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|A|I|numeric^3^3|Input matrix|
|epsilon|I|numeric|Epsilon for comparison to zero|
|invA|O|numeric^3^3|Inverse matrix|
|error|O|bool|True if determinant is equal to zero|

**Parent topic:**[Matrix](./matrix.md)

