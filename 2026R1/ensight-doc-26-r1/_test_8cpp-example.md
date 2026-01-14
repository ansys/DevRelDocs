# Example Test.cpp undefined

<a id="_test_8cpp-example"></a>

Helper functions for example tests. 
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
#include <iostream>
#include <vector>
#include <fstream>
#include <cmath>

#include "GLTFWriter.h"
#include "test.h"

using namespace ANSYS::AVZ;

GLTFWriter::Texture *
GLTFWriter::Test::CreateTexture(GLTF *gltf,
                    const char *fileName)
{
    Image *image = Image::Create(gltf, fileName, true);
    if (!image)
        return 0;
    Sampler *sampler = Sampler::Create(gltf, Sampler::FT_LINEAR, Sampler::FT_LINEAR, Sampler::WT_CLAMP_TO_EDGE, Sampler::WT_CLAMP_TO_EDGE);
    if (!sampler)
        return 0;
    return Texture::Create(gltf, Texture::TF_RGBA, Texture::TT_TEXTURE_2D, sampler, image);
}

GLTFWriter::Material *
GLTFWriter::Test::CreateSolidColoredMaterial(GLTF *gltf,
                                 float r,
                                 float g,
                                 float b,
                                 float a)
{
    // TECHNIQUE
    Technique *technique = Technique::Create(gltf);
    if (!technique)
        return 0;

    // TECHNIQUE STATES
    if (!technique->AppendState(State::Create(gltf, State::ST_DEPTHTESTENABLE, 1)))
        return 0;
    if (a != 1.0) {
        if (!technique->AppendState(State::Create(gltf, State::ST_BLENDENABLE, 1)) || !technique->AppendState(State::Create(gltf, State::ST_DEPTHMASK, 0)))
            return 0;
    }

    // MATERIAL
    Material *material = Material::Create(gltf, technique);
    if (!material)
        return 0;

    // MATERIAL UNIFORM VALUES
    if (!material->AppendValue(Value::Create(gltf, "color", r, g, b, a))) // color name is used to auto-generate a solid colored object
        return 0;

    return material;
}
GLTFWriter::Material *
GLTFWriter::Test::CreateTexturedMaterial(GLTF *gltf,
    Texture *texture)
{
    // TECHNIQUE
    Technique *technique = Technique::Create(gltf);
    if (!technique)
        return 0;

    // TECHNIQUE STATES
    if (!technique->AppendState(State::Create(gltf, State::ST_DEPTHTESTENABLE, 1)) && !technique->AppendState(State::Create(gltf, State::ST_BLENDENABLE, 1)))
        return 0;

    // MATERIAL
    Material *material = Material::Create(gltf, technique);
    if (!material)
        return 0;

    // MATERIAL UNIFORM VALUES
    if (!material->AppendValue(Value::Create(gltf, "texture0", texture->GetID()))) // texture0 name is auto-generated from Attribute TEXCOORD0
        return 0;

    return material;
}

