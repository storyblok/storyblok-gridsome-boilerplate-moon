/**
 * @typedef {{path: string, filename: string, url: string}} ImageMetaData
 */

/**
 * @method getImageMetaData
 * @param  {String|ImageMetaData} imageData
 * @return {ImageMetaData}
 */
export const getImageMetaData = imageData => {
  if (typeof imageData === 'string') {
    return {
      filename: '',
      url: imageData,
      path: ''
    }
  }

  if (imageData.path === undefined || imageData.filename === undefined || imageData.url === undefined) {
    return {
      filename: null,
      url: null,
      path: null
    }
  }

  const { path, url, filename } = imageData

  return {
    path,
    url,
    filename
  }
}