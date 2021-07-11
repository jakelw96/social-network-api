const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    addReaction,
    deleteReaction,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controllers');

// /api/thoughts
router
    .route('/')
    .get(getAllThought)

// /api/thoughts/:userId
router
    .route('/:userId')
    .post(createThought)

// /api/thoughts/users/:thoughtId
router
    .route('/users/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)


// /api/thoughts/:thoughtId/reactions/
router
    .route('/:thoughtId/reactions/')
    .post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;