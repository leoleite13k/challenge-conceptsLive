const youtubeService = require('../../services/youtubeService');

class LiveController {
  async index(req, res) {
    console.log('Redirecionado');
    const response = await youtubeService.findLive();
    return res.json(response);
  }
}

export default new LiveController();