// will creaete flat shaded box
// all lines are formed from top and bottom vertices
void
GLTFWriter::Test::MakeBox(float x,
    float y,
    float z,
    float w,
    float h,
    float d,
    std::vector<float> &vertices,
    std::vector<unsigned short> &lineIndices,
    std::vector<unsigned short> & triangleIndices)
{
    // VERTICES
    vertices.clear();
    // bottom
    vertices.push_back(-w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back(-d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back(-d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back( d / 2 + z);
    vertices.push_back(-w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back( d / 2 + z);
    // top
    vertices.push_back(-w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back(-d / 2 + z);
    vertices.push_back(-w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back( d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back( d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back(-d / 2 + z);
    // front
    vertices.push_back(-w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back( d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back( d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back( d / 2 + z);
    vertices.push_back(-w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back( d / 2 + z);
    // back
    vertices.push_back( w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back(-d / 2 + z);
    vertices.push_back(-w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back(-d / 2 + z);
    vertices.push_back(-w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back(-d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back(-d / 2 + z);
    // left
    vertices.push_back(-w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back(-d / 2 + z);
    vertices.push_back(-w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back( d / 2 + z);
    vertices.push_back(-w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back( d / 2 + z);
    vertices.push_back(-w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back(-d / 2 + z);
    // right
    vertices.push_back( w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back( d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back(-h / 2 + y); vertices.push_back(-d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back(-d / 2 + z);
    vertices.push_back( w / 2 + x); vertices.push_back( h / 2 + y); vertices.push_back( d / 2 + z);

    // LINE INDICES
    lineIndices.clear();
    //bottom
    lineIndices.push_back(0); lineIndices.push_back(1); 
    lineIndices.push_back(1); lineIndices.push_back(2);
    lineIndices.push_back(2); lineIndices.push_back(3);
    lineIndices.push_back(3); lineIndices.push_back(0);
    // top
    lineIndices.push_back(4); lineIndices.push_back(7); 
    lineIndices.push_back(7); lineIndices.push_back(6);
    lineIndices.push_back(6); lineIndices.push_back(5);
    lineIndices.push_back(5); lineIndices.push_back(4);

    // sides
    lineIndices.push_back(0); lineIndices.push_back(4); 
    lineIndices.push_back(1); lineIndices.push_back(7);
    lineIndices.push_back(2); lineIndices.push_back(6);
    lineIndices.push_back(3); lineIndices.push_back(5);


    // TRIANGLE INDICES
    triangleIndices.clear();
    triangleIndices.push_back(0); triangleIndices.push_back(1); triangleIndices.push_back(2);
        triangleIndices.push_back(0); triangleIndices.push_back(2); triangleIndices.push_back(3);
    triangleIndices.push_back(4); triangleIndices.push_back(5); triangleIndices.push_back(6);
        triangleIndices.push_back(4); triangleIndices.push_back(6); triangleIndices.push_back(7);
    triangleIndices.push_back(8); triangleIndices.push_back(9); triangleIndices.push_back(10);
        triangleIndices.push_back(8); triangleIndices.push_back(10); triangleIndices.push_back(11);
    triangleIndices.push_back(12); triangleIndices.push_back(13); triangleIndices.push_back(14);
        triangleIndices.push_back(12); triangleIndices.push_back(14); triangleIndices.push_back(15);
    triangleIndices.push_back(16); triangleIndices.push_back(17); triangleIndices.push_back(18);
        triangleIndices.push_back(16); triangleIndices.push_back(18); triangleIndices.push_back(19);
    triangleIndices.push_back(20); triangleIndices.push_back(21); triangleIndices.push_back(22);
        triangleIndices.push_back(20); triangleIndices.push_back(22); triangleIndices.push_back(23);
}

template<typename T> void
GLTFWriter::Test::MakeSphere(float x,
    float y,
    float z,
    float radius,
    unsigned int resolution,
    std::vector<float> &vertices,
    std::vector<T> &lineIndices,
    std::vector<T> &triangleIndices)
{
    int i,
        j;
    float ud, /* up/down and left/right angles */
        lr;
    int scale;

    /* number of facets about 1/2 of circumference */
    if ((scale = (int)resolution / 2) < 2)
        scale = 2;

    const unsigned short numVertices = 2 * scale * (scale - 1) + 2;
    const unsigned int numLineSegs = 6 * scale * (scale - 1);
    const unsigned int numTriangles = 4 * scale * (scale - 1);

    vertices.resize(3 * numVertices);
    lineIndices.resize(2 * numLineSegs);
    triangleIndices.resize(3 * numTriangles);

    float *pVertex = &vertices[0];
    T *pLine = &lineIndices[0];
    T *pTriangle = &triangleIndices[0];

    int v = 0;
    int l = 0;
    int t = 0;

    for (ud = (float)(PI / 2), i = 0; i <= scale; i++, ud -= (float)(PI / scale)) {
        for (lr = 0, j = 0; j < 2 * scale; j++, lr -= (float)(PI / scale)) {
            if ((i == 0 && j == 0) || (i != 0 && i != scale) || (i == scale && j == 0)) {
                float fLen = (float)(radius * std::cos(ud));
                *pVertex++ = (float)(fLen * std::cos(lr) + x);
                *pVertex++ = (float)(radius * std::sin(ud) + y);
                *pVertex++ = (float)(fLen * std::sin(lr) + z);
            }
            if (i < scale) {
                if (i == 0) {
                    *pTriangle++ = 0;
                    *pTriangle++ = j + 1;
                    if (j < 2 * scale - 1)
                        *pTriangle++ = j + 2;
                    else
                        *pTriangle++ = 1;

                    *pLine++ = 0;
                    *pLine++ = j + 1;

                    *pLine++ = j + 1;
                    if (j < 2 * scale - 1)
                        *pLine++ = j + 2;
                    else
                        *pLine++ = 1;
                }
                else if (i < scale - 1) {
                    int v = (i - 1) * 2 * scale + j + 1;

                    *pTriangle++ = v;
                    *pTriangle++ = v + 2 * scale;
                    if (j < 2 * scale - 1)
                        *pTriangle++ = v + 1;
                    else
                        *pTriangle++ = v - 2 * scale + 1;

                    *pTriangle++ = v + 2 * scale;
                    if (j < 2 * scale - 1) {
                        *pTriangle++ = v + 2 * scale + 1;
                        *pTriangle++ = v + 1;
                    }
                    else {
                        *pTriangle++ = v + 1;
                        *pTriangle++ = v - 2 * scale + 1;
                    }

                    *pLine++ = v;
                    *pLine++ = v + 2 * scale;

                    *pLine++ = v + 2 * scale;
                    if (j < 2 * scale - 1) {
                        *pLine++ = v + 2 * scale + 1;

                        *pLine++ = v + 2 * scale;
                        *pLine++ = v + 1;
                    }
                    else {
                        *pLine++ = v + 1;

                        *pLine++ = v + 2 * scale;
                        *pLine++ = v - 2 * scale + 1;
                    }
                }
                else if (i == scale - 1) {
                    int v = (i - 1) * 2 * scale + j + 1;

                    *pTriangle++ = v;
                    *pTriangle++ = numVertices - 1;
                    if (j < 2 * scale - 1)
                        *pTriangle++ = v + 1;
                    else
                        *pTriangle++ = v - 2 * scale + 1;

                    *pLine++ = v;
                    *pLine++ = numVertices - 1;
                }
            }
        }
    }
}
// explicit instantiations
template void GLTFWriter::Test::MakeSphere<unsigned short>(float x, float y, float z, float radius, unsigned int resolution, std::vector<float> &vertices, std::vector<unsigned short> &lineIndices, std::vector<unsigned short> &triangleIndices);
template void GLTFWriter::Test::MakeSphere<unsigned int>(float x, float y, float z, float radius, unsigned int resolution, std::vector<float> &vertices, std::vector<unsigned int> &lineIndices, std::vector<unsigned int> &triangleIndices);

template<typename T> void
GLTFWriter::Test::MakeTexturedSphere(float x,
    float y,
    float z,
    float radius,
    unsigned int resolution,
    std::vector<float> &vertices,
    std::vector<float> &normals,
    std::vector<float> &texCoords,
    std::vector<T> &triangleIndices)
{
    const unsigned int numVertices = (resolution + 1) * (resolution + 1);
    const unsigned int numTriangles = 2 * resolution * resolution;
    vertices.resize(3 * numVertices);
    normals.resize(3 * numVertices);
    texCoords.resize(2 * numVertices);
    triangleIndices.resize(3 * numTriangles);

    float *pVertex = &vertices[0];
    float *pNormal = &normals[0];
    float *pTexCoord = &texCoords[0];
    T *pTriangle = &triangleIndices[0];

    const double fLatInc = PI / resolution;
    const double fLongInc = 2 * PI / resolution;

    // top to bottom
    double fLat, fLong;
    unsigned int iLat, iLong;
    for (fLat = PI, iLat = 0; iLat <= resolution; ++iLat, fLat -= fLatInc) {
        // left to right
        for (fLong = 2 * PI, iLong = 0; iLong <= resolution; ++iLong, fLong -= fLongInc) {
            float fLen = (float)(radius * sin(fLat));
            double X = fLen * cos(fLong);
            double Y = radius * cos(fLat);
            double Z = fLen * sin(fLong);

            *pVertex++ = (float)X + x;
            *pVertex++ = (float)Y + y;
            *pVertex++ = (float)Z + z;

            double d = X * X + Y * Y + Z * Z;
            if (d != 0 && d != 1) {
                d = std::sqrt(d);
                X /= d;
                Y /= d;
                Z /= d;
            }
            *pNormal++ = (float)X;
            *pNormal++ = (float)Y;
            *pNormal++ = (float)Z;

            *pTexCoord++ = (float)((2 * PI - fLong) / (2 * PI));
            *pTexCoord++ = (float)((PI - fLat) / PI);

            if (iLat > 0 && iLong > 0) {
                *pTriangle++ = (iLat - 1) * (resolution + 1) + iLong;
                *pTriangle++ = iLat * (resolution + 1) + iLong - 1;
                *pTriangle++ = (iLat - 1) * (resolution + 1) + iLong - 1;

                *pTriangle++ = (iLat - 1) * (resolution + 1) + iLong;
                *pTriangle++ = iLat * (resolution + 1) + iLong;
                *pTriangle++ = iLat * (resolution + 1) + iLong - 1;
            }
        }
    }
}
// explicit instantiations
template void GLTFWriter::Test::MakeTexturedSphere<unsigned short>(float x, float y, float z, float radius, unsigned int resolution, std::vector<float> &vertices, std::vector<float> &normals, std::vector<float> &texCoords, std::vector<unsigned short> &triangleIndices);
template void GLTFWriter::Test::MakeTexturedSphere<unsigned int>(float x, float y, float z, float radius, unsigned int resolution, std::vector<float> &vertices, std::vector<float> &normals, std::vector<float> &texCoords, std::vector<unsigned int> &triangleIndices);

GLTFWriter::Test::PrimMat
GLTFWriter::Test::CreateSolidColoredBoxPrimitive(GLTF *gltf,
    float x,
    float y,
    float z,
    float w,
    float h,
    float d,
    float r,
    float g,
    float b,
    float a)
{
    Primitive *primitive = 0;
    Material *material = 0;

    // MATERIAL
    Material *mat = Test::CreateSolidColoredMaterial(gltf, r, g, b, a);
    if (mat) {
        // BOX
        std::vector<float> vertices;
        std::vector<unsigned short> lineIndices;
        std::vector<unsigned short> indices;
        Test::MakeBox(x, y, z, w, h, d, vertices, lineIndices, indices);

        // NORMALS
        std::vector<float> normals(vertices.size());
        Utils::ComputeVertexNormals3((unsigned int)vertices.size() / 3, &vertices[0], (unsigned int)indices.size() / 3, 3, &indices[0], &normals[0]);

        Attribute *vertex = 0;
        Index *index = 0;
        Attribute *normal = 0;
        
        if ((vertex = Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0])) != 0 && // POSITION ATTRIBUTE
            (index = Index::Create(gltf, (unsigned int)indices.size(), &indices[0])) != 0 && // INDICES
            (normal = Attribute::CreateNormal(gltf, (unsigned int)vertices.size() / 3, &normals[0])) != 0) { // NORMAL ATTRIBUTE

            // PRIMITIVE
            Primitive *prim = Primitive::Create(gltf, Primitive::PT_TRIANGLES, mat, index);
            if (prim && prim->AppendAttribute(vertex) && prim->AppendAttribute(normal)) {
                material = mat;
                primitive = prim;
            }
        }
    }

    return std::make_pair(primitive, material);
}

GLTFWriter::Test::PrimMat
GLTFWriter::Test::CreateColoredBoxPrimitive(GLTF *gltf,
    float x,
    float y,
    float z,
    float w,
    float h,
    float d)
{
    Material *material = 0;
    Primitive *primitive = 0;

    // TECHNIQUE
    Technique *technique = Technique::Create(gltf);
    if (technique && 
        technique->AppendState(State::Create(gltf, State::ST_DEPTHTESTENABLE, 1)) && // TECHNIQUE STATES
        technique->AppendState(State::Create(gltf, State::ST_BLENDENABLE, 1))) {
        // MATERIAL
        Material *mat = Material::Create(gltf, technique);
        if (mat) {
            // BOX
            std::vector<float> vertices;
            std::vector<unsigned short> lineIndices;
            std::vector<unsigned short> indices;
            Test::MakeBox(x, y, z, w, h, d, vertices, lineIndices, indices);

            const unsigned int numVertices = (unsigned int)vertices.size() / 3;

            // COLORS
            std::vector<float> colors;
            double colorInc = 1.0 / std::ceil(std::pow(numVertices, 1.0 / 3.75) - 1);
            std::vector<double> c(4, 1);
            for (unsigned int i = 0; i < numVertices; ++i) {
                colors.push_back((float)c[0]); colors.push_back((float)c[1]); colors.push_back((float)c[2]); colors.push_back((float)c[3]);
                for (unsigned int j = 0; j < 4; ++j) {
                    c[j] -= colorInc;
                    if (c[j] >= 0.0)
                        break;
                    c[j] = 1;
                }
            }

            // NORMALS
            std::vector<float> normals(vertices.size());
            Utils::ComputeVertexNormals3((unsigned int)vertices.size() / 3, &vertices[0], (unsigned int)indices.size() / 3, 3, &indices[0], &normals[0]);

            Attribute *vertex = 0;
            Index *index = 0;
            Attribute *color = 0;
            Attribute *normal = 0;

            if ((vertex = Attribute::CreatePosition(gltf, numVertices, &vertices[0])) != 0 && // POSITION ATTRIBUTE            
                (index = Index::Create(gltf, (unsigned int)indices.size(), &indices[0])) != 0 &&  // INDICES
                (color = Attribute::CreateColor(gltf, Attribute::AT_FLOAT_VEC4, numVertices, &colors[0])) != 0 &&  // COLOR ATTRIBUTE
                (normal = Attribute::CreateNormal(gltf, numVertices, &normals[0]))) { // NORMAL ATTRIBUTE

                // PRIMITIVE
                Primitive *prim = Primitive::Create(gltf, Primitive::PT_TRIANGLES, mat, index);
                if (prim && prim->AppendAttribute(vertex) && prim->AppendAttribute(normal) && prim->AppendAttribute(color)) {
                    primitive = prim;
                    material = mat;
                }
            }
        }
    }

    return std::make_pair(primitive, material);
}

GLTFWriter::Test::PrimMat
GLTFWriter::Test::CreateTexturedBoxPrimitive(GLTF *gltf,
    Texture *texture,
    float x,
    float y,
    float z,
    float w,
    float h,
    float d)
{
    Primitive *primitive = 0;
    Material *material = 0;

    // MATERIAL
    Material *mat = Test::CreateTexturedMaterial(gltf, texture);
    if (mat) {
        // BOX
        std::vector<float> vertices;
        std::vector<unsigned short> lineIndices;
        std::vector<unsigned short> indices;
        Test::MakeBox(x, y, z, w, h, d, vertices, lineIndices, indices);

        const unsigned int numVertices = (unsigned int)vertices.size() / 3;

        // TEXCOORDS
        const double coordMin = -5;
        const double coordMax = 5;
        std::vector<float> texCoords;
        double coordInc = 1.0 / (numVertices - 1);
        double c = 0;
        for (unsigned int i = 0; i < numVertices; ++i) {
            texCoords.push_back((float)(coordMin + c * (coordMax - coordMin)));
            c += coordInc;
        }

        // NORMALS
        std::vector<float> normals(vertices.size());
        Utils::ComputeVertexNormals3((unsigned int)vertices.size() / 3, &vertices[0], (unsigned int)indices.size() / 3, 3, &indices[0], &normals[0]);

        Attribute *vertex = 0;
        Index *index = 0;
        Attribute *texCoord = 0;
        Attribute *normal = 0;
        
        if ((vertex = Attribute::CreatePosition(gltf, numVertices, &vertices[0])) != 0 && // POSITION ATTRIBUTE
            (index = Index::Create(gltf, (unsigned int)indices.size(), &indices[0])) != 0 && // INDICES
            (texCoord = Attribute::CreateTextureCoord(gltf, 0, numVertices, &texCoords[0])) && // TEXCOORD ATTRIBUTE
            (normal = Attribute::CreateNormal(gltf, numVertices, &normals[0]))) { // NORMAL ATTRIBUTE
            float mn;
            float mx;
            mn = (float)coordMin;
            mx = (float)coordMax;
            if (texCoord->SetMinMax(Attribute::AT_FLOAT, &mn, &mx)) {
                Primitive *prim = Primitive::Create(gltf, Primitive::PT_TRIANGLES, mat, index);
                if (prim && prim->AppendAttribute(vertex) && prim->AppendAttribute(normal) && prim->AppendAttribute(texCoord)) {
                    primitive = prim;
                    material = mat;
                }
            }
        }
    }

    return std::make_pair(primitive, material);
}

GLTFWriter::Test::PrimMat
GLTFWriter::Test::CreateSolidColoredSpherePrimitive(GLTF *gltf,
    float x,
    float y,
    float z,
    float radius,
    unsigned int resolution,
    float r,
    float g,
    float b,
    float a)
{
    Material *material = 0;
    Primitive *primitive = 0;

    // MATERIAL
    Material *mat = Test::CreateSolidColoredMaterial(gltf, r, g, b, a);
    if (mat) {
        // SPHERE
        std::vector<float> vertices;
        std::vector<unsigned short> lineIndices;
        std::vector<unsigned short> indices;
        Test::MakeSphere(x, y, z, radius, resolution, vertices, lineIndices, indices);

        // NORMALS
        std::vector<float> normals(vertices.size());
        Utils::ComputeVertexNormals3((unsigned int)vertices.size() / 3, &vertices[0], (unsigned int)indices.size() / 3, 3, &indices[0], &normals[0]);

        Attribute *vertex = 0;
        Index *index = 0;
        Attribute *normal = 0;
        
        if ((vertex = Attribute::CreatePosition(gltf, (unsigned int)vertices.size() / 3, &vertices[0])) != 0 && // POSITION ATTRIBUTE
            (index = Index::Create(gltf, (unsigned int)indices.size(), &indices[0])) != 0 && // INDICES
            (normal = Attribute::CreateNormal(gltf, (unsigned int)vertices.size() / 3, &normals[0])) != 0) { // NORMAL ATTRIBUTE
            // PRIMITIVE
            Primitive *prim = Primitive::Create(gltf, Primitive::PT_TRIANGLES, mat, index);
            if (prim && prim->AppendAttribute(vertex) && prim->AppendAttribute(normal)) {
                material = mat;
                primitive = prim;
            }
        }
    }

    return std::make_pair(primitive, material);
}

GLTFWriter::Test::PrimMat
GLTFWriter::Test::CreateColoredSpherePrimitive(GLTF *gltf,
    float x,
    float y,
    float z,
    float radius,
    unsigned int resolution)
{
    Material *material = 0;
    Primitive *primitive = 0;

    // TECHNIQUE
    Technique *technique = Technique::Create(gltf);
    if (technique &&
        technique->AppendState(State::Create(gltf, State::ST_DEPTHTESTENABLE, 1)) && // TECHNIQUE STATES
        technique->AppendState(State::Create(gltf, State::ST_BLENDENABLE, 1))) {

        // MATERIAL
        Material *mat = Material::Create(gltf, technique);
        if (mat) {
            // SPHERE
            std::vector<float> vertices;
            std::vector<unsigned short> lineIndices;
            std::vector<unsigned short> indices;
            Test::MakeSphere(x, y, z, radius, resolution, vertices, lineIndices, indices);

            const unsigned int numVertices = (unsigned int)vertices.size() / 3;

            // COLORS
            std::vector<float> colors;
            double colorInc = 1.0 / std::ceil(std::pow(numVertices, 1.0 / 3.75) - 1);
            std::vector<double> c(4, 1);
            for (unsigned int i = 0; i < numVertices; ++i) {
                colors.push_back((float)c[0]); colors.push_back((float)c[1]); colors.push_back((float)c[2]); colors.push_back((float)c[3]);
                for (unsigned int j = 0; j < 4; ++j) {
                    c[j] -= colorInc;
                    if (c[j] >= 0.0)
                        break;
                    c[j] = 1;
                }
            }

            // NORMALS
            std::vector<float> normals(vertices.size());
            Utils::ComputeVertexNormals3((unsigned int)vertices.size() / 3, &vertices[0], (unsigned int)indices.size() / 3, 3, &indices[0], &normals[0]);

            Attribute *vertex = 0;
            Index *index = 0;
            Attribute *color = 0;
            Attribute *normal = 0;

            if ((vertex = Attribute::CreatePosition(gltf, numVertices, &vertices[0])) != 0 && // POSITION ATTRIBUTE            
                (index = Index::Create(gltf, (unsigned int)indices.size(), &indices[0])) != 0 &&  // INDICES
                (color = Attribute::CreateColor(gltf, Attribute::AT_FLOAT_VEC4, numVertices, &colors[0])) != 0 &&  // COLOR ATTRIBUTE
                (normal = Attribute::CreateNormal(gltf, numVertices, &normals[0]))) { // NORMAL ATTRIBUTE
                // PRIMITIVE
                Primitive *prim = Primitive::Create(gltf, Primitive::PT_TRIANGLES, mat, index);
                if (prim && prim->AppendAttribute(vertex) && prim->AppendAttribute(normal) && prim->AppendAttribute(color)) {
                    material = mat;
                    primitive = prim;
                }
            }
        }
    }

    return std::make_pair(primitive, material);
}

GLTFWriter::Test::Vector3::Vector3(const GLTFWriter::Test::Vector4 &v)
    : VectorBase<3>()
{
    (*this)[0] = v[0];
    (*this)[1] = v[1];
    (*this)[2] = v[2];
    if (v[3] != 0 && v[3] != 1) {
        (*this)[0] /= v[3];
        (*this)[1] /= v[3];
        (*this)[2] /= v[3];
    }
}
double
GLTFWriter::Test::Vector3::Length() const
{
    double d = (*this)[0] * (*this)[0] + (*this)[1] * (*this)[1] + (*this)[2] * (*this)[2];
    if (d != 0 && d != 1)
        d = std::sqrt(d);
    return d;
}
GLTFWriter::Test::Vector3
GLTFWriter::Test::Vector3::Normalize() const
{
    Vector3 tmp = *this;
    double d = tmp[0] * tmp[0] + tmp[1] * tmp[1] + tmp[2] * tmp[2];
    if (d != 0 && d != 1) {
        d = std::sqrt(d);
        tmp[0] /= d;
        tmp[1] /= d;
        tmp[2] /= d;
    }
    return tmp;
}
GLTFWriter::Test::Vector3 &
GLTFWriter::Test::Vector3::operator+=(const Vector3 &v)
{
    (*this)[0] += v[0];
    (*this)[1] += v[1];
    (*this)[2] += v[2];
    return *this;
}
GLTFWriter::Test::Vector3 &
GLTFWriter::Test::Vector3::operator-=(const Vector3 &v)
{
    (*this)[0] -= v[0];
    (*this)[1] -= v[1];
    (*this)[2] -= v[2];
    return *this;
}
GLTFWriter::Test::Vector3 &
GLTFWriter::Test::Vector3::operator*=(double d)
{
    (*this)[0] *= d;
    (*this)[1] *= d;
    (*this)[2] *= d;
    return *this;
}
GLTFWriter::Test::Vector3
GLTFWriter::Test::Vector3::Cross(const Vector3 &v) const
{
    Vector3 tmp;
    tmp[0] = (*this)[1] * v[2] - v[1] * (*this)[2];
    tmp[1] = (*this)[2] * v[0] - v[2] * (*this)[0];
    tmp[2] = (*this)[0] * v[1] - v[0] * (*this)[1];
    return tmp;
}

GLTFWriter::Test::Quaternion::Quaternion(const Vector3 &axis,
    double angle)
    : VectorBase<4>()
{
    Vector3 tmp = axis.Normalize();
    double s = std::sin(angle / 2);
    (*this)[0] = tmp[0] * s;
    (*this)[1] = tmp[1] * s;
    (*this)[2] = tmp[2] * s;
    (*this)[3] = std::cos(angle / 2);
    *this = Normalize(); // rotation quaternions must be normalized
}
GLTFWriter::Test::Quaternion::Quaternion(const Matrix4 &m)
    : VectorBase<4>()
{
    // is this the same as Matrix.GetQuaternion???
    double tr = m[0] + m[5] + m[10];
    if (tr > 0) {
        double s = std::sqrt(tr + 1) * 2;
        (*this)[0] = (m[6] - m[9]) / s;
        (*this)[1] = (-m[2] - m[8]) / s;
        (*this)[2] = (m[1] - m[4]) / s;
        (*this)[3] = 0.25 * s;
    }
    else if (m[0] > m[5] && m[0] > m[10]) {
        double s = std::sqrt(m[0] - m[5] - m[10] + 1) * 2;
        (*this)[0] = 0.25 * s;
        (*this)[1] = (m[1] + m[4]) / s;
        (*this)[2] = (m[2] + m[8]) / s;
        (*this)[3] = (m[6] - m[9]) / s;
    }
    else if (m[5] > m[10]) {
        double s = std::sqrt(-m[0] + m[5] - m[10] + 1) * 2;
        (*this)[0] = (m[1] + m[4]) / s;
        (*this)[1] = 0.25 * s;
        (*this)[2] = (m[6] + m[9]) / s;
        (*this)[3] = (-m[2] + m[8]) / s;
    }
    else {
        double s = std::sqrt(-m[0] - m[5] + m[10] + 1) * 2;
        (*this)[0] = (m[2] + m[8]) / s;
        (*this)[1] = (m[6] + m[9]) / s;
        (*this)[2] = 0.25 * s;
        (*this)[3] = (m[1] - m[4]) / s;
    }
}

double
GLTFWriter::Test::Quaternion::Norm() const
{
    return this->Dot(*this);
    //    return (*this)[0] * (*this)[0] + (*this)[1] * (*this)[1] + (*this)[2] * (*this)[2] + (*this)[3] * (*this)[3];
}
double
GLTFWriter::Test::Quaternion::Magnitude() const
{
    double d = Norm();
    if (d != 0 && d != 1)
        return std::sqrt(d);
    return d;
}
GLTFWriter::Test::Quaternion
GLTFWriter::Test::Quaternion::Normalize() const
{
    Quaternion tmp = *this;
    double d = Magnitude();
    if (d != 0 && d != 1) {
        tmp[0] /= d;
        tmp[1] /= d;
        tmp[2] /= d;
        tmp[3] /= d;
    }
    return tmp;
}
GLTFWriter::Test::Quaternion
GLTFWriter::Test::Quaternion::Slerp(const Quaternion &q,
    double t) const
{
    Quaternion a = Normalize(); // rotation quaternions must be normalized
    Quaternion b = q.Normalize(); // rotation quaternions must be normalized
    double cosHalfTheta = a.Dot(b);
    if (std::abs(cosHalfTheta) >= 1.0)
        return a;
    double sinHalfTheta = std::sqrt(1.0 - cosHalfTheta * cosHalfTheta);
    if (std::abs(sinHalfTheta) < 0.001)
        return ((a + b) * 0.5).Normalize(); // rotation quaternions must be normalized
    double halfTheta = std::acos(cosHalfTheta);
    double ratioA = std::sin((1 - t) * halfTheta) / sinHalfTheta;
    double ratioB = std::sin(t * halfTheta) / sinHalfTheta;
    return (a * ratioA + b * ratioB).Normalize(); // rotation quaternions must be normalized
}
GLTFWriter::Test::Quaternion &
GLTFWriter::Test::Quaternion::operator+=(const Quaternion &q)
{
    (*this)[0] += q[0];
    (*this)[1] += q[1];
    (*this)[2] += q[2];
    (*this)[3] += q[3];
    return *this;
}
GLTFWriter::Test::Quaternion &
GLTFWriter::Test::Quaternion::operator-=(const Quaternion &q)
{
    (*this)[0] -= q[0];
    (*this)[1] -= q[1];
    (*this)[2] -= q[2];
    (*this)[3] -= q[3];
    return *this;
}
GLTFWriter::Test::Quaternion &
GLTFWriter::Test::Quaternion::operator*=(const Quaternion &q)
{
    Quaternion tmp;
    tmp[0] = (*this)[3] * q[0] + (*this)[0] * q[3] + (*this)[1] * q[2] - (*this)[2] * q[1];
    tmp[1] = (*this)[3] * q[1] - (*this)[0] * q[2] + (*this)[1] * q[3] + (*this)[2] * q[0];
    tmp[2] = (*this)[3] * q[2] + (*this)[0] * q[1] - (*this)[1] * q[0] + (*this)[2] * q[3];
    tmp[3] = (*this)[3] * q[3] - (*this)[0] * q[0] - (*this)[1] * q[1] - (*this)[2] * q[2];
    *this = tmp;
    return *this;
}
GLTFWriter::Test::Quaternion &
GLTFWriter::Test::Quaternion::operator*=(double d)
{
    (*this)[0] *= d;
    (*this)[1] *= d;
    (*this)[2] *= d;
    (*this)[3] *= d;
    return *this;
}

GLTFWriter::Test::DualQuaternion::DualQuaternion(const double angle, // rotation
    const double d, // pitch
    const Vector3 &l,
    const Vector3 &m)
{
    double s2 = std::sin(angle / 2); // = 1 / vrd
    double wr = std::cos(angle / 2);
    Vector3 vr = l * s2;
    double wd = -d / 2 * s2;
    Vector3 vd = m * s2 + l * (d / 2 * wr);

    rotation[0] = vr[0];
    rotation[1] = vr[1];
    rotation[2] = vr[2];
    rotation[3] = wr;

    translation[0] = vd[0];
    translation[1] = vd[1];
    translation[2] = vd[2];
    translation[3] = wd;
}
GLTFWriter::Test::DualQuaternion
GLTFWriter::Test::DualQuaternion::Conjugate() const
{
    DualQuaternion tmp;
    tmp.rotation = rotation.Conjugate();
    tmp.translation = translation.Conjugate();
    return tmp;
}
GLTFWriter::Test::DualQuaternion
GLTFWriter::Test::DualQuaternion::Inverse() const
{
    DualQuaternion tmp;
    tmp.rotation = rotation.Conjugate(); // really should be Inverse
    tmp.translation = tmp.rotation * translation * tmp.rotation * -1;
    return tmp;
}
GLTFWriter::Test::DualQuaternion &
GLTFWriter::Test::DualQuaternion::operator+=(const DualQuaternion &q)
{
    rotation = (rotation + q.rotation).Normalize(); // rotation quaternions must be normalized
    translation += q.translation;
    return *this;
}
GLTFWriter::Test::DualQuaternion &
GLTFWriter::Test::DualQuaternion::operator-=(const DualQuaternion &q)
{
    rotation = (rotation - q.rotation).Normalize(); // rotation quaternions must be normalized
    translation -= q.translation;
    return *this;
}
GLTFWriter::Test::DualQuaternion &
GLTFWriter::Test::DualQuaternion::operator*=(const DualQuaternion &q)
{
    DualQuaternion tmp;
    tmp.rotation = (rotation * q.rotation).Normalize(); // rotation quaternions must be normalized
    tmp.translation = rotation * q.translation + translation * q.rotation;
    *this = tmp;
    return *this;
}
GLTFWriter::Test::DualQuaternion &
GLTFWriter::Test::DualQuaternion::operator*=(double d)
{
    this->rotation = (this->rotation * d).Normalize();
    this->translation *= d;
    return *this;
}
void
GLTFWriter::Test::DualQuaternion::GetPluckerCoordinates(double &angle, // rotation
    double &d, // pitch
    Vector3 &l,
    Vector3 &m)
{
    double wr = rotation[3];
    Vector3 vr(rotation[0], rotation[1], rotation[2]);
    double wd = translation[3];
    Vector3 vd(translation[0], translation[1], translation[2]);
    double vrd = 1.0 / std::sqrt(vr.Dot(vr));

    angle = 2 * std::acos(wr);
    d = -2 * wd * vrd;
    l = vr * vrd;
    m = (vd - l * (d * wr / 2)) * vrd;
}
GLTFWriter::Test::DualQuaternion
GLTFWriter::Test::DualQuaternion::Pow(double t)
{
    double angle;
    double d;
    Vector3 l;
    Vector3 m;
    GetPluckerCoordinates(angle, d, l, m);

    double s = std::sin(t * angle / 2);
    double c = std::cos(t * angle / 2);

    // there is dual angle and dual number calculations going on 
    double wr = c;
    Vector3 vr = l * s;
    double wd = -t * d / 2 * s;
    Vector3 vd = l * (t * d / 2 * c) + m * s;

    DualQuaternion tmp;
    tmp.rotation[0] = vr[0];
    tmp.rotation[1] = vr[1];
    tmp.rotation[2] = vr[2];
    tmp.rotation[3] = wr;
    tmp.translation[0] = vd[0];
    tmp.translation[1] = vd[1];
    tmp.translation[2] = vd[2];
    tmp.translation[3] = wd;

    return tmp;
}
GLTFWriter::Test::DualQuaternion
GLTFWriter::Test::DualQuaternion::Sclerp(const DualQuaternion &q,
    double t) const
{
    double d = this->GetRotation().Dot(q.GetRotation());
    DualQuaternion tmp = this->Inverse() * (q * (d < 0 ? -1.0 : 1.0));
    return *this * tmp.Pow(t);
}
GLTFWriter::Test::Matrix4::Matrix4(const Quaternion &q)
    : VectorBase<16>()
{
    Quaternion t = q.Normalize(); // rotation quaternions must be normalized

    (*this)[0] = 1 - 2 * t[1] * t[1] - 2 * t[2] * t[2];
    (*this)[1] = 2 * t[0] * t[1] + 2 * t[2] * t[3];
    (*this)[2] = 2 * t[0] * t[2] - 2 * t[1] * t[3];

    (*this)[4] = 2 * t[0] * t[1] - 2 * t[2] * t[3];
    (*this)[5] = 1 - 2 * t[0] * t[0] - 2 * t[2] * t[2];
    (*this)[6] = 2 * t[1] * t[2] + 2 * t[0] * t[3];

    (*this)[8] = 2 * t[0] * t[2] + 2 * t[1] * t[3];
    (*this)[9] = 2 * t[1] * t[2] - 2 * t[0] * t[3];
    (*this)[10] = 1 - 2 * t[0] * t[0] - 2 * t[1] * t[1];

    (*this)[15] = 1;
}
GLTFWriter::Test::Matrix4::Matrix4(const DualQuaternion &q)
    : VectorBase<16>()
{
    Quaternion qr = q.GetRotation();

    (*this)[0] = 1 - 2 * qr[1] * qr[1] - 2 * qr[2] * qr[2];
    (*this)[1] = 2 * qr[0] * qr[1] + 2 * qr[2] * qr[3];
    (*this)[2] = 2 * qr[0] * qr[2] - 2 * qr[1] * qr[3];

    (*this)[4] = 2 * qr[0] * qr[1] - 2 * qr[2] * qr[3];
    (*this)[5] = 1 - 2 * qr[0] * qr[0] - 2 * qr[2] * qr[2];
    (*this)[6] = 2 * qr[1] * qr[2] + 2 * qr[0] * qr[3];

    (*this)[8] = 2 * qr[0] * qr[2] + 2 * qr[1] * qr[3];
    (*this)[9] = 2 * qr[1] * qr[2] - 2 * qr[0] * qr[3];
    (*this)[10] = 1 - 2 * qr[0] * qr[0] - 2 * qr[1] * qr[1];

    Vector3 vt = q.GetTranslation();

    (*this)[12] = vt[0];
    (*this)[13] = vt[1];
    (*this)[14] = vt[2];

    (*this)[15] = 1;
}

GLTFWriter::Test::Matrix4 &
GLTFWriter::Test::Matrix4::operator*=(const Matrix4 &m)
{
    Matrix4 tmp;

    tmp[0] = (*this)[0] * m[0] + (*this)[4] * m[1] + (*this)[8] * m[2] + (*this)[12] * m[3];
    tmp[1] = (*this)[1] * m[0] + (*this)[5] * m[1] + (*this)[9] * m[2] + (*this)[13] * m[3];
    tmp[2] = (*this)[2] * m[0] + (*this)[6] * m[1] + (*this)[10] * m[2] + (*this)[14] * m[3];
    tmp[3] = (*this)[3] * m[0] + (*this)[7] * m[1] + (*this)[11] * m[2] + (*this)[15] * m[3];

    tmp[4] = (*this)[0] * m[4] + (*this)[4] * m[5] + (*this)[8] * m[6] + (*this)[12] * m[7];
    tmp[5] = (*this)[1] * m[4] + (*this)[5] * m[5] + (*this)[9] * m[6] + (*this)[13] * m[7];
    tmp[6] = (*this)[2] * m[4] + (*this)[6] * m[5] + (*this)[10] * m[6] + (*this)[14] * m[7];
    tmp[7] = (*this)[3] * m[4] + (*this)[7] * m[5] + (*this)[11] * m[6] + (*this)[15] * m[7];

    tmp[8] = (*this)[0] * m[8] + (*this)[4] * m[9] + (*this)[8] * m[10] + (*this)[12] * m[11];
    tmp[9] = (*this)[1] * m[8] + (*this)[5] * m[9] + (*this)[9] * m[10] + (*this)[13] * m[11];
    tmp[10] = (*this)[2] * m[8] + (*this)[6] * m[9] + (*this)[10] * m[10] + (*this)[14] * m[11];
    tmp[11] = (*this)[3] * m[8] + (*this)[7] * m[9] + (*this)[11] * m[10] + (*this)[15] * m[11];

    tmp[12] = (*this)[0] * m[12] + (*this)[4] * m[13] + (*this)[8] * m[14] + (*this)[12] * m[15];
    tmp[13] = (*this)[1] * m[12] + (*this)[5] * m[13] + (*this)[9] * m[14] + (*this)[13] * m[15];
    tmp[14] = (*this)[2] * m[12] + (*this)[6] * m[13] + (*this)[10] * m[14] + (*this)[14] * m[15];
    tmp[15] = (*this)[3] * m[12] + (*this)[7] * m[13] + (*this)[11] * m[14] + (*this)[15] * m[15];

    *this = tmp;

    return *this;
}

GLTFWriter::Test::Vector4
GLTFWriter::Test::Matrix4::operator*(const Vector4 &v) const
{
    Vector4 tmp;

    tmp[0] = (*this)[0] * v[0] + (*this)[4] * v[1] + (*this)[8] * v[2] + (*this)[12] * v[3];
    tmp[1] = (*this)[1] * v[0] + (*this)[5] * v[1] + (*this)[9] * v[2] + (*this)[13] * v[3];
    tmp[2] = (*this)[2] * v[0] + (*this)[6] * v[1] + (*this)[10] * v[2] + (*this)[14] * v[3];
    tmp[3] = (*this)[3] * v[0] + (*this)[7] * v[1] + (*this)[11] * v[2] + (*this)[15] * v[3];

    return tmp;
}

void
GLTFWriter::Test::Matrix4::LoadIdentity()
{
    Clear();
    (*this)[0] = (*this)[5] = (*this)[10] = (*this)[15] = 1;
}
bool
GLTFWriter::Test::Matrix4::IsIdentity()
{
    return (*this)[0] == 1 && (*this)[1] == 0 && (*this)[2] == 0 && (*this)[3] == 0 &&
        (*this)[4] == 0 && (*this)[5] == 1 && (*this)[6] == 0 && (*this)[7] == 0 &&
        (*this)[8] == 0 && (*this)[9] == 0 && (*this)[10] == 1 && (*this)[11] == 0 &&
        (*this)[12] == 0 && (*this)[13] == 0 && (*this)[14] == 0 && (*this)[15] == 1;
}
void
GLTFWriter::Test::Matrix4::LoadScale(const Vector3 &v)
{
    LoadIdentity();
    (*this)[0] = v[0];
    (*this)[5] = v[1];
    (*this)[10] = v[2];
}
void
GLTFWriter::Test::Matrix4::LoadTranslate(const Vector3 &v)
{
    LoadIdentity();
    (*this)[12] = v[0];
    (*this)[13] = v[1];
    (*this)[14] = v[2];
}
void
GLTFWriter::Test::Matrix4::LoadRotation(const Vector3 &l1,
    const Vector3 &l2,
    double angle)
{
    Vector3 vec(l2[0] - l1[0], l2[1] - l1[1], l2[2] - l1[2]);
    vec.Normalize();

    double a = l1[0];
    double b = l1[1];
    double c = l1[2];
    double u = vec[0];
    double v = vec[1];
    double w = vec[2];
    double u2 = u * u;
    double v2 = v * v;
    double w2 = w * w;
    double sinA = std::sin(angle);
    double cosA = std::cos(angle);

    LoadIdentity();
    (*this)[0] = u2 * (1 - cosA) + cosA;
    (*this)[1] = u * v * (1 - cosA) + w * sinA;
    (*this)[2] = u * w * (1 - cosA) - v * sinA;

    (*this)[4] = u * v * (1 - cosA) - w * sinA;
    (*this)[5] = v2 * (1 - cosA) + cosA;
    (*this)[6] = v * w * (1 - cosA) + u * sinA;

    (*this)[8] = u * w * (1 - cosA) + v * sinA;
    (*this)[9] = v * w * (1 - cosA) - u * sinA;
    (*this)[10] = w2 * (1 - cosA) + cosA;

    //    (*this)[12] = (a * (v2 + w2) - u * (b * v + c * w)) * (1 - cosA) + (b * w - c * v) * sinA;
    (*this)[12] = a - (*this)[0] * a - (*this)[4] * b - (*this)[8] * c;
    //    (*this)[13] = (b * (u2 + w2) - v * (a * u + c * w)) * (1 - cosA) + (c * u - a * w) * sinA;
    (*this)[13] = b - (*this)[1] * a - (*this)[5] * b - (*this)[9] * c;
    //    (*this)[14] = (c * (u2 + v2) - w * (a * u + b * v)) * (1 - cosA) + (a * v - b * u) * sinA;
    (*this)[14] = c - (*this)[2] * a - (*this)[6] * b - (*this)[10] * c;
}

GLTFWriter::Test::Vector3
GLTFWriter::Test::Matrix4::GetScale() const
{
    Vector3 tmp;

    tmp[0] = std::sqrt((*this)[0] * (*this)[0] + (*this)[1] * (*this)[1] + (*this)[2] * (*this)[2]);
    tmp[1] = std::sqrt((*this)[4] * (*this)[4] + (*this)[5] * (*this)[5] + (*this)[6] * (*this)[6]);
    tmp[2] = std::sqrt((*this)[8] * (*this)[8] + (*this)[9] * (*this)[9] + (*this)[10] * (*this)[10]);

    return tmp;
}
GLTFWriter::Test::Vector3
GLTFWriter::Test::Matrix4::GetTranslate() const
{
    return Vector3((*this)[12], (*this)[13], (*this)[14]);
}
GLTFWriter::Test::Quaternion
GLTFWriter::Test::Matrix4::GetQuaternion() const
{
    Vector3 scale = GetScale();
    double v0 = (*this)[0] / scale[0];
    double v1 = (*this)[1] / scale[0];
    double v2 = (*this)[2] / scale[0];
    double v4 = (*this)[4] / scale[1];
    double v5 = (*this)[5] / scale[1];
    double v6 = (*this)[6] / scale[1];
    double v8 = (*this)[8] / scale[2];
    double v9 = (*this)[9] / scale[2];
    double v10 = (*this)[10] / scale[2];
    bool t1 = v0 + v5 + v10 > 0;
    bool t2 = v0 > v5 && v0 > v10;
    bool t3 = v5 > v10;
    double t4 = 2 * (t1 ? (std::sqrt(1 + v0 + v5 + v10))
        : (t2 ? (std::sqrt(1 + v0 - v5 - v10))
            : (t3 ? (std::sqrt(1 - v0 + v5 - v10))
                : (std::sqrt(1 - v0 - v5 + v10)))));
    double x = t1 ? ((v6 - v9) / t4)
        : (t2 ? (0.25 * t4)
            : (t3 ? ((v4 + v1) / t4)
                : ((v8 + v2) / t4)));
    double y = t1 ? ((v8 - v2) / t4)
        : (t2 ? ((v4 + v1) / t4)
            : (t3 ? (0.25 * t4)
                : ((v9 + v6) / t4)));
    double z = t1 ? ((v1 - v4) / t4)
        : (t2 ? ((v8 + v2) / t4)
            : (t3 ? ((v9 + v6) / t4)
                : (0.25 * t4)));
    double w = t1 ? (0.25 * t4)
        : (t2 ? ((v6 - v9) / t4)
            : (t3 ? ((v8 - v2) / t4)
                : ((v1 - v4) / t4)));
    return Quaternion(x, y, z, w).Normalize(); // rotation quaternions must be normalized
}

GLTFWriter::Test::Matrix4
GLTFWriter::Test::Matrix4::Transpose() const
{
    Matrix4 tmp;

    tmp[0] = (*this)[0];
    tmp[1] = (*this)[4];
    tmp[2] = (*this)[8];
    tmp[3] = (*this)[12];
    tmp[4] = (*this)[1];
    tmp[5] = (*this)[5];
    tmp[6] = (*this)[9];
    tmp[7] = (*this)[13];
    tmp[8] = (*this)[2];
    tmp[9] = (*this)[6];
    tmp[10] = (*this)[10];
    tmp[11] = (*this)[14];
    tmp[12] = (*this)[3];
    tmp[13] = (*this)[7];
    tmp[14] = (*this)[11];
    tmp[15] = (*this)[15];

    return tmp;
}

double
GLTFWriter::Test::Matrix4::Determinant() const
{
    return   (*this)[12] * (*this)[9] * (*this)[6] * (*this)[3]
        - (*this)[8] * (*this)[13] * (*this)[6] * (*this)[3]
        - (*this)[12] * (*this)[5] * (*this)[10] * (*this)[3]
        + (*this)[4] * (*this)[13] * (*this)[10] * (*this)[3]
        + (*this)[8] * (*this)[5] * (*this)[14] * (*this)[3]
        - (*this)[4] * (*this)[9] * (*this)[14] * (*this)[3]
        - (*this)[12] * (*this)[9] * (*this)[2] * (*this)[7]
        + (*this)[8] * (*this)[13] * (*this)[2] * (*this)[7]
        + (*this)[12] * (*this)[1] * (*this)[10] * (*this)[7]
        - (*this)[0] * (*this)[13] * (*this)[10] * (*this)[7]
        - (*this)[8] * (*this)[1] * (*this)[14] * (*this)[7]
        + (*this)[0] * (*this)[9] * (*this)[14] * (*this)[7]
        + (*this)[12] * (*this)[5] * (*this)[2] * (*this)[11]
        - (*this)[4] * (*this)[13] * (*this)[2] * (*this)[11]
        - (*this)[12] * (*this)[1] * (*this)[6] * (*this)[11]
        + (*this)[0] * (*this)[13] * (*this)[6] * (*this)[11]
        + (*this)[4] * (*this)[1] * (*this)[14] * (*this)[11]
        - (*this)[0] * (*this)[5] * (*this)[14] * (*this)[11]
        - (*this)[8] * (*this)[5] * (*this)[2] * (*this)[15]
        + (*this)[4] * (*this)[9] * (*this)[2] * (*this)[15]
        + (*this)[8] * (*this)[1] * (*this)[6] * (*this)[15]
        - (*this)[0] * (*this)[9] * (*this)[6] * (*this)[15]
        - (*this)[4] * (*this)[1] * (*this)[10] * (*this)[15]
        + (*this)[0] * (*this)[5] * (*this)[10] * (*this)[15];
}

GLTFWriter::Test::Matrix4
GLTFWriter::Test::Matrix4::Inverse() const
{
    Matrix4 tmp;

    double det = Determinant();
    assert(det != 0);

    tmp[0] = ((*this)[9] * (*this)[14] * (*this)[7] - (*this)[13] * (*this)[10] * (*this)[7] + (*this)[13] * (*this)[6] * (*this)[11] - (*this)[5] * (*this)[14] * (*this)[11] - (*this)[9] * (*this)[6] * (*this)[15] + (*this)[5] * (*this)[10] * (*this)[15]) / det;
    tmp[1] = ((*this)[13] * (*this)[10] * (*this)[3] - (*this)[9] * (*this)[14] * (*this)[3] - (*this)[13] * (*this)[2] * (*this)[11] + (*this)[1] * (*this)[14] * (*this)[11] + (*this)[9] * (*this)[2] * (*this)[15] - (*this)[1] * (*this)[10] * (*this)[15]) / det;
    tmp[2] = ((*this)[5] * (*this)[14] * (*this)[3] - (*this)[13] * (*this)[6] * (*this)[3] + (*this)[13] * (*this)[2] * (*this)[7] - (*this)[1] * (*this)[14] * (*this)[7] - (*this)[5] * (*this)[2] * (*this)[15] + (*this)[1] * (*this)[6] * (*this)[15]) / det;
    tmp[3] = ((*this)[9] * (*this)[6] * (*this)[3] - (*this)[5] * (*this)[10] * (*this)[3] - (*this)[9] * (*this)[2] * (*this)[7] + (*this)[1] * (*this)[10] * (*this)[7] + (*this)[5] * (*this)[2] * (*this)[11] - (*this)[1] * (*this)[6] * (*this)[11]) / det;
    tmp[4] = ((*this)[12] * (*this)[10] * (*this)[7] - (*this)[8] * (*this)[14] * (*this)[7] - (*this)[12] * (*this)[6] * (*this)[11] + (*this)[4] * (*this)[14] * (*this)[11] + (*this)[8] * (*this)[6] * (*this)[15] - (*this)[4] * (*this)[10] * (*this)[15]) / det;
    tmp[5] = ((*this)[8] * (*this)[14] * (*this)[3] - (*this)[12] * (*this)[10] * (*this)[3] + (*this)[12] * (*this)[2] * (*this)[11] - (*this)[0] * (*this)[14] * (*this)[11] - (*this)[8] * (*this)[2] * (*this)[15] + (*this)[0] * (*this)[10] * (*this)[15]) / det;
    tmp[6] = ((*this)[12] * (*this)[6] * (*this)[3] - (*this)[4] * (*this)[14] * (*this)[3] - (*this)[12] * (*this)[2] * (*this)[7] + (*this)[0] * (*this)[14] * (*this)[7] + (*this)[4] * (*this)[2] * (*this)[15] - (*this)[0] * (*this)[6] * (*this)[15]) / det;
    tmp[7] = ((*this)[4] * (*this)[10] * (*this)[3] - (*this)[8] * (*this)[6] * (*this)[3] + (*this)[8] * (*this)[2] * (*this)[7] - (*this)[0] * (*this)[10] * (*this)[7] - (*this)[4] * (*this)[2] * (*this)[11] + (*this)[0] * (*this)[6] * (*this)[11]) / det;
    tmp[8] = ((*this)[8] * (*this)[13] * (*this)[7] - (*this)[12] * (*this)[9] * (*this)[7] + (*this)[12] * (*this)[5] * (*this)[11] - (*this)[4] * (*this)[13] * (*this)[11] - (*this)[8] * (*this)[5] * (*this)[15] + (*this)[4] * (*this)[9] * (*this)[15]) / det;
    tmp[9] = ((*this)[12] * (*this)[9] * (*this)[3] - (*this)[8] * (*this)[13] * (*this)[3] - (*this)[12] * (*this)[1] * (*this)[11] + (*this)[0] * (*this)[13] * (*this)[11] + (*this)[8] * (*this)[1] * (*this)[15] - (*this)[0] * (*this)[9] * (*this)[15]) / det;
    tmp[10] = ((*this)[4] * (*this)[13] * (*this)[3] - (*this)[12] * (*this)[5] * (*this)[3] + (*this)[12] * (*this)[1] * (*this)[7] - (*this)[0] * (*this)[13] * (*this)[7] - (*this)[4] * (*this)[1] * (*this)[15] + (*this)[0] * (*this)[5] * (*this)[15]) / det;
    tmp[11] = ((*this)[8] * (*this)[5] * (*this)[3] - (*this)[4] * (*this)[9] * (*this)[3] - (*this)[8] * (*this)[1] * (*this)[7] + (*this)[0] * (*this)[9] * (*this)[7] + (*this)[4] * (*this)[1] * (*this)[11] - (*this)[0] * (*this)[5] * (*this)[11]) / det;
    tmp[12] = ((*this)[12] * (*this)[9] * (*this)[6] - (*this)[8] * (*this)[13] * (*this)[6] - (*this)[12] * (*this)[5] * (*this)[10] + (*this)[4] * (*this)[13] * (*this)[10] + (*this)[8] * (*this)[5] * (*this)[14] - (*this)[4] * (*this)[9] * (*this)[14]) / det;
    tmp[13] = ((*this)[8] * (*this)[13] * (*this)[2] - (*this)[12] * (*this)[9] * (*this)[2] + (*this)[12] * (*this)[1] * (*this)[10] - (*this)[0] * (*this)[13] * (*this)[10] - (*this)[8] * (*this)[1] * (*this)[14] + (*this)[0] * (*this)[9] * (*this)[14]) / det;
    tmp[14] = ((*this)[12] * (*this)[5] * (*this)[2] - (*this)[4] * (*this)[13] * (*this)[2] - (*this)[12] * (*this)[1] * (*this)[6] + (*this)[0] * (*this)[13] * (*this)[6] + (*this)[4] * (*this)[1] * (*this)[14] - (*this)[0] * (*this)[5] * (*this)[14]) / det;
    tmp[15] = ((*this)[4] * (*this)[9] * (*this)[2] - (*this)[8] * (*this)[5] * (*this)[2] + (*this)[8] * (*this)[1] * (*this)[6] - (*this)[0] * (*this)[9] * (*this)[6] - (*this)[4] * (*this)[1] * (*this)[10] + (*this)[0] * (*this)[5] * (*this)[10]) / det;

    return tmp;
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