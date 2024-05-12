const CategoriesRepository = require("../repositories/CategoriesRepository")

class CategoryController {
    async index(request, response) {
        const { orderBy } = request.query;

        const list = await CategoriesRepository.findAll(orderBy);

        return response.json(list);
    }

    async store(request, response) {
        const {
            name,
        } = request.body;

        const contactExists = await CategoriesRepository.findByName(name);

        if(contactExists)
            return response.status(400).json({ "error": "Name is already exists" });

        const contact = await CategoriesRepository.create({
            name
        });

        return response.json(contact);
    }

    async update(request, response) {
        const { id } = request.params;
        const {
            name,
        } = request.body;

        const categotyExists = await CategoriesRepository.find(id);

        if(!categotyExists)
            return response.status(400).json({ "error": "Category not exists" });

        const category = await CategoriesRepository.update(id, {
            name
        });

        return response.json(category);
    }

    async show(request, response) {
        const { id } = request.params;

        if(!id) response.status(404).json({ "error": "Category not found" });

        const category = await CategoriesRepository.find(id);

        return response.json(category);
    }

    async delete(request, response) {
        const { id } = request.params;

        if(!id) response.status(404).json({ "error": "Id is required" });

        await CategoriesRepository.delete(id);

        return response.sendStatus(204);
    }
}

module.exports = new CategoryController();
