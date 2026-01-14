# Example Test013.cpp undefined

<a id="_test013_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestClipPlane.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Legends





This example demonstrates the use of legends.





Several legends are created demonstrating different options to the legend object. 
```
/*
 * Copyright 2018-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 * 
 * Restricted Rights Legend
 *
 * Use, duplication, or disclosure of this
 * software and its documentation by the
 * Government is subject to restrictions as
 * set forth in subdivision [(b)(3)(ii)] of
 * the Rights in Technical Data and Computer
 * Software clause at 52.227-7013.
 */
#include <vector>
#include <cmath>
#ifdef _WIN32
#include <codecvt>
#endif

#include "GLTFWriter.h"
#include "test.h"

using namespace ANSYS::AVZ;

namespace {
#ifdef _WIN32
    std::string 
    ConvertToUtf8String(const std::wstring& wstr)
    {
        std::wstring_convert<std::codecvt_utf8<wchar_t>> myconv;
        return myconv.to_bytes(wstr);
    }
#endif
};

// Legends
TESTFUNC(Legends)
{
    GLTFWriter::GLTF *gltf = GLTFWriter::GLTF::Create("MyApp", "1.0", functionName.c_str(), type);
    if (!gltf)
        throw std::runtime_error("Can't create GLTF");

    // SCENE
#ifdef _WIN32
    GLTFWriter::Scene *scene = GLTFWriter::Scene::Create(gltf, ConvertToUtf8String(L"ԎҿșϯϨҁęɳę").c_str(), "", 0, GLTFWriter::Scene::BT_TB, 0.42F, 0.55F, 0.871F, 1, 1, 1);
#else
    GLTFWriter::Scene *scene = GLTFWriter::Scene::Create(gltf, "Testscene", "m", 1.0F, GLTFWriter::Scene::BT_TB, 0.42F, 0.55F, 0.871F, 1, 1, 1);
#endif
    if (!scene) {
        GLTFWriter::GLTF::Destroy(gltf);
        throw std::runtime_error("Can't create scene");
    }
    auto line_width = GLTFWriter::Value::Create(gltf, "ANSYS_linewidth", 0.001);
    scene->AppendValue(line_width);
    auto time_value = GLTFWriter::Value::Create(gltf, "ANSYS_scene_timevalue", 0.0);
    scene->AppendValue(time_value);

    // CAMERA
    {
        // CAMERA
        GLTFWriter::Camera *camera = GLTFWriter::Camera::CreateOrthographic(gltf);
        // CAMERA NODE
        std::vector<double> mat(16);
        mat[0] = 0;
        mat[1] = 1;
        mat[2] = 0;
        mat[3] = 0;
        mat[4] = 0;
        mat[5] = 0;
        mat[6] = 1;
        mat[7] = 0;
        mat[8] = 1;
        mat[9] = 0;
        mat[10] = 0;
        mat[11] = 0;
        mat[12] = 0;
        mat[13] = 0;
        mat[14] = 0;
        mat[15] = 1;
        GLTFWriter::Node *cameraNode = GLTFWriter::Node::CreateCamera(gltf, camera, "TestCamera", &mat[0]);
        scene->SetCamera(cameraNode);
    }

    // banded texture
    {
        float mn = 1.5;
        float mx = 2.5;
        float range = mx - mn;

        // TEXTURE
        std::vector<unsigned char> colors;
        colors.push_back(0); colors.push_back(0); colors.push_back(255); // blue
        colors.push_back(0); colors.push_back(255); colors.push_back(255); // cyan
        colors.push_back(0); colors.push_back(255); colors.push_back(0); // green
        colors.push_back(255); colors.push_back(255); colors.push_back(0); // yellow
        colors.push_back(255); colors.push_back(0); colors.push_back(0); // red
        GLTFWriter::Texture *bandedTexture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGB, (unsigned int)colors.size() / 3, &colors[0], false);


        // generate vertices, and texture coordinates for a ball
        std::vector<float> vertices;
        std::vector<unsigned int> lines;
        std::vector<unsigned int> triangles;
        GLTFWriter::Test::MakeSphere(0, -1, 0, 0.5, 64, vertices, lines, triangles);
        const unsigned int numVertices = (unsigned int)vertices.size() / 3;
        const unsigned int numLines = (unsigned int)lines.size() / 2;
        const unsigned int numTriangles = (unsigned int)triangles.size() / 3;
        std::vector<float> textureCoords(numVertices);
        for (unsigned int i = 0; i < numVertices; ++i)
            textureCoords[i] = (vertices[3 * i + 2] + 0.5F) * range + mn; // coordinates go from mn to mx

        // NODE
        {
            // LEGEND
            // make this banded colors
            std::vector<float> valueLocation;
            //valueLocation.push_back(1, mx);
            GLTFWriter::Legend *legend = GLTFWriter::Legend::Create(gltf, GLTFWriter::Legend::LO_VERTICAL, 0.75, bandedTexture, mn, mx, GLTFWriter::Legend::LA_X_YCENTER,
#ifdef _WIN32
                                            ConvertToUtf8String(L"Z Ƥṏᴤΐṱϊӧת\nBanded").c_str(), 
#else
                                            "Z Position\nBanded",
#endif
                                            "m", "This is an example\nbanded legend\nX, Y Center", 6, 0,
                                            true, false, 0.05F, 0, 0.0F, 0.0F, 0.0F, 1.0F, 1.0F, 1.0F, 0.25F);

            // BUFFER - combine attributes into a single buffer
            GLTFWriter::Buffer *buffer = GLTFWriter::Buffer::Create(gltf);
            if (!buffer) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create buffer");
            }

            // NODE
            GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "Banded");
            if (!node || !scene->AppendMesh(node)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // LEGEND NODE
#ifdef _WIN32
            GLTFWriter::Node *legendNode = GLTFWriter::Node::CreateLegend(gltf, legend, ConvertToUtf8String(L"Ḷḙḡḗṋḍ").c_str());
#else
            GLTFWriter::Node *legendNode = GLTFWriter::Node::CreateLegend(gltf, legend, "Legend");
#endif
            node->AppendChild(legendNode);


            // MESH NODE
            GLTFWriter::Node *meshNode = GLTFWriter::Node::CreateMesh(gltf, "Mesh");
            if (!meshNode || !node->AppendChild(meshNode)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // MESH
            GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
            if (!mesh || !meshNode->AppendMesh(mesh)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh");
            }

            // TECHNIQUE
            GLTFWriter::Technique *technique = GLTFWriter::Technique::Create(gltf);
            if (!technique ||
                // TECHNIQUE STATES
                !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create technique");
            }

            // MATERIAL
            GLTFWriter::Material *material = GLTFWriter::Material::Create(gltf, technique);
            if (!material ||
                // MATERIAL UNIFORM VALUES
                !material->AppendValue(GLTFWriter::Value::Create(gltf, "texture0", bandedTexture->GetID()))) { // texture0 name is auto-generated from Attribute TEXCOORD0
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create material");
            }
            auto mat_name = GLTFWriter::Value::Create(gltf, "ANSYS_material_name", "unknown");
            material->AppendValue(mat_name);
            auto mat_info = GLTFWriter::Value::Create(gltf, "ANSYS_material_details", "{}");
            material->AppendValue(mat_info);

            // repack unsigned int indices into multiple sets of unsigned short indices
            GLTFWriter::Utils::Repack *repack = GLTFWriter::Utils::Repack::Create(numTriangles, 3, &triangles[0]);
            if (!repack) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create repack");
            }
            for (unsigned int i = 0; i < repack->NumPacks(); ++i) {
                const float *packedData;
                unsigned int numAttributes = repack->NumAttributes(i);

                // POSITION ATTRIBUTE
                packedData = repack->ConstructRepackAttribute(&triangles[0], 3, &vertices[0], i);
                GLTFWriter::Attribute *vertex = GLTFWriter::Attribute::Create(gltf, "POSITION", GLTFWriter::Attribute::AT_FLOAT_VEC3, numAttributes, packedData, buffer);

                // TEXCOORD ATTRIBUTE
                packedData = repack->ConstructRepackAttribute(&triangles[0], 1, &textureCoords[0], i);
                GLTFWriter::Attribute *texture = GLTFWriter::Attribute::Create(gltf, "TEXCOORD0", GLTFWriter::Attribute::AT_FLOAT, numAttributes, packedData, buffer);

                // INDICES
                unsigned int numIndices = 3U * repack->NumElements(i);
                const unsigned short *packedIndex = repack->ConstructRepackIndex(&triangles[0], i);
                GLTFWriter::Index *index = GLTFWriter::Index::Create(gltf, numIndices, packedIndex, buffer);

                // PRIMITIVE
                GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(texture)) {
                    GLTFWriter::Utils::Repack::Destroy(repack);
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            GLTFWriter::Utils::Repack::Destroy(repack);
        }
    }

    // gradient texture
    {
        float mn = -0.5;
        float mx = 0.5;
        float range = mx - mn;

        // TEXTURE
        std::vector<unsigned char> colors;
        colors.push_back(0); colors.push_back(0); colors.push_back(255); // blue
        colors.push_back(0); colors.push_back(255); colors.push_back(255); // cyan
        colors.push_back(0); colors.push_back(255); colors.push_back(0); // green
        colors.push_back(255); colors.push_back(255); colors.push_back(0); // yellow
        colors.push_back(255); colors.push_back(0); colors.push_back(0); // red
        GLTFWriter::Texture *smoothTexture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGB, (unsigned int)colors.size() / 3, &colors[0]);

        // generate vertices, and texture coordinates for a ball
        std::vector<float> vertices;
        std::vector<unsigned int> lines;
        std::vector<unsigned int> triangles;
        GLTFWriter::Test::MakeSphere(0, 1, 0, 0.5, 64, vertices, lines, triangles);
        const unsigned int numVertices = (unsigned int)vertices.size() / 3;
        const unsigned int numLines = (unsigned int)lines.size() / 2;
        const unsigned int numTriangles = (unsigned int)triangles.size() / 3;
        std::vector<float> textureCoords(numVertices);
        for (unsigned int i = 0; i < numVertices; ++i)
            textureCoords[i] = (vertices[3 * i + 2] + 0.5F) * range + mn; // coordinates go from mn to mx

        // NODE
        {
            // LEGEND
            // make this gradient colors
            std::vector<float> valueLocation;
            //valueLocation.push_back(1, mx);
            GLTFWriter::Legend *legend = GLTFWriter::Legend::Create(gltf, GLTFWriter::Legend::LO_VERTICAL, 0.333F, smoothTexture, mn, mx, GLTFWriter::Legend::LA_XRIGHT_YCENTER,
#ifdef _WIN32
                                            ConvertToUtf8String(L"Z Ƥṏᴤΐṱϊӧת\nSmooth").c_str(),
#else
                                            "Z Position\nSmooth",
#endif
                                            "m", "This is an example\ngradient legend\nX Right, Y Center", 0, 0,
                                            false, false);

            // BUFFER - combine attributes into a single buffer
            GLTFWriter::Buffer *buffer = GLTFWriter::Buffer::Create(gltf);

            // NODE
            GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "Linear");
            if (!node || !scene->AppendMesh(node)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // LEGEND NODE
#ifdef _WIN32
            GLTFWriter::Node *legendNode = GLTFWriter::Node::CreateLegend(gltf, legend, ConvertToUtf8String(L"Ḷḙḡḗṋḍ").c_str());
#else
            GLTFWriter::Node *legendNode = GLTFWriter::Node::CreateLegend(gltf, legend, "Legend");
#endif
            node->AppendChild(legendNode);

            // MESH NODE
            GLTFWriter::Node *meshNode = GLTFWriter::Node::CreateMesh(gltf, "Mesh");
            if (!meshNode || !node->AppendChild(meshNode)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // MESH
            GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
            if (!mesh || !meshNode->AppendMesh(mesh)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh");
            }

            // TECHNIQUE
            GLTFWriter::Technique *technique = GLTFWriter::Technique::Create(gltf);
            if (!technique ||
                // TECHNIQUE STATES
                !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create technique");
            }

            // MATERIAL
            GLTFWriter::Material *material = GLTFWriter::Material::Create(gltf, technique);
            if (!material ||
                // MATERIAL UNIFORM VALUES
                !material->AppendValue(GLTFWriter::Value::Create(gltf, "texture0", smoothTexture->GetID()))) { // texture0 name is auto-generated from Attribute TEXCOORD0
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create material");
            }

            // repack unsigned int indices into multiple sets of unsigned short indices
            GLTFWriter::Utils::Repack *repack = GLTFWriter::Utils::Repack::Create(numTriangles, 3, &triangles[0]);
            if (!repack) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create repack");
            }
            for (unsigned int i = 0; i < repack->NumPacks(); ++i) {
                const float *packedData;
                unsigned int numAttributes = repack->NumAttributes(i);

                // POSITION ATTRIBUTE
                packedData = repack->ConstructRepackAttribute(&triangles[0], 3, &vertices[0], i);
                GLTFWriter::Attribute *vertex = GLTFWriter::Attribute::Create(gltf, "POSITION", GLTFWriter::Attribute::AT_FLOAT_VEC3, numAttributes, packedData, buffer);

                // TEXCOORD ATTRIBUTE
                packedData = repack->ConstructRepackAttribute(&triangles[0], 1, &textureCoords[0], i);
                GLTFWriter::Attribute *texture = GLTFWriter::Attribute::Create(gltf, "TEXCOORD0", GLTFWriter::Attribute::AT_FLOAT, numAttributes, packedData, buffer);

                // INDICES
                unsigned int numIndices = 3U * repack->NumElements(i);
                const unsigned short *packedIndex = repack->ConstructRepackIndex(&triangles[0], i);
                GLTFWriter::Index *index = GLTFWriter::Index::Create(gltf, numIndices, packedIndex, buffer);

                // PRIMITIVE
                GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(texture)) {
                    GLTFWriter::Utils::Repack::Destroy(repack);
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            GLTFWriter::Utils::Repack::Destroy(repack);
        }
    }

    // banded log texture
    {
        float mn = 10;
        float mx = 100;
        float range = mx - mn;

        // TEXTURE
        std::vector<unsigned char> colors;
        colors.push_back(0); colors.push_back(0); colors.push_back(255); // blue
        colors.push_back(0); colors.push_back(255); colors.push_back(255); // cyan
        colors.push_back(0); colors.push_back(255); colors.push_back(0); // green
        colors.push_back(255); colors.push_back(255); colors.push_back(0); // yellow
        colors.push_back(255); colors.push_back(0); colors.push_back(0); // red

        std::vector<float> bandLocations; // fractions from 0 to 1
        bandLocations.push_back(0);
        bandLocations.push_back(0.064988132F);
        bandLocations.push_back(0.167987381F);
        bandLocations.push_back(0.33123019F);
        bandLocations.push_back(0.589952605F);
        GLTFWriter::Texture *bandedTexture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGB, (unsigned int)colors.size() / 3, &colors[0], false, (unsigned int)bandLocations.size(), &bandLocations[0]);

        // generate vertices, and texture coordinates for a ball
        std::vector<float> vertices;
        std::vector<unsigned int> lines;
        std::vector<unsigned int> triangles;
        GLTFWriter::Test::MakeSphere(0, 0, -1, 0.5, 64, vertices, lines, triangles);
        const unsigned int numVertices = (unsigned int)vertices.size() / 3;
        const unsigned int numLines = (unsigned int)lines.size() / 2;
        const unsigned int numTriangles = (unsigned int)triangles.size() / 3;
        std::vector<float> textureCoords(numVertices);
        for (unsigned int i = 0; i < numVertices; ++i)
            textureCoords[i] = (vertices[3 * i + 1] + 0.5F) * range + mn; // coordinates go from mn to mx

        // NODE
        {
            // LEGEND
            // make this logarithmic with banded colors
            std::vector<float> valueLocations; // pairs of numbers, both of which are fractions from 0 to 1
            valueLocations.push_back(0); valueLocations.push_back(0);
            valueLocations.push_back((15.84893192461114F - mn) / range); valueLocations.push_back(0.2F);
            valueLocations.push_back((25.1188643150958F - mn) / range); valueLocations.push_back(0.4F);
            valueLocations.push_back((39.8107170553498F - mn) / range); valueLocations.push_back(0.6F);
            valueLocations.push_back((63.0957344480194F - mn) / range); valueLocations.push_back(0.8F);
            valueLocations.push_back(1); valueLocations.push_back(1);
            GLTFWriter::Legend *legend = GLTFWriter::Legend::Create(gltf, GLTFWriter::Legend::LO_HORIZONTAL, 0.75, bandedTexture, mn, mx, GLTFWriter::Legend::LA_XCENTER_YBOTTOM,
#ifdef _WIN32
                                            ConvertToUtf8String(L"Y Ƥṏᴤΐṱϊӧת\nBanded").c_str(),
#else
                                            "Y Position\nBanded",
#endif
                                            "m", "User specified\nbanded log legend\nX Center, Y Bottom", 6, &valueLocations[0],
                                            false, false, 0, 0, 0.0F, 0.0F, 0.0F, 1.0F, 1.0F, 1.0F, 0.25F);

            // BUFFER - combine attributes into a single buffer
            GLTFWriter::Buffer *buffer = GLTFWriter::Buffer::Create(gltf);

            // NODE
            GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "Banded Log User Specified");
            if (!node || !scene->AppendMesh(node)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // LEGEND NODE
#ifdef _WIN32
            GLTFWriter::Node *legendNode = GLTFWriter::Node::CreateLegend(gltf, legend, ConvertToUtf8String(L"Ḷḙḡḗṋḍ").c_str());
#else
            GLTFWriter::Node *legendNode = GLTFWriter::Node::CreateLegend(gltf, legend, "Legend");
#endif
            node->AppendChild(legendNode);

            // MESH NODE
            GLTFWriter::Node *meshNode = GLTFWriter::Node::CreateMesh(gltf, "Mesh");
            if (!meshNode || !node->AppendChild(meshNode)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // MESH
            GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
            if (!mesh || !meshNode->AppendMesh(mesh)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh");
            }

            // TECHNIQUE
            GLTFWriter::Technique *technique = GLTFWriter::Technique::Create(gltf);
            if (!technique ||
                // TECHNIQUE STATES
                !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create technique");
            }

            // MATERIAL
            GLTFWriter::Material *material = GLTFWriter::Material::Create(gltf, technique);
            if (!material ||
                // MATERIAL UNIFORM VALUES
                !material->AppendValue(GLTFWriter::Value::Create(gltf, "texture0", bandedTexture->GetID()))) { // texture0 name is auto-generated from Attribute TEXCOORD0
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create material");
            }

            // repack unsigned int indices into multiple sets of unsigned short indices
            GLTFWriter::Utils::Repack *repack = GLTFWriter::Utils::Repack::Create(numTriangles, 3, &triangles[0]);
            if (!repack) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create repack");
            }
            for (unsigned int i = 0; i < repack->NumPacks(); ++i) {
                const float *packedData;
                unsigned int numAttributes = repack->NumAttributes(i);

                // POSITION ATTRIBUTE
                packedData = repack->ConstructRepackAttribute(&triangles[0], 3, &vertices[0], i);
                GLTFWriter::Attribute *vertex = GLTFWriter::Attribute::Create(gltf, "POSITION", GLTFWriter::Attribute::AT_FLOAT_VEC3, numAttributes, packedData, buffer);

                // TEXCOORD ATTRIBUTE
                packedData = repack->ConstructRepackAttribute(&triangles[0], 1, &textureCoords[0], i);
                GLTFWriter::Attribute *texture = GLTFWriter::Attribute::Create(gltf, "TEXCOORD0", GLTFWriter::Attribute::AT_FLOAT, numAttributes, packedData, buffer);

                // INDICES
                unsigned int numIndices = 3U * repack->NumElements(i);
                const unsigned short *packedIndex = repack->ConstructRepackIndex(&triangles[0], i);
                GLTFWriter::Index *index = GLTFWriter::Index::Create(gltf, numIndices, packedIndex, buffer);

                // PRIMITIVE
                GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(texture)) {
                    GLTFWriter::Utils::Repack::Destroy(repack);
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            GLTFWriter::Utils::Repack::Destroy(repack);
        }
    }

    // gradient log texture
    // we need to fudge the texture, because auto generated shaders do not support logging of data
    {
        float mn = 10;
        float mx = 100;
        float range = mx - mn;

        // TEXTURE
        std::vector<unsigned char> colors;
        colors.push_back(0); colors.push_back(0); colors.push_back(255); // blue
        colors.push_back(0); colors.push_back(255); colors.push_back(255); // cyan
        colors.push_back(0); colors.push_back(255); colors.push_back(0); // green
        colors.push_back(255); colors.push_back(255); colors.push_back(0); // yellow
        colors.push_back(255); colors.push_back(0); colors.push_back(0); // red

        // create a gradient texture that is really made up of bands
        const unsigned int numBands = 256;
        std::vector<float> bandLocations; // fractions from 0 to 1
        for (unsigned int i = 0; i < numBands; ++i)
            bandLocations.push_back((float)(pow(10.0, (double)i / numBands) * 10.0 - mn) / range);

        GLTFWriter::Texture *smoothTexture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGB, (unsigned int)colors.size() / 3, &colors[0], false, (unsigned int)bandLocations.size(), &bandLocations[0]);

        // generate vertices, and texture coordinates for a ball
        std::vector<float> vertices;
        std::vector<unsigned int> lines;
        std::vector<unsigned int> triangles;
        GLTFWriter::Test::MakeSphere(0, 0, 1, 0.5, 64, vertices, lines, triangles);
        const unsigned int numVertices = (unsigned int)vertices.size() / 3;
        const unsigned int numLines = (unsigned int)lines.size() / 2;
        const unsigned int numTriangles = (unsigned int)triangles.size() / 3;
        std::vector<float> textureCoords(numVertices);
        for (unsigned int i = 0; i < numVertices; ++i)
            textureCoords[i] = (vertices[3 * i + 1] + 0.5F) * range + mn; // coordinates go from mn to mx

        // NODE
        {
            // LEGEND
            GLTFWriter::Legend *legend = GLTFWriter::Legend::Create(gltf, GLTFWriter::Legend::LO_HORIZONTAL, 0.333F, smoothTexture, mn, mx, GLTFWriter::Legend::LA_XCENTER_YTOP,
#ifdef _WIN32
                                            ConvertToUtf8String(L"Y Ƥṏᴤΐṱϊӧת\nGradient").c_str(),
#else
                                            "Y Position\nGradient",
#endif
                                            "m", "This is an example\ngradient log legend\nX Center, Y Top", 0, 0,
                                            true, true, 0, 0, 0.0F, 0.0F, 0.0F, 1.0F, 1.0F, 1.0F, 0.25F);

            // BUFFER - combine attributes into a single buffer
            GLTFWriter::Buffer *buffer = GLTFWriter::Buffer::Create(gltf);

            // NODE
            GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "Gradient Log");
            if (!node || !scene->AppendMesh(node)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // LEGEND NODE
#ifdef _WIN32
            GLTFWriter::Node *legendNode = GLTFWriter::Node::CreateLegend(gltf, legend, ConvertToUtf8String(L"Ḷḙḡḗṋḍ").c_str());
#else
            GLTFWriter::Node *legendNode = GLTFWriter::Node::CreateLegend(gltf, legend, "Legend");
#endif
            node->AppendChild(legendNode);

            // MESH NODE
            GLTFWriter::Node *meshNode = GLTFWriter::Node::CreateMesh(gltf, "Mesh");
            if (!meshNode || !node->AppendChild(meshNode)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // MESH
            GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
            if (!mesh || !meshNode->AppendMesh(mesh)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh");
            }

            // TECHNIQUE
            GLTFWriter::Technique *technique = GLTFWriter::Technique::Create(gltf);
            if (!technique ||
                // TECHNIQUE STATES
                !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create technique");
            }

            // MATERIAL
            GLTFWriter::Material *material = GLTFWriter::Material::Create(gltf, technique);
            if (!material ||
                // MATERIAL UNIFORM VALUES
                !material->AppendValue(GLTFWriter::Value::Create(gltf, "texture0", smoothTexture->GetID()))) { // texture0 name is auto-generated from Attribute TEXCOORD0
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create material");
            }

            // repack unsigned int indices into multiple sets of unsigned short indices
            GLTFWriter::Utils::Repack *repack = GLTFWriter::Utils::Repack::Create(numTriangles, 3, &triangles[0]);
            if (!repack) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create repack");
            }
            for (unsigned int i = 0; i < repack->NumPacks(); ++i) {
                const float *packedData;
                unsigned int numAttributes = repack->NumAttributes(i);

                // POSITION ATTRIBUTE
                packedData = repack->ConstructRepackAttribute(&triangles[0], 3, &vertices[0], i);
                GLTFWriter::Attribute *vertex = GLTFWriter::Attribute::Create(gltf, "POSITION", GLTFWriter::Attribute::AT_FLOAT_VEC3, numAttributes, packedData, buffer);

                // TEXCOORD ATTRIBUTE
                packedData = repack->ConstructRepackAttribute(&triangles[0], 1, &textureCoords[0], i);
                GLTFWriter::Attribute *texture = GLTFWriter::Attribute::Create(gltf, "TEXCOORD0", GLTFWriter::Attribute::AT_FLOAT, numAttributes, packedData, buffer);
                texture->SetLogarithmic(true);

                // INDICES
                unsigned int numIndices = 3U * repack->NumElements(i);
                const unsigned short *packedIndex = repack->ConstructRepackIndex(&triangles[0], i);
                GLTFWriter::Index *index = GLTFWriter::Index::Create(gltf, numIndices, packedIndex, buffer);

                // PRIMITIVE
                GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(texture)) {
                    GLTFWriter::Utils::Repack::Destroy(repack);
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            GLTFWriter::Utils::Repack::Destroy(repack);
        }
    }

    if (!gltf->Write()) {
        GLTFWriter::GLTF::Destroy(gltf);
        throw std::runtime_error("Error creating file");
    }

    GLTFWriter::GLTF::GLTFError error = gltf->GetError();

    GLTFWriter::GLTF::Destroy(gltf);

    if (error != GLTFWriter::GLTF::GLTF_ERROR_NONE)
        throw std::runtime_error("Error creating file");
}
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)