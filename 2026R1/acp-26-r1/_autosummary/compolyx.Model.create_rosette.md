# create_rosette

<a id="compolyx.Model.create_rosette"></a>

#### Model.create_rosette(name, id=None, origin=(0.0, 0.0, 0.0), dir1=(1.0, 0.0, 0.0), dir2=(0.0, 1.0, 0.0), rosette_type='PARALLEL', edge_set=None, show=False)

Create a new rosette.

* **Parameters:**
  - name: The name of the rosette.
  - id: ID (optional).
  - origin: The origin of the rosette.
  - dir1: Direction 1 of the rosette.
  - dir2: Direction 2 of the rosette.
  - rosette_type: Type of the rosette (`PARALLEL`, `RADIAL`, `CYLINDRICAL`, `SPHERICAL`, or `EDGE_WISE`).
  - edge_set: Edge set to be used in rosette.
  - show: Whether the newly created rosette is shown in the scene or 3D window.
* **Returns:**
  The created rosette.
* **Example:**
  ```pycon
  >>> rosette_1 = model.create_rosette('Rosette.1',
                                       origin=(0.,0.,0.),
                                       dir1=(1.,0.,0.),
                                       dir2=(0.,1.,0.),
                                       rosette_type='PARALLEL')
  ```
