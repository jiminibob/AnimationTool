// models
import { AssetModel } from 'model/AssetModel';


/*
================================================================================
    loads an image from the source
    returns or rejects the image via promis on complete
================================================================================
*/

export const loadImage = (src) => {

    return new Promise((response, reject) => {

        // create image
        let img = new Image();

        // attache events
        img.onload = () => { response(img) }
        img.onerror = (e) => { reject(e) }

        // gogogo
        img.src = src;
    })
}

/*
================================================================================
    open file selection dialogue to allow user to upload images
    returns or rejects the results via promise on complete
================================================================================
*/

export const selectImageFilesToUpload = () => {
    return new Promise((response, reject) => {

        // create dummy input element to trigger dialogue
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;

        // we only want images
        input.accept = "image/gif, image/jpeg, image/png";

        // listen for the done action
        input.onchange = (e) => {

            // grab all selected files
            let files = e.target.files;
            if (files && files.length > 0) {

                let results = [];
                for (var i = 0; i < files.length; i++) {

                    // read the uploaded file
                    readUploadedFile(files[i])

                        .then((result) => {

                            // once the file has been read, we can load it in
                            loadImage(result.content)

                                .then((image) => {

                                    // now we finally have an image, we can create it as an asset
                                    const asset = new AssetModel({
                                        name: result.name,
                                        src: image.src,
                                        width: image.naturalWidth,
                                        height: image.naturalHeight
                                    });

                                    // add asset to results
                                    results.push(asset);

                                    // if the length of results matches the length of files, we are done :)
                                    if (results.length === files.length) {
                                        response(results);
                                    }

                                })

                        })
                }


            }
        }

        input.click();


    })
}

/*
================================================================================
    read upload file data 
    returns or rejects the results via promise on complete
================================================================================
*/

export const readUploadedFile = (file) => {
    return new Promise((response, reject) => {

        let reader = new FileReader();
        reader.onload = () => { response({ name: file.name, content: reader.result }) };
        reader.readAsDataURL(file);

    })
}