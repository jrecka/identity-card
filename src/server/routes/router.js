import app from './../../server/main';
import HomePage from './HomePage';
const router = app.router();

router.get('/', (request, response) => {
    response.render(HomePage);
});

module.exports = router;