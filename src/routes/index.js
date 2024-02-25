import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index', { title: 'Menu' }));
router.get('/about', (req, res) => res.render('about', { title: 'Informacion sobre Messi' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Dejanos tu contacto' }));

export default router;
