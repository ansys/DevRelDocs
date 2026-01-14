# Example Test005.cpp undefined

<a id="_test005_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestSolidColor.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Textured 2D Quad.





This example shows how to create a simple 2D textured quad. 
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

#include "GLTFWriter.h"
#include "test.h"

using namespace ANSYS::AVZ;

// Simple creation of Textured Quad
TESTFUNC(Textured2DQuad)
{
    if (type != GLTFWriter::GLTF::OT_AVZ && type != GLTFWriter::GLTF::OT_GLTF)
        return;

    GLTFWriter::GLTF *gltf = GLTFWriter::GLTF::Create("MyApp", "1.0", functionName.c_str(), type);
    if (!gltf)
        throw std::runtime_error("Can't create GLTF");

    // SCENE
    GLTFWriter::Scene *scene = GLTFWriter::Scene::Create(gltf, "TestScene", "m", 1.0, GLTFWriter::Scene::BT_SOLID, 0.5, 0.5, 0.5);
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

        GLTFWriter::Light *light2 = GLTFWriter::Light::CreateDirectional(gltf);
        lightNode->AppendLight(light2);
    }

    // 3D MESH NODE
    {
        // NODE
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "3D Box");
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
            !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1)) ||
            !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_BLENDENABLE, 1))) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create technique");
        }

        // MATERIAL
        GLTFWriter::Material *material = GLTFWriter::Material::Create(gltf, technique);

        // VERTICES
        std::vector<float> vertices;
        const float width = 1;
        const float height = 1;
        const float depth = 1;
        const float shiftX = 0;
        const float shiftY = 0;
        const float shiftZ = 0;
        vertices.push_back(-width / 2 + shiftX); vertices.push_back(-height / 2 + shiftY); vertices.push_back(-depth / 2 + shiftZ);
        vertices.push_back( width / 2 + shiftX); vertices.push_back(-height / 2 + shiftY); vertices.push_back(-depth / 2 + shiftZ);
        vertices.push_back( width / 2 + shiftX); vertices.push_back( height / 2 + shiftY); vertices.push_back(-depth / 2 + shiftZ);
        vertices.push_back(-width / 2 + shiftX); vertices.push_back( height / 2 + shiftY); vertices.push_back(-depth / 2 + shiftZ);
        vertices.push_back(-width / 2 + shiftX); vertices.push_back(-height / 2 + shiftY); vertices.push_back( depth / 2 + shiftZ);
        vertices.push_back( width / 2 + shiftX); vertices.push_back(-height / 2 + shiftY); vertices.push_back( depth / 2 + shiftZ);
        vertices.push_back( width / 2 + shiftX); vertices.push_back( height / 2 + shiftY); vertices.push_back( depth / 2 + shiftZ);
        vertices.push_back(-width / 2 + shiftX); vertices.push_back( height / 2 + shiftY); vertices.push_back( depth / 2 + shiftZ);
        // POSITION ATTRIBUTE
        GLTFWriter::Attribute *vertex = GLTFWriter::Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0]);

        // COLORS
        std::vector<float> colors;
        colors.push_back(0); colors.push_back(0); colors.push_back(0); colors.push_back(1);
        colors.push_back(0); colors.push_back(0); colors.push_back(1); colors.push_back(0.75);
        colors.push_back(0); colors.push_back(1); colors.push_back(0); colors.push_back(0.5);
        colors.push_back(0); colors.push_back(1); colors.push_back(1); colors.push_back(0.25);
        colors.push_back(1); colors.push_back(0); colors.push_back(1); colors.push_back(0.5);
        colors.push_back(1); colors.push_back(0); colors.push_back(0); colors.push_back(0.25);
        colors.push_back(1); colors.push_back(1); colors.push_back(1); colors.push_back(1);
        colors.push_back(1); colors.push_back(1); colors.push_back(0); colors.push_back(0.75);
        // COLOR ATTRIBUTE
        GLTFWriter::Attribute *color = GLTFWriter::Attribute::CreateColor(gltf, GLTFWriter::Attribute::AT_FLOAT_VEC4, (unsigned int)colors.size() / 4, &colors[0]);

        // INDICES
        std::vector<unsigned short> indices;
        indices.push_back(0); indices.push_back(2); indices.push_back(1);
            indices.push_back(0); indices.push_back(3); indices.push_back(2);
        indices.push_back(0); indices.push_back(4); indices.push_back(7);
            indices.push_back(0); indices.push_back(7); indices.push_back(3);
        indices.push_back(4); indices.push_back(5); indices.push_back(6);
            indices.push_back(4); indices.push_back(6); indices.push_back(7);
        indices.push_back(5); indices.push_back(1); indices.push_back(2);
            indices.push_back(5); indices.push_back(2); indices.push_back(6);
        indices.push_back(0); indices.push_back(1); indices.push_back(5);
            indices.push_back(0); indices.push_back(5); indices.push_back(4);
        indices.push_back(2); indices.push_back(3); indices.push_back(7);
            indices.push_back(2); indices.push_back(7); indices.push_back(6);
        // INDICES
            GLTFWriter::Index *index = GLTFWriter::Index::Create(gltf, (unsigned int)indices.size(), &indices[0]);

        // NORMALS
        std::vector<float> normals(vertices.size());
        GLTFWriter::Utils::ComputeVertexNormals3((unsigned int)vertices.size() / 3, &vertices[0], (unsigned int)indices.size() / 3, 3, &indices[0], &normals[0]);
        // NORMAL ATTRIBUTE
        GLTFWriter::Attribute *normal = GLTFWriter::Attribute::CreateNormal(gltf, (unsigned int)vertices.size() / 3, &normals[0]);

        // PRIMITIVE
        GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material, index);
        if (!primitive ||
            !mesh->AppendPrimitive(primitive) ||
            !primitive->AppendAttribute(vertex) ||
            !primitive->AppendAttribute(normal) ||
            !primitive->AppendAttribute(color)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create primitive");
        }
    }

    // 2D MESH NODE
    {
        // NODE
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "2D Textured Quad");
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

        // TEXTURE
        {
            std::vector<unsigned char> imageData;
            const unsigned width = 150;
            const unsigned height = 250;
            imageData.resize(width * height * 4, 0);

#               define SETRGB(data, width, x, y, r, g, b, a) { \
                data[4 * ((x) + (y) * (width)) + 0] = r; \
                data[4 * ((x) + (y) * (width)) + 1] = g; \
                data[4 * ((x) + (y) * (width)) + 2] = b; \
                data[4 * ((x) + (y) * (width)) + 3] = a; \
            }

            // fill in top left corner
            for (unsigned int i = 0; i < 10; ++i)
                for (unsigned int j = 0; j < 10; ++j)
                    SETRGB(imageData, width, i + 2, j + 2, 255, 255, 255, 255);

            // PRIMITIVE
            for (unsigned int i = 0; i < width; ++i) {
                SETRGB(imageData, width, i, 0, 255, 0, 0, 255);
                SETRGB(imageData, width, i, 1, 255, 0, 0, 255);
                SETRGB(imageData, width, i, height - 1, 255, 0, 0, 255);
                SETRGB(imageData, width, i, height - 2, 255, 0, 0, 255);
            }
            for (unsigned int i = 0; i < height; ++i) {
                SETRGB(imageData, width, 0, i, 255, 0, 0, 255);
                SETRGB(imageData, width, 1, i, 255, 0, 0, 255);
                SETRGB(imageData, width, width - 1, i, 255, 0, 0, 255);
                SETRGB(imageData, width, width - 2, i, 255, 0, 0, 255);
            }
            GLTFWriter::Texture *texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, GLTFWriter::Primitive::PXA_LEFT, GLTFWriter::Primitive::PYA_TOP);
            mesh->AppendPrimitive(primitive);

            for (unsigned int i = 0; i < width; ++i) {
                SETRGB(imageData, width, i, 0, 0, 255, 0, 255);
                SETRGB(imageData, width, i, 1, 0, 255, 0, 255);
                SETRGB(imageData, width, i, height - 1, 0, 255, 0, 255);
                SETRGB(imageData, width, i, height - 2, 0, 255, 0, 255);
            }
            texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, GLTFWriter::Primitive::PXA_LEFT, GLTFWriter::Primitive::PYA_CENTER);
            mesh->AppendPrimitive(primitive);

            for (unsigned int i = 0; i < width; ++i) {
                SETRGB(imageData, width, i, 0, 0, 0, 255, 255);
                SETRGB(imageData, width, i, 1, 0, 0, 255, 255);
                SETRGB(imageData, width, i, height - 1, 0, 0, 255, 255);
                SETRGB(imageData, width, i, height - 2, 0, 0, 255, 255);
            }
            texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, GLTFWriter::Primitive::PXA_LEFT, GLTFWriter::Primitive::PYA_BOTTOM);
            mesh->AppendPrimitive(primitive);


            for (unsigned int i = 0; i < height; ++i) {
                SETRGB(imageData, width, 0, i, 0, 255, 0, 255);
                SETRGB(imageData, width, 1, i, 0, 255, 0, 255);
                SETRGB(imageData, width, width - 1, i, 0, 255, 0, 255);
                SETRGB(imageData, width, width - 2, i, 0, 255, 0, 255);
            }
            texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, GLTFWriter::Primitive::PXA_CENTER, GLTFWriter::Primitive::PYA_BOTTOM);
            mesh->AppendPrimitive(primitive);

            for (unsigned int i = 0; i < width; ++i) {
                SETRGB(imageData, width, i, 0, 0, 255, 0, 255);
                SETRGB(imageData, width, i, 1, 0, 255, 0, 255);
                SETRGB(imageData, width, i, height - 1, 0, 255, 0, 255);
                SETRGB(imageData, width, i, height - 2, 0, 255, 0, 255);
            }
            texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, GLTFWriter::Primitive::PXA_CENTER, GLTFWriter::Primitive::PYA_CENTER);
            mesh->AppendPrimitive(primitive);

            for (unsigned int i = 0; i < width; ++i) {
                SETRGB(imageData, width, i, 0, 255, 0, 0, 255);
                SETRGB(imageData, width, i, 1, 255, 0, 0, 255);
                SETRGB(imageData, width, i, height - 1, 255, 0, 0, 255);
                SETRGB(imageData, width, i, height - 2, 255, 0, 0, 255);
            }
            texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, GLTFWriter::Primitive::PXA_CENTER, GLTFWriter::Primitive::PYA_TOP);
            mesh->AppendPrimitive(primitive);


            for (unsigned int i = 0; i < height; ++i) {
                SETRGB(imageData, width, 0, i, 0, 0, 255, 255);
                SETRGB(imageData, width, 1, i, 0, 0, 255, 255);
                SETRGB(imageData, width, width - 1, i, 0, 0, 255, 255);
                SETRGB(imageData, width, width - 2, i, 0, 0, 255, 255);
            }
            texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, GLTFWriter::Primitive::PXA_RIGHT, GLTFWriter::Primitive::PYA_TOP);
            mesh->AppendPrimitive(primitive);

            for (unsigned int i = 0; i < width; ++i) {
                SETRGB(imageData, width, i, 0, 0, 255, 0, 255);
                SETRGB(imageData, width, i, 1, 0, 255, 0, 255);
                SETRGB(imageData, width, i, height - 1, 0, 255, 0, 255);
                SETRGB(imageData, width, i, height - 2, 0, 255, 0, 255);
            }
            texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, GLTFWriter::Primitive::PXA_RIGHT, GLTFWriter::Primitive::PYA_CENTER);
            mesh->AppendPrimitive(primitive);

            for (unsigned int i = 0; i < width; ++i) {
                SETRGB(imageData, width, i, 0, 0, 0, 255, 255);
                SETRGB(imageData, width, i, 1, 0, 0, 255, 255);
                SETRGB(imageData, width, i, height - 1, 0, 0, 255, 255);
                SETRGB(imageData, width, i, height - 2, 0, 0, 255, 255);
            }
            texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, GLTFWriter::Primitive::PXA_RIGHT, GLTFWriter::Primitive::PYA_BOTTOM);
            mesh->AppendPrimitive(primitive);


            for (unsigned int i = 0; i < width; ++i) {
                SETRGB(imageData, width, i, 0, 255, 255, 255, 255);
                SETRGB(imageData, width, i, 1, 255, 255, 255, 255);
                SETRGB(imageData, width, i, height - 1, 255, 255, 255, 255);
                SETRGB(imageData, width, i, height - 2, 255, 255, 255, 255);
            }
            for (unsigned int i = 0; i < height; ++i) {
                SETRGB(imageData, width, 0, i, 255, 255, 255, 255);
                SETRGB(imageData, width, 1, i, 255, 255, 255, 255);
                SETRGB(imageData, width, width - 1, i, 255, 255, 255, 255);
                SETRGB(imageData, width, width - 2, i, 255, 255, 255, 255);
            }
            texture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGBA, width, height, &imageData[0]);
            primitive = GLTFWriter::Primitive::Create2DTexture(gltf, texture, 0.15F, 0.25F, 0.2F, 0.4F);
            mesh->AppendPrimitive(primitive);
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