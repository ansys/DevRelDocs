# Introduction

This C-API to evaluate a Meta model of Optimal Prognosis (MOP) provides tools to load and work with a previously generated MOP contained in an optiSLang monitoring database file (*.omdb).
An MOP is built by optiSLang for multiple scalar or signal responses that depend on several selectable input parameters. The meta model provides the prognosis quality, the Coefficient of Prognosis (CoP), and can be evaluated independently of the original simulation data.


From the .omdb file, the following information can be extracted:

* Names and number of the input parameters
* Names and number of the response parameters
* Names and number of the different criteria
* Bounds of the input parameters
* Reference value per parameter
* CoP values per response
* Filtered states per response Based on the approximated designs, related information can be extracted via this API:
* Error values
* Density values
* Criteria results (of the criteria defined in the .omdb file)
* Gradient values, density value and errors per response parameter

## Usage example (using a C++ compiler)

```cpp
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <vector>

#include <mopsolver_api2.h>

int main( int argc, char *argv[] )
{
    if( argc != 2 )
    {
        std::cout << "\nUsage: " << argv[0] << " " << "[path/to/]file.omdb" << std::endl;
        return EXIT_FAILURE;
    }

    // using argv[1] as the path to the optiSLang monitoring database file
    const char *omdb = argv[1];


    // use flags to specify the dimensions you want to retrieve
    unsigned int flags = DIM_INPUTS | DIM_RESPONSES | DIM_CRITERIA;
    // each set flag adds 1 to the required size for the preallocated pointer
    unsigned int size_dimensions = 3;
    std::unique_ptr<unsigned int[]> dimensions (new unsigned int[size_dimensions]);
    // for the return order, see the order of DMOP2_DIMENSION_FLAG (mopsolver_api2_shared.h)
    dmop2_getDimensions( omdb, flags, dimensions.get(), size_dimensions );

    unsigned int nInputs = dimensions[0];
    unsigned int nResponses = dimensions[1];
    unsigned int nCriteria = dimensions[2];

    // print the number of active inputs and outputs
    std::cout << std::endl;
    std::cout << "Number of inputs: " << nInputs << std::endl;
    std::cout << "Number of outputs: " << nResponses << std::endl;
    std::cout << "Number of criteria: " << nCriteria << std::endl;
    std::cout << std::endl;

    if( nInputs < 1 )
    {
        std::cout << "Error: File does not contain any inputs. Unable to continue.\n" << std::endl;
        return EXIT_FAILURE;
    }

    // get the names of active inputs by setting the input flag
    // note that the char pointer must not be preallocated
    char *input_names;
    dmop2_getNames( omdb, NAME_INPUTS, &input_names );

    // print the names of the active inputs
    // ( names are splitted by '\0', e.g. par1\0par2\0par3\0\0 )
    std::cout << "INPUTS: (names plus sampling bounds)" << std::endl;
    char *input_names_cpy = input_names;
    while( *input_names_cpy )
    {
        // get input bounds
        std::vector< double > input_bounds( 2, 0.0 );
        double *p_input_bounds = &input_bounds[0];
        dmop2_getInputBoundsPerParameter(omdb, input_names_cpy, p_input_bounds);
        std::cout << "\t" << input_names_cpy << "\t " << input_bounds[0] << "\t" << input_bounds[1] << std::endl;
        input_names_cpy += strlen(input_names_cpy)+1;
    }
    std::cout << std::endl;

    if (nResponses < 0)
    {
        std::cout << "Error: File does not contain any outputs. Unable to continue.\n" << std::endl;
        return EXIT_FAILURE;
    }

    // get the names of active outputs by setting the responses flag
    // note that the char pointer must not be preallocated
    char *output_names;
    dmop2_getNames(omdb, NAME_RESPONSES, &output_names);

    // print the names of the active, scalar outputs
    // ( names are splitted by '\0', e.g. resp1\0resp2\0resp3\0\0 )

    std::vector< double > cop_vals( nInputs+1, 0.0 );
    double *p_cop_vals = &cop_vals[0];

    std::cout << "OUTPUTS: (names plus CoP values)" << std::endl;
    char *output_names_cpy = output_names;
    while( *output_names_cpy )
    {
        dmop2_getCoPValuesPerResponse( omdb, output_names_cpy, p_cop_vals );
        std::cout << "\t" << output_names_cpy;

        for(unsigned int p(0); p < nInputs; ++p )
        {
            std::cout << "\t" << p_cop_vals[p];
        }
        std::cout << "\t|\t" << p_cop_vals[nInputs] << std::endl;
        output_names_cpy += strlen(output_names_cpy)+1;
    }
    std::cout << std::endl;

    if (nCriteria < 0)
    {
        std::cout << "Error: File does not contain any criteria. Unable to continue.\n" << std::endl;
        return EXIT_FAILURE;
    }

    // get the names of active criteria by setting the criteria flag
    // note that the char pointer must not be preallocated
    char *criteria_names;
    dmop2_getNames(omdb, NAME_CRITERIA, &criteria_names);

    // print the names of the active criteria
    // ( names are splitted by '\0', e.g. crit1\0crit2\0crit3\0\0 )
    std::cout << "CRITERIA:" << std::endl;
    char *criteria_names_cpy = criteria_names;
    while (*criteria_names_cpy)
    {
        std::cout << "\t" << criteria_names_cpy;
        criteria_names_cpy += strlen(criteria_names_cpy) + 1;
    }
    std::cout << std::endl;

    int num_designs(3);
    // create an amount of design points i.e. an array of
    // nInputs * num_designs values of type double
    // to keep it simple, we set all of them to 10.0
    unsigned int size_inputs = nInputs * num_designs;
    std::vector< double > inputs(size_inputs, 10.0);

    // alignment of param values has to be [par1des1, par1des2, par1des3, par2des1, par2des2, par2des3 ...]
    // e.g.
    // std::vector< double > all_input_bounds( nInputs*2, 0.0 );
    // double *p_all_input_bounds = &all_input_bounds[0];
    // dmop2_getInputBounds( omdb, &p_all_input_bounds );
    // std::vector< double > inputs( num_designs * nInputs );
    // for( int p(0); p < nInputs; ++p )
    // {
    //     const double min_val(all_input_bounds[2*p]),
    //                   diff(all_input_bounds[2*p+1]-all_input_bounds[2*p]);
    //     for( int d(0); d < num_designs; ++d )
    //     {
    //         inputs[p*num_designs+d] = min_val + diff/2;
    //     }
    // }

    // preallocate a double array for storing the solve outputs
    // the required size and order depends on the set flags:
    //      Responses   : num_designs * nResponses * sizeof(double)
    //      Criteria    : num_designs * nCriteria  * sizeof(double)
    //      Density     : num_designs              * sizeof(double)
    //      Errors      : num_designs * 4          * sizeof(double)
    // In this example we want to retrieve the responses and
    // the evaluated criteria, also we activate extrapolation
    flags = SOLVE_EXTRAPOLATE | SOLVE_RESPONSES | SOLVE_CRITERIA;
    unsigned int size_results = (num_designs * nResponses) + (num_designs * nCriteria);
    std::unique_ptr<double[]> results(new double[size_results]);

    // request the approximation of the outputs of all given design points at once
    if( dmop2_solve(omdb, num_designs, &inputs[0], size_inputs, flags, results.get(), size_results) != 0 )
    {
        std::cout << "Error in approximation: " << dmop2_getLastError() << std::endl;
        return EXIT_FAILURE;
    }

    // print the results
    std::cout << std::endl;
    std::cout << "Results:" << std::endl;
    for (unsigned int d(0); d < size_results; ++d)
    {
        if (d < num_designs * nResponses) {
            std::cout << "\tResponse " << (d % nResponses + 1) << " for Design " << (d / nResponses + 1) << ": " << results[d];
        }
        else {
            unsigned int d_2 = d - (num_designs * nResponses);
            std::cout << "\tCriteria " << (d_2 % nCriteria + 1) << " for Design " << (d_2 / nCriteria + 1) << ": " << results[d];
        }
        std::cout << std::endl;
    }
    // clean up
    // it is required to manually free the name-pointers allocated by the API
    dmop2_free(input_names);
    dmop2_free(output_names);
    dmop2_free(criteria_names);

    dmop2_cleanup();

    return EXIT_SUCCESS;
}
```

