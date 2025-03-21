# compression:apply svd

## Description

Computes the coefficients (=U*Sigma) and VT components from SVD.

## Inputs


- **Pin 0** field_contaner_to_compress (type: ['fields_container']) (optional: False): fields container to be compressed

- **Pin 1** scalar_int (type: ['int32']) (optional: False): number of vectors (r) to keep for the future reconstraction of the matrix A, ex. A[m,n]=coef[m,r]*VT[r,n], where coef=U*Sigma

- **Pin 2** scalar_double (type: ['double']) (optional: False): threshold (precision) as a double, default value is 1e-7

- **Pin 3** boolean (type: ['bool']) (optional: False): apply svd on the initial input data (true) or transposed (square matrix), default value is false


## Outputs


- **Pin 0** us_svd (type: ['fields_container']): the output entity is a field container (time dependant); it contains the multiplication of two matrices, U and S, where A=U.S.Vt

- **Pin 1** vt_svd (type: ['fields_container']): the output entity is a field container (space dependant), containing the Vt, where A=U.S.Vt

- **Pin 2** sigma (type: ['field', 'fields_container']): the output entity is a field (or a field container if input fc contains several labels, where field contains results per label), containing singular (S) values of the input data, where A=U.S.Vt


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: compression
- **plugin**: core
- **scripting name**: apply_svd
- **full name**: compression.apply_svd
- **internal name**: svd_operator
- **license**: any_dpf_supported_increments