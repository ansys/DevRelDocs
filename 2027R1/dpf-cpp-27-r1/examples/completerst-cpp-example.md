# Example CompleteRST.cpp

<a id="CompleteRST_8cpp-example"></a>
Example showing how to load an RST file and extract mesh and results. 
```
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
// this must only be included in application once
//#include "dpf_api_i.cpp"
#include <limits>
#include "Example.h"


TEST(Complete, BaseTest)
{
    
    std::string fileName("../../../testfiles/Cube.rst");

    // Data source
    ansys::dpf::DataSources dataSources;        
    dataSources.addResultFile(fileName);

    EXPECT_EQ(dataSources.numPaths(), 1);

    // mesh provider
    ansys::dpf::Operator meshProvider = ansys::dpf::Operator("mapdl::rst::MeshProvider");
    if (meshProvider.empty()) {
        throw std::runtime_error("MeshProvider failed to load");
    }
    
}
TEST(Complete, RST)
{
    // this is only called a single time in an application
    //ansys::dpf::LibraryHandle lib;


    std::string fileName("../../../testfiles/Cube.rst");

    // Data source
    ansys::dpf::DataSources dataSources;        
    dataSources.addResultFile(fileName);

    // mesh provider
    ansys::dpf::Operator meshProvider = ansys::dpf::Operator("MeshProvider");
    if (meshProvider.empty()) {
        throw std::runtime_error("MeshProvider");
    }
    meshProvider.connect(ansys::dpf::eDataSourcesPin, dataSources);

    // meshed region
    ansys::dpf::MeshedRegion meshedRegion = meshProvider.getOutputMeshedRegion(0);
    if (meshedRegion.empty()) {
        throw std::runtime_error("getOutputMeshedRegion");
    }
    // do some checks
    // there are 27 nodes in the entire mesh
    EXPECT_EQ(meshedRegion.numberOfNodes(), 27);
    // there are 8 hex elements in the entire mesh
    EXPECT_EQ(meshedRegion.numberOfElements(), 8);
    // the length unit should be "m"
    ansys::dpf::Unit lengthUnit = meshedRegion.lengthUnit();
    EXPECT_STREQ(lengthUnit.toString(), "m");
    EXPECT_STREQ(lengthUnit.homogeneity(), "Displacement");
    // this file has 3 named selections
    EXPECT_EQ(meshedRegion.availableNamedSelections().size(), 3);


    // "TOP" is a named selection, so it does not have a mesh associated with it, create one
    ansys::dpf::Scoping meshedRegionScopingTOP = meshedRegion.namedSelection("TOP");
    if (meshedRegionScopingTOP.empty()) {
        throw std::runtime_error("namedSelection TOP");
    }

   
    // result info provider
    ansys::dpf::Operator resultInfoProvider = ansys::dpf::Operator("ResultInfoProvider");
    if (resultInfoProvider.empty()) {
        throw std::runtime_error("ResultInfoProvider");
    }
    resultInfoProvider.connect(ansys::dpf::eDataSourcesPin, dataSources);
    ansys::dpf::ResultInfo resultInfo = resultInfoProvider.getOutputResultInfo(0);
    if (resultInfo.empty()) {
        throw std::runtime_error("getOutputResultInfo");
    }
    // do some checks
    // this file has 12 results
    EXPECT_EQ(resultInfo.numberOfResults(), 12);

    // one of those results should be Displacement
    EXPECT_TRUE(resultInfo.operatorNameIsAvailable("U"));
    std::string resultName = resultInfo.resultNameByOperatorName("U"); // Displacement
    EXPECT_EQ(resultInfo.numberOfComponents(resultName), 3);
    EXPECT_STREQ(resultInfo.location(resultName), "Nodal");

    // going to want result for last time step/iteration
    // time support provider
    ansys::dpf::Operator timeFreqSupportProvider = ansys::dpf::Operator("TimeFreqSupportProvider");
    if (timeFreqSupportProvider.empty()) {
        throw std::runtime_error("TimeFreqSupportProvider");
    }
    timeFreqSupportProvider.connect(ansys::dpf::eDataSourcesPin, dataSources);
    ansys::dpf::TimeFreqSupport timeFreqSupport = timeFreqSupportProvider.getOutputTimeFreqSupport(0);
    ansys::dpf::dp_int numTimeSteps = 0;
    if (!timeFreqSupport.empty()) {
        numTimeSteps = timeFreqSupport.numberOfSets();
    }

    // results field
    ansys::dpf::Operator resultOperator = ansys::dpf::Operator("U");
    if (resultOperator.empty()) {
        throw std::runtime_error("GetSharedOperatorByName 'U'");
    }
    resultOperator.connect(ansys::dpf::eDataSourcesPin, dataSources);
    std::vector<int> timeScoping(1);
    if (numTimeSteps) {
        timeScoping[0] = numTimeSteps;
        resultOperator.connect(ansys::dpf::eTimeScopPin, timeScoping);
    }
    ansys::dpf::FieldsContainer resultFieldsContainer = resultOperator.getOutputFieldsContainer(0);
    if (resultFieldsContainer.empty()) {
        throw std::runtime_error("getOutputFieldsContainer");
    }
    ansys::dpf::Field resultsField = resultFieldsContainer.at(0); // get the 0th field for timeScoping 1
    if (resultsField.empty()) {
        throw std::runtime_error("resultsField");
    }

    // For some results, there may not be a value, set a default one
    auto rescope = ansys::dpf::Operator("Rescope");
    if (rescope.empty()) {
        throw std::runtime_error("Rescope");
    }
}
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)