<a id="DataExport_8cpp-example"></a>
# Example DataExport.cpp
Examples creating entites and importing or exporting from or to specific formats. 
```
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
#include "dpf_api.h"
#include "helpers/dpf_result.h"
#include "helpers/dpf_model.h"
#include <limits>
#ifdef EXAMPLE
#include "Example.h"
#else
#include <gtest/gtest.h>
#endif

// TemporaryDirectory
#include <boost/filesystem.hpp>
#include <boost/dll.hpp>
#include <thread>
#include <sstream>

struct DataExportTempDir
{
private: 
    boost::filesystem::path _result_path;

public:
    DataExportTempDir()
    {
        std::ostringstream ss;
        ss << std::this_thread::get_id();
        boost::filesystem::path program_loc = boost::dll::program_location().parent_path();
        program_loc /= ("DpfData" + ss.str());
        if (!boost::filesystem::exists(program_loc))
            boost::filesystem::create_directories(program_loc);
        _result_path = program_loc;
    }
    ~DataExportTempDir()
    {
        clear();
    }

    void clear()
    {
        if (boost::filesystem::exists(_result_path))
            boost::filesystem::remove_all(_result_path);
    }

    std::string getTempFile(std::string const& name) const
    {
        return (_result_path / name).string();
    }
};

TEST(CreateAndExport, CreateEntitesAndHdf5Export)
{
    /*
    You can create your field, fields container, or meshed region, to use in DPF operators, with your own data.
    These entities can then be exported into HDF5 format, that can be re-opened in another process.
    */

    ansys::dpf::LabelSpace label_space_1 = { { ansys::dpf::labels::time, 1 } };
    ansys::dpf::LabelSpace label_space_2 = { { ansys::dpf::labels::time, 2 } };
    ansys::dpf::LabelSpace label_space_3 = { { ansys::dpf::labels::time, 3 } };
    int numNodes = 9;
    int numElements = 3;
    ansys::dpf::MeshedRegion mesh;
    ansys::dpf::TimeFreqSupport time_freq_support;
    ansys::dpf::FieldsContainer fc_disp;
    ansys::dpf::FieldsContainer fc_stress;
    ansys::dpf::MeshesContainer meshes;
    ansys::dpf::DataSources hdf5_ds;

    // set the result folder path to the right path
    DataExportTempDir temp_dir;

    // 1. Create a new mesh with 1 quad, 1 point element and 1 tetra
    // -------------------------------------------------------------
    {
        mesh.prepareConstruction(numNodes, numElements); //reserve the size of the mesh
        mesh.setLengthUnit(ansys::dpf::Unit("m"));

        //quad element with 4 nodes
        mesh.addNode(1, { 0.0, 0.0, 0.0 });
        mesh.addNode(2, { 1.0, 0.0, 0.0 });
        mesh.addNode(3, { 1.0, 1.0, 0.0 });
        mesh.addNode(4, { 0.0, 1.0, 0.0 });
        mesh.addElement(ansys::dpf::elements::quadShell4, 1, { 0, 1, 2, 3 }); // connectivity is by node indexes

        //point element
        mesh.addNode(5, { 0.0, 0.0, 0.0 });
        mesh.addElement(ansys::dpf::elements::point1, 2, { 4 });

        //tetra element with 4 nodes
        mesh.addNode(6, { 0.0, 0.0, 0.0 });
        mesh.addNode(7, { 1.0, 0.0, 0.0 });
        mesh.addNode(8, { 1.0, 1.0, 0.0 });
        mesh.addNode(9, { 0.0, 1.0, 1.0 });
        mesh.addElement(ansys::dpf::elements::tet4, 4, { 5, 6, 7, 8 });

        // Access the mesh information
        mesh.nodeScoping().size();
        //return:
        //11
        mesh.elementScoping().size();
        //return:
        //4
    }

    // 2. Create time freq support to describe the time frequencies information
    // ------------------------------------------------------------------------
    {
        ansys::dpf::Field time_freq(3, { 1 }, ansys::dpf::locations::time_set);
        time_freq.scoping().setIds({ 1, 2, 3 });
        time_freq.scoping().setLocation(ansys::dpf::locations::time_step);
        time_freq.setData({ 0.1, 0.21, 0.2 });

        // set the time_freq_support fields
        time_freq_support.setTimeFrequencies(time_freq);
    }

    // 3. Create nodal displacement FieldContainer for 3 time steps
    // ------------------------------------------------------------
    /*
    Create displacement fields over time with three time sets. For the first time set, the displacement 
    on each node is the value of its x, y, and z coordinates. For the second time set, the displacement 
    on each node is two times the value of its x, y, and z coordinates. For the third time set, the 
    displacement on each node is three times the value of its x, y, and z coordinates.
    */
    {
        ansys::dpf::Field coordinates_field = mesh.nodesCoordinates();
        ansys::dpf::Operator add("add");
        add.connect(0, coordinates_field);
        add.connect(1, coordinates_field);
        ansys::dpf::Field coordinates_x_2 = add.getOutputField(0);
        add.connect(1, coordinates_x_2);
        ansys::dpf::Field coordinates_x_3 = add.getOutputField(0);

        ansys::dpf::FieldDefinition fieldDef = coordinates_field.fieldDefinition();
        fieldDef.setUnit(mesh.lengthUnit());

        // fill whole data in once
        ansys::dpf::Field time_1_disp_data(numNodes, { 3 }, ansys::dpf::locations::nodal);
        double* data_1 = coordinates_field.data().data();
        time_1_disp_data.setData(data_1, coordinates_field.dataSize());
        ansys::dpf::Field time_2_disp_data(numNodes, { 3 }, ansys::dpf::locations::nodal);
        double* data_2 = coordinates_x_2.data().data();
        time_2_disp_data.setData(data_2, coordinates_x_2.dataSize());
        ansys::dpf::Field time_3_disp_data(numNodes, { 3 }, ansys::dpf::locations::nodal);
        double* data_3 = coordinates_x_3.data().data();
        time_3_disp_data.setData(data_3, coordinates_x_3.dataSize());

        ansys::dpf::FieldDefinition field_def_1 = time_1_disp_data.fieldDefinition();
        field_def_1.setUnit(mesh.lengthUnit());
        time_1_disp_data.setFieldDefinition(field_def_1);
        ansys::dpf::FieldDefinition field_def_2 = time_2_disp_data.fieldDefinition();
        field_def_2.setUnit(mesh.lengthUnit());
        time_2_disp_data.setFieldDefinition(field_def_2);
        ansys::dpf::FieldDefinition field_def_3 = time_3_disp_data.fieldDefinition();
        field_def_3.setUnit(mesh.lengthUnit());
        time_3_disp_data.setFieldDefinition(field_def_3);

        time_1_disp_data.setScoping(coordinates_field.scoping());
        time_2_disp_data.setScoping(coordinates_field.scoping());
        time_3_disp_data.setScoping(coordinates_field.scoping());

        fc_disp.addLabel(ansys::dpf::labels::time);
        fc_disp.add(label_space_1, time_1_disp_data);
        fc_disp.add(label_space_2, time_2_disp_data);
        fc_disp.add(label_space_3, time_3_disp_data);
        fc_disp.setSupport(time_freq_support);
    }

    // 4. Create elemental stress FieldContainer for 3 time steps
    // ----------------------------------------------------------
    {
        int num_entities = 3;
        ansys::dpf::Field field_stress_1(num_entities, { 3, 3 }, ansys::dpf::locations::elemental); //elemental sym matrix
        ansys::dpf::Field field_stress_2(num_entities, { 3, 3 }, ansys::dpf::locations::elemental); //elemental sym matrix
        ansys::dpf::Field field_stress_3(num_entities, { 3, 3 }, ansys::dpf::locations::elemental); //elemental sym matrix

        ansys::dpf::FieldDefinition field_def_1 = field_stress_1.fieldDefinition();
        field_def_1.setUnit(ansys::dpf::Unit("Pa"));
        field_stress_1.setFieldDefinition(field_def_1);
        ansys::dpf::FieldDefinition field_def_2 = field_stress_2.fieldDefinition();
        field_def_2.setUnit(ansys::dpf::Unit("Pa"));
        field_stress_2.setFieldDefinition(field_def_2);
        ansys::dpf::FieldDefinition field_def_3 = field_stress_3.fieldDefinition();
        field_def_3.setUnit(ansys::dpf::Unit("Pa"));
        field_stress_3.setFieldDefinition(field_def_3);

        // fill by entity
        std::vector<double> elem_data_1 = { 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, };
        std::vector<double> elem_data_2 = { 4.0, 4.0, 4.0, 0.0, 0.0, 0.0 };
        std::vector<double> elem_data_3 = { 2.3, 1.0, 1.0, 0.0, 0.0, 1.0, 2.3, 1.0, 1.0, 0.0, 0.0, 1.0, 2.3, 1.0, 1.0, 0.0, 0.0, 1.0, 2.3, 1.0, 1.0, 0.0, 0.0, 1.0 };
        field_stress_1.push_back(1, elem_data_1);
        field_stress_1.push_back(2, elem_data_2);
        field_stress_1.push_back(4, elem_data_3);
        field_stress_2.push_back(1, elem_data_1);
        field_stress_2.push_back(2, elem_data_2);
        field_stress_2.push_back(4, elem_data_3);
        field_stress_3.push_back(1, elem_data_1);
        field_stress_3.push_back(2, elem_data_2);
        field_stress_3.push_back(4, elem_data_3);

        fc_stress.addLabel(ansys::dpf::labels::time);
        fc_stress.add(label_space_1, field_stress_1);
        fc_stress.add(label_space_2, field_stress_2);
        fc_stress.add(label_space_3, field_stress_3);
        fc_stress.setSupport(time_freq_support);
    }

    // 5. Get deformed meshed in a MeshesContainer
    // -------------------------------------------
    {
        ansys::dpf::Field node_coords = mesh.nodesCoordinates();
        ansys::dpf::Operator add_coords("add");
        add_coords.connect(0, node_coords);
        ansys::dpf::Field disp_field_1 = fc_disp.getField(label_space_1);
        add_coords.connect(1, disp_field_1);
        ansys::dpf::Field deformed_coords_1 = add_coords.getOutputField(0);
        ansys::dpf::Field disp_field_2 = fc_disp.getField(label_space_2);
        add_coords.connect(1, disp_field_2);
        ansys::dpf::Field deformed_coords_2 = add_coords.getOutputField(0);
        ansys::dpf::Field disp_field_3 = fc_disp.getField(label_space_3);
        add_coords.connect(1, disp_field_3);
        ansys::dpf::Field deformed_coords_3 = add_coords.getOutputField(0);

        ansys::dpf::MeshedRegion mesh_1 = mesh.deep_copy();
        mesh_1.setNodesCoordinates(deformed_coords_1);
        ansys::dpf::MeshedRegion mesh_2 = mesh.deep_copy();
        mesh_2.setNodesCoordinates(deformed_coords_2);
        ansys::dpf::MeshedRegion mesh_3 = mesh.deep_copy();
        mesh_3.setNodesCoordinates(deformed_coords_3);

        meshes.addLabel(ansys::dpf::labels::time);
        meshes.add(label_space_1, mesh_1);
        meshes.add(label_space_2, mesh_2);
        meshes.add(label_space_3, mesh_3);
    }

    // 6. Serialize into hdf5 file
    // ---------------------------
    {
        ansys::dpf::Operator op_hdf5("hdf5::h5dpf::make_result_file");
        op_hdf5.connect(0, temp_dir.getTempFile("export_hdf5.h5"));
        op_hdf5.connect(1, mesh);
        op_hdf5.connect(4, std::string("stress_result"));
        op_hdf5.connect(5, fc_stress);
        op_hdf5.connect(6, std::string("disp_result"));
        op_hdf5.connect(7, fc_disp);

        hdf5_ds = op_hdf5.getOutputDataSources(0);
    }

    // 7. Deserialize the H5 file and check the result
    // -----------------------------------------------
    ansys::dpf::MeshedRegion mesh_deser = ansys::dpf::MeshedRegion::emptyMeshedRegion();
    ansys::dpf::FieldsContainer stress_deser = ansys::dpf::FieldsContainer::emptyFieldsContainer();
    ansys::dpf::FieldsContainer disp_deser = ansys::dpf::FieldsContainer::emptyFieldsContainer();
    ansys::dpf::Scoping time_scoping;
    time_scoping.setIds({ 1, 2, 3 });
    {
        ansys::dpf::Operator stream("stream_provider");
        stream.connect(ansys::dpf::eDataSourcesPin, hdf5_ds);

        ansys::dpf::Operator h5_read_op("hdf5::h5dpf::custom");
        h5_read_op.connect(ansys::dpf::eStreamPin, stream, 0);
        h5_read_op.connect(ansys::dpf::eTimeScopPin, time_scoping);
        h5_read_op.connect(60, std::string("stress_result"));
        stress_deser = h5_read_op.getOutputFieldsContainer(0);
        h5_read_op.connect(60, std::string("disp_result"));
        disp_deser = h5_read_op.getOutputFieldsContainer(0);

        ansys::dpf::Operator mesh_prov_op("MeshProvider");
        mesh_prov_op.connect(ansys::dpf::eStreamPin, stream, 0);
        mesh_deser = mesh_prov_op.getOutputMeshedRegion(0);
    }

    // 8. Ensure serialized and deserialized values are identical
    // ----------------------------------------------------------
    EXPECT_TRUE(mesh_deser.numberOfElements() == mesh.numberOfElements());
    EXPECT_TRUE(mesh_deser.numberOfNodes() == mesh.numberOfNodes());
    EXPECT_TRUE(disp_deser.size() == fc_disp.size());
    EXPECT_TRUE(disp_deser[0].dataSize() == fc_disp[0].dataSize());
    EXPECT_TRUE(stress_deser.size() == fc_stress.size());
    EXPECT_TRUE(stress_deser[1].dataSize() == stress_deser[1].dataSize());
    ansys::dpf::TimeFreqSupport tfq = stress_deser.support().getAsTimeFreqSupport();
    ansys::dpf::Field f = tfq.frequencies();
    EXPECT_TRUE(tfq.numberOfSets() == 3);
    EXPECT_TRUE(f.dataSize() == 3);
}
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)