<a id="AveragingTest_8cpp-example"></a>
# Example AveragingTest.cpp undefined

**Location**: `dpf\_api.h`



Examples showing how to average results to reach a nodal or elemental form, per bodies... 
```
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
#include "dpf_api.h"
#include <limits>
#ifdef EXAMPLE
#include "Example.h"
#else
#include <gtest/gtest.h>
#endif

TEST(Averaging, ResultsRequestedLocation)
{
    // The location is the type of topology associated with the data container. 
    // For finite element data, the location is one of three spatial locations: Nodal, Elemental, or ElementalNodal.
    // For more information about the location, see https://dpf.docs.pyansys.com/version/stable/concepts/concepts.html#location.
    // 
    // When reading a result, a specific location can be requested. 
    // The following example illustrates how to request a Nodal location for a result with an ElementalNodal native location.

    // Data source
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::DataSources dataSources;
    dataSources.addResultFile(fileName);

    ansys::dpf::Operator stress_op("S");
    if (stress_op.empty()) {
        throw std::runtime_error("S operator failed to load");
    }
    stress_op.connect(ansys::dpf::eDataSourcesPin, dataSources);
    ansys::dpf::FieldsContainer result_fc = stress_op.getOutputFieldsContainer(0);
    EXPECT_EQ(std::string(result_fc.at(0).fieldDefinition().location().c_str()), std::string(ansys::dpf::locations::elemental_nodal));

    stress_op.connect(ansys::dpf::eLocationPin, std::string(ansys::dpf::locations::nodal.c_str()));
    result_fc = stress_op.getOutputFieldsContainer(0);
    EXPECT_EQ(std::string(result_fc.at(0).fieldDefinition().location().c_str()), std::string(ansys::dpf::locations::nodal.c_str()));

    stress_op.connect(ansys::dpf::eLocationPin, std::string(ansys::dpf::locations::elemental.c_str()));
    result_fc = stress_op.getOutputFieldsContainer(0);
    EXPECT_EQ(std::string(result_fc.at(0).fieldDefinition().location().c_str()), std::string(ansys::dpf::locations::elemental.c_str()));
}

TEST(Averaging, B867395_no_crash_with_empty_element_list)
{
    ansys::dpf::MeshedRegion m;
    m.addNode(1, { 0.0,0.0,0.0 });
    m.addNode(2, { 1.0,0.0,0.0 });
    m.addNode(3, { 0.0,1.0,0.0 });

    ansys::dpf::Field nodal_field;
    {
        ansys::dpf::FieldDefinition fdef;
        fdef.setLocation(ansys::dpf::locations::nodal);
        fdef.dimensions() = { 1 };
        fdef.setUnit(ansys::dpf::Unit("m"));
        nodal_field.setFieldDefinition(fdef);
        nodal_field.push_back(1, { 1.0 });
        nodal_field.push_back(2, { 2.0 });
        nodal_field.push_back(3, { 3.0 });
        nodal_field.setSupport(m);
    }

    ansys::dpf::Operator averager("nodal_to_elemental");

    averager.connect(0, nodal_field);

    auto out = averager.getOutputField(0);

    EXPECT_EQ(out.dataSize(), 0);

}

TEST(AveragingPerBody, Nodal)
{

    // The following example shows you how to average a result per body for a multibody simulation. 

    // Data source
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::DataSources dataSources;
    dataSources.addResultFile(fileName);

    // Get scoping split by body
    // -------------------------
    // Instantiate MeshProvider operator to get the MeshedRegion
    ansys::dpf::Operator meshProvider = ansys::dpf::Operator("MeshProvider");
    if (meshProvider.empty()) {
        throw std::runtime_error("MeshProvider failed to load");
    }
    meshProvider.connect(ansys::dpf::eDataSourcesPin, dataSources);
    ansys::dpf::MeshedRegion mesh = meshProvider.getOutputMeshedRegion(0);

    // Instantiate the scoping::by_property operator that provides a ScopingsContainer 
    // containing a scoping per body
    ansys::dpf::Operator scoping_op = ansys::dpf::Operator("scoping::by_property");
    if (scoping_op.empty()) {
        throw std::runtime_error("scoping::by_property operator failed to load");
    }
    scoping_op.connect(ansys::dpf::eMeshRegionPin, mesh);
    scoping_op.connect(ansys::dpf::eLocationPin, ansys::dpf::locations::elemental);
    scoping_op.connect(13, std::string("mat")); // split per body with mat attribute
    ansys::dpf::ScopingsContainer scopings_per_body = scoping_op.getOutputScopingsContainer(0);

    EXPECT_EQ(scopings_per_body.size(), 4);

    // Get split result
    // ----------------
    // Instantiate the result operator (stress)
    ansys::dpf::Operator stress_op("S");
    if (stress_op.empty()) {
        throw std::runtime_error("S operator failed to load");
    }
    // Connect the DataSources
    stress_op.connect(ansys::dpf::eDataSourcesPin, dataSources);
    // Request a location for the output
    // Stress result from TwoSolids.rst file has native ElementalNodal location
    // An average from ElementalNodal to Nodal location will be done
    stress_op.connect(ansys::dpf::eLocationPin, ansys::dpf::locations::nodal);
    // Provide the ScopingsContainer (containing a scoping per body) as input to the operator
    // The resulting FieldsContainer will contain a Field per body
    stress_op.connect(ansys::dpf::eMeshScopPin, scopings_per_body);
    // Compute output FieldsContainer
    ansys::dpf::FieldsContainer result_fc = stress_op.getOutputFieldsContainer(0);

    EXPECT_EQ(result_fc.size(), 4);
}
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)