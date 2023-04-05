// Checks if a files contains an specific extension and return a boolean

const isImage = filename => {
   let allowedImages = ['jpg', 'png', 'svg']

   return !!allowedImages.find(ext => filename.includes(ext))
}

console.log(isImage('filename.svg'))