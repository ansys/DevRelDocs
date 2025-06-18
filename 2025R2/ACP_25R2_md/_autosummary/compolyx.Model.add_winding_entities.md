# add_winding_entities

<a id="compolyx.Model.add_winding_entities"></a>

#### Model.add_winding_entities(axial_direction, origin, reference_radius, layers, max_angle_with_thickness_correction=90.0, number_of_digits_angle=3)

Generates a winding layup for an axisymmetric body.

The function uses the origin (a point on the axis of symmtery),
the axial_direction, and the reference radius
to automatically generate a winding layup for an axisymmetric body.
The radius is defined as the minimal distance from any point on the surface
to the axis of symmetry. The reference radius is equal to the radius, where
the layers have the nominal thickness and angle. For a typical winding body, this is
the radius in the cylindrical region.

The thickness correction of each layer is calculated with:
thickness_correction = reference_radius / radius

The angle is calculated based on a geodesic path for which radius\*sin(angle) is constant:
angle = arcsin( const / radius) if const / radius in [-1,1]
angle = sign(angle) \* 90° otherwise

with const = reference_radius \* sin(nominal_angle)

Each layer is a dict with the following properties:
: * fabric: Fabric of the layer (Stackups and Sublaminates are not supported).
  * angle: Nominal angle at Reference Radius with respect to the axis of symmetry (in degree).
  * selection_rule_limits: A dictionary with the entries “upper” and “lower”
    that define the extent of the plies in axial direction.
    The “upper” and “lower” values are interpreted as distance from the origin along
    the axial_direction.
  * add_mirrored_ply: If true, an addtional layer with the same properties but
    a negative angle is generated. This implies that the resulting thickness is
    twice the original thickness of the layer.

The function generates the following objects:
: - A cylindrical rosette.
  - An oriented selection set which defines a reference direction along the axial
    direction of the axisymmetric body.
  - A lookup table with the thickness corrections and angles.
  - A template selection rule if limits are defined.
  - A modeling group with the plies.

* **Parameters:**
  - axial_direction: Direction vector for the axis of symmetry.
  - origin: Point on the axis of symmetry.
  - reference radius: Reference radius at which the plies are assumed to have the
    : nominal angle and the nominal thickness.
  - layers: List of dicts with the following entries:
    : - fabric: Fabric of the layer (Stackups and Sublaminates are not supported).
      - angle: Nominal angle at Reference Radius with respect to the axis of symmetry (in degree).
      - selection_rule_limits: A dictionary with the entries “upper” and “lower”
        that define the extent of the plies in axial direction.
        The “upper” and “lower” values are interpreted as distance from the origin along
        the axial_direction.
      - add_mirrored_ply: If True an addtional layer with the same properties but
        a negative angle is generated. This implies that the resulting thickness is
        twice the original thickness of the layer.
  - number_of_digits_angle, optional, default: 3: Lookup tables for the angles are
    : shared between different layers with similar angles.
      Angles which are equal until number_of_digits_angle after the
      decimal point share the same lookup table.
  - max_angle_with_thickness_correction: The thickness for layers where abs(angle) >
    : max_angle_with_thickness_correction is not
      corrected. These layers always have the nominal
      layer thickness.
* **Usage:**
  ```pycon
  >>> model.add_winding_entities(
                    axial_direction=(1.0, 0.0, 0.0),
                    origin=(0.0, 0.0, 0.0),
                    reference_radius=0.1,
                    layers=[{
                        "fabric": db.models['ACP Model'].material_data.fabrics['Fabric.1'],
                        "angle": 30.0,
                        "selection_rule_limits": {
                            "upper": 1,
                            "lower": 0.0
                            },
                        "add_mirrored_ply": True
                    }]
                )
  ```
* **Returns:**
  Dict of generated objects.
