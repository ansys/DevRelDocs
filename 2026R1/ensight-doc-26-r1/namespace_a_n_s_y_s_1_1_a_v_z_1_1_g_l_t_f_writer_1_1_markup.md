# Namespace ANSYS::AVZ::GLTFWriter::Markup

<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup"></a>

![][C++]


[Markup](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup) attributes.



## Enumeration types

<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a794f1c879ddc0e820c70c59337f7cddb"></a>
### Enumeration type MarkupLineType

![][public]



```cpp
enum MarkupLineType {
  MLT_LINE,
  MLT_ARROW,
  MLT_BALL
}
```




Symbol at end of markup line.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a794f1c879ddc0e820c70c59337f7cddba75ad730298aa90acc284f97d220b2229"></a>
#### Enumerator MLT\_LINE

No symbol.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a794f1c879ddc0e820c70c59337f7cddbac2d135c084ba4e828e4d8e87a686a337"></a>
#### Enumerator MLT\_ARROW

Arrow.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a794f1c879ddc0e820c70c59337f7cddbaa03361121b650b7b511746ec30eb90c5"></a>
#### Enumerator MLT\_BALL

Ball.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eac"></a>
### Enumeration type MarkupTextAttachmentType

![][public]



```cpp
enum MarkupTextAttachmentType {
  MTAT_AUTO,
  MTAT_NW,
  MTAT_N,
  MTAT_NE,
  MTAT_W,
  MTAT_CENTER,
  MTAT_E,
  MTAT_SW,
  MTAT_S,
  MTAT_SE
}
```




Anchor point relative to position.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eaca794db9a54ba5791e985e7bd26c82679e"></a>
#### Enumerator MTAT\_AUTO

Label is automatically positioned relative to x,y.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eaca3fa46baf437fb0dee21f7a519f4d4b9d"></a>
#### Enumerator MTAT\_NW

x,y is NW corner of label.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eacaf3d657ea891d3d2083355ba86139d3fe"></a>
#### Enumerator MTAT\_N

Label is centered about x, and below y.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eacaef80568d8ed64adeb447f279a78b3ed8"></a>
#### Enumerator MTAT\_NE

x,y is NE corner of label.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eaca4b80e554ebec5a62e1cd683e37bbd539"></a>
#### Enumerator MTAT\_W

Label is to right of x, and centered about y.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eacacd1cb140f1aa52d23a2e6377f449ed3f"></a>
#### Enumerator MTAT\_CENTER

Label is centered about x,y.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eaca1c4b886428d76a3847d911bea8f7076b"></a>
#### Enumerator MTAT\_E

Label is to left of x, and centered about y.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eaca6ebb2c24b9e1951591de14274ffca9c3"></a>
#### Enumerator MTAT\_SW

x,y is SW corner of label.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eaca82d7ccb18b588081c2028ffa31c4c80a"></a>
#### Enumerator MTAT\_S

Label is centered about x, and about y.



<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eaca6a8c1d8d53629b2db505de747dac18bc"></a>
#### Enumerator MTAT\_SE

x,y is SE corner of label.



[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)