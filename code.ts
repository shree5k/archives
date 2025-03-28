// Show UI
figma.showUI(__html__, { width: 350, height: 380, themeColors: true });

// Listen for messages from the UI
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'calculate') {
        const { firstNumber, secondNumber, includeFileInfo } = msg;

        // Calculate percentage
        const percentage = (100 / firstNumber * secondNumber).toFixed(2);
        
        let resultMessage = `Percentage: ${percentage}%`;

        let fileName = '';
        let fileLink = '';

        // Include file name and link if toggled on
        if (includeFileInfo) {
            fileName = figma.root.name; // Get the current file name
            const fileKey = figma.fileKey; // Ensure you have enabled private API access in manifest
            fileLink = `https://www.figma.com/file/${fileKey}`; // Constructing the URL

            resultMessage += `\nFile Name: ${fileName}\nFile Link: ${fileLink}`;
        }

        // Send calculated data back to the UI
        figma.ui.postMessage({
            type: 'calculationResult',
            percentage
        });

        if (includeFileInfo) {
            const resultNode = figma.createText();

            // Load the font before setting characters
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });

            resultNode.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

            // Set characters for the text node
            resultNode.characters = resultMessage;

            // Position the new text node below the selected text node
            const selection = figma.currentPage.selection;

            if (selection.length > 0) {
                const textNode = selection[0] as TextNode;
                resultNode.x = textNode.x;
                resultNode.y = textNode.y + textNode.height + 10; // Position below selected node
                figma.currentPage.appendChild(resultNode); // Append the new text node to the page
            } else {
                // If no selection, position at default coordinates (optional)
                resultNode.x = 100; 
                resultNode.y = 100; 
                figma.currentPage.appendChild(resultNode); // Append regardless of selection
            }
        }

        // Rename selected layer if it exists
        const selection = figma.currentPage.selection;
        if (selection.length > 0) {
            const selectedNode = selection[0];

            // Rename the selected node with the "Soul Reuse" prefix
            selectedNode.name = `❖ Components [ Soul Reuse Score: ${percentage}% ]`;
            console.log(`Renamed node to: ${selectedNode.name}`); // Debugging output

        } else {
            console.warn("No selection found."); // Debugging output if no selection is made
        }
    }
};