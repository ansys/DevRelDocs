# Example Test014.cpp undefined

<a id="_test014_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestLegends.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Scaled and textured spheres





This example demonstrates the displacement and scaling pipeline.





A grid of spheres is created using proxy geometry consisting of a single quad. Quads are instanced via scaling and translation before being rendered using a billboard sphere shader. 
```
/*
 * Copyright 2018-2021 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
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

// Size/textured points
TESTFUNC(ScaledPoints)
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
    GLTFWriter::Texture *rainbowGradientTexture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGB, 
                                                                (unsigned int)colors.size() / 3, &colors[0], false);

    // Use a quad proxy geometry for the spheres
    const std::vector<float> proxy_verts = { -1.f,1.f,0.f,  1.f,1.f,0.f,  1.f,-1.f,0.f,  -1.f,-1.f,0.f };
    const std::vector<unsigned short> proxy_conn = { 0,3,2, 0,2,1 };

    // Build the various arrays
    const float tex_coord_min = 0.f;
    const float tex_coord_max = 10.f;
    std::vector<float> vertices;
    std::vector<unsigned short> triangles;
    std::vector<float> tex_coords;
    std::vector<float> point_disp_scale;

    // Test the scaled/textured/positioned spheres path
    // Uses the DisplacementScale attribute (dx,dy,dz,s) to scale 2D proxy
    // geometry, translate it by dx,dy,dz and render it with a sphere shader, 
    // colored and textured the same as other gltf geometry.  The proxy geometry
    // should be 2D and centered about 0,0,0 with unity size [-1,1].  It will be
    // drawn using a billboard technique so the geometry should be in the x,y plane.
    for(size_t j = 0; j < 10; j++) {
        float y = (j * 0.1f) - 0.5f;
        for(size_t i = 0; i < 10; i++) {
            float x = (i * 0.1f) - 0.5f;
            float z = 0.f;
            float scale = j * 0.005;
            // make a copy of the quad and place it into the vertex/triangle arrays
            auto vertex_index = vertices.size() / 3;
            for(const auto idx : proxy_conn) triangles.push_back(idx + vertex_index);
            vertices.insert(vertices.end(), proxy_verts.begin(), proxy_verts.end());
            // Point location and size (applied to each proxy quad)
            for(size_t vert = 0; vert < proxy_verts.size() / 3; vert++) {
                point_disp_scale.push_back(x);
                point_disp_scale.push_back(y);
                point_disp_scale.push_back(z);
                point_disp_scale.push_back(scale);
                // texture mapping
                tex_coords.push_back(i);
            }
        }
    }

    // SCENE
    GLTFWriter::Scene *scene = GLTFWriter::Scene::Create(gltf, "TestScene", "m", 1.0, 
                                                         GLTFWriter::Scene::BT_SOLID, 0.5, 0.5, 0.5);
    if (!scene) {
        GLTFWriter::GLTF::Destroy(gltf);
        throw std::runtime_error("Can't create scene");
    }

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

    // PROXY IMAGE
    {
        // Using a PNG file from disk here, but could use in-memory PNG representation as well.
        GLTFWriter::Image* proxy_image = GLTFWriter::Image::Create(gltf, "earth.png", false, true);
        if (proxy_image) {
            GLTFWriter::Node* proxy_image_node = GLTFWriter::Node::CreateProxyImage(gltf, proxy_image, "scene_proxy");
            if (proxy_image_node) {
                scene->SetProxyImage(proxy_image_node);
            }
        }
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

        size_t numVertices = vertices.size() / 3;

        // POSITION ATTRIBUTE
        GLTFWriter::Attribute *vertex = GLTFWriter::Attribute::CreatePosition(gltf, numVertices, vertices.data());

        // TEXCOORD ATTRIBUTE
        GLTFWriter::Attribute *texCoord = GLTFWriter::Attribute::CreateTextureCoord(gltf, 0, numVertices, tex_coords.data());
        if (!texCoord || !texCoord->SetMinMax(GLTFWriter::Attribute::AT_FLOAT, &tex_coord_min, &tex_coord_max)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create textureCoord");
        }

        // DISPLACEMENTSCALE ATTRIBUTE
        // Specifies the displacement and scaling for each vertex in the proxy geometry
        // It also triggers "billboard" orientation.
        GLTFWriter::Attribute *displacement_scale = GLTFWriter::Attribute::CreateDisplacementScale(gltf, numVertices, point_disp_scale.data());

        // INDEX ATTRIBUTE
        GLTFWriter::Index* index = GLTFWriter::Index::Create(gltf, triangles.size(), triangles.data());

        // PRIMITIVE
        GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material, index);
        if (!primitive ||
            !mesh->AppendPrimitive(primitive) ||
            !primitive->AppendAttribute(vertex) ||
            !primitive->AppendAttribute(texCoord) ||
            !primitive->AppendAttribute(displacement_scale)) {
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