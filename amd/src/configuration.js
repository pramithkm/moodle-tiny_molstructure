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
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Tiny tiny_molstructure Configuration.
 *
 * @module      tiny_molstructure/configuration
 * @copyright   2024 University of Strasbourg unistra.fr
 * @author Céline Pervès <louis.plyer@unistra.fr>
 * @author Louis Plyer <louis.plyer@unistra.fr>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {
    buttonName,
} from './common';

import {
    addMenubarItem,
    addToolbarButton,
} from 'editor_tiny/utils';

const configureToolbar = (toolbar) => {
    return addToolbarButton(toolbar, 'advanced', buttonName);
};

export const configure = (instanceConfig) => {
    // Update the instance configuration to add the molstructure menu option to the menus and toolbars.
    return {
        menu: addMenubarItem(instanceConfig.menu, 'insert', buttonName),
        toolbar: configureToolbar(instanceConfig.toolbar),
    };
};
