# Example Example.h

<a id="Example_8h-example"></a>
Example helper functions: to include in any other file. 
```
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
#pragma once

#include <cfloat>
#include <vector>
#include <string>
#include <exception>

#include "dpf_api.h"

// Wrap example code in a call to this as a global funcion
// throw an exception if anything fails
#define EXAMPLEFUNC(function) \
    void Example ## function(const std::string &functionName); \
    const std::string function ## Name("Example"  #function); \
    ansys::dpf::Examples::FuncNames::iterator function ## NameIt = ansys::dpf::Examples::GetExampleFuncsNames().insert(ansys::dpf::Examples::GetExampleFuncsNames().end(), function ## Name); \
    ansys::dpf::Examples::FuncPtrs::iterator function ## It = ansys::dpf::Examples::GetExampleFuncs().insert(ansys::dpf::Examples::GetExampleFuncs().end(), Example ## function); \
    void Example ## function(const std::string &functionName)

#define TEST(test_case_name, test_name) \
    void test_case_name ## test_name(); \
    const std::string test_case_name ## test_name ## Name(#test_case_name #test_name); \
    ansys::dpf::Examples::FuncNames::iterator test_case_name ## test_name ## NameIt = ansys::dpf::Examples::GetExampleFuncsNames().insert(ansys::dpf::Examples::GetExampleFuncsNames().end(), test_case_name ## test_name ## Name); \
    ansys::dpf::Examples::FuncPtrs::iterator test_case_name ## test_name ## It = ansys::dpf::Examples::GetExampleFuncs().insert(ansys::dpf::Examples::GetExampleFuncs().end(), test_case_name ## test_name); \
    void test_case_name ## test_name()


#define THROWERROR(FILE, LINE, MESSAGE)\
    throw std::runtime_error("File: " +std::string(FILE) + " Line: " + std::to_string(LINE) + " Condition: " + #MESSAGE)

#define EXPECT_TRUE(condition)\
    if (!(condition)) {\
        THROWERROR(__FILE__, __LINE__, condition);\
    }

#define EXPECT_FALSE(condition)\
    if ((condition)) {\
        THROWERROR(__FILE__, __LINE__, condition);\
    }

#define EXPECT_EQ(v1, v2)\
    if ((v1) != (v2)) {\
        THROWERROR(__FILE__, __LINE__, v1 == v2);\
    }
#define EXPECT_ARRAYEQ(a1, a2, len)\
    for (int i = (len)-1; i >= 0; --i) {\
        EXPECT_EQ((a1)[i], (a2)[i]);\
    }
#define EXPECT_DOUBLE_EQ(v1, v2)\
    {\
        double a=(v1);\
        double b=(v2);\
        if (fabs(a - b) > ( (fabs(a) > fabs(b) ? fabs(b) : fabs(a)) * DBL_EPSILON * 100.0)) {\
            THROWERROR(__FILE__, __LINE__, v1 == v2); \
        }\
    }
#define EXPECT_STREQ(v1, v2)\
    if (std::string(v1) != std::string(v2)) {\
        THROWERROR(__FILE__, __LINE__, v1 == v2);\
    }


namespace ansys { namespace dpf { namespace Examples {
    typedef void (*FuncPtr)();
    typedef std::vector<FuncPtr> FuncPtrs;
    typedef std::vector<std::string> FuncNames;
    extern FuncPtrs &GetExampleFuncs();
    extern FuncNames &GetExampleFuncsNames();

    extern dpf::DpfError LoadMAPDL();
    extern dpf::DpfError LoadMESH();
} } }
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)