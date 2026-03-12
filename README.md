# tempLOCK for Adobe InDesign

A simple ExtendScript that temporarily locks selected items in InDesign for a set duration (default: 5 seconds) and then automatically unlocks them in the background. Perfect for temporarily freezing objects in place without having to remember to manually unlock them later.

## Installation

1. Download the `tempLOCK.jsx` file from this repository.
2. Open Adobe InDesign.
3. Go to **Window** > **Utilities** > **Scripts** to open the Scripts panel.
4. Right-click the **User** folder and select **Reveal in Finder** (Mac) or **Reveal in Explorer** (Windows).
5. Open the `Scripts Panel` folder that appears and move the `tempLOCK.jsx` file inside it. 
6. The script will now instantly appear in your InDesign Scripts panel.

## Setting up a Keyboard Shortcut

To get the most out of this script, you should assign it to a quick keyboard shortcut (like `L` or `Cmd/Ctrl + L`).

1. In InDesign, go to **Edit** > **Keyboard Shortcuts**.
2. If you are currently using the `[Default]` set, click **New Set...** to create a custom shortcut profile.
3. Under the **Product Area** dropdown menu, select **Scripts**.
4. Scroll down the Commands list and click on `User: tempLOCK.jsx`.
5. Click inside the **New Shortcut** box and press your desired shortcut key (e.g., `L`).
6. Click **Assign**, then click **OK**. 

*Note: If you assign this to a default key like `L` (which defaults to the Ellipse Tool), InDesign will warn you that you are overriding an existing shortcut. Simply click Accept/Yes.*

## Customizing the Timer

By default, the script keeps items locked for 5 seconds. If you want to change this duration:
1. Open the `tempLOCK.jsx` file in any plain text editor (like TextEdit on Mac or Notepad on Windows).
2. Look for the variable near the top: `var lockSeconds = 5;`
3. Change the `5` to however many seconds you prefer.
4. Save the file.
