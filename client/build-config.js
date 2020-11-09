'use strict';

module.exports = {
    destinationPath: './build/',
    editor: '@ckeditor/ckeditor5-editor-classic/src/classic',
    plugins: [
        '@ckeditor/ckeditor5-autoformat/src/autoformat',
        '@ckeditor/ckeditor5-basic-styles/src/bold',
        '@ckeditor/ckeditor5-basic-styles/src/italic'
        
    ],
    skin: '@ckeditor/ckeditor5-lark', // We support just one skin now, so this will be added later.
    moduleName: 'ClassicEditor', // The name of the global defined by the UMD format.
    // Predefined editor options.
    editorConfig: {
        toolbar: [ 'image', 'headings' ]
    }
};