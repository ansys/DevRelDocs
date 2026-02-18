# Example Example.cpp

<a id="Example_8cpp-example"></a>
Example helper functions. 
```
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
#include "Example.h"

namespace {
    ansys::dpf::DpfError
    LoadPlugin(const std::string &plugin,
        const std::string &pluginName)
    {
        std::string suffix;
        std::string prefix = "";
#ifdef __linux__
        suffix = ".so";
        prefix = "lib";
#else
        suffix = ".dll";
#endif

        std::string path_to_dll = prefix + plugin + suffix;
        char* mapdlName = (char*)path_to_dll.c_str();
        return ansys::dpf::core::loadDpfPlugin(mapdlName, pluginName);
    }
};

ansys::dpf::Examples::FuncPtrs &
ansys::dpf::Examples::GetExampleFuncs() {
    static FuncPtrs exampleFuncs;
    return exampleFuncs;
}

ansys::dpf::Examples::FuncNames &
ansys::dpf::Examples::GetExampleFuncsNames() {
    static FuncNames exampleFuncNames;
    return exampleFuncNames;
}

ansys::dpf::DpfError
ansys::dpf::Examples::LoadMAPDL()
{
    return LoadPlugin("mapdlOperatorsCore", "mapdl");
}
ansys::dpf::DpfError
ansys::dpf::Examples::LoadMESH()
{
    return LoadPlugin("meshOperatorsCore", "mesh");
}
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)