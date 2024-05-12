const ContactsRepository = require("../repositories/ContactsRepository")

class ContactController {
    async index(request, response) {
        const { orderBy } = request.query;
        
        const list = await ContactsRepository.findAll(orderBy);
        
        return response.json(list);
    }

    async store(request, response) {
        const { 
            name,
            email,
            phone,
            category_id,
        } = request.body;

        const contactExists = await ContactsRepository.findByEmail(email);

        if(contactExists) 
            return response.status(400).json({ "error": "email is already exists" });

        const contact = await ContactsRepository.create({
            name, email, phone, category_id
        });

        return response.json(contact);
    }

    async update(request, response) {
        const { id } = request.params;
        const { 
            name,
            email,
            phone,
            category_id,
        } = request.body;

        const contactExists = await ContactsRepository.find(id);
        const contactByEmail = await ContactsRepository.findByEmail(email);
        
        if(!contactExists) 
            return response.status(400).json({ "error": "account not exists" });
        
        if(contactByEmail && contactByEmail.id !== id) 
            return response.status(400).json({ "error": "This e-mail is already in use" });

        const contact = await ContactsRepository.update(id, {
            name, email, phone, category_id
        });

        return response.json(contact);
    }

    async show(request, response) {
        const { id } = request.params;

        if(!id) response.status(404).json({ "error": "Contact not found" });

        const contact = await ContactsRepository.find(id);
        
        return response.json(contact);
    }

    async delete(request, response) {
        const { id } = request.params;

        if(!id) response.status(404).json({ "error": "Id is required" });

        await ContactsRepository.delete(id);
        
        return response.sendStatus(204);
    }
}

module.exports = new ContactController();