// Imports
const { Router } = require('express');
// Controllers
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router()

// Contacts
router.get(
    "/contacts",
    ContactController.index,
);

router.post(
    "/contacts", 
    ContactController.store,
);

router.put(
    "/contacts/:id", 
    ContactController.update,
);

router.get(
    "/contacts/:id", 
    ContactController.show,
);

router.delete(
    "/contacts/:id", 
    ContactController.delete,
);

// Categories
router.get(
    "/categories",
    CategoryController.index,
);

router.post(
    "/categories", 
    CategoryController.store,
);

router.put(
    "/categories/:id", 
    CategoryController.update,
);

router.get(
    "/categories/:id", 
    CategoryController.show,
);

router.delete(
    "/categories/:id", 
    CategoryController.delete,
);

// router.delete("/example", (req, res) => {
//     const { id } = req.params
// });

module.exports = router;
