# Example ModelTest.cpp

<a id="ModelTest_8cpp-example"></a>
Examples showing how to load and use an RST file. 
```
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
#ifdef EXAMPLE
#include "Example.h"
#else
#include <gtest/gtest.h>
#endif

#include "helpers/dpf_model.h"
#define _USE_MATH_DEFINES
#include <math.h>

TEST(Model, readMetaData)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    ansys::dpf::MeshedRegion mesh = model.getMesh();

    auto numEle = mesh.numberOfElements();
    EXPECT_TRUE(numEle == 165);
    auto numNodes = mesh.numberOfNodes();
    EXPECT_TRUE(numNodes == 344);

    ansys::dpf::Field fieldCoord = mesh.nodesCoordinates();
    EXPECT_EQ(fieldCoord.dataSize(), 344 * 3);
    ansys::dpf::PropertyField elementsConnectivity = mesh.connectivity();
    EXPECT_EQ(elementsConnectivity.dataSize(), 1562);
    

    ansys::dpf::TimeFreqSupport timeSupport = model.getTimeFreqSupport();
    auto numSets = timeSupport.numberOfSets();
    EXPECT_TRUE(numSets == 1);

    auto vNamedSelections = mesh.availableNamedSelections();
    EXPECT_EQ(vNamedSelections.size(), 1);
}

TEST(Model, readResultInfo)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);
   
    ansys::dpf::ResultInfo resInfo = model.getResultInfo();

    auto numRes = resInfo.numberOfResults();
    EXPECT_EQ(numRes, 25);

    auto unit = resInfo.unitSystem();

    ansys::dpf::ResultInfo::analysis_type analysisType = resInfo.analysisType();

    ansys::dpf::ResultInfo::physics_type physicsType = resInfo.physicsType();

    auto availReslts = resInfo.availableResults();

    int majorVersion, minorVersion;
    int solve_date, solve_time;

    resInfo.solver_version(majorVersion, minorVersion);
    resInfo.solve_date_time(solve_date, solve_time);
    auto userName = resInfo.user_name();
    auto productName = resInfo.product_name();
    auto jobName = resInfo.job_name();
    auto mainTitle = resInfo.main_title();

    EXPECT_EQ(availReslts.size(), 25);

    EXPECT_STREQ(unit.c_str(), "solver_mks");
    EXPECT_EQ(analysisType, ansys::dpf::ResultInfo::eStatic);
    EXPECT_EQ(physicsType, ansys::dpf::ResultInfo::eMecanic);

    EXPECT_EQ(majorVersion, 19);
    EXPECT_EQ(minorVersion, 4);
    EXPECT_EQ(solve_date, 20190128);
    EXPECT_EQ(solve_time, 175709);

    EXPECT_STREQ(userName.c_str(), "rlagha");
    EXPECT_STREQ(productName.c_str(), "MAPDL");
    EXPECT_STREQ(jobName.c_str(), "file");
    EXPECT_STREQ(mainTitle.c_str(), "unsaved_project--Static Structural (B5)");
}

TEST(Model, readResultInfo_using_unit_strings)
{
    auto resultInfo = ansys::dpf::ResultInfo(ansys::dpf::ResultInfo::analysis_type::eStatic, (ansys::dpf::ResultInfo::physics_type::eFluid));
    ansys::dpf::UnitSystem si_cff("CFF_SI", "m;s;kg;K;m/s;J;MPa;MPa*m^0.5;C;A;V;H;F;rad");
    resultInfo.setUnitSystem(si_cff);

    auto unit_system_name = resultInfo.unitSystemName();
    EXPECT_STREQ(unit_system_name.c_str(), "SI: m, kg, s, V, A, K");

    auto unit_system = resultInfo.unitSystem();
    ansys::dpf::Unit unit_temp_diff(ansys::dpf::homogeneities::temperature_difference, unit_system);
    EXPECT_STREQ(unit_temp_diff.c_str(), "dK");
}
TEST(Model, accessTimeFreqSupport)
{
    std::string fileName("../../../testfiles/cyclic/file.rst");
    ansys::dpf::Model model(fileName);
    
    ansys::dpf::TimeFreqSupport timeSupport = model.getTimeFreqSupport();
    auto numSets = timeSupport.numberOfSets();
    EXPECT_TRUE(numSets == 48);

    auto numberSteps = timeSupport.numberOfSteps();

    ansys::dpf::dp_int size;

    ansys::dpf::Field freqs = timeSupport.frequencies();
    auto data = freqs.data(size);
    EXPECT_TRUE(data != nullptr);
    EXPECT_EQ(size, 48);

    ansys::dpf::Field hi = timeSupport.harmonicIndeces();
    auto hi_data = hi.data(size);
    EXPECT_TRUE(hi_data != nullptr);
    EXPECT_EQ(size, 48);

    for (auto i = 0, offset = 0; i < numberSteps; ++i) {
        auto numSubSteps = timeSupport.numberOfSubStepsByStepIndex(i);
        EXPECT_TRUE(numSubSteps == 6);
        for (auto j = 0; j < numSubSteps; ++j, ++offset) {
            auto iSet = timeSupport.getSetIndexByStepIndexAndSubStep(i, j);
            EXPECT_EQ(iSet, i * 6 + j);
            auto freq = timeSupport.timeFreq(iSet);   
            EXPECT_DOUBLE_EQ(freq, data[offset]);

            EXPECT_DOUBLE_EQ(i, fabs(hi_data[offset]));
        }
    }
}

TEST(Model, readNamedSelections)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    ansys::dpf::MeshedRegion mesh = model.getMesh();

    auto vNamedSelections = mesh.availableNamedSelections();
    EXPECT_EQ(vNamedSelections.size(), 1);

    EXPECT_STREQ("_FIXEDSU", vNamedSelections[0].c_str());

    ansys::dpf::Scoping scoping = mesh.namedSelection(vNamedSelections[0]);
    EXPECT_STREQ("Nodal", scoping.location().c_str());
    EXPECT_EQ(scoping.size(), 30);
}

TEST(Model, CreateResultEvaluationWorkflowInclusive)
{
    std::string fileName("../../../testfiles/Cube.rst");
    ansys::dpf::Model model(fileName);

    ansys::dpf::MeshedRegion mesh = model.getMesh();

    auto numEle = mesh.numberOfElements();
    EXPECT_EQ(numEle, 8);
    auto numNodes = mesh.numberOfNodes();
    EXPECT_EQ(numNodes, 27);

    ansys::dpf::Field fieldCoord = mesh.nodesCoordinates();
    EXPECT_EQ(fieldCoord.dataSize(), 27 * 3);
    ansys::dpf::PropertyField elementsConnectivity = mesh.connectivity();
    EXPECT_EQ(elementsConnectivity.dataSize(), 64);


    ansys::dpf::TimeFreqSupport timeSupport = model.getTimeFreqSupport();
    auto numSets = timeSupport.numberOfSets();
    EXPECT_EQ(numSets, 1);

    auto vNamedSelections = mesh.availableNamedSelections();
    EXPECT_EQ(vNamedSelections.size(), 3);

    ansys::dpf::ResultInfo resultInfo = model.getResultInfo();
    auto numRes = resultInfo.numberOfResults();
    EXPECT_EQ(numRes, 15);

    ansys::dpf::Result result = model.CreateResultEvaluationWorkflow("SX", "TOP", ansys::dpf::locations::elemental, false);

    ansys::dpf::DpfError error;
    ansys::dpf::FieldsContainer fieldsContainer = result.EvaluateAtGivenTime(0.0, error);
    EXPECT_EQ(fieldsContainer.size(), 1);
}

TEST(Model, ReleaseHandles)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    ansys::dpf::MeshedRegion mesh = model.getMesh();

    auto numEle = mesh.numberOfElements();
    EXPECT_TRUE(numEle == 165);
    auto numNodes = mesh.numberOfNodes();
    EXPECT_TRUE(numNodes == 344);

    // release handles
    model.ReleaseHandles();

    // We can then go ahead and continue reading
    ansys::dpf::TimeFreqSupport timeSupport = model.getTimeFreqSupport();
}
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)