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
import Selectors from "tiny_molstructure/selectors";
import config from 'core/config'
import {get_string as getString} from 'core/str';
import {component} from 'tiny_molstructure/common';
import notification from "core/notification";
import Ajax from 'core/ajax';
import {getDraftItemId} from 'editor_tiny/options';

/**
 * @module     tiny_molstructure/ketcher
 * Visual Mathquill editor input instanciation
 */

export const insertImage = async(iframeBody, editor) => {
  let divContent = '';
  // Getting the viewer canvas.
  let ketcherViewer = iframeBody.contentDocument.querySelector(Selectors.elements.canvas.ketcherviewId);
  const imgDataURL = ketcherViewer.toDataURL('image/svg');
  const itemId = getDraftItemId(editor);
  const fileReturn = await createAnUploadImageFile(itemId, imgDataURL);
  // To retrieve image.
  divContent = "<img src=\"" + fileReturn.fileUrl + "\" alt=\"ChemDoodle PNG\"/>";
  editor.insertContent(divContent);
};

export const createAnUploadImageFile = async (itemId, imageDataUrl) => {
  const generatedImageResult = await new Promise( resolve => {
    return Ajax.call([{
      methodname: 'tiny_molstructure_generate_store_image',
      args: {
        'itemId': itemId,
        'imageDataUrl': imageDataUrl
      },
      done : result => {
        resolve(result);
      },
      fail: notification.exception || failCallback('Error while generated image.')
    }]);
  });
  return generatedImageResult;
};

function base64ToBlob(base64String, contentType = '') {
  const byteCharacters = atob(base64String);
  const byteArrays = [];

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays.push(byteCharacters.charCodeAt(i));
  }

  const byteArray = new Uint8Array(byteArrays);
  return new Blob([byteArray], { type: contentType });
}