# Colors

## Color palettes and their usage

Details for all color palettes (including Hex and RGB info) are included in a separate Excel file ([Ansys Design Language Color Palettes]([href="https://github.com/ansys/DevRelPublic/raw/main/Downloads/Discovery/2024R2/Ansys%20Design%20Language%20Color%20Palettes%20-%20Discovery.xlsx])). Guidelines for using the palettes are as follows:

| **Application**                                                                                    | **Palette usage**                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| UI elements such as buttons panel backgrounds indicators of status and state  NOT icons or cursors | Main UI Control Colors per Theme All UI Control Colors  The “Main UI Control Colors per Theme” palette includes the main colors that are used in each theme and how they are used (see also Figures 1-4 below).  If you need more colors, choose from the “All UI Control Colors” palette. For guidance on colors with specific meanings, see the semantic colors in Figure 5 below.                                                                                   |
| Icons and cursors                                                                                  | Theme-Dependent Icon Colors Additional Colors  Use the “Theme-Dependent Icon Colors” palette for icon colors that should change with the theme, as described in [Theme-Dependent Coloring](#theme-dependent-coloring) If you need more colors, choose them from the “Additional Colors” palette.                                                                                                                                                                       |
| Predefined colors the user can assign                                                              | User-Assignable Colors Additional Colors  Use the “User-Assignable Colors” palette as the predefined colors in the color picker that appears in a product when a user has the option to choose a color explicitly (e.g., for a chart line). See [Assignable Colors](#_Assignable_Colors) for details.  There is a vivid palette and a muted palette.  If you need to include more colors for the user to choose from, use colors from the “Additional Colors” palette. |
| Colormaps and legends for data visualization                                                       | 3D Data Visualization Colors Default: Turbo,  Alternate: Cool-warm                                                                                                                                                                                                                                                                                                                                                                                                   |

![](media/6aa7893d6f921ba3ebc73abe54fbb2cd.png)

Figure 1: Main Colors Used in the Dark Theme

![](media/67fac04e713c938d2a8b99f1948f789a.png)

Figure 2: Main Color Gradients Used in the Dark Theme

![](media/f39f861bc210d3f49b70f4112c94ab01.png)

Figure 3: Main Colors Used in the Light Theme

![](media/f39f861bc210d3f49b70f4112c94ab01.png)

Figure 4: Main Color Gradients Used in the Light Theme

![](media/bab162d004dcbfa748e2b2dab56708eb.png)

Figure 5: Semantic Colors Used in All Themes

![](media/de7c121e5610da7df57d11f9933d1ee1.png)

Figure 6: Example of Color Usage in a Product UI (Dark Theme)

![](media/ecc796e2c7281a7eb54f737058d5aea8.png)

Figure 7: Example of Color Usage in a Product UI (Light Theme)

## Font colors

-   For the main UI font colors, see Figures 1 and 3 in [Color palettes and their usage](#color-palettes-and-their-usage).
-   For console/scripting text, use the corresponding colors in the dark and light themes of Microsoft Visual Studio.
-   For overlay help text, see Figures 1 and 5 in [Color palettes and their usage](#color-palettes-and-their-usage).

## Icon and cursor colors

### Icon colors

Some of the colors used for icons are constant across themes, while others [change between themes](#theme-dependent-coloring) to better match the altered palette. Certain colors used in the icons have assigned meanings, which are discussed in detail in the [Icons section](#themes-and-icon-colors). See [Color palettes and their usage](#color-palettes-and-their-usage) for details about which colors are to be used in icons.

![](media/2207d4cba54a3aa3cf51261e68c6654d.png)

Figure 8: Shades of Green and White as Examples of Icon Colors.

### Cursor colors

The cursor must always be visible, no matter the color of the UI element below it. Unlike stationary icons, cursors move about the screen and are designed to maintain good contrast against any possible background.

In most cases, the cursor is white with a black outline. The white stands out strongly on dark backgrounds, while the black outline ensures that the cursor will remain visible in a light setting. In certain situations where there’s a need to distinguish between a pair of tools that are similar in functionality and use the same shape cursor (e.g., Pull and Move tools for geometry modeling), you can reverse the cursor color treatment, so the fill color is black, and the outline is white. This change to the cursor reminds the user of the tool they are using as they make their selection.

Cursors can also have a thin outline of a static color that maintains the cursor’s shape against varying backgrounds or UI elements. The outline alone might not be visible against backgrounds of similar color, but the infill of a contrasting color makes the cursor visible.

![Shape Description automatically generated](media/a825507d518f8a74b8946943909cc41a.png)

Figure 9: Cursor Outline Ensures Visibility on Different Backgrounds

### Theme-dependent coloring

An icon may need to use different colors based on the selected theme. To ensure that the icons are rendered appropriately in all themes, the designer must create a separate version of the icon for each theme. Based on the active theme, the appropriate version of the icon is used.

The following example shows how the light and dark versions of an icon would look:

![A picture containing application Description automatically generated](media/c862306d16b686dc308e84b077b4ae26.jpeg)

Figure 10: Example of Theme-Dependent Coloring in an Icon

The theme-dependent colors for icons are shown below.

![Graphical user interface, application Description automatically generated](media/9a75965ecd610c57cd32669e94be8628.jpeg)

Figure 11: Theme-Dependent Colors for Icons

## Status colors

These are colors that have been assigned meanings corresponding to the type of information being conveyed in a message or other UI element. As specified in the Main UI Control Colors per Theme palette described in [Color palettes and their usage](#color-palettes-and-their-usage):

-   blue for information
-   green for good
-   red for errors
-   yellow for warnings

Note that these colors reinforce a message, but they should not be the only cue conveying information since a portion of the population has some form of color vision deficiency.

![Icon Description automatically generated](media/014f07a3587f599480b221185fb73bf0.png)

Figure 12: Red for Errors, Yellow for Warnings, Blue for Information

## Background colors

Background colors vary by theme (see [Color palettes and their usage](#color-palettes-and-their-usage)), and they may include transparency or gradient effects. They cover most of the UI and strongly influence the rest of the palette, as other elements must adjust to maintain proper contrast against the theme’s base colors.

![](media/a295e07d070b846ac715fc30dee0b8ff.png)

Figure 13: Background Colors are Theme-Dependent

## Assignable colors

In most products, there are situations where the user can choose colors as part of their workflow. Examples include the colors of chart lines representing different data series and the colors of the bodies of a 3D geometric model. There are two color palettes offered for these situations: the user can choose from a vivid color palette or a muted color palette. See [Color palettes and their usage](#color-palettes-and-their-usage) for details.

*![Chart, line chart Description automatically generated](media/5136fb65515bcab1baa1a912dc7af2fe.png)*

Figure 14: Chart Lines with Colors Assigned by the User

Note that 3D geometry models also have colors assigned to their bodies based on their defined materials; the user can choose whether to view the material-based colors or the user-specified colors. In either case, colors on the 3D model change to indicate what the user has selected, as indicated in the Graphical Selection row of Figure 5.

![](media/94f43b36a7f00ed6718bc7d12ab65cb4.png)

Figure 15: Body Colors Assigned by the User

![](media/2ec880c77f6ee1a2d7513b5e62a76921.png)

Figure 16: Body Colors Based on Assigned Materials

## 3D data visualization colors

Colormaps are used to graphically represent numerical data, such as simulation results displayed using streamlines, contours, or vectors. Alternate colormap options are provided for users with different preferences and needs. These colormaps can be visualized as continuous or discrete rendering (see images below).

Default colormap: Turbo   
Alternate colormap: Cool-warm

![A screenshot of a color chart Description automatically generated](media/39f5a04a07792db9bf8aa52aec5278d7.png)  
*Default and alternate colormaps (see the Color Palettes Excel File for RGB values)*

![A computer generated image of a mechanical engine Description automatically generated](media/4b4f0ce0983159ce1a484c6647432700.png)

*Turbo colormap: continuous rendering example*

![A computer screen shot of a machine Description automatically generated](media/a8078e01b621f9d735aa7d46b931e45e.png)

*Cool-warm colormap: continuous rendering example*

![A computer generated image of a machine Description automatically generated](media/3d3d02ff83f3f0827340abb5dce28eee.png)

*Turbo colormap: discrete rendering example*

![A computer screen shot of a machine Description automatically generated](media/7b6504754bc8a6cf7d1c03381b0c4800.png)

*Cool-warm colormap: discrete rendering example*

## Lighting and gradients

The shading of 3D icons and other 3D elements in the UI (including a 3D model, if relevant) are dictated by an imaginary light source placed at the top left. This position is based on the [historical convention](https://www.frontiersin.org/articles/10.3389/fpsyg.2018.00454/full) followed in Western art and [studies](https://pubmed.ncbi.nlm.nih.gov/15729910/) in human perception.

The highlights are cast on the top and left-side features of the icons and shadows are cast on the bottom and right-side features of the icons. It is imperative to be consistent with the shading of 3D elements; otherwise, the user will be confused by the inconsistent visual perception of the scene.

*![A picture containing icon Description automatically generated](media/74b6b0199c3813675c0ffb6dc1f505b8.png)*

Figure 17: Effect of Light Source on Highlights and Shadows

*![A picture containing graphical user interface Description automatically generated](media/d110fbd34d81e58cc87561615f30f123.png)*

Figure 18: Consistent Highlight and Shadows Across a Group of Icons

In a 3D model-based application, slight gradient background coloring should be used for the scene in order to provide the necessary depth for an immersive experience. In other types of applications, a flat background color that contrasts well with the foreground UI elements should be used. (See [Color palettes and their usage](#color-palettes-and-their-usage) for gradient and flat background colors.)

![A picture containing text, electronics Description automatically generated](media/f1c477790250560acd6cb5603e05ffa9.png)

Figure 19: Gradient Background for 3D Model-Based Application

