const youtubeService = require('../../services/youtubeService');

class AuthController {
  async index(req, res) {
    const url = await youtubeService.getCode(res);

    return res.json({ url });
  }

  async callback(req, res) {
    const { code } = req.query;
    youtubeService.getTokensWithCode(code);
    res.redirect('http://localhost:3000/live');
  }
}

export default new AuthController();
