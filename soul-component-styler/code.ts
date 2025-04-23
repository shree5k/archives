"use strict";

const strokeColor = hexToRgb('#9747FF');
const fillColor = hexToRgb('#0F1014');
const cornerRadius = 20;
const strokeWeight = 2;
const dashPattern = [10, 5]; // Define dash pattern (10px dash followed by 5px gap)
const selectedNodes = figma.currentPage.selection;

if (selectedNodes.length > 0) {
    selectedNodes.forEach(node => {
        // Check if the node supports fills
        if ('fills' in node) {
            node.fills = [{ 
                type: 'SOLID', 
                visible: true, 
                opacity: 1, 
                blendMode: 'NORMAL', 
                color: fillColor 
            }];
        }

        // Check if the node supports strokes
        if ('strokes' in node && (node.type === 'LINE' || node.type === 'RECTANGLE' || node.type === 'FRAME' || node.type === 'COMPONENT_SET' || node.type === 'COMPONENT')) {
            node.strokes = [{ 
                type: 'SOLID', 
                visible: true, 
                opacity: 1, 
                blendMode: 'NORMAL', 
                color: strokeColor 
            }];
            node.strokeWeight = strokeWeight; // Set stroke weight
            
            // Set the dash pattern for dashed strokes
            if ('dashPattern' in node) {
                node.dashPattern = dashPattern; // Set dash pattern (e.g., [10, 5])
            }
        } else if ('strokes' in node) {
            // If there are no strokes, create an empty array for strokes
            node.strokes = [];
        }

        // Set corner radius for applicable nodes
        if (node.type === 'RECTANGLE' || node.type === 'FRAME' || node.type === 'COMPONENT_SET' || node.type === 'COMPONENT') {
            node.cornerRadius = cornerRadius; // Set corner radius
        }
    });
    figma.notify('Component Set is Styled 😎');
} else {
    figma.notify('Select alteast one Component Set 💤');
}

figma.closePlugin();

// Helper function to convert hex color to RGB
function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return { r, g, b };
}