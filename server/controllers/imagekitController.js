 
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

// @desc    Get ImageKit authentication parameters
// @route   GET /api/imagekit-auth
// @access  Private
const getAuth = (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
};

module.exports = { getAuth };