# Example Test010.cpp undefined

<a id="_test010_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestLightedPoints.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Different types of primitives.





This example demonstrates the different types of primitives that are available. At the moment WebGL is limited to primitives no larger than triangles (3 vertices per primitive).





Most applications generally stick to POINTS, LINES, or TRIANGLES. 
```
/*
 * Copyright 2018-2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
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

#include "GLTFWriter.h"
#include "test.h"

using namespace ANSYS::AVZ;

namespace {
    void PositionAppend(std::vector<float> &dest,
        const std::vector<float> &src,
        unsigned int srcOffset,
        unsigned int srcCount,
        float offsetX,
        float offsetY,
        float offsetZ)
    {
        unsigned int destOffset = (unsigned int)dest.size();
        dest.resize(destOffset + 3 * srcCount);
        for (unsigned int i = 0; i < srcCount; ++i) {
            dest[destOffset + 3 * i + 0] = src[3 * (srcOffset + i) + 0] + offsetX;
            dest[destOffset + 3 * i + 1] = src[3 * (srcOffset + i) + 1] + offsetY;
            dest[destOffset + 3 * i + 2] = src[3 * (srcOffset + i) + 2] + offsetZ;
        }
    }
};

// primitiveTypes
TESTFUNC(PrimitiveTypes)
{
    GLTFWriter::GLTF *gltf = GLTFWriter::GLTF::Create("MyApp", "1.0", functionName.c_str(), type);
    if (!gltf)
        throw std::runtime_error("Can't create GLTF");

    // SCENE
    GLTFWriter::Scene *scene = GLTFWriter::Scene::Create(gltf, "TestScene", "m", 1.0F, GLTFWriter::Scene::BT_TB, 0.42F, 0.55F, 0.871F, 1, 1, 1);
    if (!scene) {
        GLTFWriter::GLTF::Destroy(gltf);
        throw std::runtime_error("Can't create scene");
    }
    // Lines (and points) are to be drawn as 0.1 "units"
    auto line_width = GLTFWriter::Value::Create(gltf, "ANSYS_linewidth", 0.1);
    scene->AppendValue(line_width);

    // LIGHTS
    {
        // LIGHT NODE
        GLTFWriter::Node *lightNode = GLTFWriter::Node::CreateLight(gltf);
        if (!lightNode || !scene->SetLight(lightNode)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create light");
        }

        // LIGHTS
        GLTFWriter::Light *light1 = GLTFWriter::Light::CreateAmbient(gltf);
        lightNode->AppendLight(light1);

        GLTFWriter::Light *light2 = GLTFWriter::Light::CreateDirectional(gltf, 1, 1, 1, -1, -1, -3);
        lightNode->AppendLight(light2);
    }

    for (int ii = 0; ii < 3; ii++) {
        for (int jj = 0; jj < 3; jj++) {
            float x = ii * 10;
            float y = jj * 10;
            float z = 0;

            std::vector<float> locations;
            locations.push_back(x + 0.0F); locations.push_back(y + 0.0F); locations.push_back(z - 0.0F);
            locations.push_back(x + 1.0F); locations.push_back(y + 0.0F); locations.push_back(z - 0.0F);
            locations.push_back(x + 1.0F); locations.push_back(y + 1.0F); locations.push_back(z - 0.0F);
            locations.push_back(x + 0.0F); locations.push_back(y + 1.0F); locations.push_back(z - 0.0F);
            locations.push_back(x + 0.0F); locations.push_back(y + 0.0F); locations.push_back(z - 1.0F);
            locations.push_back(x + 1.0F); locations.push_back(y + 0.0F); locations.push_back(z - 1.0F);
            locations.push_back(x + 1.0F); locations.push_back(y + 1.0F); locations.push_back(z - 1.0F);
            locations.push_back(x + 0.0F); locations.push_back(y + 1.0F); locations.push_back(z - 1.0F);

            // POINTS
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Points");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }
                auto line_width = GLTFWriter::Value::Create(gltf, "ANSYS_linewidth", 0.5);
                mesh->AppendValue(line_width);

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 1.0, 0.0, 0.0, 1.0)) || // color name is used to auto-generate a solid colored object
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "pointSize", 50.0))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 8, x, y, z);

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_POINTS, material);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            y += 2;

            // INDEXED POINTS
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Indexed Points (Does not make sense)");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.5, 0.0, 0.0, 1.0)) || // color name is used to auto-generate a solid colored object
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "pointSize", 50.0))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 8, x, y, z);
                const unsigned int numVertices = (unsigned int)vertices.size() / 3;

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // INDICES
                std::vector<unsigned short> indices;
                for (unsigned int i = 0; i < numVertices; ++i)
                    indices.push_back(i);

                // INDEX
                GLTFWriter::Index* index = GLTFWriter::Index::Create(gltf, (unsigned int)indices.size(), &indices[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_POINTS, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            x += 2;
            y -= 2;

            // LINES
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Lines");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }
                auto line_width = GLTFWriter::Value::Create(gltf, "ANSYS_linewidth", 0.2);
                mesh->AppendValue(line_width);

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.0, 1.0, 0.0, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 2, x, y, z);
                PositionAppend(vertices, locations, 1, 2, x, y, z);
                PositionAppend(vertices, locations, 2, 2, x, y, z);
                PositionAppend(vertices, locations, 3, 1, x, y, z); PositionAppend(vertices, locations, 0, 1, x, y, z);
                PositionAppend(vertices, locations, 4, 2, x, y, z);
                PositionAppend(vertices, locations, 5, 2, x, y, z);
                PositionAppend(vertices, locations, 6, 2, x, y, z);
                PositionAppend(vertices, locations, 7, 1, x, y, z); PositionAppend(vertices, locations, 4, 1, x, y, z);
                PositionAppend(vertices, locations, 0, 1, x, y, z); PositionAppend(vertices, locations, 4, 1, x, y, z);
                PositionAppend(vertices, locations, 1, 1, x, y, z); PositionAppend(vertices, locations, 5, 1, x, y, z);
                PositionAppend(vertices, locations, 2, 1, x, y, z); PositionAppend(vertices, locations, 6, 1, x, y, z);
                PositionAppend(vertices, locations, 3, 1, x, y, z); PositionAppend(vertices, locations, 7, 1, x, y, z);

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_LINES, material);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            y += 2;

            // INDEXED LINES
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Indexed Lines");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.0, 0.5, 0.0, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 8, x, y, z);

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // INDICES
                std::vector<unsigned short> indices;
                indices.push_back(0); indices.push_back(1);
                indices.push_back(1); indices.push_back(2);
                indices.push_back(2); indices.push_back(3);
                indices.push_back(3); indices.push_back(0);
                indices.push_back(4); indices.push_back(5);
                indices.push_back(5); indices.push_back(6);
                indices.push_back(6); indices.push_back(7);
                indices.push_back(7); indices.push_back(4);
                indices.push_back(0); indices.push_back(4);
                indices.push_back(1); indices.push_back(5);
                indices.push_back(2); indices.push_back(6);
                indices.push_back(3); indices.push_back(7);

                // INDEX
                GLTFWriter::Index* index = GLTFWriter::Index::Create(gltf, (unsigned int)indices.size(), &indices[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_LINES, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            x += 2;
            y -= 2;

            // LINE LOOP
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Line Loop");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.0, 0.0, 1.0, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 3, x, y, z);
                PositionAppend(vertices, locations, 6, 1, x, y, z);
                PositionAppend(vertices, locations, 5, 1, x, y, z);
                PositionAppend(vertices, locations, 4, 1, x, y, z);
                PositionAppend(vertices, locations, 7, 1, x, y, z);
                PositionAppend(vertices, locations, 3, 1, x, y, z);

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_LINE_LOOP, material);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            y += 2;

            // INDEXED LINE LOOP
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Indexed Line Loop");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.0, 0.0, 0.5, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 8, x, y, z);

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // INDICES
                std::vector<unsigned short> indices;
                indices.push_back(0); indices.push_back(1); indices.push_back(2);
                indices.push_back(6);
                indices.push_back(5);
                indices.push_back(4);
                indices.push_back(7);
                indices.push_back(3);

                // INDEX
                GLTFWriter::Index* index = GLTFWriter::Index::Create(gltf, (unsigned int)indices.size(), &indices[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_LINE_LOOP, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            x += 2;
            y -= 2;

            // LINE STRIP
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Line Strip");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.75, 0.75, 0.0, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 4, x, y, z);
                PositionAppend(vertices, locations, 0, 1, x, y, z);
                PositionAppend(vertices, locations, 4, 4, x, y, z);
                PositionAppend(vertices, locations, 4, 1, x, y, z);

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_LINE_LOOP, material);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            y += 2;

            // INDEXED LINE STRIP
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Indexed Line Strip");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.25, 0.25, 0.0, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 8, x, y, z);

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // INDICES
                std::vector<unsigned short> indices;
                indices.push_back(0); indices.push_back(1); indices.push_back(2); indices.push_back(3);
                indices.push_back(0);
                indices.push_back(4); indices.push_back(5); indices.push_back(6); indices.push_back(7);
                indices.push_back(4);

                // INDEX
                GLTFWriter::Index* index = GLTFWriter::Index::Create(gltf, (unsigned int)indices.size(), &indices[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_LINE_LOOP, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            x += 2;
            y -= 2;

            // TRIANGLES
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Triangles");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.0, 1.0, 1.0, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 3, x, y, z);
                PositionAppend(vertices, locations, 0, 1, x, y, z); PositionAppend(vertices, locations, 2, 2, x, y, z);
                PositionAppend(vertices, locations, 1, 1, x, y, z); PositionAppend(vertices, locations, 5, 2, x, y, z);
                PositionAppend(vertices, locations, 1, 1, x, y, z); PositionAppend(vertices, locations, 6, 1, x, y, z); PositionAppend(vertices, locations, 2, 1, x, y, z);
                PositionAppend(vertices, locations, 5, 1, x, y, z); PositionAppend(vertices, locations, 4, 1, x, y, z); PositionAppend(vertices, locations, 7, 1, x, y, z);
                PositionAppend(vertices, locations, 5, 1, x, y, z); PositionAppend(vertices, locations, 7, 1, x, y, z); PositionAppend(vertices, locations, 6, 1, x, y, z);
                PositionAppend(vertices, locations, 4, 1, x, y, z); PositionAppend(vertices, locations, 0, 1, x, y, z); PositionAppend(vertices, locations, 3, 1, x, y, z);
                PositionAppend(vertices, locations, 4, 1, x, y, z); PositionAppend(vertices, locations, 3, 1, x, y, z); PositionAppend(vertices, locations, 7, 1, x, y, z);
                PositionAppend(vertices, locations, 4, 2, x, y, z); PositionAppend(vertices, locations, 1, 1, x, y, z);
                PositionAppend(vertices, locations, 4, 1, x, y, z); PositionAppend(vertices, locations, 1, 1, x, y, z); PositionAppend(vertices, locations, 0, 1, x, y, z);
                PositionAppend(vertices, locations, 3, 1, x, y, z); PositionAppend(vertices, locations, 2, 1, x, y, z); PositionAppend(vertices, locations, 6, 1, x, y, z);
                PositionAppend(vertices, locations, 3, 1, x, y, z); PositionAppend(vertices, locations, 6, 2, x, y, z);
                const unsigned int numVertices = (unsigned int)vertices.size() / 3;

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // NORMALS
                std::vector<float> vertexNormals(3 * numVertices);
                {
                    std::vector<unsigned short> indices;
                    for (unsigned int i = 0; i < numVertices; ++i)
                        indices.push_back(i);
                    const unsigned int numTriangles = (unsigned int)indices.size() / 3;
                    GLTFWriter::Utils::ComputeVertexNormals3(numVertices, &vertices[0], numTriangles, 3, &indices[0], &vertexNormals[0]);
                }

                // NORMAL ATTRIBUTE
                GLTFWriter::Attribute* normal = GLTFWriter::Attribute::CreateNormal(gltf, numVertices, &vertexNormals[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(normal)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            y += 2;

            // INDEXED TRIANGLES
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Indexed Triangles");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.0, 0.5, 0.5, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 8, x, y, z);
                const unsigned int numVertices = (unsigned int)vertices.size() / 3;

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, numVertices, &vertices[0]);

                // INDICES
                std::vector<unsigned short> indices;
                indices.push_back(0); indices.push_back(1); indices.push_back(2);
                indices.push_back(0); indices.push_back(2); indices.push_back(3);
                indices.push_back(1); indices.push_back(5); indices.push_back(6);
                indices.push_back(1); indices.push_back(6); indices.push_back(2);
                indices.push_back(5); indices.push_back(4); indices.push_back(7);
                indices.push_back(5); indices.push_back(7); indices.push_back(6);
                indices.push_back(4); indices.push_back(0); indices.push_back(3);
                indices.push_back(4); indices.push_back(3); indices.push_back(7);
                indices.push_back(0); indices.push_back(4); indices.push_back(5);
                indices.push_back(0); indices.push_back(5); indices.push_back(1);
                indices.push_back(2); indices.push_back(6); indices.push_back(7);
                indices.push_back(2); indices.push_back(7); indices.push_back(3);
                const unsigned int numTriangles = (unsigned int)indices.size() / 3;

                // INDEX
                GLTFWriter::Index* index = GLTFWriter::Index::Create(gltf, (unsigned int)indices.size(), &indices[0]);

                // NORMALS
                std::vector<float> vertexNormals(3 * numVertices);
                GLTFWriter::Utils::ComputeVertexNormals3(numVertices, &vertices[0], numTriangles, 3, &indices[0], &vertexNormals[0]);

                // NORMAL ATTRIBUTE
                GLTFWriter::Attribute* normal = GLTFWriter::Attribute::CreateNormal(gltf, numVertices, &vertexNormals[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(normal)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            x += 2;
            y -= 2;

            // TRIANGLE STRIP
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Triangle Strip");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 1.0, 0.0, 1.0, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 2, x, y, z); PositionAppend(vertices, locations, 3, 1, x, y, z);
                PositionAppend(vertices, locations, 2, 1, x, y, z);
                PositionAppend(vertices, locations, 7, 1, x, y, z);
                PositionAppend(vertices, locations, 6, 1, x, y, z);
                PositionAppend(vertices, locations, 4, 1, x, y, z);
                PositionAppend(vertices, locations, 5, 1, x, y, z);
                PositionAppend(vertices, locations, 0, 1, x, y, z);
                PositionAppend(vertices, locations, 1, 1, x, y, z);
                const unsigned int numVertices = (unsigned int)vertices.size() / 3;

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // NORMALS
                std::vector<float> vertexNormals(3 * numVertices);
                {
                    std::vector<unsigned short> indices;
                    indices.push_back(0); indices.push_back(1); indices.push_back(2);
                    indices.push_back(2); indices.push_back(1); indices.push_back(3);
                    indices.push_back(2); indices.push_back(3); indices.push_back(4);
                    indices.push_back(4); indices.push_back(3); indices.push_back(5);
                    indices.push_back(4); indices.push_back(5); indices.push_back(6);
                    indices.push_back(6); indices.push_back(5); indices.push_back(7);
                    indices.push_back(6); indices.push_back(7); indices.push_back(8);
                    indices.push_back(8); indices.push_back(7); indices.push_back(9);
                    const unsigned int numTriangles = (unsigned int)indices.size() / 3;
                    GLTFWriter::Utils::ComputeVertexNormals3(numVertices, &vertices[0], numTriangles, 3, &indices[0], &vertexNormals[0]);
                }

                // NORMAL ATTRIBUTE
                GLTFWriter::Attribute* normal = GLTFWriter::Attribute::CreateNormal(gltf, numVertices, &vertexNormals[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLE_STRIP, material);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(normal)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            y += 2;

            // INDEXED TRIANGLE STRIP
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Indexed Triangle Strip");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.5, 0.0, 0.5, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 8, x, y, z);
                const unsigned int numVertices = (unsigned int)vertices.size() / 3;

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, numVertices, &vertices[0]);

                // INDICES
                std::vector<unsigned short> indices;
                indices.push_back(0); indices.push_back(1); indices.push_back(3);
                indices.push_back(2);
                indices.push_back(7);
                indices.push_back(6);
                indices.push_back(4);
                indices.push_back(5);
                indices.push_back(0);
                indices.push_back(1);

                // INDEX
                GLTFWriter::Index* index = GLTFWriter::Index::Create(gltf, (unsigned int)indices.size(), &indices[0]);

                // NORMALS
                std::vector<float> vertexNormals(3 * numVertices);
                {
                    std::vector<unsigned short> indices;
                    indices.push_back(0); indices.push_back(1); indices.push_back(3);
                    indices.push_back(3); indices.push_back(1); indices.push_back(2);
                    indices.push_back(3); indices.push_back(2); indices.push_back(7);
                    indices.push_back(7); indices.push_back(2); indices.push_back(6);
                    indices.push_back(7); indices.push_back(6); indices.push_back(4);
                    indices.push_back(4); indices.push_back(6); indices.push_back(5);
                    indices.push_back(4); indices.push_back(5); indices.push_back(0);
                    indices.push_back(0); indices.push_back(5); indices.push_back(1);
                    const unsigned int numTriangles = (unsigned int)indices.size() / 3;
                    GLTFWriter::Utils::ComputeVertexNormals3(numVertices, &vertices[0], numTriangles, 3, &indices[0], &vertexNormals[0]);
                }

                // NORMAL ATTRIBUTE
                GLTFWriter::Attribute* normal = GLTFWriter::Attribute::CreateNormal(gltf, numVertices, &vertexNormals[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLE_STRIP, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(normal)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            x += 2;
            y -= 2;

            // TRIANGLE FAN
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Triangle Fan");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.75, 0.0, 0.75, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 4, x, y, z);
                PositionAppend(vertices, locations, 7, 1, x, y, z);
                PositionAppend(vertices, locations, 4, 2, x, y, z);
                PositionAppend(vertices, locations, 1, 1, x, y, z);
                const unsigned int numVertices = (unsigned int)vertices.size() / 3;

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

                // NORMALS
                std::vector<float> vertexNormals(3 * numVertices);
                {
                    std::vector<unsigned short> indices;
                    indices.push_back(0); indices.push_back(1); indices.push_back(2);
                    indices.push_back(0); indices.push_back(2); indices.push_back(3);
                    indices.push_back(0); indices.push_back(3); indices.push_back(4);
                    indices.push_back(0); indices.push_back(4); indices.push_back(5);
                    indices.push_back(0); indices.push_back(5); indices.push_back(6);
                    indices.push_back(0); indices.push_back(6); indices.push_back(7);
                    const unsigned int numTriangles = (unsigned int)indices.size() / 3;
                    GLTFWriter::Utils::ComputeVertexNormals3(numVertices, &vertices[0], numTriangles, 3, &indices[0], &vertexNormals[0]);
                }

                // NORMAL ATTRIBUTE
                GLTFWriter::Attribute* normal = GLTFWriter::Attribute::CreateNormal(gltf, numVertices, &vertexNormals[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLE_FAN, material);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(normal)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }

            y += 2;
            // INDEXED TRIANGLE FAN
            {
                // NODE
                GLTFWriter::Node* node = GLTFWriter::Node::CreateMesh(gltf, "Indexed Triangle Fan");
                if (!node || !scene->AppendMesh(node)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh node");
                }

                // MESH
                GLTFWriter::Mesh* mesh = GLTFWriter::Mesh::Create(gltf);
                if (!mesh || !node->AppendMesh(mesh)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create mesh");
                }

                // TECHNIQUE
                GLTFWriter::Technique* technique = GLTFWriter::Technique::Create(gltf);
                if (!technique ||
                    !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create technique");
                }

                // MATERIAL
                GLTFWriter::Material* material = GLTFWriter::Material::Create(gltf, technique);
                if (!material ||
                    // MATERIAL UNIFORM VALUES
                    !material->AppendValue(GLTFWriter::Value::Create(gltf, "color", 0.25, 0.0, 0.25, 1.0))) { // color name is used to auto-generate a solid colored object
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create material");
                }

                // VERTICES
                std::vector<float> vertices;
                PositionAppend(vertices, locations, 0, 8, x, y, z);
                const unsigned int numVertices = (unsigned int)vertices.size() / 3;

                // POSITION ATTRIBUTE
                GLTFWriter::Attribute* vertex = GLTFWriter::Attribute::CreatePosition(gltf, numVertices, &vertices[0]);

                // INDICES
                std::vector<unsigned short> indices;
                indices.push_back(0); indices.push_back(1); indices.push_back(2);
                indices.push_back(3);
                indices.push_back(7);
                indices.push_back(4);
                indices.push_back(5);
                indices.push_back(1);

                // INDEX
                GLTFWriter::Index* index = GLTFWriter::Index::Create(gltf, (unsigned int)indices.size(), &indices[0]);

                // NORMALS
                std::vector<float> vertexNormals(3 * numVertices);
                {
                    std::vector<unsigned short> indices;
                    indices.push_back(0); indices.push_back(1); indices.push_back(2);
                    indices.push_back(0); indices.push_back(2); indices.push_back(3);
                    indices.push_back(0); indices.push_back(3); indices.push_back(7);
                    indices.push_back(0); indices.push_back(7); indices.push_back(4);
                    indices.push_back(0); indices.push_back(4); indices.push_back(5);
                    indices.push_back(0); indices.push_back(5); indices.push_back(1);
                    const unsigned int numTriangles = (unsigned int)indices.size() / 3;
                    GLTFWriter::Utils::ComputeVertexNormals3(numVertices, &vertices[0], numTriangles, 3, &indices[0], &vertexNormals[0]);
                }

                // NORMAL ATTRIBUTE
                GLTFWriter::Attribute* normal = GLTFWriter::Attribute::CreateNormal(gltf, numVertices, &vertexNormals[0]);

                // PRIMITIVE
                GLTFWriter::Primitive* primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLE_FAN, material, index);
                if (!primitive ||
                    !mesh->AppendPrimitive(primitive) ||
                    !primitive->AppendAttribute(vertex) ||
                    !primitive->AppendAttribute(normal)) {
                    GLTFWriter::GLTF::Destroy(gltf);
                    throw std::runtime_error("Can't create primitive");
                }
            }
        }//jj
    }//ii

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