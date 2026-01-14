# Example Test009.cpp undefined

<a id="_test009_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestLightedTexturedSphere.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Lighted points.





This example creates texture colored points with different sizes.





Special attributes are used describing the points that allow the auto-generated shader to render the points. The points are defined by a single vertex and single size parameter. The shader takes this information and creates varying sized points that are perfectly spherical. 
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
#include <cstdlib>

#include "GLTFWriter.h"
#include "test.h"

using namespace ANSYS::AVZ;

// Lighted points
TESTFUNC(LightedPoints)
{
    GLTFWriter::GLTF *gltf = GLTFWriter::GLTF::Create("MyApp", "1.0", functionName.c_str(), type);
    if (!gltf)
        throw std::runtime_error("Can't create GLTF");

    // TEXTURE
    std::vector<unsigned char> colors;
    colors.push_back(0); colors.push_back(0); colors.push_back(255); // blue
    colors.push_back(0); colors.push_back(255); colors.push_back(255); // cyan
    colors.push_back(0); colors.push_back(255); colors.push_back(0); // green
    colors.push_back(255); colors.push_back(255); colors.push_back(0); // yellow
    colors.push_back(255); colors.push_back(0); colors.push_back(0); // red
    GLTFWriter::Texture *rainbowGradientTexture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGB, (unsigned int)colors.size() / 3, &colors[0], false);

    // generate vertices, normals, and texture coordinates for a ball
    std::vector<float> vertices;
    std::vector<unsigned int> lines;
    std::vector<unsigned int> triangles;
    GLTFWriter::Test::MakeSphere(0, 0, 0, 0.5, 16, vertices, lines, triangles);
    const unsigned int numVertices = (unsigned int)vertices.size() / 3;
    std::vector<float> textureCoords(numVertices);
    // TEXCOORDS
    const double coordMin = -5;
    const double coordMax =  5;
    std::vector<float> texCoords;
    double coordInc = 1.0 / (numVertices - 1);
    double c = 0;
    for (unsigned int i = 0; i < numVertices; ++i) {
        texCoords.push_back((float)(coordMin + c * (coordMax - coordMin)));
        c += coordInc;
    }
    // POINTSIZE
    std::srand(0);
    const double sizeMin = 5;
    const double sizeMax = 20;
    std::vector<float> pointSizes;
    for (unsigned int i = 0; i < numVertices; ++i)
        pointSizes.push_back((float)((sizeMax - sizeMin) * (std::rand() % 10000) / 10000.0 + sizeMin));

    // SCENE
    GLTFWriter::Scene *scene = GLTFWriter::Scene::Create(gltf, "TestScene", "m", 1.0, GLTFWriter::Scene::BT_SOLID, 0.5, 0.5, 0.5);
    if (!scene) {
        GLTFWriter::GLTF::Destroy(gltf);
        throw std::runtime_error("Can't create scene");
    }
    auto line_width = GLTFWriter::Value::Create(gltf, "ANSYS_linewidth", 0.05);
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

    // CAMERA
    {
        // CAMERA
        GLTFWriter::Camera *camera = GLTFWriter::Camera::CreateOrthographic(gltf);
        // CAMERA NODE
        std::vector<double> mat(16);
        mat[0] = 1;
        mat[1] = 0;
        mat[2] = 0;
        mat[3] = 0;
        mat[4] = 0;
        mat[5] = 1;
        mat[6] = 0;
        mat[7] = 0;
        mat[8] = 0;
        mat[9] = 0;
        mat[10] = 1;
        mat[11] = 0;
        mat[12] = 0;
        mat[13] = 0;
        mat[14] = 0;
        mat[15] = 1;
        GLTFWriter::Node *cameraNode = GLTFWriter::Node::CreateCamera(gltf, camera, "TestCamera", &mat[0]);
        scene->SetCamera(cameraNode);
    }

    // NODE
    {
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "3D Points");
        if (!node || !scene->AppendMesh(node)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh node");
        }

        // MESH
        GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
        if (!mesh || !node->AppendMesh(mesh)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh");
        }

        // TECHNIQUE
        GLTFWriter::Technique *technique = GLTFWriter::Technique::Create(gltf);
        if (!technique ||
            // TECHNIQUE STATES
            !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_BLENDENABLE, 1)) ||
            !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create technique");
        }

        // MATERIAL
        GLTFWriter::Material *material = GLTFWriter::Material::Create(gltf, technique);
        if (!material ||
            // MATERIAL UNIFORM VALUES
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "texture0", rainbowGradientTexture->GetID()))) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create material");
        }

        // POSITION ATTRIBUTE
        GLTFWriter::Attribute *vertex = GLTFWriter::Attribute::CreatePosition(gltf, numVertices, &vertices[0]);

        // TEXCOORD ATTRIBUTE
        GLTFWriter::Attribute *texCoord = GLTFWriter::Attribute::CreateTextureCoord(gltf, 0, numVertices, &texCoords[0]);
        float mn;
        float mx;
        mn = (float)coordMin;
        mx = (float)coordMax;
        if (!texCoord || !texCoord->SetMinMax(GLTFWriter::Attribute::AT_FLOAT, &mn, &mx)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create textureCoord");
        }

        // POINTSIZE ATTRIBUTE
        GLTFWriter::Attribute *pointSize = GLTFWriter::Attribute::CreatePointSize(gltf, numVertices, &pointSizes[0]);

        // PRIMITIVE
        GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_POINTS, material);
        if (!primitive ||
            !mesh->AppendPrimitive(primitive) ||
            !primitive->AppendAttribute(vertex) ||
            !primitive->AppendAttribute(texCoord) ||
            !primitive->AppendAttribute(pointSize)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create primitive");
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