<a id="ResultTest_8cpp-example"></a>
# Example ResultTest.cpp undefined

**Location**: `dpf\_api.h`



Examples showing how to access results data in an RST file. 
```
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
#ifdef EXAMPLE
#include "Example.h"
#else
#include <gtest/gtest.h>
#endif

#include <math.h>
#include "helpers/dpf_result.h"
#include "helpers/dpf_model.h"
#include "../../UnitTestUtilities/UnitTestHelper.h"

using namespace ansys::dpf;

TEST(result_info, DimensionalityNature_Homogeneity_AnalysisType_PhysicsType_unitSystem)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::DataSources ds;
    ds.addResultFile(fileName);
    ansys::dpf::Operator provider("ResultInfoProvider");
    provider.connect(4, ds);

    ansys::dpf::ResultInfo res_info = provider.getOutputResultInfo(0); 
    std::string analysis_type_name = res_info.analysisTypeName();
    EXPECT_EQ(analysis_type_name, std::string("static"));
    std::string physics_type_name = res_info.physicsTypeName();
    EXPECT_EQ(physics_type_name, std::string("mechanical"));
    std::string unit_sys_name = res_info.unitSystemName();
    EXPECT_EQ(unit_sys_name, std::string("MKS: m, kg, N, s, V, A, degC"));

    std::set<std::string> res = res_info.availableResults();
    auto iter = res.begin();
    iter++;
    std::string res_name = *iter;
    ansys::dpf::Dimensionality::ENature nat = res_info.nature(res_name);
    EXPECT_EQ(nat, ansys::dpf::Dimensionality::eScalar);

    // energy
    res_name = "Energy-stiffness matrix";
    ansys::dpf::Unit unit_res = res_info.unit(res_name);
    EXPECT_EQ(std::string(unit_res.homogeneity().c_str()), std::string("Energy"));

    // disp
    res_name = "Displacement";
    unit_res = res_info.unit(res_name);
    EXPECT_EQ(std::string(unit_res.homogeneity().c_str()), std::string("Displacement"));

    // Force
    res_name = "Force";
    unit_res = res_info.unit(res_name);
    EXPECT_EQ(std::string(unit_res.homogeneity().c_str()), std::string("Force"));

    // Strain
    res_name = "Strain";
    unit_res = res_info.unit(res_name);
    EXPECT_EQ(std::string(unit_res.homogeneity().c_str()), std::string("DimensionLess"));

    // Contact Pressure
    res_name = "Contact Pressure";
    unit_res = res_info.unit(res_name);
    EXPECT_EQ(std::string(unit_res.homogeneity().c_str()), std::string("Pressure"));
}

TEST(Results, readSEQV)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);
   
    Result res = model.CreateResultEvaluationWorkflow("S_eqv");

    ansys::dpf::DpfError error;
    FieldsContainer fieldsContainer = res.EvaluateAtGivenTime(0.0, error);
    EXPECT_EQ(fieldsContainer.size(), 1);

    Field field = fieldsContainer[0];
    Location location = field.fieldDefinition().location();

    EXPECT_EQ(field.dataSize(), 344);

    dp_int size;    
    
    Operator minmax = Operator("min_max");
    minmax.connect(0, field);

    Field fieldMin = minmax.getOutputField(0);
    Field fieldMax = minmax.getOutputField(1);

    auto dataMax = fieldMax.data(size);
    auto dataMin = fieldMin.data(size);

    auto ids_max = fieldMax.scoping().ids(size);
    auto ids_min = fieldMin.scoping().ids(size);

    EXPECT_DOUBLE_EQ(dataMax[0], 6314.9823137518824);
    EXPECT_DOUBLE_EQ(dataMin[0], 62.022552581514269);

    EXPECT_EQ(ids_max[0], 85);
    EXPECT_EQ(ids_min[0], 141);   
}

TEST(Results, readSEQVAtGivenNode)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    Result res = model.CreateResultEvaluationWorkflow("S_eqv", Scoping({ 1 }, ansys::dpf::locations::nodal));

    ansys::dpf::DpfError error;
    FieldsContainer fieldsContainer = res.EvaluateAtGivenTime(0.0, error);
    EXPECT_EQ(fieldsContainer.size(), 1);

    Field field = fieldsContainer[0];
    EXPECT_EQ(field.dataSize(), 1);
    EXPECT_STREQ(field.fieldDefinition().location().c_str(), locations::nodal.c_str());
    EXPECT_EQ(field.scoping().size(), 1);
    EXPECT_EQ(field.scoping().at(0), 1);

    dp_int size;
    EXPECT_DOUBLE_EQ(field.data(size)[0], 987.40109280968454);
}

TEST(Results, readSEQVAtGivenNodes)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    Result res = model.CreateResultEvaluationWorkflow("S_eqv", Scoping({ 1,2 }, ansys::dpf::locations::nodal));

    ansys::dpf::DpfError error;
    FieldsContainer fieldsContainer = res.EvaluateAtGivenTime(0.0, error);
    EXPECT_EQ(fieldsContainer.size(), 1);

    Field field = fieldsContainer[0];
    EXPECT_EQ(field.dataSize(), 2);
    EXPECT_STREQ(field.fieldDefinition().location().c_str(), locations::nodal.c_str());
    EXPECT_EQ(field.scoping().size(), 2);

    dp_int size;
    EXPECT_DOUBLE_EQ(field.entityDataById(1, size)[0], 987.40109280968454);

    EXPECT_DOUBLE_EQ(field.entityDataById(2, size)[0], 1005.4123172685187);
}

TEST(Results, readTemperatures)
{
    std::string fileName("../../../testfiles/mapdl_files/file.rth");
    ansys::dpf::Model model(fileName);

    TimeFreqSupport timeFreq = model.getTimeFreqSupport();
    auto numSets = timeFreq.numberOfSets();
    EXPECT_EQ(numSets, 4);
    
    Result res = model.CreateResultEvaluationWorkflow("TEMP");

    ansys::dpf::DpfError error;
    FieldsContainer fieldsContainer = res.EvaluateAtGivenTimeIndex(3, error);
    EXPECT_EQ(fieldsContainer.size(), 1);

    Field field = fieldsContainer[0];
    EXPECT_EQ(field.dataSize(), 2159);

    dp_int size;

    Operator minmax = Operator("min_max");
    minmax.connect(0, field);

    Field fieldMin = minmax.getOutputField(0);
    Field fieldMax = minmax.getOutputField(1);

    auto dataMax = fieldMax.data(size);
    auto dataMin = fieldMin.data(size);

    auto ids_max = fieldMax.scoping().ids(size);
    auto ids_min = fieldMin.scoping().ids(size);

    EXPECT_DOUBLE_EQ(dataMax[0], 56.576226358561549);
    EXPECT_DOUBLE_EQ(dataMin[0], 21.999572871657019);

    EXPECT_EQ(ids_max[0], 32);
    EXPECT_EQ(ids_min[0], 978);
}

TEST(Results, readSXAtGivenNamedSelection)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    Result res = model.CreateResultEvaluationWorkflow("SX", "not_exist");
    ansys::dpf::DpfError error;
    FieldsContainer fieldsContainer = res.EvaluateAtGivenTime(0.0, error);
    EXPECT_FALSE(error.isOk());    
    EXPECT_EQ(fieldsContainer.size(), 0);

    res = model.CreateResultEvaluationWorkflow("SX", "_FIXEDSU");
    fieldsContainer = res.EvaluateAtGivenTime(0.0, error);
    EXPECT_TRUE(error.isOk());

    Field field = fieldsContainer[0];
    EXPECT_EQ(field.dataSize(), 30);

    dp_int size;

    Operator minmax = Operator("min_max");
    minmax.connect(0, field);

    Field fieldMin = minmax.getOutputField(0);
    Field fieldMax = minmax.getOutputField(1);

    auto dataMax = fieldMax.data(size);
    auto dataMin = fieldMin.data(size);

    auto ids_max = fieldMax.scoping().ids(size);
    auto ids_min = fieldMin.scoping().ids(size);

    EXPECT_DOUBLE_EQ(dataMax[0], 1292.4295654296875);
    EXPECT_DOUBLE_EQ(dataMin[0], -2806.3163364955358);

    EXPECT_EQ(ids_max[0], 100);
    EXPECT_EQ(ids_min[0], 109);
}

TEST(Results, readSmaxshearSintensityAtGivenStepIndexAndSubStep)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    TimeFreqSupport timeFreq = model.getTimeFreqSupport();
    auto numSets = timeFreq.numberOfSets();
    EXPECT_EQ(numSets, 1);

    auto numSteps = timeFreq.numberOfSteps();
    EXPECT_EQ(numSteps, 1);

    auto numSubSteps = timeFreq.numberOfSubStepsByStepIndex(0);
    EXPECT_EQ(numSubSteps, 1);
    
    {
        Result res = model.CreateResultEvaluationWorkflow("S_intensity", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], 1000.0921216717491);
    }

    {
        Result res = model.CreateResultEvaluationWorkflow("S_max_shear", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], 500.04606083587453);
    }
}

TEST(Results, readEULXYZAngleAtGivenStepIndexAndSubStep)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    TimeFreqSupport timeFreq = model.getTimeFreqSupport();
    auto numSets = timeFreq.numberOfSets();
    EXPECT_EQ(numSets, 1);

    auto numSteps = timeFreq.numberOfSteps();
    EXPECT_EQ(numSteps, 1);

    auto numSubSteps = timeFreq.numberOfSubStepsByStepIndex(0);
    EXPECT_EQ(numSubSteps, 1);

    {
        Result res = model.CreateResultEvaluationWorkflow("EULX", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], 0);
    }

    {
        Result res = model.CreateResultEvaluationWorkflow("EULY", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], 0);
    }

    {
        Result res = model.CreateResultEvaluationWorkflow("EULZ", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], 0);
    }
}

TEST(Results, readEPELeqvEPELmaxshearEPELintensityAtGivenStepIndexAndSubStep)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    TimeFreqSupport timeFreq = model.getTimeFreqSupport();
    auto numSets = timeFreq.numberOfSets();
    EXPECT_EQ(numSets, 1);

    auto numSteps = timeFreq.numberOfSteps();
    EXPECT_EQ(numSteps, 1);

    auto numSubSteps = timeFreq.numberOfSubStepsByStepIndex(0);
    EXPECT_EQ(numSubSteps, 1);

    {
        Result res = model.CreateResultEvaluationWorkflow("EPEL_eqv", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], 4.9375041277777143e-09);
    }

    {
        Result res = model.CreateResultEvaluationWorkflow("EPEL_intensity", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], 6.5005988174106854e-09);
    }

    {
        Result res = model.CreateResultEvaluationWorkflow("EPEL_max_shear", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], 6.5005988174106854e-09);
    }
}

TEST(Results, readSXAtGivenStepIndexAndSubStep)
{
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::Model model(fileName);

    TimeFreqSupport timeFreq = model.getTimeFreqSupport();
    auto numSets = timeFreq.numberOfSets();
    EXPECT_EQ(numSets, 1);

    auto numSteps = timeFreq.numberOfSteps();
    EXPECT_EQ(numSteps, 1);

    auto numSubSteps = timeFreq.numberOfSubStepsByStepIndex(0);
    EXPECT_EQ(numSubSteps, 1);

    {
        Result res = model.CreateResultEvaluationWorkflow("S_eqv", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], 987.40109280968454);
    }
    {
        Result res = model.CreateResultEvaluationWorkflow("SX", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], -7.8000752627849579);
    }
    {
        Result res = model.CreateResultEvaluationWorkflow("SY", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], -6.1013864427804947);
    }
    {
        Result res = model.CreateResultEvaluationWorkflow("SZ", Scoping({ 1 }, ansys::dpf::locations::nodal));

        dp_int size;

        ansys::dpf::DpfError error;
        FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 0, error);
        EXPECT_EQ(fieldsContainer.size(), 1);
        Field field = fieldsContainer.at(0);
        EXPECT_EQ(field.dataSize(), 1);
        EXPECT_DOUBLE_EQ(field.data(size)[0], -994.09059143066406);
    }
}

TEST(Results, readSEQVAmplitudeAtGivenTime)
{
    std::string fileName("../../../testfiles/complex/filetheo.rst");
    ansys::dpf::Model model(fileName);

    Result res = model.CreateResultEvaluationWorkflow("S_eqv", Scoping({ 1 }, ansys::dpf::locations::nodal));

    dp_int size;

    ansys::dpf::DpfError error;
    FieldsContainer amplitudeFieldsContainer = res.EvaluateAmplitudeAtGivenTime(0.0, error);
    EXPECT_EQ(amplitudeFieldsContainer.size(), 1);
    Field amplitudeField = amplitudeFieldsContainer.at(0);
    EXPECT_EQ(amplitudeField.dataSize(), 3);
    dp_double amplitudeValue = amplitudeField.data(size)[0];
    EXPECT_DOUBLE_EQ(amplitudeValue, 15953.036468929646);

    // now get the real and imaginary separately
    FieldsContainer fieldsContainer = res.EvaluateAtGivenTime(0.0, error);
    EXPECT_EQ(fieldsContainer.size(), 2);
    EXPECT_TRUE(fieldsContainer.hasLabel("complex"));
    EXPECT_TRUE(fieldsContainer.hasLabel("time"));

    std::vector<Field> realFields = fieldsContainer.getFieldsForTimeId(1, 0);
    EXPECT_EQ(realFields.size(), 1);
    Field realField = realFields.at(0);
    EXPECT_EQ(realField.dataSize(), 3);
    dp_double realValue = realField.data(size)[0];
    EXPECT_DOUBLE_EQ(realValue, 15953.030385790376);

    std::vector<Field> imaginaryFields = fieldsContainer.getFieldsForTimeId(1, 1);
    EXPECT_EQ(imaginaryFields.size(), 1);
    Field imaginaryField = imaginaryFields[0];
    EXPECT_EQ(imaginaryField.dataSize(), 3);
    dp_double imaginaryValue = imaginaryField.data(size)[0];
    EXPECT_DOUBLE_EQ(imaginaryValue, 13.931584555079384);

    // and compare them
    EXPECT_DOUBLE_EQ(amplitudeValue, sqrt(realValue * realValue + imaginaryValue * imaginaryValue));
}

TEST(Results, readSEQVAmplitudeAtGivenTimeIndex)
{
    std::string fileName("../../../testfiles/complex/filetheo.rst");
    ansys::dpf::Model model(fileName);

    Result res = model.CreateResultEvaluationWorkflow("S_eqv", Scoping({ 1 }, ansys::dpf::locations::nodal));

    dp_int size;

    ansys::dpf::DpfError error;
    FieldsContainer amplitudeFieldsContainer = res.EvaluateAmplitudeAtGivenTimeIndex(0, error);
    EXPECT_EQ(amplitudeFieldsContainer.size(), 1);
    Field amplitudeField = amplitudeFieldsContainer.at(0);
    EXPECT_EQ(amplitudeField.dataSize(), 3);
    dp_double amplitudeValue = amplitudeField.data(size)[1];
    EXPECT_DOUBLE_EQ(amplitudeValue, 15953.015373859611);

    // now get the real and imaginary separately
    FieldsContainer fieldsContainer = res.EvaluateAtGivenTimeIndex(0, error);
    EXPECT_EQ(fieldsContainer.size(), 2);
    EXPECT_TRUE(fieldsContainer.hasLabel("complex"));
    EXPECT_TRUE(fieldsContainer.hasLabel("time"));

    std::vector<Field> realFields = fieldsContainer.getFieldsForTimeId(1, 0);
    EXPECT_EQ(realFields.size(), 1);
    Field realField = realFields.at(0);
    EXPECT_EQ(realField.dataSize(), 3);
    dp_double realValue = realField.data(size)[1];
    EXPECT_DOUBLE_EQ(realValue, 15953.009290308262);

    std::vector<Field> imaginaryFields = fieldsContainer.getFieldsForTimeId(1, 1);
    EXPECT_EQ(imaginaryFields.size(), 1);
    Field imaginaryField = imaginaryFields[0];
    EXPECT_EQ(imaginaryField.dataSize(), 3);
    dp_double imaginaryValue = imaginaryField.data(size)[1];
    EXPECT_DOUBLE_EQ(imaginaryValue, 13.932047206695039);

    // and compare them
    EXPECT_DOUBLE_EQ(amplitudeValue, sqrt(realValue * realValue + imaginaryValue * imaginaryValue));
}

TEST(Results, readSEQVAmplitudeAtGivenStepAndSubStep)
{
    std::string fileName("../../../testfiles/complex/filetheo.rst");
    ansys::dpf::Model model(fileName);

    TimeFreqSupport timeFreq = model.getTimeFreqSupport();
    auto numSets = timeFreq.numberOfSets();
    EXPECT_EQ(numSets, 10);

    auto numSteps = timeFreq.numberOfSteps();
    EXPECT_EQ(numSteps, 1);

    auto numSubSteps = timeFreq.numberOfSubStepsByStepIndex(0);
    EXPECT_EQ(numSubSteps, 10);

    Result res = model.CreateResultEvaluationWorkflow("S_eqv", Scoping({ 1 }, ansys::dpf::locations::nodal));

    dp_int size;

    ansys::dpf::DpfError error;
    FieldsContainer amplitudeFieldsContainer = res.EvaluateAmplitudeAtGivenStepIndexAndSubStep(0, 9, error);
    EXPECT_EQ(amplitudeFieldsContainer.size(), 1);
    Field amplitudeField = amplitudeFieldsContainer[0];
    EXPECT_EQ(amplitudeField.dataSize(), 3);
    dp_double amplitudeValue = amplitudeField.data(size)[0];
    EXPECT_DOUBLE_EQ(amplitudeValue, 4823.449633735253);

    // now get the real and imaginary separately idx0,idx9=id10
    FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 9, error);
    EXPECT_EQ(fieldsContainer.size(), 2);
    EXPECT_TRUE(fieldsContainer.hasLabel("complex"));
    EXPECT_TRUE(fieldsContainer.hasLabel("time"));

    std::vector<Field> realFields = fieldsContainer.getFieldsForTimeId(10, 0);
    EXPECT_EQ(realFields.size(), 1);
    Field realField = realFields.at(0);
    EXPECT_EQ(realField.dataSize(), 3);
    dp_double realValue = realField.data(size)[0];
    EXPECT_DOUBLE_EQ(realValue, 4823.4491029746168);

    std::vector<Field> imaginaryFields = fieldsContainer.getFieldsForTimeId(10, 1);
    EXPECT_EQ(imaginaryFields.size(), 1);
    Field imaginaryField = imaginaryFields[0];
    EXPECT_EQ(imaginaryField.dataSize(), 3);
    dp_double imaginaryValue = imaginaryField.data(size)[0];
    EXPECT_DOUBLE_EQ(imaginaryValue, 2.262784593315458);

    // and compare them
    EXPECT_DOUBLE_EQ(amplitudeValue, (dp_double)sqrt(realValue * realValue + imaginaryValue * imaginaryValue));
}

TEST(Results, readSEQVWithPhaseAtGivenTime)
{
    std::string fileName("../../../testfiles/complex/filetheo.rst");
    ansys::dpf::Model model(fileName);

    Result res = model.CreateResultEvaluationWorkflow("S_eqv", Scoping({ 1 }, ansys::dpf::locations::nodal));

    dp_int size;
    // theta is in degrees
    const dp_double theta = 45.0;

    ansys::dpf::DpfError error;
    FieldsContainer amplitudeFieldsContainer = res.EvaluateWithPhaseAtGivenTime(0.0, theta, error);
    EXPECT_EQ(amplitudeFieldsContainer.size(), 1);
    Field amplitudeField = amplitudeFieldsContainer.at(0);
    EXPECT_EQ(amplitudeField.dataSize(), 3);
    dp_double amplitudeValue = amplitudeField.data(size)[0];
    EXPECT_DOUBLE_EQ(amplitudeValue, 11270.644848355851);

    // now get the real and imaginary separately
    FieldsContainer fieldsContainer = res.EvaluateAtGivenTime(0.0, error);
    EXPECT_EQ(fieldsContainer.size(), 2);
    EXPECT_TRUE(fieldsContainer.hasLabel("complex"));
    EXPECT_TRUE(fieldsContainer.hasLabel("time"));

    std::vector<Field> realFields = fieldsContainer.getFieldsForTimeId(1, 0);
    EXPECT_EQ(realFields.size(), 1);
    Field realField = realFields.at(0);
    EXPECT_EQ(realField.dataSize(), 3);
    dp_double realValue = realField.data(size)[0];
    EXPECT_DOUBLE_EQ(realValue, 15953.030385790376);

    std::vector<Field> imaginaryFields = fieldsContainer.getFieldsForTimeId(1, 1);
    EXPECT_EQ(imaginaryFields.size(), 1);
    Field imaginaryField = imaginaryFields[0];
    EXPECT_EQ(imaginaryField.dataSize(), 3);
    dp_double imaginaryValue = imaginaryField.data(size)[0];
    EXPECT_DOUBLE_EQ(imaginaryValue, 13.931584555079384);

    double thetaR = theta / 180.0 * 3.14159265358979323846;

    // and compare them
    dp_double expectedValue = realValue * cos(thetaR) - imaginaryValue * sin(thetaR);
    EXPECT_DOUBLE_EQ(amplitudeValue, expectedValue);
}

TEST(Results, readRFXAtGivenScoping)
{
    std::string filename = (unit_test_helper::unitTestPath() / "rst_operators/allKindOfComplexity.rst").string();

    ansys::dpf::DataSources ds;
    ds.addResultFile(filename);

    {
        ansys::dpf::Model dpfModel(ds);
        std::string resultOperator = "RFX";

        auto mesh = dpfModel.getMesh(0);
        ansys::dpf::Scoping scoping = mesh.nodeScoping();
        auto location = scoping.location();
        ansys::dpf::Result res = dpfModel.CreateResultEvaluationWorkflow(resultOperator.c_str(), scoping, location);

        ansys::dpf::Result* resultWorkflow = &res;
        ansys::dpf::DpfError err;

        ansys::dpf::FieldsContainer fieldsContainer = resultWorkflow->EvaluateAtGivenTimeIndex(0, err);
        EXPECT_EQ(fieldsContainer.size(), 1);

        ansys::dpf::Field field = fieldsContainer[0];

        std::vector< double > fieldData;
        field.getData(fieldData);
        auto fd_size = fieldData.size();

        EXPECT_EQ(fd_size, 661);
        EXPECT_NEAR(fieldData.at(0), -1.0752, 1e-4);
        EXPECT_NEAR(fieldData.at(300), 4.9963, 1e-4);
        EXPECT_NEAR(fieldData.at(660), 993.8184, 1e-4);
    }

    {
        ansys::dpf::Model dpfModel(ds);
        std::string resultOperator = "RFY";

        auto mesh = dpfModel.getMesh(0);
        ansys::dpf::Scoping scoping = mesh.nodeScoping();
        auto location = scoping.location();
        ansys::dpf::Result res = dpfModel.CreateResultEvaluationWorkflow(resultOperator.c_str(), scoping, location);

        ansys::dpf::Result* resultWorkflow = &res;
        ansys::dpf::DpfError err;

        ansys::dpf::FieldsContainer fieldsContainer = resultWorkflow->EvaluateAtGivenTimeIndex(0, err);
        EXPECT_EQ(fieldsContainer.size(), 1);

        ansys::dpf::Field field = fieldsContainer[0];

        std::vector< double > fieldData;
        field.getData(fieldData);
        auto fd_size = fieldData.size();

        EXPECT_EQ(fd_size, 661);
        EXPECT_NEAR(fieldData.at(0), 2.5108, 1e-4);
        EXPECT_NEAR(fieldData.at(300), 0, 1e-4);
        EXPECT_NEAR(fieldData.at(660), 0, 1e-4);
    }

    {
        ansys::dpf::Model dpfModel(ds);
        std::string resultOperator = "RFZ";

        auto mesh = dpfModel.getMesh(0);
        ansys::dpf::Scoping scoping = mesh.nodeScoping();
        auto location = scoping.location();
        ansys::dpf::Result res = dpfModel.CreateResultEvaluationWorkflow(resultOperator.c_str(), scoping, location);

        ansys::dpf::Result* resultWorkflow = &res;
        ansys::dpf::DpfError err;

        ansys::dpf::FieldsContainer fieldsContainer = resultWorkflow->EvaluateAtGivenTimeIndex(0, err);
        EXPECT_EQ(fieldsContainer.size(), 1);

        ansys::dpf::Field field = fieldsContainer[0];

        std::vector< double > fieldData;
        field.getData(fieldData);
        auto fd_size = fieldData.size();

        EXPECT_EQ(fd_size, 661);
        EXPECT_NEAR(fieldData.at(0), -0.0879, 1e-4);
        EXPECT_NEAR(fieldData.at(300), -2.1119, 1e-4);
        EXPECT_NEAR(fieldData.at(660), -130.1577, 1e-4);
    }
    

}

TEST(Results, readSEQVWithPhaseAtGivenTimeIndex)
{
    std::string fileName("../../../testfiles/complex/filetheo.rst");
    ansys::dpf::Model model(fileName);

    Result res = model.CreateResultEvaluationWorkflow("S_eqv", Scoping({ 1 }, ansys::dpf::locations::nodal));

    dp_int size;
    // theta is in degrees
    const dp_double theta = 22.5;

    ansys::dpf::DpfError error;
    FieldsContainer amplitudeFieldsContainer = res.EvaluateWithPhaseAtGivenTimeIndex(0, theta, error);
    EXPECT_EQ(amplitudeFieldsContainer.size(), 1);
    Field amplitudeField = amplitudeFieldsContainer.at(0);
    EXPECT_EQ(amplitudeField.dataSize(), 3);
    dp_double amplitudeValue = amplitudeField.data(size)[1];
    EXPECT_DOUBLE_EQ(amplitudeValue, 14733.327201633281);

    // now get the real and imaginary separately
    FieldsContainer fieldsContainer = res.EvaluateAtGivenTimeIndex(0, error);
    EXPECT_EQ(fieldsContainer.size(), 2);
    EXPECT_TRUE(fieldsContainer.hasLabel("complex"));
    EXPECT_TRUE(fieldsContainer.hasLabel("time"));

    std::vector<Field> realFields = fieldsContainer.getFieldsForTimeId(1, 0);
    EXPECT_EQ(realFields.size(), 1);
    Field realField = realFields.at(0);
    EXPECT_EQ(realField.dataSize(), 3);
    dp_double realValue = realField.data(size)[1];
    EXPECT_DOUBLE_EQ(realValue, 15953.009290308262);

    std::vector<Field> imaginaryFields = fieldsContainer.getFieldsForTimeId(1, 1);
    EXPECT_EQ(imaginaryFields.size(), 1);
    Field imaginaryField = imaginaryFields[0];
    EXPECT_EQ(imaginaryField.dataSize(), 3);
    dp_double imaginaryValue = imaginaryField.data(size)[1];
    EXPECT_DOUBLE_EQ(imaginaryValue, 13.932047206695039);

    double thetaR = theta / 180.0 * 3.14159265358979323846;

    // and compare them
    dp_double expectedValue = realValue * cos(thetaR) - imaginaryValue * sin(thetaR);
    EXPECT_DOUBLE_EQ(amplitudeValue, expectedValue);
}

TEST(Results, readSEQVWithPhaseAtGivenStepIndexAndSubStep)
{
    std::string fileName("../../../testfiles/complex/filetheo.rst");
    ansys::dpf::Model model(fileName);

    TimeFreqSupport timeFreq = model.getTimeFreqSupport();
    auto numSets = timeFreq.numberOfSets();
    EXPECT_EQ(numSets, 10);

    auto numSteps = timeFreq.numberOfSteps();
    EXPECT_EQ(numSteps, 1);

    auto numSubSteps = timeFreq.numberOfSubStepsByStepIndex(0);
    EXPECT_EQ(numSubSteps, 10);

    Result res = model.CreateResultEvaluationWorkflow("S_eqv", Scoping({ 1 }, ansys::dpf::locations::nodal));

    dp_int size;
    // theta is in degrees
    const dp_double theta = 67.5;

    ansys::dpf::DpfError error;
    FieldsContainer amplitudeFieldsContainer = res.EvaluateWithPhaseAtGivenStepIndexAndSubStep(0, 9, theta, error);
    EXPECT_EQ(amplitudeFieldsContainer.size(), 1);
    Field amplitudeField = amplitudeFieldsContainer[0];
    EXPECT_EQ(amplitudeField.dataSize(), 3);
    dp_double amplitudeValue = amplitudeField.data(size)[0];
    EXPECT_DOUBLE_EQ(amplitudeValue, 1843.7635181923936);

    // now get the real and imaginary separately idx0,idx9=id10
    FieldsContainer fieldsContainer = res.EvaluateAtGivenStepIndexAndSubStep(0, 9, error);
    EXPECT_EQ(fieldsContainer.size(), 2);
    EXPECT_TRUE(fieldsContainer.hasLabel("complex"));
    EXPECT_TRUE(fieldsContainer.hasLabel("time"));

    std::vector<Field> realFields = fieldsContainer.getFieldsForTimeId(10, 0);
    EXPECT_EQ(realFields.size(), 1);
    Field realField = realFields.at(0);
    EXPECT_EQ(realField.dataSize(), 3);
    dp_double realValue = realField.data(size)[0];
    EXPECT_DOUBLE_EQ(realValue, 4823.4491029746168);

    std::vector<Field> imaginaryFields = fieldsContainer.getFieldsForTimeId(10, 1);
    EXPECT_EQ(imaginaryFields.size(), 1);
    Field imaginaryField = imaginaryFields[0];
    EXPECT_EQ(imaginaryField.dataSize(), 3);
    dp_double imaginaryValue = imaginaryField.data(size)[0];
    EXPECT_DOUBLE_EQ(imaginaryValue, 2.262784593315458);

    double thetaR = theta / 180.0 * 3.14159265358979323846;

    // and compare them
    dp_double expectedValue = realValue * cos(thetaR) - imaginaryValue * sin(thetaR);
    EXPECT_DOUBLE_EQ(amplitudeValue, expectedValue);
}
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)