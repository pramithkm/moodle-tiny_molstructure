<?php
// This file is part of Moodle - http://moodle.org/
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
 * This file contains a controller for receiving Tiny Equation service requests
 *
 * @package     tiny_molstructure
 * @copyright   2024 University of Strasbourg unistra.fr
 * @author Céline Pervès <louis.plyer@unistra.fr>
 * @author Louis Plyer <louis.plyer@unistra.fr>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

$functions = array(
    'tiny_molstructure_generate_store_image' => array(
        'classname' => 'tiny_molstructure\external\image_generator',
        'methodname' => 'execute',
        'description' => 'Generate Image from ImageDataUrl string',
        'type' => 'write',
        'ajax' => true,
        'classpath' => 'lib/editor/tiny/plugins/molstructure/classes/external/image_generator.php',
    ),
);
