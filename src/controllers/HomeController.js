class HomeController {
  index(req, res) {
    res.json({
      allRight: true,
    });
  }
}

export default new HomeController();