### Output generated by the code above for a sample .omdb file

```
Number of inputs: 5
Number of outputs: 1
Number of criteria: 7

INPUTS: (names plus sampling bounds)
        X1       -3.12744       3.12744
        X1       -3.12744       3.12744
        X1       -3.12744       3.12744
        X1       -3.12744       3.12744
        X1       -3.12744       3.12744

OUTPUTS: (names plus CoP values)
        Y       0.180069        0.306036        0.632022        0       0       |       0.985943

CRITERIA:
        test_criteria   test_objective  test_criteria_2 invalid_test_criteria   test_lim_st     test_var        test_obj_max

Results:
        Response 1 for Design 1: 0.0518705
        Response 1 for Design 2: 0.0518705
        Response 1 for Design 3: 0.0518705
        Criteria 1 for Design 1: 11.9222
        Criteria 2 for Design 1: 0.0518705
        Criteria 3 for Design 1: 0.0518705
        Criteria 4 for Design 1: nan
        Criteria 5 for Design 1: 9.94813
        Criteria 6 for Design 1: 0.103741
        Criteria 7 for Design 1: -0.0518705
        Criteria 1 for Design 2: 11.9222
        Criteria 2 for Design 2: 0.0518705
        Criteria 3 for Design 2: 0.0518705
        Criteria 4 for Design 2: nan
        Criteria 5 for Design 2: 9.94813
        Criteria 6 for Design 2: 0.103741
        Criteria 7 for Design 2: -0.0518705
        Criteria 1 for Design 3: 11.9222
        Criteria 2 for Design 3: 0.0518705
        Criteria 3 for Design 3: 0.0518705
        Criteria 4 for Design 3: nan
        Criteria 5 for Design 3: 9.94813
        Criteria 6 for Design 3: 0.103741
        Criteria 7 for Design 3: -0.0518705
```

## Prerequisites

### Windows

x86_64 architecture, Microsoft Visual Studio ™ 2017 Professional is recommended

### Linux

x86_64 architecture, GCC 7.3+, glibc version 2.12+, Kernel version 2.6 or above

## Installation

Extract the archive and set the include (-I) and library (-L) paths appropriate to the new location.

## Compile and link

### Windows

cl /I../include /I. /DDYNARDO_MOPSOLVER_SHARED ms_api2_sample01_cpp.cpp mopsolver_dll.lib

### Linux

g++ -I../include -I. -DDYNARDO_MOPSOLVER_SHARED ms_api2_sample01_cpp.cpp -o ms_api2_sample01 libmopsolver_dll.so
