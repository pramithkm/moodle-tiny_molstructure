// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

import {getButtonImage} from 'editor_tiny/utils';
import {get_string as getString} from 'core/str';
import {component, buttonName, icon} from 'tiny_molstructure/common';
import {handleAction} from 'tiny_molstructure/ui';

/**
 * Tiny Molstructure plugin commands.
 *
 * @module      tiny_molstructure/commands
 * @copyright   2024 University of Strasbourg unistra.fr
 * @author Céline Pervès <louis.plyer@unistra.fr>
 * @author Louis Plyer <louis.plyer@unistra.fr>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

export const getSetup = async() => {
    const [
        buttonText,
        buttonImage,
    ] = await Promise.all([
        getString('buttontitle', component),
        getButtonImage('icon', component),
    ]);

    return (editor) => {
            // Register the Equation Icon.
            editor.ui.registry.addIcon(icon, buttonImage.html);

            // Register the Menu Button as a toggle.
            // This means that when highlighted over an existing Equation element it will show as toggled on.
            editor.ui.registry.addToggleButton(buttonName, {
                icon,
                tooltip: buttonText,
                onAction: () => {
                    handleAction(editor);
                },
            });

            // Add the Equation Menu Item.
            // This allows it to be added to a standard menu, or a context menu.
            editor.ui.registry.addMenuItem(buttonName, {
                icon,
                text: buttonText,
                onAction: () => handleAction(editor),
            });
        };
    };
