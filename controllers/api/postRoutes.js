// dependencies
const router = require('express').Router();
const { Post } = require('../../models');

// show posts when logged in, or direct to log in
router.post('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const postData = await Post.create({
                title: req.body.title,
                text: req.body.text,
                user_id: req.session.user_id
            })
            res.status(200).json(postData);
        } else {
            res.redirect('/login');
        }
        // error handling
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete by id
router.delete('/:id', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const postData = await Post.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(postData);
        } else {
            res.redirect('/login');
        }
        // error handling
    } catch (err) {
        res.status(400).json(err);
    }
});

// update by id
router.put('/:id', async (req,res) => {
    try{
        if (req.session.logged_in) {
            const postData = await Post.update({
                title: req.body.title,
                text: req.body.text
                },
                {
                where: {
                    id: req.params.id
                },  
            })
            res.status(200).json(postData);
        } else {
            res.redirect('/login');
        }
        // error handling
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;